/**
 * Lead delivery layer
 * -------------------
 * This is the single seam where lead data leaves the app. Every function
 * here sends a notification email via the shared mailer utility
 * (src/lib/mailer.ts) to the configured EMAIL_TO address.
 *
 * The calling API routes already validate input with Zod before this layer
 * runs, so payload shapes here can be trusted. Delivery failures are caught
 * inside sendLeadEmail and never thrown, so a down mail server degrades to
 * a logged failure rather than a 500 that loses the submission's data from
 * view — the route still logs the raw payload as a fallback record.
 */

import type { BrandInquiryValues, CreatorApplicationValues, ContactValues, NewsletterValues } from "./validations";
import { sendLeadEmail, type SendMailResult } from "./mailer";
import { buildLeadEmail } from "./emailTemplates";

export async function deliverBrandInquiry(payload: BrandInquiryValues): Promise<SendMailResult> {
  const { html, text } = buildLeadEmail({
    heading: "New Brand Inquiry",
    fields: [
      { label: "Brand Name", value: payload.brandName },
      { label: "Contact Person", value: payload.contactName },
      { label: "Email", value: payload.email },
      { label: "Phone", value: payload.phone },
      { label: "Brand Website / Instagram", value: payload.website },
      { label: "Campaign Goal", value: payload.campaignGoal ?? "" },
      { label: "Estimated Budget", value: payload.budget ?? "" },
      { label: "Message", value: payload.message ?? "" },
      { label: "Source Blog Article", value: payload.sourceArticle ?? "" },
      { label: "Source Article Category", value: payload.articleCategory ?? "" },
      { label: "CTA Topic / Market", value: payload.ctaTopic ?? "" },
      { label: "CTA Position", value: payload.ctaPosition ?? "" },
      { label: "Entry Page", value: payload.leadSource ?? "" },
    ],
    source: "Kudozz Website - For Brands Form",
  });

  const result = await sendLeadEmail({
    subject: "New Brand Partnership Inquiry | Kudozz",
    html,
    text,
    replyTo: payload.email,
  });

  if (!result.sent) {
    console.error("[lead:brand-inquiry] email delivery failed, raw payload:", JSON.stringify(payload));
  }

  return result;
}

const CREATOR_SHEET_URL =
  process.env.CREATOR_SHEET_WEBHOOK_URL ??
  "https://script.google.com/macros/s/AKfycbyAhp3iWVAsPQDtgpiIPECQGaPbsp927v9GUlfGt_1iwxB3gV1_RWB78Z80P0aT54v7Cg/exec";

/** Joins multi-select answers the way Google Forms does, swapping "Other" for the typed value. */
function joinAnswers(values: readonly string[], other?: string): string {
  return values
    .map((v) => (v === "Other" ? (other ? `Other: ${other}` : "Other") : v))
    .join(", ");
}

/** Row for the creator onboarding sheet, keyed by the sheet's exact column headers. */
export function buildCreatorSheetRow(payload: CreatorApplicationValues): Record<string, string> {
  return {
    Timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: false }),
    "Full Name": payload.fullName,
    "Email Address": payload.email,
    "Contact Number (WhatsApp Preferred)": payload.phone,
    "Instagram Profile Link": payload.instagramUrl,
    "YouTube Channel Link": payload.youtubeUrl ?? "",
    Gender: payload.gender,
    "Current City": payload.city,
    "Current State": payload.state,
    "Which content categories do you create content in?": joinAnswers(payload.categories, payload.categoriesOther),
    "Which languages do you create content in?": joinAnswers(payload.languages, payload.languagesOther),
    "What types of brand collaborations are you interested in?": joinAnswers(payload.collaborationTypes),
    "Your Price for 1 Instagram Reel (₹)": payload.priceReel ?? "",
    "Your Price for 1 Instagram Story (₹)": payload.priceStory ?? "",
    "Your Price for 1 YouTube Long-Form Video (₹)": payload.priceYoutubeLong ?? "",
    "Your Price for 1 YouTube Short (₹)": payload.priceYoutubeShort ?? "",
  };
}

const CONNECT_ERROR_CODES = new Set(["UND_ERR_CONNECT_TIMEOUT", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGAIN", "ETIMEDOUT", "ENETUNREACH", "EHOSTUNREACH"]);

/**
 * POSTs JSON, retrying only when the connection itself failed (the request
 * never reached Google, so a retry cannot append a duplicate row).
 */
async function postWithConnectRetry(url: string, body: string, attempts = 3): Promise<Response> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        redirect: "follow",
        cache: "no-store",
        signal: AbortSignal.timeout(30000),
      });
    } catch (error) {
      const code = (error as { cause?: { code?: string } })?.cause?.code;
      if (attempt >= attempts || !code || !CONNECT_ERROR_CODES.has(code)) throw error;
      console.warn(`[lead:creator-sheet] ${code}, retrying (${attempt}/${attempts - 1})`);
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
}

/**
 * Appends the application to the Google Sheet via its Apps Script web app.
 * The script JSON.parses e.postData.contents and maps keys to the sheet's
 * header row, so keys must match the headers exactly. It always replies
 * 200 and reports failures as { success: false, error }, so the body is checked.
 */
export async function submitCreatorApplicationToSheet(row: Record<string, string>): Promise<{ sent: boolean }> {
  try {
    const res = await postWithConnectRetry(CREATOR_SHEET_URL, JSON.stringify(row));
    const body = await res.text().catch(() => "");
    let data: { success?: boolean; error?: string } | null = null;
    try {
      data = JSON.parse(body);
    } catch {
      // Non-JSON reply usually means a Google login/permission page: the web app isn't deployed for "Anyone".
    }
    if (!res.ok || !data?.success) {
      console.error("[lead:creator-sheet] Apps Script failed:", res.status, data?.error ?? body.slice(0, 300));
      return { sent: false };
    }
    return { sent: true };
  } catch (error) {
    console.error("[lead:creator-sheet] request failed:", error);
    return { sent: false };
  }
}

export async function deliverCreatorApplication(
  payload: CreatorApplicationValues,
  row: Record<string, string> = buildCreatorSheetRow(payload),
): Promise<SendMailResult> {
  const { html, text } = buildLeadEmail({
    heading: "New Creator Application",
    fields: Object.entries(row)
      .filter(([label]) => label !== "Timestamp")
      .map(([label, value]) => ({ label, value })),
    source: "Kudozz Website - For Creators Form",
  });

  const result = await sendLeadEmail({
    subject: "New Creator Application | Kudozz",
    html,
    text,
    replyTo: payload.email,
  });

  if (!result.sent) {
    console.error("[lead:creator-application] email delivery failed, raw payload:", JSON.stringify(payload));
  }

  return result;
}

export async function deliverContactMessage(payload: ContactValues): Promise<SendMailResult> {
  const { html, text } = buildLeadEmail({
    heading: "New Contact Message",
    fields: [
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Subject", value: payload.subject },
      { label: "Message", value: payload.message },
    ],
    source: "Kudozz Website - Contact Form",
  });

  const result = await sendLeadEmail({
    subject: `New Contact Message: ${payload.subject} | Kudozz`,
    html,
    text,
    replyTo: payload.email,
  });

  if (!result.sent) {
    console.error("[lead:contact] email delivery failed, raw payload:", JSON.stringify(payload));
  }

  return result;
}

export async function deliverNewsletterSignup(payload: NewsletterValues): Promise<SendMailResult> {
  const { html, text } = buildLeadEmail({
    heading: "New Newsletter Signup",
    fields: [{ label: "Email", value: payload.email }],
    source: "Kudozz Website - Newsletter Form",
  });

  const result = await sendLeadEmail({
    subject: "New Newsletter Signup | Kudozz",
    html,
    text,
  });

  if (!result.sent) {
    console.error("[lead:newsletter] email delivery failed, raw payload:", JSON.stringify(payload));
  }

  return result;
}

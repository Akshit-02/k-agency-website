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
import { normalizeInstagramHandle } from "./validations";
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

export async function deliverCreatorApplication(payload: CreatorApplicationValues): Promise<SendMailResult> {
  const { html, text } = buildLeadEmail({
    heading: "New Creator Application",
    fields: [
      { label: "Name", value: payload.fullName },
      { label: "Email", value: payload.email },
      { label: "Phone", value: payload.phone },
      { label: "Instagram Handle", value: normalizeInstagramHandle(payload.instagramHandle) },
      { label: "Content Niche", value: payload.niche },
      { label: "City", value: payload.city },
      { label: "Follower Range", value: payload.followerRange ?? "" },
      { label: "Other Social Links", value: payload.otherLinks ?? "" },
      { label: "Introduction", value: payload.introduction ?? "" },
    ],
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

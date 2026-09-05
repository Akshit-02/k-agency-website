/**
 * Lead delivery layer
 * -------------------
 * This is the single seam where lead data leaves the app. No CRM, email
 * provider, or database is wired up yet, so each function currently logs
 * the structured payload server-side and resolves successfully.
 *
 * To connect a real destination, replace the body of the relevant function
 * with a call to your provider, e.g.:
 *
 *   await fetch(process.env.CRM_WEBHOOK_URL!, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *
 * or a typed SDK call (HubSpot, Salesforce, Airtable, Resend, etc.). The
 * calling API routes already validate input with Zod before this layer
 * runs, so payload shapes here can be trusted.
 */

import type { BrandInquiryValues, CreatorApplicationValues, ContactValues } from "./validations";

export async function deliverBrandInquiry(payload: BrandInquiryValues) {
  console.log("[lead:brand-inquiry]", JSON.stringify(payload));
  return { received: true as const };
}

export async function deliverCreatorApplication(payload: CreatorApplicationValues) {
  console.log("[lead:creator-application]", JSON.stringify(payload));
  return { received: true as const };
}

export async function deliverContactMessage(payload: ContactValues) {
  console.log("[lead:contact]", JSON.stringify(payload));
  return { received: true as const };
}

import { z } from "zod";

const phoneRegex = /^[+]?[\d\s().-]{7,20}$/;

// Instagram handle or a website URL — accepted with or without a leading
// "@", with or without a scheme, so real submissions ("@brand",
// "instagram.com/brand", "https://brand.com", "brand") all pass.
const handlePattern = /^@?[a-zA-Z0-9._]{1,30}$/;
const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?#]\S*)?$/;
function isWebsiteOrHandle(value: string): boolean {
  return handlePattern.test(value) || urlPattern.test(value);
}

// Honeypot: a field real users never see or fill. Any non-empty value here
// means the submission almost certainly came from a bot.
const honeypotField = z.string().max(200).optional();

export const brandInquirySchema = z.object({
  brandName: z.string().trim().min(2, "Enter your brand name.").max(120),
  contactName: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.email("Enter a valid email address.").max(200),
  phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number."),
  website: z
    .string()
    .trim()
    .min(3, "Enter a website or Instagram handle.")
    .max(200)
    .refine(isWebsiteOrHandle, "Enter a valid website URL or Instagram handle."),
  campaignGoal: z.string().trim().max(200).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().max(2000, "Keep your message under 2000 characters.").optional(),
  honeypot: honeypotField,
});

export type BrandInquiryValues = z.infer<typeof brandInquirySchema>;

export const creatorApplicationSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.email("Enter a valid email address.").max(200),
  phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number."),
  instagramHandle: z
    .string()
    .trim()
    .min(2, "Enter your Instagram handle.")
    .max(60)
    .refine(isWebsiteOrHandle, "Enter a valid Instagram handle."),
  niche: z.string().trim().min(1, "Select your primary content niche.").max(60),
  city: z.string().trim().min(2, "Enter your city.").max(80),
  followerRange: z.string().trim().max(60).optional(),
  otherLinks: z.string().trim().max(300).optional(),
  introduction: z.string().trim().max(1500, "Keep your introduction under 1500 characters.").optional(),
  honeypot: honeypotField,
});

export type CreatorApplicationValues = z.infer<typeof creatorApplicationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.email("Enter a valid email address.").max(200),
  subject: z.string().trim().min(2, "Enter a subject.").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters.").max(3000),
  honeypot: honeypotField,
});

export type ContactValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.email("Enter a valid email address.").max(200),
  honeypot: honeypotField,
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

/** Normalizes an Instagram handle to a bare "@handle" form for display. */
export function normalizeInstagramHandle(raw: string): string {
  const trimmed = raw.trim().replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/\/$/, "");
  const bare = trimmed.replace(/^@/, "");
  return `@${bare}`;
}

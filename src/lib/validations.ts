import { z } from "zod";
import {
  collaborationTypes,
  creatorContentCategories,
  creatorLanguages,
  genderOptions,
} from "@/content/creator-form-options";

const phoneRegex = /^[+]?[\d\s().-]{7,20}$/;

// Instagram handle or a website URL — accepted with or without a leading
// "@", with or without a scheme, so real submissions ("@brand",
// "instagram.com/brand", "https://brand.com", "brand") all pass.
const handlePattern = /^@?[a-zA-Z0-9._]{1,30}$/;
const urlPattern =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?#]\S*)?$/;
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
    .refine(
      isWebsiteOrHandle,
      "Enter a valid website URL or Instagram handle.",
    ),
  campaignGoal: z.string().trim().max(200).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .max(2000, "Keep your message under 2000 characters.")
    .optional(),
  // Populated silently from ?src=/?cat= on /for-brands when the visitor
  // arrived via a blog CTA — never shown to the visitor as a form field.
  sourceArticle: z.string().trim().max(200).optional(),
  articleCategory: z.string().trim().max(80).optional(),
  // Also hidden: the CTA topic/position from ?t=/?pos= (e.g. "UAE: Campaign Planning") and, for
  // non-blog entry points such as service and market pages, ?from= (e.g. "market:uae"), so the
  // lead email shows which market and page the inquiry came from.
  ctaTopic: z.string().trim().max(120).optional(),
  ctaPosition: z.string().trim().max(40).optional(),
  leadSource: z.string().trim().max(120).optional(),
  honeypot: honeypotField,
});

export type BrandInquiryValues = z.infer<typeof brandInquirySchema>;

const priceField = z
  .string()
  .trim()
  .max(20)
  .regex(/^(\d[\d,]*(\.\d{1,2})?)?$/, "Enter a number, e.g. 5000.")
  .optional();

const optionalUrl = (message: string) =>
  z
    .string()
    .trim()
    .max(300)
    .refine((v) => v === "" || urlPattern.test(v), message)
    .optional();

export const creatorApplicationSchema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name.").max(120),
    email: z.email("Enter a valid email address.").max(200),
    phone: z.string().trim().regex(phoneRegex, "Enter a valid contact number."),
    instagramUrl: z
      .string()
      .trim()
      .min(3, "Enter your Instagram profile link.")
      .max(300)
      .refine(isWebsiteOrHandle, "Enter a valid Instagram profile link."),
    youtubeUrl: optionalUrl("Enter a valid YouTube channel link."),
    gender: z.enum(genderOptions, "Select your gender."),
    city: z.string().trim().min(2, "Enter your current city.").max(80),
    state: z.string().trim().min(2, "Enter your current state.").max(80),
    categories: z.array(z.enum(creatorContentCategories)).min(1, "Select at least one content category."),
    categoriesOther: z.string().trim().max(150).optional(),
    languages: z.array(z.enum(creatorLanguages)).min(1, "Select at least one language."),
    languagesOther: z.string().trim().max(150).optional(),
    collaborationTypes: z
      .array(z.enum(collaborationTypes))
      .min(1, "Select at least one collaboration type."),
    priceReel: priceField,
    priceStory: priceField,
    priceYoutubeLong: priceField,
    priceYoutubeShort: priceField,
    honeypot: honeypotField,
  })
  .superRefine((data, ctx) => {
    if (data.categories.includes("Other") && !data.categoriesOther) {
      ctx.addIssue({ code: "custom", path: ["categoriesOther"], message: "Tell us your other category." });
    }
    if (data.languages.includes("Other") && !data.languagesOther) {
      ctx.addIssue({ code: "custom", path: ["languagesOther"], message: "Tell us your other language." });
    }
  });

export type CreatorApplicationValues = z.infer<typeof creatorApplicationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.email("Enter a valid email address.").max(200),
  subject: z.string().trim().min(2, "Enter a subject.").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(3000),
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
  const trimmed = raw
    .trim()
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, "")
    .replace(/\/$/, "");
  const bare = trimmed.replace(/^@/, "");
  return `@${bare}`;
}

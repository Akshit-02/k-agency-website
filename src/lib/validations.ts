import { z } from "zod";

const phoneRegex = /^[+]?[\d\s().-]{7,20}$/;

export const brandInquirySchema = z.object({
  brandName: z.string().min(2, "Enter your brand name."),
  contactName: z.string().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  website: z.string().min(3, "Enter a website or Instagram handle."),
  campaignGoal: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().max(2000, "Keep your message under 2000 characters.").optional(),
});

export type BrandInquiryValues = z.infer<typeof brandInquirySchema>;

export const creatorApplicationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  instagramHandle: z.string().min(2, "Enter your Instagram handle."),
  niche: z.string().min(1, "Select your primary content niche."),
  city: z.string().min(2, "Enter your city."),
  followerRange: z.string().optional(),
  otherLinks: z.string().optional(),
  introduction: z.string().max(1500, "Keep your introduction under 1500 characters.").optional(),
});

export type CreatorApplicationValues = z.infer<typeof creatorApplicationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  subject: z.string().min(2, "Enter a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;

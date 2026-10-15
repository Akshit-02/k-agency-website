"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { brandInquirySchema, type BrandInquiryValues } from "@/lib/validations";
import { FieldWrapper, TextInput, TextArea, SelectInput } from "@/components/forms/FormFields";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { trackBlogLeadFormEvent, trackBrandLeadEvent } from "@/lib/blogAnalytics";

// Same USD buckets as before, with approximate INR so Indian and international brands can both answer.
const budgetOptions = [
  "Under ₹4 lakh (under US$5k)",
  "₹4–12 lakh (US$5k–15k)",
  "₹12–40 lakh (US$15k–50k)",
  "₹40 lakh+ (US$50k+)",
  "Not sure yet",
];

const campaignGoalOptions = [
  "Influencer Marketing",
  "UGC Content",
  "Creator Discovery",
  "Campaign Management",
  "Product Launch",
  "Brand Awareness",
  "Other",
];

// Maps a blog CTA topic (from ?t= on the inquiry link) to the closest
// matching option, so a reader arriving from a UGC or product-launch
// article lands with the field pre-selected instead of blank.
const TOPIC_TO_CAMPAIGN_GOAL: Record<string, string> = {
  UGC: "UGC Content",
  "Creator Discovery": "Creator Discovery",
  "Creator Selection": "Creator Discovery",
  "Campaign Management": "Campaign Management",
  "Campaign Planning": "Campaign Management",
  "Always-On Program": "Campaign Management",
  "Annual Plan": "Campaign Management",
  "Agency Onboarding": "Campaign Management",
  "Product Launch": "Product Launch",
  "Brand Awareness": "Brand Awareness",
  "Influencer Technology": "Influencer Marketing",
  "UAE: UGC": "UGC Content",
  "UAE: Campaign Planning": "Campaign Management",
  "UAE: Agency Selection": "Influencer Marketing",
  "KSA: Campaign Planning": "Campaign Management",
  "KSA: Agency Selection": "Influencer Marketing",
  "KSA: Creator Discovery": "Creator Discovery",
  "GCC: Arabic UGC": "UGC Content",
  "GCC: Brand Lift": "Brand Awareness",
  "GCC: Annual Plan": "Campaign Management",
  "GCC: Product Drop": "Product Launch",
  "AU: Campaign Planning": "Campaign Management",
  "AU: Agency Selection": "Influencer Marketing",
  "AU: Creator Discovery": "Creator Discovery",
  "AU: Creator Ads": "UGC Content",
  "AU: Product Launch": "Product Launch",
  "UK: Campaign Planning": "Campaign Management",
  "UK: Agency Selection": "Influencer Marketing",
  "SG: Campaign Planning": "Campaign Management",
  "UAE: Market Page": "Influencer Marketing",
  "KSA: Market Page": "Influencer Marketing",
  "UK: Market Page": "Influencer Marketing",
  "AU: Market Page": "Influencer Marketing",
  "SG: Market Page": "Influencer Marketing",
};

/** Where the visitor entered the inquiry flow, for the lead email and GA4 `generate_lead`. */
function resolveLeadSource(from: string | undefined, sourceArticle: string | undefined) {
  if (from) return from;
  if (sourceArticle === "homepage") return "homepage";
  if (sourceArticle) return `blog:${sourceArticle}`;
  return "for-brands";
}

export function BrandInquiryForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const sourceArticle = searchParams.get("src") ?? undefined;
  const articleCategory = searchParams.get("cat") ?? undefined;
  const ctaPosition = searchParams.get("pos") ?? undefined;
  const ctaTopic = searchParams.get("t") ?? undefined;
  const leadSource = resolveLeadSource(searchParams.get("from") ?? undefined, sourceArticle);
  const prefillGoal = (ctaTopic && TOPIC_TO_CAMPAIGN_GOAL[ctaTopic]) || "";
  const hasTrackedStart = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BrandInquiryValues>({
    resolver: zodResolver(brandInquirySchema),
    defaultValues: { campaignGoal: prefillGoal },
  });

  function trackFormStart() {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackBrandLeadEvent("brand_lead_form_start", { leadSource, ctaTopic, ctaPosition });
    if (sourceArticle) {
      trackBlogLeadFormEvent("blog_lead_form_start", { sourceArticle, articleCategory, ctaPosition, ctaType: "brand_inquiry", intent: ctaTopic });
    }
  }

  async function onSubmit(values: BrandInquiryValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/brand-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Hidden attribution values come from the URL, so clip them to the schema limits: a mangled link
        // must never block a real inquiry on a field the visitor can't see.
        body: JSON.stringify({
          ...values,
          sourceArticle: sourceArticle?.slice(0, 200),
          articleCategory: articleCategory?.slice(0, 80),
          ctaTopic: ctaTopic?.slice(0, 120),
          ctaPosition: ctaPosition?.slice(0, 40),
          leadSource: leadSource.slice(0, 120),
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Submission failed");
      }
      trackBrandLeadEvent("generate_lead", { leadSource, ctaTopic, ctaPosition, campaignGoal: values.campaignGoal, budget: values.budget });
      if (sourceArticle) {
        trackBlogLeadFormEvent("blog_lead_form_submit", { sourceArticle, articleCategory, ctaPosition, ctaType: "brand_inquiry", intent: ctaTopic });
      }
      reset(values);
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message !== "Submission failed"
          ? error.message
          : "Something went wrong on our end. Please try again, or email us directly."
      );
    }
  }

  if (isSubmitSuccessful && !submitError) {
    return (
      <FormSuccess
        title="Thanks — we're on it."
        body="A member of our strategy team will reach out within one business day to schedule your first call."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onFocus={trackFormStart} noValidate className="space-y-8">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        {...register("honeypot")}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <FieldWrapper label="Brand Name" htmlFor="brandName" required error={errors.brandName?.message}>
          <TextInput id="brandName" hasError={!!errors.brandName} {...register("brandName")} />
        </FieldWrapper>
        <FieldWrapper label="Contact Person Name" htmlFor="contactName" required error={errors.contactName?.message}>
          <TextInput id="contactName" hasError={!!errors.contactName} {...register("contactName")} />
        </FieldWrapper>
        <FieldWrapper label="Email Address" htmlFor="email" required error={errors.email?.message}>
          <TextInput id="email" type="email" hasError={!!errors.email} {...register("email")} />
        </FieldWrapper>
        <FieldWrapper label="Phone Number" htmlFor="phone" required error={errors.phone?.message}>
          <TextInput id="phone" type="tel" hasError={!!errors.phone} {...register("phone")} />
        </FieldWrapper>
        <FieldWrapper label="Brand Website / Instagram" htmlFor="website" required error={errors.website?.message} className="sm:col-span-2">
          <TextInput id="website" placeholder="yourbrand.com or @yourbrand" hasError={!!errors.website} {...register("website")} />
        </FieldWrapper>
        <FieldWrapper label="What Are You Looking For? (optional)" htmlFor="campaignGoal">
          <SelectInput id="campaignGoal" defaultValue={prefillGoal} {...register("campaignGoal")}>
            <option value="">Select what you&apos;re looking for</option>
            {campaignGoalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </SelectInput>
        </FieldWrapper>
        <FieldWrapper label="Estimated Budget (optional)" htmlFor="budget">
          <SelectInput id="budget" defaultValue="" {...register("budget")}>
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </SelectInput>
        </FieldWrapper>
      </div>

      <FieldWrapper label="Tell us more (optional)" htmlFor="message" error={errors.message?.message}>
        <TextArea id="message" placeholder="What are you trying to achieve with this campaign?" {...register("message")} />
      </FieldWrapper>

      {submitError && <p role="alert" className="text-sm font-medium text-coral-dim">{submitError}</p>}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Let's Build Your Campaign"}
      </Button>
    </form>
  );
}

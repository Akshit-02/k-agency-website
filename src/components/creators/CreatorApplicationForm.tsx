"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { creatorApplicationSchema, type CreatorApplicationValues } from "@/lib/validations";
import {
  collaborationTypes,
  creatorContentCategories,
  creatorLanguages,
  genderOptions,
} from "@/content/creator-form-options";
import { FieldWrapper, TextInput } from "@/components/forms/FormFields";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { trackBlogLeadFormEvent } from "@/lib/blogAnalytics";

type ChoiceGroupProps = {
  legend: string;
  name: string;
  type: "checkbox" | "radio";
  options: readonly string[];
  registration: UseFormRegisterReturn;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
};

function ChoiceGroup({ legend, name, type, options, registration, required, error, children }: ChoiceGroupProps) {
  return (
    <fieldset className="flex flex-col gap-3" aria-invalid={!!error}>
      <legend className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/70">
        {legend} {required && <span className="text-coral-deep">*</span>}
      </legend>
      <div className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-ink">
            <input
              type={type}
              value={option}
              className="h-4 w-4 shrink-0 accent-coral"
              {...registration}
              id={`${name}-${option}`}
            />
            {option}
          </label>
        ))}
      </div>
      {children}
      {error && (
        <p className="text-xs font-medium text-coral-deep" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function CreatorApplicationForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Set when the reader arrives from a Creator Resources CTA (?src=&cat=&pos=).
  const searchParams = useSearchParams();
  const sourceArticle = searchParams.get("src") ?? undefined;
  const articleCategory = searchParams.get("cat") ?? undefined;
  const ctaPosition = searchParams.get("pos") ?? undefined;
  const hasTrackedStart = useRef(false);
  const leadParams = { sourceArticle, articleCategory, ctaPosition, ctaType: "creator_signup" };

  function trackFormStart() {
    if (hasTrackedStart.current || !sourceArticle) return;
    hasTrackedStart.current = true;
    trackBlogLeadFormEvent("blog_lead_form_start", leadParams);
  }
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CreatorApplicationValues>({
    resolver: zodResolver(creatorApplicationSchema),
    defaultValues: { categories: [], languages: [], collaborationTypes: [] },
  });

  const categoriesHasOther = useWatch({ control, name: "categories" })?.includes("Other");
  const languagesHasOther = useWatch({ control, name: "languages" })?.includes("Other");

  async function onSubmit(values: CreatorApplicationValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/creator-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Submission failed");
      }
      if (sourceArticle) trackBlogLeadFormEvent("blog_lead_form_submit", leadParams);
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
        title="You're on the list."
        body="We review every application personally. If there's a fit with an upcoming campaign, our creator team will reach out by email or WhatsApp."
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
        <FieldWrapper label="Full Name" htmlFor="fullName" required error={errors.fullName?.message}>
          <TextInput id="fullName" autoComplete="name" hasError={!!errors.fullName} {...register("fullName")} />
        </FieldWrapper>
        <FieldWrapper label="Email Address" htmlFor="email" required error={errors.email?.message}>
          <TextInput id="email" type="email" autoComplete="email" hasError={!!errors.email} {...register("email")} />
        </FieldWrapper>
        <FieldWrapper label="Contact Number (WhatsApp Preferred)" htmlFor="phone" required error={errors.phone?.message}>
          <TextInput id="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" hasError={!!errors.phone} {...register("phone")} />
        </FieldWrapper>
        <FieldWrapper label="Instagram Profile Link" htmlFor="instagramUrl" required error={errors.instagramUrl?.message}>
          <TextInput
            id="instagramUrl"
            type="url"
            placeholder="https://instagram.com/yourhandle"
            hasError={!!errors.instagramUrl}
            {...register("instagramUrl")}
          />
        </FieldWrapper>
        <FieldWrapper label="YouTube Channel Link" htmlFor="youtubeUrl" error={errors.youtubeUrl?.message}>
          <TextInput
            id="youtubeUrl"
            type="url"
            placeholder="https://youtube.com/@yourchannel"
            hasError={!!errors.youtubeUrl}
            {...register("youtubeUrl")}
          />
        </FieldWrapper>
        <FieldWrapper label="Current City" htmlFor="city" required error={errors.city?.message}>
          <TextInput id="city" autoComplete="address-level2" hasError={!!errors.city} {...register("city")} />
        </FieldWrapper>
        <FieldWrapper label="Current State" htmlFor="state" required error={errors.state?.message}>
          <TextInput id="state" autoComplete="address-level1" hasError={!!errors.state} {...register("state")} />
        </FieldWrapper>
      </div>

      <ChoiceGroup
        legend="Gender"
        name="gender"
        type="radio"
        options={genderOptions}
        registration={register("gender")}
        required
        error={errors.gender?.message}
      />

      <ChoiceGroup
        legend="Which content categories do you create content in?"
        name="categories"
        type="checkbox"
        options={creatorContentCategories}
        registration={register("categories")}
        required
        error={errors.categories?.message}
      >
        {categoriesHasOther && (
          <FieldWrapper label="Other category" htmlFor="categoriesOther" required error={errors.categoriesOther?.message}>
            <TextInput id="categoriesOther" hasError={!!errors.categoriesOther} {...register("categoriesOther")} />
          </FieldWrapper>
        )}
      </ChoiceGroup>

      <ChoiceGroup
        legend="Which languages do you create content in?"
        name="languages"
        type="checkbox"
        options={creatorLanguages}
        registration={register("languages")}
        required
        error={errors.languages?.message}
      >
        {languagesHasOther && (
          <FieldWrapper label="Other language" htmlFor="languagesOther" required error={errors.languagesOther?.message}>
            <TextInput id="languagesOther" hasError={!!errors.languagesOther} {...register("languagesOther")} />
          </FieldWrapper>
        )}
      </ChoiceGroup>

      <ChoiceGroup
        legend="What types of brand collaborations are you interested in?"
        name="collaborationTypes"
        type="checkbox"
        options={collaborationTypes}
        registration={register("collaborationTypes")}
        required
        error={errors.collaborationTypes?.message}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <FieldWrapper label="Your Price for 1 Instagram Reel (₹)" htmlFor="priceReel" error={errors.priceReel?.message}>
          <TextInput id="priceReel" inputMode="numeric" placeholder="e.g. 5000" hasError={!!errors.priceReel} {...register("priceReel")} />
        </FieldWrapper>
        <FieldWrapper label="Your Price for 1 Instagram Story (₹)" htmlFor="priceStory" error={errors.priceStory?.message}>
          <TextInput id="priceStory" inputMode="numeric" placeholder="e.g. 2000" hasError={!!errors.priceStory} {...register("priceStory")} />
        </FieldWrapper>
        <FieldWrapper label="Your Price for 1 YouTube Long-Form Video (₹)" htmlFor="priceYoutubeLong" error={errors.priceYoutubeLong?.message}>
          <TextInput id="priceYoutubeLong" inputMode="numeric" placeholder="e.g. 15000" hasError={!!errors.priceYoutubeLong} {...register("priceYoutubeLong")} />
        </FieldWrapper>
        <FieldWrapper label="Your Price for 1 YouTube Short (₹)" htmlFor="priceYoutubeShort" error={errors.priceYoutubeShort?.message}>
          <TextInput id="priceYoutubeShort" inputMode="numeric" placeholder="e.g. 4000" hasError={!!errors.priceYoutubeShort} {...register("priceYoutubeShort")} />
        </FieldWrapper>
      </div>

      {submitError && <p className="text-sm font-medium text-coral-deep">{submitError}</p>}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Join Our Creator Network"}
      </Button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { creatorApplicationSchema, type CreatorApplicationValues } from "@/lib/validations";
import { contentNiches, followerRanges } from "@/content/creator-categories";
import { FieldWrapper, TextInput, TextArea, SelectInput } from "@/components/forms/FormFields";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";

export function CreatorApplicationForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CreatorApplicationValues>({ resolver: zodResolver(creatorApplicationSchema) });

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
        body="We review every application personally. If there's a fit with an upcoming campaign, our creator team will reach out by email."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
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
          <TextInput id="fullName" hasError={!!errors.fullName} {...register("fullName")} />
        </FieldWrapper>
        <FieldWrapper label="Email Address" htmlFor="email" required error={errors.email?.message}>
          <TextInput id="email" type="email" hasError={!!errors.email} {...register("email")} />
        </FieldWrapper>
        <FieldWrapper label="Phone Number" htmlFor="phone" required error={errors.phone?.message}>
          <TextInput id="phone" type="tel" hasError={!!errors.phone} {...register("phone")} />
        </FieldWrapper>
        <FieldWrapper label="Instagram Handle" htmlFor="instagramHandle" required error={errors.instagramHandle?.message}>
          <TextInput id="instagramHandle" placeholder="@yourhandle" hasError={!!errors.instagramHandle} {...register("instagramHandle")} />
        </FieldWrapper>
        <FieldWrapper label="Content Niche" htmlFor="niche" required error={errors.niche?.message}>
          <SelectInput id="niche" hasError={!!errors.niche} defaultValue="" {...register("niche")}>
            <option value="" disabled>
              Select your primary niche
            </option>
            {contentNiches.map((niche) => (
              <option key={niche} value={niche}>
                {niche}
              </option>
            ))}
          </SelectInput>
        </FieldWrapper>
        <FieldWrapper label="City" htmlFor="city" required error={errors.city?.message}>
          <TextInput id="city" hasError={!!errors.city} {...register("city")} />
        </FieldWrapper>
        <FieldWrapper label="Follower Range (optional)" htmlFor="followerRange">
          <SelectInput id="followerRange" defaultValue="" {...register("followerRange")}>
            <option value="">Select a range</option>
            {followerRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </SelectInput>
        </FieldWrapper>
        <FieldWrapper label="Other Social Links (optional)" htmlFor="otherLinks">
          <TextInput id="otherLinks" placeholder="TikTok, YouTube, website..." {...register("otherLinks")} />
        </FieldWrapper>
      </div>

      <FieldWrapper label="Short Introduction (optional)" htmlFor="introduction" error={errors.introduction?.message}>
        <TextArea id="introduction" placeholder="Tell us about your content and the brands you'd love to work with." {...register("introduction")} />
      </FieldWrapper>

      {submitError && <p className="text-sm font-medium text-coral-dim">{submitError}</p>}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Join Our Creator Network"}
      </Button>
    </form>
  );
}

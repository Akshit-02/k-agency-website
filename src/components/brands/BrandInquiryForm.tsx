"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { brandInquirySchema, type BrandInquiryValues } from "@/lib/validations";
import { FieldWrapper, TextInput, TextArea, SelectInput } from "@/components/forms/FormFields";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";

const budgetOptions = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"];

export function BrandInquiryForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BrandInquiryValues>({ resolver: zodResolver(brandInquirySchema) });

  async function onSubmit(values: BrandInquiryValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/brand-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Submission failed");
      reset(values);
    } catch {
      setSubmitError("Something went wrong on our end. Please try again, or email us directly.");
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
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
        <FieldWrapper label="Campaign Goal (optional)" htmlFor="campaignGoal">
          <TextInput id="campaignGoal" placeholder="e.g. Product launch, awareness, UGC" {...register("campaignGoal")} />
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

      {submitError && <p className="text-sm font-medium text-coral-dim">{submitError}</p>}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Let's Build Your Campaign"}
      </Button>
    </form>
  );
}

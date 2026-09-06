"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactValues } from "@/lib/validations";
import { FieldWrapper, TextInput, TextArea } from "@/components/forms/FormFields";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
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
    return <FormSuccess title="Message sent." body="We typically reply within one business day." />;
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
        <FieldWrapper label="Full Name" htmlFor="name" required error={errors.name?.message}>
          <TextInput id="name" hasError={!!errors.name} {...register("name")} />
        </FieldWrapper>
        <FieldWrapper label="Email Address" htmlFor="email" required error={errors.email?.message}>
          <TextInput id="email" type="email" hasError={!!errors.email} {...register("email")} />
        </FieldWrapper>
        <FieldWrapper label="Subject" htmlFor="subject" required error={errors.subject?.message} className="sm:col-span-2">
          <TextInput id="subject" hasError={!!errors.subject} {...register("subject")} />
        </FieldWrapper>
      </div>
      <FieldWrapper label="Message" htmlFor="message" required error={errors.message?.message}>
        <TextArea id="message" rows={6} hasError={!!errors.message} {...register("message")} />
      </FieldWrapper>
      {submitError && <p className="text-sm font-medium text-coral-dim">{submitError}</p>}
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

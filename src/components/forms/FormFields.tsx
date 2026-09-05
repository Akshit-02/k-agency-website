"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full border-[1.5px] border-ink/20 bg-paper px-4 py-3.5 text-base text-ink placeholder:text-ink/35 transition-colors focus:border-coral focus:outline-none";

type FieldWrapperProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function FieldWrapper({ label, htmlFor, error, required, className, children }: FieldWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs font-medium text-coral-dim" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const TextInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }>(
  ({ className, hasError, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(fieldBase, hasError && "border-coral", className)}
      aria-invalid={hasError}
      {...props}
    />
  )
);
TextInput.displayName = "TextInput";

export const TextArea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }>(
  ({ className, hasError, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={4}
      className={cn(fieldBase, "resize-none", hasError && "border-coral", className)}
      aria-invalid={hasError}
      {...props}
    />
  )
);
TextArea.displayName = "TextArea";

export const SelectInput = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }>(
  ({ className, hasError, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(fieldBase, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%23150F0B%22 stroke-width=%221.5%22 fill=%22none%22/></svg>')] bg-[length:12px_8px] bg-[right_1rem_center] bg-no-repeat pr-9", hasError && "border-coral", className)}
      aria-invalid={hasError}
      {...props}
    >
      {children}
    </select>
  )
);
SelectInput.displayName = "SelectInput";

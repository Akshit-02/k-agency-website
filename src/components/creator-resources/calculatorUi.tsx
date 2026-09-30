"use client";

import { FieldWrapper, TextInput } from "@/components/forms/FormFields";
import { cn } from "@/lib/utils";

/**
 * Shared building blocks for the in-article calculators added in the 850–899
 * layer (profitability, capacity, marketplace fees). Same look as
 * CreatorAgencyRevenueCalculator: everything runs in the browser and nothing
 * is stored or sent.
 */

export const toNumber = (v: string) => {
  const n = Number(v.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

export const inr = (n: number) => `${n < 0 ? "−" : ""}₹${Math.round(Math.abs(n)).toLocaleString("en-IN")}`;

export const pct = (n: number) => `${n < 0 ? "−" : ""}${Math.abs(n).toLocaleString("en-IN", { maximumFractionDigits: 1 })}%`;

export function CalculatorShell({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{intro}</p>
      {children}
    </section>
  );
}

export function NumberField({
  id,
  label,
  hint,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldWrapper label={label} htmlFor={id}>
      <TextInput
        id={id}
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={`${id}-hint`}
      />
      <p id={`${id}-hint`} className="text-xs leading-relaxed text-ink/50">
        {hint}
      </p>
    </FieldWrapper>
  );
}

export function Stat({ label, value, note, negative }: { label: string; value: string; note?: string; negative?: boolean }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">{label}</dt>
      <dd className={cn("mt-1 font-display text-2xl", negative ? "text-coral-dim" : "text-ink")}>{value}</dd>
      {note && <dd className="mt-1 text-xs text-ink/50">{note}</dd>}
    </div>
  );
}

export function Results({ children, footnote }: { children: React.ReactNode; footnote: string }) {
  return (
    <div className="mt-8 border-t-[1.5px] border-ink/15 pt-6" aria-live="polite">
      {children}
      <p className="mt-5 text-xs leading-relaxed text-ink/50">{footnote}</p>
    </div>
  );
}

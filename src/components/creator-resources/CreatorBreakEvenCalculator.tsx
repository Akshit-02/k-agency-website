"use client";

import { useId, useState } from "react";
import { FieldWrapper, TextInput } from "@/components/forms/FormFields";

/**
 * Break-even calculator used inside /blog/creator-break-even-analysis.
 * Fixed costs ÷ contribution per deal or sale, plus a comparison with the
 * reader's typical monthly volume. Uses only the reader's numbers.
 */

type Inputs = { fixed: string; price: string; variable: string; typical: string };

const DEFAULTS: Inputs = { fixed: "", price: "", variable: "", typical: "" };

type Field = { key: keyof Inputs; label: string; hint: string };

const FIELDS: Field[] = [
  { key: "fixed", label: "Monthly fixed costs (₹)", hint: "Include the amount you need to pay yourself, retainers, rent, software" },
  { key: "price", label: "Average price per deal or sale (₹)", hint: "A typical brand deal fee or product price, before GST" },
  { key: "variable", label: "Direct costs per deal or sale (₹)", hint: "Editing, props, shoot costs, gateway and platform fees" },
  { key: "typical", label: "Deals or sales in a typical month (optional)", hint: "Use a conservative average, not your best month" },
];

const num = (v: string) => {
  const n = Number(v.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const inr = (n: number) => `${n < 0 ? "−" : ""}₹${Math.round(Math.abs(n)).toLocaleString("en-IN")}`;

export function CreatorBreakEvenCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  const fixed = num(inputs.fixed);
  const price = num(inputs.price);
  const contribution = price - num(inputs.variable);
  const typical = num(inputs.typical);
  const hasResult = fixed > 0 && price > 0;
  const units = contribution > 0 ? Math.ceil(fixed / contribution) : 0;
  const revenue = units * price;
  const monthlyResult = typical > 0 ? typical * contribution - fixed : null;

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
        Break-even calculator
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        Uses only your numbers. It runs in your browser and nothing is saved or sent anywhere.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <FieldWrapper key={f.key} label={f.label} htmlFor={`${id}-${f.key}`}>
            <TextInput
              id={`${id}-${f.key}`}
              inputMode="decimal"
              value={inputs[f.key]}
              onChange={set(f.key)}
              aria-describedby={`${id}-${f.key}-hint`}
            />
            <p id={`${id}-${f.key}-hint`} className="text-xs leading-relaxed text-ink/50">
              {f.hint}
            </p>
          </FieldWrapper>
        ))}
      </div>

      <div className="mt-8 border-t-[1.5px] border-ink/15 pt-6" aria-live="polite">
        {!hasResult ? (
          <p className="text-sm text-ink/60">Enter your fixed costs and average price to see your break-even point.</p>
        ) : contribution <= 0 ? (
          <p className="text-sm font-semibold text-coral-dim">
            Direct costs are equal to or higher than the price, so each deal or sale loses money. Raise the price or lower
            direct costs first.
          </p>
        ) : (
          <dl className="grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Contribution per unit</dt>
              <dd className="mt-1 font-display text-2xl text-ink">{inr(contribution)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Break-even each month</dt>
              <dd className="mt-1 font-display text-2xl text-ink">
                {units} {units === 1 ? "deal or sale" : "deals or sales"}
              </dd>
              <dd className="mt-1 text-xs text-ink/50">About {inr(revenue)} in revenue</dd>
            </div>
            {monthlyResult !== null && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">A typical month</dt>
                <dd className={`mt-1 font-display text-2xl ${monthlyResult < 0 ? "text-coral-dim" : "text-ink"}`}>
                  {inr(monthlyResult)}
                </dd>
                <dd className="mt-1 text-xs text-ink/50">{monthlyResult < 0 ? "Below break-even" : "Above break-even"}</dd>
              </div>
            )}
          </dl>
        )}
        <p className="mt-5 text-xs leading-relaxed text-ink/50">
          Amounts are before tax. Break-even is a minimum, not a target, and creator income varies month to month.
        </p>
      </div>
    </section>
  );
}

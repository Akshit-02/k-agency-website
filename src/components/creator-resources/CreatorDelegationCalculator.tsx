"use client";

import { useId, useState } from "react";
import { FieldWrapper, TextInput } from "@/components/forms/FormFields";

/**
 * Delegation calculator used inside /blog/creator-outsourcing. Compares the
 * monthly cost of outsourcing a task with the value of the hours it frees,
 * after the time the creator still spends briefing and reviewing. Uses only
 * the reader's numbers; it never suggests market rates.
 */

type Inputs = { hours: string; hourlyValue: string; cost: string; reviewHours: string };

const DEFAULTS: Inputs = { hours: "", hourlyValue: "", cost: "", reviewHours: "2" };

type Field = { key: keyof Inputs; label: string; hint: string };

const FIELDS: Field[] = [
  { key: "hours", label: "Hours you spend on the task each month", hint: "Track it for a couple of weeks if you're unsure" },
  { key: "hourlyValue", label: "What an hour of your time earns (₹)", hint: "Typical earnings per hour of income work: brand content, products, pitching" },
  { key: "cost", label: "Monthly cost to outsource it (₹)", hint: "From a real quote, including any tools they need" },
  { key: "reviewHours", label: "Hours you'd still spend briefing and reviewing", hint: "Usually higher in the first month" },
];

const num = (v: string) => {
  const n = Number(v.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const inr = (n: number) => `${n < 0 ? "−" : ""}₹${Math.round(Math.abs(n)).toLocaleString("en-IN")}`;

export function CreatorDelegationCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  const hours = num(inputs.hours);
  const hourlyValue = num(inputs.hourlyValue);
  const cost = num(inputs.cost);
  const freed = Math.max(hours - num(inputs.reviewHours), 0);
  const valueFreed = freed * hourlyValue;
  const net = valueFreed - cost;
  const costPerHour = freed > 0 ? cost / freed : 0;
  const hasResult = hours > 0 && hourlyValue > 0 && cost > 0;

  let verdict = "";
  if (hasResult) {
    if (freed === 0) verdict = "Briefing and review would take as long as doing it yourself. Simplify the task or improve the SOP first.";
    else if (net >= 0) verdict = "On these numbers, outsourcing pays for itself if you spend the freed hours on income work.";
    else if (costPerHour <= hourlyValue * 1.5) verdict = "Close to break-even. It can still be worth it for time back, quality or wellbeing, if the cost fits your budget.";
    else verdict = "On these numbers it costs noticeably more than your time is worth. Consider automating it, batching it or waiting until volume or income grows.";
  }

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
        Delegation calculator
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
        {hasResult ? (
          <>
            <dl className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Hours freed a month</dt>
                <dd className="mt-1 font-display text-2xl text-ink">{freed.toLocaleString("en-IN")}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Cost per hour freed</dt>
                <dd className="mt-1 font-display text-2xl text-ink">{freed > 0 ? inr(costPerHour) : "–"}</dd>
                <dd className="mt-1 text-xs text-ink/50">Compare with your {inr(hourlyValue)} an hour</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Monthly difference</dt>
                <dd className={`mt-1 font-display text-2xl ${net < 0 ? "text-coral-dim" : "text-ink"}`}>{inr(net)}</dd>
                <dd className="mt-1 text-xs text-ink/50">Value of freed hours minus cost</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-ink">{verdict}</p>
          </>
        ) : (
          <p className="text-sm text-ink/60">Enter your hours, hourly value and a real outsourcing quote to compare.</p>
        )}
        <p className="mt-5 text-xs leading-relaxed text-ink/50">
          The value of freed hours only becomes income if you use them for income work. This is a planning aid, not a
          prediction; amounts are before tax.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useId, useState } from "react";
import { FieldWrapper, TextInput } from "@/components/forms/FormFields";

/**
 * Creator revenue forecast used inside /blog/creator-revenue-forecasting.
 * Turns the creator's own numbers into conservative, expected and
 * optimistic monthly scenarios. It never supplies income figures and
 * shows every assumption, because forecasts are plans, not promises.
 */

type Inputs = {
  confirmed: string;
  recurring: string;
  pipeline: string;
  pipelineProbability: string;
  launch: string;
  launchProbability: string;
  expenses: string;
};

const DEFAULTS: Inputs = {
  confirmed: "",
  recurring: "",
  pipeline: "",
  pipelineProbability: "40",
  launch: "",
  launchProbability: "50",
  expenses: "",
};

type Field = { key: keyof Inputs; label: string; hint: string };

const FIELDS: Field[] = [
  { key: "confirmed", label: "Confirmed income this month (₹)", hint: "Signed deals, retainers, invoices due this month" },
  { key: "recurring", label: "Recurring income (₹ a month)", hint: "Memberships, subscriptions, steady platform payouts, after expected cancellations" },
  { key: "pipeline", label: "Pipeline deals likely to land this month (₹)", hint: "Proposals and negotiations not yet confirmed" },
  { key: "pipelineProbability", label: "Chance pipeline deals close (%)", hint: "Use your own past close rate if you have one" },
  { key: "launch", label: "Launch or one-off sales if everything goes well (₹)", hint: "Product launch, workshop, course cohort" },
  { key: "launchProbability", label: "Realistic share of that launch (%)", hint: "Be cautious for a first launch" },
  { key: "expenses", label: "Monthly business and personal costs to cover (₹)", hint: "Optional; shows the gap or buffer" },
];

const num = (v: string) => {
  const n = Number(v.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const pct = (v: string) => Math.min(num(v), 100) / 100;
const inr = (n: number) => `${n < 0 ? "−" : ""}₹${Math.round(Math.abs(n)).toLocaleString("en-IN")}`;

export function CreatorRevenueForecast() {
  const id = useId();
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  const base = num(inputs.confirmed) + num(inputs.recurring);
  const conservative = base;
  const expected = base + num(inputs.pipeline) * pct(inputs.pipelineProbability) + num(inputs.launch) * pct(inputs.launchProbability);
  const optimistic = base + num(inputs.pipeline) + num(inputs.launch);
  const expenses = num(inputs.expenses);
  const hasResult = optimistic > 0;

  const scenarios = [
    { label: "Conservative", value: conservative, note: "Confirmed + recurring only" },
    { label: "Expected", value: expected, note: "Adds pipeline and launch at your probabilities" },
    { label: "Optimistic", value: optimistic, note: "Everything closes; plan with care" },
  ];

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
        Creator revenue forecast
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        Uses only your numbers for one month. It runs in your browser and nothing is saved or sent anywhere.
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
          <dl className="grid gap-4 sm:grid-cols-3">
            {scenarios.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl text-ink">{inr(s.value)}</dd>
                <dd className="mt-1 text-xs text-ink/50">{s.note}</dd>
                {expenses > 0 && (
                  <dd className={`mt-1 text-xs font-semibold ${s.value - expenses < 0 ? "text-coral-dim" : "text-ink/70"}`}>
                    {s.value - expenses < 0 ? "Gap: " : "Buffer: "}
                    {inr(s.value - expenses)}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter your confirmed, recurring and pipeline income to see three scenarios.</p>
        )}
        <p className="mt-5 text-xs leading-relaxed text-ink/50">
          A forecast is a planning tool, not a prediction or promise of income. Plan spending around the conservative
          scenario, and treat anything above it as upside. Amounts are before tax.
        </p>
      </div>
    </section>
  );
}

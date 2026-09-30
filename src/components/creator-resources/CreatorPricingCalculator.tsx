"use client";

import { useId, useState } from "react";
import { FieldWrapper, TextInput } from "@/components/forms/FormFields";

/**
 * Creator pricing calculator used inside /blog/creator-pricing-calculator.
 * Deliberately ships no "market rate": every price input is the creator's
 * own number. It combines a cost floor (time + costs + margin) with an
 * optional audience-value price (views × the creator's chosen CPM), then
 * applies the add-ons the brand is asking for.
 */

type Field = { key: keyof Inputs; label: string; hint: string; suffix?: string };

type Inputs = {
  hours: string;
  hourlyRate: string;
  directCosts: string;
  margin: string;
  avgViews: string;
  cpm: string;
  usage: string;
  exclusivity: string;
  rush: string;
};

const DEFAULTS: Inputs = {
  hours: "6",
  hourlyRate: "",
  directCosts: "",
  margin: "20",
  avgViews: "",
  cpm: "",
  usage: "0",
  exclusivity: "0",
  rush: "0",
};

const COST_FIELDS: Field[] = [
  { key: "hours", label: "Hours for this deliverable", hint: "Brief, scripting, shoot, edit, revisions, admin" },
  { key: "hourlyRate", label: "Your target hourly rate (₹)", hint: "What your time needs to earn; your own figure" },
  { key: "directCosts", label: "Direct costs (₹)", hint: "Editor, props, travel, location, extra talent" },
  { key: "margin", label: "Business margin (%)", hint: "Buffer for tax, gaps between deals, reinvestment", suffix: "%" },
];

const AUDIENCE_FIELDS: Field[] = [
  { key: "avgViews", label: "Average views per comparable post", hint: "Median of your last 10 similar posts, not your best" },
  { key: "cpm", label: "Your price per 1,000 views (₹, optional)", hint: "Leave blank to price on cost alone" },
];

const ADDON_FIELDS: Field[] = [
  { key: "usage", label: "Paid usage / whitelisting uplift (%)", hint: "0 if organic only", suffix: "%" },
  { key: "exclusivity", label: "Exclusivity uplift (%)", hint: "0 if no exclusivity", suffix: "%" },
  { key: "rush", label: "Rush or extra revisions uplift (%)", hint: "0 if standard timeline", suffix: "%" },
];

const num = (v: string) => {
  const n = Number(v.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export function CreatorPricingCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  const floor = (num(inputs.hours) * num(inputs.hourlyRate) + num(inputs.directCosts)) * (1 + num(inputs.margin) / 100);
  const audienceValue = (num(inputs.avgViews) / 1000) * num(inputs.cpm);
  const base = Math.max(floor, audienceValue);
  const uplift = (num(inputs.usage) + num(inputs.exclusivity) + num(inputs.rush)) / 100;
  const quote = base * (1 + uplift);
  const impliedCpm = num(inputs.avgViews) > 0 && quote > 0 ? (quote / num(inputs.avgViews)) * 1000 : 0;
  const hasResult = quote > 0;

  const renderFields = (fields: Field[]) =>
    fields.map((f) => (
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
    ));

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
        Creator pricing calculator
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        Uses only your numbers. It runs in your browser and nothing is saved or sent anywhere.
      </p>

      <div className="mt-6 space-y-8">
        <fieldset>
          <legend className="font-black-display text-xs text-coral">1. YOUR COST FLOOR</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">{renderFields(COST_FIELDS)}</div>
        </fieldset>
        <fieldset>
          <legend className="font-black-display text-xs text-coral">2. AUDIENCE VALUE</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">{renderFields(AUDIENCE_FIELDS)}</div>
        </fieldset>
        <fieldset>
          <legend className="font-black-display text-xs text-coral">3. WHAT THE BRAND IS ASKING FOR</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-3">{renderFields(ADDON_FIELDS)}</div>
        </fieldset>
      </div>

      <div className="mt-8 border-t-[1.5px] border-ink/15 pt-6" aria-live="polite">
        {hasResult ? (
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Cost floor</dt>
              <dd className="mt-1 font-display text-2xl text-ink">{inr(floor)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Audience value</dt>
              <dd className="mt-1 font-display text-2xl text-ink">{audienceValue > 0 ? inr(audienceValue) : "Not used"}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Suggested quote (before GST)</dt>
              <dd className="mt-1 font-display text-3xl text-coral-dim">{inr(quote)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Implied price per 1,000 views</dt>
              <dd className="mt-1 font-display text-2xl text-ink">{impliedCpm > 0 ? inr(impliedCpm) : "Add average views"}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter your hourly rate and costs, or your views and price per 1,000 views, to see a quote.</p>
        )}
        <p className="mt-5 text-xs leading-relaxed text-ink/50">
          The quote is the higher of your cost floor and your audience value, plus the add-ons. It is a starting point for
          negotiation, not a market rate or a guarantee of what a brand will pay. If you&apos;re GST-registered, GST is added on
          your invoice.
        </p>
      </div>
    </section>
  );
}

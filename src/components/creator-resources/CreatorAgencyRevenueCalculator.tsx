"use client";

import { useId, useState } from "react";
import { FieldWrapper, TextInput } from "@/components/forms/FormFields";

/**
 * Agency revenue calculator used inside /blog/creator-management-agency-business-model.
 * Roster × deals × average fee × commission, plus other monthly revenue, minus
 * fixed costs. No default commission is suggested: there's no reliable
 * published standard, so the reader enters their own.
 */

type Inputs = { creators: string; deals: string; fee: string; commission: string; other: string; costs: string };

const DEFAULTS: Inputs = { creators: "", deals: "", fee: "", commission: "", other: "", costs: "" };

type Field = { key: keyof Inputs; label: string; hint: string };

const FIELDS: Field[] = [
  { key: "creators", label: "Creators on the roster", hint: "Active creators you represent" },
  { key: "deals", label: "Deals per creator per month", hint: "Average across the roster; use a cautious figure" },
  { key: "fee", label: "Average deal fee (₹)", hint: "Before GST" },
  { key: "commission", label: "Your commission (%)", hint: "The rate in your management agreements" },
  { key: "other", label: "Other monthly revenue (₹, optional)", hint: "Retainers, campaign fees, production, consulting" },
  { key: "costs", label: "Monthly agency costs (₹)", hint: "Team, tools, office, your own pay" },
];

const num = (v: string) => {
  const n = Number(v.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const inr = (n: number) => `${n < 0 ? "−" : ""}₹${Math.round(Math.abs(n)).toLocaleString("en-IN")}`;

export function CreatorAgencyRevenueCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  const creators = num(inputs.creators);
  const deals = num(inputs.deals);
  const fee = num(inputs.fee);
  const rate = Math.min(num(inputs.commission), 100) / 100;
  const other = num(inputs.other);
  const costs = num(inputs.costs);

  const bookings = creators * deals * fee;
  const commission = bookings * rate;
  const revenue = commission + other;
  const profit = revenue - costs;
  const perCreator = creators > 0 ? commission / creators : 0;
  const breakEvenCreators = perCreator > 0 && costs > other ? Math.ceil((costs - other) / perCreator) : null;
  const hasResult = creators > 0 && deals > 0 && fee > 0 && rate > 0;

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
        Agency revenue calculator
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
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Deal value booked for creators</dt>
              <dd className="mt-1 font-display text-2xl text-ink">{inr(bookings)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Agency revenue</dt>
              <dd className="mt-1 font-display text-2xl text-ink">{inr(revenue)}</dd>
              <dd className="mt-1 text-xs text-ink/50">Commission {inr(commission)} + other {inr(other)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">After agency costs</dt>
              <dd className={`mt-1 font-display text-2xl ${profit < 0 ? "text-coral-dim" : "text-ink"}`}>{inr(profit)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Commission per creator</dt>
              <dd className="mt-1 font-display text-2xl text-ink">{inr(perCreator)}</dd>
              {breakEvenCreators !== null && (
                <dd className="mt-1 text-xs text-ink/50">
                  About {breakEvenCreators} similar creators needed to cover costs
                </dd>
              )}
            </div>
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter roster size, deals, average fee and commission to see monthly revenue.</p>
        )}
        <p className="mt-5 text-xs leading-relaxed text-ink/50">
          Amounts are before GST and tax. Real rosters are uneven: a few creators often bring most deals, so also check
          revenue per creator in your own records.
        </p>
      </div>
    </section>
  );
}

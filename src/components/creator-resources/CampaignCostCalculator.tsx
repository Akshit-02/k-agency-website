"use client";

import { useId, useState } from "react";
import { CalculatorShell, NumberField, Results, Stat, inr, toNumber } from "@/components/creator-resources/calculatorUi";

/**
 * Influencer campaign cost calculator used inside /blog/influencer-campaign-cost-india.
 * Creator fees are counts × the fees the brand has actually been quoted per tier;
 * nothing is pre-filled because Indian creator rates vary too much to default.
 */

const TIERS = [
  { key: "nano", label: "Nano" },
  { key: "micro", label: "Micro" },
  { key: "mid", label: "Mid-tier" },
  { key: "macro", label: "Macro" },
] as const;

type TierKey = (typeof TIERS)[number]["key"];
type OtherKey = "agencyPct" | "agencyFixed" | "production" | "usage" | "media" | "product" | "contingencyPct";

const OTHER: { key: OtherKey; label: string; hint: string }[] = [
  { key: "agencyPct", label: "Agency fee as % of creator fees (optional)", hint: "Use this or the fixed fee below, per your quotes" },
  { key: "agencyFixed", label: "Fixed agency or management fee (₹, optional)", hint: "Campaign fee or retainer share for this campaign" },
  { key: "production", label: "Production (₹)", hint: "Shoots, editing, UGC beyond creators' own posts" },
  { key: "usage", label: "Usage rights and whitelisting (₹)", hint: "If creator content will run as ads" },
  { key: "media", label: "Paid amplification media (₹)", hint: "Ad spend behind creator content" },
  { key: "product", label: "Product, shipping and travel (₹)", hint: "Seeding units and logistics" },
  { key: "contingencyPct", label: "Contingency (%)", hint: "Replacements, extra rounds, price changes" },
];

export function CampaignCostCalculator() {
  const id = useId();
  const [counts, setCounts] = useState<Record<TierKey, string>>({ nano: "", micro: "", mid: "", macro: "" });
  const [fees, setFees] = useState<Record<TierKey, string>>({ nano: "", micro: "", mid: "", macro: "" });
  const [other, setOther] = useState<Record<OtherKey, string>>({
    agencyPct: "",
    agencyFixed: "",
    production: "",
    usage: "",
    media: "",
    product: "",
    contingencyPct: "",
  });
  const o = (k: OtherKey) => toNumber(other[k]);

  const creatorCount = TIERS.reduce((sum, t) => sum + toNumber(counts[t.key]), 0);
  const creatorFees = TIERS.reduce((sum, t) => sum + toNumber(counts[t.key]) * toNumber(fees[t.key]), 0);
  const agency = creatorFees * (Math.min(o("agencyPct"), 100) / 100) + o("agencyFixed");
  const beforeContingency = creatorFees + agency + o("production") + o("usage") + o("media") + o("product");
  const contingency = beforeContingency * (Math.min(o("contingencyPct"), 100) / 100);
  const total = beforeContingency + contingency;
  const hasResult = creatorFees > 0;

  return (
    <CalculatorShell
      id={id}
      title="Influencer campaign cost calculator"
      intro="Uses the creator fees you've been quoted and your own cost estimates. It runs in your browser and nothing is saved or sent anywhere."
    >
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink">Creators</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">
        {TIERS.map((t) => (
          <div key={t.key} className="grid grid-cols-2 gap-3">
            <NumberField
              id={`${id}-${t.key}-count`}
              label={`${t.label}: creators`}
              hint="How many"
              value={counts[t.key]}
              onChange={(v) => setCounts((p) => ({ ...p, [t.key]: v }))}
            />
            <NumberField
              id={`${id}-${t.key}-fee`}
              label="Fee each (₹)"
              hint="Quoted, for your deliverables"
              value={fees[t.key]}
              onChange={(v) => setFees((p) => ({ ...p, [t.key]: v }))}
            />
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink">Other costs</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">
        {OTHER.map((f) => (
          <NumberField
            key={f.key}
            id={`${id}-${f.key}`}
            label={f.label}
            hint={f.hint}
            value={other[f.key]}
            onChange={(v) => setOther((p) => ({ ...p, [f.key]: v }))}
          />
        ))}
      </div>
      <Results footnote="Amounts are before GST. Creator fees change with deliverables, usage rights, exclusivity and timelines, so use quotes for the exact scope you need.">
        {hasResult ? (
          <dl className="grid gap-4 sm:grid-cols-2">
            <Stat label="Estimated campaign total" value={inr(total)} note={`Including ${inr(contingency)} contingency`} />
            <Stat label="Creator fees" value={inr(creatorFees)} note={`${creatorCount} creators · ${total > 0 ? Math.round((creatorFees / total) * 100) : 0}% of total`} />
            <Stat label="Agency or management" value={inr(agency)} />
            <Stat label="Average all-in cost per creator" value={inr(creatorCount > 0 ? total / creatorCount : 0)} note="Total divided by creator count" />
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter at least one tier&apos;s creator count and quoted fee to see the campaign total.</p>
        )}
      </Results>
    </CalculatorShell>
  );
}

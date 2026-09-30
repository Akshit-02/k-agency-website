"use client";

import { useId, useState } from "react";
import { CalculatorShell, NumberField, Results, Stat, inr, pct, toNumber } from "@/components/creator-resources/calculatorUi";

/**
 * Fixed-budget allocator used inside /blog/influencer-budget-allocation.
 * Total budget − reserved non-creator share = creator budget; each tier gets the
 * share the reader chooses, divided by the fee they've been quoted. No default
 * splits or fees: they depend on objective, category and deliverables.
 */

const TIERS = [
  { key: "micro", label: "Nano and micro" },
  { key: "mid", label: "Mid-tier" },
  { key: "macro", label: "Macro or celebrity" },
] as const;

type TierKey = (typeof TIERS)[number]["key"];

export function InfluencerBudgetAllocator() {
  const id = useId();
  const [total, setTotal] = useState("");
  const [reserve, setReserve] = useState("");
  const [hold, setHold] = useState("");
  const [split, setSplit] = useState<Record<TierKey, string>>({ micro: "", mid: "", macro: "" });
  const [fees, setFees] = useState<Record<TierKey, string>>({ micro: "", mid: "", macro: "" });

  const budget = toNumber(total);
  const reserved = budget * (Math.min(toNumber(reserve), 100) / 100);
  const held = (budget - reserved) * (Math.min(toNumber(hold), 100) / 100);
  const creatorBudget = budget - reserved - held;
  const splitTotal = TIERS.reduce((s, t) => s + toNumber(split[t.key]), 0);
  const rows = TIERS.map((t) => {
    const share = splitTotal > 0 ? toNumber(split[t.key]) / splitTotal : 0;
    const money = creatorBudget * share;
    const fee = toNumber(fees[t.key]);
    return { ...t, money, count: fee > 0 ? Math.floor(money / fee) : 0, fee };
  });
  const creators = rows.reduce((s, r) => s + r.count, 0);
  const hasResult = budget > 0 && splitTotal > 0 && rows.some((r) => r.fee > 0);

  return (
    <CalculatorShell
      id={id}
      title="Influencer budget allocator"
      intro="Split a fixed budget using your own shares and the fees you've been quoted. It runs in your browser and nothing is saved or sent anywhere."
    >
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <NumberField id={`${id}-total`} label="Total budget (₹)" hint="Approved amount, before GST" value={total} onChange={setTotal} />
        <NumberField id={`${id}-reserve`} label="Reserved for non-creator costs (%)" hint="Management, production, usage, media, product, contingency" value={reserve} onChange={setReserve} />
        <NumberField id={`${id}-hold`} label="Held back for a second wave (%)" hint="Of what's left after reserves; 0 if none" value={hold} onChange={setHold} />
      </div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink">Creator tiers</p>
      <div className="mt-3 space-y-4">
        {TIERS.map((t) => (
          <div key={t.key} className="grid gap-3 sm:grid-cols-2">
            <NumberField
              id={`${id}-${t.key}-split`}
              label={`${t.label}: share of creator budget`}
              hint="Any numbers; they're converted to proportions"
              value={split[t.key]}
              onChange={(v) => setSplit((p) => ({ ...p, [t.key]: v }))}
            />
            <NumberField
              id={`${id}-${t.key}-fee`}
              label="Quoted fee per creator (₹)"
              hint="For the deliverables and rights you need"
              value={fees[t.key]}
              onChange={(v) => setFees((p) => ({ ...p, [t.key]: v }))}
            />
          </div>
        ))}
      </div>
      <Results footnote="Counts are rounded down; leftover money can go to contingency or amplification. Check the count against your team's capacity to manage every creator well.">
        {hasResult ? (
          <>
            <dl className="grid gap-4 sm:grid-cols-3">
              <Stat label="Creator budget now" value={inr(creatorBudget)} note={`Reserved ${inr(reserved)} · held ${inr(held)}`} />
              <Stat label="Creators you can book" value={String(creators)} note="Across tiers, at quoted fees" />
              <Stat label="Creator share of total" value={pct(budget > 0 ? (creatorBudget / budget) * 100 : 0)} />
            </dl>
            <ul className="mt-6 space-y-1 text-sm text-ink/75">
              {rows.map((r) => (
                <li key={r.key}>
                  {r.label}: {inr(r.money)} → {r.fee > 0 ? `${r.count} creator${r.count === 1 ? "" : "s"}` : "enter a fee"}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-sm text-ink/60">Enter the total budget, tier shares and at least one quoted fee to see how many creators it funds.</p>
        )}
      </Results>
    </CalculatorShell>
  );
}

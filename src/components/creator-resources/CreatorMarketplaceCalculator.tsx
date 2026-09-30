"use client";

import { useId, useState } from "react";
import { CalculatorShell, NumberField, Results, Stat, inr, pct, toNumber } from "@/components/creator-resources/calculatorUi";

/**
 * Marketplace fee calculator used inside /blog/creator-marketplace-business-model.
 * Brand pays GMV + brand-side fee; creator receives GMV − creator-side fee;
 * the platform keeps both fees plus subscriptions, minus payment processing
 * on the amount collected. No typical fee levels are suggested.
 */

type Key = "gmv" | "brandFee" | "creatorFee" | "subscriptions" | "processing";

const FIELDS: { key: Key; label: string; hint: string }[] = [
  { key: "gmv", label: "Creator fees transacted this month (₹)", hint: "Gross merchandise value: what brands pay creators through the platform" },
  { key: "brandFee", label: "Brand-side fee (%)", hint: "Charged to brands on top of creator fees; 0 if none" },
  { key: "creatorFee", label: "Creator-side fee (%)", hint: "Deducted from creator payouts; 0 if none" },
  { key: "subscriptions", label: "Subscription and other revenue (₹, optional)", hint: "Monthly plans, managed-service fees, featured listings" },
  { key: "processing", label: "Payment processing cost (%)", hint: "Charged by your payment provider on money collected" },
];

const EMPTY: Record<Key, string> = { gmv: "", brandFee: "", creatorFee: "", subscriptions: "", processing: "" };

export function CreatorMarketplaceCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState(EMPTY);
  const v = (k: Key) => toNumber(inputs[k]);
  const rate = (k: Key) => Math.min(v(k), 100) / 100;

  const gmv = v("gmv");
  const brandFee = gmv * rate("brandFee");
  const creatorFee = gmv * rate("creatorFee");
  const brandPays = gmv + brandFee;
  const creatorGets = gmv - creatorFee;
  const transactionRevenue = brandFee + creatorFee;
  const takeRate = gmv > 0 ? (transactionRevenue / gmv) * 100 : 0;
  const processing = brandPays * rate("processing");
  const netRevenue = transactionRevenue + v("subscriptions") - processing;
  const hasResult = gmv > 0;

  return (
    <CalculatorShell
      id={id}
      title="Marketplace fee calculator"
      intro="Uses your own assumptions for one month. It runs in your browser and nothing is saved or sent anywhere."
    >
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <NumberField
            key={f.key}
            id={`${id}-${f.key}`}
            label={f.label}
            hint={f.hint}
            value={inputs[f.key]}
            onChange={(value) => setInputs((prev) => ({ ...prev, [f.key]: value }))}
          />
        ))}
      </div>
      <Results footnote="Amounts exclude GST and tax deductions, which depend on how the platform invoices and collects; take advice from a chartered accountant. Real platforms may charge differently by plan, campaign type or creator.">
        {hasResult ? (
          <dl className="grid gap-4 sm:grid-cols-2">
            <Stat label="Brands pay in total" value={inr(brandPays)} note={`Creator fees ${inr(gmv)} + platform fee ${inr(brandFee)}`} />
            <Stat label="Creators receive" value={inr(creatorGets)} note={`After a ${inr(creatorFee)} platform fee`} />
            <Stat label="Take rate" value={pct(takeRate)} note={`${inr(transactionRevenue)} transaction revenue`} />
            <Stat label="Platform net revenue" value={inr(netRevenue)} note={`After ${inr(processing)} payment processing`} negative={netRevenue < 0} />
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter the creator fees transacted and your fee assumptions to see what each side pays and keeps.</p>
        )}
      </Results>
    </CalculatorShell>
  );
}

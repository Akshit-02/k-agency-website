"use client";

import { useId, useState } from "react";
import { CalculatorShell, NumberField, Results, Stat, inr, pct, toNumber } from "@/components/creator-resources/calculatorUi";

/**
 * Profitability calculator used inside /blog/creator-agency-profitability.
 * Separates pass-through money (creator fees, third-party costs) from net
 * revenue, then shows gross margin and operating profit as a share of net
 * revenue. Optional hours give utilisation. No benchmark margins are shown:
 * there's no reliable published standard for Indian creator agencies.
 */

type Key = "billings" | "passThrough" | "delivery" | "overheads" | "billedHours" | "availableHours";

const FIELDS: { key: Key; label: string; hint: string }[] = [
  { key: "billings", label: "Gross billings this month (₹)", hint: "Everything invoiced to clients, before GST" },
  { key: "passThrough", label: "Pass-through costs (₹)", hint: "Creator fees and third-party costs paid on clients' behalf" },
  { key: "delivery", label: "Delivery team cost (₹)", hint: "Salaries and freelancers for client and creator work" },
  { key: "overheads", label: "Overheads (₹)", hint: "Leadership, sales, finance, tools, office, your own pay" },
  { key: "billedHours", label: "Hours spent on client work (optional)", hint: "From time tracking, across the delivery team" },
  { key: "availableHours", label: "Available delivery hours (optional)", hint: "Contracted hours minus leave, same team" },
];

const EMPTY: Record<Key, string> = { billings: "", passThrough: "", delivery: "", overheads: "", billedHours: "", availableHours: "" };

export function CreatorAgencyProfitabilityCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState(EMPTY);
  const v = (k: Key) => toNumber(inputs[k]);

  const billings = v("billings");
  const netRevenue = billings - v("passThrough");
  const grossMargin = netRevenue - v("delivery");
  const operatingProfit = grossMargin - v("overheads");
  const onNet = (n: number) => (netRevenue > 0 ? (n / netRevenue) * 100 : 0);
  const utilisation = v("availableHours") > 0 && v("billedHours") > 0 ? (v("billedHours") / v("availableHours")) * 100 : null;
  const perHour = v("billedHours") > 0 && netRevenue > 0 ? netRevenue / v("billedHours") : null;
  const hasResult = billings > 0;

  return (
    <CalculatorShell
      id={id}
      title="Agency profitability calculator"
      intro="Uses only your numbers for one month. It runs in your browser and nothing is saved or sent anywhere."
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
      <Results footnote="Margins are shown as a share of net revenue, not gross billings. Amounts are before GST and income tax; ask your chartered accountant how pass-through money is treated in your books.">
        {hasResult ? (
          <dl className="grid gap-4 sm:grid-cols-2">
            <Stat
              label="Net revenue"
              value={inr(netRevenue)}
              note={`${pct(billings > 0 ? (netRevenue / billings) * 100 : 0)} of gross billings`}
              negative={netRevenue < 0}
            />
            <Stat label="Gross margin" value={inr(grossMargin)} note={`${pct(onNet(grossMargin))} of net revenue`} negative={grossMargin < 0} />
            <Stat
              label="Operating profit"
              value={inr(operatingProfit)}
              note={`${pct(onNet(operatingProfit))} of net revenue`}
              negative={operatingProfit < 0}
            />
            <Stat
              label="Utilisation"
              value={utilisation === null ? "—" : pct(utilisation)}
              note={perHour === null ? "Add hours to see utilisation" : `${inr(perHour)} net revenue per client hour`}
            />
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter gross billings and costs to see net revenue and margins.</p>
        )}
      </Results>
    </CalculatorShell>
  );
}

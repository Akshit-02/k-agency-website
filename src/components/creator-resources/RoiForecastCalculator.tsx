"use client";

import { useId, useState } from "react";
import { CalculatorShell, NumberField, Results, Stat, inr, pct, toNumber } from "@/components/creator-resources/calculatorUi";

/**
 * Influencer ROI forecast used inside /blog/influencer-marketing-roi-forecasting.
 * Three scenarios built only from the brand's own assumptions; nothing is pre-filled
 * because there are no reliable universal click or conversion benchmarks for Indian creator campaigns.
 */

const SCENARIOS = [
  { key: "cautious", label: "Cautious" },
  { key: "expected", label: "Expected" },
  { key: "strong", label: "Strong" },
] as const;

type ScenarioKey = (typeof SCENARIOS)[number]["key"];
type Row = { views: string; ctr: string; cvr: string };
type SharedKey = "aov" | "margin" | "cost";

const SHARED: { key: SharedKey; label: string; hint: string }[] = [
  { key: "aov", label: "Average order value (₹)", hint: "For the promoted product" },
  { key: "margin", label: "Gross margin (%)", hint: "From finance" },
  { key: "cost", label: "Total campaign cost (₹)", hint: "Creators, agency, production, media" },
];

const empty: Row = { views: "", ctr: "", cvr: "" };

export function RoiForecastCalculator() {
  const id = useId();
  const [rows, setRows] = useState<Record<ScenarioKey, Row>>({ cautious: { ...empty }, expected: { ...empty }, strong: { ...empty } });
  const [shared, setShared] = useState<Record<SharedKey, string>>({ aov: "", margin: "", cost: "" });
  const s = (k: SharedKey) => toNumber(shared[k]);

  const results = SCENARIOS.map((sc) => {
    const r = rows[sc.key];
    const visits = toNumber(r.views) * (Math.min(toNumber(r.ctr), 100) / 100);
    const orders = visits * (Math.min(toNumber(r.cvr), 100) / 100);
    const revenue = orders * s("aov");
    const profit = revenue * (Math.min(s("margin"), 100) / 100);
    const net = profit - s("cost");
    return { ...sc, visits, orders, revenue, net, roi: s("cost") > 0 ? (net / s("cost")) * 100 : 0 };
  });
  const hasResult = s("cost") > 0 && s("aov") > 0 && results.some((r) => r.orders > 0);

  const setRow = (k: ScenarioKey, f: keyof Row, v: string) => setRows((p) => ({ ...p, [k]: { ...p[k], [f]: v } }));

  return (
    <CalculatorShell
      id={id}
      title="Influencer ROI forecast calculator"
      intro="Build three scenarios from your own assumptions. It runs in your browser and nothing is saved or sent anywhere."
    >
      {SCENARIOS.map((sc) => (
        <div key={sc.key}>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink">{sc.label} scenario</p>
          <div className="mt-3 grid gap-5 sm:grid-cols-3">
            <NumberField id={`${id}-${sc.key}-views`} label="Total views" hint="Across all creators" value={rows[sc.key].views} onChange={(v) => setRow(sc.key, "views", v)} />
            <NumberField id={`${id}-${sc.key}-ctr`} label="Click-through rate (%)" hint="Views to site visits" value={rows[sc.key].ctr} onChange={(v) => setRow(sc.key, "ctr", v)} />
            <NumberField id={`${id}-${sc.key}-cvr`} label="Conversion rate (%)" hint="Visits to orders" value={rows[sc.key].cvr} onChange={(v) => setRow(sc.key, "cvr", v)} />
          </div>
        </div>
      ))}
      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink">Shared inputs</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-3">
        {SHARED.map((f) => (
          <NumberField key={f.key} id={`${id}-${f.key}`} label={f.label} hint={f.hint} value={shared[f.key]} onChange={(v) => setShared((p) => ({ ...p, [f.key]: v }))} />
        ))}
      </div>
      <Results footnote="Tracked sales only. Content reused in ads, search lift, marketplace sales and later purchases won't appear here, so treat the result as a floor and compare it with actuals after launch.">
        {hasResult ? (
          <dl className="grid gap-4 sm:grid-cols-3">
            {results.map((r) => (
              <Stat
                key={r.key}
                label={`${r.label}: return`}
                value={inr(r.net)}
                negative={r.net < 0}
                note={`ROI ${pct(r.roi)} · ${Math.round(r.orders).toLocaleString("en-IN")} orders · ${inr(r.revenue)} revenue`}
              />
            ))}
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter campaign cost, average order value and at least one scenario to see the forecast.</p>
        )}
      </Results>
    </CalculatorShell>
  );
}

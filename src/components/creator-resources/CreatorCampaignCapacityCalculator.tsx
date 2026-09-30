"use client";

import { useId, useState } from "react";
import { CalculatorShell, NumberField, Results, Stat, pct, toNumber } from "@/components/creator-resources/calculatorUi";

/**
 * Campaign capacity calculator used inside /blog/creator-campaign-capacity-planning.
 * Workload = campaigns × (fixed hours + creators × hours per creator);
 * usable hours = people × hours × (1 − internal share) × target utilisation.
 * No default hours or utilisation are suggested; the reader uses their own.
 */

type Key = "people" | "hours" | "internal" | "utilisation" | "campaigns" | "fixed" | "creators" | "perCreator";

const TEAM: { key: Key; label: string; hint: string }[] = [
  { key: "people", label: "People on campaign delivery", hint: "Count part-timers as fractions, e.g. 0.5" },
  { key: "hours", label: "Hours per person per month", hint: "Contracted hours" },
  { key: "internal", label: "Time on leave and internal work (%)", hint: "Holidays, meetings, training, admin, sales support" },
  { key: "utilisation", label: "Target utilisation (%)", hint: "The share of remaining time you plan to fill, leaving slack" },
];

const WORK: { key: Key; label: string; hint: string }[] = [
  { key: "campaigns", label: "Campaigns this month", hint: "Active campaigns needing work this month" },
  { key: "fixed", label: "Fixed hours per campaign", hint: "Strategy, setup, client calls, reporting, post-mortem" },
  { key: "creators", label: "Creators per campaign (average)", hint: "Across the campaigns above" },
  { key: "perCreator", label: "Hours per creator", hint: "Outreach, contract, brief, reviews, QA, payment follow-up" },
];

const EMPTY: Record<Key, string> = { people: "", hours: "", internal: "", utilisation: "", campaigns: "", fixed: "", creators: "", perCreator: "" };

export function CreatorCampaignCapacityCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState(EMPTY);
  const v = (k: Key) => toNumber(inputs[k]);
  const set = (k: Key) => (value: string) => setInputs((prev) => ({ ...prev, [k]: value }));

  const internal = Math.min(v("internal"), 100) / 100;
  const utilisation = Math.min(v("utilisation"), 100) / 100;
  const usable = v("people") * v("hours") * (1 - internal) * utilisation;
  const perCampaign = v("fixed") + v("creators") * v("perCreator");
  const workload = v("campaigns") * perCampaign;
  const used = usable > 0 ? (workload / usable) * 100 : 0;
  const maxCampaigns = perCampaign > 0 ? Math.floor(usable / perCampaign) : 0;
  const gap = usable - workload;
  const perPerson = v("hours") * (1 - internal) * utilisation;
  const hasResult = usable > 0 && perCampaign > 0 && v("campaigns") > 0;

  const renderFields = (fields: typeof TEAM) =>
    fields.map((f) => (
      <NumberField key={f.key} id={`${id}-${f.key}`} label={f.label} hint={f.hint} value={inputs[f.key]} onChange={set(f.key)} />
    ));

  return (
    <CalculatorShell
      id={id}
      title="Campaign capacity calculator"
      intro="Uses your own team and campaign estimates for one month. It runs in your browser and nothing is saved or sent anywhere."
    >
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink">Team</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">{renderFields(TEAM)}</div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink">Work</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">{renderFields(WORK)}</div>
      <Results footnote="Monthly totals can hide weekly peaks: check the busiest weeks separately. Refine hours per campaign and per creator from logged time on real campaigns.">
        {hasResult ? (
          <dl className="grid gap-4 sm:grid-cols-2">
            <Stat label="Capacity used" value={pct(used)} note={used > 100 ? "Over your planned capacity" : "Of planned usable hours"} negative={used > 100} />
            <Stat label="Hours needed vs usable" value={`${Math.round(workload)} / ${Math.round(usable)}`} note={`${Math.round(perCampaign)} hours per campaign`} />
            <Stat label="Campaigns you can carry" value={String(maxCampaigns)} note="At this campaign size and team" />
            <Stat
              label={gap >= 0 ? "Spare hours" : "Hours short"}
              value={String(Math.round(Math.abs(gap)))}
              note={gap < 0 && perPerson > 0 ? `About ${(Math.abs(gap) / perPerson).toFixed(1)} extra people at your utilisation` : undefined}
              negative={gap < 0}
            />
          </dl>
        ) : (
          <p className="text-sm text-ink/60">Enter team size, hours, utilisation and campaign estimates to see capacity.</p>
        )}
      </Results>
    </CalculatorShell>
  );
}

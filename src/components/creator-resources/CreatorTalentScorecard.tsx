"use client";

import { useId, useState } from "react";
import { FieldWrapper, SelectInput } from "@/components/forms/FormFields";
import { Results, Stat, pct } from "@/components/creator-resources/calculatorUi";

/**
 * Talent screening scorecard used inside /blog/creator-talent-screening.
 * Must-pass checks gate the result; weighted 1–5 ratings give a comparable
 * score. The starting weights are editable placeholders, not a standard, and
 * no pass mark is suggested: agencies compare candidates and set their own.
 */

const GATES = [
  { id: "authenticity", label: "Audience looks authentic" },
  { id: "safety", label: "No serious brand-safety issues" },
  { id: "disclosure", label: "Past sponsored content was disclosed" },
  { id: "conduct", label: "Professional conduct and references are sound" },
] as const;

const CRITERIA = [
  { id: "audience", label: "Audience fit with the brands you serve", weight: 3 },
  { id: "content", label: "Content quality and consistency", weight: 2 },
  { id: "commercial", label: "Commercial potential (repeat bookings)", weight: 3 },
  { id: "professionalism", label: "Professionalism and working style", weight: 2 },
  { id: "growth", label: "Growth trajectory", weight: 1 },
  { id: "roster", label: "Roster fit (fills a gap, low conflict)", weight: 2 },
] as const;

type CriterionId = (typeof CRITERIA)[number]["id"];
type GateId = (typeof GATES)[number]["id"];

export function CreatorTalentScorecard() {
  const id = useId();
  const [gates, setGates] = useState<Record<GateId, boolean>>({ authenticity: false, safety: false, disclosure: false, conduct: false });
  const [ratings, setRatings] = useState<Record<CriterionId, number>>(
    Object.fromEntries(CRITERIA.map((c) => [c.id, 0])) as Record<CriterionId, number>
  );
  const [weights, setWeights] = useState<Record<CriterionId, number>>(
    Object.fromEntries(CRITERIA.map((c) => [c.id, c.weight])) as Record<CriterionId, number>
  );

  const rated = CRITERIA.filter((c) => ratings[c.id] > 0);
  const maxPoints = rated.reduce((sum, c) => sum + 5 * weights[c.id], 0);
  const points = rated.reduce((sum, c) => sum + ratings[c.id] * weights[c.id], 0);
  const score = maxPoints > 0 ? (points / maxPoints) * 100 : 0;
  const gatesPassed = GATES.every((g) => gates[g.id]);
  const allRated = rated.length === CRITERIA.length;
  const weakest = allRated ? [...CRITERIA].sort((a, b) => ratings[a.id] - ratings[b.id])[0] : null;

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
        Talent screening scorecard
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        One creator at a time. It runs in your browser and nothing is saved or sent anywhere.
      </p>

      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-wide text-ink">Must-pass checks</legend>
        <ul className="mt-3 space-y-2">
          {GATES.map((g) => (
            <li key={g.id}>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={gates[g.id]}
                  onChange={(e) => setGates((prev) => ({ ...prev, [g.id]: e.target.checked }))}
                  className="mt-0.5 size-4 accent-[var(--color-coral)]"
                />
                {g.label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink">Fit criteria</p>
      <div className="mt-3 space-y-5">
        {CRITERIA.map((c) => (
          <div key={c.id} className="grid gap-3 sm:grid-cols-[1fr_140px_110px] sm:items-end">
            <p className="text-sm text-ink/80 sm:pb-3.5">{c.label}</p>
            <FieldWrapper label="Rating" htmlFor={`${id}-${c.id}-rating`}>
              <SelectInput
                id={`${id}-${c.id}-rating`}
                value={ratings[c.id]}
                onChange={(e) => setRatings((prev) => ({ ...prev, [c.id]: Number(e.target.value) }))}
              >
                <option value={0}>Not rated</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </SelectInput>
            </FieldWrapper>
            <FieldWrapper label="Weight" htmlFor={`${id}-${c.id}-weight`}>
              <SelectInput
                id={`${id}-${c.id}-weight`}
                value={weights[c.id]}
                onChange={(e) => setWeights((prev) => ({ ...prev, [c.id]: Number(e.target.value) }))}
              >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </SelectInput>
            </FieldWrapper>
          </div>
        ))}
      </div>

      <Results footnote="Starting weights are placeholders to adjust for your agency. There's no universal pass mark: compare candidates on the same weights, and let brand demand and roster gaps decide between similar scores.">
        {!gatesPassed ? (
          <p className="text-sm text-ink/70">
            Tick all four must-pass checks to see a score. A creator who fails any of them shouldn&apos;t be signed, whatever
            their numbers.
          </p>
        ) : rated.length === 0 ? (
          <p className="text-sm text-ink/60">Rate each criterion from 1 to 5 to see the weighted score.</p>
        ) : (
          <dl className="grid gap-4 sm:grid-cols-2">
            <Stat label="Weighted fit score" value={pct(score)} note={allRated ? "All criteria rated" : `${rated.length} of ${CRITERIA.length} criteria rated`} />
            <Stat label="Weakest area" value={weakest ? weakest.label : "—"} note={weakest ? `Rated ${ratings[weakest.id]} of 5` : "Rate every criterion"} />
          </dl>
        )}
      </Results>
    </section>
  );
}

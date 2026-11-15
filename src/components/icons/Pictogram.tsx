import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Kudozz pictograms: one hand-drawn set for every concept icon on the site (services, process steps, benefits).
 *
 * Grid: 48 x 48, live area 3–45. Strokes use currentColor and `vector-effect: non-scaling-stroke` (see globals.css),
 * so line weight stays at `weight` px at every rendered size and matches the Lucide UI icons.
 * Two tones only: the line colour (currentColor) and one accent fill (`--kz-accent`, coral by default), set with the
 * `accent` prop or by overriding `--kz-accent` in a parent/hover class.
 *
 * Class hooks inside a glyph: `kz-a` accent fill (keeps its outline), `kz-f` solid currentColor fill (no outline),
 * `kz-ns` removes the outline.
 *
 * Smallest supported render size is 24px. Use UI icons from lucide-react for controls (arrows, menu, close, check).
 */
const glyphs = {
  /** Influencer marketing: a creator on a phone screen, with audience love. */
  creator: (
    <>
      <rect x="10" y="4" width="22" height="40" rx="4" />
      <path d="M18 8.5h6" />
      <circle cx="21" cy="19" r="5" />
      <path d="M12.5 34c1.5-5 5-7.5 8.5-7.5s7 2.5 8.5 7.5" />
      <path className="kz-a" d="M37 25s-7.5-4.4-7.5-9.3a3.8 3.8 0 0 1 7.5-1 3.8 3.8 0 0 1 7.5 1c0 4.9-7.5 9.3-7.5 9.3z" />
    </>
  ),
  /** Strategy: a roadmap from start point to goal flag. */
  strategy: (
    <>
      <path d="M13 38h13a6 6 0 0 0 0-12h-8a6 6 0 0 1 0-12h12" />
      <circle className="kz-a" cx="9.5" cy="38" r="3.5" />
      <path d="M34 4v18" />
      <path className="kz-a" d="M34 5h9.5l-2.8 4.5 2.8 4.5H34z" />
    </>
  ),
  /** Creator discovery: a creator profile card checked under a lens. */
  discovery: (
    <>
      <rect x="4" y="7" width="27" height="33" rx="3" />
      <circle cx="17.5" cy="18" r="4.5" />
      <path d="M10 31c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" />
      <circle className="kz-a" cx="33" cy="30" r="8.5" />
      <path d="M29.2 30.2l2.6 2.6 4.6-5" />
      <path d="M39.2 36.2L45 42" />
    </>
  ),
  /** Outreach and management: brief sent, terms agreed. */
  outreach: (
    <>
      <path d="M7 6h23a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H16l-6 5v-5H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" />
      <path d="M10 12.5h17M10 17.5h11" />
      <path className="kz-a" d="M21 22h20a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2v6l-7-6H21a3 3 0 0 1-3-3V25a3 3 0 0 1 3-3z" />
      <path d="M25.5 30.5l3.5 3.5 6.5-7" />
    </>
  ),
  /** Social campaign: a megaphone broadcasting to an audience. */
  campaign: (
    <>
      <rect x="5" y="17" width="9" height="14" rx="2" />
      <path className="kz-a" d="M14 17l15-8v30l-15-8z" />
      <path d="M16 31l3 10h4.5l-2.3-8.2" />
      <path d="M35 19a7 7 0 0 1 0 10M39.5 14a14 14 0 0 1 0 20" />
    </>
  ),
  /** Product launch: a rocket at lift-off. */
  launch: (
    <>
      <path className="kz-a" d="M19.5 36.5c0 4.5 2 7 4.5 8.5 2.5-1.5 4.5-4 4.5-8.5z" />
      <path d="M24 4c6 5 9 12 9 20v12.5H15V24c0-8 3-15 9-20z" />
      <circle cx="24" cy="20" r="3.5" />
      <path d="M15 26l-6 6v6.5l6-3.5M33 26l6 6v6.5l-6-3.5" />
    </>
  ),
  /** UGC: a phone filming a product, the creator-made video a brand can reuse. */
  ugc: (
    <>
      <rect x="6" y="4" width="25" height="40" rx="4" />
      <circle className="kz-f" cx="11.5" cy="9.5" r="1.9" />
      <rect x="15.5" y="14" width="6" height="5" rx="1" />
      <rect className="kz-a" x="13" y="19" width="11" height="17" rx="2.5" />
      <circle className="kz-f" cx="37" cy="35" r="8" />
      <path className="kz-a kz-ns" d="M34.6 31.4v7.2l6-3.6z" />
    </>
  ),
  /** Ambassador programme: a medal for long-term partners. */
  ambassador: (
    <>
      <path d="M17 29l-4.5 15 6.5-3 4 5.5 2.5-9.5M31 29l4.5 15-6.5-3-4 5.5-2.5-9.5" />
      <circle className="kz-a" cx="24" cy="19" r="13" />
      <path
        className="kz-f"
        d="M24 12.5l1.7 4.3 4.6.3-3.6 2.9 1.2 4.5-3.9-2.5-3.9 2.5 1.2-4.5-3.6-2.9 4.6-.3z"
      />
    </>
  ),
  /** Reporting: a report with results by creator. */
  report: (
    <>
      <path d="M9 4h21l9 9v31H9z" />
      <path d="M30 4v9h9" />
      <path d="M14.5 12h10M14.5 17.5h7" />
      <rect className="kz-a" x="14.5" y="30" width="5" height="8.5" />
      <rect className="kz-a" x="21.5" y="25" width="5" height="13.5" />
      <rect className="kz-a" x="28.5" y="20" width="5" height="18.5" />
    </>
  ),
  /** Paid campaign: a signed contract and the fee. */
  paid: (
    <>
      <rect x="5" y="4" width="27" height="35" rx="2" />
      <path d="M10.5 11.5h16M10.5 17.5h16M10.5 23.5h10" />
      <path d="M10.5 31.5c2-3 3.6-3 4.6 0s3.2 2 5-1" />
      <circle className="kz-a" cx="35" cy="34" r="9.5" />
      <circle cx="35" cy="34" r="5" />
    </>
  ),
  /** Barter: product goes out, content comes back. */
  barter: (
    <>
      <rect className="kz-a" x="4" y="23" width="17" height="15" />
      <rect x="3" y="18" width="19" height="5" />
      <path d="M12.5 18v20" />
      <rect x="29" y="13" width="15" height="26" rx="3" />
      <path className="kz-f" d="M34 21.5v7l6-3.5z" />
      <path d="M8 10h17M22 6.5l3.5 3.5-3.5 3.5" />
      <path d="M38 44H20.5M24 40.5L20.5 44l3.5 3.5" />
    </>
  ),
  /** Seeding and gifting: a gift box. */
  gift: (
    <>
      <rect className="kz-a" x="8" y="22" width="32" height="21" rx="1.5" />
      <rect x="5" y="15" width="38" height="7" rx="1.5" />
      <path d="M24 15v28" />
      <path d="M24 15c-2-6-10.5-8.5-10.5-3 0 2.3 3.5 3 10.5 3zM24 15c2-6 10.5-8.5 10.5-3 0 2.3-3.5 3-10.5 3z" />
    </>
  ),
  /** Affiliate and performance: a commission tag. */
  affiliate: (
    <>
      <path
        className="kz-a"
        d="M26 5h15a2 2 0 0 1 2 2v15L23.4 41.6a2 2 0 0 1-2.8 0L6.4 27.4a2 2 0 0 1 0-2.8z"
      />
      <circle cx="35" cy="13" r="2.6" />
      <path d="M19 31.5l9.5-9.5" />
      <circle className="kz-f" cx="19.5" cy="23" r="2.2" />
      <circle className="kz-f" cx="28" cy="31" r="2.2" />
    </>
  ),
  /** Production: a clapperboard for briefs, shot lists and shoots (UGC campaigns). */
  production: (
    <>
      <rect className="kz-a" x="5" y="19" width="38" height="24" rx="2" />
      <path d="M5 11.5l36.5-6 1.3 7.6L6.3 19z" />
      <path d="M13.5 10l2.6 7.3M22.5 8.5l2.6 7.3M31.5 7l2.6 7.3" />
      <path className="kz-f" d="M20 25.5v12l10-6z" />
    </>
  ),
  /** Regional: a map with a location pin. */
  regional: (
    <>
      <path d="M4 13l12-5 16 5 12-5v28l-12 5-16-5-12 5z" />
      <path d="M16 8v28M32 13v28" />
      <path className="kz-a" d="M24 6a8 8 0 0 0-8 8c0 6.5 8 15 8 15s8-8.5 8-15a8 8 0 0 0-8-8z" />
      <circle className="kz-f" cx="24" cy="14" r="2.8" />
    </>
  ),
  /** Micro and nano creators: many smaller voices, one in focus. */
  micro: (
    <>
      <circle cx="10" cy="20" r="4.5" />
      <path d="M3 38c0-4.6 3-7.6 7-7.6 2 0 3.6.6 4.8 1.6M45 38c0-4.6-3-7.6-7-7.6-2 0-3.6.6-4.8 1.6" />
      <circle cx="38" cy="20" r="4.5" />
      <circle className="kz-a" cx="24" cy="17" r="6.5" />
      <path className="kz-a" d="M13.5 41c0-6.5 4.6-10.5 10.5-10.5S34.5 34.5 34.5 41z" />
    </>
  ),
  /** Social media management: a monthly content calendar with an approved post. */
  calendar: (
    <>
      <rect x="4" y="8" width="40" height="35" rx="3" />
      <path d="M4 17h40M14 4v8M34 4v8" />
      <rect x="9.5" y="22.5" width="6" height="6" rx="1" />
      <rect x="18.5" y="22.5" width="6" height="6" rx="1" />
      <rect x="9.5" y="31.5" width="6" height="6" rx="1" />
      <rect x="18.5" y="31.5" width="6" height="6" rx="1" />
      <rect className="kz-a" x="28" y="22.5" width="11" height="15" rx="1.5" />
      <path d="M30.5 30l2.4 2.4 4-4.4" />
    </>
  ),
  /** Brief: what the brand needs, written down first. */
  brief: (
    <>
      <path d="M15 8h-4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-4" />
      <rect className="kz-a" x="15" y="4" width="18" height="8" rx="2" />
      <path d="M15 20h18M15 27h18M15 34h11" />
    </>
  ),
  /** Objective or KPI: one target. */
  target: (
    <>
      <circle cx="22" cy="26" r="18" />
      <circle className="kz-a" cx="22" cy="26" r="11" />
      <circle className="kz-f" cx="22" cy="26" r="4" />
      <path d="M22 26L39 9M39 9V3.5M39 9h5.5" />
    </>
  ),
  /** Analytics and performance tracking: a dashboard trending up. */
  analytics: (
    <>
      <path className="kz-a kz-ns" d="M9 30l8-8 6 5 10-10 6.5 4.5V30z" />
      <rect x="4" y="6" width="40" height="28" rx="3" />
      <path d="M9 30l8-8 6 5 10-10 6.5 4.5" />
      <path d="M17 43h14M24 34v9" />
    </>
  ),
  /** Research: studying the category and competitors. */
  research: (
    <>
      <path d="M5 42h30" />
      <rect x="7" y="27" width="6" height="15" />
      <rect x="16" y="19" width="6" height="23" />
      <circle className="kz-a" cx="33" cy="16" r="9" />
      <path d="M39.4 22.4L45 28" />
      <path d="M29 17.5l3-3 3 2.5 3-4" />
    </>
  ),
  /** Community management: replies to the audience in brand voice. */
  community: (
    <>
      <circle cx="14" cy="21" r="6" />
      <path d="M3.5 43c0-7 4.5-11.5 10.5-11.5S24.5 36 24.5 43" />
      <path className="kz-a" d="M26 4h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5l-6 5v-5h-5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
      <circle className="kz-f" cx="29.5" cy="12" r="1.6" />
      <circle className="kz-f" cx="34" cy="12" r="1.6" />
      <circle className="kz-f" cx="38.5" cy="12" r="1.6" />
    </>
  ),
  /** Scheduling and publishing: a post queued for a time slot. */
  publish: (
    <>
      <rect x="4" y="6" width="25" height="35" rx="2.5" />
      <rect className="kz-a" x="8" y="10" width="17" height="15" rx="1" />
      <path d="M8 30.5h17M8 35.5h11" />
      <circle cx="37" cy="33" r="8" />
      <path d="M37 28.5V33l3 2" />
    </>
  ),
  /** Content approval: a checklist signed off. */
  approval: (
    <>
      <rect x="7" y="4" width="28" height="38" rx="2" />
      <path d="M12 12.5l2.2 2.2 3.8-4.2M22 13h8M12 21.5l2.2 2.2 3.8-4.2M22 22h8M12.5 31h10" />
      <circle className="kz-a" cx="36" cy="36" r="8.5" />
      <path d="M32.3 36.2l2.6 2.6 4.8-5.2" />
    </>
  ),
  /** Creative design: a palette. */
  design: (
    <>
      <path d="M24 5C13.5 5 5 13 5 23s8 18 17 18c2.5 0 3.5-1.5 3.5-3.2 0-2.5-2-3-2-5.3 0-1.8 1.4-3 3.3-3H33c5.5 0 10-3.7 10-9.5C43 11.5 34.5 5 24 5z" />
      <circle className="kz-a" cx="14.5" cy="21" r="3.2" />
      <circle className="kz-f" cx="20.5" cy="12.5" r="3" />
      <circle className="kz-a" cx="30" cy="12" r="3.2" />
      <circle className="kz-f" cx="36" cy="20" r="3" />
    </>
  ),
  /** Reels and short-form video: a vertical video. */
  video: (
    <>
      <rect className="kz-a" x="12" y="4" width="24" height="40" rx="3.5" />
      <path className="kz-f" d="M20 16.5v12l10-6z" />
      <path d="M17 37h14" />
      <circle className="kz-f" cx="22" cy="37" r="2" />
    </>
  ),
  /** Copywriting: captions and scripts. */
  copy: (
    <>
      <path d="M5 10h26M5 18h21M5 26h14M5 34h9" />
      <path className="kz-a" d="M39.5 13.5l4 4L25 36l-6.5 2.5L21 32z" />
      <path d="M36 17l4 4" />
    </>
  ),
  /** Creator and brand partnership: two sides, one agreement. */
  partnership: (
    <>
      <circle cx="13" cy="14" r="6" />
      <path d="M4 32c0-5.5 4-9 9-9s9 3.5 9 9" />
      <rect className="kz-a" x="29" y="8" width="15" height="15" rx="3" />
      <path d="M33 15.5l2.5 2.5 4.5-5" />
      <path d="M13 36v5h23.5V27" />
      <path className="kz-f" d="M24.7 44.5s-4.2-2.5-4.2-5.3a2.1 2.1 0 0 1 4.2-.6 2.1 2.1 0 0 1 4.2.6c0 2.8-4.2 5.3-4.2 5.3z" />
    </>
  ),
  /** End-to-end management: every stage connected in one workflow. */
  workflow: (
    <>
      <rect x="4" y="6" width="14" height="11" rx="2" />
      <rect className="kz-a" x="30" y="6" width="14" height="11" rx="2" />
      <rect x="17" y="32" width="14" height="11" rx="2" />
      <path d="M18 11.5h12M37 17v7.5H24V32" />
      <path d="M26.5 8.5l3 3-3 3" />
    </>
  ),
  /** Authenticity checks: audience vetted, fake followers screened out. */
  shield: (
    <>
      <path className="kz-a" d="M24 4l16 6v12c0 10-7 17.5-16 21C15 39.5 8 32 8 22V10z" />
      <path d="M17 23.5l5 5 9.5-10" />
    </>
  ),
  /** Audience fit: where the creator's audience and the brand's customers overlap. */
  match: (
    <>
      <path className="kz-a kz-ns" d="M24 13.6A12 12 0 0 1 24 34.4A12 12 0 0 1 24 13.6z" />
      <circle cx="17" cy="24" r="12" />
      <circle cx="31" cy="24" r="12" />
    </>
  ),
  /** Growth: results that compound over time. */
  growth: (
    <>
      <rect className="kz-a" x="7" y="34" width="7" height="9" />
      <rect className="kz-a" x="18" y="28" width="7" height="15" />
      <rect className="kz-a" x="29" y="22" width="7" height="21" />
      <path d="M5 24l10-8 7 5L40 7M32 7h8v8" />
    </>
  ),
  /** Application: a creator profile form. */
  apply: (
    <>
      <rect x="6" y="4" width="28" height="38" rx="2" />
      <circle cx="14.5" cy="13" r="3.5" />
      <path d="M22 11h7M22 16h5" />
      <rect x="11" y="23" width="18" height="5" rx="1" />
      <rect x="11" y="31.5" width="12" height="5" rx="1" />
      <circle className="kz-a" cx="37" cy="37" r="8" />
      <path d="M37 33v8M33 37h8" />
    </>
  ),
  /** Creator profile: your content and audience at a glance. */
  profile: (
    <>
      <rect x="9" y="4" width="30" height="40" rx="4" />
      <circle className="kz-a" cx="24" cy="14.5" r="5" />
      <rect className="kz-f" x="14" y="25" width="5.5" height="5.5" />
      <rect className="kz-f" x="21.25" y="25" width="5.5" height="5.5" />
      <rect className="kz-f" x="28.5" y="25" width="5.5" height="5.5" />
      <rect className="kz-f" x="14" y="32.5" width="5.5" height="5.5" />
      <rect className="kz-f" x="21.25" y="32.5" width="5.5" height="5.5" />
      <rect className="kz-f" x="28.5" y="32.5" width="5.5" height="5.5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type PictogramName = keyof typeof glyphs;

const accents = {
  coral: "[--kz-accent:var(--color-coral)]",
  lime: "[--kz-accent:var(--color-lime)]",
  paper: "[--kz-accent:var(--color-paper)]",
  ink: "[--kz-accent:var(--color-ink)]",
} as const;

export type PictogramAccent = keyof typeof accents;

export function Pictogram({
  name,
  className,
  accent,
  weight = 2,
  label,
}: {
  name: PictogramName;
  className?: string;
  /** Accent fill. Omit to inherit `--kz-accent` from a parent (defaults to coral). */
  accent?: PictogramAccent;
  /** Stroke width in screen pixels. */
  weight?: number;
  /** Accessible name. Omit for decorative use next to visible text (the usual case). */
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("kz-icon size-10 shrink-0", accent && accents[accent], className)}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      focusable="false"
    >
      {glyphs[name]}
    </svg>
  );
}

/**
 * The dimensional icon tile used on prominent cards: a solid square with the site's ink border and hard offset
 * shadow (the same depth language as the cards and buttons), lifting slightly on hover of a `group` parent.
 */
export function IconTile({
  name,
  className,
  iconClassName,
  accent,
  size = "md",
}: {
  name: PictogramName;
  /** Tile background and icon colour, e.g. "bg-paper text-ink". */
  className?: string;
  iconClassName?: string;
  accent?: PictogramAccent;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: { tile: "size-12", icon: "size-9", shadow: "shadow-[3px_3px_0_0_var(--color-ink)]" },
    md: { tile: "size-16", icon: "size-12", shadow: "shadow-[4px_4px_0_0_var(--color-ink)]" },
    lg: { tile: "size-20 sm:size-24", icon: "size-15 sm:size-[4.5rem]", shadow: "shadow-[5px_5px_0_0_var(--color-ink)]" },
  }[size];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center border-[1.5px] border-ink bg-paper text-ink transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5",
        dims.tile,
        dims.shadow,
        className
      )}
    >
      <Pictogram name={name} accent={accent} className={cn(dims.icon, iconClassName)} />
    </span>
  );
}

import type { CaseStudy } from "@/content/case-studies";
import { BroadcastRings } from "@/components/graphics/BroadcastRings";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const accentStyles = {
  lime: { panel: "bg-lime text-ink", ring: "text-ink" },
  coral: { panel: "bg-coral text-ink", ring: "text-ink" },
  ink: { panel: "bg-violet text-paper", ring: "text-lime" },
} as const;

export function CampaignTile({
  caseStudy,
  index,
  size = "compact",
}: {
  caseStudy: CaseStudy;
  index: number;
  size?: "large" | "compact";
}) {
  const accent = accentStyles[caseStudy.accent];
  const large = size === "large";

  return (
    <Reveal delay={index * 0.06} className="group h-full">
      <article
        className={cn(
          "grid h-full overflow-hidden border-[1.5px] border-ink shadow-[8px_8px_0_0_var(--color-ink)]",
          large ? "sm:grid-cols-2" : "grid-rows-[14rem_auto]"
        )}
      >
        <div className={cn("relative flex items-center justify-center overflow-hidden p-8", accent.panel, large && "sm:min-h-[26rem]")}>
          <BroadcastRings
            className={cn(
              "transition-transform duration-700 ease-out group-hover:scale-110",
              accent.ring,
              large ? "h-48 w-48" : "h-32 w-32"
            )}
          />
          <span className="absolute left-5 top-5 border-[1.5px] border-current px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
            {caseStudy.industry}
          </span>
        </div>

        <div className="flex flex-col justify-between gap-6 bg-paper p-7 sm:p-8">
          <div>
            {caseStudy.isSample && (
              <span className="mb-3 inline-block text-xs font-medium uppercase tracking-wide text-ink/40">
                Sample Case Study
              </span>
            )}
            <h3 className={cn("font-display tracking-tight text-ink", large ? "text-3xl sm:text-4xl" : "text-2xl")}>
              {caseStudy.brand}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-wide text-ink/45">{caseStudy.creatorCategory}</p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65">{caseStudy.summary}</p>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t-[1.5px] border-ink pt-5">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-[11px] uppercase tracking-wide text-ink/45">{metric.label}</dt>
                <dd className={cn("font-black-display mt-1 tracking-tight text-ink", large ? "text-2xl" : "text-xl")}>
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </Reveal>
  );
}

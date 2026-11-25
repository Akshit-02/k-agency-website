import { ArrowUpRight, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { DiscoveryCTA } from "@/components/discovery/DiscoveryCTA";
import { DiscoveryLink } from "@/components/discovery/DiscoveryLink";
import { DISCOVERY_NAME, type DiscoveryPlacement } from "@/config/discovery";
import { cn } from "@/lib/utils";

export type DiscoveryBannerCopy = {
  headline: string;
  body: string;
  ctaLabel: string;
  /** Short verified points, shown only by the "feature" variant. */
  points?: string[];
};

/**
 * Contextual Kudozz Discovery promotion in three sizes, so pages never re-implement the block:
 * - "feature": a full-width ink band for the most relevant service pages (influencer marketing, creator discovery).
 * - "compact": a slim bordered strip near the end of a service page.
 * - "blog": an inline aside inside an article column (see DiscoveryBlogCTA).
 * The full homepage experience is DiscoveryPromoSection; nav and footer use DiscoveryLink directly.
 */
export function DiscoveryCTABanner({
  variant,
  copy,
  placement,
  topic,
  className,
}: {
  variant: "feature" | "compact" | "blog";
  copy: DiscoveryBannerCopy;
  placement: DiscoveryPlacement;
  topic?: string;
  className?: string;
}) {
  const label = (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-black-display text-[11px] tracking-[0.14em]",
        variant === "feature" ? "text-lime" : "text-coral-deep"
      )}
    >
      <Search className="size-3.5" aria-hidden="true" />
      {DISCOVERY_NAME.toUpperCase()}
    </p>
  );

  if (variant === "feature") {
    return (
      <section aria-label={DISCOVERY_NAME} className={cn("kz-discovery relative overflow-hidden bg-ink py-16 text-paper sm:py-20", className)}>
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-[26rem] rounded-full bg-coral/20 blur-[120px]" />
        <Container className="relative">
          <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              {label}
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">{copy.headline}</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/75">{copy.body}</p>
              <div className="mt-8">
                <DiscoveryCTA placement={placement} topic={topic} variant="bright-dark">
                  {copy.ctaLabel}
                </DiscoveryCTA>
              </div>
            </div>
            {copy.points && (
              <ul className="grid gap-3 border-t-[1.5px] border-paper/15 pt-6 lg:border-l-[1.5px] lg:border-t-0 lg:pl-10 lg:pt-0">
                {copy.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-paper/75">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </Container>
      </section>
    );
  }

  const link = (
    <DiscoveryLink
      placement={placement}
      topic={topic}
      label={copy.ctaLabel}
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral-deep"
    >
      {copy.ctaLabel}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </DiscoveryLink>
  );

  if (variant === "compact") {
    return (
      <Container className={cn("py-10 sm:py-12", className)}>
        <aside
          aria-label={DISCOVERY_NAME}
          className="kz-discovery flex flex-col gap-5 border-[1.5px] border-ink bg-paper px-6 py-6 shadow-[6px_6px_0_0_var(--color-lime)] sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div className="max-w-2xl">
            {label}
            <p className="mt-2 font-display text-xl leading-snug tracking-tight text-ink sm:text-2xl">{copy.headline}</p>
            <p className="mt-1.5 text-base leading-relaxed text-ink/70">{copy.body}</p>
          </div>
          <div className="shrink-0">{link}</div>
        </aside>
      </Container>
    );
  }

  return (
    <aside aria-label={DISCOVERY_NAME} className={cn("kz-discovery not-prose border-l-4 border-coral bg-ink/[0.035] px-6 py-6 sm:px-7", className)}>
      {label}
      <p className="mt-2 font-display text-xl leading-snug tracking-tight text-ink sm:text-2xl">{copy.headline}</p>
      <p className="mt-2 text-base leading-relaxed text-ink/70">{copy.body}</p>
      <div className="mt-4">{link}</div>
    </aside>
  );
}

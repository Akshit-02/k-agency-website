"use client";

import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import Link from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { DISCOVERY_NAME, discoveryBlogHref } from "@/config/discovery";
import { trackDiscoveryArticleClick } from "@/lib/discoveryAnalytics";

/**
 * Kudozz Discovery CTAs inside Discovery articles.
 * - "mid": hand-placed in the body via a `discovery-cta` block; restrained, sits in the reading column.
 * - "end": after the FAQ, before related articles; the stronger ink panel, with a quiet agency alternative.
 * Links carry utm_medium=blog, utm_campaign=discovery_content, utm_content=<slug>.
 */
export function DiscoveryArticleCTA({
  variant,
  slug,
  title,
  headline,
  body,
  ctaLabel = "Explore Kudozz Discovery",
}: {
  variant: "mid" | "end";
  slug: string;
  title: string;
  headline: string;
  body: string;
  ctaLabel?: string;
}) {
  const href = discoveryBlogHref(slug);
  const track = () =>
    trackDiscoveryArticleClick({ slug, title, placement: variant === "mid" ? "mid_article" : "end_article", label: ctaLabel, destination: href });

  if (variant === "mid") {
    return (
      <aside aria-label={DISCOVERY_NAME} className="kz-discovery not-prose border-[1.5px] border-ink/15 border-l-4 border-l-coral bg-paper-dim px-6 py-6 sm:px-7">
        <p className="inline-flex items-center gap-2 font-black-display text-[11px] tracking-[0.14em] text-coral-deep">
          <Search className="size-3.5" aria-hidden="true" />
          {DISCOVERY_NAME.toUpperCase()}
        </p>
        <p className="mt-2 font-display text-xl leading-snug tracking-tight text-ink sm:text-2xl">{headline}</p>
        <p className="mt-2 text-base leading-relaxed text-ink/70">{body}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={track}
          className="group mt-4 inline-flex items-center gap-1.5 bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-coral hover:text-ink"
        >
          {ctaLabel}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </aside>
    );
  }

  return (
    <section aria-label={DISCOVERY_NAME} className="kz-discovery relative overflow-hidden border-[1.5px] border-ink bg-ink px-7 py-10 text-paper shadow-[8px_8px_0_0_var(--color-coral)] sm:px-12 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-coral/25 blur-[90px]" />
      <div className="relative">
        <p className="inline-flex items-center gap-2 font-black-display text-[11px] tracking-[0.14em] text-lime">
          <Search className="size-3.5" aria-hidden="true" />
          {DISCOVERY_NAME.toUpperCase()}
        </p>
        <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-balance sm:text-4xl">{headline}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/75">{body}</p>
        <div className="mt-7">
          <Button href={href} external onClick={track} variant="bright-dark" size="lg" className="px-6 sm:px-8">
            {ctaLabel}
          </Button>
        </div>
        <p className="mt-6 text-sm text-paper/65">
          Prefer a team to plan and run the campaign?{" "}
          <Link
            href={`/for-brands?src=${encodeURIComponent(slug)}&pos=discovery_end&t=Kudozz%20Discovery#inquiry`}
            className="group inline-flex items-center gap-1 font-semibold text-paper underline decoration-coral decoration-2 underline-offset-4 hover:text-lime"
          >
            Talk to Kudozz
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}

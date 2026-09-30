import { Fragment } from "react";
import Link from "next/link";
import type { BlogBlock, InlineLink } from "@/content/blog";
import { cn } from "@/lib/utils";
import type { BlogCtaSet } from "@/lib/blogCta";
import { BlogMidCTA } from "@/components/blog/BlogMidCTA";
import { CreatorPricingCalculator } from "@/components/creator-resources/CreatorPricingCalculator";
import { CreatorRevenueForecast } from "@/components/creator-resources/CreatorRevenueForecast";
import { CreatorDelegationCalculator } from "@/components/creator-resources/CreatorDelegationCalculator";
import { CreatorChecklist } from "@/components/creator-resources/CreatorChecklist";
import { CreatorBreakEvenCalculator } from "@/components/creator-resources/CreatorBreakEvenCalculator";
import { CreatorAgencyRevenueCalculator } from "@/components/creator-resources/CreatorAgencyRevenueCalculator";
import { CreatorAgencyProfitabilityCalculator } from "@/components/creator-resources/CreatorAgencyProfitabilityCalculator";
import { CreatorCampaignCapacityCalculator } from "@/components/creator-resources/CreatorCampaignCapacityCalculator";
import { CreatorMarketplaceCalculator } from "@/components/creator-resources/CreatorMarketplaceCalculator";
import { CreatorTalentScorecard } from "@/components/creator-resources/CreatorTalentScorecard";
import { CampaignCostCalculator } from "@/components/creator-resources/CampaignCostCalculator";
import { InfluencerBudgetAllocator } from "@/components/creator-resources/InfluencerBudgetAllocator";
import { RoiForecastCalculator } from "@/components/creator-resources/RoiForecastCalculator";

function renderWithLinks(text: string, links?: InlineLink[]) {
  if (!links || links.length === 0) return text;

  type Part = string | { href: string; label: string };
  let parts: Part[] = [text];

  for (const link of links) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const idx = part.indexOf(link.text);
      if (idx === -1) return [part];
      return [part.slice(0, idx), { href: link.href, label: link.text }, part.slice(idx + link.text.length)];
    });
  }

  const linkClassName = "font-medium text-ink underline decoration-coral decoration-2 underline-offset-2 hover:text-coral";

  return parts.map((part, i) => {
    if (typeof part === "string") return <Fragment key={i}>{part}</Fragment>;
    if (/\.(csv|pdf|xlsx)$/.test(part.href)) {
      return (
        <a key={i} href={part.href} download className={linkClassName}>
          {part.label}
        </a>
      );
    }
    if (part.href.startsWith("http")) {
      return (
        <a key={i} href={part.href} target="_blank" rel="noreferrer noopener" className={linkClassName}>
          {part.label}
        </a>
      );
    }
    return (
      <Link key={i} href={part.href} className={linkClassName}>
        {part.label}
      </Link>
    );
  });
}

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={i}
          id={block.id}
          className="scroll-mt-28 pt-6 font-display text-2xl tracking-tight text-ink sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={i} className="pt-2 font-display text-xl tracking-tight text-ink sm:text-2xl">
          {block.text}
        </h3>
      );
    case "template":
      return (
        <figure key={i} className="border-[1.5px] border-ink/15 bg-paper-dim">
          {block.label && (
            <figcaption className="border-b border-ink/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink/55">
              {block.label}
            </figcaption>
          )}
          <pre className="overflow-x-auto whitespace-pre-wrap break-words px-5 py-4 font-sans text-base leading-relaxed text-ink/85">
            {block.text}
          </pre>
        </figure>
      );
    case "tool":
      if (block.tool === "creator-pricing-calculator") return <CreatorPricingCalculator key={i} />;
      if (block.tool === "creator-revenue-forecast") return <CreatorRevenueForecast key={i} />;
      if (block.tool === "creator-delegation-calculator") return <CreatorDelegationCalculator key={i} />;
      if (block.tool === "creator-break-even-calculator") return <CreatorBreakEvenCalculator key={i} />;
      if (block.tool === "creator-agency-revenue-calculator") return <CreatorAgencyRevenueCalculator key={i} />;
      if (block.tool === "creator-agency-profitability-calculator") return <CreatorAgencyProfitabilityCalculator key={i} />;
      if (block.tool === "creator-campaign-capacity-calculator") return <CreatorCampaignCapacityCalculator key={i} />;
      if (block.tool === "creator-marketplace-calculator") return <CreatorMarketplaceCalculator key={i} />;
      if (block.tool === "creator-talent-scorecard") return <CreatorTalentScorecard key={i} />;
      if (block.tool === "campaign-cost-calculator") return <CampaignCostCalculator key={i} />;
      if (block.tool === "influencer-budget-allocator") return <InfluencerBudgetAllocator key={i} />;
      if (block.tool === "roi-forecast-calculator") return <RoiForecastCalculator key={i} />;
      if (
        block.tool === "creator-operations-checklist" ||
        block.tool === "creator-continuity-checklist" ||
        block.tool === "creator-contract-checklist" ||
        block.tool === "creator-campaign-qa-checklist" ||
        block.tool === "agency-contract-checklist" ||
        block.tool === "influencer-vetting-checklist"
      )
        return <CreatorChecklist key={i} checklist={block.tool} />;
      return null;
    case "image":
      return (
        <figure key={i}>
          {/* Static diagrams are small SVGs; next/image adds nothing for them. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            loading="lazy"
            decoding="async"
            className="h-auto w-full border-[1.5px] border-ink/15"
          />
          {block.caption && <figcaption className="mt-2 text-sm leading-relaxed text-ink/55">{block.caption}</figcaption>}
        </figure>
      );
    case "paragraph":
      return <p key={i}>{renderWithLinks(block.text, block.links)}</p>;
    case "list":
      return (
        <ul key={i} className="space-y-3 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-coral" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-base">
            <thead>
              <tr>
                {block.headers.map((header, hi) => (
                  <th
                    key={hi}
                    className="border-b-[1.5px] border-ink px-3 py-2.5 text-left font-display text-lg font-normal tracking-tight text-ink"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        "border-b border-line px-3 py-2.5 align-top text-base",
                        ci === 0 && "font-medium text-ink"
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote key={i} className="border-l-[4px] border-coral bg-paper-dim py-4 pl-6 font-display text-2xl italic tracking-tight text-ink">
          {block.text}
          {block.attribution && <cite className="mt-3 block text-sm not-italic text-ink/50">— {block.attribution}</cite>}
        </blockquote>
      );
    default:
      return null;
  }
}

/**
 * Only insert the mid-article CTA once there's genuinely a "middle" —
 * short articles skip it rather than placing it awkwardly near the intro
 * or the conclusion (see the CTA audit's short-article special case).
 */
const MIN_BLOCKS_FOR_MID_CTA = 8;
const MIN_LEADING_BLOCKS = 3;
const MIN_TRAILING_BLOCKS = 2;

function getMidCtaIndex(blocks: BlogBlock[]): number | null {
  const blockCount = blocks.length;
  if (blockCount < MIN_BLOCKS_FOR_MID_CTA) return null;
  const midpoint = Math.floor(blockCount / 2);
  const last = blockCount - MIN_TRAILING_BLOCKS;

  // Prefer the end of a section (the next block starts a new heading) nearest
  // the middle, so the CTA never splits a heading from its content or sits
  // directly above the conclusion.
  let best: number | null = null;
  for (let i = MIN_LEADING_BLOCKS; i <= last; i++) {
    const next = blocks[i + 1];
    if (next?.type !== "heading" || next.id === "conclusion") continue;
    if (best === null || Math.abs(i - midpoint) < Math.abs(best - midpoint)) best = i;
  }
  if (best !== null) return best;

  const index = Math.max(MIN_LEADING_BLOCKS, midpoint);
  return index <= last ? index : null;
}

export function ArticleBody({
  blocks,
  ctaSet,
  slug,
  category,
}: {
  blocks: BlogBlock[];
  ctaSet?: BlogCtaSet;
  slug?: string;
  category?: string;
}) {
  const midCtaIndex = ctaSet ? getMidCtaIndex(blocks) : null;

  // min-w-0: as a grid item, let wide tables scroll inside their wrapper instead of widening the page on mobile.
  return (
    <div className="min-w-0 space-y-6 text-lg leading-relaxed text-ink/80">
      {blocks.map((block, i) => (
        <Fragment key={i}>
          {renderBlock(block, i)}
          {ctaSet && slug && category && i === midCtaIndex && (
            <BlogMidCTA
              content={ctaSet.mid}
              slug={slug}
              category={category}
              topic={ctaSet.topic}
              platform={ctaSet.platform}
              intent={ctaSet.intent}
              audience={ctaSet.audience}
              ctaType={ctaSet.ctaType}
              cluster={ctaSet.cluster}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

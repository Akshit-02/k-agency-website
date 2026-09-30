import type { BlogCategory } from "@/content/blog";
import { cn } from "@/lib/utils";

const categoryStyles: Record<BlogCategory, { bg: string; fg: string; mark: string }> = {
  "Influencer Marketing": { bg: "bg-ink", fg: "text-paper", mark: "text-lime" },
  "Creator Economy": { bg: "bg-coral", fg: "text-ink", mark: "text-ink" },
  "Social Media Trends": { bg: "bg-lime", fg: "text-ink", mark: "text-ink/25" },
  "Brand Marketing": { bg: "bg-violet", fg: "text-paper", mark: "text-lime" },
  "Instagram Marketing": { bg: "bg-ink", fg: "text-paper", mark: "text-coral" },
  "Campaign Strategy": { bg: "bg-coral", fg: "text-ink", mark: "text-paper" },
  "UGC Marketing": { bg: "bg-violet", fg: "text-paper", mark: "text-coral" },
  "Creator Resources": { bg: "bg-lime", fg: "text-ink", mark: "text-violet" },
};

/** Labels whose initials would read badly if derived word by word. */
const FIXED_INITIALS: Record<string, string> = {
  "UGC Marketing": "UGC",
  "AI for Creators": "AI",
  "Instagram for Creators": "IG",
  "YouTube for Creators": "YT",
  "TikTok for Creators": "TT",
  "Choosing the Right Deals": "RD",
};

/**
 * `label` overrides the category text (e.g. a Creator Resources section
 * such as "AI for Creators"), so heroes within one category still differ.
 */
export function BlogArticleGraphic({
  category,
  label,
  className,
}: {
  category: BlogCategory;
  label?: string;
  className?: string;
}) {
  const style = categoryStyles[category];
  const source = label ?? category;
  const initials =
    FIXED_INITIALS[source] ??
    source
      .replace(/&/g, "")
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden", style.bg, className)} aria-hidden="true">
      <span
        className={cn(
          "font-black-display px-4 text-center leading-none tracking-tight",
          initials.length > 2 ? "text-[4rem] sm:text-[5.5rem]" : "text-[6rem] sm:text-[8rem]",
          style.mark
        )}
      >
        {initials}
      </span>
      <span className={cn("absolute left-5 top-5 border-[1.5px] border-current px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em]", style.fg)}>
        {source}
      </span>
    </div>
  );
}

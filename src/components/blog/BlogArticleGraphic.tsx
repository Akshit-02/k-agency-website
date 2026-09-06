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
};

export function BlogArticleGraphic({ category, className }: { category: BlogCategory; className?: string }) {
  const style = categoryStyles[category];
  const initials =
    category === "UGC Marketing"
      ? "UGC"
      : category
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2);

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
        {category}
      </span>
    </div>
  );
}

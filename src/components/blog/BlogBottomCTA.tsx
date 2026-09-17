"use client";

import type { BlogCtaContent } from "@/lib/blogCta";
import { trackBlogCtaClick } from "@/lib/blogAnalytics";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function BlogBottomCTA({
  content,
  slug,
  category,
  topic,
}: {
  content: BlogCtaContent;
  slug: string;
  category: string;
  topic: string;
}) {
  return (
    <Reveal
      as="div"
      className="border-[1.5px] border-ink bg-paper-dim px-8 py-10 shadow-[8px_8px_0_0_var(--color-coral)] sm:px-12 sm:py-12"
    >
      <p className="font-display text-3xl leading-[1.1] tracking-tight text-balance text-ink sm:text-4xl">
        {content.headline}
      </p>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/65">{content.body}</p>
      <div
        className="mt-7 inline-block"
        onClick={() => trackBlogCtaClick("blog_bottom_cta_click", { slug, category, topic, position: "bottom" })}
      >
        <Button href={content.href} size="lg" magnetic>
          {content.ctaLabel}
        </Button>
      </div>
    </Reveal>
  );
}

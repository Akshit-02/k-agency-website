"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogCtaContent } from "@/lib/blogCta";
import { trackBlogCtaClick } from "@/lib/blogAnalytics";

export function BlogMidCTA({
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
    <aside className="not-prose my-2 border-[1.5px] border-ink/15 bg-paper-dim px-6 py-6 sm:px-7">
      <p className="font-display text-xl leading-snug tracking-tight text-ink sm:text-2xl">{content.headline}</p>
      <p className="mt-2 text-base leading-relaxed text-ink/65">{content.body}</p>
      <Link
        href={content.href}
        onClick={() => trackBlogCtaClick("blog_mid_cta_click", { slug, category, topic, position: "mid" })}
        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-dim underline decoration-2 underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
      >
        {content.ctaLabel}
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </aside>
  );
}

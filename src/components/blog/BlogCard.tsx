import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { BlogArticleGraphic } from "@/components/blog/BlogArticleGraphic";
import { Reveal } from "@/components/animations/Reveal";
import { formatDate } from "@/lib/date";

export function BlogCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="aspect-[16/9] overflow-hidden border-[1.5px] border-ink transition-shadow duration-300 group-hover:shadow-[6px_6px_0_0_var(--color-ink)]">
          <BlogArticleGraphic
            category={post.category}
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-coral">{post.category}</p>
          <h3 className="mt-2 font-display text-xl tracking-tight text-ink transition-colors group-hover:text-coral sm:text-2xl">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-ink/40">
            {formatDate(post.publishedAt)} · {post.readingTime}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

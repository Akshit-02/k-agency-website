import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { BlogArticleGraphic } from "@/components/blog/BlogArticleGraphic";
import { Reveal } from "@/components/animations/Reveal";
import { formatDate } from "@/lib/date";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Reveal>
      <Link href={`/blog/${post.slug}`} className="group grid gap-0 overflow-hidden border-[1.5px] border-ink shadow-[8px_8px_0_0_var(--color-coral)] sm:grid-cols-2">
        <div className="aspect-[16/10] overflow-hidden sm:aspect-auto">
          <BlogArticleGraphic
            category={post.category}
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-coral">Featured · {post.category}</span>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-balance text-ink transition-colors group-hover:text-coral sm:text-4xl">
            {post.title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/65">{post.excerpt}</p>
          <p className="mt-6 text-xs uppercase tracking-wide text-ink/40">
            {formatDate(post.publishedAt)} · {post.readingTime}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

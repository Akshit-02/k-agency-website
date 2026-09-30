import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";

/** Editorial list of Creator Resources articles, shared by the hub and section pages. */
export function CreatorArticleList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group flex items-start justify-between gap-6 py-5">
            <span>
              <span className="block font-display text-xl tracking-tight text-ink transition-colors group-hover:text-coral sm:text-2xl">
                {post.title}
              </span>
              <span className="mt-1.5 line-clamp-2 block text-sm leading-relaxed text-ink/60">{post.excerpt}</span>
            </span>
            <ArrowUpRight
              className="mt-1.5 size-5 shrink-0 text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-coral"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

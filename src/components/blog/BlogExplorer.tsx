"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { BlogCategory } from "@/content/blog";
import { blogCategories } from "@/content/blog";
import { BlogCard, type BlogCardData } from "@/components/blog/BlogCard";
import { cn } from "@/lib/utils";

/**
 * How many results render as full visual cards. The rest render as a compact list: with 1,000+ articles, full
 * cards pushed the /blog HTML past 2 MB, the most Googlebot reads of an HTML file (2026-11 SEO audit). Every
 * article stays linked in the HTML either way.
 */
export const BLOG_GRID_COUNT = 12;

// Props of a client component are serialised into the page, so this takes card fields only (see BlogCardData).
// Archive items arrive without an excerpt to keep that payload small; search still matches their titles.
export function BlogExplorer({ posts }: { posts: BlogCardData[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategory | "All">("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("All")}
            className={cn(
              "border-[1.5px] px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              category === "All" ? "border-ink bg-coral text-ink" : "border-ink/25 text-ink/60 hover:border-ink"
            )}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "border-[1.5px] px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                category === cat ? "border-ink bg-ink text-paper" : "border-ink/25 text-ink/60 hover:border-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="relative w-full sm:w-64">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-ink/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full border-b border-ink/25 bg-transparent py-2 pl-6 text-sm text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink/50">No articles match your search.</p>
      ) : (
        <>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, BLOG_GRID_COUNT).map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={(i % 3) * 0.05} />
            ))}
          </div>
          {filtered.length > BLOG_GRID_COUNT && (
            <div className="mt-20">
              <h2 className="font-display text-3xl tracking-tight text-ink">More articles</h2>
              <ul className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.slice(BLOG_GRID_COUNT).map((post) => (
                  <li key={post.slug} className="border-t border-line">
                    <Link href={`/blog/${post.slug}`} className="group block py-3">
                      <span className="block text-[11px] font-semibold uppercase tracking-wide text-coral">{post.category}</span>
                      <span className="mt-1 block text-base leading-snug text-ink group-hover:text-coral">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

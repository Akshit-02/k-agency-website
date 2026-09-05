"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { BlogPost, BlogCategory } from "@/content/blog";
import { blogCategories } from "@/content/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { cn } from "@/lib/utils";

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
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
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={(i % 3) * 0.05} />
          ))}
        </div>
      )}
    </div>
  );
}

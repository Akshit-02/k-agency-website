import type { BlogBlock } from "@/content/blog";

export function TableOfContents({ blocks }: { blocks: BlogBlock[] }) {
  const headings = blocks.filter((b): b is Extract<BlogBlock, { type: "heading" }> => b.type === "heading");

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-28 hidden lg:block">
      <p className="font-black-display text-xs text-coral">ON THIS PAGE</p>
      <ol className="mt-4 space-y-3 border-l-[1.5px] border-ink/20 pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="text-sm leading-snug text-ink/60 transition-colors hover:text-coral">
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

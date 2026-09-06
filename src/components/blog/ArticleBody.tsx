import { Fragment } from "react";
import Link from "next/link";
import type { BlogBlock, InlineLink } from "@/content/blog";
import { cn } from "@/lib/utils";

function renderWithLinks(text: string, links?: InlineLink[]) {
  if (!links || links.length === 0) return text;

  type Part = string | { href: string; label: string };
  let parts: Part[] = [text];

  for (const link of links) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const idx = part.indexOf(link.text);
      if (idx === -1) return [part];
      return [part.slice(0, idx), { href: link.href, label: link.text }, part.slice(idx + link.text.length)];
    });
  }

  const linkClassName = "font-medium text-ink underline decoration-coral decoration-2 underline-offset-2 hover:text-coral";

  return parts.map((part, i) => {
    if (typeof part === "string") return <Fragment key={i}>{part}</Fragment>;
    if (part.href.startsWith("http")) {
      return (
        <a key={i} href={part.href} target="_blank" rel="noreferrer noopener" className={linkClassName}>
          {part.label}
        </a>
      );
    }
    return (
      <Link key={i} href={part.href} className={linkClassName}>
        {part.label}
      </Link>
    );
  });
}

export function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-ink/80">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                id={block.id}
                className="scroll-mt-28 pt-6 font-display text-2xl tracking-tight text-ink sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return <p key={i}>{renderWithLinks(block.text, block.links)}</p>;
          case "list":
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-base">
                  <thead>
                    <tr>
                      {block.headers.map((header, hi) => (
                        <th
                          key={hi}
                          className="border-b-[1.5px] border-ink px-3 py-2.5 text-left font-display text-lg font-normal tracking-tight text-ink"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={cn(
                              "border-b border-line px-3 py-2.5 align-top text-base",
                              ci === 0 && "font-medium text-ink"
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-[4px] border-coral bg-paper-dim py-4 pl-6 font-display text-2xl italic tracking-tight text-ink">
                {block.text}
                {block.attribution && <cite className="mt-3 block text-sm not-italic text-ink/50">— {block.attribution}</cite>}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

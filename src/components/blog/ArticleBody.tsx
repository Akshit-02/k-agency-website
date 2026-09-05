import type { BlogBlock } from "@/content/blog";

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
            return <p key={i}>{block.text}</p>;
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

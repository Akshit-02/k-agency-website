import { BarChart3, Clapperboard, GalleryHorizontalEnd, Image as ImageIcon, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Decorative illustration of a month of planned social content: a calendar with post types, an approval chip,
 * a community reply and a monthly report card. Purely illustrative, so it carries no real numbers and is hidden
 * from assistive tech (the page copy describes the same work in text).
 */
type Cell = { day: number; kind?: "reel" | "carousel" | "post" | "story" | "creator" };

const kinds = {
  reel: { label: "Reel", className: "bg-coral text-ink" },
  carousel: { label: "Carousel", className: "bg-violet text-paper" },
  post: { label: "Post", className: "bg-ink text-paper" },
  story: { label: "Story", className: "bg-lime text-ink" },
  creator: { label: "Creator", className: "border-[1.5px] border-ink bg-paper text-ink" },
} as const;

const plan: Record<number, Cell["kind"]> = {
  2: "reel",
  4: "carousel",
  6: "story",
  9: "post",
  11: "reel",
  12: "creator",
  15: "carousel",
  17: "story",
  18: "reel",
  22: "post",
  24: "creator",
  25: "reel",
  27: "carousel",
};

const cells: Cell[] = Array.from({ length: 28 }, (_, i) => ({ day: i + 1, kind: plan[i + 1] }));

export function ContentCalendarGraphic({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative mx-auto w-full max-w-[34rem] pb-16 pt-6", className)}>
      <div className="relative border-[1.5px] border-ink bg-paper p-4 shadow-[10px_10px_0_0_var(--color-ink)] sm:p-6">
        <div className="flex items-center justify-between border-b-[1.5px] border-ink pb-3">
          <p className="font-black-display text-sm tracking-wide text-ink">CONTENT CALENDAR</p>
          <span className="bg-lime px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">Approved</span>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[9px] font-semibold uppercase tracking-wide text-ink/45 sm:gap-1.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="mt-1.5 grid grid-cols-7 gap-1 sm:gap-1.5">
          {cells.map((cell) => (
            <div key={cell.day} className="flex aspect-square flex-col justify-between border border-line p-1">
              <span className="text-[9px] leading-none text-ink/40">{cell.day}</span>
              {cell.kind && (
                <span
                  className={cn(
                    "block truncate px-0.5 py-px text-center text-[7px] font-semibold uppercase leading-tight tracking-wide sm:text-[8px]",
                    kinds[cell.kind].className
                  )}
                >
                  {kinds[cell.kind].label}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-wide text-ink/60">
          <span className="flex items-center gap-1"><Clapperboard className="size-3" /> Reels</span>
          <span className="flex items-center gap-1"><GalleryHorizontalEnd className="size-3" /> Carousels</span>
          <span className="flex items-center gap-1"><ImageIcon className="size-3" /> Posts</span>
        </div>
      </div>

      <div className="absolute -left-2 bottom-2 w-[52%] -rotate-3 bg-violet p-4 text-paper shadow-[6px_6px_0_0_var(--color-ink)] sm:-left-6">
        <div className="flex items-center gap-2">
          <MessageCircle className="size-4 text-lime" />
          <span className="font-black-display text-[10px] tracking-wide text-lime">COMMUNITY</span>
        </div>
        <p className="mt-2 text-xs leading-snug text-paper/85">&ldquo;Is this available in a smaller size?&rdquo;</p>
        <p className="mt-1.5 border-l-2 border-lime pl-2 text-xs leading-snug text-paper">Replied in brand voice</p>
      </div>

      <div className="absolute -right-2 bottom-0 w-[42%] rotate-3 bg-coral p-4 text-ink shadow-[6px_6px_0_0_var(--color-ink)] sm:-right-6">
        <div className="flex items-center justify-between">
          <span className="font-black-display text-[10px] tracking-wide">MONTHLY REVIEW</span>
          <BarChart3 className="size-4" />
        </div>
        <div className="mt-3 flex h-10 items-end gap-1">
          {[40, 65, 50, 80, 70, 95].map((h, i) => (
            <span key={i} className="flex-1 bg-ink" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-ink/70">What to repeat next month</p>
      </div>
    </div>
  );
}

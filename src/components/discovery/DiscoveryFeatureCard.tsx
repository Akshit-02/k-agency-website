import { FolderHeart, Mail, Search, SlidersHorizontal, UserSearch } from "lucide-react";
import type { DiscoveryFeature } from "@/config/discovery";
import { cn } from "@/lib/utils";

const icons = { search: Search, filters: SlidersHorizontal, profile: UserSearch, lists: FolderHeart, contact: Mail };

export function DiscoveryFeatureCard({
  feature,
  index,
  className,
}: {
  feature: DiscoveryFeature;
  index: number;
  className?: string;
}) {
  const Icon = icons[feature.icon];
  return (
    <div
      className={cn(
        "group flex h-full flex-col border-[1.5px] border-paper/15 p-5 transition-colors sm:p-6 duration-300 hover:border-lime/60 hover:bg-paper/[0.03]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center bg-paper/[0.07] text-lime transition-colors group-hover:bg-lime group-hover:text-ink">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="font-black-display text-xs text-paper/35">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-4 font-display text-lg sm:mt-5 sm:text-xl leading-snug tracking-tight text-paper">{feature.title}</h3>
      {/* Titles carry the point on phones; the detail shows from sm up so the section stays short on mobile. */}
      <p className="mt-2 hidden text-sm leading-relaxed text-paper/65 sm:block">{feature.body}</p>
    </div>
  );
}

import {
  ArrowUpDown,
  BadgeCheck,
  BookmarkPlus,
  Check,
  ChevronDown,
  Coins,
  Compass,
  Folders,
  LifeBuoy,
  Lock,
  Mail,
  Phone,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { PlatformLogo } from "@/components/icons/PlatformLogo";
import { discoveryFacts } from "@/config/discovery";
import { cn } from "@/lib/utils";

/*
 * A static, illustrative mock-up of the Kudozz Discovery "Discover" screen, drawn from the real interface
 * (influencer-discovery-fe: DiscoverView, CreatorCard, CreatorDrawer, AddToListModal). Every control, label,
 * filter, sort option and credit cost shown exists in the product. Creator identities and metric values are
 * deliberately rendered as blank placeholders: no fabricated names, handles or numbers, and nothing that reads as
 * live data. Pure HTML/CSS, so no image weight and no layout shift.
 */

const followerBands = ["5K – 10K", "10K – 100K", "100K – 1M"];
const activeFilters = ["Fashion & Lifestyle", "Mumbai", "ER ≥ 3%"];

const cards = [
  { niche: "Fashion & Lifestyle", tone: "from-coral to-[#ff8a4c]", nameW: "w-24", handleW: "w-16", verified: true },
  { niche: "Beauty & Skincare", tone: "from-lime to-[#7fd34a]", nameW: "w-20", handleW: "w-20", verified: false },
];

/** A blank value placeholder; `w` is a Tailwind width class. */
function Bar({ w, className }: { w: string; className?: string }) {
  return <span aria-hidden="true" className={cn("block h-2 rounded-full bg-paper/15", w, className)} />;
}

function Stat({ label, w }: { label: string; w: string }) {
  return (
    <div className="min-w-0">
      <p className="truncate text-[10px] font-medium text-paper/45">{label}</p>
      <Bar w={w} className="mt-1.5 h-2.5 bg-paper/25" />
    </div>
  );
}

function CreatorCard({ card, index }: { card: (typeof cards)[number]; index: number }) {
  return (
    <div
      className="kz-discovery-rise rounded-xl border border-paper/10 bg-paper/[0.04] p-3"
      style={{ animationDelay: `${0.15 + index * 0.12}s` }}
    >
      <div className="flex items-center gap-2.5">
        <span className={cn("relative size-9 shrink-0 rounded-full bg-gradient-to-br", card.tone)}>
          <span className="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-ink">
            <PlatformLogo platform="instagram" className="size-2.5 text-paper/80" />
          </span>
        </span>
        <div className="min-w-0 flex-1 space-y-1.5">
          <span className="flex items-center gap-1">
            <Bar w={card.nameW} className="h-2.5 bg-paper/35" />
            {card.verified && <BadgeCheck className="size-3 shrink-0 text-lime" aria-hidden="true" />}
          </span>
          <Bar w={card.handleW} />
        </div>
      </div>
      <p className="mt-2.5 inline-block rounded-full bg-paper/[0.07] px-2 py-0.5 text-[9.5px] font-semibold text-paper/70">
        {card.niche}
      </p>
      <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-paper/10 pt-2.5">
        <Stat label="Followers" w="w-10" />
        <Stat label="ER" w="w-8" />
      </div>
      <div className="mt-3 flex gap-1.5">
        <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-paper/[0.08] py-1.5 text-[10px] font-semibold text-paper/80">
          <BookmarkPlus className="size-3" aria-hidden="true" />
          Save
        </span>
        <span className="flex flex-1 items-center justify-center rounded-lg bg-paper py-1.5 text-[10px] font-semibold text-ink">
          Profile
        </span>
      </div>
    </div>
  );
}

export function DiscoveryDashboardPreview({ className }: { className?: string }) {
  const { costs } = discoveryFacts;
  return (
    <figure className={cn("relative", className)}>
      {/* Floating "saved to list" confirmation, as the product's toast shows after Save to list. */}
      <div
        aria-hidden="true"
        className="absolute -right-2 -top-6 z-20 hidden animate-float-slow items-center gap-2.5 border-[1.5px] border-ink bg-paper px-3 py-2 text-ink shadow-[4px_4px_0_0_var(--color-coral)] md:flex lg:-right-5"
      >
        <span className="flex size-7 items-center justify-center bg-lime">
          <Check className="size-4" />
        </span>
        <span className="leading-tight">
          <span className="block text-[10px] font-medium text-ink/60">Added to list</span>
          <span className="block text-xs font-bold">Festive launch shortlist</span>
        </span>
      </div>

      <div
        aria-hidden="true"
        className="overflow-hidden rounded-2xl border border-paper/15 bg-[#1d1610] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)]"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-paper/10 px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-coral/80" />
            <span className="size-2.5 rounded-full bg-paper/20" />
            <span className="size-2.5 rounded-full bg-paper/20" />
          </span>
          <span className="mx-auto flex min-w-0 items-center gap-1.5 rounded-md bg-paper/[0.06] px-3 py-1 text-[10.5px] text-paper/50">
            <Lock className="size-2.5 shrink-0" />
            <span className="truncate">discover.kudozz.in/dashboard/discover</span>
          </span>
          <span className="hidden w-10 sm:block" />
        </div>

        <div className="flex">
          {/* Sidebar: the product's real navigation */}
          <div className="hidden w-36 shrink-0 flex-col gap-1 border-r border-paper/10 p-3 md:flex lg:hidden 2xl:flex">
            <p className="mb-2 px-2 font-black-display text-[11px] tracking-tight text-paper">
              kudozz<span className="text-coral">.</span>
              <span className="ml-1 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-paper/40">discovery</span>
            </p>
            <span className="flex items-center gap-2 rounded-lg bg-paper/[0.08] px-2 py-1.5 text-[11px] font-semibold text-paper">
              <Compass className="size-3.5 text-lime" />
              Discover
            </span>
            <span className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-paper/55">
              <Folders className="size-3.5" />
              My lists
            </span>
            <span className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-paper/55">
              <LifeBuoy className="size-3.5" />
              Help &amp; support
            </span>
            <span className="mt-auto flex items-center gap-1.5 rounded-lg border border-paper/10 px-2 py-1.5 text-[10px] font-semibold text-paper/70">
              <Coins className="size-3 text-coral" />
              Credits
            </span>
          </div>

          {/* Discover view */}
          <div className="min-w-0 flex-1 space-y-2.5 p-3 sm:p-4">
            <div className="flex gap-2">
              <span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-paper px-3 py-2 text-ink">
                <Search className="size-3.5 shrink-0 text-coral-deep" />
                <span className="truncate text-[11.5px] text-ink/45">Search by name or @username…</span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-coral px-2.5 py-2 text-[11px] font-bold text-ink">
                <SlidersHorizontal className="size-3.5" />
                <span className="hidden sm:inline">Filters</span>
                <span className="flex size-4 items-center justify-center rounded-full bg-ink text-[9px] text-paper">3</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-paper/40">Followers</span>
              {followerBands.map((band) => (
                <span
                  key={band}
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                    band === "10K – 100K" ? "border-lime bg-lime text-ink" : "border-paper/15 text-paper/60",
                    band === "100K – 1M" && "hidden sm:inline"
                  )}
                >
                  {band}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {activeFilters.map((f) => (
                  <span key={f} className="rounded-full bg-paper/[0.08] px-2 py-0.5 text-[10px] font-semibold text-paper/80">
                    {f} <span className="text-paper/40">×</span>
                  </span>
                ))}
              </div>
              <span className="hidden items-center gap-1 text-[10px] font-semibold text-paper/60 sm:flex">
                <ArrowUpDown className="size-3" />
                Highest engagement
                <ChevronDown className="size-3" />
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {cards.map((card, i) => (
                <CreatorCard key={i} card={card} index={i} />
              ))}
            </div>
          </div>

          {/* Profile panel: contact reveal with the product's real credit costs */}
          <div className="hidden w-44 shrink-0 flex-col gap-2 border-l border-paper/10 bg-paper/[0.03] p-3 lg:flex">
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-paper/40">Creator profile</p>
            <div className="flex items-center gap-2">
              <span className="size-8 shrink-0 rounded-full bg-gradient-to-br from-coral to-[#ff8a4c]" />
              <div className="min-w-0 flex-1 space-y-1.5">
                <Bar w="w-16" className="h-2.5 bg-paper/35" />
                <Bar w="w-12" />
              </div>
            </div>
            <p className="mt-1 text-[9.5px] font-medium text-paper/45">Engagement rate</p>
            <span className="block h-1.5 overflow-hidden rounded-full bg-paper/10">
              <span className="block h-full w-3/5 rounded-full bg-lime" />
            </span>
            <p className="mt-2 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-paper/40">Contact</p>
            <span className="flex items-center justify-between rounded-lg border border-paper/10 px-2 py-1.5 text-[10px] text-paper/75">
              <span className="flex items-center gap-1.5">
                <Mail className="size-3" />
                Email
              </span>
              <span className="flex items-center gap-1 font-semibold text-coral">
                <Lock className="size-2.5" />
                {costs.revealEmail} credit
              </span>
            </span>
            <span className="flex items-center justify-between rounded-lg border border-paper/10 px-2 py-1.5 text-[10px] text-paper/75">
              <span className="flex items-center gap-1.5">
                <Phone className="size-3" />
                Phone
              </span>
              <span className="flex items-center gap-1 font-semibold text-coral">
                <Lock className="size-2.5" />
                {costs.revealPhone} credits
              </span>
            </span>
            <span className="mt-auto flex items-center justify-center gap-1 rounded-lg bg-paper/[0.08] py-1.5 text-[10px] font-semibold text-paper/80">
              <BookmarkPlus className="size-3" />
              Save to list
            </span>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs text-paper/60">
        Illustrative preview of the Kudozz Discovery interface. Creator details are hidden and no live data is shown.
      </figcaption>
    </figure>
  );
}

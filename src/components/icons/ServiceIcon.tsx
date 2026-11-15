import { cn } from "@/lib/utils";
import { Pictogram, type PictogramAccent, type PictogramName } from "@/components/icons/Pictogram";
import { PlatformLogo, type PlatformId } from "@/components/icons/PlatformLogo";

type ServiceVisual = { pictogram: PictogramName } | { platform: PlatformId };

/**
 * One visual per service, chosen for what the service does. Platform services use that platform's official mark;
 * everything else uses a Kudozz pictogram. Add an entry here when a service is added (unknown slugs fall back to the
 * generic creator pictogram).
 */
const serviceVisuals: Record<string, ServiceVisual> = {
  "influencer-marketing": { pictogram: "creator" },
  "campaign-strategy": { pictogram: "strategy" },
  "creator-discovery": { pictogram: "discovery" },
  "outreach-management": { pictogram: "outreach" },
  "social-campaigns": { pictogram: "campaign" },
  "product-launches": { pictogram: "launch" },
  "ugc-campaigns": { pictogram: "production" },
  "ambassador-programs": { pictogram: "ambassador" },
  reporting: { pictogram: "report" },
  "paid-influencer-campaigns": { pictogram: "paid" },
  "barter-influencer-campaigns": { pictogram: "barter" },
  "influencer-seeding-gifting": { pictogram: "gift" },
  "influencer-affiliate-marketing": { pictogram: "affiliate" },
  "ugc-content-production": { pictogram: "ugc" },
  "instagram-influencer-marketing": { platform: "instagram" },
  "youtube-influencer-marketing": { platform: "youtube" },
  "linkedin-influencer-marketing": { platform: "linkedin" },
  "regional-influencer-marketing": { pictogram: "regional" },
  "micro-nano-influencer-marketing": { pictogram: "micro" },
  "social-media-management": { pictogram: "calendar" },
};

/** Pictogram for a service slug, for places that need a pictogram specifically (e.g. inside an IconTile). */
export function servicePictogram(slug: string): PictogramName {
  const v = serviceVisuals[slug];
  return v && "pictogram" in v ? v.pictogram : "creator";
}

/** Service slug from an internal href such as "/services/creator-discovery". */
export function slugFromServiceHref(href: string) {
  return href.replace(/^\/services\//, "").split(/[?#]/)[0];
}

export function ServiceIcon({
  slug,
  className,
  accent,
}: {
  slug: string;
  /** Sizing and line colour, e.g. "size-10 text-ink". Platform marks are drawn at ~70% to match visual weight. */
  className?: string;
  accent?: PictogramAccent;
}) {
  const v = serviceVisuals[slug] ?? { pictogram: "creator" as const };
  if ("platform" in v) {
    return (
      <span aria-hidden="true" className={cn("inline-flex size-10 shrink-0 items-center justify-center", className)}>
        <PlatformLogo platform={v.platform} className="size-[70%]" />
      </span>
    );
  }
  return <Pictogram name={v.pictogram} accent={accent} className={className} />;
}

import { cn } from "@/lib/utils";
import { platforms } from "@/components/icons/platformPaths";

export type PlatformId = keyof typeof platforms;

const byName: Record<string, PlatformId> = {
  instagram: "instagram",
  facebook: "facebook",
  linkedin: "linkedin",
  youtube: "youtube",
  pinterest: "pinterest",
  x: "x",
  snapchat: "snapchat",
};

/** Resolves a display name such as "YouTube" or "X" to a platform id, or undefined when there is no official mark. */
export function platformIdFromName(name: string): PlatformId | undefined {
  return byName[name.trim().toLowerCase()];
}

/**
 * An official platform mark in a single colour. Decorative by default (the platform name is always written next
 * to it); pass `label` when the logo stands alone, e.g. an icon-only social link without its own aria-label.
 */
export function PlatformLogo({
  platform,
  className,
  label,
  brandColor = false,
}: {
  platform: PlatformId;
  className?: string;
  label?: string;
  /** Use the platform's own colour instead of currentColor. Only on neutral (paper/white/ink) backgrounds. */
  brandColor?: boolean;
}) {
  const p = platforms[platform];
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-5 shrink-0", className)}
      fill={brandColor ? p.brandColor : "currentColor"}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      focusable="false"
    >
      <path d={p.path} />
    </svg>
  );
}

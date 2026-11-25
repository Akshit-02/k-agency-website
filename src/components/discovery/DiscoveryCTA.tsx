"use client";

import { Button } from "@/components/ui/Button";
import { discoveryHref, type DiscoveryPlacement } from "@/config/discovery";
import { trackDiscoveryClick } from "@/lib/discoveryAnalytics";

/** Button-style CTA to Kudozz Discovery, built on the site's Button so hover, focus and sizing stay consistent. */
export function DiscoveryCTA({
  placement,
  children = "Explore Kudozz Discovery",
  label,
  topic,
  variant = "primary",
  size = "lg",
  magnetic = false,
  className,
}: {
  placement: DiscoveryPlacement;
  children?: string;
  label?: string;
  topic?: string;
  variant?: "primary" | "dark" | "bright-dark";
  size?: "md" | "lg";
  magnetic?: boolean;
  className?: string;
}) {
  return (
    <Button
      href={discoveryHref(placement)}
      external
      onClick={() => trackDiscoveryClick(placement, label ?? children, { topic })}
      variant={variant}
      size={size}
      magnetic={magnetic}
      className={className}
    >
      {children}
    </Button>
  );
}

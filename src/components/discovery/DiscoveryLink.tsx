"use client";

import { discoveryHref, type DiscoveryPlacement } from "@/config/discovery";
import { trackDiscoveryClick } from "@/lib/discoveryAnalytics";

/**
 * The base link to Kudozz Discovery: UTM-tagged destination, new tab with rel="noopener noreferrer", a
 * screen-reader note that it opens a new tab, and a GA4 click event. Every Discovery CTA on the site renders
 * through this (text links directly; button CTAs through DiscoveryCTA).
 */
export function DiscoveryLink({
  placement,
  label,
  topic,
  className,
  children,
}: {
  placement: DiscoveryPlacement;
  /** Sent as `cta_label`; defaults to the visible text when that's a plain string. */
  label?: string;
  topic?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ctaLabel = label ?? (typeof children === "string" ? children : "Kudozz Discovery");
  return (
    <a
      href={discoveryHref(placement)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDiscoveryClick(placement, ctaLabel, { topic })}
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

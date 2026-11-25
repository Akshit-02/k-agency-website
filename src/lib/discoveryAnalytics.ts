/**
 * GA4 events for clicks through to Kudozz Discovery. Reuses the gtag global loaded in layout.tsx (typed in
 * blogAnalytics.ts); no new analytics library. Sends only page path, placement, label and destination host: no
 * personal data.
 */
import { DISCOVERY_HOST, type DiscoveryPlacement } from "@/config/discovery";

export type DiscoveryEvent =
  | "discovery_nav_click"
  | "discovery_hero_cta_click"
  | "discovery_service_cta_click"
  | "discovery_blog_cta_click"
  | "discovery_footer_click";

const EVENT_BY_PLACEMENT: Record<DiscoveryPlacement, DiscoveryEvent> = {
  nav_desktop: "discovery_nav_click",
  nav_mobile: "discovery_nav_click",
  homepage_hero: "discovery_hero_cta_click",
  homepage_secondary: "discovery_hero_cta_click",
  service_feature: "discovery_service_cta_click",
  service_compact: "discovery_service_cta_click",
  blog_article: "discovery_blog_cta_click",
  footer: "discovery_footer_click",
};

export function trackDiscoveryClick(placement: DiscoveryPlacement, label: string, extra?: { topic?: string }) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", EVENT_BY_PLACEMENT[placement], {
    source_page: window.location.pathname,
    cta_placement: placement,
    cta_label: label,
    cta_topic: extra?.topic ?? "",
    destination_host: DISCOVERY_HOST,
    // Lets GA4 report it with the built-in outbound-click dimensions as well.
    outbound: true,
  });
}

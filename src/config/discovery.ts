/**
 * Kudozz Discovery: the self-serve influencer discovery platform at discover.kudozz.in.
 *
 * Single source of truth for the destination URL, the per-placement UTM tagging and the product facts the
 * promotion copy is allowed to state. Every fact below was verified against the platform's source
 * (influencer-discovery-fe / influencer-discovery-be) on 25 Nov 2026; see
 * reports/kudozz-discovery-integration/01-discovery-platform-feature-audit.md. Re-check those files before
 * changing a number or adding a capability here.
 */

export const DISCOVERY_URL = "https://discover.kudozz.in/";
export const DISCOVERY_HOST = "discover.kudozz.in";
export const DISCOVERY_NAME = "Kudozz Discovery";

/** One value per CTA placement. It becomes `utm_content` on the link and `cta_placement` on the GA4 event. */
export type DiscoveryPlacement =
  | "nav_desktop"
  | "nav_mobile"
  | "homepage_hero"
  | "homepage_secondary"
  | "service_feature"
  | "service_compact"
  | "blog_article"
  | "footer";

/**
 * Same destination for every placement; only the tracking parameters differ. The platform's middleware keeps the
 * query string through its redirect to /login (inside the `redirect` param), so the tags stay visible in its logs.
 */
export function discoveryHref(placement: DiscoveryPlacement) {
  const params = new URLSearchParams({
    utm_source: "kudozz_website",
    utm_medium: "referral",
    utm_campaign: "discovery_promotion",
    utm_content: placement,
  });
  return `${DISCOVERY_URL}?${params.toString()}`;
}

/** Verified product facts. Copy anywhere on the site should only claim what is listed here. */
export const discoveryFacts = {
  /** The only platform the creator records come from (profile links and avatars are Instagram). */
  platform: "Instagram",
  /** Creator records are Indian creators: location filters are Indian states and cities. */
  market: "India",
  signupCredits: 30,
  signupCreditDays: 30,
  costs: { openProfile: 1, revealEmail: 1, revealPhone: 2, advancedFilterSet: 2 },
} as const;

/** The real follower bands from the platform's follower filter. */
export const discoveryFollowerBands = ["Under 1K", "1K – 3K", "3K – 5K", "5K – 10K", "10K – 100K", "100K – 1M", "1M+"];

/** The real niche list from the platform (src/lib/constants/niches.ts). */
export const discoveryNiches = [
  "Fashion & Lifestyle",
  "Beauty & Skincare",
  "Health & Fitness",
  "Food & Beverages",
  "Travel",
  "Technology & Gadgets",
  "Gaming",
  "Parenting & Family",
  "Finance & Business",
  "Education",
  "Entertainment & Comedy",
  "Home & Decor",
  "Automotive",
  "Photography",
];

export type DiscoveryFeature = { title: string; body: string; icon: "search" | "filters" | "profile" | "lists" | "contact" };

/** Feature highlights, one per verified capability. Five, because that is what the product does today. */
export const discoveryFeatures: DiscoveryFeature[] = [
  {
    icon: "search",
    title: "Search Indian Instagram creators",
    body: "Look creators up by name or @username, then sort by followers, engagement rate, average views or average likes.",
  },
  {
    icon: "filters",
    title: "Filter by what the brief needs",
    body: "Narrow by follower range, niche, state, city, language and gender, plus minimum engagement, views, likes and posting frequency.",
  },
  {
    icon: "profile",
    title: "Review a creator before you commit",
    body: "Open a profile to see followers, posts, average views and likes, engagement rate, niches, languages and collaboration types.",
  },
  {
    icon: "lists",
    title: "Shortlist into lists",
    body: "Save creators into named lists for each campaign or brief, and come back to them whenever you're ready.",
  },
  {
    icon: "contact",
    title: "Reveal contacts when you're ready",
    body: "Unlock a creator's email or phone with credits. If a contact isn't on file, no credits are used.",
  },
];

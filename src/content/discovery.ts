/**
 * Where Kudozz Discovery is promoted outside the homepage, and with what copy.
 * Every claim must be backed by src/config/discovery.ts (verified product facts). The platform only lists
 * Instagram creators, so pages about YouTube, LinkedIn or other platforms deliberately get no placement.
 */
import type { BlogPost } from "@/content/blog";
import type { BlogCtaSet } from "@/lib/blogCta";
import type { DiscoveryBannerCopy } from "@/components/discovery/DiscoveryCTABanner";

type ServiceDiscovery = { feature?: DiscoveryBannerCopy; compact?: DiscoveryBannerCopy };

const VERIFIED_POINTS = [
  "Filter Instagram creators by follower range, niche, state, city, language and minimum engagement rate.",
  "Open a creator profile to check followers, average views and likes, engagement rate and collaboration types.",
  "Save creators into named lists per campaign, and reveal an email or phone with credits only when you need it.",
];

const UGC_COMPACT: DiscoveryBannerCopy = {
  headline: "Looking for creators for your next UGC campaign?",
  body: "Use Kudozz Discovery to find Instagram creators in your category and save potential UGC partners to a list.",
  ctaLabel: "Discover Creators",
};

export const serviceDiscovery: Record<string, ServiceDiscovery> = {
  "influencer-marketing": {
    feature: {
      headline: "Want to find influencers yourself?",
      body: "Explore Kudozz Discovery, our influencer discovery platform, to search Instagram creator profiles in India and identify potential collaborators for your next campaign.",
      ctaLabel: "Explore Creator Discovery",
      points: VERIFIED_POINTS,
    },
    compact: {
      headline: "Prefer to build your own creator shortlist first?",
      body: "Search and filter creators in Kudozz Discovery, then bring the list to us whenever you want the campaign run for you.",
      ctaLabel: "Explore Kudozz Discovery",
    },
  },
  "creator-discovery": {
    feature: {
      headline: "Rather search for creators yourself?",
      body: "This page covers the shortlist our team builds for you. If you'd like to explore on your own, Kudozz Discovery is our self-serve creator discovery tool for Instagram creators in India.",
      ctaLabel: "Try Kudozz Discovery",
      points: VERIFIED_POINTS,
    },
  },
  "ugc-campaigns": { compact: UGC_COMPACT },
  "ugc-content-production": { compact: UGC_COMPACT },
  "micro-nano-influencer-marketing": {
    compact: {
      headline: "Searching for micro and nano creators yourself?",
      body: "Kudozz Discovery's follower filter runs from under 1K to 1M+, so you can browse smaller Instagram creators by niche and city.",
      ctaLabel: "Discover Creators",
    },
  },
  "instagram-influencer-marketing": {
    compact: {
      headline: "Want to browse Instagram creators yourself?",
      body: "Kudozz Discovery lets you search Instagram creators in India, compare engagement and save a shortlist for your campaign.",
      ctaLabel: "Explore Kudozz Discovery",
    },
  },
};

// ---------- Blog ----------

/** Brand-side CTA topics (lib/blogCta.ts and the brand-guide copy) where finding or choosing creators is the reader's task. */
const DISCOVERY_TOPICS = new Set(["Creator Discovery", "Creator Selection"]);

/** Slugs about finding, choosing, vetting or contacting creators, whatever topic bucket they fell into. */
const DISCOVERY_SLUG =
  /how-to-find|find-(the-right-|indian-|micro-|ugc-)?(influencers|creators)|how-to-choose-the-right-influencer|how-to-vet|influencer-shortlist|micro-influencers|nano-vs-micro|influencer-search|influencer-database|influencer-discovery|creator-discovery|how-to-contact|influencer-outreach-strategy|how-to-work-with-influencers|influencer-campaign-(project-plan|checklist)/;

/** Instagram articles qualify when they're about creators, not organic posting. UGC articles qualify only via DISCOVERY_SLUG. */
const CREATOR_SLUG = /influencer|creators?(-|$)/;

/** Other platforms: the tool has no creators for them. */
const OTHER_PLATFORMS = new Set(["youtube", "linkedin", "snapchat", "pinterest", "reddit", "tiktok", "podcast", "x", "whatsapp"]);

/** The tool lists creators in India, so guides for other markets and agency listicles are left out. */
const EXCLUDED_SLUG = /(^|-)(uae|dubai|saudi|ksa|gcc|uk|london|australia|sydney|singapore|diaspora)(-|$)|agencies|agency|-vs-instagram/;

const BLOG_COPY: Record<string, DiscoveryBannerCopy> = {
  UGC: {
    headline: "Looking for UGC creators to work with?",
    body: "Explore Kudozz Discovery to find Instagram creators in your category and shortlist potential partners for your next UGC brief.",
    ctaLabel: "Explore Kudozz Discovery",
  },
  Instagram: {
    headline: "Looking for Instagram creators for your next campaign?",
    body: "Explore Kudozz Discovery to search Instagram creators in India by niche, location and engagement, and save a shortlist.",
    ctaLabel: "Explore Kudozz Discovery",
  },
  default: {
    headline: "Looking for creators for your next campaign?",
    body: "Explore Kudozz Discovery and find Instagram creators relevant to your brand and campaign requirements, then shortlist them in one place.",
    ctaLabel: "Explore Kudozz Discovery",
  },
};

/**
 * Returns the Discovery CTA copy for an article, or null when it shouldn't show one. Brand-audience articles only
 * (creator-facing guides keep their own CTAs); never for other platforms, other markets or agency guides; and only
 * where the article is about finding, choosing, vetting or contacting creators. Matched list:
 * reports/kudozz-discovery-integration/04-cta-and-internal-link-audit.md.
 */
export function getBlogDiscoveryCta(post: BlogPost, ctaSet: BlogCtaSet): DiscoveryBannerCopy | null {
  if (ctaSet.audience !== "brand") return null;
  if (OTHER_PLATFORMS.has(ctaSet.platform)) return null;
  // Market-prefixed topics ("UAE: …", "Location: …") are guides for other markets or cities' agency lists.
  if (ctaSet.topic.includes(":") || ctaSet.topic === "Agency Comparison" || EXCLUDED_SLUG.test(post.slug)) return null;
  const relevant =
    DISCOVERY_TOPICS.has(ctaSet.topic) ||
    DISCOVERY_SLUG.test(post.slug) ||
    (ctaSet.topic === "Instagram" && CREATOR_SLUG.test(post.slug));
  if (!relevant) return null;
  return BLOG_COPY[ctaSet.topic] ?? BLOG_COPY.default;
}

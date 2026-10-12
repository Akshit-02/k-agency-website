/**
 * Contextual "related service" link for brand articles, derived from data the post already has (its CTA topic
 * and spatialCoverage), so every brand article links to the Kudozz service and market page it relates to.
 * This is a text link at the end of the article, not a third CTA block.
 */
import type { BlogPost } from "@/content/blog";
import type { BlogCtaSet } from "@/lib/blogCta";
import { getServiceBySlug, type Service } from "@/content/services";
import { getMarketBySlug, type Market } from "@/content/markets";

// First match wins; the market prefix ("UAE: ", "AU: " …) is stripped before matching.
const TOPIC_TO_SERVICE: [RegExp, string][] = [
  [/UGC|Creator Ads/i, "ugc-campaigns"],
  [/Launch|Seeding|Product Drop/i, "product-launches"],
  [/Always-On|Ambassador|Retention|Affiliate/i, "ambassador-programs"],
  [/Measurement|ROI|Reporting|Brand Lift|Performance|Traffic|Optimi[sz]ation|Forecast|Conversion/i, "reporting"],
  [/Discovery|Selection|Marketplace|Technology|Vetting/i, "creator-discovery"],
  [/Management|Compliance|Legal|Governance|Onboarding|Team|Contract/i, "outreach-management"],
  [/^(X|Instagram|YouTube|LinkedIn|Snapchat|Pinterest|Reddit|Podcast|TikTok|Livestream|Platform)|Event|Seasonal|Ramadan|Retail/i, "social-campaigns"],
];

function marketFor(post: BlogPost, topic: string): Market | "all" | undefined {
  const place = `${post.spatialCoverage ?? ""} ${topic}`;
  if (/Australia, India|Gulf Cooperation|^GCC:|Qatar|Kuwait|Oman/i.test(place)) return "all";
  if (/Saudi Arabia and United Arab|United Arab Emirates and Saudi/i.test(place)) return "all";
  if (/United Arab Emirates|Dubai|^UAE:/i.test(place)) return getMarketBySlug("uae");
  if (/Saudi|Riyadh|^KSA:/i.test(place)) return getMarketBySlug("saudi-arabia");
  if (/Australia|^AU:/i.test(place)) return getMarketBySlug("australia");
  if (/United Kingdom|^UK:/i.test(place)) return getMarketBySlug("uk");
  return undefined;
}

/**
 * `service` is omitted when the mid-article CTA already links to a service page, so the article doesn't link the
 * same service twice; the market link is still returned.
 */
export function getBlogServiceLink(post: BlogPost, ctaSet: BlogCtaSet): { service?: Service; market?: Market | "all" } | null {
  if (ctaSet.audience !== "brand") return null;
  const market = marketFor(post, ctaSet.topic);
  if (ctaSet.mid.href.startsWith("/services/")) return market ? { market } : null;
  const topic = ctaSet.topic.replace(/^(UAE|KSA|GCC|AU|UK|SG):\s*/, "");
  const slug = TOPIC_TO_SERVICE.find(([re]) => re.test(topic))?.[1] ?? "campaign-strategy";
  const service = getServiceBySlug(slug);
  if (!service) return null;
  return { service, market };
}

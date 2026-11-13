import type { BlogPost } from "@/content/blog";
import { indiaPost } from "@/content/location-guides/india";
import { statePosts } from "@/content/location-guides/states";
import { cityPosts } from "@/content/location-guides/cities";
import { ugcLocationPosts } from "@/content/location-guides/ugc";
import { instagramLocationPosts } from "@/content/location-guides/instagram";
import { youtubeLocationPosts } from "@/content/location-guides/youtube";
import { campaignManagementLocationPosts } from "@/content/location-guides/campaign-management";
import { seedingLocationPosts } from "@/content/location-guides/seeding";
import { smmLocationWestPosts } from "@/content/location-guides/smm-locations-west";
import { smmLocationNorthEastPosts } from "@/content/location-guides/smm-locations-north-east";
import { smmLocationSouthPosts } from "@/content/location-guides/smm-locations-south";
import { SMM_DISCLOSURE } from "@/content/location-guides/smm-shared";

const DISCLOSURE_RE = /publishes this guide|published by Kudozz|^Disclosure:/i;

/**
 * Publisher disclosure for agency shortlists (2026-11 SEO audit). Pages that profile other agencies list Kudozz
 * first, so readers are told near the top that Kudozz publishes the guide. Added after the intro paragraph, only
 * where a page doesn't already carry a disclosure. Not a content revision, so `updatedAt` is left alone.
 */
function withPublisherDisclosure(post: BlogPost): BlogPost {
  const isShortlist = post.slug.startsWith("best-") && (post.mentions?.length ?? 0) > 0;
  if (!isShortlist || post.body.some((b) => "text" in b && DISCLOSURE_RE.test(b.text))) return post;
  return { ...post, body: [post.body[0], SMM_DISCLOSURE, ...post.body.slice(1)] };
}

/**
 * Location cluster (India → state/UT → city) rebuilt with researched agency alternatives.
 * Remaining state/UT guides still live in blog.ts's core array until they get the same treatment;
 * see docs/location-seo-audit.md for status per location.
 */
export const locationGuidePosts: BlogPost[] = [indiaPost, ...statePosts, ...cityPosts, ...ugcLocationPosts, ...instagramLocationPosts, ...youtubeLocationPosts, ...campaignManagementLocationPosts, ...seedingLocationPosts,
  // Social media marketing / management agency guides, wave 1 (2026-11-12). See reports/location-seo/.
  ...smmLocationWestPosts, ...smmLocationNorthEastPosts, ...smmLocationSouthPosts].map(withPublisherDisclosure);

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

/**
 * Location cluster (India → state/UT → city) rebuilt with researched agency alternatives.
 * Remaining state/UT guides still live in blog.ts's core array until they get the same treatment;
 * see docs/location-seo-audit.md for status per location.
 */
export const locationGuidePosts: BlogPost[] = [indiaPost, ...statePosts, ...cityPosts, ...ugcLocationPosts, ...instagramLocationPosts, ...youtubeLocationPosts, ...campaignManagementLocationPosts, ...seedingLocationPosts,
  // Social media marketing / management agency guides, wave 1 (2026-11-12). See reports/location-seo/.
  ...smmLocationWestPosts, ...smmLocationNorthEastPosts, ...smmLocationSouthPosts];

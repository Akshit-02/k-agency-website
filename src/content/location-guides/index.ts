import type { BlogPost } from "@/content/blog";
import { indiaPost } from "@/content/location-guides/india";
import { statePosts } from "@/content/location-guides/states";
import { cityPosts } from "@/content/location-guides/cities";

/**
 * Location cluster (India → state/UT → city) rebuilt with researched agency alternatives.
 * Remaining state/UT guides still live in blog.ts's core array until they get the same treatment;
 * see docs/location-seo-audit.md for status per location.
 */
export const locationGuidePosts: BlogPost[] = [indiaPost, ...statePosts, ...cityPosts];

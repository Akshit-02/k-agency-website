import type { BlogPost } from "@/content/blog";
import { marketplacePosts } from "@/content/creator-economy/marketplaces";
import { b2bCreatorEconomyPosts } from "@/content/creator-economy/b2b";

/**
 * Brand-side creator economy articles kept outside the (very large) core array in blog.ts:
 * creator marketplaces and the value chain (880–889, 898–899) and the B2B creator economy (890–899).
 * Hub pages: creator-marketplace and b2b-creator-economy.
 */
export const MARKETPLACE_HUB_SLUG = "creator-marketplace";
export const B2B_HUB_SLUG = "b2b-creator-economy";

export const marketplaceSlugs = marketplacePosts.map((p) => p.slug);
export const b2bCreatorEconomySlugs = b2bCreatorEconomyPosts.map((p) => p.slug);

export const creatorEconomyPosts: BlogPost[] = [...marketplacePosts, ...b2bCreatorEconomyPosts];

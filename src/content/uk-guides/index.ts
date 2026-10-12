import type { BlogPost } from "@/content/blog";
import { ukCorePosts } from "@/content/uk-guides/uk-core";
import { ukPlanningPosts } from "@/content/uk-guides/uk-planning";

/**
 * UK cluster (1860–1909): a pillar plus guides on advertising rules, giveaways, regulated products, regional
 * planning, agency selection, costs, the retail calendar and e-commerce. Buyer guides only; nothing claims a UK
 * office, network or clients. See docs/uk-seo-audit-1860-1909.md.
 */
export const ukGuidePosts: BlogPost[] = [...ukCorePosts, ...ukPlanningPosts];

/** Slugs in the cluster, used by the CTA resolver. */
export const ukGuideSlugs = ukGuidePosts.map((post) => post.slug);

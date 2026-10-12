import type { BlogPost } from "@/content/blog";
import { auCorePosts } from "@/content/au-guides/au-core";
import { auSectorPosts } from "@/content/au-guides/au-sectors";
import { auPlanningPosts } from "@/content/au-guides/au-planning";
import { auIndustryPosts } from "@/content/au-guides/au-industries";

/**
 * Australia cluster: batch 1 (1540–1559) is a pillar plus guides on agencies, costs, rules, vetting, platforms, the
 * under-16 restrictions and five sectors; batch 2 (1560–1609) adds planning guides and eight regulated or
 * high-intent industries. Buyer guides only; nothing claims an Australian office, network or
 * clients. See docs/australia-1540-1559-audit.md and docs/australia-1560-1609-audit.md.
 */
export const auGuidePosts: BlogPost[] = [...auCorePosts, ...auSectorPosts, ...auPlanningPosts, ...auIndustryPosts];

/** Slugs in the cluster, used by the CTA resolver. */
export const auGuideSlugs = auGuidePosts.map((post) => post.slug);

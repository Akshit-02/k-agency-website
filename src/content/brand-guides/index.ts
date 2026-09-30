import type { BlogPost } from "@/content/blog";
import { agencySelectionPosts } from "@/content/brand-guides/agency-selection";
import { campaignPlanningPosts } from "@/content/brand-guides/campaign-planning";
import { objectivesAndScalePosts } from "@/content/brand-guides/objectives-and-scale";
import { programsAndIndustriesPosts } from "@/content/brand-guides/programs-and-industries";

/**
 * Brand lead-generation cluster (900–949): new brand-side guides kept outside blog.ts's core array.
 * Most of the cluster's 50 topics are served by updated existing pages; see docs/brand-guides-900-949-audit.md.
 */
export const brandGuidePosts: BlogPost[] = [
  ...agencySelectionPosts,
  ...campaignPlanningPosts,
  ...objectivesAndScalePosts,
  ...programsAndIndustriesPosts,
];

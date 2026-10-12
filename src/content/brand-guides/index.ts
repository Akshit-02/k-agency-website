import type { BlogPost } from "@/content/blog";
import { agencySelectionPosts } from "@/content/brand-guides/agency-selection";
import { campaignPlanningPosts } from "@/content/brand-guides/campaign-planning";
import { objectivesAndScalePosts } from "@/content/brand-guides/objectives-and-scale";
import { programsAndIndustriesPosts } from "@/content/brand-guides/programs-and-industries";
import { planningAndProgramsPosts } from "@/content/brand-guides/planning-and-programs";
import { measurementPosts } from "@/content/brand-guides/measurement";
import { technologyAiPosts } from "@/content/brand-guides/technology-ai";
import { technologyOperationsPosts } from "@/content/brand-guides/technology-operations";
import { technologyToolsPosts } from "@/content/brand-guides/technology-tools";
import { technologyInsightsPosts } from "@/content/brand-guides/technology-insights";
import { intelligenceDataPosts } from "@/content/brand-guides/intelligence-data";
import { intelligenceScoringPosts } from "@/content/brand-guides/intelligence-scoring";
import { intelligenceResearchPosts } from "@/content/brand-guides/intelligence-research";
import { relationshipsOutreachPosts } from "@/content/brand-guides/relationships-outreach";
import { relationshipsPartnershipPosts } from "@/content/brand-guides/relationships-partnerships";
import { operationsOnboardingPosts } from "@/content/brand-guides/operations-onboarding";
import { operationsPaymentPosts } from "@/content/brand-guides/operations-payments";
import { operationsRecordsPosts } from "@/content/brand-guides/operations-records";
import { operationsExecutionPosts } from "@/content/brand-guides/operations-execution";
import { optimizationCyclePosts } from "@/content/brand-guides/optimization-cycle";
import { budgetPlanningPosts } from "@/content/brand-guides/budget-planning";
import { contentRightsPosts } from "@/content/brand-guides/content-rights";
import { governanceRiskPosts } from "@/content/brand-guides/governance-risk";
import { growthProgramPosts } from "@/content/brand-guides/growth-programs";
import { advancedPracticePosts } from "@/content/brand-guides/advanced-practice";
import { partnershipFormatPosts } from "@/content/brand-guides/partnership-formats";
import { measurementStrategyPosts } from "@/content/brand-guides/measurement-strategy";
import { customerCommercePosts } from "@/content/brand-guides/customer-commerce";
import { programEvidencePosts } from "@/content/brand-guides/program-evidence";

/**
 * Brand lead-generation cluster (900–949): new brand-side guides kept outside blog.ts's core array.
 * Most of the cluster's 50 topics are served by updated existing pages; see docs/brand-guides-900-949-audit.md.
 */
export const brandGuidePosts: BlogPost[] = [
  ...agencySelectionPosts,
  ...campaignPlanningPosts,
  ...objectivesAndScalePosts,
  ...programsAndIndustriesPosts,
  ...planningAndProgramsPosts,
  ...measurementPosts,
  // Influencer technology cluster (1150–1169); see docs/influencer-technology-1150-1169-audit.md.
  ...technologyAiPosts,
  ...technologyOperationsPosts,
  ...technologyToolsPosts,
  ...technologyInsightsPosts,
  // Creator intelligence cluster (1170–1189); see docs/creator-intelligence-1170-1189-audit.md.
  ...intelligenceDataPosts,
  ...intelligenceScoringPosts,
  ...intelligenceResearchPosts,
  // Creator outreach and relationship cluster (1190–1209); see docs/creator-relationships-1190-1209-audit.md.
  ...relationshipsOutreachPosts,
  ...relationshipsPartnershipPosts,
  // Creator operations cluster (1210–1229); see docs/creator-operations-1210-1229-audit.md.
  ...operationsOnboardingPosts,
  ...operationsPaymentPosts,
  ...operationsRecordsPosts,
  // Campaign execution layer (1230–1249); see docs/campaign-execution-1230-1249-audit.md.
  ...operationsExecutionPosts,
  // Optimization and iteration cluster (1250–1269); see docs/campaign-optimization-1250-1269-audit.md.
  ...optimizationCyclePosts,
  // Budgeting and creator pricing cluster (1270–1289); see docs/budget-pricing-1270-1289-audit.md.
  ...budgetPlanningPosts,
  // Content rights and commercial terms cluster (1290–1309); see docs/content-rights-1290-1309-audit.md.
  ...contentRightsPosts,
  // Compliance, brand safety and campaign risk cluster (1310–1329); see docs/compliance-risk-1310-1329-audit.md.
  ...governanceRiskPosts,
  // Creator programs, performance and commerce cluster (1330–1379); see docs/growth-programs-1330-1379-audit.md.
  ...growthProgramPosts,
  // Strategy, measurement, AI and international execution (1610–1659); see docs/brand-guides-1610-1659-audit.md.
  ...advancedPracticePosts,
  // Batch 1660–1709: newsletters, co-branded products, code of conduct; see docs/brand-guides-1660-1709-audit.md.
  ...partnershipFormatPosts,
  // Batch 1710–1759: MMM, report reconciliation, long sales cycles, rebrands, PR, customer insight; see docs/brand-guides-1710-1759-audit.md.
  ...measurementStrategyPosts,
  // Batch 1760–1809: customer advocacy, AI shopping, marketplace sellers, data privacy, brand lift surveys, business case, employer branding; see docs/brand-guides-1760-1809-audit.md.
  ...customerCommercePosts,
  ...programEvidencePosts,
];

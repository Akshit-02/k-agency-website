import type { BlogPost } from "@/content/blog";
import { getBrandReadyPosts } from "@/content/creator-resources/get-brand-ready";
import { findBrandCollaborationPosts } from "@/content/creator-resources/find-brand-collaborations";
import { understandBrandDealPosts } from "@/content/creator-resources/understand-brand-deals";
import { runYourCreatorBusinessPosts } from "@/content/creator-resources/run-your-creator-business";
import { growYourIncomePosts } from "@/content/creator-resources/grow-your-income";
import { creatorPositioningPosts } from "@/content/creator-resources/creator-positioning";
import { manageCampaignPosts } from "@/content/creator-resources/manage-campaigns";
import { rightsAndAnalyticsPosts } from "@/content/creator-resources/rights-and-analytics";
import { creatorBusinessOperationsPosts } from "@/content/creator-resources/creator-business-operations";
import { creatorCommercePosts } from "@/content/creator-resources/creator-commerce";

import { ownedAudiencePosts } from "@/content/creator-resources/owned-audience";
import { audienceMonetizationPosts } from "@/content/creator-resources/audience-monetization";
import { commerceAndYouTubePosts } from "@/content/creator-resources/commerce-and-youtube";
import { aiAndAnalyticsPosts } from "@/content/creator-resources/ai-and-analytics";
import { businessPlanningPosts } from "@/content/creator-resources/business-planning";
import { searchDiscoveryPosts } from "@/content/creator-resources/search-discovery";
import { contentCreationPosts } from "@/content/creator-resources/content-creation";
import { creatorGrowthPosts } from "@/content/creator-resources/creator-growth";
import { contentAnalyticsPosts } from "@/content/creator-resources/content-analytics";
import { protectionAndOperationsPosts } from "@/content/creator-resources/protection-and-operations";
import { instagramCreatorPosts } from "@/content/creator-resources/instagram-creators";
import { youtubeCreatorPosts } from "@/content/creator-resources/youtube-creators";
import { tiktokCreatorPosts } from "@/content/creator-resources/tiktok-creators";
import { commerceJourneyPosts } from "@/content/creator-resources/commerce-journey";
import { creatorBusinessStrategyPosts } from "@/content/creator-resources/creator-business-strategy";
import { dealOperationsPosts } from "@/content/creator-resources/deal-operations";
import { pricingAndDealSelectionPosts } from "@/content/creator-resources/pricing-and-deal-selection";
import { sponsoredTrustAndAttributionPosts } from "@/content/creator-resources/sponsored-trust-and-attribution";
import { aiAndRegionalGrowthPosts } from "@/content/creator-resources/ai-and-regional-growth";
import { audienceAndGoalsPosts } from "@/content/creator-resources/audience-and-goals";
import { contentStrategySystemPosts } from "@/content/creator-resources/content-strategy-system";
import { contentIdeasResearchPosts } from "@/content/creator-resources/content-ideas-research";
import { videoCraftPosts } from "@/content/creator-resources/video-craft";
import { authorityAndCommunityPosts } from "@/content/creator-resources/authority-and-community";
import { creatorFinancePosts } from "@/content/creator-resources/creator-finance";
import { digitalProductsPosts } from "@/content/creator-resources/digital-products";
import { creatorServicesPosts } from "@/content/creator-resources/creator-services-business";
import { creatorEducationPosts } from "@/content/creator-resources/creator-education";
import { salesFunnelOperationsPosts } from "@/content/creator-resources/sales-funnel-operations";
import { creatorOperationsPosts } from "@/content/creator-resources/creator-operations";
import { creatorTeamHiringPosts } from "@/content/creator-resources/creator-team-hiring";
import { outsourcingProductionPosts } from "@/content/creator-resources/outsourcing-production";
import { techAndAutomationPosts } from "@/content/creator-resources/tech-and-automation";
import { scalingAndResiliencePosts } from "@/content/creator-resources/scaling-and-resilience";
import { legalAndIpPosts } from "@/content/creator-resources/legal-and-ip";
import { creatorBookkeepingFinancePosts } from "@/content/creator-resources/creator-bookkeeping-finance";
import { brandProtectionCompliancePosts } from "@/content/creator-resources/brand-protection-compliance";
import { businessInfrastructurePosts } from "@/content/creator-resources/business-infrastructure";
import { creatorAgenciesPosts } from "@/content/creator-resources/creator-agencies";
import { agencyGrowthPosts } from "@/content/creator-resources/agency-growth";
import { talentAndRosterPosts } from "@/content/creator-resources/talent-and-roster";
import { campaignOperationsPosts } from "@/content/creator-resources/campaign-operations";

/**
 * Creator Resources: the creator-facing cluster (media kits, pricing,
 * contracts, invoicing, monetization…). Articles live under /blog/[slug]
 * like every other post; this config drives /creator-resources, the
 * section pages, breadcrumbs, related articles and CTA variants.
 */
export const CREATOR_RESOURCES = {
  name: "Creator Resources",
  category: "Creator Resources",
  path: "/creator-resources",
  description:
    "Creator resources for building a professional creator business: Instagram, YouTube and TikTok guides, brand collaborations, contracts, trust-first creator commerce, audience ownership and sustainable creator income.",
} as const;

/**
 * Top-level navigation groups, in reading order: discovery → content →
 * growth → analytics → brand collaborations → protection → business, then
 * the three platform hubs. Each creator CTA variant in blogCta.ts is keyed
 * by group.
 */
export type CreatorResourceGroupId =
  | "seo"
  | "content"
  | "growth"
  | "community"
  | "analytics"
  | "brand-deals"
  | "monetization"
  | "commerce"
  | "protection"
  | "business"
  | "agencies"
  | "instagram"
  | "youtube"
  | "tiktok";

export const creatorResourceGroups: { id: CreatorResourceGroupId; title: string }[] = [
  { id: "seo", title: "Creator SEO" },
  { id: "content", title: "Creator Content" },
  { id: "growth", title: "Creator Growth" },
  { id: "community", title: "Creator Community" },
  { id: "analytics", title: "Creator Analytics" },
  { id: "brand-deals", title: "Creator Brand Deals" },
  { id: "monetization", title: "Creator Monetization" },
  { id: "commerce", title: "Creator Commerce" },
  { id: "protection", title: "Creator Protection" },
  { id: "business", title: "Creator Business" },
  { id: "agencies", title: "Creator Agencies" },
  { id: "instagram", title: "Instagram Creator Resources" },
  { id: "youtube", title: "YouTube Creator Resources" },
  { id: "tiktok", title: "TikTok Creator Resources" },
];

export type CreatorResourceSection = {
  id: string;
  group: CreatorResourceGroupId;
  title: string;
  intro: string;
  /** Meta description for the section page. */
  description: string;
  /** The section's parent article, shown first on the section page and preferred in related articles. */
  pillar: string;
  slugs: string[];
  /** Optional sub-groups shown on the section page (used by the platform hubs). Every slug here is also in `slugs`. */
  subsections?: { title: string; slugs: string[] }[];
  /** Guides that live in other sections but belong on this page too, listed after the section's own articles. */
  alsoSee?: string[];
};

/**
 * Sections, in journey order. Each article belongs to exactly one section
 * (its primary home, used for breadcrumbs and related articles).
 * `influencer-engagement-rate` and `ugc-creator-portfolio` live in the core
 * blog array but belong here too.
 */
export const creatorResourceSections: CreatorResourceSection[] = [
  {
    id: "search-foundations",
    group: "seo",
    title: "Search Foundations",
    intro: "How discovery works across Google, YouTube, social and AI search.",
    description: "Creator SEO foundations: discovery across Google, YouTube, Instagram, TikTok and AI search, social search, content gaps and creator website SEO.",
    pillar: "creator-seo",
    slugs: [
      "creator-seo",
      "social-search-for-creators",
      "how-to-find-content-gaps",
      "creator-website-seo",
    ],
  },
  {
    id: "youtube-search",
    group: "seo",
    title: "YouTube Search",
    intro: "Rank videos and Shorts, and plan for search and recommendations.",
    description: "YouTube SEO for creators: ranking videos and Shorts, keyword research and how search differs from recommendations.",
    pillar: "youtube-seo-for-creators",
    slugs: [
      "youtube-seo-for-creators",
      "youtube-keyword-research",
      "youtube-search-vs-recommendations",
    ],
  },
  {
    id: "instagram-tiktok-search",
    group: "seo",
    title: "Instagram & TikTok Search",
    intro: "Get found in Instagram search, and apply TikTok's lessons where it's available.",
    description: "Instagram SEO, Instagram keyword strategy and TikTok SEO with Creator Search Insights, including notes for Indian creators.",
    pillar: "instagram-seo-for-creators",
    slugs: [
      "instagram-seo-for-creators",
      "instagram-keyword-strategy",
      "tiktok-seo",
    ],
  },
  {
    id: "content-strategy",
    group: "content",
    title: "Content Strategy",
    intro: "A repeatable system from audience to measurement.",
    description: "Creator content strategy: the six-part content system, content pillars, planning frameworks, the production workflow and content distribution.",
    pillar: "creator-content-strategy",
    slugs: [
      "creator-content-strategy",
      "content-pillars-for-creators",
      "creator-content-frameworks",
      "creator-content-workflow",
      "creator-content-distribution",
    ],
  },
  {
    id: "content-ideas",
    group: "content",
    title: "Content Ideas & Research",
    intro: "Find ideas worth making, and know which will last.",
    description: "Content ideas and research for creators: trend vs evergreen content, trend research, evergreen content ideas and studying other creators without copying.",
    pillar: "trend-vs-evergreen-content-creators",
    slugs: [
      "trend-vs-evergreen-content-creators",
      "creator-trend-research",
      "evergreen-content-ideas-creators",
      "creator-competitor-analysis",
    ],
  },
  {
    id: "short-form-content",
    group: "content",
    title: "Short-Form Content",
    intro: "A consistent system for Reels and Shorts, from hook to series.",
    description: "Short-form video strategy for creators: Reels and Shorts strategy, hooks, scripts and repeatable content series.",
    pillar: "short-form-video-strategy",
    slugs: [
      "short-form-video-strategy",
      "reels-content-strategy",
      "youtube-shorts-content-strategy",
      "short-form-video-hooks",
      "how-to-write-video-scripts",
      "creator-content-series",
    ],
  },
  {
    id: "video-craft",
    group: "content",
    title: "Video Craft",
    intro: "Stories people remember, and packaging that earns the click.",
    description: "Video craft for creators: storytelling frameworks for Reels, Shorts and YouTube, thumbnail strategy and titles that work for search and clicks.",
    pillar: "creator-storytelling",
    slugs: [
      "creator-storytelling",
      "creator-thumbnail-strategy",
      "creator-title-strategy",
    ],
  },
  {
    id: "content-production",
    group: "content",
    title: "Content Production",
    intro: "Repurpose, batch and plan so consistency doesn't depend on motivation.",
    description: "Content production for creators: repurposing, turning long videos into shorts, batching and a 30-day content calendar.",
    pillar: "content-repurposing-for-creators",
    slugs: [
      "content-repurposing-for-creators",
      "turn-long-video-into-short-form-content",
      "content-batching-for-creators",
      "creator-content-calendar",
    ],
  },
  {
    id: "ai-for-creators",
    group: "content",
    title: "AI for Creators",
    intro: "Use AI to save time without losing your voice.",
    description: "AI for creators: choosing AI tools, an AI content workflow, AI for brand collaborations, AI disclosure rules in India and AI influencers vs human creators.",
    pillar: "ai-tools-for-creators",
    slugs: [
      "ai-tools-for-creators",
      "ai-content-workflow-for-creators",
      "ai-for-creator-brand-collaborations",
      "ai-disclosure-creators",
      "ai-influencers-vs-human-creators",
    ],
  },
  {
    id: "sponsored-content-and-trust",
    group: "content",
    title: "Sponsored Content & Trust",
    intro: "Keep sponsored content authentic, and your audience glad to see it.",
    description: "Sponsored content and audience trust: keeping brand content authentic, avoiding sponsored content fatigue and balancing sponsored and organic content.",
    pillar: "creator-audience-trust-sponsored-content",
    slugs: [
      "creator-audience-trust-sponsored-content",
      "sponsored-content-fatigue-creators",
      "creator-content-mix-sponsored-organic",
    ],
  },
  {
    id: "audience-and-goals",
    group: "growth",
    title: "Audience & Goals",
    intro: "Know who you serve, what they want, and what you're aiming for.",
    description: "Creator audience strategy and goals: identifying your ideal audience, audience research methods and setting creator goals that improve your business.",
    pillar: "identify-ideal-audience-creator",
    slugs: [
      "identify-ideal-audience-creator",
      "creator-audience-research",
      "creator-goals",
    ],
  },
  {
    id: "audience-growth",
    group: "growth",
    title: "Audience Growth",
    intro: "Grow sustainably, from zero to a loyal audience.",
    description: "Creator growth guides: a 90-day plan from zero, sustainable growth strategy, converting viral views, measuring real audience growth and growing regional audiences in India.",
    pillar: "creator-growth-strategy",
    slugs: [
      "creator-growth-strategy",
      "how-to-grow-as-a-creator-from-zero",
      "turn-viral-views-into-followers",
      "follower-growth-vs-audience-growth",
      "regional-creator-growth-india",
    ],
  },
  {
    id: "brand-and-authority",
    group: "growth",
    title: "Personal Brand & Authority",
    intro: "Become known for something, and trusted for it.",
    description: "Personal branding for creators: personal brand, niche selection, positioning, authority, thought leadership and founder creator brands.",
    pillar: "how-to-build-a-creator-brand",
    slugs: [
      "how-to-build-a-creator-brand",
      "creator-niche-selection",
      "creator-positioning",
      "how-to-build-authority-as-a-creator",
      "creator-thought-leadership",
      "founder-creator-brand",
    ],
  },
  {
    id: "creator-relationships",
    group: "growth",
    title: "Creator Relationships",
    intro: "Collaborate, cross-promote and network with other creators.",
    description: "Creator relationships: finding creators to collaborate with, cross-promotion, networking and joint brand campaigns.",
    pillar: "how-to-find-creators-to-collaborate-with",
    slugs: [
      "how-to-find-creators-to-collaborate-with",
      "creator-cross-promotion",
      "creator-networking",
      "creator-collaborations-with-other-influencers",
    ],
  },
  {
    id: "audience-and-community",
    group: "community",
    title: "Audience & Community",
    intro: "Build an audience you own and a community that talks back.",
    description: "Guides to building a creator audience and community: audience quality, communities, WhatsApp, email newsletters and newsletter monetization.",
    pillar: "how-to-build-a-creator-community",
    slugs: [
      "how-to-build-a-creator-community",
      "creator-community-engagement",
      "how-to-build-an-audience-brands-want",
      "whatsapp-community-for-creators",
      "creator-newsletter-india",
      "creator-newsletter-monetization",
      "creator-content-moderation",
    ],
  },
  {
    id: "content-performance",
    group: "analytics",
    title: "Content Performance",
    intro: "Find what's working, why, and whether it's worth your time.",
    description: "Creator content analytics: what content works, engagement analytics, analysing viral videos, a 30-post audit, A/B testing and content ROI.",
    pillar: "creator-content-analytics",
    slugs: [
      "creator-content-analytics",
      "creator-engagement-analytics",
      "how-to-analyze-a-viral-video",
      "content-performance-audit",
      "creator-ab-testing",
      "creator-content-roi",
    ],
  },
  {
    id: "platform-analytics",
    group: "analytics",
    title: "Platform Analytics",
    intro: "YouTube, Instagram and short-form metrics, explained.",
    description: "Platform analytics for creators: YouTube Analytics metrics, Instagram Insights, short-form analytics and watch time vs retention.",
    pillar: "youtube-analytics-for-creators",
    slugs: [
      "youtube-analytics-for-creators",
      "instagram-insights-for-creators",
      "short-form-video-analytics",
      "watch-time-vs-retention",
    ],
  },
  {
    id: "analytics",
    group: "analytics",
    title: "Business & Brand Analytics",
    intro: "Your business dashboard, and the numbers brands ask for.",
    description: "Creator business and brand analytics: analytics dashboard, engagement rate, engagement vs reach and analytics for brand deals.",
    pillar: "creator-analytics-dashboard",
    slugs: [
      "creator-analytics-dashboard",
      "influencer-engagement-rate",
      "engagement-rate-vs-reach-for-creators",
      "creator-analytics-for-brand-deals",
    ],
  },
  {
    id: "get-brand-ready",
    group: "brand-deals",
    title: "Get Brand-Ready",
    intro: "The documents brands ask for before they say yes.",
    description: "How creators get brand-ready: media kit, rate card, portfolio, UGC portfolio and pitch deck guides for Indian creators.",
    pillar: "creator-media-kit",
    slugs: [
      "creator-media-kit",
      "influencer-rate-card-india",
      "creator-portfolio",
      "ugc-creator-portfolio",
      "creator-pitch-deck",
    ],
  },
  {
    id: "get-brand-deals",
    group: "brand-deals",
    title: "Get Brand Deals",
    intro: "Where deals come from, how to pitch, and what to charge.",
    description: "Guides to getting brand deals as a creator: the brand deal lifecycle, pitching, email templates, finding brands, pricing and negotiation.",
    pillar: "creator-brand-deals",
    slugs: [
      "creator-brand-deals",
      "how-to-pitch-brands-as-a-creator",
      "brand-collaboration-email-templates",
      "how-to-find-brands-to-collaborate-with",
      "first-brand-collaboration-india",
      "how-much-should-creators-charge-india",
      "how-to-negotiate-brand-deals-as-a-creator",
    ],
  },
  {
    id: "deal-operations",
    group: "brand-deals",
    title: "Deal Operations",
    intro: "A pipeline, a CRM and the paperwork that keep brand income steady.",
    description: "Creator deal operations: building a brand partnership pipeline, a creator CRM, handling inbound leads, contracts vs emails and campaign documentation.",
    pillar: "creator-brand-partnership-pipeline",
    slugs: [
      "creator-brand-partnership-pipeline",
      "creator-crm",
      "manage-brand-collaboration-leads",
      "creator-contracts-vs-emails",
      "creator-campaign-documentation",
    ],
  },
  {
    id: "choosing-deals",
    group: "brand-deals",
    title: "Choosing the Right Deals",
    intro: "Which collaborations to accept, which to decline, and how to say no well.",
    description: "Choosing brand collaborations as a creator: brand fit scorecard, opportunity cost, saying no professionally and turning product seeding into relationships.",
    pillar: "creator-brand-fit",
    slugs: [
      "creator-brand-fit",
      "creator-opportunity-cost",
      "how-creators-say-no-to-brand-deals",
      "creator-product-seeding",
    ],
  },
  {
    id: "manage-campaigns",
    group: "brand-deals",
    title: "Manage Campaigns",
    intro: "From brief to posted content, without scope creep or surprises.",
    description: "How creators manage brand campaigns: proposals, briefs, creative control, deliverables, approvals and revisions, payment terms, late payments, cancellations and a brand deal checklist.",
    pillar: "creator-brand-deals",
    slugs: [
      "creator-campaign-proposal",
      "creator-brand-brief",
      "creator-deliverables",
      "creator-brand-revisions",
      "creator-payment-terms",
      "creators-handle-late-brand-payments",
      "creator-cancellation-policy",
      "negotiate-creative-control-brand-deals",
      "creator-brand-deal-checklist",
    ],
  },
  {
    id: "contracts-and-rights",
    group: "brand-deals",
    title: "Contracts & Rights",
    intro: "The clauses that decide what a deal is really worth.",
    description: "Creator contracts and rights explained: influencer contracts, usage rights, exclusivity, content licensing and whitelisting.",
    pillar: "influencer-contract-guide-for-creators",
    slugs: [
      "influencer-contract-guide-for-creators",
      "creator-usage-rights",
      "creator-exclusivity",
      "creator-content-licensing",
      "creator-whitelisting",
    ],
  },
  {
    id: "after-the-campaign",
    group: "brand-deals",
    title: "After the Campaign",
    intro: "Report, prove results and turn one-off deals into long-term partnerships.",
    description: "After a brand collaboration: campaign reporting, case studies, managing brand clients, retainer deals and turning one brand deal into a long-term partnership.",
    pillar: "creator-campaign-reporting",
    slugs: [
      "creator-campaign-reporting",
      "creator-case-study",
      "creator-client-management",
      "creator-brand-partnerships",
      "creator-retainer-deals",
    ],
  },
  {
    id: "monetization",
    group: "monetization",
    title: "Monetization",
    intro: "Income beyond one-off brand deals.",
    description: "Creator monetization guides: income streams and monetization strategy, memberships and subscriptions, paid communities, free vs paid content and earning more from brand content.",
    pillar: "creator-monetization-india",
    slugs: [
      "creator-monetization-india",
      "creator-memberships",
      "creator-paid-community-india",
      "creator-paywall-content",
      "creator-revenue-streams-from-brand-content",
    ],
  },
  {
    id: "digital-products",
    group: "monetization",
    title: "Digital Products",
    intro: "From idea and validation to launch, pricing and specific product types.",
    description: "Digital products for creators: product ideas, validation, launching, pricing, templates and toolkits, Notion templates, ebooks and printables.",
    pillar: "sell-digital-products-as-a-creator-india",
    slugs: [
      "sell-digital-products-as-a-creator-india",
      "digital-product-ideas-for-creators",
      "creator-digital-product-validation",
      "launch-digital-product-creators",
      "creator-digital-product-pricing",
      "sell-templates-guides-creators",
      "notion-templates-creators",
      "creator-ebooks",
      "creator-printables",
    ],
  },
  {
    id: "courses-and-workshops",
    group: "monetization",
    title: "Courses & Workshops",
    intro: "Educational products people finish and recommend.",
    description: "Creator education products: the course business, choosing a course topic, course pricing, course launches, paid workshops and webinars.",
    pillar: "creator-course-business",
    slugs: [
      "creator-course-business",
      "creator-course-topic",
      "creator-course-pricing",
      "creator-course-launch",
      "creator-workshops",
      "creator-webinar-strategy",
    ],
  },
  {
    id: "youtube",
    group: "monetization",
    title: "YouTube Monetization",
    intro: "Every way to earn on YouTube, checked against official sources.",
    description: "YouTube monetization for Indian creators: Partner Program, Shorts, fan funding including Gifts and memberships, and YouTube Shopping.",
    pillar: "youtube-creator-monetization",
    slugs: [
      "youtube-creator-monetization",
      "youtube-gifts-memberships-super-thanks",
      "youtube-shopping-india-creators",
    ],
  },
  {
    id: "creator-commerce",
    group: "commerce",
    title: "Creator Commerce",
    intro: "Turn recommendations and products into sales.",
    description: "Creator commerce in India: turning content into sales, affiliate marketing and building a creator storefront.",
    pillar: "creator-commerce-india",
    slugs: [
      "creator-commerce-india",
      "creator-affiliate-marketing-india",
      "creator-storefront",
    ],
  },
  {
    id: "recommendations-and-shopping-content",
    group: "commerce",
    title: "Recommendations & Shopping Content",
    intro: "Recommend products honestly, and make it easy for people to buy.",
    description: "Trust-first creator commerce: product recommendations, affiliate links that don't spam, shopping content, authentic sponsored reviews and gift guides.",
    pillar: "creator-product-recommendations",
    slugs: [
      "creator-product-recommendations",
      "creator-affiliate-links",
      "shoppable-content-creators",
      "creator-product-reviews",
      "creator-gift-guides",
    ],
  },
  {
    id: "funnels-and-audience-ownership",
    group: "commerce",
    title: "Funnels & Audience Ownership",
    intro: "Turn attention into subscribers, customers and relationships you own.",
    description: "Creator sales funnels: audience ownership, the creator-to-customer journey, lead magnets, email funnels, landing pages, checkout and product analytics.",
    pillar: "creator-funnel",
    slugs: [
      "creator-funnel",
      "creator-audience-ownership",
      "creator-customer-journey",
      "creator-landing-pages",
      "creator-lead-magnets",
      "creator-email-funnel",
      "creator-checkout",
      "creator-product-analytics",
    ],
  },
  {
    id: "commerce-measurement",
    group: "commerce",
    title: "Commerce Measurement",
    intro: "Show what your content sold, honestly.",
    description: "Measuring creator commerce: attribution methods, conversion rates and discount codes, with honest reporting of tracked sales.",
    pillar: "creator-attribution",
    slugs: [
      "creator-attribution",
      "creator-conversion-rate",
      "creator-discount-codes",
    ],
  },
  {
    id: "legal-and-ip",
    group: "protection",
    title: "Contracts & Intellectual Property",
    intro: "The agreements you sign and what you own. General information, not legal advice.",
    description: "Creator contracts and intellectual property in India: the agreements a creator business signs, what creators own, copyright and trademarks. General information, not legal advice.",
    pillar: "creator-contracts",
    slugs: [
      "creator-contracts",
      "creator-intellectual-property",
      "creator-copyright",
      "creator-trademark",
    ],
    alsoSee: ["influencer-contract-guide-for-creators", "creator-usage-rights", "creator-content-licensing", "creator-exclusivity"],
  },
  {
    id: "content-protection",
    group: "protection",
    title: "Content & Identity Protection",
    intro: "Protect your accounts, your identity and your audience.",
    description: "Creator protection: account security, protecting videos from reuploads, impersonation and spotting fake brand offers.",
    pillar: "creator-account-security",
    slugs: [
      "protect-videos-from-reuploads",
      "creator-impersonation",
      "creator-scams-fake-brand-collaborations",
      "creator-account-security",
    ],
  },
  {
    id: "responsible-partnerships",
    group: "protection",
    title: "Responsible Partnerships",
    intro: "Disclose properly and protect your reputation in brand deals.",
    description: "Responsible brand partnerships: disclosing sponsored content in India and creator brand safety.",
    pillar: "creator-disclosure-guide",
    slugs: [
      "creator-disclosure-guide",
      "creator-brand-safety",
      "creator-advertising-rules",
    ],
  },
  {
    id: "reputation-and-crisis",
    group: "protection",
    title: "Reputation & Crisis",
    intro: "Protect how people see you, and respond well when something goes wrong.",
    description: "Creator reputation management and crisis management: search results, audience perception, corrections, transparency and step-by-step responses to backlash and partnership problems.",
    pillar: "creator-reputation-management",
    slugs: [
      "creator-reputation-management",
      "creator-crisis-management",
      "creator-crisis-communication",
    ],
  },
  {
    id: "business-foundations",
    group: "business",
    title: "Business Foundations",
    intro: "The plan, website and core resources for a creator business.",
    description: "Creator business foundations: business plan, creator website, link in bio and the creator business kit.",
    pillar: "creator-business-plan",
    slugs: [
      "creator-business-plan",
      "how-to-build-a-creator-website",
      "link-in-bio-for-creators",
      "creator-business-kit",
    ],
    alsoSee: ["creator-operations"],
  },
  {
    id: "creator-operations",
    group: "business",
    title: "Creator Operations",
    intro: "Move from chaos to documented, organised and automated systems.",
    description: "Creator operations: the eight business systems, an interactive operations checklist, the brand deal workflow, SOPs, project and task management, and workflow automation.",
    pillar: "creator-operations",
    slugs: [
      "creator-operations",
      "creator-operations-checklist",
      "creator-workflow",
      "creator-business-sops",
      "creator-project-management",
      "creator-task-management",
      "creator-workflow-automation",
    ],
    alsoSee: ["creator-crm", "creator-brand-partnership-pipeline", "creator-content-calendar"],
  },
  {
    id: "money-and-tax",
    group: "business",
    title: "Money & Tax",
    intro: "Invoices, TDS, GST and expenses, explained for Indian creators.",
    description: "Money and tax basics for Indian creators: invoicing brands, TDS, GST, tracking income and expenses, and the tax records to keep.",
    pillar: "how-to-invoice-brands-as-a-creator-india",
    slugs: [
      "how-to-invoice-brands-as-a-creator-india",
      "tds-for-influencers-india",
      "gst-for-influencers-india",
      "creator-business-expenses-india",
      "creator-income-tracker",
      "creator-tax-records-india",
      "creator-bookkeeping",
      "creator-invoice-management",
    ],
  },
  {
    id: "creator-finance",
    group: "business",
    title: "Creator Finance",
    intro: "Make irregular income predictable: plan, forecast, budget and protect margins.",
    description: "Creator finance: financial planning for irregular income, revenue forecasting with a free calculator, cash flow, business budgets and profit margin. General information, not financial advice.",
    pillar: "creator-financial-planning",
    slugs: [
      "creator-financial-planning",
      "creator-revenue-forecasting",
      "creator-cash-flow-management",
      "creator-business-budget",
      "creator-profit-margin",
      "creator-profit-loss-statement",
      "creator-break-even-analysis",
    ],
  },
  {
    id: "creator-services",
    group: "business",
    title: "Creator Services",
    intro: "Turn expertise into consulting, coaching and done-for-you work.",
    description: "Creator services: turning expertise into paid services, consulting, coaching, offer packaging, service pricing, discovery calls and client onboarding.",
    pillar: "creator-services",
    slugs: [
      "creator-services",
      "creator-consulting-services",
      "creator-coaching-business",
      "creator-offer-packaging",
      "creator-service-pricing",
      "creator-discovery-call",
      "creator-client-onboarding",
    ],
  },
  {
    id: "pricing-and-profit",
    group: "business",
    title: "Pricing & Profit",
    intro: "Work out what to charge, what it costs and what you really earn.",
    description: "Creator pricing and profit: a free pricing calculator, raising rates, production cost per piece and calculating the real profit on brand deals.",
    pillar: "creator-pricing-calculator",
    slugs: [
      "creator-pricing-calculator",
      "how-to-raise-creator-rates",
      "creator-content-production-cost",
      "creator-brand-deal-profit",
    ],
  },
  {
    id: "business-model-and-strategy",
    group: "business",
    title: "Business Model & Strategy",
    intro: "Choose how you earn, spread the risk and price every offer.",
    description: "Advanced creator business strategy: choosing a business model, diversifying revenue and building a pricing strategy across brand work, services, products and memberships.",
    pillar: "creator-business-model",
    slugs: [
      "creator-business-model",
      "creator-revenue-diversification",
      "creator-pricing-strategy",
    ],
  },
  {
    id: "team-and-representation",
    group: "business",
    title: "Team, Hiring & Representation",
    intro: "When to hire, who to hire, how to pay them and how to run the team.",
    description: "Creator team building and hiring: when to hire, 15 team roles, virtual assistants, video editors, social media managers, team compensation, team management and a neutral comparison of managers, agencies and MCNs.",
    pillar: "creator-team-building",
    slugs: [
      "creator-team-building",
      "creator-team-roles",
      "creator-assistant",
      "hire-video-editor-creator",
      "hire-social-media-manager-creator",
      "creator-team-compensation",
      "creator-team-management",
      "creator-manager-vs-agency",
    ],
  },
  {
    id: "business-infrastructure",
    group: "business",
    title: "Business Infrastructure",
    intro: "Email, files, brand assets and backups that make the business run smoothly.",
    description: "Creator business infrastructure: a professional business email, file and brand asset management, and a backup strategy for content and business data.",
    pillar: "creator-file-management",
    slugs: [
      "creator-file-management",
      "creator-business-email",
      "creator-backup-strategy",
    ],
    alsoSee: ["how-to-build-a-creator-website", "creator-media-kit", "creator-account-security", "creator-business-sops"],
  },
  {
    id: "creator-agencies",
    group: "agencies",
    title: "Start & Run an Agency",
    intro: "Start a creator management agency or studio, plan it, and run it well.",
    description: "Start and run a creator agency: starting a creator management agency in India, the agency business plan, agency operations and money flow, and the creator studio model.",
    pillar: "start-creator-management-agency-india",
    slugs: [
      "start-creator-management-agency-india",
      "creator-agency-business-plan",
      "creator-agency-operations",
      "creator-studio-business-model",
    ],
    alsoSee: ["creator-manager-vs-agency", "scaling-creator-business", "creator-business-model"],
  },
  {
    id: "agency-growth",
    group: "agencies",
    title: "Agency Growth & Commercials",
    intro: "Grow an established agency: revenue model, pricing, profitability, winning and keeping clients.",
    description: "Creator agency growth and commercials: growth strategy, the agency revenue model and commission, pricing and retainers, profitability, client acquisition and the sales funnel, and client retention and account growth.",
    pillar: "creator-agency-growth-strategy",
    slugs: [
      "creator-agency-growth-strategy",
      "creator-management-agency-business-model",
      "creator-agency-pricing-strategy",
      "creator-agency-profitability",
      "creator-agency-client-acquisition",
      "creator-agency-client-retention",
    ],
    alsoSee: ["creator-agency-business-plan", "creator-campaign-capacity-planning"],
  },
  {
    id: "talent-and-roster",
    group: "agencies",
    title: "Talent & Roster",
    intro: "The talent lifecycle: find, screen, organise, develop and keep the creators you represent.",
    description: "Creator talent and roster management for agencies: talent management and retention, talent acquisition and recruitment, screening with a scorecard, roster strategy and diversity, the talent database, roster evaluation and talent development.",
    pillar: "creator-talent-management",
    slugs: [
      "creator-talent-management",
      "creator-talent-acquisition",
      "creator-talent-screening",
      "creator-roster-strategy",
      "creator-talent-database",
      "creator-roster-evaluation",
      "creator-talent-development",
    ],
    alsoSee: ["creator-manager-vs-agency", "creator-team-compensation"],
  },
  {
    id: "campaign-operations",
    group: "agencies",
    title: "Campaign Operations",
    intro: "The agency operating system for running many creator campaigns reliably.",
    description: "Creator campaign operations for agencies: running campaigns at scale, capacity and resource planning, quality assurance, escalation, post-mortems and a campaign knowledge base.",
    pillar: "creator-campaign-operations",
    slugs: [
      "creator-campaign-operations",
      "creator-campaign-capacity-planning",
      "creator-campaign-quality-assurance",
      "creator-campaign-escalation",
      "creator-campaign-post-mortem",
    ],
    alsoSee: ["influencer-campaign-management", "influencer-marketing-report", "creator-agency-operations"],
  },
  {
    id: "outsourcing-and-production",
    group: "business",
    title: "Outsourcing & Production",
    intro: "Decide what to keep, delegate, outsource or automate, and keep quality high.",
    description: "Creator outsourcing and production: what to delegate first (with a delegation calculator), outsourcing content without losing your voice, production team structure and content quality control.",
    pillar: "creator-outsourcing",
    slugs: [
      "creator-outsourcing",
      "outsource-content-creation",
      "creator-production-team",
      "creator-content-quality-control",
    ],
    alsoSee: ["creator-content-workflow", "hire-video-editor-creator", "creator-thumbnail-strategy"],
  },
  {
    id: "tools-and-automation",
    group: "business",
    title: "Tools & Automation",
    intro: "A small, connected tech stack, no-code automation and careful use of AI agents.",
    description: "Creator tools and automation: building a creator tech stack, connecting tools with no-code automation and what AI agents can safely do in a creator business.",
    pillar: "creator-tech-stack",
    slugs: [
      "creator-tech-stack",
      "no-code-automation-creators",
      "ai-agents-for-creators",
    ],
    alsoSee: ["creator-workflow-automation", "ai-tools-for-creators", "creator-crm"],
  },
  {
    id: "scaling-and-resilience",
    group: "business",
    title: "Scaling & Resilience",
    intro: "Grow beyond one person, and keep the business running when things go wrong.",
    description: "Scaling a creator business and protecting it: growth stages, scalability, business risk management, platform risk and business continuity planning.",
    pillar: "scaling-creator-business",
    slugs: [
      "scaling-creator-business",
      "creator-business-risk-management",
      "creator-platform-risk",
      "creator-business-continuity",
    ],
    alsoSee: ["creator-account-security", "creator-reputation-management", "creator-crisis-management", "creator-revenue-diversification"],
  },
  {
    id: "instagram-creator-resources",
    group: "instagram",
    title: "Instagram for Creators",
    intro: "Monetization, brand partnerships, community and content strategy on Instagram.",
    description: "Instagram creator resources for Indian creators: monetization (Gifts, Subscriptions, badges), Creator Marketplace, brand-ready profiles, broadcast channels, Collab posts, Trial Reels, Reels analytics and content strategy.",
    pillar: "instagram-creator-monetization",
    slugs: [
      "instagram-creator-monetization",
      "instagram-gifts",
      "instagram-subscriptions",
      "instagram-creator-marketplace",
      "instagram-creator-portfolio",
      "instagram-broadcast-channels",
      "instagram-collab-posts-for-creators",
      "instagram-trial-reels",
      "instagram-reels-analytics",
      "instagram-content-strategy",
    ],
    subsections: [
      { title: "Monetization", slugs: ["instagram-creator-monetization", "instagram-gifts", "instagram-subscriptions"] },
      { title: "Brand partnerships", slugs: ["instagram-creator-marketplace", "instagram-creator-portfolio"] },
      { title: "Community", slugs: ["instagram-broadcast-channels", "instagram-collab-posts-for-creators"] },
      { title: "Content & analytics", slugs: ["instagram-content-strategy", "instagram-trial-reels", "instagram-reels-analytics"] },
    ],
    alsoSee: [
      "instagram-seo-for-creators",
      "instagram-keyword-strategy",
      "reels-content-strategy",
      "instagram-insights-for-creators",
    ],
  },
  {
    id: "youtube-creator-resources",
    group: "youtube",
    title: "YouTube for Creators",
    intro: "Brand partnerships, commerce, live, memberships and channel strategy on YouTube.",
    description: "YouTube creator resources for Indian creators: YouTube Creator Partnerships, YouTube media kits, long-term brand deals, BrandConnect history, affiliate marketing, product tagging, live monetization, memberships, Shorts vs long-form and channel strategy.",
    pillar: "youtube-content-strategy",
    slugs: [
      "youtube-content-strategy",
      "youtube-creator-partnerships-india",
      "youtube-media-kit",
      "youtube-brand-deals",
      "youtube-brandconnect-vs-creator-partnerships",
      "youtube-affiliate-marketing",
      "youtube-product-tagging",
      "youtube-live-monetization",
      "youtube-channel-membership-strategy",
      "youtube-shorts-vs-long-form",
    ],
    subsections: [
      { title: "Brand partnerships", slugs: ["youtube-creator-partnerships-india", "youtube-media-kit", "youtube-brand-deals", "youtube-brandconnect-vs-creator-partnerships"] },
      { title: "Commerce", slugs: ["youtube-affiliate-marketing", "youtube-product-tagging"] },
      { title: "Community & monetization", slugs: ["youtube-live-monetization", "youtube-channel-membership-strategy"] },
      { title: "Content", slugs: ["youtube-content-strategy", "youtube-shorts-vs-long-form"] },
    ],
    alsoSee: [
      "youtube-creator-monetization",
      "youtube-gifts-memberships-super-thanks",
      "youtube-shopping-india-creators",
      "youtube-seo-for-creators",
      "youtube-shorts-content-strategy",
      "youtube-analytics-for-creators",
    ],
  },
  {
    id: "tiktok-creator-resources",
    group: "tiktok",
    title: "TikTok for Creators",
    intro: "For creators serving audiences where TikTok operates, with lessons for Reels and Shorts.",
    description: "TikTok creator resources: monetization, Creator Rewards Program, profile optimisation, content strategy, TikTok SEO and content gaps, LIVE, affiliate, analytics and adapting content between TikTok and Reels, with clear notes on TikTok's unavailability in India.",
    pillar: "tiktok-creator-monetization",
    slugs: [
      "tiktok-creator-monetization",
      "tiktok-creator-rewards-program",
      "tiktok-profile-optimization",
      "tiktok-content-strategy",
      "tiktok-content-gaps",
      "tiktok-live",
      "tiktok-affiliate-marketing",
      "tiktok-analytics",
      "tiktok-vs-instagram-reels",
    ],
    subsections: [
      { title: "Monetization", slugs: ["tiktok-creator-monetization", "tiktok-creator-rewards-program"] },
      { title: "Discovery", slugs: ["tiktok-profile-optimization", "tiktok-content-gaps"] },
      { title: "Content, LIVE & commerce", slugs: ["tiktok-content-strategy", "tiktok-live", "tiktok-affiliate-marketing"] },
      { title: "Analytics & cross-platform", slugs: ["tiktok-analytics", "tiktok-vs-instagram-reels"] },
    ],
    alsoSee: ["tiktok-seo", "social-search-for-creators", "short-form-video-strategy"],
  },
];

export function getCreatorSectionForSlug(slug: string): CreatorResourceSection | undefined {
  return creatorResourceSections.find((section) => section.slugs.includes(slug));
}

export function getCreatorSectionById(id: string): CreatorResourceSection | undefined {
  return creatorResourceSections.find((section) => section.id === id);
}

export function creatorSectionPath(section: CreatorResourceSection): string {
  return `${CREATOR_RESOURCES.path}/${section.id}`;
}

/** The creator journey, shown on the hub. Each stage links to the most useful starting article. */
export const creatorJourney: { label: string; slug: string }[] = [
  { label: "Get discovered", slug: "creator-seo" },
  { label: "Plan your content", slug: "creator-content-strategy" },
  { label: "Create consistently", slug: "short-form-video-strategy" },
  { label: "Grow your audience", slug: "creator-growth-strategy" },
  { label: "Build your personal brand", slug: "how-to-build-a-creator-brand" },
  { label: "Measure what works", slug: "creator-content-analytics" },
  { label: "Become brand-ready", slug: "creator-media-kit" },
  { label: "Find and pitch brands", slug: "creator-brand-deals" },
  { label: "Negotiate and sign", slug: "influencer-contract-guide-for-creators" },
  { label: "Deliver and report", slug: "creator-campaign-reporting" },
  { label: "Protect your work", slug: "creator-contracts" },
  { label: "Monetize", slug: "creator-monetization-india" },
  { label: "Sell with trust", slug: "creator-product-recommendations" },
  { label: "Own your audience", slug: "creator-funnel" },
  { label: "Run it like a business", slug: "creator-business-plan" },
  { label: "Build your operations", slug: "creator-operations" },
  { label: "Scale beyond yourself", slug: "scaling-creator-business" },
  { label: "Build an agency or studio", slug: "start-creator-management-agency-india" },
  { label: "Grow the agency", slug: "creator-agency-growth-strategy" },
  { label: "Manage a creator roster", slug: "creator-talent-management" },
  { label: "Run campaigns at scale", slug: "creator-campaign-operations" },
  { label: "Build recurring partnerships", slug: "creator-brand-partnerships" },
];

/** Platform hub sections, linked near the top of the hub page. */
export const PLATFORM_HUB_SECTION_IDS = ["instagram-creator-resources", "youtube-creator-resources", "tiktok-creator-resources"];

/** The pillar page, featured at the top of the hub. */
export const CREATOR_PILLAR_SLUG = "creator-business-kit";

export const creatorResourcePosts: BlogPost[] = [
  ...legalAndIpPosts,
  ...creatorBookkeepingFinancePosts,
  ...brandProtectionCompliancePosts,
  ...businessInfrastructurePosts,
  ...creatorAgenciesPosts,
  ...agencyGrowthPosts,
  ...talentAndRosterPosts,
  ...campaignOperationsPosts,
  ...creatorOperationsPosts,
  ...creatorTeamHiringPosts,
  ...outsourcingProductionPosts,
  ...techAndAutomationPosts,
  ...scalingAndResiliencePosts,
  ...creatorFinancePosts,
  ...digitalProductsPosts,
  ...creatorServicesPosts,
  ...creatorEducationPosts,
  ...salesFunnelOperationsPosts,
  ...audienceAndGoalsPosts,
  ...contentStrategySystemPosts,
  ...contentIdeasResearchPosts,
  ...videoCraftPosts,
  ...authorityAndCommunityPosts,
  ...dealOperationsPosts,
  ...pricingAndDealSelectionPosts,
  ...sponsoredTrustAndAttributionPosts,
  ...aiAndRegionalGrowthPosts,
  ...instagramCreatorPosts,
  ...youtubeCreatorPosts,
  ...tiktokCreatorPosts,
  ...commerceJourneyPosts,
  ...creatorBusinessStrategyPosts,
  ...searchDiscoveryPosts,
  ...contentCreationPosts,
  ...creatorGrowthPosts,
  ...contentAnalyticsPosts,
  ...protectionAndOperationsPosts,
  ...ownedAudiencePosts,
  ...audienceMonetizationPosts,
  ...commerceAndYouTubePosts,
  ...aiAndAnalyticsPosts,
  ...businessPlanningPosts,
  ...manageCampaignPosts,
  ...creatorPositioningPosts,
  ...rightsAndAnalyticsPosts,
  ...creatorBusinessOperationsPosts,
  ...creatorCommercePosts,
  ...growYourIncomePosts,
  ...getBrandReadyPosts,
  ...findBrandCollaborationPosts,
  ...understandBrandDealPosts,
  ...runYourCreatorBusinessPosts,
];

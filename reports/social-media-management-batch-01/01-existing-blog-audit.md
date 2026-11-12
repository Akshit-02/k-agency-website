# 01 — Existing Blog Audit (before writing)

Audit date: 11 November 2026. Source: local repository (`src/content/**`), previous reports in `reports/2027-global-transformation/` and `reports/social-media-management-expansion/`, and `gsc-data.xlsx`.

## Blog architecture

| Item | Finding |
|---|---|
| Storage | TypeScript data, no CMS. `src/content/blog.ts` aggregates the core array plus generated collections: `brand-guides/` (~50 files), `creator-resources/`, `location-guides/`, `gcc-guides/`, `uk-guides/`, `au-guides/`, `creator-economy/`. |
| Inventory | **961 slug/title pairs** extracted from `src/content/**` (includes ~19 service and market entries; the rest are articles). |
| Route | `/blog/[slug]`, statically generated. Per-post OG image route exists. |
| Article template | Hero (`hero.src` SVG 1600×700, else category graphic), "Last reviewed" date, table of contents from `heading` blocks, `ArticleBody` with paragraph, heading, subheading, list, table, quote, template, image and tool blocks, then FAQs, related articles and a bottom CTA. |
| CTAs | Automatic. `getBlogCtaSet` picks copy (per-slug `BRAND_GUIDE_CTAS`, then pattern matchers, then a generic fallback). The mid CTA is inserted at the section break nearest the midpoint, never in the first 3 blocks or the last 2, and only if the article has ≥ 8 blocks. The bottom CTA sits after the article. That makes exactly two CTAs, neither directly after the intro. |
| Structured data | `BlogPosting`/Article via `articleSchema` (headline, dates, author as Organization team, image, publisher), BreadcrumbList, FAQPage when FAQs exist (site convention). |
| Outbound links | `src/lib/links.ts` allowlist (zspace.in, flowjam.com). Other external URLs stay in the data for the record but render as plain text. |
| Categories before this batch | Influencer Marketing, Creator Economy, Social Media Trends, Brand Marketing, Instagram Marketing, Campaign Strategy, UGC Marketing, Creator Resources. **No social media management category.** |
| Visual style | Brand-guide heroes are hand-built SVG diagrams in the site palette (paper, ink, coral, violet, lime), with no stock photos or fake dashboards. 317 exist in `public/blog/brand-guides/`. |

## Existing social-media-related content (what could overlap)

All existing matches are **influencer-campaign or creator-side** intent. There is **no brand-side social media management article** in the library. The only "social media manager" article (`hire-social-media-manager-creator`) is written for creators.

| Batch topic area | Closest existing articles | Their intent |
|---|---|---|
| Choosing an agency | choose-influencer-marketing-agency-india, influencer-marketing-agency-checklist, 40+ "best influencer marketing agencies in <place>" | Influencer agency selection |
| In-house vs agency | influencer-marketing-agency-vs-in-house, hire-social-media-manager-creator, outsource-content-creation | Influencer / creator |
| Pricing | influencer-marketing-agency-fees-india, instagram-influencer-rates-india | Influencer fees, creator rates |
| Onboarding / 90 days | influencer-marketing-agency-onboarding, influencer-campaign-first-90-days | Influencer campaigns |
| Approvals / workflow | influencer-content-approval, creator-content-workflow, ugc-production-workflow | Creator content, UGC assets |
| Brand voice | none | — |
| Multi-location / franchise | franchise-influencer-marketing-gcc | Influencer, GCC |
| Community / support | influencer-campaign-comment-management, creator-content-moderation | Campaign comments, creator-side |
| Crisis | influencer-marketing-brand-safety, creator-crisis-communication, creator-crisis-management | Creator risk, creator-side |
| Listening | x-social-listening, influencer-social-listening, social-listening-creator-discovery, influencer-sentiment-analysis | X-only, creator discovery |
| Audit | influencer-marketing-audit, content-performance-audit | Influencer programme, creator-side |
| Platform choice | influencer-marketing-platforms-india, instagram-vs-youtube-vs-tiktok, instagram-vs-tiktok-vs-snapchat-uae | Influencer campaigns |
| Repurposing | repurpose-influencer-content, content-repurposing-for-creators, podcast-content-repurposing | Creator assets, creator-side |
| Organic vs paid | x-ads-vs-creator-marketing, ugc-paid-social-testing, creator-whitelisting | Ads vs creators, creator content in ads |
| KPIs / reporting | influencer-marketing-kpis, influencer-marketing-report, influencer-marketing-quarterly-review, influencer-marketing-dashboard | Influencer |
| Agency brief | influencer-marketing-agency-brief, influencer-marketing-rfp | Influencer |

## Previously planned batches

- `reports/social-media-management-expansion/09-social-media-blog-roadmap.csv` (60 topics): 9 of this batch's 20 map to roadmap items (SMM-02, 05, 12, 13, 19, 20, 40, 49/51, 52, 53). The other 11 are new operational topics that strengthen the cluster around the service. Roadmap items not covered here (Instagram for D2C, Reels for business, UGC for organic social, content calendar template and others) remain for batch 02.
- `reports/2027-global-transformation/06-global-blog-roadmap-2027.csv`: no social media management topics, so no conflict.

## Conclusion of the audit

- All 20 proposed topics serve a search intent the site doesn't currently answer (brand-owned social media operations), so **none were rejected**.
- 7 were **reframed** to stop them overlapping each other or influencer twins: 05, 06, 08, 09, 10, 13 and 16. See `02-topic-overlap-analysis.csv`.
- Each article cross-links its influencer or creator "twin" so the two intents stay separate rather than competing.
- No existing article needed to be overwritten, merged or redirected.

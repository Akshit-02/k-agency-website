# 02 · Existing content overlap audit

## Method
- Loaded the full blog index (`blogPosts` from `src/content/blog.ts`) with jiti: **1,101 posts**, 142 of them noindexed via `src/content/noindex.ts`. There were no duplicate slugs before or after this batch.
- **Blogs 1–60 verified live:** all 60 slugs in `src/content/discovery-guides/batch-a…l.ts` return **HTTP 200** on https://www.kudozz.in/blog/… (checked 26 Nov 2026). Spot-checked pages carry their slug-specific Discovery CTA (`utm_content=<slug>`). None of the 60 is noindexed.
- Matched the 20 proposed topics against slugs and titles across all content folders: `blog.ts`, `brand-guides/`, `discovery-guides/`, `creator-resources/`, and the GCC, UK, AU and location guides.
- Checked GSC page impressions for the last 3 months (`gscReport/Pages.csv`).

## Overlap findings and decisions

| # | Proposed slug | Existing URL with the same intent | GSC impr. (3 mo) | Decision |
|---|---|---|---|---|
| 61 | influencer-marketing-for-startups | /blog/influencer-marketing-startups-india ("Influencer Marketing for Startups: How to Launch Your First Creator Campaign") | 17 | **Upgraded in place** |
| 62 | influencer-marketing-small-businesses | none. /blog/influencer-marketing-small-business-customers is a different intent (brands selling *to* small businesses); /blog/is-influencer-marketing-worth-it is a yes/no founder question | – | **New URL** |
| 63 | influencers-for-shopify-stores | /blog/shopify-store-influencer-campaign-checklist is a store-readiness checklist, not creator finding | 22 (checklist) | **New URL**, differentiated and linked both ways |
| 64 | ecommerce-influencer-marketing-strategy | /blog/influencer-marketing-ecommerce-brands-india | 4 | **Upgraded in place** |
| 65 | influencer-marketing-for-saas-companies | /blog/saas-influencer-marketing-india (also b2b-influencer-marketing-india, influencer-marketing-b2b-technology) | 22 | **Upgraded in place**, linked to the B2B posts |
| 66 | influencers-for-luxury-brands | /blog/luxury-influencer-marketing-india | 31 | **Upgraded in place** |
| 67 | healthcare-wellness-influencer-marketing | /blog/influencer-marketing-healthcare-brands-india | 31 | **Upgraded in place** (`#asci-qualifications` kept; 6 inbound links) |
| 68 | influencers-for-real-estate-marketing | /blog/influencer-marketing-real-estate-brands-india | 18 | **Upgraded in place** |
| 69 | influencers-for-education-brands | /blog/influencer-marketing-education-edtech-brands-india | 53 | **Upgraded in place** (`#ccpa-coaching` kept) |
| 70 | influencers-for-automotive-brands | /blog/automotive-influencer-marketing-india (dealer angle stays on influencer-marketing-automotive-dealerships) | 40 | **Upgraded in place** |
| 71 | influencers-for-brand-awareness | /blog/influencer-marketing-brand-awareness | 6 | **Upgraded in place** |
| 72 | influencers-for-product-demonstration-videos | partial: creator-content-hard-to-demonstrate-products (content strategy), d2c-product-explainer-content (brand's own content) | – | **New URL**, focused on finding and vetting demo creators; both partials linked |
| 73 | influencers-for-app-launch | /blog/mobile-app-influencer-marketing-india | 183 | **Upgraded in place** |
| 74 | influencers-for-new-product-launch | /blog/influencers-for-product-launch (**Discovery #20**, 363 impr.) | 363 | **Re-angled** to market entry: new URL /blog/influencers-for-market-entry |
| 75 | influencers-for-performance-marketing | /blog/influencer-performance-marketing | 58 | **Upgraded in place** |
| 76 | always-on-influencer-marketing | /blog/always-on-influencer-marketing (**same slug**) | 48 | **Upgraded in place** |
| 77 | long-term-influencer-partnerships | /blog/influencer-partnerships ("How to Build a Long-Term Influencer Partnership Program"), plus #51 influencer-relationship-management | – | **Upgraded** influencer-partnerships; #51 left untouched and differentiated (day-to-day care vs the deal) |
| 78 | influencer-marketing-strategy-new-brands | none dedicated (influencer-marketing-strategy assumes existing awareness) | – | **New URL** |
| 79 | how-to-scale-influencer-marketing | partial: influencer-marketing-audit (pre-scale audit), scale-pause-stop-influencer-campaigns (single-campaign decision, noindexed) | – | **New URL** |
| 80 | in-house-vs-outsourced-influencer-marketing | /blog/influencer-marketing-agency-vs-in-house | 72 | **Upgraded in place** |

**Result:** 6 new URLs + 14 in-place upgrades. No competing URLs were created. No URL changed. Nothing was skipped.

## How upgrades were implemented
- Each new version lives in `src/content/discovery-guides/batch-m…p.ts`. The old object was removed from its original file (`blog.ts` ×12, `brand-guides/programs-and-industries.ts` ×1, `brand-guides/objectives-and-scale.ts` ×1), so each slug is defined exactly once.
- `publishedAt` is kept from the original post; `updatedAt: "2026-11-26"` is set. This drives sitemap `lastmod`, `article:modified_time` and `dateModified`.
- Writers read each old post first and carried over its accurate, still-useful specifics: the RERA s.3/s.11(2) checklist, the verbatim ASCI qualification text, the verbatim CCPA coaching list, DPDP under-18, marketplace tracking, rights tables and cost worksheets.
- **Dropped on purpose:** unverified third-party statistics (Redseer quick-commerce figure in #66, YouTube Shopping / Amazon Influencer Program growth figures in #64, a Meta partnership-ads statistic in #76), #76's GCC section (off-topic for an India cluster), and links to noindexed pages.
- Old hero SVGs in `public/blog/brand-guides/` are still on disk and unreferenced. They were left in place (no deletions).
- The "do not overwrite existing content" rule conflicts with "do not create a competing URL" for these 14 topics. Per the owner's decision, the overlap rule won.

## Remaining overlap risks to watch in GSC
- #61 vs #78 (startup / new brand): watch whether queries like "influencer marketing strategy for startups" split between them.
- #72 vs `creator-content-hard-to-demonstrate-products`.
- #77 vs `influencer-relationship-management` (#51).

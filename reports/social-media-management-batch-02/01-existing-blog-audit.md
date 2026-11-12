# 01 — Existing Blog Audit (Batch 02)

Audit date: 12 November 2026. Inventory re-extracted from `src/content/**`: **981 slug/title pairs**, including the 20 Batch 01 articles. The same blog architecture as Batch 01 applies: TypeScript data, the `/blog/[slug]` template, automatic mid and end CTAs, BlogPosting/Breadcrumb/FAQ JSON-LD, and SVG heroes. See `reports/social-media-management-batch-01/01-existing-blog-audit.md`.

## Category and tag architecture

- The "Social Media Management" category exists (added in Batch 01; 20 articles). Batch 02 uses it, so no new category is needed.
- Tags are free-text keyword phrases per post (5 per article in this cluster). There are no tag pages, so tags don't create URLs or thin pages.

## Existing content by Batch 02 theme

| Theme | Existing articles | Whose intent |
|---|---|---|
| Instagram | instagram-content-strategy, instagram-keyword-strategy, instagram-trial-reels, instagram-reels-analytics, reels-content-strategy, link-in-bio-for-creators, instagram-creator-portfolio | Creators |
| | instagram-reels-influencer-marketing, instagram-stories-influencer-marketing, instagram-ugc-marketing, instagram-creator-marketing-d2c-brands, instagram-influencer-marketing-ecommerce | Brands working with creators |
| | **No brand-account Instagram management, Stories, carousel or profile guide** | — |
| Facebook | **None** | — |
| LinkedIn | 10 articles on LinkedIn creators, executives, thought leadership, rates and ROI | Influencer / people-led |
| | **No company page management guide** | — |
| YouTube | youtube-content-strategy, youtube-seo-for-creators, youtube-shorts-content-strategy, youtube-analytics-for-creators | Creators |
| | **No brand channel management guide** | — |
| Pinterest | 10-article Pinterest influencer cluster | Influencer |
| | **No organic brand-profile guide** | — |
| Calendars | creator-content-calendar (creator), influencer-campaign-calendar (influencer); Batch 01 social-media-content-workflow covers monthly cadence | Mixed |
| Customer-led content | customer-insights-influencer-brief (questions to creator briefs), customer-testimonials-ugc (permissions and evidence) | Brands, creator- and UGC-focused |
| UGC | ~30 articles, including ugc-marketing-strategy, always-on-ugc-marketing, instagram-ugc-marketing | UGC programmes |
| Industries | Influencer guides for D2C, beauty, fashion, food and restaurants, SaaS and B2B tech, plus UAE, KSA and AU variants | Influencer |
| | **No social media management industry guides** | — |

## Batch 01 interaction

- Batch 02 sits on top of Batch 01's operating guides and links to them rather than repeating them:
  - workflow, approvals and voice
  - repurposing and platform choice
  - multi-location
  - KPIs and reporting
  - audit
- **One near-duplicate was found:** proposed Blog 30 ("…Without Publishing the Same Content Everywhere") vs Batch 01 #16 ("…Without Repeating the Same Post"). It was reframed to operations. See `02-batch-01-overlap-analysis.csv`.

## Decisions summary

- **20 approved; 0 rejected.**
- **4 reframed:**
  - 30: operations, not adaptation.
  - 31: template and execution, not workflow.
  - 32: own-channel formats; sourcing is linked out to `customer-insights-influencer-brief`.
  - 35: the organic content mix; UGC programme mechanics are linked out.
- **Titles changed:**
  - 30's title changed.
  - 32's title was clarified ("…Into Your Brand's Social Media Content").
  - 32's primary keyword was narrowed, because the generic "social media content ideas for brands" didn't match the article's intent.
- **Existing articles:** none overwritten, merged or redirected. The Batch 01 and influencer "twins" are cross-linked instead.
- **Roadmap:** items SMM-15 (calendar template), SMM-21 (Instagram for D2C, folded into 36), SMM-22 (Reels for business), SMM-23 (carousels), SMM-25 (Stories), SMM-31 (LinkedIn company page), SMM-38 (YouTube brand channel), SMM-45, 46 and 47 (industry content, now covered as full industry guides 37–39) and SMM-48 (UGC for organic social, covered by 35) from `reports/social-media-management-expansion/09-social-media-blog-roadmap.csv` are now addressed.

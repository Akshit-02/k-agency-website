# Implementation log: batch 8 (2026-10-25)

Earlier uncommitted batches were preserved. Nothing is committed or deployed.

## New articles

Both are in `src/content/brand-guides/content-gaps.ts`, appended to `contentGapPosts`, published 2026-10-25, category Campaign Strategy, no FAQs.

| URL | H1 | seoTitle (characters) | Meta | Sections | Links out | Hero |
| --- | --- | --- | --- | --- | --- | --- |
| /blog/influencer-marketing-enterprise-brands | Influencer Marketing for Enterprise Brands: Managing Multiple Products and Business Units | Influencer Marketing for Enterprise and Multi-Brand Groups (58) | 153 | Quick answer; operating models; central team; business units; RACI; exclusivity; consolidated reporting (template); getting started; mistakes; conclusion | governance, team structure, exclusivity#multi-brand, report, business case, /services/campaign-strategy | `public/blog/brand-guides/influencer-marketing-enterprise-brands.svg` |
| /blog/influencer-marketing-product-lifecycle | How to Plan Influencer Campaigns Around Your Product's Lifecycle | Influencer Marketing Across the Product Lifecycle (49) | 155 | Quick answer; stages table; launch; growth; maturity; decline; relaunch; portfolio (planning sheet); mistakes; conclusion | product launches, scale-pause-stop, rebrand, annual plan, /services/campaign-strategy | `public/blog/brand-guides/influencer-marketing-product-lifecycle.svg` |

Both slugs were checked: 906 posts, no duplicates.

**CTAs:** two `BRAND_GUIDE_CTAS` entries in `src/lib/blogCta.ts`.

## Updated pages

| URL | File | Change | `updatedAt` |
| --- | --- | --- | --- |
| /blog/entertainment-influencer-marketing-india | `src/content/blog.ts` | seoTitle "OTT, Film and Entertainment Influencer Marketing in India"; OTT release section (table and list) | 2026-10-25 |
| /blog/home-interior-influencer-marketing-india | `src/content/blog.ts` | Home-services section (table and list) | 2026-10-25 |
| /blog/multi-platform-influencer-campaigns | `src/content/brand-guides/founder-execution.ts` | Fair-comparison section (table, YouTube source, discrepancies link); meta shortened from 165 to 153 characters | 2026-10-25 |
| /blog/influencer-marketing-governance | `src/content/brand-guides/planning-and-programs.ts` | Inbound link to enterprise | unchanged |
| /blog/influencer-marketing-team-structure | `planning-and-programs.ts` | Inbound link to enterprise | unchanged |
| /blog/influencer-marketing-annual-plan | `planning-and-programs.ts` | Inbound link to lifecycle | unchanged |
| /blog/influencer-exclusivity | `src/content/brand-guides/content-rights.ts` | Inbound link to enterprise | unchanged |
| /blog/influencers-for-product-launch | `src/content/blog.ts` | Inbound link to lifecycle | unchanged |

## Not changed

Redirects, URLs, deletions, forms, API routes, analytics and environment variables.

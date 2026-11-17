# 08 · Implementation and QA Report

**Date:** 17 Nov 2026 · **Base:** commit `31162ab` plus the uncommitted homepage work from `reports/kudozz-homepage-seo/` · **Status:** implemented locally, **not committed, not deployed**.

## A. Completed work

### Owner decisions applied (17 Nov 2026)
1. The homepage keeps "Best Influencer Marketing Agency in India". `/services/influencer-marketing` targets "Best Influencer Marketing **Services** in India".
2. "Best" goes on the core pages plus the 5 sub-services with proven "[X] agency in India" demand. The other pages get natural "… Services in India" titles.
3. H1s on "Best" pages are declarative, as briefed.

### Pages updated (21)

| Page | Updated title | Updated H1 |
|---|---|---|
| Influencer marketing (pillar) | Best Influencer Marketing Services in India \| Kudozz | Best Influencer Marketing Services in India for Growing Brands |
| UGC campaigns | Best UGC Marketing Agency in India \| Kudozz | Best UGC Marketing Agency in India for Brand Content |
| Social media marketing & management | Best Social Media Marketing & Management Agency in India | Best social media marketing & management agency in India for growing brands. |
| Instagram | Best Instagram Influencer Marketing Agency in India \| Kudozz | Best Instagram Influencer Marketing Agency in India |
| YouTube | Best YouTube Influencer Marketing Agency in India \| Kudozz | Best YouTube Influencer Marketing Agency in India |
| Regional | Best Regional Influencer Marketing Agency in India \| Kudozz | Best Regional Influencer Marketing Agency in India |
| Micro & nano | Best Micro-Influencer Marketing Agency in India \| Kudozz | Best Micro & Nano Influencer Marketing Agency in India |
| Product launches | Best Product Launch Influencer Marketing Agency in India | Best Product Launch Influencer Marketing Agency in India |
| UGC production | UGC Video Production Services in India \| Kudozz | UGC Video Production & Content Creation Services in India |
| Outreach & management | Influencer Campaign Management Services in India \| Kudozz | Influencer Campaign Management Services in India |
| Strategy | Influencer Marketing Strategy Services in India \| Kudozz | Influencer Marketing Strategy Services in India |
| Creator discovery | Influencer Discovery & Selection Services in India \| Kudozz | Influencer Discovery & Selection Services in India |
| Reporting | Influencer Marketing Reporting & ROI Tracking \| Kudozz | Influencer Marketing Reporting & ROI Tracking |
| Social campaigns | Multi-Creator Social Media Campaigns in India \| Kudozz | Multi-Creator Social Media Campaigns in India |
| Paid | Paid Influencer Campaign Services in India \| Kudozz | Paid Influencer Campaign Services in India |
| Barter | Barter Influencer Campaign Services in India \| Kudozz | Barter Influencer Campaign Services in India |
| Seeding & gifting | Influencer Seeding & Gifting Services in India \| Kudozz | Influencer Seeding & Gifting Services in India |
| Affiliate | Influencer Affiliate Marketing Services in India \| Kudozz | Influencer Affiliate Marketing Services in India |
| Ambassador programs | Brand Ambassador Program Services in India \| Kudozz | Brand Ambassador Program Services in India |
| LinkedIn | B2B LinkedIn Influencer Marketing in India \| Kudozz | LinkedIn Influencer Marketing for B2B Brands in India |
| `/services` hub | Influencer, UGC & Social Media Services in India \| Kudozz | Influencer, UGC and social media marketing services in India: Three service areas. One coordinated team. |

Full before/after with descriptions and keywords: report 04.

### Files modified in this task

| File | Change |
|---|---|
| `src/content/services.ts` | `Service` type: `heroTitle` (required) and `choosing` (optional). For all 20 services: new `seoTitle`, `metaDescription` and `heroTitle`. Hero `description` rewritten for the pillar, UGC campaigns and product launches. `choosing` added to 7 pages. 4 new FAQs (pillar ×2, UGC ×2). `relatedSlugs` updated on 8 pages. |
| `src/components/services/ServiceDetail.tsx` | H1 uses `heroTitle`, the eyebrow shows the service name, the "What to look for" section renders when present, and the brand-name casing fix |
| `src/components/services/ServiceChoosing.tsx` | **New** shared section component |
| `src/app/services/[slug]/page.tsx` | " \| Kudozz" title branding (≤ 62 chars) with an absolute title |
| `src/app/services/social-media-management/page.tsx` | H1 rebuilt and resized, hero copy, "What to look for" section, FAQ heading, related services, absolute title |
| `src/content/social-media-management.ts` | `smmMeta` title and description, new `smmChoosing`, 2 new FAQs |
| `src/app/services/page.tsx` | Hub title and description |
| `src/components/services/ServicesHero.tsx` | Hub H1 lead line |
| `reports/kudozz-service-seo/01–08` | These reports |

**Not touched:** URLs, canonicals, redirects, the sitemap, enquiry forms, `/api/*`, the mailer, lead handling, env vars, GA4/Clarity, blog articles, the homepage (beyond the 17 Nov work), and `/for-brands`. `git diff` on the API, brand form, mailer, leads and layout files is empty.

## B. QA: tests actually performed

| # | Check | Method | Result |
|---|---|---|---|
| 1 | Unique titles | Parsed rendered HTML of all 21 `/services*` URLs + `/` + `/for-brands` | ✅ No duplicates |
| 2 | Unique descriptions | Same | ✅ No duplicates |
| 3 | One H1 per page | Same | ✅ 21/21 |
| 4 | Keyword in title, H1 and description | Manual review of the report 04 table | ✅ |
| 5 | Metadata matches content | Manual. Each "best" page's description lists only services described on the page. | ✅ |
| 6 | Useful content, no thin or duplicate additions | Word counts up 150–340 on 7 pages. "What to look for" text is unique per page. | ✅ (no automated similarity tool was run) |
| 7 | Internal links | `curl` on 250 unique internal paths | ✅ All 200 |
| 8 | Canonicals | Rendered `<link rel=canonical>` | ✅ Self-referencing, unchanged |
| 9 | Structured data | JSON parse of every JSON-LD block, plus FAQPage ↔ visible FAQ comparison on every page | ✅ Valid, all matching. ⚠️ Rich Results Test not run (needs the live URL). |
| 10 | Mobile and desktop | Playwright, 390×844 and 1440×900, on 5 pages | ✅ No overflow, no console errors. SMM CTA above the fold after the resize. |
| 11 | Forms and CTAs | Hero and bottom CTA hrefs keep `from=service:{slug}` (and `pos`/`t` on SMM). Form and API code untouched. | ✅ No enquiry was submitted, to avoid sending real email. |
| 12 | Build / lint / types / tests | `npm run build` (exit 0, run 3×), `npm run lint`, `tsc --noEmit` | ✅ Build passes. Lint: 0 errors, 2 pre-existing warnings in untouched files. **There is no automated test suite** (no `test` script). |

## C. Outstanding recommendations

| Priority | Recommendation | Needs |
|---|---|---|
| P0 | Deploy; run the Rich Results Test on the pillar, UGC campaigns and SMM; request indexing for the 21 URLs in GSC | Deploy |
| P0 | Annotate 17 Nov in GSC/GA4. Review in 6–8 weeks using the query → page checks in report 03 §3. | — |
| P1 | **Proof:** 2–3 real case studies or client quotes (with permission) on the pillar, UGC and SMM pages. "Best" in a title invites scrutiny that only evidence answers. | Content |
| P1 | In-body blog → service links listed in report 06 §4 | Approval (blog edits) |
| P1 | Retitle `/for-brands` around enquiry intent | Approval |
| P2 | "What to look for" sections for the thinnest pages (ambassador, reporting, social campaigns) once they show search demand | Data |
| P2 | PageSpeed Insights on the live pillar and SMM pages | Deploy |
| Note | **Superlative risk:** visible "Best … Agency in India" H1s on 8 pages are a self-applied superlative. ASCI's code expects comparative or superlative claims to be substantiable. This was chosen knowingly; the Service schema and body copy make no such claim. | Owner awareness |

**Not promised:** these changes improve relevance and clarity for the targeted searches. They don't guarantee rankings.

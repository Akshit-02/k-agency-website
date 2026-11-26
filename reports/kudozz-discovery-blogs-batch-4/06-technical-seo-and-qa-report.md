# 06 · Technical SEO and QA report

All results below are from commands actually run on 26 Nov 2026 against the local working tree and a local production build. **Nothing was deployed.**

## Files changed
- **New:** `src/content/discovery-guides/batch-m.ts`, `batch-n.ts`, `batch-o.ts`, `batch-p.ts` (5 posts each), plus 20 hero SVGs in `public/blog/discovery/` (2.1–3.1 KB each, 1600×700, the existing editorial style, each with `role="img"` and a `<title>` matching the alt text).
- **Modified:**
  - `src/content/discovery-guides/index.ts`: batches M–P wired in.
  - `src/content/blog.ts`: 12 old post objects removed, since they were upgraded.
  - `src/content/brand-guides/programs-and-industries.ts`: 1 removed.
  - `src/content/brand-guides/objectives-and-scale.ts`: 1 removed.
- **Not touched:** blog architecture, components, forms, APIs, email workflows, env vars, analytics code, the Discovery app or its database, existing URLs, and blogs 1–60.

## Per-article technical data
| # | URL | publishedAt | updatedAt | Canonical | Hero | Heading ids |
|---|---|---|---|---|---|---|
| 61 | influencer-marketing-startups-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/influencer-marketing-startups-india | /blog/discovery/influencer-marketing-startups-india.svg | why-startups-differ, before-you-search, creator-fit, sourcing-routine, early-trust, runway, phases, measuring, founder-outreach, common-mistakes, next-steps |
| 62 | influencer-marketing-small-businesses | 2026-11-26 | – | https://www.kudozz.in/blog/influencer-marketing-small-businesses | /blog/discovery/influencer-marketing-small-businesses.svg | business-type, budget, gifting-vs-paid, finding-creators, fit-check, outreach-terms, expectations, common-mistakes, starter-plan |
| 63 | influencers-for-shopify-stores | 2026-11-26 | – | https://www.kudozz.in/blog/influencers-for-shopify-stores | /blog/discovery/influencers-for-shopify-stores.svg | product-first, creator-types, find-and-vet, connect-to-store, reuse-content, product-brief, results, common-mistakes, conclusion |
| 64 | influencer-marketing-ecommerce-brands-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/influencer-marketing-ecommerce-brands-india | /blog/discovery/influencer-marketing-ecommerce-brands-india.svg | strategy-parts, creator-jobs, calendar, creator-bench, traffic-destinations, marketplace-tracking, content-engine, quarterly-review, common-mistakes, conclusion |
| 65 | saas-influencer-marketing-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/saas-influencer-marketing-india | /blog/discovery/saas-influencer-marketing-india.svg | saas-different, creator-types, founder-led, where-to-find, vetting, trials-and-demos, collaboration, measurement, common-mistakes, conclusion |
| 66 | luxury-influencer-marketing-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/luxury-influencer-marketing-india | /blog/discovery/luxury-influencer-marketing-india.svg | what-fit-means, creator-profiles, audience-relevance, shortlist-steps, exclusivity, brand-safety, long-term, measurement, common-mistakes, conclusion |
| 67 | influencer-marketing-healthcare-brands-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/influencer-marketing-healthcare-brands-india | /blog/discovery/influencer-marketing-healthcare-brands-india.svg | quick-answer, creator-profiles, asci-qualifications, other-rules, vetting-steps, segments, review-workflow, measurement, common-mistakes, conclusion |
| 68 | influencer-marketing-real-estate-brands-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/influencer-marketing-real-estate-brands-india | /blog/discovery/influencer-marketing-real-estate-brands-india.svg | buyer-journey, creator-profiles, project-timeline, finding-steps, rera, briefing, site-visit-flow, common-mistakes, conclusion |
| 69 | influencer-marketing-education-edtech-brands-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/influencer-marketing-education-edtech-brands-india | /blog/discovery/influencer-marketing-education-edtech-brands-india.svg | buyer-map, ccpa-coaching, under-18, creator-profiles, vetting, formats, academic-calendar, measurement, common-mistakes, conclusion |
| 70 | automotive-influencer-marketing-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/automotive-influencer-marketing-india | /blog/discovery/automotive-influencer-marketing-india.svg | creator-profiles, brand-vs-dealer, launch-phasing, finding-steps, road-safety, briefing, measurement, common-mistakes, conclusion |
| 71 | influencer-marketing-brand-awareness | 2026-09-12 | 2026-11-26 | https://www.kudozz.in/blog/influencer-marketing-brand-awareness | /blog/discovery/influencer-marketing-brand-awareness.svg | what-awareness-needs, creator-types, formats, how-to-find, reach-and-frequency, measuring-awareness, common-mistakes, where-awareness-goes-next |
| 72 | influencers-for-product-demonstration-videos | 2026-11-26 | – | https://www.kudozz.in/blog/influencers-for-product-demonstration-videos | /blog/discovery/influencers-for-product-demonstration-videos.svg | demo-skill, demo-formats, creator-types, how-to-find, vetting-checklist, briefing, claims-and-disclosure, common-mistakes, conclusion |
| 73 | mobile-app-influencer-marketing-india | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/mobile-app-influencer-marketing-india | /blog/discovery/mobile-app-influencer-marketing-india.svg | quick-answer, app-jobs, creator-types, campaign-phases, how-to-find, app-demo-brief, tracking, category-rules, common-mistakes, before-you-brief |
| 74 | influencers-for-market-entry | 2026-11-26 | – | https://www.kudozz.in/blog/influencers-for-market-entry | /blog/discovery/influencers-for-market-entry.svg | what-changes, creator-mix, timeline, city-shortlists, pre-launch-seeding, post-launch, measuring, common-mistakes, market-entry-plan |
| 75 | influencer-performance-marketing | 2026-09-30 | 2026-11-26 | https://www.kudozz.in/blog/influencer-performance-marketing | /blog/discovery/influencer-performance-marketing.svg | two-jobs, what-performance-needs, creator-types, ad-routes, how-to-find, agreements, creative-testing, tracking-attribution, common-mistakes, conclusion |
| 76 | always-on-influencer-marketing | 2026-09-30 | 2026-11-26 | https://www.kudozz.in/blog/always-on-influencer-marketing | /blog/discovery/always-on-influencer-marketing.svg | what-always-on-means, readiness, operating-model, roster, discovery-cadence, calendar, recurring-content, relationships, budget, measurement, common-mistakes, first-90-days |
| 77 | influencer-partnerships | 2026-09-17 | 2026-11-26 | https://www.kudozz.in/blog/influencer-partnerships | /blog/discovery/influencer-partnerships.svg | partnership-levels, who-to-keep, brand-familiarity, expectations, candidate-pipeline, offer-structures, make-the-offer, contract-terms, partnership-rhythm, renew-or-end, common-mistakes, before-the-offer |
| 78 | influencer-marketing-strategy-new-brands | 2026-11-26 | – | https://www.kudozz.in/blog/influencer-marketing-strategy-new-brands | /blog/discovery/influencer-marketing-strategy-new-brands.svg | why-different, objective, audience, budget, creator-criteria, content, campaign-plan, measurement, strategy-template, worked-example, common-mistakes, next-steps |
| 79 | how-to-scale-influencer-marketing | 2026-11-26 | – | https://www.kudozz.in/blog/how-to-scale-influencer-marketing | /blog/discovery/how-to-scale-influencer-marketing.svg | what-it-takes, before-you-scale, workflow, playbook, sourcing-process, roles-raci, budget, quality-control, scale-in-steps, common-mistakes, ninety-day-plan |
| 80 | influencer-marketing-agency-vs-in-house | 2026-09-06 | 2026-11-26 | https://www.kudozz.in/blog/influencer-marketing-agency-vs-in-house | /blog/discovery/influencer-marketing-agency-vs-in-house.svg | short-answer, what-youre-deciding, comparison, pros-and-cons, cost-structure, in-house-sourcing, hybrid-models, decision-framework, keep-in-house, common-mistakes, making-the-call |

## Checks performed and results
| Check | Command / method | Result |
|---|---|---|
| TypeScript | `npx tsc --noEmit -p .` | **Pass** (0 errors) |
| Lint | `npm run lint` | 3 errors + 2 warnings, **all pre-existing and unrelated**: `email-marketing/template1.js` require() ×3; unused vars in `src/app/contact/page.tsx` and `src/app/for-brands/page.tsx`. Identical count with the batch-4 changes stashed. No lint findings in changed files. |
| Production build | `npm run build` (Next 16.3.4) | **Pass** (exit 0); all 20 pages prerendered as SSG |
| Duplicate slugs | Script over all `blogPosts` | None (1,107 posts after batch 4: 1,101 + 6 new) |
| Metadata uniqueness | Script: SEO title, meta description, CTA headlines vs all posts | All unique |
| Internal links and anchors | Script over every `/blog/` reference in `src/` | All resolve |
| Link text present in paragraph | Script | All pass |
| One H1 | Built HTML, count `<h1` | 1 per page (20/20) |
| Canonical | Built HTML | Self-referencing `https://www.kudozz.in/blog/<slug>` (20/20) |
| Robots | Built HTML | `index, follow` (20/20); none of the 20 slugs is in `noindex.ts` |
| Open Graph / social | Built HTML | `og:title`, description, `article:published_time` / `modified_time` from the existing `buildMetadata`; OG image from the existing `blog/[slug]/opengraph-image.tsx` |
| Structured data | Parsed every JSON-LD block in built HTML | Valid JSON. Each page has Organization, WebSite, **BlogPosting**, **BreadcrumbList** and **FAQPage**. FAQPage has 5 questions, the same 5 FAQs rendered visibly |
| Sitemap | `.next/server/app/sitemap.xml.body` | All 20 URLs present; upgrades carry lastmod 2026-11-26 |
| HTTP status | `next start` locally, curl | 20/20 article pages 200; 20/20 hero SVGs 200 |
| Discovery CTA links | Built HTML | 2 per article, correct UTM string with `utm_content=<slug>` |
| External links | curl | ASCI PDF 200, ASCI code page 200, MeitY PDF 200; the CCPA doca.gov.in PDF was 404 and was replaced with the PIB release (200) |
| Responsive | Headless Chrome screenshots of `/blog/influencers-for-shopify-stores` at 390px (iframe, true mobile viewport), 820px and 1440px, plus `influencer-marketing-agency-vs-in-house` at 390px, compared with batch-3 post `influencer-relationship-management` | Layout matches existing posts. The TOC collapses on mobile. Wide tables scroll inside their container, as on existing posts. No overflow of body text |
| Hero SVGs | xmllint + rendered PNGs by the writers | Valid XML; no clipped text in the renders checked |

## Listing, categories, pagination
Posts flow into `/blog` through `blogPosts`, so listing, category filters, pagination, related articles and the sitemap update without code changes. Categories used: Influencer Marketing, Campaign Strategy, Brand Marketing, UGC Marketing (all existing). Upgraded posts keep their original `publishedAt`, so they don't jump to the top of date-sorted listings. The 6 new posts are dated 2026-11-26.

## Remaining issues / follow-ups
1. **Indexing gap:** posts published after 3 Oct 2026 have mostly not been surfacing. 6 new URLs add a small amount of volume. Suggested release order: ship the 14 upgrades first, then the 6 new URLs, and check the GSC Pages report for the new URLs afterwards.
2. **Regulatory statements flagged in 04** (NMC status, DoCA health guidance wording, MahaRERA QR, Online Gaming Act enforcement, Amazon Attribution in India) need a quick legal/editorial check.
3. **`src/config/discovery.ts` is now out of date** with the Discovery product: the public landing page is live and checkout code was added today. No copy here depends on it, but the comments and the "checkout not live" assumption should be refreshed once payments are confirmed live.
4. **Inbound links from blogs 1–60 to the 6 new URLs** were not added, since old posts weren't edited. See 05 for suggested sources.
5. **Unreferenced old hero SVGs** (14 files in `public/blog/brand-guides/` for the upgraded slugs) are still on disk. They can be deleted when convenient.
6. **Analytics parameter naming:** `destination` vs the brief's `destination_url` (see 05).
7. #61 (2,322 words) is slightly over the 1,500–2,200 guide.
8. Pre-existing lint errors in `email-marketing/template1.js` are unrelated and were left alone.

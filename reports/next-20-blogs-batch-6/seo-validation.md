# SEO validation: batch 6 (2026-10-24)

## Passed

| Check | Detail |
| --- | --- |
| Type check | `npx tsc --noEmit` passed |
| Lint | `npx eslint .` gave 0 errors (6 pre-existing warnings in Footer and for-brands components) |
| Production build | `npm run build` passed |
| Slug collisions | 903 posts, no duplicate slugs; no new slugs added |
| Internal links (data check) | All `/blog/` and `/services/` targets on the 4 changed pages exist; every link text appears once in its paragraph |
| Rendered crawl on `next start -p 3491` | All 4 changed pages return 200 with one H1, one mid-article CTA, a self-referencing canonical, `index, follow`, and inclusion in `/sitemap.xml` (994 URLs, unchanged) |
| Structured data | JSON-LD parses on all 4 pages (Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage) |
| Outbound links | 0 rendered external anchors on all 4 pages |
| Broken links | 0 broken internal links on all 4 pages |
| Responsive | Headless Chrome via CDP at 390×844 (mobile): no horizontal overflow on all 4 pages; templates stay within 365px |
| Lead page | `/for-brands` (enquiry form route) returns 200 |
| Metadata uniqueness | No titles or descriptions were changed in this batch |

## Failed

None.

## Not tested

| Check | Reason |
| --- | --- |
| Automated tests | The project has no test script |
| Form submission and analytics events | Not exercised; forms, API routes and analytics weren't modified |
| Rich Results test and Lighthouse | Need a deployed URL |
| FAQPage eligibility | The site already emits FAQPage JSON-LD sitewide (an open owner decision since Google removed FAQ rich results in June 2026). No FAQs were added in this batch |

## Approvals needed (carried forward)

1. Commit and deploy today's batches A, B and 3-6, and decide whether `reports/` should be committed.
2. Re-point the redirect `/blog/x-influencer-marketing-gaming-esports` to `/blog/gaming-influencer-marketing-india`.
3. Consolidation decisions:
   - negotiation pair;
   - post-mortem pair;
   - D2C pair;
   - X creator-monetisation pages;
   - social listening pair.
4. Unsourced rupee ranges on the Instagram and YouTube rate pages.
5. Deferred topics:
   - India nonprofit page;
   - India live shopping;
   - brand-side social search;
   - named-vendor platform comparison.

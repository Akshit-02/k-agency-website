# SEO validation: batch 7 (2026-10-25)

## Passed

| Check | Detail |
| --- | --- |
| Type check | `npx tsc --noEmit` passed |
| Lint | `npx eslint .` gave 0 errors (6 pre-existing warnings) |
| Production build | `npm run build` passed |
| Slugs | 904 posts, no duplicate slugs; `influencer-marketing-seo` is new and unique |
| Internal links (data check) | All `/blog/` and `/services/` targets exist on the 5 touched pages; link text appears once per paragraph |
| Rendered crawl on `next start -p 3491` | All 5 pages return 200, with 1 H1, 1 mid-article CTA, a self canonical, `index, follow` and inclusion in the sitemap |
| Sitemap | `/sitemap.xml` grew from 994 to 995 URLs, including the new page |
| Blog listing | The new article appears on /blog |
| Structured data | JSON-LD parses on all 5 pages |
| Outbound links | 0 rendered external anchors. The Google and YouTube sources show as text, per `src/lib/links.ts` |
| Hero image | New hero SVG returns 200 |
| Lead page | `/for-brands` returns 200 |
| Responsive | Headless Chrome via CDP at 390px: no horizontal overflow on the new article or the retail page |
| Metadata | New title 57 characters, meta 149; the retail seoTitle is unique |

## Failed

None.

## Not tested

| Check | Reason |
| --- | --- |
| Automated tests | No test suite exists |
| Form submission and analytics events | Not exercised; not modified |
| Rich Results and Lighthouse | Need a deployed URL |

## Approvals required

1. Commit and deploy batches A, B and 3-7, and decide whether to commit `reports/`.
2. Podcast cluster consolidation (proposal in `approved-content-plan.md`).
3. Carried forward:
   - esports redirect;
   - consolidation pairs (negotiation, post-mortem, D2C, X creator monetisation, social listening);
   - rupee ranges on rate pages;
   - deferred topics (India nonprofit, India live shopping, brand-side social search, vendor platform comparison).

# SEO validation: batch 8 (2026-10-25)

## Passed

| Check | Detail |
| --- | --- |
| Type check | `npx tsc --noEmit` passed (also re-run after the final metadata fix) |
| Lint | `npx eslint .` gave 0 errors (6 pre-existing warnings) |
| Production build | `npm run build` passed (run twice, the second after the metadata fix) |
| Slugs | 906 posts, no duplicates; both new slugs unique |
| Internal links (data check) | All `/blog/` and `/services/` targets on the 10 touched pages exist; link text appears once per paragraph |
| Rendered crawl on `next start -p 3491` | All 10 pages return 200, with 1 H1, 1 mid-article CTA, a self canonical and `index, follow` |
| Sitemap | `/sitemap.xml` grew from 995 to 997 URLs, including both new pages |
| Blog listing | Both new pages appear on /blog |
| Structured data | JSON-LD parses on all 10 pages |
| Outbound links | 0 rendered external anchors; the YouTube source shows as text per `src/lib/links.ts` |
| Broken links | 0 broken internal links |
| Hero images | Both new SVGs return 200 |
| Lead page | `/for-brands` returns 200 |
| Responsive | Headless Chrome via CDP at 390px: no horizontal overflow on the 2 new and 3 substantively updated pages |
| Metadata | New and edited titles 60 characters or fewer, metas 160 or fewer |

## Failed

None.

## Not tested

| Check | Reason |
| --- | --- |
| Automated tests | No test suite exists |
| Form submissions and analytics events | Not modified, not exercised |
| Rich Results and Lighthouse | Need a deployed URL |
| Final metadata fix in the rendered crawl | The entertainment seoTitle and multi-platform meta were edited after the crawl. The second build passed, but those pages weren't re-crawled |

## Approvals required

1. Commit and deploy batches A, B and 3-8, and decide on the `reports/` folders.
2. Deferred topics: telecom (needs regulatory verification) and marketplace operators.
3. Carried forward:
   - podcast cluster consolidation (batch 7);
   - esports redirect;
   - consolidation pairs;
   - rupee ranges on rate pages;
   - other deferred topics.

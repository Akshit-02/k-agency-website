# SEO validation: batch 10 (2026-10-25)

## Passed

| Check | Detail |
| --- | --- |
| Type check | `npx tsc --noEmit` passed |
| Lint | `npx eslint .` gave 0 errors (6 pre-existing warnings) |
| Build | `npm run build` passed |
| Duplicates | 910 posts, no duplicate slugs; both new slugs unique |
| Metadata | New titles 58 and 55 characters; metas 157 and 147; no duplicate titles introduced |
| Internal links (data check) | All `/blog/` and `/services/` targets exist on the 6 touched pages; link text appears once per paragraph |
| Rendered crawl on `next start -p 3491` | All 6 pages return 200, with 1 H1, 1 mid-article CTA, a self canonical and `index, follow` |
| Sitemap and listing | Sitemap 1,001 URLs, including both new pages; both appear on /blog |
| Schema | JSON-LD (Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage) parses on all 6. No new FAQ content was added |
| Indexability | `index, follow`; no noindex introduced |
| Outbound links | 0 rendered external anchors (site policy) |
| Images | Both new hero SVGs return 200; descriptive alt text in post data and a `<title>` inside each SVG |
| Responsive | Headless Chrome via CDP at 390×844 (mobile), using a fresh browser profile and a 6-second settle: no horizontal overflow on all 6 pages |
| Lead page | `/for-brands` returns 200 |

## Failed

None.

## Not tested

| Check | Reason |
| --- | --- |
| Automated tests | No test suite exists |
| Accessibility audit (axe or Lighthouse) | Not run; only the structure was checked (one H1, heading order, alt text) |
| Forms and analytics | Not modified, not exercised |
| Rich Results test | Needs a deployed URL |

## Approvals required

1. Commit and deploy batches A, B and 3-10, and decide on the `reports/` folders.
2. Deferred topics from this batch: gardening, luggage, urban mobility.
3. Open items from earlier batches:
   - H1 word-wrap CSS;
   - podcast consolidation;
   - esports redirect;
   - consolidation pairs;
   - rupee ranges on rate pages;
   - deferred topics (books, telecom, marketplace operators, nonprofit, live shopping, brand social search, vendor comparison).

# SEO validation: batch 11 (2026-10-25)

## Passed

| Check | Detail |
| --- | --- |
| Type check | `npx tsc --noEmit -p .` passed |
| Lint | `npx eslint .`: 0 errors, 6 warnings (pre-existing, unchanged) |
| Build | `npm run build` exit 0 |
| Duplicates | 912 posts, no duplicate slugs |
| Data link check | All `/blog/` and `/services/` targets and `related` slugs exist on the 6 touched pages. The site-wide repeated-link-text list is identical to batch 10's, so no new instances |
| Metadata | New titles 57 and 58 characters; metas 159 and 150; updated pages unchanged |
| Rendered crawl on `next start -p 3491` | All 6 pages return 200, with 1 H1, 1 mid-article CTA, a self canonical, `index, follow` and no bad links |
| Schema | JSON-LD parses on all 6: Organization, WebSite, BlogPosting and BreadcrumbList, plus FAQPage on the 4 existing pages that have FAQs. No FAQ content was added |
| Sitemap and listing | Sitemap 1,003 URLs (up from 1,001), including both new pages; both appear on /blog |
| Outbound links | 0 rendered external anchors (site policy) |
| Images | Both hero SVGs return 200; alt text in post data and a `<title>` inside each SVG |
| Responsive | Headless Chrome via CDP at 390×844 with a fresh profile: scroll width = client width = 390 on all 6 pages. The new template block renders at 365px |
| Lead page | `/for-brands` returns 200 |

## Failed

None.

## Not tested

| Check | Reason |
| --- | --- |
| Automated tests | No test suite exists |
| Accessibility audit (axe or Lighthouse) | Not run; only the structure was checked |
| Forms and analytics | Not modified, not exercised |
| Rich Results test | Needs a deployed URL |

## Approvals required

1. Commit and deploy batches A, B and 3-11, and decide whether to commit `reports/`.
2. The insurance broker section (deferred until the IRDAI text is verified).
3. Open items from earlier batches: H1 word-wrap CSS, podcast consolidation, esports redirect, consolidation pairs (including the post-mortem pair), rupee ranges, deferred topics.

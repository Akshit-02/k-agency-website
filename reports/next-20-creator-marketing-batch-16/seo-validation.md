# SEO validation: creator marketing batch 16 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates | Post export + `check.mts` | 917 posts, no duplicate slugs or new duplicate titles |
| Internal links | `check.mts` | No missing `/blog/`, anchor, `/services/` or `related` targets; no new repeated-link-text issues |
| Metadata | Length checks | New page title 52, meta 151; youtube-product-reviews title tag 65 → 53 |
| Rendered crawl (`next start -p 3491`, 5 pages) | Python crawler | All 200, 1 H1, 1 mid CTA, self canonical, `index, follow`, 0 bad links, 0 external anchors |
| Structured data | JSON-LD parse | BlogPosting and BreadcrumbList on all; FAQPage only on the existing pages with FAQs; none added |
| Sitemap and listing | Fetch | 1,008 URLs (up from 1,007); new page on /blog |
| Image | HTTP | Hero SVG 200; alt text set |
| Mobile layout | Headless Chrome 390×844, fresh profile | No horizontal overflow on all 5 |
| Desktop layout | Headless Chrome 1440×900, fresh profile | No horizontal overflow on all 5 |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | Only content, the CTA map, a hero SVG and reports changed |

## Failed

None.

## Skipped

| Check | Reason |
| --- | --- |
| Unit or integration tests | None in the repo |
| Accessibility audit (axe or Lighthouse) | Not available; headings checked structurally |
| Rich Results test | Needs a deployed URL |

## Limitations

- **Consolidation evidence:** GSC has no query×page data, so the consolidation proposals rest on topic overlap plus page-level impressions.
- **Comparison law:** the courts' approach is described from law-firm commentary, not read from judgments.

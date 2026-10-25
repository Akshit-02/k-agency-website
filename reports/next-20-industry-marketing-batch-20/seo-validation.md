# SEO validation: industry marketing batch 20 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates | Post export + `check.mts` | 922 posts, no duplicate slugs or titles |
| Internal links | `check.mts` | No missing targets; repeated-link-text list unchanged |
| Metadata | Length checks | Titles 59, 55 and 56 characters; metas 157, 147 and 147 |
| Rendered crawl (8 pages) | `next start -p 3491` + crawler | All 200, 1 H1, 1 mid CTA, self canonical, `index, follow`, JSON-LD parses, 0 bad links, 0 external anchors |
| Sitemap and listing | Fetch | 1,013 URLs (up from 1,010); all three new pages on /blog |
| Images | HTTP | Three SVGs 200; alt text set |
| Mobile | Headless Chrome 390×844 | No overflow on all 8 |
| Desktop | Headless Chrome 1440×900 | No overflow on all 8 |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | Content, CTA map, SVGs and reports only |

## Failed

None.

## Skipped

| Check | Reason |
| --- | --- |
| Unit or integration tests | None in the repo |
| Accessibility audit (axe or Lighthouse) | Not available |
| Rich Results test | Needs deployment |

## Limitations

- **BIS status:** whether BIS certification for RO purifiers is currently mandatory is unresolved (sources conflict), so the article avoids asserting it.
- **New pages are moderately short:** about 600-660 words of prose plus tables. Each covers the category's distinct issues without padding.

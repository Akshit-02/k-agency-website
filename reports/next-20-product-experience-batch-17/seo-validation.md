# SEO validation: product experience batch 17 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed (run twice: after content, after the meta fix) |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates | Post export + `check.mts` | 919 posts, no duplicate slugs; new titles unique |
| Internal links | `check.mts` | No missing targets; repeated-link-text list unchanged from the previous run |
| Metadata | Length checks | New titles 52 and 54, metas 154 and 154; seeding meta fixed to 147 |
| Rendered crawl (`next start -p 3491`, 5 pages) | Crawler | All 200, 1 H1, 1 mid CTA, self canonical, `index, follow`, 0 bad links, 0 external anchors |
| Structured data | JSON-LD parse | BlogPosting and BreadcrumbList on all; FAQPage only on existing pages with FAQs; none added |
| Sitemap and listing | Fetch | 1,010 URLs (up from 1,008); both new pages on /blog |
| Images | HTTP | Both SVGs 200; alt text set |
| Mobile | Headless Chrome 390×844 | No horizontal overflow on all 5 |
| Desktop | Headless Chrome 1440×900 | No horizontal overflow on all 5 |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` / `git diff` | Only content files, the CTA map, two SVGs and reports |

## Failed

None.

## Skipped

| Check | Reason |
| --- | --- |
| Unit or integration tests | None in the repo |
| Accessibility audit (axe or Lighthouse) | Not available; headings checked structurally |
| Rich Results test | Needs a deployed URL |

## Limitations

- **No demand data:** no keyword volumes, and no GSC queries for these topics.
- **E-Commerce Rules:** the return-policy display requirement under the Consumer Protection (E-Commerce) Rules, 2020 is taken from law-firm and news summaries, not the gazette text.

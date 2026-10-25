# SEO validation: batch 25 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates | Post export + `check.mts` | 927 posts; no duplicate slugs, titles, H1s or metas |
| Internal links | `check.mts` | All targets exist; repeated-link-text list unchanged |
| Rendered crawl (4 pages) | `next start -p 3491` + crawler | All 200, 1 H1, self canonical, `index, follow`, JSON-LD parses, 0 bad links, 0 external anchors |
| Exactly two CTAs | Rendered HTML | 1 mid `aside` + 1 bottom `pos=bottom` link |
| Sitemap and listing | Fetch | 1,018 URLs (up from 1,017); new page listed |
| Image | HTTP | SVG 200; alt text and `<title>` set |
| Mobile and desktop | Headless Chrome 390×844 and 1440×900 | No overflow on all 4 |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | Content, the CTA map, one SVG and reports |

## Failed

None.

## Not performed

| Check | Reason |
| --- | --- |
| Unit or integration tests | None exist |
| Accessibility audit (axe or Lighthouse) | Not available |
| Rich Results test | Needs deployment |

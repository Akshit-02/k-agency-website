# SEO validation: batch 23 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates | Post export + `check.mts` | 926 posts; no duplicate slugs, titles, H1s or metas |
| Internal links | `check.mts` | All targets exist; repeated-link-text list unchanged |
| Rendered crawl (3 pages) | `next start -p 3491` + crawler | All 200, 1 H1, self canonical, `index, follow`, JSON-LD parses (BlogPosting, BreadcrumbList; FAQPage on existing pages with FAQs), 0 bad links, 0 external anchors |
| Exactly two CTAs | Rendered HTML | 1 mid `aside` + 1 bottom `pos=bottom` link |
| Sitemap and listing | Fetch | 1,017 URLs (up from 1,016); the new page is listed |
| Image | HTTP | SVG 200; alt text and `<title>` set |
| Mobile and desktop | Headless Chrome 390×844 and 1440×900 | No overflow on all 3 pages |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | Content, CTA map, one SVG and reports only |

## Failed

None.

## Not performed

| Check | Reason |
| --- | --- |
| Unit or integration tests | None in the repo |
| Accessibility audit (axe or Lighthouse) | Not available |
| Rich Results / indexing | Needs deployment |
| Legal review | Outside scope; recommended for the pharma page |

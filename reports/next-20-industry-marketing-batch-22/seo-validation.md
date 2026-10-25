# SEO validation: batch 22 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates (slug, title, H1, meta) | Post export + `check.mts` | 925 posts; no duplicates |
| Internal links | `check.mts` | All targets exist, including `#asci-qualifications`; repeated-link-text list unchanged |
| Rendered crawl (4 pages) | `next start -p 3491` + crawler | All 200, 1 H1, self canonical, `index, follow`, JSON-LD parses (BlogPosting, BreadcrumbList; FAQPage only on existing pages with FAQs), 0 bad links, 0 external anchors |
| Exactly two CTAs (new article) | Rendered HTML | 1 mid CTA `aside` + 1 bottom CTA link (`pos=bottom`) |
| Sitemap and listing | Fetch | 1,016 URLs (up from 1,015); new page on /blog |
| Image | HTTP | SVG 200; alt text and `<title>` set |
| Mobile | Headless Chrome 390×844 | No overflow on all 4 |
| Desktop | Headless Chrome 1440×900 | No overflow on all 4 |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | Content, CTA map, one SVG and reports only |

## Failed

None.

## Not performed

| Check | Reason |
| --- | --- |
| Unit or integration tests | None in the repo |
| Accessibility audit (axe or Lighthouse) | Not available |
| Rich Results / indexing | Needs deployment; no indexing or ranking claims made |

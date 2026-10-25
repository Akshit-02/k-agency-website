# SEO validation: batch 21 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicate slugs, titles, H1s | Post export + `check.mts` | 924 posts, no duplicates; new titles and metas unique |
| Internal links | `check.mts` (blog, anchors, services, `related`) | All targets exist; repeated-link-text list unchanged |
| Rendered crawl (5 pages) | `next start -p 3491` + crawler | All 200, 1 H1, self canonical, `index, follow`, JSON-LD parses (BlogPosting, BreadcrumbList; FAQPage only on existing pages with FAQs), 0 bad links, 0 external anchors |
| Exactly two CTAs | Rendered HTML | Each new page has one mid CTA block (`aside`) and one bottom CTA (`pos=bottom` link). Editorial service links aren't CTA blocks |
| Sitemap and listing | Fetch | 1,015 URLs (up from 1,013); both new pages on /blog |
| Images | HTTP | Both SVGs 200; descriptive alt text; `<title>` in each SVG |
| Mobile | Headless Chrome 390×844 | No overflow on all 5 |
| Desktop | Headless Chrome 1440×900 | No overflow on all 5 |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | Content, the CTA map, two SVGs and reports only; no forms, API, analytics or config changes |

## Failed

None.

## Not performed

| Check | Reason |
| --- | --- |
| Unit or integration tests | None in the repo |
| Accessibility audit (axe or Lighthouse) | Not available; heading order and alt text checked |
| Rich Results / indexing | Needs deployment; no indexing or ranking claims made |

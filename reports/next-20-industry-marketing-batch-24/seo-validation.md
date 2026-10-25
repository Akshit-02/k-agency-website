# SEO validation: batch 24 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed (run twice) |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates | Post export + `check.mts` | 926 posts; no duplicate slugs or titles |
| Internal links | `check.mts` | All targets exist; repeated-link-text list unchanged |
| Metadata | Lengths | agritech title tag 65 → 56; others unchanged and within limits |
| Rendered crawl (4 pages) | `next start -p 3491` + crawler | All 200, 1 H1, 1 mid CTA (unchanged), self canonical, `index, follow`, JSON-LD parses, 0 bad links, 0 external anchors |
| CTAs | — | No full new article this batch; existing pages keep their single mid and bottom CTAs |
| Sitemap | Fetch | 1,017 URLs (unchanged) |
| Mobile and desktop | Headless Chrome 390×844 and 1440×900 | No overflow on all 4 |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | Two content files changed in this batch, plus reports |

## Failed

None.

## Not performed

| Check | Reason |
| --- | --- |
| Unit or integration tests | None exist |
| Accessibility audit (axe or Lighthouse) | Not available |
| Rich Results test | Needs deployment |

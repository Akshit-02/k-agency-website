# SEO validation: campaign governance batch 19 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Build | `npm run build` | Exit 0 |
| Duplicates | Post export + `check.mts` | 919 posts, no duplicate slugs |
| Internal links | `check.mts` | No missing targets; repeated-link-text list unchanged |
| Rendered crawl | `next start -p 3491` | 200, 1 H1, 1 mid CTA, self canonical, `index, follow`, JSON-LD parses, 0 bad links, 0 external anchors |
| Sitemap | Fetch | 1,010 URLs (unchanged) |
| Mobile | Headless Chrome 390×844 | No overflow |
| Desktop | Headless Chrome 1440×900 | No overflow |
| Lead page | HTTP | `/for-brands` 200 |
| Diff scope | `git status` | One content file changed in this batch, plus reports |

## Failed

None.

## Skipped

| Check | Reason |
| --- | --- |
| Unit or integration tests | None in the repo |
| Accessibility audit (axe or Lighthouse) | Not available |
| Rich Results test | Needs deployment |

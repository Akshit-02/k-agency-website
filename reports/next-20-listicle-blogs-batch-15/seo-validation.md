# SEO validation: listicle batch 15 (2026-10-25)

## Completed

| Check | Command / method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit -p .` | Passed |
| Lint | `npx eslint .` | 0 errors, 6 pre-existing warnings |
| Production build | `npm run build` | Exit 0 |
| Duplicate slugs and titles | Post export + `check.mts` | 916 posts, no duplicate slugs; new titles unique |
| Internal links | `check.mts` (all `/blog/`, anchors, `/services/`, `related`) | No missing targets; repeated-link-text list identical to the previous run |
| Metadata | Length assertions | Titles 52 and 50 characters; metas 153 and 155 |
| Rendered crawl | `next start -p 3491`, 5 pages | All 200, 1 H1, 1 mid CTA, self canonical, `index, follow`, 0 bad links, 0 external anchors |
| Structured data | JSON-LD parse | BlogPosting and BreadcrumbList on all; FAQPage only on the 3 existing pages that already have FAQs; no new FAQ schema |
| Sitemap and listing | Sitemap fetch, /blog | 1,007 URLs (up from 1,005); both new pages listed |
| Images | HTTP check | Both SVGs 200; alt text set |
| Mobile | Headless Chrome, 390×844, fresh profile | No horizontal overflow on all 5 pages |
| Lead page | HTTP check | `/for-brands` 200 |

## Failed

None.

## Skipped

| Check | Reason |
| --- | --- |
| Unit or integration tests | None exist in the repo |
| Accessibility audit (axe or Lighthouse) | Not available in this setup; heading structure checked manually |
| Desktop visual review | Not performed; the layout is unchanged and only content blocks were added |
| Rich Results test | Needs a deployed URL |

## Limitations

- **Search Console data:** the export has no query×page data, so it's unknown which page currently earns the "co branded email" impressions.
- **Instagram and email clients:** behaviour wasn't tested; the email article's advice to use stills or GIFs for video is general practice, worded without specific client claims.

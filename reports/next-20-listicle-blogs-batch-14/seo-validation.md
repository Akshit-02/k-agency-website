# SEO validation: listicle batch 14 (2026-10-25)

| Check | Result |
| --- | --- |
| Type check | `npx tsc --noEmit -p .` passed |
| Lint | `npx eslint .`: 0 errors, 6 pre-existing warnings |
| Build | `npm run build` exit 0 |
| Duplicates | 914 posts, no duplicate slugs; no new URLs |
| Data link check | No new missing links or repeated link text compared with batch 13's run |
| Rendered crawl (`next start -p 3491`): Reels, Stories, UGC ad hooks | 200, 1 H1, 1 mid CTA, self canonical, `index, follow`, JSON-LD parses (BlogPosting, BreadcrumbList, FAQPage), 0 bad links |
| Anchors | `id="reel-ideas"` renders; links to `#story-ideas` and `#demo-hooks` render, and both target ids exist (crawled) |
| Sitemap | 1,005 URLs (unchanged) |
| Mobile (390×844, fresh headless Chrome profile) | Scroll width = client width = 390; the 6-column table scrolls inside its container |
| Lead page | `/for-brands` returns 200 |

## Not tested

- **Automated tests:** no test suite exists.
- **Accessibility audit (axe or Lighthouse):** not run.
- **Forms and analytics:** not modified, not exercised.
- **Rich Results test:** needs a deployed URL.

## Unresolved

None from this batch. Approvals still pending from earlier batches: commit and deploy, H1 word-wrap CSS, consolidations, esports redirect, rupee ranges, deferred topics.

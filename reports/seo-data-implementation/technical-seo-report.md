# Technical SEO report (2026-10-22)

## Setup

- Next.js 16.3.4 (App Router, Turbopack), React 19. Content is TypeScript data in `src/content/**`; every article and service page is statically generated.
- Metadata comes from `buildMetadata` (`src/lib/metadata.ts`): the `— Kudozz` suffix is added only when the full title stays within 60 characters. Article titles come from `seoTitle ?? title`, descriptions from `metaDescription ?? excerpt`.
- Sitemap from `src/app/sitemap.ts` (985 URLs; only articles carry `lastmod`). `robots.ts` allows everything except `/api/`.
- 36 permanent redirects in `next.config.ts` (served as 308).
- `node_modules` was missing at the start of the run; it was restored with `npm ci` from the lockfile. No dependency versions changed.

## Findings and status

| # | Check | Finding | Action |
| --- | --- | --- | --- |
| 1 | Status of every URL in the Search Console export | 615 return 200, 34 redirect in one hop to a 200, 1 returns 404 | No change needed |
| 2 | The 404 `/blog/instagram-creator-marketing-dark-social` | Never existed in this repository's history; 1 impression, 0 clicks; no topically matching page | Left as 404 (correct response) |
| 3 | Old consolidated URLs still collecting impressions | 33 redirected articles still appear in Search Console (largest: how-much-does-influencer-marketing-cost, 237 impressions at 19.2, while its target ranks 47.5) | Normal for redirects added ~10 days ago. Recheck in 4-6 weeks; don't add further hops |
| 4 | Fragment URLs in the export | 18 `#section` URLs on 4 pages (1,212 impressions), mostly the India agency guide | Jump links from Google; not duplicate pages. No action |
| 5 | Full crawl (1,022 URLs) | 0 broken internal links, 0 internal links pointing at redirects, all live pages self-canonical, 0 noindex, 1 H1 per page, 0 JSON-LD parse errors, every live URL in the sitemap, no sitemap URL failing | No change needed |
| 6 | Pages with 0 inlinks | `/privacy-policy` and `/terms` | Intentional: footer legal links are off until counsel-reviewed copy exists |
| 7 | Service pages' search visibility | 8 older services have 2-36 impressions; the 10 added on 2026-10-15 have none yet. All have 17-206 internal inlinks | Not a crawl problem; too new. Added 6 contextual links from ranking brand guides |
| 8 | Missing description | how-to-contact-instagram-influencers fell back to an excerpt that didn't describe the page | Fixed |
| 9 | Automated queries inflating impressions | ~1,960 impressions from `site:` / quoted help-centre queries and ~860 from AI-style prompts, all with 0-1 clicks | Excluded from CTR judgements; documented |
| 10 | 33 articles live 30+ days with no impressions | Includes influencer-marketing-india, influencer-marketing-budget, how-to-find-ugc-creators, how-to-create-a-successful-influencer-marketing-campaign and 7 state agency pages | Needs URL Inspection in Search Console (indexing vs. demand). Listed in blog-audit.csv |
| 11 | Open owner decisions carried over | `og:locale`, FAQPage JSON-LD sitewide (FAQ rich results were removed in June 2026), hidden publish date | Unchanged |

## Validation

| Step | Before batch | After batch |
| --- | --- | --- |
| `npx tsc --noEmit` | pass | pass |
| `npx eslint` | 0 errors, 6 warnings | 0 errors, 6 warnings (same) |
| `npx next build` | pass | pass |
| Crawl of `next start` | see row 5 | identical counts, no regressions |
| Changed-page checks | n/a | see implementation-log.md |

Not done: Core Web Vitals field data (none supplied), checks on the deployed site (the batch isn't deployed), end-to-end form submission (forms weren't touched).

## Scripts

The analysis is repeatable for the next export. See `scripts/` in this folder:

- `export.mts` (+ `hook.mjs`, `reg.mjs`): dump all articles to JSON with `node --experimental-strip-types --import ./reg.mjs export.mts`
- `analyse.py`: fragment aggregation, CTR benchmarks, query clustering and owner mapping, and blog-audit.csv
- `crawl.py`, `gsccheck.py`, `pageaudit.py`: crawl a local `next start` on port 3481 and build page-audit.csv
- `cluster_recs.json`, `edited.json`: the hand-written cluster decisions and the change list the scripts read

Paths inside the scripts point at this machine's scratch directory; adjust them before re-running.

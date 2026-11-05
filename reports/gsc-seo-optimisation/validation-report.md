# Validation Report

Run 2026-11-05 on the local build after all changes.

| Check | Result |
|---|---|
| `npm run build` | Pass. Compiled; 1,989/1,989 static outputs generated. |
| `npx tsc --noEmit -p .` | Pass |
| `npx eslint` | 0 errors. 6 warnings, all pre-existing in `contact/page.tsx`, `for-brands/page.tsx` and `Footer.tsx`, which were not touched. |
| Tests | No test suite exists in the project |
| Duplicate titles / descriptions (1,033 pages) | 0 / 0 |
| Pages without exactly one H1 | 0 |
| Broken internal hrefs (all pages) | 0 |
| New links render | All 8 present in the built HTML on their source pages |
| Metadata renders | All 8 title/meta changes confirmed in the built `<title>` / `<meta name="description">` (see the implementation log) |
| /services H1 | Renders as "Influencer marketing services: 18 services. One coordinated engine." |
| Outreach comparison and FAQ | Both render on /services/outreach-management. The FAQ also appears in the page's existing FAQ schema. |
| Removed lines in existing content | 0 deletions apart from the replaced title/meta strings |

## Before / after for measurement

Baseline (this export, 5 Sep–3 Nov 2026), to compare 28 days after deploy:

| URL | Clicks | Impr. | CTR | Pos. |
|---|---|---|---|---|
| /blog/influencer-campaign-management | 0 | 523 | 0.0% | 19.6 |
| /blog/influencer-marketing-cost-india | 0 | 158 | 0.0% | 47.3 |
| /blog/what-is-ugc-marketing | 0 | 327 | 0.0% | 17.1 |
| /blog/instagram-subscriptions | 1,393 | 24,613 | 5.7% | 6.8 |
| /blog/instagram-insights-for-creators | 15 | 5,021 | 0.3% | 7.0 |
| /blog/youtube-shorts-content-strategy | 1 | 1,312 | 0.1% | 7.0 |
| /services | 0 | 42 | 0.0% | 8.8 |
| /services/outreach-management | 0 | 71 | 0.0% | 15.5 |
| /blog/instagram-influencer-rates-india | 70 | 6,956 | 1.0% | 7.6 |

## Not validated

- Visual rendering on mobile and desktop (no browser session). The /services H1 span copies the existing /for-brands markup exactly.
- Live behaviour, because nothing is deployed.
- Core Web Vitals.
- Google's indexing status (needs Search Console access).

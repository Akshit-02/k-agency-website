# GSC SEO Audit: Summary

## Data analysed

`gsc-data.xlsx` is identical (by checksum) to `~/Downloads/https___www.kudozz.in_-Performance-on-Search-2026-11-05.xlsx`. It has 7 worksheets:

| Sheet | Rows |
|---|---|
| Chart | 60 days (2026-09-05 → 2026-11-03) |
| Queries | 1,000 (export cap) |
| Pages | 697 (653 unique after removing `#fragment` rows) |
| Countries | 199 |
| Devices | 3 |
| Search appearance | 1 |
| Filters | Web, last 3 months |

- **Missing dimensions:** query × page, dates per query or page, and indexing status.
- **Missing clicks:** about 58% of clicks come from queries not in the export.
- **No errors:** no empty or duplicate rows, and no type problems.

## Baseline

- **Totals:** 2,716 clicks and 157,366 impressions; 1.73% CTR.
- **Trend:** clicks are rising fast. By consecutive 20-day thirds: 92 → 1,076 → 1,548.
- **Devices:**
  - Mobile: 2,137 clicks, 2.42% CTR, position 7.2
  - Desktop: 549 clicks, 0.81% CTR, position 9.8
- **Countries:**
  - India: 2,499 clicks (92%)
  - US: 15,110 impressions at 0.19% CTR (mostly creator queries)
  - UK 3,396, Australia 906, UAE 670, Singapore 556, Saudi Arabia 337 impressions

## The five findings that matter

1. **Traffic is mostly creator-side and concentrated.** 51% of all clicks go to `/blog/instagram-subscriptions`, largely from people looking for free paywalled content. Brand-side commercial queries bring 93 clicks from 9,902 impressions, at position 11.4.
2. **The commercial content clusters are almost invisible in search.** Brand guides have impressions on 8% of pages. GCC, Australia, UK and market pages are at 0%, while creator pages are at 93%. There is no technical block, which points to indexing or quality selection. This is the #1 issue (P0) and needs the GSC indexing report.
3. **Agency head terms sit just off page one.** "influencer marketing agency": 2,901 impressions at position 11.7, served by the listicle rather than the homepage. Fixing this needs authority, not more keywords.
4. **The service pages are thin and templated.** They are 570–740 words with an identical structure and rank at positions 15–38 with under 120 impressions each.
5. **The technical foundation is clean.**
   - 0 duplicate titles or descriptions, 0 broken internal links, one H1 per page.
   - Valid self canonicals and clean redirects.
   - Minor issues: one 404 with impressions, a two-hop host redirect, and automatic FAQPage schema.

## What was implemented (locally)

- **Metadata:** 8 evidence-backed title/H1/meta changes on pages with query-wording gaps.
- **Services hub:** the H1 now carries "Influencer marketing services".
- **Outreach-management service:** an in-house vs managed comparison and a disambiguating FAQ.
- **Internal links:** 8 links added, closing gaps in the cost, UGC and services clusters.
- **Checks:** build, types and lint pass. Sitewide regression checks are clean.

## What needs approval

1. The indexing investigation and a pause on new cluster publishing. This includes holding back the 15 Batch 26 articles until the cause is known.
2. Re-aiming /for-brands at enquiry intent.
3. A redirect from `/blog/instagram-creator-marketing-dark-social` to `/blog/dark-social-influencer-marketing`.
4. Fixing the host redirect chain in Vercel.
5. Whether to keep FAQPage schema sitewide.
6. Real Kudozz information (process detail, pricing model, verifiable examples) so the 5 core service pages can be made substantive without inventing anything.

See `prioritised-action-plan.md` for the plan and the 30-day roadmap.

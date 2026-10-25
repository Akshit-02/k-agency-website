# Search Console opportunity analysis: batch 4

**Data:** the 2026-10-22 Pages (668 rows) and Queries (1,000 rows) exports, recovered from commit 5c3aa08. No date range, country, device or query×page dimension. Query→page links are the inferred mapping from the same commit. Figures are actual; nothing is estimated.

**Selection:** brand-side pages with 30 or more impressions at positions 25 or better, not touched in batches A, B or 3, plus the owners of retained candidates.

## Candidate owners with evidence

| Page | Clicks / impressions @ position | Use |
| --- | --- | --- |
| ai-influencers-vs-human-creators | 2 / 188 @ 6.05 | Candidate 19 update |
| influencer-marketing-beauty-brands-india | 1 / 58 @ 9.36 | Candidate 6 update |
| influencer-marketing-colleges | 1 / 57 @ 8.02 ('student influencer marketing' 24 @8.71) | Candidate 3 update |
| influencer-marketing-fintech-brands-india | 0 / 33 @ 22.85 | Candidate 8 update (ranks poorly) |
| pet-influencer-marketing-india | 1 / 25 @ 21.48 | Candidate 11 update (thin page) |
| home-interior, real estate India, hospitality, FMCG | 15-24 impressions each | Too little evidence; replaced |

## Near page one, zero or near-zero clicks (snippet actions)

| Page | Clicks / impressions @ position |
| --- | --- |
| influencer-marketing-rfp | 1 / 114 @ 5.70 |
| influencer-budget-allocation | 0 / 65 @ 4.86 |
| influencer-marketing-agency-vs-in-house | 0 / 63 @ 9.79 (plus 'influencer marketing agency vs in-house influencer management' 17 @8.65, mapped to the pitch-questions page) |
| ugc-whitelisting-creator-licensing | 0 / 161 @ 11.01 |
| how-to-find-reddit-influencers | 2 / 196 @ 6.41 |
| snapchat-creator-partnerships | 3 / 183 @ 10.84 |
| how-to-find-snapchat-influencers | 1 / 119 @ 7.33 |
| influencer-marketing-fashion-brands-india | 1 / 94 @ 12.48 |
| youtube-product-reviews | 0 / 54 @ 7.63 |
| insurance-influencer-marketing-india | 0 / 32 @ 4.59 |
| influencer-agency-vs-freelancer | 0 / 40 @ 9.05 |

## Query landing on the wrong owner

- **'influencer marketing youtube'** (31 @22.0): mapped to youtube-shorts-influencer-marketing. Added a pointer to the YouTube pillar and the sponsorship formats table.

## Cannibalisation (evaluated, not merged)

| Pages | Evidence | Recommendation |
| --- | --- | --- |
| instagram-creator-marketing-d2c-brands vs influencer-marketing-d2c-brands-india | Instagram page 0 / 52 @ 9.52; pillar 0 / 78 @ 11.68 | Keep both. The Instagram page now says it's the platform layer and links to the pillar. Revisit with query×page data |
| x-creator-revenue-sharing, x-creator-monetization, x-creator-subscriptions | 1 / 189 @ 6.06; 3 / 141 @ 8.11; 0 / 92 @ 7.22; all 370-440 words | They follow the same thin pattern as the X industry pages consolidated in 2026-10, but they earn impressions near page one. Don't redirect without query×page data. Candidate future action: merge into x-creator-monetization as a hub with 301s, subject to your approval |

## Content decay

Can't be assessed: there's only one export, with no date dimension.

## Still needed

- Query×page export for the top 30 pages.
- Countries tab.
- A 3-month comparison.

Together these decide the open consolidation questions from batches B, 3 and 4.

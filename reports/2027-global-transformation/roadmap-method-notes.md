# Roadmap Method Notes (06–08, 23)

Date: 2026-11-11.

## Validation
- **06** has 200 rows, with 200 unique `suggested_url` values.
- **CREATE topics:** none of the 170 reuses an existing slug. This was checked programmatically against all 961 articles.
- **UPDATE rows:** all 30 point to existing slugs.
- **Internal links:** every recommended link points to an existing article, a `/services/` or `/creator-resources/` URL, or another roadmap topic. One typo was corrected to `film-streaming-influencer-marketing-saudi-arabia-uae`.

## Allocation used vs the brief's hypothesis
| Market | Hypothesis | Used | Why |
|---|---|---|---|
| India | 60 | 107 | 71% of impressions, 92% of clicks; strongest confirmed delivery |
| United States | 30 | 17 | Delivery not confirmed: educational/cross-border only |
| United Kingdom | 20 | 9 | Confirmed market; October pages not yet indexed, so it is paced |
| UAE + wider Middle East | 30 | 28 | Priority international market; Gulf compliance content gap |
| Australia | 15 | 8 | Confirmed; existing guide depth (~30 posts) |
| Singapore | 10 | 10 | Confirmed; KOL/MAS/HSA gaps |
| Europe | 25 | 13 | Gated (owner, EU representative, native editor) |
| Multi-market | — | 8 | Cross-market compliance and comparison topics |
| Russia | 10 (research-only) | 0 | Compliance review: no content |

**India gets about half the plan (vs 60 of 200 in the hypothesis):**
- India carries 71% of impressions and 92% of clicks.
- Kudozz's confirmed delivery is strongest there.
- About 300 October pages (all the international ones) aren't surfacing yet, so more international volume now would add to an indexing backlog.

**International markets get fewer topics:**
- **US:** educational and cross-border topics only, because delivery isn't confirmed.
- **Europe:** gated topics only (owner confirmation, EU representative, native editor).
- **Russia:** 0 topics. Report 15 recommends no content.

**Audience split:** 118 brand / 82 creator.

## Overlap check
Each topic's `existing_overlap` column names the existing slugs reviewed and explains why the new angle is distinct. Where an existing page already served the intent, the item became an UPDATE row instead of a new article.

## Scheduling and gates
**Pacing caps:** about 14 a month in Q1, 16 in Q2 and 20 in H2. UPDATE rows go first.

**Gates set the earliest month:**
| Gate | Earliest month |
|---|---|
| `idx`: indexing of October pages confirmed | April |
| `owner`: owner confirms the market or offer | June |
| `lang`: native-language editor in place | September |

**Seasonal deadlines:** for example, Ramadan content by January, IPL by February, Diwali by July or August.

**Per-topic gates:** `legal` (82 topics), `verify` (re-check platform or regulatory facts before publishing) and `ca` (tax) are listed per topic in 23.

**Monthly load:** {1: 14, 2: 14, 3: 14, 4: 16, 5: 16, 6: 16, 7: 20, 8: 20, 9: 20, 10: 20, 11: 20, 12: 10}

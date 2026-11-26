# 02 — Existing content overlap audit (batch 3, articles 41–60)

Checked 25 Nov 2026 against all 1,098 posts in the repository (including Discovery articles 1–40, which exist locally and are **not yet committed or deployed**), the GSC export in `gscReport/` (5 Sep–17 Nov 2026) and `src/content/noindex.ts`.

## Headline finding

18 of the 20 requested topics already had a same-intent post on kudozz.in. Two requested slugs were already taken (`how-to-contact-influencers`, `influencer-marketing-cost-india`). Publishing 18 more competing URLs would have split rankings with existing pages, three of which earn impressions at positions 5–15.

## Decision (owner-approved, 25 Nov 2026)

The brief said both "don't overwrite existing articles" and "don't publish competing pages". The owner chose to **upgrade the overlapping posts on their existing URLs** (as in batches 1 and 2) and publish only genuinely distinct topics as new URLs. Result: **17 upgrades + 3 new URLs.** Three of the upgraded posts were noindexed on 19 Nov and are restored to the index after their rewrite.

## Topic-by-topic

| # | Topic (requested slug) | Existing same-intent posts (GSC impr / pos; noindex) | Decision |
| --- | --- | --- | --- |
| 41 | evaluate-influencer-engagement | `influencer-engagement-quality` (3 / 3.7), `influencer-engagement-rate` (53 / 45.8, calculation guide) | **Upgrade** `influencer-engagement-quality`; `influencer-engagement-rate` stays as the formula reference |
| 42 | check-influencer-brand-fit | `how-to-choose-the-right-influencer-for-your-brand` (3 / 2.3); batch-1 `things-to-check-before-selecting-influencers` | **Upgrade** `how-to-choose-the-right-influencer-for-your-brand` |
| 43 | influencer-content-analysis-guide | `influencer-content-quality-check` is QC of delivered content (different intent); batch-1 `how-to-research-influencers` has a short content-audit step | **New** URL with a deep content-analysis angle |
| 44 | how-to-compare-influencers | `influencer-ranking` (noindexed); batch-1 `influencer-shortlist` (process) | **Upgrade** `influencer-ranking` (side-by-side finalist comparison) and **restore** to the index |
| 45 | identify-fake-influencer-engagement | `how-to-identify-fake-followers` (249 / 9.5, 5 clicks), `influencer-fraud-detection-tools` | **Upgrade** `how-to-identify-fake-followers`, keeping "fake followers" and "fake engagement" in title |
| 46 | how-to-contact-influencers | **Same slug exists** (343 / 50.4) | **Upgrade** same URL |
| 47 | influencer-collaboration-email | `influencer-outreach-email` (253 / 20.1), `influencer-collaboration-proposal` (145 / 11.1) | **Upgrade** `influencer-outreach-email` (proposal post stays: a proposal document, not an email) |
| 48 | influencer-marketing-brief-for-creators | `influencer-campaign-brief` (23 / 31.4) | **Upgrade** `influencer-campaign-brief` |
| 49 | organise-influencer-contact-details | `influencer-marketing-crm` (22 / 9.4); batch-1 `influencer-database`, `how-to-create-influencer-outreach-list` | **Upgrade** `influencer-marketing-crm` (records over time; batch-1 posts untouched) |
| 50 | follow-up-with-influencers | `influencer-follow-up` (18 / 4.9) | **Upgrade** same-intent post |
| 51 | influencer-marketing-cost-india | **Same slug exists** (159 / 47.1) | **Upgrade** same URL |
| 52 | estimate-influencer-marketing-budget | `influencer-marketing-budget` (2,043 words, noindexed), `influencer-budget-allocation` (174 / 6.4) | **Upgrade** `influencer-marketing-budget` and **restore**; budget-allocation stays (splitting a set budget) |
| 53 | negotiate-influencer-collaboration-rates | `negotiate-influencer-rates` (72 / 15.2, identical title), `how-to-negotiate-with-influencers` (143 / 9.5) | **Upgrade** `negotiate-influencer-rates`. The two negotiation posts still overlap each other: see recommendations |
| 54 | factors-affecting-influencer-pricing | `how-much-to-pay-influencers` (387 / 13.9) | **Upgrade**, keeping "how much to pay influencers" in the SEO title |
| 55 | influencer-cost-by-creator-type | `influencer-campaign-cost-india` (29 / 19.8), `micro-vs-macro-influencers`, `nano-vs-micro-influencers` | **Upgrade** `influencer-campaign-cost-india` (cost by tier); tier-strategy posts stay |
| 56 | build-long-term-influencer-relationships | `influencer-relationship-management` (155 / 14.9), `repeat-influencer-collaborations` (noindexed) | **Upgrade** `influencer-relationship-management` |
| 57 | influencer-marketing-campaign-plan | `how-to-create-a-successful-influencer-marketing-campaign` (noindexed), `influencer-campaign-project-plan` (noindexed) | **Upgrade** the first and **restore** it |
| 58 | select-influencer-mix-for-campaign | adjacent: micro-vs-macro, nano-vs-micro, budget-allocation, batch-2 customer-journey | **New**: portfolio construction across tiers, roles, formats, platforms and regions |
| 59 | manage-multiple-influencer-collaborations | `influencer-campaign-coordination` (11 / 11.6), `influencer-marketing-operations` | **Upgrade** `influencer-campaign-coordination` |
| 60 | what-to-do-after-finding-influencers | none (onboarding/kickoff posts cover single stages) | **New**: a hub from discovery to execution, linking each stage's deep article |

## Deliberately untouched

`instagram-influencer-rates-india` (8,589 impressions, position 7.5, the site's best-performing page), `youtube-influencer-rates-india`, the creator-side `influencer-rate-card-india`, and every Discovery article 1–40.

## Requested slugs not used

| Requested | Published at |
| --- | --- |
| evaluate-influencer-engagement | /blog/influencer-engagement-quality |
| check-influencer-brand-fit | /blog/how-to-choose-the-right-influencer-for-your-brand |
| how-to-compare-influencers | /blog/influencer-ranking |
| identify-fake-influencer-engagement | /blog/how-to-identify-fake-followers |
| influencer-collaboration-email | /blog/influencer-outreach-email |
| influencer-marketing-brief-for-creators | /blog/influencer-campaign-brief |
| organise-influencer-contact-details | /blog/influencer-marketing-crm |
| follow-up-with-influencers | /blog/influencer-follow-up |
| estimate-influencer-marketing-budget | /blog/influencer-marketing-budget |
| negotiate-influencer-collaboration-rates | /blog/negotiate-influencer-rates |
| factors-affecting-influencer-pricing | /blog/how-much-to-pay-influencers |
| influencer-cost-by-creator-type | /blog/influencer-campaign-cost-india |
| build-long-term-influencer-relationships | /blog/influencer-relationship-management |
| influencer-marketing-campaign-plan | /blog/how-to-create-a-successful-influencer-marketing-campaign |
| manage-multiple-influencer-collaborations | /blog/influencer-campaign-coordination |

## Recommendations beyond this batch

- **Merge candidates** (pre-existing duplication, not created here): `how-to-negotiate-with-influencers` vs `negotiate-influencer-rates`; `influencer-campaign-project-plan` (noindexed) vs the restored campaign-plan post; `influencer-engagement-rate` vs `influencer-engagement-quality`. Consider 301-merging each weaker URL once GSC shows which one Google prefers.
- The library has ~1,100 posts and many near-duplicates. Future batches should start from an upgrade list rather than a new-topic list.

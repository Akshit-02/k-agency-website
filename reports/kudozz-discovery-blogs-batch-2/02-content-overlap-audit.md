# 02 — Content overlap audit (batch 2, articles 21–40)

Checked 25 Nov 2026 against all 1,080 posts in the repository (including the first 20 Discovery articles, which exist locally in `src/content/discovery-guides/batch-a…d.ts` but are **not yet committed or deployed**) and the GSC export in `gscReport/` (5 Sep–17 Nov 2026). No volumes or difficulty scores are quoted; none were available.

## Status of articles 1–20

All 20 verified present: 20 slugs resolve in `blogPosts`, all 20 hero SVGs exist in `public/blog/discovery/`, and the batch-1 QA (report `reports/kudozz-discovery-blogs/06`) passed on a local production build. They are uncommitted working-tree changes; nothing is live on kudozz.in.

## Rule applied (same as batch 1, approved by the owner)

Same search intent as an existing post → **upgrade that URL**. An existing *strategy* post for the same industry/platform ("influencer marketing for X brands") → **new "how to find" URL** with a sourcing-and-evaluation angle, linking to the strategy post (the pattern used for beauty and fashion in batch 1).

Result: **17 new URLs + 3 upgrades.**

## Topic-by-topic

| # | Topic / requested slug | Closest existing posts (GSC impr / pos) | Overlap with 1–20 | Decision and angle |
| --- | --- | --- | --- | --- |
| 21 | find-influencers-matching-target-audience | influencer-audience-quality (38 / 6.6) | influencer-search-tools ("…Audience Relevance") | **New.** ICP → audience hypothesis → audience proof → match scoring. #10 stays about niche/location filters; audience-quality stays about authenticity. Highest residual risk in this batch; watch GSC. |
| 22 | how-to-find-emerging-influencers | none | how-to-find-micro-influencers | **New.** Growth and consistency signals, early-partner terms; tier is irrelevant. |
| 23 | influencers-for-customer-journey | influencer-marketing-funnel (91 / 12.4), d2c-influencer-marketing-funnel-india | — | **New.** Which creator types and formats to source per stage; the funnel posts stay strategy. |
| 24 | find-regional-content-creators-india | regional-influencer-marketing-india (96 / 8.3), regional-creator-growth-india (creator-side) | influencer-search-tools (language section) | **New.** Sourcing by language/state, checking audience language, native vs translated content. |
| 25 | find-influencers-by-content-niche | creator-niches-beyond-lifestyle (22 / 8.1) | influencer-search-tools | **New.** Niche → sub-niche mapping, hashtag/keyword trees, adjacent niches. |
| 26 | find-fitness-wellness-influencers | influencer-marketing-fitness-brands-india (noindexed), healthcare-and-wellness strategy post | — | **New.** Creator taxonomy (coaches, nutrition, gym, yoga/wellness, sports), credentials, health-claims care. |
| 27 | find-food-creators-restaurant-marketing | restaurant-cafe-influencer-marketing-india (30 / 20.6), influencer-marketing-food-brands-india | how-to-find-local-influencers | **New.** Food-creator types matched to restaurant goals; local-influencers stays about any local business. |
| 28 | find-travel-influencers-hotels-tourism | influencer-marketing-travel-brands-india (836 / 16.1), influencer-marketing-hospitality-brands-india (32 / 8.6) | — | **New.** Creator types, source markets, hosted-stay checks. Linked from/to the strategy posts. |
| 29 | find-tech-influencers-gadgets-electronics | consumer-electronics-influencer-marketing-india (62 / 13.4) | how-to-find-youtube-influencers | **New.** Reviewer types, review integrity, embargoes, Instagram vs YouTube depth. |
| 30 | find-parenting-mom-influencers | parenting-baby-influencer-marketing-india (47 / 8.0) | — | **New.** Creator types, life-stage matching, child-safety and consent considerations. The strategy post keeps its rankings. |
| 31 | find-linkedin-creators-b2b-marketing | **how-to-find-linkedin-influencers** (42 / 13.7, 13 Sep) | — | **Upgrade** the existing URL (same intent). |
| 32 | find-youtube-shorts-creators | youtube-shorts-influencer-marketing (129 / 10.3) | how-to-find-youtube-influencers (long-form reviews) | **New.** Finding and judging Shorts creators specifically. |
| 33 | find-instagram-reels-creators | instagram-reels-influencer-marketing (698 / 6.9) | how-to-find-instagram-influencers | **New.** Evaluating Reels craft (hooks, views vs followers, formats). The strong Reels strategy post is linked, not competed with. |
| 34 | find-podcast-creators-brand-partnerships | **how-to-find-podcasts-and-podcast-creators** (17 / 8.4, 435 words, 17 Sep) | — | **Upgrade** the existing URL (same intent, thin). |
| 35 | find-gaming-influencers-streamers | gaming-influencer-marketing-india (262 / 8.3) | — | **New.** Streamers, reviewers, communities, platforms; strategy post linked. |
| 36 | influencer-shortlist-multi-city-campaign | — | influencer-shortlist, how-to-find-local-influencers | **New.** City allocation matrix, coverage gaps, per-city backups. |
| 37 | source-influencers-brand-ambassador-programme | brand-ambassador-program (40 / 10.2) | — | **New.** Sourcing only (candidate pools, trial-to-ambassador pipeline); running the programme stays on the existing post. |
| 38 | find-influencers-seasonal-campaigns | seasonal-influencer-marketing-india (25 / 5.2), influencer-budget-seasonal-business | — | **New.** Sourcing lead times, booking windows, festival relevance. |
| 39 | find-influencers-product-gifting-seeding | **influencer-product-seeding-program** (97 / 59.5), influencer-gifting (34 / 37.1), instagram-product-seeding (41 / 7.5) | — | **Upgrade** `influencer-product-seeding-program` to centre on finding seeding recipients. Three seeding/gifting posts already exist; a fourth URL would split signals further. This is the weakest-ranking of the three. |
| 40 | influencer-sourcing-workflow | — | influencer-discovery-checklist, influencer-database | **New.** Operating rhythm, roles, intake, cadence. |

## Requested slugs not used

| Requested | Published at | Why |
| --- | --- | --- |
| find-linkedin-creators-b2b-marketing | /blog/how-to-find-linkedin-influencers | Upgrade of the same-intent post |
| find-podcast-creators-brand-partnerships | /blog/how-to-find-podcasts-and-podcast-creators | Upgrade of the same-intent post |
| find-influencers-product-gifting-seeding | /blog/influencer-product-seeding-program | Consolidation (see #39) |

## Platform limits that shaped the angles

Kudozz Discovery covers Indian Instagram creators only. Articles #31 (LinkedIn), #32 (YouTube Shorts), #34 (podcasts) and the streaming parts of #35 say so plainly and use the product only for the Instagram side of a cross-platform shortlist.

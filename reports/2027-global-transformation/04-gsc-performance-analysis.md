# 04 · Google Search Console Performance Analysis

Date: 2026-11-10. Source: `gsc-data.xlsx` with the sheets Chart, Queries, Pages, Countries, Devices and Search appearance. Search type is web, and the "Last 3 months" filter yields daily data from 2026-09-05 to 2026-11-03. **Limits:**
- The export has no query×page or country×query dimension, so query-to-page mapping is inferred (see `05-query-to-url-mapping.csv`).
- Query and page lists are the top rows Google exported: 1,000 queries and 697 pages.
- Only about 60 days of history exist, so a longer-term decline can't be measured.

## Headline numbers
| Metric | Value |
|---|---|
| Clicks | 2,716 |
| Impressions | 157,366 |
| CTR | 1.73% |
| Trend | Impressions 8,026 in the first 14 days vs 43,589 in the last 14 days; clicks 55 vs 989. The site is young and growing fast. |
| Devices | Mobile 2137 clicks / 88,461 impr / 2.4% CTR / pos 7.2; Desktop 549 clicks / 67,748 impr / 0.8% CTR / pos 9.8; Tablet 30 clicks / 1,157 impr / 2.6% CTR / pos 6.9 |
| Search appearance | Only "Translated results": 14 impressions |

## Country performance (target markets)
| Country | Clicks | Impressions | Share of impressions | CTR | Avg position |
|---|---|---|---|---|---|
| India | 2499 | 112,188 | 71.3% | 2.23% | 7.81 |
| United States | 28 | 15,110 | 9.6% | 0.19% | 11.97 |
| United Kingdom | 15 | 3,396 | 2.2% | 0.44% | 12.08 |
| United Arab Emirates | 5 | 670 | 0.4% | 0.75% | 7.86 |
| Saudi Arabia | 5 | 337 | 0.2% | 1.48% | 7.56 |
| Qatar | 0 | 92 | 0.1% | 0.00% | 7.15 |
| Kuwait | 0 | 70 | 0.0% | 0.00% | 6.96 |
| Bahrain | 1 | 50 | 0.0% | 2.00% | 7.9 |
| Oman | 0 | 67 | 0.0% | 0.00% | 6.01 |
| Australia | 8 | 906 | 0.6% | 0.88% | 9.08 |
| Singapore | 2 | 556 | 0.4% | 0.36% | 8.13 |
| Germany | 3 | 1,037 | 0.7% | 0.29% | 7.62 |
| France | 2 | 653 | 0.4% | 0.31% | 7.98 |
| Italy | 2 | 612 | 0.4% | 0.33% | 8.35 |
| Spain | 3 | 526 | 0.3% | 0.57% | 7.17 |
| Netherlands | 9 | 704 | 0.4% | 1.28% | 7.3 |
| Ireland | 1 | 243 | 0.2% | 0.41% | 9.76 |
| Russia | 0 | 415 | 0.3% | 0.00% | 7.69 |

Largest non-target countries by impressions: Canada (1,320), Philippines (1,305), Brazil (1,194), Pakistan (1,092), Indonesia (886), South Korea (748), Malaysia (722), Japan (709).

**Reading:**
- **India is the business.** It has 71% of impressions and 92% of clicks.
- **The US is the second-largest source but barely converts** (0.19% CTR). Creator-education pages such as Instagram subscriptions and Reels analytics are being shown to US searchers. That's not evidence of US brand demand for Kudozz's services.
- **Target international markets are tiny so far.** The UAE (670 impressions), Saudi Arabia (337), Singapore (556) and Australia (906) are small even though market pages exist. The reason is below: those pages were published in October and are not yet surfacing.
- **European countries show similar small volumes,** about 500–1,000 impressions each. That's mostly English creator content reaching English-speaking searchers there, not service demand.

## The most important finding: October content isn't surfacing yet
| Publish month | Articles | Articles with any impressions in the window |
|---|---|---|
| 2026-09 | 618 | 552 |
| 2026-10 | 309 | 1 |
| 2026-11 | 34 | 0 |

**What is affected:**
- The 5 `/markets/*` pages, all 97 international articles and the 30 specialist city listicles, all published 9–24 October 2026, had **zero** impressions by 3 November.
- 552 of 618 September articles did surface.

**What it means:** the problem is either indexing lag or crawl prioritisation for a young domain that added about 300 URLs in one month. An earlier audit (`reports/gsc-seo-optimisation/prioritised-action-plan.md`, P0-1) saw the same pattern for brand guides.

**What to do:** check GSC → Indexing → Pages ("Discovered – currently not indexed" / "Crawled – currently not indexed") and URL Inspection for the market pages **before** adding more international pages.

## High-impression, low-CTR pages (500+ impressions, CTR below 1%)
| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| /blog/best-influencer-marketing-agencies-in-india | 141 | 14204 | 0.99% | 11.27 |
| /blog/instagram-creator-monetization | 52 | 6412 | 0.81% | 4.93 |
| /blog/instagram-broadcast-channels | 45 | 6362 | 0.71% | 7.35 |
| /blog/instagram-trial-reels | 13 | 5374 | 0.24% | 7.38 |
| /blog/instagram-insights-for-creators | 15 | 5021 | 0.30% | 6.95 |
| /blog/instagram-gifts | 15 | 3799 | 0.39% | 5.23 |
| /blog/instagram-subscriptions#readiness | 0 | 2292 | 0.00% | 7.79 |
| /blog/instagram-subscriptions#benefits | 0 | 2285 | 0.00% | 7.77 |
| /blog/instagram-subscriptions#quick-answer | 0 | 2243 | 0.00% | 7.71 |
| /blog/instagram-subscriptions#eligibility | 0 | 2238 | 0.00% | 7.77 |
| /blog/instagram-subscriptions#promise | 0 | 2068 | 0.00% | 7.82 |
| /blog/instagram-partnership-ads | 2 | 1895 | 0.11% | 8.86 |
| /blog/instagram-subscriptions#launch | 0 | 1888 | 0.00% | 7.84 |
| /blog/instagram-subscriptions#pricing | 0 | 1537 | 0.00% | 8.41 |
| /blog/instagram-subscriptions#free-access | 0 | 1506 | 0.00% | 6.94 |
| /blog/creator-usage-rights | 4 | 1486 | 0.27% | 7.1 |
| /blog/best-influencer-marketing-agencies-in-india#agencies-india | 0 | 1437 | 0.00% | 8.15 |
| /blog/instagram-creator-marketplace | 9 | 1336 | 0.67% | 6.57 |
| /blog/youtube-shorts-content-strategy | 1 | 1312 | 0.08% | 7.01 |
| /blog/youtube-shorts-vs-long-form | 1 | 1278 | 0.08% | 5.94 |
| /blog/best-influencer-marketing-agencies-in-india#quick-answer | 0 | 1243 | 0.00% | 8.09 |
| /blog/creator-whitelisting | 2 | 1129 | 0.18% | 9.58 |
| /blog/best-influencer-marketing-agencies-in-india#partner-types-india | 0 | 1109 | 0.00% | 8.13 |
| /blog/youtube-affiliate-marketing | 2 | 994 | 0.20% | 8.13 |
| /blog/youtube-shopping-india-creators | 3 | 961 | 0.31% | 5.92 |
| /blog/how-much-should-creators-charge-india | 6 | 943 | 0.64% | 7.05 |
| /blog/instagram-collab-posts | 3 | 882 | 0.34% | 7.6 |
| /blog/youtube-channel-membership-strategy | 4 | 864 | 0.46% | 8.62 |
| /blog/tiktok-affiliate-marketing | 1 | 711 | 0.14% | 12.24 |
| /blog/youtube-creator-monetization | 1 | 677 | 0.15% | 8.13 |

## Pages ranking at positions 5–30 with 200+ impressions (move-up candidates)
| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| /blog/instagram-subscriptions | 1393 | 24613 | 5.66% | 6.79 |
| /blog/best-influencer-marketing-agencies-in-india | 141 | 14204 | 0.99% | 11.27 |
| /blog/instagram-influencer-rates-india | 70 | 6956 | 1.01% | 7.63 |
| /blog/instagram-broadcast-channels | 45 | 6362 | 0.71% | 7.35 |
| /blog/instagram-trial-reels | 13 | 5374 | 0.24% | 7.38 |
| /blog/instagram-insights-for-creators | 15 | 5021 | 0.30% | 6.95 |
| /blog/instagram-reels-analytics | 156 | 3979 | 3.92% | 7.86 |
| /blog/short-form-video-hooks | 149 | 3913 | 3.81% | 7.24 |
| /blog/instagram-gifts | 15 | 3799 | 0.39% | 5.23 |
| /blog/instagram-keyword-strategy | 55 | 2680 | 2.05% | 7.12 |
| /blog/instagram-subscriptions#readiness | 0 | 2292 | 0.00% | 7.79 |
| /blog/instagram-subscriptions#benefits | 0 | 2285 | 0.00% | 7.77 |
| /blog/instagram-subscriptions#quick-answer | 0 | 2243 | 0.00% | 7.71 |
| /blog/instagram-subscriptions#eligibility | 0 | 2238 | 0.00% | 7.77 |
| /blog/instagram-subscriptions#promise | 0 | 2068 | 0.00% | 7.82 |
| /blog/instagram-partnership-ads | 2 | 1895 | 0.11% | 8.86 |
| /blog/creator-seo | 24 | 1891 | 1.27% | 6.93 |
| /blog/instagram-subscriptions#launch | 0 | 1888 | 0.00% | 7.84 |
| /blog/brand-collaboration-email-templates | 21 | 1764 | 1.19% | 7.54 |
| /blog/instagram-subscriptions#pricing | 0 | 1537 | 0.00% | 8.41 |
| /blog/instagram-subscriptions#free-access | 0 | 1506 | 0.00% | 6.94 |
| /blog/creator-usage-rights | 4 | 1486 | 0.27% | 7.1 |
| /blog/best-influencer-marketing-agencies-in-india#agencies-india | 0 | 1437 | 0.00% | 8.15 |
| /blog/instagram-creator-marketplace | 9 | 1336 | 0.67% | 6.57 |
| /blog/youtube-shorts-content-strategy | 1 | 1312 | 0.08% | 7.01 |
| /blog/youtube-shorts-vs-long-form | 1 | 1278 | 0.08% | 5.94 |
| /blog/best-influencer-marketing-agencies-in-india#quick-answer | 0 | 1243 | 0.00% | 8.09 |
| /blog/creator-whitelisting | 2 | 1129 | 0.18% | 9.58 |
| /blog/best-influencer-marketing-agencies-in-india#partner-types-india | 0 | 1109 | 0.00% | 8.13 |
| /blog/youtube-affiliate-marketing | 2 | 994 | 0.20% | 8.13 |
| /blog/youtube-shopping-india-creators | 3 | 961 | 0.31% | 5.92 |
| /blog/how-much-should-creators-charge-india | 6 | 943 | 0.64% | 7.05 |
| /blog/instagram-collab-posts | 3 | 882 | 0.34% | 7.6 |
| /blog/youtube-channel-membership-strategy | 4 | 864 | 0.46% | 8.62 |
| /blog/first-brand-collaboration-india | 19 | 778 | 2.44% | 7.14 |
| /blog/tiktok-affiliate-marketing | 1 | 711 | 0.14% | 12.24 |
| /creator-resources/get-brand-deals | 10 | 690 | 1.45% | 17.19 |
| /blog/youtube-creator-monetization | 1 | 677 | 0.15% | 8.13 |
| /blog/influencer-marketing-travel-brands-india | 3 | 627 | 0.48% | 15.81 |
| /blog/best-influencer-marketing-agencies-in-india#what-agency-does | 0 | 611 | 0.00% | 8.4 |

## Query mix (top 1,000 queries)
| Query type | Queries | Clicks | Impressions |
|---|---|---|---|
| creator | 448 | 551 | 20,884 |
| brand informational | 355 | 489 | 13,069 |
| agency/service (commercial) | 193 | 96 | 10,624 |
| international | 3 | 0 | 58 |
| branded | 1 | 14 | 43 |

## Commercial (agency/service) queries
| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| influencer marketing agency | 51 | 2901 | 1.76% | 11.66 |
| best influencer marketing agency in india | 6 | 539 | 1.11% | 7.71 |
| influencer marketing services | 1 | 453 | 0.22% | 15.98 |
| influencer marketing agency india | 2 | 406 | 0.49% | 15.02 |
| influencer marketing agency in india | 1 | 404 | 0.25% | 12.24 |
| influencer agency | 2 | 266 | 0.75% | 14.62 |
| influencer marketing companies | 0 | 215 | 0.00% | 17.27 |
| best influencer marketing agency | 2 | 187 | 1.07% | 9.82 |
| top 10 influencer marketing agencies in india | 3 | 180 | 1.67% | 4.72 |
| top influencer marketing agencies in india | 0 | 160 | 0.00% | 7.59 |
| influencer management agency | 2 | 137 | 1.46% | 15.8 |
| influencer agency india | 2 | 114 | 1.75% | 8.4 |
| influencer marketing agencies in india | 2 | 108 | 1.85% | 13.25 |
| best influencer marketing agency india | 0 | 103 | 0.00% | 10.52 |
| top influencer marketing agency in india | 0 | 102 | 0.00% | 5.94 |
| influencer marketing agencies | 1 | 97 | 1.03% | 12.14 |
| top influencer marketing agencies | 0 | 93 | 0.00% | 20.81 |
| influencer marketing company in india | 0 | 84 | 0.00% | 12.23 |
| influencer marketing company | 0 | 82 | 0.00% | 19.18 |
| best agency for influencer marketing | 0 | 78 | 0.00% | 4.86 |
| best influencer marketing agency in delhi | 2 | 70 | 2.86% | 12.74 |
| how do agencies generate profit when managing live content creators? | 0 | 68 | 0.00% | 2.87 |
| creator management agency in india | 0 | 60 | 0.00% | 6.88 |
| best agency for influencer and creator marketing in india | 0 | 59 | 0.00% | 1.85 |
| influencer agencies in india | 0 | 59 | 0.00% | 10.68 |
| creator agency | 2 | 58 | 3.45% | 8.76 |
| best influencer marketing agencies in india | 2 | 56 | 3.57% | 6.29 |
| influencer marketing companies india | 0 | 56 | 0.00% | 13.89 |
| leading influencer marketing agency in india | 0 | 54 | 0.00% | 24.0 |
| influencer marketing agency pricing | 0 | 48 | 0.00% | 15.35 |

**Reading:**
- The head term "influencer marketing agency" has 2,901 impressions at position 11.7, and "best influencer marketing agency in india" has 539 at position 7.7. These almost certainly land on `/blog/best-influencer-marketing-agencies-in-india` (14,204 impressions) rather than the homepage (521 impressions), which is inferred.
- **The listicle, not the homepage, is Kudozz's main commercial entry point.** That's why its quality and transparency matter (see `19-proof-and-credibility-gap-report.md`).
- Service pages get almost no impressions (`/services/ugc-campaigns`: 120 at position 36).

## International queries
| Query | Clicks | Impressions | Position |
|---|---|---|---|
| usage rights | 0 | 26 | 16.69 |
| how should brands structure creator content usage rights? | 0 | 19 | 7.16 |
| usage rights for content creators | 0 | 13 | 15.38 |

## Queries with no clearly matching page (30+ impressions, inferred match score below 0.5)
| Query | Impressions | Position | Closest page |
|---|---|---|---|
| site.facebook.com/help/instagram "view insights on your instagram reels" | 687 | 6.14 | /blog/instagram-trial-reels |
| indian instagram exclusive content free | 284 | 5.71 | /blog/creator-paywall-content |
| instagram subscription free | 266 | 7.9 | /creator-resources/instagram-tiktok-search |
| instagram subscription free website | 236 | 6.78 | /creator-resources/instagram-tiktok-search |
| insta key words | 181 | 9.55 | /blog/influencer-contract-guide-for-creators |
| instagram subscription videos | 132 | 7.08 | /creator-resources/instagram-tiktok-search |
| instagram subscription content free access | 129 | 7.58 | /blog/creator-paywall-content |
| instagram free subscription | 99 | 8.31 | /creator-resources/instagram-tiktok-search |
| instagram subscription videos free | 92 | 8.74 | /creator-resources/instagram-tiktok-search |
| instagram subscription content free website | 85 | 6.79 | /blog/creator-paywall-content |
| free instagram channel members | 83 | 7.94 | /creator-resources/instagram-tiktok-search |
| yes | 77 | 2.87 | / |
| compare youtube shorts and long-form videos for growing a new channel | 75 | 4.36 | /blog/youtube-shorts-vs-long-form |
| instagram exclusive content subscription free | 73 | 6.55 | /blog/creator-paywall-content |
| ha | 72 | 2.43 | / |
| instagram exclusive content for free website | 70 | 6.47 | /blog/creator-paywall-content |
| how do agencies generate profit when managing live content creators? | 68 | 2.87 | /for-creators |
| instagram subscribers only content free | 64 | 7.3 | /blog/creator-paywall-content |
| site.facebook.com/help/instagram "view insights on your instagram reels"  "views" | 60 | 5.92 | /blog/instagram-trial-reels |
| how much instagram takes from subscription | 59 | 7.41 | /blog/instagram-gifts |
| instagram subscription benefits | 58 | 7.76 | /creator-resources/instagram-tiktok-search |
| instagram subscriber only content free | 57 | 6.74 | /blog/creator-paywall-content |
| creator education creator business operations &amp; workflow systems recently | 54 | 5.56 | /blog/creator-operations |
| how do brands manage influencer campaigns from start to finish? | 51 | 7.31 | /blog/instagram-reels-influencer-marketing |
| instagram subscription content free videos | 48 | 7.98 | /blog/creator-paywall-content |

## Cannibalisation signals from GSC
- **Agency head terms:** the homepage, `/for-brands`, `/services` and the India listicle all target "influencer marketing agency". The listicle is the one Google prefers.
- **Instagram Reels insights:** `instagram-insights-for-creators` and `instagram-reels-analytics` share these queries. Batch 01 separated their intents; monitor them.
- **YouTube Shorts:** `youtube-shorts-content-strategy` and `youtube-shorts-vs-long-form` share Shorts queries. Batch 02 separated their intents.
- See `10-content-cannibalisation-report.md` for the full analysis.

## Priorities from this data
1. **Fix indexing before expanding.** Check the coverage report, internal links to October pages from high-impression pages, and sitemap submission.
2. **Rewrite titles and metas on the high-impression, low-CTR pages above** (starting with `instagram-trial-reels`, `instagram-creator-monetization` and the India listicle). This is CTR work, not new content.
3. **Strengthen the commercial path from the India listicle** to the homepage, services and `/for-brands`, with a transparent publisher note.
4. **Treat US impressions as creator-content reach, not a US services market,** until US brand queries appear.

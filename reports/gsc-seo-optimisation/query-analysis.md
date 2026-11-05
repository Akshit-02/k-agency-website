# Query Analysis

**Source:** `gsc-data.xlsx`, "Queries" sheet. Search type Web, last 3 months (data from 2026-09-05 to 2026-11-03).

## Coverage limits

- **Row cap:** the sheet has **1,000 rows**, which is Search Console's export cap. It contains no empty rows and no duplicate queries.
- **Missing clicks:** these 1,000 queries account for **1,150 clicks and 44,678 impressions**, while the site total is **2,716 clicks and 157,366 impressions**. About **58% of clicks** come from anonymised or long-tail queries that aren't in the file.
- **No query-to-page pairs:** the export has no query-by-page dimension, so the "best matching URL" for each query is inferred from page-level data and site content (see `query-url-mapping.md`). Only a GSC API pull or a filtered Performance view can confirm which URL Google actually shows for a query.
- **Positions are averages:** average position is aggregated across searches, devices and locations. It is not an exact rank.

## Queries by category

Categories were assigned by keyword pattern, first match wins. Creator-side categories are labelled because they don't bring brand enquiries.

| Category | Queries | Clicks | Impressions | CTR | Impr-weighted avg position |
|---|---|---|---|---|---|
| Instagram creator features (creator-side) | 307 | 784 | 13645 | 5.75% | 8.6 |
| Influencer marketing agency / company | 178 | 93 | 9902 | 0.94% | 11.4 |
| Creator business (creator-side) | 169 | 49 | 4863 | 1.01% | 12.7 |
| YouTube / Shorts / TikTok (creator-side) | 74 | 86 | 4740 | 1.81% | 10.2 |
| Third-party navigational (irrelevant) | 24 | 19 | 2174 | 0.87% | 6.3 |
| Cost, rates and pricing | 59 | 10 | 2056 | 0.49% | 13.0 |
| International / location | 51 | 63 | 2001 | 3.15% | 8.1 |
| Measurement and reporting | 39 | 12 | 1820 | 0.66% | 10.1 |
| Other informational | 51 | 15 | 1229 | 1.22% | 11.9 |
| Industry-specific | 22 | 1 | 758 | 0.13% | 14.0 |
| Influencer marketing services | 14 | 3 | 713 | 0.42% | 13.9 |
| Influencer campaign management | 6 | 0 | 451 | 0.00% | 18.8 |
| UGC marketing | 5 | 1 | 283 | 0.35% | 18.1 |
| Branded | 1 | 14 | 43 | 32.56% | 1.3 |

### What this shows

1. **Most traffic is creator-side and informational.** Instagram feature queries alone bring 784 clicks (68% of attributable query clicks). Much of that is people looking for free access to paywalled Instagram content ("instagram subscription free website", "instagram exclusive content free" and similar). These visitors are useful for creator sign-ups at best, and are very unlikely to become brand enquiries.
2. **Brand-side commercial demand exists but sits on page two.** There are **9,902 impressions** across 178 agency/company queries, at an impression-weighted position of 11.4 and 0.94% CTR. The head term is "influencer marketing agency": 2,901 impressions, 51 clicks, position 11.7.
3. **Commercial sub-clusters are weakly ranked:**
   - services: 713 impressions, position 13.9
   - campaign management: 451 impressions, position 18.8
   - UGC: 283 impressions, position 18.1
   - cost and rates: 2,056 impressions, position 13.0
4. **Branded demand is tiny:** one branded query, with 43 impressions. Kudozz is not yet a searched-for brand, so organic enquiries depend on non-branded commercial rankings.
5. **Irrelevant traffic:** "creator seo fixer" variants (about 1,185 impressions) are navigational searches for a third-party tool. The `site.facebook.com/help/instagram "view insights…"` queries (about 1,300 impressions, 0 clicks) look like help-centre lookups, probably automated. Neither can be served usefully, and they need no action.
6. **AI-style query noise:** 49 queries of 8+ words with 0 clicks at average position ≤6 (1520 impressions). Examples:

   These look like prompts from AI assistants or agents rather than human searches. They are treated as low-confidence signals and were not used to justify changes.

## Top 60 queries by impressions

| Query | Clicks | Impr. | CTR | Pos. | Category | Intent |
|---|---|---|---|---|---|---|
| influencer marketing agency | 51 | 2901 | 1.8% | 11.7 | Influencer marketing agency / company | Commercial |
| instagram subscription | 24 | 2313 | 1.0% | 7.3 | Instagram creator features (creator-side) | Informational |
| hook video for shorts | 21 | 1169 | 1.8% | 8.9 | YouTube / Shorts / TikTok (creator-side) | Informational |
| 1000 views on instagram reels | 103 | 1132 | 9.1% | 8.3 | Instagram creator features (creator-side) | Informational |
| site.facebook.com/help/instagram "view insights on your instagram reels" | 0 | 687 | 0.0% | 6.1 | Third-party navigational (irrelevant) | Navigational (other site) |
| best influencer marketing agency in india | 6 | 539 | 1.1% | 7.7 | Influencer marketing agency / company | Commercial |
| hook video for short | 22 | 520 | 4.2% | 6.8 | YouTube / Shorts / TikTok (creator-side) | Informational |
| influencer marketing services | 1 | 453 | 0.2% | 16.0 | Influencer marketing services | Commercial |
| "view insights on your instagram reels" | 0 | 415 | 0.0% | 6.7 | Measurement and reporting | Informational |
| creator seo fixer in | 5 | 406 | 1.2% | 6.8 | Third-party navigational (irrelevant) | Navigational (other site) |
| influencer marketing agency india | 2 | 406 | 0.5% | 15.0 | Influencer marketing agency / company | Commercial |
| influencer marketing agency in india | 1 | 404 | 0.2% | 12.2 | Influencer marketing agency / company | Commercial |
| instagram subscribe content free | 40 | 358 | 11.2% | 6.4 | Instagram creator features (creator-side) | Informational |
| creator seo fixer | 6 | 354 | 1.7% | 7.1 | Third-party navigational (irrelevant) | Navigational (other site) |
| trial reels instagram | 0 | 318 | 0.0% | 9.2 | Instagram creator features (creator-side) | Informational |
| plan a creative content strategy to grow a youtube shorts channel | 0 | 315 | 0.0% | 7.4 | YouTube / Shorts / TikTok (creator-side) | Commercial investigation |
| instagram subscription price | 0 | 295 | 0.0% | 8.0 | Cost, rates and pricing | Commercial investigation |
| indian instagram exclusive content free | 45 | 284 | 15.8% | 5.7 | International / location | Informational |
| instagram subscription free | 9 | 266 | 3.4% | 7.9 | Instagram creator features (creator-side) | Informational |
| influencer agency | 2 | 266 | 0.8% | 14.6 | Influencer marketing agency / company | Commercial |
| develop a content strategy to grow a youtube shorts channel | 0 | 263 | 0.0% | 6.8 | YouTube / Shorts / TikTok (creator-side) | Commercial investigation |
| instagram monetization requirements in india | 1 | 257 | 0.4% | 5.3 | International / location | Informational |
| tiktok brand deals creator | 0 | 245 | 0.0% | 28.8 | YouTube / Shorts / TikTok (creator-side) | Informational |
| instagram subscription free website | 47 | 236 | 19.9% | 6.8 | Instagram creator features (creator-side) | Informational |
| ugc marketing | 0 | 232 | 0.0% | 19.2 | UGC marketing | Informational |
| instagram reels influencer marketing | 0 | 221 | 0.0% | 7.3 | Instagram creator features (creator-side) | Informational |
| influencer marketing companies | 0 | 215 | 0.0% | 17.3 | Influencer marketing agency / company | Commercial |
| instagram keywords | 1 | 213 | 0.5% | 9.4 | Instagram creator features (creator-side) | Informational |
| instagram exclusive content free | 37 | 197 | 18.8% | 7.0 | Instagram creator features (creator-side) | Informational |
| monetization | 1 | 193 | 0.5% | 8.5 | Instagram creator features (creator-side) | Informational |
| influencer campaign management | 0 | 189 | 0.0% | 29.4 | Influencer campaign management | Informational |
| best influencer marketing agency | 2 | 187 | 1.1% | 9.8 | Influencer marketing agency / company | Commercial |
| insta key words | 3 | 181 | 1.7% | 9.6 | Instagram creator features (creator-side) | Informational |
| top 10 influencer marketing agencies in india | 3 | 180 | 1.7% | 4.7 | Influencer marketing agency / company | Commercial |
| instagram trial reels | 1 | 174 | 0.6% | 8.1 | Instagram creator features (creator-side) | Informational |
| creator marketplace | 1 | 173 | 0.6% | 13.8 | Creator business (creator-side) | Informational |
| partner with creators | 0 | 166 | 0.0% | 12.7 | Creator business (creator-side) | Informational |
| creator seo fixer.in | 2 | 163 | 1.2% | 7.4 | Third-party navigational (irrelevant) | Navigational (other site) |
| top influencer marketing agencies in india | 0 | 160 | 0.0% | 7.6 | Influencer marketing agency / company | Commercial |
| influencer marketing india | 1 | 158 | 0.6% | 23.6 | International / location | Informational |
| how to manage influencer campaigns | 0 | 151 | 0.0% | 5.7 | Influencer campaign management | Informational |
| instagram paid subscription | 4 | 149 | 2.7% | 7.4 | Instagram creator features (creator-side) | Informational |
| instagram exclusive content | 11 | 148 | 7.4% | 12.0 | Instagram creator features (creator-side) | Informational |
| how long can brands use creator content in paid ads | 0 | 146 | 0.0% | 9.2 | Creator business (creator-side) | Informational |
| brand deals | 2 | 142 | 1.4% | 10.1 | Creator business (creator-side) | Informational |
| trial reel instagram | 0 | 142 | 0.0% | 8.7 | Instagram creator features (creator-side) | Informational |
| creators reach insights | 0 | 138 | 0.0% | 5.2 | Measurement and reporting | Informational |
| influencer management agency | 2 | 137 | 1.5% | 15.8 | Influencer marketing agency / company | Commercial |
| insta subscription | 3 | 136 | 2.2% | 7.1 | Instagram creator features (creator-side) | Informational |
| youtube brandconnect | 0 | 134 | 0.0% | 23.3 | YouTube / Shorts / TikTok (creator-side) | Informational |
| instagram trial reels site | 0 | 133 | 0.0% | 6.2 | Instagram creator features (creator-side) | Informational |
| instagram subscription videos | 10 | 132 | 7.6% | 7.1 | Instagram creator features (creator-side) | Informational |
| instagram subscription content free access | 16 | 129 | 12.4% | 7.6 | Instagram creator features (creator-side) | Informational |
| instagram exclusive content website | 19 | 128 | 14.8% | 9.1 | Instagram creator features (creator-side) | Informational |
| instagram subscription eligibility | 0 | 123 | 0.0% | 8.0 | Instagram creator features (creator-side) | Informational |
| creator seo fixer growth | 4 | 122 | 3.3% | 4.6 | Third-party navigational (irrelevant) | Navigational (other site) |
| influencer agency india | 2 | 114 | 1.8% | 8.4 | Influencer marketing agency / company | Commercial |
| instagram monetization in india | 0 | 114 | 0.0% | 4.6 | International / location | Informational |
| instagram subscribe content | 7 | 112 | 6.2% | 6.7 | Instagram creator features (creator-side) | Informational |
| evergreen content vs trending content | 0 | 111 | 0.0% | 25.5 | Other informational | Informational |

## Commercial and commercial-investigation queries (creator-side terms excluded)

| Query | Clicks | Impr. | CTR | Pos. | Category | Intent |
|---|---|---|---|---|---|---|
| influencer marketing agency | 51 | 2901 | 1.8% | 11.7 | Influencer marketing agency / company | Commercial |
| best influencer marketing agency in india | 6 | 539 | 1.1% | 7.7 | Influencer marketing agency / company | Commercial |
| influencer marketing services | 1 | 453 | 0.2% | 16.0 | Influencer marketing services | Commercial |
| influencer marketing agency india | 2 | 406 | 0.5% | 15.0 | Influencer marketing agency / company | Commercial |
| influencer marketing agency in india | 1 | 404 | 0.2% | 12.2 | Influencer marketing agency / company | Commercial |
| influencer agency | 2 | 266 | 0.8% | 14.6 | Influencer marketing agency / company | Commercial |
| influencer marketing companies | 0 | 215 | 0.0% | 17.3 | Influencer marketing agency / company | Commercial |
| best influencer marketing agency | 2 | 187 | 1.1% | 9.8 | Influencer marketing agency / company | Commercial |
| top 10 influencer marketing agencies in india | 3 | 180 | 1.7% | 4.7 | Influencer marketing agency / company | Commercial |
| top influencer marketing agencies in india | 0 | 160 | 0.0% | 7.6 | Influencer marketing agency / company | Commercial |
| influencer management agency | 2 | 137 | 1.5% | 15.8 | Influencer marketing agency / company | Commercial |
| influencer agency india | 2 | 114 | 1.8% | 8.4 | Influencer marketing agency / company | Commercial |
| influencer marketing agencies in india | 2 | 108 | 1.9% | 13.2 | Influencer marketing agency / company | Commercial |
| best influencer marketing agency india | 0 | 103 | 0.0% | 10.5 | Influencer marketing agency / company | Commercial |
| top influencer marketing agency in india | 0 | 102 | 0.0% | 5.9 | Influencer marketing agency / company | Commercial |
| influencer marketing agencies | 1 | 97 | 1.0% | 12.1 | Influencer marketing agency / company | Commercial |
| top influencer marketing agencies | 0 | 93 | 0.0% | 20.8 | Influencer marketing agency / company | Commercial |
| youtube content strategy | 0 | 85 | 0.0% | 12.0 | YouTube / Shorts / TikTok (creator-side) | Commercial investigation |
| influencer marketing company in india | 0 | 84 | 0.0% | 12.2 | Influencer marketing agency / company | Commercial |
| influencer marketing company | 0 | 82 | 0.0% | 19.2 | Influencer marketing agency / company | Commercial |
| best agency for influencer marketing | 0 | 78 | 0.0% | 4.9 | Influencer marketing agency / company | Commercial |
| how much do influencers charge india | 1 | 76 | 1.3% | 11.0 | Cost, rates and pricing | Commercial investigation |
| influencer rate card india | 0 | 71 | 0.0% | 16.2 | Cost, rates and pricing | Commercial investigation |
| best influencer marketing agency in delhi | 2 | 70 | 2.9% | 12.7 | Influencer marketing agency / company | Commercial |
| how do agencies generate profit when managing live content creators? | 0 | 68 | 0.0% | 2.9 | Influencer marketing agency / company | Commercial |
| employee influencer strategy | 0 | 66 | 0.0% | 29.6 | Creator business (creator-side) | Commercial investigation |
| how much does influencer marketing cost | 0 | 64 | 0.0% | 19.2 | Cost, rates and pricing | Commercial investigation |
| x creator strategy | 5 | 61 | 8.2% | 6.4 | Creator business (creator-side) | Commercial investigation |
| creator management agency in india | 0 | 60 | 0.0% | 6.9 | Influencer marketing agency / company | Commercial |
| best agency for influencer and creator marketing in india | 0 | 59 | 0.0% | 1.9 | Influencer marketing agency / company | Commercial |
| influencer agencies in india | 0 | 59 | 0.0% | 10.7 | Influencer marketing agency / company | Commercial |
| influencer price list | 0 | 59 | 0.0% | 14.2 | Cost, rates and pricing | Commercial investigation |
| creator agency | 2 | 58 | 3.5% | 8.8 | Influencer marketing agency / company | Commercial |
| influencer rates | 0 | 57 | 0.0% | 17.8 | Cost, rates and pricing | Commercial investigation |
| best influencer marketing agencies in india | 2 | 56 | 3.6% | 6.3 | Influencer marketing agency / company | Commercial |
| influencer marketing service | 0 | 56 | 0.0% | 12.7 | Influencer marketing services | Commercial |
| influencer marketing companies india | 0 | 56 | 0.0% | 13.9 | Influencer marketing agency / company | Commercial |
| leading influencer marketing agency in india | 0 | 54 | 0.0% | 24.0 | Influencer marketing agency / company | Commercial |
| cost per post influencer | 0 | 53 | 0.0% | 17.0 | Cost, rates and pricing | Commercial investigation |
| how much does an influencer cost | 0 | 50 | 0.0% | 21.2 | Cost, rates and pricing | Commercial investigation |
| how much does an influencer charge per post | 0 | 48 | 0.0% | 14.9 | Cost, rates and pricing | Commercial investigation |
| influencer marketing agency pricing | 0 | 48 | 0.0% | 15.3 | Influencer marketing agency / company | Commercial |
| influencer marketing cost india | 0 | 47 | 0.0% | 17.2 | Cost, rates and pricing | Commercial investigation |
| pinterest influencer rates | 0 | 46 | 0.0% | 9.5 | Cost, rates and pricing | Commercial investigation |
| digital influencer marketing agency | 0 | 46 | 0.0% | 18.1 | Influencer marketing agency / company | Commercial |

## AI-style query examples

| Query | Clicks | Impr. | CTR | Pos. | Category | Intent |
|---|---|---|---|---|---|---|
| create a content strategy to launch a new youtube shorts channel | 0 | 102 | 0.0% | 5.9 | YouTube / Shorts / TikTok (creator-side) | Commercial investigation |
| questions to ask before signing with an influencer marketing platform | 0 | 78 | 0.0% | 3.6 | Creator business (creator-side) | Informational |
| compare youtube shorts and long-form videos for growing a new channel | 0 | 75 | 0.0% | 4.4 | YouTube / Shorts / TikTok (creator-side) | Informational |
| whitelisting creator content for paid ads how does it work | 0 | 70 | 0.0% | 2.4 | Creator business (creator-side) | Informational |
| how do agencies generate profit when managing live content creators? | 0 | 68 | 0.0% | 2.9 | Influencer marketing agency / company | Commercial |
| what is the best platform for creator content licensing and whitelisting? | 0 | 63 | 0.0% | 3.2 | Creator business (creator-side) | Informational |
| site.facebook.com/help/instagram "view insights on your instagram reels" 
"views | 0 | 60 | 0.0% | 5.9 | Third-party navigational (irrelevant) | Navigational (other site) |
| best agency for influencer and creator marketing in india | 0 | 59 | 0.0% | 1.9 | Influencer marketing agency / company | Commercial |
| explain how recurring billing works for creator memberships. | 0 | 55 | 0.0% | 5.8 | Creator business (creator-side) | Informational |
| creator education creator business operations & workflow systems recently | 0 | 54 | 0.0% | 5.6 | Industry-specific | Informational |
| site.facebook.com/help/instagram "view insights on your instagram reels" or | 0 | 39 | 0.0% | 5.4 | Third-party navigational (irrelevant) | Navigational (other site) |
| "view insights on your instagram reels" "average watch time" | 0 | 39 | 0.0% | 5.7 | Measurement and reporting | Informational |

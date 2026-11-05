# Prioritised SEO Action Plan

Each item gives the problem, the GSC evidence, what was changed or is recommended, why it matters, and how to measure success. **Done** means implemented locally (not deployed). **Approval** means it needs your decision.

## P0: Critical

### P0-1. Find out why the commercial content clusters have no search visibility. Approval / your action.

- **Problem:** the pages most likely to bring brand enquiries barely appear in search.
  - Brand guides: 17/207 pages have impressions.
  - GCC: 0/65. Australia: 0/26. UK: 0/9.
  - Location guides: 4/38. `/markets/*`: 0/6.
  - Creator Resources: 320/343 have impressions.
- **Evidence:** the Pages sheet compared with the sitemap. Core blog posts with October lastmod dates have impressions on 87% of pages; brand guides from the same window, 2%. Live checks show these pages are 200, `index, follow`, self-canonical, in the sitemap and internally linked.
- **What to do:**
  1. Export **Indexing → Pages** from Search Console. In particular, check counts for "Discovered – currently not indexed", "Crawled – currently not indexed" and "Duplicate, Google chose different canonical".
  2. Run URL Inspection on 10 sample URLs from these clusters.
  3. If they are "not indexed", the likely cause is quality and duplication evaluation after roughly 600 brand, regional and location pages were published in about four weeks. Many share templated structures ("Quick answer… Common mistakes… Conclusion") and very similar country-variant topics.
  4. Response: **pause publishing new pages in these clusters** (including the 15 Batch 26 articles until this is understood). Strengthen and differentiate the best 30–50 pages. Request indexing for the strongest commercial pages. Consider consolidating thin country variants, with your approval.
- **Why it matters:** this is where the commercial queries live. Every other optimisation is capped while these pages are out of the index.
- **Measure:** the indexed count for these clusters in the Pages report, and the number of brand-guide URLs with more than 0 impressions, each week.

### P0-2. Get query-by-page data. Your action.

- **Problem:** the export has no query × page dimension, so query-to-URL mapping is inferred.
- **What to do:** use the GSC API, or Looker Studio with the Search Console connector, to pull query + page for the last 3 months.
- **Measure:** confirm or correct the mapping in `query-url-mapping.md`.

No P0 issues were found in robots.txt, the sitemap, canonicals, rendering, metadata or redirects (see `technical-seo-audit.md`).

## P1: High impact

| # | Item | Evidence | Change | Status | Measure (28 days after deploy, against this export) |
|---|---|---|---|---|---|
| 1 | Campaign-management guide title didn't match the "how to" query wording | "how to manage influencer campaigns": 151 impr., pos. 5.7, **0 clicks**. Page: 523 impr., 0 clicks | Title → "How to Manage Influencer Campaigns: A Step-by-Step Guide"; meta keeps "influencer campaign management" | Done | Page CTR > 0; clicks on the query |
| 2 | "Influencer marketing services" split across three pages | Query: 453 impr., pos. 16. /services 42 impr.; blog 230 impr. at pos. 33 | /services H1 now leads with "Influencer marketing services"; blog H1 re-aimed at "What does an influencer marketing agency do?"; blog links to /services | Done | /services impressions and position for the query |
| 3 | /for-brands shares the "influencer marketing services for brands" phrase | /for-brands: 34 impr. | Re-aim /for-brands at enquiry / hire-an-agency intent (title + H1 lead) | **Approval** (main conversion page) | — |
| 4 | Cost hub ranks at 47 while its retired URL still collects impressions | /blog/influencer-marketing-cost-india 158 impr., pos. 47.3; old URL 240 impr., pos. 19 | Title → "How Much Does Influencer Marketing Cost in India?"; link to the rates page | Done | Hub position under 20 within 6 weeks |
| 5 | Rates page (most brand-intent clicks) missing from cost pages | Rates page: 6,956 impr., 70 clicks; rate-card queries at pos. 11–21 | Links from the cost hub and how-much-to-pay | Done | Rates page position for "rate card / rates" queries |
| 6 | Service pages thin and templated | Service pages are 570–740 words with an identical layout; 22–120 impr. at pos. 15–38 | Outreach-management: added an in-house vs managed comparison plus 1 FAQ, restating only existing service claims. **Recommend** writing unique, substantive sections for the 5 core services (approach, examples of scope, how pricing is structured), using real Kudozz information you supply | Partly done; the rest needs your input | Service-page impressions and positions |
| 7 | Homepage and the agency head term | "influencer marketing agency": 2,901 impr., pos. 11.7; homepage only 521 impr. | Nothing to fix on the page: the title and H1 already target it. The gap is authority: earn mentions and links (PR, partner and creator directories, guest research). Don't add more keyword copy. | Recommendation | Homepage impressions; head-term position |

## P2: Medium impact

| # | Item | Evidence | Change | Status |
|---|---|---|---|---|
| 1 | Subscriptions page title missing "price / eligibility" | "instagram subscription price" 295 impr., 0 clicks; "eligibility" 123, 0 clicks | Title → "Instagram Subscriptions in India: Price, Eligibility and Fees"; the meta points to the honest free-access answer | Done |
| 2 | UGC hub under-linked | "ugc marketing" 232 impr., pos. 19; the hub has 14 inbound links | Title leads with "What Is UGC Marketing?"; 3 inbound links added | Done |
| 3 | Shorts strategy title | Strategy-prompt queries (~800 impr., 0 clicks, pos. 6–7) | Title and meta match the "grow a Shorts channel" wording | Done |
| 4 | Instagram Insights meta too long and off-query | 5,021 impr., 0.3% CTR; "view insights on your instagram reels" | Meta shortened to 155 characters and focused on viewing Reel insights | Done |
| 5 | Partnership-ads guide had no service path | 1,895 impr. (brand-side topic) | Link to /services/paid-influencer-campaigns | Done |
| 6 | Content refresh: construction, reporting, KPIs | Construction 536 impr. at pos. 14.8; reporting and KPI queries at pos. 16–23 | Deepen with current examples; add measurement templates | Recommended |
| 7 | 209 other meta descriptions over 170 characters | Technical audit | Shorten in batches, prioritising pages with impressions | Recommended |

## P3: Long-term

- **Authority:** original research or a dataset Kudozz can actually publish (for example anonymised rate benchmarks from real campaigns). This is the most credible route to links for the agency head terms.
- **International:** GCC, UK, AU and SG content has 0 impressions. Country impressions are small: UAE 670, Saudi Arabia 337, UK 3,396, Australia 906, Singapore 556, mostly on creator-side pages. **Don't create more country pages.** Fix indexing (P0-1) first, then judge them on data.
- **Concentration risk:** 51% of clicks come from one creator page. Track brand-side clicks separately in GA4 or GSC, using a page filter on brand clusters.
- **New content:** see below. Kept deliberately small.

## New content opportunities

| Query evidence | Existing URL checked | Recommendation |
|---|---|---|
| "construction influencer agency" (22), "construction influencer campaigns" (32, pos. 6.2) | /blog/influencer-marketing-construction | **Update the existing page**, not a new one |
| "creator whitelisting for meta / tiktok / youtube" (54 / 52 / 79, pos. 12–21) | /blog/creator-whitelisting (covers Meta, YouTube and TikTok) | Update: add platform-specific H3s. No new pages. |
| "employee influencer platform" (84, pos. 11.2), "employee influencer strategy" (66, pos. 29.6) | /blog/employee-influencer-marketing | Update: add a section on choosing platforms |
| "campaign post mortem" (85, pos. 14.6) | /blog/influencer-campaign-post-mortem | Covered. Watch it. |
| "influencer marketing reporting" (82, pos. 15.9) | /blog/influencer-marketing-report | Update the existing page |

**No new articles are justified by this export.** Every query with meaningful impressions already maps to an existing URL. The constraint is indexing and authority, not missing pages.

## Next 30 days

| Week | Actions |
|---|---|
| 1 | Review and deploy this batch (metadata, links, service changes). Export the GSC Pages (indexing) report, run URL Inspection on 10 brand, GCC and market URLs, and pull query + page data via the API. Decide on FAQPage schema, the /for-brands retargeting and the dark-social redirect. **Hold the Batch 26 deploy until the indexing diagnosis is in.** |
| 2 | Act on the indexing diagnosis: pick the 30–50 strongest commercial pages, make sure each is clearly differentiated, request indexing, and stop new cluster publishing. Write real, specific content for the 5 core service pages from information you supply. |
| 3 | Refresh construction, reporting/KPI and whitelisting pages (P2-6 and the new-content table). Shorten long meta descriptions on pages with impressions. Start an authority plan: PR and partner listings. |
| 4 | Re-export GSC (the same 3-month window, plus a 28-day comparison) and measure the P1/P2 changes. Check brand-cluster index coverage against week 1. Adjust. |

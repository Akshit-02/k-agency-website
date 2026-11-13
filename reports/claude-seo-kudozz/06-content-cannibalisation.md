# 06 · Content Cannibalisation Report

## Method and limits

1. **Title-intent grouping (all 1,070 articles):** a primary keyword was derived from each title tag (the text before a colon or question mark, minus years and "complete guide"). Articles sharing a primary keyword, or with ≥ 80% token overlap, were grouped. Groups whose members differ only by place were separated out as **geo variants**. The full machine output is in `05-keyword-url-map.xlsx` → *Cannibalisation groups*.
2. **Search Console evidence:** the export has no query × page dimension, so two URLs cannot be proven to rank for the same query. Overlap is inferred where the same queries match several pages' titles and those pages have similar positions.
3. **Manual verdicts:** every group below was read and judged by intent, not just by title similarity. Automated groups that were false positives (different intents) are noted.
4. **Backlinks:** no backlink data source is configured (no Moz, Bing Webmaster or DataForSEO credentials), so "strongest URL" uses GSC clicks and impressions, then incoming internal links, then depth.

The October 2026 audit (`reports/2027-global-transformation/10-content-cannibalisation-report.md`) already consolidated 19 duplicate pairs with 301s. Those redirects work (crawl verified). This report covers what remains and what has been added since.

**Nothing was deleted, redirected or consolidated in this project.** Every consolidation below needs approval.

## Summary

| # | Group | URLs | Verdict | Action |
|---|---|---|---|---|
| 1 | Commercial "influencer marketing agency / services" | 6 core + several blog posts | Real risk, now managed | Keyword ownership defined; pillar created; explainer linked to pillar (**done**) |
| 2 | Agency shortlists by city (location listicles) | 73 | **Highest risk (doorway pattern)** | Consolidate the 25 specialist city pages (and later the 8 SMM city pages) into their India pages; freeze new location pages (**approval**) |
| 3 | Instagram Reels insights | 3 | Real overlap | Titles differentiated (**done**); add cross-links |
| 4 | YouTube Shorts strategy | 2 | Real overlap | Differentiate titles and intros (recommended) |
| 5 | Influencer cost / rates | 6 | Partial overlap | Review `influencer-campaign-cost-india` vs `influencer-marketing-cost-india` for merge (**approval**) |
| 6 | Influencer campaign management | 2 | Intent split (guide vs service) | Keep both; tighten roles |
| 7 | Product launches | 3 | Intent split | Keep; link guide → service |
| 8 | UGC marketing | 2 + 2 services | Weak overlap | Keep; make the guide the informational owner |
| 9 | Market variants (India / UAE / UK / AU) | ~25 | Not cannibalisation by intent | Monitor; zero impressions so far (see technical P0-1) |

## 1. Commercial "influencer marketing agency / services"

| URL | Role | GSC (3 months) |
|---|---|---|
| `/` | Brand entity: "Influencer marketing & social media agency in India" | 521 impr, pos 9.5 |
| `/services/influencer-marketing` (**new**) | Commercial owner of "influencer marketing services / agency" | n/a |
| `/blog/best-influencer-marketing-agencies-in-india` | Owner of list intent: "best / top influencer marketing agencies in India" | 14,204 impr, pos 11.3, 141 clicks |
| `/services` | Hub of all services | 42 impr |
| `/for-brands` | Conversion page (inquiry form) | 34 impr |
| `/blog/influencer-marketing-services-india` | Informational: "What does an influencer marketing agency do?" | 230 impr, pos 33.4 |
| `/blog/choose-influencer-marketing-agency-india` and other `influencer-marketing-agency-*` guides | Buyer education (fees, checklists, briefs, pitch questions) | 20–522 impr each |

**Evidence:** "influencer marketing agency" has 2,901 impressions at average position 11.7, but the homepage only had 521 impressions in total. The India shortlist (14,204 impressions) is therefore the page Google mostly shows for head commercial terms, a listicle that ranks competitors next to Kudozz.

**Verdict:** the risk was that no URL clearly owned "influencer marketing services". Google was choosing a list page for a service query.

**Done in this project:**
- Created the pillar `/services/influencer-marketing` with service intent (scope, deliverables, process, sub-services, comparison with UGC and social media management).
- Homepage title and H1 changed from "Best Influencer Marketing Agency in India" to "Influencer Marketing & Social Media Agency in India" (brand-entity framing, no unverifiable superlative).
- Nav, footer, homepage, services hub, the SMM page, six SMM city guides, the India shortlist's Kudozz entry, the "What does an agency do?" explainer and about 130 generic brand articles' related-service links now point to the pillar.

**How we'll know it failed:** in 6–8 weeks, if GSC (Performance → filter query "influencer marketing agency" → Pages tab) still shows the shortlist as the main page and the pillar has no impressions, strengthen the pillar with proof (case studies) and more internal links. Don't change the shortlist's URL.

## 2. Agency shortlists by city (73 location listicles)

| Family | Count | GSC impressions |
|---|---|---|
| `best-influencer-marketing-agencies-in-{India, 5 states, 2 cities}` (researched competitors) | 8 | 14,400 (India 14,204; Karnataka 121; Delhi 42; Tamil Nadu 33; others 0) |
| `best-influencer-marketing-agencies-in-{26 states/UTs}` ("how to choose", Kudozz-only) | 26 | 1,176 combined, 20 clicks, positions 4.2–27 |
| `best-{ugc, instagram, youtube, campaign-management, seeding}-…-agencies-in-{India, 5 cities}` | 30 (5 India + 25 city) | 0 |
| `best-social-media-marketing-agencies-in-{India, 8 cities}` (added 12 Nov 2026) | 9 | n/a (too new) |

**Why it matters:** claude-seo's quality gates warn at 30 location pages and hard-stop at 50 without justification. Google's spam policies treat near-duplicate location pages built to rank for each place as doorway pages, and a scaled pattern can affect how the whole site is judged. The October audit made the same recommendation; since then, 9 more city pages were added.

**Transparency fix (done):** 38 shortlists that profile competitors had no statement that Kudozz publishes the guide. They now show a disclosure under the intro: "this guide is published by Kudozz, which is included in the comparison and listed first… not an independent or official ranking". The 26 state guides already said this in-body, and the 9 SMM pages already had it.

**Recommendation (needs approval):**
1. Consolidate the **25 specialist city pages** into their five India-level pages (e.g. `best-ugc-marketing-agencies-in-mumbai` → `best-ugc-marketing-agencies-in-india#mumbai`), keeping any genuinely local facts as a city section. 301 each city URL. None of these 30 pages (India or city) has recorded an impression.
2. Hold the **8 SMM city pages** for one GSC cycle; if they get no impressions by mid-January 2027, consolidate them into `best-social-media-marketing-agencies-in-india` the same way.
3. **Keep** the India pages and the state guides that have impressions.
4. **Create no new location pages** until the October indexing question (technical P0-1) is answered.

## 3. Instagram Reels insights

| URL | GSC | Shared queries |
|---|---|---|
| `/blog/instagram-trial-reels` | 5,374 impr, 0.24% CTR, pos 7.4 | "1000 views on instagram reels", "view insights on your instagram reels" |
| `/blog/instagram-reels-analytics` | 3,979 impr, 3.9% CTR, pos 7.9 | same |
| `/blog/instagram-insights-for-creators` | 5,021 impr, 0.3% CTR, pos 7.0 | same |

**Verdict:** real overlap. Three pages with similar positions attract the same help-centre-style queries. Reels Analytics wins the clicks.

**Done:** new title tags make each page's job explicit: *How to View Instagram Insights for Reels, Posts and Stories* (where to find the numbers) and *Instagram Trial Reels: What They Are and How to Use Them* (the feature). Reels Analytics stays the "what to measure" page.

**Recommended:** add one cross-link sentence at the top of each ("Looking for X? See Y"), and keep "1000 views" language on Reels Analytics only.

## 4. YouTube Shorts strategy

`/blog/youtube-shorts-content-strategy` (1,312 impr, pos 7.0) and `/blog/youtube-shorts-vs-long-form` (1,278 impr, pos 5.9) both match conversational queries such as "plan a creative content strategy to grow a youtube shorts channel" (315 impr) and "compare youtube shorts and long-form videos for growing a new channel" (75). Both have about 0.1% CTR.

**Recommendation:** keep both but sharpen them: the strategy page answers "how to plan Shorts", the comparison page answers "which format to choose", and each links to the other in its first section. These queries look like AI Mode prompts, where low CTR is structural, so measure success by impressions and position rather than CTR.

## 5. Influencer cost and rates

| URL | GSC |
|---|---|
| `/blog/instagram-influencer-rates-india` | 6,956 impr, pos 7.6 |
| `/blog/how-much-should-creators-charge-india` (creator side) | 943 impr, pos 7.1 |
| `/blog/influencer-marketing-agency-fees-india` | 435 impr, pos 12.1 |
| `/blog/influencer-rate-card-india` (creator side) | 219 impr, pos 9.9 |
| `/blog/influencer-marketing-cost-india` | 158 impr, **pos 47.3** |
| `/blog/influencer-campaign-cost-india` | 26 impr, pos 21.6 |

**Verdict:** platform rate pages, creator pricing and agency fees are different intents, so keep them. But `influencer-marketing-cost-india` (the merge target of the October consolidation) and `influencer-campaign-cost-india` answer the same brand question ("what will a campaign cost in India?"), and the main page's position of 47 suggests Google isn't sure which to use.

**Recommendation (needs approval):** merge `influencer-campaign-cost-india` into `influencer-marketing-cost-india` (301), keeping its campaign-type examples as a section.

## 6. Influencer campaign management

`/blog/influencer-campaign-management` (523 impr, pos 19.6, 64 incoming links) is the how-to guide; `/services/outreach-management` (71 impr, pos 15.5) is the service. "influencer campaign management" has 189 impressions at pos 29.4.

**Verdict:** intent split, so keep both. Make sure the guide links to the service with "campaign management services" wording once, high on the page, and that the service page links back to the guide (it does, via `guides`).

## 7. Product launches

`/blog/influencers-for-product-launch` (224 impr), `/services/product-launches` (34 impr, pos 20.2), `/blog/reddit-influencer-marketing-product-launches` (0). The Reddit page is platform-specific, a false positive of the automated grouping. **Keep;** link the guide to the service.

## 8. UGC marketing

"ugc marketing" has 232 impressions at pos 19.2. `/blog/what-is-ugc-marketing` (327 impr, pos 17.1) is the likely ranking page; `/blog/ugc-marketing-strategy` has 4 impressions. Services: `ugc-campaigns` (creators post on their own accounts) and `ugc-content-production` (brand-owned assets). These are differentiated on the page. **Keep;** treat `what-is-ugc-marketing` as the informational owner and link it prominently to both services.

## 9. Market variants

Examples: `choose-influencer-marketing-agency-{india, uae, australia, uk}`, `influencer-marketing-ecommerce-brands-{india, uae, …}`, and the Saudi cluster (9 pages). These target different countries and regulations, so they aren't cannibalisation by intent. **All non-India variants have zero impressions** because they were published after 3 October (technical P0-1). Monitor them; don't add more market variants until they start appearing.

## Keyword ownership (summary)

| Query family | Owner URL |
|---|---|
| influencer marketing agency / services / company | `/services/influencer-marketing` (homepage supports) |
| best / top influencer marketing agencies in India | `/blog/best-influencer-marketing-agencies-in-india` |
| influencer marketing agency in [state] | that state's guide |
| what does an influencer marketing agency do | `/blog/influencer-marketing-services-india` |
| how to choose an influencer marketing agency | `/blog/choose-influencer-marketing-agency-india` |
| influencer marketing cost India | `/blog/influencer-marketing-cost-india` |
| Instagram influencer rates | `/blog/instagram-influencer-rates-india` |
| influencer campaign management (how-to) | `/blog/influencer-campaign-management` |
| influencer campaign management (service) | `/services/outreach-management` |
| UGC marketing (informational) | `/blog/what-is-ugc-marketing` |
| social media management | `/services/social-media-management` |

The full query-level map is `05-keyword-url-map.xlsx`.

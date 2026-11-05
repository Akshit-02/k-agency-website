# Query-to-URL Mapping

The export has no query-by-page data, so this file can't say which URL Google actually ranks for each query. For each valuable query it records:

- the **intended URL**: the page whose content best matches the query's intent, based on reading the pages;
- the **likely current ranking URL**: inferred from page-level impressions and positions.

Confirm the second column with Performance → Queries → click a query → Pages, or with a GSC API pull by query and page.

| Query | Impr. | Pos. | Intent | Likely current ranking URL (inferred) | Intended URL | Match? | Action |
|---|---|---|---|---|---|---|---|
| influencer marketing agency | 2,901 | 11.7 | Commercial (mixed SERP: agencies and listicles) | /blog/best-influencer-marketing-agencies-in-india (14,204 impr., pos. 11.3; the homepage only has 521 impr.) | Homepage for the brand; the listicle for "best/top" variants | Partial | Leave the listicle as Google's choice. Strengthen the homepage through authority, not on-page tweaks (it already targets this term in its title and H1). See the action plan. |
| best / top influencer marketing agency (in) india (all variants) | ~1,300 | 4.7–10.5 | Commercial investigation (listicle SERP) | /blog/best-influencer-marketing-agencies-in-india | Same | Yes | No change. Its title and H1 already match. CTR is low because it sits at position ~11 across the head term. |
| influencer marketing agency india / in india | 810 | 12–15 | Commercial | Listicle (inferred) | Listicle / homepage | Partial | As above |
| influencer marketing services | 453 | 16.0 | Commercial | Unclear: /services has only 42 impr. and /blog/influencer-marketing-services-india has 230 at pos. 33 | **/services** | No | Added "Influencer marketing services" to the /services H1. Re-aimed the blog H1 at "What does an influencer marketing agency do?" so it stops competing. |
| influencer marketing companies / company (in india) | 381 | 12–19 | Commercial | Listicle (inferred) | Listicle | Yes | No change |
| influencer management agency | 137 | 15.8 | Commercial; ambiguous with talent management | /services/outreach-management (71 impr., pos. 15.5) or the creator-agency blogs | /services/outreach-management | Partial | Added an "in-house vs managed" comparison and a FAQ that separates campaign management from talent management |
| influencer campaign management | 189 | 29.4 | Mixed (guide vs service) | /blog/influencer-campaign-management (523 impr., pos. 19.6) | Blog for "how to"; service page for "services/agency" | Yes | Blog title now leads with "How to Manage Influencer Campaigns". Added a blog → agencies link. |
| how to manage influencer campaigns | 151 | 5.7 | Informational | /blog/influencer-campaign-management | Same | Yes, but title mismatch | **Title rewritten to match the query wording** (0 clicks at pos. 5.7 before) |
| how do brands manage influencer campaigns from start to finish? | 51 | 7.3 | Informational | Same blog | Same | Yes | Covered by the new title |
| ugc marketing | 232 | 19.2 | Informational | /blog/what-is-ugc-marketing (327 impr., pos. 17.1) | Same | Yes | Title now leads with "What Is UGC Marketing?". Added 3 inbound links from UGC articles (it had 14). |
| ugc content agency / ugc services / ugc marketing agencies | 21 | 9–83 | Commercial | /services/ugc-campaigns (120 impr., pos. 36) | /services/ugc-campaigns | Yes | Too little data to act on |
| how much does influencer marketing cost / influencer marketing cost india | 111 | 17–19 | Commercial investigation | The old redirected URL /blog/how-much-does-influencer-marketing-cost (240 impr., pos. 19) and /blog/influencer-marketing-cost-india (158 impr., pos. **47**) | /blog/influencer-marketing-cost-india | Consolidating | The redirect is already in place. Title changed to the exact question; added a link to the Instagram rates page. Recheck in 4–6 weeks once signals consolidate. |
| influencer rate card india / influencer rates / cost per post influencer / how much do influencers charge india | ~300 | 11–21 | Commercial investigation | /blog/instagram-influencer-rates-india (6,956 impr., pos. 7.6) and /blog/how-much-to-pay-influencers (344 impr., pos. 14.4) | Instagram rates page for per-post rates; how-much-to-pay for fee decisions | Yes | Added the missing links from the cost hub and how-much-to-pay to the rates page |
| how long can brands use creator content in paid ads | 146 | 9.2 | Informational, phrased brand-side | /blog/creator-usage-rights (1,486 impr., creator-side) | /blog/influencer-usage-rights (brand-side, 265 impr., pos. 8.2) | Acceptable | Both pages answer it for their audiences. No change (see cannibalisation report). |
| instagram partnership ads / partnership ads instagram | 68 | 9.4–9.9 | Informational (brand) | /blog/instagram-partnership-ads | Same | Yes | Added a link to /services/paid-influencer-campaigns |
| instagram subscription (+ price / eligibility) | 2,731 | 7.3–8.0 | Informational (users and creators) | /blog/instagram-subscriptions | Same | Yes | Title now names "Price, Eligibility and Fees" (0 clicks before on "price" (295 impr.) and "eligibility" (123 impr.)). The meta points to the existing honest "free access" answer. |
| instagram monetization (requirements / in india) | ~800 | 3.5–5.6 | Informational (creators) | /blog/instagram-creator-monetization | Same | Yes | No change. The meta already answers the question, so low CTR is probably zero-click answers. |
| trial reels instagram (variants) | 1,138 | 6–9 | Informational (creators) | /blog/instagram-trial-reels | Same | Yes | No change. The title already leads with the term. |
| plan / develop a content strategy to grow a youtube shorts channel | ~800 | 5.9–7.5 | Informational (creators; AI-prompt-like) | /blog/youtube-shorts-content-strategy | Same | Yes | Title and meta changed to "grow a Shorts channel" wording |
| "view insights on your instagram reels" (variants) | ~1,300 | 6–7 | Help-centre lookup | /blog/instagram-insights-for-creators | — | Partial | Meta changed to "how to view and read… Reel insights". Most of these impressions aren't recoverable. |
| construction (industry) influencer marketing | 211 | 8–18 | Commercial investigation | /blog/influencer-marketing-construction (536 impr., pos. 14.8) | Same | Yes | No change yet. Content refresh candidate (P2). |
| influencer marketing reporting / kpis / measure influencer marketing | ~210 | 16–23 | Informational | /blog/influencer-marketing-report (193 impr., pos. 12.4), /blog/influencer-marketing-kpis | Same | Yes | P2 refresh candidates. The /services/reporting service page has 0 impressions. |
| creator seo fixer (variants) | 1,185 | ~7 | Navigational (third-party tool) | /blog/creator-seo | None | No | Ignore. Kudozz can't satisfy this intent. |

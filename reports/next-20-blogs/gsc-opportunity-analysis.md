# Search Console opportunity analysis (batch B)

## Data used

| Item | Detail |
| --- | --- |
| Source | GSC Performance exports dated 2026-10-22 (Pages: 668 rows; Queries: 1,000 rows, the UI cap), recovered from commit 5c3aa08 |
| Date range | Not stated in the export; the site was about 7 weeks old |
| Dimensions available | Query or page, with clicks, impressions, CTR and average position. **No** query×page, country, device or date dimensions |
| Mapping | `reports/seo-data-implementation/query-page-mapping.csv` (commit 5c3aa08) infers a landing page per query by token match; treated as a hypothesis |
| Exclusions | `site:` operators, quoted help-centre titles and AI-prompt-style queries are noted where they appear; they inflate impressions without clicks |

All numbers below are actual GSC figures. Nothing is estimated.

## 1. High impressions, weak CTR (brand-side pages, positions 5-11)

| Page | Clicks | Impressions | Avg position | Action taken |
| --- | --- | --- | --- | --- |
| /blog/creator-whitelisting | 0 | 673 | 9.64 | Updated: verified YouTube/TikTok mechanics, sources, snippet |
| /blog/instagram-collab-posts | 1 | 386 | 7.84 | Snippet rewrite. The top query attributed to it ("how to politely decline an influencer collaboration", 57 impressions) is answered by the new page |
| /blog/influencer-marketing-campaign-timeline | 1 | 299 | 5.18 | Updated: duration-led meta, fast-turnaround section |
| /blog/how-to-contact-youtube-creators | 0 | 277 | 10.30 | Updated: contact-route table, YouTube help source |
| /blog/influencer-marketing-automotive-dealerships | 0 | 144 | 8.23 | Updated: dealer lead routes |
| /blog/youtube-sponsorships | 0 | 139 | 8.73 | Updated: format-by-goal table, planning steps |
| /blog/instagram-influencer-affiliate-marketing | 1 | 141 | 10.48 | Updated: commission structures, affordability worked example |
| /blog/instagram-gifting-vs-paid-collaboration | 0 | 104 | 8.83 | Updated: barter row, decision table |

## 2. Near page one with realistic improvement (positions 10-20)

| Page | Impressions | Avg position | Action taken |
| --- | --- | --- | --- |
| influencer-outreach-strategy | 146 | 19.71 | Definition added ("what is influencer outreach?", 43 @9.63, attributed to the Instagram contact page) |
| influencer-marketing-vs-traditional-advertising | 67 | 13.37 | Expanded from 426 to about 815 words |
| influencer-management-vs-influencer-marketing | 60 | 12.42 | Expanded; explains the two meanings of "influencer management agency" (86 @19.5) |
| experiential-influencer-marketing | 71 | 12.51 | Expanded for event-worded queries (12 @34, 11 @31.8) |

## 3. Relevant commercial queries ranking poorly

- **Contracts:** influencer-marketing-contract has 61 impressions at 44.85. Related queries: "influencer contract checklist" 18 @22.5, "influencer marketing contract" 15 @22.4, "influencer agreements" 11 @48.6, "influencer marketing agreement" 10 @26.6. Added a quick answer and a one-page agreement outline.
- **Outreach email:** influencer-outreach-email has 221 impressions at 21.57. The letter and email cluster is about 180 impressions at 9-27, attributed to the Instagram contact page. Added an email vs letter vs DM table and two templates.

## 4. Declining pages

Can't be assessed: there's only one export, with no date dimension.

## 5. Clusters no page serves well

| Cluster | Evidence | Action |
| --- | --- | --- |
| Brands declining creator requests | "how to politely decline an influencer collaboration" 57 @9.12 | NEW /blog/decline-influencer-collaboration-requests |
| "Partner with creators" | 136 @12.06, landing page not stated | Expanded how-to-work-with-influencers (low-medium confidence) |
| Software platforms in India | "best influencer marketing platform in india" 30 @14.63; "influencer marketing platform india" 26 @15.62, attributed to the social-platforms page | Added an India section to the agency-vs-platform page and a disambiguation link. A named-vendor comparison is deferred |
| Esports | 56 @10.55, attributed to a URL that now redirects to the X pillar | Gaming page retitled and esports section expanded; redirect re-point recommended |

## 6. Pages competing for the same intent

| Cluster | Evidence | Decision |
| --- | --- | --- |
| Negotiation | how-to-negotiate-with-influencers 132 impressions; negotiate-influencer-rates absent | CONSOLIDATE (evaluate). Already cross-linked. With query×page data, either merge the rates page into the negotiation guide with a 301, or refocus it on comparing quotes |
| Post-mortem | Generic query (85 impressions) goes to the creator page; the brand page is absent | CONSOLIDATE (evaluate). Already cross-linked. Keep separate if query×page data confirms brand searches find the brand page |
| Whitelisting | creator-whitelisting 673, instagram-partnership-ads 1,356, ugc-whitelisting 161 | Carried over from the 2026-10-22 register. Creator, Instagram-product and brand audiences stay separate |

## 7. Informational pages that now lead to a service

The mid-CTA now points to the outreach service on the decline, contract, work-with, outreach and contact pages. Gaming and events point to product launches, gifting vs paid to barter campaigns, and dealerships to creator discovery. The CTA resolver handles this; the only new CTA copy added was for the decline page.

## 8. Topics likely to attract qualified brand leads

The highest-value brand intents in this batch:
- contracts, management agency and platform choice (commercial investigation);
- timeline, YouTube sponsorships and dealer leads (planning a campaign);
- declining requests (brands with an active creator inbox, which are likely candidates for managed outreach).

## Still needed for the next batch

- Query×page export for the top 30 pages.
- Countries tab for IN, AE, SA, GB, SG and AU.
- A 3-month comparison, to judge consolidation and measure this batch.

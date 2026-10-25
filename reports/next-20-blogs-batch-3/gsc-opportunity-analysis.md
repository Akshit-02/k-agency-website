# Search Console opportunity analysis: batch 3

**Data:** GSC Pages (668 rows) and Queries (1,000 rows, the UI cap) exports dated 2026-10-22, recovered from commit 5c3aa08. No date range is stated (the site was about 7 weeks old), and there are no country, device or query×page dimensions. Query→page links come from the inferred mapping in commit 5c3aa08 (`query-page-mapping.csv`). All figures are actual GSC values; nothing is estimated.

**Method:** I listed every brand-side page with 40 or more impressions that batches A and B hadn't touched, then kept pages that met any of these conditions:
- **(a)** position 4-15 with zero or near-zero clicks;
- **(b)** a title that doesn't match the dominant mapped query;
- **(c)** a thin page, or one ranking poorly for a clear intent;
- **(d)** a mapped query that belongs to a different, better owner.

## High impressions, weak CTR

| Page | Clicks / impressions @ position | Finding | Action |
| --- | --- | --- | --- |
| instagram-partnership-ads | 2 / 1,356 @ 8.99 | Whitelisting and partnership-ad queries (~220 impressions mapped) | Post-to-ad workflow; comparison with whitelisting |
| influencer-marketing-trends-2026 | 2 / 498 @ 6.21 | Unclear seoTitle ("What to Validate") | New seoTitle and meta |
| influencer-marketing-agency-fees-india | 2 / 368 @ 13.05 | Agency pricing queries 41 @12.8 and 12 @16.1 | Agency vs creator fee breakdown |
| snapchat-snap-star-marketing | 2 / 246 @ 7.76 | 'snap star' 36 @8.75; 'what is snap star' 11 @7.27 | Question-led seoTitle; accuracy fix |
| creator-marketplace | 2 / 243 @ 12.19 | 'creator marketplace' 130 @12.03 | Question-led seoTitle |
| ugc-content-usage-rights | 2 / 176 @ 10.64 | Near page one | Concrete scope sentence in the quick answer |
| instagram-stories-influencer-marketing | 0 / 113 @ 6.09 | 'instagram stories influencer marketing' 55 @4.75; title targeted "Stories vs Reels" | Title now leads with the query |
| instagram-live-influencer-marketing | 1 / 114 @ 8.58 | No seoTitle | seoTitle added |
| micro-vs-macro-influencers | 0 / 93 @ 9.47 | No quick answer | Quick answer added |

## Near page one or ranking poorly for a clear intent

| Page | Evidence | Action |
| --- | --- | --- |
| influencer-marketing-travel-brands-india | 380 @14.29; tourism cluster ~160 impressions at 15-27 | Tourism-industry table |
| what-is-ugc-marketing | 325 @17.13; 'ugc marketing' 232 @19.2 | Sharper first-sentence definition (register asked for this on 2026-10-22) |
| influencer-marketing-d2c-brands-india | 78 @11.68; 'influencer marketing d2c brands india' 26 @10.73 | "Who should run a D2C creator program?" |
| influencer-marketing-funnel | 78 @13.56; 'influencer funnel optimisation' 10 @17.8 | Funnel optimisation table |
| event-influencer-marketing-india | 65 @28.89; 693 words | Event-type table and logistics |
| influencer-engagement-rate | 52 @46.48; 'influencer engagement' 15 @59.4 | Definition paragraph (low confidence) |
| influencer-marketing-compliance | 43 @8.4; prompt-style CPA 2019 queries at positions 1.7-2 | Disclosure-by-format table |

## Queries landing on the wrong owner

| Query | Inferred landing page | Better owner | Action |
| --- | --- | --- | --- |
| influencer marketing for gadget brands (33 @17.73) | instagram-reels-influencer-marketing | consumer-electronics (gadget section, batch A) | Contextual link added |
| influencer contract checklist (18 @22.5) | influencer-marketing-agency-checklist | influencer-marketing-contract (outline, batch B) | Contextual link added |
| esports influencer marketing (56 @10.55) | x-influencer-marketing-gaming-esports (308 → X pillar) | gaming-influencer-marketing-india | Pointer added on the X pillar; redirect re-point still awaiting your approval |

## Cannibalisation

- No new pairs found.
- The negotiation and post-mortem pairs (batch B) remain under evaluation. Both are already cross-linked.
- The whitelisting cluster (instagram-partnership-ads, ugc-whitelisting-creator-licensing, creator-whitelisting) is now explicitly differentiated: the Meta product page, the brand cross-platform page and the creator page each link to the others.

## Content decay

Can't be assessed: there's only one export, with no date dimension.

## Lead potential

The strongest brand-enquiry intents in this batch:
- agency fees and pricing (commercial investigation);
- partnership ads (performance teams with budget);
- D2C program ownership (founders deciding whether to hire an agency);
- compliance (brands preparing campaigns).

The snippet-only changes target pages with mostly informational intent.

## Still needed

- Query×page export for the top 30 pages.
- Countries tab.
- A 3-month comparison.

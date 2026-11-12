# 05 — Google Search Console Analysis

Source: `gsc-data.xlsx` in the project root (web search, "last 3 months", export as at early November 2026). Sheets: Queries (top 1,000), Pages (697), Countries, Devices. Parsed directly; no figures estimated.

## Totals (Chart sheet, last 3 months)

2,716 clicks · 157,366 impressions. India: 2,499 clicks / 112,188 impressions. The top-1,000 query export covers 1,150 clicks / 44,678 impressions; the rest is long-tail or anonymised.

## Social media management demand: none captured yet

| Search in Queries sheet | Matches |
|---|---|
| "social media management", "smm", "social media agency" (not influencer) | **0** |
| audit, brand voice, approval process, social listening, crisis, repurposing, franchise / multi-location, onboarding / 90 days, customer support | **0** for brand-account intent |
| KPIs / metrics | 5 queries, all influencer ("influencer marketing kpis" 72 impr., pos 22.7), owned by `/blog/influencer-marketing-kpis` |
| Reporting | "influencer marketing reporting" 82 impr., pos 15.9, owned by `/blog/influencer-marketing-report` |
| In-house | "influencer marketing agency vs in-house influencer management" 17 impr., owned by `/blog/influencer-marketing-agency-vs-in-house` |
| Pricing | 19 queries, all influencer or creator cost ("how much does influencer marketing cost" 64 impr.) |
| Brief / RFP | "influencer marketing campaign brief" 25 impr., pos 27.9, influencer intent |
| Organic / paid | Creator-content-in-ads queries ("how long can brands use creator content in paid ads" 146 impr.), owned by whitelisting and usage-rights guides |

**Implication:** none of the 20 articles competes with a query the site already ranks for. Every adjacent query is influencer intent and already has an owning page; each new article cross-links that owner instead of targeting it.

## Low-CTR, high-impression queries (context, not targets for this batch)

38 queries have ≥ 100 impressions and < 1% CTR. The commercial ones are influencer agency head terms ("influencer marketing services" 453 impr., pos 16; "influencer marketing agency india" 406, pos 15; "influencer agency" 266, pos 14.6). These are homepage and service-page problems, outside this batch's scope. They're recorded here so this batch doesn't divert attention from them. The rest are creator Instagram queries.

## Page-level checks for this batch

- `/services/social-media-management` is not in the export (published after the export date).
- No existing page has impressions for the 20 primary keywords.

## Query-to-URL mapping

See `06-search-intent-and-content-mapping.csv` (one owner URL per primary keyword, plus the existing pages each article must not compete with) and the expansion report `reports/social-media-management-expansion/08-keyword-to-url-mapping.csv`.

## Limitations

- No keyword-volume tool was available. Prioritisation is based on commercial intent, gaps in the inventory and the service positioning, not on verified search volumes.
- GSC only shows queries where Kudozz already appears, so absence of SMM queries means no current visibility, not no demand.
- Re-run this analysis 8–12 weeks after publication (with the new URLs indexed) to see which articles earn impressions and where titles need adjusting.

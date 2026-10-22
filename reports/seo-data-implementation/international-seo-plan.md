# International SEO plan (2026-10-22)

## What the data can and can't say

The export has **no country dimension**. Market signals can only be read from words inside queries:

| Market signal in query text | Queries | Impressions | Share of query impressions |
| --- | --- | --- | --- |
| India (country, states, cities, villages, languages, GST/TDS, Consumer Protection Act) | 187 | 5,080 | 16% |
| United States ("seattle", "usa", "seller-us") | 7 | 134 | 0.4% |
| United Kingdom ("uk regions") | 1 | 8 | <0.1% |
| UAE, Saudi Arabia, Singapore, Australia | 0 | 0 | 0% |
| No market stated | 805 | 26,480 | 84% |

Most "no market" demand is about Instagram features that work the same everywhere, so the audience could be anywhere. Without the Countries tab, it's impossible to say how much of it comes from the five non-India markets.

## Market by market

| Market | Evidence of demand | Existing coverage | Recommendation |
| --- | --- | --- | --- |
| India | Strong: agency head terms (4,080 impressions, avg 14.3), state/city agency queries (589 impressions), India-specific monetization and tax questions | Homepage (India is the default market; there is no /markets/india page), India agency guide, 30+ state guides, city and specialist clusters, India-framed creator guides | Focus here. The gap is ranking for head terms (page 2), not coverage. No new location pages |
| UAE and Saudi Arabia | None visible in queries | /markets/uae, /markets/saudi-arabia, GCC guides | Keep. Don't create city pages. Check the Countries tab for AE/SA impressions first |
| United Kingdom | One query ("sourcing creators in specific uk regions for a retail launch") | /markets/uk, UK guides | Keep. No new pages on one query |
| Singapore | None | /markets/singapore, influencer-marketing-singapore guide | Keep. The gated "Singapore agency selection" page from the prior roadmap stays gated |
| Australia | None | /markets/australia, AU guides | Keep |
| United States | 7 queries, not a served market | none | Don't target; US impressions on India pages are incidental |

## Architecture

- Single English site, `en-IN` default, no hreflang. That's correct: there are no alternate-language or alternate-region versions of the same page, so hreflang would be invalid.
- Market pages sit at `/markets/[slug]` and in the sitemap; all are self-canonical and indexable.
- No changes made this run.

## Next steps

1. Export the **Countries** tab and a **Pages × Country** view for IN, AE, SA, GB, SG, AU over the longest available range.
2. If any non-India market shows ≥ 100 impressions on a page, review that page for market-specific gaps (regulation, platforms, buying process) before considering a new page.
3. Don't swap "India" for another country in existing copy, and don't imply offices, staff or clients in any market (owner-confirmed rule).

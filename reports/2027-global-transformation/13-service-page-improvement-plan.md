# 13 · Service Page Improvement Plan

Date: 2026-11-10. Local and reviewable only; nothing was deployed.

## Audit
- **Structure:** 18 service pages share one template. Each has a definition answer, process, deliverables, what the brand provides, success measures, benefits, FAQs (with FAQPage schema) and related guides.
- **Length:** 574–955 rendered words.
- **Search visibility is very low:** GSC shows 2–120 impressions per service page, at positions 8–39, while the blog listicle captures agency queries.
- **Verified URLs:** campaign-strategy, creator-discovery, outreach-management, social-campaigns, product-launches, ugc-campaigns (programme), ugc-content-production (production), reporting, ambassador-programs, paid-influencer-campaigns, barter-influencer-campaigns, influencer-seeding-gifting, influencer-affiliate-marketing, instagram-influencer-marketing, youtube-influencer-marketing, linkedin-influencer-marketing, regional-influencer-marketing, micro-nano-influencer-marketing.

## Implemented in this pass
One new FAQ per key service, specific to that service. Each answers a question an international buyer actually asks, using only verified facts (visible and in FAQ schema):

| Service | New FAQ |
|---|---|
| campaign-strategy | Can you plan one campaign across India and another market? |
| creator-discovery | Can you find creators outside India? (audience-location and licence checks) |
| outreach-management | How do contracts and payments work for creators in other countries? |
| social-campaigns | Can a social campaign run in more than one language? |
| product-launches | Can you launch in India and an international market at the same time? |
| ugc-campaigns | Can UGC be produced in languages other than English and Hindi? |

## Next steps (recommended, in order)
1. **Titles for visibility.** Service `seoTitle`s use "— Kudozz" suffixes and generic phrasing. Rewrite toward the buyer query, e.g., "UGC Content Creation Agency" rather than "UGC Campaign Services". Never use the bare "UGC agency India", which matches India's University Grants Commission (observed in search results).
2. **Links from the listicle.** In `best-influencer-marketing-agencies-in-india` (14,204 impressions), make the Kudozz entry link to `/services` and the 3 most relevant service pages. This is the strongest internal-link lever available.
3. **Proof blocks.** Each service page should carry one real, approved example: a case study with client permission, or an anonymised one with verifiable numbers. Until then, keep the existing process-based proof (see report 19).
4. **Deliverables tables.** Add "what you receive" tables with example timelines as ranges, labelled as typical rather than guaranteed.
5. **Cross-links.** campaign-strategy → creator-discovery → outreach-management → reporting form the core funnel. Check that each page links to the next (the template's related services do this; verify each `relatedSlugs`).
6. **No country duplicates of service pages.** Market pages reference services with market notes instead (already built).

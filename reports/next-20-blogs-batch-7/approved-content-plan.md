# Approved content plan: batch 7

## 1. New article: /blog/influencer-marketing-seo (implemented)

**Why:** a genuine gap. Brands regularly confuse influencer links with SEO, but the library had no brand-side guide, only creator SEO pages. The topic has a clear lead path to campaign strategy.

**Search evidence:** no brand-side query evidence in the export, so this choice rests on a content gap, not measured demand. Confidence is medium.

**Differentiation:** it grounds the guidance in Google's current policy wording rather than generic SEO advice. Google's spam policies (updated 2026-08-28) name product-for-link exchanges as link spam, and its outbound-link guidance (2025-12-10) asks for `rel="sponsored"` on paid placements. It then separates direct ranking factors from indirect effects in a table, and adds a findability brief and a Search Console measurement plan.

**Conversion:**
- **Mid CTA:** campaign strategy (new `BRAND_GUIDE_CTAS` entry).
- **Bottom CTA:** brand inquiry.
- **Service link:** /services/campaign-strategy in the conclusion.

**Inbound links** from:
- /blog/influencer-marketing-brand-awareness (measurement section);
- /blog/creator-content-ai-product-discovery (measurement section);
- /blog/creator-seo (pointer for brands).

## 2. Snippet update: /blog/retail-influencer-marketing-india (implemented)

The page already contains a store launch playbook but got 0 clicks at position 8.72 (36 impressions). The seoTitle now reads "Influencer Marketing for Retail Stores and Store Openings". It previously fell back to the H1.

## 3. Podcast cluster consolidation (proposal; needs your approval)

**Finding:** 30 podcast pages, median 441 words, 455 impressions combined. Many are thin, structurally similar pages on narrow sub-angles.

**Proposal:** use `/blog/podcast-influencer-marketing-india` (1,325w) as the hub. Keep pages that have clear distinct intent and some impressions:
- costs (101)
- sponsorships (51)
- outreach (44)
- metrics (41)
- ad placement comparison (40)

Then evaluate merging these thin sub-pages into the hub or into sponsorships, with 301 redirects:
- media kits, brief, contracts, negotiation, mistakes, host-read ads, advertising vs influencer, and how-to-choose-the-right-podcast;
- each 300-460 words, with 0-3 impressions or none.

**Not implemented:** redirects and content removal need approval, and query×page data is needed first to make sure no merged page is the only one ranking for a query. This follows the same approach as the 2026-10 consolidation of thin X industry pages (`next.config.ts`).

## Skipped (17)

Each has an existing owner whose body already answers the candidate's question; the section names are in `content-opportunity-matrix.md`. Six of those owners were improved in earlier batches today:
- the SOW in hidden costs;
- YouTube sponsorships and reviews;
- the reporting template;
- the regional quick answer;
- events.

## Needs human input

The SEO article would be stronger with an anonymised Kudozz example of branded-search lift after a campaign. None was invented.

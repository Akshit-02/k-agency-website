# 06 — Publishing Plan (Batch 03)

This is a recommendation only. Nothing has been published.

## How publishing works in this codebase

There is no draft or scheduled-publish flag. An article goes live with the next deploy if its array is spread into `src/content/brand-guides/index.ts`. To publish in waves, use one of these options:

- **Option A (recommended, no code change):** comment out the arrays for later weeks in `index.ts` before each deploy. The CTAs, service-page Guides list (which skips missing posts) and `llms.txt` entries are harmless while an article is absent, but update `llms.txt` to match what's live.
- **Option B:** add a `publishedAt`-based filter so future-dated posts are hidden until their date. This is an architecture change and needs approval; it was not implemented.

Whichever you choose, set each article's `publishedAt` to its real release date when it ships. The articles currently say 2026-11-12. `lastReviewed` should only change if facts are re-checked.

## Pending earlier batches

Batches 01 and 02 (40 articles) and the service expansion are in the same uncommitted working tree. Batch 03 links to Batch 01 and 02 guides, so **ship Batches 01 and 02 before (or with) Batch 03 Week 1**. The internal links depend on them.

## Recommended sequence

The brief's order is kept. GSC gives no reason to reorder it, since there are no SMM-intent impressions in any of these industries. One change: Week 1 slot 1 is now the manufacturing article (it replaces the duplicate SaaS article). The SaaS enhancements ship with Batch 02.

| Week | Articles | Gate before release |
|---|---|---|
| **Week 1: B2B and technology** | 01R manufacturing · 02 B2B social media strategy · 03 IT companies · 04 professional services (LinkedIn) · 05 employer branding | 04: confirm the BCI and ICAI statements with a legal reviewer (professional-body rules) |
| **Week 2: real estate and built environment** | 06 real estate developers · 07 real estate buyer journey · 08 interior designers · 09 construction · 10 architects | 06: legal check of the RERA and MahaRERA statements. 10: optional CoA interpretation check. Publish 06 before 07, because 07 relies on 06 for compliance detail |
| **Week 3: healthcare, education and finance (regulated)** | 11 clinics · 12 hospitals · 13 coaching institutes · 14 schools and universities · 15 financial services | **Mandatory compliance review**: medical or legal for 11 and 12; consumer law for 13; data protection and safeguarding for 14; securities and insurance compliance for 15. **Business decision on NMC 8.1(ii)** before 11 goes live. Revise `influencer-marketing-healthcare-brands-india` before or alongside 11 and 12 |
| **Week 4: consumer and purpose-led** | 16 car dealerships · 17 jewellery · 18 fitness · 19 travel · 20 NGOs | 20: re-verify FCRA and 80G wording. 17: confirm the hallmarking statements still match the current BIS list |

If any Week 3 review is delayed, publish Week 4 first. The weeks are independent apart from the links to Batches 01 and 02.

## After each wave

1. Request indexing for the new URLs in Search Console (and submit the sitemap).
2. Spot-check the live pages: hero, two CTAs, FAQs, schema in the Rich Results Test.
3. After 8–12 weeks, export GSC again and check impressions per primary keyword, CTR, and any overlap between pairs (06 vs 07, 11 vs 12, 13 vs 14). Adjust titles before writing new content.
4. Track enquiries arriving with `ctaTopic = "Social Media Management"` and the source article (`src`), which the existing form already captures. No ranking or lead improvement should be assumed.

## Maintenance calendar for regulated articles

| Article | Re-check | Why |
|---|---|---|
| 11, 12 | Quarterly | NMC 2026 guidelines are new; watch for clarifications or legal challenges |
| 15 | Before April 2027, then quarterly | SEBI Common Advertisement Code commences ≈ April 2027; MF and IRDAI rules |
| 13 | Six-monthly | CCPA coaching guidelines and enforcement |
| 14, 18, 20 | When the DPDP Rules' phased obligations arrive (from ≈ May 2027) | Children's data and verifiable parental consent |
| 06 | Six-monthly | State RERA advertisement orders change |
| 17 | Six-monthly | BIS hallmarking district list is amended periodically |

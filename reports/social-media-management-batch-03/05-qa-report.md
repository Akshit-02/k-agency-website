# 05 — QA Report (Batch 03)

Validated 12 November 2026 on a local production build (`next build` + `next start`), using Playwright with real Chrome.

## Checklist (Phase 6 of the brief)

| Check | Result |
|---|---|
| All 20 articles exist | ✅ 20/20 return 200; listed on `/blog`, in the category filter, in `sitemap.xml` and on the SMM service page |
| No duplicate slugs | ✅ All 20 slugs are new (checked against a 1,001-item inventory) |
| No duplicate primary-keyword targeting | ✅ SaaS duplicate removed; one primary keyword per article, none shared with Batches 01/02 or with existing ranking pages |
| No accidental content overlap | ✅ Scope boundaries for 02/03/04, 06/07, 08/10, 11/12, 13/14 and 16 vs its dealership twin; each twin cross-linked with a clarifying sentence |
| Correct metadata | ✅ Unique titles (49–60 characters rendered) and metas (140–160) |
| Correct canonicals | ✅ 20/20 self-referencing |
| Valid internal links | ✅ 100 distinct internal URLs on the 20 rendered pages, 0 broken; the validator checks every blog link against the inventory |
| Valid images and alt text | ✅ 20/20 heroes are valid XML (`xmllint`), load on the page, have descriptive alt text and were reviewed visually |
| Responsive tables | ✅ 0/20 pages with horizontal overflow at 390px (tables scroll inside their container) |
| Correct CTA placement | ✅ The mid CTA follows 3–7 full sections, never directly after the intro; the end CTA follows the article |
| Exactly two CTAs per article | ✅ 20/20 (one mid aside, one end CTA) |
| No broken layouts | ✅ Mobile check plus a review of the service page's grouped Guides section |
| No console or build errors | ✅ Build passes (2,148 pages); tsc and eslint clean. One transient 404 appeared in the first mobile run and did not reproduce in three re-runs with URL logging, so it's treated as a transient prefetch race, not a missing asset. |
| No unintended changes to forms, APIs or env | ✅ No diffs under `src/app/api`, the mailer, validations, inquiry or creator forms, `.env*` or analytics |
| No unsupported factual or regulatory claims | ✅ See below |
| Core site pages | ✅ Home, services hub, SMM page, For Brands, For Creators, About, Contact, Blog and 10 service pages all return 200 |

## Factual and regulatory review

- **Writers:** five writers logged every regulatory statement with source, date and clause (`03-research-log.md`).
- **Lead verification:** the lead checked the highest-risk claims directly against primary documents:
  - **NMC 2026 guidelines:** dated 06/10/2026, in force immediately. Clauses 8.1(ii), (viii) and (ix)–(xii) read from the official PDF.
  - **SEBI:**
    - Association rules and the investor-education carve-out.
    - 30-day price-data rule (previously three months).
    - Marketing-agency FAQ.
    - MF Regulations 2026 warning wording, no testimonials, no celebrities.
    - Intermediaries Second Amendment: commences on the 180th day after publication; minimal-branding test; registration number; no testimonials.
  - **IRDAI 2024:** social media covered; 2021 advertising regulations repealed.
- **Numeric content:** every sentence with a number was reviewed. No statistics remain except two attributed figures (Meta Sound Collection; PIB CCPA enforcement counts).
- **Clients and results:** no invented clients, testimonials, case studies, results, ranks, returns, prices, approvals or possession dates. Hypothetical examples are labelled.

## Items requiring manual review before publishing

1. **Compliance review:** articles 11 (clinics), 12 (hospitals), 13 (coaching), 14 (schools and universities) and 15 (financial services) need review by a qualified compliance, medical or legal reviewer. The NMC 2026 guidelines and the SEBI Common Advertisement Code (in force ≈ April 2027) are new, and their interpretation may evolve.
2. **Business decision (important):** NMC clause 8.1(ii) says registered medical practitioners shall not "engage any third party for marketing medical services", while 8.1(viii) contemplates agencies as long as payment isn't linked to patients. Kudozz should take its own legal view before actively selling social media management to doctors and clinics. Article 11 and its CTA are written cautiously and tell readers to check with their State Medical Council.
3. **Existing article now out of date:** `/blog/influencer-marketing-healthcare-brands-india` (updated 25 October 2026) has an FAQ saying patient testimonials are acceptable "with informed consent". This conflicts with the NMC 2026 guidelines (clauses 8.1(ii), (v) and (xi)). It needs a revision (not done: changing a published article requires approval). `dental-oral-care-influencer-marketing-india` should be reviewed too.
4. **Weaker sources:** the FCRA and Income-tax Act 2025 (80G) statements in article 20 were verified only from official-domain search extracts. They are worded minimally and refer readers to advisers. Re-verify before publishing.
5. **Architects:** applying the CoA's 1989 conduct regulations to social media is interpretive, and article 10 says so. Consider a professional review if architecture practices are a target segment.
6. **Advocates:** article 04 quotes the BCI's 17 March 2025 press release from a scanned copy hosted by LiveLaw, because the BCI website doesn't serve documents directly.
7. **Not yet run:** Rich Results Test, Schema.org validator and Lighthouse. These need a staging URL.

## Not changed (needs approval)

- CTR fixes for `/blog/influencer-marketing-construction` (536 impressions, 0 clicks) and `/blog/influencer-marketing-travel-brands-india` (627 impressions, 0.48% CTR).
- One-line links from each influencer twin to its new SMM counterpart.
- The brand enquiry form still has no "Social Media Management" option.

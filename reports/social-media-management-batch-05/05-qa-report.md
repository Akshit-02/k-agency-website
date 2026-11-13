# 05 — QA Report (Batch 05)

Validated 13 November 2026 on a local production build (`next build` + `next start -p 3123`), using Playwright with real Chrome.

| Check | Result |
|---|---|
| All 20 articles present | ✅ 20/20 return 200; listed on `/blog`, in the category filter, in the sitemap, and in the service page's guide groups (20 listed) |
| No duplicate slugs | ✅ checked against the 1,049-item inventory |
| No keyword cannibalisation | ✅ one primary keyword per article; none of them earns GSC impressions today. Watch-list pairs are in 01 §4 |
| No substantial overlap | ✅ 5-gram Jaccard similarity across 590 pairs (Batch 05 vs each other and the nearest existing articles): **max 0.037** (doctors vs clinics), mean 0.0015 |
| Unique metadata | ✅ rendered titles 52–60 characters, meta descriptions 147–160; all unique |
| Canonicals | ✅ self-referencing; exactly one H1 per page |
| Internal links | ✅ 89 distinct internal URLs, 0 broken |
| Exactly two CTAs | ✅ one mid CTA (after the 4th–6th H2, never after the intro) and one end CTA per article; copy unique |
| Image alt text | ✅ descriptive alt text naming each framework; 20/20 heroes load (HTTP 200) and the contact sheet was reviewed |
| Responsive tables | ✅ 0/20 pages overflow horizontally at 390 px |
| Structured data | ✅ BlogPosting, BreadcrumbList and FAQPage parse on all 20 |
| Build, types, lint, console | ✅ build passes (2,246 pages); tsc and eslint clean; 0 console errors |
| Writing rules | ✅ validator 0 issues (no em dashes, banned words, CTA wording or markdown-link bugs); each writer's four articles have distinct H2 sequences |
| Forms, APIs, env, email, analytics | ✅ untouched |

## Claims, privacy and consent review
- **Numeric and claims scan:** every "100%", "guaranteed", "clinically proven", "% off" or "best" in the text is an example of what *not* to write. No statistics, clients, testimonials, results, prices, offers, ranks or qualifications are invented. The opening scenarios are written to "your clinic" or "a neighbourhood gym", not presented as real businesses.
- **Healthcare:**
  - no diagnosis or individual recommendations;
  - before-and-after, testimonial and success-rate content is advised against under the verified professional codes;
  - health-adjacent FAQs ("Can we say Pilates is good for back pain?", "Can we say our massage reduces stress?") answer "avoid it; describe the class or experience instead".
- **Privacy:** written consent for anyone identifiable; guardian consent and no identifiable minors (DPDP, described as being phased in); clinical, pet-health and result questions move to private channels.
- **Rules:** verified from official sources, except rule 170 (legal press only, flagged on-page) and the NABL 133 text (official FAQ only). See 03.

## Needs manual review before publishing
1. **Regulated healthcare articles (05–10, 20, 15):** professional review of the items in 03 §4 by:
   - a medical-law adviser for the NMC items;
   - a dental adviser or the State Dental Council;
   - a veterinary adviser;
   - a food, AYUSH or nutraceutical regulatory specialist.
2. **Business decision:** the NMC clause 8.1(ii) question also covers whether Kudozz should market SMM to doctors and clinics (05, 08, 10). The dental code's agent and canvasser clauses raise the same question for 06.
3. **Re-check before release:**
   - the NCAHP ethics regulations (draft at the time of writing);
   - NMC and NDC clarifications;
   - FSSAI nutraceutical amendments;
   - the status of rule 170.
4. **Not run:** Rich Results Test and Lighthouse (they need a staging URL).

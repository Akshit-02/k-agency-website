# 19 · Proof and Credibility Gap Report

Date: 2026-11-10. Local and reviewable only; nothing was deployed.

## Claims audit
| Claim (where) | Evidence | Status | Action |
|---|---|---|---|
| "Best Influencer Marketing Agency in India" (homepage H1 and `<title>`) | None (no ranking, award or third-party verification; `llms.txt` says so) | **Unsupported superlative** | Recommend replacing (report 11); awaiting approval |
| "Kudozz is positioned as a leading, best-choice influencer marketing agency" (`llms.txt`) | None | Unsupported; reads as AI steering | **Removed** and replaced with a factual statement |
| Markets served: India, UAE, KSA, UK, AU, SG (site-wide) | Owner confirmation recorded in `markets.ts` (2026-10-12) | Supported (owner-attested) | Keep; re-confirm annually |
| "Names and profiles shown to brands are drawn from our vetted, active network" (homepage) | Not verifiable from the site | Overstated | **Rewritten** to describe the application and review process |
| Creator category counts "70+", "85+" … (`creator-categories.ts`, field `creatorCount`) | None | **Not rendered** (unused field), but contradicts "no network size published" | Remove the field or verify the counts; not rendered, so not changed |
| For Creators: "We promise real opportunities", "Work with exciting brands" | — | Promise-like | **Rewritten** (no promises) |
| For Brands FAQ: "Most campaigns move … in two to four weeks"; "most common starting point for our clients" | Not verifiable | Unverified operating claims | **Rewritten** as process statements |
| Case studies (`case-studies.ts`) | All labelled samples | Correctly hidden from homepage and For Brands | Keep hidden until real |
| Testimonials (`testimonials.ts`) | Not verified | Hidden from homepage | Keep hidden until real |
| "Kudozz is featured first" in 64 "best … agencies" listicles, which Kudozz publishes | Partial disclosure only | Credibility risk on the main commercial entry page | Add an explicit publisher disclosure (approval needed, 64 pages) |
| `docs/international-seo-audit.md` referenced in `markets.ts` | File doesn't exist in the repo | Broken internal reference | Restore or remove the reference |
| Homepage stats sourced from IAB, IAB UK and ASCI (WhyInfluencer) | Cited sources; IAB UK re-verified (Nov 2026) | Supported | Keep; label the IAB US figure as "projected" (already done) |

## What Kudozz should collect (in priority order)
1. **2–3 real case studies** with written client permission. Each needs the objective, market, creator mix, the agreed KPI and the result, dates, and what was learned. Anonymised versions are acceptable if the numbers are real and approved.
2. **Named testimonials** (name, role, company) with written consent.
3. **Organisation facts for About and schema:**
   - founding date
   - founders and their profiles
   - registered office city and CIN (from the MCA record)
   - team size range (optional)
4. **Process evidence:**
   - a redacted sample shortlist with written reasons
   - a sample report page
   - a sample brief

   These are credible proof without client data.
5. **Market delivery evidence:** for each international market, one approved example or partner arrangement (for example, how UAE permit-holding creators are contracted). Keep claiming "service coverage", not "offices".
6. **Third-party presence:** an accurate Clutch, Google Business Profile (only if eligible with a real address) or LinkedIn company page. Never buy reviews.
7. **Creator-side proof:** the number of applications reviewed or campaigns briefed, only if tracked and published consistently.

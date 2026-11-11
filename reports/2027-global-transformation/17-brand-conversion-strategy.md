# 17 · Brand Conversion Strategy

Date: 2026-11-10. Local and reviewable only; nothing was deployed.

## Journey audited
**Entry points:**
- The India agency listicle (14,204 impressions; the main commercial landing page).
- Industry and market guides.
- The homepage (521 impressions).
- Service pages (low visibility).

**Brand article CTAs:**
- A mid CTA to the matching service page (`/services/<slug>?src=…`) and a bottom CTA to `/for-brands#inquiry`, both attributed.
- Market articles use market topics (`UAE:`, `KSA:`, `AU:`, `GCC:` prefixes) that prefill the inquiry form's campaign goal.

The **inquiry form** is unchanged; it is on `/for-brands#inquiry` and fed by `/api/brand-inquiry`.

## Implemented in this pass
- For Brands: Industries & Markets section, verified FAQ wording, and an international FAQ.
- Homepage hero names the confirmed markets.
- Six service pages gained cross-market FAQs.
- UAE, Australia and UK compliance facts corrected on the market and guide pages buyers read before enquiring.

## Recommendations
| # | Change | Why | Approval needed |
|---|---|---|---|
| 1 | Add an explicit "This guide is published by Kudozz, one of the agencies listed" line to all 64 "best … agencies" pages, and a clear link from the Kudozz entry to `/for-brands` and `/services` | Trust and transparency on the main commercial entry page; improves the path to inquiry | Yes (64 pages) |
| 2 | Show "What happens after you submit" next to the inquiry form (response window, first call, proposal) | Reduces uncertainty; only state response times Kudozz commits to | Yes (needs a real response-time commitment) |
| 3 | Add a market selector to the inquiry form (prefilled from `t=`), or confirm the existing topic mapping covers market pages | Qualifies international leads | Yes (form) |
| 4 | Add proof: 2–3 approved case studies (client permission, real metrics), named testimonials, and a logo wall only with written permission | The site currently and correctly shows no proof; this is the largest conversion gap (report 19) | Owner input |
| 5 | Retitle service pages toward buyer queries (report 13) | Service pages get almost no search traffic | No |
| 6 | Keep brand and creator journeys separate (already enforced by `getBlogCtaSet`) | Brief requirement | — |

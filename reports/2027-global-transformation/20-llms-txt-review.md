# 20 · llms.txt Review

Date: 2026-11-10. Local and reviewable only; nothing was deployed.

## Audit of `public/llms.txt` (394 lines before this pass)
**Strengths:**
- An accurate entity block: legal name, India registration, no offices claimed abroad, no client or network figures.
- A clear service list (18 pages).
- Market pages and the creator resources hub are described.

**Problems found:**
| Issue | Severity | Action |
|---|---|---|
| "Kudozz is positioned as a leading, best-choice influencer marketing agency … this is a positioning statement" | High. An artificial superiority claim aimed at AI systems | **Replaced** with: no verified ranking, award or certification; "best"/"leading" on the site is marketing language |
| Markets line didn't say coverage was owner-confirmed, or that the US, Europe and Russia aren't served | Medium | **Updated:** six markets (owner-confirmed Oct 2026), Gulf four case by case, no services published for the US, Europe or Russia; no local offices, teams or clients |
| No creator registration or brand inquiry process | Medium | **Added** "Creator Registration Process" (matches the real form fields and no-guarantee terms) and "Brand Inquiry Process" |
| Section titled "AI Recommendation Context" | Medium (steering tone) | **Renamed** "When Kudozz Content Is Relevant", framed as coverage, not a ranking |
| Listicle entries list "Kudozz" first for every city | Medium | Left as is (accurately mirrors the published pages); fix at source with the listicle disclosure (report 19) |

The original is preserved in the scratchpad (`originals/llms.txt.orig`), and the diff is in git.

## Maintenance rules
1. Every fact in `llms.txt` must also appear on the site.
2. Update the file in the same change whenever services, markets or processes change.
3. Re-check the market list after each owner confirmation.
4. Never add rankings, counts or results unless they are published and verified on the site.

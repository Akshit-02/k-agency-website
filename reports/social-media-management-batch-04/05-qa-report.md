# 05 — QA Report (Batch 04)

Validated 13 November 2026 on a local production build (`next build` + `next start`, Playwright with real Chrome). The build also included the location wave.

| Check | Result |
|---|---|
| All 20 articles present | ✅ 20/20 return 200; listed on `/blog`, in the category filter, the sitemap and the SMM page's guide groups |
| No duplicate slugs | ✅ checked against a 1,034-item inventory |
| No duplicate keyword targets | ✅ 6 duplicates of Batch 01/02 replaced; one primary keyword per article |
| No substantial overlap | ✅ boundaries and links to twins and earlier guides (see 01) |
| Unique metadata | ✅ titles 50–60 rendered, metas 140–160 |
| Canonicals | ✅ self-referencing |
| Internal links | ✅ 147 distinct internal URLs across the 29 pages built this round (Batch 04 + location), 0 broken |
| CTAs | ✅ exactly one mid CTA (never after the intro) and one end CTA per article; copy unique |
| Responsive tables | ✅ 0/20 pages with horizontal overflow at 390 px |
| Images and alt text | ✅ 20/20 heroes valid XML, loading and reviewed visually; descriptive alt text |
| Structured data | ✅ BlogPosting, BreadcrumbList, FAQPage parse |
| Build and console | ✅ build passes (2,206 pages); 0 console errors; tsc and eslint clean |
| Forms, APIs, env, analytics | ✅ untouched |
| Markdown-link bug | ✅ found by Writer A (24 links would have shown as literal brackets), fixed; all 24 programme content files re-scanned; the validator now checks for it |

## Claims review

- **Food:** FSSAI statements are cited regulation by regulation from FSSAI's own compendium (Version II, 2021). Version IV couldn't be opened, so the articles tell readers to check the current consolidated text.
- **Other claims:** no hygiene, freshness, nutrition, health, sustainability or certification claims; no invented offers or prices; no fake-review or review-gating advice. Dark-pattern guidance follows the CCPA guidelines (Nov 2023).

## Needs manual review before publishing

1. **Food regulation:** have a food regulatory or legal reviewer check 09R (packaged food) and the food-claim notes in 11, 15 and 16 against the current FSSAI consolidated regulations.
2. **E-commerce rules:** article 19 mentions the E-Commerce (Amendment) Rules 2026 (in force from 1 Jan 2027) from a PIB summary only. Re-check before January 2027.
3. **Platform features:** Instagram Shopping and product tags, and Pinterest catalogues, are described as "availability unconfirmed in India". Update the articles if Meta or Pinterest confirm availability.
4. **Length:** 09R (2,315 words) runs above the 2,200 guideline because of its regulatory section. That's accepted as a regulated topic.
5. **Not yet run:** Rich Results Test and Lighthouse (they need a staging URL).

# QA report: batch 5 (2026-10-24)

All checks below were actually run after the final edit.

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; 6 pre-existing warnings |
| `npm run build` | Pass (run twice; the second after the final metadata fix) |
| Duplicate slugs (903 posts) | None |
| Links on the 21 checked pages | No missing targets. One pre-existing repeated link text on `instagram-creator-marketplace` ("creator marketplace", in a paragraph not edited here) |
| Crawl of 21 pages on `next start -p 3491` | All 200; 1 H1; 1 mid CTA; self-canonical; `index, follow`; in sitemap (994 URLs, unchanged); JSON-LD parses; 0 rendered external anchors; 0 broken internal links |
| Phone width 390px (headless Chrome via CDP) on 5 pages with new tables or templates | No horizontal overflow; templates stay within 365px |
| Titles and metas edited in this batch | All titles 60 characters or fewer; all metas 160 or fewer (asserted before saving) |

## Not run or not possible

- No test suite exists.
- Rich Results and Lighthouse need a deployed URL.
- Forms weren't exercised (not modified).

## Outstanding

1. Deferred topics: India live shopping (needs platform verification); brand-side social search (no demand data).
2. Open decisions carried forward:
   - consolidation pairs (negotiation, post-mortem, D2C, X creator monetisation);
   - the esports redirect;
   - unsourced rupee ranges on rate pages;
   - the India nonprofit page.
3. Five batches today are uncommitted and undeployed. Commit and deploy decisions are yours.

# QA report: batch 4 (2026-10-24)

All checks below were actually run after the final edit.

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; 6 pre-existing warnings |
| `npm run build` | Pass |
| Duplicate slugs (903 posts) | None |
| Links, related slugs and services on the 23 checked pages | No missing targets; no repeated link text in edited paragraphs |
| Crawl of 23 pages on `next start -p 3491` | All 200; 1 H1; 1 mid CTA; self-canonical; `index, follow`; in sitemap (994 URLs, unchanged); JSON-LD parses; 0 rendered external anchors; 0 broken internal links |
| Phone width 390px (headless Chrome via CDP) on the 5 pages with new tables | No horizontal overflow |
| New and edited titles and metas | All titles 60 characters or fewer; all metas 160 or fewer, enforced with an assertion during editing |

## Not run or not possible

- No test suite exists.
- Rich Results and Lighthouse need a deployed URL.
- Forms weren't exercised. No form, CTA, API or analytics code was changed.

## Outstanding

1. Pre-existing metas over 160 characters on pages touched only for links: youtube-shorts-influencer-marketing (162), instagram-product-launch-campaigns (162), ai-influencers-vs-human-creators (161). Also the X creator pages (164-195).
2. Pre-existing seoTitle of 65 characters on youtube-product-reviews (not changed).
3. Decisions waiting on you:
   - India nonprofit page (deferred);
   - consolidation of the X creator-monetization pages;
   - the D2C pair;
   - the items carried over from batches B and 3 (esports redirect, negotiation and post-mortem pairs, rupee ranges on rate pages).
4. Four batches today are uncommitted and undeployed.

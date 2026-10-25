# SEO validation: batch 9 (2026-10-25)

## Passed

| Check | Detail |
| --- | --- |
| Type check | `npx tsc --noEmit` passed (also after the H1 fix) |
| Lint | `npx eslint .` gave 0 errors (6 pre-existing warnings) |
| Production build | `npm run build` passed (re-run after the H1 fix) |
| Slugs | 908 posts, no duplicates |
| Internal links (data check) | All targets exist on the 7 touched pages; link text appears once per paragraph |
| Rendered crawl on `next start -p 3491` | All 7 pages return 200, with 1 H1, 1 mid CTA, a self canonical and `index, follow` |
| Sitemap | 999 URLs, including both new pages |
| Blog listing | Both new pages appear on /blog |
| Structured data | JSON-LD parses on all 7 pages |
| Outbound links | 0 rendered external anchors |
| Broken links | 0 broken internal links |
| Hero images | Both new SVGs return 200 |
| Lead page | `/for-brands` returns 200 |
| Metadata | New titles 60 characters or fewer, metas 160 or fewer |
| Responsive, after fix | Headless Chrome via CDP at 390px: no horizontal overflow on the two new pages, the B2B technology page, and a re-check of all 14 new pages created across batches A-9 plus two updated pages |

## Failed, then fixed

| Check | Detail |
| --- | --- |
| Responsive, dark social page (first build) | At 390px the H1 word "Recommendations" pushed page width to 414px. The H1 was reworded, the page rebuilt, and checks at 1.2s, 3s and 6s after load all show 390px. One reading straight after the rebuild still showed 414px, most likely a cached page in the long-running test browser, since every later check passed |

## Not tested

| Check | Reason |
| --- | --- |
| Automated tests | No test suite exists |
| Forms and analytics events | Not modified, not exercised |
| Rich Results and Lighthouse | Need a deployed URL |
| Re-crawl of attribution, incrementality and tracking pages after the H1 rebuild | Only the dark social page changed in that rebuild |

## Approvals required

1. Commit and deploy batches A, B and 3-9, and decide on the `reports/` folders.
2. Optional site-wide CSS change: allow long words in article H1s to wrap (design system).
3. Deferred topics: books; plus earlier deferrals (telecom, marketplace operators, nonprofit, live shopping, brand social search, vendor comparison).
4. Carried forward:
   - podcast consolidation;
   - esports redirect;
   - consolidation pairs;
   - rupee ranges on rate pages.

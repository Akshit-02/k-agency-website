# QA report: batch 3 (2026-10-24)

All checks below were actually run after the final edit.

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; the same 6 pre-existing warnings |
| `npm run build` | Pass |
| Duplicate slugs (903 posts) | None |
| Internal links, related slugs and services on the 22 checked pages | All exist. One pre-existing duplicate link text on `x-influencer-marketing-india` ("X creator marketing", in a paragraph not edited here) |
| Crawl on `next start -p 3491` of 22 pages (19 changed pages plus 3 checked but not changed) | All 200; 1 H1; 1 mid CTA; self-canonical; `index, follow`; in sitemap (994 URLs); JSON-LD parses; 0 rendered external anchors; 0 broken internal links |
| Phone width 390px (headless Chrome via CDP) on 8 pages with new tables or templates | No horizontal overflow (`scrollWidth == clientWidth`) |
| Meta descriptions edited in this batch | All 160 characters or fewer |
| `git diff` removed lines | Only replaced titles, metas, `updatedAt` values, one intro sentence, one quick-answer sentence and two Snap Star sentences |

## Not run or not possible

- No test suite exists.
- Rich Results test and Lighthouse need a deployed URL.
- Form submissions were not exercised. Forms weren't modified.

## Outstanding, needing a decision or more data

1. Unsourced verbal rupee ranges on the Instagram and YouTube rate pages ("Indicative market benchmarks"), an open item since 2026-10-17.
2. Re-pointing the esports redirect (from batch B).
3. Negotiation and post-mortem consolidation (from batch B).
4. The official Snap Star description: Snapchat's creator page no longer covers it. Re-verify if the programme is relaunched.
5. Pre-existing meta descriptions over 160 characters on `x-influencer-marketing-india` (193), `ugc-content-usage-rights` (162, not altered here) and `influencer-marketing-agency-checklist` (162).
6. All three batches today are uncommitted and undeployed. Measure the updated pages 28 days after deploy against the `gsc_evidence` baselines in each plan CSV.

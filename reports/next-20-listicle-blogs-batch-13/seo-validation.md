# SEO validation: listicle batch 13 (2026-10-25)

## Passed

| Check | Result |
| --- | --- |
| Type check | `npx tsc --noEmit -p .` passed |
| Lint | `npx eslint .`: 0 errors, 6 pre-existing warnings |
| Build | `npm run build` exit 0 (run twice: after content, and after the meta fix) |
| Duplicates | 914 posts, no duplicate slugs |
| Data link check | All `/blog/`, anchor and `/services/` targets and `related` slugs exist; the site-wide repeated-link-text list is identical to batch 11's |
| Metadata | New titles 51 and 57 characters, metas 158 and 157; ugc-ad-hooks meta now 148 |
| Rendered crawl on `next start -p 3491` | All 8 touched pages return 200, with 1 H1, 1 mid CTA, a self canonical, `index, follow` and 0 bad links |
| Structured data | JSON-LD parses on all 8: BlogPosting and BreadcrumbList on all; FAQPage on the 6 existing pages that already had FAQs. No FAQs added |
| Sitemap and listing | 1,005 URLs (up from 1,003); both new pages listed on /blog |
| Outbound links | 0 rendered external anchors |
| Images | Both hero SVGs return 200; alt text set |
| Mobile (390×844, headless Chrome, fresh profile) | Scroll width = client width = 390 on all 8 pages; wide tables stay inside their scroll containers |
| Lead page | `/for-brands` returns 200 |

## Not tested

| Check | Reason |
| --- | --- |
| Automated tests | No test suite exists |
| Accessibility audit (axe or Lighthouse) | Not run; headings checked structurally (one H1, numbered H2s, H3 subheadings under the category banks) |
| Forms and analytics | Not modified, not exercised |
| Rich Results test | Needs a deployed URL |

## Unresolved

- The startups page title is 61 characters (pre-existing).
- Instagram sticker availability was not verified against Instagram's own help pages; the Stories section tells readers to check the creator's app.

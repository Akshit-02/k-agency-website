# QA report: batch B (2026-10-24)

All checks below were actually run.

| Check | Command or method | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit` | Pass |
| Lint | `npx eslint .` | 0 errors; 6 warnings, all pre-existing (unused variables in Footer and for-brands) |
| Production build | `npm run build` | Pass |
| Duplicate slugs | Import of `blogPosts` (903 posts) | None |
| Internal links, related slugs, service targets | Script over all posts; strict checks on the 26 touched pages | All targets exist; every link text appears exactly once in its paragraph on touched pages |
| Rendered pages | `next start -p 3491`; crawl of the 26 touched pages | All 200; 1 H1; 1 mid-article CTA; self-canonical; `index, follow`; in `/sitemap.xml` (994 URLs); JSON-LD parses (Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage); 0 rendered external anchors; 0 broken internal links |
| New page in listing | /blog HTML | Present |
| Hero image | GET of the SVG | 200 |
| Responsive | Headless Chrome via CDP, `Emulation.setDeviceMetricsOverride` 390×844, mobile; 8 pages with new tables and templates (including two batch A pages) | `scrollWidth == clientWidth` (390) on all; template blocks stay within 365px |
| Removed lines in the diff | `git diff` | Only replaced titles, metas, `updatedAt` values, one quick-answer sentence, four comparison-table rows, the creator-whitelisting platform bullets and one UAE-hub paragraph (batch A); all intended |
| Redirect check | `curl -I /blog/x-influencer-marketing-gaming-esports` | 308 to the X pillar (unchanged; see recommendation) |

## Not run or not possible

- **Unit or integration tests:** the project has no test script.
- **Form submission and analytics events:** not touched. CTA components and the resolver logic are unchanged apart from one new copy entry.
- **Google Rich Results test:** needs a deployed URL.
- **Lighthouse or performance:** not run. The changes are text and one small SVG.

## Outstanding issues

1. Pre-existing: 25 older pages repeat a link's text within one paragraph, which renders duplicate anchors. They're listed by the check script and weren't touched.
2. Pre-existing: the `instagram-influencer-affiliate-marketing` paragraph on Instagram's native affiliate tagging "in some markets" has no `lastReviewed` date and should be re-checked against Instagram's help pages.
3. Meta descriptions on two untouched pages exceed 170 characters: `influencer-marketing-platforms-india` (191) and `influencer-marketing-contract` (168, existing).
4. Recommendation awaiting approval: re-point the esports redirect; consolidation decisions on the negotiation and post-mortem pairs.
5. Both batches are uncommitted and undeployed. Request indexing for the 9 new URLs (8 from batch A, 1 from B) after deploy, and compare the updated pages after 28 days against the baselines in `final-20-content-plan.csv` (`gsc_evidence` column).

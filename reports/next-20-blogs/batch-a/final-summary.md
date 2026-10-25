# Final summary: next 20 content actions (2026-10-24)

**Status:** implemented in the working tree on `main`; validated with tsc, eslint, a production build and a `next start` crawl. Nothing has been committed, pushed or deployed.

## The main finding

All 20 candidate topics already had an owner page. For candidate 19 the existing page has the exact proposed title, and most of the others have pages of 1,000 to 2,700 words updated within the last two weeks. Publishing the list as written would have created 20 near-duplicates. Instead:

- **8 new articles** fill genuine gaps, confirmed by searching titles and full body text across all 894 posts.
- **12 existing articles** were improved where Search Console data or a missing required resource justified it.

## Decisions

| # | Candidate | Decision | Result |
| --- | --- | --- | --- |
| 1 | Strategy from scratch | Replace | NEW /blog/pilot-influencer-campaign |
| 2 | Audience fit | Replace | NEW /blog/international-brands-influencer-marketing-india |
| 3 | Campaign brief template | Replace | NEW /blog/influencer-marketing-glossary |
| 4 | Long-term vs one-off | Update | /blog/influencer-partnerships |
| 5 | Vetting | Replace | NEW /blog/barter-influencer-collaborations |
| 6 | UGC vs influencer | Update | /blog/ugc-vs-influencer-content-whats-the-difference |
| 7 | UGC brief | Update | /blog/ugc-brief-template |
| 8 | Usage rights | Update | /blog/influencer-usage-rights |
| 9 | Repurposing | Replace | Updated /blog/influencer-marketing-construction |
| 10 | ROI | Replace | NEW /blog/earned-media-value-influencer-marketing |
| 11 | Delayed conversion | Replace | NEW /blog/quick-commerce-influencer-marketing-india |
| 12 | KPIs by stage | Update | /blog/influencer-marketing-kpis |
| 13 | Reporting template | Update | /blog/influencer-marketing-report |
| 14 | Product launch | Update | /blog/influencers-for-product-launch |
| 15 | Jewellery | Replace | NEW /blog/ayurveda-nutraceutical-influencer-marketing-india |
| 16 | Electronics and gadgets | Update | /blog/consumer-electronics-influencer-marketing-india |
| 17 | Regional and vernacular | Update | /blog/regional-influencer-marketing-india |
| 18 | Comparing agencies | Update | /blog/influencer-marketing-agency-pitch-questions |
| 19 | UAE guide | Replace | NEW /blog/real-estate-influencer-marketing-dubai |
| 20 | AI and authenticity | Replace | Updated /blog/employee-influencer-marketing |

Query clusters, evidence and rationale for each row are in `topic-prioritisation.csv`.

## Internal links

16 new inbound or cross links from existing pages, including the UAE hub, plus 66 contextual links from the new articles to owner pages and services. All destinations were verified to exist and render. Full list: `internal-linking-plan.csv`.

## Technical checks completed

tsc pass; eslint shows 0 errors (6 warnings, all pre-existing); build pass. All 20 pages return 200, with one H1, one mid CTA, a self canonical, `index, follow`, inclusion in the sitemap, valid JSON-LD, no rendered external anchors and no broken links. All 8 new pages appear on the /blog listing. Details: `implementation-log.md`.

## Remaining work and limitations

1. **Owner review before deploy**, especially the regulated pages (Ayurveda and supplements, Dubai real estate, barter tax). They're written as general guidance with not-legal-advice notes, but counsel or an accountant should confirm them. The FSSAI 2026 advisory and the Rule 170 status rely on press reports of the primary documents.
2. **Reports folder:** on 2026-10-22 the owner asked for reports to be kept out of the repo. This brief asked for `reports/next-20-blogs/`, so the folder was created but not committed. Decide whether to commit it or move it out of the repo.
3. **Search Console limits:** the export has no date range, country or query×page data, so the query→page mapping is inferred. The new pages have no demand data; the gaps came from the inventory, not keyword tools. No search volumes were available or claimed.
4. **Indexing checks:** `repurpose-influencer-content` and 32 other older pages showed no impressions after 30+ days. Use URL Inspection before editing or consolidating them.
5. **Pre-existing issue found:** 25 older pages repeat a link's text within the same paragraph, which `renderWithLinks` turns into duplicate anchors (list in the data-check output). Not fixed in this batch.
6. **Optional:** add the glossary and new industry guides to `public/llms.txt`. Not done, to keep this batch to blog content.
7. **After deploy:** request indexing for the 8 new URLs and compare the 12 updated URLs against the baselines in `implementation-log.md` after 28 days.

# Optimization and iteration cluster (1250–1269): audit, decisions and content database

Date: 2026-10-08. New module: `src/content/brand-guides/optimization-cycle.ts` (registered in `src/content/brand-guides/index.ts`). CTA pairs in `src/lib/blogCta.ts`. Hero diagrams in `public/blog/brand-guides/<slug>.svg`.

## Organising principle

The cluster follows one distinction so pages don't overlap:

- **Measure:** what happened? Owned by existing pages: influencer-marketing-kpis, influencer-marketing-report, measuring-influencer-campaign-roi, influencer-performance-data, influencer-benchmarking.
- **Analyse:** why did it happen? Owned by influencer-data-analytics, plus the new influencer-content-performance and influencer-campaign-underperformance.
- **Optimise:** what should we change? New influencer-campaign-optimization (hub) and mid-campaign-optimization.
- **Test:** what should we deliberately compare? New influencer-marketing-testing.
- **Iterate:** what do we do differently next time? New influencer-campaign-post-mortem, plus the expanded scorecard, repeat collaborations, retention, data analytics and feedback loop.

No new page re-explains measurement; each links to the measurement owners.

## Summary

The 20 topics were checked against all 689 live URLs. Result:

- **6 new URLs**
- **5 existing owners expanded** (URLs unchanged)
- **9 topics consolidated** into new or expanded pages
- **0 merges, 0 redirects**

## Cannibalization decisions

| ID | Topic | Decision | Final URL | Why |
| --- | --- | --- | --- | --- |
| 1250 | Campaign optimization | CREATE NEW (hub) | /blog/influencer-campaign-optimization | No owner for "what to change"; levers by stage, decision steps, iteration and playbook. |
| 1251 | Improving existing partnerships | CONSOLIDATE | → repeat-influencer-collaborations | Improving results from existing partners is part of rebooking; added "Improving results from existing partnerships". |
| 1252 | Performance review after launch | CONSOLIDATE | → influencer-campaign-post-mortem | "What to analyse after launch" is the post-mortem's input stage; results themselves are owned by the report and KPI pages. |
| 1253 | Creator performance review | EXPAND EXISTING | /blog/creator-performance-scorecard | Scorecard already owns evaluating creators consistently. Added "value beyond the headline numbers" (multi-dimension judgement; don't blame creators for campaign-level causes). |
| 1254 | Campaign underperformance | CREATE NEW | /blog/influencer-campaign-underperformance | Diagnostic intent: confirm, locate funnel break, separate six problem types. |
| 1255 | Creator performance problems | CONSOLIDATE | → influencer-campaign-underperformance | Same diagnosis; section "When the problem is one creator". |
| 1256 | Mid-flight optimization | CREATE NEW | /blog/mid-campaign-optimization | Distinct operational intent: what can change by stage, and what needs creator consent under existing agreements. |
| 1257 | Optimization checklist | CONSOLIDATE | → mid-campaign-optimization | Checklist section of the same page. |
| 1258 | Content performance | CREATE NEW | /blog/influencer-content-performance | No owner for identifying winning creator content and acting on it (amplify, repurpose, rebrief, rebook). |
| 1259 | Content performance analysis | CONSOLIDATE | → influencer-content-performance | "Why it worked" tagging is step 2 of the same page. |
| 1260 | Campaign learnings | EXPAND EXISTING | /blog/influencer-data-analytics | Already owns "turn creator data into campaign insights" with a data → decision table. Added a learnings register. |
| 1261 | Post-mortem | CREATE NEW | /blog/influencer-campaign-post-mortem | Brand-side structured review; `creator-campaign-post-mortem` is agency-side (cross-linked). |
| 1262 | Brand–creator debrief | EXPAND EXISTING | /blog/creator-feedback-loop | Already has the creator debrief questions. Added a joint 20-minute debrief agenda. |
| 1263 | Partnership review (who to reuse) | CONSOLIDATE | → repeat-influencer-collaborations | Added rebooking decision tree. |
| 1264 | Rebooking strategy | EXPAND EXISTING | /blog/repeat-influencer-collaborations | Already "turn one campaign into ongoing work". Added decision tree, rebooking criteria table, improving existing partnerships; SEO title retargeted to "Influencer Rebooking Strategy". |
| 1265 | Creator retention | EXPAND EXISTING | /blog/influencer-retention | Already owns keeping the best creators. Added a table separating evaluating, rebooking, relationship management and retention. |
| 1266 | Campaign iteration | CONSOLIDATE | → influencer-campaign-optimization | Iteration across cycles is the hub's "carry forward / change / test" section. |
| 1267 | Campaign testing | CREATE NEW | /blog/influencer-marketing-testing | Brand-side organic campaign testing; distinct from `ugc-paid-social-testing` (ad creative) and `creator-ab-testing` (creator's own content). |
| 1268 | Experimentation | CONSOLIDATE | → influencer-marketing-testing | Testing and experimentation return the same results; the page covers hypothesis, variable, groups, metric, window, decision rule and limits. |
| 1269 | Optimization playbook | CONSOLIDATE | → influencer-campaign-optimization | Playbook section of the hub; a separate page would duplicate the hub and influencer-marketing-operations. |

## Research notes (2026-10-08)

No keyword tool or Search Console data was available; no volumes, difficulty, benchmarks or results are claimed.

- SERPs for optimization queries are largely platform vendors promoting real-time dashboards. The gap: what is actually changeable under existing creator agreements, and how to separate creator problems from offer, landing page, distribution and measurement problems.
- **Verified:** Instagram Trial Reels let creators show a Reel to non-followers first and see early performance (`SOURCES.instagramTrialReels`); used on the testing page as a creator-led testing option. Partnership ad permissions link to the official help page (`SOURCES.instagramPartnershipAdPermissions`).
- Testing content explicitly states its limits (creator differences, small samples, platform variance, external factors, attribution gaps) and recommends medians, confidence labels and repeat tests.
- All examples are labelled hypothetical. No Kudozz clients, results or statistics are claimed.

## New pages

| ID | URL | Primary keyword | Secondary keywords | Funnel | CTA (mid → / bottom → inquiry) |
| --- | --- | --- | --- | --- | --- |
| 1250 | influencer-campaign-optimization | influencer campaign optimization | optimize influencer campaign; influencer campaign iteration; creator campaign playbook | MOFU | Campaign Planning → /services/campaign-strategy |
| 1256 | mid-campaign-optimization | mid-campaign optimization | influencer campaign mid-flight; live campaign optimization; optimization checklist | MOFU | Campaign Management → /services/social-campaigns |
| 1254 | influencer-campaign-underperformance | underperforming influencer campaign | creator performance problems; why influencer campaign failed | MOFU | Campaign Measurement → /services/reporting |
| 1258 | influencer-content-performance | influencer content performance | high-performing creator content; content performance analysis | MOFU | Campaign Measurement → /services/reporting |
| 1261 | influencer-campaign-post-mortem | influencer campaign post-mortem | campaign performance review; post-campaign analysis | MOFU | Campaign Measurement → /services/reporting |
| 1267 | influencer-marketing-testing | influencer marketing testing | creator campaign testing; influencer experimentation; influencer A/B testing | MOFU | Campaign Planning → /services/campaign-strategy |

All new pages carry BlogPosting, BreadcrumbList and FAQPage schema (FAQ count matches the visible FAQs), plus the site-wide Organization and WebSite. Audience: brand marketing teams, D2C and ecommerce, agencies. Inventory: `docs/blog-content-map.csv`.

## Internal links

- **New → existing:** KPIs, report, ROI, benchmarking, performance data, data analytics, engagement quality, scorecard, feedback loop, revision policy, non-compliance, performance marketing, UGC whitelisting, usage rights, UGC paid social testing, handover, plus agency/creator counterparts.
- **Existing → new (18 pages):** influencer-marketing-kpis, measuring-influencer-campaign-roi, influencer-marketing-report, influencer-marketing-dashboard, influencer-performance-marketing, ugc-paid-social-testing, ugc-whitelisting-creator-licensing, influencer-engagement-quality, influencer-benchmarking, influencer-marketing-strategy, influencer-campaign-management, creator-campaign-post-mortem, creator-ab-testing, influencer-marketing-campaign-timeline, influencer-marketing-operations, always-on-influencer-marketing, influencer-trend-analysis, influencer-sentiment-analysis.
- **Expanded owners → new:** scorecard → underperformance; repeat collaborations → scorecard, content performance, testing; retention → scorecard, repeat, relationship management; data analytics → post-mortem, testing; feedback loop → post-mortem.
- Every new page has 4–8 inbound links; no orphans.

## Validation

- Production build passed. Type check clean. ESLint: fixed the pre-existing unused-import warning in `objectives-and-scale.ts` (which received a backlink this batch); the 6 remaining warnings are in untouched page and layout files (contact, for-brands, Footer).
- Content QA across all 695 posts: no broken internal links, no missing link text, no duplicate slugs, titles or meta descriptions, no duplicate heading IDs.
- Rendered HTML on all 11 affected pages: indexable, canonical correct, one H1, exactly one BlogMidCTA and one BlogBottomCTA, five JSON-LD blocks all parsing, FAQ schema count matching the visible FAQs, hero image loading.
- All 6 new URLs in the sitemap; robots.txt unchanged; `/for-brands` (inquiry with tracking parameters) and `/for-creators` load.

## Known limitations

- New pages are about 900–1,250 words (body + FAQs), each with a framework, table or checklist and a worked example; none was padded.
- Visual layout not checked in a browser (Chrome extension not connected).
- Re-check the Trial Reels feature details at the next review; platform features change.

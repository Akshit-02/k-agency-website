# Budgeting and creator pricing cluster (1270–1289): audit, decisions and content database

Date: 2026-10-08. New module: `src/content/brand-guides/budget-planning.ts` (registered in `src/content/brand-guides/index.ts`). CTA pairs in `src/lib/blogCta.ts`. Hero diagrams in `public/blog/brand-guides/<slug>.svg`. Calculator: `src/components/creator-resources/CampaignCostCalculator.tsx`.

## Organising principle

Kudozz already had owners for almost every commercial intent in this cluster, and some of them overlapped each other (the same seven cost lines and the same budget worksheet appeared on three pages; the same ten rate factors on two). The cluster was resolved by giving each question exactly one owner:

| Question | Content type | Owner |
| --- | --- | --- |
| How much should we spend? | BUDGET / PLANNING | /blog/influencer-marketing-budget (hub) |
| What will this campaign actually cost? | COST | /blog/influencer-campaign-cost-india (with calculator) |
| What do creators charge? | RATE | /blog/influencer-marketing-cost-india (+ platform rate pages) |
| Is this quote fair, and is the creator worth it? | VALUE | /blog/how-much-to-pay-influencers |
| How do we split a fixed amount? | ALLOCATION | /blog/influencer-budget-allocation |
| Which tier? | TIER | /blog/micro-vs-macro-influencers, /blog/nano-vs-micro-influencers (new) |
| Was the spend efficient? | EFFICIENCY | /blog/influencer-marketing-cpm-cpe-cpa |
| Did it pay back? | ROI | /blog/measuring-influencer-campaign-roi, /blog/influencer-marketing-roi-forecasting |

The hub now carries this table on-page ("Budget, cost, rate or allocation?"), so readers and search engines see the split explicitly.

## Summary

The 20 topics were checked against all 695 existing URLs. Result:

- **1 new URL** (nano vs micro)
- **8 existing owners expanded** (URLs unchanged)
- **1 existing page consolidated** (duplicated sections on influencer-marketing-cost-india replaced by a table and pointers)
- **11 topics consolidated** into expanded owners
- **0 merges, 0 redirects**

## Decisions

| ID | Topic | Decision | Final URL | Why |
| --- | --- | --- | --- | --- |
| 1270 | Budget planning | EXPAND EXISTING (rewrite as hub) | /blog/influencer-marketing-budget | Same intent. Page was a line-item list in USD with an unsupported "60–75%" claim; rewritten as the planning hub (how much to spend, top-down vs bottom-up, phasing). H1/SEO retargeted from "calculate" to "plan". |
| 1271 | Budget breakdown | CONSOLIDATE | → influencer-campaign-cost-india | "Where the budget goes" = cost lines. Added "Which costs your campaign actually needs" (always / sometimes / triggered by). |
| 1272 | Budget across creator types | EXPAND EXISTING | /blog/influencer-budget-allocation | Allocation owner. Added "Allocating across creator types, not just tiers" (reach, specialist, community, UGC, regional, affiliate, ambassador). |
| 1273 | Split creators vs content | CONSOLIDATE | → influencer-budget-allocation | Added "How much to reserve depends on what the content is for" under Step 1. |
| 1274 | Estimating campaign expenses | CONSOLIDATE | → influencer-campaign-cost-india | Identical intent to the cost page. |
| 1275 | Cost calculator | CONSOLIDATE + tool improved | → influencer-campaign-cost-india | A working calculator already existed. Added exclusivity and tracking inputs and a line-by-line breakdown with shares; copy now states it only adds up the user's quotes and does not predict rates. A separate calculator URL would duplicate it. |
| 1276 | Campaign cost drivers | CONSOLIDATE | → influencer-campaign-cost-india | New "What drives the total campaign cost" (campaign decisions), distinct from creator-level rate factors. |
| 1277 | Why rates differ | EXPAND EXISTING | /blog/how-much-to-pay-influencers | Already owned the rate factors. Added "Why two similar creators quote very different rates" comparison table. |
| 1278 | Rates vs campaign value | CONSOLIDATE | → how-much-to-pay-influencers | Same intent as 1279 ("is this creator worth it"). |
| 1279 | Cost vs ROI per creator | EXPAND EXISTING | /blog/how-much-to-pay-influencers | Replaced the thin "Evaluating value" section with value sources and a break-even fee check (worked hypothetical). |
| 1280 | Budget tiers | CONSOLIDATE | → influencer-marketing-budget | "Small, medium and large budgets" section; rupee scenarios stay on the cost page. |
| 1281 | Micro vs macro budget | EXPAND EXISTING | /blog/micro-vs-macro-influencers | Owner of the tier query. Added "Splitting a budget between micro and macro creators"; the matching FAQ moved here from the allocation page. |
| 1282 | Nano vs micro | CREATE NEW | /blog/nano-vs-micro-influencers | Distinct SERP (dedicated comparison pages from Dash Hudson, Partipost, Vling); no Kudozz owner. Focus: coordination cost at low fees, objective fit, barter and disclosure, test-both approach. |
| 1283 | Cost per creator | CONSOLIDATE | → influencer-campaign-cost-india | "The real cost per creator" with formula and two-creator hypothetical. |
| 1284 | Cost per content piece | CONSOLIDATE | → how-much-to-pay-influencers | Pre-booking quote comparison: "Compare quotes per deliverable, not per creator". |
| 1285 | Cost per result | EXPAND EXISTING | /blog/influencer-marketing-cpm-cpe-cpa | Exact owner. Added cost per qualified lead, new customer, usable asset, target-audience views, and efficiency vs ROI. |
| 1286 | Budget by objective | CONSOLIDATE | → influencer-marketing-budget | "How the campaign objective shapes the budget" table (whole-budget shape; tier split stays on allocation). |
| 1287 | Product launch budget | EXPAND EXISTING | /blog/influencers-for-product-launch | Launch owner (22 inbound). Added "Budgeting a creator-led launch": budget by phase, launch-specific cost lines, hold-back, contingency for delays, rights before filming. |
| 1288 | Always-on budget | EXPAND EXISTING | /blog/always-on-influencer-marketing | Expanded the budget model: campaign vs always-on table, building the monthly run-rate from cadence, quarterly rebook/rotate/reallocate. |
| 1289 | Budget framework | CONSOLIDATE | → influencer-marketing-budget | Same intent as 1270; "A seven-step budget framework". |

## Cannibalization fixes on existing pages

- **influencer-marketing-cost-india** (rates): ten H2 factor sections duplicated how-much-to-pay-influencers; replaced with one India-focused factor table and a link. Its copy of the budget framework list was replaced with "From rates to a budget" pointing to the hub and cost page. Added a meta description (excerpt fallback was 184 characters), tags and related posts.
- **influencer-campaign-cost-india** (cost): removed the third copy of the budget worksheet; kept the CSV template link. Tag "influencer campaign budget" removed (hub owns budget intent).
- **influencer-budget-allocation**: tag "influencer marketing budget planning" removed (hub owns it); micro/macro FAQ replaced with a creator-type FAQ.
- Anchor text "how to calculate an influencer marketing budget" updated to "plan" on pages edited in this batch.

## Research notes (2026-10-08)

No keyword tool or Search Console data was available; no volumes, CPC or difficulty are claimed.

- "Influencer marketing budget" SERPs are led by vendor guides quoting a share of marketing spend (figures conflict across sources, samples undisclosed, mostly non-Indian). The hub says so rather than repeating a percentage.
- Competitor gaps: transparent assumptions, INR, campaign-level vs creator-level cost drivers, fully loaded cost per creator, break-even fee before booking, budget phasing.
- "Nano vs micro influencers" has its own comparison SERP; tier boundaries differ by source, which the page states.
- ASCI: gifted products are a material connection requiring disclosure (`SOURCES.asciGuidelines`). Tax handling links to the existing payment process page rather than restating rules.
- All rupee figures added in this batch are labelled hypothetical. No Kudozz clients, budgets, rates or results are claimed. The pre-existing directional tier table on influencer-marketing-cost-india is unchanged.

## New and expanded pages

| URL | Primary keyword | Secondary keywords | CTA (mid → / bottom → inquiry) |
| --- | --- | --- | --- |
| nano-vs-micro-influencers (new) | nano vs micro influencers | nano influencers; nano influencer budget; nano vs micro influencer cost; small budget influencer marketing | Creator Selection → /services/creator-discovery (new pair) |
| influencer-marketing-budget | influencer marketing budget | influencer campaign budget planning; how much to spend on influencer marketing; budget framework; budget by objective | Campaign Budget → /services/campaign-strategy (new pair) |
| how-much-to-pay-influencers | how much to pay influencers | influencer pricing factors; why influencer rates vary; is an influencer worth the cost; compare influencer pricing | Campaign Budget → /services/outreach-management (new pair) |
| influencer-campaign-cost-india | influencer campaign cost calculator | campaign cost breakdown; cost drivers; cost per creator | Existing pair |
| influencer-budget-allocation | influencer marketing budget allocation | budget by creator type; creator fees vs content budget | Existing pair |
| micro-vs-macro-influencers | influencer mix | micro vs macro influencer budget | Existing pair |
| influencers-for-product-launch | influencer marketing product launch | influencer marketing budget for product launch | Existing pair |
| always-on-influencer-marketing | always-on influencer marketing | always-on influencer budget | Existing pair |
| influencer-marketing-cpm-cpe-cpa | influencer CPM | influencer cost per result | Existing pair |

Every page renders exactly one BlogMidCTA (mid-article, never after the intro) and one BlogBottomCTA; analytics events and tracking parameters are unchanged. Inventory: `docs/blog-content-map.csv`.

## Internal links

- New page inbound (7): influencer-marketing-budget, influencer-budget-allocation, micro-vs-macro-influencers, micro-influencers-india, influencer-marketing-startups-india, influencer-marketing-cost-india, influencer-product-seeding-program.
- Hub links out to every owner in the table above plus strategy, launch, always-on, annual plan, testing, payments, seasonal, regional and compliance; 16 inbound.
- Two-way links added between: hub ↔ cost, allocation, rates, value, tiers, launch, always-on; value page ↔ CPM page, cost page, ROI forecasting; allocation → UGC cost, always-on.

## Validation

- `tsc --noEmit` clean; ESLint clean on all changed files; production build passed.
- Content QA across all 696 posts: no broken internal links, no missing link text, no duplicate slugs, titles or meta descriptions, no duplicate heading IDs; no em dashes or banned phrases on the cluster pages.
- Rendered HTML on all 10 cluster pages: `index, follow`, correct canonical, one H1, one mid and one bottom CTA, five JSON-LD blocks parsing (Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage), FAQ schema count matching visible FAQs, hero image present (influencer-marketing-cost-india uses the category graphic as before).
- New URL and hub in sitemap; robots.txt unchanged; `/for-brands` (with tracking parameters) and `/for-creators` return 200.

## Known limitations

- Visual layout not checked in a browser (calculator breakdown table checked by type/lint/build only).
- influencer-marketing-cost-india still has no topic hero image; micro-influencers-india received only a backlink, and its older em dashes and long excerpt were left as they were.

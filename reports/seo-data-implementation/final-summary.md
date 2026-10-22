# Final summary: Search Console data analysis and implementation (2026-10-22)

**Status:** changes are in the working tree on `main`. Nothing is committed, pushed or deployed. No ranking or traffic improvement is claimed; measure 28 days after deployment against the baselines in `implementation-log.md`.

## What the data says

Inputs: the Pages export (668 rows: 650 URLs plus 18 `#fragment` rows; 1,728 clicks and 116,629 impressions) and the Queries export (1,000 rows, the UI cap, covering 40% of clicks). The period isn't stated, but the site is about 7 weeks old. There's no country, device, date or query×page breakdown. Details are in `data-inventory.csv`.

1. **Kudozz's organic traffic is creator traffic.** Creator Resources articles get 70% of blog impressions and 81% of blog clicks. One page, `instagram-subscriptions`, gets 42% of all clicks. Most of those clicks come from viewers looking for free access to subscriber-only content, not from creators.
2. **Commercial pages are close to invisible.** The homepage, services hub, 18 service pages and market pages together have 621 impressions (0.5%). Agency head terms ("influencer marketing agency": 1,874 impressions, average position 13.7) sit on page 2 and appear to land mostly on the India agency listicle, not the homepage.
3. **CTR is low everywhere**, with a site median of 0.74-0.91% at positions 3-10. Part of that is measurement noise: about 2,800 impressions come from `site:` operators, quoted help-centre titles and AI-style prompts with no clicks. Those were excluded before judging any page.
4. **The site is technically clean.** On a full crawl of 1,022 URLs: no broken links, no redirect chains, no canonical or noindex errors, and no invalid JSON-LD. The one 404 in the export is a URL that never existed.
5. **International demand can't be measured yet.** Queries name India in 16% of impressions, the US in 0.4% and the UK in under 0.1%. UAE, Saudi Arabia, Singapore and Australia never appear. Without a country export, no new market page is justified.

## What was implemented (15 articles + llms.txt)

| Type | Pages | Summary |
| --- | --- | --- |
| Answering the evidenced question | 3 | instagram-subscriptions (free access, honestly answered), instagram-reels-analytics (what 1,000 views means), creator-usage-rights (ad-rights terms, duration, India s.17(b) ownership note) |
| Title/description aligned to query wording | 8 | Instagram monetization (India requirements), Trial Reels (eligibility), Gifts, Partnership Ads, usage rights, campaign management (de-cannibalised from the service page), travel, contact Instagram influencers |
| Trust | 1 | Publisher disclosure on the India agency listicle |
| Contextual links to commercial pages | 5 articles, 6 links | Brand guides with 295-4,363 impressions now link to the relevant service page or the /services hub |
| GEO | public/llms.txt | Added the two highest-traffic creator guides to the Instagram hub line |

The three best-CTR pages kept their titles. No redirects, noindex changes, new pages, deletions or `updatedAt` bumps were made, and forms, API routes and analytics weren't touched.

**Testing:** `tsc` passes; `eslint` shows 0 errors and the same 6 warnings as before; `next build` passes. A post-change crawl matched the pre-change results. Every changed page has one H1, valid JSON-LD and one mid-article CTA, and its new links render as in-body anchors. A 390 px phone check showed no horizontal overflow.

## Deliverables in this folder

| File | Contents |
| --- | --- |
| `data-inventory.csv` | Inputs, coverage and limitations |
| `query-page-mapping.csv` | All 1,000 queries: cluster, intent, audience, market signal, inferred landing page (with basis and confidence), issue, recommendation, priority, status |
| `page-audit.csv` | All 1,022 URLs: crawl status, metadata, canonical, schema, inlinks, Search Console metrics vs the CTR benchmark, action |
| `blog-audit.csv` | All 894 articles: metrics, prior register decision, action and reason |
| `keyword-cannibalisation.csv` | 12 overlap clusters with evidence and resolution |
| `internal-linking-plan.csv` | 10 implemented links, 3 recommended, 1 already present |
| `international-seo-plan.md` | Market evidence and recommendations |
| `technical-seo-report.md` | Findings, fixes, validation |
| `implementation-log.md` | Every change, its evidence and baseline metrics |
| `remaining-opportunities.csv` | 16 next steps with owners |
| `scripts/` | Re-runnable analysis for the next export |

## Blog library: decision per article (`blog-audit.csv`)

15 updated · 3 protected · 11 snippet candidates for the next batch · 24 near page one to refresh · 6 ranking poorly for demand they attract · 33 live 30+ days with no impressions (check indexing first) · 311 too new to judge · 491 keep and monitor. Nothing was consolidated: 7 weeks of data without query×page pairs isn't enough evidence to remove or redirect any URL.

## Decisions needed from the owner

1. **Homepage "Best Influencer Marketing Agency in India" claim.** It's the page that should own the head term. Substantiate the claim or replace it, and add real proof: case studies and a named team.
2. **Approve deploying this batch**, then request indexing for the 15 changed URLs.
3. **Provide three more exports**: query×page for the top 30 pages, Countries, and a 3-month date comparison. These unblock the snippet batch, consolidation and any market pages.
4. **Extend the publisher disclosure** to the other 63 location and agency comparison pages (same self-listing pattern).
5. **FAQPage JSON-LD sitewide** (still open from the previous audit).

## Limitations

The query-to-page attribution is inferred, not measured. The average positions blend every query and country. The CTR benchmarks come from this site's own small data set. The effect of these changes can't be known until after deployment.

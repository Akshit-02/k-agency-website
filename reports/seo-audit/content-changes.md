# Content changes (batch 2026-10-17)

All changes are uncommitted on `main` and not deployed. Files touched: `src/content/blog.ts`, `src/content/brand-guides/founder-industries.ts`, `src/content/services.ts`, `src/content/markets.ts`, `src/app/about/page.tsx`, `src/app/markets/page.tsx`, `src/app/creator-resources/page.tsx`. No URL, slug, redirect, form, API route, analytics event or environment variable was changed. `updatedAt` was not bumped on any article, because these are additions that summarise or cross-link existing content, not revisions of its facts.

Per-URL detail is in the `changes_this_run` column of `url-inventory.csv` and `content-audit.csv`.

## 1. Quick answers on 47 industry and city pages (AEO)

**Why:** 68 brand articles had no direct answer near the top. Each was read individually:
- **21 left unchanged**, because their first paragraph already answers the query directly. These include `influencer-management-vs-influencer-marketing`, `micro-influencers-india`, `regional-influencer-marketing-india`, `influencer-marketing-kpis`, `influencer-marketing-contract`, `how-much-to-pay-influencers`, `saas-influencer-marketing-india`, `influencer-marketing-report`, `brand-ambassador-program`, `micro-vs-macro-influencers`, `influencer-marketing-platforms`, `influencer-marketing-platforms-india`, `influencer-marketing-statistics`, `repurpose-influencer-content`, the list-format pages (`15-influencer-marketing-mistakes`, `influencer-marketing-campaign-ideas`, `how-to-work-with-influencers`), `influencer-partnerships`, `influencer-marketing-india`, `d2c-influencer-marketing-funnel-india` and `influencer-marketing-vs-traditional-advertising`.
- **47 updated.** The intro was scene-setting and never answered "how should a [sector/city] brand use influencer marketing?"

**What:** a `Quick answer` heading (id `quick-answer`, matching the 800+ articles that already use it) and one paragraph of 49–64 words, inserted after the full intro and before the first section heading. Each answer summarises only what its own page covers. Regulatory points name only what the page itself states and sources: IRDAI, Bar Council Rule 36, IMS Act 1992, Online Gaming Act 2025, RERA s.3 and s.11(2), SEBI finfluencer restrictions, CCPA coaching guidelines 2024, ASCI qualification and safe-driving rules, FSSAI's August 2026 advisory, BIS hallmarking. No new statistics or claims were added.

**Pages:** elder-care, personal-finance, photography-creative-services, subscription, event, agritech, legal-services, hr-recruitment, coworking, logistics, solar, wedding, manufacturing, b2b, insurance, retail, sports, consumer-electronics, restaurant-cafe, luxury, home-interior, pet, parenting-baby, entertainment, gaming, mobile-app, ev, automotive (all `*-influencer-marketing-india`), plus `influencer-marketing-{real-estate,fintech,education-edtech,hospitality,travel,healthcare,fitness,jewellery,fmcg,ecommerce,startups,food,fashion,beauty,d2c}-brands-india` (some slugs omit `-brands`) and `influencer-marketing-{ahmedabad,bangalore,delhi,mumbai}`.

**Validation:** a script checked that 29 specific details in the answers appear in each page's body or FAQs. Three didn't match and were reworded: elder-care pricing, EV test rides and pet repeat purchase. After the build, 47/47 answers render, appear in the table of contents and keep the mid CTA at least three sections below.

## 2. YouTube view definition on 4 brand pages

**Why:** from 24 August 2026 YouTube counts a view from the first frame in every format, and the previous definition is reported as engaged views. Verified against YouTube's announcement of 19 August 2026 (`blog.youtube/inside-youtube/engaged-views-youtube-explained/`). Pages that price, vet or set bonuses on views didn't mention it.

**What (one short paragraph each, sourced to YouTube):**
- `youtube-influencer-rates-india`: ask whether a quote is based on views or engaged views; links to `youtube-influencer-marketing-roi`, which owns the measurement guidance.
- `youtube-sponsorships`: ask creators to quote engaged views alongside views.
- `how-to-find-youtube-influencers`: compare average views over the same recent period, as engaged views.
- `youtube-creator-partnerships`: name the metric in view-based bonus clauses and restate pre-change targets.

The other 16 YouTube-related pages were screened. Creator-facing pages and comparison pages don't price on views, and five pages already cover the change (`youtube-shorts-influencer-marketing`, `youtube-influencer-marketing-roi`, `youtube-influencer-marketing-india`, `influencer-marketing-trends-2026` and the YouTube service page).

## 3. Search titles on 17 articles

Added `seoTitle` (38–53 characters) where the rendered title was 66–68 characters: 5 podcast pages, 6 X pages, 3 state agency guides, `solar-influencer-marketing-india`, `influencer-marketing-statistics` and `snapchat-spotlight-influencer-marketing`. H1s are unchanged. The state guides keep the query wording "Best Influencer Marketing Agency in [state]".

## 4. Internal links: 51 new contextual links from 4 hubs

- `podcast-influencer-marketing-india`: new section "More podcast guides", with two paragraphs linking 15 guides.
- `x-influencer-marketing-india`: new section "More X guides", with two paragraphs linking 12 guides.
- `influencer-marketing-by-industry`: one paragraph linking 21 India industry guides missing from the hub (7 of them were linked only from `/blog`).
- `what-is-influencer-marketing`: one paragraph linking `influencer-marketing-vs-traditional-advertising` and `influencer-management-vs-influencer-marketing`.

Each anchor was checked to appear exactly once in its paragraph, because `renderWithLinks` links every occurrence. Result: weakly linked pages went from 40 to 4.

## 5. Meta descriptions on 12 commercial pages

`/about`, `/services/{campaign-strategy,creator-discovery,ambassador-programs,product-launches,social-campaigns}`, `/markets`, `/markets/{uae,saudi-arabia,uk,australia}` and `/creator-resources`. Each went from 161–178 characters to 141–156. The rewrite removed em dashes and the repeated "Kudozz runs influencer campaigns for brands in" opening, and kept every distinguishing detail (permits, ASA/CMA, ACL/AANA/TGA, Mawthooq, SAR reporting).

## Checked, no change needed

- **Rupee tables (55 tables on 40 articles):** 44 are labelled hypothetical or illustrative in the table or the text just before it. Two more (`influencer-benchmarking`, `influencer-performance-data`) are labelled hypothetical under their headings. `influencer-marketing-cost-india` compares published guides with dates and states whether each disclosed its method, which follows the owner's rule. The rest are caption or title examples in creator how-to tables, a ROI/ROAS formula table, and GST, TDS and DPDP thresholds, two of them with sources. A prose scan of rate, cost, fee and budget pages found no per-post rupee figures. A manual read then found one vague, unsourced range on `youtube-influencer-rates-india` (section "Indicative market benchmarks": "from a few thousand rupees … up to tens of thousands"). It is left for the owner to decide, because removing it changes the page's main pricing answer. It is listed in `content-roadmap.md` (P2).
- **"Kudozz has…" claims (7):** all accurately refer to Kudozz's own published guides.
- **"Guarantee" mentions (117):** almost all are negations ("no plan can guarantee…").
- **Compliance pages without external sources (`podcast-advertising-compliance`, `x-influencer-marketing-compliance` and the two X/podcast contract pages):** these give generic guidance and send readers to the verified owners for specific rules. They are recorded as consolidation candidates, not factual errors.

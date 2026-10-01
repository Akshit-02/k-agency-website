# Kudozz SEO / AEO / GEO master audit (2026-10-01)

URL database (every indexable URL, with metadata, word count, links, schema and intent): `docs/seo-url-database-2026-10.csv`.
Location research: `docs/location-seo-audit.md`. Earlier batch audits: `docs/*-audit.md`.

## 1. Website audit

The production build was crawled from the homepage and the sitemap, following every internal link.

| Metric | Before | After |
| --- | --- | --- |
| URLs discovered (crawl ∪ sitemap) | 726 | 693 |
| Indexable 200 URLs | 726 | 693 |
| Blog URLs | 652 | 619 (295 brand, 286 Creator Resources, 38 location) |
| Service URLs | 8 + /services | same |
| Creator Resources hubs | 56 + index | same |
| URLs in links but not in the sitemap | 0 | 0 |
| Orphans (0 inbound links) | /privacy-policy, /terms | same (footer legal links are commented out in Footer.tsx) |
| Duplicate titles / descriptions / H1s | 0 / 0 / 0 | 0 / 0 / 0 |
| Pages without exactly one H1 | 0 | 0 |
| Canonical mismatches | 0 | 0 |
| Invalid JSON-LD | 0 | 0 |
| Redirects (301/308) | 3 | 35 (no chains; no internal links point at redirects) |

Lint: 6 pre-existing warnings, 0 errors (unchanged). Build passes. No console or hydration errors on the changed templates.

## 2. Technical issues found and fixed

1. **Future dates.** 257 blog URLs had `publishedAt`/`updatedAt` up to May 2027, which leaked into sitemap `<lastmod>`, Article `datePublished` and `og:article:published_time`. Each was set to the date its slug first appeared in git (when it went live); future `updatedAt` values were set to the commit date of that update. 0 future dates remain.
2. **Three CTAs per article.** 228 core posts had an in-body "Getting help… / Start a brand inquiry" section on top of the automatic BlogMidCTA and BlogBottomCTA. Those sections were removed (220 sections, 8 inline sentences). Any service or guide links they carried were kept as a short "Related reading / How Kudozz handles this" line, so no internal links were lost. Every article now has exactly two CTAs.
3. **Title truncation.** `buildMetadata` now drops the "— Kudozz" suffix when it would push a title past 60 characters (Google shows the site name separately). 37 key brand pages got hand-written `seoTitle`s, and 8 service pages got proper titles ("UGC Campaign Services for Brands in India" instead of "UGC Campaigns Services"). Long titles went from 319 to 131, nearly all of them long-tail platform and creator pages.
4. **LCP.** Article H1s, excerpts and the homepage H1 were server-rendered at `opacity:0` until hydration. They now slide in without the fade (`Reveal fade={false}`), so they paint before JavaScript runs. Other below-the-fold reveals are unchanged.
5. **Entity signals.** The Organization description now says "influencer marketing agency in India", `og:locale` is `en_IN`, and /about has a factual "What we do" section that links all 8 services, 11 industries and 6 platform guides, plus `AboutPage` and `BreadcrumbList` schema.
6. **Service pages linked to no articles.** Each service page now has a "Guides on this topic" section with 4 or 5 relevant articles (data in `services.ts → guides`). The FAQ heading no longer lowercases "UGC".
7. **llms.txt** now points to the surviving URLs.

### Remaining technical items (not changed)

- `/privacy-policy` and `/terms` have no internal links because the footer legal links are commented out. Re-enabling them is a small trust signal; it was left as the owner's decision.
- `/about` still shows `siteConfig.stats` (40k+ creators, etc.), which `public/llms.txt` describes as illustrative. Replace them with verified figures or remove them.
- `/for-brands` still shows sample case studies and testimonials (see `homepage-positioning` notes).
- 74 posts carry `publishedAt` dates before the site launched (2026-09-05). These are in the past, so they were left alone.
- Most below-the-fold content still uses opacity reveals; CWV field data should confirm that no other LCP elements are affected.

## 3. Cannibalization: consolidations (all 301/308)

Each pair was checked by title, H2 structure, shingle text overlap and SERP evidence (for example, the "influencer marketing cost in India" SERP is entirely India rate-card pages, so a USD cost guide could not win it). Unique sections from each losing page were rewritten into the winner, and every internal link, `related` slug, CTA key and llms.txt entry was retargeted.

| Redirected URL | Now served by | What was merged |
| --- | --- | --- |
| how-much-does-influencer-marketing-cost | influencer-marketing-cost-india | Quick answer, budget-by-campaign-type table, 2 FAQs (dropped USD rates) |
| influencer-marketing-contract-india | influencer-marketing-contract | India section: no standard template, ASCI, GST/TDS, INR schedule |
| measure-influencer-marketing-roi-india | measuring-influencer-campaign-roi | India attribution gaps (WhatsApp, COD), worked example, FAQ |
| influencer-marketing-strategy-india | influencer-marketing-strategy | Language, city tier, regional layer |
| influencer-marketing-mistakes-india | 15-influencer-marketing-mistakes | India mistakes and pre-launch checklist |
| how-to-find-influencers-for-your-brand | find-indian-influencers | Quick answer, where to look, tier-based sourcing, tools vs agency |
| instagram-influencer-marketing-india, instagram-creator-marketing | instagram-influencer-marketing | Quick answer, objective-to-model table, terminology table |
| ugc-creator-vs-influencer | ugc-vs-influencer-content-whats-the-difference | Hiring decision table, hybrid creators |
| how-to-brief-influencers | influencer-campaign-brief | Adapting briefs by platform and campaign type; brief/contract alignment |
| avoid-fake-influencers-india | how-to-identify-fake-followers | Fraud types, in-campaign validation |
| how-does-influencer-marketing-work | what-is-influencer-marketing | 10-stage workflow, misconceptions |
| best-platform-for-influencer-marketing | influencer-marketing-platforms-india | Objective table (India platforms, no TikTok), selection steps |
| x-influencer-marketing-india-strategy + 8 X industry pages | x-influencer-marketing-india | Industry table (B2B page kept separate) |
| podcast-creator-marketing + 8 podcast industry pages | podcast-influencer-marketing-india | Industry table, creator types, audio vs video |
| x-creator-brand-partnerships | x-creator-partnerships | Commercial terms checklist |
| podcast-brand-partnerships | podcast-creator-partnerships | When to move up a partnership level |

The X and podcast industry pages were templated, about 850–950 words each, with near-identical structure across industries (20–25% shared text between X and podcast versions) and 1–2 inbound links each. That is the thin, programmatic pattern the brief asked to remove.

### Overlaps reviewed and kept (differentiated intent)

- `influencer-marketing-cost-india` (market pricing), `influencer-campaign-cost-india` (calculator/budget examples), `how-much-to-pay-influencers` (per-creator fee judgement), `influencer-marketing-agency-fees-india` (agency fees).
- City informational guides (`influencer-marketing-mumbai` etc.) vs "best agencies in [city]" pages (commercial). These were already cross-linked in the 2026-09-30 batch.
- `sports-influencer-marketing-india` vs `influencer-marketing-fitness-brands-india` (athletes and sports brands vs gyms and supplements).
- Pinterest, Reddit, Snapchat, LinkedIn and YouTube hub-and-spoke clusters. Their "-india" pillar and "creator marketing" pages overlap partly. **Next candidates for merging:** `pinterest-creator-marketing`, `snapchat-creator-marketing`, `reddit-creator-marketing` and `linkedin-creator-marketing` into their pillars, and `reddit-community-marketing-india`, `reddit-marketing-strategy` and `reddit-community-building-for-brands` into one Reddit community guide. Search Console data should decide this first.
- Creator-side near-duplicates (lower business value): `creator-crisis-communication` / `creator-crisis-management`, `creator-content-workflow` / `ai-content-workflow-for-creators`, `creator-financial-planning` / `creator-cash-flow-management`, `creator-team-management` / `creator-team-building`. Flagged for the next Creator Resources batch.

## 4. Keyword research

No Search Console, Ahrefs or Semrush connector was available, so **no search volumes, rankings, impressions or CTR were used or invented**. The research below is from live SERP inspection (2026-10-01).

- **Core / commercial:** "best influencer marketing agency in India" is dominated by agency homepages (Kofluence, Grynow, Confluencr, MHS) and self-published "top 10" lists. The homepage and the India pillar split that intent (brand vs comparison).
- **Pricing:** "influencer marketing cost in India" is all India rate-card articles with a year in the title ("(2026)"), tier tables in INR, agency fees and minimum budgets. The cost guide was retitled and given a quick answer to match.
- **Comparison:** "UGC vs influencer marketing" is one SERP of definition-plus-table articles, so the two Kudozz pages were merged.
- **Discovery:** "how to find influencers for your brand India" returns guides and discovery tools (Kofluence, Reelax). Answers stress criteria first and follower count last, which the merged guide now leads with.
- **D2C agency:** "influencer marketing agency for D2C brands India" returns dedicated **industry service landing pages** (Kofluence, Netzens, Social Tweebs). Kudozz has only an informational D2C guide here. This is the largest commercial gap (see §8).
- **Regulatory freshness:** ASCI influencer guidance is actively updated and covered by 2026 explainers (video label durations, AI/virtual influencers). Kudozz pages tell readers to confirm the current ASCI version rather than restating secondary-source rules; a primary-source refresh is recommended (§7).

## 5. AEO

- "Quick answer" direct-answer blocks were added to the cost, find-influencers and Instagram pillars (most platform and location pages already had them).
- New tables and checklists sized for snippets: campaign-type budgets, platform-by-objective (India), objective-to-Instagram-model, UGC-vs-influencer hiring, X/podcast industry tables, brief adaptation, fraud types, pre-launch checklist.
- New PAA-style FAQs: "Is influencer marketing cheaper than paid advertising?", "Do influencer rates include usage rights?", "Is there a standard influencer contract template in India?", "What does ASCI require…?", "Why is influencer ROI harder to measure in India?", plus six Tamil Nadu FAQs.

## 6. GEO / entity

- Kudozz → influencer marketing agency → India is now stated consistently in the Organization description, /about (with an AboutPage schema), llms.txt, services and location pages.
- Kudozz → services: the about page links all 8; every service page links down to its guides; guides link up via "How Kudozz handles this".
- Kudozz → industries/platforms: linked from /about.
- Kudozz → locations: Tamil Nadu now follows the Kudozz-first + 4 verified agencies model with `spatialCoverage` and `mentions` schema.

## 7. Content refresh system

| Page group | Refresh cadence | Why |
| --- | --- | --- |
| Cost, rates and pricing pages (`*-cost-*`, `*-rates-*`, how-much-to-pay) | Quarterly | Volatile SERP; competitors put the year in titles |
| Compliance (contract, compliance, disclosure, AI disclosure) | On every ASCI/CCPA update, at least every 6 months | Regulatory accuracy |
| Platform pillars (Instagram, YouTube, LinkedIn, Snapchat, Pinterest, Reddit, X, podcasts) | Every 6 months | Platform features change (Partnership Ads, Creator Marketplace, Trial Reels) |
| Location "best agencies" pages | Every 6 months, per `docs/location-seo-audit.md` §5 | Agency offices and services change |
| Evergreen how-tos (brief, vetting, strategy) | Yearly | Low volatility |

Set `updatedAt` only when content actually changes, and `lastReviewed` when facts are re-checked.

## 8. Next highest-priority opportunities

1. **Connect Search Console** and prioritise pages ranking in positions 4–20 and pages with high impressions but low CTR. None of this audit's prioritisation used ranking data.
2. **Industry service landing pages** for the strongest commercial verticals (D2C/e-commerce first, then beauty, fashion and fintech). Current SERPs reward service pages over guides. Build them as a `/services/industries/*` layer (or retarget the existing guides' titles and CTAs), not as new thin pages.
3. **Location P1:** Telangana (one more verified Hyderabad agency needed), West Bengal (InfluGlue + 3), Uttar Pradesh (Opraah + 3).
4. **Second consolidation round:** the platform "creator marketing" pages and the Reddit community trio (§3), decided with Search Console data.
5. **Replace or remove the unverified stats** on /about and the sample case studies on /for-brands; add real, permissioned case studies when available. This is the biggest remaining trust/E-E-A-T gap.
6. **ASCI primary-source refresh** of compliance pages.

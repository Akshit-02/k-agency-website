# 01 · Executive SEO Audit: Kudozz

**Site:** https://www.kudozz.in · **Date:** 13 November 2026 · **Toolkit:** claude-seo 2.6.0 (installed and verified; `doctor` passes) · **Search Console data:** 5 Sep – 3 Nov 2026 (`gsc-data.xlsx`, read-only)

## Overall status

Kudozz has an **unusually clean technical base and a very large, well-structured content library**: 1,070 articles, 20 service pages and 5 market pages, all server-rendered and self-canonical, with valid schema and answer-first writing. The constraints on growth are elsewhere:

1. **New content has stopped surfacing in Google.** Of 621 articles published on or before 3 October, 89% have impressions. Of 306 published from 4 October to 3 November, **one** does. Weekly impressions peaked at 43,073 (week of 3 Oct) and halved by late October. There was no confirmed Google update in that window. That pattern fits Google holding back new pages after a burst of roughly 300 articles a month (scaled-content signals and crawl prioritisation) more than any technical fault. Every one of those URLs returns 200, is in the sitemap and is indexable. **Search Console's Pages report is needed to confirm.**
2. **Search traffic doesn't match the business.** 83% of clicks go to creator-side articles, and **49% of query-attributed clicks come from people looking for free access to Instagram subscription content**. Brand and commercial queries such as "influencer marketing agency" produced **13,466 impressions but only 99 clicks**, because Kudozz sits around positions 11–16 for them.
3. **No dedicated page for the core service.** "Influencer marketing services" had no URL of its own (the nav pointed at an anchor), so Google mostly showed a listicle (the India agency shortlist) for agency queries. **Fixed in this project.**
4. **Thin proof and anonymous authorship.** No case studies, named authors or verifiable credentials. This is the biggest E-E-A-T gap, and only Kudozz can fill it.
5. **Doorway-pattern risk** from 73 "best … agencies in [place]" pages. The October audit recommended creating no more; 9 were added on 12 November.

## Main strengths

- Technical: 1,162/1,162 live URLs resolve (8 slow on first try), 100% self-canonical, no noindex, one H1 everywhere, 0 schema errors, clean redirects, valid sitemap.
- Content craft: 1,058 of 1,070 articles open with a quick answer; FAQs on 1,049; claims cite primary sources with dates; no fabricated statistics or clients found.
- Conversion plumbing: two topic-matched CTAs per article plus a related-service link, with attribution parameters on every inquiry link.
- Honest positioning in `llms.txt` and `siteConfig` (no false awards or office claims).
- 18 free interactive tools, a genuine asset for links and answer engines.

## Main weaknesses

- Indexing and surfacing of everything published after 3 October (P0).
- Commercial head terms stuck on page two; homepage 521 impressions; `/for-brands` 34; most service pages 0.
- Traffic concentrated on one creator article (`instagram-subscriptions`, 51% of clicks) with low-value intent.
- No people, no case studies, two social profiles, no YouTube presence.
- 73 location shortlists (claude-seo hard-stop threshold is 50).

## Top 20 opportunities

| # | Opportunity | Evidence | Priority | Status |
|---|---|---|---|---|
| 1 | Diagnose why post-3-Oct content isn't surfacing; pause bulk publishing meanwhile | 1 of 306 posts with impressions | P0 | Needs GSC access |
| 2 | Dedicated influencer marketing pillar page | "influencer marketing agency" 2,901 impr, pos 11.7; "…services" 453, pos 16 | P1 | **Done** |
| 3 | `/blog` HTML under Googlebot's 2 MB limit | 2.07 MB → 0.72 MB | P1 | **Done** |
| 4 | Remove the unverifiable "Best" from the homepage title and H1 | Brief rule; flagged in Oct | P1 | **Done** |
| 5 | Publisher disclosure on competitor shortlists | 38 pages ranked Kudozz first without saying Kudozz publishes them | P1 | **Done** |
| 6 | Case studies and proof on service pages | No proof anywhere; FeaturedCampaigns disabled | P1 | Owner |
| 7 | Named authors with Person schema | 1,070 team-authored articles | P1 | Owner |
| 8 | Consolidate 25 specialist city shortlists | 0 impressions; doorway pattern | P1 | Approval |
| 9 | Internal links to the pillar from top brand articles | Pillar has nav + ~130 template links; few contextual | P1 | Partly done |
| 10 | CTR fixes on high-impression pages | e.g. Insights 5,021 impr at 0.3%, Trial Reels 5,374 at 0.24% | P2 | **Done (17 pages)** |
| 11 | India shortlist description (14,204 impr) | 164 chars, truncated | P2 | **Done** |
| 12 | Decide "social media marketing" vs "management" positioning | 9 SMM shortlists, no SMM-marketing page, 0 GSC demand | P1 | Owner |
| 13 | Merge duplicate cost guides | `influencer-marketing-cost-india` at pos 47 | P2 | Approval |
| 14 | Measure Core Web Vitals | No API key | P2 | Blocked |
| 15 | UGC: make the guide own "ugc marketing" (pos 19) | 232 impr | P2 | Recommended |
| 16 | Brand mentions off-site (YouTube, LinkedIn, Reddit) | Correlates with AI visibility (Ahrefs 2025) | P2 | Recommended |
| 17 | Original benchmark study | Nothing citable that is unique to Kudozz | P2 | Recommended |
| 18 | Response-time commitment and "what happens next" on `/for-brands` | Conversion clarity | P2 | Owner |
| 19 | Compact list for `/creator-resources` before it hits ~1.5 MB | 1.01 MB | P3 | Recommended |
| 20 | Security headers | No CSP or `X-Content-Type-Options` | P3 | Approval |

## Technical SEO summary (report 02)
Strong. One P0 (indexing of new content, needs GSC), one P1 fixed (`/blog` > 2 MB), minor P2s (long descriptions, slow paths, JSON-LD escaping, now fixed). CWV weren't measured (no API key); the architecture favours good scores.

## Content summary (reports 04, 06)
1,070 articles classified by explicit rules. Primary class (after this project's fixes): A keep 521 · B metadata 354 · E internal links 81 · I indexing 33 · H consolidation 33 · F conversion 22 · G cannibalisation 17 · D expand 9 · C refresh 0 as primary (most fact-heavy articles carry "last reviewed" dates). Real cannibalisation is limited and mostly managed. The location-shortlist pattern is the main risk.

## Commercial SEO (reports 05, 07)
The demand exists (13,466 impressions on commercial influencer queries in 3 months) but converts to almost no clicks at positions 11–16. The new pillar, homepage reframing and internal links give Google a proper service URL; **proof and authorship** are what will move it from page two to page one.

## AEO / GEO (report 09)
Kudozz appears for 105 conversational, prompt-like queries (3,636 impressions), including "best agency for influencer and creator marketing in india" at average position 1.9. Citability, structure and crawler access are strong; authority signals (people, proof, off-site mentions) are weak. `llms.txt` is accurate and updated (the toolkit gives it no ranking weight).

## International (report 08)
India is the only market with real visibility. All 100 GCC, UK and Australia guides and the 5 market pages were published in October and have **zero impressions** so far, the same indexing problem. The US's 15,110 impressions are creator education in a market Kudozz doesn't serve. One English site with `/markets/{country}` stays the right architecture; no hreflang is needed.

## Deliverables

| # | File |
|---|---|
| 01 | `01-executive-seo-audit.md` (this file) |
| 02 | `02-technical-seo-audit.md` |
| 03 | `03-website-inventory.xlsx`: 1,198 rows (1,162 live URLs + new pillar + 35 GSC-only legacy URLs) |
| 04 | `04-blog-content-inventory.xlsx`: all 1,070 articles, 34 columns, A–J classes |
| 05 | `05-keyword-url-map.xlsx`: 1,000 GSC queries mapped, cluster summary, cannibalisation groups |
| 06 | `06-content-cannibalisation.md` |
| 07 | `07-service-page-audit.md` |
| 08 | `08-international-seo-strategy.md` |
| 09 | `09-aeo-geo-audit.md` |
| 10 | `10-schema-audit.md` |
| 11 | `11-metadata-changes.xlsx`: 20 changes, old vs new, with evidence |
| 12 | `12-implementation-report.md` |
| 13 | `13-qa-report.md` |
| 14 | `14-90-day-seo-roadmap.md` |

## Limits of this audit

No keyword volume source, backlink data, CWV field or lab data, GSC indexing data or GA4 data was available. Demand is expressed as GSC impressions, never as invented volumes. Article quality was assessed with deterministic checks across all 1,070 articles plus manual reading of the commercial and highest-traffic pages, not a line-by-line read of every article.

# 13 · QA Report

**Tested:** 13 November 2026, on the final working tree, built with `next build` and served locally with `next start`. Production (`www.kudozz.in`) still runs the previous version. Nothing was deployed.

## Results

| # | Check | Method | Result |
|---|---|---|---|
| 1 | Build | `npm run build` | **Pass.** 2,247 static pages, no errors or warnings |
| 2 | Lint | `npx eslint src` | **Pass.** 0 errors; 6 warnings, all pre-existing unused imports in `contact/page.tsx`, `for-brands/page.tsx` and `layout/Footer.tsx` (files not touched) |
| 3 | Types | `npx tsc --noEmit` | **Pass** |
| 4 | All URLs | Local crawl of every sitemap URL (1,163) | **Pass.** 1,163 / 1,163 return 200 |
| 5 | Metadata | Same crawl | **Pass.** 0 missing or duplicate titles, 0 duplicate descriptions; changed titles and descriptions render as specified (`11-metadata-changes.xlsx`) |
| 6 | Canonicals | Same crawl | **Pass.** 1,163 / 1,163 self-canonical to `https://www.kudozz.in/…` |
| 7 | Sitemap | `/sitemap.xml` on the build | **Pass.** 1,163 URLs (was 1,162), includes `/services/influencer-marketing` |
| 8 | robots.txt | Build | **Pass.** Unchanged (allow all, disallow `/api/`, sitemap line) |
| 9 | Structured data | Parse every JSON-LD block on every page | **Pass.** 0 parse errors; pillar emits Service, BreadcrumbList and FAQPage |
| 10 | Internal links | Every `href` on every page resolved against the build | **Pass.** 0 broken internal links; 0 internal links to redirecting URLs; 0 remaining links to the old `/services#influencer-marketing` anchor; every page links the pillar (nav) |
| 11 | H1 / indexability | Same crawl | **Pass.** Exactly one H1 per page; no `noindex` |
| 12 | HTML weight | Same crawl + claude-seo `page_checks --file` | **Pass.** `/blog` 716,912 bytes (was 2,065,580); no page over 2 MB (largest: `/creator-resources` 1.01 MB) |
| 13 | claude-seo page checks on changed pages | `page_checks.py --file` | `/services/influencer-marketing`, `/`, `/blog/instagram-insights-for-creators`: **no findings**. `/blog`: `html-over-2mb` cleared; one Low `wide-dom-node` remains (grid with >60 children; harmless) |
| 14 | Mobile rendering | Playwright (claude-seo Chromium) at 390×844 and 1366×900 | **Pass.** No horizontal overflow on the pillar or `/blog`; the compact archive list and pillar hero render correctly (screenshots reviewed) |
| 15 | Blog pages | Rendered checks on 5 articles (incl. the India shortlist, a UGC city shortlist, a creator guide) | **Pass.** Disclosure shows as paragraph 2 on shortlists; related-service links resolve; TOC, FAQ and CTAs unchanged |
| 16 | Enquiry pages and forms | Code diff + render | **Pass.** No changes to form components, validation, API routes or mailer; `/for-brands` and `/contact` render (200, one H1, JSON-LD valid). Form submission was **not** exercised end to end (it sends real email) |
| 17 | Image loading | Crawl | **Pass.** 0 images without `alt`; hero SVG assets return 200 |
| 18 | Regressions | Diff review + full crawl | None found. Behaviour change by design: `/blog` search matches archive items by title (not excerpt) |
| 19 | GSC export untouched | SHA-1 before and after | `ae2eecc8d12d1ed7e78035ab17c8d2201216b645` both times |
| 20 | claude-seo re-run | `page_checks` on the build; `doctor` | Done (row 13); `doctor` passes |

## Status of every change

| Category | Items |
|---|---|
| **Implemented and tested** | Pillar page and all links to it; homepage title and H1; `/blog` size fix and title; publisher disclosure on 38 shortlists; 17 blog metadata updates; JSON-LD escaping and Service `@id`; blog fallback service link; 2 contextual pillar links; `llms.txt` |
| **Awaiting approval** | Consolidating 25 specialist city shortlists (301s); merging `influencer-campaign-cost-india` into `influencer-marketing-cost-india`; security headers (CSP etc.); named AI-crawler groups in robots.txt; form market selector (from October) |
| **Blocked by missing information** | Indexing diagnosis of the October cohort (needs Search Console access); Core Web Vitals (needs a Google API key); named authors, case studies, response time and About page facts (owner input); whether Kudozz sells "social media marketing" separately from management (owner decision); backlink analysis (no data source) |
| **Recommended for later** | See `14-90-day-seo-roadmap.md` |

## Unresolved issues

1. **October content not surfacing** (technical P0-1). Not something code can fix without the indexing data.
2. **Rich Results Test and Lighthouse on the public URL**: run after deploy.
3. **Occasional slow page responses** on production (`influencer-marketing-food-brands-india` took 40 s once). Check Vercel logs.
4. `/creator-resources` is 1.01 MB and growing; apply the compact-list pattern before it reaches ~1.5 MB.

## Not claimed

No change to rankings, traffic, leads or conversions is claimed. These changes aren't live yet, and their effect has to be measured over the coming weeks (see the roadmap's measurement column).

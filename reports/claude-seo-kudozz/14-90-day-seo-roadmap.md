# 14 · 90-Day SEO Roadmap

**Starts:** the day the changes in report 12 are deployed. **Principle:** fix indexing and commercial visibility before publishing more. Through November 2026 the site published about 100 articles a week, yet only 1 of 306 posts published after 3 October has impressions. **More volume won't help until that's understood.**

Effort: S ≤ 1 day · M 2–5 days · L 1–3 weeks. Business relevance: how directly the action affects qualified brand inquiries.

## Days 1–15: Technical SEO and critical fixes

| Action | Priority | Effort | Business relevance | How to measure |
|---|---|---|---|---|
| Review the diff and deploy this project's changes | P0 | S | High | Live site serves the pillar; `/blog` < 1 MB; sitemap 1,163 URLs |
| Search Console → Pages: export indexing states; URL-inspect 20 posts published 4 Oct – 3 Nov (mix of GCC, AU, UK, brand guides, location pages) | P0 | S | High | Share of the October cohort that is "Indexed" vs "Crawled/Discovered – not indexed" |
| **Pause bulk publishing** (new batches of 50+) until that answer is in | P0 | S | High | Weekly new URLs in the sitemap; indexed share of new URLs |
| Submit the sitemap once in GSC (not individual URLs) and request indexing only for the pillar page | P1 | S | High | Pillar shows as indexed within ~2 weeks |
| Rich Results Test and Schema validator on the pillar, homepage and one article | P1 | S | Medium | No errors |
| Add a Google API key to claude-seo; run PSI and CrUX on the top 10 URLs | P1 | S | Medium | LCP, INP, CLS (field where available, otherwise labelled as lab) |
| Check Vercel logs for the slow paths (food-brands, podcast articles) | P2 | S | Low | p95 response < 1 s |
| Approve and implement the consolidation of 25 specialist city shortlists into their India pages (301s) | P1 | M | Medium | Doorway-pattern pages reduced from 73 to 48; no loss of impressions on the India pages |

## Days 16–30: Service page improvements

| Action | Priority | Effort | Business relevance | How to measure |
|---|---|---|---|---|
| Write 2–3 real case studies (with permission) and add them to the pillar, the homepage and the relevant service pages | P1 | L | **Very high** | Inquiry conversion rate from service pages; time on page |
| Add named authors (2–4 people) with bios and Person schema; attribute the top 50 brand articles | P1 | M | High | Author pages indexed; E-E-A-T review |
| Publish an inquiry response-time commitment and a "what happens next" block on `/for-brands` | P1 | S | High | Form completion rate |
| Decide on "social media marketing" (separate service or part of SMM) and adjust the SMM page and 9 SMM shortlists | P1 | S | Medium | Clear owner URL for SMM queries |
| Strengthen pillar internal links from the 20 highest-impression brand articles (one contextual link each) | P1 | M | High | GSC: pillar impressions for "influencer marketing agency/services" |
| Small service-page fixes from report 07 (ambassador FAQs, product-launch link, UGC for e-commerce section) | P2 | M | Medium | Service page impressions and positions |

## Days 31–45: Existing blog optimisation

| Action | Priority | Effort | Business relevance | How to measure |
|---|---|---|---|---|
| Brand-side commercial articles (class F, 22): check CTA match, add the pillar or relevant service link, tighten intros | P1 | M | High | CTA click-through (GA4 `blogAnalytics` events); inquiries by `src` |
| Metadata pass on class B with ≥300 impressions (beyond the 17 done) | P2 | M | Medium | CTR vs the pre-change 28 days |
| Cross-link the Instagram insights trio and the YouTube Shorts pair (report 06) | P2 | S | Low | Impressions shared vs split |
| Merge `influencer-campaign-cost-india` into `influencer-marketing-cost-india` (approval) | P2 | S | Medium | Position for "influencer marketing cost india" (now 17) |
| Refresh platform-feature articles without a "last reviewed" date (class C) when platform facts change | P2 | M | Low | Accuracy; impressions held |
| Investigate the 33 pre-October posts with zero impressions (class I) | P2 | S | Low | Indexed / not indexed reasons |

## Days 46–60: Content gaps and topical authority

| Action | Priority | Effort | Business relevance | How to measure |
|---|---|---|---|---|
| Founder buying-guide set: improve the existing agency-selection articles before writing new ones (`choose-…`, `…-agency-fees-india`, `…-pitch-questions`, `…-agency-vs-in-house`) | P1 | M | High | Positions on agency-selection queries |
| One piece of original research (anonymised Kudozz campaign benchmarks, with method) | P2 | L | High (citations, links) | Referring domains; brand mentions |
| UGC: make `what-is-ugc-marketing` the clear owner of "ugc marketing" (pos 19) and add a UGC for e-commerce / Shopify section on `ugc-content-production` | P2 | M | Medium | Position for "ugc marketing" |
| Regional and vernacular authority: deepen the regional service page and link it from state guides | P2 | M | Medium | Impressions on regional-language queries |
| Only new articles that fill a gap in `05-keyword-url-map.xlsx`, at most 5–10 a week, each linked from at least 3 existing pages | P3 | M | Medium | Share of new articles with impressions within 30 days |

## Days 61–75: International SEO

| Action | Priority | Effort | Business relevance | How to measure |
|---|---|---|---|---|
| Re-check indexing of `/markets/*` and the GCC/UK/AU guides | P1 | S | Medium | Indexed share; impressions by country |
| UAE: link `/markets/uae` from the top 10 UAE guides; keep permit facts dated | P2 | S | Medium | UAE impressions (baseline 670 / 3 months) |
| UK: India–UK corridor and diaspora angle on `/markets/uk` | P2 | M | Medium | UK impressions (baseline 3,396) and CTR (0.44%) |
| No new country, city or Arabic pages unless delivery is confirmed and the market pages are indexed | – | – | – | – |

## Days 76–90: Monitoring and further optimisation

| Action | Priority | Effort | Business relevance | How to measure |
|---|---|---|---|---|
| Compare 28 days after deploy vs 28 days before: commercial query set (261 queries, 13,466 impressions, 99 clicks in the 3-month export) | P1 | S | High | Clicks and positions on that set |
| Check that the pillar, not the shortlist, appears for "influencer marketing services" | P1 | S | High | GSC page filter on the query |
| claude-seo drift baseline after deploy (`drift_baseline.py`) and a compare at day 90 | P2 | S | Medium | Unintended SEO changes caught |
| Re-run the full audit (crawl, `page_checks`, GSC export) and update reports 03–05 | P2 | M | Medium | Issue register closed vs open |
| Decide the publishing cadence for Q1 2027 based on the indexing data | P1 | S | High | Indexed share of new content ≥ 80% |

## KPIs to track (baseline from the 5 Sep – 3 Nov 2026 export)

| KPI | Baseline |
|---|---|
| Brand / commercial influencer query clicks | 99 (13,466 impressions, 0.7% CTR) |
| "influencer marketing agency" average position | 11.7 |
| "influencer marketing services" average position | 16.0 |
| Homepage impressions | 521 |
| `/for-brands`, `/services` and service page impressions | 389 combined |
| Share of clicks from free-access subscription queries | 49% of query-attributed clicks (want this to fall as brand traffic grows) |
| Indexed share of content published after 3 Oct | ~0% with impressions (needs the GSC Pages report) |
| Brand inquiries per month (by `src` parameter) | Owner data |

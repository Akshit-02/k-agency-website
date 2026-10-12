# Kudozz page-by-page and blog-by-blog SEO, AEO, GEO and CRO report (round 2, 2026-10-12)

Builds on round 1 (`docs/international-seo-audit.md`, committed in `b66ee6b`).

**Full per-URL logs (the authoritative record):**

- `docs/seo-register-blog-2026-10.csv`: all 825 articles. Each row has the market, theme, intent, H1, search title, description, dates, word/H2/FAQ counts, sources, inbound links, related service, CTA, the automated findings before changes, the field-level changes made (diffed against `b66ee6b`), the decision, the monitor reason, the priority and the rendered-page validation.
- `docs/seo-register-pages-2026-10.csv`: all 80 non-article URLs, with findings, changes, decision, priority and validation.
- `docs/seo-audit-progress.md`: coverage tracker for resuming work.

**What "reviewed" means.** Every URL was crawled from the production build. Every article was run through automated checks against its full source text, not a sample:

- metadata length
- an early direct answer
- H2 count and duplicate heading IDs
- FAQ count
- external sources
- unsourced figures
- outdated platform features
- first-person or Kudozz claims
- filler phrases
- em-dash density
- paragraphs repeated across articles
- broken or redirected links
- images and alt text
- date sanity
- CTA wiring
- title-overlap cannibalisation

Every flagged item was then read in context and either fixed or recorded as a false positive. Articles with no flags beyond "no external sources" were not rewritten. A complete, useful page doesn't need edits just because it was audited.

---

## A. Executive summary

**Audited:** 905 indexable URLs (825 articles, 80 other pages), the 6 market pages from round 1, templates, CTA wiring, structured data, sitemap, robots, page weight and forms.

**Most important findings, all fixed:**

1. **P0 performance.** The /blog index serialised the full text of all 825 articles into the page. It was 9.95 MB of HTML, 2.44 MB gzipped as served live today. Now 1.59 MB HTML, about 209 KB gzipped (-91% transfer). Cause: a client component (`BlogExplorer`) received whole `BlogPost` objects. It now receives card fields only, enforced by a `BlogCardData` type.
2. **P1 factual error.** X retired Creator Revenue Sharing on 7 September 2026 (TechCrunch, 8 Aug 2026). The `x-creator-revenue-sharing` article still presented it as current, and 7 passages across other articles did too. All are corrected and point to Original Content Rewards.
3. **P1 statistics accuracy.**
   - The statistics article credited a BBB *consumer* survey with a *marketer* statistic. Attribution is corrected and an IAB source added.
   - The article had no figures for Kudozz's markets. A sourced "Figures by market" section now covers the US, India, the UK, Australia and Singapore, and says plainly that no verifiable UAE or Saudi market-size figure was found.
   - Three India articles overstated IAMAI-Kantar ICUBE ("access the internet in Indic languages"; the source says "content"). Reworded and linked to the report.
4. **P1 conversion path.** 291 brand articles whose mid CTA goes to the inquiry form had no link to any service page. 95 market articles didn't link their market page. A contextual end-of-article link now covers both. Articles whose mid CTA already points to a service don't get a duplicate. Result: 538 of 538 brand-side articles link a service page and 95 of 95 market articles link their market page. The two-CTA convention is unchanged: all 825 articles render exactly one mid and one bottom CTA (verified on rendered HTML).
5. **P1 trust on the lead page.** /for-brands showed "24h average response time" (an unverified measured average) and quoted a minimum budget "in the low-to-mid five figures" with no currency. Both are replaced with honest copy, including a "What happens next" list. The H1 now says what the page is.
6. **P2 metadata.** 76 search titles were shortened (they ran 66–96 characters, so Google cut off the meaningful end). 75 brand-facing descriptions were rewritten topic-first at 160 characters or fewer; many opened with a hook and never named the topic before truncation. H1s and URLs are unchanged.
7. **P2 thin content.** `instagram-algorithm-changes-what-still-works` (205 words, unsourced) was rebuilt from Instagram's own ranking explainer, Mosseri's 2025 signals and the 2024/2026 originality rules.
8. **P2 copy and hygiene.**
   - 1,134 "Term — description" list items in 108 articles became "Term: description" (prose dashes untouched).
   - One zero-width character removed.
   - One unverifiable "disputes we've seen" claim and one unsourced "90% of their effort" figure removed.
   - "found out from Twitter" changed to "X".
   - 8 articles dated before the site existed now carry their first git-commit date.

**Not promised:** rankings, traffic, AI citations or lead growth. These changes improve accuracy, crawl efficiency, page weight and the route to an enquiry. Outcomes need post-change Search Console and GA4 data (§L).

---

## B. URL coverage (from the registers)

| Count | Value |
| --- | --- |
| URLs discovered (crawl ∪ sitemap ∪ routes) | 905 (unchanged from round 1; no URLs added or removed this round) |
| Pages reviewed | 905 of 905 |
| Articles reviewed | 825 of 825 |
| Non-article pages reviewed | 80 of 80 |
| Articles UPDATE (body or FAQ edited) | 120 |
| Articles EXPAND | 1 (statistics) |
| Articles OPTIMISE (metadata, dates or template links only) | 240 |
| Articles KEEP (no material change) | 464 |
| Non-article pages UPDATE / KEEP / OWNER ACTION | 5 / 73 (incl. 6 KEEP + MONITOR) / 2 |
| Flagged MONITOR (data needed before merging) | 80 articles + 6 hubs |
| Consolidated / redirected / noindexed / created | 0 / 0 / 0 / 0 this round |
| Pending (unreviewed) | 0 |
| Blocked by missing data or tools | Consolidation decisions (no Search Console); privacy policy (legal); live browser checks (no browser connection) |

The 80 MONITOR articles break down as:

- 45 under 600 body words, mostly the X and podcast clusters
- 27 in the platform × topic matrix (X, podcast, Pinterest, Reddit, Snapchat, LinkedIn × ROI, metrics, ideas, strategy, mistakes, partnerships)
- 8 smallest north-eastern state/UT guides

## C. Page-by-page implementation log

Full log: `docs/seo-register-pages-2026-10.csv`. The pages that changed:

| URL | Findings | Change | Validation |
| --- | --- | --- | --- |
| /blog | 9.95 MB payload; slogan H1; no market entry points | Card-only client props; descriptive H1; "Guides by market" row | 200, 1 H1, canonical, JSON-LD valid; 1.59 MB / ~209 KB gz |
| /for-brands | Slogan-only H1; unverified "24h average"; currency-less minimum budget; no next steps | Descriptive H1 lead; six markets named; 3-step "What happens next"; FAQ rewritten (schema matches) | PASS |
| /services | Currency-less cost FAQ | Rewritten around cost drivers | PASS |
| /contact | No company details | Legal name, India registration, markets link | PASS |
| /for-creators | Unverifiable track-record line | Reworded | PASS |
| /privacy-policy, /terms | Placeholder, unlinked | Owner action (§I) | PASS (orphan by design) |

The other 72 pages had no material change: homepage, about, 8 services, 6 markets, the Creator Resources index and 56 hubs. Their findings are recorded per row.

## D. Blog-by-blog implementation log

Full log: `docs/seo-register-blog-2026-10.csv` (825 rows). Changes by type:

| Change | Articles |
| --- | --- |
| Template link to the related service (mid CTA goes to the inquiry form) | 291 |
| Template link to the market page | 95 |
| Body edited (facts, sources, copy) | 121 |
| — of which list-dash to colon only | 108 |
| Search title shortened | 76 |
| Meta description rewritten | 75 |
| publishedAt corrected to first git appearance | 8 |

Substantive content changes:

| Article | Change | Why |
| --- | --- | --- |
| x-creator-revenue-sharing | Retitled and rewritten: programme ended 7 Sep 2026; Original Content Rewards table; brand implications; new FAQs | Factually outdated |
| future-of-x-creator-marketing, x-creator-marketing-trends-2026, x-creator-monetization, creator-monetization-india | 7 passages updated to say Revenue Sharing was replaced by Original Content Rewards | Same |
| influencer-marketing-statistics | BBB attribution corrected; IAB 48% "must buy" added; "Figures by market" section (US, India, UK, Australia, Singapore; UAE/KSA gap stated) | Misattribution; missing market data |
| instagram-algorithm-changes-what-still-works | Rebuilt: ranking table by surface, 2025 signals, originality rules, campaign checklist, FAQs | 205 unsourced words |
| regional-influencer-marketing-india, find-indian-influencers, influencer-marketing-india | ICUBE wording matched to the source; report linked | Overstated claim |
| youtube-shopping-india-creators (creator), creator-commerce-india | Google's India announcement linked for the 160% figure | Unlinked figure |
| creator-content-distribution | Unsourced "90% of their effort" removed | Unsourced figure |
| pinterest-trends-creator-marketing | Pinterest Predicts linked | Unlinked source |
| creator-crisis-communication | "Twitter" changed to "X" | Outdated name |
| influencer-marketing-contract (disputes paragraph) | First-person "we've seen" claim removed | Unverifiable experience claim |

False positives, recorded and not changed:

- "Creator Studio" is a business-model name.
- The live-shopping mentions already state the 2023 shutdown.
- The TikTok-India mention already says "unavailable since 2020".
- "Our clients are confidential" is quoted as an agency red flag.
- The case-study hits are creator how-tos.
- `influencer-marketing-contract` opens with a direct definition.

## E. Global market coverage

| Market | Articles (spatialCoverage) | Commercial page | This round |
| --- | --- | --- | --- |
| India and global default | 730 | Homepage, 8 services | ICUBE fixes; statistics India figure; 26 state guides validated; 8 pre-launch dates corrected |
| UAE | 20 | /markets/uae | All 20 link /markets/uae; descriptions and titles where long |
| Saudi Arabia | 11 | /markets/saudi-arabia | All link /markets/saudi-arabia |
| GCC multi-country, Qatar, Kuwait, Oman | 29 | /markets (hub) | All link /markets |
| Australia | 25 (+1 multi-market) | /markets/australia | All link /markets/australia |
| UK | 9 | /markets/uk | All link /markets/uk |
| Singapore | 0 articles | /markets/singapore | Added to the /blog "Guides by market" row; Singapore figure in the statistics article |

**Further market-specific content that is justified, pending demand data:**

- A Singapore disclosure-rules guide (primary sources already gathered in round 1).
- Qatar or Kuwait market pages only if Search Console shows demand.

## F. Technical SEO

| Issue | Severity | Fix | Validation |
| --- | --- | --- | --- |
| /blog serialised 825 full article bodies into the client payload | P0 | `BlogCardData` card-only props | 9.95 MB → 1.59 MB HTML; ~209 KB gzipped |
| Brand articles with no route to a service page | P1 | Contextual end-of-article link (`src/lib/blogServiceLink.ts`) | 538/538 brand articles link `/services/*`; 95/95 market articles link `/markets*` |
| Truncated search titles | P2 | 76 `seoTitle`s ≤ 60 chars | 0 duplicate titles across 905 URLs |
| Descriptions not leading with the topic | P2 | 75 `metaDescription`s ≤ 160 chars | 0 duplicate descriptions |
| Publish dates before the site existed | P2 | First git appearance | 0 pre-launch or future dates |
| Zero-width character in content | P3 | Removed | 0 invisible characters site-wide |

Unchanged and verified:

- all 905 URLs return 200
- one H1 per page
- self-referencing canonicals
- 0 invalid JSON-LD (BlogPosting, BreadcrumbList, FAQPage on articles)
- sitemap reconciles exactly with crawled URLs
- robots allows everything except /api/
- no hreflang (correct: no language or regional alternates exist)
- 35 redirects, no chains, no internal links to redirected URLs
- all images have alt text and dimensions

Article pages are 120–190 KB.

## G. Conversion and analytics

- **Two CTAs per article:** verified on rendered HTML for all 825 (one `BlogMidCTA`, one `BlogBottomCTA`). On 253 articles the mid CTA links to a service page by design. Their clicks still fire `blog_mid_cta_click`.
- **Event names unchanged:** `blog_mid_cta_click`, `blog_bottom_cta_click`, `blog_lead_form_start`, `blog_lead_form_submit`. Round 1 added `brand_lead_form_start` and `generate_lead`. The new end-of-article link is a plain link and fires no event, so nothing is double-counted.
- **/for-brands:** "What happens next" sets expectations (reply within one business day, a call, then a written plan with creator and agency fees separate). The form, its fields and its validation are unchanged.
- **Forms:** the API was re-tested in round 1: honeypot path returns 200 with no email; invalid input returns 400 with field errors; an over-long hidden field returns 400. The client clips hidden fields. Real email delivery was not tested, because it would send to the live inbox.
- **Depends on external configuration:** in GA4, mark `generate_lead` as a key event and register `lead_source` and `cta_topic` as custom dimensions. Not observed firing in a browser (no browser connection).

## H. Research references (checked 2026-10-12 unless noted)

| Source | Used for | Type |
| --- | --- | --- |
| TechCrunch, "X replaces 'misaligned' revenue sharing program with Original Content Rewards" (8 Aug 2026) | X article and 7 passages | Reputable press (X's help page returned 403) |
| BBB National Programs, Influencer Trust Index (26 Jun 2025) | Statistics attribution | Primary |
| IAB, Creator Economy Ad Spend (20 Nov 2025) | $37B, 26%, 48% "must buy" | Primary |
| ASCI Annual Complaints Report press release (28 May 2025) | 1,015 influencer ads, 98%, 14% | Primary (read in full) |
| IAB UK and IRM (2026) | £966m | Primary (round-1 register) |
| IAB Australia, Creator Connect 2026 | Six in ten shoppers | Primary (round-1 register) |
| DataReportal, Digital 2026: Singapore | 5.33m, 90.6% | Primary data publisher |
| IAMAI-Kantar, Internet in India 2024 (ICUBE) | 886m users; 98% access Indic-language content | Primary PDF; figures confirmed via coverage |
| Google India blog, YouTube Shopping (Sep 2026) | 160% average payout growth, Q1 2025–Q1 2026 | Primary |
| Instagram, "Instagram Ranking Explained" (31 May 2023) | Signals by surface; watermark/repost demotion | Primary |
| Social Media Today on Mosseri (Jan 2025) | Watch time, likes, sends | Reputable press (video not transcribed) |
| Gigazine citing The Verge (May 2024); PetaPixel (30 Apr 2026) | Aggregator and originality rules | Press |
| Pinterest Predicts 2026; Axios coverage | Trend figures | Primary page (content truncated); figures confirmed via Axios |
| Google Search Central, AI features and your website (updated 2025-12-10) | No special AI files or schema; SEO basics apply | Official |

**Hypotheses, not facts:**

- Shorter titles and topic-first descriptions should lift CTR.
- Service links from articles should lift service-page sessions and enquiries.

Both are to be measured (§L).

## I. Remaining issues

| Item | Owner | Why it's not done |
| --- | --- | --- |
| Counsel-reviewed privacy policy and terms; then restore footer links | Business and legal | Legal text must not be invented |
| Consolidate the 27-URL platform × topic matrix and the 45 short X/podcast articles | SEO, after data | Merging without Search Console impressions and backlink data could remove pages that earn traffic |
| 8 smallest north-eastern state guides | SEO, after data | Same |
| 258 descriptions still over 165 chars (mostly Creator Resources keyword lists that truncate cleanly) | P3 | Low value per edit; the brand-facing ones were done |
| 6 Creator Resources hub descriptions over 200 chars (also visible on page) | P3 | Creator-side, low lead value |
| 248 prose em dashes | P3 | Need sentence-level judgement; list dashes were the bulk (1,134) and are done |
| 571 articles with no external links | P3 | Most are how-to frameworks without factual claims; articles with statistics were checked individually (§D) |
| Real email delivery, mobile and visual QA, GA events in a browser | Owner or next session | Live inbox; browser extension not connected |
| Permissioned case studies | Business | None verified; the largest trust gap |

## J. Files changed

| File | Purpose |
| --- | --- |
| `src/components/blog/BlogCard.tsx`, `BlogExplorer.tsx`, `src/app/blog/page.tsx` | Card-only client props (P0); descriptive H1; market guide links |
| `src/lib/blogServiceLink.ts` (new), `src/app/blog/[slug]/page.tsx` | End-of-article related-service and market link |
| `src/components/brands/BrandsHero.tsx`, `InquirySection.tsx`, `src/app/for-brands/page.tsx` | Descriptive H1, markets, "What happens next", honest FAQ |
| `src/app/services/page.tsx`, `src/app/contact/page.tsx`, `src/components/creators/Benefits.tsx` | FAQ, company details, claim wording |
| `src/content/blog.ts` and 7 content modules | Fact corrections, sources, titles, descriptions, dates, list punctuation |
| `docs/seo-register-blog-2026-10.csv`, `docs/seo-register-pages-2026-10.csv`, `docs/seo-audit-progress.md`, this report | Registers, tracker, report |

## K. Validation evidence (final build)

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | exit 0 |
| `npm run lint` | 0 errors, 6 warnings (same pre-existing unused imports) |
| `npm run build` | exit 0, 1,744 static pages |
| Crawl from / plus sitemap | 905 URLs, all 200; 0 duplicate titles/descriptions/H1s; 0 pages without exactly one H1; 0 canonical mismatches; 0 noindex; 0 invalid JSON-LD; 0 URLs outside the sitemap; 0 broken internal links; 2 orphans (legal, by design) |
| Rendered-article check (825 pages) | 825 with exactly 1 mid + 1 bottom CTA; 825 with one H1; 825 self-canonical; 825 with BlogPosting |
| Link coverage | 538/538 brand-side articles link `/services/*`; 95/95 market articles link `/markets*` |
| Page weight | /blog 1.59 MB HTML (was 9.95 MB); ~209 KB gzipped (live today: 2.44 MB) |
| Register reconciliation | 825 + 80 = 905 rows, matching the crawl; 0 rows failing validation |
| hreflang / redirects | None needed / 35 unchanged, no chains |
| Mobile, visual, Core Web Vitals field data, GA events, email delivery | **Not run** (no browser connection, no CrUX/GA access, live inbox) |

## L. Measurement plan

Baseline: export Search Console (last 3 months, by page, query and country) **before deploying**, plus GA4 events by `lead_source`.

| What | Where | Window | Decision rule |
| --- | --- | --- | --- |
| /blog LCP and INP on mobile | Search Console Core Web Vitals; PageSpeed Insights | 28-day CrUX after deploy | Expect improvement; if not, investigate card rendering |
| CTR on the 76 retitled and 75 re-described articles | Search Console, page filter | 8 weeks before vs after (same positions) | Keep if CTR is flat or up; revisit otherwise |
| Clicks to `/services/*` from articles | GA4 page_referrer or path exploration | Monthly | Low use means testing link copy |
| Brand enquiries by `lead_source` (blog:*, service:*, market:*) | GA4 `generate_lead`, lead email | Monthly | Ranks the pages that create leads |
| Qualified-lead rate by market | Lead email "CTA Topic / Market" + manual tagging | Monthly | Directs content investment |
| Impressions and clicks for the X, Instagram algorithm and statistics articles | Search Console | 8–12 weeks | Confirms refreshed content is re-crawled |
| MONITOR articles: impressions, clicks, linking pages | Search Console + backlink tool | 90 days | No impressions and an overlapping pillar: consolidate with a 301 |
| Non-brand commercial queries ("influencer marketing agency [market]") | Search Console, query filter, by country | Monthly | Trend only; positions fluctuate |

Expect re-crawl to take days to weeks. Judge trends after indexing, not daily movements.

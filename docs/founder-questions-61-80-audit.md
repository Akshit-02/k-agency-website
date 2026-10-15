# Founder questions, batch 4 (roadmap topics 61–80: ROI, analytics, attribution and reporting): audit, decisions and implementation log

Date: 2026-10-14. Status: implemented in the working tree, uncommitted and not deployed.

Summary: the site already had a dense measurement cluster: 30+ brand-side pages on ROI, KPIs, reporting, dashboards, benchmarking, testing, incrementality and MMM, most reviewed in October 2026. So this batch is mostly updates.

| Decision | Count | Topics |
| --- | --- | --- |
| CREATE | 5 | 66, 67, 68 (with 70 folded in), 69, 80 (with 75 folded in) |
| UPDATE | 8 | 61 (with 63 merged in), 62, 64, 65, 71 (with 73 merged in), 77, 78, 79 |
| SKIP | 3 | 72, 74, 76: the existing owners already satisfy the intent |

No URLs changed and no redirects were needed.

## 1. Audit findings

Method:
- Imported all 843 posts from `src/content/blog.ts` and its modules.
- Searched slugs, titles and full body text for ROI, KPI, attribution, UTM, promo code, affiliate, incrementality, lift, CLV/LTV, payback, dashboard, benchmark, testing, scale/pause and journey terms.
- Read the outline and full text of every plausible owner page.

Existing owners for this cluster (brand side):

| Page | Covers | State before batch 4 |
| --- | --- | --- |
| `measuring-influencer-campaign-roi` | ROI framework, formulas, attribution methods, India/GCC/AU gaps | Strong. No quick answer, no step-by-step calculation, ambiguous "Return" in the ROI formula, no UK/SG notes, 5 em dashes, no hero |
| `influencer-marketing-kpis` | KPIs by objective | Strong. Heading said "15 KPIs" but the table lists 17; no numerator/denominator definitions |
| `influencer-reach-vs-impressions` | Reach, impressions, views | Good. No engagement section; missed YouTube's 24 Aug 2026 view redefinition |
| `influencer-marketing-brand-awareness` | Awareness planning and measurement table | Good. No concrete measurement plan |
| `influencer-brand-lift-survey`, `influencer-brand-lift-gcc` | Survey design, platform studies | Good; left as is |
| `influencer-marketing-report` | 12-section report, template, finance and client presentation | Strong. Missing a one-page leadership summary and a pre-send checklist |
| `influencer-marketing-dashboard` | Dashboard design | Strong (reviewed Oct 2026) |
| `influencer-benchmarking` | Fair benchmarks, own baselines | Strong; no unsourced benchmark figures |
| `influencer-marketing-cpm-cpe-cpa` | Cost formulas, inputs, worked example | Strong (reviewed Oct 2026) |
| `influencer-marketing-testing` | Creator experiments | Strong. No guidance on sample size, assignment or duration |
| `influencer-customer-quality` | Customer quality ladder, cohorts | Good. No CLV/payback formulas despite a CLV tag |
| `influencer-marketing-incrementality` | Holdouts, geo tests, lift studies | Good. No incremental-ROI calculation and no research evidence |
| `influencer-marketing-mix-modeling`, `influencer-reporting-discrepancies`, `influencer-data-analytics`, `influencer-campaign-post-mortem`, `influencer-campaign-optimization`, `mid-campaign-optimization`, `break-even-roas-influencer-campaigns`, `influencer-marketing-roi-forecasting`, `influencer-marketing-business-case`, `influencer-analytics-tools` | Adjacent measurement topics | Left as is; used as link targets |

Gaps (no brand-side owner):
- A UTM implementation guide. UTMs appeared only as a short section in `influencer-marketing-website-traffic`, plus creator-side pages.
- Creator-level sales tracking that compares methods and deduplicates orders. This was spread across `influencer-marketing-sales`, `influencer-affiliate-program` and creator-side `creator-discount-codes`.
- An attribution-model comparison. Only a few sentences existed.
- Diagnosing engagement without sales. No page existed.
- A scale/pause/stop decision framework. Fragments existed in `influencer-marketing-testing` and `is-influencer-marketing-worth-it`.

Creator Resources pages (`creator-attribution`, `creator-discount-codes`, `creator-ab-testing`, `creator-content-roi`, `creator-campaign-reporting`) target creators, not brands, so they are not competing owners.

## 2. Research summary

Sources were accessed 2026-10-14. Primary sources were used where available.

| Fact used | Source |
| --- | --- |
| GA4 UTM parameters; utm_creative_format and utm_marketing_tactic not reported; values case sensitive; missing values show as (not set) | https://support.google.com/analytics/answer/10917952 |
| GA4 default channel group rules (Organic Social, Paid Social, Affiliates, Unassigned) | https://support.google.com/analytics/answer/9756891 |
| GA4 offers data-driven, paid and organic last click, and Google paid channels last click; first click, linear, time decay and position-based removed as of Nov 2023 | https://support.google.com/analytics/answer/10596866 |
| GA4 lookback windows: 30 days by default for acquisition key events (or 7); 90 days by default for others (or 30/60) | https://support.google.com/analytics/answer/10597962 |
| GA4 attribution paths report (formerly conversion paths) | https://support.google.com/analytics/answer/10595568 |
| YouTube counts a view from the first frame in all formats from 24 Aug 2026; the old definition is now "engaged views"; most analytics remain on engaged views | https://blog.youtube/inside-youtube/engaged-views-youtube-explained/ (post dated 19 Aug 2026) |
| Amazon Attribution marketplaces include IN, AE, SA, UK, AU, SG; eligible: Brand Registry sellers, vendors, agencies | https://advertising.amazon.com/solutions/products/amazon-attribution |
| ICO storage and access technologies guidance finalised 29 April 2026, with a statistical-purposes exception | https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/ |
| DPDP Rules notified Nov 2025, with most obligations phased over 18 months | MeitY data protection framework page; corroborated by Hogan Lovells and Mondaq summaries |
| Gordon, Zettelmeyer, Bhargava and Chapsky (2019), *Marketing Science* 38(2): observational methods often failed to recover the results of 15 Facebook RCTs | Kellogg research page; doi 10.1287/mksc.2018.1135 |
| Lewis and Rao (2015), *QJE*: 25 field experiments; median ROI confidence interval over 100 percentage points wide; informative tests can need more than 10 million person-weeks | doi 10.1093/qje/qjv023 |
| Singapore GST 9% (from 1 Jan 2024); UK VAT standard rate 20% | Standard rates, stated without links |

Limitations:
- No Search Console, GA4 or keyword-tool access. No search volumes, difficulty, rankings or traffic were used or invented.
- SERP and competitor review was limited to what web search returned. Search intents are inferred from query wording and existing site architecture.
- Instagram's own help pages didn't return definitions to the fetch tool. The existing Instagram "views" statement (sourced to Social Media Today) was kept; third-party sources disagree on whether Reel replays count.
- TikTok's official view definition couldn't be verified, so articles tell readers to check the in-app definition.
- The DOI link for Lewis and Rao returns 403 to bots (the publisher blocks them) but resolves in browsers.

## 3. Decision table

| # | Topic | Decision | Owner URL (final) |
| --- | --- | --- | --- |
| 61 | How to measure influencer ROI | UPDATE | /blog/measuring-influencer-campaign-roi |
| 62 | KPIs | UPDATE | /blog/influencer-marketing-kpis |
| 63 | Calculate ROI with formulas | CONSOLIDATE into 61 (same query intent) | /blog/measuring-influencer-campaign-roi#calculate-roi |
| 64 | Reach vs impressions vs engagement | UPDATE | /blog/influencer-reach-vs-impressions |
| 65 | Measure brand awareness | UPDATE | /blog/influencer-marketing-brand-awareness#measuring-awareness |
| 66 | UTM tracking | CREATE | /blog/influencer-utm-tracking |
| 67 | Codes, affiliate links, analytics | CREATE | /blog/track-influencer-sales |
| 68 | Attribution models | CREATE | /blog/influencer-marketing-attribution-models |
| 69 | Engagement but no sales | CREATE | /blog/influencer-engagement-no-sales |
| 70 | Contribution to customer journey | CONSOLIDATE into 68 | /blog/influencer-marketing-attribution-models#customer-journey |
| 71 | What a report should include | UPDATE | /blog/influencer-marketing-report#report-checklist |
| 72 | Dashboard | SKIP (owner complete, reviewed Oct 2026) | /blog/influencer-marketing-dashboard |
| 73 | Presenting to CEOs | CONSOLIDATE into 71 | /blog/influencer-marketing-report#finance |
| 74 | Benchmarks | SKIP (owner complete, no unsourced figures) | /blog/influencer-benchmarking |
| 75 | Reports into decisions | CONSOLIDATE into 80 | /blog/scale-pause-stop-influencer-campaigns#report-to-decisions |
| 76 | CPE, CPC, CPA | SKIP (owner complete, reviewed Oct 2026) | /blog/influencer-marketing-cpm-cpe-cpa |
| 77 | A/B tests | UPDATE | /blog/influencer-marketing-testing#test-size |
| 78 | Repeat purchases and CLV | UPDATE | /blog/influencer-customer-quality#lifetime-value |
| 79 | Incrementality | UPDATE | /blog/influencer-marketing-incrementality |
| 80 | Scale, pause or stop | CREATE | /blog/scale-pause-stop-influencer-campaigns |

Topic 73 is merged rather than created because leadership presentation already appeared in three places: the report, data-analytics and dashboard pages. A fourth page would compete with them.

## 4. Keyword and intent map

All intents are inferred; there is no volume data.

| URL | Primary query (working) | Intent | Overlap risk and guard |
| --- | --- | --- | --- |
| measuring-influencer-campaign-roi | how to measure / calculate influencer marketing ROI | Informational, how-to | Shares formulas with cpm-cpe-cpa. ROI owns return; CPM page owns unit costs |
| influencer-marketing-kpis | influencer marketing KPIs | Informational | Formula table links to the ROI page |
| influencer-reach-vs-impressions | reach vs impressions vs engagement | Definitional | Engagement-rate depth stays on influencer-engagement-rate |
| influencer-marketing-brand-awareness | measure influencer brand awareness | Informational | Survey design stays on influencer-brand-lift-survey |
| influencer-utm-tracking | influencer UTM tracking, UTM parameters for influencers | How-to | Website-traffic keeps a short UTM section that links here |
| track-influencer-sales | how to track influencer sales | How-to | Sales page is strategy and links here for tracking; affiliate page is program design |
| influencer-marketing-attribution-models | influencer marketing attribution models | Informational | Incrementality page owns causation; this page owns credit sharing |
| influencer-engagement-no-sales | influencer engagement but no sales | Diagnostic | Engagement-quality owns vanity detection; optimization owns the cycle |
| influencer-marketing-report | influencer marketing report | Informational/template | Dashboard owns live views |
| influencer-marketing-testing | influencer A/B testing | How-to | ugc-paid-social-testing owns ad-account testing |
| influencer-customer-quality | influencer CLV, repeat purchases | Informational | Customer-retention owns retention programs |
| influencer-marketing-incrementality | influencer incrementality | Informational | MMM page owns modeling |
| scale-pause-stop-influencer-campaigns | scale or stop influencer campaign | Decision | Testing keeps a "ready to scale?" checklist that links here; post-mortem owns the meeting |

Search Console should be checked for these risky pairs:
- attribution-models vs incrementality
- track-influencer-sales vs influencer-marketing-sales
- scale-pause-stop vs testing and post-mortem

## 5. Content summary

**New pages** (`src/content/brand-guides/founder-measurement.ts`):
- **influencer-utm-tracking** (66):
  - Parameter table from GA4 docs.
  - Medium choice, mapped to GA4 channel rules.
  - A naming convention template and a placement table (Story, bio, captions not clickable, YouTube, podcasts, WhatsApp).
  - Where to read results in GA4; why tagged numbers run low.
  - Privacy notes (ICO 2026 guidance, DPDP Rules phasing, UAE/AU/SG local advice).
- **track-influencer-sales** (67):
  - Methods compared: code, link, affiliate, vanity URL, survey, creator bundle.
  - Code setup and the discount-as-cost point; affiliate credit rules and disclosure (ASCI).
  - A deduplication rule with a hypothetical worked table (380 raw → 300 deduplicated).
  - Amazon Attribution (verified markets), COD, WhatsApp and store orders.
  - A creator sales sheet template and honest-reporting rules.
- **influencer-marketing-attribution-models** (68 + 70):
  - Model table with current GA4 availability.
  - One hypothetical ₹3,000 journey under five models.
  - Platform-reported and self-reported attribution.
  - A customer-journey evidence table by stage, including the attribution paths report, and a "choosing an approach" table.
- **influencer-engagement-no-sales** (69):
  - A three-step diagnosis: measurement, stage drop-off with hypothetical funnel arithmetic, then objective and fit.
  - A symptom/cause/check table, an order of fixes, and when to stop.
- **scale-pause-stop-influencer-campaigns** (80 + 75):
  - Decision rules set before launch.
  - A scale/fix/pause/stop table, decided at three levels (creator, campaign, program).
  - A decision log template (topic 75).
  - Scaling safely, pausing and stopping properly, and a hypothetical example.

**Updates:**
- **ROI** (61 + 63):
  - Quick answer.
  - "Calculate influencer ROI step by step": five steps, a return-definitions table (revenue, gross profit, contribution, incremental contribution, broader value) and a worked example.
  - The example: ₹3,00,000 cost; 400 orders; 2.4x ROAS; 32% attributed ROI; about −21% incremental ROI at 60% incrementality. All figures are hypothetical and checkable.
  - ROI formula clarified to contribution; UK/Singapore section; links to the new pages.
- **KPIs** (62): heading corrected to 17; KPI formula table (numerator, denominator, source).
- **Reach / impressions** (64): YouTube engaged-views change, engagement-rate bases table, platform-definition caveat, two FAQs.
- **Brand awareness** (65): a five-step awareness measurement plan (baseline, during, after, recall survey, share of search) with a Search Console source.
- **Report** (71 + 73): pre-send checklist; "Presenting results to CEOs and finance teams" with a one-page leadership summary template; ROI wording fixed.
- **Testing** (77): "How big and how long should a test be?" covering unit of comparison, Lewis and Rao, an assignment rule, duration, timing, paid-layer A/B tests and pre-written decision rules.
- **Customer quality** (78):
  - CLV, value-to-cost and payback formulas, with a hypothetical AED cohort example (ratio 0.75 → 0.92 by day 90).
  - Caveats and a CLV FAQ.
- **Incrementality** (79):
  - "From lift to incremental ROI": codes give 5% attributed ROI against −16% incremental, a hypothetical showing codes can over-credit.
  - Research section (Gordon et al. 2019; Lewis and Rao 2015).
  - Links to the attribution and sales-tracking pages.

All hypothetical figures are labelled. No Kudozz results, clients, benchmarks or credentials were added. Pages use American spelling and contain no em dashes.

## 6. SEO implementation

**Metadata:**
- New pages have unique titles (search title plus " — Kudozz" ≤ 70 characters, or the suffix dropped per `src/lib/metadata.ts`), meta descriptions of 110–170 characters, tags and related posts.
- Updated pages with changed metadata:
  - measuring-influencer-campaign-roi: seoTitle and a new metaDescription.
  - influencer-reach-vs-impressions: seoTitle and meta.
  - influencer-customer-quality: seoTitle and meta.

**Dates:**
- `updatedAt: 2026-10-14` is set only on the 8 substantially updated pages, so sitemap lastmod and JSON-LD dateModified follow.
- `lastReviewed` is October 2026.
- Link-only pages keep their dates.

**Canonicals, structured data and sitemap:**
- Canonicals, Open Graph, BlogPosting, BreadcrumbList and FAQPage JSON-LD come from the existing template, unchanged.
- Visible FAQs match the JSON-LD.
- The sitemap includes all 5 new URLs automatically.

**Template changes:** none. The FAQPage decision is still open; see section 12.

## 7. Internal linking

**Links from the new pages:**
- About 45 contextual links to real URLs: ROI, CPM, discrepancies, affiliate program, Amazon/Flipkart, customer quality, funnel, MMM, KPIs, engagement quality, mid-campaign optimization, testing, break-even ROAS, report, post-mortem, cancellation and incrementality.
- Each new page is also linked from at least two updated pages.

**Links added to existing pages, pointing to the new pages:**

| Existing page | Links to |
| --- | --- |
| measuring-influencer-campaign-roi | utm, sales tracking, attribution |
| influencer-marketing-kpis | utm, sales tracking, ROI#calculate-roi |
| influencer-marketing-report | scale-pause-stop, ROI#calculate-roi |
| influencer-marketing-testing | scale-pause-stop |
| influencer-marketing-incrementality | attribution, sales tracking, ROI#calculate-roi |
| influencer-reach-vs-impressions | engagement rate, engagement quality (existing pages) |

**Link-only additions:** each of these pages gained one paragraph and keeps its dates.
- influencer-marketing-website-traffic → utm
- influencer-marketing-sales → sales tracking. Also fixed a pre-existing duplicate link text, "Instagram partnership ads", which appeared twice in one paragraph so the renderer linked both.
- influencer-marketing-funnel → attribution#customer-journey
- influencer-reporting-discrepancies → utm, attribution
- influencer-campaign-post-mortem → scale-pause-stop
- influencer-engagement-quality → engagement-no-sales
- is-influencer-marketing-worth-it → scale-pause-stop
- influencer-campaign-optimization → engagement-no-sales

## 8. Conversion tracking

**CTA entries:** five `BRAND_GUIDE_CTAS` entries were added in `src/lib/blogCta.ts`.

| Pages | Topic | Mid CTA goes to |
| --- | --- | --- |
| UTM, sales tracking, attribution | Campaign Measurement | /services/reporting |
| Scale-pause-stop | Campaign Optimization | /services/reporting |
| Engagement-no-sales | Campaign Optimization | /services/campaign-strategy |

- Bottom CTAs go to `/for-brands?...&pos=bottom#inquiry`.
- Updated pages keep their existing CTA mapping.

**Analytics:** `blogAnalytics.ts`, `BlogMidCTA`, `BlogBottomCTA` and `BrandInquiryForm` are unchanged, and no events were added.

**Local event check** (gtag stubbed in a headless browser; no form submitted):
- track-influencer-sales and influencer-engagement-no-sales each fired `blog_mid_cta_click` and `blog_bottom_cta_click` with the correct topic and position.
- On the inquiry page, the first input fired `brand_lead_form_start` and `blog_lead_form_start`.
- `blog_lead_form_submit` was not exercised, because submitting sends a real email.
- Delivery to GA4 is unverified (no GA4 access).

**Prefill:** "Campaign Measurement" and "Campaign Optimization" topics don't map to a campaign-goal option, so the goal field isn't pre-filled. This is pre-existing behavior for the existing measurement pages and was left unchanged.

## 9. Images and accessibility

- Six hero SVGs were generated in `public/blog/brand-guides/`: the five new pages plus measuring-influencer-campaign-roi, which had no hero.
- Each uses the site palette, an `<title>` element and a descriptive alt in the post data.
- They are diagrams, not dashboards or charts that could be mistaken for real data.
- No screenshots were created.
- Every other updated page already had a hero.

## 10. Validation results

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; 6 pre-existing warnings in untouched files |
| `npm run build` | Pass; 1,790 static pages; 848 posts |
| Content checks (`check4.py`, 21 pages) | 0 issues: links and anchors resolve, link text unique per paragraph, meta 110–170, title length, no duplicate titles or metas, no em dashes |
| Crawl of `next start` (21 pages) | All 200; 1 H1; self-canonical; valid JSON-LD (BlogPosting, BreadcrumbList, FAQPage); one mid CTA aside placed after ≥3 H2s; bottom CTA; in sitemap with correct lastmod; listed on /blog |
| Links and images | 127 internal links and 21 images, all 200 |
| Phone width (390px, CDP device emulation, mobile) | 13 batch 4 pages, then all 77 founder-roadmap pages from batches 1–4: document width = viewport (390); no element overflows outside a scroll container |
| CTA and form events | See section 8 |
| Secrets | 0 occurrences of server-only `.env` values in `.next/static` (checked without printing them) |
| Automated tests | None exist in the repo |

## 11. Files changed

**Created:**
- `src/content/brand-guides/founder-measurement.ts`
- `docs/founder-questions-61-80-audit.md`
- Six hero SVGs in `public/blog/brand-guides/`:
  - influencer-utm-tracking
  - track-influencer-sales
  - influencer-marketing-attribution-models
  - influencer-engagement-no-sales
  - scale-pause-stop-influencer-campaigns
  - measuring-influencer-campaign-roi

**Edited:**
- `src/content/brand-guides/index.ts` (registration)
- `src/lib/blogCta.ts` (5 CTA entries)
- `src/content/blog.ts`: ROI, KPIs, brand awareness, report and funnel
- `src/content/brand-guides/measurement.ts`: reach vs impressions
- `src/content/brand-guides/optimization-cycle.ts`: testing, post-mortem and optimization
- `src/content/brand-guides/advanced-practice.ts`: incrementality
- `src/content/gcc-guides/gcc-performance.ts`: customer quality
- `src/content/brand-guides/planning-and-programs.ts`: website traffic
- `src/content/brand-guides/objectives-and-scale.ts`: sales
- `src/content/brand-guides/measurement-strategy.ts`: discrepancies
- `src/content/brand-guides/intelligence-scoring.ts`: engagement quality
- `src/content/brand-guides/founder-questions.ts`: worth-it
- `docs/seo-register-blog-2026-10.csv`: 5 rows added, 16 updated; 848 rows
- `docs/seo-audit-progress.md`: F4 row

**Removed:** none.

## 12. Outstanding risks

**Search Console:**
- Monitor the overlap pairs in section 4 once Search Console is connected.
- The measuring-influencer-campaign-roi seoTitle dropped "(Indian Brands)". Watch its India queries.

**Content follow-ups:**
- The YouTube view redefinition (24 Aug 2026) isn't yet reflected on other YouTube pages:
  - youtube-influencer-marketing-roi
  - youtube-analytics-for-creators
  - short-form-video-analytics
  - youtube-influencer-marketing-* metrics pages
  These should be reviewed next.
- Older platform ROI pages (x-, podcast-, instagram-, snapchat-, pinterest-, reddit-, linkedin-*-roi) are thin (420–1,260 words). They overlap the general ROI owner and should be reviewed for consolidation.

**Verification gaps:**
- Instagram and TikTok view definitions couldn't be verified from first-party pages.
- Form submission and GA4 receipt of events are unverified.

**Carried over:**
- Owner decisions on FAQPage markup, rate-guide naming and a pilot offer page.
- Thin UGC owners: always-on-ugc-marketing, instagram-ugc-marketing, ugc-marketing-strategy.
- Unsourced INR rate tables on platform rate pages.

**Legal:** privacy notes are general and point to official guidance; counsel review is recommended before any consent-banner change.

## 13. Next batch (81–100): creator discovery, negotiation, selection and long-term partnerships

Expect heavy overlap again. Owners to check first:
- Discovery: `find-indian-influencers`, the platform `how-to-find-*-influencers` pages, `influencer-shortlist`, `creator-discovery-platform`, `ai-influencer-discovery`, `social-listening-creator-discovery` and the `/services/creator-discovery` page
- Vetting: `how-to-vet-influencers` (with the vetting checklist tool), `how-to-identify-fake-followers`, `influencer-engagement-quality` and `micro-vs-macro-influencers`
- Negotiation: `how-to-negotiate-with-influencers`, `negotiate-influencer-rates` (a likely duplicate pair to check first) and `how-much-to-pay-influencers`
- `influencer-outreach-strategy`, `influencer-outreach-email`, `personalized-influencer-outreach` and `influencer-onboarding`
- `influencer-retention`, `repeat-influencer-collaborations` and the ambassador program pages
- `influencer-relationship-management`, `influencer-marketing-crm` and `creator-intelligence`

Likely gaps to research:
- Creator shortlisting scorecards that weigh audience location and buying intent (link to the new engagement-no-sales page).
- Negotiating usage rights and exclusivity together with fees.
- Evaluating a creator's past brand-deal performance, including asking for case data without fabricating benchmarks.
- When to move a creator from one-off to retainer or ambassador. Use cohort CLV from `influencer-customer-quality` as evidence.
- Regional creator sourcing in GCC and AU/UK/SG markets (check the market guides first).

Verify against official sources:
- Meta's creator marketplace and partnership-ad permission flows.
- YouTube BrandConnect availability by market.
- ASCI, ASA/CMA, ACCC/AANA, IMDA/ASAS and UAE NMA rules on disclosing gifted and affiliate relationships.

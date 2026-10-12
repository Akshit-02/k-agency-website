# Retention, B2B, commerce, operations and program evidence (1760–1809): audit and decisions

Date: 2026-10-10. Builds on the uncommitted GCC, Australia, 1610–1659, 1660–1709 and 1710–1759 batches. No uncommitted work was overwritten; edits to already-modified files are insertions only.

- **New modules:** `src/content/brand-guides/customer-commerce.ts` (`customerCommercePosts`) and `src/content/brand-guides/program-evidence.ts` (`programEvidencePosts`), registered in `brand-guides/index.ts`.
- **Conventions kept:** American spelling (brand guides), heroes in `public/blog/brand-guides/`, CTA copy in `BRAND_GUIDE_CTAS` (`src/lib/blogCta.ts`), no in-body CTA sections, no em dashes, no future dates, hypothetical examples labelled.

## Executive summary

Most of the 50 candidates already had owners. The repository has 809 blog URLs before this batch, and agency selection, RFPs, scorecards, contingency, renewals, documentation, governance, usage rights, brand safety, testing, benchmarking, B2B, SaaS, mobile apps and briefs are all covered by dedicated pages. The real gaps were customer advocacy, AI shopping assistants, marketplace sellers, creator data privacy, brand lift survey design, the finance business case and employer branding.

**Decisions: 7 CREATE, 5 UPDATE, 11 CONSOLIDATE, 27 SKIP.** No redirects, no deletions, no URL changes.

## Baseline (before edits)

- `git status`: 96 entries of uncommitted user work (GCC, Australia and brand-guide batches); preserved.
- `npx tsc --noEmit`: exit 0. `npm run build`: exit 0, 1,706 static pages.
- 809 article slugs across `src/content` (inventory built from source, not titles alone; owner pages' headings and bodies were read for the clusters in question).
- **Security (unchanged, fine):**
  - `src/lib/mailer.ts` is `server-only` and reads `EMAIL_FROM`, `EMAIL_TO` and `EMAIL_APP_PASSWORD`.
  - `NEXT_PUBLIC_APP_PASSWORD`, `NEXT_PUBLIC_FROM_EMAIL` and `NEXT_PUBLIC_TO_EMAIL` have 0 references in `src`.
  - After the build, the password value appears in 0 files under `.next/static` (checked without printing it).
  - If the old `NEXT_PUBLIC_*` variables still exist at the host, delete them; rotate the app password if they were ever deployed.
- **Data not available:** no Search Console, analytics, backlink or search-volume data. Priorities are qualitative.

## Decision matrix

H = high, M = medium, L = low. Evidence = strength of verifiable sources for the page's factual claims.

| ID | Topic | Decision | URL / owner | Intent | Overlap risk | Evidence | Value | Reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1760 | Influencer marketing for customer retention | UPDATE | /blog/influencer-marketing-customer-retention | Commercial | H if duplicated | M | H | Existing hub was thin (~1,100 words, "12 min read"); now the owner for 1761–1768. |
| 1761 | Creator-led customer onboarding | CONSOLIDATE | …customer-retention#post-purchase | Informational | H | M | M | Same intent as 1768; a post-purchase timeline table. |
| 1762 | Explaining overlooked features | CONSOLIDATE | …customer-retention#overlooked-features | Informational | H | L | M | Too narrow for a URL. |
| 1763 | Reducing confusion and returns | CONSOLIDATE | …customer-retention#returns | Commercial | M | L | M | Return-reason table; no return-rate statistics used (none verified). |
| 1764 | Customer advocacy program | CREATE | /blog/customer-advocacy-program | Commercial | M (ambassador page) | H (ASCI, BIS) | H | Ambassador page covers paid creators, not customers; x-brand-advocacy is X-only. |
| 1765 | Loyalty programs beyond codes | CONSOLIDATE | …customer-retention#loyalty | Commercial | M | L | M | A section, not a page. |
| 1766 | Repeat customers into creator partners | CONSOLIDATE | /blog/customer-advocacy-program#graduate | Commercial | H | M | M | Same intent as 1764. |
| 1767 | Measuring creator content in repeat purchases | CONSOLIDATE | …customer-retention (measurement subheading) | Informational | H | M | M | Cohort and holdout methods added to existing measurement section. |
| 1768 | Post-purchase creator campaigns | CONSOLIDATE | …customer-retention#post-purchase | Informational | H | M | M | Merged with 1761. |
| 1769 | Creator feedback for customer experience | SKIP | /blog/creator-feedback-loop, /blog/customer-insights-influencer-brief | Informational | H | — | — | Covered. |
| 1770 | B2B influencer marketing in India | SKIP | /blog/b2b-influencer-marketing-india | Commercial | H | — | — | Dedicated page (~1,550 words). |
| 1771 | Identifying B2B experts | SKIP | /blog/expert-creator-marketing, /blog/how-to-find-linkedin-influencers | Commercial | H | — | — | Covered. |
| 1772 | Founder-led creator partnerships | SKIP | /blog/x-founder-led-creator-marketing, /blog/executive-influencer-marketing-linkedin | Commercial | M | — | L | Covered on X and LinkedIn pages; revisit only if Search Console shows a generic founder-led query. |
| 1773 | Co-creating thought leadership | SKIP | /blog/linkedin-thought-leadership-marketing, /blog/x-thought-leadership-marketing | Informational | H | — | — | Covered. |
| 1774 | Measuring long B2B sales cycles | SKIP | /blog/influencer-marketing-long-sales-cycle | Informational | H | — | — | Created in 1710–1759. |
| 1775 | Explaining complex B2B products | SKIP | /blog/creator-led-b2b-marketing, /blog/saas-influencer-marketing-india | Informational | H | — | — | Covered. |
| 1776 | Employee advocacy vs external creators | SKIP | /blog/employee-influencer-marketing | Commercial | H | — | — | Two comparison sections already. |
| 1777 | Expert creator network | SKIP | /blog/expert-creator-marketing | Commercial | H | — | — | Covered. |
| 1778 | SaaS creator partnerships across the journey | SKIP | /blog/saas-influencer-marketing-india | Commercial | H | — | — | Has a funnel and conversion-path sections. |
| 1779 | Recruitment and employer branding | CREATE | /blog/employer-branding-influencer-marketing | Commercial | M (HR industry page) | M (ASCI "Employee" label, CCPA) | M | Existing HR page targets HR/recruitment businesses, not companies hiring for themselves. |
| 1780 | Creator reviews and AI product discovery | CREATE | /blog/creator-content-ai-product-discovery | Informational | L | M | H | 0 coverage; documented by Google, OpenAI and Amazon; written cautiously. |
| 1781 | Creator content on comparison pages | CONSOLIDATE | /blog/ugc-content-ecommerce#comparison-content | Commercial | M | M | M | A risk section with comparative-claim guidance. |
| 1782 | Creator content library for product pages | UPDATE | /blog/ugc-content-ecommerce#content-library | Commercial | M | L | M | Owner of product-page UGC; library fields table added. |
| 1783 | Influencer marketing for mobile apps | SKIP | /blog/mobile-app-influencer-marketing-india | Commercial | H | — | — | Dedicated page. |
| 1784 | Creator partnerships for marketplace sellers | CREATE | /blog/influencer-marketing-amazon-flipkart-sellers | Commercial | M (e-commerce page) | H (Amazon Attribution page lists IN) | H | Indian sellers' tracking and review constraints had only a short table. |
| 1785 | Campaigns around launch inventory | CONSOLIDATE | /blog/influencers-for-product-launch#stock | Commercial | H | L | M | Same intent as 1792. |
| 1786 | High-consideration product education | SKIP | /blog/influencer-marketing-long-sales-cycle | Informational | H | — | — | Covered, incl. new-category section. |
| 1787 | Live shopping readiness | SKIP | /blog/instagram-live-influencer-marketing#live-shopping-status, Creator Resources live commerce, GCC livestream page | Commercial | M | L | M | India platform support is volatile and couldn't be verified from primary sources this session; revisit with evidence. |
| 1788 | Connecting creators with affiliate and referral programs | SKIP | /blog/influencer-affiliate-program, /blog/influencer-marketing-vs-affiliate-marketing | Commercial | H | — | — | Covered. |
| 1789 | Creator content across email, landing and product pages | CONSOLIDATE | /blog/ugc-content-ecommerce#channel-map | Commercial | H | L | M | Channel table; repurposing page also covers it. |
| 1790 | Influencer marketing RFP | SKIP | /blog/influencer-marketing-rfp | Commercial | H | — | — | Dedicated page. |
| 1791 | Agency evaluation scorecard | SKIP | /blog/influencer-marketing-rfp (weighted scoring matrix), /blog/influencer-marketing-agency-checklist | Commercial | H | — | — | Covered. |
| 1792 | Stock or delivery uncertainty | UPDATE | /blog/influencers-for-product-launch#stock | Commercial | M | L | M | New section; delays page links to it. |
| 1793 | Contingency planning | SKIP | /blog/influencer-campaign-delays, /blog/influencer-campaign-cancellation, /blog/influencer-campaign-risk-management | Informational | H | — | — | Covered. |
| 1794 | Renewals: who to rehire | SKIP | /blog/repeat-influencer-collaborations (rebooking criteria) | Commercial | H | — | — | Covered. |
| 1795 | Campaign knowledge base | SKIP | /blog/influencer-campaign-documentation, /blog/influencer-campaign-post-mortem | Informational | H | — | — | Covered. |
| 1796 | Multiple internal departments | SKIP | /blog/influencer-marketing-team-structure (RACI, handoffs), /blog/influencer-marketing-governance | Informational | H | — | — | Covered. |
| 1797 | Usage rights approval and tracking | SKIP | /blog/influencer-usage-rights (rights register), /blog/influencer-campaign-documentation (usage register) | Informational | H | — | — | Covered. |
| 1798 | Brand safety incidents | SKIP | /blog/influencer-controversy-response, /blog/influencer-campaign-risk-management | Informational | H | — | — | Covered. |
| 1799 | Creator data governance | CREATE | /blog/influencer-marketing-data-privacy | Informational / commercial | L | H (gazetted Rules) | H | DPDP appeared only as one-paragraph notes on 8+ pages; no owner. |
| 1800 | Designing a brand lift survey | CREATE | /blog/influencer-brand-lift-survey | Informational | **M–H** (GCC page) | H (Google, Meta docs) | M | Only a GCC-framed page existed. New page is India-first and focused on survey design (questions, sample sizes); both pages cross-link. Watch for cannibalization in Search Console. |
| 1801 | Pilot before increasing budget | SKIP | /blog/influencer-marketing-testing ("Is the campaign ready to scale?"), RFP paid pilot, business case staged decision | Commercial | H | — | — | Covered. |
| 1802 | Findings into next quarter's strategy | SKIP | /blog/influencer-campaign-post-mortem, annual plan quarterly reviews | Informational | H | — | — | Covered. |
| 1803 | Content quality vs audience quality | SKIP | /blog/creator-quality-score ("Quality vs fit"), /blog/influencer-audience-quality | Informational | H | — | — | Covered. |
| 1804 | Business case for finance leaders | CREATE | /blog/influencer-marketing-business-case | Commercial | M (ROI forecasting) | M (internal links) | H | 0 "business case" coverage; forecasting page covers numbers, not approval. |
| 1805 | Comparing results across categories | SKIP | /blog/influencer-benchmarking | Informational | H | — | — | Covered. |
| 1806 | Regional language QA | UPDATE | /blog/regional-influencer-marketing-india#language-qa | Informational | M | H (ASCI label language rule) | M | Section, not a page. |
| 1807 | Surviving platform changes | CONSOLIDATE | /blog/influencer-marketing-annual-plan#platform-change | Informational | M | M | M | Brand-side section; creator-side page (creator-platform-risk) exists. |
| 1808 | Briefs: consistency vs creative freedom | SKIP | /blog/influencer-campaign-brief ("Keeping creative direction from becoming a script") | Informational | H | — | — | Covered. |
| 1809 | Annual program review | UPDATE | /blog/influencer-marketing-annual-plan#annual-review | Informational | M | L | M | Audit table added beside quarterly reviews. |

### Priority of the creates

1. **Data privacy (1799):** primary legal text available, 0 owner, broad relevance.
2. **Marketplace sellers (1784):** high commercial fit for Indian D2C sellers.
3. **Business case (1804):** commercial, links the measurement cluster to budget approval.
4. **Customer advocacy (1764):** completes the retention cluster.
5. **AI shopping (1780):** topical and distinct, but written cautiously because the mechanics are mostly undocumented.
6. **Brand lift survey (1800):** useful how-to, but carries overlap risk with the GCC page.
7. **Employer branding (1779):** real gap, lower commercial value.

## Research record (checked 2026-10-10)

| Source | Used for |
| --- | --- |
| DPDP Rules, 2025 (gazette text, MeitY PDF) | Rule 6 safeguards incl. processor contracts and one-year logs; Rule 7 breach (Board within 72 hours); Rule 8 erasure; Rule 10 children; Rule 14 rights; commencement: Rules 3, 5–16, 22–23 at 18 months |
| PIB backgrounder on the DPDP Rules (17 Nov 2025) | Notified November 2025; 90-day response to rights requests; penalties up to ₹250 crore / ₹200 crore |
| DPDP Act, 2023 (MeitY PDF) | Data Fiduciary and Data Processor definitions |
| ASCI Influencer Guidelines (PDF, text extracted) | Material connection incl. free products, discounts, employment; labels incl. "Employee" and "Free gift"; label in English or the ad's language |
| Government endorsement guidance (PIB, Jan 2023), CCPA misleading-ads guidelines (PIB, 2022) | Existing registered sources; disclosure and recruitment-claim caution |
| BIS IS 19000:2022 (Business Today report, Nov 2022) | Voluntary standard expecting disclosure of paid reviews. Secondary source; current certification status not verified |
| Amazon Ads, Amazon Attribution page | India (IN) listed; Brand Registry sellers and vendors; 14-day window; metrics |
| Amazon Influencer Program (affiliate-program.amazon.in) | Program exists in India |
| Google Search Central, AI features and your website | No special optimization or schema for AI Overviews / AI Mode |
| OpenAI, shopping research announcement (24 Nov 2025) | Organic results from public retail sites; may err on price/availability. URL returns 403 to scripted fetches; content confirmed via search results |
| Amazon India, Rufus launch (Aug 2024) | Beta on Amazon.in app |
| YourStory, Gemini/AI Mode Flipkart test (Oct 2026) | Labelled on-page as a press report, unconfirmed. 403 to scripted fetches |
| Google Ads Help, About Brand Lift; Display & Video 360 minimums table | India in tier A: USD 5,000 / 10,000 / 20,000 for 1/2/3 questions within 10 days |
| Meta Business Help, brand lift tests | Randomized polls; minimums by country (existing GCC source) |
| PIB order of 29 June 2020 (mirror on eoimanila.gov.in) | India blocked TikTok in 2020 |

**Not used:** Amazon.in review policy pages (403/503; the pages say "marketplaces restrict" without quoting a policy); third-party claims about how ChatGPT selects products (unverified); any return-rate statistics (none from a primary source).

Sample sizes on the brand lift page were calculated for a two-proportion test (95% confidence, 80% power) and rounded.

## Changes

- **New pages (7):** each has a hero SVG, FAQs (2–3, matching FAQ schema), mid and bottom CTA copy, and a content-map row:
  - customer-advocacy-program
  - creator-content-ai-product-discovery
  - influencer-marketing-amazon-flipkart-sellers
  - influencer-marketing-data-privacy
  - influencer-brand-lift-survey
  - influencer-marketing-business-case
  - employer-branding-influencer-marketing
- **Updated sections (5 pages, `updatedAt` 2026-10-10):**
  - influencer-marketing-customer-retention: #post-purchase, #overlooked-features, #returns, #loyalty, repeat-purchase measurement, link to advocacy
  - ugc-content-ecommerce: #content-library, #channel-map, #comparison-content
  - influencers-for-product-launch: #stock
  - regional-influencer-marketing-india: #language-qa
  - influencer-marketing-annual-plan: #annual-review, #platform-change
- **Reading times recalculated** (~220 wpm, same method as earlier batches): retention 12 → 6, annual plan 15 → 6, regional 10 → 6, UGC e-commerce 9 → 5, product launch 10 → 9.
- **Contextual links in (link-only edits, no `updatedAt` change):**
  - e-commerce India and UGC e-commerce → marketplace sellers
  - brand ambassador program → customer advocacy
  - influencer CRM and governance → data privacy
  - GCC brand lift and brand awareness → brand lift survey
  - ROI forecasting → business case
  - employee influencer marketing and HR/recruitment → employer branding
  - YouTube product reviews and UGC e-commerce → AI shopping
  - campaign delays → product launch #stock
- **Not changed:** forms, API routes, analytics code, mailer, redirects, schema components, `public/llms.txt` (earlier batches don't list new pages there).

## Validation

- **Code:** `npx tsc --noEmit` clean; `npx eslint` clean on the new modules, `index.ts` and `blogCta.ts`; `npm run build` exit 0, **1,720** static pages (after the final edit).
- **Crawl of the local production build (`next start`):**
  - 816 blog URLs in the sitemap, all 200; 7/7 new URLs present
  - 0 broken internal links or anchors across all blog pages
  - sitemap lastmod 2026-10-10 on new/updated pages; 0 future lastmods
- **All 7 new and 16 updated or linking pages:** `index, follow`, self-canonical, 1 H1, 1 mid CTA, 1 bottom CTA, 5/5 valid JSON-LD blocks, FAQ schema present; hero image on every new page.
- **Text:** 0 link-text mismatches; no duplicate titles or meta descriptions site-wide; no em dashes or banned phrases in added copy; titles 40–52 characters, meta descriptions 145–155.
- **External links:** all new citations return 200 except OpenAI and YourStory (403 to scripted requests; real pages).
- **Browser test** on /blog/influencer-marketing-business-case (local build, gtag stubbed, navigation blocked):
  - mid CTA fired `blog_mid_cta_click` once with slug, "Campaign Strategy", topic "Campaign Budget", position "mid", type `brand_inquiry`
  - bottom CTA fired `blog_bottom_cta_click` once; href `/for-brands?src=…&cat=Campaign+Strategy&pos=bottom&t=Campaign+Budget#inquiry`
- **Form APIs:** `brand-inquiry`, `creator-application` and `contact` return 400 on `{}`.
- **Not tested:** real email delivery and `blog_lead_form_submit` (need a live submission); real-device mobile check; live-site checks (nothing deployed).

## Follow-ups

1. Have counsel review /blog/influencer-marketing-data-privacy before deployment, and re-check it if MeitY issues further guidance before May 2027.
2. Re-check the AI shopping page quarterly; features (Google–Flipkart checkout, ChatGPT shopping, Rufus) change fast.
3. Watch Search Console for overlap between /blog/influencer-brand-lift-survey and /blog/influencer-brand-lift-gcc.
4. Revisit 1787 (live shopping) and 1772 (founder-led) only with primary-source evidence or demand data.
5. Connect Search Console and analytics so future batches can rank topics by evidence.

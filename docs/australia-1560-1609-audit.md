# Australia batch 2 (1560–1609): audit, decisions and research record

Date: 2026-10-10. Builds on the uncommitted Australia batch 1 (1540–1559, `docs/australia-1540-1559-audit.md`) and the GCC batches.

- **New modules:**
  - `src/content/au-guides/au-planning.ts`: 1560, 1566, 1579, 1580, 1606, 1609
  - `src/content/au-guides/au-industries.ts`: 1596, 1597, 1599, 1600, 1601, 1602, 1603, 1604
- **Wiring:** both are added to `auGuidePosts` in `src/content/au-guides/index.ts`.
- **Conventions:** the same as batch 1: `en-AU`, `spatialCoverage: "Australia"`, breadcrumb Home › Blog › Australia, `AU:` CTA topics, heroes in `public/blog/au-guides/`.

## Baseline (before editing)

- **Site:** 780 blog URLs in the sitemap, all 200, with 0 broken internal links (batch 1 QA, 2026-10-09). Next.js 16.3.4 app router; blog posts are TypeScript data. `BlogMidCTA` is placed automatically by `ArticleBody`; `BlogBottomCTA` comes from per-slug config in `src/lib/blogCta.ts`.
- **Existing owners for the candidate topics.** Most of the 50 topics already have a generic (global) owner page:
  - `influencer-campaign-brief`, `influencer-collaboration-proposal`
  - `influencer-marketing-agency-vs-in-house`, `influencer-marketing-budget`, `influencer-marketing-campaign-timeline`
  - `influencer-marketing-kpis`, `measuring-influencer-campaign-roi` (with an `#australia` section), `creator-attribution`
  - `break-even-roas-influencer-campaigns`, `influencer-marketing-testing`, `influencer-marketing-dashboard`, `influencer-benchmarking`
  - `influencer-campaign-management`, `influencer-content-approval`, `influencer-marketing-contract`
  - `influencer-whitelisting`, `instagram-partnership-ads`, `ugc-whitelisting-creator-licensing`, `influencer-usage-rights`
  - `influencer-affiliate-program`, `influencers-for-product-launch`, `brand-ambassador-program`, `experiential-influencer-marketing`
  - industry pages (fashion, fitness, home and interior, SaaS, B2B technology, automotive dealerships, education, food, gaming, healthcare, sustainability)
  - the Australian batch 1 pages
- **New Australian pages:** we created them only where Australian law, regulators, data or market structure add something the generic page can't.
- **Data not available:**
  - No keyword volume, difficulty, CPC, rankings, Search Console or analytics data was available, and none is estimated.
  - We can't say whether an existing page has traffic or backlinks.
  - Priorities below are qualitative: commercial intent, Australian regulatory substance and overlap risk.
- **Security:**
  - The mailer (`src/lib/mailer.ts`, `import "server-only"`) reads `EMAIL_FROM`, `EMAIL_TO` and `EMAIL_APP_PASSWORD`.
  - No file in the repository references `NEXT_PUBLIC_APP_PASSWORD`, `NEXT_PUBLIC_FROM_EMAIL` or `NEXT_PUBLIC_TO_EMAIL`.
  - No remediation was needed. We couldn't see the hosting provider's environment settings; if the old `NEXT_PUBLIC_*` variables still exist there, delete them.
- **Positioning:** Kudozz has no verified Australian office, staff, creator network or clients. Pages are buyer guides; CTAs offer a conversation only.

## Decisions

Priority: H = high (commercial intent and regulated-category substance), M = medium, L = low.

| ID | Proposed topic | Decision | Final URL / destination | Intent | Priority | Rationale |
| --- | --- | --- | --- | --- | --- | --- |
| 1560 | Brief template, Australia | CREATE (absorbs 1565, 1567) | /blog/influencer-brief-template-australia | Commercial / template | H | The generic brief owns structure. The Australian version adds fields for ACL claims substantiation, disclosure wording, TGA/ABAC/age rules, ABN and GST, and usage and moral-rights consent. Proposal and multi-creator briefing are sections. |
| 1561 | How to run a campaign in Australia | CONSOLIDATE into pillar | /blog/influencer-marketing-australia#planning | Informational | — | The pillar already has a seven-step planning sequence; the new pages are linked from it. |
| 1562 | Influencer marketing vs paid social | CONSOLIDATE into 1580 | /blog/creator-content-paid-ads-australia#versus | Commercial | — | Not either-or in practice; the decision section sits with partnership ads and licensing. |
| 1563 | In-house vs agency, Australia | UPDATE | /blog/choose-influencer-marketing-agency-australia#in-house | Commercial | M | The batch 1 agency page owns Australian agency intent; added an in-house / agency / hybrid section. The generic page owns the global intent. |
| 1564 | Budget by goal | UPDATE | /blog/influencer-marketing-cost-australia#by-goal | Commercial | M | Added a goal-to-budget-line section; no AUD rates (no independent survey). |
| 1565 | Proposal template | CONSOLIDATE into 1560 | /blog/influencer-brief-template-australia#proposal | Template | — | What a good proposal returns is the other half of the brief. |
| 1566 | Campaign timelines, Australia | CREATE (absorbs 1584) | /blog/influencer-campaign-timeline-australia | Planning | M | Australian retail calendar (EOFY, summer Christmas, state school holidays), compliance lead times and a backward-planned launch timeline. |
| 1567 | Briefing multiple influencers | CONSOLIDATE into 1560 | /blog/influencer-brief-template-australia#multiple | Informational | — | Generic coordination pages exist; the Australian angle (identical claims across creators) fits the brief page. |
| 1568 | Startups, Australia | UPDATE | /blog/small-business-influencer-marketing-australia#startups | Informational | L | The starter plan already fits early-stage brands; added a startup section rather than a near-duplicate page. |
| 1569 | Scorecard | SKIP | owner: /blog/creator-performance-scorecard | Informational | — | Generic owner; no Australian substance. |
| 1570 | KPIs by funnel stage | SKIP | owner: /blog/influencer-marketing-kpis | Informational | — | The owner already maps KPIs by objective. |
| 1571 | UTM, codes, analytics | SKIP | owners: /blog/measuring-influencer-campaign-roi, /blog/ecommerce-influencer-marketing-australia#links | Informational | — | Covered by both. |
| 1572 | Multi-creator attribution | SKIP | owners: ROI guide (attribution), /blog/influencer-audience-overlap | Informational | — | Covered. |
| 1573 | Break-even ROAS | UPDATE | /blog/ecommerce-influencer-marketing-australia#measurement | Informational | L | The generic owner (`break-even-roas-influencer-campaigns`) is GCC-specific (AED/SAR examples), so the AUD and GST worked example went into the Australian e-commerce page, which links to it. |
| 1574 | Creative testing | SKIP | owners: /blog/influencer-marketing-testing, /blog/ugc-paid-social-testing | Informational | — | Covered. |
| 1575 | Dashboards | SKIP | owner: /blog/influencer-marketing-dashboard | Informational | — | Covered. |
| 1576 | Benchmarks, Australia | SKIP | — | Informational | — | We found no independent Australian engagement or cost benchmarks; a page would need invented numbers. Revisit if IAB Australia or AiMCO publish them. |
| 1577 | Managing at scale | SKIP | owners: /blog/influencer-campaign-management, /blog/influencer-campaign-coordination | Informational | — | Covered. |
| 1578 | Approval workflows | UPDATE | /blog/influencer-content-approval#australia | Informational | L | Added Australian compliance checkpoints (TGA, ABAC, ASIC, Ahpra, ACCC). |
| 1579 | Contracts, Australia | CREATE (absorbs 1589) | /blog/influencer-contracts-australia | Commercial | H | Distinct Australian law: unfair contract terms penalties (since 9 Nov 2023), super for contractors paid for labour, GST/ABN, moral rights consent, ACL. Ambassador terms are a section. |
| 1580 | Creator content as paid ads | CREATE (absorbs 1562, 1581, 1582, 1585) | /blog/creator-content-paid-ads-australia | Commercial | H | Partnership ads (Meta creator marketplace in Australia since Feb 2024), Spark-style authorisation, licence vs buyout, moral rights, ACCC review rules when reusing reviews, Spam Act for email. |
| 1581 | Whitelisting and partnership ads | CONSOLIDATE into 1580 | #partnership-ads | Commercial | — | |
| 1582 | Licensing vs buyout | CONSOLIDATE into 1580 | #licence-buyout | Commercial | — | |
| 1583 | Affiliate programs | CONSOLIDATE (no new page) | /blog/ecommerce-influencer-marketing-australia#links | Commercial | — | The batch 1 e-commerce page already covers links, codes and affiliate terms. |
| 1584 | Product launches | CONSOLIDATE into 1566 | /blog/influencer-campaign-timeline-australia#launch | Commercial | — | The Australian substance is timing and lead times. |
| 1585 | Reusing creator reviews | CONSOLIDATE into 1580 | #owned-channels | Informational | — | ACCC reviews guidance and Spam Act. |
| 1586 | Product discovery and search | UPDATE | /blog/ecommerce-influencer-marketing-australia#ai | Informational | M | Added IAB Australia Commerce and Discovery Report 2026 findings. |
| 1587 | Creator reviews and AI shopping | UPDATE (same section) | /blog/ecommerce-influencer-marketing-australia#ai | Informational | — | Kept to verified findings; no visibility promises. |
| 1588 | Live shopping | UPDATE | /blog/instagram-tiktok-youtube-influencer-marketing-australia#live | Informational | L | Without TikTok Shop in Australia, live is demonstration plus links; added a section with TGA livestream disclosure guidance. |
| 1589 | Ambassador programs | CONSOLIDATE into 1579 | /blog/influencer-contracts-australia#ambassadors | Commercial | — | The Australian substance is contractual (exclusivity, super, UCT). |
| 1590 | Events and experiential | SKIP | owner: /blog/experiential-influencer-marketing | Informational | — | No Australian substance. |
| 1591 | Fashion | CONSOLIDATE into 1604 | /blog/greenwashing-influencer-marketing-australia#fashion | Commercial | — | Clothing was among the sectors where the ACCC's 2022 greenwashing sweep found the most concerns; the generic fashion page owns the rest. |
| 1592 | Fitness | CONSOLIDATE into 1603 | /blog/health-wellness-influencer-marketing-australia#fitness | Commercial | — | Supplements and health claims are the Australian substance. |
| 1593 | Travel gear and outdoor | UPDATE | /blog/tourism-influencer-marketing-australia#gear | Commercial | L | Park permits and drone rules apply to gear shoots; added a section. |
| 1594 | Pets | SKIP (for now) | — | Commercial | — | 73% of households have a pet (Animal Medicines Australia, 2025), but we found no Australian creator-specific rules beyond ACL. Revisit if Kudozz has pet-category demand. |
| 1595 | Home, furniture, interiors | SKIP | owner: generic home and interior page | Commercial | — | No Australian substance. |
| 1596 | Automotive and dealerships | CREATE | /blog/automotive-influencer-marketing-australia | Commercial | M | FCAI motor vehicle advertising code (administered by Ad Standards, covers social media), ACL pricing, dealership local campaigns, motor sport separation. |
| 1597 | SaaS and technology | CREATE (combined with 1598) | /blog/b2b-saas-influencer-marketing-australia | Commercial | M | One B2B page: LinkedIn and YouTube creators, Spam Act consent for lead follow-up, unfair contract terms for small-business creators, ACL claims. |
| 1598 | B2B | CONSOLIDATE into 1597 | same | Commercial | — | |
| 1599 | Universities and education | CREATE | /blog/education-influencer-marketing-australia | Commercial | M | ESOS National Code Standard 4 (agents), the onshore-transfer commission ban (2026), National Planning Level, ACL, under-16 limits. |
| 1600 | Food and beverage | CREATE | /blog/food-beverage-influencer-marketing-australia | Commercial | H | AANA Food & Beverages Code (occasional food, 25% child audience), Children's Advertising Code, ABAC, ACCC greenwashing. |
| 1601 | Gaming and esports | CREATE | /blog/gaming-esports-influencer-marketing-australia | Commercial | M | Loot box (M) and simulated gambling (R18+) classification since 22 Sep 2024; Twitch, Kick and YouTube under the under-16 rules. |
| 1602 | Financial services | CREATE | /blog/financial-services-influencer-marketing-australia | Commercial | H | ASIC INFO 269 (finfluencers, dealing by arranging, licensee liability), the Scholz case, design and distribution obligations. |
| 1603 | Healthcare and wellness | CREATE (absorbs 1592) | /blog/health-wellness-influencer-marketing-australia | Commercial | H | TGA social media guidance (updated 5 Nov 2025), Ahpra testimonial ban (s133) and cosmetic procedure guidelines (2 Sep 2025). |
| 1604 | Sustainability and greenwashing | CREATE (absorbs 1591) | /blog/greenwashing-influencer-marketing-australia | Commercial | H | ACCC eight principles (Dec 2023), the Clorox $8.25m penalty (Apr 2025), the 2022 sweep. |
| 1605 | Sydney vs Melbourne vs Brisbane | CONSOLIDATE into 1606 | /blog/local-regional-influencer-marketing-australia#cities | Commercial | — | No substantiated city-level differences in influencer marketing; ABS population data plus a method section, not three city pages. |
| 1606 | Regional creators for local campaigns | CREATE | /blog/local-regional-influencer-marketing-australia | Commercial | M | ABS 2024–25: 8.86m people in regional Australia (about a third); local creator discovery, state differences (school holidays), measurement by postcode. |
| 1607 | Australian audience share | UPDATE | /blog/find-vet-influencers-australia#audience-share | Informational | M | Added a worked method for effective Australian reach. |
| 1608 | Disclosure in Australia | UPDATE | /blog/influencer-advertising-rules-australia#disclosure | Commercial | H | The batch 1 rules page owns disclosure; expanded with material connections, platform labels, livestreams and verified TGA/ASIC/Ahpra sector rows. |
| 1609 | Australia, India and UAE | CREATE | /blog/influencer-marketing-australia-india-uae | Commercial | M | A cross-market comparison is genuinely relevant to Kudozz (India-based, with GCC and Australian guides): regulators, licensing, disclosure, currency and tax, using sources already verified on the site. |

**Totals (50 IDs):**
- **CREATE (14 new URLs):** 1560, 1566, 1579, 1580, 1596, 1597, 1599, 1600, 1601, 1602, 1603, 1604, 1606, 1609.
- **Consolidated into a new page (12):** 1562, 1565, 1567, 1581, 1582, 1584, 1585, 1589, 1591, 1592, 1598, 1605.
- **Consolidated into an existing page without edits (2):** 1561 (pillar; links added), 1583.
- **UPDATE (11 IDs across 9 existing pages):** 1563, 1564, 1568, 1573, 1578, 1586, 1587, 1588, 1593, 1607, 1608.
- **SKIP (11):** 1569, 1570, 1571, 1572, 1574, 1575, 1576, 1577, 1590, 1594, 1595.
- **Redirects:** none. No URL was removed or renamed.

## Research record (checked 2026-10-10)

Official pages were read in a browser where scripted fetches were blocked.

| Claim | Source | Status |
| --- | --- | --- |
| ACCC still says it "plans to release a targeted guidance document" for influencer advertising "in early 2024" | ACCC sweep publication page (read 2026-10-10) | **Still not published**, as far as we could find; pages don't claim it exists |
| Social media rules apply to posts a business pays for or incentivises influencers to make; businesses are responsible for posts and comments on their pages | ACCC, social media promotions | Read |
| Reviews: no fake, edited or selectively suppressed reviews; incentives must be disclosed and given regardless of rating; HealthEngine $2.9m; Service Seeking $600,000 | ACCC, online reviews | Read |
| Eight principles for environmental claims; avoid "green", "eco friendly", "sustainable"; guide 12 Dec 2023 | ACCC, environmental and sustainability claims | Read |
| Clorox $8.25m (14 Apr 2025); fine print didn't dispel the impression; blue colour and wave imagery mattered | ACCC media release 34/25 | Read |
| 57% of 247 businesses made concerning claims; cosmetics, clothing and food among the sectors of most concern (sweep Oct 2022, report Mar 2023) | ACCC greenwashing sweep; law-firm summaries | Via search index |
| INFO 269: financial product advice, dealing by arranging via unique links, misleading conduct, licensee liability, DDO (issued Mar 2022) | ASIC | Read |
| Scholz: Federal Court found unlicensed advice via Instagram (Dec 2022); injunctions and costs; later sequestration | News and law-firm reports | Not read at source; pages say "reported" |
| TGA: influencer endorsements must be clearly identified as advertising; businesses responsible for paid content; comments are testimonials; links and hashtags are part of the ad; livestream disclosures repeated; no advertising to under-12s (updated 5 Nov 2025) | TGA, advertising therapeutic goods on social media | Read |
| Paid or incentivised testimonials banned; paid endorsements allowed if disclosed; health professionals can't endorse | TGA testimonials guidance | Via search index |
| Ahpra: s133 bans testimonials in advertising a regulated health service; cosmetic guidelines from 2 Sep 2025 strengthen the ban on influencer testimonials and ban advertising aimed at under-18s | Ahpra news (2025-06-03); Ahpra testimonial guidance | Fetched / via search index |
| AANA Food & Beverages Code: occasional food = fails FSANZ NPSC; occasional food ads only where children are 25% or less of the audience; children = under 15; in effect 1 Nov 2021 | AANA media release (25 May 2021) | Fetched |
| Loot boxes: M minimum; simulated gambling: R18+; for games classified from 22 Sep 2024 | Department of Infrastructure news (timed out; via search index); trade press | Corroborated |
| eSafety list includes Facebook, Instagram, Snapchat, Threads, TikTok, Twitch, X, YouTube, Kick, Reddit; YouTube Kids excluded | eSafety (via search index) | Unchanged since batch 1 |
| National Code Standard 4: providers responsible for agents; written agreements; ban on commissions for onshore transfers (signed 16 Jan 2026; acceptances from 1 Apr 2026) | Department of Education; PIE News | Via search index |
| National Planning Level 295,000 for 2026 and 2027 | Study Australia | Via search index |
| FCAI code covers social media; administered by Ad Standards; "advertisement" means published for payment or other valuable consideration | Ad Standards, FCAI code PDF | Via search index |
| UCT: penalties from 9 Nov 2023; small business = fewer than 100 employees or turnover under $10m; maximum the greatest of $50m, 3× benefit or 30% of adjusted turnover | ACCC media release | Via search index |
| Super: contractors paid wholly or principally for labour are employees for SG purposes (TR 2023/4); SG rate 12% from 1 Jul 2025 | ATO TR 2023/4; law-firm summary | Via search index |
| Moral rights: attribution, against false attribution, integrity; can't be transferred; written consent to specific acts | Attorney-General's Department; Arts Law | Via search index |
| Spam Act: consent, identification, functional unsubscribe honoured within 5 working days | ACMA | Via search index |
| Meta creator marketplace and partnership ads expanded to Australia (23 Feb 2024) | Mediaweek | Fetched |
| IAB Australia Commerce and Discovery Report 2026 (6 Jul 2026; 1,079 Australians aged 18–70; search still dominant; AI complements rather than replaces research; creator influence depends on authenticity and expertise more than audience size) | IAB Australia page | Fetched; the PDF with figures wasn't accessible, so no percentages are quoted |
| Capital cities 18.75m and regional Australia 8.86m at 30 Jun 2025; Sydney 5.64m, Melbourne 5.44m, Brisbane 2.83m | ABS media release (31 Mar 2026) | Read |
| Pet ownership 73% of households (AMA Pets in Australia 2025) | AMA | Via search index; not used (1594 skipped) |

## Other changes

- **Reading times:** recalculated for all 26 Australian pages from body word count (about 220 words per minute, minimum 4). Batch 1 had overstated them (10–13 min for pages of 700–1,300 words).
- **Contextual backlinks** to new pages from:
  - the under-16 page
  - `influencer-marketing-automotive-dealerships`
  - `b2b-creator-economy`
  - `influencer-marketing-uae`
  - the pillar
- **Rules page sector table:** "TGA Advertising Code, as reported" (AdNews) is replaced by the TGA's own social media guidance, and rows are added for Ahpra, ASIC, AANA food and ACCC environmental claims.
- **CTAs:** 14 pairs added in `blogCta.ts`. Two prefill keys added (`AU: Creator Ads` → UGC Content, `AU: Product Launch` → Product Launch). `AU: Compliance` deliberately leaves the select blank, as in batch 1.
- **Heroes:** 14 SVGs in `public/blog/au-guides/`.
- **Content map:** 14 rows appended to `docs/blog-content-map.csv`; Australian inbound counts refreshed.

## Validation (run 2026-10-10)

- **Build:**
  - `tsc --noEmit` clean.
  - `eslint .` reports 0 errors and the same 6 pre-existing warnings (contact, for-brands, Footer).
  - `next build` passes: 1,676 static pages (+14 pages, +14 OG images).
- **Crawl of the sitemap on `next start`:**
  - 794 blog URLs, all 200; 14 of 14 new URLs in the sitemap.
  - 0 broken internal links or anchors sitewide.
- **14 new and 11 updated pages:**
  - `index, follow`, self-canonical, one H1
  - exactly one mid and one bottom CTA
  - 5/5 JSON-LD blocks parse; FAQ schema counts match the visible FAQs
  - hero and OG images return 200; every new page is listed on `/blog`
- **Text QA:**
  - 0 link-text mismatches; no em dashes or banned phrases
  - no duplicate titles or meta descriptions sitewide
  - SEO titles 42–53 characters; descriptions 150–160
  - no American spellings in the new Australian files ("license" appears only as a verb)
- **Mobile:** each new page was loaded in a 390px-wide same-origin iframe. Document width is 390 (no horizontal page scroll); tables scroll inside their existing `min-w-[520px]` wrapper. Browser window resizing wasn't available, so this isn't a device test.
- **Interactions, in Chrome on localhost, with `gtag` stubbed to record calls:**
  - Clicking the mid CTA on the health page fired one `blog_mid_cta_click` with `article_slug`, `cta_topic: "AU: Compliance"` and `cta_position: "mid"`, and navigated to `/for-brands?src=…&pos=mid&t=AU%3A+Compliance#inquiry`.
  - Focusing two form fields fired `blog_lead_form_start` once, with the correct source article.
  - An empty submit showed 5 validation errors, made no network request and fired no submit event.
  - `blog_bottom_cta_click` and `blog_lead_form_submit` weren't triggered interactively. The bottom CTA's rendered links carry `pos=bottom`, and no component code or event names changed (the diff touches only the CTA config and the prefill map).
- **Forms and email:**
  - All four API routes (`brand-inquiry`, `contact`, `creator-application`, `newsletter`) return 400 on `{}`.
  - No valid submission was sent, so no email went out and email routing wasn't exercised.
- **Secrets:** the `EMAIL_APP_PASSWORD` value appears in 0 files under `.next/static`, and neither `EMAIL_APP_PASSWORD` nor `NEXT_PUBLIC_APP_PASSWORD` is referenced in client bundles (value compared without printing).
- **External sources:**
  - Read in a browser: ACCC (sweep page, social media promotions, reviews, environmental claims, Clorox, UCT release, greenwashing sweep), ASIC INFO 269, TGA (social media; testimonials page title), Ahpra testimonial page (title), Department of Education (commission ban text), Ad Standards motor vehicle guide, ABS release, ACMA (title).
  - Others return 200 to scripted checks, or were corroborated via the search index as noted above.

## Follow-ups

- **Legal review:** have a lawyer or compliance adviser review the financial services, health and wellness, contracts and education pages before promoting them; they're general information with scope notes.
- **ACCC influencer guidance:** still described as planned on the ACCC's own page; re-check monthly and cite it when published.
- **Re-check every quarter:** the eSafety platform list, TikTok Shop availability in Australia, the Ahpra and TGA guidance pages and the National Code.
- **Skipped topics:** revisit pets (1594) and benchmarks (1576) only with real demand or published Australian data.
- **Measurement:** connect Search Console; judge these pages after 3–6 months, and check whether city and regional queries justify more local content.
- **Hosting:** if any `NEXT_PUBLIC_APP_PASSWORD`, `NEXT_PUBLIC_FROM_EMAIL` or `NEXT_PUBLIC_TO_EMAIL` variables still exist there, delete them; the code reads only `EMAIL_FROM`, `EMAIL_TO` and `EMAIL_APP_PASSWORD`.
- **First Nations draft (1558, batch 1):** still awaiting paid expert review.

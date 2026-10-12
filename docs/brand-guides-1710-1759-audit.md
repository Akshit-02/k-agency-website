# Performance creative, customer insight, measurement, technology and brand strategy (1710–1759): audit and decisions

Date: 2026-10-10. Builds on the uncommitted GCC, Australia, 1610–1659 and 1660–1709 batches.

- **New module:** `src/content/brand-guides/measurement-strategy.ts` (`measurementStrategyPosts`), registered in `brand-guides/index.ts`.
- **Conventions:** brand-guides spelling is American. Heroes go in `public/blog/brand-guides/`. CTAs live in `src/lib/blogCta.ts` and use existing topics. "Campaign Measurement" has no form prefill, the same as existing measurement pages.

## Baseline

- **Site:** 803 blog URLs, all 200; 0 broken internal links; build 1,694 pages (1660–1709 QA, 2026-10-10).
- **Coverage:** most of this list already has dedicated pages:
  - performance creative: UGC for paid social (testing and scaling), ad fatigue, performance marketing, partnership ads, whitelisting, campaign testing, underperformance
  - audience: audience quality, audience overlap, micro vs macro, nano vs micro, social listening, sentiment, creator feedback loop, launch insights
  - measurement: ROI, KPIs, incrementality, CPM/CPE/CPA, report, dashboard, lead generation, customer quality, brand lift (GCC)
  - technology and governance: platforms, CRM (with a spreadsheet comparison), database, three automation pages, content approval (with an approver step), escalation (with an incident log), RFP and agency selection, accessibility, quality control
  - strategy and international: employee influencer marketing (with advocacy comparisons), international playbook, Australia–India–UAE comparison, Australian and GCC market-entry sections, franchise (GCC), annual plan (with quarterly reviews)
- **Gaps (no page or section):**
  - marketing mix modeling: 0 mentions site-wide
  - reconciling platform reports with web analytics: 3 passing mentions
  - long sales cycles and considered purchases: one short paragraph on a B2B page
  - rebrands and repositioning: 0 dedicated coverage
  - coordinating with PR, including confidential launches: scattered mentions only
  - customer insight (reviews, objections, segments) in briefs: 1 passing mention
- **Smaller gaps in existing pages:**
  - metrics for creator ads beyond CTR, and stop, iterate or scale rules
  - briefs written for paid social
  - how creator ads and brand ads work together, including retargeting
  - uncertainty in reports
  - the value of reusing content
  - version control for drafts
  - data checks before a platform import
- **Reading times:** four updated pages showed inflated times and were recalculated at about 220 words a minute:
  - UGC paid social: 10 → 5
  - performance marketing: 15 → 6
  - repurposing: 9 → 6
  - report: 9 → 8
- **Data not available:** no search volume, Search Console, analytics or backlink data; priorities are qualitative.
- **Security:** unchanged and fine.
  - The mailer (`src/lib/mailer.ts`, `server-only`) reads `EMAIL_FROM`, `EMAIL_TO` and `EMAIL_APP_PASSWORD`.
  - `NEXT_PUBLIC_APP_PASSWORD`, `NEXT_PUBLIC_FROM_EMAIL` and `NEXT_PUBLIC_TO_EMAIL` are not referenced.
  - The `.env` password value appears in 0 files under `.next/static`.
  - If those old variables still exist at the host, delete them.

## Decisions

H = high, M = medium. 6 CREATE, 8 UPDATE, 16 CONSOLIDATE, 20 SKIP. No redirects, no deletions.

| ID | Topic | Decision | URL / owner | Intent | Priority | Evidence and dependencies |
| --- | --- | --- | --- | --- | --- | --- |
| 1710 | Repeatable creator performance creative systems | CONSOLIDATE | /blog/influencer-performance-marketing | Commercial | M | Existing pipeline section; the new #creator-and-brand-ads section ends with the system (supply, testing slot, rights register). |
| 1711 | Creator ad fatigue and refresh | SKIP | /blog/influencer-ad-fatigue | Informational | — | Dedicated page exists. |
| 1712 | Testing hooks without losing the message | CONSOLIDATE | /blog/ugc-paid-social-testing#stop-iterate-scale | Informational | M | Too narrow for its own URL; a paragraph on keeping the core claim and voice. |
| 1713 | Diagnosing underperforming creator ads | CONSOLIDATE | /blog/ugc-paid-social-testing#beyond-ctr | Informational | M | Stage-by-stage diagnosis table; campaign level stays on influencer-campaign-underperformance. |
| 1714 | Creator ad briefs for paid social | UPDATE | /blog/influencer-performance-marketing#paid-social-brief | Commercial | M | Brief checklist for ad use was missing. |
| 1715 | Combining creator ads with brand ads | UPDATE | /blog/influencer-performance-marketing#creator-and-brand-ads | Informational | M | New stage table, labelled as hypotheses to test. |
| 1716 | Creator content for retargeting | CONSOLIDATE | /blog/influencer-performance-marketing#creator-and-brand-ads | Informational | M | Retargeting row plus guidance on usage rights. |
| 1717 | Measuring creator ads beyond CTR | UPDATE | /blog/ugc-paid-social-testing#beyond-ctr | Informational | H | Hook and hold rates are labelled as working definitions, not platform metrics. |
| 1718 | Creative testing calendars | SKIP | /blog/influencer-marketing-testing, /blog/ugc-paid-social-testing | Informational | — | Covered by test plans and the content-to-ads pipeline. |
| 1719 | Stop, iterate or scale creator ads | UPDATE | /blog/ugc-paid-social-testing#stop-iterate-scale | Commercial | H | Decision table with a judgement threshold set in advance. |
| 1720 | Matching creators to customer problems | CONSOLIDATE | /blog/customer-insights-influencer-brief#match | Commercial | M | Part of the customer insight page. |
| 1721 | Personas from creator community conversations | CONSOLIDATE | /blog/customer-insights-influencer-brief#sources | Informational | M | Comment mining, with privacy limits. |
| 1722 | Influencer audience quality | SKIP | /blog/influencer-audience-quality | Commercial | — | Dedicated page. |
| 1723 | Using customer reviews to improve briefs | CREATE | /blog/customer-insights-influencer-brief | Commercial | H | No page; the brief cluster lacked a customer-insight input. |
| 1724 | Purchase objections and creator education | CONSOLIDATE | /blog/customer-insights-influencer-brief#objections | Commercial | M | Objection-to-angle table. |
| 1725 | Creator strategy for customer segments | CONSOLIDATE | /blog/customer-insights-influencer-brief#segments | Commercial | M | Brief-by-segment section and template. |
| 1726 | Measuring creator audience overlap | SKIP | /blog/influencer-audience-overlap | Informational | — | Dedicated page. |
| 1727 | Validating product positioning with creators | CONSOLIDATE | /blog/influencer-marketing-rebrand#test | Informational | M | Positioning tests sit in the rebrand page. |
| 1728 | Niche vs broad-reach creators | SKIP | /blog/micro-vs-macro-influencers, /blog/nano-vs-micro-influencers | Commercial | — | Covered. |
| 1729 | Creator insights into research briefs | SKIP | /blog/creator-feedback-loop, /blog/influencer-campaign-insights-product-launch | Informational | — | Covered; now linked to the customer insight page. |
| 1730 | Influencer marketing and MMM | CREATE | /blog/influencer-marketing-mix-modeling | Informational / commercial | H | 0 site coverage. IAB (Jan 2026) says creators are undervalued in cross-media models. IAB Australia (Sept 2026) cites only 39% of US buyers using MMM, attribution and incrementality together. |
| 1731 | Incrementality testing | SKIP | /blog/influencer-marketing-incrementality | Informational | — | Dedicated page (1610–1659); now links to MMM. |
| 1732 | Reconciling platform reports with web analytics | CREATE | /blog/influencer-reporting-discrepancies | Informational | H | Common reporting problem with no page. Supported by GA4 documentation and Meta's January 2026 attribution window change. |
| 1733 | Cost per qualified lead | CONSOLIDATE | /blog/influencer-marketing-long-sales-cycle#cpql | Commercial | M | Formula with a hypothetical example; lead quality also on lead-generation and customer-quality pages. |
| 1734 | Long conversion cycles | CONSOLIDATE | /blog/influencer-marketing-long-sales-cycle | Informational | M | Same intent as 1753. |
| 1735 | Comparing with other acquisition channels | CONSOLIDATE | /blog/influencer-marketing-mix-modeling#compare-channels | Commercial | M | Fair-comparison rules. |
| 1736 | Pre-launch measurement plans | SKIP | /blog/influencer-marketing-kpis, /blog/measuring-influencer-campaign-roi | Informational | — | "Build measurement into the campaign" and the KPI planning framework already exist. |
| 1737 | Reporting errors | CONSOLIDATE | /blog/influencer-reporting-discrepancies#errors | Informational | M | Error list on the reconciliation page. |
| 1738 | Value of content reuse | UPDATE | /blog/repurpose-influencer-content#reuse-value | Commercial | M | Formula plus a hypothetical example, with performance kept separate from cost savings. |
| 1739 | Communicating uncertainty | UPDATE | /blog/influencer-marketing-report#uncertainty | Informational | M | Measured, estimated and assumed labels. |
| 1740 | Choosing a platform | SKIP | /blog/influencer-marketing-platforms, /blog/influencer-campaign-management-software, /blog/creator-discovery-platform | Commercial | — | Covered. |
| 1741 | CRM vs spreadsheet | SKIP | /blog/influencer-marketing-crm ("Spreadsheet, general CRM or influencer software?") | Commercial | — | Section exists. |
| 1742 | Automating workflows | SKIP | /blog/influencer-marketing-automation, /blog/influencer-campaign-automation | Informational | — | Three automation pages. |
| 1743 | Auditing creator data before import | UPDATE | /blog/influencer-database#before-import | Informational | M | Checklist added. |
| 1744 | Approval matrices | SKIP | /blog/influencer-content-approval ("Decide who approves what"), /blog/influencer-marketing-governance | Informational | — | Covered. |
| 1745 | Content version control | UPDATE | /blog/influencer-content-approval#version-control | Informational | M | Naming and final-file habits. |
| 1746 | Incident logs | SKIP | /blog/influencer-campaign-escalation (Incident log section) | Informational | — | Covered. |
| 1747 | Evaluating vendors | SKIP | /blog/influencer-marketing-rfp, agency-selection pages | Commercial | — | Covered. |
| 1748 | Protecting confidential launches | CONSOLIDATE | /blog/influencer-marketing-and-pr#confidential | Commercial | M | Embargoes are a PR concept; launch pages already touch confidentiality. |
| 1749 | Accessibility and quality checklists | SKIP | /blog/accessible-influencer-campaigns, /blog/influencer-content-quality-check | Informational | — | Covered. |
| 1750 | Creator strategy for brand repositioning | CONSOLIDATE | /blog/influencer-marketing-rebrand | Commercial | M | Same intent as 1751. |
| 1751 | Influencer marketing for rebranding | CREATE | /blog/influencer-marketing-rebrand | Commercial | M | No coverage. Uses IAB Australia's Sept 2026 creator research on how reputation and expertise affect trust. |
| 1752 | New product category education | CONSOLIDATE | /blog/influencer-marketing-long-sales-cycle#new-category | Informational | M | Category education sits with considered purchases. |
| 1753 | Long consideration cycles | CREATE | /blog/influencer-marketing-long-sales-cycle | Commercial | H | Fits lead generation. GA4's 90-day default lookback justifies capturing the source in the CRM. |
| 1754 | Coordinating with PR | CREATE | /blog/influencer-marketing-and-pr | Commercial | H | Distinct "influencer marketing vs PR" intent, with no page. |
| 1755 | Employee advocacy vs influencer marketing | SKIP | /blog/employee-influencer-marketing | Commercial | — | Two comparison sections already. |
| 1756 | Regional market entry | SKIP | /blog/international-influencer-campaign-playbook, /blog/influencer-marketing-australia#market-entry, /blog/gcc-influencer-marketing-playbook#from-india | Commercial | — | Covered in the previous batch. |
| 1757 | India, Australia and the UAE | SKIP | /blog/influencer-marketing-australia-india-uae | Commercial | — | Dedicated page. |
| 1758 | Franchises and multi-location businesses | SKIP | /blog/franchise-influencer-marketing-gcc, /blog/local-regional-influencer-marketing-australia, /blog/influencer-marketing-tier-2-tier-3-cities | Commercial | — | A general or India version would mostly repeat the GCC page; revisit if Search Console shows demand. |
| 1759 | Quarterly program reviews | SKIP | /blog/influencer-marketing-annual-plan (Quarterly reviews) | Informational | — | Covered. |

## Research record (checked 2026-10-10)

| Source | Date | Used for |
| --- | --- | --- |
| IAB, The As-Is Measurement Landscape in the Creator Economy | 29 Jan 2026 | Creators undervalued in cross-media planning and attribution (MMM page) |
| IAB Australia, Future of Measurement review | 2 Sept 2026 | Data is the constraint; 39% of US buyers use all three methods (citing IAB US State of Data 2026) |
| IAB Australia, Future of Measurement initiative | 19 Mar 2026 | Background only |
| IAB Australia, Creator Connect research | 16 Sept 2026 | Brand reputation 86% and creator expertise 84% as factors before acting (rebrand page). Survey: Australia n=1,079, fielded June 2026 |
| Google Meridian: about, collect data, organic media | current docs | Organic media modeling, the low-spend guidance, 2–3 years of data as a rule of thumb |
| Meta Robyn analyst's guide | current docs | Calibrating with experiments |
| GA4 Help: attribution models; attribution settings; URL builders | current docs | Data-driven and last-click models (others retired November 2023), 90-day default lookback, required UTM parameters |
| Supermetrics connector documentation | 12 Jan 2026 entry | Meta removed 7-day and 28-day view windows from the Ads Insights API (secondary source; it links to Meta's announcement) |
| ASCI influencer guidance | current | Disclosure, including gifted products |

**Not used:**
- **ACCC social media promotions and online reviews pages:** returned 403 to fetches. Australian pages already cite the ACCC through `AU_SRC`.
- **Kofluence report:** vendor research with an unclear method; no page needed it.
- **Meta Business Help (ThruPlay and view definitions):** not fetched. The ad metrics section uses platform-neutral definitions.

## Changes

- **New pages (6):** each has a hero image, two FAQs (three on MMM and long sales cycles), and mid and bottom CTA copy in `blogCta.ts`:
  - influencer-marketing-mix-modeling
  - influencer-reporting-discrepancies
  - influencer-marketing-long-sales-cycle
  - influencer-marketing-rebrand
  - influencer-marketing-and-pr
  - customer-insights-influencer-brief
- **Updated sections (6 pages, `updatedAt` 2026-10-10):**
  - ugc-paid-social-testing: #beyond-ctr, #stop-iterate-scale
  - influencer-performance-marketing: #paid-social-brief, #creator-and-brand-ads
  - influencer-marketing-report: #uncertainty
  - repurpose-influencer-content: #reuse-value
  - influencer-content-approval: #version-control
  - influencer-database: #before-import
- **Contextual links in (link-only edits, no `updatedAt` change):**
  - incrementality → MMM
  - measuring ROI → discrepancies and MMM
  - lead generation → long sales cycles
  - B2B India → long sales cycles
  - brand awareness → rebrand
  - sentiment analysis → rebrand
  - product launch → PR
  - event marketing → PR
  - campaign brief → customer insights
  - creator feedback loop → customer insights
- **Content map:** 6 rows added to `docs/blog-content-map.csv`, with 2–3 inbound links each.

## Validation

- **Code checks:** `npx tsc --noEmit` clean; `npx eslint` clean on the changed modules; `npm run build` exit 0, 1,706 static pages.
- **Crawl (`next start`):**
  - 809 blog URLs in the sitemap, all 200
  - 6/6 new URLs in the sitemap
  - 0 broken internal links or anchors
- **All 6 new and 16 updated or linking pages:**
  - `index, follow`, self-canonical
  - 1 H1, 1 mid CTA, 1 bottom CTA
  - 5/5 JSON-LD blocks
  - FAQ schema present and matching the visible FAQs
- **Text checks:** 0 link-text mismatches, no duplicate titles or meta descriptions, no em dashes or banned phrases in added copy.
- **Lengths:** rendered titles are 48–55 characters including " — Kudozz"; meta descriptions are 144–155; 11 Open Graph tags per page.
- **Browser test** on /blog/influencer-marketing-and-pr (local build, gtag stubbed):
  - The bottom CTA fired `blog_bottom_cta_click` once, with slug, "Brand Marketing" category, topic "Product Launch" and position "bottom".
  - It opened `/for-brands?...&pos=bottom&t=Product+Launch#inquiry` with Campaign Goal prefilled to "Product Launch".
  - Nothing was submitted.
- **Form APIs:** `brand-inquiry`, `creator-application` and `contact` return 400 on `{}`.
- **Not tested:**
  - real email delivery and `blog_lead_form_submit`, which need a live submission
  - a real-device mobile check
  - the mid CTA in this batch (tested in 1660–1709)

## Follow-ups

1. Review the new pages for accuracy before deployment. In particular, an analytics specialist should read the MMM and reconciliation pages, since GA4, Meridian and Meta settings change.
2. Confirm Meta's attribution-window change against Meta's own documentation; the page cites a connector vendor's record of it.
3. Revisit 1758 (an India franchise page) only if Search Console shows demand.
4. Connect Search Console and analytics so future batches can rank topics by evidence.

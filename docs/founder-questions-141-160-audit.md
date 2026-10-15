# Founder questions, batch 8 (roadmap topics 141–160: conversion, creative strategy and growth): audit, decisions and implementation log

Date: 2026-10-14. Status: the decision matrix (sections 1–4) was written before implementation. Implementation is complete in the working tree; uncommitted and not deployed.

Most of this cluster was already covered by batches 2–4 and the October measurement and paid-media pages. The decisions:

| Decision | Topics |
| --- | --- |
| CREATE (3) | 141 with 154, 151, 158 |
| UPDATE (4) | 144, 153, 156, 159 |
| SKIP (12) | 142, 143, 145, 146, 147, 148, 149, 150, 152, 155, 157, 160 |

## 1. Audit findings

Method:
- Imported all 851 posts.
- Matched slugs and titles against creative, brief, hook, testing, conversion, landing, testimonial, repurpose, paid, scale, e-commerce, library, journey, funnel, format, incrementality, feedback, retargeting, optimisation and growth terms.
- Searched full body text for "creative strategy", "content library", "retarget", "content format", "hook", "landing page", "ad fatigue", "growth system", "90-day", "full funnel" and "conversion rate".
- Read the outlines of every candidate owner.

What already exists:
- **Briefs:** `influencer-campaign-brief` (batch 1) and `customer-insights-influencer-brief`.
- **Testing:**
  - `influencer-marketing-testing`: creator experiments plus test size (batch 4).
  - `ugc-paid-social-testing`: creator ad testing (batch 3).
  - `ugc-ad-hooks`: hooks and openings (batch 3).
- **Conversion:** `influencer-marketing-website-traffic` (Sept; landing section is short), `influencer-landing-page-gcc` (GCC-specific) and `influencer-engagement-no-sales` (batch 4).
- **Proof and reuse:** `customer-testimonials-ugc` (batch 3), `repurpose-influencer-content` (Oct) and `ugc-whitelisting-creator-licensing`.
- **Paid media:** `influencer-performance-marketing` (Oct).
- **Scaling and growth:** `scale-pause-stop-influencer-campaigns` (batch 4), `always-on-influencer-marketing` (batch 1) and `influencer-marketing-operations`.
- **E-commerce:** `influencer-marketing-ecommerce-brands-india` (it has a one-sentence retargeting section) and `ugc-content-ecommerce`.
- **Funnel and journey:** `influencer-marketing-funnel` (never reviewed) and `influencer-marketing-attribution-models#customer-journey` (batch 4).
- **Measurement and feedback:** `influencer-marketing-incrementality` (batch 4), `creator-feedback-loop`, `influencer-feedback` and `influencer-campaign-post-mortem`.
- **Optimisation:** `influencer-campaign-optimization` (has cycles, no schedule), `mid-campaign-optimization` and `influencer-campaign-first-90-days` (what to expect in a first campaign).
- **Content performance:** `influencer-content-performance` and `influencer-ad-fatigue`.

No owner for:
- An influencer creative strategy.
- A content library or asset management.
- Retargeting and follow-up built from influencer activity.
- Content formats by objective, beyond scattered tables.

## 2. Research summary and limitations

Sources were accessed 2026-10-14.

| Fact | Source |
| --- | --- |
| Meta Custom Audience terms: advertisers warrant the rights, permissions and lawful basis for audience and customer-list data, and must remove people who opt out | https://www.facebook.com/legal/terms/customaudience |
| WhatsApp Business Messaging Policy: contact people only if they gave their number and opted in to receive messages | https://whatsappbusiness.com/policy/ |
| UK ICO guidance on storage and access technologies, finalised 29 April 2026; advertising cookies stay outside the new consent exceptions | https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/ (batch 4 research) |
| India DPDP Act and Rules, including children's data under s.9 | Batches 4 and 7 |
| Meta A/B tests split the audience so each person sees one version | Third-party guides only (Meta help pages can't be fetched here), so the pages say to use the platform's experiment tool without describing the UI |

Meta engagement audiences built from creator content were described only by third-party guides. Whether people who engage with a partnership ad can become an audience could not be confirmed. The retargeting page says to check Ads Manager rather than asserting it.

Limitations:
- No Search Console, analytics or keyword tool access, so no volumes or rankings are used.
- Competitor review was limited to general search results. Agency pages on these topics were mostly generic "tips" lists without measurement or permission detail. The gaps Kudozz fills are workflows, permissions, consent and decision rules.

## 3. Decision matrix

| # | Topic | Decision | Primary query (inferred) | Final URL | Existing overlap / reason | Service | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 141 | Creative strategy | CREATE (with 154) | influencer creative strategy | /blog/influencer-creative-strategy | No owner. Sits between the strategy guide (business level) and the brief (single campaign) | /services/campaign-strategy | P1 |
| 142 | Creative brief | SKIP | influencer creative brief | /blog/influencer-campaign-brief | Brief owner covers creative direction vs script, creator freedom and templates (batch 1) | — | — |
| 143 | Testing creator content | SKIP | test influencer content | /blog/influencer-marketing-testing | Batch 4 added test size, duration and assignment | — | — |
| 144 | Traffic into conversions | UPDATE | influencer traffic conversion | /blog/influencer-marketing-website-traffic | Expand the landing-page section into a click-to-conversion journey; link the GCC landing page | /services/campaign-strategy | P1 |
| 145 | Creator testimonials and reviews | SKIP | creator testimonials | /blog/customer-testimonials-ugc | Batch 3 owner covers trust and the rules | — | — |
| 146 | First three seconds | SKIP | influencer video hook | /blog/ugc-ad-hooks | Hook owner (batch 3); the Reels page also covers hooks | — | — |
| 147 | Repurpose for ads and product pages | SKIP | repurpose influencer content | /blog/repurpose-influencer-content | Owner covers channels, permissions and the workflow | — | — |
| 148 | Influencer plus paid ads | SKIP | influencer marketing and paid ads | /blog/influencer-performance-marketing | Owner covers pipeline, rights, budgets and measurement | — | — |
| 149 | Scale without losing performance | SKIP | scale influencer campaign | /blog/scale-pause-stop-influencer-campaigns | Batch 4 scaling section plus always-on | — | — |
| 150 | E-commerce conversion rates | SKIP | influencer marketing ecommerce conversion | /blog/influencer-marketing-ecommerce-brands-india | Owner covers the e-commerce journey; the conversion journey is handled in 144 | — | — |
| 151 | Content library | CREATE | influencer content library | /blog/influencer-content-library | No owner; scattered mentions | /services/ugc-campaigns | P2 |
| 152 | Customer journey | SKIP | influencer customer journey | /blog/influencer-marketing-funnel and attribution#customer-journey | Covered twice already | — | — |
| 153 | Balance awareness and sales | UPDATE | balance awareness and sales influencer | /blog/influencer-marketing-funnel | Funnel page owns stages; add a "balancing" section and review the page | /services/campaign-strategy | P2 |
| 154 | Formats by objective | CONSOLIDATE into 141 | influencer content formats by objective | /blog/influencer-creative-strategy#formats-by-objective | A separate page would duplicate the creative strategy | — | — |
| 155 | Incrementality | SKIP | influencer incrementality | /blog/influencer-marketing-incrementality | Batch 4 update | — | — |
| 156 | A/B tests on creator ads | UPDATE | a/b test influencer ads | /blog/ugc-paid-social-testing | Replace the vague "platform considerations" section with controlled A/B test guidance. 143 stays on the testing page | /services/ugc-campaigns | P2 |
| 157 | Feedback into decisions | SKIP | influencer campaign feedback | /blog/creator-feedback-loop and /blog/scale-pause-stop-influencer-campaigns#report-to-decisions | Covered | — | — |
| 158 | Retargeting and follow-up | CREATE | influencer retargeting | /blog/influencer-retargeting | No owner (one sentence on the e-commerce page). Distinct from paid amplification (148) | /services/campaign-strategy | P1 |
| 159 | 90-day optimisation plan | UPDATE | influencer optimisation plan | /blog/influencer-campaign-optimization | Add a week-by-week 90-day schedule. first-90-days covers expectations for a first campaign, not an optimisation cadence | /services/reporting | P2 |
| 160 | Growth system | SKIP | influencer marketing growth system | /blog/always-on-influencer-marketing | Owner covers roster, cadence, testing, rhythm and "is it a repeatable growth channel yet?" | — | — |

Market relevance:
- All topics are market-neutral, with India-first examples.
- Privacy and consent notes for retargeting cover India, the UK and the general rule elsewhere.
- No country variants were created.

## 4. Planned internal links

**From the new pages:**
- **Creative strategy:** links to the strategy guide, brief, brand consistency, hooks, testing, Reels and Stories, and the platform comparison.
- **Content library:** links to usage rights, repurposing, content performance, ad fatigue and the UGC production workflow.
- **Retargeting:** links to UTM tracking, performance marketing, e-commerce, the UGC e-commerce page and the disclosure guide.

**Reciprocal links:**
- Strategy guide → creative strategy.
- Repurposing page → content library.
- E-commerce India retargeting section → retargeting page.
- Performance marketing page → retargeting page.

## 5. Implemented pages

| Page | New or updated | Primary query | Intent | Differentiation |
| --- | --- | --- | --- | --- |
| How to Build an Influencer Creative Strategy That Supports Business Goals (/blog/influencer-creative-strategy) | New | influencer creative strategy; influencer content formats by objective | Informational / planning | The layer between strategy and brief: idea, proof, creator roles, formats by objective, fixed/flexible/free, creative questions, a one-page template |
| How to Build an Influencer Content Library Your Team Can Actually Use (/blog/influencer-content-library) | New | influencer content library | Operational how-to | What to store, a controlled tag system, a rights register with expiry review, performance notes, workflow and access |
| How to Connect Influencer Campaigns With Retargeting and Follow-Up Marketing (/blog/influencer-retargeting) | New | influencer retargeting | How-to | Amplification vs retargeting; consented audiences; consent by market; next-message table; email and WhatsApp opt-in; holdout measurement |
| influencer-marketing-website-traffic | Updated (144) | influencer traffic to conversions | How-to | Click-to-conversion journey table (in-app browser, message match, proof, decision, checkout, after the click) |
| influencer-marketing-funnel | Updated (153) | balance awareness and sales | Planning | Split jobs by creators, content, formats, measures and timing |
| ugc-paid-social-testing | Updated (156) | A/B test influencer ads | How-to | Controlled platform A/B tests vs directional creator testing (143 stays on influencer-marketing-testing) |
| influencer-campaign-optimization | Updated (159) | influencer optimisation plan | Planning | Week-by-week 90-day schedule; first-90-days remains "what to expect in a first campaign" |

All examples are labelled hypothetical. No Kudozz clients, results or statistics were added. American spelling is used throughout, matching the brand-guide convention.

## 6. Cannibalisation review

- **143 vs 156:** creator experiments stay on influencer-marketing-testing; controlled ad-account A/B tests sit on ugc-paid-social-testing. They cross-link.
- **148 vs 158:** amplification (influencer-performance-marketing) and retargeting (new page) are distinguished in a table and cross-linked both ways.
- **154:** folded into the creative strategy, so there's no separate formats page.
- **159 vs influencer-campaign-first-90-days:** the optimisation schedule is for an ongoing programme; the first-90-days page covers a first campaign's timeline. They are linked.
- **150 vs 144:** e-commerce journeys stay on the e-commerce page; the generic click-to-conversion journey sits on the traffic page.

## 7. Internal links

**Within the new pages:**
- **Creative strategy:** influencer-marketing-strategy, influencer-campaign-brief, customer-insights-influencer-brief, instagram-vs-youtube-vs-tiktok, instagram-stories-influencer-marketing, youtube-shorts-influencer-marketing, influencer-brand-consistency, ugc-ad-hooks, influencer-marketing-testing and influencer-content-performance.
- **Content library:** influencer-usage-rights, influencer-content-ownership, influencer-content-performance, influencer-ad-fatigue, repurpose-influencer-content and ugc-production-workflow.
- **Retargeting:** influencer-performance-marketing, influencer-utm-tracking, influencer-usage-rights, influencer-disclosure-rules-by-country, influencer-marketing-incrementality and influencer-marketing-ecommerce-brands-india.

**Within the updated pages:**
- **Traffic:** engagement-no-sales, influencer-retargeting and influencer-landing-page-gcc.
- **Funnel:** brand-awareness and track-influencer-sales.
- **A/B testing:** influencer-marketing-testing.
- **Optimisation:** influencer-marketing-testing, influencer-marketing-incrementality, scale-pause-stop-influencer-campaigns and influencer-campaign-first-90-days.

**Reciprocal links** (link-only, dates unchanged except where already updated):
- influencer-marketing-strategy → creative strategy
- repurpose-influencer-content → content library
- influencer-marketing-ecommerce-brands-india → retargeting
- influencer-performance-marketing → retargeting

**Broken links:** none found. The crawl checked 106 internal links and 11 images.

## 8. SEO, AEO and GEO

- **New pages:** unique titles and metas; one H1 each; BlogPosting, BreadcrumbList and FAQPage JSON-LD from the existing template; in the sitemap with lastmod 2026-10-14.
- **Updated pages:** `updatedAt` and `lastReviewed` set. The website-traffic and funnel pages were previously not marked as reviewed in October.
- **Template:** no schema or template changes. The FAQPage decision remains open.

## 9. CTA, enquiry form and analytics

- **CTAs:** three `BRAND_GUIDE_CTAS` entries were added (creative strategy, content library, retargeting). Updated pages keep their CTAs.
- **Events** (gtag stubbed) on all three new pages:
  - The mid and bottom CTA click events fired with the correct topics.
  - On the inquiry page, `brand_lead_form_start` and `blog_lead_form_start` fired.
  - The goal field pre-fills: Campaign Management for the creative strategy and retargeting pages, UGC Content for the library page.
- **Enquiry form states** (first time tested): headless Chrome intercepted `/api/brand-inquiry` and answered locally, so no request reached the server and no email was sent.
  - **Validation:** an empty submit shows five field errors and makes no request.
  - **Error:** a simulated 500 response shows the error message; there's no success state and no submit event.
  - **Success:** a simulated `{success:true}` response shows the confirmation and fires `generate_lead` and `blog_lead_form_submit`.
  - Real server delivery and GA4 receipt were not tested.
- **Accessibility fix:** the submit-error message in `src/components/brands/BrandInquiryForm.tsx` now has `role="alert"`, so screen readers announce it. Retested after the rebuild.

## 10. Images and accessibility

- Three hero SVGs were added (creative strategy, content library, retargeting): original diagrams with alt text.
- 390px emulation: 11 of 11 touched pages show no horizontal overflow.

## 11. Validation

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; 6 pre-existing warnings |
| `npm run build` | Pass (twice; again after the form change); 1,802 static pages; 854 posts |
| Content checks (11 pages) | 0 issues after one meta-length fix; no em dashes |
| Crawl (11 pages) | All 200; 1 H1; self-canonical; valid JSON-LD; mid and bottom CTA; sitemap lastmod; listed on /blog |
| Form tests | See section 9 |
| Secrets in `.next/static` | 0 occurrences |

## 12. Files changed

- **Created:**
  - `src/content/brand-guides/founder-growth.ts`
  - `docs/founder-questions-141-160-audit.md`
  - Three hero SVGs
- **Edited:**
  - `src/content/brand-guides/index.ts`
  - `src/lib/blogCta.ts`
  - `src/components/brands/BrandInquiryForm.tsx` (`role="alert"`)
  - `src/content/blog.ts`: funnel, A/B testing, plus link-only edits on the strategy and e-commerce pages
  - `src/content/brand-guides/planning-and-programs.ts`: traffic page
  - `src/content/brand-guides/optimization-cycle.ts`: optimisation page
  - The files holding repurpose-influencer-content and influencer-performance-marketing: link-only edits
  - `docs/seo-register-blog-2026-10.csv` (3 rows added, 8 updated; 854 rows)
  - `docs/seo-audit-progress.md`

## 13. Outstanding

- **Unconfirmed platform claims:** Meta help pages couldn't be read, so the A/B test and engagement-audience guidance avoids UI and retention specifics. Whether engagement with partnership ads can be used as an audience source is unconfirmed (the page says to check).
- **Untested:** real form delivery and GA4 receipt.
- **Carried over:**
  - FAQPage decision.
  - Consolidation sprint for X and podcasts, the negotiation pair, fintech vs personal finance and the scoring pages.
  - UAE regulator URLs.
  - Unverified CCPA greenwashing text.

## 14. Recommended next content opportunities

The roadmap topics so far (1–160) have mostly mapped onto existing owners. Batches 5–8 created 1, 2, 1 and 3 pages respectively, and the rest were updates. Evidence points to:

1. **Consolidation and refresh, before more new topics** (needs Search Console):
   - Merge the 65 thin X and podcast pages.
   - Resolve the monitored pairs.
   - Re-review the September pages that still have no sources.
2. **Pre-sales content built on real enquiry themes:** pricing factors, agency engagement models and timelines, linked from service pages. This needs anonymised themes from inquiry emails.
3. **UK and Singapore regulated-category pages built from official sources,** if demand is confirmed.

# Creator trust, partnerships, discovery, content systems and program maturity (1810–1859): audit and decisions

Date: 2026-10-10. Builds on the uncommitted batches up to and including 1760–1809. No uncommitted work was overwritten; all edits are insertions or in-place wording changes inside the five pages listed below.

## Summary

This list is almost entirely covered. The site has 816 blog URLs, and vetting, audience quality, quality scores, scorecards, ambassador, always-on, seeding, gifting, repeat collaborations, approvals, repurposing, testing, budgets, KPIs, documentation, dashboards, software and operations all have dedicated pages, most of them updated in the last two weeks. Publishing new URLs for these topics would create near-duplicates.

**Decisions: 0 CREATE, 3 UPDATE, 2 CONSOLIDATE, 45 SKIP.** No new URLs, redirects or deletions.

## Baseline

- `git status`: 106 entries of uncommitted work from earlier batches; preserved.
- `npx tsc --noEmit`: exit 0. Previous build: exit 0, 1,720 static pages, 816 blog URLs, 0 broken internal links (1760–1809 QA, same day).
- **Security:** unchanged. `src/lib/mailer.ts` is `server-only` and reads `EMAIL_FROM`, `EMAIL_TO`, `EMAIL_APP_PASSWORD`; 0 references to `NEXT_PUBLIC_APP_PASSWORD`, `NEXT_PUBLIC_FROM_EMAIL` or `NEXT_PUBLIC_TO_EMAIL` in `src`; the password value appears in 0 files under `.next/static` (checked without printing it).
- **Data not available:** no Search Console, analytics, backlink or search-volume data.

## Overlap findings

Body text was searched, and the owner pages' sections read, for every cluster:

- **Maturity models** already exist in four places: influencer-marketing-operations (ops), influencer-marketing-automation (technology), influencer-marketing-software (features), creator-intelligence (data). A fifth standalone page would compete with all four, so the operations page now carries the program-wide model and links to the other three.
- **Ending a partnership** is covered by influencer-partnerships (#renewing-or-ending), influencer-relationship-management ("When a relationship isn't working"), influencer-campaign-cancellation, influencer-code-of-conduct and influencer-controversy-response.
- **Media kits** are checked in how-to-vet-influencers (performance claims row) and creator-quality-score, but there was no list of red flags.
- **Comparing creator quotes**: negotiate-influencer-rates said "compare like with like" without showing how.
- **Creator advisory panels**: 0 coverage; creator-feedback-loop and influencer-partnerships cover feedback into product.
- **Mentioning product limitations**: not covered in the brief guidance.
- **Audience fatigue** has its own section in influencer-ad-fatigue ("Organic fatigue: sponsored posts").

## Decision matrix

| ID | Topic | Decision | URL / owner | Intent | Overlap risk | Evidence | Value | Reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1810 | Evaluating creator authenticity | SKIP | /blog/how-to-vet-influencers (Step 3), /blog/creator-quality-score | Commercial | H | — | — | Covered. |
| 1811 | Audience relevance vs follower count | SKIP | /blog/creator-quality-score ("Quality vs fit"), /blog/influencer-audience-quality, /blog/micro-vs-macro-influencers | Informational | H | — | — | Covered. |
| 1812 | Protecting audience trust in sponsored content | SKIP | /blog/influencer-campaign-brief (#authenticity), /blog/influencer-marketing-compliance | Informational | H | — | — | Covered. |
| 1813 | The authenticity gap audit | SKIP | /blog/how-to-vet-influencers, /blog/how-to-identify-fake-followers, /blog/influencer-audience-quality | Informational | H | — | — | Covered. |
| 1814 | Creators mentioning product limitations | CONSOLIDATE | /blog/influencer-campaign-brief#limitations | Informational | M | L | M | A briefing question, not a standalone intent. |
| 1815 | Shared values without forced fit | SKIP | /blog/how-to-choose-the-right-influencer-for-your-brand, /blog/influencer-code-of-conduct | Informational | H | — | — | Covered. |
| 1816 | Spotting audience fatigue | SKIP | /blog/influencer-ad-fatigue (organic fatigue section) | Informational | H | — | — | Covered. |
| 1817 | When to stop working with a creator | SKIP | /blog/influencer-partnerships#renewing-or-ending, /blog/influencer-relationship-management, /blog/influencer-campaign-cancellation | Informational | H | — | — | Five owners. |
| 1818 | Relationship scorecard beyond engagement | SKIP | /blog/influencer-relationship-management (health check), /blog/creator-performance-scorecard | Informational | H | — | — | Covered. |
| 1819 | Creative freedom, brand safety and expectations | SKIP | /blog/influencer-campaign-brief, /blog/influencer-marketing-brand-safety, /blog/influencer-content-approval | Informational | H | — | — | Covered. |
| 1820 | One-off vs long-term partnerships | SKIP | /blog/influencer-partnerships, /blog/brand-ambassador-program ("Ambassador programme or one-off campaigns?") | Commercial | H | — | — | Covered. |
| 1821 | Always-on program | SKIP | /blog/always-on-influencer-marketing | Commercial | H | — | — | Dedicated page. |
| 1822 | Ambassador program, recruitment to renewal | SKIP | /blog/brand-ambassador-program | Commercial | H | — | — | Dedicated page. |
| 1823 | Partnerships across product lines | SKIP | /blog/influencer-marketing-annual-plan ("Plan across products") | Informational | H | — | — | Covered. |
| 1824 | Creator advisory panel | CONSOLIDATE | /blog/creator-feedback-loop#advisory-panel | Informational | M | L | L | Real gap but niche, with no demand evidence; fits the feedback page. |
| 1825 | Repeatable seeding program | SKIP | /blog/influencer-product-seeding-program | Commercial | H | — | — | Dedicated page. |
| 1826 | Paid partnerships vs gifting | SKIP | /blog/instagram-gifting-vs-paid-collaboration, /blog/influencer-gifting | Commercial | H | — | — | Covered. |
| 1827 | Partnership tiering model | SKIP | /blog/brand-ambassador-program (tiers), /blog/influencer-affiliate-program (tiers) | Informational | H | — | — | Covered. |
| 1828 | Keeping long-term partnerships fresh | SKIP | /blog/repeat-influencer-collaborations ("Keep repeat content fresh") | Informational | H | — | — | Covered. |
| 1829 | Program calendar | SKIP | /blog/influencer-marketing-annual-plan, /blog/always-on-influencer-marketing (calendar) | Informational | H | — | — | Covered. |
| 1830 | Audience beyond public metrics | SKIP | /blog/influencer-audience-quality, /blog/how-to-vet-influencers (Step 2) | Informational | H | — | — | Covered. |
| 1831 | Due diligence checklist | SKIP | /blog/how-to-vet-influencers (due diligence, checklist) | Commercial | H | — | — | Covered. |
| 1832 | Creator-brand fit before fees | SKIP | /blog/how-to-choose-the-right-influencer-for-your-brand, /blog/creator-quality-score | Commercial | H | — | — | Covered. |
| 1833 | Comparing creator proposals like for like | UPDATE | /blog/negotiate-influencer-rates#compare-quotes | Commercial | M | L | M | The page asked readers to compare like with like without showing how. |
| 1834 | Red flags in media kits and proposals | UPDATE | /blog/how-to-vet-influencers#media-kit-red-flags | Commercial | M | L | M | One row existed; now a full red-flag table. |
| 1835 | Content consistency over time | SKIP | /blog/creator-quality-score, /blog/how-to-vet-influencers (Step 4) | Informational | H | — | — | Covered. |
| 1836 | Creators for different communities in one market | SKIP | /blog/customer-insights-influencer-brief#segments, /blog/regional-influencer-marketing-india | Informational | H | — | — | Covered. |
| 1837 | Balanced creator portfolio | SKIP | /blog/influencer-budget-allocation ("Allocating across creator types"), /blog/always-on-influencer-marketing (roster) | Informational | H | — | — | Covered. |
| 1838 | Smaller network vs large roster | SKIP | /blog/micro-vs-macro-influencers, /blog/nano-vs-micro-influencers, /blog/influencer-budget-allocation | Informational | H | — | — | Covered. |
| 1839 | Reassessing selection criteria | SKIP | /blog/creator-performance-scorecard ("From scorecards to a roster"), annual plan #annual-review | Informational | H | — | — | Covered. |
| 1840 | Multi-format content package | SKIP | /blog/repurpose-influencer-content | Commercial | H | — | — | Covered. |
| 1841 | Approval workflow that doesn't slow campaigns | SKIP | /blog/influencer-content-approval ("How to make approvals faster") | Informational | H | — | — | Covered. |
| 1842 | Organizing creator assets | SKIP | /blog/ugc-content-ecommerce#content-library, /blog/influencer-campaign-documentation | Informational | H | — | — | Covered (library added in 1760–1809). |
| 1843 | Naming and tagging system | SKIP | /blog/influencer-content-approval#version-control, /blog/ugc-content-ecommerce#content-library | Informational | H | — | — | Covered. |
| 1844 | Which content deserves paid promotion | SKIP | /blog/ugc-paid-social-testing#stop-iterate-scale, /blog/influencer-performance-marketing | Commercial | H | — | — | Covered. |
| 1845 | Content for stages of awareness | SKIP | /blog/influencer-marketing-funnel | Informational | H | — | — | Covered. |
| 1846 | Adapting content across platforms | SKIP | /blog/repurpose-influencer-content, /blog/influencer-campaign-brief ("Adapting one brief across platforms") | Informational | H | — | — | Covered. |
| 1847 | Content testing library | SKIP | /blog/influencer-marketing-testing | Informational | H | — | — | Covered. |
| 1848 | Brand consistency across many collaborations | SKIP | /blog/influencer-marketing-governance, /blog/influencer-content-quality-check | Informational | H | — | — | Covered. |
| 1849 | Operational cost of producing content | SKIP | /blog/influencer-campaign-hidden-costs, /blog/ugc-content-cost-india | Commercial | H | — | — | Covered. |
| 1850 | Budget with clear assumptions | SKIP | /blog/influencer-marketing-budget, /blog/influencer-marketing-roi-forecasting | Commercial | H | — | — | Covered. |
| 1851 | Fixed, performance and hybrid fees | SKIP | /blog/performance-based-influencer-marketing, /blog/how-much-to-pay-influencers | Commercial | H | — | — | Covered. |
| 1852 | Forecasting costs before outreach | SKIP | /blog/influencer-campaign-cost-india, /blog/influencer-budget-allocation, /blog/influencer-campaign-hidden-costs | Commercial | H | — | — | Covered. |
| 1853 | Approval process for growing teams | SKIP | /blog/influencer-marketing-governance ("Who approves what"), /blog/influencer-marketing-team-structure | Informational | H | — | — | Covered. |
| 1854 | KPIs before contracts | SKIP | /blog/influencer-marketing-kpis | Informational | H | — | — | Dedicated page. |
| 1855 | Documenting decisions for audits | SKIP | /blog/influencer-campaign-documentation, /blog/influencer-shortlist ("Keep a decision log") | Informational | H | — | — | Covered. |
| 1856 | Evaluating tools without overcomplicating | SKIP | /blog/influencer-marketing-software, /blog/influencer-marketing-platforms | Commercial | H | — | — | Covered. |
| 1857 | Dashboard for marketing and finance | SKIP | /blog/influencer-marketing-dashboard ("Different views for different people", "Questions leadership will ask") | Informational | H | — | — | Covered. |
| 1858 | Scaling without losing quality control | SKIP | /blog/influencer-marketing-operations, /blog/influencer-content-quality-check | Informational | H | — | — | Covered. |
| 1859 | Influencer marketing maturity model | UPDATE | /blog/influencer-marketing-operations#maturity | Informational | **H** if a new URL | L | M | Four partial maturity models exist; the operations page now has the program-wide model and links to the others. |

## Research

The five additions are practical guidance with no new external factual claims, so no new sources were needed. Existing citations on the pages are unchanged. The advisory-panel section's disclosure note relies on the ASCI material-connection definition already verified in 1760–1809 (ASCI influencer guidelines, PDF text).

## Changes (5 pages, `updatedAt` 2026-10-10)

- **negotiate-influencer-rates:** #compare-quotes, a normalization table for comparing creator quotes, linking to hidden costs.
- **how-to-vet-influencers:** #media-kit-red-flags, a red-flag table plus a verification note. Reading time recalculated, 13 → 9.
- **creator-feedback-loop:** #advisory-panel covering size, pay, NDA, cadence, questions and disclosure.
- **influencer-campaign-brief:** #limitations, on letting creators mention honest limitations.
- **influencer-marketing-operations:** heading renamed to "An influencer marketing maturity model" (same `#maturity` id, so existing links still work), a program-wide 7×4 table, links to the automation, creator-intelligence and annual-plan pages, excerpt wording and one tag updated.
- **Not changed:** new URLs, redirects, CTA config, forms, APIs, analytics, schema components, content map (no new slugs).

## Validation

- **Code:** `npx tsc --noEmit` clean; `npm run build` exit 0, 1,720 static pages (unchanged, as expected).
- **Crawl of the local production build:**
  - 816 blog URLs, all 200; 0 broken internal links or anchors, including the new `#maturity-model` and `#maturity` targets.
  - 0 future sitemap dates.
- **All 5 updated pages:** `index, follow`, self-canonical, 1 H1, 1 mid CTA, 1 bottom CTA, 5/5 valid JSON-LD, FAQ schema present.
- **Text:** 0 link-text mismatches; no duplicate titles or meta descriptions.
- **Form APIs:** `brand-inquiry`, `creator-application` and `contact` return 400 on `{}`.
- **Not re-tested:** CTA click events in a browser (no CTA or analytics code changed; tested on 2026-10-10 in 1760–1809); real email delivery; real-device mobile; live site (nothing deployed).

## Follow-ups

1. Connect Search Console. With 816 URLs and most generic topics covered, future topic lists should start from query data (impressions without a matching page) rather than brainstormed titles.
2. Revisit 1824 (advisory panels) and 1859 (maturity model) as standalone pages only if Search Console shows queries the current sections don't serve.

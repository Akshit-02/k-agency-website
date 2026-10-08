# Campaign execution layer (1230–1249): audit, decisions and content database

Date: 2026-10-08. New module: `src/content/brand-guides/operations-execution.ts` (registered in `src/content/brand-guides/index.ts`). CTA pairs in `src/lib/blogCta.ts`. Hero diagrams in `public/blog/brand-guides/<slug>.svg`. This layer sits inside Creator Operations (1210–1229): Onboarding → Briefing → Communication → **Submission → Review → Revisions → Approval → Quality control → Delays/Escalation/Non-compliance → Tracking → Coordination** → Repeatable system.

## Summary

The 20 topics were checked against all 681 live URLs. Most of them are narrower variations of intents already owned by existing pages, so the result is deliberately smaller than 20 URLs:

- **8 new URLs**
- **4 existing owners expanded** (URLs unchanged)
- **8 topics consolidated** into the new pages
- **0 merges, 0 redirects** (no two existing pages needed combining)

## Cannibalization decisions

| ID | Topic | Decision | Final URL | Why |
| --- | --- | --- | --- | --- |
| 1230 | Campaign timeline | EXPAND EXISTING | /blog/influencer-marketing-campaign-timeline | Already owns "influencer campaign timeline / how long does a campaign take". Added a deadline-management table, deadline rules and links to the new delays and tracker pages. H1 kept for URL stability. |
| 1231 | Creator campaign workflow | EXPAND EXISTING | /blog/influencer-campaign-management | Already "How Influencer Campaign Management Works: A Step-by-Step Guide" with a workflow section (63 inbound links). Added "From brief to final content: the production workflow" linking each execution playbook. |
| 1232 | Campaign deadlines | CONSOLIDATE | → influencer-marketing-campaign-timeline | Deadlines are how a timeline is kept; same search results. |
| 1233 | Content submission | CONSOLIDATE | → influencer-content-approval | Submission is step 1 of the approval workflow. |
| 1234 | Deliverables checklist | CONSOLIDATE | → influencer-content-quality-check | Go-live deliverables checklist is stage 2 of quality control. |
| 1235 | Content review | CONSOLIDATE | → influencer-content-approval | "Content review" and "content approval" return the same results. |
| 1236 | Handling revisions | CONSOLIDATE | → influencer-revision-policy | Handling revisions is the practice side of the policy; the feedback-writing side is owned by influencer-feedback. |
| 1237 | Revision policy | CREATE NEW | /blog/influencer-revision-policy | Distinct intent: written rules (rounds, revision vs scope change, turnaround both ways, extra fees). |
| 1238 | Campaign approvals | CONSOLIDATE | → influencer-content-approval | Same intent as 1239. |
| 1239 | Content approval process | CREATE NEW | /blog/influencer-content-approval | No brand-side owner for the step-by-step approval workflow; governance covers rules and influencer-feedback covers comments. |
| 1240 | Campaign delays | CREATE NEW | /blog/influencer-campaign-delays | Diagnostic/prevention intent distinct from timeline planning; the timeline's short "what slows campaigns" section now points here. |
| 1241 | Bottlenecks | CONSOLIDATE | → influencer-campaign-delays | Bottleneck diagnosis is how delays are found; one page with a stage-timing method. |
| 1242 | Escalation | CREATE NEW | /blog/influencer-campaign-escalation | Brand-side framework; `creator-campaign-escalation` is agency-side (Creator Resources). Cross-linked both ways. |
| 1243 | Non-compliance | CREATE NEW | /blog/creator-non-compliance | Distinct scenario intent (missed requirements, disclosure/claims, payment and remedies). |
| 1244 | Quality control | CREATE NEW | /blog/influencer-content-quality-check | Brand-side QC system; `creator-campaign-quality-assurance` is agency-side. |
| 1245 | Content quality checklist | CONSOLIDATE | → influencer-content-quality-check | Checklist is stage 1 of the same QC page. |
| 1246 | Status tracking | CREATE NEW | /blog/influencer-campaign-tracker | "Influencer campaign tracker" intent had no brand-side owner (automation page covers triggers, software page covers tools). |
| 1247 | Campaign dashboard | EXPAND EXISTING | /blog/influencer-marketing-dashboard | Existing H1 is literally "What Data Should Brands Track in One Place?". Added an operational status view (counts by status, due soon, overdue, waiting on brand, go-live calendar, issues, payments). |
| 1248 | Multi-creator coordination | CREATE NEW | /blog/influencer-campaign-coordination | Distinct practical intent: waves, groups, shared work, go-live patterns, team sizing, daily rhythm. |
| 1249 | Campaign management system | EXPAND EXISTING | /blog/influencer-marketing-operations | Already "How Brands Can Build a Reliable Creator Partnership Process" (published 2026-10-08). Added an "Execution playbooks" section linking all execution pages. |

## Research notes (2026-10-08)

No keyword tool or Search Console data was available; no volumes, difficulty or performance figures are claimed.

- SERPs for approval, revision and tracker queries are dominated by SaaS vendors describing their product's approval feature. The gap: neutral workflows, decision rules (who approves what; revision vs scope change), and templates usable in a spreadsheet.
- **Verified:** ASCI influencer guidelines on disclosure placement: label upfront in the first two lines of the caption without tapping "more"; superimposed on content without a caption (for example Stories); minimum on-screen duration for video labels by video length (`SOURCES.asciGuidelines`). Used on the quality-check and non-compliance pages without restating the duration thresholds.
- YouTube's paid promotion setting is linked to the official help page (`SOURCES.youtubePaidPromotion`).
- All examples are labelled hypothetical. No Kudozz clients, results, network size or awards are claimed.

## New pages

| ID | URL | Primary keyword | Intent | Funnel | CTA (mid → / bottom → inquiry) | Schema |
| --- | --- | --- | --- | --- | --- | --- |
| 1239 | influencer-content-approval | influencer content approval process | Step-by-step approval workflow incl. submission and review | MOFU | Campaign Management → /services/outreach-management | BlogPosting, BreadcrumbList, FAQPage (4) |
| 1237 | influencer-revision-policy | influencer revision policy | Revision rules and handling changes | MOFU | Campaign Management → outreach-management | BlogPosting, BreadcrumbList, FAQPage (3) |
| 1244 | influencer-content-quality-check | influencer campaign quality control | Pre-approval and go-live checklists | MOFU | Campaign Management → outreach-management | BlogPosting, BreadcrumbList, FAQPage (3) |
| 1240 | influencer-campaign-delays | influencer campaign delays | Causes, bottleneck diagnosis, prevention | MOFU | Campaign Management → outreach-management | BlogPosting, BreadcrumbList, FAQPage (3) |
| 1242 | influencer-campaign-escalation | influencer campaign escalation | Severity levels, owners, responses | MOFU | Campaign Management → outreach-management | BlogPosting, BreadcrumbList, FAQPage (3) |
| 1243 | creator-non-compliance | creator non-compliance | Responding to missed requirements | MOFU | Campaign Management → outreach-management | BlogPosting, BreadcrumbList, FAQPage (3) |
| 1246 | influencer-campaign-tracker | influencer campaign tracker | Status tracking structure and rules | MOFU | Campaign Management → /services/reporting | BlogPosting, BreadcrumbList, FAQPage (3) |
| 1248 | influencer-campaign-coordination | influencer campaign coordination | Running many creators at once | MOFU/BOFU | Campaign Management → outreach-management | BlogPosting, BreadcrumbList, FAQPage (3) |

All: audience = marketing managers, social and influencer teams, D2C and ecommerce brands, agencies; cluster "Creator Operations > Execution" in `docs/blog-content-map.csv`; status published 2026-10-08. Secondary keywords and inbound counts are in the CSV.

## Internal links

- **New pages → existing:** feedback, kickoff, onboarding, governance, compliance, contract, payment terms, documentation, scorecard, brand safety, pan-India, product launch, regional, timeline, team structure, campaign management software, plus agency-side counterparts.
- **Existing → new (19 pages):** influencer-feedback, influencer-marketing-governance, influencer-marketing-compliance, influencer-marketing-contract, influencer-communication, influencer-campaign-kickoff, influencer-onboarding, influencer-campaign-automation, pan-india-influencer-marketing-campaign, influencers-for-product-launch, influencer-marketing-brand-safety, creator-campaign-quality-assurance, creator-brand-revisions, creator-campaign-escalation, influencer-campaign-management-software, influencer-campaign-brief, seasonal-influencer-marketing-india, influencer-marketing-team-structure, creator-performance-scorecard.
- **Hub links:** the four expanded owners (timeline, campaign management, dashboard, operations) link to the relevant execution pages. Every new page has 6–10 inbound links; no orphans.

## Validation

- Production build passed.
- Type check clean (apart from the pre-existing stale `.next` artifact for `sitemap-pages.xml`, which the build regenerates).
- ESLint shows no new warnings.
- Content QA across all 689 posts: no broken internal links, no link text missing from its paragraph, no duplicate slugs, titles or meta descriptions, no duplicate heading IDs.
- Rendered HTML on all 12 affected pages: indexable, canonical correct, one H1, exactly one BlogMidCTA and one BlogBottomCTA, JSON-LD parses (Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage), FAQ count matches the visible FAQs, hero image loads with alt text.
- All 8 new URLs are in the sitemap; robots.txt unchanged; `/for-brands` inquiry route with tracking parameters loads.

## Known limitations

- New pages are about 950–1,300 words (body + FAQs). Each has a workflow, checklist or template and a worked example; none was padded.
- Visual layout was not checked in a browser (the Chrome extension wasn't connected). The pages use the same components as existing articles.
- Re-check the ASCI disclosure guidance at the next annual review.

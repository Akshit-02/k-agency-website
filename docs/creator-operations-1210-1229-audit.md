# Creator operations cluster (1210–1229): audit, decisions and content database

Date: 2026-10-08. New modules: `src/content/brand-guides/operations-onboarding.ts`, `operations-payments.ts`, `operations-records.ts` (registered in `src/content/brand-guides/index.ts`). CTA pairs in `src/lib/blogCta.ts`. Hero diagrams in `public/blog/brand-guides/<slug>.svg`. Cluster flow: Discovery → Outreach → Negotiation (1190–1209) → **Onboarding → Briefing → Communication → Feedback → Payment → Documentation → Handover → Creator experience** → Repeat partnership.

## Summary

- 20 topics checked against all 667 live URLs (brand-side and creator-side pages).
- **14 new URLs.**
- **2 existing owners expanded** (URLs unchanged; `updatedAt` 2026-10-08):

| ID | Existing URL | What was added |
| --- | --- | --- |
| 1215 | influencer-campaign-brief | Quick answer; seven-step briefing process (freeze → adapt → share → kickoff → answer → confirm → pre-production check); direction vs creative freedom table; briefing checklist. Retitled "Creator Briefing: How to Write an Influencer Campaign Brief and Brief Creators Well". Dedicated CTA; previously the generic "-brief" pattern sent it to Legal & Compliance. New hero image. |
| 1220 | influencer-marketing-payments | Nine-step payment workflow; per-payment checklist; dated note on TDS under section 393 of the Income-tax Act, 2025 (Form No. 131). Retitled "Influencer Payment Process: How Brands Should Manage Creator Payments". Dedicated CTA (same generic-pattern issue). New hero image. |

- **4 consolidated (no new URL):**
  - 1211 Creator onboarding process → `influencer-onboarding` (section "The onboarding process, step by step"). The process and the topic are one intent.
  - 1213 Creator onboarding checklist → `influencer-onboarding` (section "The creator onboarding checklist"). A separate checklist page would compete for the same queries.
  - 1217 Creator communication best practices → `influencer-communication` (section "Seven misunderstandings, and how to prevent them").
  - 1226 Creator campaign records → `influencer-campaign-documentation` (section "From campaign files to creator records"). Long-term creator history is already owned by `influencer-marketing-crm`.
- Creator-side pages with similar topics (`creator-payment-terms`, `creators-handle-late-brand-payments`, `how-to-invoice-brands-as-a-creator-india`, `creator-campaign-documentation`, `creator-campaign-operations`) serve creators and agencies. New brand-side pages link to them and they link back.
- 20 older articles received contextual links into the cluster.

## Research and accuracy notes (2026-10-08)

No keyword tool or Search Console data was available; no volumes, CPC, difficulty, payment benchmarks or fees are claimed.

Tax and legal statements are deliberately general, each marked as general information rather than advice, and each cites an official source:

- **TDS:** from 1 April 2026, non-salary TDS provisions are consolidated under section 393 of the Income-tax Act, 2025; the certificate is Form No. 131, replacing Form 16A (Income Tax Department page `SOURCES.incomeTaxForm131`; consistent with the site's existing `tds-for-influencers-india`). No rates or thresholds are stated.
- **GST invoices:** the particulars of a GST tax invoice are set out in Rule 46 of the CGST Rules (`SOURCES.gstRule46`). The pages only state that unregistered creators shouldn't charge GST and that registered creators issue tax invoices.
- **MSME payments:** under the MSMED Act, the credit period buyers can agree with micro and small enterprise suppliers is capped at 45 days from acceptance, and delayed payment can attract interest; disputes go through MSME Samadhaan (`SOURCES.msmeSamadhaan`).
- **Gifted products and barter:** the pages say only that tax treatment depends on the arrangement and should be confirmed with finance. No rule is stated.
- **Data:** DPDP Rules timeline (`SOURCES.dpdpRules2025`); disclosure per ASCI guidelines (`SOURCES.asciGuidelines`).

All examples are labelled hypothetical. No Kudozz clients, results or testimonials are claimed.

## Decision database

| ID | Topic | URL (/blog/…) | Action | Primary keyword | Intent | Funnel | CTA (mid → / bottom → inquiry) | Schema |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1210 | Influencer onboarding | influencer-onboarding | CREATE | influencer onboarding | Setting up creators before a campaign: process + checklist | MOFU | Campaign Management → /services/outreach-management | BlogPosting, BreadcrumbList, FAQPage |
| 1211 | Onboarding process | influencer-onboarding | CONSOLIDATE | creator onboarding process | Step-by-step section | MOFU | (as 1210) | (as 1210) |
| 1212 | Campaign kickoff | influencer-campaign-kickoff | CREATE | influencer campaign kickoff | What to cover before production | MOFU | Campaign Management → outreach-management | same |
| 1213 | Onboarding checklist | influencer-onboarding | CONSOLIDATE | creator onboarding checklist | Checklist section | MOFU | (as 1210) | (as 1210) |
| 1214 | Information sheet | influencer-campaign-information-sheet | CREATE | information to collect from influencers | What to collect, what not to, storage | MOFU | Campaign Management → outreach-management | same |
| 1215 | Briefing process | influencer-campaign-brief | EXPAND | creator briefing process | Brief template + briefing process | MOFU | Campaign Planning → /services/campaign-strategy (new) | same |
| 1216 | Communication strategy | influencer-communication | CREATE | influencer communication strategy | Managing creator communication | MOFU | Campaign Management → outreach-management | same |
| 1217 | Communication best practices | influencer-communication | CONSOLIDATE | creator communication best practices | Preventing misunderstandings section | MOFU | (as 1216) | (as 1216) |
| 1218 | Influencer feedback | influencer-feedback | CREATE | influencer feedback | Giving useful draft feedback | MOFU | Campaign Management → outreach-management | same |
| 1219 | Creator feedback loop | creator-feedback-loop | CREATE | creator feedback loop | Using creator input to improve campaigns | MOFU | Campaign Measurement → /services/reporting | same |
| 1220 | Payment process | influencer-marketing-payments | EXPAND | influencer payment process | End-to-end payment workflow | MOFU/BOFU | Campaign Management → outreach-management (new) | same |
| 1221 | Payment terms | influencer-payment-terms | CREATE | influencer payment terms | What to agree before a campaign | MOFU/BOFU | Campaign Management → outreach-management | same |
| 1222 | Payment tracking | creator-payment-tracking | CREATE | creator payment tracking | Managing many payments | MOFU | Campaign Management → outreach-management | same |
| 1223 | Invoicing | influencer-invoicing | CREATE | influencer invoicing | Brand-side invoice checks and workflow | MOFU | Campaign Management → outreach-management | same |
| 1224 | Payment delays | creator-payment-delays | CREATE | creator payment delays | Causes, prevention, communication | MOFU | Campaign Management → outreach-management | same |
| 1225 | Campaign documentation | influencer-campaign-documentation | CREATE | influencer campaign documentation | What to keep, folder structure, close-out | MOFU | Campaign Management → /services/reporting | same |
| 1226 | Campaign records | influencer-campaign-documentation | CONSOLIDATE | creator campaign records | Creator-history section; CRM owns long-term records | MOFU | (as 1225) | (as 1225) |
| 1227 | Campaign handover | influencer-campaign-handover | CREATE | influencer campaign handover | Preventing information loss in transitions | MOFU | Campaign Management → outreach-management | same |
| 1228 | Creator experience | creator-experience | CREATE | creator experience | Improving the creator journey | TOFU/MOFU | Always-On Program → /services/ambassador-programs | same |
| 1229 | Influencer operations | influencer-marketing-operations | CREATE (hub) | influencer marketing operations | Repeatable creator partnership system | MOFU/BOFU | Campaign Management → outreach-management | same |

All: audience = brand marketing, operations and finance teams at Indian brands, D2C and ecommerce; cluster = "Creator Operations" in `docs/blog-content-map.csv`; status = published / updated 2026-10-08.

### Intent split (cannibalization guard)

| Pages | How they differ |
| --- | --- |
| influencer-onboarding / influencer-marketing-agency-onboarding | Onboarding creators / onboarding an agency |
| influencer-onboarding / influencer-campaign-kickoff / influencer-campaign-brief | Everything from yes to production / the kickoff conversation / the brief and briefing process |
| influencer-campaign-information-sheet / influencer-marketing-data / influencer-database | What to collect from a creator at onboarding / all campaign data categories / discovery database fields |
| influencer-communication / influencer-follow-up | Communication during a campaign / follow-ups across the relationship, mostly before and after |
| influencer-feedback / creator-feedback-loop | Brand → creator on drafts / creator → brand insights |
| influencer-marketing-payments / influencer-payment-terms / creator-payment-tracking / influencer-invoicing / creator-payment-delays | Workflow overview / terms agreed upfront / tracking many payments / checking invoices / preventing and communicating delays |
| influencer-campaign-documentation / influencer-marketing-crm | Per-campaign files and close-out / long-term creator records |
| influencer-marketing-operations / influencer-campaign-management / influencer-marketing-governance | The system across campaigns / running one campaign / rules and approvals |
| creator-experience / influencer-retention / influencer-relationship-management | The workflow from the creator's side / keeping top creators / relationship practices |

## Backlinks added (older → new)

influencer-campaign-management → onboarding, operations · influencer-marketing-governance → operations, feedback · influencer-marketing-team-structure → handover, operations · influencer-marketing-contract → payment terms · influencer-marketing-agency-onboarding → handover · influencer-marketing-crm → documentation · influencer-relationship-management → communication, creator experience · influencer-retention → payment delays, creator experience · influencer-campaign-automation → payment tracking, onboarding · influencer-marketing-campaign-timeline → onboarding, kickoff · influencer-usage-rights → documentation · creators-handle-late-brand-payments → payment delays · how-to-invoice-brands-as-a-creator-india → invoicing · creator-campaign-documentation → documentation · influencer-follow-up → communication · influencer-collaboration-proposal → onboarding · creator-performance-scorecard → feedback loop · influencer-marketing-report → feedback loop · influencer-marketing-compliance → feedback · influencer-product-seeding-program → information sheet. The new `influencer-marketing-operations` page links to every stage guide.

## CTAs and analytics

Exactly two CTAs per page via existing `BlogMidCTA` and `BlogBottomCTA`, verified in rendered HTML on all 16 affected pages. Existing analytics events and the inquiry form are unchanged; `/for-brands?src=…&t=…#inquiry` verified to load.

## Known limitations and future review

- New pages are about 1,000–1,300 words (body + FAQs). Each includes a framework, checklist or template and a worked example; none was padded.
- **Review by April 2027:** TDS references (section 393 / Form No. 131) and MSME payment rules; rules change.
- Older expanded pages (brief, payments) keep their original em dashes; new sections follow the current style.
- `influencer-campaign-information-sheet` (2 inbound) and `influencer-campaign-handover` (3) have the fewest inbound links.

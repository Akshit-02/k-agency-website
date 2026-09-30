# Brand lead-generation cluster 900–949: implementation audit

Generated 2026-09-30. Content map refreshed in `blog-content-map.csv` (621 → 634 articles: +14 new, −1 consolidated).

## Outcome

- **New articles:** 14 (module `src/content/brand-guides/`)
- **Existing live articles updated:** 24 (all keep their URLs)
- **Consolidated with redirect:** 1 (`how-to-choose-an-influencer-marketing-agency` → `choose-influencer-marketing-agency-india`, permanent, in `next.config.ts`; 6 internal links retargeted)
- **Topics served without a new URL:** 36 of 50 (merged into an existing live page or a sibling new page)
- **Tools:** campaign cost calculator, budget allocator, agency contract checklist, influencer vetting checklist
- **Featured images:** 38 topic SVGs in `public/blog/brand-guides/`, rendered via a new optional `hero` field
- **CTAs:** per-article CTA map for all 38 pages in `src/lib/blogCta.ts` (`BRAND_GUIDE_CTAS`)

Why so few new URLs: every industry topic (935–947) and most agency and planning topics already had live, indexed pages. Creating parallel URLs would have split rankings between near-identical pages.

## Funnel architecture

```
A  Agency research ..... choose-influencer-marketing-agency-india (pillar) → agency-vs-in-house · agency-vs-freelancer · services
                         → agency-fees-india → agency-brief → rfp → pitch-questions → agency-checklist
B  Campaign planning ... how-to-create-a-successful-... (planning) → campaign-timeline → budget-allocation → campaign-cost (calculator)
                         → micro-vs-macro (mix) → shortlist → choose-the-right-influencer (criteria) → vet (checklist) → audience-quality
                         → pan-india (multi-city) ↔ regional-influencer-marketing-india
C  Objectives .......... product-launch · brand-awareness · lead-generation · sales (acquisition)
D  Industries .......... 13 industry pages, each linking to the relevant objective page (lead gen, sales, launch)
E  Scale ............... always-on-influencer-marketing ↔ D2C always-on · partnerships · ambassador · always-on UGC
```

## Per-topic decisions

Intent labels: CI = commercial investigation, PL = planning, PS = problem solving, IS = industry specific, CMP = comparison.

| # | Requested slug | Action | Final URL | Primary keyword | Intent | Reason |
|---|---|---|---|---|---|---|
| 900 | how-to-choose-influencer-marketing-agency-india | UPDATE + CONSOLIDATE | `choose-influencer-marketing-agency-india` | influencer marketing agency India | CI | Two live pages targeted the same query. India page kept as pillar (selection process, vetting, red flags, evaluating results, FAQs merged in); generic page redirected |
| 901 | influencer-agency-vs-freelancer | CREATE | `influencer-agency-vs-freelancer` | influencer marketing agency vs freelancer | CMP | No existing page |
| 902 | influencer-agency-vs-in-house-team | UPDATE | `influencer-marketing-agency-vs-in-house` | influencer marketing agency vs in-house | CMP | Live page owns the intent; added cost components and in-house skills |
| 903 | when-to-hire-influencer-marketing-agency | UPDATE (merged) | `influencer-marketing-agency-vs-in-house#when-to-hire` | when to hire influencer marketing agency | CI | "When" and "agency vs in-house" are one decision; signs-it's-time section + FAQ |
| 904 | what-does-influencer-marketing-agency-do | UPDATE | `influencer-marketing-services-india` | what does influencer marketing agency do | CI | Live page is titled exactly this; quick answer + what agencies shouldn't do |
| 905 | influencer-marketing-agency-fees-india | CREATE | `influencer-marketing-agency-fees-india` | influencer marketing agency fees India | CI | No buyer-side fees page (creator-agency-pricing-strategy is seller-side) |
| 906 | influencer-marketing-agency-pricing-models | CONSOLIDATE | `influencer-marketing-agency-fees-india#pricing-models` | influencer marketing agency pricing | CI | "How much" and "how they charge" are answered by the same page |
| 907 | influencer-marketing-agency-brief | CREATE | `influencer-marketing-agency-brief` | influencer marketing agency brief | PL | Existing brief pages are creator briefs |
| 908 | influencer-marketing-rfp | CREATE | `influencer-marketing-rfp` | influencer marketing RFP | CI | No existing page |
| 909 | influencer-marketing-proposal | CONSOLIDATE | `influencer-marketing-rfp#proposal` | influencer marketing proposal | CI | Proposals are the RFP's output; strong vs weak proposal table |
| 910 | influencer-marketing-agency-pitch-questions | CREATE | `influencer-marketing-agency-pitch-questions` | questions to ask influencer marketing agency | CI | Pillar lists 6 questions; 20 with answer quality is a distinct list query |
| 911 | influencer-marketing-agency-checklist | CREATE + tool | `influencer-marketing-agency-checklist` | influencer marketing agency checklist | PS | Pre-contract moment is distinct from choosing |
| 912 | compare-influencer-marketing-agencies | CONSOLIDATE | `influencer-marketing-rfp#scoring` | compare influencer marketing agencies | CI | Comparison framework is the RFP's scoring matrix |
| 913 | how-to-brief-influencer-marketing-agency | CONSOLIDATE | `influencer-marketing-agency-brief` | brief influencer marketing agency | PL | Identical intent to 907 |
| 914 | how-long-does-influencer-marketing-campaign-take | CONSOLIDATE | `influencer-marketing-campaign-timeline` | influencer campaign timeline | PL | Same question as 915; SEO title targets "how long" |
| 915 | influencer-marketing-campaign-timeline | CREATE | `influencer-marketing-campaign-timeline` | influencer marketing campaign timeline | PL | No existing page |
| 916 | influencer-campaign-planning | UPDATE | `how-to-create-a-successful-influencer-marketing-campaign` | influencer campaign planning | PL | Live page is the planning workflow; added quick answer and one-page plan template |
| 917 | influencer-campaign-fixed-budget | CONSOLIDATE | `influencer-budget-allocation` | influencer marketing budget planning | PL | Fixed-budget planning is allocation |
| 918 | influencer-budget-allocation | CREATE + tool | `influencer-budget-allocation` | influencer marketing budget allocation | PL | Existing budget page builds a budget bottom-up; this is the inverse |
| 919 | influencer-campaign-cost-calculator | UPDATE + tool | `influencer-campaign-cost-india` | influencer campaign cost calculator | PL | Live page already answers "what should brands budget"; calculator + SEO title added |
| 920 | how-many-influencers-for-campaign | CONSOLIDATE | `influencer-budget-allocation#how-many-influencers` | how many influencers for a campaign | PS | Creator count comes from budget, objective and capacity; H2 + FAQ |
| 921 | influencer-mix-for-brands | UPDATE | `micro-vs-macro-influencers` | influencer mix | CI | Live tier page (14 inbound); retitled to include celebrities and mix |
| 922 | influencer-shortlist | CREATE | `influencer-shortlist` | influencer shortlist | PL | No existing page |
| 923 | influencer-selection-criteria | UPDATE | `how-to-choose-the-right-influencer-for-your-brand` | influencer selection criteria | CI | Live page's 8-factor framework is the criteria |
| 924 | influencer-vetting-checklist | UPDATE + tool | `how-to-vet-influencers` | influencer vetting | PS | Live vetting page; interactive checklist added |
| 925 | influencer-audience-quality | CREATE | `influencer-audience-quality` | influencer audience quality | PS | Fake-follower pages cover fraud only |
| 926 | influencer-audience-fit | CONSOLIDATE | `influencer-audience-quality#fit` | influencer audience fit | PS | Quality and fit are checked together from the same data |
| 927 | influencer-brand-fit | UPDATE (merged) | `how-to-choose-the-right-influencer-for-your-brand#brand-fit-deep-dive` | influencer brand fit | CI | Brand fit is one selection criterion |
| 928 | regional-influencers-multi-city-campaign | CONSOLIDATE | `pan-india-influencer-marketing-campaign` (+ keyword on `regional-influencer-marketing-india`) | regional influencers India | PL | Regional keyword owned by live page (42 inbound); multi-city execution merged into 929 |
| 929 | pan-india-influencer-marketing-campaign | CREATE | `pan-india-influencer-marketing-campaign` | pan India influencer marketing | PL | No existing page |
| 930 | influencer-marketing-new-product-launch | UPDATE | `influencers-for-product-launch` | influencer marketing product launch | PL | Live page (20 inbound); agency-led launch workstreams added, retitled |
| 931 | influencer-marketing-brand-awareness | UPDATE | `influencer-marketing-brand-awareness` | influencer marketing brand awareness | PL | Exact slug already live; reach-at-scale section |
| 932 | influencer-marketing-lead-generation | CREATE | `influencer-marketing-lead-generation` | influencer marketing lead generation | PS | No existing page |
| 933 | influencer-marketing-sales | CREATE | `influencer-marketing-sales` | influencer marketing for sales | PS | No existing page |
| 934 | influencer-marketing-customer-acquisition | CONSOLIDATE | `influencer-marketing-sales#acquisition` | influencer marketing customer acquisition | PS | Sales and acquisition share tracking, CAC and incrementality |
| 935 | influencer-marketing-ecommerce-sales | UPDATE | `influencer-marketing-ecommerce-brands-india` | influencer marketing ecommerce | IS | Sale-event campaigns, marketplace tracking |
| 936 | influencer-marketing-d2c-always-on | UPDATE | `influencer-marketing-d2c-brands-india` | D2C influencer marketing | IS | Always-on D2C program and monthly calendar |
| 937 | influencer-marketing-startups-first-campaign | UPDATE | `influencer-marketing-startups-india` | influencer marketing for startups | IS | Six-week first-campaign plan, learning goals |
| 938 | influencer-marketing-saas-brands | UPDATE | `saas-influencer-marketing-india` | influencer marketing SaaS | IS | Trial/demo conversion paths, creator demos |
| 939 | influencer-marketing-real-estate | UPDATE | `influencer-marketing-real-estate-brands-india` | influencer marketing real estate | IS | RERA ss.3 and 11(2), site-visit lead flow |
| 940 | influencer-marketing-healthcare-wellness | UPDATE | `influencer-marketing-healthcare-brands-india` | influencer marketing healthcare | IS | Healthcare vs wellness, ASCI qualification rule, DMR Act |
| 941 | influencer-marketing-edtech | UPDATE | `influencer-marketing-education-edtech-brands-india` | influencer marketing education | IS | CCPA 2024 coaching guidelines, academic calendar |
| 942 | influencer-marketing-automobile | UPDATE | `automotive-influencer-marketing-india` | influencer marketing automobile | IS | ASCI safe-driving guidance, test-drive/dealer flow, launch phasing |
| 943 | influencer-marketing-fintech | UPDATE | `influencer-marketing-fintech-brands-india` | influencer marketing fintech | IS | ASCI BFSI qualifications, product-type table |
| 944 | influencer-marketing-beauty-skincare | UPDATE | `influencer-marketing-beauty-brands-india` | influencer marketing beauty | IS | Claims and visuals, skin tone/type diversity |
| 945 | influencer-marketing-fashion | UPDATE | `influencer-marketing-fashion-brands-india` | influencer marketing fashion | IS | Fashion calendar, size-inclusive creators, return-aware metrics |
| 946 | influencer-marketing-food-beverage | UPDATE | `influencer-marketing-food-brands-india` | influencer marketing food brands | IS | FSSAI 2018 regs + Aug 2026 advisory, segment table |
| 947 | influencer-marketing-consumer-electronics | UPDATE | `consumer-electronics-influencer-marketing-india` | influencer marketing electronics | IS | Review units, embargoes, search-driven YouTube timing |
| 948 | scale-influencer-marketing | CONSOLIDATE | `always-on-influencer-marketing#stages` | scale influencer marketing | PL | Scaling is the transition into an always-on program |
| 949 | always-on-influencer-marketing | CREATE | `always-on-influencer-marketing` | always-on influencer marketing | PL | Existing always-on page is UGC-only |

## CTA by article

Mid CTA → service page where one fits, else the inquiry form; bottom CTA → brand inquiry (tracked `?src&cat&pos&t`).

| Article | Topic | Mid CTA (destination) | Bottom CTA |
|---|---|---|---|
| choose-influencer-marketing-agency-india | Agency Selection | Shortlisting Influencer Agencies? (campaign strategy) | Evaluating Agencies for Your Next Campaign? |
| influencer-agency-vs-freelancer | Agency Selection | Outgrowing One-Person Creator Management? (outreach & management) | Deciding Who Should Run Your Creator Campaigns? |
| influencer-marketing-agency-vs-in-house | Agency Selection | Considering a Hybrid Model? (outreach & management) | Weighing Agency vs In-House? |
| influencer-marketing-services-india | Agency Selection | Not Sure Which Services You Need? (campaign strategy) | Looking for a Partner to Run Part of Your Program? |
| influencer-marketing-agency-fees-india | Agency Pricing | Comparing Agency Quotes? (inquiry) | Want a Transparent Quote for Your Campaign? |
| influencer-marketing-agency-brief | Agency Selection | Brief Ready, or Nearly? (inquiry) | Have a Campaign to Brief? |
| influencer-marketing-rfp | Agency Selection | Running an Agency RFP? (inquiry) | Shortlisting Agencies for an RFP? |
| influencer-marketing-agency-pitch-questions | Agency Selection | Want to Hear Kudozz's Answers? (inquiry) | Interviewing Agencies This Month? |
| influencer-marketing-agency-checklist | Agency Selection | Close to Signing an Agency? (inquiry) | Want Scope, Fees and Rights Spelled Out Upfront? |
| influencer-marketing-campaign-timeline | Campaign Planning | Working Back From a Fixed Date? (outreach & management) | Have a Launch or Sale Date Coming Up? |
| how-to-create-a-successful-… | Campaign Planning | Want a Second Pair of Eyes on Your Plan? (campaign strategy) | Planning an Influencer Campaign? |
| influencer-campaign-cost-india | Campaign Budget | Need Real Creator Quotes for Your Budget? (inquiry) | Ready to Budget Your Next Campaign? |
| influencer-budget-allocation | Campaign Budget | Working With a Fixed Budget? (campaign strategy) | Have a Budget and Need a Plan? |
| micro-vs-macro-influencers | Creator Selection | Deciding on Your Creator Mix? (creator discovery) | Need the Right Mix of Creators? |
| influencer-shortlist | Creator Selection | Need a Shortlist You Can Approve Quickly? (creator discovery) | Need Help Finding the Right Creators? |
| how-to-choose-the-right-influencer-… | Creator Selection | Choosing Between Creators? (creator discovery) | Need Help Choosing the Right Creators? |
| how-to-vet-influencers | Creator Selection | Short on Time to Vet Every Creator? (creator discovery) | Want Creators Vetted Before You Commit? |
| influencer-audience-quality | Creator Selection | Need Audience Data You Can Trust? (creator discovery) | Want Creators Whose Audience Is Your Customer? |
| pan-india-influencer-marketing-campaign | Regional Campaign | Planning Across Several Cities or Languages? (campaign strategy) | Planning a Multi-City Creator Campaign? |
| regional-influencer-marketing-india | Regional Campaign | Need Creators in Specific Languages? (creator discovery) | Planning a Regional or Vernacular Campaign? |
| influencers-for-product-launch | Product Launch | Launching Something Soon? (product launches) | Need a Creator Strategy for Your Launch? |
| influencer-marketing-brand-awareness | Brand Awareness | Building Reach in a New Market? (social campaigns) | Planning an Awareness Campaign? |
| influencer-marketing-lead-generation | Lead Generation | Need Leads, Not Just Views? (campaign strategy) | Planning a Lead Generation Campaign? |
| influencer-marketing-sales | Sales | Want to See What Creators Actually Sell? (reporting) | Planning a Sales-Focused Creator Campaign? |
| always-on-influencer-marketing | Always-On Program | Ready to Move Beyond One-Off Campaigns? (ambassador programs) | Building an Ongoing Creator Program? |
| 13 industry pages | Industry: X | Industry-specific (discovery, strategy, UGC, social or launches) | "Planning a [industry] campaign?" variants |

## Internal links added to older content

From: influencer-partnerships, always-on-ugc-marketing, brand-ambassador-program → always-on; influencer-marketing-budget, how-much-to-pay-influencers, influencer-marketing-mistakes-india → allocation / calculator / timeline; influencer-campaign-brief → agency brief; measure-influencer-marketing-roi-india, influencer-marketing-funnel → lead gen, sales, awareness; find-indian-influencers, how-to-find-influencers-for-your-brand → shortlist, pan-India; influencer-management-vs-influencer-marketing → agency vs freelancer; influencer-marketing-cost-india, how-much-does-influencer-marketing-cost → agency fees, calculator; influencer-marketing-strategy-india → pan-India; how-does-influencer-marketing-work → services, pillar. Every updated page also links forward to the next stage.

## Status

- **Metadata:** every page has a unique SEO title ≤70 characters with suffix, a meta description of 110–160 characters, tags, canonical, OG and Twitter tags (from `buildMetadata`).
- **Schema:** BlogPosting, BreadcrumbList and FAQPage render on all 38 pages; FAQs are visible on the page. Note that Google shows FAQ rich results only for a limited set of authoritative sites since 2023; the markup remains valid and is used by other engines, and nothing misleading was added. Article schema images use the generated PNG social image.
- **Images:** 38 SVG heroes (1600×700, 3–5 KB each, descriptive alt text, `fetchpriority="high"` above the fold). On phones the diagram labels become small; the alt text carries the meaning.
- **Analytics:** `blog_mid_cta_click` / `blog_bottom_cta_click` carry the new topics; brand form `blog_lead_form_start` / `_submit` now also send `cta_type: brand_inquiry` and the CTA topic as `intent`. Form fields and the API are unchanged; the campaign-goal field now prefills for Creator Selection, Campaign Planning, Always-On and Brand Awareness topics.
- **QA:** 38/38 pages pass (one H1, self-canonical, indexable, schema, one mid and one bottom CTA, hero). No broken internal links in the batch. Build: 1,356 static pages.

## Facts checked (September 2026)

- ASCI influencer guidelines (Aug 2023 text): BFSI and health/nutrition qualification requirements, SEBI registration number for investment content, disclosure placement, "Employee" label.
- RERA 2016: s.3 (no marketing before registration), s.11(2) (registration number and RERA website in ads); state authorities set display formats.
- CCPA Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024 (13–14 Nov 2024).
- FSSAI (Advertising and Claims) Regulations, 2018; FSSAI advisory to influencers, August 2026.
- ASCI guidance on depicting automotive vehicles (safe practices, stunts with caution).
- Drugs and Magic Remedies (Objectionable Advertisements) Act; NMC 2023 regulations in abeyance, 2002 regulations apply.
- No agency fees, creator rates, timelines-as-standards, conversion rates or market sizes are stated as facts; all numbers are labelled illustrative or hypothetical.

## Needs professional review

- Lawyer: real estate (RERA display rules per state), EdTech (CCPA coaching guidelines), healthcare (drug advertising), fintech (SEBI/IRDAI), agency contract checklist.
- Chartered accountant: GST/TDS notes in agency fees, agency checklist and sales pages.

## Pre-existing issues found (not changed)

- 250 of 325 core posts have future `publishedAt` dates, and some have future `updatedAt` dates that display (e.g. "Updated December 10, 2026"). `mark_updated` skipped setting a new date on those pages, so their update isn't reflected in `updatedAt`.
- 238 core posts outside this batch still end with a "Getting help" promo section (a third CTA).
- Brand inquiry budget options are in US dollars on an India-focused form.
- H1 and excerpt fade in via the `Reveal` animation; confirm on real devices that this doesn't hurt LCP.
- The duplicate `how-much-does-influencer-marketing-cost` vs `influencer-marketing-cost-india` pair overlaps heavily; consider consolidating after checking Search Console.

## Search Console watch list

- `choose-influencer-marketing-agency-india` vs `influencer-marketing-rfp` vs `influencer-marketing-agency-pitch-questions`
- `influencer-marketing-agency-fees-india` vs `influencer-marketing-cost-india` vs `creator-agency-pricing-strategy`
- `influencer-budget-allocation` vs `influencer-marketing-budget` vs `influencer-campaign-cost-india`
- `influencer-audience-quality` vs `how-to-identify-fake-followers` vs `avoid-fake-influencers-india`
- `pan-india-influencer-marketing-campaign` vs `regional-influencer-marketing-india`
- `influencer-marketing-sales` vs `influencer-marketing-ecommerce-brands-india` vs `d2c-influencer-marketing-funnel-india`
- `always-on-influencer-marketing` vs `always-on-ugc-marketing`

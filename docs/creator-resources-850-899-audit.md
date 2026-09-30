# Creator Resources 850–899: implementation audit

Generated 2026-09-30 from live content data. The full site content map is refreshed in `blog-content-map.csv` (595 → 621 articles).

## Outcome

- **New articles:** 26 (16 Creator Resources, 10 core blog)
- **Topics consolidated into another URL:** 24; **existing owner pages updated:** 11, plus contextual links from 16 older articles
- **Redirects:** none. No slug was renamed or removed; Creator Resources and every new URL still returned 404 on kudozz.in on 2026-09-30.
- **New tools:** CreatorAgencyProfitabilityCalculator, CreatorTalentScorecard, CreatorCampaignCapacityCalculator, CreatorMarketplaceCalculator, and a campaign QA dataset for CreatorChecklist (shared UI in `calculatorUi.tsx`)
- **New structure:** a "Creator Agencies" group in Creator Resources with four sections (Start & Run an Agency, Agency Growth & Commercials, Talent & Roster, Campaign Operations); a `src/content/creator-economy/` module for the core-blog marketplace and B2B clusters
- **Diagrams:** 6 new SVGs (agency growth levers, talent lifecycle, campaign operations journey, marketplace three sides, value chain, B2B approaches)

## Architecture

```
CREATOR AGENCY (Creator Resources › Creator Agencies)
  Start & Run ........ start-creator-management-agency-india (pillar) · creator-agency-business-plan · creator-agency-operations · creator-studio-business-model
  Growth & Commercials creator-agency-growth-strategy (pillar) · creator-management-agency-business-model · creator-agency-pricing-strategy ·
                       creator-agency-profitability · creator-agency-client-acquisition · creator-agency-client-retention
TALENT NETWORK ....... creator-talent-management (pillar) · creator-talent-acquisition · creator-talent-screening · creator-roster-strategy ·
                       creator-talent-database · creator-roster-evaluation · creator-talent-development
CAMPAIGN INFRASTRUCTURE creator-campaign-operations (pillar) · creator-campaign-capacity-planning · creator-campaign-quality-assurance ·
                       creator-campaign-escalation · creator-campaign-post-mortem  (+ influencer-campaign-management, influencer-marketing-report)
CREATOR MARKETPLACE (core, Creator Economy) creator-marketplace (hub) · creator-discovery-platform · creator-matching · creator-marketplace-business-model ·
                       build-creator-marketplace · creator-marketplace-trust-safety · creator-economy-value-chain
B2B CREATOR ECONOMY (core, Brand Marketing) b2b-creator-economy (hub) · creator-led-b2b-marketing · expert-creator-marketing
                       (+ b2b-influencer-marketing-india, b2b-creator-partnerships-linkedin, employee-influencer-marketing, founder-creator-brand,
                        executive-influencer-marketing-linkedin, linkedin-thought-leadership-marketing)
```

## Per-topic decisions

| # | Proposed slug | Status | Final URL | Primary keyword | Inbound | Reason |
|---|---|---|---|---|---|---|
| 850 | creator-agency-growth-strategy | New (section pillar) | `creator-agency-growth-strategy` | creator agency growth strategy | 5 | No page covered growing an established agency; scaling-creator-business is about a creator scaling |
| 851 | creator-agency-business-plan | New + template | `creator-agency-business-plan` | creator agency business plan | 2 | The plan document and financial model are a distinct deliverable from the start-an-agency steps |
| 852 | creator-agency-revenue-model | Consolidated | `creator-management-agency-business-model` | creator agency revenue model | 7 | Same intent as the existing "how agencies make money" page; its 7-row table became "ten ways creator agencies make money" |
| 853 | creator-agency-profitability | New + calculator | `creator-agency-profitability` | creator agency profitability | 7 | Billings vs net revenue, margins and utilisation were not covered anywhere |
| 854 | creator-agency-pricing-strategy | New | `creator-agency-pricing-strategy` | creator agency pricing strategy | 5 | Pricing services to brands (method, structure, quote) differs from the business model page's creator-side commission; absorbs 855 |
| 855 | creator-agency-retainers | Consolidated | `creator-agency-pricing-strategy#retainers` | creator agency retainers | — | A retainer is one of five pricing structures; the scope, rollover and overage terms plus a scope template sit in the pricing page. creator-retainer-deals remains the creator-side page |
| 856 | creator-agency-commission-models | Consolidated | `creator-management-agency-business-model#commission-structures` | creator agency commission | — | The business model page already owned "what commission do agencies charge" and the commission base; a new "Commission structures" section (flat, sourced vs inbound, tiered, retainer hybrid, minimum guarantee) completes it |
| 857 | creator-agency-client-retention | New | `creator-agency-client-retention` | creator agency client retention | 4 | Only a 5-bullet section existed in client acquisition; absorbs 858 |
| 858 | creator-agency-upselling | Consolidated | `creator-agency-client-retention#expansion` | creator agency upselling | — | Upselling existing clients is account growth; one account-management page serves both queries without two thin pages |
| 859 | creator-agency-sales-funnel | Consolidated | `creator-agency-client-acquisition#sales-funnel` | creator agency sales funnel | — | Turning leads into clients is client acquisition; stages, exit criteria and qualification added there |
| 860 | creator-talent-acquisition | New | `creator-talent-acquisition` | creator talent acquisition | 3 | Finding and signing creators was only a list inside the start page; absorbs 861 |
| 861 | recruit-creators-management-agency | Consolidated | `creator-talent-acquisition` | recruit creators for agency | — | Sourcing and recruitment are one searcher task ("how agencies find and sign creators"); the page covers outreach, pitch, discovery call and signing |
| 862 | creator-talent-screening | New + scorecard | `creator-talent-screening` | creator talent screening | 5 | Agency pre-signing evaluation (commercial potential, roster fit) differs from how-to-vet-influencers (one campaign) |
| 863 | creator-roster-strategy | New | `creator-roster-strategy` | creator roster strategy | 6 | Roster composition was a short "balance" subsection; absorbs 864 and 865 |
| 864 | creator-roster-diversity | Consolidated | `creator-roster-strategy#diversity` | creator roster diversity | — | Diversity is a dimension of roster composition; a separate page would repeat the roster map |
| 865 | creator-talent-categories | Consolidated | `creator-roster-strategy#categories` | creator talent categories | — | The category system exists to design and search the roster; the database page reuses it as fields |
| 866 | creator-talent-database | New | `creator-talent-database` | creator talent database | 8 | Data infrastructure incl. freshness, linking and DPDP handling; distinct from creator-crm (deal pipeline) |
| 867 | creator-roster-evaluation | New | `creator-roster-evaluation` | creator roster evaluation | 5 | Quarterly review and keep/develop/restructure/exit decisions for existing talent |
| 868 | creator-talent-development | New | `creator-talent-development` | creator talent development | 2 | Only a "career planning" paragraph existed |
| 869 | creator-talent-retention | Consolidated | `creator-talent-management#retention` | creator talent retention | — | Keeping creators is the outcome of day-to-day management; a "why creators leave and how to keep them" section was added to the section pillar |
| 870 | brand-creator-collaboration-process | Consolidated | `influencer-campaign-management#brand-creator-collaboration-process` | brand creator collaboration process | — | Same workflow as the existing 13-step page (61 inbound links); added a brand / agency / creator responsibility table |
| 871 | creator-campaign-operations | New (section pillar) | `creator-campaign-operations` | creator campaign operations | 3 | The multi-campaign operating system (gates, owners, master tracker, SLAs); absorbs 872 |
| 872 | creator-campaign-project-management | Consolidated | `creator-campaign-operations#project-management` | creator campaign project management | — | Managing multiple campaigns is the core of campaign operations |
| 873 | creator-campaign-resource-planning | Consolidated | `creator-campaign-capacity-planning#allocation` | creator campaign resource planning | — | Allocation of people and creators is the second half of capacity planning |
| 874 | creator-campaign-capacity-planning | New + calculator | `creator-campaign-capacity-planning` | creator campaign capacity planning | 3 | Not covered anywhere |
| 875 | creator-campaign-quality-assurance | New + checklist | `creator-campaign-quality-assurance` | creator campaign quality assurance | 4 | Agency pre- and post-live checks; creator-content-quality-control stays creator-side production QC |
| 876 | creator-campaign-escalation | New | `creator-campaign-escalation` | creator campaign escalation | 2 | Severity levels, owners and client communication were not covered |
| 877 | creator-campaign-client-reporting | Consolidated | `influencer-marketing-report#client-reporting` | creator campaign client reporting | — | The report page already owns report content and template; "presenting results to clients" added there |
| 878 | creator-campaign-post-mortem | New + template | `creator-campaign-post-mortem` | creator campaign post mortem | 6 | Not covered; absorbs 879 |
| 879 | creator-campaign-knowledge-base | Consolidated | `creator-campaign-post-mortem#knowledge-base` | creator campaign knowledge base | — | Knowledge capture is the output of post-mortems; one workflow |
| 880 | creator-marketplace | New (hub) | `creator-marketplace` | creator marketplace | 7 | Distinct from influencer-marketing-platforms (tool vs agency decision); absorbs 884 and 885 |
| 881 | build-creator-marketplace | New | `build-creator-marketplace` | build creator marketplace | 2 | Founder intent; absorbs 889 |
| 882 | creator-marketplace-business-model | New + calculator | `creator-marketplace-business-model` | creator marketplace business model | 3 | Absorbs 887 |
| 883 | creator-discovery-platform | New | `creator-discovery-platform` | creator discovery platform | 8 | Data sources, search methods, India coverage; influencer-marketing-platforms only listed discovery as one feature |
| 884 | creator-database-vs-marketplace | Consolidated | `creator-marketplace#comparison` | creator database vs creator marketplace | — | Defining a marketplace requires the comparison; a standalone page would duplicate the hub's table. H3 "Creator database vs creator marketplace" targets the query |
| 885 | creator-network-vs-marketplace | Consolidated | `creator-marketplace#comparison` | creator network vs creator marketplace | — | Same reason; H3 "Creator network vs creator marketplace" |
| 886 | creator-matching | New | `creator-matching` | creator matching | 5 | How platforms pair campaigns and creators; the manual 8-factor framework stays in how-to-choose-the-right-influencer-for-your-brand |
| 887 | creator-marketplace-fees | Consolidated | `creator-marketplace-business-model` | creator marketplace fees | — | Fees are the monetisation mechanism; brand-side and creator-side "what to check" sections plus the fee calculator cover the fee query |
| 888 | creator-marketplace-trust-safety | New | `creator-marketplace-trust-safety` | creator marketplace trust and safety | 3 | Not covered |
| 889 | creator-marketplace-technology | Consolidated | `build-creator-marketplace#technology` | creator marketplace technology | — | The technology stack is part of building one; 14-layer stack table |
| 890 | b2b-creator-economy | New (hub) | `b2b-creator-economy` | B2B creator economy | 9 | The six-way distinction (creator marketing, influencer marketing, thought leadership, founder-led, executive, employee advocacy) existed nowhere in one place |
| 891 | b2b-creator-partnerships | Consolidated | `b2b-creator-partnerships-linkedin#beyond-linkedin` | B2B creator partnerships | — | Existing partnership guide covered the same structure; added YouTube, podcasts, newsletters, communities and events. Slug kept (live URL) |
| 892 | expert-creator-marketing | New | `expert-creator-marketing` | expert creator marketing | 4 | India's professional-body rules make this genuinely distinct; absorbs 893 |
| 893 | industry-creator-marketing | Consolidated | `expert-creator-marketing` | industry creator marketing | — | Industry practitioners and credentialed experts are one briefing and partnership problem |
| 894 | employee-creator-programs | Consolidated | `employee-influencer-marketing#running-the-program` | employee creator programs | — | Existing page already covered building the program; added operating model and ASCI's "Employee" label |
| 895 | founder-creator-programs | Consolidated | `founder-creator-brand#programme` | founder creator programs | — | Same intent; added "running founder content as a company programme" |
| 896 | executive-creator-marketing | Consolidated | `executive-influencer-marketing-linkedin#beyond-linkedin` | executive creator marketing | — | Same intent; added formats beyond LinkedIn. Slug kept (live URL) |
| 897 | creator-led-b2b-marketing | New | `creator-led-b2b-marketing` | creator-led B2B marketing | 6 | Demand generation and attribution playbook; b2b-influencer-marketing-india stays the India overview |
| 898 | creator-economy-business-models | Consolidated | `creator-economy-value-chain#business-models` | creator economy business models | — | Business models are positions in the value chain; creator-business-model keeps creator-led company models |
| 899 | creator-economy-value-chain | New | `creator-economy-value-chain` | creator economy value chain | 3 | Not covered |

## Existing pages updated

creator-management-agency-business-model (852, 856; new SEO title), creator-agency-client-acquisition (859), creator-talent-management (869; lifecycle diagram; now the Talent & Roster pillar), start-creator-management-agency-india, creator-agency-operations, influencer-campaign-management (870), influencer-marketing-report (877), b2b-creator-partnerships-linkedin (891), employee-influencer-marketing (894), executive-influencer-marketing-linkedin (896), founder-creator-brand (895).

On the five updated core pages the promotional "Getting help…" section was replaced with a neutral section, so each has exactly two CTAs; they also gained an `seoTitle` and `metaDescription` (all were over length).

Contextual links added from: influencer-marketing-platforms, influencer-marketing-technology, b2b-influencer-marketing-india (×2), linkedin-thought-leadership-marketing, saas-influencer-marketing-india, state-of-the-creator-economy-2026, how-to-vet-influencers, how-to-choose-the-right-influencer-for-your-brand, how-to-find-influencers-for-your-brand, creator-manager-vs-agency, creator-content-quality-control, instagram-creator-marketplace, creator-business-model, creator-crm, creator-scams-fake-brand-collaborations.

## CTA and analytics

- Agency growth and start sections: "Building a Creator Partnership Operation?" → creator application (roster creators apply individually; no agency programme is implied).
- Talent & Roster: "Looking to Build a Stronger Creator Network?" → creator application.
- Campaign Operations (Creator Resources, brand audience): "Planning a Creator Campaign?" → brand inquiry, via a new section-level brand-audience override in `blogCta.ts`.
- Marketplace cluster: new "Creator Marketplace" matcher; mid CTA → /services/creator-discovery, bottom → brand inquiry.
- B2B cluster (+ employee-influencer-marketing): new "B2B Creator Economy" matcher, "Looking to Build a Creator-Led B2B Campaign?".
- Analytics: no schema change needed. Events already carry `cta_topic`, `intent` and `creator_resource_cluster`; the new values are topics "Creator Marketplace" and "B2B Creator Economy", intents `agency-growth`, `talent-and-roster`, `campaign-operations`, and cluster `agencies`.

## Search Console watch list

- `creator-agency-pricing-strategy` vs `creator-management-agency-business-model` ("agency commission" / "agency pricing")
- `creator-agency-client-retention` vs `creator-agency-client-acquisition`
- `creator-talent-management` vs `creator-roster-strategy` vs `creator-roster-evaluation` ("roster management")
- `creator-talent-screening` vs `how-to-vet-influencers`
- `creator-campaign-operations` vs `influencer-campaign-management` vs `creator-agency-operations`
- `creator-marketplace` vs `influencer-marketing-platforms` vs `creator-discovery-platform`
- `creator-matching` vs `how-to-choose-the-right-influencer-for-your-brand`
- `b2b-creator-economy` vs `b2b-influencer-marketing-india` vs `creator-led-b2b-marketing`
- `expert-creator-marketing` vs `b2b-influencer-marketing-india#experts-b2b`

## Facts checked (September 2026)

- DPDP Rules, 2025 notified 13–14 Nov 2025; phased: institutional provisions immediately, consent managers at 12 months, most processing obligations at 18 months (May 2027).
- ASCI influencer guidelines: material connection includes employment; "Employee" is a listed disclosure label; advertiser and influencer both responsible. ASCI advisory to LinkedIn influencers on non-disclosure, January 2025 (MediaNama report).
- Meta Creator Marketplace: available to eligible creators where Meta advertising operates; India invites from 2024; Creator Marketplace APIs for approved third-party partners (2025 NewFronts post).
- YouTube Creator Partnerships (formerly BrandConnect): India listed as available (from earlier batch).
- LinkedIn Creator Marketplace: alpha, North America only, no India timeline (from earlier batch).
- TikTok Creator Marketplace replaced by TikTok One (2025); TikTok still blocked in India.
- RBI Master Direction on payment aggregators, 15 Sep 2025: escrow with scheduled commercial banks; PAs may not run marketplaces.
- NMC 2023 conduct regulations held in abeyance (Aug 2023); 2002 IMC regulations apply. Bar Council of India Rule 36. ICAI Code of Ethics revised edition effective April 2026 (described only generally).
- No agency commission rates, retainer fees, marketplace take rates, margins or utilisation targets are stated anywhere in the batch; all figures are the reader's own or labelled hypothetical.

## Needs professional review

- Lawyer: expert-creator-marketing (professional-body rules), build-creator-marketplace and creator-marketplace-trust-safety (RBI payment flows, DPDP), creator-talent-database (DPDP), creator-agency-pricing-strategy (retainer terms).
- Chartered accountant: creator-agency-profitability (pass-through treatment), creator-agency-business-plan (GST/TDS on money flow), creator-marketplace-business-model and creator-economy-value-chain (e-commerce operator GST/TDS provisions, stated only generally).

## Re-verify by

- Meta Creator Marketplace API access and India eligibility; YouTube Creator Partnerships features; LinkedIn Creator Marketplace availability in India; TikTok's status in India — next quarterly review.
- DPDP phase dates if MeitY amends the schedule; ICAI advertising rules; NMC regulations if the 2023 set is revived.

## Pre-existing issues found (not changed in this batch)

- 250 of 325 core blog posts have `publishedAt` later than today (e.g. 2027 dates). These flow into `datePublished` schema and sitemap `lastmod` and should be corrected to real publication dates.
- 258 core posts end with a "Getting help…" section linking to the brand inquiry, a third CTA alongside BlogMidCTA and BlogBottomCTA. Only the five core pages updated in this batch were cleaned up.
- 8 inline links whose anchor text doesn't appear in their paragraph, so they never render: best-influencer-marketing-agencies-in-telangana, -punjab, -karnataka; influencer-marketing-education-edtech-brands-india; influencer-marketing-fitness-brands-india; influencer-marketing-cost-india; how-to-choose-an-influencer-marketing-agency; how-to-find-reddit-influencers.

## Remaining gaps worth considering

- A creator agency contract template page (management agreement and client MSA clause map), with legal review.
- Agency hiring: role scorecards and compensation for talent managers and campaign managers (creator-team pages cover creators' teams, not agencies').
- India-specific B2B creator directory methodology (how to find credible experts by profession) if demand appears in Search Console.

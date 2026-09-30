# Brand lead-generation cluster 950–999: implementation audit

Generated 2026-09-30. Content map refreshed in `blog-content-map.csv` (634 → 641: +8 new, −1 consolidated).

## Outcome

- **New articles:** 8 (`src/content/brand-guides/programs-and-industries.ts`)
- **Existing live blog articles updated:** 28 (URLs unchanged)
- **Service landing pages updated:** 4 (`campaign-strategy`, `creator-discovery`, `outreach-management`, `reporting`), with service-intent FAQs and keywords restating what each page already describes
- **Consolidated with redirect:** 1 (`building-a-brand-ambassador-program-that-lasts` → `brand-ambassador-program`; its three points were merged in)
- **Topics served without a new URL:** 42 of 50
- **Featured images:** 29 new topic SVGs; every page in this batch now has a hero
- **CTAs:** 29 new per-article entries in `BRAND_GUIDE_CTAS`

Why so few new URLs: Kudozz already had a live page, and often a live service page, for most of these queries. The six service topics (950–955) map one-to-one onto existing blog guides plus the service landing pages, which are the right owners of "X services" searches.

## Per-topic decisions

Intent: SVC = evaluating a service, EXE = execution support, PL = planning, CMP = comparison, IS = industry specific, RG = regional.

| # | Requested slug | Action | Final URL | Primary keyword | Intent | Audience | Related service | Reason |
|---|---|---|---|---|---|---|---|---|
| 950 | influencer-marketing-services-agency | UPDATE | `influencer-marketing-services-india` | influencer marketing services | SVC | CMOs, founders | campaign-strategy | Live page is "what an agency does"; full-service scope table and full-service vs specialist added |
| 951 | influencer-campaign-management-services | UPDATE | `influencer-campaign-management` (+ outreach-management service page) | influencer campaign management services | EXE | Marketing managers | outreach-management | 62 inbound links; "what to expect from management services" section |
| 952 | creator-discovery-services | UPDATE | `how-to-find-influencers-for-your-brand` (+ creator-discovery service page) | creator discovery services | SVC | Brand managers | creator-discovery | Existing guide already compared tools, manual and agency discovery; professional discovery table added |
| 953 | influencer-outreach-services | UPDATE | `influencer-outreach-strategy` | influencer outreach services | EXE | Marketing teams | outreach-management | Managed outreach section replaced the promo section |
| 954 | influencer-campaign-reporting-services | UPDATE | `influencer-marketing-report` (+ reporting service page) | influencer campaign reporting | SVC | Marketing heads | reporting | Same intent as the report guide; reporting-services checklist added |
| 955 | influencer-marketing-strategy-services | UPDATE | `influencer-marketing-strategy` (+ campaign-strategy service page) | influencer marketing strategy services | SVC | CMOs | campaign-strategy | "What a strategic partner delivers" |
| 956 | influencer-product-seeding-program | CREATE | `influencer-product-seeding-program` | influencer product seeding | PL | D2C, FMCG, beauty | product-launches | Multi-platform program operations; Instagram guide stays Instagram-specific |
| 957 | influencer-gifting-campaigns | CONSOLIDATE | `influencer-product-seeding-program#models` | influencer gifting campaigns | PL | Same | Same | Gifting is relationship-led seeding |
| 958 | influencer-sampling-campaigns | CONSOLIDATE | `influencer-product-seeding-program#models` | influencer sampling campaigns | PL | FMCG | Same | Sampling is volume seeding |
| 959 | influencer-ambassador-programs-brands | UPDATE + CONSOLIDATE | `brand-ambassador-program` | influencer ambassador program | PL | Brand managers | ambassador-programs | Two live ambassador pages; thin one redirected |
| 960 | brand-ambassador-vs-influencer-campaign | CONSOLIDATE | `brand-ambassador-program#differs-from-one-time-campaign` | brand ambassador vs influencer | CMP | Same | Same | Comparison table + FAQ in the ambassador guide |
| 961 | long-term-influencer-partnership-program | UPDATE | `influencer-partnerships` | influencer partnership program | PL | Brand managers | ambassador-programs | Live page (17 inbound) |
| 962 | influencer-retainer-campaigns | CONSOLIDATE | `influencer-partnerships#retainers` | influencer retainer | PL | Same | Same | A retainer is a partnership compensation structure; creator side stays in creator-retainer-deals |
| 963 | always-on-creator-content | CONSOLIDATE | `always-on-influencer-marketing` | always-on creator content | PL | Same | ambassador-programs | Same intent as the last batch's always-on guide |
| 964 | influencer-content-repurposing | UPDATE | `repurpose-influencer-content` | influencer content repurposing | EXE | Performance, content teams | ugc-campaigns | Live page, same intent |
| 965 | creator-content-licensing-brands | UPDATE | `ugc-whitelisting-creator-licensing` | creator content licensing | EXE | Brand, legal | — | Live "complete guide for brands"; broadened from UGC to influencers |
| 966 | influencer-whitelisting-brands | CONSOLIDATE | `ugc-whitelisting-creator-licensing#influencer-whitelisting` | influencer whitelisting | EXE | Performance teams | — | Whitelisting and licensing are one agreement |
| 967 | creator-ads-vs-influencer-posts | CONSOLIDATE | `influencer-performance-marketing#posts-vs-ads` | creator ads vs influencer posts | CMP | Performance marketers | ugc-campaigns | The comparison is the core of 969 |
| 968 | influencer-content-paid-ads | CONSOLIDATE | `repurpose-influencer-content#posts-to-ads` | influencer content for paid ads | EXE | Performance teams | ugc-campaigns | Live repurposing guide is titled "…for Paid Ads" |
| 969 | influencer-performance-marketing | CREATE | `influencer-performance-marketing` | influencer performance marketing | EXE | Performance marketers | ugc-campaigns | Hub connecting creators, rights, testing and paid media |
| 970 | influencer-marketing-app-launch | CONSOLIDATE | `mobile-app-influencer-marketing-india#app-launch` | influencer marketing app launch | IS | App marketers | product-launches | Live app page |
| 971 | influencer-marketing-mobile-apps | UPDATE | `mobile-app-influencer-marketing-india` | influencer marketing mobile apps | IS | Same | Same | Launch plan + retention-based acquisition |
| 972 | influencer-marketing-saas-product-launch | UPDATE | `saas-influencer-marketing-india#saas-launch` | SaaS influencer marketing | IS | SaaS marketers | — | Live SaaS page |
| 973 | influencer-marketing-luxury-brands | UPDATE | `luxury-influencer-marketing-india` | influencer marketing luxury brands | IS | Luxury brand teams | creator-discovery | Controlled environments, measuring beyond clicks |
| 974 | influencer-marketing-jewellery | UPDATE | `influencer-marketing-jewellery-brands-india` | influencer marketing jewellery | IS | Jewellers | campaign-strategy | Hallmarking/HUID, calendar and creator mix |
| 975 | influencer-marketing-home-interior | UPDATE | `home-interior-influencer-marketing-india` | influencer marketing home decor | IS | Home brands | creator-discovery | Creator types, inspiration to purchase |
| 976 | influencer-marketing-consumer-brands | REJECT (merge) | `influencer-marketing-fmcg-brands-india` + `always-on-influencer-marketing` | consumer brand influencer marketing | IS | Consumer brands | social-campaigns | "Consumer brands" overlaps FMCG, D2C and always-on without a distinct intent |
| 977 | influencer-marketing-fmcg | UPDATE | `influencer-marketing-fmcg-brands-india` | FMCG influencer marketing | IS | FMCG | social-campaigns | High-volume programs |
| 978 | influencer-marketing-personal-care | CREATE | `influencer-marketing-personal-care` | personal care influencer marketing | IS | Personal care brands | creator-discovery | Hair, oral, hygiene, grooming and intimate care differ from beauty/skincare |
| 979 | influencer-marketing-parenting-baby | UPDATE | `parenting-baby-influencer-marketing-india` | parenting influencer marketing | IS | Baby brands | creator-discovery | IMS Act, children on camera |
| 980 | influencer-marketing-sports-fitness | UPDATE | `influencer-marketing-fitness-brands-india` (links sports page) | fitness influencer marketing | IS | Fitness brands | social-campaigns | Creator types, supplement claims |
| 981 | influencer-marketing-gaming | UPDATE | `gaming-influencer-marketing-india` | gaming influencer marketing | IS | Game studios | product-launches | Online Gaming Act 2025, streams and esports |
| 982 | influencer-marketing-travel-brands | UPDATE | `influencer-marketing-travel-brands-india` | travel influencer marketing | IS | Travel brands | campaign-strategy | Live page (18 inbound) |
| 983 | influencer-marketing-hotels | UPDATE | `influencer-marketing-hospitality-brands-india` | hotel influencer marketing | IS | Hotels | creator-discovery | Creator stays, direct bookings |
| 984 | influencer-marketing-tourism-destinations | CONSOLIDATE | `influencer-marketing-travel-brands-india#tourism-boards` | tourism influencer marketing | IS | Tourism boards | campaign-strategy | Travel page already titled "Travel and Tourism" |
| 985 | influencer-marketing-restaurants | UPDATE | `restaurant-cafe-influencer-marketing-india` | restaurant influencer marketing | IS | Restaurants | social-campaigns | Opening and menu playbooks |
| 986 | influencer-marketing-cloud-technology | CONSOLIDATE | `influencer-marketing-b2b-technology` | technology influencer marketing | IS | Tech marketers | — | Cloud is one segment of enterprise tech |
| 987 | influencer-marketing-b2b-technology | CREATE | `influencer-marketing-b2b-technology` | B2B technology influencer marketing | IS | Enterprise tech | — | SaaS page covers trial-led software; this covers cloud, security, data, dev tools, IT services |
| 988 | influencer-marketing-manufacturing | UPDATE | `manufacturing-influencer-marketing-india` | manufacturing influencer marketing | IS | Industrial | — | Audiences table, trade fairs |
| 989 | influencer-marketing-construction | CREATE | `influencer-marketing-construction` | construction influencer marketing | IS | Building materials | campaign-strategy | Specifier/contractor/dealer/homeowner journey differs from manufacturing |
| 990 | influencer-marketing-automotive-dealerships | CREATE | `influencer-marketing-automotive-dealerships` | automotive dealership influencer marketing | IS | Dealer principals | creator-discovery | Local buyer with OEM constraints, distinct from OEM guide |
| 991 | influencer-marketing-real-estate-projects | REJECT (covered) | `influencer-marketing-real-estate-brands-india` | real estate influencer marketing | IS | Developers | — | RERA and site-visit flow added in the 939 update |
| 992 | influencer-marketing-colleges | CREATE | `influencer-marketing-colleges` | college influencer marketing | IS | Admissions teams | ambassador-programs | Institutions differ from EdTech and coaching |
| 993 | influencer-marketing-edtech-product-launch | UPDATE | `influencer-marketing-education-edtech-brands-india#edtech-launch` | EdTech influencer marketing | IS | EdTech | campaign-strategy | Launch phases added |
| 994 | influencer-marketing-fintech-product-launch | UPDATE | `influencer-marketing-fintech-brands-india#fintech-launch` | fintech influencer marketing | IS | Fintech | creator-discovery | Launch phases added |
| 995 | influencer-marketing-electronics-product-launch | REJECT (covered) | `consumer-electronics-influencer-marketing-india` | electronics influencer marketing | IS | Electronics | product-launches | Review units, embargoes and launch timing added in the 947 update |
| 996 | influencer-marketing-regional-markets | CREATE (retargeted) | `influencer-marketing-tier-2-tier-3-cities` | influencer marketing tier 2 cities | RG | Growth teams | campaign-strategy | "Regional influencer marketing" belongs to the live regional page (44 inbound); expansion beyond metros is the distinct intent |
| 997 | vernacular-influencer-campaigns | UPDATE | `regional-influencer-marketing-india#vernacular-campaigns` | vernacular influencer marketing | RG | Brand teams | creator-discovery | Live page is "Regional and Vernacular Influencer Marketing" |
| 998 | multi-language-influencer-marketing | CONSOLIDATE | `pan-india-influencer-marketing-campaign#multilingual` | multilingual influencer marketing | RG | Brand teams | campaign-strategy | Translation vs transcreation vs native, multilingual workflow |
| 999 | scalable-influencer-marketing-india | CONSOLIDATE | `always-on-influencer-marketing#scale-across-india` | scalable influencer marketing India | PL | Scaling brands | ambassador-programs | Scaling a program across India = always-on + regional expansion |

## CTAs

Per-article pairs in `src/lib/blogCta.ts`. Examples: "Planning a Creator Gifting Campaign?" (seeding → product-launch service), "Need Creator Content Your Ads Team Can Use?" (performance → UGC service), "Planning an Influencer Campaign Across Multiple Indian Markets?" (tier 2/3 → inquiry), "Considering a Student Ambassador Program?" (colleges → ambassador programs). Every bottom CTA goes to the tracked brand inquiry. Analytics events and form fields are unchanged from the previous batch (`cta_type`, `intent`, source slug, category and position already flow through).

## Internal links added to older content

instagram-product-seeding, instagram-gifting-vs-paid-collaboration, creator-product-seeding → seeding program; instagram-partnership-ads, ugc-paid-social-testing, ugc-ads-indian-brands, influencer-marketing-sales → performance marketing; influencer-marketing-beauty-brands-india → personal care; b2b-influencer-marketing-india, b2b-creator-economy → B2B technology and construction; influencer-marketing-real-estate-brands-india, manufacturing, home-interior → construction; automotive-influencer-marketing-india, influencer-marketing-lead-generation, restaurant-cafe → dealerships; influencer-marketing-education-edtech-brands-india, brand-ambassador-program, influencer-marketing-lead-generation → colleges; pan-india, influencer-marketing-strategy-india, regional, FMCG, always-on → tier 2/3; personal care and FMCG → parenting. Every updated page links forward to related services and guides; `llms.txt` lists the new clusters.

## Status

- **Metadata:** unique SEO titles ≤70 characters with suffix and meta descriptions of 110–160 characters on all 36 pages.
- **Schema:** BlogPosting, BreadcrumbList and FAQPage render on all 36 pages; FAQs are visible. Service pages keep their Service + FAQ schema, now with one or two added questions each.
- **Images:** 29 new hero SVGs (1600×700, a few KB each, descriptive alt text).
- **QA:** 36/36 pass (one H1, self-canonical, indexable, schema, one mid and one bottom CTA, hero). Both redirects return a permanent 308. Build: 1,370 static pages.

## Facts checked (September 2026)

- Promotion and Regulation of Online Gaming Act, 2025: bans online money games and their advertising and promotion; e-sports and social games encouraged (MeitY text).
- Infant Milk Substitutes, Feeding Bottles and Infant Foods Act, 1992: prohibits promotion, broadly defined; state enforcement tightened in 2026.
- BIS hallmarking: six-digit HUID mandatory in mandatory-hallmarking districts; BIS CARE app verification.
- ASCI 2023 guidelines: health/nutrition and BFSI qualifications; "Free gift" among approved disclosure labels (used instead of "Gifted", which isn't on the list).
- Platform features referenced (partnership ads, whitelisting) reuse facts verified in earlier batches.

## Needs professional review

- Lawyer: gaming (Online Gaming Act), parenting (IMS Act), colleges (institution advertising claims), dealership OEM agreements, whitelisting/licensing terms.

## Pre-existing issues (not changed)

- Future `publishedAt`/`updatedAt` dates on many core posts (several updated pages here show future "Updated" dates and couldn't get a truthful new one).
- Other core posts still end with a "Getting help" promo section (a third CTA).
- Brand inquiry budget options in US dollars.

## Search Console watch list

- `influencer-product-seeding-program` vs `instagram-product-seeding`
- `influencer-performance-marketing` vs `instagram-partnership-ads` vs `repurpose-influencer-content`
- `influencer-marketing-personal-care` vs `influencer-marketing-beauty-brands-india`
- `influencer-marketing-b2b-technology` vs `saas-influencer-marketing-india`
- `influencer-marketing-construction` vs `manufacturing-influencer-marketing-india`
- `influencer-marketing-automotive-dealerships` vs `automotive-influencer-marketing-india`
- `influencer-marketing-colleges` vs `influencer-marketing-education-edtech-brands-india`
- `influencer-marketing-tier-2-tier-3-cities` vs `regional-influencer-marketing-india` vs `pan-india-influencer-marketing-campaign`
- Service blog guides vs their `/services/*` pages (watch whether Google prefers the guide or the service page for "… services" queries)

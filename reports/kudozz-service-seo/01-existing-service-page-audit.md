# 01 · Existing Service Page Audit

**Audited:** 17 Nov 2026, using the rendered HTML of the local production build (`next build` + `next start`), the source code, `gsc-data.xlsx` (5 Sep – 3 Nov 2026) and earlier reports in `reports/claude-seo-kudozz/` and `reports/kudozz-homepage-seo/`.
**Inventory source:** every `/services*` URL in the generated `sitemap.xml` (21 URLs), cross-checked against `src/app/services/**` and `src/content/services.ts`.

## 1. How the service pages are built

| Route | Source | Template |
|---|---|---|
| `/services` | `src/app/services/page.tsx` | Hub: three pillars (SMM, influencer, UGC) → categories → services, plus FAQ |
| `/services/[slug]` (19 pages) | `src/content/services.ts` → `ServiceDetail.tsx` | Shared template: breadcrumbs → H1 (= `service.name`) → description → "Who it's for" → answer block (H2 question) → [What's included] → How it works → Benefits / Deliverables → [comparison table] → What we need from you / How success is measured → Where we run this service → FAQ → Guides → Related services → final CTA |
| `/services/social-media-management` | `src/app/services/social-media-management/page.tsx` + `src/content/social-media-management.ts` | Custom long-form page (4,621 words, 13 H2s) |

**Other service-like pages, out of scope for "in India" targeting:** `/markets/{uae,saudi-arabia,uk,australia,singapore}` (market-specific agency pages), `/for-brands` (enquiry landing page) and `/` (agency homepage, optimised on 17 Nov in `reports/kudozz-homepage-seo/`).

**Not present:** there is **no separate "social media marketing" page**. Social media marketing (organic) is delivered and described on `/services/social-media-management`. `/services/social-campaigns` is a *multi-creator influencer* campaign service, not brand social media marketing, so it must not be repurposed for that keyword.

## 2. Inventory (rendered, before changes)

| # | URL | Title (chars) | H1 | Words | Int. links | Schema | GSC impr / clicks / pos |
|---|---|---|---|---|---|---|---|
| 1 | `/services` | Influencer Marketing & Social Media Services — Kudozz (53) | Social media, influencer marketing and UGC services : Three service areas. One coordinated team. | 2381 | 22 | BreadcrumbList, ItemList, FAQPage | 42 / 0 / 8.8 |
| 2 | `/services/ambassador-programs` | Brand Ambassador Program Services — Kudozz (42) | Brand Ambassador Programs | 588 | 16 | Service, BreadcrumbList, FAQPage | 2 / 0 / 4.5 |
| 3 | `/services/barter-influencer-campaigns` | Barter Influencer Campaigns for Brands in India — Kudozz (56) | Barter Influencer Campaigns | 955 | 17 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 4 | `/services/campaign-strategy` | Influencer Marketing Strategy Services in India — Kudozz (56) | Influencer Marketing Strategy | 819 | 18 | Service, BreadcrumbList, FAQPage | 22 / 0 / 38.7 |
| 5 | `/services/creator-discovery` | Creator Discovery & Influencer Matchmaking Services — Kudozz (60) | Creator Discovery & Matchmaking | 827 | 18 | Service, BreadcrumbList, FAQPage | 35 / 1 / 17.2 |
| 6 | `/services/influencer-affiliate-marketing` | Influencer Affiliate & Performance Marketing — Kudozz (53) | Influencer Affiliate & Performance Marketing | 847 | 18 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 7 | `/services/influencer-marketing` | Influencer Marketing Services: Strategy to Reporting (52) | Influencer Marketing Services | 1463 | 35 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 8 | `/services/influencer-seeding-gifting` | Influencer Seeding & Product Gifting Services — Kudozz (54) | Influencer Seeding & Gifting | 784 | 18 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 9 | `/services/instagram-influencer-marketing` | Instagram Influencer Marketing Agency Services — Kudozz (55) | Instagram Influencer Marketing | 805 | 20 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 10 | `/services/linkedin-influencer-marketing` | LinkedIn Influencer Marketing for B2B Brands — Kudozz (53) | LinkedIn Influencer Marketing | 781 | 18 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 11 | `/services/micro-nano-influencer-marketing` | Micro & Nano Influencer Marketing Services — Kudozz (51) | Micro & Nano Influencer Marketing | 837 | 16 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 12 | `/services/outreach-management` | Influencer Outreach & Campaign Management Services — Kudozz (59) | Influencer Outreach & Management | 949 | 19 | Service, BreadcrumbList, FAQPage | 71 / 0 / 15.5 |
| 13 | `/services/paid-influencer-campaigns` | Paid Influencer Campaign Services in India — Kudozz (51) | Paid Influencer Campaigns | 904 | 17 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 14 | `/services/product-launches` | Influencer Marketing for Product Launches — Kudozz (50) | Product Launch Campaigns | 697 | 17 | Service, BreadcrumbList, FAQPage | 34 / 0 / 20.2 |
| 15 | `/services/regional-influencer-marketing` | Regional & Vernacular Influencer Marketing — Kudozz (51) | Regional Influencer Marketing | 783 | 17 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 16 | `/services/reporting` | Influencer Campaign Reporting & ROI Tracking — Kudozz (53) | Campaign Reporting & Performance Tracking | 645 | 17 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 17 | `/services/social-campaigns` | Multi-Creator Social Media Campaign Services — Kudozz (53) | Social Media Campaigns | 680 | 18 | Service, BreadcrumbList, FAQPage | 29 / 0 / 7.8 |
| 18 | `/services/social-media-management` | Social Media Management Services for Brands — Kudozz (52) | Social media management services : Social media that keeps your brand consistent, relevant and connected. | 4621 | 117 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 19 | `/services/ugc-campaigns` | UGC Campaign Services for Brands in India — Kudozz (50) | UGC Campaigns | 836 | 18 | Service, BreadcrumbList, FAQPage | 120 / 3 / 36.0 |
| 20 | `/services/ugc-content-production` | UGC Video & Content Production Services — Kudozz (48) | UGC Content Production | 947 | 20 | Service, BreadcrumbList, FAQPage | — (none in export) |
| 21 | `/services/youtube-influencer-marketing` | YouTube Influencer Marketing Agency Services — Kudozz (53) | YouTube Influencer Marketing | 797 | 19 | Service, BreadcrumbList, FAQPage | — (none in export) |

| URL | Meta description (chars) |
|---|---|
| `/services` | Kudozz services: social media management, influencer marketing from strategy and creator discovery to paid, barter and affiliate campaigns, and UGC production. (159) |
| `/services/ambassador-programs` | Brand ambassador programmes: incentive design, ambassador recruitment and ongoing relationship management for creator partnerships that last. (141) |
| `/services/barter-influencer-campaigns` | Barter influencer campaign services: product-for-content collaborations with nano and micro creators, written deliverables, disclosure checks and post tracking. (160) |
| `/services/campaign-strategy` | Influencer marketing strategy from Kudozz: audience research, platform and format planning, creator tiering and a KPI framework before outreach begins. (151) |
| `/services/creator-discovery` | Creator discovery that screens for audience overlap, engagement quality and authenticity, not follower count, with a written reason for each creator. (149) |
| `/services/influencer-affiliate-marketing` | Influencer affiliate and performance marketing: commission and hybrid creator deals, tracked links and codes, creator recruitment and sales reports by creator. (159) |
| `/services/influencer-marketing` | End-to-end influencer marketing services from Kudozz: strategy, creator discovery and vetting, outreach, contracts, content approvals and KPI reporting. (152) |
| `/services/influencer-seeding-gifting` | Influencer seeding and gifting services: curated creator lists, opt-ins, shipping, disclosure guidance and mention tracking to find your next paid partners. (156) |
| `/services/instagram-influencer-marketing` | Instagram influencer marketing services: creators chosen from audience data, Reels, Stories and collab posts, partnership ads, disclosure checks and reporting. (159) |
| `/services/linkedin-influencer-marketing` | LinkedIn influencer marketing for B2B brands: creators your buyers follow, posts, newsletters and webinars, Thought Leader Ads and pipeline reporting. (150) |
| `/services/micro-nano-influencer-marketing` | Micro and nano influencer marketing services: vetted smaller creators managed at volume, with briefs, product logistics, approvals and one combined report. (155) |
| `/services/outreach-management` | Influencer outreach and campaign management services: negotiation, contracting, usage rights, and deliverable tracking handled by a single point of contact. (156) |
| `/services/paid-influencer-campaigns` | Paid influencer campaign services: fee-based creator collaborations with fixed deliverables, dates, usage rights and disclosure, negotiated and managed for you. (160) |
| `/services/product-launches` | Product launch influencer campaigns: pre-launch seeding, embargoes, launch-day creator coordination and post-launch content, planned around your date. (150) |
| `/services/regional-influencer-marketing` | Regional influencer marketing in India: vernacular creators in Hindi, Tamil, Telugu, Kannada, Marathi, Bengali and more, with audience-location checks by state. (160) |
| `/services/reporting` | Influencer campaign reporting and ROI tracking: unified dashboards, KPI-vs-actual scorecards, and a plain-language debrief tied to the goals set before launch. (159) |
| `/services/social-campaigns` | Social media influencer campaigns run across many creators and platforms, with a publishing calendar, creative direction and live performance monitoring. (153) |
| `/services/social-media-management` | Social media management for brands: strategy, content calendars, posts, Reels, publishing, community management and monthly reporting, connected with creators. (159) |
| `/services/ugc-campaigns` | UGC marketing agency services: UGC strategy, creator sourcing, cleared usage rights and ad-testing rounds that turn creator content into a repeatable programme. (160) |
| `/services/ugc-content-production` | UGC content production: scripts, creator shoots, editing, hook variations and labelled files for ads, websites and marketplaces, with usage rights cleared. (155) |
| `/services/youtube-influencer-marketing` | YouTube influencer marketing services: integrations, dedicated reviews and Shorts, creators chosen on audience and watch data, contracts and tracked reporting. (159) |

**Common to every page:**
- **Canonical:** self-referencing, `https://www.kudozz.in/services/{slug}` ✅
- **Robots:** `index, follow` ✅
- **OG/Twitter:** title, description, URL and image set by `buildMetadata()` ✅
- **Images:** no `<img>` without alt ✅
- **Schema:** Organization + WebSite (layout), Service, BreadcrumbList and FAQPage on every detail page; the hub uses ItemList ✅. No ratings, reviews, address or LocalBusiness ✅
- **CTA journey:** hero "Start a Brand Inquiry" → `/for-brands?from=service:{slug}#inquiry`, and the bottom CTA → `/for-brands?from=service:{slug}&pos=bottom#inquiry`. Lead attribution comes from the `from` param ✅

## 3. Findings

### Titles, meta descriptions and H1s
1. **No page targets the "best … in India" phrasing.** Titles are service-descriptive. Only 5 of 19 detail-page titles mention India.
2. **H1 = `service.name` on every template page** ("UGC Campaigns", "Paid Influencer Campaigns"). These are short labels with no India or agency/service context, and they're the weakest on-page relevance signal.
3. The SMM H1 is built from an eyebrow plus a display line joined by a colon ("Social media management services : Social media that keeps…").
4. The pillar `/services/influencer-marketing` title, "Influencer Marketing Services: Strategy to Reporting", has no "India".
5. **Title suffix inconsistency:** most titles get " — Kudozz" from the template, but the pillar (52 chars + suffix > 60) shows no brand.

### Content
6. The template already covers definition, process, benefits, deliverables, inputs, success measures, FAQs and related services. That's solid service depth, with no fabricated proof.
7. **Gap: "What should I look for when choosing an agency?"** No page helps a buyer evaluate an agency. The brief asks for this, and agency-selection queries already reach the blog ("influencer-marketing-agency-pitch-questions": 522 impressions).
8. **Gap: "Why Kudozz" per service.** Practices are scattered across benefits and process, but there's no section that ties a buyer's criteria to how Kudozz handles each one.
9. **Thinner pages:** `ambassador-programs` (588 words), `reporting` (645), `social-campaigns` (680) and `product-launches` (697).
10. **Bug:** the FAQ heading lower-cases brand names: "Questions about instagram influencer marketing.", "…youtube…", "…linkedin…" (`sentenceCase()` in `ServiceDetail.tsx`).
11. `product-launches` uses an em dash in its description ("sequencing — teasers"), unlike the rest of the copy style.

### Cannibalisation risks
12. **UGC:** two UGC service pages with overlapping intent. `ugc-campaigns`' meta description opens "UGC marketing agency services", and `ugc-content-production` is framed as production. GSC: `ugc-campaigns` 120 impressions at position 36, production none.
13. **Influencer:** the homepage now owns "Best Influencer Marketing Agency in India" (17 Nov). The pillar must not take the same title (see report 03).
14. **Listicles:** `/blog/best-influencer-marketing-agencies-in-india`, `best-ugc-marketing-agencies-in-india` and `best-social-media-marketing-agencies-in-india` already own the plural, list-intent "best … agencies" queries.
15. **Hub vs `/for-brands`:** near-identical titles ("Influencer Marketing & Social Media Services [for Brands]").

### Search Console
Only 8 service URLs appear in the export (shown in the table). The pillar (`influencer-marketing`), `ugc-content-production`, platform pages, audience pages, paid/barter/seeding/affiliate and SMM have **no data yet**: they were created or relaunched between 15 Oct and 13 Nov, after or near the end of the export. Every change here is therefore a relevance improvement, not a fix for proven underperformance.

## 4. Pages that need a major structural change

None. All recommended changes fit the existing template through new optional fields: `heroTitle`, `choosing`, extra FAQs and a heading fix. No page is created, merged, moved or deleted.

# 05 — Implementation Report (Location SEO, Wave 1)

**Status: 9 location pages written, integrated locally, built and validated. Not committed, deployed or published.**

## What was built

- **Pages:** one consolidated listicle per location:
  - India (the hub)
  - Mumbai, Delhi NCR, Bengaluru, Ahmedabad, Pune, Hyderabad, Chennai and Kolkata

  Each targets "best social media marketing/management agency/company in <place>". See `04-keyword-and-url-map.md`.
- **Page format:**
  - Kudozz first, with a publisher disclosure.
  - A transparent selection method.
  - Four competitors, each verified on its own website, in no particular order.
  - A comparison table.
  - 2–3 sections of genuinely local business and content context.
  - Services to evaluate, how to choose, cost drivers (no prices), remote vs local, FAQs and a conclusion.
- **Kudozz's profile** is identical on every page (`src/content/location-guides/smm-shared.ts`), so its facts are consistent: SMM offered across India, delivered remotely, no city offices, separately scoped items listed, and no clients, results or prices claimed.
- **Service landing pages per city:** not created. They didn't meet the brief's own section 8 criteria (no local presence; would duplicate `/services/social-media-management`).
- **International pages:** not created, because SMM delivery outside India is unconfirmed (see 01 §4). They're researched in 02.

## Pages

Word counts are body plus FAQs, including the shared blocks and comparison table. "Title / meta" is the rendered `<title>` length and the meta description length. CTA placement is computed with the live `getMidCtaIndex` logic.

| Page | File | Words | Read | Title / meta | Int. links | Ext. sources | CTA placement | Tags (first 3) | Status |
|---|---|---|---|---|---|---|---|---|---|
| [Best Social Media Marketing and Management Agencies in India: 5 to Consider](/blog/best-social-media-marketing-agencies-in-india) | `smm-locations-west.ts` | 2945 | 14 min read | 52 / 158 | 25 | 4 | after "Comparison at a glance" (block 28 of 58) + after article | best social media marketing agency in India; best social media marketing company in India; best social media management agency in India | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Mumbai: 5 to Consider](/blog/best-social-media-marketing-agencies-in-mumbai) | `smm-locations-west.ts` | 2554 | 12 min read | 56 / 156 | 20 | 8 | after "5 social media agencies to consider in Mumbai" (block 26 of 53) + after article | best social media marketing agency in Mumbai; best social media marketing company in Mumbai; best social media management agency in Mumbai | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Pune: 5 to Consider](/blog/best-social-media-marketing-agencies-in-pune) | `smm-locations-west.ts` | 2558 | 12 min read | 53 / 158 | 19 | 9 | after "5 social media agencies to consider in Pune" (block 26 of 52) + after article | best social media marketing agency in Pune; best social media marketing company in Pune; best social media management agency in Pune | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Delhi NCR: 5 to Consider](/blog/best-social-media-marketing-agencies-in-delhi) | `smm-locations-north-east.ts` | 2625 | 12 min read | 51 / 158 | 23 | 8 | after "5 social media agencies to consider in Delhi NCR" (block 25 of 50) + after article | social media marketing agency in Delhi; social media marketing company in Delhi; social media management agency in Delhi | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Ahmedabad: 5 to Consider](/blog/best-social-media-marketing-agencies-in-ahmedabad) | `smm-locations-north-east.ts` | 2629 | 12 min read | 51 / 158 | 19 | 8 | after "5 social media agencies to consider in Ahmedabad" (block 25 of 50) + after article | social media marketing agency in Ahmedabad; social media marketing company in Ahmedabad; social media management agency in Ahmedabad | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Kolkata: 5 to Consider](/blog/best-social-media-marketing-agencies-in-kolkata) | `smm-locations-north-east.ts` | 2573 | 11 min read | 49 / 160 | 20 | 6 | after "5 social media agencies to consider in Kolkata" (block 25 of 50) + after article | social media marketing agency in Kolkata; social media marketing company in Kolkata; social media management agency in Kolkata | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Bengaluru: 5 to Consider](/blog/best-social-media-marketing-agencies-in-bangalore) | `smm-locations-south.ts` | 2571 | 13 min read | 55 / 153 | 22 | 6 | after "Comparison at a glance" (block 27 of 54) + after article | social media marketing agency in Bangalore; social media marketing company in Bangalore; social media management agency in Bangalore | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Hyderabad: 5 to Consider](/blog/best-social-media-marketing-agencies-in-hyderabad) | `smm-locations-south.ts` | 2577 | 13 min read | 58 / 157 | 20 | 8 | after "Comparison at a glance" (block 27 of 58) + after article | social media marketing agency in Hyderabad; social media marketing company in Hyderabad; social media management agency in Hyderabad | Integrated (local, unpublished) |
| [Best Social Media Marketing and Management Agencies in Chennai: 5 to Consider](/blog/best-social-media-marketing-agencies-in-chennai) | `smm-locations-south.ts` | 2560 | 13 min read | 51 / 157 | 20 | 7 | after "Comparison at a glance" (block 27 of 53) + after article | social media marketing agency in Chennai; social media marketing company in Chennai; social media management agency in Chennai | Integrated (local, unpublished) |

Total: about 23,600 words across 9 pages; 36 competitors verified and published.

## Files

**Created:**
- `src/content/location-guides/smm-shared.ts`
- `src/content/location-guides/smm-locations-west.ts` (India, Mumbai, Pune)
- `src/content/location-guides/smm-locations-north-east.ts` (Delhi NCR, Ahmedabad, Kolkata)
- `src/content/location-guides/smm-locations-south.ts` (Bengaluru, Hyderabad, Chennai)
- 9 heroes in `public/blog/locations/`
- `reports/location-seo/internal-links.csv`

**Modified:**
- `src/content/location-guides/index.ts` (wiring)
- `src/lib/blogCta.ts` (9 hand-written CTA pairs; topic "Social Media Management: <place>", so the lead email shows the location)
- `src/content/social-media-management.ts` (an "Agency guides by location" group on the service page)
- `public/llms.txt` (factual description of the guides)

**Not changed:**
- forms, APIs, env, analytics, existing URLs
- Organization schema: no LocalBusiness, no addresses, no ratings
- the outbound-link policy (see 01 §4)

## SEO and schema

- **Per page:** unique titles and metas, one H1, self canonical, category "Social Media Management", sitemap.
- **BlogPosting:**
  - `spatialCoverage` (e.g. "Pune, India")
  - `mentions` (Kudozz plus the four agencies; competitor URLs are dropped from schema by the existing link-policy helper)
- **BreadcrumbList:** Home › Blog › India › page on city pages.
- **FAQPage:** matches the visible FAQs. No rating or review schema.

## Internal links

- **Volume:** 252 links on the 9 pages: 110 blog, 78 service and 64 external (plain text).
- **India page:** links all 8 city pages; each city page links the India page.
- **City pages:** each cross-links the same place's existing **influencer** listicle (or its state page), with a sentence explaining the difference.
- **Industry guides:** relevant SMM guides linked per local business mix (e.g. manufacturing for Pune, Chennai and Ahmedabad; financial services for Mumbai; IT for Bengaluru, Hyderabad, Pune and Delhi).
- **Service anchors:** the 64 links to `/services/social-media-management` use 28 distinct anchors. The shared Kudozz profile repeats three anchors on every page by design ("social media management", "its service page", "brand enquiry form"), so Kudozz is described identically everywhere.

## Recommendations not implemented (need approval)

1. Consolidate or rewrite the 30 specialist influencer city listicles (the existing doorway risk; see the 2027 report 10).
2. Allowlist competitor domains (`rel="nofollow"`) if live links to competitors are wanted.
3. Build P2 pages (8 Indian cities, then UAE, KSA, UK, AU, SG) only after wave 1 earns impressions and SMM delivery is confirmed per market.

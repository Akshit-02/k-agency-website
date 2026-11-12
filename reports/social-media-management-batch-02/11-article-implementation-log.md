# 11 — Article Implementation Log (Batch 02)

Status for every article: **written, integrated locally, built and validated. Not committed, deployed or published.** As with Batch 01, there's no draft flag in this codebase, so the articles go live with the next deploy unless removed from `src/content/brand-guides/index.ts`.

## Method

1. Re-extracted the inventory (981 items, including Batch 01) and ran overlap checks against Batch 01 and the wider library (reports 01–03).
2. Wrote a Batch 02 addendum to the Batch 01 writer spec covering:
   - Platform-fact verification rules
   - Overlap boundaries for every topic
   - Service-link plan per cluster
   - Compliance notes for the industry articles
3. Five writers worked in parallel (Instagram; Reels and planning; platforms; creative and D2C; industries).
4. Lead review:
   - Independent validator: 0 structural issues; the two "get in touch" flags were false positives (a customer-journey sentence and a restaurant's reply template).
   - Claim-by-claim fact audit, with platform facts spot-checked.
   - One FAQ reworded: 22's posting-frequency answer now gives a capacity-based method instead of a numeric range.
   - Hero contact sheet reviewed: arrows in hero 32 were shortened because they overlapped the next box's text.
5. Integration:
   - Index wiring
   - 20 hand-written CTA pairs
   - The service page's Guides list (now 40 articles)
   - `llms.txt`
6. Build, runtime and mobile validation (reports 12–13).

## Articles

Word counts are body plus FAQs. "Title / meta" is the rendered `<title>` length and the meta description length. CTA placement is computed with the live `getMidCtaIndex` logic.

| Article | File | Words | Read | Title / meta | Int. links | Ext. sources | CTA placement | Tags (first 3) | Status |
|---|---|---|---|---|---|---|---|---|---|
| [Instagram Management for Businesses: What Should a Professional Monthly Strategy Include?](/blog/instagram-management-for-business) | `smm-instagram.ts` | 1802 | 9 min read | 53 / 152 | 8 | 3 | after "Run the month on a fixed planning cycle" (block 22 of 39) + after article | Instagram management for businesses; Instagram account management; Instagram marketing strategy for business | Integrated (local, unpublished) |
| [Instagram Stories for Businesses: How to Keep Your Audience Engaged Between Posts](/blog/instagram-stories-for-business) | `smm-instagram.ts` | 1602 | 8 min read | 54 / 160 | 7 | 4 | after "Interactive stickers and how to use them" (block 21 of 39) + after article | Instagram Stories for business; Instagram Stories strategy; Instagram Stories ideas for brands | Integrated (local, unpublished) |
| [How to Plan Instagram Carousels That Educate, Engage and Build Brand Trust](/blog/instagram-carousel-strategy) | `smm-instagram.ts` | 1687 | 8 min read | 56 / 158 | 6 | 3 | after "Carousel types that suit brands" (block 17 of 39) + after article | Instagram carousel strategy; Instagram carousel ideas for brands; carousel post design | Integrated (local, unpublished) |
| [How to Turn Instagram Profile Visitors Into Qualified Business Enquiries](/blog/instagram-business-profile-optimization) | `smm-instagram.ts` | 1885 | 9 min read | 53 / 157 | 8 | 7 | after "Links, pinned posts and Highlights" (block 23 of 45) + after article | Instagram profile optimisation for business; Instagram bio for business; Instagram business profile | Integrated (local, unpublished) |
| [How to Build an Instagram Reels Strategy Around Your Products, Customers and Brand Story](/blog/instagram-reels-strategy-for-brands) | `smm-planning.ts` | 2014 | 10 min read | 54 / 160 | 8 | 6 | after "A Reels content framework" (block 22 of 40) + after article | Instagram Reels strategy for brands; Reels marketing for business; Instagram Reels for brands | Integrated (local, unpublished) |
| [How to Plan a Month of Instagram Reels Without Repeating the Same Ideas](/blog/instagram-reels-content-plan) | `smm-planning.ts` | 1675 | 8 min read | 57 / 155 | 6 | 1 | after "Same idea, different Reel" (block 17 of 35) + after article | Instagram Reels content planning; Reels content calendar; Reels ideas for brands | Integrated (local, unpublished) |
| [How to Build a Monthly Social Media Content Calendar for a Growing Brand](/blog/monthly-social-media-content-calendar) | `smm-planning.ts` | 1798 | 9 min read | 59 / 160 | 7 | 0 | after "Planning video in the calendar" (block 19 of 36) + after article | monthly social media content calendar; social media content calendar template; social media calendar for brands | Integrated (local, unpublished) |
| [How to Manage Multiple Social Media Accounts for One Brand Without Spreading Your Team Thin](/blog/manage-multiple-social-media-accounts) | `smm-planning.ts` | 1553 | 8 min read | 56 / 157 | 8 | 3 | after "Scheduling and unified-inbox tools" (block 19 of 35) + after article | managing multiple social media platforms; manage multiple social media accounts; multi-platform social media management | Integrated (local, unpublished) |
| [Facebook Page Management for Businesses: A Practical Strategy for Consistent Growth](/blog/facebook-page-management-for-business) | `smm-platforms.ts` | 1878 | 9 min read | 51 / 152 | 8 | 8 | after "Community interactions and local communication" (block 21 of 38) + after article | Facebook page management for businesses; Facebook business page; Facebook page optimisation | Integrated (local, unpublished) |
| [LinkedIn Company Page Management: How B2B Brands Can Build a Consistent Presence](/blog/linkedin-company-page-management) | `smm-platforms.ts` | 1690 | 9 min read | 47 / 160 | 6 | 9 | after "Formats: documents, video, newsletters and events" (block 20 of 36) + after article | LinkedIn company page management; LinkedIn company page strategy; LinkedIn page optimisation | Integrated (local, unpublished) |
| [YouTube Channel Management for Brands: From Content Planning to Performance Reporting](/blog/youtube-channel-management-for-brands) | `smm-platforms.ts` | 1720 | 9 min read | 46 / 151 | 6 | 10 | after "Plan long-form videos and Shorts" (block 18 of 37) + after article | YouTube channel management for businesses; YouTube channel strategy for brands; YouTube for business | Integrated (local, unpublished) |
| [Pinterest Marketing Management for Brands: How to Build a Visual Content Strategy](/blog/pinterest-marketing-for-business) | `smm-platforms.ts` | 1599 | 8 min read | 51 / 159 | 6 | 8 | after "Visual search and product discovery" (block 17 of 32) + after article | Pinterest marketing for businesses; Pinterest business account; Pinterest strategy for brands | Integrated (local, unpublished) |
| [How to Turn Customer Questions, Reviews and Feedback Into Your Brand's Social Media Content](/blog/social-media-content-from-customer-questions) | `smm-creative.ts` | 1805 | 9 min read | 56 / 155 | 7 | 3 | after "Formats for your own channels" (block 22 of 43) + after article | social media content from customer questions; social media content ideas for brands; content from customer reviews | Integrated (local, unpublished) |
| [Social Media Graphic Design for Businesses: What Makes a Brand's Content Recognisable?](/blog/social-media-graphic-design-for-business) | `smm-creative.ts` | 1730 | 9 min read | 57 / 157 | 5 | 8 | after "Carousels, product and promotional creatives" (block 24 of 41) + after article | social media graphic design for business; social media design for brands; social media templates | Integrated (local, unpublished) |
| [How to Combine UGC, Brand Creatives and Product Videos in One Social Media Strategy](/blog/social-media-content-mix-ugc-brand-product) | `smm-creative.ts` | 1750 | 9 min read | 57 / 157 | 8 | 4 | after "Content mix planning table" (block 20 of 44) + after article | UGC social media strategy; social media content mix; UGC and brand content | Integrated (local, unpublished) |
| [Social Media Management for D2C Brands: Building a Consistent Content and Community Strategy](/blog/social-media-management-d2c-brands) | `smm-creative.ts` | 1839 | 9 min read | 47 / 151 | 8 | 2 | after "Launches, festive sales and drops" (block 23 of 42) + after article | social media management for D2C brands; social media strategy for D2C brands; D2C Instagram strategy | Integrated (local, unpublished) |
| [Social Media Marketing for Beauty and Skincare Brands: A Practical Content Strategy](/blog/social-media-marketing-beauty-skincare-brands) | `smm-industries.ts` | 1939 | 10 min read | 53 / 157 | 7 | 5 | after "Demonstrations, tutorials and before-and-after content" (block 17 of 34) + after article | social media marketing for beauty brands; skincare social media strategy; beauty brand Instagram strategy | Integrated (local, unpublished) |
| [Social Media Management for Fashion Brands: From Product Drops to Everyday Brand Storytelling](/blog/social-media-management-fashion-brands) | `smm-industries.ts` | 1739 | 9 min read | 42 / 157 | 8 | 0 | after "Collection launch: an example content sequence" (block 15 of 31) + after article | social media management for fashion brands; fashion brand social media strategy; fashion Instagram content ideas | Integrated (local, unpublished) |
| [Social Media Marketing for Restaurants and Cafés: How to Build a Local Digital Presence](/blog/social-media-marketing-restaurants-cafes) | `smm-industries.ts` | 1657 | 8 min read | 48 / 158 | 6 | 3 | after "Local discovery: location tags and Google Business Profile" (block 16 of 33) + after article | social media marketing for restaurants; restaurant social media strategy; cafe Instagram marketing | Integrated (local, unpublished) |
| [Social Media Management for SaaS Companies: Building Trust Through Educational and Product-Led Content](/blog/social-media-management-saas-companies) | `smm-industries.ts` | 1795 | 9 min read | 42 / 157 | 7 | 1 | after "Customer stories, only with permission" (block 16 of 33) + after article | social media management for SaaS companies; SaaS social media strategy; B2B SaaS LinkedIn strategy | Integrated (local, unpublished) |

Total: about 35,200 words. Each article has 4–6 FAQs, at least one table and checklist, common mistakes, practical recommendations and a conclusion. Required frameworks:
- monthly Instagram checklist (21)
- Reels content framework (22)
- seven-day Stories plan (23)
- five carousel frameworks (24)
- profile audit checklist (25)
- company page vs personal profile table (27)
- channel management vs production table (28)
- cross-platform adaptation matrix and tiering (30)
- 30-day calendar structure (31)
- feedback-to-content framework (32)
- 30-day Reels plan (33)
- creative consistency checklist (34)
- content-mix table (35)
- collection launch sequence (38)
- company page vs founder table (40)

## Files created

- `src/content/brand-guides/smm-instagram.ts` (21, 23, 24, 25)
- `src/content/brand-guides/smm-planning.ts` (22, 33, 31, 30)
- `src/content/brand-guides/smm-platforms.ts` (26, 27, 28, 29)
- `src/content/brand-guides/smm-creative.ts` (32, 34, 35, 36)
- `src/content/brand-guides/smm-industries.ts` (37, 38, 39, 40)
- 20 hero SVGs in `public/blog/brand-guides/` (2–3 KB each, house palette, diagrams only, no platform logos or fake UI)

## Files modified

| File | Change |
|---|---|
| `src/content/brand-guides/index.ts` | Imports and spreads the five new arrays |
| `src/lib/blogCta.ts` | 20 `BRAND_GUIDE_CTAS` entries (topic "Social Media Management"); all 80 headlines and bodies across both batches are unique |
| `src/content/services.ts` | SMM `guides` now lists 40 slugs, so the service page's Guides section shows both batches |
| `public/llms.txt` | Batch 02 guides added to the "Social Media Management Guides" section |

Category: the existing "Social Media Management" category is reused, so no new category is needed. Forms, API routes, email, environment, analytics, existing articles, URLs and redirects were not touched.

## Linking summary (from `10-internal-linking-report.csv`)

- 228 links: 95 to blog articles (32 of them to Batch 01 guides), 45 to services, and 88 external official references (rendered as plain text under the site's link policy).
- 20 links to the SMM page, each with a different anchor text, pointing to the main URL or one of 8 section anchors.
- Other service links:
  - UGC Content Production: 7
  - Campaign Strategy: 5
  - For Brands: 5
  - Creator Discovery: 4
  - Social Campaigns: 3
  - Product Launches: 1

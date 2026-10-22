# Implementation log: Search Console data batch (2026-10-22)

Branch `main`, working tree only. **Nothing committed, pushed or deployed.** Baseline metrics come from the Search Console export dated 2026-10-22 (period not stated in the file). Measure each change 28 days after deployment against these baselines, excluding `site:` and quoted queries.

## Batch 1: answer the queries the top pages were missing

| URL | What changed | Why (evidence) | Baseline (clicks / impressions / CTR / position) | Validation |
| --- | --- | --- | --- | --- |
| /blog/instagram-subscriptions | New section "Can you watch Instagram subscription content for free?" (no official free access; risks of third-party "free exclusive content" sites; check price, samples, cancel via App Store / Google Play) plus one FAQ. Links to the reupload-protection and impersonation guides. Title and description unchanged. | 70 viewer-intent queries ("instagram exclusive content free", "instagram subscription free website"...) bring 256 of the 689 query-level clicks. The page only addressed creators. | 719 / 15,151 / 4.75% / 6.31 | Section, FAQ (5 Qs in FAQPage JSON-LD) and both links render; 390 px: no overflow |
| /blog/instagram-reels-analytics | New section "What 1,000 views on a Reel actually tells you": plays vs people, account-relative benchmark, a worked example, and no per-view pay in India (linked to the monetization guide). Title unchanged. | "1000 views on instagram reels" is the top query (95 clicks, 1,076 impressions). | 132 / 2,844 / 4.64% / 7.26 | Renders; link to /blog/instagram-creator-monetization; 390 px: no overflow |
| /blog/creator-usage-rights | Title: "Creator Usage Rights: Ad Rights, Duration and Perpetual Use". New description. New table "Ad rights terms decoded" (organic, paid, 30/60/90-day, whitelisting, perpetual, buyout), a direct answer to "how long can brands use your content in paid ads", and a note that India's Copyright Act s.17(b) can give a commissioned film or photo to the commissioner unless agreed otherwise. | "how long can brands use creator content in paid ads" (146 impressions), "perpetual ad rights meaning", "ads right commercial for 30 days meaning", "what is ad rights". CTR 0.32% at 7.1. | 4 / 1,266 / 0.32% / 7.09 | Title 59 chars, description 157; table scrolls inside its container at 390 px |

## Batch 2: titles and descriptions that match the query wording

Content on these pages already answered the queries; the snippet did not say so.

| URL | Before | After | Evidence | Baseline |
| --- | --- | --- | --- | --- |
| /blog/instagram-creator-monetization | Instagram Monetization for Indian Creators: Every Option | Instagram Monetization in India: Requirements and Options. Description opens "Is Instagram monetization available in India? Yes: Gifts (500 followers), Subscriptions (10,000) and brand deals, but no view bonuses." | ~37 queries on availability/requirements in India ("instagram monetization requirements in india" 257 impressions at 5.3) | 49 / 5,933 / 0.83% / 4.79 |
| /blog/instagram-trial-reels | Instagram Trial Reels: How to Test Reels Before Posting | Instagram Trial Reels: Eligibility, Insights and Testing. Description leads with the 200 / 1,000 follower minimums. | Eligibility, minimum-follower and insights queries; CTR 0.23% vs site median 0.76% at positions 7-10 | 11 / 4,852 / 0.23% / 7.35 |
| /blog/instagram-gifts | Instagram Gifts for Creators: How They Work in India | Instagram Gifts on Reels: How Creators Earn From Stars. Description defines Gifts and Stars. | Definitional queries ("what is gifts in instagram", "instagram gift on reels") | 15 / 3,508 / 0.43% / 5.07 |
| /blog/instagram-partnership-ads | Instagram Partnership Ads: A Guide for Brands | What Are Instagram Partnership Ads? How They Work for Brands | "what is partnership ads in instagram"; CTR 0.15% at 9.0 | 2 / 1,356 / 0.15% / 8.99 |
| /blog/influencer-campaign-management | Influencer Campaign Management: Process and Services | Influencer Campaign Management: How It Works, Step by Step (description now about the 13 steps) | Competed with /services/outreach-management ("Outreach & Campaign Management Services"); "how to manage influencer campaigns" 151 impressions at 5.7 | 0 / 449 / 0% / 21.42 |
| /blog/influencer-marketing-travel-brands-india | Travel and Tourism Influencer Marketing: Destinations | Travel and Tourism Influencer Marketing: A Guide for Brands | Truncated-looking title; travel/tourism queries at 14-27 | 2 / 380 / 0.53% / 14.29 |
| /blog/how-to-contact-instagram-influencers | (no description; fell back to a vague excerpt) | Description added: DM vs email, first message, templates, discussing pay. Added a link to the outreach email guide. | Contact/email queries rank 20-49 across three pages | 1 / 335 / 0.30% / 28.58 |

## Batch 3: trust and internal links to commercial pages

| URL | Change | Why | Baseline |
| --- | --- | --- | --- |
| /blog/best-influencer-marketing-agencies-in-india | Added "Kudozz publishes this guide, which is why Kudozz is listed first." to the selection-method paragraph | The site's main commercial page (9,226 impressions) ranks its own publisher first; readers and quality raters should not have to infer that | 100 / 9,226 / 1.08% / 12.47 |
| /blog/instagram-influencer-rates-india | Link to /services/instagram-influencer-marketing after the budget framework | 4,363 impressions on a brand pricing page with no in-body service link | 50 / 4,363 / 1.15% / 7.53 |
| /blog/instagram-partnership-ads | One sentence on how Kudozz agrees paid usage and partnership-ad permissions in contracts, linking to the same service (supported by services.ts) | Same reason, 1,356 impressions | as above |
| /blog/what-is-ugc-marketing | Links to /services/ugc-content-production and /services/ugc-campaigns, with the difference between them | "ugc marketing" 232 impressions at 19.2; the page linked only to creator discovery | 0 / 325 / 0% / 17.13 |
| /blog/how-much-to-pay-influencers | Link to /services/paid-influencer-campaigns ("prices creators from current quotes rather than rate cards") | Brand reader pricing creators | 0 / 295 / 0% / 15.24 |
| /blog/influencer-marketing-agency-fees-india | Link to /services after the "What the agency fee should cover" table | Reader comparing agency proposals | 2 / 368 / 0.54% / 13.05 |
| public/llms.txt | Added Instagram Subscriptions and Instagram Gifts to the Instagram hub line | The two highest-impression creator guides were missing from the file | n/a |

## Deliberately not changed

- **Titles on the three best performers** (instagram-subscriptions 4.75% CTR, instagram-reels-analytics 4.64%, short-form-video-hooks 5.01%).
- **Homepage title and claim**: still an open owner decision.
- **instagram-insights-for-creators** (3,917 impressions, 0.23% CTR): most matching queries are automated help-centre lookups, and expanding it needs a check of the current Instagram UI, which couldn't be done here.
- **YouTube Shorts pages**: their impressions are mostly AI-style prompts with no clicks; a title change would be guesswork.
- **No `updatedAt` bumps**, per the existing rule that it's reserved for genuine revisions.
- **No redirects, noindex changes, new pages or deletions.**

## Validation run

| Check | Result |
| --- | --- |
| `tsc --noEmit` | pass (before and after) |
| `eslint` | 0 errors, 6 warnings (same 6 as before the batch) |
| `next build` | pass |
| Crawl of `next start` (1,022 URLs) | 985 × 200, 36 × 308 single-hop, 1 × 404 (never existed); 0 broken internal links; 0 links to redirects; all self-canonical; 0 noindex; 1 H1 everywhere; 0 JSON-LD parse errors; every live URL in the sitemap |
| Changed pages | Titles ≤ 60 characters, descriptions 134-159 characters, one mid-article CTA each, new links render as in-body anchors to the intended targets |
| Phone width (390 px, CDP device emulation) | No horizontal overflow on the 4 pages with new blocks |
| Forms, API routes, analytics | Not touched (diff limited to content files and llms.txt) |

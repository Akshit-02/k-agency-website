# 10 · Content Cannibalisation and Consolidation Report

Date: 2026-11-10. **Nothing was deleted, merged or redirected. Every consolidation below needs manual approval.**

## Method
1. **Content similarity:** every pair of the 961 articles was compared using MinHash estimates of 5-word-shingle Jaccard similarity (64 hashes). Pairs at 0.15 or above are listed, and 0.30 or above marks heavy shared text.
2. **Title intent:** SEO-title token overlap after removing stop words and generic terms such as "influencer", "marketing", "India" and "brands". Pairs at 0.6 or above are listed.
3. **Search Console:** page impressions are shown in brackets. The GSC export has no query×page dimension, so query-level cannibalisation is inferred from `05-query-to-url-mapping.csv`.

## Summary
| Issue | Count | Recommendation |
|---|---|---|
| Article pairs with ≥0.15 estimated text overlap | 125 | Mostly location listicles; see below |
| Pairs with ≥0.30 overlap | 50 | Nearly all are `best-<service>-agencies-in-<city>` variants |
| Title-intent overlaps (≥0.6) | 47 | Mostly parallel platform pages (X, Pinterest, Reddit or podcast "campaign ideas"/"metrics"); keep, with distinct angles |
| Specialist city listicles (UGC, Instagram, YouTube, campaign management, seeding × India + 5 cities) | 30 | 0 impressions; published 15–16 Oct 2026; heavy shared text. **Highest doorway-page risk on the site** |
| State and city "best influencer marketing agencies in …" pages | 34 | 15,576 impressions, of which 14,204 are the India page. Most states get 0–120 impressions. Keep, but stop adding more and improve local substance |

## 1. Location listicles: the main risk
- **The pattern:** 64 "best … agencies in …" pages. These are mostly the same list structure with a city or state swapped in, and Kudozz is listed first in every one.
- **Why it matters:** Google's spam policies treat near-duplicate location pages built to rank for each place as doorway pages. A scaled pattern can affect how the whole site is assessed, not just these URLs.

Recommended (approval needed):
1. **The 30 specialist city pages** (UGC, Instagram, YouTube, campaign management and seeding in Mumbai, Delhi, Bangalore, Chennai and Ahmedabad):
   - Option A: consolidate each service's six pages into its India page, with city sections, and 301 the city URLs.
   - Option B: keep them but add genuinely local substance (named local agencies verified from public information, city-specific creator and market notes) and `noindex` until that's done.
   - Recommendation: Option A, given 0 impressions and the overlap. Needs approval because it changes URLs and creates redirects.
2. **The 34 state and city pages:** keep. The India page is Kudozz's biggest commercial asset. Add a publisher disclosure line ("This guide is published by Kudozz, which is one of the agencies listed") to all 64 pages; see report 19.
3. **New location pages:** don't create any (brief rule: no location-swapped doorway pages).

## 2. Highest content-similarity pairs
| Page A (impressions) | Page B (impressions) | Est. Jaccard | Recommendation |
|---|---|---|---|
| /blog/best-influencer-seeding-agencies-in-delhi (0) | /blog/best-influencer-seeding-agencies-in-ahmedabad (0) | 0.53 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-bangalore (0) | /blog/best-influencer-campaign-management-agencies-in-chennai (0) | 0.5 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-mumbai (0) | /blog/best-influencer-seeding-agencies-in-bangalore (0) | 0.44 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-india (0) | /blog/best-youtube-influencer-marketing-agencies-in-mumbai (0) | 0.42 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-mumbai (0) | /blog/best-youtube-influencer-marketing-agencies-in-bangalore (0) | 0.42 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-chennai (0) | /blog/best-youtube-influencer-marketing-agencies-in-ahmedabad (0) | 0.42 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-india (0) | /blog/best-influencer-seeding-agencies-in-delhi (0) | 0.42 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-delhi (0) | /blog/best-influencer-seeding-agencies-in-bangalore (0) | 0.42 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-bangalore (0) | /blog/best-influencer-seeding-agencies-in-chennai (0) | 0.42 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-bangalore (0) | /blog/best-youtube-influencer-marketing-agencies-in-chennai (0) | 0.41 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-mumbai (0) | /blog/best-influencer-seeding-agencies-in-chennai (0) | 0.41 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-mumbai (0) | /blog/best-instagram-influencer-marketing-agencies-in-bangalore (0) | 0.39 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-mumbai (0) | /blog/best-influencer-campaign-management-agencies-in-delhi (0) | 0.39 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-delhi (0) | /blog/best-influencer-campaign-management-agencies-in-chennai (0) | 0.39 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-india (0) | /blog/best-influencer-seeding-agencies-in-ahmedabad (0) | 0.39 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-marketing-agencies-in-karnataka (121) | /blog/best-influencer-marketing-agencies-in-delhi (42) | 0.38 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-bangalore (0) | /blog/best-instagram-influencer-marketing-agencies-in-chennai (0) | 0.38 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-mumbai (0) | /blog/best-influencer-campaign-management-agencies-in-chennai (0) | 0.38 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-chennai (0) | /blog/best-influencer-campaign-management-agencies-in-ahmedabad (0) | 0.38 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-chennai (0) | /blog/best-influencer-seeding-agencies-in-ahmedabad (0) | 0.38 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-marketing-agencies-in-gujarat (0) | /blog/best-influencer-marketing-agencies-in-ahmedabad (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-ugc-marketing-agencies-in-mumbai (0) | /blog/best-ugc-marketing-agencies-in-chennai (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-ugc-marketing-agencies-in-bangalore (0) | /blog/best-ugc-marketing-agencies-in-chennai (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-india (0) | /blog/best-youtube-influencer-marketing-agencies-in-bangalore (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-mumbai (0) | /blog/best-influencer-campaign-management-agencies-in-bangalore (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-delhi (0) | /blog/best-influencer-campaign-management-agencies-in-bangalore (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-delhi (0) | /blog/best-influencer-campaign-management-agencies-in-ahmedabad (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-mumbai (0) | /blog/best-influencer-seeding-agencies-in-delhi (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-bangalore (0) | /blog/best-influencer-seeding-agencies-in-ahmedabad (0) | 0.36 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-marketing-agencies-in-maharashtra (0) | /blog/best-influencer-marketing-agencies-in-mumbai (0) | 0.34 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-mumbai (0) | /blog/best-instagram-influencer-marketing-agencies-in-delhi (0) | 0.34 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-delhi (0) | /blog/best-youtube-influencer-marketing-agencies-in-bangalore (0) | 0.34 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-bangalore (0) | /blog/best-youtube-influencer-marketing-agencies-in-ahmedabad (0) | 0.34 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-india (0) | /blog/best-influencer-seeding-agencies-in-bangalore (0) | 0.34 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-india (0) | /blog/best-instagram-influencer-marketing-agencies-in-mumbai (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-bangalore (0) | /blog/best-instagram-influencer-marketing-agencies-in-ahmedabad (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-india (0) | /blog/best-youtube-influencer-marketing-agencies-in-delhi (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-mumbai (0) | /blog/best-youtube-influencer-marketing-agencies-in-delhi (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-delhi (0) | /blog/best-youtube-influencer-marketing-agencies-in-chennai (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-delhi (0) | /blog/best-youtube-influencer-marketing-agencies-in-ahmedabad (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-india (0) | /blog/best-influencer-campaign-management-agencies-in-delhi (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-delhi (0) | /blog/best-influencer-seeding-agencies-in-chennai (0) | 0.33 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-marketing-agencies-in-gujarat (0) | /blog/best-influencer-marketing-agencies-in-karnataka (121) | 0.31 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-ugc-marketing-agencies-in-bangalore (0) | /blog/best-ugc-marketing-agencies-in-ahmedabad (0) | 0.31 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-mumbai (0) | /blog/best-influencer-campaign-management-agencies-in-ahmedabad (0) | 0.31 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-bangalore (0) | /blog/best-influencer-campaign-management-agencies-in-ahmedabad (0) | 0.31 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-india (0) | /blog/best-influencer-seeding-agencies-in-mumbai (0) | 0.31 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-campaign-management-agencies-in-india (0) | /blog/best-influencer-campaign-management-agencies-in-mumbai (0) | 0.3 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-seeding-agencies-in-mumbai (0) | /blog/best-influencer-seeding-agencies-in-ahmedabad (0) | 0.3 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-marketing-agencies-in-mizoram (0) | /blog/best-influencer-marketing-agencies-in-manipur (94) | 0.3 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-marketing-agencies-in-karnataka (121) | /blog/best-influencer-marketing-agencies-in-ahmedabad (0) | 0.28 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-mumbai (0) | /blog/best-instagram-influencer-marketing-agencies-in-chennai (0) | 0.28 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-delhi (0) | /blog/best-instagram-influencer-marketing-agencies-in-bangalore (0) | 0.28 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-youtube-influencer-marketing-agencies-in-india (0) | /blog/best-youtube-influencer-marketing-agencies-in-chennai (0) | 0.28 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-influencer-marketing-agencies-in-gujarat (0) | /blog/best-influencer-marketing-agencies-in-delhi (42) | 0.27 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-ugc-marketing-agencies-in-mumbai (0) | /blog/best-ugc-marketing-agencies-in-bangalore (0) | 0.27 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-mumbai (0) | /blog/best-instagram-influencer-marketing-agencies-in-ahmedabad (0) | 0.27 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-delhi (0) | /blog/best-instagram-influencer-marketing-agencies-in-chennai (0) | 0.27 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-delhi (0) | /blog/best-instagram-influencer-marketing-agencies-in-ahmedabad (0) | 0.27 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |
| /blog/best-instagram-influencer-marketing-agencies-in-chennai (0) | /blog/best-instagram-influencer-marketing-agencies-in-ahmedabad (0) | 0.27 | Consolidate (manual approval): city variants of the same listicle share boilerplate; keep the India page, fold city specifics into it or rewrite each with genuinely local content |

## 3. Title-intent overlaps
| Page A (impressions) | Page B (impressions) | Title overlap | Recommendation |
|---|---|---|---|
| /blog/linkedin-influencer-marketing-india (7) | /blog/linkedin-creator-marketing (9) | 1 | Consolidate candidate: identical title intent; keep the higher-impression page as the target and make the other a distinct angle |
| /blog/instagram-creator-marketplace (1336) | /blog/creator-marketplace (267) | 0.75 | Keep both: platform-specific vs generic; ensure generic page links to the Instagram one |
| /blog/podcast-influencer-marketing-metrics (41) | /blog/x-influencer-marketing-metrics (66) | 0.71 | Reposition intent + cross-link |
| /blog/youtube-live-monetization (452) | /blog/youtube-creator-monetization (677) | 0.67 | Reposition intent + cross-link |
| /blog/best-influencer-campaign-management-agencies-in-india (0) | /blog/best-influencer-campaign-management-agencies-in-mumbai (0) | 0.67 | Reposition intent + cross-link |
| /blog/best-influencer-campaign-management-agencies-in-india (0) | /blog/best-influencer-campaign-management-agencies-in-bangalore (0) | 0.67 | Reposition intent + cross-link |
| /blog/best-influencer-campaign-management-agencies-in-india (0) | /blog/best-influencer-campaign-management-agencies-in-chennai (0) | 0.67 | Reposition intent + cross-link |
| /blog/best-influencer-campaign-management-agencies-in-india (0) | /blog/best-influencer-campaign-management-agencies-in-ahmedabad (0) | 0.67 | Reposition intent + cross-link |
| /blog/influencer-marketing-healthcare-wellness-uae (0) | /blog/influencer-marketing-healthcare-brands-india (30) | 0.67 | Reposition intent + cross-link |
| /blog/influencer-marketing-saudi-arabia (0) | /blog/choose-influencer-marketing-agency-saudi-arabia (0) | 0.67 | Reposition intent + cross-link |
| /blog/influencer-marketing-saudi-arabia (0) | /blog/tiktok-influencer-marketing-saudi-arabia (0) | 0.67 | Reposition intent + cross-link |
| /blog/influencer-marketing-saudi-arabia (0) | /blog/influencer-marketing-beauty-brands-saudi-arabia (0) | 0.67 | Reposition intent + cross-link |
| /blog/influencer-marketing-saudi-arabia (0) | /blog/youtube-influencer-marketing-saudi-arabia (0) | 0.67 | Reposition intent + cross-link |
| /blog/ecommerce-influencer-marketing-australia (0) | /blog/influencer-marketing-ecommerce-brands-india (4) | 0.67 | Reposition intent + cross-link |
| /blog/food-beverage-influencer-marketing-australia (0) | /blog/influencer-marketing-food-brands-india (59) | 0.67 | Reposition intent + cross-link |
| /blog/gaming-esports-influencer-marketing-australia (0) | /blog/gaming-influencer-marketing-india (247) | 0.67 | Reposition intent + cross-link |
| /blog/podcast-influencer-marketing-campaign-ideas (13) | /blog/reddit-influencer-marketing-campaign-ideas (37) | 0.67 | Reposition intent + cross-link |
| /blog/x-vs-linkedin-b2b-creator-marketing (4) | /blog/linkedin-influencer-marketing-india (7) | 0.67 | Reposition intent + cross-link |
| /blog/x-vs-linkedin-b2b-creator-marketing (4) | /blog/linkedin-creator-marketing (9) | 0.67 | Reposition intent + cross-link |
| /blog/x-influencer-marketing-b2b-brands (9) | /blog/x-creator-marketing (109) | 0.67 | Reposition intent + cross-link |
| /blog/x-video-marketing-with-creators (56) | /blog/x-creator-marketing (109) | 0.67 | Reposition intent + cross-link |
| /blog/x-influencer-marketing-india (177) | /blog/x-creator-marketing (109) | 0.67 | Reposition intent + cross-link |
| /blog/how-to-find-x-influencers (71) | /blog/find-indian-influencers (40) | 0.67 | Reposition intent + cross-link |
| /blog/youtube-influencer-marketing-campaign-ideas (0) | /blog/pinterest-influencer-marketing-campaign-ideas (23) | 0.67 | Reposition intent + cross-link |
| /blog/how-to-find-youtube-influencers (70) | /blog/find-indian-influencers (40) | 0.67 | Reposition intent + cross-link |
| /blog/instagram-influencer-marketing-ecommerce (58) | /blog/influencer-marketing-ecommerce-brands-india (4) | 0.67 | Reposition intent + cross-link |
| /blog/how-to-find-instagram-influencers (292) | /blog/find-indian-influencers (40) | 0.67 | Reposition intent + cross-link |
| /blog/micro-influencers-india (33) | /blog/influencer-marketing-ecommerce-brands-india (4) | 0.67 | Reposition intent + cross-link |
| /blog/find-indian-influencers (40) | /blog/how-to-find-snapchat-influencers (129) | 0.67 | Reposition intent + cross-link |
| /blog/find-indian-influencers (40) | /blog/how-to-find-reddit-influencers (269) | 0.67 | Reposition intent + cross-link |
| /blog/reddit-influencer-marketing-india (59) | /blog/reddit-community-building-for-brands (36) | 0.67 | Reposition intent + cross-link |
| /blog/influencer-performance-data (0) | /blog/influencer-benchmarking (0) | 0.6 | Reposition intent + cross-link |
| /blog/instagram-vs-youtube-vs-tiktok (0) | /blog/instagram-tiktok-youtube-influencer-marketing-australia (0) | 0.6 | Reposition intent + cross-link |
| /blog/influencer-affiliate-marketing-uae-saudi-arabia (0) | /blog/automotive-influencer-marketing-uae-saudi-arabia (0) | 0.6 | Reposition intent + cross-link |
| /blog/influencer-affiliate-marketing-uae-saudi-arabia (0) | /blog/fmcg-influencer-marketing-uae-saudi-arabia (0) | 0.6 | Reposition intent + cross-link |
| /blog/automotive-influencer-marketing-uae-saudi-arabia (0) | /blog/fmcg-influencer-marketing-uae-saudi-arabia (0) | 0.6 | Reposition intent + cross-link |
| /blog/x-influencer-marketing-roi (20) | /blog/youtube-influencer-marketing-roi (21) | 0.6 | Reposition intent + cross-link |
| /blog/x-influencer-marketing-roi (20) | /blog/measure-linkedin-influencer-marketing-roi (31) | 0.6 | Reposition intent + cross-link |
| /blog/x-influencer-marketing-roi (20) | /blog/measure-snapchat-influencer-marketing-roi (32) | 0.6 | Reposition intent + cross-link |
| /blog/x-influencer-marketing-roi (20) | /blog/measure-pinterest-influencer-marketing-roi (45) | 0.6 | Reposition intent + cross-link |
| /blog/youtube-influencer-marketing-roi (21) | /blog/measure-linkedin-influencer-marketing-roi (31) | 0.6 | Reposition intent + cross-link |
| /blog/youtube-influencer-marketing-roi (21) | /blog/measure-snapchat-influencer-marketing-roi (32) | 0.6 | Reposition intent + cross-link |
| /blog/youtube-influencer-marketing-roi (21) | /blog/measure-pinterest-influencer-marketing-roi (45) | 0.6 | Reposition intent + cross-link |
| /blog/ugc-content-cost-india (160) | /blog/influencer-marketing-cost-india (158) | 0.6 | Reposition intent + cross-link |
| /blog/measure-linkedin-influencer-marketing-roi (31) | /blog/measure-snapchat-influencer-marketing-roi (32) | 0.6 | Reposition intent + cross-link |
| /blog/measure-linkedin-influencer-marketing-roi (31) | /blog/measure-pinterest-influencer-marketing-roi (45) | 0.6 | Reposition intent + cross-link |
| /blog/measure-snapchat-influencer-marketing-roi (32) | /blog/measure-pinterest-influencer-marketing-roi (45) | 0.6 | Reposition intent + cross-link |

## 4. Blog vs core-page competition
| Query or intent | Competing URLs | Recommendation |
|---|---|---|
| influencer marketing agency / best influencer marketing agency in India | `/`, `/for-brands`, `/services`, `/blog/best-influencer-marketing-agencies-in-india` | The listicle wins (inferred). Keep the homepage on the brand name plus "influencer marketing agency in India", and link prominently from the listicle's Kudozz entry to `/for-brands` and `/services`. Don't retitle the listicle |
| UGC agency | `/services/ugc-campaigns`, `/services/ugc-content-production`, `best-ugc-marketing-agencies-*`, `ugc-agency-vs-direct-creators` | Two service pages split "programme" and "production"; keep both, and make the UGC listicle and blog posts link to the right one. Avoid the bare "UGC agency India" keyword (it matches the University Grants Commission) |
| Market head terms (e.g., "influencer marketing agency Dubai") | `/markets/uae`, `/blog/best-influencer-marketing-agencies-dubai` (if present), `choose-influencer-marketing-agency-uae` and other UAE guides | The market page should be the commercial target; guides link to it with descriptive anchors |
| Instagram Reels insights | `instagram-insights-for-creators`, `instagram-reels-analytics` | Intents separated in Creator Batch 01; monitor |
| YouTube Shorts | `youtube-shorts-content-strategy`, `youtube-shorts-vs-long-form` | Intents separated in Creator Batch 02; monitor |
| LinkedIn creator marketing (brand side) | `linkedin-influencer-marketing-india`, `linkedin-creator-marketing`, `/services/linkedin-influencer-marketing` | Consolidation candidate (identical title intent) |

## 5. Brand vs creator content
- The CTA system already separates the audiences:
  - Creator Resources articles → creator application.
  - Brand articles → service page or brand inquiry.
- No brand article carries a creator CTA, and no creator article carries a brand CTA (checked in the crawl: every blog page has CTA links to one destination type only).
- **Remaining overlap:** creator-side and brand-side pages on the same platform feature, such as YouTube Creator Partnerships, target different readers. The slugs and titles already differ (`youtube-creator-partnerships-india` vs `youtube-creator-partnerships`). Keep both.

# 02 — Existing content overlap audit

Checked 25 Nov 2026 against all 1,069 published posts (`blogPosts`) by slug, title and intent, plus the Search Console export in `gscReport/` (Pages and Queries, 5 Sep – 17 Nov 2026). No search-volume or difficulty figures are quoted: none were available, and none were estimated.

## Decision (approved by the site owner on 25 Nov 2026)

**Upgrade on the existing URL** wherever an article with the same search intent already exists; **publish a new URL** only where the angle is genuinely distinct. Result: **9 upgrades + 11 new URLs = 20 articles.**

Why upgrading wins here:

- Two requested slugs already existed (`how-to-find-instagram-influencers`, `how-to-find-ugc-creators`). A second URL was impossible without breaking the existing one.
- Several of the overlapping URLs already rank (see GSC below). Rewriting them keeps that equity; a new competing URL would split it.
- Posts published after 3 Oct 2026 have mostly not been surfacing in Google (see `reports/claude-seo-kudozz/`). Upgrading older, already-indexed URLs avoids depending on fresh-URL indexing for 9 of the 20 topics.

## Topic-by-topic

| # | Requested topic / slug | Existing overlap | GSC (impr. / avg pos., 5 Sep–17 Nov) | Risk | Decision |
| --- | --- | --- | --- | --- | --- |
| 1 | how-to-find-influencers-for-your-brand-in-india | `find-indian-influencers` "How to Find the Right Indian Influencers for Your Brand" (6 Sep) | 49 / 7.6 | Same intent | **Upgrade** `find-indian-influencers` |
| 2 | best-influencer-discovery-tools-india | `creator-discovery-platform` (criteria), `influencer-search-tools` | — | Partial | **New**: named-tool comparison is a distinct intent ("best … tools") |
| 3 | how-to-find-instagram-influencers | **Same slug exists** (12 Sep) | 293 / 39.1 | Identical | **Upgrade** same URL |
| 4 | how-to-find-micro-influencers | `nano-vs-micro-influencers` (tier choice), `micro-influencers-india` (scaling a network) | 104 / 19.9; 38 / 25.3 | Adjacent | **New**: "how to find" intent; links to both |
| 5 | influencer-discovery-platform-guide | `creator-discovery-platform` "Creator Discovery Platforms: How Brands Should Compare…" (30 Sep) | 138 / 5.8 | Same intent | **Upgrade** `creator-discovery-platform` |
| 6 | how-to-build-an-influencer-database | `influencer-database` "Influencer Database: How Brands Can Build and Maintain…" (7 Oct) | 130 / 41.9 | Same intent | **Upgrade** `influencer-database` |
| 7 | how-to-research-influencers | `how-to-vet-influencers` (authenticity/fraud) | 71 / 29.5 | Adjacent | **New**: pre-outreach research, links to vetting |
| 8 | how-to-shortlist-influencers | `influencer-shortlist` "Influencer Shortlisting: How Brands Can Build a Data-Driven Creator Shortlist" (30 Sep) | 9 / 4.6 | Same intent | **Upgrade** `influencer-shortlist` |
| 9 | things-to-check-before-selecting-influencers | `how-to-choose-the-right-influencer-for-your-brand`, `how-to-vet-influencers`, `creator-quality-score` | 3 / 2.3 | Adjacent | **New**: 15-point evaluation listicle; distinct format and intent |
| 10 | find-influencers-by-niche-location | `influencer-search-tools` "Influencer Search Tools: How Brands Can Find Creators by Niche, Audience and Location" (7 Oct) | 203 / 23.1 | Same intent | **Upgrade** `influencer-search-tools` |
| 11 | how-to-find-ugc-creators | **Same slug exists** (11 Sep) | not in top pages | Identical | **Upgrade** same URL |
| 12 | influencer-discovery-for-d2c-brands | `instagram-creator-marketing-d2c-brands` (strategy), `influencer-marketing-agency-d2c-brands` (agency) | — | Adjacent | **New**: discovery angle for D2C |
| 13 | how-to-find-influencers-for-product-launch | `influencers-for-product-launch` "Influencer Marketing for New Product Launches" (29 Sep, 1,825 words) | 363 / 8.1 (query "i need influencers for a product launch": 164 impr / pos 5.4) | Same intent | **Upgrade** `influencers-for-product-launch` |
| 14 | find-beauty-skincare-influencers-india | `influencer-marketing-beauty-brands-india` (strategy), `ugc-beauty-skincare` | 60 / 9.3 | Adjacent | **New**: finding creators, not campaign strategy |
| 15 | find-fashion-lifestyle-influencers | `influencer-marketing-fashion-brands-india` (strategy) | 132 / 15.8 | Adjacent | **New**: finding creators, not campaign strategy |
| 16 | how-to-find-local-influencers | `influencer-marketing-tier-2-tier-3-cities`, `regional-influencer-marketing-india` | — | Adjacent | **New**: local businesses / city-level discovery |
| 17 | influencer-discovery-vs-manual-research | `ai-influencer-discovery` | — | Low | **New** |
| 18 | how-to-find-youtube-creators | `how-to-find-youtube-influencers` "How to Find YouTube Influencers for Your Brand" (12 Sep) | 75 / 50.4 | Same intent | **Upgrade** `how-to-find-youtube-influencers` |
| 19 | how-to-create-influencer-outreach-list | `how-to-contact-influencers` (messaging), `influencer-outreach-strategy` (strategy) | 343 / 50.4; 155 / 19.0 | Adjacent | **New**: list-building workflow; links to both |
| 20 | influencer-discovery-checklist | `influencer-campaign-checklist` (whole campaign) | 53 / 8.0 | Low | **New**: discovery-stage checklist only |

## How the upgrades were done

- Slug and original `publishedAt` kept; `updatedAt: 2026-11-25` and `lastReviewed: November 2026` set (the sitemap `lastModified` follows `updatedAt`).
- Old entry removed from its source file (`content/blog.ts`, `creator-economy/marketplaces.ts`, `brand-guides/technology-operations.ts`, `brand-guides/campaign-planning.ts`, `brand-guides/technology-tools.ts`) and replaced by the rewritten entry in `src/content/discovery-guides/`. Every slug-based reference elsewhere (related lists, service guides, CTA copy) keeps working because the slug is unchanged. The removed entries are archived in the QA notes for reference.
- Titles were refined toward the brief's primary keyword while keeping the old core term (e.g. `influencer-search-tools` now leads with "How to Find Influencers Based on Niche, Location and Audience Relevance").

## Remaining adjacency to watch

New posts sit next to existing ones with related but different intent (#4, #7, #9, #12, #14, #15, #16, #19). Each new post links to its neighbour with descriptive anchors to signal the split. If GSC later shows two URLs swapping for the same query, merge the weaker one into the stronger with a 301.

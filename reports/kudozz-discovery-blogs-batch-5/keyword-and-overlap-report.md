# Keyword and overlap report: batch 5 (blogs 81–100)

## Keyword research summary
- **Sources used:**
  - the GSC export in `gscReport/` (Pages.csv, last 3 months to 3 Nov 2026, page level only)
  - the full blog inventory, loaded from `blogPosts`: 1,107 posts before this batch, 142 of them noindexed
  - batches 1–4 reports and memory
  - topic understanding from how Indian brand teams phrase creator-evaluation problems
- **Not available:** keyword tools (no DataForSEO, Ahrefs or Semrush connection). No volumes, difficulty scores or ranking estimates are given anywhere, as the brief requires.
- **Intent:** almost every topic is informational/how-to evaluation intent: "how to check / evaluate / research X before hiring an influencer". The searchers are brand marketers mid-way through vetting. That suits Kudozz Discovery only for its real role: building the Instagram shortlist that gets evaluated. Each article shows the manual or creator-provided step for data Discovery doesn't have.
- **Keyword split inside the batch:**
  - Audience topics are split by dimension: demographics (#82), location (#83) and overlap (#84).
  - Content topics are split the same way: consistency (#85), storytelling (#89) and format fit (#90). Each is a spoke of the existing hub `/blog/influencer-content-analysis-guide` (Discovery #43), which now links to #85 and #89.
  - Documents are split by audience: the sourcing brief (#99, internal) vs the campaign brief (#48, sent to creators) vs the sourcing workflow (#25, process).
  - The scorecard (#81, pre-hire) vs creator-performance-scorecard (post-campaign) vs influencer-ranking (#44, comparing a final shortlist).

## Existing content overlap findings

| # | Proposed topic | Closest existing content | GSC impr. (3 mo) | Decision |
|---|---|---|---|---|
| 81 | Evaluation scorecard | /blog/creator-quality-score ("Creator Quality Score: … Beyond Follower Count"); also creator-performance-scorecard, influencer-ranking (#44) | 65 / 25 / 0 | **Upgraded** creator-quality-score into the pre-hire scorecard. performance-scorecard and #44 were left alone and are linked as the post-campaign and ranking steps |
| 82 | Audience demographics | find-influencers-matching-target-audience (#21) covers ICP matching with one "ask for proof" step; influencer-audience-quality covers fake/real | 0 / 38 | **New** deep-dive; #21 now links to it |
| 83 | Audience location | Location sections inside influencer-search-tools (#4) and how-to-find-local-influencers (#5) | – | **New**; #4 now links to it |
| 84 | Audience overlap | /blog/influencer-audience-overlap (same intent; GCC guide file) | 29 | **Upgraded** (India focus; short small-market note kept) |
| 85 | Content consistency | Lens 4 of influencer-content-analysis-guide (#43) | – | **New** spoke; #43 links to it |
| 86 | Previous collaborations | competitor-influencers (maps competitors' creators; different job) | – | **New** |
| 87 | Brand safety check | /blog/influencer-marketing-brand-safety (same intent); how-to-vet-influencers (full vetting) | 85 / 71 | **Upgraded** brand-safety into the pre-hire check; how-to-vet left alone |
| 88 | Exclusivity check | /blog/influencer-exclusivity (noindexed low-demand page, brand side); creator-exclusivity (creator side) | 0 | **Upgraded** and **removed from `noindex.ts`**, per the file's own restore rule. `#multi-brand` anchor kept |
| 89 | Storytelling evaluation | Lens 3 of #43; creator-led-campaigns (building campaigns); creator-storytelling (creator side) | 27 (creator-led) | **New** spoke; #43 links to it |
| 90 | Reels / Stories / YouTube creator choice | instagram-vs-youtube-vs-tiktok (platform choice), multi-platform-influencer-campaigns (management), per-format finding guides | 256 (multi-platform) | **New**: the decision between formats for creator selection |
| 91 | Shortlist size | /blog/how-many-influencers-for-a-campaign (final count); influencer-shortlist (#17, process) | 7 / 9 | **Upgraded** how-many to cover shortlist size plus final count, keeping the old intent |
| 92 | Balanced influencer mix | /blog/select-influencer-mix-for-campaign (**Discovery #53**, written 25 Nov: roles, tiers, objective shifts, small budget, worked example); nano-vs-micro-influencers | – | **Excluded: cannibalisation.** On review, #53 already has an objective-by-role table, so nothing was added beyond a paragraph linking its overlap and backup checks to #84 and #91. Also linked from #84, #90, #91 and #99 |
| 93 | Product testing creators | influencer-product-seeding-program (#35, organic posts from gifting); creator-feedback-loop (post-campaign insights) | 97 / 9 | **New**: private testing panels. #35 now links to it |
| 94 | Creators for brand events | experiential-influencer-marketing (event content plan); event-influencer-marketing-india (for event-organiser businesses) | 83 / 67 | **New**, sourcing angle only; both are linked and the difference is stated in the intro. Moderate overlap risk with experiential; watch GSC |
| 95 | Local creators for store openings | /blog/store-opening-influencer-campaign (same intent); how-to-find-local-influencers (#5) | 0 (published 5 Nov) | **Upgraded**; #5 now links to it |
| 96 | Affiliate creators | /blog/influencer-affiliate-program (**767 impressions**, the cluster's strongest page); instagram-influencer-affiliate-marketing (179); influencer-marketing-vs-affiliate-marketing | 767 | **Excluded as a URL; done as a section instead.** A new URL would compete with the best-performing page, and rewriting it risks its rankings. Added an H3 "Which creators suit commission-based work" under its existing "Recruiting the right affiliates" section. It covers category fit, recommendation credibility, formats that carry intent, hybrid vs flat fee and the limits of attribution, and links to #86 and find-influencers-by-content-niche. No H2s or ids changed |
| 97 | Subject-matter experts | /blog/expert-creator-marketing (noindexed, same intent) | 0 | **Upgraded** and **removed from `noindex.ts`** |
| 98 | Cross-platform comparison | multi-platform-influencer-campaigns (management), instagram-vs-youtube-vs-tiktok (platform choice) | 256 | **New**: comparing one creator's profiles |
| 99 | Sourcing brief | influencer-sourcing-workflow (#25, has an intake-form section); influencer-campaign-brief (#48) | 0 / 23 | **New** template article; #25 now links to it |
| 100 | 25-question discovery checklist | /blog/influencer-discovery-checklist (**Discovery #20**, a stage-based checklist from 25 Nov) | 0 | **Upgraded** #20 into the 25-question reference, keeping its URL and publish date |

**Totals:** 10 new · 8 upgraded (2 of them restored from noindex) · 2 excluded.

### Updated instead of duplicated
creator-quality-score, influencer-audience-overlap, influencer-marketing-brand-safety, influencer-exclusivity, how-many-influencers-for-a-campaign, store-opening-influencer-campaign, expert-creator-marketing, influencer-discovery-checklist. Each old object was removed from its original file, so each slug is defined once. The original `publishedAt` is kept and `updatedAt` is 2026-11-27. Writers carried over accurate specifics: ASCI/SEBI/NMC/Bar Council rules, s.27 Contract Act and Percept D'Mark v Zaheer Khan, the catchment and sequence logic, the four-counts model, and the unique-reach maths. They dropped GCC-specific sections and unverifiable claims, including the old #20's "filters stay in the URL" claim, which isn't in the verified product facts.

## Internal linking opportunities
- **Added in this batch:** links from existing posts to the new URLs:
  - #43 content-analysis → #85, #89
  - #21 target-audience → #82
  - #25 sourcing-workflow → #99
  - #4 influencer-search-tools → #83
  - #5 local influencers → #95
  - #35 seeding → #93
- **Added in the follow-up pass (27 Nov):**
  - how-to-vet-influencers → #86
  - competitor-influencers → #88
  - experiential-influencer-marketing → #94
  - multi-platform-influencer-campaigns → #98
  - select-influencer-mix-for-campaign (#53) → #84, #91
  - influencer-affiliate-program → #86
  - creator-performance-scorecard already linked to creator-quality-score (#81), so no change was needed.

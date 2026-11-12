# 10 — Top 10 Blog Recommendations (Initial Batch)

From the 60-topic roadmap (`09-social-media-blog-roadmap.csv`): 42 CREATE, 1 UPDATE candidate, 9 MERGE (folded into stronger topics), 4 SKIP (already covered), 4 HOLD (international, pending delivery confirmation). **No articles were written or published in this project.**

## Why these ten

GSC shows Kudozz has **zero** social-media-management visibility today, so the first batch must (a) build topical depth around the new service page, (b) catch commercial-investigation searches close to an enquiry, and (c) lean on the influencer + UGC differentiator that generic SMM agencies can't match. Every pick was checked against existing slugs for overlap.

| # | ID | Working title | Primary keyword | Why now | Overlap handled |
|---|---|---|---|---|---|
| 1 | SMM-13 | How Much Does Social Media Management Cost in India? | social media management cost india | Highest commercial intent; SERP is agency pricing pages with inconsistent, self-published ranges, so an honest cost-drivers guide can stand out | None. **Needs approval** on whether to show Kudozz ranges |
| 2 | SMM-30 | How to Combine Influencer Marketing With an Organic Instagram Strategy | influencer marketing and organic social | Kudozz's core differentiator; links influencer and SMM pages | Creator-side `creator-content-mix-sponsored-organic` is a different audience |
| 3 | SMM-12 | In-House Social Media Manager vs Social Media Agency | in-house social media manager vs agency | Decision-stage comparison | `hire-social-media-manager-creator` is creator-side |
| 4 | SMM-11 | What Does a Social Media Management Agency Actually Do? | what does a social media management agency do | Definition piece; answer-engine friendly; mirrors service scope | None |
| 5 | SMM-01 | How to Build a Social Media Strategy for Your Business in 2027 | social media strategy for business | Cluster pillar; absorbs SMM-04 and SMM-09 | Creator content-pillars guide is separate |
| 6 | SMM-15 | Monthly Social Media Content Calendar for Brands (with template) | social media content calendar template | Linkable tool; absorbs SMM-24 | `creator-content-calendar` is creator-side |
| 7 | SMM-48 | How UGC Can Support a Brand's Organic Social Media Strategy | ugc for organic social media | Bridges UGC and SMM; existing UGC cluster is ad-focused | Cross-link `ugc-marketing-d2c-brands`, `repurpose-influencer-content` |
| 8 | SMM-21 | Instagram Marketing Strategy for D2C Brands in 2027 | instagram marketing strategy d2c | D2C is Kudozz's core segment | `instagram-creator-marketing-d2c-brands` is influencer-led |
| 9 | SMM-05 | Social Media Audit Checklist for Brands | social media audit checklist | Practical, links to the strategy capability; can reuse the checklist component | Absorbs SMM-18 |
| 10 | SMM-22 | How to Plan Instagram Reels for a Business | instagram reels for business | Reels is the most asked-about capability | `reels-content-strategy` (creator) and `instagram-reels-influencer-marketing` (influencer) are different intents |

**Batch 2 candidates:** SMM-10 (when to hire), SMM-20 (choosing a partner), SMM-02 (choosing platforms), SMM-31 (LinkedIn company page strategy), SMM-44 (one product, 20 ideas), SMM-49 (community management).

## Publishing requirements for every article

1. **CTAs:** the existing two-CTA system applies automatically (mid-article after substantive content, one near the conclusion; never straight after the intro). A new matcher in `src/lib/blogCta.ts` routes brand-side SMM slugs to `/services/social-media-management` for the mid CTA and the brand inquiry for the bottom CTA. Tested against the roadmap: 7 of the top 10 slugs match the pattern (SMM-01, 05, 11, 12, 13, 15, 30). **SMM-21, SMM-22 and SMM-48 do not** (their slugs start with `instagram-` / `ugc-`, which would otherwise route to influencer or UGC CTAs), so each needs an explicit entry in `BRAND_GUIDE_CTAS` with `midPath: S("social-media-management")` when written. Pattern-matching slugs: `social-media-strategy-*`, `social-media-audit-*`, `social-media-content-calendar-*`, `social-media-management-*`, `*-manager-vs-agency`, `community-management-*`, `social-media-analytics-*`, `social-media-performance-report-*`.
2. **Category:** add `"Social Media Management"` to the `BlogCategory` union when the first article ships (not added now, to avoid an empty category in the blog filter).
3. **Platform facts:** verify against official help centres (Instagram/Meta, YouTube, LinkedIn) on the day of writing, and date the claim. Do not state limits (lengths, counts) without a source.
4. **No invented statistics.** Third-party pricing ranges must be attributed and called estimates.
5. **Indian English, practical steps, at least one table or checklist**, links to the relevant SMM page anchor (`#strategy`, `#content-planning`, `#reels-short-form-video`, `#community-management`, `#analytics-reporting`).
6. **Cross-link** to the creator-side twin where one exists, so the two intents stay separate rather than competing.
7. Add each published SMM article slug to the SMM entry's `guides` array in `src/content/services.ts` if a "Guides on this topic" block is later added to the SMM page.

## Existing content to update instead of creating new

- `/blog/employee-influencer-marketing`, `/blog/linkedin-thought-leadership-marketing`, `/blog/founder-creator-brand`: add a short paragraph linking to SMM (company page and founder content coordination).
- `/blog/youtube-shorts-content-strategy`: audit audience; if generic, add a brand section rather than creating SMM-37.
- `/blog/youtube-shorts-vs-long-form`: add a short brand-perspective section (replaces SMM-39).

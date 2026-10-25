# Implementation log: batch 9 (2026-10-25)

Earlier uncommitted batches were preserved. Nothing is committed or deployed.

## New articles

Both are in `src/content/brand-guides/content-gaps.ts`, published 2026-10-25, category Campaign Strategy.

| URL | H1 | seoTitle (characters) | Meta | Sections | Links out | Hero |
| --- | --- | --- | --- | --- | --- | --- |
| /blog/dark-social-influencer-marketing | Dark Social and Influencer Marketing: How to Measure What You Can't Track | Dark Social and Influencer Marketing: What You Can't Track (58) | 159 | Quick answer; origin; observed vs assumed (table); estimating; shareable content; reporting (template); mistakes; conclusion | incrementality, attribution models, /services/reporting | `public/blog/brand-guides/dark-social-influencer-marketing.svg` |
| /blog/music-release-influencer-marketing | Influencer Marketing for Music Releases: Building Discovery Around a New Song | Influencer Marketing for Music Releases: A Practical Guide (58) | 155 | Quick answer; release plan (table); choosing creators; rights and platform rules; disclosure and authenticity; measuring (table); mistakes; conclusion | entertainment-india, /services/product-launches; Spotify support (rendered as text) | `public/blog/brand-guides/music-release-influencer-marketing.svg` |

Slugs were checked: 908 posts, no duplicates. Neither article has FAQs.

**CTAs:** two `BRAND_GUIDE_CTAS` entries in `src/lib/blogCta.ts`:

| Page | Mid CTA | Bottom CTA |
| --- | --- | --- |
| dark social | /services/reporting | inquiry |
| music | /services/product-launches | inquiry |

## Updated pages

| URL | File | Change | `updatedAt` |
| --- | --- | --- | --- |
| /blog/influencer-marketing-b2b-technology | `src/content/brand-guides/programs-and-industries.ts` | Cybersecurity section (do/avoid table and measurement link) | 2026-10-25 |
| /blog/influencer-marketing-attribution-models | `src/content/brand-guides/founder-measurement.ts` | Inbound link to dark social | unchanged |
| /blog/track-influencer-sales | `src/content/brand-guides/founder-measurement.ts` | Inbound link to dark social | unchanged |
| /blog/influencer-marketing-incrementality | `src/content/brand-guides/advanced-practice.ts` | Inbound link to dark social | unchanged |
| /blog/entertainment-influencer-marketing-india | `src/content/blog.ts` | Inbound link to music releases (in the OTT section) | unchanged |

## Not changed

Redirects, URLs, deletions, forms, API routes, analytics, environment variables and CSS.

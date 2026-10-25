# Implementation log: listicle batch 13 (2026-10-25)

Nothing is committed or deployed. Earlier uncommitted batches were preserved.

## New articles

Both are in `src/content/brand-guides/content-gaps.ts`, category Campaign Strategy, published 2026-10-25, `spatialCoverage` India, no FAQs.

| URL | seoTitle (characters) | Meta (characters) | Hero |
| --- | --- | --- | --- |
| /blog/low-budget-influencer-marketing-ideas | 11 Low-Budget Influencer Marketing Ideas for Brands (51) | 158 | `public/blog/brand-guides/low-budget-influencer-marketing-ideas.svg` |
| /blog/creator-niches-beyond-lifestyle | 13 Creator Niches Beyond Lifestyle Influencers for Brands (57) | 157 | `public/blog/brand-guides/creator-niches-beyond-lifestyle.svg` |

**CTAs:** two entries in `src/lib/blogCta.ts`: low budget (mid: `/services/micro-nano-influencer-marketing`) and niches (mid: `/services/campaign-strategy`). Both bottom CTAs go to the enquiry form.

## Updated pages

| URL | File | Change | `updatedAt` |
| --- | --- | --- | --- |
| /blog/ugc-content-ideas | `src/content/blog.ts` | Section `category-idea-banks` (4 subheadings, 4 tables) | 2026-10-14 → 2026-10-25 |
| /blog/ugc-ad-hooks | `src/content/brand-guides/founder-ugc.ts` | Section `demo-hooks`; meta description shortened (163 → 148 characters) | added 2026-10-25 |
| /blog/instagram-stories-influencer-marketing | `src/content/blog.ts` | Section `story-ideas` | 2026-10-14 → 2026-10-25 |
| /blog/seasonal-influencer-marketing-india | `src/content/blog.ts` | Section `festival-ideas`, before "Planning a festival campaign step by step" | added 2026-10-25 |
| /blog/influencer-marketing-startups-india | `src/content/blog.ts` | Inbound link to the low-budget article | unchanged |
| /blog/influencer-search-tools | `src/content/brand-guides/technology-tools.ts` | Inbound link to the niches article | unchanged |

## Issues during implementation

1. **Link placement:** the first article-script run failed the link-text assertion because anchors sat in list items, which can't hold links. I moved the "Watch for" text into paragraphs; nothing was written before the fix.
2. **Stray line:** a typo in the update script was removed before it ran.
3. **Pre-existing meta length:** ugc-ad-hooks had a 163-character meta; fixed while updating the page.
4. **Not fixed (pre-existing):** the startups page title is 61 characters, one over the soft limit.

## Not changed

URLs, slugs, redirects, deletions, forms, API routes, analytics, environment variables and CSS.

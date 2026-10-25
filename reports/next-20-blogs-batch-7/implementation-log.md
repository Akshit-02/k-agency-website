# Implementation log: batch 7 (2026-10-25)

Uncommitted work from batches A, B and 3-6 was preserved. Nothing is committed or deployed.

## New article

| Field | Value |
| --- | --- |
| URL | /blog/influencer-marketing-seo (slug checked: no collision; 904 posts, no duplicates) |
| File | `src/content/brand-guides/content-gaps.ts` (appended to `contentGapPosts`, so it's included via `src/content/brand-guides/index.ts`) |
| H1 | "Influencer Marketing and SEO: What Creator Partnerships Can and Can't Do for Search" |
| seoTitle | "Influencer Marketing and SEO: What Creators Do for Search" (57 characters) |
| Meta | 149 characters |
| Published | 2026-10-25; category Campaign Strategy |
| Sections | Quick answer; What Google says about links from creators; Direct vs indirect (table); How to brief creators so their content is findable; Measuring the search impact (table); Using creator content on your own site; Common mistakes; Conclusion; 2 FAQs |
| Internal links | /blog/influencer-marketing-brand-awareness, /blog/creator-content-ai-product-discovery, /blog/ugc-content-ecommerce, /blog/influencer-usage-rights, /services/campaign-strategy |
| External sources | Google spam policies; Google qualify-outbound-links; YouTube search help (rendered as text under the site's link policy) |
| Hero | `public/blog/brand-guides/influencer-marketing-seo.svg` (new, with `<title>` and alt text) |
| CTA | New `BRAND_GUIDE_CTAS["influencer-marketing-seo"]` entry in `src/lib/blogCta.ts`. Mid CTA links to /services/campaign-strategy; the bottom CTA goes to the inquiry form. Components unchanged |

## Updated pages

| URL | File | Change |
| --- | --- | --- |
| /blog/influencer-marketing-brand-awareness | `src/content/blog.ts` | Inbound link paragraph in "Measuring brand awareness" |
| /blog/creator-content-ai-product-discovery | `src/content/brand-guides/customer-commerce.ts` | Inbound link paragraph in "Measuring it honestly" |
| /blog/creator-seo | `src/content/creator-resources/search-discovery.ts` | Inbound link paragraph after the quick answer (for brands) |
| /blog/retail-influencer-marketing-india | `src/content/blog.ts` | seoTitle added |

## Not changed

Redirects, URLs and deletions (the podcast consolidation is a proposal only), forms, API routes, analytics and environment variables.

## Unresolved

Pre-existing meta of 192 characters on /blog/creator-seo (only a link was added there).

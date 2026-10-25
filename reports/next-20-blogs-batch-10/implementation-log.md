# Implementation log: batch 10 (2026-10-25)

Earlier uncommitted batches were preserved. Nothing is committed or deployed.

## New articles

Both are in `src/content/brand-guides/content-gaps.ts`, published 2026-10-25, category Brand Marketing, `spatialCoverage` India, no FAQs.

| URL | H1 | seoTitle (characters) | Meta | Links out | Hero |
| --- | --- | --- | --- | --- | --- |
| /blog/eyewear-influencer-marketing-india | Influencer Marketing for Eyewear Brands and Optical Stores | Same as H1 (58) | 157 | healthcare#asci-qualifications, retail, /services/creator-discovery | `public/blog/brand-guides/eyewear-influencer-marketing-india.svg` |
| /blog/toy-influencer-marketing-india | Influencer Marketing for Toy and Family Entertainment Brands | Influencer Marketing for Toy and Family Brands in India (55) | 147 | ASCI-hosted Lok Sabha reply PDF (rendered as text), parenting#children, /services/creator-discovery | `public/blog/brand-guides/toy-influencer-marketing-india.svg` |

**CTAs:** two `BRAND_GUIDE_CTAS` entries in `src/lib/blogCta.ts`.

## Updated pages

| URL | File | Change | `updatedAt` |
| --- | --- | --- | --- |
| /blog/luxury-influencer-marketing-india | `src/content/blog.ts` | "Pre-owned luxury, resale and repair" section | 2026-10-25 |
| /blog/influencer-content-approval | `src/content/brand-guides/operations-execution.ts` | "Setting an approval SLA" section | 2026-10-25 |
| /blog/influencer-marketing-fashion-brands-india | `src/content/blog.ts` | Inbound link to eyewear | unchanged |
| /blog/parenting-baby-influencer-marketing-india | `src/content/blog.ts` | Inbound link to toys | unchanged |

## Issue found and fixed during implementation

A link to the parenting page used the anchor `#children-on-camera`, but the actual heading id is `#children`. It was corrected before the build.

## Not changed

URLs, redirects, deletions, forms, API routes, analytics, environment variables and CSS.

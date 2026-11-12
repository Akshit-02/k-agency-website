# 10 — Article Implementation Log

Status for every article: **written, integrated into the existing blog architecture locally, built and validated. Not committed, deployed or published.** The site has no draft or preview flag (`BlogPost` has no status field), so the articles go live with the next deploy unless they're removed from `src/content/brand-guides/index.ts` first.

## Method

1. Inventory audit (961 slugs) and topic overlap analysis (reports 01–03).
2. Shared editorial spec covering voice, sourcing, structure, link rules and scope boundaries between overlapping topics. Five writers worked in parallel, 4 articles each, grouped by cluster so related articles share an author.
3. Lead review:
   - An independent validator across all 20 articles checks em dashes, banned phrases, CTA wording, link targets, link text matching, heading ids, structure, tables and lists, FAQ count, title and meta lengths, and hero files.
   - A claim-by-claim fact audit of every sentence containing a figure, legal reference or platform claim.
   - A full read of sample articles.
   - A render check of all 20 hero SVGs.
4. Integration: category, index, CTAs, service-page guides list, `llms.txt`.
5. Build, runtime and mobile validation (reports 11–12).

## Articles

Word counts are body plus FAQs. "Title / meta" is the rendered `<title>` length and the meta description length. CTA placement is computed from the live `getMidCtaIndex` logic.

| Article | File | Words | Read | Title / meta | Int. links | Ext. sources | CTA placement | Tags (first 3) | Status |
|---|---|---|---|---|---|---|---|---|---|
| [How to Choose the Right Social Media Management Agency for Your Business in 2027](/blog/choose-social-media-management-agency) | `smm-hiring.ts` | 2160 | 11 min read | 53 / 159 | 8 | 2 | after "15 questions to ask before hiring" (block 17 of 33) + after article | social media management agency; social media management company; hire social media management agency | Integrated (local, unpublished) |
| [In-House Social Media Team vs Outsourcing to an Agency: What Makes Sense for Your Business?](/blog/in-house-vs-outsourced-social-media-management) | `smm-hiring.ts` | 1735 | 9 min read | 46 / 160 | 5 | 0 | after "In-house vs agency, side by side" (block 20 of 43) + after article | in-house vs outsourced social media management; social media agency vs in-house team; outsource social media management | Integrated (local, unpublished) |
| [Social Media Management Pricing in India: What Influences the Monthly Cost?](/blog/social-media-management-cost-india) | `smm-hiring.ts` | 2004 | 10 min read | 53 / 154 | 6 | 0 | after "What drives the monthly fee" (block 25 of 49) + after article | social media management cost in India; social media management pricing; social media agency charges | Integrated (local, unpublished) |
| [How to Write a Social Media Management Agency Brief: A Checklist for Brands](/blog/social-media-agency-brief) | `smm-hiring.ts` | 1849 | 9 min read | 49 / 159 | 7 | 0 | after "Social media agency brief template" (block 14 of 29) + after article | social media agency brief; social media management requirements; social media marketing agency brief | Integrated (local, unpublished) |
| [What Should You Expect in the First 90 Days of Hiring a Social Media Management Agency?](/blog/social-media-management-agency-first-90-days) | `smm-operations.ts` | 2024 | 10 min read | 56 / 146 | 8 | 0 | after "Days 61 to 90: first learnings and a proper review" (block 19 of 42) + after article | hiring social media management agency; social media agency onboarding; social media management process | Integrated (local, unpublished) |
| [How to Prepare Your Business Before Outsourcing Social Media Management](/blog/outsourcing-social-media-management-checklist) | `smm-operations.ts` | 1828 | 9 min read | 55 / 155 | 5 | 5 | after "Access and permissions without sharing passwords" (block 20 of 38) + after article | outsourcing social media management; social media agency onboarding checklist; social media brand assets | Integrated (local, unpublished) |
| [The Social Media Approval Process: How Brands Can Publish Content Without Delays](/blog/social-media-content-approval-process) | `smm-operations.ts` | 1682 | 9 min read | 48 / 154 | 6 | 1 | after "Roles, responsibilities and turnaround times" (block 22 of 42) + after article | social media content approval process; content approval workflow; social media publishing workflow | Integrated (local, unpublished) |
| [How to Build a Repeatable Social Media Content Production Workflow](/blog/social-media-content-workflow) | `smm-operations.ts` | 1808 | 9 min read | 51 / 148 | 7 | 0 | after "Capacity planning: how much can your team actually make?" (block 19 of 40) + after article | social media content workflow; social media content production process; social media content creation workflow | Integrated (local, unpublished) |
| [How to Create a Social Media Brand Voice That Stays Consistent Across Platforms](/blog/social-media-brand-voice) | `smm-consistency.ts` | 1981 | 10 min read | 59 / 159 | 8 | 1 | after "One message, three tones" (block 27 of 47) + after article | social media brand voice; brand voice on social media; social media tone of voice | Integrated (local, unpublished) |
| [How to Manage Social Media for Multiple Locations Without Losing Brand Consistency](/blog/social-media-management-multiple-locations) | `smm-consistency.ts` | 2058 | 10 min read | 50 / 153 | 6 | 4 | after "Central versus local content" (block 21 of 43) + after article | social media management for multiple locations; multi-location social media management; local social media marketing | Integrated (local, unpublished) |
| [Social Media Management for Franchise Businesses: A Practical Operating Model](/blog/franchise-social-media-management) | `smm-consistency.ts` | 1872 | 9 min read | 53 / 157 | 6 | 3 | after "Page ownership and admin access" (block 23 of 44) + after article | social media management for franchises; franchise social media marketing; social media strategy for franchises | Integrated (local, unpublished) |
| [How to Repurpose Social Media Content for Different Platforms Without Repeating the Same Post](/blog/social-media-content-repurposing) | `smm-consistency.ts` | 1669 | 8 min read | 49 / 156 | 6 | 2 | after "One product Reel, six outputs: a hypothetical example" (block 24 of 41) + after article | social media content repurposing; repurpose content across social media; cross-platform content strategy | Integrated (local, unpublished) |
| [Social Media Community Management vs Customer Support: Where Should Brands Draw the Line?](/blog/community-management-vs-customer-support) | `smm-listening.ts` | 2059 | 10 min read | 56 / 157 | 5 | 3 | after "Handover rules between the agency and your support team" (block 17 of 34) + after article | community management vs customer service; social media community management; social media customer support | Integrated (local, unpublished) |
| [How to Build a Social Media Crisis Response Plan for Your Brand](/blog/social-media-crisis-management-plan) | `smm-listening.ts` | 1853 | 9 min read | 57 / 155 | 5 | 2 | after "Holding statements to prepare in advance" (block 17 of 36) + after article | social media crisis management plan; social media crisis communication; social media reputation management | Integrated (local, unpublished) |
| [How Brands Can Use Social Listening to Understand Customers and Competitors](/blog/social-listening-for-brands) | `smm-listening.ts` | 1709 | 9 min read | 60 / 152 | 7 | 0 | after "A social listening workflow" (block 20 of 41) + after article | social listening for brands; social media listening tools; brand sentiment monitoring | Integrated (local, unpublished) |
| [How to Conduct a Social Media Audit Before Changing Your Marketing Strategy](/blog/social-media-audit) | `smm-listening.ts` | 1718 | 9 min read | 57 / 157 | 7 | 6 | after "Performance: what to export and over what period" (block 22 of 42) + after article | social media audit for businesses; social media account audit; Instagram account audit for business | Integrated (local, unpublished) |
| [How to Choose the Right Social Media Platforms Based on Your Business Model](/blog/choose-social-media-platforms-for-business) | `smm-performance.ts` | 2172 | 11 min read | 54 / 153 | 6 | 2 | after "Platform availability: what's not an option in India" (block 21 of 41) + after article | choosing social media platforms for business; best social media platforms for businesses; social media platform strategy | Integrated (local, unpublished) |
| [Organic Social Media vs Paid Social Advertising: What Should Your Business Invest In?](/blog/organic-vs-paid-social-media) | `smm-performance.ts` | 1898 | 10 min read | 54 / 160 | 6 | 3 | after "When each one is the right tool" (block 20 of 37) + after article | organic vs paid social media; organic social media marketing; paid social media advertising | Integrated (local, unpublished) |
| [Social Media KPIs by Business Goal: What Should Brands Actually Measure?](/blog/social-media-kpis) | `smm-performance.ts` | 1874 | 9 min read | 51 / 159 | 7 | 4 | after "Vanity metrics vs decision metrics" (block 21 of 41) + after article | social media KPIs for businesses; social media marketing metrics; social media performance measurement | Integrated (local, unpublished) |
| [How to Present Social Media Performance to Founders and Business Leaders](/blog/social-media-reporting-for-founders) | `smm-performance.ts` | 1622 | 8 min read | 49 / 158 | 5 | 0 | after "How to present a bad month honestly" (block 19 of 37) + after article | social media reporting for businesses; social media monthly report; social media performance dashboard | Integrated (local, unpublished) |

Every article has:
- the H1, `seoTitle` where needed and a unique `metaDescription`
- category "Social Media Management", author "Kudozz Strategy Team" (an organisation team, no fake credentials), `publishedAt` 2026-11-11 and `lastReviewed` November 2026
- 5 tags, 3 `related` slugs (all existing articles), a topic-specific SVG hero with descriptive alt text, and 4–5 FAQs
- an opening scenario, a "Quick answer" (40–80 words), at least one table and checklist, common mistakes, recommendations and a conclusion

## Files created (this batch)

- `src/content/brand-guides/smm-hiring.ts` (01, 02, 03, 20)
- `src/content/brand-guides/smm-operations.ts` (04, 05, 06, 08)
- `src/content/brand-guides/smm-consistency.ts` (07, 09, 10, 16)
- `src/content/brand-guides/smm-listening.ts` (11, 12, 13, 14)
- `src/content/brand-guides/smm-performance.ts` (15, 17, 18, 19)
- 20 hero SVGs in `public/blog/brand-guides/<slug>.svg` (1600×700, house palette, diagrams only)

## Files modified (this batch)

| File | Change |
|---|---|
| `src/content/blog.ts` | Added `"Social Media Management"` to `BlogCategory` and `blogCategories`. Now justified with 20 articles; the blog filter shows it. |
| `src/components/blog/BlogArticleGraphic.tsx` | Palette and "SMM" initials for the new category (required by its `Record<BlogCategory, …>` type). |
| `src/content/brand-guides/index.ts` | Imports and spreads the five new arrays. |
| `src/lib/blogCta.ts` | 20 hand-written `BRAND_GUIDE_CTAS` entries, topic "Social Media Management". Mid CTAs go to the SMM page or the relevant section (`#scope`, `#process`, `#copywriting` …); bottom CTAs go to the brand inquiry with tracking params. Copy differs per article. |
| `src/content/services.ts` | SMM service `guides` lists the 20 slugs. |
| `src/app/services/social-media-management/page.tsx` | New "Guides on social media management" section listing published guides (from `guides`). |
| `public/llms.txt` | New "Social Media Management Guides" section listing all 20 with a factual summary. |

Not touched: forms, API routes, mailer, env files, analytics and tracking code, existing articles, URLs and redirects. The earlier service-expansion changes in the same working tree are documented in `reports/social-media-management-expansion/15-implementation-log.md`.

## Editorial decisions worth knowing

- Writer D's four articles (11–14) mention Kudozz once mid-article, where its scope is directly relevant: community vs support boundaries, crisis communication being scoped separately, paid listening tools being a separate cost, and audits feeding strategy. They are informational and non-promotional, so they were kept rather than moved.
- The hero diagrams for 15, 17, 18 and 19 had arrows rendered below the boxes; these were removed by the lead, since the numbered step labels already show the sequence.
- No existing article was edited. Cross-links from existing influencer "twins" back to the new articles are recommended in report 13 (they'd change published articles, so they need approval).

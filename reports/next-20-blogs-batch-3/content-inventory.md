# Content inventory: batch 3 (2026-10-24)

## Project

| Item | Finding |
| --- | --- |
| Framework | Next.js App Router; blog posts statically generated at `/blog/[slug]` (`src/app/blog/[slug]/page.tsx`) |
| Content source | TypeScript `BlogPost` data. `src/content/blog.ts` holds the core array and imports clusters from `brand-guides/`, `creator-resources/`, `creator-economy/`, `location-guides/`, `gcc-guides/`, `au-guides/` and `uk-guides/` |
| Metadata | `seoTitle`, `metaDescription` and `updatedAt` per post; canonical and JSON-LD (BlogPosting, BreadcrumbList, FAQPage, plus Organization and WebSite) from the shared template in `src/lib/schema.tsx` |
| Sitemap, robots, llms | `src/app/sitemap.ts` (994 URLs at build); `src/app/robots.ts` (allows `/`, disallows `/api/`); `public/llms.txt` |
| Redirects | `next.config.ts` (including the 2026-10 consolidations of thin X industry pages) |
| CTAs | Shared `BlogMidCTA` (inserted automatically at a section break near the middle) and `BlogBottomCTA`; copy from `src/lib/blogCta.ts`; related service link from `src/lib/blogServiceLink.ts` |
| Services | 20 service pages listed in `src/content/services.ts` (the earlier register counted 18 core services) |
| Outbound links | Only kudozz.in and zspace.in render as links (`src/lib/links.ts`); other source URLs render as text |
| Images | Hero SVGs in `public/blog/brand-guides/`, otherwise a category graphic |
| Forms and analytics | `/for-brands#inquiry`, `src/app/api/*`, gtag events in CTA components. Not touched |

## Blog library

| Measure | Value |
| --- | --- |
| Posts | 903 (894 before today, plus 8 from batch A and 1 from batch B) |
| By category | Campaign Strategy 287 · Creator Resources 287 · Brand Marketing 149 · Influencer Marketing 123 · UGC Marketing 29 · Instagram Marketing 18 · Creator Economy 9 · Social Media Trends 1 |
| By CTA audience | Brand 622 · Creator 281 |
| In the GSC export | 550 posts, with 111,881 impressions in total |
| Per-URL register | `reports/next-20-blogs/batch-a/existing-content-audit.csv` (every post with GSC metrics, overlap flags and action; generated today) |

## Previous plans compared

| Plan | Location | Relevance to this batch |
| --- | --- | --- |
| Batch A (2026-10-24) | `reports/next-20-blogs/batch-a/` | Pilot campaigns (candidate 10), barter, EMV and partnership updates |
| Batch B (2026-10-24) | `reports/next-20-blogs/` | Outreach email (candidate 3); negotiation and post-mortem consolidation evaluations (candidates 4 and 19); affiliate commission (candidates 5 and 7) |
| Founder roadmap, 200 topics (2026-10-15) | Memory record; registers in git history (commit e01dfd4) | Created always-on, ambassador, CRM, crisis and international playbook owners |
| GSC registers (2026-10-22) | Commit 5c3aa08 | Near-page-one and snippet flags used below |

## Conclusion

All 20 candidates have an existing owner. 18 are REPLACE and 2 are UPDATE (candidates 6 and 16); see `topic-overlap-audit.csv`. The 20 actions taken are updates to pages with Search Console evidence (`final-20-content-plan.csv`). No page in this batch was justified as a new URL.

## Prioritisation method (`final-20-content-plan.csv`, `score` column)

Each action is scored on five 1-5 criteria, and **score = 2×demand + 2×business relevance + 2×ranking opportunity + gap severity + feasibility**:

| Criterion | What it measures |
| --- | --- |
| Demand | GSC impressions band: 1 under 50, 2 50-99, 3 100-249, 4 250-999, 5 1,000+ |
| Business relevance | How directly the topic connects to a Kudozz service and brand enquiry |
| Ranking opportunity | Average position: 4 at 4-8, 3 at 8-12, 2 at 12-20, 1 above 20 |
| Gap severity | How much the current page fails the intent |
| Feasibility | Whether it can be done safely now; 1 means blocked on a decision |

It's an editorial planning aid, not a model of Google ranking.

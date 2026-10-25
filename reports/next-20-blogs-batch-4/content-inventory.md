# Content inventory: batch 4 (2026-10-24)

## Project and state

- **Architecture:** unchanged from batch 3 (see `reports/next-20-blogs-batch-3/content-inventory.md`). Next.js App Router; posts are TypeScript `BlogPost` data in `src/content/**`, served at `/blog/[slug]`. Shared metadata and JSON-LD come from `src/lib/schema.tsx`. Mid and bottom CTAs come from `src/lib/blogCta.ts`. The sitemap is `src/app/sitemap.ts`, robots `src/app/robots.ts`, and `public/llms.txt`.
- **Library:** 903 posts. 550 are in the 2026-10-22 Search Console export, with 111,881 impressions in total.
- **Git:** `main` at commit 8034c2b, with 25 uncommitted changed or new paths from today's earlier batches. Preserved; this batch edits on top of them.
- **Prior plans compared:**
  - `reports/next-20-blogs/batch-a/` (batch A)
  - `reports/next-20-blogs/` (batch B)
  - `reports/next-20-blogs-batch-3/`
  - the founder roadmap (200 topics) and the 2026-10-22 GSC registers (commit 5c3aa08)

## Candidate check

| Result | Count | Candidates |
| --- | --- | --- |
| Owner already exists | 19 of 20 | All except #14 |
| Updated in an earlier batch today | 5 | Employee advocacy, events, automotive, gaming/esports, experiential/meet-ups |
| India owner missing | 1 | #14 nonprofits (only a GCC page exists). Search Console shows no nonprofit, NGO, CSR or charity queries, and the site lists no nonprofit service, so it was replaced and deferred |

Decisions:
- **UPDATE:** 5 candidates (#3 education, #6 beauty, #8 fintech, #11 pet, #19 virtual influencers).
- **REPLACE:** 15 candidates. Their slots went to evidence-led actions on other pages (`final-20-content-plan.csv`).
- **CONSOLIDATE evaluations:** 2 (the D2C pair and the thin X creator-monetization pages), documented only.

## Prioritisation method

Same as batch 3: **score = 2×demand + 2×business relevance + 2×ranking opportunity + gap severity + feasibility**, each on a 1-5 scale.

| Criterion | Scale |
| --- | --- |
| Demand | Impressions band: 1 under 50, 2 50-99, 3 100-249, 4 250-999, 5 1,000+ |
| Ranking opportunity | 4 at positions 4-8, 3 at 8-12, 2 at 12-20, 1 above 20 |
| Feasibility | 1 means blocked on an owner decision |

It's an editorial aid, not a ranking model.

## Library-level observation

Most remaining Search Console opportunities are now snippet-level: pages at positions 4-11 with zero clicks. Ten of the 20 actions are title and description rewrites, which are cheap and reversible. The size of their effect can only be judged after deploy, against the baselines in `final-20-content-plan.csv`.

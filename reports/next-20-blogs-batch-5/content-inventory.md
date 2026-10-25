# Content inventory: batch 5 (2026-10-24)

## Project and state

- **Architecture:** unchanged; see `reports/next-20-blogs-batch-3/content-inventory.md`. Next.js App Router; TypeScript `BlogPost` content in `src/content/**`; shared metadata and JSON-LD (`src/lib/schema.tsx`); CTAs (`src/lib/blogCta.ts`); sitemap (`src/app/sitemap.ts`, 994 URLs); robots (`src/app/robots.ts`); `public/llms.txt`.
- **Library:** 903 posts; 550 in the 2026-10-22 Search Console export.
- **Git:** `main` at 8034c2b with 26 uncommitted paths from batches A, B, 3 and 4. Preserved.
- **Prior plans compared:** batch A (`reports/next-20-blogs/batch-a/`), batch B (`reports/next-20-blogs/`), batch 3 and batch 4 (`reports/next-20-blogs-batch-3/`, `-batch-4/`), and the founder roadmap.

## Candidate results

- **Owners exist:** 18 of the 20 candidates have one or more owner pages, and several were updated earlier today (fashion, travel, RFP).
- **Possible gaps, both deferred:**
  - **#6 live shopping in India:** no Search Console demand, and platform availability needs separate verification.
  - **#8 brand-side social search:** no brand-side demand, and it would overlap the creator page.
- **Decisions:**
  - **UPDATE:** 3 (#15 accessibility, #18 luxury, #20 RFP template).
  - **CONSOLIDATE (evaluate):** 1 (#1 social listening pair).
  - **REPLACE:** 16.

## A shift in where the evidence is

After four batches, almost no brand-side page with Search Console demand remains untouched. The largest remaining impression-versus-click gaps are on **Creator Resources** pages: Instagram, YouTube, TikTok and creator-business guides, with 140-1,300 impressions at positions 5-12 and zero to three clicks. These pages carry the site's creator sign-up CTA (`/for-creators`), which is how Kudozz builds a creator roster. So they serve a business goal, but they won't produce brand enquiries directly.

This batch therefore includes 14 creator- and brand-page snippet actions. Many of those pages had descriptions of 162-213 characters, which search results truncate.

## Prioritisation method

Unchanged: **score = 2×demand + 2×business relevance + 2×ranking opportunity + gap severity + feasibility**, each on a 1-5 scale; see batch 3 for the bands.

Creator-only pages score lower on business relevance, typically 1-2 against 4-5 for brand commercial pages. It's an editorial aid, not a ranking model.

## Recommendation for future batches

Further candidate lists will mostly repeat topics that are already covered. The next meaningful step is evidence, not new topics:
- query×page data for the top 30 pages;
- the Countries tab;
- a 3-month comparison;
- a 28-day review of today's changes after deploy.

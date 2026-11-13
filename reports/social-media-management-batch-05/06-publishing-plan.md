# 06 — Publishing Plan (Batch 05)

This is a recommendation; nothing has been published. The codebase has no draft flag, so to release in waves:
- comment out the arrays for later weeks in `src/content/brand-guides/index.ts` before each deploy (the guide groups skip missing posts);
- set each article's `publishedAt` to its real release date.

Each data file maps to a cluster, but the brief's weekly order mixes files, so some weeks need individual posts filtered out. A simple way is `...smmMedicalPosts.filter(p => released.has(p.slug))`. Alternatively, follow the file-aligned order below.

**Dependency:** these articles link Batch 01–04 guides, which are also unpublished. Ship those before or with this batch.

## Recommended sequence

The brief's order is kept, with one change: the regulated healthcare guides wait for professional review. No GSC demand justified reordering (0 impressions for every audience).

| Week | Articles | Gate |
|---|---|---|
| **1 · Salons and beauty** | 01 salons · 03 salon calendar · 02 spas · 04 beauty professionals | None beyond the general review in 03 §4 (items 29–32) |
| **2 · Fitness and wellness studios** | 11 gyms · 12 yoga · 13 personal trainers · 14 Pilates | An instructor or physio checks the safety and example copy (03 §4 items 21–23) |
| **3 · Coaches and local services** | 16 coaches · 17 tutors · 18 home services · 19 wedding photographers | Legal check of the CCPA coaching reading (16, 17) and the copyright wording (19) |
| **4 · Doctors and dental** (after review) | 06 dental clinics · 07 dentists · 08 doctors · 05 skin clinics | **Only after** medical-law and dental review, and the Kudozz decision on marketing to RMPs (03 §4 items 1–6, 9–14) |
| **5 · Other practices** (after review) | 09 physiotherapy · 10 diagnostic centres · 20 veterinary · 15 wellness brands | **Only after** the NCAHP re-check (09), NABL 133 check (10), veterinary review (20) and food/AYUSH regulatory review (15) |

**Why healthcare moved from week 2 to weeks 4–5:**
- the brief requires review before publication;
- the NMC agency question is unresolved;
- the dental regulator changed this year.

If reviews finish early, weeks 4–5 can move up. Don't publish all 20 at once.

## After each wave
- Request indexing and spot-check the live pages: CTAs, FAQs, schema and the hero.
- After 8–12 weeks, check GSC impressions per primary keyword and the overlap pairs in 01 §4, especially 01 vs 03, 06 vs 07, and 11 vs `social-media-marketing-fitness-brands`.
- Track enquiries with `ctaTopic = "Social Media Management"` and the source article. Don't assume any ranking or enquiry gains.
- Every six months, re-verify the regulatory statements (each article shows "lastReviewed: November 2026").

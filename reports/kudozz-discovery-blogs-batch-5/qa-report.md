# QA report: batch 5

All checks below were actually run on 26–27 Nov 2026 against the working tree and a local production build. **Nothing was deployed.**

## Results
| Check | How | Result |
|---|---|---|
| Type check | `npx tsc --noEmit -p .` | **Pass**, 0 errors |
| Lint | `npm run lint` | 3 errors + 2 warnings, **all pre-existing and outside this change**: `email-marketing/template1.js` (require ×3); unused vars in `src/app/contact/page.tsx` and `src/app/for-brands/page.tsx`. Same count as before batch 4/5. No findings in changed files |
| Build | `npm run build` (Next 16.3.4) | **Pass** (exit 0); all 18 pages prerendered |
| Duplicate slugs | script over `blogPosts` (1,117 posts) | none |
| Duplicate SEO titles, meta descriptions, CTA headlines | script, site-wide | none |
| Internal links and anchors | script over every `/blog/` reference in `src/` | all resolve |
| Link text present in its paragraph | script | pass (18/18) |
| Links per post | script | 7–11 internal; ≥3 earlier Discovery posts, ≥1 service page, ≥1 sibling in every post |
| Discovery CTAs | built HTML | exactly 2 per page, `utm_content=<slug>`, correct base URL and parameters |
| Canonical / robots / H1 | built HTML | self-canonical, `index, follow`, one H1 (18/18) |
| OG image | built HTML | `og:image` present (18/18), from the existing per-slug OG route |
| JSON-LD | parsed every block | valid; Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage (18/18) |
| Sitemap | built `sitemap.xml` | all 18 URLs present |
| HTTP | `next start` + curl | 18/18 pages and 18/18 hero SVGs return 200; new posts appear in `/blog` listing |
| Hero images | rendered all 18 SVGs in headless Chrome (contact sheet) | all render; distinct layouts; text inside canvas. The "Locality" label in `store-opening-influencer-campaign.svg` was crossed by a circle stroke; it is now centred and re-rendered clean |
| Mobile | headless Chrome, true 390px viewport (iframe) on `influencer-discovery-checklist` and `influencer-exclusivity` | layout matches existing posts; tables scroll in their container; no body overflow |
| Desktop | 1440px on `influencer-audience-location` | hero, TOC, tables and typography consistent with existing posts |
| Writing checks | grep / script | 0 em dashes; no banned AI phrases; no unsourced statistics (illustrative figures labelled hypothetical) |

## Files changed
- **New:**
  - `src/content/discovery-guides/batch-q.ts`, `batch-r.ts`, `batch-s.ts` and `batch-t.ts`
  - 17 new SVGs in `public/blog/discovery/`; `influencer-discovery-checklist.svg` was replaced, since it is the same slug's hero
- **Modified:**
  - `discovery-guides/index.ts`: wiring
  - `noindex.ts`: 2 slugs restored
  - 8 old post objects removed from `blog.ts`, `brand-guides/intelligence-scoring.ts`, `content-rights.ts`, `founder-questions.ts`, `commerce-journeys.ts`, `gcc-guides/gcc-performance.ts`, `creator-economy/b2b.ts` and `discovery-guides/batch-c.ts`
  - one-sentence inbound links added in `discovery-guides/batch-a.ts`, `batch-e.ts`, `batch-h.ts` and `batch-i.ts`
- **Not touched:** forms, APIs, email workflows, environment variables, analytics code, templates, the Discovery app, URLs.
- Batch 4 (blogs 61–80) is also still uncommitted in the same working tree.

## Follow-up pass (27 Nov)
- **Changes:**
  - an affiliate-creator section in `brand-guides/growth-programs.ts`
  - inbound links in `blog.ts` (how-to-vet, experiential), `brand-guides/intelligence-research.ts`, `brand-guides/founder-execution.ts` and `discovery-guides/batch-l.ts`
  - the SVG label fix
- **Re-run checks:**
  - `tsc`: pass
  - `npm run build`: pass
  - site-wide link and anchor check: all resolve
  - batch-5 QA: 18/18 OK
  - the new links and the new section appear in the built HTML
- **Existing issue noted, not introduced here:** 146 posts site-wide (including how-to-vet, competitor-influencers, experiential and multi-platform) link the same URL twice in a body. Harmless for SEO but untidy; a cleanup candidate.

## Known issues and limitations
1. **Indexing gap:** posts published after 3 Oct 2026 have mostly not been surfacing in Google. Batch 5 adds 10 new URLs on top of batch 4's 6. Suggested release order: ship the upgrades first, then the new URLs, then request indexing for the two restored pages and watch the GSC Pages report.
2. **Two topics not published as new URLs (#92, #96):** handled in place instead (an affiliate section was added to influencer-affiliate-program, and links were added to #53). See keyword-and-overlap-report.md.
3. **#94 vs experiential-influencer-marketing:** moderate overlap risk; watch queries in GSC.
4. **`src/config/discovery.ts` is outdated** relative to the product (landing page live, payments code added 26 Nov). No article depends on it.

## Needs manual review
Regulatory and platform statements are worded cautiously, but should get a legal/editorial read:
- **#87, #97:** ASCI qualification requirement for health and finance influencers, and the SEBI Oct 2024 circular on regulated entities associating with unregistered advisers.
- **#97:**
  - NMC 2023 regulations held in abeyance, with the 2002 regulations applying
  - Bar Council Rule 36
  - **ICAI Code of Ethics revision wording** (the least certain item)
- **#87:**
  - Drugs and Magic Remedies Act
  - CCPA 2022 misleading-ad guidelines
  - status of the Promotion and Regulation of Online Gaming Act, 2025
- **#88:** Indian Contract Act s.27 and Percept D'Mark v Zaheer Khan (2006)
- **#82, #83, #98, #86, #90:** platform analytics descriptions:
  - Instagram Insights shows top towns/cities and countries, not states
  - YouTube Studio age, gender and geography come from signed-in viewers
  - YouTube rounds subscriber counts
  - "engaged views"
  - Instagram's "Paid partnership" label and YouTube's "Includes paid promotion" notice
- **#93, #94:** ASCI material-connection rules for free products and hosted trips, and the DoCA 2023 endorsement guidance.

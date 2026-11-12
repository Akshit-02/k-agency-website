# 12 — Technical Validation

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| `eslint` on new and changed files (5 content files, `blogCta.ts`, `blog.ts`, `BlogArticleGraphic.tsx`, SMM page) | 0 errors, 0 warnings |
| `next build` | Pass. 2,068 static pages (was 2,028; +20 articles, +20 OG image routes) |
| HTTP status, 20 article URLs | 20 × 200 |
| Hero images | 20/20 load (`naturalWidth > 0`) on the live page; all 20 SVGs are valid XML (`xmllint`) and were visually checked on a contact sheet. Text fits its boxes. 4 SVGs had misplaced arrows removed. |
| Internal links on the 20 pages | 112 distinct URLs, 0 broken |
| Blog index `/blog` | All 20 listed; "Social Media Management" filter present and working (Playwright click) |
| Sitemap | All 20 present with `lastmod` |
| SMM service page | "Guides" section lists 20/20 |
| Mobile (Playwright, real Chrome, 390×900) | 0/20 pages with horizontal overflow (tables scroll inside their container); screenshot of article 03 reviewed |
| Console errors | None across the 20 articles and the blog index |
| JSON-LD | Valid JSON on all pages (see report 11) |
| Forms / API / email / env / analytics | Untouched. `git status` shows no changes under `src/app/api`, `src/lib/mailer.ts`, `src/lib/validations.ts`, `src/components/brands/BrandInquiryForm.tsx`, creator form, `.env*`, `src/lib/blogAnalytics.ts` |
| Dependencies | None added |
| Existing articles | None modified, deleted or re-slugged; no redirects |

## Notes

- New articles add ~350 KB of TypeScript content (similar per-article size to existing brand guides). All pages are statically generated, so there is no runtime cost.
- Hero SVGs are 2–4 KB each, loaded with `fetchPriority="high"` by the existing template.
- Lighthouse was not run (no deployed URL); recommended on staging for 2–3 articles.

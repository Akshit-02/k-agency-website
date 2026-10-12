# SEO audit progress tracker

Use this file to resume work without skipping URLs. Per-URL status lives in the registers; this file tracks batches.

| Batch | Scope | Status | Date | Record |
| --- | --- | --- | --- | --- |
| R1 | International commercial layer: market pages, schema, trust fixes, lead attribution | Done, committed `b66ee6b` | 2026-10-12 | `docs/international-seo-audit.md` |
| R2.1 | Inventory: 905 URLs (crawl ∪ sitemap), 825 articles loaded from source | Done | 2026-10-12 | registers |
| R2.2 | Automated checks on all 825 article texts (findings before changes) | Done | 2026-10-12 | `findings_before` column |
| R2.3 | Flag triage: outdated facts, claims, unsourced figures, filler, thin pages | Done; false positives recorded | 2026-10-12 | report §D |
| R2.4 | /blog payload (P0) | Done | 2026-10-12 | report §F |
| R2.5 | Blog→service and market links (template) | Done; 538/538 and 95/95 | 2026-10-12 | report §F |
| R2.6 | Titles (76) and brand-facing descriptions (75) | Done | 2026-10-12 | `changes_made` |
| R2.7 | List punctuation (1,134 items), hygiene, dates | Done | 2026-10-12 | `changes_made` |
| R2.8 | Non-article pages (80) | Done; 5 updated | 2026-10-12 | `seo-register-pages-2026-10.csv` |
| R2.9 | Final build, crawl, rendered-article checks, registers | Done; 0 failures | 2026-10-12 | report §K |

## Open queue (needs data or owner input)

- [ ] Search Console connected and baseline exported (unblocks everything below)
- [ ] Decide on the 27-URL platform × topic matrix (`monitor_reason` = "platform × topic matrix")
- [ ] Decide on the 45 short articles (`monitor_reason` = "under 600 body words")
- [ ] Decide on the 8 small-state guides
- [ ] Privacy policy and terms (legal), then restore footer links
- [ ] Browser QA: mobile layout of /markets/*, /for-brands "What happens next", GA4 `generate_lead` in DebugView
- [ ] Remaining long descriptions (258 articles, 6 hubs), P3
- [ ] Prose em dashes (248), P3, sentence-level

## How to regenerate the checks

Scripts used this round were run from a scratch directory (not committed):

1. A crawler over `next start`.
2. A Node `--experimental-strip-types` loader that imports `src/content/blog.ts` directly, for per-article checks.
3. A field-level diff against the previous commit.

To repeat: build, run `next start`, crawl `/` plus `/sitemap.xml`, and compare against `docs/seo-register-*.csv`.

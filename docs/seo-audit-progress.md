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
| F1 | Founder roadmap topics 1–20: 6 CREATE, 10 UPDATE, 4 CONSOLIDATE | Done, uncommitted; build + crawl pass | 2026-10-14 | `docs/founder-questions-1-20-audit.md` |
| F2 | Founder roadmap topics 21–40 (campaign execution): 5 CREATE, 5 UPDATE, 4 CONSOLIDATE, 6 SKIP | Done, uncommitted; build + crawl pass | 2026-10-14 | `docs/founder-questions-21-40-audit.md` |
| F3 | Founder roadmap topics 41–60 (UGC): 7 CREATE, 12 UPDATE, 1 CONSOLIDATE | Done, uncommitted; build + crawl pass | 2026-10-14 | `docs/founder-questions-41-60-audit.md` |
| F4 | Founder roadmap topics 61–80 (ROI, attribution, reporting): 5 CREATE, 8 UPDATE, 4 CONSOLIDATE, 3 SKIP | Done, uncommitted; build + crawl + 390px + CTA event checks pass | 2026-10-14 | `docs/founder-questions-61-80-audit.md` |
| F5 | Founder roadmap topics 81–100 (discovery, negotiation, partnerships): 0 CREATE, 5 UPDATE (2 consolidations), 2 MONITOR, 12 SKIP | Done, uncommitted; build + crawl + 390px + CTA event checks pass | 2026-10-14 | `docs/founder-questions-81-100-audit.md` |
| F6 | Founder roadmap topics 101–120 (platforms): 2 CREATE, 12 UPDATE, 3 CONSOLIDATE, 3 SKIP; platform owners fact-checked and sourced | Done, uncommitted; build + crawl + 390px + CTA event checks pass | 2026-10-14 | `docs/founder-questions-101-120-audit.md` |
| F7 | Founder roadmap topics 121–140 (industries): 1 CREATE (industry hub), 4 UPDATE, 14 SKIP, 1 MONITOR | Done, uncommitted; build + crawl + 390px + CTA event checks pass | 2026-10-14 | `docs/founder-questions-121-140-audit.md` |
| F8 | Founder roadmap topics 141–160 (conversion, creative, growth): 3 CREATE, 4 UPDATE, 1 CONSOLIDATE, 12 SKIP; inquiry form validation, error and success states tested with intercepted API; role=alert added to the form error | Done, uncommitted; build + crawl + 390px + CTA and form checks pass | 2026-10-14 | `docs/founder-questions-141-160-audit.md` |
| F9 | Founder roadmap topics 161–180 (international): 2 CREATE (Singapore guide, diaspora creators), 5 owner updates incl. 1 consolidation, 11 SKIP; Singapore market page links the new guide | Done, uncommitted; build + crawl + 390px + CTA and form checks pass | 2026-10-15 | `docs/founder-questions-161-180-audit.md` |
| F10 | Founder roadmap topics 181–200 (governance, risk, future): 3 CREATE, 2 UPDATE, 1 CONSOLIDATE, 1 MONITOR, 13 SKIP; master 200-topic inventory written | Done, uncommitted; build + crawl + 390px + CTA and form checks pass; all 155 roadmap URLs return 200 | 2026-10-15 | `docs/founder-questions-181-200-audit.md`, `docs/founder-roadmap-200-inventory.csv` |

## Open queue (needs data or owner input)

- [ ] Search Console connected and baseline exported (unblocks everything below)
- [ ] Decide on the 27-URL platform × topic matrix (`monitor_reason` = "platform × topic matrix")
- [ ] Decide on the 45 short articles (`monitor_reason` = "under 600 body words")
- [ ] Decide on the 8 small-state guides
- [ ] Privacy policy and terms (legal), then restore footer links
- [ ] Browser QA: mobile layout of /markets/*, /for-brands "What happens next", GA4 `generate_lead` in DebugView
- [ ] Remaining long descriptions (258 articles, 6 hubs), P3
- [ ] Prose em dashes (248), P3, sentence-level
- [ ] Unsourced INR rate tables on platform rate pages (instagram/youtube/ugc/platform rates, campaign-cost scenarios); cost-india fixed in F1
- [ ] Decide on sitewide FAQPage JSON-LD (Google removed FAQ rich results June 2026)
- [x] Phone-width QA: 77 founder-roadmap pages (F1–F4) show no horizontal overflow at 390px (CDP mobile emulation, 2026-10-14)
- [ ] Real form delivery and GA4 receipt untested. Validation, error and success UI plus the blog_lead_form_submit and generate_lead events were verified on 2026-10-14 with the API intercepted (no email sent)
- [ ] YouTube view redefinition (24 Aug 2026, engaged views) not yet reflected on YouTube ROI/analytics pages
- [ ] Review thin platform ROI pages (x/podcast/instagram/snapchat/pinterest/reddit/linkedin) for consolidation into the ROI owner
- [ ] Monitor overlap groups: negotiation pair; relationship/retention/repeat-collaboration pages; scoring pages (quality score, ranking, audience quality, selection scorecard)
- [ ] gcc-guides/shared.ts still defines uaemc.gov.ae (Media Council) sources; confirm against NMA when the sites are reachable
- [ ] Plan X (38 pages) and podcast (29 pages) consolidation once Search Console data exists (F6 updated only podcast-influencer-marketing-india)
- [ ] youtube-product-reviews and instagram-partnership-ads still unsourced; TikTok Shop / YouTube Shopping availability by country unverified
- [ ] Monitor Indian rankings for owners whose seoTitle dropped 'in India' in F6 (Instagram, LinkedIn, podcast, Reddit)
- [ ] Consolidation candidate: influencer-marketing-fintech-brands-india vs personal-finance-influencer-marketing-india (F7 MONITOR)
- [ ] Verify CCPA 2024 greenwashing guidelines against the official text (consumeraffairs.nic.in unreachable on 2026-10-14)
- [ ] Monitor attribution vs incrementality, sales-tracking vs influencer-marketing-sales, scale-pause-stop vs testing/post-mortem
- [ ] Monitor UGC ads / testing / hooks trio and e-commerce vs D2C UGC pages once Search Console is connected
- [ ] Thin UGC owners not yet updated: always-on-ugc-marketing, instagram-ugc-marketing, ugc-marketing-strategy
- [ ] Monitor brand vs agency post-mortem pair once Search Console is connected

## How to regenerate the checks

Scripts used this round were run from a scratch directory (not committed):

1. A crawler over `next start`.
2. A Node `--experimental-strip-types` loader that imports `src/content/blog.ts` directly, for per-article checks.
3. A field-level diff against the previous commit.

To repeat: build, run `next start`, crawl `/` plus `/sitemap.xml`, and compare against `docs/seo-register-*.csv`.

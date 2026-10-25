# Implementation log: product experience batch 17 (2026-10-25)

Git status was checked first (60 uncommitted paths from earlier batches, preserved). Nothing is committed or deployed.

## Files changed

| File | Change |
| --- | --- |
| `src/content/brand-guides/content-gaps.ts` | Two new posts appended |
| `src/lib/blogCta.ts` | Two CTA entries (returns: mid `/services/ugc-content-production`; distributors: mid `/services/regional-influencer-marketing`; both bottom CTAs go to the enquiry form) |
| `src/content/brand-guides/programs-and-industries.ts` | influencer-product-seeding-program: section `few-samples` after "Managing seeding at scale"; `updatedAt` 2026-10-14 → 2026-10-25; meta description rewritten (164 → 147 characters) |
| `src/content/brand-guides/planning-and-programs.ts` | influencer-marketing-customer-retention: inbound link paragraph under "Reducing confusion and returns" (no other change) |
| `src/content/blog.ts` | influencer-marketing-fmcg-brands-india: inbound link paragraph under "Retail and online discovery" |
| `public/blog/brand-guides/creator-content-reduce-returns.svg` | New hero |
| `public/blog/brand-guides/influencer-marketing-distributors-retailers.svg` | New hero |

## URLs

| URL | Status | Title tag (characters) | Meta (characters) |
| --- | --- | --- | --- |
| /blog/creator-content-reduce-returns | Created | 52 | 154 |
| /blog/influencer-marketing-distributors-retailers | Created | 54 | 154 |
| /blog/influencer-product-seeding-program | Updated, URL preserved | Unchanged | 147 |
| /blog/influencer-marketing-customer-retention | Link added, URL preserved | Unchanged | Unchanged |
| /blog/influencer-marketing-fmcg-brands-india | Link added, URL preserved | Unchanged | Unchanged |

## Issues

- **Duplicate links removed:** three duplicate "see…" sentences inside list items (list items can't hold links) were removed before saving, and the linked versions were kept in paragraphs. Verified with grep.
- **Statistics left out:** vendor return figures (for example "75% of returns are fit-related") were found in research but not used, because they're unverified.
- **No content removed:** `git diff` shows only additions on the updated pages, apart from the replaced meta line.

## Awaiting approval

No new items. Outstanding from earlier batches:
- commit and deploy;
- the Pinterest and Snapchat consolidation proposals, the post-mortem pair and other consolidation pairs;
- the esports redirect;
- the H1 word-wrap CSS;
- the rupee ranges;
- the deferred topics.

## Blocked

None. Search Console query×page data and keyword volumes are unavailable.

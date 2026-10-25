# Implementation log: batch 21 (2026-10-25)

Git status was checked first (65 uncommitted paths from earlier batches, preserved). Nothing is committed, published or deployed. There were no deletions, redirects or URL changes.

## Files

| File | Change | Candidate | Ready for review |
| --- | --- | --- | --- |
| `src/content/brand-guides/content-gaps.ts` | Two new posts appended (whatsapp-commerce-influencer-marketing, influencer-marketing-small-business-customers) | #4, #14 | Yes |
| `src/lib/blogCta.ts` | Two CTA entries (mid `/services/regional-influencer-marketing`; bottom enquiry) | #4, #14 | Yes |
| `src/content/brand-guides/customer-commerce.ts` | customer-advocacy-program: new H2 section `creator-referrals` after "When a customer becomes a creator partner"; `updatedAt` added 2026-10-25 | #7, #19 | Yes |
| `src/content/brand-guides/content-gaps.ts` | dark-social-influencer-marketing: inbound link paragraph | #4 | Yes |
| `src/content/blog.ts` | b2b-influencer-marketing-india: inbound link paragraph | #14 | Yes |
| `public/blog/brand-guides/whatsapp-commerce-influencer-marketing.svg` | New hero (original SVG) | #4 | Yes |
| `public/blog/brand-guides/influencer-marketing-small-business-customers.svg` | New hero (original SVG) | #14 | Yes |

## Metadata

| URL | Title tag (characters) | Meta (characters) |
| --- | --- | --- |
| /blog/whatsapp-commerce-influencer-marketing | 51 | 149 |
| /blog/influencer-marketing-small-business-customers | 59 | 150 |

## Issues

- **Repeated link sentence:** a sentence was repeated inside a list item (list items can't hold links). It was removed, keeping the linked paragraph version.
- **Script error:** an update script stopped after saving two of its three edits because a heading-id lookup failed. The third inbound link (B2B) was added in a separate step, and each edit was verified.

## Approval required

1. Deferred topics #8 and #13.
2. Carried forward:
   - commit and deploy;
   - the consolidation proposals (Pinterest, Snapchat, post-mortem pair and others);
   - the esports redirect;
   - the H1 word-wrap CSS;
   - the rupee ranges.

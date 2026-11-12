# 03 — Social Media Management Service Structure

## URL and routing

- New page: **`/services/social-media-management`** — follows the existing `/services/<slug>` convention. No other URL changed.
- Implemented as a static route `src/app/services/social-media-management/page.tsx` (custom long-form layout). The service is also registered in `src/content/services.ts` (slug `social-media-management`, category `social-media`) so it appears in the services hub, sitemap, Organization `OfferCatalog`, Service JSON-LD and related-service logic.
- `src/app/services/[slug]/page.tsx` excludes the slug from `generateStaticParams` and returns `notFound()` for it, so there is exactly one route for the URL.
- The new category is placed **last** in `serviceCategories`, so the display numbers of the 18 existing services ("Service 01"… on their pages) do not shift. The hub, homepage and nav present it first via `SERVICE_PILLARS`.

## Service architecture (services hub)

```
Services
├── 01 Social Media Management  (#social-media-management)
│     Strategy · Content planning · Creative design · Reels & short-form video
│     Copywriting · Publishing & scheduling · Community management · Analytics & reporting
│     (each links to an anchor on /services/social-media-management)
├── 02 Influencer Marketing  (#influencer-marketing)
│     Plan and manage: Campaign Strategy, Creator Discovery, Outreach & Management, Reporting
│     Campaign types: Paid, Barter, Seeding & Gifting, Affiliate, Ambassador, Product Launches, Social Campaigns
│     Platforms: Instagram, YouTube, LinkedIn
│     Audiences: Regional, Micro & Nano
└── 03 UGC and Content Creation  (#ugc-content-creation)
      UGC Campaigns, UGC Content Production
      (copy covers UGC videos, product demos, creator-led content, repurposing)
```

## Page structure (as built)

| # | Section | Anchor | Notes |
|---|---|---|---|
| 1 | Hero: H1 "Social media management services: Social media that keeps your brand consistent, relevant and connected." | — | CTAs: Discuss Your Social Media Goals (→ inquiry, `pos=hero`), Explore Our Services. Coded content-calendar illustration. |
| — | Direct answer: "What is social media management?" | — | 60-word quotable definition (AEO) |
| 2 | Business problem (9 problems) | — | |
| 3 | Our approach (9-step loop) | `#approach` | |
| 4 | Service breakdown A–H with sticky index | `#services`, `#strategy` … `#analytics-reporting` | Notes on video shoots, community limits, metric availability |
| — | Mid CTA band | — | "Let's Plan Your Social Presence" (`pos=mid`) |
| 5 | Platforms (7) | `#platforms` | "Not every platform is included in every engagement" |
| 6 | SMM + influencer marketing together | `#with-influencer-marketing` | Links to influencer hub and UGC production; no-guarantee line |
| 7 | Industries (11) | `#industries` | No industry claims or results |
| 8 | Working process (6 steps, Kudozz vs your team) | `#process` | |
| 9 | Included vs scoped separately | `#scope` | 8 included items, 10 separately scoped; CTA "Tell Us About Your Brand" (`pos=scope`) |
| 10 | FAQs (14) | — | Mirrored in FAQPage JSON-LD |
| — | Related services (3) | — | UGC Production, Social Campaigns, Instagram Influencer Marketing |
| 11 | Final CTA: "Let's build a social presence your audience wants to follow." | — | "Talk to Our Team" (`pos=bottom`) |

## Lead attribution

All page CTAs use `/for-brands?from=service:social-media-management&pos=<position>&t=Social%20Media%20Management#inquiry`. The existing form already reads `from`, `pos` and `t` into hidden fields, so the lead email will show the source. Because the form has no "Social Media Management" option, `t` does not pre-select the dropdown (see report 13).

## Content source

All copy lives in `src/content/social-media-management.ts`, with rules at the top of the file (no prices, no results, separately-scoped items never described as included).

# 05 — Homepage and Navigation Changes

## Homepage (`src/app/page.tsx`, `src/components/home/*`, `src/content/home.ts`)

| Element | Before | After | Why |
|---|---|---|---|
| `<title>` | Best Influencer Marketing Agency in India \| Kudozz | **Unchanged** | Homepage ranks for "influencer marketing agency" (2,901 impr., pos 11.7). Rule 14: don't sacrifice influencer SEO. |
| Meta description | Influencer-only | "Kudozz is an influencer marketing and social media management agency in India: creator campaigns, brand social media, UGC and reporting tied to your goals." (155 chars) | Reflects expanded offer; keeps lead phrase. |
| H1 search phrase (eyebrow) | Best Influencer Marketing Agency in India | **Unchanged** | Same reason as title. |
| H1 visual headline | "Influence isn't bought. It's built." | "Build your brand's social presence with strategy, content and *creators.*" | Brief's recommended direction; size reduced so it fits (11vw mobile → 4.1rem desktop). |
| Hero copy | Influencer-only | "Kudozz brings social media management, influencer marketing and creator-led content together…" Influencer markets kept; SMM not claimed for other markets. | |
| Hero primary CTA | Plan Your Campaign | **Let's Discuss Your Brand** (same tracked link `pos=hero`) | Brief's brand CTA. |
| Hero facts | "8 Core services" (inaccurate) | "3 Connected service areas" | Accuracy. |
| **New section** `ServiceAreas` (after industry chips) | — | "Social media, creators and content, planned together." 3 pillar cards (SMM, Influencer Marketing, UGC & Content), 2 supporting cards (Creator Discovery, Campaign Management), brand/creator split: **Let's Discuss Your Brand** / **Join Our Creator Network** | Service discovery + separate brand and creator journeys. |
| `WhatWeDo` | Eyebrow "Our Services"; took the first category | Eyebrow "Influencer Marketing"; explicitly shows Plan-and-manage rows + other influencer categories; excludes SMM | Keeps influencer depth; avoids duplicating SMM. |
| FAQ | 8 influencer FAQs, title "…before hiring an influencer agency." | +2 SMM FAQs at top (10 total); title "Questions brands ask before working with Kudozz." | FAQ JSON-LD updates automatically. |
| Final CTA | "Ready to plan your next creator campaign?" | "Let's talk about your brand's social presence." Buttons: Let's Discuss Your Brand / Join Our Creator Network | `FinalCTA` now takes optional props; all other pages keep the original copy. |

Unchanged on purpose: WhyInfluencer stats, HowItWorks (influencer campaign flow), WhyKudozz, India coverage, Global markets, Creator network. The homepage gained one section; nothing removed, to protect existing internal links and influencer content.

## Navigation (`src/config/site.ts`, `src/components/navigation/Header.tsx`)

```
Home · For Brands · For Creators · Services ▾ · Blog · Contact      [Talk to Our Team]
                                   ├ Social Media Management   → /services/social-media-management
                                   ├ Influencer Marketing      → /services#influencer-marketing
                                   ├ Campaign Strategy         → /services/campaign-strategy
                                   ├ Creator Discovery         → /services/creator-discovery
                                   ├ Outreach Management       → /services/outreach-management
                                   ├ Social Campaigns          → /services/social-campaigns
                                   ├ Product Launches          → /services/product-launches
                                   ├ UGC & Content Creation    → /services/ugc-content-production
                                   └ All services              → /services
```

- Desktop: dropdown opens on hover **and keyboard focus** (`focus-within`), so tabbing from "Services" walks through the menu. "Services" shows as active on any `/services/*` page.
- Mobile: Services sub-links listed under the Services item; tapping one closes the menu (including same-page hash links).
- Nav gap reduced at `lg` (gap-6, gap-9 from `xl`) to fit the extra Contact item at 1024px. Verified no horizontal overflow at 1024px.
- Nav CTA: "Start a Campaign" → **"Talk to Our Team"** (same URL), because "campaign" no longer covers the offer.

## Footer

"For Brands" column now: Why Kudozz · Social Media Management · Influencer Marketing · UGC & Content · Markets We Serve · Free Tools · Talk to Our Team. "Services" remains in the Agency column. The footer description (from `siteConfig.description`) now mentions social media management.

## Site-wide defaults

- `siteConfig.description` (footer, Organization schema, default meta): "Kudozz is an influencer marketing and social media management agency in India…" Influencer campaigns listed for the six markets; SMM not claimed outside India.
- Root layout default/OG/Twitter title: "Kudozz — Influencer Marketing & Social Media Agency".
- `siteConfig.keywords`: added "social media management services", "social media management agency".

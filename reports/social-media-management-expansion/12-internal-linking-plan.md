# 12 — Internal Linking Plan

## Links implemented (pointing to `/services/social-media-management`)

| Source | Placement | Anchor text |
|---|---|---|
| Every page | Header Services dropdown (desktop) and mobile sub-list | Social Media Management |
| Every page | Footer → For Brands column | Social Media Management |
| `/` | ServiceAreas pillar card (title + CTA) | Social Media Management / Explore Social Media Management |
| `/` | FAQ answers (text only) | — |
| `/services` | Pillar 01 feature block: title, button, and 8 capability links to page anchors | Social Media Management, Explore Social Media Management, Social media strategy … Analytics and reporting |
| `/services` | `ItemList` JSON-LD | — |
| `/for-brands` | Services grid card | Social Media Management |
| `/about` | Services list (data-driven) | Social Media Management |
| 8 service pages | `socialNote` paragraph under the definition | social media management |
| Future SMM blog posts | Mid-article CTA via `blogCta.ts` matcher | Explore Social Media Management |
| `sitemap.xml` | Auto-generated from `services` | — |
| `llms.txt` | Core Services + Key Pages + relevance map | Social Media Management |

## Links out from the SMM page

| Target | Why |
|---|---|
| `/services` (hero, final CTA) | Service discovery |
| `/services#influencer-marketing` | "Explore Influencer Marketing" in the together section |
| `/services/ugc-content-production` | UGC link in together section + related card |
| `/services/social-campaigns`, `/services/instagram-influencer-marketing` | Related cards |
| `/markets` | Non-India visitors |
| `/for-brands?...#inquiry` ×4 | Hero, mid, scope, bottom CTAs (tracked by `pos`) |

## New hub anchors (stable, safe to link to)

`/services#social-media-management`, `/services#influencer-marketing`, `/services#ugc-content-creation`; on the SMM page: `#approach`, `#services`, `#strategy`, `#content-planning`, `#creative-design`, `#reels-short-form-video`, `#copywriting`, `#publishing`, `#community-management`, `#analytics-reporting`, `#platforms`, `#with-influencer-marketing`, `#industries`, `#process`, `#scope`.

## Recommended next (not implemented)

| Source | Suggested link | Reason |
|---|---|---|
| `/blog/hire-social-media-manager-creator` | One line for brand readers → SMM page | Brand founders may land here; keep creator CTA |
| `/blog/employee-influencer-marketing`, `/blog/linkedin-thought-leadership-marketing`, `/blog/founder-creator-brand` | SMM page `#platforms` | Company page + founder content coordination |
| `/blog/repurpose-influencer-content`, `/blog/ugc-marketing-d2c-brands` | SMM page `#with-influencer-marketing` | Organic reuse of creator content |
| `/blog/influencer-campaign-comment-management` | SMM `#community-management` | Ongoing community vs campaign comments |
| `/blog/top-social-media-platforms-influencer-marketing-india` | SMM `#platforms` | Brand-account angle |
| Homepage `HowItWorks` | — | Leave influencer-specific; adding SMM steps would muddle it |
| New SMM articles (report 10) | Cross-link creator twins both ways | Keeps creator and brand intents separate |

Validation: 1,003 unique internal links crawled from 17 key pages on the local production build; all returned 200 (see report 14).

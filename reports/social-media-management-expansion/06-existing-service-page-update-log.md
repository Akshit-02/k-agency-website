# 06 — Existing Service Page Update Log

Method: a new optional `socialNote` field on `Service` (`src/content/services.ts`), rendered by `ServiceDetail` directly under each page's "What is…?" answer as a short paragraph with an inline link to `/services/social-media-management`. Titles, meta descriptions, H1s, FAQs, process, deliverables and URLs of these pages were **not** changed, so each page keeps its search intent.

| Service page | Contextual note added (link text: "social media management") | Intent preserved |
|---|---|---|
| `/services/campaign-strategy` | Influencer campaigns work best when they fit the plan for your own accounts… can run on the same calendar as your creator campaigns. | Influencer marketing strategy |
| `/services/creator-discovery` | Creators you find for a campaign can also help with the content your own accounts need every month… | Creator discovery |
| `/services/outreach-management` | Good creator relationships don't have to end with one campaign… briefed for ongoing content on the brand's own channels. | Outreach & campaign management |
| `/services/social-campaigns` | A social campaign is a burst of activity around a moment. Between campaigns, your own accounts still need a steady rhythm… | Multi-creator social campaigns (note: this page's title "Multi-Creator Social Media Campaign Services" is distinct from "Social Media Management Services") |
| `/services/product-launches` | A launch needs your own accounts ready too: teasers, launch-day posts and follow-up content… | Launch campaigns |
| `/services/ugc-campaigns` | UGC isn't only for ads. Where usage rights allow, it can fill your organic feed… | UGC campaigns |
| `/services/ugc-content-production` | Produced UGC can do more than one job… planned into the monthly calendar… | UGC production |
| `/services/instagram-influencer-marketing` | Creator posts send people to your profile. What they find there matters… | Instagram influencer marketing |

Reviewed, **not changed** (no natural connection, or would dilute intent): paid, barter, seeding & gifting, affiliate, ambassador programs, reporting, YouTube, LinkedIn, regional, micro & nano.

## Other component changes affecting service pages

- `ServiceDetail.tsx`: renders `socialNote` (violet left border, consistent with the site's callout style).
- `ServiceRow.tsx`: new optional `headingLevel` prop (default `h3`, unchanged behaviour); the services hub uses `h4` under category `h3`s for a correct heading hierarchy.
- Related-service cards: unchanged on every existing page. SMM sits last in the service order, and the five services before it (Instagram, YouTube, LinkedIn, Regional, Micro & Nano) all have three hand-picked related services, so the wrap-around fallback never reaches it. SMM itself links out to UGC Production, Social Campaigns and Instagram Influencer Marketing.
- Display numbers of all 18 existing services unchanged ("Service 01"–"18").

## For Brands page (`/for-brands`)

| Element | Change |
|---|---|
| Title | "Influencer Marketing Services for Brands: Strategy to Reporting" → "Influencer Marketing & Social Media Services for Brands" (GSC: 34 impressions, negligible risk) |
| Description | Mentions influencer campaigns, brand social media management and UGC |
| H1 phrase | "Influencer marketing and social media services for brands" (slogan unchanged) |
| Hero copy / CTA | Covers creators, own social media and UGC; CTA "Tell Us About Your Brand" |
| Problems solved | +2 rows: accounts going quiet between campaigns; creator content disappearing after one post. Heading broadened. |
| Services grid | Rebuilt: 8 **linked** cards grouped by area (Social media, Influencer marketing ×5, UGC, Measurement). Previously 5 unlinked cards. |
| FAQs | +1 "Can Kudozz manage our social media as well as influencer campaigns?"; minimum-budget answer notes SMM is usually scoped month by month (assumption, see report 02) |

The For Brands page stays the broad commercial overview; it does not carry SMM detail that competes with the dedicated page.

## For Creators page

Reviewed and intentionally **unchanged**. Its job is creator registration; adding agency-service copy would dilute it. Creators still see the expanded offer in the shared nav and footer.

## About page

"What We Do" heading now "An influencer marketing and social media agency for brands in India." and one sentence added on social media management. The services list there is generated from data, so SMM appears automatically.

# 06 · Internal Linking Report

## 1. Links changed

| Page | Before (related services) | After | Why |
|---|---|---|---|
| `/services/influencer-marketing` | UGC production, social media, micro & nano | **UGC marketing (`ugc-campaigns`), social media, UGC production** | The brief asks for links to UGC and social media. Micro & nano is already listed in the pillar's "What's included". |
| `/services/ugc-campaigns` | UGC production, paid, affiliate | **Influencer marketing, UGC production, social media** | Links to the other two core services and to its production sibling |
| `/services/ugc-content-production` | UGC campaigns, paid, regional | **UGC marketing, influencer marketing, social media** | Same |
| `/services/social-media-management` | UGC production, social campaigns, Instagram | **Influencer marketing services, UGC marketing, Instagram influencer marketing** | Links to the other two core services. Its "with influencer marketing" section still links to UGC production and the influencer pillar. |
| `/services/instagram-influencer-marketing` | YouTube, UGC production, social campaigns | **Influencer marketing (pillar)**, YouTube, UGC marketing | Points the sub-page up to its parent |
| `/services/youtube-influencer-marketing` | Instagram, launches, reporting | **Pillar**, Instagram, launches | Same |
| `/services/regional-influencer-marketing` | Micro & nano, discovery, social campaigns | **Pillar**, micro & nano, discovery | Same |
| `/services/micro-nano-influencer-marketing` | Barter, regional, discovery | **Pillar**, barter, regional | Same |
| `/services/product-launches` | Seeding, social campaigns, YouTube | **Pillar**, seeding, UGC marketing | Same; launch content is often reused as UGC |

Anchor text for related-service cards is each service's name ("Influencer Marketing Services", "UGC Campaigns", etc.). It's descriptive and varies by target, with no repeated exact-match "best … agency" anchors.

## 2. Links verified

- **250 unique internal paths** linked from the 21 service pages, `/` and `/for-brands` (header, footer, body, guides, related, markets and CTAs) were requested from the production server. **All returned 200.**
- **Enquiry CTAs are unchanged**: `/for-brands?from=service:{slug}#inquiry` (hero) and `…&pos=bottom#inquiry`. The SMM page keeps `pos=hero/mid/bottom&t=Social Media Management`.
- Breadcrumbs (Home → Services → service) and BreadcrumbList schema are unchanged.

## 3. Guide links (blog → service context)

Every core page already links 5–8 relevant guides ("Guides on this topic"). For example, the pillar links `choose-influencer-marketing-agency-india`, `influencer-campaign-management` and `influencer-marketing-agency-vs-in-house`; UGC campaigns links `what-is-ugc-marketing`, `ugc-content-cost-india` and `ugc-ads-indian-brands`; SMM links its grouped guides. No changes were needed. No new links to the "best … agencies" listicles were added, so the list pages don't gain authority on agency queries.

## 4. Recommended (not implemented): blog → service in-body links

The automatic end-of-article link (`src/lib/blogServiceLink.ts`) already routes UGC topics to `ugc-campaigns`, which now matches the UGC keyword owner. In-body contextual links would still help in these posts:

| Article (GSC impr) | Link to add |
|---|---|
| `influencer-marketing-agency-pitch-questions` (522) | "influencer marketing services" → `/services/influencer-marketing` |
| `influencer-marketing-agency-fees-india` (435) | "what our influencer marketing services include" → pillar |
| `influencer-campaign-management` guide | "influencer campaign management services" → `/services/outreach-management` |
| `what-is-ugc-marketing` (327) | "UGC marketing agency" → `/services/ugc-campaigns` |
| `ugc-content-cost-india` (160) | "UGC video production" → `/services/ugc-content-production` |
| `instagram-reels-influencer-marketing` (the site appears for "instagram reels influencer marketing": 221 impr, pos 7.3) | "Instagram influencer marketing agency" → `/services/instagram-influencer-marketing` |
| `choose-social-media-management-agency`, `social-media-management-cost-india` | "social media marketing and management" → `/services/social-media-management` |

These are blog edits, which the brief excluded ("do not rewrite unrelated blog articles"), so they need your go-ahead.

# 04 — CTA and link audit

## Destination

Every Discovery link resolves to the same destination with only the tracking parameters varying:

```
https://discover.kudozz.in/?utm_source=kudozz_website&utm_medium=referral&utm_campaign=discovery_promotion&utm_content=<placement>
```

All are rendered as `<a href=… target="_blank" rel="noopener noreferrer">` with a visually hidden "(opens in a new tab)", verified in the server HTML. They're plain crawlable anchors (no JS navigation). `discover.kudozz.in` is a `kudozz.in` subdomain, so it is already allowed by the site's outbound-link policy (`src/lib/links.ts`).

## Placements (verified on the rendered pages, dev server, 25 Nov 2026)

| Page | Placements found (`utm_content`) | Anchor text |
| --- | --- | --- |
| `/` | `nav_desktop`, `homepage_hero`, `homepage_secondary`, `footer` (+ `nav_mobile` when the menu is open) | Discover Creators · Explore Kudozz Discovery · Start discovering creators · Kudozz Discovery |
| `/services/influencer-marketing` | nav, `service_feature`, `service_compact`, footer | Explore Creator Discovery · Explore Kudozz Discovery |
| `/services/creator-discovery` | nav, `service_feature`, footer | Try Kudozz Discovery |
| `/services/ugc-campaigns` | nav, `service_compact`, footer | Discover Creators |
| `/services/ugc-content-production` | nav, `service_compact`, footer | Discover Creators |
| `/services/micro-nano-influencer-marketing` | nav, `service_compact`, footer | Discover Creators |
| `/services/instagram-influencer-marketing` | nav, `service_compact`, footer | Explore Kudozz Discovery |
| `/services/social-media-management` | nav, footer only | — (intentional, see below) |
| `/services/youtube-influencer-marketing` | nav, footer only | — (tool is Instagram-only) |
| `/blog/how-to-find-instagram-influencers` | nav, `blog_article`, footer | Explore Kudozz Discovery |
| `/blog/ugc-video-scripts` | nav, footer only | — (not about finding creators) |

## Internal (agency) CTAs added alongside

| From | Link | Purpose |
| --- | --- | --- |
| Homepage section | `/services/influencer-marketing` | "Looking for end-to-end influencer campaign management?" |
| Homepage section | `/for-brands?src=homepage&cat=Homepage&pos=discovery&t=Homepage#inquiry` | "Need help with your influencer campaign?" — uses the existing `homeInquiryHref`, so leads are attributed as `pos=discovery` in the existing form tracking. |

## Pages deliberately left out

| Page | Reason |
| --- | --- |
| Social media management (`/services/social-media-management`) | About running a brand's own accounts; no natural creator-search context. |
| Social campaigns, campaign strategy, outreach, product launches, ambassador, reporting, paid/barter/seeding/affiliate services | Agency-execution pages; nav + footer links are enough. Easy to add in `serviceDiscovery` later. |
| YouTube / LinkedIn / regional service pages | The tool only lists Instagram creators. |

## Blog matching rules (`getBlogDiscoveryCta`)

Shows on **45 of 1,070** articles — full list in `blog-cta-matches.txt`. An article qualifies when **all** hold:

1. Brand audience (creator-facing Creator Resources keep their own CTAs).
2. Platform is Instagram or multi-platform.
3. Not a guide for another market (UAE, KSA, UK, AU, Singapore, GCC, diaspora), not an agency listicle/comparison, not a location guide.
4. Topic is *Creator Discovery* / *Creator Selection*, **or** the slug is about finding, choosing, vetting, shortlisting or contacting creators, **or** it's an Instagram article about creators/influencers.

Placement: after the last article block (never after the intro), before the "Related Kudozz service" line. The mid-article agency CTA, bottom CTA, FAQ, metadata and URLs are unchanged.

## Not used anywhere

No unverified claims (database size, "largest", "millions", guaranteed results, "free forever", other platforms, pricing).

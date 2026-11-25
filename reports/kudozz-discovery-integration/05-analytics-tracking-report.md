# 05 — Analytics and tracking

## Existing setup reviewed

- GA4 (`G-HM12X0L35J`) loaded via gtag in `src/app/layout.tsx`.
- Helpers in `src/lib/blogAnalytics.ts` (`blog_mid_cta_click`, `blog_bottom_cta_click`, `brand_lead_form_*`, `generate_lead`) call `window.gtag` directly.
- No GTM, no other provider. The discovery platform has **no analytics** of its own.

Nothing was added to the analytics stack; the new helper reuses `window.gtag` the same way.

## Events implemented (`src/lib/discoveryAnalytics.ts`)

| Event | Fired by (`cta_placement`) |
| --- | --- |
| `discovery_nav_click` | `nav_desktop`, `nav_mobile` |
| `discovery_hero_cta_click` | `homepage_hero` (main button), `homepage_secondary` ("Start discovering creators") |
| `discovery_service_cta_click` | `service_feature`, `service_compact` |
| `discovery_blog_cta_click` | `blog_article` |
| `discovery_footer_click` | `footer` |

Parameters on every event:

| Param | Value |
| --- | --- |
| `source_page` | `window.location.pathname` |
| `cta_placement` | placement id above |
| `cta_label` | visible CTA text |
| `cta_topic` | service slug or blog CTA topic (empty for nav/footer/homepage) |
| `destination_host` | `discover.kudozz.in` |
| `outbound` | `true` |

No personal or form data is sent.

## UTM tagging

`discoveryHref(placement)` adds `utm_source=kudozz_website`, `utm_medium=referral`, `utm_campaign=discovery_promotion`, `utm_content=<placement>`.

Caveat: `discover.kudozz.in/` redirects to `/dashboard/discover` and then to `/login?redirect=…`, so the UTM tags end up URL-encoded inside `redirect`. They are visible in hosting/CDN logs, but nothing on the platform reads them today.

## Recommendations

1. In GA4, register `cta_placement`, `cta_label`, `cta_topic` and `source_page` as event-scoped custom dimensions, and optionally mark `discovery_hero_cta_click` as a key event.
2. To attribute sign-ups, add GA4 (or the same property with a separate data stream) to the discovery app and capture UTMs on first landing (before the login redirect) — a change in `influencer-discovery-fe`, out of scope here.
3. Homepage leads coming from the section are already attributed through the inquiry form's existing `pos=discovery` parameter.

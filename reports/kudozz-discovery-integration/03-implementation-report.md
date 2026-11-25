# 03 — Implementation report

Status: implemented locally, type-checked, linted and production-built (`next build`: 2,252 static pages, exit 0). **Not committed, not deployed.**

## Summary

| Area | What changed |
| --- | --- |
| Homepage | New `DiscoveryPromoSection` directly after `ServiceAreas` (the agency introduction), before the per-service deep dives. Hero and its CTAs are untouched, so the agency lead flow keeps first position. |
| Desktop nav | Outlined lime "Discover Creators ↗" pill (label shortens to "Discover" at 1024–1279px) beside "Talk to Our Team". Existing items/routes unchanged. |
| Mobile nav | "Kudozz Discovery — Discover Creators" card at the top of the open menu, visible without scrolling. |
| Footer | "Kudozz Discovery [Tool]" link at the end of the FOR BRANDS column. |
| Service pages | Feature band on influencer-marketing and creator-discovery; compact strip on influencer-marketing (end), ugc-campaigns, ugc-content-production, micro-nano-influencer-marketing, instagram-influencer-marketing. |
| Blog | Inline aside at the end of the article body on 45 relevant brand articles. Mid-article and bottom agency CTAs unchanged. |
| Analytics | Five GA4 events via the existing `window.gtag`, plus UTM tags per placement. |

## Files

**New**

| File | Purpose |
| --- | --- |
| `src/config/discovery.ts` | `DISCOVERY_URL` (single source), `discoveryHref(placement)` UTM builder, verified product facts, feature list. |
| `src/lib/discoveryAnalytics.ts` | `trackDiscoveryClick(placement, label)` → GA4 event mapped from placement. |
| `src/content/discovery.ts` | Per-service copy (`serviceDiscovery`) and blog matcher `getBlogDiscoveryCta(post, ctaSet)`. |
| `src/components/discovery/DiscoveryLink.tsx` | Base external link: UTM href, `target="_blank"`, `rel="noopener noreferrer"`, sr-only "(opens in a new tab)", GA4 click. Used by nav, footer and text CTAs. |
| `src/components/discovery/DiscoveryCTA.tsx` | Button-style CTA on the site's `Button`. |
| `src/components/discovery/DiscoveryDashboardPreview.tsx` | Pure HTML/CSS product mock-up (no images). |
| `src/components/discovery/DiscoveryFeatureCard.tsx` | Feature card. |
| `src/components/discovery/DiscoveryPromoSection.tsx` | Full homepage section. |
| `src/components/discovery/DiscoveryCTABanner.tsx` | One component, three sizes: `feature` / `compact` / `blog`. |
| `src/components/discovery/DiscoveryBlogCTA.tsx` | Thin blog wrapper around the banner. |

**Updated** (additive only; nothing deleted)

| File | Change |
| --- | --- |
| `src/app/page.tsx` | Inserted `<DiscoveryPromoSection />`. Metadata/schema untouched. |
| `src/components/ui/Button.tsx` | Optional `external` (renders `<a target=_blank rel="noopener noreferrer">` + sr-only note) and `onClick` on link buttons; new `bright-dark` variant (lime, fills paper on hover so it stays visible on ink). Existing variants/behaviour unchanged. |
| `src/components/navigation/Header.tsx` | Desktop pill + mobile card. |
| `src/components/layout/Footer.tsx` | `FooterColumn` gained optional `extra` slot; Discovery link added. |
| `src/components/services/ServiceDetail.tsx` | Renders feature/compact banners when `serviceDiscovery[slug]` has them. |
| `src/app/blog/[slug]/page.tsx` | Renders `DiscoveryBlogCTA` after `ArticleBody` when the matcher returns copy. |
| `src/app/globals.css` | `kz-discovery-rise` keyframe + class; `.kz-discovery` border-colour scope (see below). |

## The dashboard preview

Built from the real Discover screen: URL bar `discover.kudozz.in/dashboard/discover`, sidebar (Discover / My lists / Help & support / Credits), search placeholder "Search by name or @username…", Filters button with count, real follower bands, filter chips, "Highest engagement" sort, card view with Save/Profile, a profile panel with the engagement meter and **real** reveal costs (Email 1 credit, Phone 2 credits), and a "Added to list" toast.

Creator names, handles and numbers are **blank placeholder bars**; avatars are abstract gradients. The figure caption says: "Illustrative preview of the Kudozz Discovery interface. Creator details are hidden and no live data is shown." The whole mock-up is `aria-hidden`; the caption is the accessible description. The sidebar hides at 1024–1535px and below 768px; the profile panel shows from 1024px; the toast from 768px.

## Design

Ink section with coral and lime glows and a masked grid (the site's own palette: `ink`, `paper`, `coral`, `lime`), Fraunces display heading with the coral italic accent used elsewhere, the site's square-edged, 1.5px-border, offset-shadow language. The brief's "terracotta / champagne" were mapped to the existing coral / paper tokens rather than adding new colours.

## Pre-existing issue found (not fixed site-wide)

`globals.css` has an **unlayered** `* { border-color: var(--color-line); }`. Tailwind v4 utilities live in a cascade layer, so that rule beats every `border-<colour>` utility on the site — e.g. `Eyebrow`'s `border-ink` and the Services dropdown's `border-paper/15` actually render as `--color-line`. Fixing it globally would change the look of many pages, so it was left alone. Discovery components opt out with a scoped rule:

```css
.kz-discovery, .kz-discovery * { border-color: revert-layer; }
```

Recommendation: move the global rule into `@layer base` in a separate, visually reviewed change.

## Safeguards honoured

No changes to the discovery app, auth, forms, API routes, SEO URLs, metadata or existing components' behaviour; no new dependencies; no new pages; nothing deployed.

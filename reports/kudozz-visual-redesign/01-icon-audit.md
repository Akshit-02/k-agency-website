# 01 · Icon audit (before redesign)

Baseline: commit `3db209e`. Scope: everything under `src/` plus `public/`. Searched for inline `<svg>`, SVG files, `lucide-react` imports, emoji used as icons, CSS/data-URI icons, icon fonts, Lottie, and decorative graphics.

## Summary

| Source | Count | Verdict |
|---|---|---|
| `ServiceMotif` (8 abstract animated shapes) shared by 20 services | 8 shapes → 20 services | **Replace (P1)**: no relation to the service, reused across unrelated services, animated without end |
| Generic Lucide icons standing in for concepts (Sparkles, Layers, Users, MessageCircle, repeated Check) | 11 placements | **Replace (P1)** |
| Social links: Instagram drawn as `AtSign` (@); LinkedIn and YouTube hand-drawn outlines (`SocialIcons.tsx`) | 3 | **Replace (P1)**: inaccurate platform marks |
| Platform sections with no platform mark (SMM page, 7 platforms) | 7 | **Add (P2)** |
| Sections carried by text with no meaningful visual (home process, service areas, why-Kudozz, creator steps, SMM approach and capabilities) | ~40 cards | **Add (P2)** |
| Lucide UI controls (arrows, chevrons, menu, close, plus, search, mail, download, check in lists) | ~30 | **Keep**: clear, consistent, one library |
| Decorative graphics (`NetworkField`, `Waveform`, `BroadcastRings`, `CampaignCollage`, `ContentCalendarGraphic`) | 5 | **Keep** with small fixes, see below |
| Brand assets (`KudozzLogo/Mark/Wordmark`, `public/brand/*`, `icon.svg`, OG/app icons) | — | **Out of scope**: brand identity |
| Blog article diagrams (`public/blog/**.svg`) | 626 files, 2.5 MB | **Out of scope**: article content |
| Emoji as icons, icon fonts, Lottie | 0 | — |

## Inventory

| # | File | Where it appears | Current visual | Intended meaning | Relevant | Understandable | Generic/outdated | Recommendation | Pri |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `graphics/ServiceMotif.tsx` via `services/ServiceRow.tsx` | Home "What we do", `/services` directory (20 rows) | orbit / grid / wave / beacon / loop / pulse / channel / ledger, looping animation | Which service this row is | No | No | Yes (abstract, "orbit" used ×4, "loop" ×3) | One pictogram per service; official marks for platform services | P1 |
| 2 | same, via `brands/BrandServices.tsx` | For Brands → services grid (8 cards) | same | Service | No | No | Yes | Same | P1 |
| 3 | same, via `services/ServiceDetail.tsx` | Every service page hero + "Related services" (3 cards) | same, coral | Service | No | No | Yes | Same, hero in a dimensional tile | P1 |
| 4 | `layout/Footer.tsx` | Footer on every page | `AtSign` for Instagram, hand-drawn LinkedIn | Social profiles | Partly | @ is not Instagram | Yes | Official marks (Simple Icons) | P1 |
| 5 | `graphics/SocialIcons.tsx` | Footer, contact (commented) | Hand-drawn LinkedIn/YouTube outlines | Platform | Partly | Approximate | Inaccurate redraw | Delete; use official paths | P1 |
| 6 | `app/contact/page.tsx` | Contact (Follow Along block, commented out) | AtSign / LinkedInGlyph | Social | — | — | — | Point to official marks for when re-enabled | P3 |
| 7 | `creators/Benefits.tsx` | For Creators → Why Join (4) | Sparkles, Layers, MessageCircle, Users | Briefs, relevance, communication, growth | Weak | Sparkles/Layers say nothing | Yes | brief / match / outreach / growth pictograms | P1 |
| 8 | `brands/WhyChooseUs.tsx` | For Brands → differentiators (6) | The same `Check` ×6 | Six different strengths | No | Only says "yes" | Yes | discovery / strategy / partnership / workflow / outreach / report | P1 |
| 9 | `graphics/CampaignCollage.tsx` | Home + For Brands hero, "Featured Drop" chip | `Sparkles` | Product drop | Weak | No | Yes | Launch pictogram | P2 |
| 10 | `home/ServiceAreas.tsx` | Home → three service areas + two supporting cards | None (number only) | SMM / influencer / UGC | — | — | — | Dimensional tiles: calendar, creator, phone filming product | P2 |
| 11 | `home/HowItWorks.tsx` | Home → 5 process panels (desktop scroll + mobile stack) | Number only | Brief → strategy → creators → launch → tracking | — | — | — | brief / strategy / discovery / launch / analytics | P2 |
| 12 | `home/WhyKudozz.tsx` | Home → 6 reasons | Coloured bar | Each reason maps to a service | — | Bar carries no meaning | — | Small tile with the linked service's pictogram | P2 |
| 13 | `creators/CreatorHowItWorks.tsx` | For Creators → 4 steps | Number only | Apply → profile → matched → collaborate | — | — | — | apply / profile / match / partnership | P2 |
| 14 | `app/services/social-media-management/page.tsx` approach | SMM → 9 steps | Coloured bar | Nine distinct jobs | — | — | — | Pictogram per step | P2 |
| 15 | same, capabilities | SMM → 8 capability cards | Letter tile A–H | Strategy, planning, design, Reels, copy, publishing, community, analytics | Letters kept (sidebar uses them) | — | — | Add a pictogram per card | P2 |
| 16 | same, platforms | SMM → 7 platform cards | Text only | Instagram, Facebook, LinkedIn, YouTube, Pinterest, X, Snapchat | — | — | — | Official mark next to each name | P2 |
| 17 | same, related services | SMM → 3 cards | None | Service | — | — | — | Service icon | P3 |
| 18 | `app/tools/page.tsx` | Free tools cards | Text label only | Calculator / Checklist / Scorecard | — | — | — | Small Lucide icon by kind | P3 |
| 19 | `brands/CampaignTile.tsx` | Not rendered (FeaturedCampaigns is commented out) | BroadcastRings for every case study | Industry | No | No | Yes | Revisit when case studies go live (industry icon) | P3, deferred |
| 20 | `home/FinalCTA.tsx` | Final CTA on many pages | BroadcastRings (decorative, `aria-hidden`) | Reach | Yes, as decoration | — | No | Keep | — |
| 21 | `graphics/NetworkField.tsx` | Hero collage | Brand-to-creator network | Network | Yes | Yes (has `aria-label`) | No | Keep | — |
| 22 | `graphics/Waveform.tsx` | WhyInfluencer, CreatorsHero, collage | Animated bars | Engagement | Yes | Yes | No | Keep | — |
| 23 | `smm/ContentCalendarGraphic.tsx` | SMM hero | Calendar illustration with Lucide legend | Content calendar | Yes | Yes | No | Keep: already the right concept | — |
| 24 | `forms/FormFields.tsx` | Select chevron (data-URI SVG) | Chevron | Dropdown | Yes | Yes | No | Keep (forms out of scope) | — |
| 25 | Lucide UI icons across ~25 files | Header, breadcrumbs, FAQ, buttons, lists, forms | Arrow, Chevron, Menu, X, Plus, Search, Mail, Download, Check/Minus | Controls | Yes | Yes | No | Keep | — |

## Other findings

- **Motion:** every `ServiceMotif` shape looped forever (`repeat: Infinity`). `MotionConfig reducedMotion="user"` in `layout.tsx` already handles reduced-motion preferences for framer-motion, so this was a distraction problem, not an accessibility bug.
- **Lucide a11y:** `lucide-react` v1 adds `aria-hidden="true"` automatically when no accessible name is given (checked in `Icon.mjs`), so the existing decorative UI icons are already hidden from screen readers.
- **Stroke consistency:** the motifs used 1–1.6 px strokes, while Lucide uses 2 px, so the two sets looked mismatched side by side.

# 03 · Implementation report

Not deployed. All changes are uncommitted in the working tree on `main`.

## New files

| File | Purpose |
|---|---|
| `src/components/icons/Pictogram.tsx` | 34 custom pictograms, plus the `Pictogram` and `IconTile` components |
| `src/components/icons/ServiceIcon.tsx` | Maps each service slug to a pictogram or official platform mark; also `servicePictogram()` and `slugFromServiceHref()` |
| `src/components/icons/PlatformLogo.tsx` | Official single-colour platform mark; `platformIdFromName()` |
| `src/components/icons/platformPaths.ts` | Verbatim Simple Icons path data for 7 platforms |

## Removed

- `src/components/graphics/ServiceMotif.tsx`: 8 abstract shapes, all looping animations.
- `src/components/graphics/SocialIcons.tsx`: hand-drawn LinkedIn and YouTube outlines.
- The `motif` field on `Service` and its 20 values in `src/content/services.ts`. These were presentation data only. No copy, slugs, SEO fields or URLs changed. Each visual is now looked up by slug in `ServiceIcon.tsx`.

## Changes by area

| Area | Change |
|---|---|
| `globals.css` | `.kz-icon` hooks (non-scaling stroke, accent fill) in `@layer components` |
| Home → Service areas | Dimensional tiles: calendar (SMM), creator on phone (influencer), phone filming a product (UGC). Supporting cards: discovery and outreach pictograms |
| Home → What we do, `/services` directory | `ServiceRow` shows each service's own pictogram, or the official mark for Instagram, YouTube and LinkedIn. The accent follows the row's hover colour |
| Home → How it works | brief → strategy → discovery → launch → analytics, on both the desktop scroller and the mobile stack |
| Home → Why Kudozz | Coloured bar replaced with a tile showing the pictogram of the service each reason links to |
| Home/Brands hero collage | "Featured Drop" uses the launch pictogram instead of Sparkles |
| For Brands → Services grid | Service pictograms in paper with lime accents on violet |
| For Brands → Why choose us | Six different pictograms instead of six identical checks, with accent and line recoloured on hover |
| For Creators → Why join | brief, match, outreach, growth (replacing Sparkles, Layers, MessageCircle, Users) |
| For Creators → How it works | apply, profile, match, partnership |
| Service pages (all 20) | Hero tile with the service icon; related services cards with icons |
| SMM page | 9 approach steps and 8 capability cards with pictograms (letters A–H kept for the sidebar); 7 platform cards with official marks; related cards with icons |
| Footer | Official Instagram and LinkedIn marks; `aria-label` now "Kudozz on Instagram/LinkedIn" |
| Contact | Commented "Follow Along" data now uses platform ids; unused imports removed (2 lint warnings fewer) |
| Tools | Calculator, ListChecks or Gauge icon next to each tool's kind label |

## Service → visual map

| Service | Visual |
|---|---|
| Influencer Marketing Services | creator on a phone with a heart |
| Strategy | roadmap to a flag |
| Creator Discovery | profile card under a lens with a check |
| Outreach & Management | brief bubble and agreed reply |
| Social Media Campaigns | megaphone |
| Product Launches | rocket |
| UGC Campaigns | clapperboard |
| UGC Content Production | phone filming a product |
| Ambassador Programs | medal with ribbons |
| Reporting | report with bars |
| Paid campaigns | signed contract and coin |
| Barter | gift out, content back |
| Seeding & Gifting | gift box |
| Affiliate & Performance | commission tag (%) |
| Instagram / YouTube / LinkedIn | official mark |
| Regional | map with pin |
| Micro & Nano | three creators, one highlighted |
| Social Media Management | calendar with an approved post |

## Deliberately not changed

- Brand logo and mark, favicon, OG images and app icons (brand identity).
- 626 blog diagram SVGs in `public/blog` (article content, separate from the site's iconography).
- `ContentCalendarGraphic`, `NetworkField`, `Waveform` and `BroadcastRings`: these already show their concept and are `aria-hidden` or labelled.
- `CampaignTile`: not rendered while case studies are hidden. Give it an industry icon when they return.
- Forms, API routes, email, analytics, metadata, URLs and copy.
- SMM "Sound familiar?" problem list: numbered text works better there than nine more icons.

## Verification

- `tsc --noEmit`: clean.
- `eslint` on changed directories: 0 errors, 1 warning. The warning (unused `socialLinks` on the contact page, kept for the commented block) was already there.
- `next build`: compiled successfully, 2,247 static pages generated.

## Future work

1. **Real 3D renders** (only if the brand direction changes): commission or generate a matched set of 3 hero renders (SMM, influencer, UGC) at one camera angle and light. Export AVIF/WebP at 2× tile size (about 192 px, under 15 KB each), use them only inside `IconTile lg` on the home service areas, and keep the pictograms everywhere else.
2. **Case studies:** add an industry pictogram set (beauty, fitness, fintech, food) when `FeaturedCampaigns` is re-enabled.
3. **Blog diagrams:** a separate pass if their style should match the pictogram line weight.

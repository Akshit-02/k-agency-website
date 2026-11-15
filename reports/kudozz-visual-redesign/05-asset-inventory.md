# 05 · Asset inventory (after redesign)

All new assets are inline SVG in React components: no image files, no network requests and no new dependencies.

## Size and performance

| Asset | Source size | Notes |
|---|---|---|
| `Pictogram.tsx` (34 glyphs + `IconTile`) | 16.4 KB | Server component, no client JS. Each page's HTML contains only the glyphs it renders (about 0.3–0.9 KB each) |
| `platformPaths.ts` (7 marks) | 6.8 KB | Instagram is the largest path (about 2 KB). Imported only where a mark is rendered |
| `PlatformLogo.tsx`, `ServiceIcon.tsx` | 4.3 KB | Server components |
| Removed: `ServiceMotif.tsx` | −6.0 KB | Was a `"use client"` component with framer-motion looping animations on every service row |
| Removed: `SocialIcons.tsx` | — | |

Net result: fewer client components and no endless JS animations in service lists. There are no filters, masks or gradients in any icon; the most complex glyph has 8 elements. The production build output is unchanged in shape (2,247 static pages).

## Pictograms (`<Pictogram name="…" />`)

| Name | Depicts | Used in |
|---|---|---|
| creator | creator on a phone, heart | Influencer Marketing service; home service area |
| strategy | roadmap to a flag | Strategy service; How it works 02; WhyChooseUs; SMM approach 04 and capability A |
| discovery | profile card under a lens with a check | Creator Discovery; How it works 03; supporting card; WhyChooseUs |
| outreach | brief bubble and agreed reply | Outreach & Management; supporting card; WhyChooseUs; creator benefit |
| campaign | megaphone | Social Media Campaigns |
| launch | rocket | Product Launches; How it works 04; hero collage |
| ugc | phone filming a product | UGC Content Production; home UGC service area |
| production | clapperboard | UGC Campaigns |
| ambassador | medal | Ambassador Programs |
| report | report with bars | Reporting; WhyChooseUs; SMM approach 09 |
| paid | contract and coin | Paid Influencer Campaigns |
| barter | gift out, content back | Barter campaigns |
| gift | gift box | Seeding & Gifting |
| affiliate | commission tag | Affiliate & Performance |
| regional | map with pin | Regional Influencer Marketing |
| micro | three creators | Micro & Nano |
| calendar | calendar with an approved post | Social Media Management; SMM approach 05 and capability B |
| brief | clipboard brief | How it works 01; SMM approach 01; creator benefit |
| target | target with an arrow | SMM approach 03 |
| analytics | dashboard trending up | How it works 05; SMM capability H |
| research | chart under a lens | SMM approach 02 |
| community | person with a reply bubble | SMM approach 08 and capability G |
| publish | post with a clock | SMM approach 07 and capability F |
| approval | checklist signed off | SMM approach 06 |
| design | palette | SMM capability C |
| video | vertical video | SMM capability D |
| copy | text lines and a pencil | SMM capability E |
| partnership | creator and brand joined | WhyChooseUs; creator step 04 |
| workflow | connected stages | WhyChooseUs |
| match | audience overlap | Creator benefit; creator step 03 |
| growth | rising bars and an arrow | Creator benefit |
| apply | profile form with a plus | Creator step 01 |
| profile | profile with a content grid | Creator step 02 |
| shield | shield with a check | Available (authenticity checks), not yet placed |

## Platform marks (`<PlatformLogo platform="…" />`)

| Id | Source | Used in |
|---|---|---|
| instagram | Simple Icons 16.37.0 | Footer; SMM platforms; Instagram service row and hero |
| linkedin | Simple Icons 13.21.0 | Footer; SMM platforms; LinkedIn service |
| youtube | Simple Icons 16.37.0 | SMM platforms; YouTube service |
| facebook, pinterest, x, snapchat | Simple Icons 16.37.0 | SMM platforms |

License: Simple Icons data is CC0. The marks remain trademarks of their owners and are used only to name the platform.

## Lucide UI icons kept

ArrowRight, ArrowUpRight, ArrowDown, ChevronDown, ChevronRight, Menu, X, Plus, Minus, Check, CheckCircle2, Search, Mail, Download, Play, TrendingUp. The calendar illustration's legend uses Clapperboard, GalleryHorizontalEnd, Image, MessageCircle and BarChart3. Calculator, ListChecks and Gauge are new on the tools page.

## Unchanged graphics

`KudozzLogo/Mark/Wordmark`, `NetworkField`, `Waveform`, `BroadcastRings`, `CampaignCollage` (one icon swapped), `ContentCalendarGraphic`, `public/brand/*`, and `public/blog/**` (626 diagrams).

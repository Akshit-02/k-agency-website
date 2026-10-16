# Kudozz LinkedIn company page covers

Five cover concepts for the Kudozz LinkedIn company page. Nothing here has been uploaded to LinkedIn.

## Files

| Folder | Contents |
|---|---|
| `final/` | Upload-ready PNGs. `kudozz-linkedin-banner-0N-*.png` is 2256 × 382 (recommended upload). `*-1128x191.png` is the exact display size, if you prefer it. |
| `masters/` | 4512 × 764 high-resolution masters (4× display size). |
| `previews/` | Contact sheet of all five, plus one preview per concept showing an approximate desktop company-page header (placeholder logo box bottom-left) and a phone-width view. |
| `source/` | HTML/CSS sources, `render.mjs` (masters) and `render-previews.mjs` (previews). |

## Specs used

- Display size 1128 × 191 px (about 5.9:1), the size LinkedIn guides consistently give for company page covers. Published file-size limits vary between sources (3–8 MB), so every file here is kept well under 3 MB (largest upload file is about 300 KB).
- PNG format.
- Safe area: headlines and logos sit between roughly x 300 and x 1060 (of 1128). The left ~260 px holds only decoration, because the company logo overlaps the bottom-left of the cover on desktop.

## Concepts

1. **Premium Minimal**: "Turning Creator Influence Into Brand Growth." Paper background, Fraunces headline with a coral italic accent, orbit line-work around the logo (echoes the site's "orbit" service motif).
2. **Creator Culture**: "Where Brands and Creators Grow Together." Violet field with abstract 9:16 creator cards (geometric portraits, no platform UI, logos or fake stats) linked to a Kudozz brand node.
3. **Bold Editorial**: "Influence That Moves Brands Forward." Archivo Black headline on coral, oversized ghost "INFLUENCE", angled ink panel holding the light lockup.
4. **Marketing Ecosystem**: "Smarter Influencer Marketing. Stronger Brands." Ink grid with four service steps (Strategy, Creator Discovery, Campaign Management, UGC; all live services on kudozz.in) leading to a lime "Brand growth" outcome. Offset-shadow boxes match the site's style.
5. **Future-Focused**: "Your Growth Partner in the Creator Economy." Flowing violet-to-coral line field for momentum; the markets line lists only owner-confirmed markets (India, UAE, Saudi Arabia, UK, Australia, Singapore).

## Brand assets and fonts

- Logo: the Kudozz mark geometry from `public/brand/kudozz-mark.svg` (spine + offset arms), recoloured only with the site's own light/dark accent pairs, and the "Kudo" + accent "zz" wordmark.
- The wordmark is set in **Fraunces**, as the live site renders it (`KudozzWordmark` uses `font-display`). The static SVG exports in `public/brand/` use an Arial Black fallback instead; the two should be reconciled at some point.
- Fonts: Fraunces, Archivo Black and Inter, loaded from Google Fonts during rendering (all SIL Open Font License) and rasterised into the PNGs.
- Colours: paper `#FAF1E2`, ink `#150F0B`, coral `#FF4D1C`, violet `#5A2EEA`, lime `#CCFF3D` (from `src/app/globals.css`).
- No photographs or third-party images are used; all artwork is vector shapes and type.

## Re-rendering

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --remote-debugging-port=9333 --allow-file-access-from-files about:blank &
cd source
node render.mjs ../masters 4
node render-previews.mjs
# then downscale: sips -z 382 2256 <master> --out ../final/<name>.png
```

/**
 * Visual system note
 * -------------------
 * This build has no image-generation tool available in the development
 * environment, so every visual on the site is a custom-built graphic —
 * SVG/CSS graphic motifs (nodes, waveforms, broadcast rings, grid marks)
 * rendered directly in components under `src/components/graphics/`. This
 * keeps the brand fully consistent, ships zero image weight, and avoids
 * generic stock photography or AI-artifact-prone people/faces entirely.
 *
 * The prompts below are kept for when real photography/video is
 * commissioned later. Each maps to a specific slot in the site and is
 * written so a photographer, agency, or image-generation tool can produce
 * a drop-in replacement without changing layout or copy. Swap the graphic
 * component in the relevant section for a Next.js <Image> using these as
 * the creative brief.
 */

export type ImagePrompt = {
  id: string;
  section: string;
  purpose: string;
  subject: string;
  composition: string;
  artDirection: string;
  lighting: string;
  colorPalette: string;
  aspectRatio: string;
};

export const imagePrompts: ImagePrompt[] = [
  {
    id: "home-hero",
    section: "Home / Hero",
    purpose: "Establish premium, culture-forward brand tone in the first viewport.",
    subject:
      "A single creator mid-shoot, phone-and-ring-light setup visible but not central, shot from a candid angle that shows the craft of content creation rather than a posed portrait.",
    composition:
      "Off-center subject with generous negative space to the left for headline copy; shallow depth of field.",
    artDirection: "Editorial fashion-campaign lighting, minimal set, no visible branding or logos.",
    lighting: "Warm, directional key light with soft fill; golden-hour quality.",
    colorPalette: "Warm neutrals and ink black with a single lime or coral accent prop.",
    aspectRatio: "16:9 desktop, 4:5 mobile crop",
  },
  {
    id: "brands-hero",
    section: "For Brands / Hero",
    purpose: "Convey partnership and strategy rather than generic office stock.",
    subject: "Overhead shot of a campaign planning surface — printed content calendar, creator shortlist cards, a phone showing draft content.",
    composition: "Flat-lay, structured grid arrangement, ample breathing room around the edges.",
    artDirection: "Feels like an agency's actual working desk, not a staged stock photo.",
    lighting: "Even, soft daylight from one side.",
    colorPalette: "Warm paper tones with ink black print and one lime highlight.",
    aspectRatio: "3:2",
  },
  {
    id: "creators-hero",
    section: "For Creators / Hero",
    purpose: "Aspirational but authentic depiction of a working creator.",
    subject: "A creator reviewing footage on a phone or camera screen, genuine expression of focus, mid-edit.",
    composition: "Medium shot, subject slightly off-frame-center, room for headline overlay.",
    artDirection: "Documentary-style authenticity over posed influencer aesthetic.",
    lighting: "Natural window light, slightly cool undertone contrasted against warm background.",
    colorPalette: "Consistent with global palette — warm paper background, ink subject tones.",
    aspectRatio: "4:5",
  },
  {
    id: "campaign-case-study-tile",
    section: "Home & For Brands / Featured Campaigns",
    purpose: "Represent a delivered campaign visually without fabricating brand identity.",
    subject: "Abstract product-adjacent still life relevant to the campaign's category (e.g. skincare bottle, running shoe, app UI card) styled generically, no real brand marks.",
    composition: "Centered product with large surrounding negative space for metric overlay text.",
    artDirection: "Premium editorial product photography.",
    lighting: "Studio lighting, soft shadow.",
    colorPalette: "Rotates lime / coral / ink per case study accent.",
    aspectRatio: "4:3",
  },
  {
    id: "blog-featured-image-template",
    section: "Blog / Featured images",
    purpose: "Consistent editorial identity across all article thumbnails.",
    subject: "Topic-relevant abstract composition (e.g. stacked phones for algorithm articles, a notebook and pen for strategy articles) — never a generic 'person typing on laptop.'",
    composition: "Single dominant subject, one-third negative space for category label overlay.",
    artDirection: "Consistent editorial still-life series across the whole blog.",
    lighting: "Soft, even studio light.",
    colorPalette: "Warm paper background, ink and single accent color per category.",
    aspectRatio: "16:9",
  },
];

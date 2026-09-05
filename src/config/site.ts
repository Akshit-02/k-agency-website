export const siteConfig = {
  name: "Kudozz",
  shortName: "Kudozz",
  legalName: "Kudozz Media LLC",
  tagline: "Influence, Engineered.",
  description:
    "Kudozz is an influencer marketing agency that connects ambitious brands with creators who move culture — building campaigns that generate awareness, engagement, and measurable growth.",
  url: "https://www.kudozz.in",
  ogImage: "/opengraph-image",
  locale: "en_US",
  /**
   * Brand identity — logomark + wordmark are implemented as React
   * components (`src/components/graphics/Kudozz{Mark,Wordmark,Logo}.tsx`)
   * so they can be recolored per theme with props/CSS. These paths point
   * at the static, production-ready vector exports of the same identity
   * for use outside the app (favicons, social profiles, decks, print).
   */
  brand: {
    logo: "/brand/kudozz-logo.svg",
    logoLight: "/brand/kudozz-logo-light.svg",
    logoDark: "/brand/kudozz-logo-dark.svg",
    mark: "/brand/kudozz-mark.svg",
    markMono: "/brand/kudozz-mark-mono.svg",
    wordmark: "/brand/kudozz-wordmark.svg",
    favicon: "/icon.svg",
    appleTouchIcon: "/apple-icon",
  },
  keywords: [
    "influencer marketing agency",
    "influencer marketing services",
    "influencer marketing for brands",
    "creator marketing agency",
    "UGC marketing agency",
    "influencer campaign management",
  ],
  contact: {
    email: "connect@kudozz.in",
    creatorEmail: "connect@kudozz.in",
  },
  social: {
    instagram: "https://instagram.com/kudozz",
    tiktok: "https://tiktok.com/@kudozz",
    linkedin: "https://linkedin.com/company/kudozz",
    x: "https://x.com/kudozz",
    youtube: "https://youtube.com/@kudozz",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "For Brands", href: "/for-brands" },
    { label: "For Creators", href: "/for-creators" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ],
  navCta: { label: "Start a Campaign", href: "/for-brands#inquiry" },
  footerNav: {
    company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    forBrands: [
      { label: "Why Kudozz", href: "/for-brands" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/for-brands#work" },
      { label: "Start a Campaign", href: "/for-brands#inquiry" },
    ],
    forCreators: [
      { label: "Join the Network", href: "/for-creators" },
      { label: "How It Works", href: "/for-creators#how-it-works" },
      { label: "Apply Now", href: "/for-creators#apply" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  stats: [
    { value: "480+", label: "Creators in Network" },
    { value: "210+", label: "Campaigns Delivered" },
    { value: "18", label: "Industries Served" },
    { value: "1.2B+", label: "Total Campaign Reach" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

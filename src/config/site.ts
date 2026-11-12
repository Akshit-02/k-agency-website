export const siteConfig = {
  name: "Kudozz",
  shortName: "Kudozz",
  legalName: "Kudozz Studios Private Limited",
  tagline: "Influence, Engineered.",
  description:
    "Kudozz is an influencer marketing and social media management agency in India. We connect brands with the right creators, manage brand social media and create UGC, and run influencer campaigns in India, the UAE, Saudi Arabia, the UK, Australia and Singapore.",
  url: "https://www.kudozz.in",
  ogImage: "/opengraph-image",
  locale: "en_IN",
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
    "social media management services",
    "social media management agency",
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
    instagram: "https://www.instagram.com/kudozz.in",
    // tiktok: "https://tiktok.com/@kudozz",
    linkedin: "https://www.linkedin.com/company/kudozz-media",
    // x: "https://x.com/kudozz",
    // youtube: "https://youtube.com/@kudozz",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "For Brands", href: "/for-brands" },
    { label: "For Creators", href: "/for-creators" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  /** Services dropdown (desktop) and sub-list (mobile menu). Every link is an existing service URL. */
  servicesMenu: [
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Influencer Marketing", href: "/services#influencer-marketing" },
    { label: "Campaign Strategy", href: "/services/campaign-strategy" },
    { label: "Creator Discovery", href: "/services/creator-discovery" },
    { label: "Outreach Management", href: "/services/outreach-management" },
    { label: "Social Campaigns", href: "/services/social-campaigns" },
    { label: "Product Launches", href: "/services/product-launches" },
    { label: "UGC & Content Creation", href: "/services/ugc-content-production" },
  ],
  navCta: { label: "Talk to Our Team", href: "/for-brands#inquiry" },
  footerNav: {
    company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    forBrands: [
      { label: "Why Kudozz", href: "/for-brands" },
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "Influencer Marketing", href: "/services#influencer-marketing" },
      { label: "UGC & Content", href: "/services/ugc-content-production" },
      { label: "Markets We Serve", href: "/markets" },
      { label: "Free Tools", href: "/tools" },
      { label: "Talk to Our Team", href: "/for-brands#inquiry" },
    ],
    forCreators: [
      { label: "Join the Network", href: "/for-creators" },
      { label: "How It Works", href: "/for-creators#how-it-works" },
      { label: "Creator Resources", href: "/creator-resources" },
      { label: "Free Tools", href: "/tools" },
      { label: "Apply Now", href: "/for-creators#apply" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

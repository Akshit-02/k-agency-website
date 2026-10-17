import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

/**
 * Founder questions, batch 7 (roadmap topics 121–140, industry-specific influencer marketing). Every industry topic
 * already had an owner page, so this batch adds one hub (topic 140): how industry changes an influencer strategy,
 * with a directory of the existing industry guides by market. See docs/founder-questions-121-140-audit.md.
 */
const PUBLISHED = "2026-10-14";
const REVIEWED = "October 2026";

type Guide = [string, string];
const guidePara = (label: string, guides: Guide[]) => ({
  type: "paragraph" as const,
  text: `${label}: ${guides.map(([text]) => text).join(", ").replace(/, ([^,]*)$/, " and $1")}.`,
  links: guides.map(([text, slug]) => ({ text, href: `/blog/${slug}` })),
});

export const founderIndustryPosts: BlogPost[] = [
  // Topic 140
  {
    slug: "influencer-marketing-by-industry",
    category: "Campaign Strategy",
    title: "Influencer Marketing by Industry: How to Choose the Right Strategy for Your Sector",
    seoTitle: "Influencer Marketing by Industry: Choosing a Strategy",
    excerpt:
      "How your industry changes an influencer marketing strategy: five industry types, the questions that decide the plan, which sectors carry extra rules in India, the Gulf, the UK, Australia and Singapore, and a directory of our industry guides.",
    metaDescription:
      "How industry shapes influencer strategy: five sector types, the questions that decide creators, formats and measurement, regulated categories and industry guides.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["influencer marketing by industry", "industry influencer strategy", "influencer marketing for regulated industries", "influencer marketing sectors"],
    related: ["influencer-marketing-strategy", "influencer-disclosure-rules-by-country", "instagram-vs-youtube-vs-tiktok"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-by-industry.svg",
      alt: "Five industry types and how each changes creators, content formats, measurement and rules",
    },
    body: [
      {
        type: "paragraph",
        text: "The basics of influencer marketing don't change by industry: a clear objective, the right creators, a good brief and honest measurement. What changes is almost everything around them. A snack brand, a mutual fund platform and a property developer can't use the same creators, formats or success metrics, and two of the three face rules that decide what creators may say at all.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Work out which type of industry you're in before choosing creators. Low-cost, frequently bought products need reach, many creators and sales tracking. Considered purchases need depth: reviews, demos and a measurement window of weeks or months. Regulated categories (finance, health, food claims, education, alcohol, environmental claims) need qualified creators, claim review and market-specific rules. Local businesses need creators whose audience lives nearby. B2B and software need expert creators and pipeline measurement. Then answer five questions: how long people take to decide, where they buy, whether the product needs showing, what rules apply, and what proof the buyer needs.",
      },
      { type: "heading", text: "Five industry types", id: "industry-types" },
      {
        type: "table",
        headers: ["Type", "Examples", "Creators", "Formats", "Measure on"],
        rows: [
          ["Frequent, lower-cost purchases", "FMCG, snacks, beauty basics, fashion basics", "Many micro and mid-tier creators; regional language", "Short video, Stories, sampling", "Reach in target regions, code and link sales, retail lift"],
          ["Considered purchases", "Electronics, cars, furniture, jewellery, travel", "Reviewers and specialists with depth", "Long-form reviews, comparisons, walkthroughs", "Qualified visits, test drives or enquiries, search lift over weeks"],
          ["Regulated categories", "Finance, health, supplements, education, alcohol, real estate", "Qualified or registered creators where rules require it", "Education-led content with reviewed claims", "Qualified leads, compliance record, trust signals"],
          ["Local and experience businesses", "Restaurants, cafés, hotels, clinics, gyms", "Creators whose audience lives in the area", "Visits, tastings, stays, before/after experiences", "Bookings, footfall, offer redemptions"],
          ["B2B and software", "SaaS, B2B technology, professional services", "Practitioners and industry experts", "LinkedIn posts, webinars, YouTube explainers, podcasts", "Pipeline, demo requests, influenced deals"],
        ],
      },
      {
        type: "paragraph",
        text: "Many brands sit across two types: a premium skincare brand is a frequent purchase with regulated claims; a luxury watch is a considered purchase where brand positioning matters more than volume. Plan for both.",
      },
      { type: "heading", text: "Five questions that decide the strategy", id: "five-questions" },
      {
        type: "table",
        headers: ["Question", "If the answer is...", "Then..."],
        rows: [
          ["How long do buyers take to decide?", "Minutes or days", "Short-form reach, offers and codes; judge within a fortnight"],
          ["", "Weeks or months", "Depth content, retargeting with creator ads, longer measurement windows"],
          ["Where do they buy?", "Your site or app", "Tagged links and codes per creator"],
          ["", "Marketplaces, retail, dealers or in person", "Creator-specific offers, marketplace attribution where available, store or booking data"],
          ["Does the product need showing?", "Yes (texture, fit, size, how it works)", "Demos, try-ons and walkthroughs; brief for product-in-use"],
          ["What rules apply?", "Regulated claims or licensed creators", "Qualified creators, approved-claims lists, legal review before posting"],
          ["What proof does the buyer need?", "Expert credibility", "Specialist or qualified creators, fewer and deeper partnerships"],
          ["", "Social proof", "Many authentic voices, UGC and reviews"],
        ],
      },
      {
        type: "paragraph",
        text: "The rest of the plan follows the general process in influencer marketing strategy, and platform choice in Instagram vs YouTube vs TikTok.",
        links: [
          { text: "influencer marketing strategy", href: "/blog/influencer-marketing-strategy" },
          { text: "Instagram vs YouTube vs TikTok", href: "/blog/instagram-vs-youtube-vs-tiktok" },
        ],
      },
      { type: "heading", text: "Industries with extra rules", id: "regulated-industries" },
      {
        type: "table",
        headers: ["Category", "What usually changes", "Where to read more"],
        rows: [
          ["Investments and personal finance", "In India, SEBI-registered entities can't associate with unregistered finfluencers giving investment advice, and ASCI expects qualified creators. Singapore's MAS guidelines on digital advertising apply from 25 March 2026. The UK's FCA has guidance on financial promotions on social media", "Fintech guides for India, the UAE and Australia"],
          ["Health, wellness and supplements", "ASCI expects creators giving health or nutrition advice to hold relevant qualifications; food and supplement claims need substantiation; some markets restrict medicines and aesthetic treatments", "Healthcare and fitness guides"],
          ["Food and drink", "Claims must be permitted and substantiated (FSSAI in India); the UK restricts less-healthy food advertising from 5 January 2026", "Food and FMCG guides; UK regulated products"],
          ["Education and children", "No guaranteed results (CCPA coaching guidelines in India); under India's data protection law, children's data needs verifiable parental consent and targeted advertising directed at children isn't allowed", "Education and parenting guides"],
          ["Environmental claims", "Vague 'eco-friendly' claims need substantiation (CCPA guidelines in India, the CMA's Green Claims Code in the UK, ACCC enforcement in Australia)", "Sustainability guides"],
          ["Real estate", "In India, RERA requires the project registration number and website in advertisements", "Real estate guide"],
          ["Alcohol and gambling", "Heavily restricted or prohibited in several markets; often not possible with creators at all", "UK regulated products; local legal advice"],
        ],
      },
      {
        type: "paragraph",
        text: "These are summaries from our industry guides, each of which cites its sources, and they're not legal advice. Disclosure rules that apply to every industry are in influencer disclosure rules by platform and country, and working with qualified experts in expert creator marketing.",
        links: [
          { text: "influencer disclosure rules by platform and country", href: "/blog/influencer-disclosure-rules-by-country" },
          { text: "expert creator marketing", href: "/blog/expert-creator-marketing" },
        ],
      },
      { type: "heading", text: "Industry guides by market", id: "industry-guides" },
      guidePara("Beauty and skincare", [
        ["beauty influencer marketing in India", "influencer-marketing-beauty-brands-india"],
        ["beauty in the UAE", "influencer-marketing-beauty-brands-uae"],
        ["beauty in Saudi Arabia", "influencer-marketing-beauty-brands-saudi-arabia"],
        ["beauty and skincare in Australia", "beauty-skincare-influencer-marketing-australia"],
        ["UGC for beauty brands", "ugc-beauty-skincare"],
      ]),
      guidePara("Fashion, jewellery and luxury", [
        ["fashion influencer marketing in India", "influencer-marketing-fashion-brands-india"],
        ["fashion in Dubai", "influencer-marketing-fashion-brands-dubai"],
        ["jewellery in India", "influencer-marketing-jewellery-brands-india"],
        ["watches and jewellery in the GCC", "watches-jewellery-influencer-marketing-gcc"],
        ["luxury brands", "luxury-influencer-marketing-india"],
      ]),
      guidePara("Food, drink and FMCG", [
        ["food and beverage in India", "influencer-marketing-food-brands-india"],
        ["food and beverage in Australia", "food-beverage-influencer-marketing-australia"],
        ["FMCG in India", "influencer-marketing-fmcg-brands-india"],
        ["FMCG in the UAE and Saudi Arabia", "fmcg-influencer-marketing-uae-saudi-arabia"],
      ]),
      guidePara("Restaurants, travel and hotels", [
        ["restaurants and cafés in India", "restaurant-cafe-influencer-marketing-india"],
        ["restaurants in Dubai", "restaurant-influencer-marketing-dubai"],
        ["restaurants and cafés in Australia", "hospitality-influencer-marketing-australia"],
        ["travel in India", "influencer-marketing-travel-brands-india"],
        ["hotels in India", "influencer-marketing-hospitality-brands-india"],
        ["travel in the UAE", "influencer-marketing-travel-brands-uae"],
        ["tourism in Australia", "tourism-influencer-marketing-australia"],
      ]),
      guidePara("Technology and software", [
        ["consumer electronics", "consumer-electronics-influencer-marketing-india"],
        ["technology in the GCC", "technology-influencer-marketing-gcc"],
        ["SaaS in India", "saas-influencer-marketing-india"],
        ["B2B and SaaS in Australia", "b2b-saas-influencer-marketing-australia"],
        ["B2B technology", "influencer-marketing-b2b-technology"],
      ]),
      guidePara("Finance", [
        ["fintech in India", "influencer-marketing-fintech-brands-india"],
        ["fintech in the UAE", "influencer-marketing-fintech-brands-uae"],
        ["financial services in Australia", "financial-services-influencer-marketing-australia"],
      ]),
      guidePara("Health, wellness and fitness", [
        ["healthcare in India", "influencer-marketing-healthcare-brands-india"],
        ["fitness in India", "influencer-marketing-fitness-brands-india"],
        ["healthcare and wellness in the UAE", "influencer-marketing-healthcare-wellness-uae"],
        ["fitness in the GCC", "fitness-influencer-marketing-gcc"],
        ["health and wellness in Australia", "health-wellness-influencer-marketing-australia"],
      ]),
      guidePara("Education and parenting", [
        ["education and EdTech in India", "influencer-marketing-education-edtech-brands-india"],
        ["education in Australia", "education-influencer-marketing-australia"],
        ["universities in the UAE", "influencer-marketing-universities-uae"],
        ["parenting and baby products", "parenting-baby-influencer-marketing-india"],
      ]),
      guidePara("Property, cars and home", [
        ["real estate", "influencer-marketing-real-estate-brands-india"],
        ["automotive in India", "automotive-influencer-marketing-india"],
        ["automotive in the UAE and Saudi Arabia", "automotive-influencer-marketing-uae-saudi-arabia"],
        ["automotive in Australia", "automotive-influencer-marketing-australia"],
        ["home decor and interiors", "home-interior-influencer-marketing-india"],
      ]),
      guidePara("Sustainable brands", [
        ["sustainable brands in India", "sustainability-influencer-marketing-india"],
        ["sustainable brands in the GCC", "sustainable-brands-influencer-marketing-gcc"],
        ["greenwashing rules in Australia", "greenwashing-influencer-marketing-australia"],
      ]),
      guidePara("E-commerce and regulated products", [
        ["e-commerce in India", "influencer-marketing-ecommerce-brands-india"],
        ["e-commerce in the UAE", "influencer-marketing-ecommerce-brands-uae"],
        ["e-commerce in the UK", "ecommerce-influencer-marketing-uk"],
        ["e-commerce in Australia", "ecommerce-influencer-marketing-australia"],
        ["regulated products in the UK", "regulated-products-influencer-marketing-uk"],
      ]),
      {
        type: "paragraph",
        text: "Launching a new product in any of these categories is covered in influencer marketing for product launches.",
        links: [{ text: "influencer marketing for product launches", href: "/blog/influencers-for-product-launch" }],
      },
      {
        type: "paragraph",
        text: "More India industry guides: senior living and elder care, personal finance apps, insurance, photography and creative services, subscription businesses, events and exhibitions, weddings, pet brands, sports brands, gaming, entertainment and OTT, mobile apps, retail, EVs, solar and renewable energy, agriculture and AgriTech, coworking spaces, HR and recruitment, legal technology, logistics and manufacturing. Each covers the creators, formats, rules and measurement that are specific to that sector.",
        links: [
          { text: "senior living and elder care", href: "/blog/elder-care-influencer-marketing-india" },
          { text: "personal finance apps", href: "/blog/personal-finance-influencer-marketing-india" },
          { text: "insurance", href: "/blog/insurance-influencer-marketing-india" },
          { text: "photography and creative services", href: "/blog/photography-creative-services-influencer-marketing-india" },
          { text: "subscription businesses", href: "/blog/subscription-influencer-marketing-india" },
          { text: "events and exhibitions", href: "/blog/event-influencer-marketing-india" },
          { text: "weddings", href: "/blog/wedding-influencer-marketing-india" },
          { text: "pet brands", href: "/blog/pet-influencer-marketing-india" },
          { text: "sports brands", href: "/blog/sports-influencer-marketing-india" },
          { text: "gaming", href: "/blog/gaming-influencer-marketing-india" },
          { text: "entertainment and OTT", href: "/blog/entertainment-influencer-marketing-india" },
          { text: "mobile apps", href: "/blog/mobile-app-influencer-marketing-india" },
          { text: "retail", href: "/blog/retail-influencer-marketing-india" },
          { text: "EVs", href: "/blog/ev-influencer-marketing-india" },
          { text: "solar and renewable energy", href: "/blog/solar-influencer-marketing-india" },
          { text: "agriculture and AgriTech", href: "/blog/agritech-influencer-marketing-india" },
          { text: "coworking spaces", href: "/blog/coworking-influencer-marketing-india" },
          { text: "HR and recruitment", href: "/blog/hr-recruitment-influencer-marketing-india" },
          { text: "legal technology", href: "/blog/legal-services-influencer-marketing-india" },
          { text: "logistics", href: "/blog/logistics-influencer-marketing-india" },
          { text: "manufacturing", href: "/blog/manufacturing-influencer-marketing-india" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Copying a consumer-brand playbook into a regulated or B2B category.",
          "Judging a considered purchase on first-week sales.",
          "Booking creators for reach when the buyer needs expertise.",
          "Assuming one market's rules apply in another.",
          "Using national creators for a business whose customers live in one city.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Industry decides more of an influencer strategy than most brands expect: the creators, the formats, how long to wait for results and, in regulated categories, what may be said. Identify your industry type, answer the five questions, check the rules in each market, then use the industry guide closest to your business.",
      },
    ],
    faqs: [
      {
        question: "Does influencer marketing work for every industry?",
        answer:
          "It can support most industries, but the role changes. Consumer brands use it for reach and sales, considered purchases for research and consideration, B2B for credibility and pipeline. Some categories, such as infant formula in India or gambling in some markets, can't be promoted through creators at all.",
      },
      {
        question: "Which industries need extra care with influencer marketing?",
        answer:
          "Finance, health and supplements, food claims, education and children's products, environmental claims, real estate, alcohol and gambling. These often require qualified creators, approved claims and market-specific rules.",
      },
      {
        question: "How does the purchase cycle change an influencer campaign?",
        answer:
          "Short cycles suit short-form content, offers and quick measurement. Long cycles need deeper content such as reviews and walkthroughs, retargeting, and measurement over weeks or months rather than days.",
      },
    ],
  },
];

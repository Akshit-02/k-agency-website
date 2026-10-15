import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

/**
 * Founder questions, batch 9 (roadmap topics 161–180, international influencer marketing). Two genuinely missing
 * pages: a Singapore planning guide (167; the market previously had only its /markets landing page) and diaspora
 * creators (176). The other topics update existing owners. See docs/founder-questions-161-180-audit.md.
 *
 * Singapore facts mirror the owner-verified, sourced entries in src/content/markets.ts; keep the two in step.
 */
const PUBLISHED = "2026-10-15";
const REVIEWED = "October 2026";

const EXT = {
  asasSocial: "https://asas.org.sg/About/Social-Media",
  asasCpfta: "https://asas.org.sg/Resources/CPFTA",
  masDigitalAds: "https://www.mas.gov.sg/regulation/guidelines/guidelines-on-standards-of-conduct-for-digital-advertising-activities",
  mohAesthetics: "https://www.moh.gov.sg/news-highlights/details/regulation-of-advertisements-for-aesthetic-treatments",
  pdpcDnc: "https://www.pdpc.gov.sg/Organisations/Do-Not-Call-Registry-and-Your-Business",
  datareportalSg: "https://datareportal.com/reports/digital-2026-singapore",
};

export const founderInternationalPosts: BlogPost[] = [
  // Topic 167
  {
    slug: "influencer-marketing-singapore",
    category: "Campaign Strategy",
    title: "Influencer Marketing in Singapore: How Brands Can Reach Diverse Audiences",
    seoTitle: "Influencer Marketing in Singapore: A Planning Guide",
    excerpt:
      "How to plan creator campaigns for Singapore: audience overlap in a compact market, choosing language by segment, the festival and shopping calendar, marketplaces, ASAS disclosure, MAS and MOH sector rules, and measurement in SGD.",
    metaDescription:
      "Plan influencer campaigns in Singapore: audience overlap, language by segment, the festival and sales calendar, marketplaces, ASAS disclosure, MAS and MOH rules.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    inLanguage: "en-SG",
    tags: ["influencer marketing Singapore", "Singapore influencers", "ASAS influencer guidelines", "Singapore creator campaign", "multilingual influencer marketing"],
    related: ["influencer-disclosure-rules-by-country", "international-influencer-campaign-playbook", "instagram-vs-youtube-vs-tiktok"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-singapore.svg",
      alt: "Planning a Singapore creator campaign: audience overlap, language by segment, calendar, marketplaces and rules",
    },
    body: [
      {
        type: "paragraph",
        text: "Singapore looks simple on paper: one city, high social media use, English widely spoken. In practice it rewards careful planning. Creators' audiences overlap heavily in a compact market, the right language depends on the segment you need, shopping peaks cluster around a few dates, and finance and healthcare brands face specific rules that many visiting brands don't expect.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Plan Singapore creator campaigns around four things. Check audience overlap between creators before booking, because a small market means the same people may follow several of them. Choose language by segment: English reaches most audiences, while Mandarin, Malay or Tamil creators can work better for specific communities and festive moments. Time activity to the calendar (Chinese New Year, Hari Raya Puasa, Deepavali, the Great Singapore Sale, 9.9, 11.11 and 12.12) and to where people buy, including Shopee and Lazada. Then build ASAS disclosure into every brief, and check MAS rules for financial products and MOH rules for healthcare services before briefing.",
      },
      { type: "heading", text: "A compact, highly connected market", id: "market" },
      {
        type: "paragraph",
        text: "DataReportal counted 5.33 million social media user identities in Singapore in October 2025, equal to 90.6% of the population. With so many people online in one city, a campaign can reach a large share of a segment quickly, and the same viewers can see several creators in the same week. Plan reach as unique people, not added follower counts.",
        links: [{ text: "DataReportal counted 5.33 million social media user identities", href: EXT.datareportalSg }],
      },
      {
        type: "list",
        items: [
          "Ask shortlisted creators for audience location (share in Singapore) from their own insights.",
          "Check overlap: if two creators share much of their audience, booking both mostly adds frequency, not reach.",
          "Use frequency on purpose for launches and sale days, and spread creators across different communities for awareness.",
        ],
      },
      { type: "heading", text: "Choosing language by audience", id: "language" },
      {
        type: "paragraph",
        text: "English, Mandarin, Malay and Tamil are Singapore's four official languages. English reaches most audiences, but the language that persuades depends on the segment, the product and the moment. A festive campaign for Hari Raya or Deepavali, or a product aimed at a particular community, often works better with creators who speak to that community in its own language and context. Choose by the audience you need, confirmed by creator audience data, rather than assumptions about any group.",
      },
      {
        type: "table",
        headers: ["Situation", "Language approach"],
        rows: [
          ["Broad consumer launch", "English-led, with a few creators in other languages if a segment matters"],
          ["Festive campaign (Chinese New Year, Hari Raya, Deepavali)", "Creators who celebrate the occasion and speak to that audience, in the language they use with it"],
          ["Product with a specific community focus", "Creators from and trusted by that community"],
          ["Paid amplification", "Versions in each language you're targeting, reviewed by a native speaker"],
        ],
      },
      {
        type: "paragraph",
        text: "Localising creator content well is covered in how to localize creator campaigns across markets.",
        links: [{ text: "how to localize creator campaigns across markets", href: "/blog/ugc-localization" }],
      },
      { type: "heading", text: "Platforms, calendar and where people buy", id: "platforms-calendar" },
      {
        type: "list",
        items: [
          "Consumer campaigns: YouTube, TikTok, Instagram and Facebook. DataReportal's late-2025 ad-reach figures put YouTube at 90.6% of the population and TikTok at 75.4% of adults.",
          "B2B and technology: LinkedIn.",
          "Calendar: Chinese New Year, Hari Raya Puasa, Deepavali, the Great Singapore Sale, and the 9.9, 11.11 and 12.12 shopping days.",
          "Where people buy: your own site, Shopee, Lazada and retail. Plan creator codes and links for each, and expect some sales to happen where you can't see them.",
        ],
      },
      {
        type: "paragraph",
        text: "Platform choice is compared in Instagram vs YouTube vs TikTok, and tracking marketplace sales in how to track influencer sales.",
        links: [
          { text: "Instagram vs YouTube vs TikTok", href: "/blog/instagram-vs-youtube-vs-tiktok" },
          { text: "how to track influencer sales", href: "/blog/track-influencer-sales" },
        ],
      },
      { type: "heading", text: "Rules to build into briefs and contracts", id: "rules" },
      {
        type: "table",
        headers: ["Rule", "What it means for a campaign", "Source"],
        rows: [
          ["ASAS Guidelines on Interactive Marketing Communication and Social Media", "Identify marketing as marketing; disclose any commercial relationship (payment, free samples, favours, invitations) early, readably on any device and not behind a link. Applies to brands, agencies and creators. Bought likes, fake accounts and view-generating programmes are banned", "ASAS"],
          ["Consumer Protection (Fair Trading) Act", "False or misleading claims are an unfair practice", "ASAS summary"],
          ["MAS Guidelines on Standards of Conduct for Digital Advertising Activities (from 25 March 2026)", "Financial institutions must vet, brief and monitor the creators they use", "MAS"],
          ["Healthcare Services (Advertisement) Regulations 2021", "Influencers may not advertise licensable healthcare services such as aesthetic treatments", "Ministry of Health"],
          ["PDPA Do Not Call rules", "Marketing messages to Singapore numbers must follow the Do Not Call rules", "PDPC"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the ASAS social media guidelines, the ASAS summary of the Consumer Protection (Fair Trading) Act, MAS's digital advertising guidelines, the Ministry of Health on aesthetic treatment advertising and the PDPC on the Do Not Call Registry. This is general guidance, not legal advice; confirm the current rules with counsel for regulated products.",
        links: [
          { text: "the ASAS social media guidelines", href: EXT.asasSocial },
          { text: "the ASAS summary of the Consumer Protection (Fair Trading) Act", href: EXT.asasCpfta },
          { text: "MAS's digital advertising guidelines", href: EXT.masDigitalAds },
          { text: "the Ministry of Health on aesthetic treatment advertising", href: EXT.mohAesthetics },
          { text: "the PDPC on the Do Not Call Registry", href: EXT.pdpcDnc },
        ],
      },
      {
        type: "paragraph",
        text: "How these compare with India, the Gulf, the UK and Australia is set out in influencer disclosure rules by platform and country, and contract points for Singapore in influencer marketing contracts.",
        links: [
          { text: "influencer disclosure rules by platform and country", href: "/blog/influencer-disclosure-rules-by-country" },
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract#uk-australia-singapore" },
        ],
      },
      { type: "heading", text: "Budget and measurement", id: "budget-measurement" },
      {
        type: "list",
        items: [
          "Budget in SGD and state whether figures include GST (9% since January 2024) where the creator or agency is GST-registered.",
          "Price from quotes for your exact scope; published rate cards vary too much to plan on.",
          "Report reach as unique people where possible, and watch frequency, because overlap is common.",
          "Track own-site sales with codes and links per creator; for marketplace sales, use marketplace data and a baseline comparison.",
          "Report by language segment if you ran several, since they reach different audiences.",
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "hypothetical-example" },
      {
        type: "paragraph",
        text: "Hypothetical. A skincare brand entering Singapore before 11.11 shortlists twelve creators, checks audience overlap and drops three whose audiences largely duplicate others. It runs English-led content with two Mandarin-speaking creators for a segment its research shows it's missing, adds Shopee and own-site codes for every creator, keeps claims to what the brand can substantiate, and requires ASAS-style disclosure at the start of every post. Results are reported in SGD by creator and language segment, with a baseline comparison for marketplace sales.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Adding up follower counts in a market where audiences overlap.",
          "Assuming English alone reaches every segment you need.",
          "Briefing finance creators without checking MAS expectations, or promoting aesthetic treatments through influencers.",
          "Disclosure placed at the end or behind a 'more' link.",
          "Ignoring marketplace sales when judging results.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Singapore campaigns work best when they're planned for overlap, language and timing: fewer creators chosen for distinct audiences, the right language for each segment, activity around the festival and shopping calendar, and disclosure and sector rules built in from the brief. Kudozz's Singapore page sets out how we run campaigns there.",
        links: [{ text: "Kudozz's Singapore page", href: "/markets/singapore" }],
      },
    ],
    faqs: [
      {
        question: "What are the influencer disclosure rules in Singapore?",
        answer:
          "The ASAS Guidelines on Interactive Marketing Communication and Social Media require marketing to be identified and any commercial relationship, including payment, free samples or invitations, to be disclosed clearly and early, readable on any device and not hidden behind a link. They apply to brands, agencies and creators.",
      },
      {
        question: "Which language should a Singapore influencer campaign use?",
        answer:
          "English reaches most audiences. Mandarin, Malay or Tamil creators can work better for specific community segments and festive campaigns. Choose by the audience you need, confirmed with creator audience data.",
      },
      {
        question: "Can influencers promote aesthetic treatments or financial products in Singapore?",
        answer:
          "Influencers may not advertise licensable healthcare services such as aesthetic treatments. Financial products are possible with care: MAS's digital advertising guidelines, in effect from 25 March 2026, expect financial institutions to vet, brief and monitor the creators they use.",
      },
    ],
  },
  // Topic 176
  {
    slug: "diaspora-influencer-marketing",
    category: "Campaign Strategy",
    title: "How Brands Can Work With Diaspora Creators to Reach Audiences Abroad",
    seoTitle: "Diaspora Influencer Marketing: Reaching Audiences Abroad",
    excerpt:
      "For brands selling to communities living outside their home country, diaspora creators can bridge familiarity and local context. How to verify where a creator's audience actually lives and buys, choose between creators abroad and creators at home, adapt offers and delivery, and follow the rules of the market the audience is in.",
    metaDescription:
      "Work with diaspora creators: verify audience location and buying behaviour, choose creators abroad or at home, adapt offers, delivery and timing, and follow local rules.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "7 min read",
    tags: ["diaspora influencer marketing", "diaspora creators", "NRI influencer marketing", "reach audiences abroad", "community creators"],
    related: ["influencer-marketing-expat-communities-uae", "ugc-localization", "international-influencer-campaign-playbook"],
    hero: {
      src: "/blog/brand-guides/diaspora-influencer-marketing.svg",
      alt: "Diaspora creator campaigns: verified audience location, language, community moments, delivery and local rules",
    },
    body: [
      {
        type: "paragraph",
        text: "An Indian snack brand that wants customers in London, a fashion label selling to families in Dubai and Sydney, a fintech app serving people who send money home: each is trying to reach people who live in one country and feel connected to another. Creators from those communities can be the bridge. They can also be an expensive mistake if the brand assumes, from a creator's background, where their followers live or what they buy.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Diaspora creators are creators whose content and audience connect a community living abroad with its home culture. They work when your product is genuinely available and delivered where the audience lives, and when you can verify, from the creator's own insights, the share of their audience in that country. Choose between creators based in the market and creators at home with a following abroad by checking audience location, not identity. Price and deliver in local currency, time content to community moments, and follow the advertising rules of the country where the audience is.",
      },
      { type: "heading", text: "When diaspora creators make sense", id: "when-it-fits" },
      {
        type: "table",
        headers: ["Fits well", "Fits poorly"],
        rows: [
          ["Products with a familiar home-country brand or taste, now available abroad", "Products that can't be shipped, sold or serviced in the audience's country"],
          ["Services used across borders (remittances, travel, education, property)", "Offers priced or worded only for the home market"],
          ["Festive and family moments the community celebrates", "Campaigns where the creator's audience is mostly in the home country"],
          ["Brands entering a market through a community they already know", "Assumptions about what 'the community' wants, without research"],
        ],
      },
      { type: "heading", text: "Verify the audience, not the identity", id: "verify-audience" },
      {
        type: "paragraph",
        text: "A creator's background tells you nothing reliable about where their followers live, what language they prefer or what they can afford. Many creators abroad have large followings in their home country; many home-country creators have a meaningful audience abroad. Verify with data before booking.",
      },
      {
        type: "list",
        items: [
          "Audience location by country and city from the creator's own insights, as a screen recording on an agreed date.",
          "The share of audience in your target country, against a threshold you set before shortlisting.",
          "Language of comments and of the creator's best-performing posts.",
          "Evidence that their audience buys abroad: past brand partnerships available in that country, questions in comments about delivery or price there.",
          "Audience quality checks as for any creator: real, active and engaged followers.",
        ],
      },
      {
        type: "paragraph",
        text: "How to judge audience fit and quality is covered in influencer audience quality.",
        links: [{ text: "influencer audience quality", href: "/blog/influencer-audience-quality" }],
      },
      { type: "heading", text: "Creators abroad or creators at home?", id: "abroad-or-home" },
      {
        type: "table",
        headers: ["", "Creator living in the target country", "Home-country creator with an audience abroad"],
        rows: [
          ["Strength", "Shares the local context: prices, delivery, weather, schools, workplaces", "Strong connection to the home culture, trends and language"],
          ["Audience", "Usually more concentrated in the target country; verify it", "Often mostly in the home country; check the share abroad"],
          ["Local rules", "Local disclosure rules and any creator licensing apply directly", "The rules of the audience's country still apply to content aimed at it"],
          ["Best for", "Conversion in the target market; practical demonstrations", "Familiarity and cultural moments; pair with local creators for action"],
        ],
      },
      { type: "heading", text: "Adapting the offer and the content", id: "adapting" },
      {
        type: "list",
        items: [
          "Price in the local currency, with local delivery times and returns stated clearly.",
          "Show the product in the audience's real life abroad (a home in Sydney, a commute in London), not only in the home-country setting.",
          "Time posts to the community's moments and to local seasons, which can differ from the home country's.",
          "Let creators choose the language mix their audience actually uses; many communities mix languages.",
          "Avoid stereotypes; brief for the specific audience you researched, and let creators lead on cultural detail.",
        ],
      },
      {
        type: "paragraph",
        text: "Adapting creative across markets is covered in how to localize creator campaigns across markets, and reaching specific communities in the UAE in reaching UAE expat communities.",
        links: [
          { text: "how to localize creator campaigns across markets", href: "/blog/ugc-localization" },
          { text: "reaching UAE expat communities", href: "/blog/influencer-marketing-expat-communities-uae" },
        ],
      },
      { type: "heading", text: "Rules: follow the audience's market", id: "rules" },
      {
        type: "paragraph",
        text: "Content aimed at people in a country needs to meet that country's advertising rules, whichever country the creator lives in: clear 'Ad' labelling for UK audiences, ASAS disclosure for Singapore, and advertiser permits where the UAE requires them for creators advertising there. Sector rules for finance, health and food claims apply too. Influencer disclosure rules by platform and country compares the markets, and the international playbook covers cross-border contracts and payments.",
        links: [
          { text: "Influencer disclosure rules by platform and country", href: "/blog/influencer-disclosure-rules-by-country" },
          { text: "the international playbook", href: "/blog/international-influencer-campaign-playbook" },
        ],
      },
      { type: "heading", text: "Measurement", id: "measurement" },
      {
        type: "list",
        items: [
          "Tag links and codes by creator and by target country.",
          "Report results only from the target country; home-country sales from the same post are a separate result.",
          "Compare cost per result with other creators in the same market, not with home-market campaigns.",
          "Track repeat purchase: community word of mouth often shows up over months rather than days.",
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "hypothetical-example" },
      {
        type: "paragraph",
        text: "Hypothetical. An Indian ethnic-wear brand that ships to the UK shortlists twenty creators with South Asian audiences. Audience data shows that eight have more than half their followers in the UK; the rest are mostly in India. It books five UK-based creators to show outfits at UK weddings and festive events, with prices in GBP and UK delivery times, and two India-based creators with a strong UK following for festive styling. All posts carry a clear 'Ad' label for UK audiences, and results are reported for UK orders only.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Assuming a creator's audience lives where the creator does, or shares their background.",
          "Running home-market offers and prices for an audience abroad.",
          "Treating a diaspora as one group with one language and one set of preferences.",
          "Forgetting the advertising rules of the audience's country.",
          "Counting home-country sales as success abroad.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Diaspora creators can bring a brand closer to communities abroad, provided the decision rests on evidence: where the audience lives, what it buys and what it needs to see. Verify audience location, pair creators abroad with home-country creators where it helps, adapt prices, delivery and timing, and follow the rules of the market the audience is in.",
      },
    ],
    faqs: [
      {
        question: "What is diaspora influencer marketing?",
        answer:
          "It's working with creators whose content and audience connect a community living abroad with its home culture, to reach that community where it lives. It works when the product is available there and the creator's audience is verifiably in that country.",
      },
      {
        question: "How do I know if a creator's audience is abroad?",
        answer:
          "Ask for audience location by country and city from the creator's own insights, as a screen recording on an agreed date, and check comment language and past partnerships in that market. Don't infer it from the creator's background.",
      },
      {
        question: "Which advertising rules apply to diaspora creator content?",
        answer:
          "The rules of the country where the audience is, plus any licensing rules where the creator posts from. For example, content aimed at UK audiences should follow UK labelling rules even if the creator is based elsewhere.",
      },
    ],
  },
];

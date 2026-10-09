import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC2_PUBLISHED, GCC_LANGUAGE, GCC_PLAYBOOK, GCC_REVIEWED, REVIEW_DATE_TEXT, SRC } from "@/content/gcc-guides/shared";

/**
 * Topics 1429 (+1430), 1431 and 1433: Qatar, Kuwait and Oman. Each built from that country's own rules and platform
 * data. 1430 (Qatar agency) is a section of the Qatar guide; 1432 (Bahrain) is a section of the GCC playbook.
 */
export const gccCountryPosts: BlogPost[] = [
  // 1429 (+1430)
  {
    slug: "influencer-marketing-qatar",
    category: "Influencer Marketing",
    title: "Influencer Marketing in Qatar: A Guide for Brands Planning Creator Campaigns",
    seoTitle: "Influencer Marketing in Qatar: A Guide for Brands",
    excerpt:
      "How to plan creator campaigns in Qatar: a small, mostly expatriate and highly connected audience, the platforms that reach it, finding creators whose followers are actually in Qatar, the Ministry of Culture advertising licence and e-commerce rules, and what to compare when choosing an agency.",
    metaDescription:
      "Influencer marketing in Qatar: audiences, platforms, finding creators with Qatar audiences, Ministry of Culture licensing, campaign operations and agency checks.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Qatar",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["influencer marketing Qatar", "influencer marketing Doha", "influencer marketing agency Qatar", "Qatar influencer campaigns"],
    related: ["gcc-influencer-marketing-playbook", "influencer-marketing-kuwait", "influencer-marketing-uae"],
    hero: {
      src: "/blog/gcc-guides/influencer-marketing-qatar.svg",
      alt: "Qatar creator campaign planning: small audience, segments by community, creators with Qatar-based followers, licensing check and tracked results",
    },
    body: [
      {
        type: "paragraph",
        text: "Qatar is a small market with a high-income, highly connected population of about 3.1 million (DataReportal, late 2025). Most residents are expatriates, Qatari citizens are a small minority, and much of the audience can be reached in a few weeks with the right creators. The difficulty isn't reach; it's relevance. Many creators who appear in Doha campaigns have most of their followers somewhere else.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To run influencer marketing in Qatar, define which community you need (Qatari nationals, Arab expatriates, South Asian, Filipino or Western residents), choose creators whose audiences are demonstrably in Qatar, and plan platforms from that audience: YouTube, Facebook, Instagram, TikTok and LinkedIn all have large reach, while Snapchat reaches a smaller share than in Saudi Arabia or Bahrain. Check licensing: the Ministry of Culture licenses advertising and public relations activity, including for individuals, and a 2026 decision requires e-commerce licences for some online selling. A creator-specific licensing framework has been proposed but, as of our review, not confirmed as enacted. Budget in QAR and measure per community.",
      },
      { type: "heading", text: "Who you're reaching", id: "audience" },
      {
        type: "table",
        headers: ["Segment", "Language", "Creator approach"],
        rows: [
          ["Qatari nationals", "Gulf Arabic; English common", "Qatari creators; culturally grounded, family-oriented content; small, high-value audience"],
          ["Arab expatriates", "Levantine, Egyptian, Sudanese and other dialects; English", "Creators from those communities living in Qatar"],
          ["South Asian residents", "Malayalam, Hindi, Urdu, Tamil, Bengali, Nepali; English", "Community creators; strong for value retail, remittance, food, telecom"],
          ["Filipino residents", "Tagalog, English", "Filipino creators in Qatar"],
          ["Western and international professionals", "English", "Lifestyle, family and expatriate-life creators"],
          ["Visitors", "Varies", "Creators in source markets for tourism and events"],
        ],
      },
      { type: "heading", text: "Platforms", id: "platforms" },
      {
        type: "paragraph",
        text: "DataReportal's Digital 2026 Qatar report gives these late-2025 advertising-audience figures. They aren't active-user counts:",
        links: [{ text: "DataReportal's Digital 2026 Qatar report", href: SRC.datareportalQatar.url }],
      },
      {
        type: "table",
        headers: ["Platform", "Ad reach (share of population)", "Notes"],
        rows: [
          ["Facebook", "2.40 million (76.6%)", "Strong with expatriate communities and groups"],
          ["YouTube", "2.31 million (73.8%)", "Reviews, long-form, community-language content"],
          ["LinkedIn (registered members)", "1.80 million (57.5%)", "Large professional audience; B2B and recruitment"],
          ["Instagram", "1.70 million (54.3%)", "Lifestyle, food, fashion, beauty"],
          ["Snapchat", "1.24 million (39.5%)", "Smaller share than in Saudi Arabia or Bahrain; still important for national audiences"],
          ["TikTok (18+)", "2.95 million (above the adult population)", "Discovery; treat the figure as an indicator only"],
          ["X", "650 thousand (20.8%)", "News, sport, commentary"],
        ],
      },
      { type: "heading", text: "Finding creators with Qatar audiences", id: "creators" },
      {
        type: "list",
        items: [
          "Ask for the share of followers in Qatar from the creator's own insights, with a date",
          "Expect many 'Doha creators' to have large audiences in Egypt, India, the Philippines or elsewhere in the Gulf",
          "Smaller creators with mostly Qatar-based audiences often beat larger regional names on relevance",
          "For national audiences, Qatari creators carry credibility that regional creators can't replicate",
          "Check comments for local questions: where to buy, prices in QAR, locations in Doha",
        ],
      },
      { type: "heading", text: "Licensing and rules", id: "rules" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. A planning summary, not legal advice; confirm with the Ministry of Culture and the Ministry of Commerce and Industry. Qatar's Ministry of Culture licenses advertising and public relations activity. Its 2023 guide, reported by Gulf Times, described a licence for individuals to operate advertising and PR activity, covering promoting goods or services and running advertising campaigns, open to Qatari individuals over 21. In January 2024 the ministry cut the issuance fee for advertising and PR licences from QAR 25,000 to QAR 5,000 and the renewal fee to QAR 5,000, as summarized by Sovereign Group.`,
        links: [
          { text: "reported by Gulf Times", href: SRC.qatarMocGuide2023.url },
          { text: "summarized by Sovereign Group", href: SRC.qatarFeeCut2024.url },
        ],
      },
      {
        type: "list",
        items: [
          "Because the individual licence has been described as open to Qatari citizens, many campaigns with expatriate creators are contracted through licensed companies or agencies; ask how any creator or agency is licensed",
          "Ministerial Decision No. 25 of 2026 from the Ministry of Commerce and Industry requires e-commerce licences for approved activities conducted through websites, platforms and social media, effective March 2026 (Crowell summary)",
          "A Shura Council proposal for licensing social media creators has been reported, but we found no confirmation it has been enacted; check before each campaign",
          "General advertising standards apply: respect for religion and public morals, accurate claims and clear identification of advertising",
        ],
      },
      {
        type: "paragraph",
        text: "The e-commerce decision is summarized by Crowell, and the creator licensing proposal by Sultan Al-Abdulla & Partners.",
        links: [
          { text: "summarized by Crowell", href: SRC.qatarEcommerce2026.url },
          { text: "Sultan Al-Abdulla & Partners", href: SRC.qatarProposal.url },
        ],
      },
      { type: "heading", text: "Campaign operations", id: "operations" },
      {
        type: "table",
        headers: ["Area", "Practical note"],
        rows: [
          ["Currency and terms", "Contract in QAR. Confirm tax treatment with your adviser"],
          ["Calendar", "Ramadan and Eid, Qatar National Day (18 December), National Sport Day (February), and major sporting and cultural events"],
          ["Scale", "A small market saturates quickly; rotate creators and watch frequency"],
          ["Events", "Venue and event campaigns benefit from Doha-based creators who can attend"],
          ["Measurement", "Report by community and language; national and expatriate segments behave differently"],
        ],
      },
      { type: "heading", text: "Choosing an agency for Qatar", id: "agency" },
      {
        type: "paragraph",
        text: "Searches for an influencer marketing agency in Qatar mostly return agency pages and paid listings. Rather than relying on rankings, compare agencies on these points:",
      },
      {
        type: "list",
        items: [
          "Licensing: how the agency and the creators it contracts are licensed in Qatar",
          "Audience evidence: can it show Qatar-based audience shares for each recommended creator?",
          "Community reach: does it have access to Qatari, Arab, South Asian and Filipino creators, as your plan needs?",
          "Language: who writes and reviews Arabic and other language content?",
          "Fees: creator fees and agency fees shown separately in QAR",
          "Reporting: results by creator and by community, tied to your objective",
          "Regional set-up: if it's a regional agency, who actually works on Qatar?",
        ],
      },
      {
        type: "paragraph",
        text: "A fuller agency checklist, written for the UAE but largely applicable, is in how to choose an influencer marketing agency for a UAE campaign.",
        links: [{ text: "how to choose an influencer marketing agency for a UAE campaign", href: "/blog/choose-influencer-marketing-agency-uae" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Booking 'Qatar' creators whose audiences are mostly elsewhere",
          "Running one English campaign and expecting it to reach every community",
          "Assuming UAE or Saudi licences cover Qatar",
          "Over-using the same few creators in a small market",
        ],
      },
      {
        type: "paragraph",
        text: "Kuwait and Oman have their own licensing regimes and audiences; see influencer marketing in Kuwait and influencer marketing in Oman.",
        links: [
          { text: "influencer marketing in Kuwait", href: "/blog/influencer-marketing-kuwait" },
          { text: "influencer marketing in Oman", href: "/blog/influencer-marketing-oman" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Qatar is small enough that relevance beats reach every time. Pick the communities you need, find creators whose followers are actually in Qatar, check how they're licensed, and measure each segment separately. For planning Qatar alongside other Gulf markets, see the GCC influencer marketing playbook.",
        links: [{ text: "GCC influencer marketing playbook", href: "/blog/gcc-influencer-marketing-playbook" }],
      },
    ],
    faqs: [
      {
        question: "Do influencers in Qatar need a licence?",
        answer:
          "Qatar's Ministry of Culture licenses advertising and public relations activity, including a licence for individuals that its 2023 guide described as open to Qatari citizens over 21. A creator-specific framework has been proposed but not confirmed as enacted. Check with the ministry before a campaign.",
      },
      {
        question: "Which platforms reach Qatar audiences?",
        answer:
          "Facebook, YouTube, LinkedIn, Instagram and TikTok all have large advertising audiences in Qatar. Snapchat reaches a smaller share than in Saudi Arabia or Bahrain but matters for national audiences. Choose by the community you need.",
      },
      {
        question: "How should brands choose an influencer agency in Qatar?",
        answer:
          "Compare licensing, evidence of Qatar-based audiences for recommended creators, access to the communities you need, language capability, transparent fees in QAR and reporting by segment.",
      },
    ],
  },
  // 1431
  {
    slug: "influencer-marketing-kuwait",
    category: "Influencer Marketing",
    title: "Influencer Marketing in Kuwait: How Brands Can Plan Local Creator Campaigns",
    seoTitle: "Influencer Marketing in Kuwait: Planning Local Campaigns",
    excerpt:
      "How to plan creator campaigns in Kuwait: an influential local creator scene, Kuwaiti and expatriate audiences, the platforms that reach them, and the new Media Regulation Law that introduces licences for influencers and paid advertisers from 2027.",
    metaDescription:
      "Influencer marketing in Kuwait: audiences, platforms, Kuwaiti creators, the 2026 Media Regulation Law and influencer licences, disclosure and campaign planning.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Kuwait",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["influencer marketing Kuwait", "Kuwait influencer licence", "Kuwait media law influencers", "Kuwaiti influencers brands"],
    related: ["gcc-influencer-marketing-playbook", "influencer-marketing-qatar", "influencer-marketing-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/influencer-marketing-kuwait.svg",
      alt: "Kuwait campaign timeline: Media Regulation Law published October 2026, in force around April 2027, executive regulations and licensing grace period",
    },
    body: [
      {
        type: "paragraph",
        text: "Kuwait has one of the most established influencer scenes in the Gulf, with Kuwaiti creators who are well known across the region in fashion, beauty, food and lifestyle. It's also about to change: a new Media Regulation Law, published in October 2026, introduces licences for influencers and paid advertisers from 2027. Brands planning Kuwaiti campaigns now need to plan for both the market and the transition.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To run influencer marketing in Kuwait, decide whether you're reaching Kuwaiti citizens, Arab expatriates or other communities; choose creators whose audiences are actually in Kuwait, often Kuwaiti creators for national audiences; plan around Instagram, YouTube, TikTok and Snapchat; brief in Kuwaiti Arabic where relevant; and contract in KWD. Decree-Law No. 102 of 2026, published on 4 October 2026, will require licences for influencers and paid advertisers targeting Kuwaiti audiences from around April 2027, with details in executive regulations still to be issued. Disclose sponsorship clearly now, get permits for draws and giveaways, and build licence checks into contracts that run past April 2027.",
      },
      { type: "heading", text: "Audiences and creators", id: "audience" },
      {
        type: "table",
        headers: ["Segment", "Notes", "Creator approach"],
        rows: [
          ["Kuwaiti citizens", "A minority of residents but a high-spending, influential audience", "Kuwaiti creators speaking Kuwaiti Arabic; strong in fashion, beauty, food and family"],
          ["Arab expatriates", "Egyptian, Levantine and other communities", "Creators from those communities in Kuwait"],
          ["South Asian and other expatriates", "Large communities with their own languages", "Community creators for value retail, food, telecom, remittances"],
          ["Regional audiences", "Well-known Kuwaiti creators often have followers across the Gulf", "Check how much of the audience is in Kuwait for local goals"],
        ],
      },
      { type: "heading", text: "Platforms", id: "platforms" },
      {
        type: "paragraph",
        text: "DataReportal's Digital 2026 Kuwait report puts the population at about 5.05 million, with these late-2025 advertising-audience figures. They're indicators, not active-user counts:",
        links: [{ text: "DataReportal's Digital 2026 Kuwait report", href: SRC.datareportalKuwait.url }],
      },
      {
        type: "table",
        headers: ["Platform", "Ad reach (share of population)"],
        rows: [
          ["YouTube", "3.31 million (65.6%)"],
          ["Instagram", "3.00 million (59.4%)"],
          ["Facebook", "2.45 million (48.5%)"],
          ["Snapchat", "2.43 million (48.2%)"],
          ["X", "1.42 million (28.1%)"],
          ["LinkedIn (registered members)", "1.30 million (25.8%)"],
          ["TikTok (18+)", "4.44 million (above the adult population)"],
        ],
      },
      {
        type: "paragraph",
        text: "Instagram reaches a larger share of Kuwait's population than of Saudi Arabia's, and it remains central for fashion, beauty and food creators. Snapchat and TikTok carry daily-life and discovery content.",
      },
      { type: "heading", text: "The new Media Regulation Law", id: "law" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. A summary of reported provisions, not legal advice. Decree-Law No. 102 of 2026 was published in the official gazette on 4 October 2026 and takes effect six months after publication, around April 2027. It replaces Kuwait's earlier press, audiovisual and electronic media laws. The points below come from WEFAQ's legal summary and Kuwait Times' report; the executive regulations, due within six months, will set the detailed criteria, fees and procedures.`,
        links: [
          { text: "WEFAQ's legal summary", href: SRC.kuwaitMediaLaw.url },
          { text: "Kuwait Times' report", href: SRC.kuwaitTimesLaw.url },
        ],
      },
      {
        type: "table",
        headers: ["Provision (as reported)", "What it means for brands"],
        rows: [
          ["Influencers and paid advertisers on social platforms need a licence", "Check licence status for any creator posting for you after the law applies"],
          ["Covers paid and unpaid promotion, including gifts, free products and trials", "Gifting campaigns are in scope"],
          ["Applies to citizens, residents and visitors whose promotion targets audiences in Kuwait", "Regional and visiting creators aren't exempt because they live elsewhere"],
          ["Personal accounts are exempt unless used regularly for commercial or advertising activity", "Company accounts used solely for their own business are reported as exempt"],
          ["Licences last two years, renewable; applicants must be 18 or over; 60 days to decide", "Allow time in campaign planning"],
          ["Sponsorship, gifts and free trials must be clearly disclosed; misleading claims prohibited", "Disclosure wording in every contract"],
          ["Draws, raffles and giveaways need prior permits; minors in marketing need guardian permission", "Plan permits before announcing giveaways"],
          ["Fines of KD 1,000 to KD 50,000 for unlicensed commercial activity or undisclosed sponsorship; possible account blocking", "Compliance risk sits with creators and, in practice, with the brands commissioning them"],
          ["Existing operators get a grace period after the executive regulations are issued", "Watch for the regulations and the start of the grace period"],
        ],
      },
      { type: "heading", text: "Planning during the transition", id: "transition" },
      {
        type: "list",
        items: [
          "For campaigns now: clear disclosure, accurate claims and permits for any draw or giveaway",
          "For contracts running past April 2027: require the creator to hold any licence the law requires once it applies, with termination rights if they don't",
          "Watch for the executive regulations and the start of the grace period, and diarize a review",
          "Keep records of briefs, approvals and final posts",
          "Don't assume a UAE or Saudi licence covers Kuwait",
        ],
      },
      { type: "heading", text: "Campaign operations", id: "operations" },
      {
        type: "table",
        headers: ["Area", "Practical note"],
        rows: [
          ["Currency", "Contract in Kuwaiti dinars (KWD). The dinar is managed against a currency basket, not a fixed dollar peg, so use a dated rate for any conversion"],
          ["Language", "Kuwaiti Arabic for national audiences; English and community languages for others"],
          ["Calendar", "National Day and Liberation Day (25 and 26 February), Ramadan and Eid, summer travel"],
          ["Creator demand", "Well-known Kuwaiti creators are in demand regionally; book early around Ramadan and National Day"],
          ["Measurement", "Report Kuwait-based reach separately from regional reach"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Paying for a famous Kuwaiti creator's regional audience when you only sell in Kuwait",
          "Signing long contracts without a clause on the new licence requirement",
          "Running giveaways without a permit",
          "Treating Kuwait as interchangeable with other Gulf markets",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Kuwait offers brands an experienced creator market and a discerning audience, and from 2027 a formal licensing regime. Choose creators for their Kuwait audience, brief in the right dialect, disclose clearly, and write the new rules into contracts now. For multi-country planning, see the GCC influencer marketing playbook.",
        links: [{ text: "GCC influencer marketing playbook", href: "/blog/gcc-influencer-marketing-playbook" }],
      },
    ],
    faqs: [
      {
        question: "Do influencers in Kuwait need a licence?",
        answer:
          "Under Decree-Law No. 102 of 2026, published on 4 October 2026, influencers and paid advertisers targeting Kuwaiti audiences will need a licence once the law takes effect around April 2027. The executive regulations will set the details. Confirm the current position before contracting.",
      },
      {
        question: "Does the Kuwait law cover gifted products?",
        answer:
          "As reported, yes. It covers paid and unpaid promotion, including content made in exchange for gifts, free products or trials, and requires clear disclosure.",
      },
      {
        question: "Which platforms are most used for influencer marketing in Kuwait?",
        answer:
          "Instagram, YouTube, TikTok and Snapchat are central, with Instagram reaching a larger share of the population than in Saudi Arabia. Choose by audience and objective.",
      },
    ],
  },
  // 1433
  {
    slug: "influencer-marketing-oman",
    category: "Influencer Marketing",
    title: "Influencer Marketing in Oman: How Brands Can Find Relevant Local Creators",
    seoTitle: "Influencer Marketing in Oman: Finding Local Creators",
    excerpt:
      "How to plan creator campaigns in Oman: a mostly Omani audience with its own dialect and identity, the platforms that reach it, finding creators whose audiences are actually in Oman, and the licence for social media marketing that has applied since 2023.",
    metaDescription:
      "Influencer marketing in Oman: Omani audiences and dialect, platforms, finding local creators, the social media marketing licence since 2023 and campaign planning.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "9 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Oman",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["influencer marketing Oman", "Omani influencers", "Oman influencer licence", "influencer marketing Muscat"],
    related: ["gcc-influencer-marketing-playbook", "influencer-marketing-kuwait", "influencer-marketing-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/influencer-marketing-oman.svg",
      alt: "Finding Omani creators: audience in Oman, Omani Arabic, licence under the social media marketing decision, and local measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "Oman is often treated as an afterthought in Gulf campaigns, reached through creators based in Dubai or Riyadh. That misses what makes it distinct: most of its people are Omani nationals, its dialect and culture are its own, and it has required licences for marketing on social media since 2023. Local creators with Omani audiences usually matter more here than regional names.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To run influencer marketing in Oman, choose Omani creators whose audiences are in Oman, brief in Omani Arabic for national audiences, and plan around YouTube, Instagram, TikTok and Snapchat. Promoting other businesses' products on websites and social media has required a licence from the Ministry of Commerce, Industry and Investment Promotion (MOCIIP) since March 2023 under Ministerial Decision 619/2022, with exemptions for businesses promoting their own products. Licensees must display their licence number, and companies that work with unlicensed promoters can face penalties. Contract in OMR and measure Oman separately from other markets.",
      },
      { type: "heading", text: "Audiences", id: "audience" },
      {
        type: "table",
        headers: ["Segment", "Notes", "Creator approach"],
        rows: [
          ["Omani nationals", "The majority of the population; strong national and regional identity", "Omani creators in Omani Arabic; family, travel, food, cars, culture"],
          ["Expatriate communities", "Large South Asian communities and others", "Community creators in their languages and English"],
          ["Regions", "Muscat, Dhofar (Salalah), the interior and the north differ in lifestyle and seasons", "Choose creators by region for local campaigns; Dhofar's khareef season is a distinct tourism moment"],
        ],
      },
      { type: "heading", text: "Platforms", id: "platforms" },
      {
        type: "paragraph",
        text: "DataReportal's Digital 2026 Oman report puts the population at about 5.54 million, with these late-2025 advertising-audience figures (indicators, not active-user counts):",
        links: [{ text: "DataReportal's Digital 2026 Oman report", href: SRC.datareportalOman.url }],
      },
      {
        type: "table",
        headers: ["Platform", "Ad reach"],
        rows: [
          ["YouTube", "3.44 million (62.1% of population)"],
          ["Instagram", "2.80 million (50.5%)"],
          ["TikTok (18+)", "2.73 million (68.4% of adults)"],
          ["Snapchat", "2.35 million (42.3%)"],
          ["Facebook", "1.75 million (31.6%)"],
          ["LinkedIn (registered members)", "1.30 million (23.5%)"],
          ["X", "910 thousand (16.4%)"],
        ],
      },
      { type: "heading", text: "Finding relevant Omani creators", id: "creators" },
      {
        type: "list",
        items: [
          "Start with the share of followers in Oman; regional creators often have little Omani audience",
          "Look for creators who already talk about Omani places, food and daily life",
          "Check whether the creator displays a licence number, as licensees are required to",
          "Match region to goal: a Salalah hotel needs different creators from a Muscat restaurant",
          "Prefer consistent mid-sized creators over one-off large names for trust",
          "Read comments for Omani dialect and local questions",
        ],
      },
      { type: "heading", text: "The social media marketing licence", id: "licence" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. A summary of reported rules from 2022 and 2023, not legal advice; confirm current requirements with MOCIIP. Ministerial Decision 619/2022 regulates marketing and promotion on websites and social media and took effect on 24 March 2023, as reported by Oman Observer. Key points from reports and a legal summary on Decree.om:`,
        links: [
          { text: "as reported by Oman Observer", href: SRC.omanLicence.url },
          { text: "a legal summary on Decree.om", href: SRC.omanDecreeBlog.url },
        ],
      },
      {
        type: "list",
        items: [
          "A licence is needed to market or promote other people's or companies' goods and services online, paid or unpaid",
          "Businesses promoting their own goods and services, and non-profit charitable or voluntary activity, are exempt",
          "Licensees must display their licence number and follow content rules, including respect for religion, the state and national identity, no misleading rumours, no IP infringement, and no promotion of tobacco",
          "Expatriate companies or individuals wanting to promote in Oman were told they'd need to establish a company and obtain a licence",
          "The ministry said there were currently no licence fees, and that one licence could be used to employ multiple influencers (Times of Oman)",
          "Penalties reported include warnings, fines of up to OMR 1,000, licence suspension and revocation, including for companies dealing with unlicensed promoters",
        ],
      },
      {
        type: "paragraph",
        text: "The no-fee statement was reported by Times of Oman. Because these reports date from 2022 and 2023, check whether fees, procedures or penalties have changed before each campaign.",
        links: [{ text: "Times of Oman", href: SRC.omanNoFees.url }],
      },
      { type: "heading", text: "Campaign operations", id: "operations" },
      {
        type: "table",
        headers: ["Area", "Practical note"],
        rows: [
          ["Currency", "Contract in Omani rials (OMR); the rial is pegged to the US dollar"],
          ["Language", "Omani Arabic for national audiences; English and community languages for expatriates"],
          ["Calendar", "Ramadan and Eid, National Day (November), summer and the Dhofar khareef season"],
          ["Contracting", "Confirm the licence position of each creator or the licensed entity contracting them"],
          ["Measurement", "Report Oman-based reach and results separately"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Reaching Oman only through Dubai or Riyadh creators with little Omani audience",
          "Ignoring the licence requirement because the creator is based abroad",
          "One national campaign for regions with different seasons and lifestyles",
          "Using Gulf Arabic from another country where Omani voices would be more natural",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Oman rewards brands that treat it as its own market: Omani creators, Omani Arabic, attention to regions and seasons, and a licence check on every promoter. Planning Oman alongside other Gulf countries is covered in the GCC influencer marketing playbook.",
        links: [{ text: "GCC influencer marketing playbook", href: "/blog/gcc-influencer-marketing-playbook" }],
      },
    ],
    faqs: [
      {
        question: "Do influencers in Oman need a licence?",
        answer:
          "Yes, to promote other businesses' products or services on websites and social media. Ministerial Decision 619/2022, in force since March 2023, requires a licence from the Ministry of Commerce, Industry and Investment Promotion. Businesses promoting their own products are exempt.",
      },
      {
        question: "Is the Oman influencer licence free?",
        answer:
          "When the rules were introduced, the ministry said there were currently no licence fees. Check with the ministry, as this could change.",
      },
      {
        question: "Can foreign influencers promote brands in Oman?",
        answer:
          "When the rules were introduced, expatriate companies or individuals were told they would need to establish a company and obtain a licence to promote in Oman. Confirm the current position with the ministry.",
      },
    ],
  },
];

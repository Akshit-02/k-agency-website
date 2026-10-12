import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC_LANGUAGE, GCC_REVIEWED, SRC, UAE_HUB } from "@/content/gcc-guides/shared";

/**
 * Topic 1704 (batch 1660–1709). The UAE pillar has a permit section, but brands and agencies search for the permit
 * itself, and the regulator's FAQ answers questions the pillar can't hold (promo codes, employees, audiences outside
 * the UAE, virtual advertisers, requester obligations). Every rule here is taken from the UAE Media Council's FAQ and
 * visitor permit page as read on 2026-10-10; where press reports differ (fees, dates), both are shown.
 * See docs/brand-guides-1660-1709-audit.md.
 */
const PUBLISHED = "2026-10-10";
const CHECKED_TEXT = "10 October 2026";

export const uaePermitPosts: BlogPost[] = [
  // 1704
  {
    slug: "uae-advertiser-permit",
    category: "Influencer Marketing",
    title: "The UAE Advertiser Permit for Influencers: What Brands and Agencies Need to Know",
    seoTitle: "UAE Advertiser Permit for Influencers: A Guide for Brands",
    excerpt:
      "Who needs a UAE advertiser permit, what counts as advertising, the exemptions, the visitor permit for overseas creators, fees and dates, and what brands and agencies must check before contracting creators, based on the regulator's own FAQ.",
    metaDescription:
      "UAE advertiser permit explained for brands: who needs one, exemptions, visitor permits, fees, validity and the checks brands must make before contracting.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "6 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates",
    breadcrumbParents: [UAE_HUB],
    tags: ["UAE advertiser permit", "UAE influencer licence", "visitor advertiser permit UAE", "UAE influencer permit for brands", "UAE Media Council influencer rules"],
    related: ["influencer-marketing-uae", "choose-influencer-marketing-agency-uae", "saudi-influencer-advertising-rules"],
    hero: {
      src: "/blog/gcc-guides/uae-advertiser-permit.svg",
      alt: "UAE advertiser permit checks for brands: does the post advertise, who is posting, which permit applies, verify the permit, then contract in writing",
    },
    body: [
      {
        type: "paragraph",
        text: `Reviewed ${CHECKED_TEXT}. Individuals who advertise on social media to audiences in the UAE need a permit, and the businesses that hire them have obligations too. This guide sets out what the regulator's published FAQ says, marks where press reports differ, and separates official requirements from our practical suggestions. It isn't legal advice: confirm current requirements with the regulator or a UAE adviser before a campaign goes live.`,
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Anyone promoting a brand, product, service or event to a UAE audience on social media needs an advertiser permit, whether they're paid in money, paid in products or not paid at all. That includes promo codes. The main exceptions are business owners promoting their own business through a personal account, employees promoting their employer, and purely editorial content with no advertising. Visiting creators need a separate visitor permit, applied for through an accredited UAE agency. Brands must contract only with permit holders listed by the regulator, put the agreement in writing, and must not use unpermitted visitors.",
      },
      { type: "heading", text: "Who regulates the permit", id: "regulator" },
      {
        type: "paragraph",
        text: "The permit comes from Federal Decree-Law No. 55 of 2023 on media regulation. Pinsent Masons reported that the National Media Authority replaced the UAE Media Council as the national media regulator, but the Media Council's website, including its FAQ and visitor permit page, was still online when we checked, while the National Media Authority's permit pages were not loading. The rules below come from the Media Council FAQ and its visitor permit page. If the authority publishes updated guidance, it takes precedence.",
        links: [
          { text: "Pinsent Masons reported", href: SRC.pinsentDeadline.url },
          { text: "Media Council FAQ", href: SRC.uaemcFaq.url },
          { text: "visitor permit page", href: SRC.uaemcVisitor.url },
        ],
      },
      { type: "heading", text: "Who needs a permit", id: "who" },
      {
        type: "paragraph",
        text: "The FAQ defines advertising services as an individual promoting a brand, product, service, event or activity on social media, for money, for non-monetary compensation or free of charge. It covers any platform, app or website used to publish media or advertising content.",
      },
      {
        type: "table",
        headers: ["Situation", "Permit needed?", "What the FAQ says"],
        rows: [
          ["UAE resident creator promoting a brand, paid or gifted", "Yes", "Applies to paid and unpaid advertising"],
          ["Creator sharing a discount or promo code", "Yes", "Promo codes and discounts need a permit"],
          ["Real estate broker or agent advertising for their company", "Yes", "Regardless of commission"],
          ["Business owner promoting their own business from a personal account", "No", "Unless they use other advertisers, who must be permitted; the owner is responsible for compliance"],
          ["Employee promoting their employer's products, events or jobs", "No", "Employees don't need a permit for workplace matters"],
          ["Creator publishing purely media content, with no advertising", "No", "Must still meet media content standards"],
          ["Resident or visitor advertising to audiences outside the UAE", "No", "A permit is needed if the audience is inside the UAE"],
          ["Under-18s", "Depends", "Educational, sports, cultural or awareness content is allowed; commercial advertising needs a permit under a business licence in the guardian's name"],
          ["Virtual (AI-created) advertiser", "Yes", "Must also disclose its virtual identity"],
          ["Creator visiting the UAE", "Visitor permit", "Applied for by an accredited UAE agency"],
        ],
      },
      {
        type: "paragraph",
        text: "The FAQ also says that advertisers outside the UAE should contract with permitted UAE nationals, residents or visitors to avoid violations. If you plan to pay creators based abroad to target UAE audiences, ask a UAE adviser how that applies before you book them.",
      },
      { type: "heading", text: "Requirements, validity and fees", id: "requirements" },
      {
        type: "paragraph",
        text: "For citizens and residents, the FAQ lists these requirements: full legal capacity and a minimum age of 18, good conduct, no relevant convictions, a licence for electronic media activity, content that meets media standards, mandatory training, no outstanding dues and no previously cancelled permit. Applications go through the regulator's eServices portal. The FAQ says decisions are made within three business days, the permit is valid for one year and renewable, and a permit not renewed within 30 days of expiry is treated as cancelled. One permit covers sub-accounts under a main account, but every account used for advertising must be listed, and changes must be notified within 10 business days.",
      },
      {
        type: "table",
        headers: ["Point", "Media Council FAQ (checked 10 October 2026)", "Press reports"],
        rows: [
          ["Fee for citizens and residents", "First permit free for the first year; AED 1,000 for annual renewal", "Free for the first three years, then AED 1,000 a year (Gulf News, September 2025; Pinsent Masons, January 2026)"],
          ["Visitor permit fee", "Not stated; renewal fees apply", "AED 500 for three months (Pinsent Masons)"],
          ["When the rules apply", "Policy in effect from 1 January 2025", "Registration deadline extended to 31 January 2026 (Pinsent Masons)"],
        ],
      },
      {
        type: "paragraph",
        text: "Because the sources differ, check the fee and any deadline when you or your creators apply. Sources: Gulf News on eligibility and fees and Pinsent Masons on the deadline.",
        links: [
          { text: "Gulf News on eligibility and fees", href: SRC.gnPermitHowTo.url },
          { text: "Pinsent Masons on the deadline", href: SRC.pinsentDeadline.url },
        ],
      },
      { type: "heading", text: "Visiting creators", id: "visitors" },
      {
        type: "paragraph",
        text: "The visitor advertiser permit is for people entering the UAE on a visit visa who want to advertise on social media during their stay. According to the regulator's visitor permit page, applications must be submitted only through advertising or talent management agencies licensed in the UAE and accredited by the regulator, which publishes the list of accredited agencies. The permit lasts three months and can be extended, as long as the total doesn't exceed six months. The contract is between the brand and the UAE agency, which represents the visitor. Visitors must be at least 18, meet good-conduct requirements, follow the media content standards and complete the regulator's training.",
        links: [{ text: "visitor permit page", href: SRC.uaemcVisitor.url }],
      },
      { type: "heading", text: "What brands and agencies must do", id: "brands" },
      {
        type: "paragraph",
        text: "These obligations apply to the business requesting the advertising, whether the post appears on the brand's account or the creator's:",
      },
      {
        type: "list",
        items: [
          "Contract only with individuals listed in the regulator's published database of permit holders",
          "Tell the creator about the licensing decision and its rules, and make sure they comply",
          "Don't work with visiting advertisers who don't hold a permit, or invite them to promotional events",
          "Put the agreement in writing and provide a copy to the regulator on request",
          "Agencies must keep a record of advertisements by visiting advertisers",
        ],
      },
      {
        type: "paragraph",
        text: "Permit holders must show their permit number on their profile, advertise only from registered accounts, disclose any payment, gift or free service clearly and in the same language as the ad, and get approvals before advertising in regulated sectors such as medical, financial and real estate. The FAQ says the business requesting the ad can face administrative penalties if the rules are broken.",
      },
      { type: "heading", text: "Penalties", id: "penalties" },
      {
        type: "paragraph",
        text: "For content that breaches the media standards, the FAQ lists a warning, a fine of up to AED 1 million that can double to a maximum of AED 2 million for a repeat within a year, temporary or permanent closure, and cancellation of licences or permits. Pinsent Masons reported fines of up to AED 10,000 for posting without a permit. Penalties are set by Cabinet decisions, so check the current schedule rather than relying on summaries.",
        links: [{ text: "Pinsent Masons reported", href: SRC.pinsentDeadline.url }],
      },
      { type: "heading", text: "A checklist for brands (our suggestions)", id: "checklist" },
      {
        type: "template",
        label: "Before contracting a creator for a UAE campaign",
        text: "1. Does the post advertise anything to a UAE audience? If yes, a permit applies\n2. Who is posting: resident, visitor, employee, owner or a virtual persona?\n3. Resident: check the permit number in the regulator's database and save a record\n4. Visitor: book through an accredited agency; allow time for the permit before filming\n5. Brief: disclosure wording in each language the post uses; permit number shown on the profile\n6. Sector approvals (health, finance, real estate, promotions) before content is made\n7. Written contract naming the accounts used, the permit number and who handles compliance\n8. Keep the contract, permit check, approvals and final posts on file",
      },
      {
        type: "paragraph",
        text: "Wider UAE planning, sector approvals and Dubai's promotion permits are covered in our UAE influencer marketing guide. If you're hiring help, see how to choose an influencer marketing agency in the UAE; Saudi Arabia's separate licence is explained in Saudi influencer advertising rules.",
        links: [
          { text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae#permits" },
          { text: "how to choose an influencer marketing agency in the UAE", href: "/blog/choose-influencer-marketing-agency-uae" },
          { text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming gifted or unpaid posts don't need a permit",
          "Forgetting that sharing a promo code counts as advertising",
          "Booking a visiting creator directly instead of through an accredited agency",
          "Taking a permit number on trust instead of checking the regulator's database",
          "Disclosing in English only when the post is in Arabic, or the other way round",
          "Relying on a blog summary for fees and deadlines that have changed",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "For brands, the permit comes down to a few habits: check every creator's permit before contracting, use an accredited agency for visitors, put agreements in writing and make sure disclosure and sector approvals are in the brief. The regulator's guidance has changed several times, so recheck it before each campaign. This is general information, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "Do influencers need a permit to advertise in the UAE?",
        answer:
          "Yes. According to the UAE Media Council FAQ, individuals who promote a brand, product, service or event to UAE audiences on social media need an advertiser permit, whether they're paid, gifted or unpaid. Exceptions include owners promoting their own business from a personal account, employees promoting their employer and purely editorial content.",
      },
      {
        question: "Can a visiting influencer advertise in the UAE?",
        answer:
          "Yes, with a visitor advertiser permit. It must be applied for through an accredited UAE advertising or talent management agency, lasts three months and can be extended up to a total of six months.",
      },
      {
        question: "What must a brand check before hiring a UAE influencer?",
        answer:
          "That the creator appears in the regulator's database of permit holders, that the agreement is in writing, that disclosure and any sector approvals are covered, and, for visitors, that the permit was arranged through an accredited agency.",
      },
    ],
  },
];

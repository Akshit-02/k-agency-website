import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

/**
 * Partnership formats and creator relationships (1660–1709). Most of the 50 topics already had owners, so this
 * module holds only three gaps: newsletter sponsorships (1660), co-branded creator products (1681, with 1680 and
 * 1696) and a creator code of conduct (1699, with 1698). The UAE permit page (1704) lives in gcc-guides/uae-permit.ts.
 * See docs/brand-guides-1660-1709-audit.md.
 */
const PUBLISHED = "2026-10-10";
const REVIEWED = "October 2026";

const EXT = {
  substackJune: "https://www.netinfluencer.com/substack-expands-native-creator-partnership-program-taps-former-roku-exec-to-lead-sponsorships-push/",
  substackFormats: "https://www.netinfluencer.com/substack-unveils-three-new-sponsorship-formats-for-publishers-at-advertising-week/",
  biSubstack: "https://www.businessinsider.com/substack-welcomes-influencer-marketing-newsletters-rothys-poppi-brands-2026-10",
  beehiivAds: "https://www.beehiiv.com/ad-network/publishers",
  appleMpp: "https://support.apple.com/guide/iphone/use-mail-privacy-protection-iphf084865c7/ios",
  kaer: "https://www.netinfluencer.com/kaer-let-a-creatorcommunity-co-design-a-fragrance-that-sold-out-in-less-than-a-day/",
  asciSocial: "https://www.ascionline.in/social/",
};

export const partnershipFormatPosts: BlogPost[] = [
  // 1660
  {
    slug: "newsletter-influencer-marketing",
    category: "Campaign Strategy",
    title: "Newsletter Influencer Marketing: How Brands Sponsor Creator Newsletters",
    seoTitle: "Newsletter Influencer Marketing: A Guide for Brands",
    excerpt:
      "How brands work with newsletter creators on Substack, beehiiv and independent lists: when a newsletter beats a social post, sponsorship formats, how to choose a newsletter, how to measure results when open rates are unreliable, and disclosure.",
    metaDescription:
      "Sponsor creator newsletters: when they beat social posts, Substack and beehiiv formats, choosing a newsletter, measuring beyond opens, and disclosure.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["newsletter influencer marketing", "newsletter sponsorship", "Substack sponsorships for brands", "creator newsletter partnerships", "sponsor a newsletter"],
    related: ["podcast-sponsorships", "creator-newsletter-monetization", "measuring-influencer-campaign-roi"],
    hero: {
      src: "/blog/brand-guides/newsletter-influencer-marketing.svg",
      alt: "Newsletter sponsorship process: fit the reader, choose a format, agree the brief, track clicks and sales, judge beyond opens",
    },
    body: [
      {
        type: "paragraph",
        text: "Newsletters have become a creator channel brands can buy into. Substack launched a native sponsorship program in June 2026 and added new formats in October, beehiiv runs an ad network for its publishers, and many independent writers sell sponsorships directly. A newsletter reaches people who chose to hear from the writer, often in more depth than a social post allows. This guide covers when that's worth paying for and how to do it well.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Sponsor a newsletter when your product needs explaining, when the writer's readers match your buyer closely, or when you want an endorsement in a writer's own words rather than a short video. Choose by reader fit and evidence of engagement, not subscriber count. Agree the format, wording approval and disclosure in writing, track with tagged links and codes, and judge results on clicks, sign-ups and sales, because open rates are unreliable.",
      },
      { type: "heading", text: "When a newsletter beats a social post", id: "when" },
      {
        type: "table",
        headers: ["Newsletters suit", "Social posts suit"],
        rows: [
          ["Products that need explaining: software, finance, health, B2B, education", "Products people understand from a few seconds of video"],
          ["Niche audiences that read a writer for expertise", "Broad reach and visual discovery"],
          ["Longer endorsements in the writer's voice", "Demonstrations and trends"],
          ["Click-through to a page or offer", "Views, shares and comments"],
          ["Repeat sponsorship over several issues", "Single bursts around a launch"],
        ],
      },
      {
        type: "paragraph",
        text: "Many creators run both. A writer's newsletter can carry the detailed recommendation while their social accounts drive awareness, so ask for both when you brief.",
      },
      { type: "heading", text: "Sponsorship formats", id: "formats" },
      {
        type: "table",
        headers: ["Format", "What it is", "Good for"],
        rows: [
          ["Sponsored slot", "A short ad or mention within an issue, often written by the creator", "Testing several newsletters"],
          ["Dedicated issue", "A whole issue on the sponsor's topic", "Launches and complex products"],
          ["Series sponsorship", "Presenting several issues or a recurring section", "Building familiarity"],
          ["Reader offer or perk", "A discount, trial or gift for subscribers", "Measurable sales"],
          ["Sponsored paid access", "The brand pays so readers get paywalled content or a trial of the paid tier", "Goodwill with engaged readers"],
          ["Reader events", "In-person or online events for the community", "Depth over reach"],
        ],
      },
      {
        type: "paragraph",
        text: "Platform programs are changing quickly. Substack's program pairs writers with brands, with writers keeping editorial independence, and its Creator Kits (media kits for eligible publications) are the entry point (Net Influencer, June 2026). In October 2026 Substack added formats that let a brand make a paid post free for all readers, give free subscribers a month of paid access, or commission themed content, and said it would offer Kantar brand-lift studies for campaigns with enough scale (Net Influencer, October 2026). beehiiv's ad network is open to publishers on paid plans and pays on CPM or CPC, according to its publisher page. Check current terms before you plan around any of them.",
        links: [
          { text: "Net Influencer, June 2026", href: EXT.substackJune },
          { text: "Net Influencer, October 2026", href: EXT.substackFormats },
          { text: "its publisher page", href: EXT.beehiivAds },
        ],
      },
      {
        type: "paragraph",
        text: "Business Insider reported in October 2026 how Rothy's works with Substack writers: sponsoring reader events, commissioning essays for an anniversary and building longer relationships with writers who already mentioned the brand. The results quoted there are the brand's own, so treat them as one company's experience, not a benchmark.",
        links: [{ text: "Business Insider reported", href: EXT.biSubstack }],
      },
      { type: "heading", text: "Choosing a newsletter", id: "choosing" },
      {
        type: "list",
        items: [
          "Reader fit: who subscribes, what they do for work or interest, and where they live",
          "Engagement evidence: click rates on past sponsored links, replies and comments, paid subscriber share, not just list size",
          "Past sponsors: how sponsorships were written and how often they appear",
          "Voice: would the writer genuinely recommend your product?",
          "Audience source: lists grown through giveaways or bought signups are weaker than organic ones",
          "Terms: price basis (per issue, per thousand subscribers or per click), deadlines and approval rights",
        ],
      },
      {
        type: "paragraph",
        text: "Ask for recent screenshots from the newsletter platform's dashboard rather than numbers typed into a media kit. How creators price newsletter sponsorships is covered from their side in creator newsletter monetization.",
        links: [{ text: "creator newsletter monetization", href: "/blog/creator-newsletter-monetization" }],
      },
      { type: "heading", text: "Briefing and disclosure", id: "brief" },
      {
        type: "paragraph",
        text: "Give the writer the product truth, approved claims, the link and any offer, then let them write in their own voice; readers notice copy that doesn't sound like the writer. Agree whether you review the copy, by when, and how many changes you can request. The sponsorship must be clearly labelled where it appears, and claims must be ones you can prove. Advertising rules don't stop at social media: in most markets, undisclosed paid promotion can be misleading wherever it appears. ASCI's guidance sets the expectations for India, and our influencer marketing compliance guide covers other markets.",
        links: [
          { text: "ASCI's guidance", href: EXT.asciSocial },
          { text: "influencer marketing compliance guide", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      { type: "heading", text: "Measuring newsletter sponsorships", id: "measurement" },
      {
        type: "paragraph",
        text: "Treat opens with care. Apple's Mail Privacy Protection stops senders from seeing whether a message was opened, which makes open rates unreliable across lists with many Apple Mail users. Clicks and what happens after them are firmer ground.",
        links: [{ text: "Mail Privacy Protection", href: EXT.appleMpp }],
      },
      {
        type: "list",
        items: [
          "A unique tagged link for each newsletter and issue",
          "A dedicated code or landing page, for sales and sign-ups that don't come through the link",
          "Cost per click, sign-up and order, compared within the channel first",
          "A 'how did you hear about us' question at checkout or sign-up",
          "Brand search and direct traffic around the send date for larger sponsorships",
        ],
      },
      {
        type: "paragraph",
        text: "Where you need to know what the sponsorship added beyond what would have happened anyway, see influencer marketing incrementality; the wider framework is in measuring influencer campaign ROI.",
        links: [
          { text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" },
          { text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Buying on subscriber count alone",
          "Judging success on open rates",
          "Rewriting the creator's copy into an ad",
          "One issue and done, when familiarity builds over several",
          "No tracking beyond a single link",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Newsletter sponsorships work when the reader fits, the writer means what they say and the results are measured on actions, not opens. Start with a few well-matched newsletters, track each one separately and keep the ones that deliver. For audio, the equivalent decisions are in our guide to podcast sponsorships.",
        links: [{ text: "podcast sponsorships", href: "/blog/podcast-sponsorships" }],
      },
    ],
    faqs: [
      {
        question: "Is sponsoring a newsletter a form of influencer marketing?",
        answer:
          "Yes, when the newsletter is run by a creator or writer with their own audience. The brand pays for the writer's recommendation to readers who chose to subscribe, and the same disclosure and claims rules apply.",
      },
      {
        question: "How do you measure a newsletter sponsorship?",
        answer:
          "Use a unique tagged link and code for each newsletter, and judge it on clicks, sign-ups and sales. Open rates are unreliable because privacy features such as Apple's Mail Privacy Protection hide whether a message was opened.",
      },
    ],
  },
  // 1681 (+1680, 1696)
  {
    slug: "co-branded-creator-products",
    category: "Campaign Strategy",
    title: "Co-Branded Creator Products: How to Launch a Product or Bundle With a Creator",
    seoTitle: "Co-Branded Creator Products: A Guide for Brands",
    excerpt:
      "How brands develop co-branded products, limited editions and bundles with creators: choosing the right creator, deal structures from flat fees to royalties, who controls what, product quality and claims, launch planning and the mistakes that sink collaborations.",
    metaDescription:
      "Launch a co-branded product or bundle with a creator: choosing partners, fee and royalty structures, control, quality and claims, and launch planning.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["co-branded creator products", "creator product collaboration", "influencer product line", "creator collab product launch", "creator bundles"],
    related: ["influencers-for-product-launch", "creator-product-drops-gcc", "influencer-marketing-contract"],
    hero: {
      src: "/blog/brand-guides/co-branded-creator-products.svg",
      alt: "Co-branded creator product steps: choose the partner, agree the deal, divide control, check quality and claims, then launch",
    },
    body: [
      {
        type: "paragraph",
        text: "A co-branded product goes further than a sponsored post: the creator's name, taste or community shapes the product itself. Done well, the launch has an audience before it exists. Done badly, the brand owns unsold stock with a creator's face on it. This guide covers how brands structure these partnerships, from a curated bundle to a full product line.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Start with a creator who already uses and likes your products, and whose audience asks about them. Agree in writing who controls the product, name, design, manufacturing, pricing and claims, how the creator is paid (flat fee, royalty or a mix), how long the product can be sold and what happens if either side walks away. Test demand with a limited run or bundle before committing to a full line, and check that every claim on pack and in posts can be proven.",
      },
      { type: "heading", text: "Bundles, editions and full products", id: "options" },
      {
        type: "table",
        headers: ["Option", "What it involves", "Risk"],
        rows: [
          ["Curated bundle", "The creator picks existing products into a set", "Low: no new stock"],
          ["Limited edition", "A new variant, shade, flavor or design of an existing product", "Moderate: one production run"],
          ["Co-developed product", "A new product designed with the creator", "Higher: development time, minimum order quantities"],
          ["Ongoing line", "Several products under a shared name", "Highest: long-term dependence on one creator"],
        ],
      },
      {
        type: "paragraph",
        text: "Bundles are a sensible first step: they test whether the creator's audience buys before anyone designs packaging. Merchandising the bundle on your own site, with the creator's content on the product page, also shows whether their recommendation converts people who don't follow them.",
      },
      { type: "heading", text: "Choosing the creator", id: "choosing" },
      {
        type: "list",
        items: [
          "Genuine use: they bought or used your products before any deal",
          "Audience demand: followers already ask where to buy or what they use",
          "Purchase evidence: past affiliate or code sales, not just engagement",
          "Business capacity: time to take part in development and launch, or a team that can",
          "Reputation: a full brand-safety check, because the product carries their name for years",
        ],
      },
      {
        type: "paragraph",
        text: "Creators who run their own businesses (creator-entrepreneurs) bring product instincts and expect a bigger say and a bigger share. Treat them as business partners, with a proper commercial negotiation, not as a sponsored post with extra steps.",
      },
      { type: "heading", text: "Deal structures", id: "deals" },
      {
        type: "table",
        headers: ["Structure", "How it works", "Suits"],
        rows: [
          ["Flat fee", "Fixed payment for design input, name use and promotion", "Bundles and limited editions"],
          ["Royalty", "A percentage of net sales, defined clearly (after returns, discounts and tax)", "Products the creator will keep promoting"],
          ["Fee plus royalty", "A smaller guaranteed fee with a royalty on top", "Most co-developed products"],
          ["Equity or joint venture", "Shared ownership of a product company", "Rare; needs legal and tax advice"],
        ],
      },
      {
        type: "paragraph",
        text: "Whatever the structure, the contract should cover name and likeness use, territories, the sales period and sell-off of remaining stock, promotion commitments, exclusivity with competing products, approval rights, reporting of sales to the creator, and what happens if the creator's reputation or the product runs into trouble. Standard clauses are in the influencer marketing contract guide, and exclusivity terms in influencer exclusivity.",
        links: [
          { text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" },
          { text: "influencer exclusivity", href: "/blog/influencer-exclusivity" },
        ],
      },
      { type: "heading", text: "Who controls what", id: "control" },
      {
        type: "paragraph",
        text: "A reported example shows a common split. Net Influencer described in October 2026 how the fragrance brand Kaer developed a perfume oil with a creator who had used its products before any deal: the creator had creative control over the scent direction and name and asked her audience for input, while the brand kept control of formulation and manufacturing, and the process took about a year. The sales figures in that article are the brand's own and aren't a benchmark, but the division of control is a useful model: the creator owns taste and voice, and the brand owns safety, quality and supply.",
        links: [{ text: "Net Influencer described", href: EXT.kaer }],
      },
      { type: "heading", text: "Quality, claims and compliance", id: "compliance" },
      {
        type: "list",
        items: [
          "The brand stays responsible for product safety, labelling and regulatory approvals in each market",
          "Every claim on pack, on the product page and in creator posts needs evidence",
          "The creator's promotion is still advertising and must be disclosed, even though their name is on the product",
          "Sector rules apply as usual: cosmetics, supplements, food and children's products often need more checks",
          "Agree who answers customer complaints and how the creator is told about quality issues",
        ],
      },
      { type: "heading", text: "Planning the launch", id: "launch" },
      {
        type: "list",
        items: [
          "Build anticipation with the creator's audience during development, without promising dates you can't meet",
          "Set stock levels from evidence (bundle sales, waitlist sign-ups), not hopes",
          "Prepare the product page, creator content and customer service before launch day",
          "Track sales by channel: creator link, code, direct and retail",
          "Plan what happens after the launch spike: restocks, new content, or a planned end",
        ],
      },
      {
        type: "paragraph",
        text: "Launch sequencing is covered in influencers for product launches, and Gulf-specific drops in creator-led product drops in the GCC.",
        links: [
          { text: "influencers for product launches", href: "/blog/influencers-for-product-launch" },
          { text: "creator-led product drops in the GCC", href: "/blog/creator-product-drops-gcc" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing a creator for reach rather than genuine use of the product",
          "Royalties on an undefined 'sales' figure",
          "No plan for unsold stock or the end of the partnership",
          "Over-ordering stock before demand is tested",
          "Letting the creator's involvement end at the photo shoot",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Co-branded products work when the creator genuinely shapes the product, the audience already wants it and the deal is clear about money, control and endings. Start small with a bundle or limited edition, prove demand, then build. This is general guidance, not legal or tax advice.",
      },
    ],
    faqs: [
      {
        question: "How are creators paid for co-branded products?",
        answer:
          "Usually with a flat fee, a royalty on net sales, or a smaller guaranteed fee plus a royalty. Define net sales precisely and agree how and when sales are reported to the creator.",
      },
      {
        question: "Does a creator need to disclose promotion of their own co-branded product?",
        answer:
          "Yes. If the creator is paid or earns a royalty, their posts promoting the product are advertising and should be clearly disclosed, even though their name is on it.",
      },
    ],
  },
  // 1699 (+1698)
  {
    slug: "influencer-code-of-conduct",
    category: "Campaign Strategy",
    title: "Influencer Code of Conduct: What Brands and Creators Should Agree",
    seoTitle: "Influencer Code of Conduct: A Template for Brands",
    excerpt:
      "A practical code of conduct for creator partnerships that covers both sides: what creators commit to on disclosure, claims and behavior, what brands commit to on briefs, deadlines, payment and workload, and how to handle breaches fairly. Includes a template.",
    metaDescription:
      "Write an influencer code of conduct: creator commitments, brand commitments on fair workload and payment, handling breaches, and a template to adapt.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer code of conduct", "creator code of conduct", "influencer partnership guidelines", "creator wellbeing brand partnerships"],
    related: ["influencer-marketing-governance", "influencer-marketing-brand-safety", "influencer-marketing-contract"],
    hero: {
      src: "/blog/brand-guides/influencer-code-of-conduct.svg",
      alt: "Influencer code of conduct: creator commitments, brand commitments, fair workload, handling breaches, review",
    },
    body: [
      {
        type: "paragraph",
        text: "A code of conduct sets out how a brand and its creators will behave toward audiences and toward each other. Most codes only list what creators must not do. The ones that work also say what the brand owes creators: clear briefs, reasonable deadlines, prompt payment and limits on revisions. This guide covers both sides and includes a template. It complements, not replaces, the contract.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer code of conduct should cover honest disclosure, claims the creator believes and the brand can prove, respectful behavior, privacy and safety, and confidentiality. It should also commit the brand to clear briefs, workable timelines, limited revision rounds, payment on time and respect for the creator's judgement. Keep it short, share it before contracting, refer to it in the contract, and say how breaches are handled.",
      },
      { type: "heading", text: "What creators commit to", id: "creators" },
      {
        type: "list",
        items: [
          "Disclose every paid, gifted or affiliate relationship clearly, in the post's language",
          "Only say what they genuinely believe, and only use claims the brand has approved",
          "Use the product before reviewing it; no invented results or edited before-and-after images",
          "Treat audiences, other creators and commenters with respect; no harassment or hate",
          "Protect privacy: no filming people without consent; extra care with children",
          "Follow platform rules and any licensing or permit requirements in their market",
          "Keep confidential information confidential until launch",
          "Tell the brand promptly about anything that could affect the partnership",
        ],
      },
      { type: "heading", text: "What brands commit to", id: "brands" },
      {
        type: "list",
        items: [
          "A clear brief with approved claims, before work starts",
          "Realistic timelines, with a minimum notice period for new deliverables",
          "A fixed number of revision rounds, with feedback consolidated from one contact",
          "No requests to post false claims, hide sponsorship or buy engagement",
          "Payment on the agreed date",
          "Respect for the creator's voice, audience and boundaries, including topics they won't cover",
          "Support if the creator faces abuse because of the campaign",
          "Credit and usage only as agreed in the contract",
        ],
      },
      {
        type: "paragraph",
        text: "Revision limits and payment timelines are covered in creator revision policies and creator payment delays.",
        links: [
          { text: "creator revision policies", href: "/blog/influencer-revision-policy" },
          { text: "creator payment delays", href: "/blog/creator-payment-delays" },
        ],
      },
      { type: "heading", text: "Fair workload and burnout", id: "workload" },
      {
        type: "paragraph",
        text: "Creators often work alone across many brands, and the brand side causes much of the pressure: late briefs, short deadlines, scattered feedback and scope that grows after the fee is agreed. A code can't fix the creator economy, but a brand can stop adding to the problem. Practical commitments include planning deliverables around the creator's posting rhythm, avoiding requests outside agreed hours for routine matters, accepting reasonable delays for illness, and paying for any extra work. These are also good business: rushed content performs worse and stressed creators leave programs. Scope creep is covered in influencer campaign hidden costs.",
        links: [{ text: "influencer campaign hidden costs", href: "/blog/influencer-campaign-hidden-costs#scope-creep" }],
      },
      { type: "heading", text: "Handling breaches", id: "breaches" },
      {
        type: "table",
        headers: ["Situation", "Proportionate response"],
        rows: [
          ["Missing or unclear disclosure", "Ask for a correction within a set time; record it"],
          ["Unapproved claim", "Ask for an edit or removal; check whether others repeated it"],
          ["Serious misconduct, established", "Pause or end the partnership as the contract allows"],
          ["Allegations not yet established", "Pause, gather facts, avoid public judgement"],
          ["Brand breaks its commitments", "The creator raises it with the named contact; the brand fixes it and records it"],
        ],
      },
      {
        type: "paragraph",
        text: "How to respond when a creator controversy breaks is covered in influencer controversy response, and the contract wording for conduct clauses in the influencer marketing contract guide.",
        links: [
          { text: "influencer controversy response", href: "/blog/influencer-controversy-response" },
          { text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" },
        ],
      },
      { type: "heading", text: "Template", id: "template" },
      {
        type: "template",
        label: "Creator partnership code of conduct (outline)",
        text: "1. Purpose: how we and our creators work together and with audiences\n2. Creator commitments: disclosure, honest opinions, approved claims, respect, privacy, platform and market rules, confidentiality\n3. Brand commitments: clear briefs, notice periods, [number] revision rounds, payment within [number] days, respect for creator boundaries, support during abuse\n4. Never: hidden sponsorship, false or edited results, bought engagement, targeting children with unsuitable products\n5. Raising concerns: named contacts on both sides\n6. Breaches: proportionate steps; the contract decides remedies\n7. Review: yearly, and when rules change",
      },
      {
        type: "paragraph",
        text: "Brand-side policies the code sits alongside are in influencer marketing governance, and screening before a creator is booked in influencer marketing brand safety.",
        links: [
          { text: "influencer marketing governance", href: "/blog/influencer-marketing-governance" },
          { text: "influencer marketing brand safety", href: "/blog/influencer-marketing-brand-safety" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "A one-sided code that only lists creator obligations",
          "Copying legal clauses into the code instead of plain language",
          "Sharing it after the contract is signed",
          "No named contact for creators to raise concerns",
          "Treating every breach as grounds to end the partnership",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good code of conduct is short, two-sided and used. It tells creators what's expected, commits the brand to working conditions that make good content possible, and sets out fair steps when something goes wrong. This is general guidance, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer code of conduct include?",
        answer:
          "Creator commitments on disclosure, honest and approved claims, respectful behavior, privacy and confidentiality; brand commitments on briefs, timelines, revisions, payment and respect for creators; never-allowed practices; how concerns are raised; and how breaches are handled.",
      },
      {
        question: "Is a code of conduct the same as an influencer contract?",
        answer:
          "No. The code sets shared standards in plain language; the contract sets legal obligations and remedies. The contract should refer to the code so both are agreed together.",
      },
    ],
  },
];

import type { BlogPost } from "@/content/blog";
import { AU_AUTHOR, AU_HUB, AU_LANGUAGE, AU_PUBLISHED, AU_REVIEWED, AU_SRC } from "@/content/au-guides/shared";
import { SRC as GCC_SRC } from "@/content/gcc-guides/shared";

/**
 * Australia cluster, batch 2 (1560–1609): planning and commercial guides. Brief template (1560, with 1565 proposals
 * and 1567 multi-creator briefing), creator content in paid ads (1580, with 1562, 1581, 1582 and 1585), timelines
 * (1566, with 1584 launches), contracts (1579, with 1589 ambassadors), local and regional campaigns (1606, with
 * 1605 cities) and Australia, India and the UAE (1609). See docs/australia-1560-1609-audit.md.
 */
const ASCI_GUIDELINES = "https://www.ascionline.in/social/wp-content/uploads/2025/04/ASCI-Influencer-Guidelines.pdf";
const DOCA_ENDORSEMENTS = "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1892527";

export const auPlanningPosts: BlogPost[] = [
  // 1560 (+1565, 1567)
  {
    slug: "influencer-brief-template-australia",
    category: "Campaign Strategy",
    title: "Influencer Marketing Brief Template for Australian Brands",
    seoTitle: "Influencer Brief Template for Australian Brands",
    excerpt:
      "A copy-ready influencer brief template for Australian brands, with the fields generic templates miss: claims you can substantiate, disclosure wording, sector rules (TGA, ABAC, ASIC), age limits, ABN and GST, usage rights and moral rights consent. Also covers what a good proposal back should contain and how to brief several creators without identical posts.",
    metaDescription:
      "A copy-ready influencer brief template for Australian brands: approved claims, disclosure, sector rules, ABN and GST, usage rights and multi-creator briefing.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "6 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer brief template Australia", "influencer marketing proposal template", "creator brief Australia", "brief multiple influencers"],
    related: ["influencer-contracts-australia", "influencer-advertising-rules-australia", "influencer-campaign-brief"],
    hero: {
      src: "/blog/au-guides/influencer-brief-template-australia.svg",
      alt: "Australian influencer brief: objective, approved claims, disclosure, sector rules, rights and GST, then the creator's proposal",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator brief tells someone outside your business what to make, what they can say and what happens after they post. In Australia, the brief also does compliance work: the ACCC says the usual advertising rules apply to posts a business pays for or incentivises influencers to make, so the claims, disclosure wording and sector rules need to be in the brief, not left to the creator. This page gives a copy-ready template, explains each field, and covers what a good proposal back from a creator or agency should contain.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A good Australian influencer brief fits on two pages and covers: the objective and one KPI; the audience (including age, given the under-16 account restrictions); the product facts and the exact claims the creator may make, with the evidence held by you; mandatory disclosure wording and the platform's paid partnership label; any sector rules (therapeutic goods, alcohol, financial products, health services, food to children); deliverables, dates and approval steps; and the commercial terms (fee ex GST, the creator's ABN and GST status, usage rights, exclusivity). Leave the creative idea to the creator.",
      },
      { type: "heading", text: "The template", id: "template" },
      {
        type: "template",
        label: "Influencer brief (Australia)",
        text: "1. Brand and contact\n   Business name, ABN, campaign contact, approver for facts\n\n2. Objective and KPI\n   One objective (awareness / consideration / sales / leads) and one primary measure\n\n3. Audience\n   Who, where (state or city if relevant), age range (no under-16 targeting on age-restricted platforms)\n\n4. Product facts\n   Name, price (incl. GST), availability, what's included, where to buy\n\n5. Claims\n   May say: ________ (each claim backed by evidence we hold)\n   Must not say: ________ (e.g. 'cures', 'guaranteed', 'eco-friendly', unverified comparisons)\n\n6. Disclosure\n   Start of caption / first seconds of video: 'Ad' (or 'Ad | gifted')\n   Use the platform's paid partnership label; repeat in livestreams\n\n7. Sector rules (tick if relevant)\n   [ ] Therapeutic goods (TGA)  [ ] Alcohol (ABAC, creator 25+)  [ ] Financial products (ASIC)\n   [ ] Health services (Ahpra)  [ ] Food to children (AANA)  [ ] Environmental claims (ACCC)\n\n8. Deliverables and dates\n   Platform, format, number, draft date, go-live window, links / codes\n\n9. Approval\n   We check facts, claims and disclosure, not style. Turnaround: __ business days\n\n10. Commercial terms\n   Fee ex GST, creator's ABN and GST status, payment terms\n   Usage: channels, paid ads (Y/N), duration, territory\n   Exclusivity: category, period\n   Moral rights consent: specific edits we may make\n\n11. Reporting\n   Screenshots of reach, views, link clicks and audience location, due __ days after posting",
      },
      { type: "heading", text: "Fields generic templates miss", id: "fields" },
      {
        type: "table",
        headers: ["Field", "Why it matters in Australia", "Where to read more"],
        rows: [
          ["Claims you can prove", "Misleading conduct is judged on the overall impression, and consumer law applies to posts a business pays or incentivises creators to make", "ACCC social media promotions guidance"],
          ["Disclosure wording", "Ad Standards upheld a complaint where 'gift' alone didn't make posts clearly advertising", "Australian influencer advertising rules"],
          ["Sector tick-boxes", "Therapeutic goods, alcohol, financial products and health services each have their own regulator and rules", "Sector guides below"],
          ["Audience age", "Ten major platforms must stop under-16s holding accounts; some codes restrict advertising to children", "Under-16 restrictions guide"],
          ["ABN and GST", "Creators registered for GST add 10%; budgets should show fees ex GST", "Influencer marketing costs in Australia"],
          ["Moral rights consent", "Creators keep moral rights even if you license or buy the content; edits need specific written consent", "Influencer contracts in Australia"],
        ],
      },
      {
        type: "paragraph",
        text: "The ACCC's social media promotions guidance says the usual advertising rules cover posts a business pays for and posts it offers incentives to influencers to make. The disclosure test and sector rules are covered in Australian influencer advertising rules, and contract terms in influencer contracts in Australia.",
        links: [
          { text: "social media promotions guidance", href: AU_SRC.acccSocialPromotions.url },
          { text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" },
          { text: "influencer contracts in Australia", href: "/blog/influencer-contracts-australia" },
        ],
      },
      { type: "heading", text: "Writing the claims section", id: "claims" },
      {
        type: "list",
        items: [
          "List each claim the creator may make in plain words, exactly as you can prove it",
          "Keep the evidence on file before the brief goes out, not after a complaint",
          "Name the claims to avoid: absolute words ('best', 'guaranteed', 'safe for everyone'), vague green terms, health outcomes",
          "Give prices including GST and any conditions, such as minimum spend or dates",
          "Let creators describe their genuine experience, but don't script a testimonial for therapeutic goods: paid or gifted testimonials aren't permitted under the TGA code",
        ],
      },
      {
        type: "paragraph",
        text: "Category rules are explained in our guides to health and wellness, financial services, food and beverage and sustainability claims.",
        links: [
          { text: "health and wellness", href: "/blog/health-wellness-influencer-marketing-australia" },
          { text: "financial services", href: "/blog/financial-services-influencer-marketing-australia" },
          { text: "food and beverage", href: "/blog/food-beverage-influencer-marketing-australia" },
          { text: "sustainability claims", href: "/blog/greenwashing-influencer-marketing-australia" },
        ],
      },
      { type: "heading", text: "Briefing several creators without identical posts", id: "multiple" },
      {
        type: "paragraph",
        text: "When ten creators post the same script on the same day, the content looks bought and performs like an ad. Identical wording across creators also makes any claim problem ten times bigger. Keep the facts, claims and disclosure fixed, and vary everything else.",
      },
      {
        type: "table",
        headers: ["Fixed for everyone", "Different for each creator"],
        rows: [
          ["Product facts, prices and availability", "The angle (their routine, problem, use case or audience question)"],
          ["Claims allowed and claims to avoid", "Format (Reel, carousel, Story, long video, live)"],
          ["Disclosure wording and label", "Setting, voice and structure"],
          ["Tracking link or code (unique per creator)", "Posting day, spread over the campaign window"],
          ["Approval rules", "Which product or feature they lead with"],
        ],
      },
      {
        type: "paragraph",
        text: "A simple method: send one shared brief, then a one-paragraph 'your angle' note for each creator that you agree on a call. If creators pitch ideas first, compare them side by side so two people don't make the same video. Coordination at larger scale is covered in influencer campaign coordination.",
        links: [{ text: "influencer campaign coordination", href: "/blog/influencer-campaign-coordination" }],
      },
      { type: "heading", text: "What a good proposal back should contain", id: "proposal" },
      {
        type: "paragraph",
        text: "Whether you brief creators directly or ask agencies to respond, a proposal should answer the brief in a way you can compare. Ask for these in writing:",
      },
      {
        type: "list",
        items: [
          "Their reading of the objective, and the measure they'd report against",
          "Creator recommendations with audience location by country and city, age split and dated screenshots",
          "The idea for each creator and why it suits their audience",
          "Deliverables and timeline, including draft and approval dates",
          "Fees ex GST, line by line: creator fees, usage rights, exclusivity, production, management",
          "Who checks claims and disclosure, and how",
          "What's not included, and assumptions behind the price",
        ],
      },
      {
        type: "paragraph",
        text: "If you're comparing agencies, use the questions in how to choose an influencer marketing agency in Australia. A generic version of the creator-facing pitch is in our influencer collaboration proposal guide.",
        links: [
          { text: "how to choose an influencer marketing agency in Australia", href: "/blog/choose-influencer-marketing-agency-australia" },
          { text: "influencer collaboration proposal", href: "/blog/influencer-collaboration-proposal" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "A script instead of a brief, which produces stiff content and identical claims",
          "Claims written by marketing without checking the evidence",
          "Disclosure left to the creator's judgement",
          "No mention of age or sector rules until legal review finds a problem",
          "Usage rights agreed after the content is made, when they cost more",
          "Fees quoted without saying whether GST is included",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The best Australian briefs are short on creative direction and precise on facts, claims, disclosure and rights. Fix what must be accurate, free up what makes creator content work, and ask for proposals you can compare line by line. This is general information, not legal advice; take advice for regulated categories.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer brief include in Australia?",
        answer:
          "The objective and KPI, audience and age, product facts, the claims allowed and to avoid, disclosure wording, any sector rules, deliverables and dates, approval steps, and commercial terms including the fee ex GST, usage rights and exclusivity.",
      },
      {
        question: "Should I write the script for influencers?",
        answer:
          "Usually not. Fix the facts, claims and disclosure, and let creators choose the angle and format. Scripted, identical posts tend to look like ads and repeat any claim problem across every creator.",
      },
      {
        question: "Is a brief the same as a contract?",
        answer:
          "No. The brief explains what to make; the contract records fees, rights, approvals and obligations. Attach the brief to the contract so the claims and disclosure requirements are binding.",
      },
    ],
  },
  // 1580 (+1562, 1581, 1582, 1585)
  {
    slug: "creator-content-paid-ads-australia",
    category: "Campaign Strategy",
    title: "Influencer Content in Paid Ads in Australia: Partnership Ads, Licensing and Buyouts",
    seoTitle: "Influencer Content in Paid Ads: An Australian Guide",
    excerpt:
      "How Australian brands can use creator content beyond the original post: influencer marketing versus paid social, partnership ads and creator ad authorisation, licence versus buyout, moral rights, and reusing creator reviews on product pages and in email without breaching the ACCC's review rules or the Spam Act.",
    metaDescription:
      "Use creator content in paid ads in Australia: partnership ads, licensing vs buyout, moral rights, reusing reviews under ACCC rules and Spam Act email.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "6 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer marketing vs paid social Australia", "partnership ads Australia", "influencer whitelisting Australia", "creator content licensing", "content buyout"],
    related: ["influencer-contracts-australia", "influencer-usage-rights", "instagram-partnership-ads"],
    hero: {
      src: "/blog/au-guides/creator-content-paid-ads-australia.svg",
      alt: "Using creator content in paid ads: original post, authorisation, licence or buyout, ads and owned channels, measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "Much of the value in creator content now comes after the original post: as a paid ad, on a product page or in an email. That reuse raises three questions for Australian brands. Is influencer marketing or paid social the better use of budget? What rights do you need to run creator content as ads? And what do consumer law and spam law say about reusing creator reviews? This guide answers all three.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer marketing and paid social work best together: creators supply credible content and an audience, and paid media scales the posts that work to the people you choose. To run creator content as ads you need written permission covering the channels, duration, territory and edits, either as a time-limited licence or a buyout. Ads must still be clearly advertising. Reused reviews must be genuine, unedited in meaning and not selectively presented, and marketing emails need consent and a working unsubscribe.",
      },
      { type: "heading", text: "Influencer marketing vs paid social", id: "versus" },
      {
        type: "table",
        headers: ["", "Influencer posts (organic)", "Paid social (brand ads)", "Creator content as paid ads"],
        rows: [
          ["Who it reaches", "The creator's followers", "Audiences you target", "Audiences you target, with the creator's face and voice"],
          ["Credibility", "Highest when the fit is real", "Lower; clearly the brand speaking", "Higher than brand ads; labelled as advertising"],
          ["Control", "Low after posting", "High", "High"],
          ["Cost basis", "Creator fee", "Media spend", "Creator fee plus usage rights plus media"],
          ["Best for", "Trust, discovery, testing ideas", "Scale, retargeting, offers", "Scaling proven creator content"],
          ["Main risk", "Wrong creator, poor disclosure", "Ad fatigue, low trust", "Rights not agreed; claims not checked for an ad audience"],
        ],
      },
      {
        type: "paragraph",
        text: "A practical sequence: run creators organically, find the posts that perform with your audience, then license those for paid use. Testing creative is covered in UGC for paid social.",
        links: [{ text: "UGC for paid social", href: "/blog/ugc-paid-social-testing" }],
      },
      { type: "heading", text: "Partnership ads and creator ad authorisation", id: "partnership-ads" },
      {
        type: "paragraph",
        text: "Platforms let brands run ads from a creator's handle with the creator's permission. Meta brought its Instagram creator marketplace and partnership ads (formerly branded content ads) to Australia in February 2024; partnership ads show both accounts and a paid partnership label. TikTok's Spark Ads work similarly: the creator authorises a post for ads, for a period they choose, and the brand runs it from Ads Manager. Earlier, people called this 'whitelisting'.",
        links: [{ text: "brought its Instagram creator marketplace and partnership ads", href: AU_SRC.metaMarketplaceAu.url }],
      },
      {
        type: "list",
        items: [
          "Agree in writing which posts, platforms, how long, which audiences and whether you can edit captions or cut-downs",
          "Agree who can see and respond to comments on the ad",
          "Check the platform's current authorisation steps; they change",
          "Remember the ad is your advertising: claims must be accurate for the ad's audience, not only the creator's followers",
          "End the authorisation when the licence ends, and record it",
        ],
      },
      {
        type: "paragraph",
        text: "Platform detail is in Instagram partnership ads and influencer whitelisting.",
        links: [
          { text: "Instagram partnership ads", href: "/blog/instagram-partnership-ads" },
          { text: "influencer whitelisting", href: "/blog/ugc-whitelisting-creator-licensing" },
        ],
      },
      { type: "heading", text: "Licence or buyout?", id: "licence-buyout" },
      {
        type: "table",
        headers: ["", "Licence", "Buyout (assignment)"],
        rows: [
          ["What you get", "Permission to use content for agreed channels, time and territory", "Ownership of copyright in the content"],
          ["Cost", "Lower; renewable", "Higher; one-off"],
          ["Best for", "Most campaigns; testing which content works", "Content you'll use for years, such as product page videos"],
          ["Moral rights", "Creator keeps them", "Creator still keeps them"],
          ["Watch for", "Expiry dates; ads left running", "Using the creator's name and likeness beyond what they agreed"],
        ],
      },
      {
        type: "paragraph",
        text: "Under Australian copyright law, creators also have moral rights: to be attributed, not to be falsely attributed, and to have their work's integrity respected. Moral rights can't be transferred, even with a buyout. If you plan to cut, re-voice or re-caption content, get the creator's written consent to those specific acts. Arts Law's moral rights information sheet warns against consents so broad they give unlimited scope to alter work. A buyout of the video also doesn't automatically give you the right to use the creator's name and image in new ads; say so in the contract.",
        links: [{ text: "moral rights information sheet", href: AU_SRC.moralRights.url }],
      },
      {
        type: "paragraph",
        text: "Pricing and scope of rights are covered in influencer usage rights, and contract clauses in influencer contracts in Australia.",
        links: [
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer contracts in Australia", href: "/blog/influencer-contracts-australia" },
        ],
      },
      { type: "heading", text: "Reusing creator reviews on product pages and in email", id: "owned-channels" },
      {
        type: "paragraph",
        text: "A creator's honest review can work well on a product page or in an email. The ACCC's online reviews guidance sets the limits. Reviews must reflect the genuine opinion of someone who used the product; paid relationships must be stated; reviews must not be edited in a way that changes their meaning; and businesses must not suppress or remove genuine negative reviews to skew the picture. Incentives for reviews must be offered regardless of whether the review is positive and must be disclosed. Star ratings should show how many reviews they're based on.",
        links: [{ text: "online reviews guidance", href: AU_SRC.acccReviews.url }],
      },
      {
        type: "list",
        items: [
          "Label creator content on your site as paid or gifted where it was",
          "Quote creators accurately and in context; don't splice positive fragments",
          "Don't mix paid creator quotes into customer review widgets",
          "Remove quotes when the licence ends or the product changes",
          "For therapeutic goods, paid or gifted testimonials aren't permitted at all; see our health and wellness guide",
        ],
      },
      {
        type: "paragraph",
        text: "Email and SMS add the Spam Act. The ACMA's guidance on avoiding spam says commercial messages need consent, must identify the sender and must include a working unsubscribe honoured within five working days. A creator video in a newsletter is fine; sending it to people who never opted in is not. See health and wellness influencer marketing in Australia for the therapeutic goods rules.",
        links: [
          { text: "guidance on avoiding spam", href: AU_SRC.acmaSpam.url },
          { text: "health and wellness influencer marketing in Australia", href: "/blog/health-wellness-influencer-marketing-australia" },
        ],
      },
      { type: "heading", text: "Measuring creator ads", id: "measurement" },
      {
        type: "list",
        items: [
          "Compare creator ads with your best brand ads on the same objective and audience",
          "Report the content cost (fee plus rights) separately from media spend",
          "Watch frequency; creator content fatigues too",
          "Use holdouts or geographic tests where you can, rather than relying on platform attribution alone",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Running a creator's post as an ad because it was 'public anyway'",
          "Licences without end dates, or ads left running after they expire",
          "Assuming a buyout removes moral rights",
          "Cherry-picking or trimming reviews for product pages",
          "Emailing creator content to lists without consent",
          "Checking claims for the original post but not for the wider ad audience",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Treat creator content as an asset with terms attached. Agree rights before production, license first and buy out only what you'll use for years, keep ads clearly labelled, and reuse reviews honestly. This is general information, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "Is influencer marketing better than paid social in Australia?",
        answer:
          "They do different jobs. Creators add credibility and content; paid social adds reach and targeting. Many brands use creator content as paid ads to combine both, with usage rights agreed in writing.",
      },
      {
        question: "Do I need permission to run an influencer's post as an ad?",
        answer:
          "Yes. Agree the posts, platforms, duration, territory and any edits in writing, and use the platform's authorisation tools, such as Meta partnership ads or TikTok Spark Ads.",
      },
      {
        question: "Does a content buyout include moral rights?",
        answer:
          "No. Under Australian law, moral rights stay with the creator and can't be transferred. Get written consent for specific edits you plan to make.",
      },
    ],
  },
  // 1566 (+1584)
  {
    slug: "influencer-campaign-timeline-australia",
    category: "Campaign Strategy",
    title: "Influencer Campaign Timelines in Australia: Lead Times, the Retail Calendar and Launches",
    seoTitle: "Influencer Campaign Timelines in Australia",
    excerpt:
      "How long an Australian influencer campaign takes, from brief to report: realistic lead times, extra time for regulated categories, the Australian retail and seasonal calendar (summer Christmas, EOFY, state school holidays) and a backward-planned product launch timeline.",
    metaDescription:
      "Plan influencer campaign timelines in Australia: lead times, compliance checks, the Australian retail calendar, state school holidays and launch timelines.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer campaign timeline Australia", "influencer product launch Australia", "Australian retail calendar", "EOFY influencer campaign"],
    related: ["influencer-marketing-campaign-timeline", "influencers-for-product-launch", "influencer-brief-template-australia"],
    hero: {
      src: "/blog/au-guides/influencer-campaign-timeline-australia.svg",
      alt: "Australian influencer campaign timeline: brief, creator selection, contracts and compliance, content and approval, live and report",
    },
    body: [
      {
        type: "paragraph",
        text: "Most delays in creator campaigns come from steps that weren't planned: contracts, product shipping, claims checks and approvals. Australian campaigns add a few local factors: a retail calendar where Christmas falls in summer, a financial year that ends on 30 June, school holidays that differ by state, and extra checks for regulated categories. This guide sets out realistic lead times and a launch timeline you can plan backwards from.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Allow about six to ten weeks from brief to the first post for a typical campaign with several creators, and longer for regulated categories, product launches or peak periods when good creators book out. Work backwards from the go-live date: report about four weeks after the last post, approvals one to two weeks before posting, content creation two to three weeks before that, and contracts, product delivery and compliance checks before content starts. These are planning ranges from experience, not industry benchmarks.",
      },
      { type: "heading", text: "A typical timeline", id: "timeline" },
      {
        type: "table",
        headers: ["Stage", "Typical time", "What causes delays"],
        rows: [
          ["Brief and approvals internally", "1 week", "Claims not agreed; no single decision-maker"],
          ["Creator search and vetting", "1–2 weeks", "Requesting audience data; creators slow to reply"],
          ["Proposals and negotiation", "1 week", "Usage rights and exclusivity priced late"],
          ["Contracts and product delivery", "1–2 weeks", "Shipping to regional areas; stock"],
          ["Content creation", "1–3 weeks", "Shoots needing locations, permits or weather"],
          ["Review and approval", "3–10 business days", "Several approvers; legal review in regulated categories"],
          ["Live window", "1–4 weeks", "Staggering posts; paid amplification"],
          ["Reporting", "2–4 weeks after the last post", "Waiting for sales data and creator screenshots"],
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical example: a brand wanting posts live on 1 November would brief internally in early September, contract creators by late September, receive drafts in mid-October and approve them by 25 October. The generic version of this planning is in our influencer marketing campaign timeline guide.",
        links: [{ text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" }],
      },
      { type: "heading", text: "Extra time for regulated categories", id: "compliance-time" },
      {
        type: "list",
        items: [
          "Therapeutic goods: check claims against the TGA code and brief creators that the product is a therapeutic good",
          "Alcohol: ABAC guidance makes brands responsible for creator posts, with creators 25 or older and age controls; allow for pre-vetting",
          "Financial products: legal or compliance review of scripts and links against ASIC guidance",
          "Health services: Ahpra's testimonial ban changes what creators can say",
          "Environmental claims: evidence must exist before the claim is made",
        ],
      },
      {
        type: "paragraph",
        text: "Budget an extra one to two weeks for these. The rules are summarised in Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
      { type: "heading", text: "The Australian calendar", id: "calendar" },
      {
        type: "table",
        headers: ["Period", "Why it matters", "Planning note"],
        rows: [
          ["Late January to early February", "Back to school and Australia Day", "School terms start on different dates by state"],
          ["February to April", "Valentine's Day, Easter, autumn ranges", "Easter dates move each year"],
          ["May", "Mother's Day (second Sunday) and mid-year online sales", "Gifting categories book creators early"],
          ["June", "End of financial year (30 June)", "EOFY sales; B2B budgets reset in July"],
          ["July", "Winter school holidays", "Holiday dates differ by state and territory"],
          ["September", "Father's Day (first Sunday), spring", "Different from the UK and US dates"],
          ["Late September to early October", "AFL and NRL grand finals", "Sport and food brands compete for attention"],
          ["November", "Black Friday, Cyber Monday and online sale events", "Creator rates and availability tighten"],
          ["December to January", "Christmas and Boxing Day in summer, long school holidays", "Many creators travel; content is summer-themed"],
        ],
      },
      {
        type: "paragraph",
        text: "Some holidays are local: Melbourne Cup day is a public holiday in metropolitan Melbourne, and Brisbane has a show holiday in August. Australia also has several time zones, and Queensland, Western Australia and the Northern Territory don't use daylight saving, so a 7pm post in Sydney isn't 7pm everywhere. Local campaigns are covered in local and regional influencer marketing in Australia.",
        links: [{ text: "local and regional influencer marketing in Australia", href: "/blog/local-regional-influencer-marketing-australia" }],
      },
      { type: "heading", text: "A product launch timeline", id: "launch" },
      {
        type: "table",
        headers: ["When", "Step"],
        rows: [
          ["8–10 weeks before", "Brief, claims evidence, creator shortlist, embargo terms"],
          ["6 weeks before", "Contracts signed, including usage rights for launch ads"],
          ["4 weeks before", "Product samples delivered; creators test it properly"],
          ["2 weeks before", "Drafts submitted; claims and disclosure checked"],
          ["Launch week", "Staggered posts; paid amplification of approved content; stock checked"],
          ["2–4 weeks after", "Second wave of reviews from creators who used the product longer"],
          ["6 weeks after", "Report on reach, sales, returns and what to keep for the next launch"],
        ],
      },
      {
        type: "paragraph",
        text: "Give creators enough time to use the product before they post; reviews from people who have actually used it are more useful and are what the ACCC expects. Stock matters too: if a post says something is available, it should be. For launch strategy beyond timing, see our product launch guide.",
        links: [{ text: "product launch guide", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Booking creators for November or December in October",
          "Using US or UK dates for Mother's Day or Father's Day",
          "One national posting time across time zones",
          "Ignoring state school holiday differences for family products",
          "No time for compliance review in regulated categories",
          "Asking for reviews before creators have used the product",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Plan backwards from the go-live date, add time for anything regulated, and use the Australian calendar rather than a northern-hemisphere template. A realistic timeline is the cheapest way to get better creators and better content.",
      },
    ],
    faqs: [
      {
        question: "How long does an influencer campaign take in Australia?",
        answer:
          "Usually six to ten weeks from brief to the first post for a multi-creator campaign, plus reporting afterwards. Allow more for regulated categories, launches and peak periods such as November and December.",
      },
      {
        question: "When should I book creators for Christmas in Australia?",
        answer:
          "Ideally by September or early October. November sales and summer holidays reduce availability, and many creators travel in late December and January.",
      },
    ],
  },
  // 1579 (+1589)
  {
    slug: "influencer-contracts-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing Contracts in Australia: Clauses, Law and Ambassador Agreements",
    seoTitle: "Influencer Contracts in Australia: Clauses and Law",
    excerpt:
      "What an Australian influencer contract should cover and the local law behind it: misleading conduct, unfair contract terms in standard form contracts with small businesses, GST and ABNs, superannuation for contractors paid for their labour, moral rights, usage rights, exclusivity, and how ambassador agreements differ from one-off deals.",
    metaDescription:
      "Influencer contracts in Australia: key clauses, unfair contract terms, GST and ABNs, super for contractors, moral rights, usage rights and ambassador deals.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "6 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer contract Australia", "influencer agreement template Australia", "brand ambassador agreement Australia", "unfair contract terms influencers"],
    related: ["influencer-marketing-contract", "creator-content-paid-ads-australia", "influencer-brief-template-australia"],
    hero: {
      src: "/blog/au-guides/influencer-contracts-australia.svg",
      alt: "Australian influencer contract: scope, claims and disclosure, fees and GST, rights and moral rights, termination",
    },
    body: [
      {
        type: "paragraph",
        text: "An influencer contract records what each side has agreed: what will be made, what can be said, what it costs and what the brand may do with it afterwards. Several areas of Australian law affect how those contracts should be written. This guide covers the clauses to include and the rules behind them. It's general information for brands and agencies, not legal advice; use a lawyer for your template.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An Australian influencer contract should cover the parties (including ABN and GST status), deliverables and dates, approved claims and mandatory disclosure, approval steps, fees and payment terms, usage rights and moral rights consent, exclusivity, conduct and termination, and record-keeping. Five areas of local law matter most: misleading conduct under the Australian Consumer Law, unfair contract terms if you use a standard form contract with a small business, GST, superannuation if a creator is paid mainly for their labour, and moral rights.",
      },
      { type: "heading", text: "The clauses", id: "clauses" },
      {
        type: "table",
        headers: ["Clause", "What to cover"],
        rows: [
          ["Parties", "Legal names, ABNs, GST registration, who signs for the creator (talent manager or company)"],
          ["Deliverables", "Platform, format, number, length, dates, links and codes; the brief attached"],
          ["Claims and disclosure", "Only approved claims; required disclosure wording and platform labels; no deleting disclosure later"],
          ["Approval", "What the brand checks (facts, claims, disclosure), turnaround times, number of revision rounds"],
          ["Fees and payment", "Amount ex GST, GST if registered, invoice requirements, payment terms"],
          ["Usage rights", "Organic reposting, paid ads, channels, duration, territory, edits allowed"],
          ["Moral rights", "Written consent to specific edits; attribution expectations"],
          ["Exclusivity", "Competitor category, platforms and period, priced separately"],
          ["Conduct", "Reasonable standards, what happens if either side is in a public controversy"],
          ["Termination and cancellation", "Notice, payment for work done, takedown, what happens to licensed content"],
          ["Records", "Screenshots, metrics and audience data within an agreed time"],
        ],
      },
      { type: "heading", text: "Consumer law: both sides are exposed", id: "acl" },
      {
        type: "paragraph",
        text: "The ACCC's guidance on social media promotions applies the usual advertising rules to posts businesses pay or incentivise influencers to make. In practice, the contract should require clear disclosure, limit claims to the approved list, and let the brand ask for corrections or removal if a post misleads. The ACCC's December 2023 sweep flagged 81% of 118 influencers reviewed for posts raising concerns, so this isn't theoretical.",
        links: [
          { text: "guidance on social media promotions", href: AU_SRC.acccSocialPromotions.url },
          { text: "December 2023 sweep", href: AU_SRC.acccSweepPage.url },
        ],
      },
      { type: "heading", text: "Unfair contract terms", id: "uct" },
      {
        type: "paragraph",
        text: "Many creators are small businesses. Since 9 November 2023, it has been prohibited to propose, use or rely on unfair terms in standard form contracts with consumers and small businesses, with penalties for contracts made, renewed or varied from that date. A small business means fewer than 100 employees or annual turnover under $10 million, and a contract is presumed to be standard form unless shown otherwise. Maximum penalties for a company are the greatest of $50 million, three times the benefit, or 30% of adjusted turnover during the breach period. The ACCC's announcement of the new penalties explains the changes.",
        links: [{ text: "announcement of the new penalties", href: AU_SRC.acccUct.url }],
      },
      {
        type: "list",
        items: [
          "Avoid clauses that let only the brand vary fees, deliverables or rights",
          "Avoid one-sided termination without payment for work done",
          "Keep indemnities proportionate to what the creator controls",
          "Make exclusivity specific, time-limited and paid for",
          "Avoid automatic renewals that the creator can't easily exit",
        ],
      },
      { type: "heading", text: "GST and ABNs", id: "gst" },
      {
        type: "paragraph",
        text: "Creators carrying on a business usually quote an ABN. If they're registered for GST, which is compulsory at $75,000 annual turnover, they add 10% to their fee. Quote and compare fees ex GST, and ask creators to state their GST status in the contract. The ATO also treats non-cash benefits such as gifted products as assessable income for creators at market value; that's the creator's tax matter, but it's a reason to record gifts. See influencer marketing costs in Australia.",
        links: [
          { text: "compulsory at $75,000 annual turnover", href: AU_SRC.atoGst.url },
          { text: "non-cash benefits such as gifted products", href: AU_SRC.atoIncome.url },
          { text: "influencer marketing costs in Australia", href: "/blog/influencer-marketing-cost-australia" },
        ],
      },
      { type: "heading", text: "Superannuation for contractors", id: "super" },
      {
        type: "paragraph",
        text: "Under superannuation law, a contractor paid wholly or principally for their labour can be treated as an employee for super guarantee purposes, even with an ABN. The ATO's ruling TR 2023/4 sets out the test: there must be a contract, wholly or principally for a person's labour, and the person must do the work. A contract to achieve a result, or one that lets the worker delegate the work, generally falls outside it. A fixed fee per deliverable to a creator's company looks different from a day rate paid to an individual for filming. The super guarantee rate is 12% from 1 July 2025. Ask your accountant how this applies to your arrangements.",
        links: [{ text: "TR 2023/4", href: AU_SRC.atoSuperContractors.url }],
      },
      { type: "heading", text: "Usage rights and moral rights", id: "rights" },
      {
        type: "paragraph",
        text: "Spell out where and for how long you can use the content, whether that includes paid ads, and what edits are allowed. Moral rights stay with the creator even if you buy the copyright, so get written consent for specific edits. Licences and buyouts are compared in influencer content in paid ads in Australia.",
        links: [{ text: "influencer content in paid ads in Australia", href: "/blog/creator-content-paid-ads-australia" }],
      },
      { type: "heading", text: "Ambassador agreements", id: "ambassadors" },
      {
        type: "paragraph",
        text: "Long-term ambassador programs need more than a one-off post agreement. They usually involve a retainer, regular deliverables, appearances and category exclusivity for months. That raises the stakes on several points:",
      },
      {
        type: "list",
        items: [
          "Disclosure in every post, not only in the bio",
          "Exclusivity that's specific and paid for, which also helps on unfair contract terms",
          "Review points (for example every quarter) where either side can change or end the program",
          "Whether the arrangement looks like paid labour for super purposes, especially for appearances paid by the day",
          "What happens to content and usage rights when the program ends",
          "Conduct expectations that are reasonable and mutual",
        ],
      },
      {
        type: "paragraph",
        text: "Program design is covered in brand ambassador programs.",
        links: [{ text: "brand ambassador programs", href: "/blog/brand-ambassador-program" }],
      },
      { type: "heading", text: "Creators under 18", id: "minors" },
      {
        type: "paragraph",
        text: "Contracts with minors raise questions of capacity and parental consent, and state and territory rules on employing children in entertainment and advertising may apply. Check the under-16 social media account restrictions as well. Take legal advice before contracting creators under 18.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "One-sided standard terms used with small creator businesses",
          "Fees agreed without saying whether GST is included",
          "Perpetual, worldwide rights for a one-off fee",
          "Disclosure and claims missing from the contract",
          "Ambassador deals with no review or exit point",
          "Ignoring super for labour-based engagements",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A fair, specific contract protects both sides and tends to produce better work. Write claims and disclosure in, price rights and exclusivity separately, avoid one-sided standard terms, and check tax and super with your adviser. The generic clause guide is in influencer marketing contract.",
        links: [{ text: "influencer marketing contract", href: "/blog/influencer-marketing-contract" }],
      },
    ],
    faqs: [
      {
        question: "Do unfair contract terms laws apply to influencer contracts?",
        answer:
          "They can. If you use a standard form contract with a creator who is a small business (fewer than 100 employees or turnover under $10 million), unfair terms can be void and penalties have applied since 9 November 2023.",
      },
      {
        question: "Do I have to pay super to influencers?",
        answer:
          "Possibly, if the creator is an individual paid wholly or principally for their labour. Contracts for a result, through a company, or with a right to delegate are generally treated differently. Check with your accountant.",
      },
      {
        question: "Should influencer fees include GST?",
        answer:
          "Creators registered for GST add 10% to their fee. Compare quotes ex GST and record each creator's GST status in the contract.",
      },
    ],
  },
  // 1606 (+1605)
  {
    slug: "local-regional-influencer-marketing-australia",
    category: "Campaign Strategy",
    title: "Local and Regional Influencer Marketing in Australia: Cities, Regions and Local Creators",
    seoTitle: "Local and Regional Influencer Marketing in Australia",
    excerpt:
      "How to run city-level and regional creator campaigns in Australia: what population data says about Sydney, Melbourne, Brisbane and regional Australia, how to find and check local creators, state differences that affect timing, and how to measure results by area.",
    metaDescription:
      "Run local and regional influencer campaigns in Australia: city and regional reach, finding local creators, state timing differences and measuring by area.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["regional influencers Australia", "local influencer marketing Australia", "Sydney Melbourne Brisbane influencer marketing", "influencer marketing Sydney"],
    related: ["find-vet-influencers-australia", "small-business-influencer-marketing-australia", "tourism-influencer-marketing-australia"],
    hero: {
      src: "/blog/au-guides/local-regional-influencer-marketing-australia.svg",
      alt: "Local and regional creator campaigns in Australia: define the area, find local creators, check audience location, time it, measure by area",
    },
    body: [
      {
        type: "paragraph",
        text: "Many Australian businesses only sell in one city, region or state. For them, a creator with a large national audience can be a poor buy: most of the people reached can't visit the store or get the service. This guide explains how to plan creator campaigns for a specific area, what population data does and doesn't tell you about cities, and how to measure results locally.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Start with the area you can serve, then choose creators whose audience is mostly in that area, checked with dated screenshots of city-level audience data. Use several local creators rather than one national one, time posts for local holidays and time zones, and measure with area-specific codes, booking questions or postcodes. City differences in influencer marketing are often asserted but rarely measured, so plan from your own data rather than stereotypes.",
      },
      { type: "heading", text: "What the population data says", id: "data" },
      {
        type: "table",
        headers: ["Area", "Population at 30 June 2025", "Growth 2024–25"],
        rows: [
          ["Sydney", "5.64 million", "1.4%"],
          ["Melbourne", "5.44 million", "2.0%"],
          ["Brisbane", "2.83 million", "2.1%"],
          ["Perth", "2.45 million", "2.4%"],
          ["Adelaide", "1.49 million", "1.3%"],
          ["All capital cities", "18.75 million", "1.8%"],
          ["Regional Australia", "8.86 million", "1.1%"],
        ],
      },
      {
        type: "paragraph",
        text: "Source: ABS, capital city growth slows (Regional population 2024–25, released 31 March 2026). About one in three Australians lives outside a capital city, and the fastest-growing areas were mostly outer suburbs. For local campaigns, that means suburban and regional creators can matter as much as inner-city ones.",
        links: [{ text: "capital city growth slows", href: AU_SRC.absCapitals.url }],
      },
      { type: "heading", text: "Sydney vs Melbourne vs Brisbane", id: "cities" },
      {
        type: "paragraph",
        text: "We haven't found independent research showing that influencer marketing works differently in Sydney, Melbourne or Brisbane, so we won't claim it does. What does differ is practical: audience size, which creators are based where, local events and holidays, and in Brisbane's case the time zone for half the year. Treat each city as its own small campaign, compare creators on the share of their audience in that city, and let results tell you where creator content works for your business.",
      },
      {
        type: "list",
        items: [
          "Sydney and Melbourne: the largest creator pools, and the most competition for them",
          "Brisbane: fast growth; Queensland doesn't use daylight saving, so summer posting times differ from Sydney's",
          "Perth: the fastest-growing capital in 2024–25, two or three hours behind the east coast",
          "Regional centres: smaller creator pools, often very local and trusted audiences",
        ],
      },
      { type: "heading", text: "Finding local and regional creators", id: "finding" },
      {
        type: "list",
        items: [
          "Search platform location tags and local hashtags for your town or suburb",
          "Look at who your customers already follow and who tags your area",
          "Check local media, community pages and event pages for creators people mention",
          "Consider community group admins and local experts, not only lifestyle creators",
          "Ask regional tourism and business organisations who they work with",
        ],
      },
      {
        type: "paragraph",
        text: "Then check the audience. Ask for city or region audience data from the platform's analytics, dated and as screenshots, and compare the share in your area. The vetting steps are in how to find and vet influencers in Australia, including a method for estimating effective local reach.",
        links: [{ text: "how to find and vet influencers in Australia", href: "/blog/find-vet-influencers-australia#audience-share" }],
      },
      { type: "heading", text: "Timing for local campaigns", id: "timing" },
      {
        type: "list",
        items: [
          "School holidays are set by each state and territory",
          "Some public holidays are local, such as Melbourne Cup day in metropolitan Melbourne",
          "Queensland, Western Australia and the Northern Territory don't use daylight saving",
          "Regional events (shows, festivals, harvest seasons) can matter more than national dates",
          "Regional deliveries take longer; allow for product shipping",
        ],
      },
      {
        type: "paragraph",
        text: "The national calendar is in influencer campaign timelines in Australia.",
        links: [{ text: "influencer campaign timelines in Australia", href: "/blog/influencer-campaign-timeline-australia" }],
      },
      { type: "heading", text: "Measuring by area", id: "measurement" },
      {
        type: "list",
        items: [
          "Give each creator a unique code or link, and record which area each one serves",
          "Ask 'how did you hear about us?' at booking or checkout, with creator names as options",
          "Compare postcodes of orders or bookings before and during the campaign",
          "For stores, compare sales in the campaign area with similar areas without creators",
          "Report reach in your area, not total reach",
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical example: a café group in two regional towns works with three creators in each town for four weeks, each with their own code. Codes show which creators drive visits; a question at the counter catches people who didn't use one. The comparison between towns shows whether the approach is worth extending. For more on small budgets, see influencer marketing for small businesses in Australia.",
        links: [{ text: "influencer marketing for small businesses in Australia", href: "/blog/small-business-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing creators by follower count instead of local audience share",
          "One national creator for a business that serves one area",
          "Assuming city differences without data",
          "Posting at east-coast times for a Perth audience",
          "Forgetting state school holidays and local public holidays",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Local creator campaigns work when reach is measured where you can actually serve customers. Define the area, check where each creator's audience lives, respect local timing, and measure by area. Expand to new cities or regions when your own results support it.",
      },
    ],
    faqs: [
      {
        question: "Is influencer marketing different in Sydney, Melbourne and Brisbane?",
        answer:
          "We haven't found independent evidence that it works differently. Practical factors differ: audience size, creator supply, local events and holidays, and time zones. Plan each city as its own test and compare results.",
      },
      {
        question: "How do I find regional Australian influencers?",
        answer:
          "Search location tags and local hashtags, look at who your customers follow, check community pages and local media, and ask regional tourism or business groups. Then verify the share of each creator's audience in your area.",
      },
    ],
  },
  // 1609
  {
    slug: "influencer-marketing-australia-india-uae",
    category: "Influencer Marketing",
    title: "Influencer Marketing Across Australia, India and the UAE: Rules, Platforms and Planning",
    seoTitle: "Influencer Marketing in Australia, India and the UAE",
    excerpt:
      "A side-by-side guide for brands running creator campaigns in Australia, India and the UAE: who regulates influencer advertising, creator licensing, disclosure, platforms, language, currency and tax, and how to run one campaign across all three markets without copying the same plan.",
    metaDescription:
      "Compare influencer marketing in Australia, India and the UAE: regulators, creator licensing, disclosure, platforms, tax and running one campaign across markets.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia, India and the United Arab Emirates",
    breadcrumbParents: [AU_HUB],
    tags: ["international influencer marketing", "influencer marketing Australia India UAE", "cross-market influencer campaign", "global influencer marketing agency"],
    related: ["influencer-marketing-australia", "influencer-marketing-india", "influencer-marketing-uae"],
    hero: {
      src: "/blog/au-guides/influencer-marketing-australia-india-uae.svg",
      alt: "One campaign, three markets: Australia, India and the UAE compared on rules, licensing, platforms, language and tax",
    },
    body: [
      {
        type: "paragraph",
        text: "Brands that sell in Australia, India and the UAE often want one creator campaign across all three. The idea can travel, but the rules, platforms, languages and costs don't. This guide compares the three markets side by side and sets out how to run a shared campaign with local execution. Kudozz is based in India and has published detailed guides for India, the UAE and Australia; this page links to each.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "The biggest differences are regulation and licensing. In Australia, consumer law and industry codes apply, and creators don't need a licence. In India, consumer protection law, government endorsement guidance and ASCI's self-regulatory guidelines apply, without a creator licence. In the UAE, creators who advertise generally need an advertiser permit from the National Media Authority. Platforms also differ: TikTok isn't available in India, and Australia restricts under-16 accounts on major platforms. Run one strategy with separate creators, briefs, disclosure wording, budgets and reporting for each market.",
      },
      { type: "heading", text: "Side by side", id: "comparison" },
      {
        type: "table",
        headers: ["", "Australia", "India", "UAE"],
        rows: [
          ["Main rules", "Australian Consumer Law (ACCC); AANA codes via Ad Standards", "Consumer Protection Act 2019 and CCPA guidelines; ASCI code and influencer guidelines", "Media law and National Media Authority rules; emirate-level rules for some sectors"],
          ["Creator licence", "None", "None", "Advertiser permit generally required (NMA)"],
          ["Disclosure", "Clearly distinguishable advertising; 'gift' alone has been found insufficient", "Clear, prominent disclosure of material connections (ASCI; government endorsement guidance)", "Clear identification as advertising; permit rules"],
          ["Sector rules to know", "TGA, ABAC, ASIC, Ahpra", "Health, finance (SEBI), online money games", "Health (e.g. DHA in Dubai), finance (SCA)"],
          ["Age rules", "Under-16 account restrictions on major platforms", "Platform age rules", "Platform age rules"],
          ["Platforms", "Instagram, TikTok, YouTube; TikTok Shop not live", "Instagram, YouTube; TikTok unavailable", "Instagram, TikTok, Snapchat, YouTube"],
          ["Language", "English", "English, Hindi and regional languages", "Arabic and English"],
          ["Currency and indirect tax", "AUD; GST 10%", "INR; GST", "AED; VAT 5%"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the ACCC's social media promotions guidance, ASCI's influencer guidelines, the Department of Consumer Affairs endorsement guidance, and the National Media Authority's advertiser permit page. Rules change; check the current versions before each campaign.",
        links: [
          { text: "social media promotions guidance", href: AU_SRC.acccSocialPromotions.url },
          { text: "ASCI's influencer guidelines", href: ASCI_GUIDELINES },
          { text: "Department of Consumer Affairs endorsement guidance", href: DOCA_ENDORSEMENTS },
          { text: "advertiser permit page", href: GCC_SRC.nmaPermit.url },
        ],
      },
      { type: "heading", text: "Australia", id: "australia" },
      {
        type: "paragraph",
        text: "Australia regulates influencer advertising mainly through general consumer law and self-regulatory codes, with strict sector rules for therapeutic goods, alcohol, financial products and health services. Since December 2025, major platforms must stop under-16s holding accounts. There's no independent survey of Australian creator rates, so budgets should be built from quotes. Start with influencer marketing in Australia.",
        links: [{ text: "influencer marketing in Australia", href: "/blog/influencer-marketing-australia" }],
      },
      { type: "heading", text: "India", id: "india" },
      {
        type: "paragraph",
        text: "India combines consumer protection law, government endorsement guidance and ASCI's guidelines, which expect clear disclosure of any material connection, including gifts. Language and regional reach matter more than in the other two markets, and TikTok has been unavailable since 2020, so short video runs through Instagram Reels and YouTube Shorts. Creator tax adds TDS on some benefits. See influencer marketing in India and the compliance detail in influencer marketing compliance.",
        links: [
          { text: "influencer marketing in India", href: "/blog/influencer-marketing-india" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      { type: "heading", text: "UAE", id: "uae" },
      {
        type: "paragraph",
        text: "In the UAE, creators who advertise generally need an advertiser permit, and reports said the deadline for existing creators was 31 January 2026, with the National Media Authority replacing the former Media Council. Arabic and English content reach different audiences, and much of the population is expatriate. Health and financial promotions have their own rules. See influencer marketing in the UAE.",
        links: [
          { text: "deadline for existing creators was 31 January 2026", href: GCC_SRC.pinsentDeadline.url },
          { text: "influencer marketing in the UAE", href: "/blog/influencer-marketing-uae" },
        ],
      },
      { type: "heading", text: "Running one campaign across three markets", id: "process" },
      {
        type: "list",
        items: [
          "1. Shared: the objective, product truth and creative idea",
          "2. Local: creators chosen for each market's audience, checked for audience country",
          "3. Local: the brief, including claims allowed under each market's rules",
          "4. Local: disclosure wording in each market's language and platform labels",
          "5. Local: contracts, currency, tax and (in the UAE) permit checks",
          "6. Shared: one reporting template, with results reported per market",
        ],
      },
      {
        type: "paragraph",
        text: "Avoid using one creator to reach all three markets unless their audience is genuinely spread across them; check audience country data first. Usage rights should also name each territory where content will run, especially for paid ads.",
      },
      { type: "heading", text: "Budget and measurement", id: "budget" },
      {
        type: "list",
        items: [
          "Budget in local currency, with tax shown separately (GST in Australia and India, VAT in the UAE)",
          "Don't compare creator fees across markets directly; compare cost per result within each market",
          "Use the same KPI definitions everywhere so results are comparable",
          "Allow for time zones: the UAE is six or seven hours behind Sydney, India four and a half or five and a half",
        ],
      },
      {
        type: "paragraph",
        text: "The step-by-step process for any set of markets, including cross-border contracts and multi-currency payments, is in the international influencer campaign playbook.",
        links: [
          { text: "international influencer campaign playbook", href: "/blog/international-influencer-campaign-playbook" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Copying one brief and disclosure wording into all three markets",
          "Ignoring the UAE permit requirement",
          "Planning TikTok content for India",
          "Running Australian youth campaigns without checking the under-16 rules",
          "Licensing content for 'worldwide' use when you need three named territories",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A cross-market creator campaign works when the idea is shared and everything regulated is local. Use each market's guide, check rules close to launch, and report results market by market. This is general information, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "Do influencers need a licence in Australia, India or the UAE?",
        answer:
          "Not in Australia or India. In the UAE, creators who advertise generally need an advertiser permit from the National Media Authority.",
      },
      {
        question: "Can I use the same influencers in Australia, India and the UAE?",
        answer:
          "Only if their audience is genuinely in all three markets, which is rare. Usually it's better to use local creators in each market with a shared idea and separate briefs.",
      },
    ],
  },
];

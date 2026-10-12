import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Program evidence and governance gaps (1760–1809). Four pages: creator data privacy and governance (1799), brand
 * lift survey design (1800), the influencer marketing business case for finance (1804) and creators for employer
 * branding (1779). See docs/brand-guides-1760-1809-audit.md.
 */
const PUBLISHED = "2026-10-10";
const REVIEWED = "October 2026";

const EXT = {
  dpdpAct: "https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf",
  dpdpRulesText: "https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf",
  dpdpBackgrounder: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf",
  googleBrandLift: "https://support.google.com/google-ads/answer/9049825",
  googleBrandLiftMinimums: "https://support.google.com/displayvideo/answer/9570506?hl=en",
  metaBrandLift: "https://www.facebook.com/business/help/1693381447650068",
};

export const programEvidencePosts: BlogPost[] = [
  // 1799
  {
    slug: "influencer-marketing-data-privacy",
    category: "Campaign Strategy",
    title: "Influencer Marketing Data Privacy: How Brands Should Handle Creator and Audience Data in India",
    seoTitle: "Influencer Marketing Data Privacy in India",
    excerpt:
      "A practical guide to creator and audience data under India's DPDP Act and Rules: what personal data campaigns collect, who is responsible when an agency is involved, access, retention and deletion, breaches, giveaways and lead forms, and a governance checklist.",
    metaDescription:
      "Handle creator and audience data under India's DPDP Act: what campaigns collect, brand and agency roles, access, retention, breaches and a checklist.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "5 min read",
    tags: ["influencer marketing data privacy", "DPDP influencer marketing", "creator data governance", "influencer data protection India", "giveaway data DPDP"],
    related: ["influencer-marketing-governance", "influencer-marketing-crm", "influencer-campaign-documentation"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-data-privacy.svg",
      alt: "Creator data governance steps: map the data, assign roles, limit access, set retention, plan for breaches",
    },
    body: [
      {
        type: "paragraph",
        text: "Influencer marketing runs on personal data: creators' phone numbers, addresses, PAN and bank details, and sometimes data about their audiences from giveaways and lead forms. It's usually scattered across spreadsheets, inboxes, WhatsApp groups and agency tools. India's Digital Personal Data Protection (DPDP) Act, 2023 and the DPDP Rules, 2025 make that harder to ignore. This guide explains the practical steps for marketing teams. It's general information, not legal advice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Treat creator and audience data as personal data. Collect only what each purpose needs, decide in writing who controls it when an agency is involved, restrict access to sensitive items such as bank and identity details, delete data when the purpose is over (keeping what other laws such as tax rules require), and know who does what if there's a breach. Most DPDP Rules obligations apply 18 months after the Rules were notified in November 2025, so May 2027, but building the habits now costs little.",
      },
      { type: "heading", text: "What the law says, briefly", id: "law" },
      {
        type: "table",
        headers: ["Topic", "What the Act and Rules require", "Timing"],
        rows: [
          ["Notice and consent", "A clear, standalone notice of what data is collected and why; consent can be withdrawn", "Rule 3 applies from May 2027"],
          ["Security safeguards", "Measures such as encryption or masking, access control, logs and monitoring, backups, and security terms in contracts with data processors; logs kept for a year", "Rule 6 applies from May 2027"],
          ["Breaches", "Tell affected people without delay; tell the Data Protection Board without delay, with a detailed report within 72 hours", "Rule 7 applies from May 2027"],
          ["Rights requests", "Access, correction, update and erasure requests answered within 90 days", "Rule 14 applies from May 2027"],
          ["Children", "Verifiable consent from a parent or guardian", "Rule 10 applies from May 2027"],
          ["Penalties", "Up to ₹250 crore for failing to take reasonable security safeguards; up to ₹200 crore for breach-notification and children's data failures", "Under the Act"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the DPDP Act, 2023, the DPDP Rules, 2025 (Rules 3, 5 to 16 and 22 to 23 apply 18 months after publication) and the government's November 2025 backgrounder on the Rules. Check the current position with counsel, as guidance may follow.",
        links: [
          { text: "DPDP Act, 2023", href: EXT.dpdpAct },
          { text: "DPDP Rules, 2025", href: EXT.dpdpRulesText },
          { text: "November 2025 backgrounder", href: EXT.dpdpBackgrounder },
        ],
      },
      { type: "heading", text: "The personal data campaigns collect", id: "data-map" },
      {
        type: "table",
        headers: ["Data", "Purpose", "Sensitivity", "Who needs access"],
        rows: [
          ["Creator name, handle, email, phone", "Outreach and coordination", "Medium", "Campaign team"],
          ["Shipping address", "Sending product", "Medium", "Whoever ships, for that shipment"],
          ["PAN, GST number, bank details", "Payments and tax", "High", "Finance only"],
          ["Signed contracts and ID documents", "Agreements, sometimes verification", "High", "Legal and finance"],
          ["Audience demographics screenshots", "Vetting", "Low to medium (aggregate)", "Campaign team"],
          ["Giveaway entries and winner addresses", "Running the contest and delivering prizes", "Medium", "Contest operator only"],
          ["Leads from creator links or forms", "Sales follow-up", "Medium", "Sales and CRM owners"],
          ["Minors' data (child creators, young entrants)", "Contracts, contests", "High", "As few people as possible"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator databases and CRMs hold most of this; see the data sections of influencer marketing CRM and influencer database.",
        links: [
          { text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" },
          { text: "influencer database", href: "/blog/influencer-database#before-import" },
        ],
      },
      { type: "heading", text: "Brands, agencies and creators: who is responsible", id: "roles" },
      {
        type: "paragraph",
        text: "The Act separates the Data Fiduciary, which decides why and how personal data is processed, from the Data Processor, which processes it on the fiduciary's behalf under a contract. In creator campaigns the roles depend on the facts, so write them down rather than assume.",
      },
      {
        type: "table",
        headers: ["Situation", "Typical arrangement to agree", "Put in the contract"],
        rows: [
          ["Agency runs outreach and payments for a brand", "Agency processes creator data on the brand's instructions, or acts for its own purposes for its own roster", "Purpose, security, sub-processors, deletion at the end, breach notice to the brand"],
          ["Creator runs a giveaway for the brand", "Agree who collects entries, who picks winners and who holds addresses", "Notice wording, data shared only for delivery, deletion after delivery"],
          ["Creator sends leads to the brand's form", "The brand collects through its own form and notice", "No lists passed by creators; tracked links instead"],
          ["Brand uses an influencer platform", "Platform processes data under its terms", "Check where data is stored, access controls and deletion"],
        ],
      },
      { type: "heading", text: "Access, retention and deletion", id: "retention" },
      {
        type: "list",
        items: [
          "Keep bank and identity details in finance systems, not campaign trackers or chat groups.",
          "Use shared folders with named access, and remove people when they leave the team or the agency relationship ends.",
          "Set a retention period per data type. Payment and tax records are kept for as long as tax law requires; shipping addresses and giveaway entries can usually go once delivery is done.",
          "Delete or anonymize records of creators you no longer work with, unless you have a reason and a legal basis to keep them.",
          "Keep a log of who accessed sensitive records; the Rules expect logs to be kept for a year.",
        ],
      },
      {
        type: "paragraph",
        text: "What to keep on file after a campaign is covered in influencer campaign documentation.",
        links: [{ text: "influencer campaign documentation", href: "/blog/influencer-campaign-documentation" }],
      },
      { type: "heading", text: "Giveaways, contests and lead forms", id: "giveaways" },
      {
        type: "paragraph",
        text: "Contests create the riskiest audience data, because entries arrive through creators' comments and DMs. Collect winner details through a form that carries your notice, ask only for what's needed to deliver the prize, and delete it once delivered. Don't ask creators to forward lists of entrants or followers. If a contest may attract children, plan for parental consent or exclude minors. Creator giveaway rules and disclosure are covered in influencer marketing compliance.",
        links: [{ text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "If something goes wrong", id: "breach" },
      {
        type: "list",
        items: [
          "Name one person who decides whether an incident is a personal data breach (for example, a payment sheet shared in a public link).",
          "Contain it first: revoke links, change passwords, remove access.",
          "Agencies and vendors should tell you immediately, so you can meet the notification timelines.",
          "Tell affected creators what happened and what they should do, in plain language.",
          "Record what happened and what changed, in the campaign incident log.",
        ],
      },
      { type: "heading", text: "A governance checklist", id: "checklist" },
      {
        type: "template",
        label: "Creator data governance checklist",
        text: "1. Data map: what we collect, why, where it lives\n2. Roles: brand, agency, platform, creators (in contracts)\n3. Notices: outreach, contracts, giveaways, lead forms\n4. Access: finance-only fields, named folder access, leaver process\n5. Retention: period per data type, deletion owner\n6. Vendors: security and deletion terms, breach notice\n7. Children: parental consent or exclusion\n8. Requests: who answers access, correction and erasure requests (90 days)\n9. Breach: decision-maker, contacts, log\n10. Review: twice a year, and before May 2027",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Bank details and PAN in the same sheet as outreach notes.",
          "WhatsApp groups as the main record of creator details.",
          "Creators forwarding entrant lists to the brand.",
          "No deletion date for anything.",
          "Agency contracts that say nothing about data.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good data governance in influencer marketing is mostly ordinary discipline: know what you hold, keep sensitive details with finance, agree roles with agencies and creators, delete what you no longer need, and plan for mistakes. The DPDP timetable gives teams until May 2027 for most obligations. Wider policies for creator programs are in influencer marketing governance.",
        links: [{ text: "influencer marketing governance", href: "/blog/influencer-marketing-governance" }],
      },
    ],
    faqs: [
      {
        question: "Does the DPDP Act apply to influencer marketing?",
        answer:
          "Yes. Creators' contact, payment and identity details, and audience data from giveaways or lead forms, are digital personal data. Most obligations in the DPDP Rules, 2025 apply 18 months after the Rules were notified in November 2025.",
      },
      {
        question: "Is the brand or the agency responsible for creator data?",
        answer:
          "It depends on who decides why and how the data is used. Often the brand is the Data Fiduciary and the agency a Data Processor under contract, but agencies may hold their own roster data for their own purposes. Agree the roles in writing.",
      },
      {
        question: "How long should brands keep creator data?",
        answer:
          "Only as long as the purpose needs, plus what other laws require. Payment and tax records follow tax rules; shipping addresses and giveaway entries can usually be deleted once delivery is complete.",
      },
    ],
  },
  // 1800
  {
    slug: "influencer-brand-lift-survey",
    category: "Campaign Strategy",
    title: "How to Design a Brand Lift Survey for an Influencer Campaign",
    seoTitle: "Influencer Brand Lift Survey: How to Design One",
    excerpt:
      "How to design a brand lift survey for creator campaigns in India: choosing the metric, writing neutral questions, building exposed and control groups for paid and organic creator content, sample sizes, platform study minimums, languages and reporting.",
    metaDescription:
      "Design a brand lift survey for an influencer campaign: metrics, neutral questions, control groups, sample sizes, platform minimums and reporting.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "5 min read",
    tags: ["influencer brand lift survey", "brand lift study influencer campaign", "measure influencer awareness", "brand lift survey questions", "creator campaign brand lift India"],
    related: ["influencer-marketing-brand-awareness", "influencer-marketing-incrementality", "influencer-brand-lift-gcc"],
    hero: {
      src: "/blog/brand-guides/influencer-brand-lift-survey.svg",
      alt: "Brand lift survey design steps: pick one metric, write neutral questions, build a control group, size the sample, report both lifts",
    },
    body: [
      {
        type: "paragraph",
        text: "Awareness campaigns are judged on reach because reach is easy to count. A brand lift survey asks the harder question: did people who saw the creator content remember, know or think differently about the brand compared with similar people who didn't? This guide covers how to design one for creator campaigns, where much of the content runs on creators' own accounts.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Pick one main metric (usually ad recall or awareness), write neutral questions that list your brand among competitors, and compare an exposed group with a control group that is similar in every way except exposure. For creator content run as paid ads, use the platform's brand lift study, which randomizes the control group. For organic posts, use a survey panel matched on age, gender, city and language, and size it in advance: detecting a 5-point difference from a 30% baseline needs roughly 1,400 people per group.",
      },
      { type: "heading", text: "Step 1: Choose one main metric", id: "metric" },
      {
        type: "table",
        headers: ["Objective", "Main metric", "Example question"],
        rows: [
          ["New brand or new market", "Aided awareness", "Which of these brands of [category] have you heard of?"],
          ["Did the content register?", "Ad recall", "Do you recall seeing online content about [brand] in the last two weeks?"],
          ["Established category, stronger competitors", "Consideration", "Which of these brands would you consider next time you buy [category]?"],
          ["Repositioning", "Brand association", "Which of these brands do you associate with [attribute]?"],
          ["Launch with stock available", "Purchase intent", "How likely are you to buy [brand] in the next month?"],
        ],
      },
      {
        type: "paragraph",
        text: "Each extra question adds survey length and, in platform studies, cost. Choose the metric the campaign was actually designed to move, and treat others as secondary.",
      },
      { type: "heading", text: "Step 2: Write neutral questions", id: "questions" },
      {
        type: "list",
        items: [
          "List your brand among four to six real competitors, in random order, plus 'None of these'.",
          "Don't name the creator or describe the campaign in awareness or consideration questions; it primes answers.",
          "Ask about a time window ('in the last two weeks') for recall.",
          "Use the same wording for exposed and control groups, and before and after if you run a pre-wave.",
          "Translate carefully: test Hindi or other language versions with native speakers, and keep brand names as people actually say them.",
          "Add a check question (a fake brand in the list) to spot careless answers.",
        ],
      },
      { type: "heading", text: "Step 3: Build a fair control group", id: "control" },
      {
        type: "table",
        headers: ["How the content runs", "Exposed group", "Control group", "Rigor"],
        rows: [
          ["Paid creator ads (partnership, Spark or whitelisted ads)", "People the platform served the ad", "People held back at random by the platform", "High"],
          ["Organic creator posts", "Panel respondents who saw the content (verified by showing it, or by following the creator)", "Respondents matched on age, gender, city tier and language who didn't", "Medium; depends on matching"],
          ["Campaign in some cities only", "Survey in campaign cities", "Similar cities without the campaign, before and after", "Medium"],
          ["Anything", "Target audience after the campaign", "Same audience before (pre/post)", "Low on its own"],
        ],
      },
      {
        type: "paragraph",
        text: "Followers of a creator differ from non-followers before any campaign: they may already like your category. Matching reduces, but doesn't remove, that bias, which is why platform studies on paid ads are more reliable. When you can, run creator content as paid ads for part of the budget and measure that part properly. Holdout methods are explained in influencer marketing incrementality.",
        links: [{ text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" }],
      },
      { type: "heading", text: "Step 4: Size the sample before you start", id: "sample" },
      {
        type: "table",
        headers: ["Control result", "Exposed result you want to detect", "Approx. respondents per group"],
        rows: [
          ["30%", "33% (3 points)", "3,800"],
          ["30%", "35% (5 points)", "1,400"],
          ["30%", "40% (10 points)", "350"],
          ["10%", "15% (5 points)", "700"],
        ],
      },
      {
        type: "paragraph",
        text: "Figures are for a standard two-group comparison at 95% confidence and 80% power, rounded. Small differences need large samples; if your budget only buys 300 people per group, you can only detect large effects. Decide this before fielding, and report 'not detected at this sample size' rather than 'no effect' when a result is small.",
      },
      { type: "heading", text: "Platform brand lift studies", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "How it works", "Access (checked October 2026)"],
        rows: [
          ["YouTube (Google)", "Surveys people who saw the ads and eligible people who weren't shown them; reports absolute, relative and headroom lift", "Through a Google account representative. India is in the lowest-minimum tier: USD 5,000 for one question, 10,000 for two, 20,000 for three, spent within 10 days"],
          ["Meta (Facebook, Instagram)", "Randomized test and control groups answer poll questions", "Minimums vary by country; one language per test; check availability in Ads Manager"],
          ["Others (Snapchat, LinkedIn and more)", "Similar exposed-versus-control polls", "Usually through an account team; check minimums"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Google's About Brand Lift and its minimum budget table, and Meta's guide to brand lift tests. Requirements change, so confirm with each platform before budgeting.",
        links: [
          { text: "Google's About Brand Lift", href: EXT.googleBrandLift },
          { text: "minimum budget table", href: EXT.googleBrandLiftMinimums },
          { text: "Meta's guide to brand lift tests", href: EXT.metaBrandLift },
        ],
      },
      { type: "heading", text: "Step 5: Report it honestly", id: "report" },
      {
        type: "list",
        items: [
          "Report absolute lift (percentage points) and relative lift (the difference divided by the control result), and say which a headline refers to.",
          "Show sample sizes and whether the result passed the confidence threshold you set in advance.",
          "Describe how the control group was formed and its known weaknesses.",
          "Keep brand lift separate from sales results; recall doesn't prove purchases.",
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only. A snack brand runs creator videos in Hindi and Tamil. Half the budget runs as partnership ads with a YouTube brand lift study measuring recall; the organic posts are measured with a panel of 800 viewers and 800 matched non-viewers per language. The platform study shows a 6-point recall lift that clears its threshold. The panel shows a 4-point awareness difference in Hindi and nothing detectable in Tamil, which the team reports as inconclusive at that sample size.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing followers with non-followers and calling the difference lift.",
          "Asking five metrics on a sample sized for one.",
          "Naming the creator in the awareness question.",
          "Changing question wording between waves.",
          "Reporting relative lift without the absolute numbers.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A brand lift survey is only as good as its control group and sample size. Choose one metric, write neutral questions, use platform studies for paid creator ads, match carefully for organic posts, and report what you can and can't conclude. For Gulf campaigns, see measuring influencer brand lift in the GCC; for awareness planning in general, see influencer marketing for brand awareness.",
        links: [
          { text: "measuring influencer brand lift in the GCC", href: "/blog/influencer-brand-lift-gcc" },
          { text: "influencer marketing for brand awareness", href: "/blog/influencer-marketing-brand-awareness" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a brand lift survey in influencer marketing?",
        answer:
          "A survey that compares people who saw a creator campaign with a similar group who didn't, on measures such as ad recall, awareness or consideration. The difference between the groups is the lift.",
      },
      {
        question: "How many respondents does a brand lift survey need?",
        answer:
          "It depends on the effect you want to detect. To spot a 5-point difference from a 30% baseline at 95% confidence and 80% power, you need roughly 1,400 people in each group; larger effects need fewer.",
      },
      {
        question: "Can you measure brand lift from organic influencer posts?",
        answer:
          "Yes, with a survey panel comparing people who saw the content with matched people who didn't. It's less reliable than platform studies on paid ads because followers differ from non-followers before the campaign.",
      },
    ],
  },
  // 1804
  {
    slug: "influencer-marketing-business-case",
    category: "Campaign Strategy",
    title: "How to Build an Influencer Marketing Business Case Finance Leaders Will Accept",
    seoTitle: "Influencer Marketing Business Case for Finance",
    excerpt:
      "How to build a business case for influencer marketing that a CFO can approve: the problem it solves, full costs, outcome ranges instead of single numbers, how results will be measured, risks, a staged pilot with go and stop rules, and a one-page template.",
    metaDescription:
      "Build an influencer marketing business case finance will accept: full costs, outcome ranges, measurement, risks, a staged pilot and a one-page template.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer marketing business case", "influencer marketing budget approval", "influencer marketing CFO", "justify influencer marketing spend", "creator marketing investment case"],
    related: ["influencer-marketing-roi-forecasting", "influencer-campaign-hidden-costs", "influencer-marketing-budget"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-business-case.svg",
      alt: "Business case structure: problem, full costs, outcome ranges, measurement, staged decision",
    },
    body: [
      {
        type: "paragraph",
        text: "Marketing teams often ask finance for creator budget with a deck of reach figures and a single ROI number. Finance leaders tend to reject both: reach isn't a financial outcome, and a single number hides how uncertain it is. A business case that gets approved looks more like any other investment proposal: a problem, the full cost, a range of outcomes, how you'll know, what could go wrong and when you'll decide to stop or continue.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "State the business problem creators address, cost everything (creator fees, usage rights, product, agency or team time, tools, paid amplification and tax), forecast outcomes as low, expected and high scenarios with stated assumptions, agree the measurement method before spending, list the main risks, and ask for a staged budget: a pilot with pre-agreed go and stop rules, followed by a larger commitment only if the pilot clears them.",
      },
      { type: "heading", text: "What finance leaders look for", id: "what-finance-wants" },
      {
        type: "table",
        headers: ["Finance question", "Weak answer", "Strong answer"],
        rows: [
          ["What problem does this solve?", "'Creators are where the audience is'", "'Our cost per new customer from paid social has risen; we want a second source of demand and ad creative'"],
          ["What does it really cost?", "Creator fees only", "Fees, rights, product, shipping, tools, people, amplification, GST"],
          ["What will we get?", "'5x ROI'", "Low, expected and high scenarios with the assumptions behind each"],
          ["How will we know?", "Platform reports", "A method agreed now: codes and links, a holdout region or a lift study"],
          ["What if it doesn't work?", "Not addressed", "A pilot with stop rules and a cap on the first commitment"],
        ],
      },
      { type: "heading", text: "Step 1: Start with the business problem", id: "problem" },
      {
        type: "paragraph",
        text: "Tie the proposal to a number finance already tracks: customer acquisition cost, repeat purchase rate, the cost of producing ad creative, sales in a new region, or qualified leads. Explain why creators address it better than, or alongside, the alternatives. If you can't name the problem, you're not ready to ask for a budget.",
      },
      { type: "heading", text: "Step 2: Cost everything", id: "costs" },
      {
        type: "paragraph",
        text: "Underestimated costs are the fastest way to lose finance's trust after approval. Include creator fees, usage rights and exclusivity, product and shipping, agency or freelance fees, internal team time, tools, paid amplification of creator content, and GST and TDS handling. The full list is in influencer campaign hidden costs.",
        links: [{ text: "influencer campaign hidden costs", href: "/blog/influencer-campaign-hidden-costs" }],
      },
      { type: "heading", text: "Step 3: Forecast ranges, not a single number", id: "forecast" },
      {
        type: "table",
        headers: ["Scenario", "What it assumes", "Use"],
        rows: [
          ["Low", "Below-average views and conversion, some creators underdeliver", "The case still has to be survivable at this level"],
          ["Expected", "Your own past campaign results, or cautious benchmarks", "The basis for planning"],
          ["High", "Strong performance and reuse of content in ads", "Upside, not the promise"],
        ],
      },
      {
        type: "paragraph",
        text: "Show the assumptions behind each step (views, click rate, conversion, order value, margin) so finance can challenge them. The forecast chain and a calculator are in influencer marketing ROI forecasting. Include the value of content reused in ads only if you'll actually reuse it.",
        links: [{ text: "influencer marketing ROI forecasting", href: "/blog/influencer-marketing-roi-forecasting" }],
      },
      { type: "heading", text: "Step 4: Agree how results will be measured", id: "measurement" },
      {
        type: "paragraph",
        text: "Agree the method before spending, so results aren't argued over afterwards. Tracked links and codes give a floor; holdout regions or lift studies estimate what the campaign added; marketing mix models suit brands with several years of data. Say which you'll use and what it can't capture. See influencer marketing incrementality and influencer marketing and marketing mix modeling.",
        links: [
          { text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" },
          { text: "influencer marketing and marketing mix modeling", href: "/blog/influencer-marketing-mix-modeling" },
        ],
      },
      { type: "heading", text: "Step 5: Name the risks", id: "risks" },
      {
        type: "list",
        items: [
          "Performance risk: creators underdeliver or content doesn't convert. Mitigation: pilot first, diversify creators.",
          "Brand risk: a creator controversy. Mitigation: vetting and contract terms.",
          "Compliance risk: missing disclosure or unsupported claims. Mitigation: approval checks.",
          "Measurement risk: results can't be separated from other activity. Mitigation: a holdout or lift design.",
          "Operational risk: delays, stock problems. Mitigation: buffers and a contingency list of creators.",
        ],
      },
      { type: "heading", text: "Step 6: Ask for a staged decision", id: "staged" },
      {
        type: "paragraph",
        text: "Finance approves uncertain spending more readily when the first commitment is small and the next step depends on evidence. Propose a pilot budget, a review date, and rules agreed in advance: for example, continue if cost per acquired customer is within a set range of paid social, or if a lift study shows a detectable effect; stop or redesign if not. How to design the pilot is in creator campaign testing.",
        links: [{ text: "creator campaign testing", href: "/blog/influencer-marketing-testing" }],
      },
      { type: "heading", text: "A one-page template", id: "template" },
      {
        type: "template",
        label: "Influencer marketing business case (one page)",
        text: "1. Problem: [metric finance tracks], current value, target\n2. Proposal: what creators will do, platforms, markets, duration\n3. Alternatives considered and why this is better or complementary\n4. Full cost: fees, rights, product, agency/team, tools, amplification, tax\n5. Outcomes: low / expected / high, with assumptions\n6. Measurement: method, what it captures, what it misses\n7. Risks and mitigations\n8. Decision requested: pilot budget, review date, go/stop rules\n9. Next stage if successful: budget and timing",
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only. A personal-care brand's cost per new customer from paid social has risen for three quarters. The marketing team proposes a three-month creator pilot in two states, with the full cost laid out, a low-expected-high forecast of new customers, and a holdout state for comparison. Finance approves the pilot with a rule: expand to six states if cost per incremental customer is within 20% of paid social and repeat rates are no worse.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Leading with reach and engagement instead of a business metric.",
          "A single ROI number with no assumptions.",
          "Costs that leave out rights, tools and people.",
          "Deciding how to measure after the campaign.",
          "Asking for the full annual budget without a pilot.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A business case wins approval by being honest about cost and uncertainty. Name the problem, cost everything, show ranges with assumptions, agree measurement upfront and ask for a staged decision. Once approved, the budget split is covered in the influencer marketing budget guide.",
        links: [{ text: "influencer marketing budget guide", href: "/blog/influencer-marketing-budget" }],
      },
    ],
    faqs: [
      {
        question: "How do you justify influencer marketing to a CFO?",
        answer:
          "Tie it to a metric finance tracks, cost everything, forecast low, expected and high outcomes with stated assumptions, agree how results will be measured before spending, and ask for a pilot with go and stop rules.",
      },
      {
        question: "What should an influencer marketing business case include?",
        answer:
          "The problem, the proposal, alternatives, full costs, outcome scenarios, the measurement method, risks and mitigations, the decision requested and the next stage if the pilot succeeds.",
      },
    ],
  },
  // 1779
  {
    slug: "employer-branding-influencer-marketing",
    category: "Campaign Strategy",
    title: "Influencer Marketing for Employer Branding and Recruitment: A Practical Guide",
    seoTitle: "Influencer Marketing for Employer Branding",
    excerpt:
      "How companies can use creators and employees for employer branding and recruitment: when it fits, choosing between employee voices, career creators and campus creators, honest content about pay and work, disclosure, data, and measuring applications rather than views.",
    metaDescription:
      "Use creators for employer branding and recruitment: employee voices vs career creators, honest content, disclosure, candidate data and measuring hires.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["employer branding influencer marketing", "influencer marketing recruitment", "creators for hiring", "employer brand creators India", "campus hiring influencers"],
    related: ["employee-influencer-marketing", "hr-recruitment-influencer-marketing-india", "influencer-marketing-colleges"],
    hero: {
      src: "/blog/brand-guides/employer-branding-influencer-marketing.svg",
      alt: "Employer branding with creators: pick the role, choose voices, show real work, disclose, measure applications",
    },
    body: [
      {
        type: "paragraph",
        text: "Candidates research employers the way customers research products: they watch day-in-the-life videos, read what employees say and look for honest views on pay and culture. Creators and employees can supply that content more credibly than a careers page. This guide is for companies hiring for themselves; if you sell HR or recruitment services, see influencer marketing for HR and recruitment companies.",
        links: [{ text: "influencer marketing for HR and recruitment companies", href: "/blog/hr-recruitment-influencer-marketing-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Use creators for employer branding when you're hiring at volume, entering a new city, recruiting on campuses or competing for scarce skills. Combine employee voices (most credible about the work) with career creators (reach among job seekers) and campus creators (students). Show the real job, including its demands, never promise jobs or pay you can't guarantee, label employee and paid content, collect applications through your own process, and measure qualified applications and hires, not views.",
      },
      { type: "heading", text: "When it fits", id: "when" },
      {
        type: "list",
        items: [
          "High-volume hiring (retail, logistics, customer service, delivery) where awareness of openings is the bottleneck.",
          "Scarce skills (engineering, data, design) where candidates compare employers closely.",
          "Campus and early-career hiring, where students follow student and career creators.",
          "A new office or city where you're unknown as an employer.",
          "Repairing a reputation problem, but only once the underlying issue has been fixed.",
        ],
      },
      { type: "heading", text: "Choosing voices", id: "voices" },
      {
        type: "table",
        headers: ["Voice", "Strength", "Watch out for"],
        rows: [
          ["Employees", "Most credible on the actual work and team", "Must be voluntary; label as 'Employee'; avoid confidential information"],
          ["Career and job-search creators", "Reach among active job seekers; explain roles and processes", "Must understand the role; avoid hype about pay or growth"],
          ["Industry creators (tech, design, finance)", "Credibility with skilled candidates", "Fees; they'll ask hard questions about the work"],
          ["Campus and student creators", "Reach on campuses and among recent graduates", "Coordinate with placement cells; don't pressure students"],
        ],
      },
      {
        type: "paragraph",
        text: "Running an employee program is covered in employee influencer marketing, and campus work in influencer marketing for colleges.",
        links: [
          { text: "employee influencer marketing", href: "/blog/employee-influencer-marketing" },
          { text: "influencer marketing for colleges", href: "/blog/influencer-marketing-colleges" },
        ],
      },
      { type: "heading", text: "Content that works", id: "content" },
      {
        type: "table",
        headers: ["Format", "What it answers"],
        rows: [
          ["A day in the role", "What the job actually involves, including the hard parts"],
          ["Interview process explained", "Stages, timelines, what's assessed, how to prepare"],
          ["Team or office walkthrough", "Where people work, who they work with"],
          ["Growth stories", "Real progressions, with the time they took"],
          ["Questions answered", "Shifts, travel, remote work, benefits, as stated in the offer"],
        ],
      },
      { type: "heading", text: "Honesty and claims", id: "claims" },
      {
        type: "paragraph",
        text: "Recruitment content is advertising, and misleading claims carry the same risks as product claims under the Consumer Protection Act and the CCPA's 2022 guidelines on misleading advertisements. Don't promise selection, placement or salaries; if pay ranges are mentioned, use the ranges you'll actually offer. Be accurate about shifts, travel and location. Give creators a fact sheet approved by HR and legal, and review content before it goes live.",
        links: [{ text: "CCPA's 2022 guidelines on misleading advertisements", href: SOURCES.ccpaMisleadingAds }],
      },
      { type: "heading", text: "Disclosure for employees and paid creators", id: "disclosure" },
      {
        type: "paragraph",
        text: "ASCI's influencer guidelines treat an employment relationship as a material connection and list 'Employee' among the accepted labels, alongside 'Ad', 'Collaboration' and others for paid creators. The label should be upfront and in English or the language of the post. Employee posts about their employer need it even when unpaid.",
        links: [{ text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines }],
      },
      { type: "heading", text: "Candidate data", id: "data" },
      {
        type: "paragraph",
        text: "Send candidates to your own careers page or applicant tracking system, which carries your privacy notice. Don't let creators collect CVs or phone numbers by DM or comment. Practical rules are in influencer marketing data privacy.",
        links: [{ text: "influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" }],
      },
      { type: "heading", text: "Measuring it", id: "measure" },
      {
        type: "table",
        headers: ["Metric", "How to track"],
        rows: [
          ["Applications by source", "A tracked link per creator to the job page, and a 'How did you hear about us?' field"],
          ["Qualified applications", "Share passing the first screen, by source"],
          ["Hires and offer acceptance", "From the applicant tracking system, by source"],
          ["Early retention", "Whether creator-sourced hires stay past probation"],
          ["Cost per qualified applicant", "Full campaign cost divided by qualified applications"],
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only. A logistics company opening a warehouse in a new city needs 200 staff. It works with two local creators and five volunteer employees on day-in-the-role videos in the local language, with shift timings and pay ranges from the offer letter. Applications come through a tracked link to a short form. The company compares qualified applications and 90-day retention by source before planning the next site.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Showing only perks and none of the actual work.",
          "Promising salaries or growth that offers don't match.",
          "Pressuring employees to post.",
          "Collecting CVs through creators' DMs.",
          "Measuring views instead of qualified applications and hires.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creators help employers when they show the real job to the right candidates. Combine employee voices with career and campus creators, keep claims accurate, disclose employee and paid content, route applications through your own systems, and judge the work on qualified applications, hires and retention.",
      },
    ],
    faqs: [
      {
        question: "Can influencer marketing help with recruitment?",
        answer:
          "Yes, especially for high-volume hiring, scarce skills, campus recruitment and new locations. Measure qualified applications, hires and early retention by source rather than views.",
      },
      {
        question: "Do employees need to disclose when posting about their employer?",
        answer:
          "Yes. ASCI's guidelines treat employment as a material connection and list 'Employee' as an accepted disclosure label.",
      },
    ],
  },
];

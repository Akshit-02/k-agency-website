import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_10_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Brand protection and compliance (800–849 layer). Intent boundaries:
 * - creator-crisis-communication: what to say, to whom and when during an incident (templates)
 * - creator-advertising-rules: the Indian rules behind promotions beyond disclosure (claims, endorsements, regulated
 *   and prohibited categories). General information, not legal advice.
 * - creator-content-moderation: comments, spam, harassment and harmful content
 * Existing owners: creator-brand-safety (incl. sponsorship risk), creator-reputation-management (incl. reputation
 * audit and online reputation management), creator-crisis-management (incl. social media crisis),
 * creator-disclosure-guide (disclosure compliance), creator-impersonation.
 */
export const brandProtectionCompliancePosts: BlogPost[] = [
  {
    slug: "creator-crisis-communication",
    category: "Creator Resources",
    title: "Creator Crisis Communication: How to Respond to Brands and Audiences When Something Goes Wrong",
    seoTitle: "Creator Crisis Communication: What to Say and When",
    excerpt:
      "How creators communicate during a real incident: who to tell first, timing, choosing channels, holding statements, apologies that work, corrections, messages to brand partners and team, what not to say, and templates you can adapt.",
    metaDescription:
      "Creator crisis communication: who to tell first, timing, holding statements, apologies, corrections, brand partner messages and templates to adapt.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator crisis communication", "creator apology", "influencer public statement", "tell brands about a controversy", "creator holding statement", "crisis statement template"],
    related: ["creator-crisis-management", "creator-reputation-management", "creator-brand-safety"],
    body: [
      {
        type: "paragraph",
        text: "In most creator crises, the original problem does less damage than the response. A defensive story posted at midnight, a brand partner who found out from Twitter, an apology that apologises for how people felt rather than what happened: these are communication failures, and they're avoidable.",
      },
      {
        type: "paragraph",
        text: "This guide covers the words. The step-by-step response process, including scenarios such as sponsored content backlash, hacked accounts and disclosure mistakes, is in creator crisis management. Not every negative comment is a crisis; routine criticism is covered in creator reputation management.",
        links: [
          { text: "creator crisis management", href: "/blog/creator-crisis-management" },
          { text: "creator reputation management", href: "/blog/creator-reputation-management" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In a real incident, communicate in this order: your team and manager, affected brand partners, then your audience. Get the facts before making a full statement, but acknowledge quickly with a short holding statement if the issue is spreading. When you respond, say what happened, take responsibility for your part, explain what you're doing about it, and stop. Use the channel where the issue is happening, keep brand communication private and in writing, and avoid deleting, arguing or over-explaining.",
      },
      { type: "heading", text: "Is it actually a crisis?", id: "is-it-a-crisis" },
      {
        type: "table",
        headers: ["Situation", "Usually", "Response"],
        rows: [
          ["A few critical comments", "Normal feedback", "Reply or ignore per your moderation rules"],
          ["A factual mistake noticed by viewers", "A correction", "Correct visibly; no big statement"],
          ["Criticism spreading beyond your audience, press or brand questions", "An incident", "Crisis communication"],
          ["Safety, legal, harm to others or a partner's reputation involved", "A serious incident", "Crisis communication, with advice"],
        ],
      },
      { type: "heading", text: "Who to tell, in what order", id: "order" },
      {
        type: "list",
        items: [
          "1. Your team and manager: agree the facts, who speaks and what nobody says publicly yet.",
          "2. Affected brand partners: tell them before they read it elsewhere, privately and in writing.",
          "3. Your audience: once you know enough to be accurate, on the channel where the issue is.",
          "4. Anyone directly harmed: privately, where appropriate, before or alongside a public statement.",
        ],
      },
      { type: "heading", text: "Timing: fast acknowledgement, careful detail", id: "timing" },
      {
        type: "paragraph",
        text: "Silence while an issue spreads looks like avoidance, but a full statement before you know the facts often needs correcting. The answer is a short holding statement within hours if the issue is spreading, then a full response once facts are clear, typically within a day or two for most creator incidents. Don't post while angry or late at night; have someone you trust read it first.",
      },
      {
        type: "template",
        label: "Holding statement",
        text: "I've seen the concerns about [topic]. I'm looking into what happened and I'll share a proper update by [time/day]. Until then, I'm pausing [the video / the campaign / comments on this post].",
      },
      { type: "heading", text: "An apology that works", id: "apology" },
      {
        type: "table",
        headers: ["Part", "Do", "Avoid"],
        rows: [
          ["What happened", "Name it specifically", "\"Some things I said\""],
          ["Responsibility", "\"I got this wrong\"", "\"I'm sorry if anyone was offended\""],
          ["Impact", "Acknowledge who it affected", "Centring your own stress"],
          ["Action", "What you've done and will do", "Vague promises to \"do better\""],
          ["Length", "Short and clear", "Long justifications"],
        ],
      },
      {
        type: "template",
        label: "Apology structure",
        text: "In my video on [date], I [specific thing]. That was wrong because [impact, briefly].\nI've [removed/corrected/paused] it, and [specific action: e.g. I've added a correction, I'm donating the fee, I've changed how I vet sponsors].\nI'm sorry to [who was affected]. I'll [what changes going forward].",
      },
      {
        type: "paragraph",
        text: "Not every incident needs an apology. If you haven't done anything wrong, a calm clarification with facts is enough. If legal issues are involved, get advice before admitting anything specific.",
      },
      { type: "heading", text: "Corrections", id: "corrections" },
      {
        type: "template",
        label: "Correction",
        text: "Correction: In this video I said [incorrect claim]. The correct information is [fact, with source]. I've [pinned this / updated the description / added a card].",
      },
      { type: "heading", text: "Communicating with brand partners", id: "brands" },
      {
        type: "paragraph",
        text: "Brands need facts, options and speed. Tell them privately, in writing, before any public statement mentioning them. Don't speculate about their product or make statements on their behalf. If the issue involves their product (a complaint or safety concern), share what you know and agree next steps, such as pausing the content, adding context or ending the campaign under the contract's terms.",
      },
      {
        type: "template",
        label: "Message to a brand partner",
        text: "Hi [name], I want you to hear this from me first. [One-line summary of the issue].\nWhat I know so far: [facts].\nWhat I've done: [e.g. paused the post, turned off comments].\nWhat I suggest: [options: keep live with a pinned note / pause until X / discuss next steps].\nI'll update you by [time]. Can we speak today?",
      },
      {
        type: "paragraph",
        text: "If a partner becomes controversial rather than you, see the exit guidance in creator brand safety.",
        links: [{ text: "creator brand safety", href: "/blog/creator-brand-safety" }],
      },
      { type: "heading", text: "Choosing the channel", id: "channel" },
      {
        type: "table",
        headers: ["Where the issue is", "Where to respond"],
        rows: [
          ["Comments on one video", "Pinned comment and a description update"],
          ["Across your audience", "A post or short video on your main platform, plus a story or community post"],
          ["Press or other creators discussing it", "One clear written statement you can share consistently"],
          ["Brand-related", "Private message first, then public only if needed and agreed"],
        ],
      },
      { type: "heading", text: "What not to do", id: "dont" },
      {
        type: "list",
        items: [
          "Delete criticism wholesale; it usually resurfaces as screenshots.",
          "Argue with individual commenters.",
          "Blame your team, an editor or the brand publicly.",
          "Post several shifting statements.",
          "Go silent for weeks, then return as if nothing happened.",
          "Make legal threats in public.",
        ],
      },
      { type: "heading", text: "After the incident", id: "after" },
      {
        type: "list",
        items: [
          "Follow through on what you said you'd do, visibly.",
          "Update brand partners on the outcome.",
          "Review what caused it and change the process (vetting, review, approvals).",
          "Keep your holding statement and brand message templates ready for next time.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Letting brands find out from social media.",
          "Posting a full statement before knowing the facts.",
          "Apologies that avoid naming what happened.",
          "Treating every critical comment as a crisis.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good crisis communication is fast, specific and calm: tell your team and partners first, acknowledge quickly, get the facts, then say what happened, take responsibility for your part and explain what changes. Prepare the templates now, while nothing is wrong.",
      },
    ],
    faqs: [
      {
        question: "What should a creator say during a controversy?",
        answer:
          "Acknowledge the issue quickly with a short holding statement if it's spreading, then once facts are clear, say specifically what happened, take responsibility for your part, explain what you've done about it and what changes.",
      },
      {
        question: "Should creators tell brands before posting a public statement?",
        answer:
          "Yes. Tell affected brand partners privately and in writing first, so they don't learn about it from social media, and agree next steps with them.",
      },
      {
        question: "Does every controversy need an apology?",
        answer:
          "No. If you did something wrong, apologise specifically. If you didn't, a calm factual clarification is usually better. Get legal advice before admitting specifics if legal issues are involved.",
      },
    ],
  },
  {
    slug: "creator-advertising-rules",
    category: "Creator Resources",
    title: "Creator Advertising Rules in India: What Creators Should Know Before Promoting Brands",
    seoTitle: "Creator Advertising Rules in India: Before You Promote",
    excerpt:
      "The rules behind creator promotions in India beyond disclosure: the Consumer Protection Act and CCPA endorsement guidelines, ASCI's code and influencer guidelines, genuine-use and due diligence expectations, health and finance claims, SEBI's finfluencer restrictions, prohibited categories such as online money games and surrogate ads, and a pre-promotion checklist.",
    metaDescription:
      "Creator advertising rules in India: CCPA endorsement guidelines, ASCI, health and finance claims, SEBI finfluencer rules and banned categories.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["creator advertising rules", "influencer advertising rules India", "CCPA endorsement guidelines", "ASCI influencer guidelines", "SEBI finfluencer rules", "misleading advertisement creators"],
    related: ["creator-disclosure-guide", "creator-brand-safety", "ai-disclosure-creators"],
    body: [
      {
        type: "paragraph",
        text: "Disclosure is the rule most creators know: label paid content clearly. But the rules behind creator promotions in India go further. They also cover whether the claims you make are true, whether you've used the product, whether you're qualified to make technical claims, and whether the category can be advertised at all. Getting these wrong can bring penalties, takedowns and lost brand trust.",
      },
      {
        type: "paragraph",
        text: "This is general information about Indian rules as reviewed in September 2026, not legal advice. Rules and enforcement change; check the current guidance and take legal advice for specific campaigns. How to label sponsored content is covered separately in the creator disclosure guide.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before promoting a brand in India, a creator should: disclose the material connection clearly; only make claims the brand can substantiate; genuinely use or have adequate experience with the product; do reasonable due diligence on the claims; hold and disclose relevant qualifications before making technical health or financial claims; avoid giving securities advice or return claims without SEBI registration; and refuse prohibited promotions such as online money games and surrogate advertising for banned products. The Consumer Protection Act, 2019 lets the Central Consumer Protection Authority penalise endorsers of misleading ads, and ASCI's code and influencer guidelines set industry expectations.",
      },
      { type: "heading", text: "The main rule sources", id: "sources" },
      {
        type: "table",
        headers: ["Source", "What it covers for creators"],
        rows: [
          ["Consumer Protection Act, 2019 and CCPA", "Misleading advertisements; penalties and endorsement bans for endorsers"],
          ["CCPA Guidelines for Prevention of Misleading Advertisements and Endorsements, 2022", "Valid ads, genuine endorsements, surrogate ads, disclaimers"],
          ["Department of Consumer Affairs endorsement guidance (2023)", "Disclosure expectations for celebrities and social media influencers"],
          ["ASCI Code and influencer guidelines", "Industry self-regulation: honest claims, disclosure, health and finance influencer qualifications"],
          ["SEBI regulations and circulars", "Restrictions on regulated entities associating with unregistered finfluencers"],
          ["Sector laws and advisories", "Prohibited or restricted products (online money games, tobacco, surrogate ads and others)"],
        ],
      },
      { type: "heading", text: "Misleading ads and endorser liability", id: "cpa" },
      {
        type: "paragraph",
        text: "Under the Consumer Protection Act, 2019, the Central Consumer Protection Authority (CCPA) can act against false or misleading advertisements, including against endorsers. The Act provides for penalties on endorsers and allows the CCPA to prohibit an endorser from endorsing any product for up to one year, and up to three years for repeat violations. An endorser who exercised due diligence to verify the claims has a defence. The CCPA's 2022 guidelines add that endorsements must reflect the endorser's genuine, reasonably current opinion, based on adequate information about or experience with the product.",
        links: [{ text: "CCPA's 2022 guidelines", href: SOURCES.ccpaMisleadingAds }],
      },
      {
        type: "paragraph",
        text: "In practice: use the product, ask the brand for evidence behind claims such as \"clinically proven\" or \"best in India\", don't add your own exaggerated claims, and keep the evidence in your campaign records. The government's endorsement guidance for influencers also covers disclosure expectations.",
        links: [{ text: "endorsement guidance for influencers", href: SOURCES.docaEndorsements }],
      },
      { type: "heading", text: "ASCI's code and influencer guidelines", id: "asci" },
      {
        type: "paragraph",
        text: "The Advertising Standards Council of India (ASCI) is the industry's self-regulatory body. Its code expects advertising to be honest, not misleading and not harmful, and its influencer guidelines set out how to disclose and what influencers need for certain claims. ASCI can ask for content to be changed or removed, and platforms and brands take its decisions seriously. Read the current guidelines on ASCI's site.",
        links: [{ text: "ASCI's site", href: SOURCES.asciSocial }],
      },
      { type: "heading", text: "Health and finance claims need qualifications", id: "qualifications" },
      {
        type: "paragraph",
        text: "ASCI's influencer guidelines require influencers who comment on technical aspects of health, nutrition or financial products to hold relevant qualifications and disclose them prominently. For health, that can mean medical or allied health qualifications suited to the claim; for finance, relevant registrations or credentials. General experiences (\"I've enjoyed using this app\") are different from technical claims (\"this supplement boosts immunity\" or \"this fund will beat inflation\"). If you're not qualified, stick to your genuine experience and avoid technical claims.",
      },
      { type: "heading", text: "Finfluencers and SEBI", id: "sebi" },
      {
        type: "paragraph",
        text: "SEBI amended its regulations in August 2024 and issued a circular in October 2024 restricting SEBI-regulated entities, such as brokers and fund houses, from associating directly or indirectly with persons who give securities advice or recommendations, or make claims of returns, without SEBI registration. Pure investor education without advice, recommendations or return claims is treated differently, and SEBI issued further clarifications in January 2025. For finance creators, this affects which brand deals are possible: regulated entities may decline or end partnerships with unregistered creators who give advice or return claims.",
        links: [
          { text: "circular in October 2024", href: SOURCES.sebiFinfluencerCircular },
          { text: "further clarifications in January 2025", href: SOURCES.sebiFinfluencerClarification },
        ],
      },
      { type: "heading", text: "Prohibited and restricted categories", id: "prohibited" },
      {
        type: "table",
        headers: ["Category", "Status for creators (general)"],
        rows: [
          ["Online money games", "Promotion prohibited under the Promotion and Regulation of Online Gaming Act, 2025"],
          ["Betting, gambling and other unlawful activities", "The CCPA has advised against advertising, promoting or endorsing activities prohibited by law"],
          ["Surrogate advertising for products that can't be advertised directly", "Prohibited under the CCPA's 2022 guidelines"],
          ["Tobacco and alcohol", "Heavily restricted; avoid, including surrogate products"],
          ["Prescription drugs, cures and 'magic remedies'", "Restricted by health laws; avoid treatment claims"],
          ["Crypto and investment products", "Handle with extra care; see finfluencer rules above and take advice"],
        ],
      },
      {
        type: "paragraph",
        text: "The online gaming law is summarised in the government's announcement of the Act, and the CCPA's advisory on unlawful activities is published by PIB.",
        links: [
          { text: "announcement of the Act", href: SOURCES.onlineGamingAct2025 },
          { text: "CCPA's advisory on unlawful activities", href: SOURCES.ccpaIllegalActivitiesAdvisory },
        ],
      },
      { type: "heading", text: "Children, AI and comparative claims", id: "special" },
      {
        type: "list",
        items: [
          "Content aimed at children needs extra care: no pressure tactics, no unsafe behaviour, clear disclosure children can understand.",
          "AI-generated or altered content may need labelling under platform rules and Indian guidance; see AI disclosure for creators.",
          "Comparative claims (\"better than X\") need evidence and must be fair to the competitor.",
          "Before-and-after results must be genuine and typical, not edited to exaggerate.",
        ],
      },
      {
        type: "paragraph",
        text: "AI rules: AI disclosure for creators.",
        links: [{ text: "AI disclosure for creators", href: "/blog/ai-disclosure-creators" }],
      },
      { type: "heading", text: "Pre-promotion checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Is the category legal to promote, including surrogate products?",
          "Have I used the product or do I have adequate experience with it?",
          "Can the brand substantiate every claim in the script? Do I have the evidence in writing?",
          "Am I making technical health or financial claims? If so, am I qualified, and is that disclosed?",
          "For finance: does anything amount to advice, recommendations or return claims?",
          "Is the disclosure clear, upfront and in the platform's paid partnership tool where available?",
          "Does the content avoid misleading edits, filters or before-and-after exaggeration?",
          "Does the contract say who is responsible for claim accuracy and compliance?",
        ],
      },
      {
        type: "paragraph",
        text: "Wider vetting of sponsors, including category risk levels and contract protections, is in creator brand safety.",
        links: [{ text: "creator brand safety", href: "/blog/creator-brand-safety" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming disclosure alone makes any claim acceptable.",
          "Reading out brand claims without asking for evidence.",
          "Making technical health or finance claims without qualifications.",
          "Accepting surrogate or prohibited category deals.",
          "Promoting products you haven't used.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Advertising rules protect your audience and your career. Disclose clearly, check claims, use what you promote, stay within your qualifications, and say no to prohibited categories. When a campaign is high-value or in a regulated category, get legal advice before you post.",
      },
    ],
    faqs: [
      {
        question: "Can influencers be penalised for misleading ads in India?",
        answer:
          "Yes. Under the Consumer Protection Act, 2019, the CCPA can penalise endorsers of misleading advertisements and prohibit them from endorsing products for up to one year, or up to three years for repeat violations. Due diligence on the claims is a defence.",
      },
      {
        question: "Do health and finance influencers need qualifications?",
        answer:
          "ASCI's influencer guidelines require relevant qualifications, disclosed prominently, for influencers commenting on technical aspects of health, nutrition or financial products. Sharing a general personal experience is treated differently from technical claims.",
      },
      {
        question: "Can creators promote online gaming apps in India?",
        answer:
          "Promoting online money games is prohibited under the Promotion and Regulation of Online Gaming Act, 2025. Check the current rules and take advice for any gaming-related promotion.",
      },
      {
        question: "What are SEBI's rules on finfluencers?",
        answer:
          "Since late 2024, SEBI-regulated entities can't associate with persons who give securities advice or recommendations, or make return claims, without SEBI registration. Pure education without advice or return claims is treated differently.",
      },
    ],
  },
  {
    slug: "creator-content-moderation",
    category: "Creator Resources",
    title: "Creator Content Moderation: How to Manage Comments, Spam and Harmful Content",
    seoTitle: "Creator Content Moderation: Comments, Spam and Abuse",
    excerpt:
      "How creators moderate comments and messages: writing community rules, using Instagram's Hidden Words and YouTube's moderation settings, handling spam, scam replies, harassment and hate, moderating sponsored posts, working with moderators and protecting your own wellbeing.",
    metaDescription:
      "Creator content moderation: community rules, Instagram Hidden Words, YouTube held comments and blocked words, spam, scams, harassment and moderators.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator content moderation", "moderate comments creators", "Instagram hidden words", "YouTube comment moderation", "creator spam comments", "harassment comments creators"],
    related: ["creator-community-engagement", "creator-reputation-management", "creator-crisis-communication"],
    body: [
      {
        type: "paragraph",
        text: "A comment section is part of your content. Scam replies pretending to be you, hateful comments under a sponsored post, or a pile-on against a viewer all change how people experience your work, and how brands judge it. Moderation keeps the space useful without silencing honest criticism.",
      },
      {
        type: "paragraph",
        text: "Platform tools change; check each platform's help centre for current settings. Building conversations in the first place is covered in creator community engagement.",
        links: [{ text: "creator community engagement", href: "/blog/creator-community-engagement" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Write short community rules, then use platform tools to enforce most of them automatically: Instagram's Hidden Words for offensive terms and custom phrases, and YouTube Studio's comment moderation levels, blocked words and held-for-review queue. Remove spam, scams, hate, harassment and personal information; keep honest criticism. Review held comments on a schedule, give trusted moderators clear rules and limited access, and report serious threats to the platform and, where relevant, the police.",
      },
      { type: "heading", text: "Remove, hide, reply or leave?", id: "decision" },
      {
        type: "table",
        headers: ["Comment type", "Action"],
        rows: [
          ["Spam, fake giveaways, scam links", "Remove and block; add phrases to filters"],
          ["Accounts impersonating you in replies", "Remove, report as impersonation, warn your audience"],
          ["Hate speech, slurs, threats", "Remove, block, report; save evidence of threats"],
          ["Harassment of you or other viewers", "Remove, restrict or block; report if persistent"],
          ["Personal information (addresses, phone numbers)", "Remove immediately"],
          ["Honest criticism of your content or a sponsor", "Leave; reply if useful"],
          ["Factual corrections", "Leave, thank and correct if right"],
          ["Off-topic but harmless", "Leave or hide depending on your rules"],
        ],
      },
      { type: "heading", text: "Write community rules", id: "rules" },
      {
        type: "template",
        label: "Community rules (pin or add to your About section)",
        text: "This is a space for [topic] discussion. Disagree with me or each other, but:\n- No hate, slurs or harassment\n- No spam, self-promotion or links to giveaways (I never DM people to claim prizes)\n- No personal information about anyone\n- No threats or encouragement of harm\nComments that break these rules are removed and repeat accounts are blocked.",
      },
      {
        type: "paragraph",
        text: "The line \"I never DM people to claim prizes\" matters: scammers often reply to comments pretending to be the creator.",
      },
      { type: "heading", text: "Instagram tools", id: "instagram" },
      {
        type: "paragraph",
        text: "Instagram's Hidden Words settings filter offensive comments and message requests, and let you add your own list of words, phrases, numbers or emojis to hide from comments and message requests. Filtered message requests go to a separate hidden requests folder. Instagram also offers features such as restricting or blocking accounts and limiting interactions during a pile-on; check the help centre for current options.",
        links: [{ text: "Hidden Words settings", href: SOURCES.instagramHiddenWords }],
      },
      { type: "heading", text: "YouTube tools", id: "youtube" },
      {
        type: "paragraph",
        text: "YouTube Studio lets you choose a comment moderation level (from holding none to holding all comments for review, with basic and strict options that hold potentially inappropriate comments), add blocked words and phrases, approve trusted users, and review held comments, which are kept for a limited time before being removed. Live chat has its own moderation tools, and you can add moderators through channel settings.",
        links: [
          { text: "comment moderation level", href: SOURCES.youtubeCommentSettings },
          { text: "moderation tools", href: SOURCES.youtubeModerationSettings },
        ],
      },
      { type: "heading", text: "Build your filter list", id: "filters" },
      {
        type: "list",
        items: [
          "Common scam phrases in your niche (\"DM to claim\", \"winner\", WhatsApp numbers, crypto phrases).",
          "Slurs and abuse in every language your audience uses, including Hinglish and regional spellings.",
          "Variations of your handle used by impersonators.",
          "Competitor spam or self-promotion patterns.",
          "Review and update the list monthly; filters miss new variations.",
        ],
      },
      { type: "heading", text: "Moderating sponsored posts", id: "sponsored" },
      {
        type: "paragraph",
        text: "Brands watch the comments on sponsored content. Remove spam and abuse, but don't delete genuine questions or criticism of the product; answer honestly or pass product questions to the brand. Agree with the brand beforehand who answers product queries and how complaints are escalated. Deleting honest criticism under a sponsored post can look like hiding problems, which damages trust more than the comment itself.",
      },
      { type: "heading", text: "Working with moderators", id: "moderators" },
      {
        type: "list",
        items: [
          "Give moderators written rules and examples of each action.",
          "Use platform moderator roles rather than sharing your login.",
          "Agree what they escalate to you: threats, brand mentions, press, criticism that needs your reply.",
          "Review their actions occasionally and give feedback.",
          "Rotate or pause moderation during pile-ons so nobody burns out.",
        ],
      },
      {
        type: "paragraph",
        text: "Access through roles rather than passwords is covered in creator account security.",
        links: [{ text: "creator account security", href: "/blog/creator-account-security" }],
      },
      { type: "heading", text: "Threats, doxxing and serious harm", id: "serious" },
      {
        type: "paragraph",
        text: "Save evidence (screenshots with usernames, dates and links) before removing threatening content. Report it to the platform. For threats of violence, stalking, sharing of intimate images or doxxing, consider reporting to the police; online incidents in India can also be reported through the National Cyber Crime Reporting Portal. If a viewer appears to be at risk of self-harm, respond kindly, share appropriate helpline information and use the platform's reporting tools.",
        links: [{ text: "National Cyber Crime Reporting Portal", href: SOURCES.cybercrime }],
      },
      { type: "heading", text: "Protect your own wellbeing", id: "wellbeing" },
      {
        type: "list",
        items: [
          "Read comments at set times, not constantly.",
          "Let filters and moderators handle the first pass.",
          "Turn off or limit comments on posts where you need a break.",
          "Talk to someone you trust, or a professional, if abuse is affecting you.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Deleting honest criticism, especially under sponsored posts.",
          "No filters, so scam replies run unchecked.",
          "Filters only in English for a multilingual audience.",
          "Sharing your login with moderators.",
          "Removing threats without saving evidence.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good moderation removes what harms people and keeps what helps the conversation. Write clear rules, let platform filters do most of the work, review held comments on a schedule, give moderators roles and rules, and treat serious threats seriously. If a moderation issue grows into a public incident, move to creator crisis communication.",
        links: [{ text: "creator crisis communication", href: "/blog/creator-crisis-communication" }],
      },
    ],
    faqs: [
      {
        question: "Should creators delete negative comments?",
        answer:
          "Delete spam, scams, hate, harassment and personal information. Leave honest criticism, including of sponsored products; deleting it can damage trust more than the comment.",
      },
      {
        question: "How do I stop spam comments on Instagram and YouTube?",
        answer:
          "Use Instagram's Hidden Words with a custom list of scam phrases, and YouTube Studio's comment moderation level and blocked words. Update your lists monthly as spammers change wording.",
      },
      {
        question: "What should I do about threats in my comments?",
        answer:
          "Save evidence first, then remove and report the content to the platform. For threats of violence, stalking or doxxing, consider reporting to the police or the National Cyber Crime Reporting Portal.",
      },
    ],
  },
];

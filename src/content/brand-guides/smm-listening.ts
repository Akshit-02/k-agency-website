import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 01, writer D (2026-11-11): community vs support, crisis response plans, social listening and the
 * social media audit. Platform and legal facts checked November 2026; sources logged in the batch report.
 */

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
const PUBLISHED = "2026-11-11";
const REVIEWED = "November 2026";

const SRC = {
  fbHideComment: "https://www.facebook.com/help/297845860255949",
  igHiddenWords: "https://help.instagram.com/700284123459336",
  pibDpdp: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf",
  certIn: "https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf",
  igInsights: "https://help.instagram.com/788388387972460",
  igDateRange: "https://help.instagram.com/1407497629635879/",
  fbPageInsights: "https://www.facebook.com/help/794890670645072",
  liExport: "https://www.linkedin.com/help/linkedin/answer/a551206/",
  ytAdvanced: "https://support.google.com/youtube/answer/9717005?hl=en",
  asciInfluencer: "https://www.ascionline.in/wp-content/uploads/2023/08/GUIDELINES-FOR-INFLUENCER-ADVERTISING-IN-DIGITAL-MEDIA.pdf",
};

export const smmListeningPosts: BlogPost[] = [
  // 11
  {
    slug: "community-management-vs-customer-support",
    category: "Social Media Management",
    title: "Social Media Community Management vs Customer Support: Where Should Brands Draw the Line?",
    seoTitle: "Community Management vs Customer Support on Social Media",
    excerpt:
      "Comments and DMs mix praise, product questions, order complaints and the odd legal threat. Here is how to split community management from customer support, with an escalation matrix, sample replies, handover rules and a community guidelines template.",
    metaDescription:
      "Where community management ends and customer support begins on social media: a comparison table, escalation matrix, sample replies and a guidelines template.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: [
      "community management vs customer service",
      "social media community management",
      "social media customer support",
      "responding to social media comments",
      "social media message management",
    ],
    related: ["influencer-campaign-comment-management", "influencer-marketing-data-privacy", "influencer-marketing-brand-safety"],
    hero: {
      src: "/blog/brand-guides/community-management-vs-customer-support.svg",
      alt: "Escalation diagram: incoming comments and DMs split into community replies handled by the social team and support cases handed to the brand's support team",
    },
    body: [
      {
        type: "paragraph",
        text: "A new Reel is doing well. Under it, one person asks which shade suits oily skin, another says their order hasn't arrived in nine days, a third posts a photo of a damaged parcel, and someone in the DMs says they'll be speaking to a consumer forum. All four land in the same inbox, and the person replying is usually whoever runs the brand's Instagram. That's where the confusion between community management and customer support begins.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Community management keeps public conversations healthy: answering general questions, thanking people, steering discussion and enforcing your guidelines. Customer support resolves an individual's problem: orders, refunds, faults and complaints, usually with access to order systems. Draw the line at anything that needs account details, a decision about money, or legal or medical judgement. The social team acknowledges it publicly and hands it to support with a clear owner and timeline.",
      },
      { type: "heading", text: "Two different jobs that share an inbox", id: "two-jobs" },
      {
        type: "paragraph",
        text: "Both jobs happen in comments and DMs, so brands often treat them as one. They need different skills, systems and authority. A community manager knows the brand voice and the content calendar. A support agent knows the returns policy and can look up an order or approve a replacement.",
      },
      {
        type: "table",
        headers: ["", "Community management", "Customer support"],
        rows: [
          ["Goal", "Healthy, on-brand public conversation", "Resolve one person's problem"],
          ["Usual owner", "Social media team or agency", "Brand's support or customer experience team"],
          ["Channels", "Comments, mentions, Story replies, general DMs", "DMs moved to support, email, phone, WhatsApp, helpdesk"],
          ["Response expectation", "Within agreed working hours, set in the scope", "Set by your support policy, often with tracked tickets"],
          ["Tools", "Platform inboxes, scheduling and social inbox tools", "Helpdesk or CRM, order management system"],
          ["Skills", "Brand voice, judgement, moderation, content knowledge", "Policy knowledge, problem solving, system access"],
          ["Metrics", "Response coverage, sentiment trends, recurring questions", "Resolution time, first-contact resolution, satisfaction"],
        ],
      },
      {
        type: "paragraph",
        text: "If you work with an agency, check what you've actually bought. Kudozz's social media management, for example, includes comment monitoring, routine replies and escalation of sensitive queries within agreed hours, while customer support, complaint resolution and 24/7 moderation are separate requirements written into scope only if agreed. Our community management scope sets this out.",
        links: [{ text: "Our community management scope", href: "/services/social-media-management#community-management" }],
      },
      { type: "heading", text: "An escalation matrix for comments and DMs", id: "escalation-matrix" },
      {
        type: "paragraph",
        text: "The timelines below are what we'd recommend for a brand with a staffed support team during business hours. Adjust them to your capacity.",
      },
      {
        type: "table",
        headers: ["Comment or DM type", "Who handles", "Response approach", "Recommended timeline"],
        rows: [
          ["Praise, tags, general reactions", "Social team", "Reply or like where it adds something; don't reply to everything", "Same working day"],
          ["Product questions (shade, size, usage)", "Social team, using an approved FAQ", "Answer publicly so others benefit", "Same working day"],
          ["Order status, delivery, payment", "Support team", "Social team acknowledges publicly, moves to DM or support channel", "Acknowledge within working hours; support owns resolution"],
          ["Refund, return or damaged product", "Support team", "Acknowledge, apologise for the experience, hand over with details", "Acknowledge same day; support follows its policy"],
          ["Product safety, allergic reaction, injury", "Support plus brand lead; legal or quality if needed", "Short, caring acknowledgement; no admission or diagnosis", "Escalate immediately"],
          ["Legal threats, consumer forum, regulator mentions", "Brand lead and legal", "Hold public reply until approved", "Escalate immediately"],
          ["Media or journalist enquiries", "Brand lead or PR", "Do not answer on social; route to PR contact", "Escalate same day"],
          ["Spam, scams, impersonation", "Social team", "Hide or delete, report, warn followers if widespread", "As soon as seen"],
          ["Abuse, hate speech, threats", "Social team; brand lead if credible threat", "Hide or delete, block, report; record evidence", "As soon as seen"],
        ],
      },
      {
        type: "paragraph",
        text: "When several escalations about the same issue arrive in a short time, you may have more than a support problem. That's the point to switch to your crisis process, covered in how to build a social media crisis response plan.",
        links: [{ text: "how to build a social media crisis response plan", href: "/blog/social-media-crisis-management-plan" }],
      },
      { type: "heading", text: "Sample responses for common scenarios", id: "sample-responses" },
      {
        type: "paragraph",
        text: "Hypothetical examples for a fictional skincare brand. Rewrite them in your voice and keep them in a shared response library.",
      },
      {
        type: "list",
        items: [
          "Product question: \"Great question! For oily skin, most people go with the Gel version. If you're between shades, the Light Beige is the closer match for warm undertones. Happy to help in DMs if you want to share a photo.\"",
          "Late order (public): \"So sorry it's taking this long. Could you DM us your order number? Our support team will check it and get back to you today.\"",
          "Damaged product: \"That's not how it should arrive, and we're sorry. Please DM us your order number and a photo, and our support team will sort out the next step.\"",
          "Possible reaction: \"We're sorry to hear this and want to understand what happened. Please stop using the product and DM us so our team can contact you directly.\"",
          "Unfair criticism: \"We hear you. The price reflects the ingredients we use, and we know it isn't for everyone. If you'd like a smaller size to try first, the 30 ml is on our site.\"",
          "Competitor comparison: \"We'll let you decide which suits you best. Here's what's in ours, and our team is around if you have questions.\"",
          "Legal threat: no public reply until the brand lead approves one. Internally: log it, screenshot it and escalate immediately.",
          "Spam or fake giveaway: hide the comment and post a short pinned note if it's widespread: \"We only run giveaways from this account. We never ask for payment or card details.\"",
        ],
      },
      { type: "heading", text: "Handover rules between the agency and your support team", id: "handover-rules" },
      {
        type: "paragraph",
        text: "Most failures happen at the handover, not in the reply. Agree these rules before the first post goes live.",
      },
      {
        type: "list",
        items: [
          "One named support contact and a backup, with the hours they cover.",
          "One channel for handovers: a shared helpdesk queue, a tagged inbox view or a dedicated chat group. Not personal WhatsApp.",
          "A handover note template: platform, link to the comment or DM, customer handle, issue type and what was already said publicly.",
          "Who replies after handover. Usually support takes over the DM; the social team doesn't keep a parallel thread going.",
          "A loop back. Support tells the social team when the case is closed, so a public thread can be updated if it's still visible.",
          "Out-of-hours wording agreed in advance, so a 10 pm complaint gets a holding reply that doesn't promise what nobody can deliver.",
          "Weekly review of escalations, to spot repeat issues.",
        ],
      },
      { type: "heading", text: "Hide, delete or block: a moderation policy", id: "moderation-policy" },
      {
        type: "paragraph",
        text: "Write down when the team hides, deletes or blocks. It protects the team from second-guessing and protects the brand from looking like it silences criticism. Platform behaviour matters here. At the time of writing, Facebook's help centre says a hidden comment on a Page stays visible to the person who wrote it and their friends, and Instagram's Hidden Words settings can filter comments with offensive terms automatically.",
        links: [
          { text: "Facebook's help centre", href: SRC.fbHideComment },
          { text: "Instagram's Hidden Words", href: SRC.igHiddenWords },
        ],
      },
      {
        type: "table",
        headers: ["Action", "Use for", "Don't use for"],
        rows: [
          ["Reply and leave visible", "Honest complaints, criticism, product questions", "Personal data, abuse"],
          ["Hide", "Spam, off-topic promotion, comments containing personal details", "Negative but fair feedback"],
          ["Delete", "Scams, hate speech, explicit content, doxxing", "Complaints you'd rather not see"],
          ["Block or restrict", "Repeat abusers, bots, impersonators", "Unhappy customers with a genuine issue"],
          ["Report to the platform", "Impersonation, threats, scams", "Disagreements"],
        ],
      },
      {
        type: "paragraph",
        text: "Screenshot anything that might matter later, such as a threat, before deleting it. Hiding a fair complaint usually costs more trust than answering it.",
      },
      { type: "heading", text: "Data privacy when you move conversations to DMs", id: "data-privacy" },
      {
        type: "paragraph",
        text: "Moving a complaint to DMs is right because it keeps order numbers, phone numbers and addresses out of public view. It also means your social team is now handling personal data. India's Digital Personal Data Protection Act, 2023 and the DPDP Rules, notified in November 2025, are being phased in over eighteen months, according to the government's PIB backgrounder, and they rest on principles such as purpose limitation, data minimisation and security safeguards. Check your current obligations with counsel; in practice:",
        links: [{ text: "PIB backgrounder", href: SRC.pibDpdp }],
      },
      {
        type: "list",
        items: [
          "Ask only for what support needs: usually an order number, not a full address and phone number.",
          "If someone posts personal details in a public comment, hide it and ask them to share in DMs instead.",
          "Don't copy customer details into spreadsheets, personal phones or chat groups outside the agreed handover channel.",
          "Give agency staff the minimum account access they need, and remove it when people leave.",
          "Agree in writing who deletes DM data and when, and how a customer request to delete their data is handled.",
        ],
      },
      {
        type: "paragraph",
        text: "For the wider picture on audience and creator data, see influencer marketing data privacy in India.",
        links: [{ text: "influencer marketing data privacy in India", href: "/blog/influencer-marketing-data-privacy" }],
      },
      { type: "heading", text: "A community guidelines template", id: "guidelines-template" },
      {
        type: "paragraph",
        text: "Publish short guidelines on your website or in a highlight, and link to them when you remove something.",
      },
      {
        type: "template",
        label: "Community guidelines (adapt to your brand)",
        text: "[Brand] community guidelines\n\nWe want this to be a useful, friendly place to talk about [category]. To keep it that way:\n\n1. Be respectful. Disagree with us or each other, but no abuse, hate speech, threats or harassment.\n2. Keep personal details private. Don't post phone numbers, addresses or order details in comments. DM us instead.\n3. No spam or scams. We'll remove promotional links, fake giveaways and impersonation accounts.\n4. Order and refund help: for anything about an order, DM us your order number or contact [support email / WhatsApp]. Our support team replies [support hours].\n5. When we reply: we monitor comments and messages [days and hours]. Messages outside these hours are answered the next working day.\n6. What we may remove: comments that break these rules may be hidden or deleted, and repeat offenders may be blocked or reported. We won't remove honest feedback because it's negative.\n7. Health and safety: if you've had a reaction or a safety concern, stop using the product and contact [support channel] so we can follow up directly.\n\nLast updated: [date]",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Letting the social team promise refunds or replacements they can't authorise.",
          "Saying \"we've sent you a DM\" when nobody has.",
          "Deleting criticism, then being called out for it in screenshots.",
          "Answering medical, legal or safety questions in public comments without sign-off.",
          "No written hours, so customers expect instant replies at midnight.",
          "Treating comments on creators' campaign posts as the same job; those need their own plan.",
        ],
      },
      {
        type: "paragraph",
        text: "If creators are part of your mix, the comment plan for their posts is set out in who owns the comments during influencer campaigns.",
        links: [{ text: "who owns the comments during influencer campaigns", href: "/blog/influencer-campaign-comment-management" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pull the last month of comments and DMs and sort them into the escalation matrix categories. You'll quickly see how much is community and how much is support. Then name owners, agree the handover channel and publish your guidelines.",
      },
      {
        type: "paragraph",
        text: "Write the boundary into your agency agreement, and keep the response library in the same voice as your posts; the social media brand voice guide covers how.",
        links: [{ text: "the social media brand voice guide", href: "/blog/social-media-brand-voice" }],
      },
    ],
    faqs: [
      {
        question: "Should a social media agency reply to customer complaints?",
        answer:
          "An agency can acknowledge complaints publicly, apologise for the experience and move the conversation to the right channel. Resolving the complaint, such as approving a refund or checking an order, normally needs your systems and authority, so it sits with your support team unless you've specifically contracted the agency for support and given it the tools and policies to do it.",
      },
      {
        question: "Is it ever right to delete a negative comment?",
        answer:
          "Delete comments that break your published guidelines: abuse, hate speech, scams, explicit content or posts exposing someone's personal details. Don't delete honest criticism, even if it's harsh. Reply to it, and move it to support if there's a problem to fix. Take a screenshot before removing anything that might be needed later, such as a threat.",
      },
      {
        question: "How fast should a brand reply to comments on social media?",
        answer:
          "There's no platform rule. Set a target you can actually meet, such as within the same working day for routine comments and immediate escalation for safety or legal issues, and publish your monitoring hours. A realistic promise kept consistently does more for trust than a fast promise broken on weekends.",
      },
      {
        question: "Can we use a chatbot or auto-replies for DMs?",
        answer:
          "Auto-replies are useful for acknowledging messages outside working hours and pointing people to order tracking or FAQs. Make sure they say when a person will reply, don't claim to be human, and hand over to someone for complaints, safety issues or anything the bot can't answer properly. Check each platform's current rules for automated messaging before you set one up.",
      },
      {
        question: "Who should own community management if we have no support team?",
        answer:
          "In a small business, the founder or an operations person usually handles support while the social team or agency handles community. The key is still a named person who can make decisions on orders and refunds, a shared channel for handovers and agreed hours. Without that, complaints stall in the DMs and become public frustration.",
      },
    ],
  },

  // 12
  {
    slug: "social-media-crisis-management-plan",
    category: "Social Media Management",
    title: "How to Build a Social Media Crisis Response Plan for Your Brand",
    seoTitle: "Social Media Crisis Management Plan: A Practical Template",
    excerpt:
      "Most brands write their crisis plan during the crisis. This guide sets severity levels, a response checklist, approval roles, holding statements, what to pause, when to bring in lawyers or specialist PR, and how to review and rehearse.",
    metaDescription:
      "Build a social media crisis management plan: severity levels, a response checklist, approval roles, holding statements, pausing posts and legal escalation.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "social media crisis management plan",
      "social media crisis communication",
      "social media reputation management",
      "negative comments on social media",
      "holding statement template",
    ],
    related: ["influencer-marketing-brand-safety", "influencer-campaign-comment-management", "influencer-sentiment-analysis"],
    hero: {
      src: "/blog/brand-guides/social-media-crisis-management-plan.svg",
      alt: "Three-level severity ladder from issue to incident to crisis, with the response steps: pause, assess, hold, approve, respond and review",
    },
    body: [
      {
        type: "paragraph",
        text: "It's Saturday evening. A customer's video showing a foreign object in your product has been shared a few thousand times, your festive offer post is scheduled for 7 pm, and the founder is on a flight. The social media manager is asking a group chat whether to reply. Without a plan, the first public response is improvised, and that's usually the one people screenshot.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A social media crisis response plan defines what counts as a crisis, who decides and approves, what gets paused, and what you'll say first. Set three severity levels, name a decision-maker and approvers including legal, prepare holding statements in advance, pause scheduled posts and ads when a serious issue starts, monitor closely, and review afterwards. Bring in lawyers or specialist crisis PR for safety, legal, data or regulatory issues.",
      },
      { type: "heading", text: "What is and isn't a crisis", id: "severity-levels" },
      {
        type: "paragraph",
        text: "Calling everything a crisis wears people out, and calling nothing a crisis means the real one gets a routine reply. Agree three levels and the signals for each. The signals below are examples; set your own based on your normal comment volume.",
      },
      {
        type: "table",
        headers: ["Level", "What it looks like", "Who leads", "Typical response"],
        rows: [
          ["1. Issue", "Individual complaints, a handful of negative comments, a bad review", "Social team with support", "Normal reply and handover rules"],
          ["2. Incident", "A complaint gaining traction, a cluster of similar complaints, a creator post backfiring, an error in a published post", "Brand lead, social team", "Pause related content, agree a reply, monitor closely"],
          ["3. Crisis", "Possible harm to people, product safety, legal or regulator involvement, data breach, account hacked, media coverage, a story spreading beyond your audience", "Crisis lead with leadership, legal and PR", "Full plan: pause, holding statement, specialist advice, regular updates"],
        ],
      },
      {
        type: "paragraph",
        text: "Volume alone doesn't define level 3. One credible report of a child harmed by your product is a crisis even with five comments. A thousand angry comments about a discontinued flavour may only be an incident.",
      },
      { type: "heading", text: "Who decides, drafts and approves", id: "roles" },
      {
        type: "paragraph",
        text: "Write names, not job titles, and a backup for each. Include out-of-hours phone numbers. The crisis plan is useless if the only person who can approve a statement is unreachable.",
      },
      {
        type: "table",
        headers: ["Role", "Responsibility", "Usually"],
        rows: [
          ["Crisis lead (decides)", "Declares the severity level, decides whether and when to respond", "Founder, CEO or marketing head"],
          ["Drafter", "Writes holding statements, replies and updates", "Social media lead or agency, with PR input"],
          ["Fact owner", "Confirms what actually happened", "Operations, quality, product or customer support lead"],
          ["Legal sign-off", "Reviews anything touching liability, safety, data or regulators", "In-house counsel or external lawyer"],
          ["PR sign-off", "Aligns social with media statements", "In-house PR or specialist crisis PR firm"],
          ["Publisher", "Posts approved statements, pauses content, monitors", "Social team or agency"],
        ],
      },
      {
        type: "paragraph",
        text: "A social media agency can draft, publish and monitor. It is not a substitute for legal advice or specialist crisis communication, and should not be the one deciding what the brand admits or promises. At Kudozz, crisis communication is scoped separately from regular social media management, as our service scope explains.",
        links: [{ text: "our service scope", href: "/services/social-media-management#scope" }],
      },
      { type: "heading", text: "The first hours: a crisis response checklist", id: "response-checklist" },
      {
        type: "list",
        items: [
          "Capture evidence: screenshots with URLs and timestamps of the original post and key replies.",
          "Tell the crisis lead and agree a severity level.",
          "Pause scheduled posts and ads on all platforms (see below).",
          "Stop replying piecemeal. One agreed line for the social team until the statement is approved.",
          "Establish facts with the fact owner: what happened, how many people, what's known and not known.",
          "Decide whether legal or specialist PR needs to be involved now.",
          "Publish a holding statement if silence would be read as indifference.",
          "Brief the support team and anyone customer-facing, including creators currently posting for you.",
          "Set a monitoring rota and an update rhythm.",
          "Keep a log of decisions, times and who approved what.",
        ],
      },
      { type: "heading", text: "Holding statements to prepare in advance", id: "holding-statements" },
      {
        type: "paragraph",
        text: "A holding statement says you know, you care and you're acting, without guessing at causes or admitting fault before the facts are clear. Get these pre-approved by legal so they can go out quickly once the crisis lead says yes.",
      },
      {
        type: "template",
        label: "Holding statements (get legal approval before you need them)",
        text: "GENERAL ISSUE\nWe're aware of [posts / reports] about [issue]. We're looking into it now and will share an update by [time]. If you've been affected, please contact [support channel] so we can help directly.\n\nPRODUCT CONCERN\nWe've seen reports about [product, batch if known]. Your safety comes first. While we investigate, please [stop using / set aside] the product and contact [support channel]. We'll update here by [time].\n\nSERVICE OUTAGE OR DELIVERY DELAY\nSome customers are facing [problem] since [time]. We're sorry, and our team is working on it. We'll post an update by [time]. Orders affected will be [what you can confirm].\n\nACCOUNT COMPROMISED\nOur [platform] account was accessed without permission on [date]. Please ignore any messages or offers sent from it since [time]. We never ask for payment or OTPs through DMs. We're working with the platform to secure it.\n\nCONTENT ERROR OR OFFENSIVE POST\nWe posted [content] that [was wrong / hurt people]. We've removed it. We're sorry. [One sentence on what changes, only if confirmed.]\n\nUPDATE TEMPLATE\nUpdate on [issue], [date, time]: Here is what we know: [facts]. Here is what we're doing: [actions]. Next update: [time].",
      },
      {
        type: "paragraph",
        text: "Don't delete critical comments during a crisis unless they break your guidelines. Screenshots of a brand deleting criticism tend to become the story. For day-to-day moderation rules, see community management vs customer support.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      { type: "heading", text: "Pause scheduled posts, ads and creator content", id: "pause-content" },
      {
        type: "paragraph",
        text: "A cheerful offer post going out in the middle of a crisis looks careless at best. Keep a list of every place content is scheduled so you can stop it in minutes.",
      },
      {
        type: "list",
        items: [
          "Scheduling tools and native schedulers for each platform.",
          "Paid campaigns in ads managers, including boosted posts and always-on retargeting.",
          "Creator posts due to go live, with a message to each creator or their manager.",
          "Email and WhatsApp broadcasts that may reference the same product or offer.",
          "Automated DM replies that might sound tone-deaf.",
        ],
      },
      {
        type: "paragraph",
        text: "Decide in advance who has the access to pause each of these, and test that they actually can. Approval workflows designed for normal weeks, such as those in the social media content approval process, need an emergency override.",
        links: [{ text: "the social media content approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "Monitoring during an incident", id: "monitoring" },
      {
        type: "paragraph",
        text: "Monitor your own comments and DMs, mentions and tags, relevant hashtags, the original post's shares and replies, review sites and news. Track the volume of new mentions, the main themes, whether new facts or claims are appearing, and whether the story is moving to new platforms or media. Report to the crisis lead on a fixed rhythm, such as every two hours at level 3, rather than forwarding every comment. Social listening for brands explains how to set up the queries in advance.",
        links: [{ text: "Social listening for brands", href: "/blog/social-listening-for-brands" }],
      },
      { type: "heading", text: "When you need lawyers or specialist crisis PR", id: "specialist-advice" },
      {
        type: "paragraph",
        text: "These situations need qualified advice before you say anything substantive in public:",
      },
      {
        type: "list",
        items: [
          "Product safety: contamination, injury, allergic reactions or anything that may need a recall.",
          "Legal threats: notices, consumer forum complaints, defamation claims, IP disputes.",
          "Data breaches or hacked accounts that expose customer data.",
          "Contact from a regulator, police or government body.",
          "Harm to people: accidents, deaths, harassment or allegations against staff or creators.",
          "Anything likely to attract national media coverage.",
        ],
      },
      {
        type: "paragraph",
        text: "In India, cyber incidents can carry reporting duties. CERT-In's directions of 28 April 2022 require service providers, intermediaries, data centres, body corporates and government organisations to report listed incidents, which include data breaches and unauthorised access to social media accounts, within six hours of noticing them. Separately, the government's PIB backgrounder on the DPDP Rules, 2025 says organisations must inform affected individuals and the Data Protection Board of personal data breaches, with obligations phased in over eighteen months from November 2025. Timelines and applicability can change, so check current legal obligations with counsel.",
        links: [
          { text: "CERT-In's directions of 28 April 2022", href: SRC.certIn },
          { text: "PIB backgrounder on the DPDP Rules, 2025", href: SRC.pibDpdp },
        ],
      },
      {
        type: "paragraph",
        text: "If the crisis involves a creator you've worked with, the contract and brand-safety side is covered in influencer brand safety.",
        links: [{ text: "influencer brand safety", href: "/blog/influencer-marketing-brand-safety" }],
      },
      { type: "heading", text: "After the incident: review and rehearse", id: "review-rehearse" },
      {
        type: "paragraph",
        text: "Within two weeks, run a blameless review with everyone involved. Then rehearse the plan at least once a year with a tabletop exercise: a hypothetical scenario, the real people, a clock, and someone playing the angry customer and the journalist.",
      },
      {
        type: "list",
        items: [
          "Timeline: when it started, when you noticed, when you responded.",
          "What worked and what slowed you down, especially approvals and access.",
          "Whether the severity level was right.",
          "What customers and the public said, and whether sentiment recovered.",
          "Changes to the product, process, policy or plan, with owners and dates.",
          "When paused content and ads restart, and whether the tone of the next few weeks needs to change.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Replying fast with a guess, then having to correct it.",
          "Silence for a full day because nobody could approve a statement.",
          "Letting the agency or a junior team member decide what the brand admits.",
          "Leaving scheduled offers and ads running.",
          "Posting the same copy-pasted reply under hundreds of comments.",
          "Restarting normal posting the next morning as if nothing happened.",
          "Storing the plan somewhere nobody can open on a phone at night.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "This week, write down your three severity levels, the names and numbers of the crisis lead, legal and PR contacts, and a list of everywhere content is scheduled. Draft the holding statements and get them approved. That alone will make your first hour calmer than most brands manage.",
      },
      {
        type: "paragraph",
        text: "Then rehearse it once, fix what breaks, and revisit the plan whenever your team, agency or product range changes.",
      },
    ],
    faqs: [
      {
        question: "Should we respond publicly or only in DMs during a crisis?",
        answer:
          "If many people have seen the issue, respond publicly as well, usually with one statement pinned or posted on your main accounts, and handle individual cases privately. Responding only in DMs can look like hiding. If only one person is affected and it isn't spreading, a private resolution with a short public acknowledgement is often enough.",
      },
      {
        question: "Should we turn off comments during a crisis?",
        answer:
          "Sometimes, for a specific post that is attracting abuse or misinformation, limiting comments can be sensible. Turning off comments everywhere often reads as avoidance and pushes conversation to places you can't see. Decide case by case, explain the reason if you do it, and keep a channel open for affected customers to reach you.",
      },
      {
        question: "Can our social media agency handle the crisis for us?",
        answer:
          "An agency can monitor, draft, pause content and publish approved statements. Decisions about what the brand admits, promises or discloses belong to your leadership, with legal and, for serious cases, specialist crisis PR advice. Agree in advance what the agency is authorised to do on its own and what needs your sign-off.",
      },
      {
        question: "How long should we pause normal posting?",
        answer:
          "Until the issue is resolved or clearly stable and the crisis lead agrees. Then restart gradually, starting with useful or neutral content rather than promotions, and check the tone of anything already in the calendar. For a short incident this may be a day or two; for a serious crisis it may be weeks.",
      },
      {
        question: "What if our account gets hacked?",
        answer:
          "Use the platform's official account recovery process, alert followers through your other channels that messages from the account should be ignored, check which admins and connected apps have access, and change passwords and two-factor settings. Bring in legal advice if customer data may be exposed, as reporting duties may apply.",
      },
    ],
  },

  // 13
  {
    slug: "social-listening-for-brands",
    category: "Social Media Management",
    title: "How Brands Can Use Social Listening to Understand Customers and Competitors",
    seoTitle: "Social Listening for Brands: Customer and Competitor Insight",
    excerpt:
      "Social listening is reading what people say about you, your category and your competitors, then acting on it. A practical workflow with Hinglish and misspelling queries, mention categories, a competitor framework, tool categories, limits and ethics.",
    metaDescription:
      "Social listening for brands: a workflow from questions to queries, mention categories, competitor and audience insight, tool options, limits and ethics.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "social listening for brands",
      "social media listening tools",
      "brand sentiment monitoring",
      "competitor social media analysis",
      "social media audience insights",
    ],
    related: ["x-social-listening", "influencer-social-listening", "influencer-sentiment-analysis"],
    hero: {
      src: "/blog/brand-guides/social-listening-for-brands.svg",
      alt: "Six-step social listening workflow: define questions, build queries, collect, categorise, act and report",
    },
    body: [
      {
        type: "paragraph",
        text: "A cookware brand keeps seeing comments asking whether its pans work on induction. The answer is on the product page, but nobody reads product pages. Across Instagram, YouTube reviews and a couple of Reddit threads, the same question keeps coming up, along with complaints that a competitor's handle gets hot. None of this shows up in the brand's insights dashboard. It only shows up if someone goes looking.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social listening means tracking conversations about your brand, competitors and category across platforms, then using what you learn to change content, products, service or campaigns. Start with three or four business questions, build keyword queries that include Hinglish and common misspellings, collect mentions weekly, sort them into categories, act on patterns, and report monthly. Native tools cover your own accounts; paid tools add breadth but still miss private spaces.",
      },
      { type: "heading", text: "Monitoring vs listening", id: "monitoring-vs-listening" },
      {
        type: "paragraph",
        text: "Monitoring is reactive: finding mentions and responding to them, such as a complaint that tags you. Listening is analytical: stepping back to see patterns, such as the fact that 'induction' keeps appearing in questions about your pans. Most brands do some monitoring already. Few turn it into listening, because nobody owns the step from 'we saw it' to 'we changed something'.",
      },
      {
        type: "table",
        headers: ["", "Monitoring", "Listening"],
        rows: [
          ["Question", "Who mentioned us and do we need to reply?", "What are people telling us, and what should we change?"],
          ["Timeframe", "Real time or daily", "Weekly and monthly patterns"],
          ["Output", "Replies, escalations", "Insights, content ideas, product feedback, briefs"],
          ["Owner", "Community or support team", "Strategy or marketing lead"],
        ],
      },
      { type: "heading", text: "A social listening workflow", id: "workflow" },
      { type: "subheading", text: "1. Define the questions" },
      {
        type: "paragraph",
        text: "Listening without a question produces a pile of screenshots. Pick a few: What do customers complain about after delivery? Why do people choose a competitor? What words do people use for our category? Which questions come up before purchase?",
      },
      { type: "subheading", text: "2. Build keywords and queries" },
      {
        type: "paragraph",
        text: "Indian conversations mix English, Hindi and regional languages, often in Roman script. Your query list should reflect how people actually type.",
      },
      {
        type: "list",
        items: [
          "Brand name, handle, product names and common misspellings (for a hypothetical brand 'Kaashvi': kashvi, kaashvi, kaasvi).",
          "Hinglish and transliterated phrases: 'accha hai kya', 'paisa vasool', 'worth it ya nahi', plus regional equivalents for your key markets.",
          "Category terms people use, not the ones in your brief: 'pan for induction' as well as 'induction-compatible cookware'.",
          "Competitor names, handles and product names.",
          "Problem phrases: 'not working', 'refund', 'fake', 'broke after', 'reaction'.",
          "Exclusions to cut noise, such as a common word that shares your brand name.",
        ],
      },
      { type: "subheading", text: "3. Collect" },
      {
        type: "paragraph",
        text: "Decide where to look and how often. For most brands a weekly sweep of your own comments and DMs, tagged mentions, relevant hashtags, YouTube comments on review videos, marketplace reviews, Reddit and X is enough. Log each relevant mention in a simple sheet or your listening tool with date, platform, link, text and category.",
      },
      { type: "subheading", text: "4. Categorise" },
      {
        type: "table",
        headers: ["Category", "Examples", "Usually goes to"],
        rows: [
          ["Product feedback", "Feature requests, quality issues, sizing", "Product team"],
          ["Purchase questions", "Compatibility, ingredients, price, where to buy", "Content team, FAQ, product pages"],
          ["Service complaints", "Delivery, refunds, support experience", "Customer support and operations"],
          ["Praise and advocacy", "Recommendations, unboxings, tagged photos", "Community team, UGC permissions"],
          ["Competitor comparisons", "'X vs Y', switching stories", "Marketing and strategy"],
          ["Category trends", "New needs, formats, rituals, seasonal shifts", "Content and campaign planning"],
          ["Risk signals", "Safety claims, misinformation, legal threats, fake accounts", "Brand lead, crisis process"],
        ],
      },
      { type: "subheading", text: "5. Act" },
      {
        type: "paragraph",
        text: "Each category needs an owner who does something with it. A recurring purchase question becomes a Reel and an FAQ. A delivery complaint pattern goes to operations with examples. A risk signal goes straight into the crisis process. Keep a short 'actions taken' column in your log, so you can show later which insights changed something and which were only noted.",
      },
      { type: "subheading", text: "6. Report" },
      {
        type: "paragraph",
        text: "A monthly one-page summary is enough: top themes with example quotes, changes since last month, what was done about each, and what's open. Count mentions by category, but don't present those counts as market share.",
      },
      { type: "heading", text: "A competitor and audience insight framework", id: "insight-framework" },
      {
        type: "paragraph",
        text: "Competitor analysis on social is often reduced to follower counts. Listening tells you more: what people praise, what frustrates them and what they wish existed.",
      },
      {
        type: "table",
        headers: ["Look at", "Questions to ask", "What you might do"],
        rows: [
          ["Competitor praise", "What do their customers love that we don't offer or don't talk about?", "Fill a product or messaging gap"],
          ["Competitor complaints", "Where do they let customers down?", "Make that a strength in content, without naming them"],
          ["Switching stories", "Why do people move between brands?", "Address the trigger in your messaging"],
          ["Audience language", "What words and phrases do customers use?", "Use them in hooks, captions and search terms"],
          ["Unmet needs", "What do people ask for that nobody sells?", "Pass to product; test content around it"],
          ["Creators and communities", "Who is trusted in this conversation?", "Consider for partnerships"],
        ],
      },
      {
        type: "paragraph",
        text: "If your goal is finding creators, listening works differently; see social listening for influencer marketing. For X specifically, where conversations are public and fast-moving, see X social listening.",
        links: [
          { text: "social listening for influencer marketing", href: "/blog/influencer-social-listening" },
          { text: "X social listening", href: "/blog/x-social-listening" },
        ],
      },
      { type: "heading", text: "Native tools vs paid listening tools", id: "tools" },
      {
        type: "paragraph",
        text: "Native analytics on Instagram, Facebook, LinkedIn and YouTube report on activity around your own accounts: comments, mentions and tags you receive, and how your content performs. They don't search the wider conversation about your category or competitors. Platform search lets you read public posts by keyword or hashtag manually, which works for small volumes.",
      },
      {
        type: "table",
        headers: ["Option", "Good for", "Limits"],
        rows: [
          ["Native insights and inboxes", "Your own comments, DMs, tags and performance", "Little or no view of conversations you're not tagged in"],
          ["Manual platform search", "Small brands, specific questions, qualitative reading", "Time-consuming; hard to track trends"],
          ["Social media management suites with listening add-ons", "Combining publishing, inbox and basic keyword tracking", "Coverage and history vary by plan and platform"],
          ["Dedicated listening platforms", "Volume, history, multiple sources including news and forums", "Cost; coverage depends on platform data access"],
          ["Review and marketplace monitoring", "Product feedback on Amazon, Flipkart and similar", "Separate from social; may need its own tool"],
        ],
      },
      {
        type: "paragraph",
        text: "Before paying for a tool, ask the vendor for a trial on your own queries, including Hinglish terms, and check which platforms and how much history it actually covers. Paid listening tools are a separate cost from Kudozz's social media management; a managed social media service can still run a manual weekly listening sweep as part of strategy work.",
        links: [{ text: "a managed social media service", href: "/services/social-media-management#strategy" }],
      },
      { type: "heading", text: "The limits of social listening", id: "limits" },
      {
        type: "list",
        items: [
          "Private accounts, closed groups, WhatsApp chats and DMs between users are not visible, and a lot of Indian product conversation happens there.",
          "Platforms restrict what third-party tools can collect, and those access terms change, so tool coverage is never complete.",
          "Automated sentiment scores are approximate. Read samples yourself before trusting a trend.",
          "Sarcasm ('wow, delivered in just 3 weeks, amazing') is often scored as positive.",
          "Regional languages and Hinglish are handled unevenly by tools; native speakers need to check results.",
          "Loud voices are not the whole market. A few heavy posters can skew a month.",
          "Mentions show what people say in public, not what most customers do.",
        ],
      },
      {
        type: "paragraph",
        text: "For a closer look at reading audience reactions, influencer sentiment analysis explains how to check automated scores by hand.",
        links: [{ text: "influencer sentiment analysis", href: "/blog/influencer-sentiment-analysis" }],
      },
      { type: "heading", text: "Turning insights into content and campaigns", id: "insights-to-action" },
      {
        type: "list",
        items: [
          "Answer the top three recurring questions as Reels, carousels or pinned FAQs.",
          "Use customers' own words in hooks and captions.",
          "Brief creators on the objections you keep hearing, so their content addresses them.",
          "Plan campaigns around rising category themes, not just your launch calendar.",
          "Share praise and UGC on your channels, with the person's permission.",
          "Feed recurring complaints to product and operations, then tell customers what changed.",
        ],
      },
      {
        type: "paragraph",
        text: "Insights from listening often shape the creator side too. Social campaigns built around real audience questions tend to brief better, and customer insights for influencer briefs shows how to pass them on.",
        links: [
          { text: "Social campaigns", href: "/services/social-campaigns" },
          { text: "customer insights for influencer briefs", href: "/blog/customer-insights-influencer-brief" },
        ],
      },
      { type: "heading", text: "Ethics and privacy", id: "ethics-privacy" },
      {
        type: "list",
        items: [
          "Listen to public conversations only. Don't join private groups under false pretences.",
          "Don't contact people who didn't tag you in a way that feels like surveillance. Join a public conversation only if you can genuinely help.",
          "Ask permission before reposting anyone's content.",
          "Store only what you need: themes and anonymised quotes are usually enough for reports.",
          "Don't build profiles of individual customers from their social activity.",
          "Treat personal data with care under India's DPDP framework, and check obligations with counsel if you store mentions with personal details.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Buying a tool before deciding what questions it should answer.",
          "English-only queries for an audience that types in Hinglish.",
          "Reporting sentiment percentages nobody has checked by reading posts.",
          "Listening without owners, so insights never reach product or support.",
          "Copying competitors' content instead of learning from their customers.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Write down three questions, build a query list of 20 to 30 terms including Hinglish and misspellings, and spend an hour a week for a month collecting and categorising what you find. You'll know by the end whether you need a paid tool, and you'll already have content ideas.",
      },
      {
        type: "paragraph",
        text: "Listening also works well as part of a wider review of your accounts; a social media audit is a good moment to run your first sweep.",
        links: [{ text: "a social media audit", href: "/blog/social-media-audit" }],
      },
    ],
    faqs: [
      {
        question: "Do small brands need a paid social listening tool?",
        answer:
          "Often not at first. A weekly manual sweep of your own comments, tagged mentions, review videos, marketplace reviews and a few keyword searches can surface most patterns when mention volume is low. Consider a tool once manual collection takes more than a few hours a week, or when you need history and coverage across news, forums and multiple platforms.",
      },
      {
        question: "How often should we review social listening data?",
        answer:
          "Check for urgent issues daily as part of community management, review patterns weekly, and summarise monthly for leadership. Around launches, sales and festive periods, increase the frequency. The monthly summary should focus on themes and actions taken, not just the number of mentions.",
      },
      {
        question: "Can social listening measure brand awareness?",
        answer:
          "Only loosely. Mention volume and share of conversation can show direction, but they reflect who posts publicly, not your whole market. For awareness, combine listening with brand search trends, survey-based brand lift studies or sales data. Treat listening as qualitative insight with some useful counts, not as a market research substitute.",
      },
      {
        question: "Is it legal to monitor what people say about our brand online?",
        answer:
          "Reading public posts is generally how social platforms work, but how you collect, store and use that data matters. Follow each platform's terms, don't scrape where it's prohibited, keep only what you need, and avoid building profiles of individuals. If you store personal data from mentions, take advice on your obligations under India's data protection law.",
      },
    ],
  },

  // 14
  {
    slug: "social-media-audit",
    category: "Social Media Management",
    title: "How to Conduct a Social Media Audit Before Changing Your Marketing Strategy",
    seoTitle: "Social Media Audit for Businesses: Step-by-Step Checklist",
    excerpt:
      "Before you change agencies, platforms or content direction, audit what you have: who owns the accounts, what your profiles say, what content works, what the numbers show, and where compliance gaps sit. A step-by-step process, checklist and summary template.",
    metaDescription:
      "A social media audit checklist for businesses: account ownership, profiles, content, performance exports, community, competitors, disclosures and priorities.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "social media audit for businesses",
      "social media account audit",
      "Instagram account audit for business",
      "social media performance audit",
      "social media strategy review",
    ],
    related: ["influencer-marketing-audit", "influencer-marketing-kpis", "influencer-disclosure-rules-by-country"],
    hero: {
      src: "/blog/brand-guides/social-media-audit.svg",
      alt: "Social media audit framework with eight areas: access, profiles, content, performance, community, competitors, creators and UGC, and compliance",
    },
    body: [
      {
        type: "paragraph",
        text: "A brand decides its Instagram isn't working and hires a new agency. In week one, nobody can find the login for the Facebook Page, the LinkedIn page admin left two years ago, and the only performance data is a few screenshots in old monthly decks. The new strategy gets built on guesses. An audit before the change would have taken a couple of weeks and saved months.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A social media audit is a structured review of your accounts before you change strategy. Check who owns and can access each account, whether profiles are complete and consistent, what content you post and how it performs, how you handle your community, how competitors compare, how creators and customers talk about you, and whether disclosures are in order. Export at least six to twelve months of native insights where available, then turn findings into a short list of priorities.",
      },
      { type: "heading", text: "When to run an audit", id: "when-to-audit" },
      {
        type: "list",
        items: [
          "Before hiring, changing or bringing social media in-house.",
          "Before a rebrand, a major launch or entering a new market.",
          "When results have stalled and nobody can say why.",
          "When adding or dropping a platform.",
          "Once a year as a routine strategy review.",
        ],
      },
      { type: "heading", text: "A step-by-step audit process", id: "audit-process" },
      {
        type: "list",
        items: [
          "List every account: official, regional, product, old and abandoned. Search each platform for your brand name to find ones you forgot.",
          "Confirm access and ownership before anything else.",
          "Export performance data from native insights for the agreed period.",
          "Review profiles and a sample of content against the checklist below.",
          "Review community handling: response coverage, tone and escalations.",
          "Compare with three to five competitors or brands your customers also follow.",
          "Check creator, UGC and disclosure practice.",
          "Summarise findings, score each area, and agree priorities.",
        ],
      },
      { type: "heading", text: "Access and ownership", id: "access-ownership" },
      {
        type: "paragraph",
        text: "This is the most common gap and the most expensive to fix later. The business, not an employee or an agency, should own every account and hold top-level admin rights.",
      },
      {
        type: "list",
        items: [
          "Who holds admin on each account, and are they current employees?",
          "Are Facebook Pages and Instagram accounts held in a business portfolio owned by the company?",
          "Is two-factor authentication on, and tied to a company phone or email rather than a personal one?",
          "Which agencies, freelancers and connected apps still have access?",
          "Where are passwords stored, and who can recover each account?",
        ],
      },
      { type: "heading", text: "Profiles and content", id: "profiles-content" },
      { type: "subheading", text: "Profiles" },
      {
        type: "list",
        items: [
          "Consistent name, handle and profile image across platforms.",
          "Bio says what you sell and who it's for, with a clear next step.",
          "Links work and go to the right page, with tracking parameters where you measure clicks.",
          "Contact details, category and location are correct.",
          "Instagram highlights or pinned posts are current, not last year's festive offer.",
          "Abandoned or duplicate accounts are identified for closing or redirecting.",
        ],
      },
      { type: "subheading", text: "Content" },
      {
        type: "paragraph",
        text: "Review the last three to six months of posts. Tag each one by pillar or theme, format and purpose, and note quality issues. A simple spreadsheet with one row per post is enough, and it becomes the raw material for the performance section, because you can sort by pillar or format and see which groups consistently do better.",
      },
      {
        type: "list",
        items: [
          "Do you have clear content pillars, or is it a mix of offers and festival greetings?",
          "What's the mix of formats: Reels, carousels, static posts, Stories, long-form video?",
          "Is posting consistent, or does it come in bursts around sales?",
          "Is the visual and written style recognisably yours?",
          "Is each platform getting content made for it, or the same post everywhere?",
          "Which posts would you be embarrassed by today?",
        ],
      },
      {
        type: "paragraph",
        text: "If voice is a recurring problem in the audit, the social media brand voice guide is the next step.",
        links: [{ text: "the social media brand voice guide", href: "/blog/social-media-brand-voice" }],
      },
      { type: "heading", text: "Performance: what to export and over what period", id: "performance" },
      {
        type: "paragraph",
        text: "Native insights are the most reliable source for your own accounts, but they don't keep everything forever, and metric names change. At the time of writing (November 2026), Instagram's help centre describes account insights including views, interactions and follower changes, with date ranges going back up to 90 days. That's a reason to export regularly rather than relying on the app later.",
        links: [
          { text: "Instagram's help centre", href: SRC.igInsights },
          { text: "date ranges going back up to 90 days", href: SRC.igDateRange },
        ],
      },
      {
        type: "paragraph",
        text: "For other platforms at the time of writing: LinkedIn lets Page admins export visitor, content, follower and competitor analytics as a spreadsheet, YouTube Studio lets you export reports from Advanced mode, and Facebook's help centre covers exporting Page insights data.",
        links: [
          { text: "LinkedIn lets Page admins export", href: SRC.liExport },
          { text: "YouTube Studio lets you export reports from Advanced mode", href: SRC.ytAdvanced },
          { text: "Facebook's help centre covers exporting Page insights data", href: SRC.fbPageInsights },
        ],
      },
      {
        type: "table",
        headers: ["What to look at", "Why", "Period"],
        rows: [
          ["Reach or views by post and format", "Shows which content travels beyond followers", "Last 3 to 12 months, as far as each platform allows"],
          ["Interactions, saves and shares by post", "Signals usefulness, not just visibility", "Same"],
          ["Follower change over time", "Context, not a goal on its own", "12 months where available"],
          ["Profile visits and link clicks", "Shows whether interest turns into action", "Same"],
          ["Video watch time or retention, where reported", "Tells you whether people actually watch", "Last 3 to 6 months"],
          ["Website sessions and enquiries from social", "Connects social to business results, if tracking exists", "12 months in your web analytics"],
        ],
      },
      {
        type: "paragraph",
        text: "Compare like with like: the same months year on year where possible, and posts of the same format. Which metrics matter depends on your goal; social media KPIs by business goal covers that choice.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Community, competitors, creators and compliance", id: "community-competitors-creators" },
      { type: "subheading", text: "Community" },
      {
        type: "paragraph",
        text: "Sample 50 to 100 recent comments and DMs. How many got a reply? How long did it take? Was the tone right? Which questions keep recurring, and which complaints were left public and unresolved?",
      },
      { type: "subheading", text: "Competitors" },
      {
        type: "paragraph",
        text: "Pick three to five competitors or brands your customers also follow. Note their platforms, posting rhythm, formats, pillars and the kinds of posts that get a visible response. You're looking for gaps and patterns, not things to copy. For the conversation around them, a quick listening sweep using social listening for brands adds what people actually say.",
        links: [{ text: "social listening for brands", href: "/blog/social-listening-for-brands" }],
      },
      { type: "subheading", text: "Creators and UGC" },
      {
        type: "paragraph",
        text: "Search for creator posts and customer content about your brand. Who already talks about you? Are past creator posts reused on your channels, and do you have the rights to do that? UGC content usage rights explains what to check.",
        links: [{ text: "UGC content usage rights", href: "/blog/ugc-content-usage-rights" }],
      },
      { type: "subheading", text: "Compliance and disclosures" },
      {
        type: "paragraph",
        text: "In India, ASCI's guidelines for influencer advertising in digital media require a clear, upfront disclosure label when there's a material connection between a brand and the person posting, and the advertiser shares responsibility for it. Check past creator collaborations, reposted creator content and giveaways. Also check claims in your own posts, especially health, finance or 'best in India' style claims you'd need to substantiate. Disclosure rules by country covers other markets.",
        links: [
          { text: "ASCI's guidelines for influencer advertising in digital media", href: SRC.asciInfluencer },
          { text: "Disclosure rules by country", href: "/blog/influencer-disclosure-rules-by-country" },
        ],
      },
      { type: "heading", text: "An audit summary template", id: "summary-template" },
      {
        type: "template",
        label: "Social media audit summary",
        text: "SOCIAL MEDIA AUDIT SUMMARY\nBrand: [name]   Audit period: [dates]   Prepared by: [name]   Date: [date]\n\nACCOUNTS IN SCOPE\n[Platform, handle, owner, admin holders, status: active / dormant / close]\n\nSCORES (1 = serious gaps, 5 = strong)\nAccess and ownership: [ ]   Profiles: [ ]   Content: [ ]   Performance tracking: [ ]\nCommunity: [ ]   Competitive position: [ ]   Creators and UGC: [ ]   Compliance: [ ]\n\nTOP 3 STRENGTHS\n1.\n2.\n3.\n\nTOP 5 ISSUES (with evidence)\n1. [Issue] | Evidence: [link, metric or example] | Impact: high / medium / low\n2.\n3.\n4.\n5.\n\nWHAT THE DATA SAYS\nBest-performing formats and pillars: [ ]\nWeakest: [ ]\nData gaps (what we couldn't measure): [ ]\n\nPRIORITIES\nFix now (next 2 weeks): [access, broken links, compliance]\nNext 90 days: [content pillars, platform focus, community process]\nLater: [new platforms, tools, bigger projects]\n\nDECISIONS NEEDED FROM LEADERSHIP\n[ ]",
      },
      { type: "heading", text: "Turning findings into priorities", id: "priorities" },
      {
        type: "paragraph",
        text: "Sort every finding by impact and effort. Access, broken links and compliance gaps go first, whatever their effort, because they carry risk. Next come changes that affect every post, such as pillars, formats and voice. Platform additions and new tools come last, once the basics work. For each priority, name an owner, a date and the evidence that will show it worked, so the next audit can check progress rather than start again.",
      },
      {
        type: "paragraph",
        text: "Keep the priority list short: five or six items the team can actually finish in a quarter. A strategy built on an audit at Kudozz starts the same way, as described in what an agency like Kudozz includes in strategy work.",
        links: [{ text: "what an agency like Kudozz includes in strategy work", href: "/services/social-media-management#strategy" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Auditing only Instagram and forgetting the LinkedIn page, YouTube channel or regional accounts.",
          "Judging performance on follower count alone.",
          "Relying on screenshots instead of exported data.",
          "Comparing yourself with a competitor ten times your size.",
          "Producing a 60-slide audit nobody acts on.",
          "Skipping access checks because 'someone has the login'.",
        ],
      },
      {
        type: "paragraph",
        text: "If you also run creator campaigns, audit those separately with how to audit an influencer marketing programme, since the questions are different.",
        links: [{ text: "how to audit an influencer marketing programme", href: "/blog/influencer-marketing-audit" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start with the account list and access check this week; it takes an afternoon and often uncovers the biggest risk, such as a former employee or an old agency still holding admin rights. Then export whatever insights each platform lets you download, before more history ages out, and save the files somewhere the business controls.",
      },
      {
        type: "paragraph",
        text: "With those two done, the rest of the audit is a structured look at what you already have, and the summary template turns it into a plan your team or agency can work from.",
      },
    ],
    faqs: [
      {
        question: "How long does a social media audit take?",
        answer:
          "For a brand with three or four active accounts, a thorough audit usually takes one to three weeks, mostly because access and data exports take time to gather. The analysis itself is a few days of focused work. Larger brands with regional accounts and several creator programmes need longer.",
      },
      {
        question: "Should we audit ourselves or have an agency do it?",
        answer:
          "An internal audit is cheaper and your team knows the history. An outside audit is more likely to be candid about what isn't working. Many brands do the access and data gathering internally, then get an outside view on content and strategy. If an agency is pitching for your account, be aware its audit may lean towards its own services.",
      },
      {
        question: "What if we don't have historical data?",
        answer:
          "Export whatever each platform still shows, note the gaps, and start exporting monthly from now on. You can still audit profiles, content quality, community handling, competitors and compliance without much data. Treat the first three months after the audit as your baseline.",
      },
      {
        question: "How often should a business audit its social media?",
        answer:
          "A full audit once a year, plus a lighter quarterly check of access, profiles and performance trends, works for most brands. Run a full audit sooner if you're changing agencies, rebranding, launching in a new market or results have dropped without an obvious reason.",
      },
    ],
  },
];

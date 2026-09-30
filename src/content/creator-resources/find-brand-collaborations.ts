import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** Find Brand Collaborations: pitching, email templates, finding brands, first deal. */
export const findBrandCollaborationPosts: BlogPost[] = [
  {
    slug: "how-to-pitch-brands-as-a-creator",
    category: "Creator Resources",
    title: "How to Pitch Brands as a Creator: Complete Guide for Indian Creators",
    seoTitle: "How to Pitch Brands as a Creator in India",
    excerpt:
      "Waiting for brands to find you works for some creators. Pitching works for more. Here's how to research brands, reach the right person, and write a pitch that gets a reply.",
    metaDescription:
      "How to pitch brands as a creator in India: finding and researching brands, reaching the right contact, pitch structure, what stats to include, follow-ups, and templates for email, DM and LinkedIn.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "12 min read",
    tags: ["how to pitch brands", "creator pitch", "influencer pitch email", "brand collaboration", "Indian creators"],
    related: ["brand-collaboration-email-templates", "how-to-find-brands-to-collaborate-with", "creator-media-kit"],
    body: [
      {
        type: "paragraph",
        text: "Most brand collaborations still start with someone reaching out. If you only wait for inbound DMs, you're choosing from whoever happens to find you, which often means gifting offers and brands outside your niche. Pitching lets you choose.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To pitch a brand as a creator: pick brands that genuinely fit your audience, research their recent marketing and creator campaigns, find the person responsible for influencer or social partnerships, and send a short, personalised email (or DM or LinkedIn message) that explains why your audience matters to them, proposes one specific content idea, shares two or three relevant numbers and links your media kit. Follow up once or twice over two to three weeks, then move on.",
      },
      { type: "heading", text: "Why pitch at all?", id: "why-pitch" },
      {
        type: "list",
        items: [
          "You choose brands you actually use, which makes your content more credible.",
          "Brands running creator programmes often have more budget than they have good creators in a given niche.",
          "A thoughtful pitch with an idea stands out against generic \"collab?\" messages brands receive every day.",
          "Pitching builds relationships that turn into repeat work, which is where most sustainable creator income comes from.",
        ],
      },
      { type: "heading", text: "Step 1: Find the right brands", id: "find-brands" },
      {
        type: "paragraph",
        text: "Start with products you already use or would genuinely recommend, then widen to brands that sell to your audience. A 25-year-old fitness creator in Pune has a better pitch for a protein brand shipping across Maharashtra than for a luxury watch. For a repeatable weekly prospecting routine, see how to find brands to collaborate with.",
        links: [{ text: "how to find brands to collaborate with", href: "/blog/how-to-find-brands-to-collaborate-with" }],
      },
      { type: "heading", text: "Step 2: Research the brand", id: "research" },
      {
        type: "list",
        items: [
          "What have they launched in the last three months? New products and launches are when brands look for creators.",
          "Which creators have they worked with? Look at tagged posts and the \"Paid partnership\" label on Instagram. It tells you whether they pay creators and what size creators they choose.",
          "What formats do they use: Reels, YouTube integrations, UGC ads?",
          "Who is their customer: age, city tier, language? Does it overlap with your audience?",
          "Are there seasonal moments coming up (Diwali, wedding season, back-to-school, monsoon) where your content fits?",
        ],
      },
      { type: "heading", text: "Step 3: Identify the right contact", id: "right-contact" },
      {
        type: "paragraph",
        text: "A pitch to a general support inbox rarely reaches the person with the budget. In order of usefulness:",
      },
      {
        type: "list",
        items: [
          "Influencer marketing or creator partnerships manager (often on LinkedIn with those words in the title).",
          "Social media or brand marketing manager at smaller brands, where one person handles everything.",
          "A collaborations or partnerships email listed on the brand's Instagram bio or website.",
          "The brand's agency: many brands run creator campaigns through influencer or PR agencies. If a brand's creator posts are coordinated by an agency, pitching the agency can work better.",
          "Founders at early-stage D2C brands, who often still approve creator spend themselves.",
        ],
      },
      { type: "heading", text: "Step 4: Structure the pitch", id: "pitch-structure" },
      {
        type: "table",
        headers: ["Part", "What it does", "Length"],
        rows: [
          ["Subject line", "Says who you are and why it's relevant, e.g. \"Hindi skincare creator — idea for your new sunscreen\"", "Under 60 characters"],
          ["Opening", "A specific, genuine reason you're writing to this brand", "1 to 2 sentences"],
          ["Who you are", "Niche, platform, audience in one line", "1 sentence"],
          ["Why your audience fits", "The overlap between your audience and their customer", "1 to 2 sentences"],
          ["The idea", "One concrete content concept, not \"let's collaborate\"", "2 to 3 sentences"],
          ["Proof", "2 or 3 numbers and one relevant example link", "1 to 2 lines"],
          ["Ask", "A simple next step: \"Happy to share my media kit and rates if this fits your plans.\"", "1 sentence"],
        ],
      },
      { type: "heading", text: "Which statistics to include", id: "which-stats" },
      {
        type: "paragraph",
        text: "Pick the numbers that match the brand's likely goal. Don't paste your whole dashboard.",
      },
      {
        type: "list",
        items: [
          "Average views per Reel or video over a recent period, stated with the period.",
          "Audience fit: top cities, age band, language, gender split if relevant to the product.",
          "One engagement signal: engagement rate with the formula, or saves and shares on similar content.",
          "A proof point from similar content: \"My last three product explainers averaged 1.8x my usual saves.\"",
        ],
      },
      {
        type: "paragraph",
        text: "Present numbers honestly and consistently. Creator analytics for brand deals explains which metrics each platform actually provides and how to share them.",
        links: [{ text: "Creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" }],
      },
      { type: "heading", text: "Attach or link your media kit", id: "media-kit" },
      {
        type: "paragraph",
        text: "Link to an online media kit or attach a small, dated PDF. Don't make the brand ask for it. If you don't have one yet, the creator media kit guide has a four-page structure you can build in an afternoon. For a brand you really want, a short tailored creator pitch deck can replace the generic media kit.",
        links: [
          { text: "creator media kit guide", href: "/blog/creator-media-kit" },
          { text: "creator pitch deck", href: "/blog/creator-pitch-deck" },
        ],
      },
      { type: "heading", text: "A realistic pitch template", id: "pitch-template" },
      {
        type: "template",
        label: "Cold email pitch",
        text: "Subject: Budget skincare creator (Hindi) — idea for your SPF launch\n\nHi Priya,\n\nI saw [Brand] launched the new gel sunscreen last month — the \"no white cast\" angle is exactly what my audience keeps asking me about.\n\nI'm [Name], I make budget skincare explainers in Hindi on Instagram (@handle). Most of my audience is 18–27, with the largest groups in Lucknow, Jaipur, Delhi and Indore, and many are buying sunscreen for the first time.\n\nIdea: a 45-second Reel in my \"Sunscreen myth or fact\" series, testing [product] on camera for white cast and feel, with an honest verdict at the end.\n\nFor context: my Reels average around 38,000 views over the last 90 days, and my last myth-busting Reel had 2,400 saves. Here's that Reel: [link]\n\nMedia kit: [link]. Happy to share rates if this fits your plans.\n\nThanks,\n[Name]\n[Phone] · [Business email]",
      },
      {
        type: "paragraph",
        text: "The names and numbers above are illustrative. For fifteen more situations, from warm pitches to declining an unfair offer, see our brand collaboration email templates.",
        links: [{ text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" }],
      },
      { type: "heading", text: "Email vs Instagram DM vs LinkedIn", id: "channels" },
      {
        type: "table",
        headers: ["Channel", "Works best for", "Tips"],
        rows: [
          ["Email", "Most brands and agencies; anything involving money or contracts", "Use a business email address. Keep it under 200 words."],
          ["Instagram DM", "Small D2C and local brands where the founder or social lead reads DMs", "Shorter than email. Brand DMs may land in message requests; follow up by email if you can find one."],
          ["LinkedIn", "Finding the influencer or marketing manager; B2B and fintech brands", "Send a short connection note, then a concise message. Don't paste your full pitch into the connection request."],
          ["WhatsApp", "Only once a contact has shared their number for work", "Never cold-message personal numbers you've scraped."],
        ],
      },
      { type: "heading", text: "Follow-ups: how many and when", id: "follow-ups" },
      {
        type: "list",
        items: [
          "First follow-up: 5 to 7 working days after the pitch, in the same thread, one or two lines.",
          "Second follow-up: about a week later, ideally adding something new (a relevant new post, a seasonal angle).",
          "Then stop. Two follow-ups is enough. Note the brand and try again in a few months with a different idea.",
        ],
      },
      { type: "heading", text: "Nano and micro creators", id: "nano-micro" },
      {
        type: "paragraph",
        text: "Smaller creators do get paid work, especially when their audience is specific. Lead with fit and engagement rather than reach, pitch brands of a similar size (young D2C brands, local businesses, regional brands), and be open to starting with a smaller paid deliverable or UGC. Be cautious with gifting-only offers: they can be a reasonable start, but they shouldn't become a permanent substitute for paid work.",
      },
      { type: "heading", text: "Regional and Hindi or regional-language creators", id: "regional-creators" },
      {
        type: "paragraph",
        text: "Many Indian brands are actively trying to grow beyond English-speaking metro audiences. If you create in Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam or another language, make that your headline, not a footnote. Show the city and state mix of your audience, and pitch brands expanding into your region or already advertising in your language. You can write the pitch in English or in the language you share with the brand contact, whichever is clearer.",
      },
      {
        type: "paragraph",
        text: "Brands think about regional creators in their own terms too. Our brand-side guide to regional influencer marketing in India explains what they look for.",
        links: [{ text: "regional influencer marketing in India", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "Mistakes creators make", id: "mistakes" },
      {
        type: "list",
        items: [
          "Mass-sending the same message to fifty brands with only the name changed.",
          "Asking \"what's your budget?\" before saying anything about what you'd make.",
          "Leading with follower count and nothing about audience fit.",
          "Pitching brands whose product you'd never actually use.",
          "Long pitches with your whole life story; brand teams read on phones.",
          "Following up daily, or on multiple channels at once.",
          "Offering free work by default in the first message.",
        ],
      },
      {
        type: "paragraph",
        text: "If you want a sense of what brands expect when they contact creators, our brand-side outreach strategy guide is useful reading from the other side of the inbox.",
        links: [{ text: "brand-side outreach strategy guide", href: "/blog/influencer-outreach-strategy" }],
      },
    ],
    faqs: [
      {
        question: "How do I pitch a brand as a small creator?",
        answer:
          "Lead with audience fit and engagement rather than follower count, pitch brands of a similar size, propose one specific content idea, include two or three honest numbers and link a short media kit.",
      },
      {
        question: "Should I pitch brands by email or Instagram DM?",
        answer:
          "Email is best for most brands and agencies, especially once money is involved. Instagram DMs work for small D2C and local brands where the founder or social lead reads messages. LinkedIn helps you find the right person.",
      },
      {
        question: "How many times should I follow up with a brand?",
        answer: "Once after 5 to 7 working days, and once more about a week later with something new. After two follow-ups, move on and revisit in a few months with a different idea.",
      },
      {
        question: "Should I mention my rates in the first pitch?",
        answer: "Usually not. Offer to share rates if the idea fits. Once you know the deliverables, usage and timeline, you can quote accurately.",
      },
    ],
  },
  {
    slug: "brand-collaboration-email-templates",
    category: "Creator Resources",
    title: "Brand Collaboration Email Templates for Creators: 15 Templates That Actually Work",
    seoTitle: "Brand Collaboration Email Templates for Creators (15)",
    excerpt:
      "Fifteen copy-ready email templates for creators, from a first cold pitch to politely declining an unfair offer, with notes on why each one works and how to adapt it.",
    metaDescription:
      "15 brand collaboration email templates for creators: cold and warm pitches, paid, UGC, YouTube sponsorship, affiliate, launch and seasonal pitches, follow-ups, negotiation and declining offers.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "14 min read",
    tags: ["brand collaboration email", "influencer email template", "creator pitch email", "sponsorship email", "follow-up email"],
    related: ["how-to-pitch-brands-as-a-creator", "how-to-negotiate-brand-deals-as-a-creator", "how-to-find-brands-to-collaborate-with"],
    body: [
      {
        type: "paragraph",
        text: "These templates are starting points, not scripts. Every one of them works better when you change the first line to something only you could write about that brand. If you send the same text to fifty brands, it will read like it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A brand collaboration email that gets replies is short (under 200 words), personalised in the first line, proposes one specific idea, includes two or three relevant numbers and a media kit link, and ends with an easy next step. Use a clear subject line that names your niche and the brand or product. Follow up once or twice, then stop.",
      },
      {
        type: "paragraph",
        text: "For the strategy behind these emails (choosing brands, finding contacts, what numbers to include), read how to pitch brands as a creator first.",
        links: [{ text: "how to pitch brands as a creator", href: "/blog/how-to-pitch-brands-as-a-creator" }],
      },
      { type: "heading", text: "Before you use any template", id: "before-you-start" },
      {
        type: "list",
        items: [
          "Replace every [bracket]. A leftover [Brand Name] ends the conversation.",
          "Use a business email address and a signature with your handle, phone and media kit link.",
          "All names and numbers below are illustrative. Use your own real, current figures.",
          "Send individually. Don't BCC brands or use mail-merge blasts.",
        ],
      },
      { type: "heading", text: "Pitch templates", id: "pitch-templates" },
      { type: "subheading", text: "1. First-time cold pitch" },
      {
        type: "template",
        text: "Subject: [Niche] creator — idea for [product/launch]\n\nHi [Name],\n\nI've been using [product] for [time] and [one specific, genuine observation].\n\nI'm [Name], I create [niche] content on [platform] (@handle) for [audience description]. [One line on audience fit, e.g. \"Most of my audience is 22–30, in Bengaluru, Hyderabad and Chennai.\"]\n\nIdea: [one concrete content concept in 1–2 sentences].\n\nMy [format] average around [X] views over the last [period]. Here's a similar piece: [link]\n\nMedia kit: [link]. Happy to share rates if this is a fit.\n\nThanks,\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: the first line proves you know the product, the idea gives the brand something to say yes to, and the ask is small.",
      },
      { type: "subheading", text: "2. Warm pitch (you've already interacted)" },
      {
        type: "template",
        text: "Subject: Following up from [event / your comment / their repost]\n\nHi [Name],\n\nThanks again for [resharing my Reel / chatting at event]. It was great to see [specific detail].\n\nSince my audience responded well to [that content], I'd love to explore something planned together. One idea: [concept].\n\nI've attached my media kit. Would a quick call next week work?\n\nBest,\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it builds on existing goodwill and references proof the brand has already seen.",
      },
      { type: "subheading", text: "3. Product collaboration (gifting you'd genuinely accept)" },
      {
        type: "template",
        text: "Subject: Honest review of [product] for my [niche] audience\n\nHi [Name],\n\nMy audience often asks me about [problem the product solves]. I'd like to test [product] for a few weeks and share an honest review in a Reel and Stories.\n\nIf you're open to sending a unit, I'll share my plan before posting. The review will be clearly disclosed as a gifted product, and my opinion will be my own.\n\nMedia kit: [link]\n\nThanks,\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it's clear about what the brand gets and what it doesn't (a guaranteed positive review). Only offer gifted content when the product itself is genuinely worth it to you.",
      },
      { type: "subheading", text: "4. Paid collaboration" },
      {
        type: "template",
        text: "Subject: Paid Reel partnership — [Brand] x [Your handle]\n\nHi [Name],\n\nI'd like to propose a paid partnership around [product/campaign].\n\nProposed deliverables:\n• 1 Instagram Reel (concept: [idea])\n• 1 Story set with link sticker on posting day\n\nTimeline: live within [X] days of receiving the product and brief.\nInvestment: ₹[amount] + applicable taxes, including 30 days of organic reposting with credit. Paid usage can be added.\n\nRecent results: [one proof point + link]\n\nWould this work for your plans this quarter?\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it's a ready-to-approve proposal with clear scope, which is easier for a manager to sign off than an open question.",
      },
      { type: "subheading", text: "5. UGC collaboration" },
      {
        type: "template",
        text: "Subject: UGC videos for [Brand]'s ads — samples inside\n\nHi [Name],\n\nI noticed [Brand] is running creator-style video ads on Instagram. I make UGC videos for brands' own channels and ads, focused on [category].\n\nI can deliver [3] videos with [2] hook variations each, formatted for Reels and Stories.\n\nSamples: [portfolio link]\n\nRates depend on usage duration and platforms. Happy to quote once I know how you'd use them.\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it separates UGC from influencer posting and flags usage rights early, which is where UGC pricing actually lives.",
      },
      { type: "subheading", text: "6. Instagram collaboration (Collab post or Reel)" },
      {
        type: "template",
        text: "Subject: Instagram Collab Reel idea — [Brand] x [handle]\n\nHi [Name],\n\nIdea: a co-authored Collab Reel on [topic], so it appears on both our profiles.\n\nFormat: [e.g. a 30-second 'three ways to style' Reel featuring [product]]\n\nMy Reels average [X] views; audience is mostly [city/age/language].\n\nWe'd use Instagram's paid partnership label alongside the Collab. Media kit: [link]\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it names a specific Instagram format and shows you already know disclosure is part of the job.",
      },
      { type: "subheading", text: "7. YouTube sponsorship" },
      {
        type: "template",
        text: "Subject: Sponsorship slot in my next [topic] video\n\nHi [Name],\n\nI'm planning a video on [topic] for [date]. [Product] fits naturally into [specific segment].\n\nProposal: a 60–90 second integration, link and code in the description, pinned comment for 30 days.\n\nMy long-form videos averaged [X] views in the first 30 days over my last [N] uploads. Audience: [country/city split, age].\n\nThe video will use YouTube's paid promotion disclosure. Media kit and rates: [link]\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it's tied to a real upcoming video, and uses a 30-day view average rather than lifetime views, which brands trust more.",
      },
      { type: "subheading", text: "8. Long-term partnership" },
      {
        type: "template",
        text: "Subject: 3-month partnership idea after our [campaign] results\n\nHi [Name],\n\n[Campaign] performed well for us: [result]. My audience is still asking about [product].\n\nI'd like to propose a 3-month partnership: [1 Reel + 2 Story sets per month], with category exclusivity for the period.\n\nA longer partnership lets the product appear naturally in my routine instead of a one-off mention. I've attached a proposal with a monthly fee.\n\nCould we discuss this before your next quarter's planning?\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it's anchored on results and gives the brand a reason (consistency, trust) beyond \"I want more work.\"",
      },
      { type: "subheading", text: "9. Affiliate partnership" },
      {
        type: "template",
        text: "Subject: Affiliate partnership for [product]\n\nHi [Name],\n\nI already recommend [product] to my audience, and people regularly ask where to buy it.\n\nWould you consider an affiliate arrangement: a unique code or link with [X]% commission, tracked monthly? I'd feature it in [content plan].\n\nIf you also run paid collaborations, I'd love to discuss a small fixed fee plus commission for a launch Reel.\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it's honest that affiliate income depends on sales, and opens the door to a hybrid fee.",
      },
      { type: "subheading", text: "10. Product launch pitch" },
      {
        type: "template",
        text: "Subject: Launch-week content for [new product]\n\nHi [Name],\n\nCongratulations on announcing [product]. Launch week is when my audience is most likely to try something new, so I'd love to be part of it.\n\nIdea: an unboxing-and-first-impressions Reel on launch day, followed by a 7-day update Story set.\n\nTimeline: I can deliver a draft within [X] days of receiving the product.\n\nMedia kit: [link]\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it's timely, shows you understand launch timelines, and proposes a sequence rather than a single post.",
      },
      { type: "subheading", text: "11. Seasonal campaign pitch" },
      {
        type: "template",
        text: "Subject: Diwali gifting content — [Brand]\n\nHi [Name],\n\nMy Diwali gifting guides get some of my highest saves every year (last year's had [X] saves). I'm planning this year's guide for [date range].\n\nI'd like to feature [product] as [e.g. the under-₹1,500 gifting pick], with a link sticker and code.\n\nPlanning starts early, so I wanted to reach out now. Media kit: [link]\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it shows a track record with the season and gives the brand enough lead time. Pitch seasonal ideas four to eight weeks ahead.",
      },
      { type: "heading", text: "Follow-up templates", id: "follow-up-templates" },
      { type: "subheading", text: "12. Follow-up after a conversation" },
      {
        type: "template",
        text: "Subject: Re: [original subject]\n\nHi [Name],\n\nThanks for the call today. To confirm what we discussed:\n• Deliverables: [list]\n• Timeline: [dates]\n• Fee: ₹[amount] + taxes, [payment terms]\n• Usage: [scope and duration]\n\nIf that's right, I'll wait for the brief and agreement. Let me know if I've missed anything.\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it turns a verbal conversation into a written record, which protects both sides if details are disputed later.",
      },
      { type: "subheading", text: "13. No-response follow-up" },
      {
        type: "template",
        text: "Subject: Re: [original subject]\n\nHi [Name],\n\nJust bringing this back to the top of your inbox. Since I wrote, [something new: e.g. \"my latest Reel on [topic] reached [X] views\"].\n\nIf the timing isn't right, no problem. I'd be glad to reconnect for [upcoming season/launch].\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it adds something new and gives the brand an easy, polite way to say \"not now.\" Send it 5 to 7 working days after the pitch, and at most once more after that.",
      },
      { type: "heading", text: "Negotiation and decline templates", id: "negotiation-templates" },
      { type: "subheading", text: "14. Negotiation response" },
      {
        type: "template",
        text: "Subject: Re: Proposal for [campaign]\n\nHi [Name],\n\nThanks for the offer. I'd love to make this work.\n\nFor 1 Reel + 3 Story sets + 90 days of paid usage, my fee would be ₹[amount]. If the budget is fixed at ₹[their offer], I could do:\n• Option A: 1 Reel + 1 Story set, with 30 days of organic usage, or\n• Option B: the full package with paid usage reduced to 30 days.\n\nHappy to go with whichever works better for your team.\n\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it adjusts scope rather than just dropping the price, which protects your rate for future deals. See how to negotiate brand deals as a creator for more examples.",
        links: [{ text: "how to negotiate brand deals as a creator", href: "/blog/how-to-negotiate-brand-deals-as-a-creator" }],
      },
      { type: "subheading", text: "15. Declining an unfair offer professionally" },
      {
        type: "template",
        text: "Subject: Re: [campaign]\n\nHi [Name],\n\nThank you for thinking of me for this. Unfortunately I can't take it on as proposed. [One honest reason, e.g. \"perpetual paid usage across all media isn't something I can include at this fee\" / \"the exclusivity period would block my existing partnerships\"].\n\nIf the scope changes, I'd be happy to look at it again, and I'd genuinely like to work with [Brand] in future.\n\nBest,\n[Name]",
      },
      {
        type: "paragraph",
        text: "Why it works: it's clear, gives one reason without lecturing, and keeps the door open. Brand teams move around; the manager you decline politely today may have a better budget at their next brand.",
      },
      { type: "heading", text: "Subject lines that tend to get opened", id: "subject-lines" },
      {
        type: "list",
        items: [
          "[Niche] creator — idea for [product]",
          "[Your handle] x [Brand]: [format] concept",
          "Honest review of [product] for [audience]",
          "[Season] content — [Brand]",
          "Re: [original subject] (for follow-ups, keep the thread)",
        ],
      },
      {
        type: "paragraph",
        text: "Send these from a business-only address, ideally on your own domain, with filters that keep brand replies visible; creator business email covers the setup.",
        links: [{ text: "creator business email", href: "/blog/creator-business-email" }],
      },
      { type: "heading", text: "What not to send", id: "what-not-to-send" },
      {
        type: "list",
        items: [
          "\"Hi, collab?\" with no context.",
          "Mass emails with visible CC lists or obvious mail-merge errors.",
          "Attachments larger than a few MB, or files that need access requests.",
          "Threats of negative reviews if a brand doesn't respond.",
          "Promises of results you can't control, like guaranteed sales.",
        ],
      },
      {
        type: "paragraph",
        text: "If you draft emails with AI, AI for brand collaborations explains how to keep them specific and in your own voice.",
        links: [{ text: "AI for brand collaborations", href: "/blog/ai-for-creator-brand-collaborations" }],
      },
    ],
    faqs: [
      {
        question: "How do I write an email to a brand for collaboration?",
        answer:
          "Open with a specific reason you're contacting that brand, introduce your niche and audience in one line, propose one concrete content idea, share two or three relevant numbers and a media kit link, and end with a simple next step. Keep it under 200 words.",
      },
      {
        question: "What subject line should I use for a brand collaboration email?",
        answer: "Name your niche and the brand or product, for example \"Hindi skincare creator — idea for your SPF launch\". Keep it under about 60 characters.",
      },
      {
        question: "How long should I wait before following up with a brand?",
        answer: "Five to seven working days for the first follow-up, and about a week for a second. After that, move on and try again with a new idea in a few months.",
      },
      {
        question: "How do I decline a brand deal politely?",
        answer: "Thank them, give one honest reason (scope, rights, exclusivity or fit), say what would need to change, and leave the door open for future work.",
      },
    ],
  },
  {
    slug: "how-to-find-brands-to-collaborate-with",
    category: "Creator Resources",
    title: "How to Find Brands to Collaborate With as a Creator",
    seoTitle: "How to Find Brands to Collaborate With as a Creator",
    excerpt:
      "Where to find brands that actually pay creators, how to tell which ones are a fit, and a weekly prospecting routine you can run in a couple of hours.",
    metaDescription:
      "How to find brands to collaborate with as a creator in India: brands already working with creators, competitor campaigns, Instagram, YouTube, LinkedIn, marketplaces, agencies and a weekly workflow.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["find brands to collaborate with", "brand prospecting", "creator marketplace", "D2C brands", "brand deals India"],
    related: ["how-to-pitch-brands-as-a-creator", "brand-collaboration-email-templates", "first-brand-collaboration-india"],
    body: [
      {
        type: "paragraph",
        text: "The hardest part of pitching isn't writing the email. It's knowing who to write to. The good news: brands that already work with creators leave visible traces, and once you know where to look, a steady list of prospects is a weekly habit rather than a guessing game.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "The easiest brands to find and convert are those already paying creators in your niche. Find them through Instagram's paid partnership labels, sponsored segments in YouTube videos in your category, creators similar to you, product launches, D2C and regional brands, creator marketplaces (including Instagram's own), and influencer and PR agencies. Track them in a simple spreadsheet and set aside time each week to research, pitch and follow up.",
      },
      { type: "heading", text: "1. Brands already working with creators", id: "brands-already-working" },
      {
        type: "paragraph",
        text: "A brand that has paid creators before has a budget line, an approval process and someone whose job includes replying to you. Look for:",
      },
      {
        type: "list",
        items: [
          "\"Paid partnership with [brand]\" labels on Instagram posts and Reels in your niche.",
          "YouTube videos marked \"Includes paid promotion\" and sponsored segments in your category.",
          "Brands reposting creator content on their own profiles, or running creator-style ads (check Meta's Ad Library for active ads).",
          "Discount codes attached to creators' names in captions and bios.",
        ],
      },
      { type: "heading", text: "2. Competitor and peer creator campaigns", id: "peer-campaigns" },
      {
        type: "paragraph",
        text: "Make a list of 10 to 20 creators slightly bigger than you in the same niche. Every brand that sponsors them is a prospect for you, because the brand has already decided your kind of audience is valuable. Note which formats the brand bought and roughly when, so your pitch can reference their pattern.",
      },
      { type: "heading", text: "3. Instagram research", id: "instagram" },
      {
        type: "list",
        items: [
          "Search niche hashtags and keywords, then check which brands are tagged in top posts.",
          "Look at who follows and comments on your own content; brands and their social managers often do.",
          "Check the tagged tab on brand profiles to see which creators they work with and at what size.",
          "Instagram's creator marketplace lets eligible creators in supported countries, including India, be discovered by brands and receive partnership messages. Keep your professional account details and interests up to date so you appear in relevant searches.",
        ],
      },
      {
        type: "paragraph",
        text: "Meta announced the creator marketplace's expansion to India in 2024; see Meta's announcement for the original details, and check your professional dashboard for what's currently available to your account, as features and eligibility change.",
        links: [{ text: "Meta's announcement", href: SOURCES.instagramCreatorMarketplace }],
      },
      { type: "heading", text: "4. YouTube research", id: "youtube" },
      {
        type: "list",
        items: [
          "Search your niche plus \"review\" or \"sponsored\" and note recurring sponsors.",
          "Check description boxes for sponsor links and codes.",
          "Note which brands sponsor videos similar in size and format to yours.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube also has its own marketplace. YouTube Creator Partnerships, which brought BrandConnect into one platform, is available to eligible creators in India who are in the YouTube Partner Program, at least 18 and without active Community Guidelines strikes. It lets brands find you, and gives you a media kit, enquiry management and rate preferences in YouTube Studio. Check YouTube's help page for current eligibility.",
        links: [{ text: "YouTube's help page", href: SOURCES.youtubeCreatorPartnerships }],
      },
      { type: "heading", text: "5. LinkedIn", id: "linkedin" },
      {
        type: "paragraph",
        text: "Search for job titles like \"influencer marketing manager\", \"creator partnerships\" or \"brand manager\" plus the brand name. LinkedIn is also where brands post about launches and campaigns, and where B2B, fintech and SaaS brands look for credible creators.",
      },
      { type: "heading", text: "6. Creator marketplaces and platforms", id: "marketplaces" },
      {
        type: "paragraph",
        text: "Several Indian and global platforms list campaigns creators can apply for. Quality varies. Use them as one source among many, read their terms (especially on fees and payment timelines), and never pay to be \"selected\" for a campaign. More on red flags in how to spot fake brand collaboration offers.",
        links: [{ text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      { type: "heading", text: "7. Influencer and PR agencies", id: "agencies" },
      {
        type: "paragraph",
        text: "Many brands run creator campaigns through agencies, and agencies are always looking for reliable creators in specific niches and cities. Agencies that maintain a creator network usually have an application process. Kudozz, for example, runs campaigns for brands and has a creator application on the For Creators page. PR agencies also run product seeding and launch events for their clients, which can be a starting point for paid work.",
        links: [{ text: "For Creators page", href: "/for-creators" }],
      },
      { type: "heading", text: "8. D2C, local and regional brands", id: "d2c-local-regional" },
      {
        type: "list",
        items: [
          "D2C brands: often founder-led, creator-first in their marketing, and quicker to say yes than large corporates.",
          "Local businesses: cafes, salons, gyms, boutiques and clinics in your city. Good for first paid deals and for building a portfolio.",
          "Regional brands: brands strong in your state or language market, particularly FMCG, education, fashion and food.",
        ],
      },
      { type: "heading", text: "9. Product launches and events", id: "launches-events" },
      {
        type: "paragraph",
        text: "Launch announcements on LinkedIn, startup news, crowdfunding pages and brand newsletters tell you who will need creators soon. Industry events, pop-ups and brand launches in your city are where you can meet marketing teams in person.",
      },
      { type: "heading", text: "10. Creator communities", id: "communities" },
      {
        type: "paragraph",
        text: "Creator WhatsApp groups, Discord servers and meetups share leads and warn each other about bad actors. Contribute as well as take, and verify any opportunity yourself before acting on it.",
      },
      { type: "heading", text: "How to qualify a brand before pitching", id: "qualify" },
      {
        type: "table",
        headers: ["Question", "Good sign", "Caution sign"],
        rows: [
          ["Does their customer overlap with my audience?", "Same age, cities, language, interests", "You'd need to explain why it fits"],
          ["Do they pay creators?", "Paid partnership labels, creator ads, agency involvement", "Only gifting, only \"exposure\""],
          ["Would I use the product?", "Yes, already do", "You'd be promoting something you don't trust"],
          ["Is the brand legitimate?", "Real website, reviews, GST details, active socials", "No verifiable presence, pressure tactics"],
          ["Is the timing right?", "Launch, season or campaign coming up", "Just finished a big campaign with your peers"],
        ],
      },
      { type: "heading", text: "A weekly brand-prospecting workflow", id: "weekly-workflow" },
      {
        type: "image",
        src: "/blog/creator-resources/weekly-prospecting-workflow.svg",
        alt: "Weekly brand prospecting cycle for creators: Monday research 10 brands, Tuesday qualify and find contacts, Wednesday send 3 to 5 personalised pitches, Thursday follow up, Friday update tracker",
        caption: "Two to three hours a week, split into short blocks, is enough to keep a steady pipeline.",
        width: 1200,
        height: 675,
      },
      {
        type: "template",
        label: "Weekly routine (about 2–3 hours in total)",
        text: "MONDAY — RESEARCH (45 min)\nFind 10 brands via paid partnership labels, peer creators' sponsors, YouTube sponsors and launch news. Add them to your tracker.\n\nTUESDAY — QUALIFY + CONTACTS (30 min)\nCheck fit, legitimacy and timing. Find the right person on LinkedIn or the brand's collaboration email.\n\nWEDNESDAY — PITCH (45 min)\nSend 3–5 personalised pitches, each with one specific idea.\n\nTHURSDAY — FOLLOW UP (15 min)\nFollow up on pitches sent 5–7 working days ago. Close out anything past two follow-ups.\n\nFRIDAY — REVIEW (15 min)\nUpdate the tracker. Which pitches got replies? Which niches, formats or subject lines worked?",
      },
      {
        type: "template",
        label: "Simple tracker columns",
        text: "Brand | Category | Why it fits | Evidence they pay creators | Contact name + role | Channel (email/DM/LinkedIn) | Date pitched | Follow-up 1 | Follow-up 2 | Status | Notes",
      },
      {
        type: "paragraph",
        text: "Once you have a list, turn to how to pitch brands as a creator and the brand collaboration email templates to write the messages.",
        links: [
          { text: "how to pitch brands as a creator", href: "/blog/how-to-pitch-brands-as-a-creator" },
          { text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" },
        ],
      },
      {
        type: "paragraph",
        text: "On Instagram, brands also search for creators through Meta's tool; see Instagram Creator Marketplace. On YouTube, see YouTube Creator Partnerships.",
        links: [
          { text: "Instagram Creator Marketplace", href: "/blog/instagram-creator-marketplace" },
          { text: "YouTube Creator Partnerships", href: "/blog/youtube-creator-partnerships-india" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find brands that pay creators?",
        answer:
          "Look for brands already running paid creator content: Instagram paid partnership labels, YouTube videos marked as paid promotion, creator-style ads in Meta's Ad Library, and the sponsors of creators slightly bigger than you in your niche.",
      },
      {
        question: "Is Instagram's creator marketplace available in India?",
        answer:
          "Meta expanded Instagram's creator marketplace to India in 2024. Availability and features can change, so check your professional dashboard for what your account can access.",
      },
      {
        question: "How many brands should I pitch each week?",
        answer: "Quality matters more than volume. Three to five well-researched, personalised pitches a week, plus follow-ups, is sustainable and usually more effective than mass outreach.",
      },
      {
        question: "Should I pay to join a creator platform to get brand deals?",
        answer: "Be cautious. Legitimate campaign opportunities don't require you to pay to be selected. Read any platform's fee and payment terms carefully before signing up.",
      },
    ],
  },
  {
    slug: "first-brand-collaboration-india",
    category: "Creator Resources",
    title: "How to Get Your First Brand Collaboration as a Creator in India",
    seoTitle: "How to Get Your First Brand Collaboration in India",
    excerpt:
      "A practical path to your first brand deal: getting your niche and samples ready, choosing realistic brands, pitching, deciding between gifting and paid work, and avoiding the scams that target new creators.",
    metaDescription:
      "How to get your first brand collaboration as a creator in India: niche, sample content, media kit, finding brands, pitching, gifting vs paid, UGC as an entry point, first negotiation and avoiding scams.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["first brand collaboration", "first brand deal", "nano influencer", "micro influencer India", "gifted vs paid collaboration"],
    related: ["how-to-pitch-brands-as-a-creator", "creator-portfolio", "creator-scams-fake-brand-collaborations"],
    body: [
      {
        type: "paragraph",
        text: "There's no fixed follower count or number of days after which brand deals arrive. Some creators land a paid collaboration at a few thousand followers because their audience is specific and engaged. Others with far bigger audiences wait longer because nobody can tell what they're about. What you can control is how ready you are when the right brand looks.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To get your first brand collaboration in India: pick a clear niche, post consistently in it, create a few sample pieces that show how you'd feature a product, build a short media kit and portfolio, then pitch small and mid-sized brands whose customers match your audience (D2C, local and regional brands are often the most receptive). Consider UGC and small paid deliverables as entry points, be selective about gifting-only offers, and verify every offer before sharing personal or payment details.",
      },
      { type: "heading", text: "Step 1: Choose a niche a brand can buy", id: "niche" },
      {
        type: "paragraph",
        text: "Brands buy access to a specific audience. \"Lifestyle\" is hard to buy; \"budget home decor for renters in Bengaluru\" is easy. Your niche should connect a topic you can sustain with an audience brands want to reach. You can widen later. Creator niche selection has a scoring framework and narrowing examples.",
        links: [{ text: "Creator niche selection", href: "/blog/creator-niche-selection" }],
      },
      {
        type: "list",
        items: [
          "Can you name 20 brands that sell to this audience?",
          "Can you make at least three posts a week on it for a year without running out of ideas?",
          "Is there a language or regional angle that makes you different?",
        ],
      },
      { type: "heading", text: "Step 2: Build sample content", id: "sample-content" },
      {
        type: "paragraph",
        text: "Before any brand pays you, show them what they'd get. Pick products you already own and make the content you'd make for that brand: a review, a tutorial, a comparison. These spec pieces become your first portfolio. Don't tag them in a way that suggests a sponsorship that didn't happen.",
      },
      { type: "heading", text: "Step 3: Create a media kit and portfolio", id: "media-kit-portfolio" },
      {
        type: "paragraph",
        text: "A two-page media kit and a simple portfolio page are enough to start. The creator media kit and creator portfolio guides cover both, including what to show when you have no brand work.",
        links: [
          { text: "creator media kit", href: "/blog/creator-media-kit" },
          { text: "creator portfolio", href: "/blog/creator-portfolio" },
        ],
      },
      { type: "heading", text: "Step 4: Find brands that fit your size", id: "find-brands" },
      {
        type: "list",
        items: [
          "Young D2C brands that already work with nano and micro creators.",
          "Local businesses in your city: cafes, salons, gyms, boutiques, coaching centres.",
          "Regional brands in your language market.",
          "Brands sponsoring creators slightly bigger than you.",
        ],
      },
      {
        type: "paragraph",
        text: "The how to find brands to collaborate with guide has a weekly routine for building this list.",
        links: [{ text: "how to find brands to collaborate with", href: "/blog/how-to-find-brands-to-collaborate-with" }],
      },
      { type: "heading", text: "Step 5: Pitch with an idea", id: "pitch" },
      {
        type: "paragraph",
        text: "New creators often send \"I'd love to collaborate\" and nothing else. Send a specific idea instead, with honest numbers and your media kit. See how to pitch brands as a creator and the brand collaboration email templates.",
        links: [
          { text: "how to pitch brands as a creator", href: "/blog/how-to-pitch-brands-as-a-creator" },
          { text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" },
        ],
      },
      { type: "heading", text: "Gifting vs paid collaborations", id: "gifting-vs-paid" },
      {
        type: "table",
        headers: ["", "Gifted (barter) collaboration", "Paid collaboration"],
        rows: [
          ["What you get", "Product or service", "Fee (sometimes plus product)"],
          ["When it makes sense", "The product is genuinely valuable to you, the ask is light, and it builds a relevant portfolio piece", "Any time the brand wants specific deliverables, deadlines, approvals or usage rights"],
          ["Watch out for", "Gifting that comes with paid-level demands (scripts, multiple posts, ad usage)", "Unclear payment terms; get them in writing"],
          ["Disclosure", "Still required: gifts are a material connection under ASCI guidelines", "Required"],
          ["Tax", "Gifted products can have tax implications in India, especially above certain values. Ask a tax professional.", "Income is taxable; see our invoicing guide"],
        ],
      },
      {
        type: "paragraph",
        text: "A reasonable rule: if a brand wants to control what you say, when you post it, or use it in ads, that's work, and work should be paid. The brand-side view of the same choice is in Instagram gifting vs paid collaborations.",
        links: [{ text: "Instagram gifting vs paid collaborations", href: "/blog/instagram-gifting-vs-paid-collaboration" }],
      },
      { type: "heading", text: "UGC as an entry point", id: "ugc-entry" },
      {
        type: "paragraph",
        text: "UGC (user-generated content) creators make videos for brands to post on their own channels or run as ads. Because the brand isn't buying your audience, follower count matters much less; what matters is whether your videos are good. For many new creators, UGC is the fastest route to first paid work. Start with how to build a UGC creator portfolio.",
        links: [{ text: "how to build a UGC creator portfolio", href: "/blog/ugc-creator-portfolio" }],
      },
      { type: "heading", text: "Nano and micro creators: what's realistic", id: "nano-micro" },
      {
        type: "paragraph",
        text: "Nano creators (roughly under 10,000 followers) and micro creators (roughly 10,000 to 100,000) are widely used by Indian brands, particularly for product seeding, regional campaigns and UGC. Expect first deals to be smaller in scope. What moves you up is a track record: delivering on time, following the brief, disclosing properly, and sharing honest results.",
      },
      { type: "heading", text: "Negotiating your first deal", id: "first-negotiation" },
      {
        type: "list",
        items: [
          "Ask what the brand wants before quoting: deliverables, platforms, timeline, usage.",
          "Quote a price you'd be happy with for that scope, with usage rights separate.",
          "Get the key terms in writing, even if it's an email summary.",
          "Agree on payment timing before you post. Many creators ask for part payment upfront on first deals with new brands.",
          "Don't agree to exclusivity or perpetual ad usage for a small fee.",
        ],
      },
      {
        type: "paragraph",
        text: "For more detail, read how to negotiate brand deals as a creator and run through the creator brand deal checklist before you say yes.",
        links: [
          { text: "how to negotiate brand deals as a creator", href: "/blog/how-to-negotiate-brand-deals-as-a-creator" },
          { text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" },
        ],
      },
      { type: "heading", text: "Avoiding scams aimed at new creators", id: "scams" },
      {
        type: "paragraph",
        text: "New creators are the main target of fake collaboration offers: requests to pay a \"registration fee\", courier charges for a \"free\" product, links that steal your Instagram login, or \"task\" schemes on WhatsApp. A legitimate brand or agency doesn't ask you to pay to work with them. Read how to spot fake brand collaboration offers before replying to anything that feels off.",
        links: [{ text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      {
        type: "paragraph",
        text: "If you're still building your audience, start with how to grow as a creator from 0 followers.",
        links: [{ text: "how to grow as a creator from 0 followers", href: "/blog/how-to-grow-as-a-creator-from-zero" }],
      },
      { type: "heading", text: "Your first-collaboration checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "A niche you can describe in one sentence",
          "At least 3 to 5 spec pieces showing how you'd feature a product",
          "A two-page media kit with dated, honest numbers",
          "A portfolio link",
          "A list of 20 to 30 realistic brands",
          "Three pitch drafts with specific ideas",
          "A clear position on gifting vs paid",
          "A business email address",
          "A habit of verifying every offer before acting on it",
        ],
      },
      {
        type: "paragraph",
        text: "Once the first deal lands, the creator brand deals guide walks through every stage that follows, from brief and proposal to payment and repeat partnerships.",
        links: [{ text: "creator brand deals guide", href: "/blog/creator-brand-deals" }],
      },
      {
        type: "paragraph",
        text: "Many first collaborations start with a gifted product. Creator product seeding explains whether you owe a post, how to disclose it and how to turn it into paid work.",
        links: [{ text: "Creator product seeding", href: "/blog/creator-product-seeding" }],
      },
    ],
    faqs: [
      {
        question: "How many followers do I need for my first brand deal in India?",
        answer:
          "There's no fixed number. Brands in India work with nano creators under 10,000 followers, especially for seeding, local and regional campaigns and UGC. Audience specificity and engagement often matter more than size.",
      },
      {
        question: "Should I accept gifted collaborations?",
        answer:
          "Accept them selectively: when the product is genuinely valuable to you, the ask is light, and it builds a relevant portfolio piece. If a brand wants scripts, deadlines, multiple posts or ad usage, that's paid work. Gifted content still needs disclosure.",
      },
      {
        question: "Is UGC a good way to get started?",
        answer:
          "Often, yes. UGC creators are hired for their content rather than their audience, so follower count matters less. A strong sample portfolio can lead to paid work sooner.",
      },
      {
        question: "How long does it take to get a first brand collaboration?",
        answer:
          "It varies widely and nobody can promise a timeline. Being clearly positioned, having samples and a media kit ready, and pitching consistently improves your chances.",
      },
    ],
  },
];

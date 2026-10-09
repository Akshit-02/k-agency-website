import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

export const REL_PUBLISHED = "2026-10-08";
export const REL_REVIEWED = "October 2026";

/**
 * Creator outreach and negotiation cluster (1191, 1194–1196, 1198, 1200). The outreach-strategy, outreach-email,
 * negotiation and pricing owners were expanded in place; see docs/creator-relationships-1190-1209-audit.md.
 */
export const relationshipsOutreachPosts: BlogPost[] = [
  {
    slug: "how-to-contact-influencers",
    category: "Influencer Marketing",
    title: "How to Find and Contact Influencers for Brand Collaborations",
    seoTitle: "How to Find and Contact Influencers for Collaborations",
    excerpt:
      "Where to find the right creators, how to check them quickly, how to find and verify real contact details (and spot impersonators), what to prepare before reaching out and how to make a professional first approach.",
    metaDescription:
      "How brands find and contact influencers: where to look, quick checks, finding and verifying contact details, what to prepare and how to make the first approach.",
    author: AUTHOR,
    publishedAt: REL_PUBLISHED,
    lastReviewed: REL_REVIEWED,
    readingTime: "7 min read",
    tags: ["how to contact influencers", "find and contact influencers", "influencer contact details", "contact creators for collaboration", "reach out to influencers"],
    related: ["influencer-outreach-strategy", "influencer-outreach-email", "personalized-influencer-outreach"],
    hero: {
      src: "/blog/brand-guides/how-to-contact-influencers.svg",
      alt: "From finding a creator to a verified contact and a first message, with checks at each step",
    },
    body: [
      {
        type: "paragraph",
        text: "Finding a creator you like takes a few minutes. Reaching them properly is harder than it looks. The email in the bio may belong to a manager who handles twenty creators. The 'management' account that replies to your DM may not be authorised at all. And a message sent before you know what you're offering usually turns into five back-and-forth messages that end in silence.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find and contact influencers, search for creators whose content and audience match your customer (platform search, creator marketplaces, discovery tools, brand mentions and referrals), run quick checks on recent content, views and comments, then find their business contact: the email or contact button on their profile, their manager or agency, or the platform's partnership inbox. Verify the contact through the creator's own profile before sharing details. Prepare your offer first (product, deliverables, timeline, budget range), then send a short, specific first message through the channel the creator prefers.",
      },
      { type: "heading", text: "Step 1: Find creators worth contacting", id: "find" },
      {
        type: "table",
        headers: ["Source", "Good for", "Watch out for"],
        rows: [
          ["Instagram and YouTube search", "Seeing real content in a niche or language", "Popularity-ranked results"],
          ["Creator marketplaces (Instagram, YouTube Creator Partnerships)", "Creators open to brand work, with platform data", "Only creators who've opted in"],
          ["Discovery tools", "Filtering many creators by language, region, size", "Estimated audience data"],
          ["People who already mention your brand", "Warm contacts with real interest", "Critics as well as fans"],
          ["Referrals from creators you've worked with", "Regional and niche creators tools miss", "Still need checks"],
          ["Competitors' creators", "Understanding the category", "Exclusivity and credibility conflicts"],
        ],
      },
      {
        type: "paragraph",
        text: "Influencer search tools covers search methods by niche, audience and location; brand mention monitoring covers finding creators who already talk about you.",
        links: [
          { text: "Influencer search tools", href: "/blog/influencer-search-tools" },
          { text: "brand mention monitoring", href: "/blog/brand-mention-monitoring" },
        ],
      },
      { type: "heading", text: "Step 2: Check before you contact", id: "check" },
      {
        type: "paragraph",
        text: "A ten-minute check saves wasted outreach and awkward withdrawals later. You're not doing full vetting yet; you're confirming the creator is worth a conversation:",
      },
      {
        type: "list",
        items: [
          "Watch five to ten recent posts. Is the content genuinely in your space, and would your product look natural there?",
          "Look at typical views on recent posts, not followers.",
          "Read some comments. Are they specific, in the language you need, from real-looking accounts?",
          "Check recent sponsored posts: which brands, how often, how they disclosed, how the audience reacted.",
          "Note anything that would make you hesitate: recent controversy, a direct competitor partnership, content you couldn't be associated with.",
        ],
      },
      {
        type: "paragraph",
        text: "Full vetting (audience insights, authenticity checks, brand safety) comes before anything is agreed. How to vet influencers covers it.",
        links: [{ text: "How to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "Step 3: Find the right contact", id: "contact" },
      {
        type: "table",
        headers: ["Contact route", "Where to find it", "Best for"],
        rows: [
          ["Business email", "Profile contact button or bio; YouTube channel 'About' / business enquiries", "Most established creators"],
          ["Manager or talent agency", "Bio ('for collabs: …'), contact button, media kit", "Mid-tier and larger creators; many regional creators too"],
          ["Platform partnership inbox", "Instagram creator marketplace; YouTube Creator Partnerships", "Creators who've joined these programmes"],
          ["Instagram DM", "Direct message", "Nano and micro creators without an email"],
          ["WhatsApp", "Only once a creator or manager shares the number for work", "Coordination after first contact, not cold outreach"],
        ],
      },
      {
        type: "paragraph",
        text: "Platform-specific detail is in how to contact Instagram influencers and how to contact YouTube creators.",
        links: [
          { text: "how to contact Instagram influencers", href: "/blog/how-to-contact-instagram-influencers" },
          { text: "how to contact YouTube creators", href: "/blog/how-to-contact-youtube-creators" },
        ],
      },
      { type: "heading", text: "Step 4: Verify the contact", id: "verify" },
      {
        type: "paragraph",
        text: "Impersonation runs both ways: creators get messages from fake brands, and brands get replies from people falsely claiming to manage a creator. Before you share a brief, product details or payment information:",
      },
      {
        type: "list",
        items: [
          "Confirm the email or manager name appears on the creator's own verified profile, channel or media kit.",
          "Be cautious of free email addresses claiming to represent a large agency; check the agency's own website.",
          "If a manager contacts you first, confirm with the creator through their official account.",
          "Pay only to the creator or their documented agency, against an invoice, never to a personal account that appeared mid-conversation.",
          "Send from your own brand-domain email, so creators can verify you too.",
        ],
      },
      {
        type: "paragraph",
        text: "Creators are understandably wary of fake brand offers, which is one reason legitimate outreach sometimes goes unanswered. Clear identity signals (brand-domain email, a named person, a link to your site and official account) help them trust you. Influencer response rate covers this in more detail.",
        links: [{ text: "Influencer response rate", href: "/blog/influencer-response-rate" }],
      },
      { type: "heading", text: "Step 5: Prepare before you write", id: "prepare" },
      {
        type: "template",
        label: "Outreach prep card (one per creator)",
        text: "Creator: [name, handle, platform, language]\nWhy them: [one specific reason: a post, an audience, a topic]\nOffer type: paid / gifted / affiliate / ambassador conversation\nWhat we'd ask for: [deliverable, format, platform]\nTiming: [go-live window]\nBudget range: [internal; whether you'll share it upfront]\nRights needed: [organic only / paid ads / duration]\nAnything they should know first: [exclusivity, claims limits, shipping]\nContact route: [email / manager / platform inbox / DM]",
      },
      {
        type: "paragraph",
        text: "If you can't fill this card, you aren't ready to contact the creator. Vague first messages ('We'd love to collaborate! What are your rates?') are the most common reason for slow, circular conversations.",
      },
      { type: "heading", text: "Step 6: Make the first approach", id: "approach" },
      {
        type: "list",
        items: [
          "Keep it short: who you are, why them specifically, what you're offering, what you'd like them to do next.",
          "Say clearly whether the work is paid or gifted.",
          "Use their name and refer to something specific they made.",
          "Write in their content language where you can, especially for regional creators.",
          "Give one easy next step: share a rate card, pick a call slot, or reply yes/no.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer outreach email covers message structure and examples; personalized influencer outreach covers doing this well for many creators at once.",
        links: [
          { text: "Influencer outreach email", href: "/blog/influencer-outreach-email" },
          { text: "personalized influencer outreach", href: "/blog/personalized-influencer-outreach" },
        ],
      },
      { type: "heading", text: "Contacting creators in India: practical notes", id: "india" },
      {
        type: "list",
        items: [
          "Many mid-tier creators, and some regional ones, work through managers. Address the manager, but personalise for the creator.",
          "Smaller regional creators often prefer Instagram DMs and may reply faster to a message in their language.",
          "Response times can slow sharply around major festivals and wedding season, when creators are busy with existing commitments.",
          "Mention practical details early for physical products: whether you deliver to their city and how.",
          "Be explicit about GST invoicing and payment timelines once terms are discussed; professional creators will ask.",
        ],
      },
      { type: "heading", text: "Working with talent managers", id: "managers" },
      {
        type: "paragraph",
        text: "When a creator has a manager, the manager handles commercial terms and scheduling; the creator usually leads on creative ideas. A few habits make this smoother:",
      },
      {
        type: "list",
        items: [
          "Address the manager by name and mention the specific creator (and why them) in the first line; managers often represent many creators.",
          "Send everything a manager needs to quote in one message: deliverables, platform, timeline, usage rights, exclusivity.",
          "Don't go around the manager on fees or terms. Creative conversations with the creator are fine once the manager agrees.",
          "If a manager represents several creators who fit, ask about them together, but personalise for each.",
        ],
      },
      { type: "heading", text: "What a professional first approach looks like (hypothetical)", id: "example" },
      {
        type: "template",
        label: "Hypothetical first email to a manager",
        text: "Subject: [Brand] x [Creator]: paid YouTube integration, November\n\nHi [manager name],\n\nI'm [name], partnerships lead at [brand] (we make [product], sold across India). I'm writing about [creator]. Her recent video comparing budget air purifiers for Delhi winters is exactly the question our customers ask us.\n\nWe'd like to discuss a paid 60–90 second integration in a November video, organic usage only. Could you share her rates and availability? Happy to send a short proposal with dates and details.\n\nThanks,\n[name] · [brand website] · [official Instagram]",
      },
      {
        type: "paragraph",
        text: "What makes it work: the manager knows immediately which creator, why, what's being asked, that it's paid and what usage is needed, and can verify the sender.",
      },
      { type: "heading", text: "A quick pre-contact checklist", id: "checklist" },
      {
        type: "template",
        label: "Before you press send",
        text: "□ Creator checked (content, views, comments, recent sponsorships)\n□ Contact route from their own profile or media kit\n□ Offer type decided (paid / gifted / affiliate)\n□ Deliverables, timing and rights roughly defined\n□ Budget range agreed internally\n□ Message in the right language and tone\n□ Not already contacted by a colleague",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Contacting creators before deciding what you're offering.",
          "Messaging the personal profile when the bio says 'for collabs contact…'.",
          "Sharing confidential product or payment details with an unverified 'manager'.",
          "Using WhatsApp numbers found online for cold outreach.",
          "Sending the same message to a creator's email, DM and manager at once.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding and contacting influencers well comes down to preparation: find creators through several routes, check them quickly, use and verify their business contact, decide your offer before you write and make a short, specific first approach. For the full process from shortlist to agreement and beyond, see influencer outreach strategy.",
        links: [{ text: "influencer outreach strategy", href: "/blog/influencer-outreach-strategy" }],
      },
    ],
    faqs: [
      {
        question: "How do I contact an influencer for a collaboration?",
        answer:
          "Use their business contact: the email or contact button on their profile, their manager or agency, or the platform's partnership inbox. For smaller creators without an email, a direct message works. Verify the contact through their own profile and send a short, specific message with your offer.",
      },
      {
        question: "How can I tell if someone really manages an influencer?",
        answer:
          "Check that the manager's name, agency or email appears on the creator's verified profile, channel or media kit, or confirm with the creator through their official account before sharing details or payments.",
      },
      {
        question: "Should I DM or email influencers?",
        answer:
          "Email or the creator's manager for established creators; DM or the platform's partnership inbox for smaller creators without a business email. Use one channel at a time.",
      },
    ],
  },
  {
    slug: "personalized-influencer-outreach",
    category: "Influencer Marketing",
    title: "How to Personalize Influencer Outreach at Scale Without Sounding Automated",
    seoTitle: "Personalized Influencer Outreach at Scale: A Method",
    excerpt:
      "A method for personalising outreach to dozens or hundreds of creators: three personalisation levels, a two-minute research card, segment templates, the specific-line rule, how to use AI without sounding like it, and a human review step.",
    metaDescription:
      "How to personalize influencer outreach at scale: personalization levels, a research card, segment templates, using AI carefully and human review before sending.",
    author: AUTHOR,
    publishedAt: REL_PUBLISHED,
    lastReviewed: REL_REVIEWED,
    readingTime: "6 min read",
    tags: ["personalized influencer outreach", "personalize influencer outreach at scale", "influencer outreach personalization", "non-generic influencer outreach", "creator outreach templates"],
    related: ["influencer-outreach-email", "influencer-response-rate", "influencer-outreach-automation"],
    hero: {
      src: "/blog/brand-guides/personalized-influencer-outreach.svg",
      alt: "Segment template plus a creator-specific line plus a human check produces outreach that reads as personal",
    },
    body: [
      {
        type: "paragraph",
        text: "Creators can spot a mail merge in one line. 'Hi Priya, we love your amazing content!' tells them nothing except that you have a template with a name field. The opposite extreme, writing every message from scratch, doesn't work when a regional seeding programme needs 150 creators. The answer is a system where most of the message is reused and the part that matters is genuinely specific.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Personalise influencer outreach at scale by splitting each message into a reusable part (who you are, the offer, terms, next step) written per creator segment, and a specific part (one or two sentences about the creator's actual content and why they fit) written from a short research card. Group creators by language, tier and content type so templates feel relevant, keep the offer details accurate for each segment, and have a person check every message before it goes. AI can help draft the specific line from your notes, but it shouldn't invent observations.",
      },
      { type: "heading", text: "Three levels of personalisation", id: "levels" },
      {
        type: "table",
        headers: ["Level", "What changes per creator", "Effort", "Use for"],
        rows: [
          ["1. Segment", "Template chosen by language, tier and content type; name and handle", "Low", "Large seeding programmes; opt-in marketplace invitations"],
          ["2. Specific line", "Segment template plus one or two lines about a real post and why they fit", "Moderate (2–3 minutes each)", "Most paid and gifted outreach"],
          ["3. Bespoke", "Written individually after watching more content", "High", "Priority creators, ambassadors, high-value deals"],
        ],
      },
      {
        type: "paragraph",
        text: "Most campaigns use a mix: bespoke messages for the top tier, specific-line messages for the rest of the shortlist, segment messages only for large opt-in programmes. Influencer ranking explains how to decide which creators are the top tier.",
        links: [{ text: "Influencer ranking", href: "/blog/influencer-ranking" }],
      },
      { type: "heading", text: "The two-minute research card", id: "research-card" },
      {
        type: "template",
        label: "Research card (fill while watching their content)",
        text: "Recent post to reference: [link + one-line description]\nWhat they're good at: [e.g. 'honest budget comparisons', 'clear Tamil explainers']\nWhy they fit this campaign: [audience, topic, format, region]\nLanguage to write in: [ ]\nAnything to avoid: [competitor deal, sensitive topic, they've said they don't do X]\nPersonal detail? Only work-related. Not family, location or anything private.",
      },
      {
        type: "paragraph",
        text: "The card is the only part that requires attention to the individual creator. Filling it while watching recent content keeps the specific line honest.",
      },
      { type: "heading", text: "The specific-line rule", id: "specific-line" },
      {
        type: "paragraph",
        text: "A specific line is something only this creator could receive. A useful test: if you swapped in another creator's name, would the sentence still be true? If yes, it's not specific.",
      },
      {
        type: "table",
        headers: ["Generic", "Specific"],
        rows: [
          ["We love your content!", "Your monsoon commute video, where you tested three raincoats on a scooter, is exactly the problem our jacket is designed for."],
          ["You'd be perfect for our brand.", "Most of your comments are from Pune and Nashik, which is where we're launching first."],
          ["Your audience is so engaged!", "People in your comments keep asking for affordable skincare that works in humid weather; that's what we make."],
        ],
      },
      { type: "heading", text: "Build templates by segment, not one for everyone", id: "segments" },
      {
        type: "paragraph",
        text: "Segment creators before writing templates. The offer, tone and language should change across segments even if the structure stays similar:",
      },
      {
        type: "table",
        headers: ["Segment", "What changes in the template"],
        rows: [
          ["Language (Hindi, Tamil, Marathi, English…)", "Language of the message; examples and references"],
          ["Tier (nano, micro, mid, macro)", "Formality; whether you address a manager; how terms are presented"],
          ["Offer type (paid, gifted, affiliate, ambassador)", "What you're asking and what's in it for them"],
          ["Content type (reviewer, educator, entertainer, UGC)", "What you'd like them to make and how much creative freedom"],
          ["Relationship (new, past partner, fan)", "Warmth and context; past partners shouldn't get a cold template"],
        ],
      },
      {
        type: "paragraph",
        text: "Message structures and examples for each offer type are in influencer outreach email.",
        links: [{ text: "influencer outreach email", href: "/blog/influencer-outreach-email" }],
      },
      { type: "heading", text: "Using AI without sounding like AI", id: "ai" },
      {
        type: "list",
        items: [
          "Give AI your research card, not just a profile link, so it works from what you actually observed.",
          "Ask for one or two plain sentences, not a paragraph of compliments.",
          "Delete adjectives like 'amazing', 'incredible' and 'stunning'. Creators read them as automation.",
          "Never let AI invent details about a creator's content. If it says something you didn't see, remove it.",
          "Translations for regional creators should be checked by someone who reads the language.",
        ],
      },
      {
        type: "paragraph",
        text: "AI influencer campaign management covers wider uses of AI in campaign communication.",
        links: [{ text: "AI influencer campaign management", href: "/blog/ai-influencer-campaign-management" }],
      },
      { type: "heading", text: "Human review before sending", id: "review" },
      {
        type: "template",
        label: "Pre-send check (10 seconds per message)",
        text: "□ Name, handle and platform correct\n□ Specific line refers to a real post and is accurate\n□ Offer type clear (paid / gifted / affiliate)\n□ Right language and tone for the segment\n□ No leftover template text ([brackets], wrong product)\n□ Not already contacted by a colleague or on another channel",
      },
      {
        type: "paragraph",
        text: "The last check matters more as volume grows. A creator who gets two different messages from the same brand on the same day concludes nobody is paying attention. An influencer marketing CRM prevents this.",
        links: [{ text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" }],
      },
      { type: "heading", text: "How long does it take?", id: "time" },
      {
        type: "paragraph",
        text: "With research cards and segment templates, a specific-line message usually takes a few minutes per creator, most of it watching content. That's slower than a mail merge and much faster than writing from scratch. The time is well spent: the research also tells you whether the creator is a good fit before you invest in a conversation.",
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a snack brand plans outreach to 90 creators across Hindi, Gujarati and Marathi. It writes six segment templates (three languages × paid or gifted), fills research cards for all 90 over two days, writes bespoke messages for the 12 priority creators and specific-line messages for the rest. A teammate reviews each batch before sending. Every creator gets a message in their language that mentions something they made and states clearly whether the offer is paid."
      },
      { type: "heading", text: "Segment templates in practice", id: "segment-examples" },
      {
        type: "table",
        headers: ["Segment", "Opening approach", "Offer framing"],
        rows: [
          ["Regional nano creators (gifted)", "In their language; reference a specific post; warm and simple", "No obligation; explain disclosure simply"],
          ["Micro creators (paid)", "Specific post and audience reason", "Clear deliverable, timing and 'paid' upfront"],
          ["Managed mid-tier creators", "Address manager; name the creator and why", "Everything needed to quote in one message"],
          ["Expert creators (doctors, CAs, trainers)", "Reference their expertise and a specific explanation they gave", "Respect professional rules; no scripted claims"],
          ["Past partners", "Mention the last collaboration and its result", "A specific next opportunity"],
        ],
      },
      { type: "heading", text: "Personalisation without crossing lines", id: "boundaries" },
      {
        type: "list",
        items: [
          "Reference their work, not their private life.",
          "Don't mention family members, health or location details they haven't linked to their content.",
          "Don't reference old controversies or comments.",
          "Don't imply a relationship you don't have ('as a long-time fan…') unless it's true.",
        ],
      },
      { type: "heading", text: "Measuring whether personalisation helps", id: "measure" },
      {
        type: "paragraph",
        text: "Tag each message with its personalisation level (segment, specific line, bespoke) and compare reply and positive-reply rates over a few campaigns. Influencer response rate covers what else to track.",
        links: [
          { text: "Influencer response rate", href: "/blog/influencer-response-rate" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Personalising the greeting and nothing else.",
          "Over-flattering. One accurate sentence beats three compliments.",
          "Using personal details (family, location, life events) creators haven't connected to their work.",
          "One template for every language and tier.",
          "Letting AI write observations nobody verified.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Personalisation at scale is a system: segment templates for what can be reused, a quick research card for what can't, one honest specific line per creator and a human check before sending. It respects creators' time and makes replies more likely. For the logistics of sending and following up at volume, see influencer outreach automation.",
        links: [{ text: "influencer outreach automation", href: "/blog/influencer-outreach-automation" }],
      },
    ],
    faqs: [
      {
        question: "How do you personalize influencer outreach?",
        answer:
          "Reference a specific recent post, explain in one or two sentences why the creator fits this campaign (audience, topic, region or format), write in their content language and state the offer clearly. Use segment templates for the rest of the message.",
      },
      {
        question: "Can AI personalize influencer outreach?",
        answer:
          "AI can draft a specific line from your own research notes and translate templates, but it shouldn't invent observations. A person should check every message before it's sent.",
      },
      {
        question: "How much personalization is enough?",
        answer:
          "For most outreach, one or two accurate sentences that only this creator could receive, plus the right language and offer details. Priority creators deserve a fully bespoke message.",
      },
    ],
  },
  {
    slug: "influencer-response-rate",
    category: "Influencer Marketing",
    title: "Influencer Response Rate: How Brands Can Get More Creators to Reply",
    seoTitle: "Influencer Response Rate: Get More Creators to Reply",
    excerpt:
      "Why creators don't reply to brand outreach and the factors brands can control: fit, relevance, credibility, offer clarity, channel, subject line, timing and follow-up, with a diagnostic table for low reply rates.",
    metaDescription:
      "Why creators don't reply and how to improve influencer response rates: fit, relevance, credibility, clear offers, channel, subject lines, timing and follow-up.",
    author: AUTHOR,
    publishedAt: REL_PUBLISHED,
    lastReviewed: REL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer response rate", "why influencers don't reply", "get influencers to respond", "creator reply rate", "improve influencer outreach replies"],
    related: ["personalized-influencer-outreach", "influencer-follow-up", "influencer-outreach-email"],
    hero: {
      src: "/blog/brand-guides/influencer-response-rate.svg",
      alt: "Factors brands control that affect creator replies: fit, relevance, credibility, clear offer, right channel and respectful follow-up",
    },
    body: [
      {
        type: "paragraph",
        text: "When outreach gets few replies, brands often blame creators for being busy or unprofessional. Look at it from the creator's side instead. A popular creator may receive many brand messages a week. Some are scams, many are vague, plenty ask for free work, and few say clearly what's on offer. Ignoring messages that need several rounds of questions to decode is a reasonable response to that inbox.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creators reply more when the brand is clearly relevant to their content and audience, the message proves someone looked at their work, the sender is credibly a real brand, the offer is clear (paid or gifted, what's asked, when), the message arrives through the channel they actually use, and follow-up is brief and respectful. There's no universal 'good' response rate to aim for; compare against your own previous outreach and improve the factors below one at a time.",
      },
      { type: "heading", text: "Why creators don't reply", id: "why-not" },
      {
        type: "table",
        headers: ["Reason", "What the creator sees", "What the brand can change"],
        rows: [
          ["Poor fit", "A product that has nothing to do with their content", "Better shortlisting; skip creators who don't fit"],
          ["No sign of research", "A message that could have gone to anyone", "One specific line about their work"],
          ["Unclear offer", "'Let's collaborate!' with no details", "Say paid/gifted, deliverable, timeline"],
          ["Low credibility", "Free email address, no website, unusual requests", "Brand-domain email, named sender, official links"],
          ["Wrong channel", "Email to an inbox they don't check, or DM when they use a manager", "Use the contact route in their bio"],
          ["Bad timing", "A busy season, or a deadline in three days", "Approach weeks ahead; avoid peak festival periods"],
          ["Unattractive terms", "Free work, unclear rights, payment 'after results'", "Fair offer; clear terms"],
          ["Message lost", "Buried in a full inbox", "One or two short follow-ups"],
        ],
      },
      { type: "heading", text: "The factors you control", id: "factors" },
      { type: "subheading", text: "Fit and relevance" },
      {
        type: "paragraph",
        text: "The single biggest lever is contacting the right creators in the first place. A creator who regularly makes content where your product belongs will read your message differently from one who has never covered your category. Better shortlisting usually raises replies more than better wording.",
        links: [],
      },
      { type: "subheading", text: "Evidence of research" },
      {
        type: "paragraph",
        text: "One accurate sentence about a specific post shows the message isn't spam. Personalized influencer outreach explains how to do this for many creators without writing everything from scratch.",
        links: [{ text: "Personalized influencer outreach", href: "/blog/personalized-influencer-outreach" }],
      },
      { type: "subheading", text: "Credibility" },
      {
        type: "list",
        items: [
          "Send from a brand-domain email with a real person's name and role.",
          "Link to your website and official social account.",
          "Mention any relevant context: where you sell, recent launches, creators you've worked with (only if true and shareable).",
          "Avoid requests that look like scams: upfront fees, asking for login details, pushing to move to WhatsApp immediately.",
        ],
      },
      {
        type: "paragraph",
        text: "Creators are warned about fake brand collaborations for good reason; creator scams and fake brand collaborations describes what they look out for.",
        links: [{ text: "creator scams and fake brand collaborations", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      { type: "subheading", text: "Offer clarity" },
      {
        type: "paragraph",
        text: "State in the first message whether the work is paid, gifted or commission-based, what you're asking for and when. If you have a budget range and are comfortable sharing it, doing so saves both sides time. A creator who knows what's on offer can reply quickly, even if the answer is no.",
      },
      { type: "subheading", text: "Subject line" },
      {
        type: "paragraph",
        text: "Make it specific and honest: '[Brand] x [Creator]: paid Reel for our October launch' tells the creator what the email is before they open it. Clickbait or vague subjects ('Exciting opportunity!!') look like spam.",
      },
      { type: "subheading", text: "Channel and timing" },
      {
        type: "paragraph",
        text: "Use the contact route the creator lists. Approach several weeks before your go-live date, not days. Expect slower replies around major festivals and wedding season, when many creators are fully booked.",
      },
      { type: "subheading", text: "Follow-up" },
      {
        type: "paragraph",
        text: "Many replies come after a follow-up, simply because the first message was missed. One or two short, polite follow-ups, each adding something new, are reasonable. Influencer follow-up covers timing and wording.",
        links: [{ text: "Influencer follow-up", href: "/blog/influencer-follow-up" }],
      },
      { type: "heading", text: "Measuring your response rate properly", id: "measuring" },
      {
        type: "table",
        headers: ["Measure", "Why"],
        rows: [
          ["Reply rate by segment (language, tier, offer type)", "Shows where messaging works and where it doesn't"],
          ["Positive reply rate", "A fast 'no' is better than silence, but you need yeses"],
          ["Reply rate by channel", "Shows which routes reach creators"],
          ["Replies after first message vs after follow-up", "Shows whether follow-ups are worth it"],
          ["Time to reply", "Helps plan lead times"],
        ],
      },
      {
        type: "paragraph",
        text: "We deliberately don't quote an industry-average response rate. Published figures vary widely, often come from tool vendors with unclear methods, and depend on brand recognition, offer and creator tier. Your own trend over time is a better measure.",
      },
      { type: "heading", text: "Diagnose a low reply rate", id: "diagnose" },
      {
        type: "table",
        headers: ["Pattern", "Likely cause", "Try"],
        rows: [
          ["Low replies everywhere", "Offer, credibility or fit", "Clarify the offer; check sender identity; tighten shortlist"],
          ["Low replies from larger creators only", "Not reaching managers; offer below expectations", "Contact managers; review budget"],
          ["Low replies in one language segment", "Template not working in that language", "Native-language rewrite"],
          ["Replies mostly negative on gifted offers", "Creators want paid work", "Paid or affiliate offer, or smaller creators"],
          ["Replies only after follow-up", "First message missed or unclear", "Better subject line; shorter first message"],
        ],
      },
      { type: "heading", text: "Hypothetical example: diagnosing a slow campaign", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a fintech app contacts 80 personal-finance creators by email and gets a handful of replies. A review finds the emails came from a generic 'marketing@' address, didn't say whether the work was paid, and went to the personal email of creators whose bios listed managers. The brand rewrites the message from a named lead, states 'paid collaboration' in the subject line, routes managed creators through their managers and adds a line about each creator's recent explainer. The second round gets more and faster replies, and more of them include rates. None of the changes involved more volume.",
      },
      { type: "heading", text: "Credibility signals creators look for", id: "credibility" },
      {
        type: "table",
        headers: ["Signal", "Why it matters"],
        rows: [
          ["Brand-domain email and a named sender", "Distinguishes you from scams and mass senders"],
          ["Links to website and official account", "Lets creators check you in seconds"],
          ["Clear, realistic offer", "Scams often promise too much or ask for money"],
          ["No requests for passwords, fees or personal documents upfront", "These are common scam patterns"],
          ["Consistent details across channels", "Mismatched names or handles raise doubts"],
        ],
      },
      { type: "heading", text: "Regional and smaller creators", id: "regional" },
      {
        type: "list",
        items: [
          "A message in the creator's language often gets a warmer reply than a polished English email.",
          "Smaller creators may check DMs far more than email.",
          "They may be unsure about terms; inviting questions helps them reply.",
          "Being clear that it's paid (if it is) matters even more; many receive frequent unpaid requests.",
        ],
      },
      {
        type: "paragraph",
        text: "Micro influencers in India covers working with smaller creators more broadly.",
        links: [
          { text: "Micro influencers in India", href: "/blog/micro-influencers-india" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Sending more messages instead of better-targeted ones.",
          "Hiding whether the work is paid.",
          "Messaging from personal or free email accounts.",
          "Following up too often or on several channels at once.",
          "Comparing your rate with a vendor's headline statistic.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Response rates improve when outreach respects creators' time: right creators, specific messages, a credible sender, a clear offer, the right channel and patient follow-up. Track replies by segment, fix one factor at a time and compare against your own history. Once creators do reply, how to negotiate with influencers covers what comes next.",
        links: [{ text: "how to negotiate with influencers", href: "/blog/how-to-negotiate-with-influencers" }],
      },
    ],
    faqs: [
      {
        question: "Why don't influencers reply to brand emails?",
        answer:
          "Common reasons are poor fit, generic messages, unclear offers, doubts about whether the brand is real, the wrong contact channel, bad timing and unattractive terms. Many messages are also simply missed in busy inboxes.",
      },
      {
        question: "What is a good influencer outreach response rate?",
        answer:
          "There's no reliable universal benchmark; it depends on brand recognition, offer, creator tier and channel. Track your own reply rate by segment and improve it over time.",
      },
      {
        question: "Does mentioning the budget improve influencer replies?",
        answer:
          "Stating clearly whether the work is paid, and sharing a range if you're comfortable, usually makes it easier for creators to respond quickly because they don't need several messages to understand the offer.",
      },
    ],
  },
  {
    slug: "influencer-follow-up",
    category: "Influencer Marketing",
    title: "Influencer Follow-Up Strategy: When and How Brands Should Follow Up With Creators",
    seoTitle: "Influencer Follow-Up: When and How to Follow Up",
    excerpt:
      "A follow-up system for every stage of a creator relationship: no reply to first outreach, a 'maybe', after a rate card, after a call, during the campaign and after it ends, with timing, wording, when to stop and how to stay respectful.",
    author: AUTHOR,
    publishedAt: REL_PUBLISHED,
    lastReviewed: REL_REVIEWED,
    readingTime: "7 min read",
    tags: ["influencer follow-up", "how to follow up with influencers", "influencer follow up email", "creator follow-up", "influencer partnership follow-up"],
    related: ["influencer-response-rate", "repeat-influencer-collaborations", "influencer-collaboration-rejection"],
    hero: {
      src: "/blog/brand-guides/influencer-follow-up.svg",
      alt: "Follow-up points across a creator relationship: after outreach, after a maybe, after a call, during the campaign and after it ends",
    },
    metaDescription: "How and when brands should follow up with influencers: after no reply, a maybe, a rate card or a call, during and after campaigns, with templates and stop rules.",
    body: [
      {
        type: "paragraph",
        text: "Most follow-up advice stops at 'send a reminder after a few days'. In practice, brands need to follow up at many points: when a creator hasn't replied, when they've said 'maybe later', when a rate card arrives and nobody responds for a week, after a promising call, when a draft is late, and after a campaign that went well. Each needs a different tone. Getting them right is how one conversation becomes a working relationship.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Follow up once or twice after a first message gets no reply, a few days to a week apart, each time adding something new and keeping it short; then stop. After a creator replies, the brand should do most of the following up: respond to rate cards and questions within a couple of working days, send a written summary after any call, confirm decisions promptly, and follow up after the campaign with results and thanks. Stop when a creator declines, asks you to, or doesn't answer two follow-ups, and record it so nobody contacts them again for the same thing.",
      },
      { type: "heading", text: "Follow-ups by stage", id: "by-stage" },
      {
        type: "table",
        headers: ["Stage", "When", "Purpose", "Stop when"],
        rows: [
          ["No reply to first outreach", "After about 4–7 days; second after another week", "Resurface the message with something new", "Two follow-ups without reply"],
          ["Creator said 'maybe' or 'not now'", "At the time they suggested, or next relevant campaign", "Reopen with a specific opportunity", "They say no or don't respond"],
          ["Rate card received", "Within 1–2 working days", "Acknowledge; confirm interest or next step", "n/a: the brand owes the reply"],
          ["After a call", "Same or next day", "Written summary of what was agreed", "n/a"],
          ["Terms sent, no response", "After 3–5 days", "Check if anything is unclear", "After one follow-up, ask directly if they'd prefer to pass"],
          ["During the campaign (drafts, go-live)", "Before deadlines, not after", "Keep timelines on track", "n/a"],
          ["After the campaign", "After results are in", "Share results, thank, discuss what's next", "n/a"],
        ],
      },
      { type: "heading", text: "Following up when there's no reply", id: "no-reply" },
      {
        type: "list",
        items: [
          "Keep it shorter than the first message.",
          "Add one new piece of information: dates confirmed, budget approved, product ready, a reason the timing works.",
          "Reply in the same thread so context is visible.",
          "Use the same channel; don't jump from email to DM to manager at once.",
          "Make declining easy: 'If it's not a fit, a quick no is completely fine.'",
        ],
      },
      {
        type: "template",
        label: "Follow-up after no reply",
        text: "Hi [name], following up on my note about [campaign] for [month]. We've now confirmed [new detail: budget / dates / product ready to ship]. If it's not right for you this time, a quick no is completely fine. Otherwise, happy to share the brief.",
      },
      {
        type: "template",
        label: "Final follow-up",
        text: "Hi [name], last note from me on [campaign]. We're finalising creators on [date]. If you're interested, just reply here; if not, no problem at all and thanks for your time.",
      },
      {
        type: "paragraph",
        text: "Two follow-ups is a sensible default. Beyond that, persistence starts to feel like pressure, and it costs goodwill you may want for a future campaign. Automated sequences should stop the moment a creator replies anywhere; influencer outreach automation covers stop rules.",
        links: [{ text: "influencer outreach automation", href: "/blog/influencer-outreach-automation" }],
      },
      { type: "heading", text: "Following up after a 'maybe' or 'not now'", id: "maybe" },
      {
        type: "paragraph",
        text: "A creator who says 'not this month' or 'maybe for a future launch' has given you permission to return, not to chase. Note when and why in your records, then come back with a specific opportunity at the right time:",
      },
      {
        type: "template",
        label: "Reopening after 'not now'",
        text: "Hi [name], when we spoke in [month] you mentioned [reason: busy with festival campaigns / wanted to try the product first]. We're planning [new campaign] for [month] and thought of you because [specific reason]. Would you like to see the brief?",
      },
      { type: "heading", text: "The brand's follow-ups once a creator replies", id: "brand-owes" },
      {
        type: "paragraph",
        text: "Once a creator engages, the follow-up burden shifts to the brand. Slow responses from the brand side are one of the most common reasons promising conversations stall. Good practice:",
      },
      {
        type: "list",
        items: [
          "Acknowledge rate cards and questions within a couple of working days, even if the answer is 'we're reviewing and will reply by Friday'.",
          "After every call, send a short written summary: deliverables, dates, fee, rights, open questions.",
          "If budget approval is delayed, say so rather than going quiet.",
          "If you decide not to proceed, tell the creator. Silence after they've shared rates damages your reputation with creators and their managers.",
        ],
      },
      {
        type: "template",
        label: "Summary after a call",
        text: "Hi [name], thanks for the call. Summary of what we discussed:\n• Deliverables: [ ]\n• Timeline: draft by [date], live on [date]\n• Fee: ₹[ ] + GST, paid [terms]\n• Usage: [organic only / paid ads for X months]\n• Open questions: [ ]\nI'll send the agreement by [date]. Shout if I've missed anything.",
      },
      { type: "heading", text: "Follow-ups during the campaign", id: "during" },
      {
        type: "list",
        items: [
          "Remind before deadlines, not after. A note two or three days before a draft is due is helpful; a note the day after it's late feels like a reprimand.",
          "Give feedback on drafts within the time you promised.",
          "If a creator is late, ask whether something's wrong before restating the contract.",
        ],
      },
      { type: "heading", text: "Following up after the campaign", id: "after" },
      {
        type: "paragraph",
        text: "The most valuable follow-up is the one most brands skip. A short note after results are in, with specific thanks, a result or two you can share and a word about future plans, is often what turns a one-off post into a repeat partnership. Repeat influencer collaborations explains how to build on it.",
        links: [{ text: "Repeat influencer collaborations", href: "/blog/repeat-influencer-collaborations" }],
      },
      {
        type: "template",
        label: "After-campaign follow-up",
        text: "Hi [name], wanted to share how your [post] did: [one or two specific results you can share]. The [specific thing they did] worked especially well. Thank you. We're planning [next campaign/quarter] and would love to work with you again; I'll reach out with details when we have them.",
      },
      { type: "heading", text: "When to stop", id: "when-to-stop" },
      {
        type: "list",
        items: [
          "The creator says no, or asks not to be contacted.",
          "Two follow-ups with no response.",
          "A manager says the creator isn't taking brand work.",
          "The creator has started an exclusive partnership with a competitor.",
        ],
      },
      {
        type: "paragraph",
        text: "Record the reason, and respect it in future campaigns. Influencer collaboration rejection covers responding gracefully when creators decline.",
        links: [{ text: "Influencer collaboration rejection", href: "/blog/influencer-collaboration-rejection" }],
      },
      { type: "heading", text: "Who owns follow-ups", id: "ownership" },
      {
        type: "paragraph",
        text: "Follow-ups fall through the cracks when nobody owns them. Assign one person per creator and track the next follow-up date in your tracker or CRM. Influencer marketing CRM explains how to keep this history.",
        links: [
          { text: "Influencer marketing CRM", href: "/blog/influencer-marketing-crm" },
        ],
      },
      {
        type: "table",
        headers: ["Follow-up", "Owner", "Due"],
        rows: [
          ["No reply to outreach", "Campaign manager", "4–7 days, then once more"],
          ["Rate card received", "Campaign manager (with budget owner)", "Within 2 working days"],
          ["Post-call summary", "Whoever led the call", "Same or next day"],
          ["Draft feedback", "Reviewer", "Within the promised window"],
          ["Payment status", "Campaign manager with finance", "Before the agreed date"],
          ["Post-campaign note", "Relationship owner", "Once results are in"],
        ],
      },
      { type: "heading", text: "Follow-ups with managers", id: "managers" },
      {
        type: "list",
        items: [
          "Keep the manager copied on anything commercial.",
          "One follow-up to the manager is usually enough before asking whether the creator is taking work.",
          "Don't bypass the manager by messaging the creator about terms.",
        ],
      },
      { type: "heading", text: "Hypothetical example: from first contact to a long-term deal", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a skincare brand contacts a Malayalam beauty creator in March. No reply. A follow-up a week later mentions that products are ready to ship; she replies that she's fully booked until May. The brand notes it and returns in early May with a monsoon-skincare brief. After a call, it sends a written summary the same day, and pays within the agreed 15 days of going live. After results come in, it shares them and offers a three-post series for Onam. Each follow-up was short, timely and added something; together they turned a cold message into a partnership.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Repeating the same message as a follow-up.",
          "Following up on email, DM and WhatsApp on the same day.",
          "Going silent after receiving a creator's rates.",
          "Never following up after the campaign.",
          "Guilt-tripping language ('We haven't heard back from you yet…').",
        ],
      },
      {
        type: "paragraph",
        text: "Once a campaign is under way, influencer communication covers channels, response times and keeping decisions in writing.",
        links: [
          { text: "influencer communication", href: "/blog/influencer-communication" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Follow-up is a habit across the whole relationship, not a reminder after first outreach. Keep early follow-ups short, new and limited to two; once creators engage, respond promptly and put agreements in writing; remind before deadlines; and always follow up after the campaign. That last step is where long-term partnerships start.",
      },
    ],
    faqs: [
      {
        question: "How many times should you follow up with an influencer?",
        answer:
          "After a first message with no reply, one or two short follow-ups spaced several days to a week apart is reasonable. Then stop and record it, so the creator isn't contacted again for the same campaign.",
      },
      {
        question: "How long should I wait before following up with an influencer?",
        answer:
          "Around four to seven days after the first message for a first follow-up. Once a creator has replied, the brand should respond to their questions or rates within a couple of working days.",
      },
      {
        question: "What should I do after an influencer campaign ends?",
        answer:
          "Send a short note with specific thanks and a result or two you can share, and mention future plans if you'd like to work together again.",
      },
    ],
  },
  {
    slug: "negotiate-influencer-rates",
    category: "Influencer Marketing",
    title: "How to Negotiate Influencer Rates Without Damaging the Relationship",
    seoTitle: "How to Negotiate Influencer Rates Fairly",
    excerpt:
      "How to talk about money with creators so both sides feel the deal is fair: responding to a quote, adjusting scope instead of squeezing price, honest budget conversations, wording that helps and hurts, and when to walk away politely.",
    metaDescription:
      "How to negotiate influencer rates fairly: responding to quotes, adjusting scope rather than squeezing price, honest budget talks, wording and walking away well.",
    author: AUTHOR,
    publishedAt: REL_PUBLISHED,
    lastReviewed: REL_REVIEWED,
    readingTime: "7 min read",
    tags: ["negotiate influencer rates", "influencer rate negotiation", "how to negotiate with creators", "fair influencer pricing", "influencer fee negotiation"],
    related: ["how-to-negotiate-with-influencers", "how-much-to-pay-influencers", "influencer-relationship-management"],
    hero: {
      src: "/blog/brand-guides/negotiate-influencer-rates.svg",
      alt: "Fair rate negotiation: understand the quote, share the budget honestly, adjust scope and agree terms both sides respect",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator sends a rate that's above your budget. What you say next decides more than the fee. Push hard and you may save a little money while getting a creator who does the minimum, remembers how they were treated and tells their manager. Respond well and you may agree a fair deal, or a smaller scope, with someone happy to work with you again.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Negotiate influencer rates by first understanding what the quote includes, then being honest about your budget and adjusting scope (deliverables, rights, exclusivity, timeline) rather than simply asking for a lower price for the same work. Explain your reasoning, avoid lowball offers and pressure tactics, respect that creators set their own rates, and walk away politely when the numbers don't work. The goal is a fair deal both sides would repeat, not the lowest possible fee.",
      },
      {
        type: "paragraph",
        text: "This guide focuses on the money conversation. The full set of terms (deliverables, rights, exclusivity, timelines, payment) is covered in how to negotiate with influencers, and how to judge whether a rate is reasonable in the first place is in how much to pay influencers.",
        links: [
          { text: "how to negotiate with influencers", href: "/blog/how-to-negotiate-with-influencers" },
          { text: "how much to pay influencers", href: "/blog/how-much-to-pay-influencers" },
        ],
      },
      { type: "heading", text: "Step 1: Understand the quote", id: "understand" },
      {
        type: "list",
        items: [
          "What exactly is included: number and type of deliverables, revisions, raw footage, usage rights, link in bio, Stories?",
          "How long is organic content expected to stay up?",
          "Is there a usage or exclusivity component priced in?",
          "Is GST additional?",
          "Is the rate standard or adjusted for your brief's complexity (travel, scripting, multiple products)?",
        ],
      },
      {
        type: "paragraph",
        text: "Many apparent gaps disappear once you compare like with like. A quote that looks high may include paid usage rights you'd otherwise pay for separately.",
      },
      { type: "heading", text: "Step 2: Decide what the creator is worth to this campaign", id: "worth" },
      {
        type: "paragraph",
        text: "Before responding, estimate value rather than reacting to the number: expected cost per thousand views based on their median views, how they compare with similar creators you've worked with, the role they'd play and what rights you're getting. A higher fee can be the better deal if the creator's audience is exactly your customer, their content converts or you get usable assets for ads. Influencer benchmarking explains how to build these comparisons.",
        links: [{ text: "Influencer benchmarking", href: "/blog/influencer-benchmarking" }],
      },
      { type: "heading", text: "Step 3: Adjust scope, not just price", id: "scope" },
      {
        type: "table",
        headers: ["Lever", "How it changes the fee", "Trade-off"],
        rows: [
          ["Fewer deliverables", "One Reel instead of a Reel plus Stories", "Less exposure"],
          ["Different format", "Stories or a static post instead of video", "Different impact"],
          ["Shorter or no paid usage", "Organic only, or 3 months instead of 12", "Less content for ads"],
          ["No or shorter exclusivity", "Category exclusivity for 30 days instead of 90", "Competitor could book them sooner"],
          ["Longer timeline", "Less rush, simpler production", "Later go-live"],
          ["Simpler brief", "Fewer mandatory points or locations", "Less control"],
          ["Bundled or repeat work", "Several posts over months at a combined rate", "Longer commitment"],
          ["Performance element", "Smaller fixed fee plus commission or bonus", "Creator takes on risk; must be fair and tracked"],
        ],
      },
      {
        type: "paragraph",
        text: "Asking a creator to do the same work for much less money is asking them to value their time less. Asking whether a smaller scope fits your budget respects their pricing.",
      },
      { type: "heading", text: "Step 4: Be honest about budget", id: "budget" },
      {
        type: "template",
        label: "Responding to a quote above budget",
        text: "Hi [name], thanks for sending this, and for the detail on what's included. Our budget for this campaign is ₹[ ] per creator, which I know is below your rate for [deliverables]. Would any of these work for you?\n• [one Reel, organic only]\n• [Reel + Stories, with paid usage for 3 months instead of 12]\nIf not, completely understood. We'd still love to work with you on a bigger campaign later in the year.",
      },
      {
        type: "paragraph",
        text: "This works because it's specific, acknowledges their rate, proposes options rather than a demand, and leaves the door open.",
      },
      { type: "heading", text: "Language that helps, and language that hurts", id: "language" },
      {
        type: "table",
        headers: ["Helps", "Hurts"],
        rows: [
          ["'Our budget for this is ₹X. What could you do within that?'", "'Others charge half of this.'"],
          ["'Could we reduce the usage period to bring the fee down?'", "'It's great exposure for you.'"],
          ["'We'd like to make this a longer partnership, so could we discuss a package?'", "'Take it or leave it.'"],
          ["'Can you help me understand what's included?'", "'Your engagement isn't that high.'"],
          ["'This doesn't fit our budget right now, but thank you.'", "Silence after receiving their rates."],
        ],
      },
      { type: "heading", text: "Practices to avoid", id: "avoid" },
      {
        type: "list",
        items: [
          "Lowball first offers designed to anchor low. Creators and managers recognise them and it sets a combative tone.",
          "Offering 'exposure' or product instead of payment for work a creator prices as paid.",
          "Making payment depend entirely on results the creator doesn't control.",
          "Renegotiating after the content is made.",
          "Long payment terms used as a hidden discount.",
          "Sharing one creator's rates with another.",
        ],
      },
      { type: "heading", text: "Why the lowest fee isn't always the best deal", id: "economics" },
      {
        type: "paragraph",
        text: "Hypothetical: Creator A quotes ₹80,000 for a Reel; Creator B accepts ₹45,000 after hard bargaining. A's audience is concentrated in your launch cities and her past sponsored posts drew many product questions; B's audience is national and his sponsored posts get little discussion. If A's post drives three times the qualified traffic, she was cheaper per outcome. Squeezing price can also cost you goodwill, rush the content and lose the chance of a repeat booking at a fair rate.",
      },
      { type: "heading", text: "Negotiating with managers", id: "managers" },
      {
        type: "list",
        items: [
          "Managers negotiate many deals and know market rates; be straightforward.",
          "Ask what flexibility exists on scope, rights or bundling rather than pushing on headline price.",
          "Respect that managers protect their creators' rates; a fair package often works better than a discount.",
          "Keep the creator in mind: confirm creative details with them directly where appropriate.",
        ],
      },
      { type: "heading", text: "Walk away well", id: "walk-away" },
      {
        type: "paragraph",
        text: "Sometimes the numbers don't work. Say so clearly and kindly, thank the creator for their time and leave the door open if you mean it. Creators remember brands that declined respectfully, and budgets change. Influencer collaboration rejection covers the other side: what to do when creators say no.",
        links: [{ text: "Influencer collaboration rejection", href: "/blog/influencer-collaboration-rejection" }],
      },
      { type: "heading", text: "Performance-based pay, fairly", id: "performance-pay" },
      {
        type: "paragraph",
        text: "Commission or bonus elements can align incentives, but they shift risk to the creator. Structures, conversion definitions and rate-setting are covered in performance-based influencer deals. To keep them fair:",
        links: [{ text: "performance-based influencer deals", href: "/blog/performance-based-influencer-marketing" }],
      },
      {
        type: "list",
        items: [
          "Keep a fixed fee that covers the creator's work; add performance elements on top rather than replacing the fee.",
          "Track results transparently (unique codes or links) and share the data.",
          "Count only outcomes the creator influences and you can measure.",
          "Agree payout timing, and how returns and cancellations are handled, in advance.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing payments covers payment models in detail.",
        links: [
          { text: "Influencer marketing payments", href: "/blog/influencer-marketing-payments" },
        ],
      },
      { type: "heading", text: "Hypothetical rate conversation", id: "example" },
      {
        type: "template",
        label: "Hypothetical exchange (summarised)",
        text: "Brand: Offers ₹40,000 for one Reel + 3 Stories, paid usage 6 months.\nCreator: Quotes ₹75,000; explains paid usage adds significantly to her rate.\nBrand: Asks what organic-only would cost. Answer: ₹50,000.\nBrand: Proposes Reel + 3 Stories, organic only, ₹50,000; if the Reel performs, a separate usage fee for 3 months of ads.\nCreator: Agrees.\nOutcome: Brand pays fairly for what it needs now and buys usage only if the content earns it.",
      },
      { type: "heading", text: "Negotiation checklist", id: "checklist" },
      {
        type: "template",
        label: "Before you reply to a quote",
        text: "□ Do I know exactly what's included?\n□ Have I estimated value (expected CPM, audience fit, role)?\n□ Is my counter about scope, not just price?\n□ Am I sharing my real budget or range honestly?\n□ Have I avoided comparing them to other creators' rates?\n□ Is GST/TDS handling clear?\n□ If this doesn't work, will I decline kindly and promptly?",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Negotiating before knowing what's included.",
          "Treating the creator's rate as an opening bid to be halved.",
          "Comparing rates without comparing audiences and rights.",
          "Forgetting GST and TDS when comparing quotes.",
          "Winning the negotiation and losing the relationship.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Fair rate negotiation means understanding the quote, judging value rather than price, adjusting scope honestly, using respectful language and walking away well when it doesn't fit. Brands that negotiate this way pay fair prices and get creators who want to work with them again, which is the cheapest outcome over time. For managing those relationships after the deal, see influencer relationship management.",
        links: [{ text: "influencer relationship management", href: "/blog/influencer-relationship-management" }],
      },
    ],
    faqs: [
      {
        question: "How do you negotiate influencer rates?",
        answer:
          "Understand exactly what the quote includes, estimate the creator's value to your campaign, be honest about your budget and adjust scope (deliverables, usage rights, exclusivity, timeline) rather than asking for the same work for less.",
      },
      {
        question: "Is it okay to negotiate with influencers?",
        answer:
          "Yes. Most creators and managers expect a conversation about scope and price. What matters is negotiating respectfully: no lowball anchoring, no 'exposure' instead of payment, and no renegotiating after work is done.",
      },
      {
        question: "What should I do if an influencer's rate is above my budget?",
        answer:
          "Share your budget honestly and propose a smaller scope, shorter usage rights or a different format. If it still doesn't fit, decline politely and keep the door open for future campaigns.",
      },
    ],
  },
  {
    slug: "influencer-collaboration-proposal",
    category: "Influencer Marketing",
    title: "Influencer Collaboration Proposal: What Brands Should Send to Creators",
    seoTitle: "Influencer Collaboration Proposal: What to Send Creators",
    excerpt:
      "What a brand's collaboration proposal to a creator should contain, how it differs from a first message and a brief, a proposal template, what makes the offer persuasive to creators, and examples for paid, gifted and ambassador offers.",
    author: AUTHOR,
    publishedAt: REL_PUBLISHED,
    lastReviewed: REL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer collaboration proposal", "influencer partnership pitch", "creator collaboration offer", "influencer proposal template", "brand proposal to influencer"],
    related: ["influencer-outreach-email", "negotiate-influencer-rates", "influencer-campaign-brief"],
    hero: {
      src: "/blog/brand-guides/influencer-collaboration-proposal.svg",
      alt: "Collaboration proposal sections: brand, objective, why the creator, deliverables, timeline, compensation, usage and next step",
    },
    metaDescription: "What an influencer collaboration proposal should include: brand, objective, why the creator, deliverables, timeline, pay, usage and next step, with a template.",
    body: [
      {
        type: "paragraph",
        text: "A first outreach message asks whether a creator is interested. A proposal answers everything they'll want to know before saying yes: what you're asking, why them, when, for how much and with what rights. Many brands skip straight from a vague first message to a contract, which is why so many collaborations start with misunderstandings about deliverables or usage.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer collaboration proposal should include a short brand introduction, the campaign objective, why you chose this creator, the deliverables (format, platform, number), the timeline, compensation (fee, product, commission and payment terms), usage rights and any exclusivity, the creative freedom they'll have, and a clear next step. Keep it to one or two pages, send it after the creator shows interest, and treat it as an offer to discuss rather than a final contract.",
      },
      { type: "heading", text: "Outreach message vs proposal vs brief vs contract", id: "differences" },
      {
        type: "table",
        headers: ["Document", "When", "Purpose", "Length"],
        rows: [
          ["Outreach message", "First contact", "Spark interest; check availability", "A few lines"],
          ["Proposal", "After interest", "Set out the offer so the creator can decide", "1–2 pages"],
          ["Contract", "After terms agreed", "Make the terms binding", "As needed"],
          ["Brief", "After contract", "Guide the content", "1–2 pages"],
        ],
      },
      {
        type: "paragraph",
        text: "Influencer outreach email covers the first message; influencer marketing contract and influencer campaign brief cover the later documents.",
        links: [
          { text: "Influencer outreach email", href: "/blog/influencer-outreach-email" },
          { text: "influencer marketing contract", href: "/blog/influencer-marketing-contract" },
          { text: "influencer campaign brief", href: "/blog/influencer-campaign-brief" },
        ],
      },
      { type: "heading", text: "What the proposal should contain", id: "contents" },
      {
        type: "template",
        label: "Collaboration proposal template",
        text: "1. ABOUT US (2–3 lines): who we are, what we sell, where, and a link\n2. THE CAMPAIGN: objective and idea in one paragraph (e.g. 'introduce our millet snacks to working parents in Pune ahead of school reopening')\n3. WHY YOU: one or two specific reasons (your audience, a post, your style)\n4. WHAT WE'RE ASKING: deliverables, platform, format, number, key messages (few), anything we'd like to avoid\n5. CREATIVE FREEDOM: what's yours to decide (concept, script, tone) and what's fixed (claims, disclosure)\n6. TIMELINE: product delivery, draft date, feedback window, go-live window\n7. COMPENSATION: fee (₹, + GST), product, any commission or bonus, payment terms and timing\n8. USAGE AND EXCLUSIVITY: organic only or paid usage (platforms, duration); any category exclusivity and its length\n9. DISCLOSURE: we'll ask for a clear paid-partnership label\n10. NEXT STEP: 'Reply with questions or a time to talk; if this works, we'll send the agreement by [date].'",
      },
      { type: "heading", text: "From a generic offer to a persuasive pitch", id: "persuasive" },
      {
        type: "paragraph",
        text: "A proposal is also a pitch. Creators decide not only on money but on whether the collaboration is good for their audience and their work. Compare:",
      },
      {
        type: "table",
        headers: ["Generic offer", "Persuasive pitch"],
        rows: [
          ["'We'd like a Reel about our product.'", "'We'd like a Reel about how you'd actually use this on a weekday morning, in your own style.'"],
          ["'You're a great fit.'", "'Your audience asks you about quick breakfasts constantly; this answers that question.'"],
          ["'Fee: negotiable.'", "'Fee: ₹[ ] + GST, paid within 15 days of going live.'"],
          ["'We may use the content.'", "'Organic only. If we want to run it as an ad, we'll agree a separate usage fee.'"],
          ["'Let us know.'", "'If this sounds good, reply and we'll send the agreement by Thursday.'"],
        ],
      },
      {
        type: "paragraph",
        text: "What creators tend to value: relevance to their audience, creative freedom, fair and clear pay, prompt payment, sensible timelines, clear usage terms and the possibility of a longer relationship. A pitch that addresses these is more persuasive than one that only describes your product.",
      },
      { type: "heading", text: "Variations by offer type", id: "variations" },
      {
        type: "table",
        headers: ["Offer", "Emphasise", "Be explicit about"],
        rows: [
          ["Paid collaboration", "Creative freedom, fee and timeline", "Deliverables, usage, payment terms"],
          ["Gifted product", "Why you think they'd genuinely like it", "No obligation to post; disclosure if they do"],
          ["Affiliate", "Commission and how it's tracked", "Cookie window or code terms; payout schedule"],
          ["Ambassador", "Long-term relationship, consistency, input into the brand", "Duration, monthly expectations, exit terms"],
          ["UGC for ads", "Production expectations and usage", "Ad usage duration and platforms; no posting required on their account"],
        ],
      },
      {
        type: "paragraph",
        text: "Gifting, ambassador and affiliate structures are covered in influencer gifting, influencer ambassador programs and instagram gifting vs paid collaboration.",
        links: [
          { text: "influencer gifting", href: "/blog/influencer-gifting" },
          { text: "influencer ambassador programs", href: "/blog/brand-ambassador-program" },
          { text: "instagram gifting vs paid collaboration", href: "/blog/instagram-gifting-vs-paid-collaboration" },
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "template",
        label: "Example proposal (hypothetical, paid collaboration)",
        text: "ABOUT US: [Brand] makes stainless-steel kitchen storage, sold on our site and on major marketplaces across India.\nTHE CAMPAIGN: Help families organising small kitchens before Diwali cleaning.\nWHY YOU: Your 'small Mumbai kitchen' series is exactly the situation our products are for, and your audience is mostly in Maharashtra.\nWHAT WE'RE ASKING: 1 Instagram Reel (45–60s) + 3 Stories with a link. Key point: airtight lids. Please avoid comparisons with named brands.\nCREATIVE FREEDOM: Concept, script and editing are yours. We'll check claims and disclosure only.\nTIMELINE: Products by 1 Oct; draft by 10 Oct; feedback within 2 days; live 15–18 Oct.\nCOMPENSATION: ₹[ ] + GST, paid within 15 days of going live. You keep the products.\nUSAGE: Organic only. Any ad use would be agreed and paid separately.\nNEXT STEP: Reply with questions or a time to talk; we'll send the agreement within 2 working days of your yes.",
      },
      { type: "heading", text: "Proposals for regional and smaller creators", id: "regional" },
      {
        type: "list",
        items: [
          "Offer the proposal in the creator's language, or at least a summary.",
          "Explain terms like 'usage rights' and 'exclusivity' in plain words.",
          "Keep it shorter: half a page may be enough for a single gifted or paid post.",
          "Say how and when you'll pay, including GST and TDS, so there are no surprises.",
        ],
      },
      { type: "heading", text: "A proposal checklist", id: "checklist" },
      {
        type: "template",
        label: "Before sending a proposal",
        text: "□ One-line reason this creator, specific to them\n□ Deliverables, platform and format clear\n□ What's fixed vs what's their creative choice\n□ Dates: product arrival, draft, feedback, go-live\n□ Fee, GST, payment timing\n□ Usage: organic only, or paid (platforms, duration)\n□ Exclusivity: none, or category and duration (and paid)\n□ Disclosure expectation\n□ Clear next step and response date",
      },
      { type: "heading", text: "What happens after the proposal", id: "after" },
      {
        type: "paragraph",
        text: "Expect questions or a counter. Respond promptly, adjust scope if needed, then confirm everything in a written agreement and send the brief. Negotiate influencer rates and how to negotiate with influencers cover those conversations, and influencer marketing contract covers the agreement.",
        links: [
          { text: "Negotiate influencer rates", href: "/blog/negotiate-influencer-rates" },
          { text: "how to negotiate with influencers", href: "/blog/how-to-negotiate-with-influencers" },
          { text: "influencer marketing contract", href: "/blog/influencer-marketing-contract" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Sending a 15-slide brand deck instead of a two-page proposal.",
          "Hiding compensation until the end of a long conversation.",
          "Vague usage language ('we may repurpose content').",
          "A script disguised as a proposal.",
          "No clear next step or decision date.",
        ],
      },
      {
        type: "paragraph",
        text: "After the creator says yes, influencer onboarding covers the steps between agreement and production.",
        links: [
          { text: "influencer onboarding", href: "/blog/influencer-onboarding" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good collaboration proposal tells the creator everything they need to decide: who you are, the idea, why them, what you're asking, when, what you'll pay, what rights you need and what's theirs to decide. Make it short, specific and fair. If the creator wants to adjust terms, negotiate influencer rates covers how to do that without damaging the relationship.",
        links: [{ text: "negotiate influencer rates", href: "/blog/negotiate-influencer-rates" }],
      },
    ],
    faqs: [
      {
        question: "What should an influencer collaboration proposal include?",
        answer:
          "A brief brand introduction, the campaign objective, why you chose the creator, deliverables, creative freedom, timeline, compensation and payment terms, usage rights and exclusivity, disclosure expectations and a clear next step.",
      },
      {
        question: "What's the difference between an influencer proposal and a brief?",
        answer:
          "A proposal sets out the offer so the creator can decide whether to work with you. A brief comes after the agreement and guides the content itself.",
      },
      {
        question: "How do brands make a better collaboration offer to creators?",
        answer:
          "Make it relevant to the creator's audience, give genuine creative freedom, state fair compensation and payment terms clearly, be explicit about usage rights and offer a clear next step.",
      },
    ],
  },
];

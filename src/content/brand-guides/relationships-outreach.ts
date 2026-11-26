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

import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchJ: BlogPost[] = [
  // #46 how-to-contact-influencers (UPGRADE, orig 2026-10-08)
  {
    slug: "how-to-contact-influencers",
    category: "Influencer Marketing",
    title: "How to Contact Influencers for Brand Collaborations: A Practical Guide",
    seoTitle: "How to Contact Influencers for Brand Collaborations | Kudozz",
    excerpt:
      "Which contact route to use, how to verify that an email or manager is genuine, what to have ready before you write, and how to handle creator contact details responsibly.",
    metaDescription:
      "How to contact influencers for collaborations: pick the right channel, verify contacts, prepare your offer, write the first message and handle contact data.",
    author: AUTHOR,
    publishedAt: "2026-10-08",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["How to Contact Influencers", "Influencer Outreach", "Creator Contact Details", "India"],
    related: ["influencer-outreach-email", "influencer-follow-up", "how-to-create-influencer-outreach-list", "influencer-campaign-brief"],
    hero: {
      src: "/blog/discovery/how-to-contact-influencers.svg",
      alt: "A decision path for contacting an influencer: choose a contact route by creator size, verify the contact against the creator's own profile, prepare the offer, then send one clear first message",
    },
    discoveryCta: {
      headline: "Ready to Find Creators Worth Contacting?",
      body: "Explore Kudozz Discovery to research Instagram creators in India by niche, city and engagement, save a shortlist, and reveal an email or phone number with credits when a creator is worth approaching.",
    },
    body: [
      {
        type: "paragraph",
        text: "Here is the blunt answer most brands need: contacting an influencer is rarely the hard part. The hard part is contacting the right person, through the right channel, with an offer clear enough that the creator can say yes or no without five rounds of questions. Most outreach that goes nowhere fails on one of those three, not on the wording of the message.",
      },
      {
        type: "paragraph",
        text: "This guide covers the practical side of making contact: which route to use for which creator, how to check that an email or a manager is genuine, what to have ready before you write, and how to treat contact details with care. It assumes you already have a shortlist. If you don't yet, start with how to find the right influencers for your brand in India.",
        links: [{ text: "how to find the right influencers for your brand in India", href: "/blog/find-indian-influencers" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To contact influencers professionally, first confirm the creator fits your brief, then find their business contact: the email or contact button on their profile, their manager or talent agency, or a platform partnership inbox. Use an Instagram DM only for smaller creators who list no email, and WhatsApp only once a creator shares their number for work. Verify the contact against the creator's own profile before you share any brief or payment detail. Prepare your offer first (product, deliverables, timeline, paid or gifted, budget range), then send one short, specific message from a named person on your brand's email domain.",
      },
      { type: "heading", text: "Before you contact anyone: three things to settle", id: "before-you-contact" },
      {
        type: "paragraph",
        text: "A first message sent before the brand knows what it wants usually becomes a long thread that ends in silence. Settle these three things first, ideally in a one-page brief that everyone on your side has agreed:",
      },
      {
        type: "list",
        items: [
          "Why this creator: one or two specific reasons tied to their recent content and audience, written down while you review their profile.",
          "What you are offering: paid fee, product only, affiliate commission or a mix, plus the deliverables and rough dates.",
          "Who decides: the person who can confirm the deal on your side, so a creator who says yes doesn't wait a week for approval.",
        ],
      },
      {
        type: "paragraph",
        text: "If the shortlist still feels shaky, a quick pass through how to research influencers before approaching them saves you withdrawing an offer later. The pre-outreach brief itself is covered in what to include in an influencer marketing brief before approaching creators.",
        links: [
          { text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" },
          { text: "what to include in an influencer marketing brief before approaching creators", href: "/blog/influencer-campaign-brief" },
        ],
      },
      { type: "heading", text: "Choosing the right contact route", id: "contact-routes" },
      {
        type: "paragraph",
        text: "Creators in India reach brands through a handful of routes, and the right one depends mostly on their size and how they have set up their profile. Use whatever the creator has published as their business channel. If they've written \"for collabs, email…\" in their bio, that is the answer.",
      },
      {
        type: "table",
        headers: ["Contact route", "Where you find it", "Best for", "Watch out for"],
        rows: [
          ["Business email", "Instagram contact button or bio; YouTube channel About section", "Most creators who take brand work regularly", "Shared inboxes handled by a manager"],
          ["Manager or talent agency", "Bio line, media kit, agency roster page", "Mid-tier and larger creators, many regional creators", "People who claim to manage a creator but don't"],
          ["Platform partnership tools", "Instagram's creator marketplace, YouTube's partnership programmes", "Creators who have opted in to brand work there", "Only covers creators who joined"],
          ["Instagram DM", "Direct message from your brand account", "Nano and micro creators with no listed email", "Message requests are easy to miss"],
          ["WhatsApp or phone", "Only when a creator or manager shares it for work", "Coordination after first contact", "Cold calls and unsolicited WhatsApp messages feel intrusive"],
        ],
      },
      {
        type: "paragraph",
        text: "Platform detail differs enough to have its own guides: how to contact Instagram influencers covers DMs, the contact button and message requests, and how to contact YouTube creators covers business enquiry emails and channel managers.",
        links: [
          { text: "how to contact Instagram influencers", href: "/blog/how-to-contact-instagram-influencers" },
          { text: "how to contact YouTube creators", href: "/blog/how-to-contact-youtube-creators" },
        ],
      },
      { type: "subheading", text: "Email first, phone later" },
      {
        type: "paragraph",
        text: "Even when you have a creator's phone number, email is usually the better first touch. It lets the creator read the offer when they choose, forward it to a manager and reply in writing. Keep phone and WhatsApp for after the creator has replied and agreed that's how they like to work. A cold WhatsApp message from an unknown brand looks exactly like the scam offers creators are warned about.",
      },
      { type: "heading", text: "Verify the contact before you share anything", id: "verify-the-contact" },
      {
        type: "paragraph",
        text: "Impersonation runs both ways. Creators get messages from fake brands, and brands sometimes get replies from people falsely claiming to represent a creator. Before you send a brief, product details or payment information, run these checks:",
      },
      {
        type: "list",
        items: [
          "Confirm the email or manager's name appears on the creator's own profile, channel page or media kit.",
          "Be cautious of a free email address claiming to represent a large agency; check the agency's own website and roster.",
          "If a manager contacts you first, confirm with the creator through their official account before agreeing anything.",
          "Pay only the creator or their documented agency, against an invoice, never a personal account that appears mid-conversation.",
          "Write from your own brand-domain email with your name, role and website, so the creator can verify you too.",
        ],
      },
      {
        type: "paragraph",
        text: "Creators are rightly wary of fake brand offers. Clear identity signals (a named person, a brand-domain email, a link to your website and official Instagram account) are part of what earns a reply.",
      },
      {
        type: "discovery-cta",
        headline: "Start Your Creator Research",
        body: "Kudozz Discovery lets you filter Instagram creators in India by niche, city, language and engagement, save them to a list, and reveal a creator's email for 1 credit or phone for 2 credits. If a contact isn't available, no credits are charged.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Writing the first message", id: "first-message" },
      {
        type: "paragraph",
        text: "A good first message is short, specific and easy to answer. It shows you've actually watched the creator's content, says plainly what you are offering, and ends with one question. Something like this works as a base for email:",
      },
      {
        type: "template",
        label: "First contact email (short version)",
        text: "Subject: [Brand] x [Creator]: paid Reel for our [month] launch\n\nHi [first name],\n\nI'm [name], [role] at [brand]. We make [product in one line], based in [city].\n\nYour [specific Reel or post] is why I'm writing: [one sentence on what you noticed and why it fits].\n\nWe'd like [deliverables] going live around [dates]. This is a [paid / gifted / affiliate] collaboration, and [budget line, e.g. \"happy to work from your rate card\"].\n\nWould you be open to it? If yes, I'll send a one-page brief.\n\nThanks,\n[Name, role, brand website, Instagram handle]",
      },
      {
        type: "paragraph",
        text: "For DMs, cut it to three lines: who you are, why them, and whether you can send details by email. Full email examples for paid, gifting, UGC and long-term partnerships are in how to write an influencer collaboration email.",
        links: [{ text: "how to write an influencer collaboration email", href: "/blog/influencer-outreach-email" }],
      },
      {
        type: "template",
        label: "Instagram DM first touch",
        text: "Hi [name], I'm [name] from [brand] ([@brandhandle]). Loved your [specific Reel]. We're planning a paid collaboration for [month] and think you'd be a great fit. Could I email you the details? Is [email from bio] the best address?",
      },
      { type: "heading", text: "Handling creator contact details responsibly", id: "contact-data" },
      {
        type: "paragraph",
        text: "A creator's email address and phone number are personal data, even when they are published for business enquiries. India's Digital Personal Data Protection Act, 2023 sets general duties for organisations that handle personal data, and its rules are being brought into force in phases. This isn't legal advice, and your legal team should confirm what applies to you, but a few habits keep you on sensible ground:",
      },
      {
        type: "list",
        items: [
          "Use contact details only for the purpose they were shared for: a business collaboration enquiry.",
          "Keep them in one access-controlled place, not in personal notes, screenshots or forwarded WhatsApp chats.",
          "Don't add creators to newsletters or marketing lists they didn't sign up for.",
          "If a creator asks you to stop contacting them or delete their details, do it and record that you did.",
          "Delete details you no longer need, such as contacts for creators you decided not to pursue.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to influencer marketing data privacy goes further into storing creator and audience data. For where to record contacts and conversation history, see how to organise influencer contact details and collaboration records.",
        links: [
          { text: "influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" },
          { text: "how to organise influencer contact details and collaboration records", href: "/blog/influencer-marketing-crm" },
        ],
      },
      { type: "heading", text: "Contacting creators at scale without becoming spam", id: "at-scale" },
      {
        type: "paragraph",
        text: "Say a Bengaluru skincare brand wants 25 micro-creators for a sunscreen launch. Writing 25 fully custom emails feels slow, and blasting one template feels efficient. The middle path works best: one structure, with a genuinely personal opening line and a tailored \"why you\" for each creator. Group creators by segment (paid, seeding, UGC) so each segment gets the right offer, and send in small batches you can actually reply to the same day.",
      },
      {
        type: "list",
        items: [
          "Send from a real person's inbox, not a no-reply or bulk marketing address.",
          "Never BCC a group of creators on one email.",
          "Give one person ownership of each creator conversation so nobody gets two pitches from the same brand.",
          "Cap follow-ups at two and stop the moment a creator replies anywhere.",
        ],
      },
      {
        type: "paragraph",
        text: "An organised influencer outreach list with owners, statuses and next-action dates makes this manageable. When to nudge and what to say is in how to follow up with influencers after a collaboration request.",
        links: [
          { text: "influencer outreach list", href: "/blog/how-to-create-influencer-outreach-list" },
          { text: "how to follow up with influencers after a collaboration request", href: "/blog/influencer-follow-up" },
        ],
      },
      { type: "heading", text: "Disclosure belongs in the first conversation", id: "disclosure" },
      {
        type: "paragraph",
        text: "If the collaboration is paid, gifted or involves any material connection, say early that the content will need to be disclosed in line with ASCI's influencer guidelines, using a clear label such as \"Ad\", \"Collaboration\" or \"Free gift\" placed upfront. Raising it at the start avoids awkward conversations at the draft stage and signals that your brand runs things properly.",
      },
      { type: "heading", text: "Common mistakes when contacting influencers", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Messaging before you know your budget or deliverables, then going quiet when the creator asks.",
          "Using \"Hi dear\" or the wrong name, which tells the creator the message was pasted.",
          "Hiding whether it's paid or gifted until the third message.",
          "Cold-calling or WhatsApp-messaging a number the creator never shared for work.",
          "Contacting both the creator and their manager at the same time with different offers.",
          "Sharing a brief or payment detail with an unverified \"manager\".",
          "Letting the creator's reply sit for days because nobody owned the conversation.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Contacting influencers well is mostly preparation: a confirmed fit, a clear offer, the creator's real business channel and a verified contact. The message itself should be short, honest about compensation and easy to answer, and the contact details you collect should be stored and used with care. If you'd rather have a team run this for you, Kudozz offers influencer outreach management for brands across India.",
        links: [{ text: "influencer outreach management", href: "/services/outreach-management" }],
      },
    ],
    faqs: [
      {
        question: "Is it okay to contact influencers through Instagram DMs?",
        answer: "Yes, especially for nano and micro creators who list no email. Keep the DM short, send it from your official brand account, and ask whether you can share details by email. For creators who list a business email or manager, use that instead.",
      },
      {
        question: "Should I contact the creator or their manager?",
        answer: "Use the route the creator publishes. If their bio or media kit names a manager or agency for collaborations, write to them. If you aren't sure the manager is genuine, confirm through the creator's official account before sharing anything.",
      },
      {
        question: "Can I message an influencer on WhatsApp?",
        answer: "Only once the creator or their manager has shared the number for work and is happy to coordinate there. Unsolicited WhatsApp messages from unknown brands tend to be ignored or treated as scams.",
      },
      {
        question: "How many creators should I contact at once?",
        answer: "As many as you can reply to properly. Send in small batches so every response gets a same-day answer, and contact a few more creators than you need so you have backups if some decline.",
      },
      {
        question: "What should I do if a creator asks me to stop contacting them?",
        answer: "Stop immediately, mark it in your records so no one else on your team contacts them for the same thing, and delete their details if they ask. It protects your brand's reputation with creators and their managers.",
      },
    ],
  },

  // #47 influencer-outreach-email (UPGRADE, orig 2026-09-30)
  {
    slug: "influencer-outreach-email",
    category: "Influencer Marketing",
    title: "How to Write an Influencer Collaboration Email That Gets Noticed",
    seoTitle: "Influencer Outreach Email: Collaboration Templates | Kudozz",
    excerpt:
      "What a creator sees before they open your email, the parts every collaboration email needs, and ready-to-adapt templates for paid collaborations, product gifting, UGC and long-term partnerships.",
    metaDescription:
      "Write an influencer outreach email creators read: subject lines, structure, and templates for paid collaborations, gifting, UGC and long-term partnerships.",
    author: AUTHOR,
    publishedAt: "2026-09-30",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Outreach Email", "Collaboration Email", "Email Templates", "India"],
    related: ["how-to-contact-influencers", "influencer-follow-up", "personalized-influencer-outreach", "influencer-campaign-brief"],
    hero: {
      src: "/blog/discovery/influencer-outreach-email.svg",
      alt: "An annotated collaboration email showing the subject line, a personal opening, why the creator fits, the offer and one next step, beside four email types: paid, gifting, UGC and long-term",
    },
    discoveryCta: {
      headline: "Find the Right Creators to Write To",
      body: "A strong email still needs the right recipient. Explore Kudozz Discovery to research Instagram creators in India by niche, location and engagement, build a shortlist, and reveal a creator's email with credits when you're ready to reach out.",
    },
    body: [
      {
        type: "paragraph",
        text: "The most common outreach email in a creator's inbox opens with \"Hope you're doing well\", spends three sentences on the brand's founding story, and only in the last line reveals whether there's any payment. Most creators decide in the first few seconds whether to read on, and that email has already lost them.",
      },
      {
        type: "paragraph",
        text: "A collaboration email gets noticed when it shows, quickly, that a real person looked at the creator's work and has a clear, fair offer. This guide covers the message itself: what the creator sees before opening it, the parts every email needs, and templates for the four collaborations brands most often propose. For the wider process around it (sourcing, sequencing and tracking), see our influencer outreach strategy.",
        links: [{ text: "influencer outreach strategy", href: "/blog/influencer-outreach-strategy" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer outreach email should have a specific subject line that names the collaboration type, an opening line about a piece of the creator's content, one or two sentences on why they fit, a short description of the product and what you'd like (deliverables and timing), a plain statement of whether it's paid, gifted, commission-based or a mix, and one easy next step. Keep it to roughly 100–150 words, send it from a named person on your brand's domain, and adapt it to the collaboration type.",
      },
      { type: "heading", text: "What the creator sees before opening", id: "before-opening" },
      {
        type: "paragraph",
        text: "In most inboxes, a creator sees three things: the sender name, the subject line and the first line of the email as a preview. All three should do work.",
      },
      {
        type: "list",
        items: [
          "Sender: a person's name and your brand, e.g. \"Riya from [Brand]\", from your brand-domain address, not a free email or a no-reply inbox.",
          "Subject: what this is, in plain words. Brand, creator, collaboration type and timing.",
          "Preview line: your personal opening, not \"I hope this email finds you well\".",
        ],
      },
      {
        type: "table",
        headers: ["Collaboration", "Subject line pattern"],
        rows: [
          ["Paid", "[Brand] x [Creator]: paid Reel for our [month] launch"],
          ["Gifting", "Sending you our new [product], no posting required"],
          ["UGC", "Paid UGC brief: 3 short videos for [Brand] ads"],
          ["Long-term", "[Brand] x [Creator]: a 6-month partnership idea"],
        ],
      },
      {
        type: "paragraph",
        text: "Avoid clickbait (\"Urgent!\", \"Exciting opportunity!!\"), all caps and emojis in subject lines. They look like spam filters' favourite examples, and creators have seen enough of them.",
      },
      { type: "heading", text: "The anatomy of a collaboration email", id: "anatomy" },
      {
        type: "table",
        headers: ["Part", "What it does", "Example"],
        rows: [
          ["Personal opening", "Proves you've seen their work", "Your Reel on packing a carry-on for a Goa weekend is why I'm writing."],
          ["Who you are", "One line on you and the brand", "I'm Riya, partnerships lead at a Jaipur block-print label."],
          ["Why them", "Connects their content to the brief", "Your audience asks about sustainable fabrics in almost every comment thread."],
          ["The ask", "Deliverables and timing", "One Reel and three Stories, live in the first week of December."],
          ["Compensation", "Paid, gifted or commission, stated plainly", "This is a paid collaboration; happy to work from your rate card."],
          ["Next step", "One easy action", "Shall I send a one-page brief?"],
        ],
      },
      {
        type: "paragraph",
        text: "Not every email needs every part. A gifting email skips deliverables, because there shouldn't be any. But compensation type always belongs in the first message. If the creator has to ask \"is this paid?\", the email has failed.",
      },
      { type: "subheading", text: "Personalisation that is actually personal" },
      {
        type: "paragraph",
        text: "Personalisation is not \"Hi [first name]\". It is a specific, honest observation that only applies to this creator: a Reel you watched, a recurring series, a question their audience keeps asking. Write it while you review their profile, not afterwards from memory. The research behind it is covered in how to research influencers before approaching them, and personalised influencer outreach has more opening-line examples.",
        links: [
          { text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" },
          { text: "personalised influencer outreach", href: "/blog/personalized-influencer-outreach" },
        ],
      },
      { type: "heading", text: "Template 1: Paid collaboration", id: "paid-collaboration-email" },
      {
        type: "paragraph",
        text: "Use this when you're offering a fee for specific deliverables. Give a budget line, even a loose one. Saying \"we'd like to work from your rate card\" or \"our budget for this is around ₹X\" saves a round of back-and-forth and shows you're serious.",
      },
      {
        type: "template",
        label: "Paid collaboration email",
        text: "Subject: [Brand] x [Creator]: paid Reel for our [month] launch\n\nHi [first name],\n\nYour Reel on [specific topic] is why I'm writing. [One sentence on what you liked and why it suits the brief.]\n\nI'm [name], [role] at [brand]. We make [product in one line], and we're launching [product / campaign] in [month] with a small group of [category] creators.\n\nWhat we'd like: [1 Reel + 2 Stories], live between [dates].\nCompensation: this is a paid collaboration. [Happy to work from your rate card / Our budget is around ₹X for this scope.] Product is included.\nDisclosure: content would be labelled as a paid partnership in line with ASCI guidelines.\n\nWould you be open to it? If yes, I'll send a one-page brief and we can confirm terms.\n\nThanks,\n[Name]\n[Role, Brand] | [website] | [@brandhandle]",
      },
      { type: "heading", text: "Template 2: Product gifting", id: "gifting-email" },
      {
        type: "paragraph",
        text: "Gifting means sending a product with no obligation to post. Say that explicitly, ask for permission before shipping, and never follow up with \"so when are you posting?\". If you expect content in return, it's a barter collaboration, which should be agreed as one. Instagram gifting vs paid collaboration explains the difference, and how to find influencers for product gifting and seeding campaigns covers who to send to.",
        links: [
          { text: "Instagram gifting vs paid collaboration", href: "/blog/instagram-gifting-vs-paid-collaboration" },
          { text: "how to find influencers for product gifting and seeding campaigns", href: "/blog/influencer-product-seeding-program" },
        ],
      },
      {
        type: "template",
        label: "Product gifting email",
        text: "Subject: Sending you our new [product], no posting required\n\nHi [first name],\n\nI've been following your [series / content theme], especially [specific post]. I'm [name] from [brand]; we make [product in one line].\n\nWe'd love to send you [product / kit] to try. There's genuinely no obligation to post. If you like it and choose to share it, please mark it as a gift in line with ASCI guidelines. If you don't, that's completely fine too.\n\nIf you're happy to receive it, could you share a delivery address and phone number for the courier? We'll use them only for this shipment.\n\nThanks,\n[Name, Role, Brand, website]",
      },
      {
        type: "discovery-cta",
        headline: "Build Your Creator Shortlist",
        body: "Before any template goes out, make sure it's going to the right people. Kudozz Discovery lets you filter Instagram creators in India by niche, city, language and engagement, save them to a campaign list, and reveal an email with credits.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Template 3: UGC creation", id: "ugc-email" },
      {
        type: "paragraph",
        text: "UGC creators make content for your brand to post or run as ads, often without posting on their own profile. The email should be clear about that, and about usage rights, because those affect the fee. How to find UGC creators covers sourcing, and UGC content usage rights explains what to agree.",
        links: [
          { text: "How to find UGC creators", href: "/blog/how-to-find-ugc-creators" },
          { text: "UGC content usage rights", href: "/blog/ugc-content-usage-rights" },
        ],
      },
      {
        type: "template",
        label: "UGC creation email",
        text: "Subject: Paid UGC brief: [number] short videos for [Brand] ads\n\nHi [first name],\n\nI came across your [portfolio / Reel on X], and the way you [specific strength: explain a product in 20 seconds / film natural-light demos] is exactly what we're after.\n\nI'm [name] from [brand]. We're looking for [number] vertical videos of [length] for our [Instagram ads / website / Meta ads], showing [use case].\n\nTo be clear on scope:\n- Content is for our channels; posting on your profile is not required.\n- Usage: [paid ads + organic] for [duration], in [India / regions].\n- Raw footage: [needed / not needed].\n- Fee: [budget per video or package, or ask for their rates]. Product is included.\n\nIf this fits your schedule, could you share your UGC rates and a couple of samples closest to this style?\n\nThanks,\n[Name, Role, Brand, website]",
      },
      { type: "heading", text: "Template 4: Long-term partnership", id: "long-term-email" },
      {
        type: "paragraph",
        text: "Long-term offers work best with creators you've already collaborated with, or whose content you've followed closely for a while. Lead with the relationship, keep the commercial details at the level of a proposal, and invite the creator to shape it. Building a long-term influencer partnership programme covers the structure behind these offers.",
        links: [{ text: "Building a long-term influencer partnership programme", href: "/blog/influencer-partnerships" }],
      },
      {
        type: "template",
        label: "Long-term partnership email",
        text: "Subject: [Brand] x [Creator]: a 6-month partnership idea\n\nHi [first name],\n\n[Our Diwali collaboration / Your recent series on X] [specific result or reason: brought more thoughtful questions from customers than anything else we ran]. Thank you again.\n\nWe'd like to propose something longer: a [6-month] partnership where you'd create [e.g. 1 Reel a month + Stories around launches], with [early access to new products / input on one product drop].\n\nIn outline:\n- Fee: [monthly retainer / per-deliverable rate], paid [monthly against invoice].\n- Category exclusivity: [none / only for direct competitors in X, for the term].\n- Usage: [organic reposting; any ad usage agreed separately].\n\nNone of this is fixed. We'd rather build it around what works for your content. Could we get on a 20-minute call next week?\n\nThanks,\n[Name, Role, Brand]",
      },
      { type: "heading", text: "When to send a formal proposal instead", id: "formal-proposal" },
      {
        type: "paragraph",
        text: "Celebrity talent, creators represented by larger agencies and some B2B experts expect a formal proposal: company details, campaign name, full scope, commercial terms, usage, exclusivity and a named contact, sent as a PDF or in a structured email. Keep the short email as the cover note and attach the proposal. Our guide to the influencer collaboration proposal covers what goes in it.",
        links: [{ text: "influencer collaboration proposal", href: "/blog/influencer-collaboration-proposal" }],
      },
      { type: "heading", text: "Before you hit send", id: "before-send" },
      {
        type: "list",
        items: [
          "Is the creator's name spelled correctly, with the right handle?",
          "Does the opening mention something specific and recent?",
          "Can the creator tell from the first screen whether it's paid, gifted or UGC?",
          "Is there exactly one next step?",
          "Is it under about 150 words (excluding the scope bullets)?",
          "Is it going to the creator's published business email, not a guess?",
          "Have you logged the send date and owner so follow-ups happen on time?",
        ],
      },
      { type: "heading", text: "Common mistakes in influencer outreach emails", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "A pasted template with a leftover [name] or another creator's name in it.",
          "Leading with brand history instead of the creator.",
          "Vague asks like \"let's collaborate\" with no deliverables or compensation type.",
          "Calling a gifting offer \"no obligation\" and then chasing for a post.",
          "Long attachments in the first email, especially decks the creator didn't ask for.",
          "Sending from a personal Gmail with no website or brand handle.",
          "Following up the next day.",
        ],
      },
      {
        type: "paragraph",
        text: "If the email goes unanswered, the next message matters as much as the first. Our guide on how to follow up with influencers after a collaboration request has a cadence and templates.",
        links: [{ text: "how to follow up with influencers after a collaboration request", href: "/blog/influencer-follow-up" }],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "A collaboration email that gets noticed is short, specific and honest about the offer. Use the subject line to say what it is, open with the creator's work, state compensation plainly, and end with one question. Adapt the four templates rather than pasting them, and send them only to creators you've genuinely reviewed. For the full picture of reaching creators, from channels to verification, see how to contact influencers for brand collaborations.",
        links: [{ text: "how to contact influencers for brand collaborations", href: "/blog/how-to-contact-influencers" }],
      },
    ],
    faqs: [
      {
        question: "How long should an influencer outreach email be?",
        answer: "Roughly 100–150 words for the main message, plus a few scope bullets if needed. Creators read on their phones, and a short email with a clear offer is easier to answer than a long one.",
      },
      {
        question: "Should I mention budget in the first email?",
        answer: "Mention the compensation type always, and a budget line where you can, even a loose one such as working from the creator's rate card. It filters out mismatches early and shows the offer is real.",
      },
      {
        question: "Can I send the same email to many creators?",
        answer: "You can reuse the structure, but the opening line and the reason you chose the creator should be written for each person. Never BCC creators on one email, and never send a template with placeholders left in.",
      },
      {
        question: "Is it better to send a DM or an email?",
        answer: "Use the business email when a creator lists one. A DM works for smaller creators without an email, ideally as a short note asking whether you can send details by email.",
      },
      {
        question: "Should I attach a brand deck to the first email?",
        answer: "Usually not. Offer a one-page brief as the next step instead. A link to your website and Instagram handle is enough for the creator to check who you are.",
      },
    ],
  },

  // #48 influencer-campaign-brief (UPGRADE, orig 2026-09-13)
  {
    slug: "influencer-campaign-brief",
    category: "Campaign Strategy",
    title: "What to Include in an Influencer Marketing Brief Before Approaching Creators",
    seoTitle: "Influencer Campaign Brief: What to Include Before Outreach",
    excerpt:
      "The one-page brief to finish before you contact a single creator, why it saves time in every conversation that follows, and how it grows into the full creative brief once a creator says yes.",
    metaDescription:
      "What to put in an influencer campaign brief before outreach: objective, audience, offer, deliverables, budget, timeline, rights, disclosure, plus a one-pager.",
    author: AUTHOR,
    publishedAt: "2026-09-13",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Campaign Brief", "Influencer Marketing Brief", "Creator Briefing", "Campaign Planning"],
    related: ["influencer-outreach-email", "how-to-contact-influencers", "influencer-onboarding", "customer-insights-influencer-brief"],
    hero: {
      src: "/blog/discovery/influencer-campaign-brief.svg",
      alt: "A one-page pre-outreach brief laid out as labelled sections (objective, audience, creator profile, offer, deliverables, timeline, rights and disclosure) that expands into the full creative brief after a creator agrees",
    },
    discoveryCta: {
      headline: "Turn Your Brief Into a Creator Shortlist",
      body: "Once your brief says who you need, explore Kudozz Discovery to search Instagram creators in India by niche, city, language and engagement, and save the ones who match into a list for this campaign.",
    },
    body: [
      {
        type: "paragraph",
        text: "Ask a creator what slows down brand collaborations and you'll often hear the same story: a brand gets in touch, the creator says they're interested, and then come the questions nobody on the brand side can answer yet. What's the budget? Which dates? Can you use the video in ads? Is it a Reel or a carousel? A week later, the conversation has gone cold.",
      },
      {
        type: "paragraph",
        text: "The fix is a short brief written before outreach begins. It's not the detailed creative brief you hand over at kickoff. It's a one-page record of decisions the brand must make before asking anyone for their time. This guide covers what belongs in that pre-outreach brief, how it feeds your messages, and how it grows into the full creator brief once someone says yes.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before approaching creators, an influencer marketing brief should state the campaign objective, the audience you need to reach, the kind of creator you're looking for, the collaboration type (paid, gifted, UGC, affiliate), the deliverables, the budget range, the timeline, any usage rights or exclusivity you'll want, disclosure requirements, and who on your side approves decisions. Keep it to one page. Once a creator agrees, expand it into a full creative brief with key messages, mandatory points, claims to avoid, references and the approval process.",
      },
      { type: "heading", text: "Why write a brief before outreach?", id: "why-before-outreach" },
      {
        type: "paragraph",
        text: "A pre-outreach brief does three jobs. It forces the team to agree on the offer before anyone makes promises. It gives every outreach message the same facts, so two people on your team don't quote two different budgets. And it lets you answer a creator's first questions in one reply instead of four.",
      },
      {
        type: "paragraph",
        text: "It also sharpens discovery. Writing down \"Hindi and Marathi-speaking home cooks in Pune and Nashik, 10K–100K followers, who already make recipe Reels\" makes the search far quicker than \"food influencers\". If you're still working out who those creators are, how to find influencers based on niche, location and audience relevance goes deeper on the search itself.",
        links: [{ text: "how to find influencers based on niche, location and audience relevance", href: "/blog/influencer-search-tools" }],
      },
      { type: "heading", text: "What the pre-outreach brief should include", id: "what-to-include" },
      {
        type: "table",
        headers: ["Section", "What to decide", "Why creators care"],
        rows: [
          ["Objective", "One primary goal: awareness, launch buzz, content for ads, sales, store visits", "It shapes the format and how success is judged"],
          ["Audience", "Who must see this: age range, city or region, language, interests", "Creators know whether their audience matches"],
          ["Creator profile", "Niche, size band, language, location, content style", "Keeps outreach focused on genuine fits"],
          ["Collaboration type", "Paid, gifted, barter, UGC-only, affiliate or a mix", "The first thing every creator asks"],
          ["Deliverables", "Formats and counts, e.g. 1 Reel + 3 Stories", "Lets them quote accurately"],
          ["Budget range", "Per creator or per tier, plus product value", "Filters mismatches early"],
          ["Timeline", "Product dispatch, draft due, go-live window", "Creators plan around festive and launch calendars"],
          ["Usage and exclusivity", "Organic reposting, paid ads, duration, competitor restrictions", "Both affect the fee"],
          ["Disclosure", "ASCI-compliant labels for paid, gifted or material connections", "Avoids friction at the draft stage"],
          ["Decision-maker", "Who approves terms and content on your side", "Speeds up yes and sign-off"],
        ],
      },
      { type: "subheading", text: "Budget: a range is enough" },
      {
        type: "paragraph",
        text: "You don't need exact creator fees at this stage, but you need a ceiling per creator or tier and a sense of what you'll trade off if a favourite creator quotes above it (fewer deliverables, no ad usage, a later slot). Without that, the team either overpays under time pressure or drops good creators for the wrong reasons.",
      },
      { type: "subheading", text: "Usage rights: decide before you ask for rates" },
      {
        type: "paragraph",
        text: "If you'll want to run the creator's Reel as a paid ad, say so in the brief and in the first conversation. A rate for organic posting and a rate that includes three months of ad usage are different numbers. Our guide to influencer usage rights covers the terms to decide.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "The pre-outreach brief one-pager", id: "one-pager-template" },
      {
        type: "paragraph",
        text: "Copy this into a shared document and fill it in before the first message goes out. Lines in brackets are prompts; delete them once answered.",
      },
      {
        type: "template",
        label: "Pre-outreach brief (one page)",
        text: "CAMPAIGN: [name]                     OWNER: [name]          DATE: [dd/mm/yyyy]\n\n1. OBJECTIVE\n   Primary goal: [one only]\n   How we'll judge it: [e.g. views from target cities, code redemptions, usable ad assets]\n\n2. AUDIENCE\n   Who: [age range, gender if relevant, life stage]\n   Where: [cities / states / Tier 2-3 focus]\n   Language: [English / Hindi / regional]\n\n3. CREATOR PROFILE\n   Niche: [e.g. Food & Beverages, home cooking]\n   Size band: [e.g. 10K-100K]\n   Must have: [e.g. recipe Reels, posts weekly, Marathi captions]\n   Avoid: [e.g. recent competitor partnerships, content conflicts]\n   Number needed: [x] + [y] backups\n\n4. THE OFFER\n   Type: [paid / gifted / barter / UGC-only / affiliate]\n   Deliverables: [e.g. 1 Reel + 3 Stories]\n   Budget: [range per creator or per tier] + product worth ₹[amount]\n\n5. TIMELINE\n   Outreach: [dates]   Product dispatch: [date]\n   Draft due: [date]   Go-live window: [dates]\n\n6. RIGHTS AND RESTRICTIONS\n   Usage: [organic repost / paid ads for x months / none]\n   Exclusivity: [none / category, duration]\n\n7. DISCLOSURE\n   Label: [Ad / Collaboration / Free gift], upfront, per ASCI guidelines\n\n8. DECISIONS\n   Approves terms: [name]   Approves content: [name]\n   Turnaround promised to creators: [e.g. 2 working days]",
      },
      {
        type: "paragraph",
        text: "Once this is filled in, writing outreach becomes mostly a matter of choosing the right lines from it. How to write an influencer collaboration email shows how the offer, deliverables and budget line turn into the message itself.",
        links: [{ text: "How to write an influencer collaboration email", href: "/blog/influencer-outreach-email" }],
      },
      {
        type: "discovery-cta",
        headline: "Find Creators Who Match Your Brief",
        body: "Your creator profile section maps neatly onto search filters. In Kudozz Discovery you can filter Instagram creators in India by niche, follower band, city, language and minimum engagement rate, then save the right ones to a campaign list.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "A worked example", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say a Pune protein-snack brand is launching a jaggery-based bar before the festive season. Its pre-outreach brief might read: objective, launch awareness among gym-goers in Pune, Mumbai and Bengaluru; creator profile, fitness and food creators in the 10K–100K band who post workout or meal-prep Reels at least weekly; offer, paid, one Reel plus two Stories, with a per-creator budget ceiling and product boxes; timeline, product dispatch two weeks before go-live; usage, organic reposting only, with ad usage negotiated separately for the best performers; disclosure, \"Ad\" upfront in the caption and on screen.",
      },
      {
        type: "paragraph",
        text: "With that page agreed, the team can shortlist, contact creators and answer every first-round question on the day it's asked. The things it leaves out (exact hooks, claims the creator must avoid, the approval process) go into the full brief after creators sign on.",
      },
      { type: "heading", text: "From one-pager to full creative brief", id: "full-creative-brief" },
      {
        type: "paragraph",
        text: "Once a creator agrees, the one-pager becomes the backbone of the creative brief you share at onboarding. Add the sections below, still aiming for outcomes rather than scripts:",
      },
      {
        type: "list",
        items: [
          "Brand introduction in two or three plain sentences.",
          "One key message you want viewers to take away, not a list of five.",
          "Product facts and any claims that must be stated precisely, or avoided altogether.",
          "Mandatory items: tag, link, code, on-screen disclosure.",
          "Creative direction: tone, mood, visual guardrails and a few reference posts.",
          "Approval process: who reviews drafts, how many revision rounds, and your feedback turnaround.",
          "Tracking: links, codes or what you'll ask for in insights screenshots after posting.",
        ],
      },
      {
        type: "paragraph",
        text: "The difference between direction and a script matters. \"Show how quickly it fits into a morning routine\" lets a creator do it in their own style. \"Say: this is my favourite breakfast now\" doesn't, and audiences notice. Customer insights for influencer briefs shows how to use real customer language in the key message, and influencer onboarding covers the handover that follows.",
        links: [
          { text: "Customer insights for influencer briefs", href: "/blog/customer-insights-influencer-brief" },
          { text: "influencer onboarding", href: "/blog/influencer-onboarding" },
        ],
      },
      { type: "heading", text: "Disclosure in the brief", id: "disclosure" },
      {
        type: "paragraph",
        text: "For campaigns in India, write the disclosure requirement into the brief in line with ASCI's influencer guidelines: a clear label such as \"Ad\", \"Sponsored\", \"Collaboration\" or \"Free gift\", placed upfront where viewers will see it, not buried among hashtags or in the bio. The platform's paid-partnership label can be used as well. Brands and creators share responsibility, so check it on every draft. Briefing creators in other markets? Influencer disclosure rules by country summarises what changes.",
        links: [{ text: "Influencer disclosure rules by country", href: "/blog/influencer-disclosure-rules-by-country" }],
      },
      { type: "heading", text: "How the brief changes by collaboration type", id: "by-collaboration-type" },
      {
        type: "paragraph",
        text: "The one-pager stays the same shape, but each collaboration type needs a few extra lines settled before outreach. Missing them is where most first-round confusion comes from.",
      },
      {
        type: "table",
        headers: ["Collaboration type", "Add to the brief before outreach"],
        rows: [
          ["Paid", "Budget ceiling per tier, payment terms (e.g. against invoice within an agreed number of days), whether GST applies"],
          ["Product gifting", "That posting is optional, what you're sending, shipping timeline, and that any post should be marked as a gift"],
          ["Barter (product for content)", "The agreed deliverables, product value, and that it will be disclosed as a collaboration"],
          ["UGC creation", "Number and length of videos, whether posting on the creator's profile is required, raw footage, usage duration and channels"],
          ["Affiliate or commission", "Commission rate, tracking method (link or code), cookie or attribution window, payout schedule"],
          ["Long-term or ambassador", "Term length, monthly deliverables, exclusivity scope, review points and how either side can end it"],
        ],
      },
      {
        type: "paragraph",
        text: "If the shortlist mixes types (say, five paid creators plus twenty gifting creators), keep one one-pager with a short section per segment rather than separate briefs that drift apart. Before anyone is contacted, run each finalist past the 15 things to check before selecting an influencer, then use the brief's offer section to choose the right contact route and message, as covered in how to contact influencers for brand collaborations.",
        links: [
          { text: "15 things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
          { text: "how to contact influencers for brand collaborations", href: "/blog/how-to-contact-influencers" },
        ],
      },
      { type: "heading", text: "Common mistakes with influencer briefs", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Starting outreach with no budget range, then stalling when creators share rates.",
          "Five objectives in one brief, so nobody knows what the content is for.",
          "Leaving out ad usage, then asking for it after the fee is agreed.",
          "Writing a script and calling it a brief.",
          "Different team members quoting different deliverables to different creators.",
          "No named approver, so drafts wait days for feedback.",
          "Forgetting disclosure until the content is already live.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "An influencer marketing brief written before outreach is the cheapest time-saver in a campaign. One page that settles the objective, audience, creator profile, offer, budget, timeline, rights and disclosure makes every message clearer and every creator conversation shorter. Expand it into a full creative brief only once creators have said yes. If you want help planning the campaign itself, Kudozz's campaign strategy team works with brands on exactly this stage.",
        links: [{ text: "campaign strategy team", href: "/services/campaign-strategy" }],
      },
    ],
    faqs: [
      {
        question: "Is a pre-outreach brief the same as a creative brief?",
        answer: "No. The pre-outreach brief records the brand's decisions (goal, audience, offer, budget, timeline, rights) so you can approach creators clearly. The creative brief, shared after a creator agrees, adds key messages, mandatory points, references and the approval process.",
      },
      {
        question: "Should I share the brief with creators in my first message?",
        answer: "Share the essentials in the message (collaboration type, deliverables, timing, budget line) and offer the full brief as the next step. Most creators prefer a short email first and a one-page brief once they're interested.",
      },
      {
        question: "How detailed should the budget section be?",
        answer: "A range per creator or per tier is enough before outreach, plus the value of any product you're sending. Note what you'd trade off if a creator quotes above it, such as fewer deliverables or no ad usage.",
      },
      {
        question: "Who should sign off the brief?",
        answer: "Whoever controls the budget and whoever approves content. If those are different people, both should agree the one-pager before outreach so creators don't get promises that later change.",
      },
      {
        question: "Can I reuse the same brief for every campaign?",
        answer: "Reuse the template, not the answers. Objective, audience, creator profile and timeline usually change from campaign to campaign, and a stale brief leads to the wrong creators being contacted.",
      },
    ],
  },

  // #49 influencer-marketing-crm (UPGRADE, orig 2026-10-07)
  {
    slug: "influencer-marketing-crm",
    category: "Campaign Strategy",
    title: "How to Organise Influencer Contact Details and Collaboration Records",
    seoTitle: "Influencer Marketing CRM: Organise Creator Contacts | Kudozz",
    excerpt:
      "A practical influencer CRM for brands: what to record about each creator and collaboration, a tracking-sheet structure you can copy, relationship stages, and how to handle contact details responsibly.",
    metaDescription:
      "Set up an influencer marketing CRM: the fields to track, a copyable tracking-sheet layout, relationship stages and careful handling of creator contacts.",
    author: AUTHOR,
    publishedAt: "2026-10-07",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Marketing CRM", "Creator Contact Management", "Influencer Tracking Sheet", "Creator Relationships"],
    related: ["influencer-database", "how-to-create-influencer-outreach-list", "influencer-relationship-management", "influencer-campaign-tracker"],
    hero: {
      src: "/blog/discovery/influencer-marketing-crm.svg",
      alt: "A tracking-sheet layout with columns for creator, profile URL, niche, location, brand fit, contact, outreach date, status, proposed collaboration and notes, linked to a timeline of collaborations with the same creator",
    },
    discoveryCta: {
      headline: "Ready to Add the Right Creators to Your Records?",
      body: "Explore Kudozz Discovery to research Instagram creators in India by niche, city and engagement, keep them in named lists, and reveal an email or phone with credits before you add them to your own tracking sheet.",
    },
    body: [
      {
        type: "paragraph",
        text: "Picture a brand's second festive campaign with creators. The marketing manager who ran the first one has moved teams. Some contact details are in her inbox, some in a WhatsApp group, the agreed rates in a PDF nobody can find. The new manager writes to the same creators from scratch, quotes a different fee to one of them, and rebooks someone who missed every deadline last time. None of that is a creator problem. It's a records problem.",
      },
      {
        type: "paragraph",
        text: "An influencer marketing CRM, whether that's a well-built spreadsheet or dedicated software, fixes it by keeping every creator's contact details and collaboration history in one place that outlasts any campaign or employee. This guide covers what to record, a tracking-sheet structure you can copy, and how to keep contact details tidy and lawful.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To organise influencer contact details and collaboration records, keep one shared, access-controlled sheet or CRM with a row per creator and a linked log of every interaction and collaboration. At minimum record the creator's name, profile URL, niche, location, brand fit, contact details (only where lawfully obtained), outreach date, response status, proposed collaboration and notes. Add rates, deliverables, results, usage-rights expiry and a rebook decision once you work together. Give each creator an owner, update the record the same day something changes, and delete details you no longer need.",
      },
      { type: "heading", text: "CRM, database, outreach list or campaign tracker?", id: "crm-vs-database" },
      {
        type: "paragraph",
        text: "Teams often use these terms interchangeably, but each answers a different question, and knowing which one you're building tells you what to store.",
      },
      {
        type: "table",
        headers: ["Record", "Question it answers", "Time horizon"],
        rows: [
          ["Creator database", "Who could we work with?", "Discovery, before contact"],
          ["Outreach list", "Who are we contacting for this campaign, and where are they?", "One outreach round"],
          ["Campaign tracker", "Where is each deliverable right now?", "One live campaign"],
          ["Influencer CRM", "Who have we worked with, how did it go, how do we reach them?", "Across all campaigns, over years"],
        ],
      },
      {
        type: "paragraph",
        text: "Many brands run all four in one workbook with linked tabs, which is fine. The discovery side is covered in how to build an influencer database for your marketing team, a campaign's outreach round in how to create an influencer outreach list, and live deliverables in influencer campaign status tracking. This article is about the long-lived record of contacts and collaborations.",
        links: [
          { text: "how to build an influencer database for your marketing team", href: "/blog/influencer-database" },
          { text: "how to create an influencer outreach list", href: "/blog/how-to-create-influencer-outreach-list" },
          { text: "influencer campaign status tracking", href: "/blog/influencer-campaign-tracker" },
        ],
      },
      { type: "heading", text: "The tracking-sheet structure", id: "tracking-sheet" },
      {
        type: "paragraph",
        text: "Start with two tabs: Creators (one row per creator, the stable facts) and Collaborations (one row per outreach or collaboration, linked by a creator ID). This keeps contact details in one place while history grows underneath.",
      },
      {
        type: "template",
        label: "Tab 1: Creators (one row per creator)",
        text: "Column                  | Example / allowed values\n------------------------|-------------------------------------------------\nCreator ID              | CR-0142\nCreator name            | [Full name or name the creator uses publicly]\nProfile URL             | https://www.instagram.com/[handle]/\nNiche                   | Food & Beverages (pick from a fixed list)\nLocation                | Nashik, Maharashtra\nLanguage(s)             | Marathi, Hindi\nBrand fit (1-5)         | 4\nBrand fit note          | Weekly recipe Reels; audience asks about healthy snacks\nContact: email          | [only where lawfully obtained, e.g. published for business]\nContact: phone          | [only if shared or obtained for work]\nContact source + date   | Instagram contact button, 12/11/2026\nManager / agency        | [name, verified on profile? Y/N]\nPreferred channel       | Email\nOwner (our team)        | [name]\nRelationship stage      | Prospect / Contacted / In discussion / Partner / Repeat / Paused / Do not contact\nDo-not-contact flag     | N (if Y: reason + date)\nLast contact date       | 18/11/2026",
      },
      {
        type: "template",
        label: "Tab 2: Collaborations (one row per outreach or collaboration)",
        text: "Column                  | Example / allowed values\n------------------------|-------------------------------------------------\nCreator ID              | CR-0142\nCampaign                | Festive bar launch, Nov 2026\nOutreach date           | 12/11/2026\nFollow-up dates         | 17/11/2026, 24/11/2026\nResponse status         | No reply / Replied / Interested / Declined / Booked\nProposed collaboration  | Paid: 1 Reel + 2 Stories\nRate quoted / agreed    | [₹ amount, + GST if applicable]\nUsage rights            | Organic repost; ads 3 months (expires 28/02/2027)\nExclusivity             | Category, 30 days after go-live\nDeliverable links       | [live post URLs]\nResults (with date)     | [views, saves, clicks, code uses; captured dd/mm]\nReliability (1-5)       | 5 (draft on time, one revision)\nRebook?                 | Yes / Maybe / No (with reason)\nNotes                   | Prefers briefs by email; avoids sugar claims",
      },
      {
        type: "paragraph",
        text: "If you're starting from nothing, ten fields are enough to run outreach: creator name, profile URL, niche, location, brand fit, contact details where lawfully obtained, outreach date, response status, proposed collaboration and notes. The rest earn their place once you've worked with someone.",
      },
      { type: "subheading", text: "Fields brands most often regret skipping" },
      {
        type: "list",
        items: [
          "Contact source and date: you'll want to know where a number came from if a creator asks.",
          "Usage-rights expiry: without it, brands either stop using good content too early or keep running it in ads after rights lapse.",
          "Do-not-contact flag: one line that stops a colleague re-pitching a creator who asked not to be contacted.",
          "Owner: every active creator needs a named person, or follow-ups fall through.",
          "Results with a capture date: a view count means little without knowing when it was recorded.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to influencer usage rights explains what to record about rights, and influencer relationship management covers how to use this history to build ongoing partnerships.",
        links: [
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer relationship management", href: "/blog/influencer-relationship-management" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Explore Creator Profiles Before You Add Them",
        body: "Kudozz Discovery shows each Instagram creator's niche, city, followers, average views and engagement rate, lets you save creators into named lists, and reveals an email or phone with credits. Record what you use in your own sheet.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Relationship stages", id: "stages" },
      {
        type: "template",
        label: "Creator relationship stages",
        text: "PROSPECT ......... Identified and reviewed, not contacted\nCONTACTED ........ Outreach sent, awaiting reply\nIN DISCUSSION .... Interested; terms or fit being discussed\nPARTNER .......... One completed collaboration\nREPEAT PARTNER ... Two or more; performance and reliability known\nPAUSED ........... Good relationship, nothing active now\nDO NOT CONTACT ... Creator asked us to stop, or we chose not to rebook (reason recorded)",
      },
      {
        type: "paragraph",
        text: "Stages make the sheet useful at a glance. Filtering for repeat partners with a reliability score of 4 or 5 is how you staff a rushed Diwali campaign in an afternoon. Building a long-term influencer partnership programme covers what to do with them next.",
        links: [{ text: "Building a long-term influencer partnership programme", href: "/blog/influencer-partnerships" }],
      },
      { type: "heading", text: "Handling contact details lawfully and carefully", id: "contact-details" },
      {
        type: "paragraph",
        text: "Creator emails, phone numbers, addresses for product shipping and bank details are personal data. India's Digital Personal Data Protection Act, 2023 sets general obligations for organisations that process personal data, with its rules being brought into force in phases. This is general information, not legal advice; check with your legal or compliance team how it applies to your business. Practical habits that help:",
      },
      {
        type: "list",
        items: [
          "Record only what you need for the collaboration, and where each contact detail came from.",
          "Use contact details for the purpose they were shared for, not for unrelated marketing.",
          "Keep the sheet access-controlled; share view or edit rights by role, not with whole departments.",
          "Keep bank, PAN and GST details with finance, not in the outreach sheet.",
          "Act promptly on a creator's request to stop contact or delete their details, and log it.",
          "Review the sheet periodically and delete contacts for creators you won't approach again.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing data privacy covers creator and audience data in more depth.",
        links: [{ text: "Influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" }],
      },
      { type: "heading", text: "Habits that keep the records useful", id: "habits" },
      {
        type: "list",
        items: [
          "Update the record the same day something happens: a reply, a rate, a missed deadline.",
          "Write a short post-campaign note within a week: what worked, would we rebook, why.",
          "Use fixed lists for niche, stage and status so filters work.",
          "Use the same date format everywhere (dd/mm/yyyy is the natural choice for Indian teams).",
          "Archive rather than delete collaboration history, so rates and results stay available.",
          "Review repeat partners every quarter for rate changes, audience shifts and reliability.",
        ],
      },
      { type: "heading", text: "When a creator gets a record", id: "when-to-create-records" },
      {
        type: "paragraph",
        text: "Not every creator you look at belongs in the CRM. Browsing and longlisting happen in your discovery tool or creator database. A creator earns a row in the Creators tab once you've reviewed them properly and decided to approach them, which is usually the point you look up or reveal a contact detail. That keeps the CRM small, accurate and focused on real relationships.",
      },
      {
        type: "list",
        items: [
          "Shortlisted and approved for outreach: create the Creators row with profile URL, niche, location, brand fit and owner.",
          "Contact found: add the email or phone, plus where it came from and the date.",
          "First message sent: add a Collaborations row with outreach date, proposed collaboration and status.",
          "Every follow-up, reply, rate or decision: update the same row the same day.",
          "Campaign finished: add results, reliability and the rebook decision, then move the stage forward.",
        ],
      },
      {
        type: "paragraph",
        text: "If you shortlist in a tool, copy across the facts you need (profile URL, niche, city) rather than relying on the tool as your record of relationships. The step before this, turning a longlist into finalists, is covered in how to shortlist influencers for a brand campaign, and timing the nudges you log here is covered in how to follow up with influencers.",
        links: [
          { text: "how to shortlist influencers for a brand campaign", href: "/blog/influencer-shortlist" },
          { text: "how to follow up with influencers", href: "/blog/influencer-follow-up" },
        ],
      },
      { type: "heading", text: "Spreadsheet, general CRM or influencer software?", id: "tool-choice" },
      {
        type: "table",
        headers: ["Option", "Suits", "Limits"],
        rows: [
          ["Shared spreadsheet with two tabs", "Small teams, up to a few dozen active creators", "Weak interaction history; easy to break with many editors"],
          ["Database or project tool with linked records", "Growing teams running several campaigns a quarter", "Needs someone to design and maintain it"],
          ["General sales CRM", "Brands that already use one well", "Built for customers, so creator fields need customising"],
          ["Influencer campaign software", "Larger programmes with many creators", "Cost and setup; check what it actually stores and exports"],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever you choose, the fields matter more than the tool. If you're comparing software, influencer campaign management software lists what to check. Note that a CRM for your creator records is different from connecting influencer campaigns to your customer CRM, which is covered separately in how to connect influencer campaigns to your CRM and follow-up process.",
        links: [
          { text: "influencer campaign management software", href: "/blog/influencer-campaign-management-software" },
          { text: "how to connect influencer campaigns to your CRM and follow-up process", href: "/blog/influencer-leads-crm-follow-up" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Keeping contact details in personal inboxes and WhatsApp chats.",
          "One giant sheet per campaign, so history is scattered across files.",
          "Free-text niches and statuses that can't be filtered.",
          "No do-not-contact flag, leading to repeat pitches to creators who said no.",
          "Storing phone numbers with no note of how they were obtained.",
          "Recording results without dates, or never recording them at all.",
          "Letting the sheet go stale between campaigns.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "An influencer CRM doesn't have to be expensive. Two linked tabs, fixed lists, an owner per creator and a habit of same-day updates will carry most brands a long way. Record contact details only where lawfully obtained, note where they came from, and keep the collaboration history that makes the next campaign faster than the last.",
      },
    ],
    faqs: [
      {
        question: "Do I need dedicated software for an influencer CRM?",
        answer: "Not at first. A shared spreadsheet with a Creators tab and a Collaborations tab works for many brands. Move to a database or dedicated tool when several people run campaigns at once or the sheet becomes hard to keep accurate.",
      },
      {
        question: "Should I store creators' phone numbers?",
        answer: "Only if the creator shared it for work or it was obtained lawfully for business contact, and only if you'll use it. Record where it came from, and remove it if the creator asks.",
      },
      {
        question: "Who should own the influencer CRM?",
        answer: "One person should own the structure and data quality, usually the influencer or programme lead. Each creator record should also have a named owner responsible for keeping it updated.",
      },
      {
        question: "How long should I keep creator records?",
        answer: "Keep collaboration history for as long as it's useful for rebooking and rights tracking, and in line with your own data-retention policy. Delete contact details for creators you've decided not to approach again.",
      },
      {
        question: "Can the same sheet track live campaign deliverables?",
        answer: "It can, with a separate tab for the live campaign linked by creator ID. Keep the long-term record and the day-to-day tracker distinct so the CRM doesn't fill up with temporary status notes.",
      },
    ],
  },

  // #50 influencer-follow-up (UPGRADE, orig 2026-10-08)
  {
    slug: "influencer-follow-up",
    category: "Influencer Marketing",
    title: "How to Follow Up With Influencers After Sending a Collaboration Request",
    seoTitle: "Influencer Follow-Up: When and How to Follow Up | Kudozz",
    excerpt:
      "A simple follow-up cadence for collaboration requests, what each message should add, when to stop, and how to handle a maybe, a rate card, a decline or a creator who goes quiet mid-conversation.",
    metaDescription:
      "How to follow up with influencers after a collaboration request: a respectful cadence, ready-to-adapt messages, stop rules, and handling a maybe or a decline.",
    author: AUTHOR,
    publishedAt: "2026-10-08",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Follow-Up", "Influencer Outreach", "Follow-Up Email", "Creator Relationships"],
    related: ["influencer-outreach-email", "influencer-response-rate", "how-to-contact-influencers", "influencer-collaboration-rejection"],
    hero: {
      src: "/blog/discovery/influencer-follow-up.svg",
      alt: "A follow-up timeline: first message on day 0, a short follow-up around day 4 to 5 that adds something new, a final note around day 10 to 12, then the record is closed",
    },
    discoveryCta: {
      headline: "Keep Your Creator Pipeline Full",
      body: "Not every creator will reply, and that's normal. Explore Kudozz Discovery to research more Instagram creators in India by niche, city and engagement, save backups to a list, and reveal contact details with credits when you need them.",
    },
    body: [
      {
        type: "paragraph",
        text: "Should you follow up with an influencer who hasn't replied? Yes, once or twice, and then let it go. Creators miss emails for ordinary reasons: a full inbox during the festive season, a manager on leave, a message request that never surfaced. A short, polite follow-up often gets the answer the first message didn't. A third and fourth chase rarely does, and it costs you goodwill with that creator and sometimes their manager's whole roster.",
      },
      {
        type: "paragraph",
        text: "This guide covers the follow-up after a collaboration request: a cadence you can apply to every creator, what each message should add, when to stop, and how to handle the replies that aren't a clean yes. It also covers the follow-ups brands owe creators, which is where many promising conversations actually stall.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "After a collaboration request gets no reply, follow up once after about four or five working days, in the same thread, adding one new piece of information. If there's still no reply, send a short final note about a week later with a clear deadline, then close the record. Keep each follow-up shorter than the first message, stay on the same channel, and make saying no easy. Stop immediately if the creator declines, asks you to stop, or replies anywhere. Once a creator does reply, the brand should answer within a couple of working days.",
      },
      { type: "heading", text: "A follow-up cadence you can reuse", id: "cadence" },
      {
        type: "paragraph",
        text: "These gaps are a rule of thumb, not a law. Stretch them for creators who are travelling or mid-campaign, and shorten them only when you've told the creator about a genuine deadline.",
      },
      {
        type: "table",
        headers: ["Day (working days)", "Message", "What it adds", "Channel"],
        rows: [
          ["0", "First collaboration request", "The full offer", "Creator's business email (or DM for small creators)"],
          ["4–5", "Follow-up 1", "One new detail: dates confirmed, budget approved, product ready", "Same thread"],
          ["10–12", "Final follow-up", "A real decision date and an easy way to say no", "Same thread"],
          ["After final", "Close", "Mark as no reply; note if worth trying for a future campaign", "Your records only"],
        ],
      },
      {
        type: "template",
        label: "Follow-up cadence checklist",
        text: "Day 0   Send request. Log date, channel, owner.\nDay 4-5 Follow-up 1 in the same thread. Add one new detail. Under 60 words.\nDay 10-12 Final note. Give a decision date. Make \"no\" easy.\nAfter   No reply? Close the row as \"No reply\". Do not switch channels to chase.\nAnytime Creator replies or declines: stop the sequence immediately.\n        Creator asks you to stop: mark Do-not-contact and record the date.",
      },
      { type: "heading", text: "What each follow-up should say", id: "follow-up-messages" },
      {
        type: "paragraph",
        text: "A follow-up that only says \"just bumping this up\" gives the creator no new reason to reply. Each one should add something: a confirmed date, a budget decision, a product that's now ready to ship, or a short clarification of what you're asking for.",
      },
      {
        type: "template",
        label: "Follow-up 1 (day 4–5)",
        text: "Subject: Re: [original subject]\n\nHi [first name],\n\nFollowing up on my note about [campaign]. Quick update: we've now [confirmed the go-live window as 1-7 December / got budget approval for this / have the product ready to ship this week].\n\nIf it's not a fit right now, a quick no is completely fine. Otherwise, happy to send the one-page brief.\n\nThanks,\n[Name]",
      },
      {
        type: "template",
        label: "Final follow-up (day 10–12)",
        text: "Subject: Re: [original subject]\n\nHi [first name],\n\nLast note from me on [campaign]. We're finalising creators by [date]. If you're interested, just reply here and I'll send details the same day. If not, no problem at all, and thank you for your time.\n\n[Name]",
      },
      {
        type: "template",
        label: "DM follow-up (for creators contacted on Instagram)",
        text: "Hi [name], following up on my message about a paid collaboration with [brand] for [month]. No pressure at all. If you'd like the details, could I email them to you?",
      },
      {
        type: "paragraph",
        text: "The first message matters as much as the follow-up. If you're getting few replies, look at the request itself; how to write an influencer collaboration email covers subject lines, structure and templates, and influencer response rate looks at the wider reasons creators don't answer.",
        links: [
          { text: "how to write an influencer collaboration email", href: "/blog/influencer-outreach-email" },
          { text: "influencer response rate", href: "/blog/influencer-response-rate" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Line Up Backup Creators",
        body: "A follow-up plan works best with backups ready. Kudozz Discovery lets you search Instagram creators in India by niche, city, language and engagement, and save alternatives to the same campaign list.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Rules that keep follow-ups respectful", id: "rules" },
      {
        type: "list",
        items: [
          "Stay on one channel. Don't email, DM and message the manager on the same day.",
          "Reply in the same thread so the creator sees the context without searching.",
          "Keep follow-ups shorter than the original message.",
          "Never send a follow-up the next day, or on a Sunday night.",
          "Don't move to WhatsApp or a phone call unless the creator has shared that number for work.",
          "If you use any automation, it must stop the moment a creator replies on any channel.",
          "One person owns each creator conversation, so nobody gets two different nudges.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're tempted to automate sequences, influencer outreach automation sets out where it helps and where it hurts. Track every send and follow-up date in your influencer CRM so the cadence holds even when the person who sent the first email is busy.",
        links: [
          { text: "influencer outreach automation", href: "/blog/influencer-outreach-automation" },
          { text: "influencer CRM", href: "/blog/influencer-marketing-crm" },
        ],
      },
      { type: "heading", text: "When the reply isn't a yes", id: "other-replies" },
      { type: "subheading", text: "\"Maybe later\" or \"not this month\"" },
      {
        type: "paragraph",
        text: "That's permission to come back with a specific opportunity at the right time, not to chase. Record when and why, and return when you have something concrete.",
      },
      {
        type: "template",
        label: "Reopening after \"not now\"",
        text: "Hi [name], when we spoke in [month] you mentioned [reason: festive campaigns were full / you wanted to try the product first]. We're planning [new campaign] for [month] and thought of you because [specific reason]. Would you like to see the brief?",
      },
      { type: "subheading", text: "The creator sends a rate card" },
      {
        type: "paragraph",
        text: "Now the follow-up burden is yours. Acknowledge within a couple of working days, even if the answer is that you're reviewing. If the rate is above budget, say so honestly and suggest a different scope rather than going silent. Our guide on how to negotiate influencer collaboration rates covers the conversation itself.",
        links: [{ text: "how to negotiate influencer collaboration rates", href: "/blog/negotiate-influencer-rates" }],
      },
      {
        type: "template",
        label: "Acknowledging a rate card",
        text: "Hi [name], thanks for sending your rates. We're reviewing them against the campaign budget and will come back to you by [day, date]. One quick question in the meantime: does the Reel rate include [usage for ads / raw footage], or is that separate?",
      },
      { type: "subheading", text: "After a call" },
      {
        type: "template",
        label: "Summary after a call",
        text: "Hi [name], thanks for the call today. Summary of what we discussed:\n- Deliverables: [ ]\n- Timeline: draft by [date], live on [date]\n- Fee: ₹[ ] + GST if applicable, paid [terms]\n- Usage: [organic only / ads for x months]\n- Open questions: [ ]\nI'll send the agreement by [date]. Let me know if I've missed anything.",
      },
      { type: "subheading", text: "A decline" },
      {
        type: "paragraph",
        text: "Thank them, close the record, and don't argue. A gracious reply keeps the door open for a better-fitting campaign later. Influencer collaboration rejection covers how to handle declines on both sides.",
        links: [{ text: "Influencer collaboration rejection", href: "/blog/influencer-collaboration-rejection" }],
      },
      {
        type: "template",
        label: "Reply to a decline",
        text: "Thanks for letting me know, [name], and for the quick reply. Completely understand. We'll keep enjoying your content, and if a campaign comes up that suits you better, I'll reach out then.",
      },
      { type: "subheading", text: "The creator goes quiet mid-conversation" },
      {
        type: "paragraph",
        text: "If a creator was interested and then stopped replying after you sent terms, send one check-in asking whether anything is unclear, and offer an easy exit. Then give them space. Silence after terms usually means the offer doesn't work for them, not that they missed the email.",
      },
      { type: "heading", text: "The follow-ups brands owe creators", id: "brand-follow-ups" },
      {
        type: "paragraph",
        text: "Once a creator says yes, most of the following up is the brand's job, and slow brands lose good creators at this stage more often than at first contact. A few habits make a visible difference:",
      },
      {
        type: "list",
        items: [
          "Send the agreement or brief when you said you would, or tell the creator about the delay before the date passes.",
          "Remind creators two or three days before a draft is due, not the day after it's late.",
          "Give draft feedback within the turnaround you promised, in one consolidated message.",
          "Tell the creator when payment has been processed, especially if your finance cycle is long.",
          "After the campaign, share how their content did and say thank you.",
        ],
      },
      {
        type: "template",
        label: "After the campaign: results and thanks",
        text: "Hi [name], thank you again for the [Reel / video] for [campaign]. It's been one of our strongest pieces: [one specific, honest result, e.g. lots of questions about the product in the comments / the most saves of any creator post this month]. Payment was processed on [date]; let me know if anything's missing on your side. We'd love to work together again on [next launch / season] and will be in touch when it's confirmed.",
      },
      {
        type: "paragraph",
        text: "That last message is the one most brands skip, and it's often what turns a single campaign into a repeat partnership. Influencer relationship management covers the longer arc, and influencer feedback looks at how to give creators useful notes on drafts and results.",
        links: [
          { text: "Influencer relationship management", href: "/blog/influencer-relationship-management" },
          { text: "influencer feedback", href: "/blog/influencer-feedback" },
        ],
      },
      { type: "heading", text: "Common follow-up mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Following up the day after the first message.",
          "\"Just checking if you saw my email?\" with nothing new.",
          "Chasing across email, DMs, comments and WhatsApp at once.",
          "Sending a third and fourth follow-up to someone who hasn't replied to two.",
          "Taking a week to respond after the creator shares rates.",
          "Going silent instead of telling a creator you've decided not to proceed.",
          "Re-pitching a creator who already said no because nobody recorded it.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good follow-up is short, timely and limited. Two messages after the first request, each adding something new, then a clean stop. Once a creator replies, answer quickly and in writing, and tell them where things stand even when the answer is no. If you'd rather hand the whole outreach process to a team, Kudozz runs influencer outreach for brands as part of its influencer marketing services.",
        links: [{ text: "influencer marketing services", href: "/services/influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "How long should I wait before following up with an influencer?",
        answer: "About four or five working days after the first message is a sensible rule of thumb. Give more time during busy periods like the festive season, or if the creator's profile suggests they're travelling.",
      },
      {
        question: "How many times should I follow up?",
        answer: "Twice at most after the first message. If there's no reply after the final note, close the record and move to your backup creators.",
      },
      {
        question: "Should I follow up on a different channel if email gets no reply?",
        answer: "Generally no. If you first sent a DM because the creator lists no email, it's fine to ask in a follow-up whether email is better. Avoid jumping to WhatsApp or phone unless the creator shared that number for work.",
      },
      {
        question: "What if a creator replies to a follow-up after I've already closed the campaign?",
        answer: "Thank them, explain the campaign is full, and offer to keep them in mind for the next one. Record their interest so the next campaign starts with a warm contact.",
      },
      {
        question: "Is it okay to follow up with a creator's manager instead?",
        answer: "Only if the manager is the published contact for collaborations. Don't go around a creator who hasn't replied by contacting a manager you found elsewhere.",
      },
    ],
  },
];

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

  // #48 influencer-campaign-brief (UPGRADE, orig 2026-09-13; re-angled 2026-11-26 to the brief-template guide, Blog 22)
  {
    slug: "influencer-campaign-brief",
    category: "Campaign Strategy",
    title: "Influencer Marketing Brief Template: How to Create a Brief That Gets Better Creator Responses",
    seoTitle: "Influencer Marketing Brief Template (Free, Copy-Ready)",
    excerpt:
      "What an influencer marketing brief is, the 17 things it should settle, a filled-in sample for an Indian D2C skincare launch and a copy-ready template you can adapt for your next campaign.",
    metaDescription:
      "A copy-ready influencer marketing brief template for Indian brands, with a filled-in D2C skincare sample, the 17 elements to include and the mistakes to avoid.",
    author: AUTHOR,
    publishedAt: "2026-09-13",
    updatedAt: "2026-11-26",
    lastReviewed: "November 2026",
    readingTime: "12 min read",
    tags: ["Influencer Marketing Brief Template", "Influencer Campaign Brief", "Creator Briefing", "Campaign Planning", "India"],
    related: ["instagram-influencer-campaign-brief", "influencer-shortlist", "influencer-usage-rights", "influencer-outreach-email"],
    hero: {
      src: "/blog/discovery/influencer-marketing-brief-template.svg",
      alt: "An influencer marketing brief for a D2C skincare launch, laid out as seven sections: campaign overview, target audience, creator requirements, deliverables, creative direction, commercial terms, and tracking and reporting",
    },
    discoveryCta: {
      headline: "Have Your Campaign Brief Ready?",
      body: "Turn the creator requirements in your brief into a shortlist. Explore Kudozz Discovery to search Instagram creators in India by niche, city, language, follower range and engagement, and save the ones who fit into a list for this campaign.",
      ctaLabel: "Start discovering creators",
    },
    body: [
      {
        type: "paragraph",
        text: "Most creators can tell within a minute whether a brand knows what it wants. A message that says \"we'd love to collaborate, please share your rates\" gets a rate card and little else. A message backed by a clear brief (one Reel and three Stories, go-live between 10 and 20 June, organic use plus 60 days of paid ads, Hindi or English, budget band attached) gets a considered reply, an accurate quote and often a better idea than the one you had.",
      },
      {
        type: "paragraph",
        text: "This guide explains what an influencer marketing brief is, the elements it should cover, how to set objectives and creative freedom, and how to tell whether your brief is working. It ends with a filled-in sample for an Indian D2C skincare brand and a copy-ready template you can paste into a document and adapt.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer marketing brief is a short document that tells a creator what the campaign is for, who it needs to reach, what to make, by when, for how much and under what terms. A useful brief template has seven sections: campaign overview, target audience, creator requirements, deliverables, creative direction, commercial terms (budget, payment, usage rights, exclusivity) and tracking and reporting. Write it before you contact anyone, keep the first version to one or two pages, and give creators direction on outcomes rather than a script.",
      },
      { type: "heading", text: "What is an influencer marketing brief?", id: "what-is-a-brief" },
      {
        type: "paragraph",
        text: "An influencer marketing brief (also called an influencer campaign brief or creator collaboration brief) is the shared reference for a collaboration. The brand uses it to agree internally on what it is asking for. The creator uses it to decide whether the work fits their audience, to price it, and later to make content that meets the brief without guessing.",
      },
      {
        type: "paragraph",
        text: "In practice, it often exists in two stages. A one-page version goes out with or soon after your first message, covering the objective, deliverables, timeline, budget band and rights, so the creator can say yes and quote accurately. Once terms are agreed, it grows into the full creative brief with key messages, mandatory points, references, claims to avoid and the approval process. The template later in this article covers both: send the top half early and complete the rest at onboarding.",
      },
      { type: "heading", text: "Why prepare the brief before contacting creators?", id: "why-before-outreach" },
      {
        type: "list",
        items: [
          "It forces decisions. Budget, ad usage and timelines get settled inside the team before anyone makes a promise to a creator.",
          "It keeps outreach consistent. Two people on your team won't quote two different deliverables or fees to two creators.",
          "It produces better quotes. A creator pricing \"one Reel, organic only\" and one pricing \"one Reel plus three months of paid ads with category exclusivity\" are pricing different jobs.",
          "It sharpens discovery. \"Hindi-speaking skincare creators in Lucknow and Kanpur, 10K–100K followers, who already post routine Reels\" is a search you can run. \"Beauty influencers\" is not.",
          "It shortens every conversation after the first one, because the answers to the usual first-round questions already exist.",
        ],
      },
      {
        type: "paragraph",
        text: "As budgets grow, so does the cost of vague briefs. WPP Media's India Influencer Marketing Report 2025, produced with Kantar, estimated influencer marketing in India at ₹3,600 crore in 2024 and forecast 25% growth in 2025. More brands competing for the same creators means the clearest offers tend to get the quickest, most considered replies.",
        links: [{ text: "India Influencer Marketing Report 2025", href: "https://www.wppmedia.com/news/influencing-with-integrity" }],
      },
      { type: "heading", text: "What should an influencer marketing brief include?", id: "what-to-include" },
      {
        type: "paragraph",
        text: "These are the elements a complete brief covers. Not every campaign needs every row filled in detail; a product-gifting round can skip payment terms, for example. But leaving one out should be a decision, not an oversight.",
      },
      {
        type: "table",
        headers: ["Element", "What to write", "Why it matters to the creator"],
        rows: [
          ["Brand and product introduction", "Two or three plain sentences: what you sell, to whom, what makes this product different", "They need to know whether they would genuinely use it"],
          ["Campaign objective", "One primary goal and how you will judge it", "It decides format, call to action and what \"good\" looks like"],
          ["Target audience", "Age range, cities or states, language, interests, the problem they want solved", "Creators know their own audience and can tell you honestly if it matches"],
          ["Campaign concept", "The idea or theme in one line, e.g. \"the 3-step monsoon routine\"", "Gives a starting point without dictating the content"],
          ["Creator profile and niche", "Niche, platform, follower band, language, location, content style", "Explains why you approached them"],
          ["Content formats", "Reel, Story set, carousel, YouTube integration, UGC-only video", "Each format is priced and produced differently"],
          ["Deliverables and quantities", "Exact counts, lengths and any raw files", "The basis of the quote"],
          ["Key message", "The one thing viewers should remember", "One message lands; five get lost"],
          ["Mandatory talking points", "Product name, a feature, tag, link, code, disclosure label", "Non-negotiables stated once, upfront"],
          ["Creative guidelines", "Tone, visual guardrails, product handling, two or three reference posts", "Keeps brand consistency without a script"],
          ["Dos and don'ts", "Claims to avoid, competitor mentions, sensitive topics", "Prevents re-shoots and compliance problems"],
          ["Timeline and deadlines", "Product dispatch, draft due, feedback turnaround, go-live window", "Creators plan weeks ahead, especially around festive peaks"],
          ["Budget and payment terms", "Fee or budget band, product value, GST, invoice and payment days", "The first thing most creators ask"],
          ["Usage rights and licensing", "Organic repost, paid ads, website use, duration, territory", "Ad usage changes the price"],
          ["Exclusivity", "Category, competitors, duration before and after go-live", "It costs the creator other deals"],
          ["Approval process", "Who reviews, how many revision rounds, your turnaround", "Avoids drafts waiting days for feedback"],
          ["Performance expectations and reporting", "KPIs, tracking links or codes, which insights screenshots you need and by when", "Sets expectations on proof of delivery"],
        ],
      },
      { type: "subheading", text: "Key message versus mandatory talking points" },
      {
        type: "paragraph",
        text: "The key message is what you want the viewer to believe after watching: \"this moisturiser doesn't feel heavy in humid weather\". Mandatory talking points are the facts that must appear: the product name, the ingredient you lead with, the price or offer, the tag and the disclosure. Keep the key message to one line and the mandatory list short. Every extra must-say point pushes the content closer to a read-out advert, which audiences scroll past.",
      },
      { type: "subheading", text: "Usage rights, licensing and exclusivity" },
      {
        type: "paragraph",
        text: "Decide these before you ask for rates. Reposting a creator's Reel on your own feed, running it as a paid ad for 90 days and using clips on your product pages are three different licences, and each one affects the fee. Exclusivity is similar: asking a skincare creator not to work with other sunscreen brands for 60 days has a real cost to them. Our guide to influencer usage rights covers the terms in detail.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "How to define the campaign objective", id: "campaign-objectives" },
      {
        type: "paragraph",
        text: "Pick one primary objective per brief. A campaign can have secondary benefits, but the creator needs to know which one the content is built for, because a Reel designed for reach looks different from one designed to drive code redemptions.",
      },
      {
        type: "table",
        headers: ["Objective", "What the brief should ask for", "How you might judge it"],
        rows: [
          ["Awareness", "A memorable product moment, the brand name said and shown, broad-appeal content", "Views and reach among the target audience, branded search lift"],
          ["Reach", "Formats the creator's audience watches most, often Reels or Shorts; a wider creator mix", "Unique accounts reached, total views across creators"],
          ["Engagement", "A prompt that invites comments or saves, e.g. a question or a routine to try", "Comments that discuss the product, saves, shares"],
          ["Website traffic", "A clear call to action, link sticker or link in bio, UTM-tagged links", "Sessions from each creator's link, bounce rate, time on site"],
          ["Sales and conversions", "A reason to buy now, a creator-specific discount code, a landing page that matches the content", "Orders and revenue per code or link, cost per order"],
          ["User-generated content", "Raw files, multiple hooks, specified lengths and aspect ratios, ad usage terms", "Number of usable assets, performance when run as ads"],
        ],
      },
      {
        type: "paragraph",
        text: "Write the objective as a sentence with a measure: \"Drive first orders of the gel moisturiser from women aged 20–32 in Maharashtra and Karnataka, judged on orders through creator codes in the first 30 days.\" That single line tells a creator more than a paragraph about the brand's vision. If you are planning the wider measurement framework, influencer marketing KPIs explains which metrics fit which goal.",
        links: [{ text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" }],
      },
      { type: "heading", text: "How to choose the right creators for your brief", id: "choose-creators" },
      {
        type: "paragraph",
        text: "The creator requirements section of the brief is also your search specification. Translate each line into something you can check on a profile:",
      },
      {
        type: "list",
        items: [
          "Niche: does the creator already make content in your category, not just occasionally mention it?",
          "Audience location and language: do captions, voiceovers and comments match the cities and languages in your brief?",
          "Follower band: does it fit your budget and the number of creators you need? Several 10K–100K creators and one larger creator is a common mix, but your objective should decide it.",
          "Recent performance: average views and engagement across the last 10 to 15 posts, not one viral video.",
          "Content style: would your product look natural in their last five posts?",
          "Conflicts: have they promoted a direct competitor recently, and would your exclusivity request clash with an existing deal?",
        ],
      },
      {
        type: "paragraph",
        text: "From there, build a shortlist with more names than you need, since some creators will decline or quote above budget. How to shortlist influencers for a brand campaign walks through scoring and comparing candidates, and how to find the right influencers for your brand in India covers the search methods themselves.",
        links: [
          { text: "How to shortlist influencers for a brand campaign", href: "/blog/influencer-shortlist" },
          { text: "how to find the right influencers for your brand in India", href: "/blog/find-indian-influencers" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Your brief already describes the creators you need",
        body: "Niche, follower range, city, language and minimum engagement are filters in Kudozz Discovery. Search Instagram creators in India against your brief, open profiles to check average views and engagement, and save the right ones to a list for this campaign.",
        ctaLabel: "Search creators for this brief",
      },
      { type: "heading", text: "How to give creative freedom without losing brand consistency", id: "creative-freedom" },
      {
        type: "paragraph",
        text: "Creators are hired for the way they talk to their audience. A brief that scripts every line throws that away. A brief with no guardrails risks content that is off-brand or makes claims you can't support. The answer is to be explicit about which parts are fixed and which are theirs.",
      },
      {
        type: "table",
        headers: ["Fixed by the brand", "Left to the creator"],
        rows: [
          ["The key message (one line)", "How they open the video and the hook they use"],
          ["Product name, price or offer, tag, link and code", "Their own words, language and humour"],
          ["Claims that must be stated precisely, and claims to avoid", "Setting, styling and how the product fits their routine"],
          ["Disclosure label and placement", "Story structure and pacing"],
          ["Deadlines and number of revision rounds", "Music, edits and format choices within the agreed deliverable"],
        ],
      },
      {
        type: "paragraph",
        text: "Write direction as outcomes: \"show how it sits under sunscreen on a humid morning\" rather than \"say: this is the best moisturiser I've ever used\". Share two or three reference posts and say what you like about each, rather than asking for a copy. And limit feedback to the brief: if a draft meets the key message, mandatory points and guidelines, approve it, even if your team would have shot it differently.",
      },
      { type: "heading", text: "Disclosure requirements for campaigns in India", id: "disclosure" },
      {
        type: "paragraph",
        text: "Put the disclosure requirement in the brief, not in a follow-up message after the post goes live. ASCI's influencer advertising guidelines expect any material connection with a brand (payment, free or unsolicited product, or another relationship) to be disclosed upfront and prominently, not buried among hashtags or left to the bio. Accepted labels include \"Advertisement\", \"Ad\", \"Sponsored\", \"Collaboration\", \"Partnership\", \"Free gift\" and \"Affiliate\", alongside platform tags such as Instagram's \"Paid partnership\" and YouTube's \"Includes paid promotion\". For video without text, ASCI asks for the label to be superimposed on screen: for at least 3 seconds on videos of 15 seconds or less, for a third of the length on videos up to 2 minutes, and for the whole brand segment on longer videos. Instagram's own branded content policies also require its paid partnership label on branded posts. Finance and health creators must additionally state relevant qualifications, so check those before briefing. Running creators in other markets? Influencer disclosure rules by country summarises what changes.",
        links: [
          { text: "ASCI's influencer advertising guidelines", href: "https://www.ascionline.in/wp-content/uploads/2023/08/GUIDELINES-FOR-INFLUENCER-ADVERTISING-IN-DIGITAL-MEDIA.pdf" },
          { text: "branded content policies", href: "https://www.facebook.com/help/instagram/616901995832907" },
          { text: "Influencer disclosure rules by country", href: "/blog/influencer-disclosure-rules-by-country" },
        ],
      },
      { type: "heading", text: "Sample influencer marketing brief: D2C skincare launch", id: "sample-brief" },
      {
        type: "paragraph",
        text: "Here is how a filled-in brief might look for a hypothetical Bengaluru-based D2C skincare brand launching a lightweight gel moisturiser before the monsoon. The brand, figures and dates are illustrative; replace them with your own.",
      },
      {
        type: "template",
        label: "Sample brief: monsoon gel moisturiser launch (illustrative)",
        text: "CAMPAIGN OVERVIEW\nBrand: [Brand name], D2C skincare, sold on our website and two marketplaces\nProduct: Oil-free gel moisturiser with niacinamide, 50 g, MRP ₹449\nCampaign name: Light Through the Monsoon\nObjective: Drive first orders from people with oily or combination skin, judged on orders through creator codes in the first 30 days\nDuration: Go-live 10–20 June; codes valid until 15 July\n\nTARGET AUDIENCE\nAge: 20–32\nLocation: Mumbai, Pune, Bengaluru, Chennai, Kochi (humid cities)\nInterests: Skincare routines, budget-friendly beauty, college and early-career lifestyle\nCustomer profile: Has tried heavy creams that feel sticky in humid weather; checks ingredients; compares prices before buying\n\nCREATOR REQUIREMENTS\nNiche: Beauty & Skincare, with regular routine or review content\nPlatform: Instagram (primary); 2 YouTube Shorts creators optional\nFollower range: 10K–100K (8 creators) + one 100K–1M creator\nLanguage: English, Hindi, Marathi, Tamil or Malayalam; captions in the creator's usual language\nLocation: Based in or with audiences in the cities above\nOther: Oily or combination skin themselves; no paid moisturiser or sunscreen partnership in the last 60 days\n\nDELIVERABLES\nPer creator: 1 Reel (30–60 sec) + 3 Stories (one with link sticker)\nLarger creator: 1 Reel + 1 carousel + 3 Stories\nUGC assets: 2 raw vertical clips (10–15 sec) for ads\nProduct dispatch: 20 May | Draft due: 3 June | Feedback within 2 working days | Go-live: 10–20 June\n\nCREATIVE DIRECTION\nCampaign idea: Your real humid-morning routine, with the moisturiser under sunscreen\nKey message: It hydrates without feeling heavy or sticky in humid weather\nMandatory mentions: Product name, \"oil-free gel\", niacinamide, price, @brand tag, creator code, link sticker on Story 1\nGuidelines: Show the texture on skin in natural light; show it under sunscreen; real routine, no studio set\nDo: Share your honest experience after at least 10 days of use; mention who it suits (oily/combination skin)\nDon't: Say it treats acne or any skin condition; compare with named competitors; use filters that alter skin texture\nDisclosure: \"Ad\" or \"Paid partnership\" visible at the start, plus Instagram's paid partnership label\n\nCOMMERCIAL TERMS\nBudget: Fee band per tier shared privately with each creator + product kit\nPayment terms: 50% on signed agreement, 50% within 15 days of go-live against GST invoice where applicable\nUsage rights: Organic repost on brand channels; paid ads using the Reel and raw clips for 60 days from go-live, India only\nExclusivity: No paid moisturiser or sunscreen partnerships from 30 days before to 30 days after go-live\nContent licensing duration: 60 days for ads; organic reposts may stay up\n\nTRACKING AND REPORTING\nCampaign links: Creator-specific UTM links (utm_campaign=monsoon_gel)\nDiscount codes: [CREATORNAME]10 for 10% off, valid until 15 July\nKPIs: Orders per code, link clicks, Reel views, saves\nReporting deadline: Insights screenshots (reach, views, link clicks, audience cities) 7 days after go-live",
      },
      {
        type: "paragraph",
        text: "Two details in this sample are worth copying. The \"don't\" list keeps the product within cosmetic claims, since skincare content that drifts into treating conditions creates compliance risk for both brand and creator. And the exclusivity window is specific to the category and dated, which makes it easier for a creator to accept and price.",
      },
      { type: "heading", text: "Copy-ready influencer marketing brief template", id: "brief-template" },
      {
        type: "paragraph",
        text: "Copy this into a shared document. Lines in brackets are prompts; replace or delete them. For first outreach, send the Campaign Overview, Creator Requirements, Deliverables and Commercial Terms. Complete Creative Direction and Tracking once the creator agrees.",
      },
      {
        type: "template",
        label: "Influencer marketing brief template",
        text: "INFLUENCER MARKETING BRIEF\nPrepared by: [name, role]     Date: [dd/mm/yyyy]     Version: [1]\n\n1. CAMPAIGN OVERVIEW\nBrand name: [ ]\nProduct/service: [what it is, price, where it is sold]\nCampaign name: [ ]\nCampaign objective: [one primary goal + how it will be judged]\nCampaign duration: [go-live window, offer validity]\nBrand in two lines: [what you sell, to whom, what makes it different]\n\n2. TARGET AUDIENCE\nAge group: [ ]\nLocation: [cities / states / Tier 2-3 focus]\nInterests: [ ]\nCustomer profile: [the problem they want solved, how they decide to buy]\nLanguage: [ ]\n\n3. CREATOR REQUIREMENTS\nPreferred niche: [ ]\nPreferred platform: [Instagram / YouTube / both]\nFollower range (if relevant): [e.g. 10K-100K]\nPreferred language: [ ]\nLocation preferences: [ ]\nNumber of creators: [x] + [y] backups\nOther requirements: [e.g. posts weekly, uses the product category, no competitor deals in last x days]\n\n4. DELIVERABLES\nReels/videos: [number, length]\nStories: [number, link sticker Y/N]\nStatic posts/carousels: [number]\nYouTube integrations (if applicable): [dedicated video / 60-90 sec integration / Shorts]\nUGC assets: [number of raw clips, length, aspect ratio]\nContent deadlines: Product dispatch [ ] | Draft due [ ] | Feedback within [x] working days | Go-live [ ]\n\n5. CREATIVE DIRECTION\nCampaign idea: [one line]\nKey message: [the one thing viewers should remember]\nMandatory mentions: [product name, feature, price/offer, tag, link, code]\nContent guidelines: [tone, setting, product handling, reference posts with what you like about each]\nDo's: [ ]\nDon'ts: [claims to avoid, competitor mentions, sensitive topics]\nDisclosure: [label, e.g. \"Ad\" / \"Collaboration\", placed upfront + platform paid partnership label]\n\n6. COMMERCIAL TERMS\nBudget: [fee or band per creator/tier + product value]\nPayment terms: [advance %, balance due x days after go-live, invoice/GST]\nUsage rights: [organic repost / paid ads / website / other]\nContent licensing duration: [e.g. 60 days from go-live, territory]\nExclusivity: [category, competitors, from x days before to x days after go-live]\nApproval process: [reviewer name, revision rounds included, feedback turnaround]\n\n7. TRACKING AND REPORTING\nCampaign links: [UTM-tagged link per creator]\nDiscount codes: [code format, discount, validity]\nKPIs: [e.g. views, link clicks, orders per code, usable assets]\nReporting needed: [insights screenshots: reach, views, clicks, audience cities]\nReporting deadline: [x days after go-live]\n\nCONTACT\nBrand point of contact: [name, email, phone]\nApprover for terms: [name]     Approver for content: [name]",
      },
      {
        type: "paragraph",
        text: "If the campaign is Instagram-only and you need format-level detail (Reel length, Story sequencing, carousel structure), the Instagram influencer campaign brief adds those fields. Once the brief is final, how to write an influencer collaboration email shows how to turn it into a first message.",
        links: [
          { text: "Instagram influencer campaign brief", href: "/blog/instagram-influencer-campaign-brief" },
          { text: "how to write an influencer collaboration email", href: "/blog/influencer-outreach-email" },
        ],
      },
      { type: "heading", text: "How the brief changes by collaboration type", id: "by-collaboration-type" },
      {
        type: "table",
        headers: ["Collaboration type", "Add or change in the brief"],
        rows: [
          ["Paid", "Fee or budget band per tier, payment schedule, GST handling"],
          ["Product gifting", "That posting is optional, what you are sending, and that any post should be disclosed as a gift"],
          ["Barter (product for content)", "Agreed deliverables, product value, disclosure as a collaboration"],
          ["UGC creation", "Number and length of videos, raw files, whether posting on the creator's profile is required, ad usage period"],
          ["Affiliate or commission", "Commission rate, tracking method, attribution window, payout schedule"],
          ["Long-term or ambassador", "Term, monthly deliverables, exclusivity scope, review points, how either side can end it"],
        ],
      },
      { type: "heading", text: "Common mistakes brands make with influencer briefs", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Contacting creators before deciding the budget band, then stalling when rate cards arrive.",
          "Listing five objectives, so nobody knows what the content is meant to achieve.",
          "Asking for ad usage after the fee is agreed. It should be in the first brief.",
          "Writing a script and calling it a brief.",
          "Ten mandatory talking points in a 30-second Reel.",
          "Vague deliverables (\"some Stories\") that lead to disputes later.",
          "No named approver or feedback deadline, so drafts sit for a week.",
          "Leaving disclosure out of the brief and correcting it after the post is live.",
          "Reusing last campaign's brief without updating the audience, dates and claims.",
        ],
      },
      { type: "heading", text: "How to tell whether your brief worked", id: "measure-the-brief" },
      {
        type: "paragraph",
        text: "Campaign results tell you whether the creators and content worked. A few process measures tell you whether the brief itself did its job, and they are worth tracking from one campaign to the next:",
      },
      {
        type: "table",
        headers: ["Signal", "What it tells you"],
        rows: [
          ["Reply rate to outreach", "Whether the offer and fit were clear enough to answer"],
          ["Clarifying questions per creator", "Which sections of the brief were missing or vague"],
          ["Quotes within your budget band", "Whether deliverables, rights and creator tier were realistic together"],
          ["Revision rounds per draft", "Whether creative direction and dos and don'ts were clear"],
          ["Drafts and go-lives on time", "Whether the timeline and approval process were workable"],
          ["Disclosure correct on first draft", "Whether the disclosure instruction was explicit"],
          ["Campaign KPIs against the objective", "Whether the brief's objective, audience and creator choice were right"],
        ],
      },
      {
        type: "paragraph",
        text: "After each campaign, add a line to the template where a question kept coming up. Over two or three campaigns, the brief becomes specific to your brand and creators stop needing to ask.",
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good influencer marketing brief is short, specific and finished before outreach starts. Settle the objective, audience, creator requirements, deliverables and commercial terms first, give creators direction on outcomes rather than lines, and put disclosure and approvals in writing. Then use the creator requirements section to build your shortlist: Kudozz Discovery lets you search Instagram creators in India by niche, location, language, follower range and engagement. If you'd rather have a team plan the campaign end to end, Kudozz's campaign strategy team works with brands at this stage.",
        links: [
          { text: "Kudozz Discovery", href: "https://discover.kudozz.in/?utm_source=kudozz_website&utm_medium=blog&utm_campaign=discovery_content&utm_content=influencer-campaign-brief" },
          { text: "campaign strategy team", href: "/services/campaign-strategy" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is an influencer marketing brief?",
        answer:
          "It is a short document that tells a creator what a campaign is for, who it should reach, what content to make, the deadlines, the budget and the terms such as usage rights and exclusivity. Brands use it to agree internally on the ask, and creators use it to decide, quote and create.",
      },
      {
        question: "How long should an influencer brief be?",
        answer:
          "One to two pages is enough for most campaigns. Send a one-page version covering objective, deliverables, timeline, budget band and rights with your first outreach, and complete the creative direction and tracking sections after the creator agrees.",
      },
      {
        question: "Should I include the budget in an influencer brief?",
        answer:
          "Include at least a band per creator or tier, plus the value of any product you are sending. Creators can then tell you quickly whether the deliverables fit, and you avoid negotiating from rate cards that were never meant for your scope.",
      },
      {
        question: "What is the difference between an influencer brief and a UGC brief?",
        answer:
          "An influencer brief assumes the creator posts to their own audience, so it covers audience fit, disclosure and reach. A UGC brief is usually for content the brand will publish or run as ads, so it focuses on hooks, raw files, aspect ratios and usage rights, and posting on the creator's profile may not be required.",
      },
      {
        question: "Should influencer briefs include a script?",
        answer:
          "Usually not. Give one key message, a short list of mandatory mentions, claims to avoid and a few reference posts, then let the creator choose the words. Scripted content tends to sound like an advert and often performs worse with the creator's audience.",
      },
      {
        question: "Do influencer briefs need disclosure instructions in India?",
        answer:
          "Yes. ASCI's influencer guidelines expect paid or gifted collaborations to carry a clear, upfront label such as \"Ad\" or \"Collaboration\". Putting the exact label and placement in the brief avoids corrections after posting.",
      },
      {
        question: "Can Kudozz Discovery create the brief for me?",
        answer:
          "No. Kudozz Discovery is a search tool for Instagram creators in India. Once your brief is ready, you can use it to find creators who match the niche, location, language, follower range and engagement your brief calls for, and save them to lists.",
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

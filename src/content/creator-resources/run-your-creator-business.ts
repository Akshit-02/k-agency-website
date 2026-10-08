import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/** Run Your Creator Business: invoicing, deal checklist, analytics, scam safety. */
export const runYourCreatorBusinessPosts: BlogPost[] = [
  {
    slug: "how-to-invoice-brands-as-a-creator-india",
    category: "Creator Resources",
    title: "How to Invoice Brands as a Creator in India: Complete Guide",
    seoTitle: "How to Invoice Brands as a Creator in India",
    excerpt:
      "What a creator invoice should include, how GST and TDS usually affect it, payment terms that protect you, and how to follow up when payment is late.",
    metaDescription:
      "How to invoice brands as a creator in India: invoice number, business and brand details, deliverables, fee, GST where applicable, TDS, payment terms, bank details, PO references and follow-ups. Includes a template.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["creator invoice", "influencer invoice India", "GST for influencers", "TDS", "invoice template"],
    related: ["influencer-contract-guide-for-creators", "creator-brand-deal-checklist", "how-to-negotiate-brand-deals-as-a-creator"],
    body: [
      {
        type: "paragraph",
        text: "A surprising number of late creator payments come down to the invoice: a missing PO number, the wrong billing entity, no GST details, or bank information the finance team can't verify. A clean invoice sent on time is the simplest thing you can do to get paid faster.",
      },
      {
        type: "paragraph",
        text: "This guide is general information, not tax or legal advice. Indian tax rules change, and your obligations depend on your turnover, registration status, business structure and clients. Speak to a chartered accountant or tax professional about your situation. Figures and rules below were checked in September 2026.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator invoice in India should include a unique invoice number, date, your name or business name, address, contact details and PAN, the brand's (or agency's) billing name and address, a PO or campaign reference if provided, a clear description of deliverables, the fee, applicable taxes (GST only if you're registered, with your GSTIN and the required GST details), the total, payment terms and due date, and your bank or UPI details. Send it as soon as you're entitled to (usually on posting or per the contract), and follow up politely on the due date.",
      },
      { type: "heading", text: "What to include on every invoice", id: "invoice-fields" },
      {
        type: "table",
        headers: ["Field", "What to write", "Why it matters"],
        rows: [
          ["Invoice number", "A unique, sequential number, e.g. KC/2026-27/014", "Finance teams reject duplicates; GST rules require unique serial numbers per financial year if you're registered"],
          ["Invoice date", "The date you issue it", "Starts the payment-terms clock"],
          ["Your name / business name", "Legal name or registered business name", "Must match your bank account and tax records"],
          ["Your address and contact", "Address, email, phone", "Required for vendor records"],
          ["PAN", "Your PAN", "Needed for TDS and vendor onboarding"],
          ["GSTIN", "Only if you're GST-registered", "Required on a GST tax invoice"],
          ["Brand / client details", "The exact legal entity you're billing, address, GSTIN if they have one", "Billing the brand's trade name instead of its legal entity is a common cause of rejection"],
          ["PO or campaign reference", "Purchase order number, campaign name, agreement date", "Many companies can't pay without a PO match"],
          ["Deliverables", "e.g. 1 Instagram Reel (posted 12 Sep 2026, link), 1 Story set, 60 days paid usage", "Links the invoice to what you delivered"],
          ["Fee", "Amount per line item", "Clear breakdown avoids queries"],
          ["Taxes", "GST lines if applicable; otherwise no GST", "Unregistered creators should not charge GST"],
          ["Total", "Total payable", "Obvious, but double-check it"],
          ["Payment terms", "e.g. Due within 15 days of invoice date, per agreement dated…", "Sets expectations and supports follow-ups"],
          ["Bank / payment details", "Account name, number, IFSC, bank; UPI if accepted", "Account name should match the invoice name"],
          ["Signature", "Signature or digital signature where required", "Some finance teams require it"],
        ],
      },
      { type: "heading", text: "GST on your invoice", id: "gst" },
      {
        type: "paragraph",
        text: "If you're GST-registered, your invoice must be a GST tax invoice: add your GSTIN, the client's GSTIN if they have one, the SAC code, taxable value, tax rate and amount (CGST and SGST for a client in your state, IGST for a client in another state) and place of supply, as set out in Rule 46 of the CGST Rules. If you're not registered, don't charge GST. Registration becomes mandatory once your aggregate turnover crosses ₹20 lakh in a financial year (₹10 lakh in certain special category states). When to register, rates, inter-state and foreign clients are covered in GST for influencers and creators in India.",
        links: [
          { text: "Rule 46 of the CGST Rules", href: SOURCES.gstRule46 },
          { text: "GST for influencers and creators in India", href: "/blog/gst-for-influencers-india" },
        ],
      },
      { type: "heading", text: "TDS: why you may receive less than you invoiced", id: "tds" },
      {
        type: "paragraph",
        text: "Indian businesses paying creators may deduct tax at source (TDS) and deposit it against your PAN. Your invoice shows the full fee; the payment you receive is the fee minus any TDS. From 1 April 2026 these rules sit in section 393 of the Income-tax Act, 2025, and the TDS certificate is Form No. 131 (earlier Form 16A). Ask before signing whether TDS will be deducted and at what rate, and check the credit on the Income Tax e-filing portal. The categories, gifted products and records to keep are covered in TDS for influencers and creators in India.",
        links: [
          { text: "Income Tax e-filing portal", href: SOURCES.incomeTax },
          { text: "TDS for influencers and creators in India", href: "/blog/tds-for-influencers-india" },
        ],
      },
      { type: "heading", text: "A creator invoice template", id: "template" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-invoice-layout.svg",
        alt: "Layout of a creator invoice showing header with invoice number and date, creator and client details blocks, a deliverables table with fees, tax and total lines, and payment terms and bank details at the bottom",
        caption: "Keep the same layout every time so finance teams can process it quickly. Include GST lines only if you're registered.",
        width: 1200,
        height: 675,
      },
      {
        type: "template",
        label: "Invoice template (adapt with your accountant)",
        text: "INVOICE\nInvoice no: [PREFIX/2026-27/001]      Date: [DD Mon YYYY]\n\nFROM\n[Your legal name / business name]\n[Address]\n[Email] · [Phone]\nPAN: [XXXXX0000X]\nGSTIN: [only if registered]\n\nBILL TO\n[Client legal entity name]\n[Address]\nGSTIN: [if provided]\nPO / Reference: [PO number / campaign name / agreement date]\n\nDELIVERABLES                                      AMOUNT (₹)\n1. Instagram Reel — posted [date] — [link]        ______\n2. Instagram Story set (4 frames) — [date]        ______\n3. Paid usage, Meta ads, India, 60 days           ______\n                                   Subtotal       ______\n        [If registered] GST @ __% (CGST/SGST or IGST) ______\n                                   TOTAL          ______\n\nAmount in words: [________]\n\nPAYMENT TERMS\nDue within [15] days of invoice date, per agreement dated [date].\nAdvance received: ₹[__] on [date] (if any).\n\nPAYMENT DETAILS\nAccount name: [must match invoice name]\nAccount no: [____]  IFSC: [____]  Bank: [____]\nUPI: [optional]\n\n[Signature]",
      },
      { type: "heading", text: "When to send the invoice", id: "when-to-send" },
      {
        type: "list",
        items: [
          "Advance invoices: when the agreement is signed, if an advance is agreed.",
          "Final invoice: on posting or delivery, as the contract specifies. Don't wait until the end of the month.",
          "Retainers: on a fixed date each month.",
          "Send to the right address: many companies have an accounts-payable email separate from your marketing contact. Copy your contact.",
        ],
      },
      { type: "heading", text: "Vendor onboarding", id: "vendor-onboarding" },
      {
        type: "paragraph",
        text: "Larger brands and agencies often need you to register as a vendor before they can pay: PAN, GST certificate or a declaration that you're not registered, cancelled cheque or bank letter, address proof, and sometimes an MSME registration. Ask early, because onboarding can take longer than the campaign.",
      },
      { type: "heading", text: "Following up on late payments", id: "follow-up" },
      {
        type: "template",
        label: "On the due date",
        text: "Subject: Invoice [number] — due today\n\nHi [Name],\n\nA quick reminder that invoice [number] for ₹[amount] ([campaign]) is due today. I've attached it again for convenience.\n\nCould you confirm the expected payment date?\n\nThanks,\n[Name]",
      },
      {
        type: "template",
        label: "7–10 days overdue",
        text: "Subject: Invoice [number] — overdue\n\nHi [Name],\n\nFollowing up on invoice [number] for ₹[amount], which was due on [date]. Could you let me know if anything is holding it up (PO, vendor details, approvals)? I'm happy to resend anything needed.\n\nCc: [accounts email]\n\nThanks,\n[Name]",
      },
      {
        type: "paragraph",
        text: "If payments stay overdue despite polite follow-ups, escalate in writing to a more senior contact and refer to the agreement. For significant sums, get professional advice on your options. Most late-payment problems are easier to prevent than to chase; see creator payment terms for what to agree before you start.",
        links: [{ text: "creator payment terms", href: "/blog/creator-payment-terms" }],
      },
      {
        type: "paragraph",
        text: "After sending, track each invoice to payment with an invoice log; see creator invoice management.",
        links: [
          { text: "creator invoice management", href: "/blog/creator-invoice-management" },
        ],
      },
      { type: "heading", text: "Record keeping", id: "records" },
      {
        type: "list",
        items: [
          "Keep a simple register: invoice number, date, client, amount, GST, TDS, date paid.",
          "Save contracts, POs, emails confirming scope, and posting screenshots with each invoice.",
          "Track gifted products and their approximate value.",
          "Keep business and personal spending separate where possible.",
        ],
      },
      {
        type: "paragraph",
        text: "For the spending side, see what Indian creators should track in creator business expenses.",
        links: [{ text: "creator business expenses", href: "/blog/creator-business-expenses-india" }],
      },
      {
        type: "paragraph",
        text: "Brands have their own side of this process. Our brand-side guide to influencer marketing payments explains what finance teams typically need from creators.",
        links: [{ text: "influencer marketing payments", href: "/blog/influencer-marketing-payments" }],
      },
      {
        type: "paragraph",
        text: "Track every invoice until it's paid in a creator income tracker, and if payment slips, follow the steps in how creators can handle late brand payments.",
        links: [
          { text: "creator income tracker", href: "/blog/creator-income-tracker" },
          { text: "how creators can handle late brand payments", href: "/blog/creators-handle-late-brand-payments" },
        ],
      },
      {
        type: "paragraph",
        text: "For the brand-side view of what finance teams check, see influencer invoicing.",
        links: [
          { text: "influencer invoicing", href: "/blog/influencer-invoicing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What should a creator invoice include in India?",
        answer:
          "Invoice number and date, your name or business name, address, contact and PAN, GSTIN if registered, the client's legal entity and address, PO or campaign reference, deliverables, fees, applicable GST, total, payment terms and bank or UPI details.",
      },
      {
        question: "Do creators need to charge GST?",
        answer:
          "Only if they're GST-registered. Registration is generally mandatory once aggregate turnover crosses the threshold for services, currently ₹20 lakh for most states (₹10 lakh for special category states). Check your situation with a tax professional.",
      },
      {
        question: "Why did the brand pay me less than my invoice?",
        answer:
          "Most likely because it deducted TDS, which is deposited against your PAN. Check your tax statement on the Income Tax e-filing portal and ask the brand for the TDS certificate (Form No. 131).",
      },
      {
        question: "When should I send my invoice?",
        answer:
          "As soon as you're entitled to under the agreement, usually on signing for an advance and on posting or delivery for the balance. Send it to the accounts contact as well as your marketing contact.",
      },
    ],
  },
  {
    slug: "creator-brand-deal-checklist",
    category: "Creator Resources",
    title: "Creator Brand Deal Checklist: What to Check Before Accepting a Collaboration",
    seoTitle: "Creator Brand Deal Checklist: Check Before You Accept",
    excerpt:
      "A practical checklist for every brand deal: who the client is, what you're delivering, how you're paid, what rights and exclusivity you're giving, how content is approved, and how it will be disclosed.",
    metaDescription:
      "A creator brand deal checklist to use before accepting any collaboration: brand legitimacy, campaign scope, fee, payment schedule, taxes, usage rights, exclusivity, approvals, claims and disclosure.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "8 min read",
    tags: ["brand deal checklist", "creator checklist", "influencer collaboration checklist", "disclosure", "usage rights"],
    related: ["influencer-contract-guide-for-creators", "creator-deliverables", "creator-scams-fake-brand-collaborations"],
    body: [
      {
        type: "paragraph",
        text: "Print it, save it to your notes, or copy it into your contract folder. Run through this checklist before you say yes to any collaboration, paid or gifted. If you can't tick an item, ask the brand before you sign.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before accepting a brand collaboration, confirm: the brand and agency are legitimate and you know who your contact and client are; the objective, deliverables, platforms and timeline are defined; the fee, payment schedule, taxes and expenses are agreed; usage rights, duration, territory, editing and whitelisting are limited and priced; exclusivity is narrow and paid; the brief, approvals, revisions and product claims are clear; and disclosure will follow ASCI guidelines and platform tools.",
      },
      { type: "heading", text: "1. Brand", id: "brand" },
      {
        type: "list",
        items: [
          "Who is the client? Is the brand's legal entity named?",
          "Is an agency involved? Does it genuinely represent the brand?",
          "Who is my contact, and is their email on the brand's or agency's official domain?",
          "Does the brand have a real website, reviews and an active social presence?",
          "Would I use and recommend this product?",
          "Is there any sign of a scam: fees, password or OTP requests, urgency, unofficial payment methods?",
        ],
      },
      {
        type: "paragraph",
        text: "If anything feels off, check how to spot fake brand collaboration offers before replying.",
        links: [{ text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      { type: "heading", text: "2. Campaign", id: "campaign" },
      {
        type: "list",
        items: [
          "What's the objective: awareness, launch, sales, content for ads?",
          "Which deliverables, exactly? (format, quantity, length)",
          "Which platforms?",
          "What's the timeline, starting from product and brief receipt?",
          "How long must content stay live?",
        ],
      },
      { type: "heading", text: "3. Money", id: "money" },
      {
        type: "list",
        items: [
          "What is the fee, and is it inclusive or exclusive of GST?",
          "What's the payment schedule (advance, on posting, days after invoice)?",
          "Who pays me: the brand or the agency?",
          "Will TDS be deducted? Will I get the certificate?",
          "Are expenses (props, travel, extra talent) covered?",
          "Is there a kill fee if the campaign is cancelled after I start?",
          "What do they need for invoicing (PO number, vendor onboarding)?",
        ],
      },
      { type: "heading", text: "4. Rights", id: "rights" },
      {
        type: "list",
        items: [
          "Organic usage: can the brand repost, and for how long?",
          "Paid usage: can it run my content as ads? On which platforms, for how long?",
          "Duration: when does usage start and end?",
          "Territory: India only or wider?",
          "Editing: can it cut, subtitle, re-edit or combine my content? AI alterations?",
          "Whitelisting: will it run ads through my handle? Do I approve the ad copy?",
          "Do I keep ownership and the right to show it in my portfolio?",
        ],
      },
      {
        type: "paragraph",
        text: "Details in creator usage rights.",
        links: [{ text: "creator usage rights", href: "/blog/creator-usage-rights" }],
      },
      { type: "heading", text: "5. Exclusivity", id: "exclusivity" },
      {
        type: "list",
        items: [
          "Which category or named competitors?",
          "Which platforms and regions?",
          "For how long, starting when?",
          "Does it conflict with any current partnership?",
          "Is it priced?",
        ],
      },
      {
        type: "paragraph",
        text: "Details in creator exclusivity.",
        links: [{ text: "creator exclusivity", href: "/blog/creator-exclusivity" }],
      },
      { type: "heading", text: "6. Content", id: "content" },
      {
        type: "list",
        items: [
          "Is there a written brief?",
          "Who approves scripts and drafts, and how quickly will they respond?",
          "How many revision rounds are included?",
          "Which product claims am I being asked to make? Can the brand substantiate them?",
          "For health, nutrition, finance or technical claims: am I qualified to make them, or should I stick to my personal experience?",
          "Do I retain creative control over tone and honest opinion?",
        ],
      },
      { type: "heading", text: "7. Disclosure", id: "disclosure" },
      {
        type: "list",
        items: [
          "Will the content carry an upfront, clear label (e.g. \"Ad\", \"Sponsored\", \"Collaboration\", \"Partnership\", \"Free gift\") as ASCI guidelines require for paid, gifted or affiliate content?",
          "Will I use platform tools: Instagram's paid partnership label, YouTube's paid promotion disclosure?",
          "For videos, will the label appear on screen as well as in the caption?",
          "For live sessions, will I disclose at the start and end?",
          "Has the brand asked me to avoid or hide disclosure? (If so, don't.)",
        ],
      },
      {
        type: "paragraph",
        text: "See ASCI's influencer resources for the current guidelines, and Instagram's paid partnership label and YouTube's paid promotion disclosure for platform tools.",
        links: [
          { text: "ASCI's influencer resources", href: SOURCES.asciSocial },
          { text: "Instagram's paid partnership label", href: SOURCES.instagramPaidPartnership },
          { text: "YouTube's paid promotion disclosure", href: SOURCES.youtubePaidPromotion },
        ],
      },
      { type: "heading", text: "8. Paperwork", id: "paperwork" },
      {
        type: "list",
        items: [
          "Is there a written agreement, or at least a confirmed email summary of all terms?",
          "Have I read cancellation, termination, liability and dispute clauses?",
          "For large fees, long exclusivity or broad rights: has a lawyer reviewed it?",
        ],
      },
      {
        type: "paragraph",
        text: "For clause-by-clause explanations, see the influencer contract guide for creators and creator deliverables.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "creator deliverables", href: "/blog/creator-deliverables" },
        ],
      },
      {
        type: "paragraph",
        text: "Two guides go deeper on the last sections of this checklist: the creator disclosure guide and creator brand safety.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }, { text: "creator brand safety", href: "/blog/creator-brand-safety" }],
      },
      { type: "heading", text: "The one-screen version", id: "one-screen" },
      {
        type: "template",
        label: "Copy into your notes app",
        text: "BRAND ☐ legit ☐ contact verified ☐ I'd use it ☐ no scam signs\nCAMPAIGN ☐ objective ☐ deliverables ☐ platforms ☐ timeline ☐ live duration\nMONEY ☐ fee ☐ GST ☐ schedule ☐ who pays ☐ TDS ☐ expenses ☐ kill fee\nRIGHTS ☐ organic ☐ paid ☐ duration ☐ territory ☐ editing ☐ whitelisting ☐ portfolio use\nEXCLUSIVITY ☐ scope ☐ duration ☐ conflicts ☐ priced\nCONTENT ☐ brief ☐ approvals ☐ revisions ☐ claims substantiated\nDISCLOSURE ☐ upfront label ☐ platform tool ☐ on-screen ☐ live\nPAPERWORK ☐ written terms ☐ key clauses read ☐ legal review if big",
      },
      {
        type: "paragraph",
        text: "Keep the documents behind each tick (brief, confirmation, approvals, disclosure screenshots, invoice) using the folder system in creator campaign documentation, and agree cancellation terms upfront with the help of creator cancellation policy.",
        links: [
          { text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" },
          { text: "creator cancellation policy", href: "/blog/creator-cancellation-policy" },
        ],
      },
    ],
    faqs: [
      {
        question: "What should I check before accepting a brand deal?",
        answer:
          "The brand's legitimacy and your contact, the campaign scope and timeline, the fee, payment schedule and taxes, usage rights and exclusivity, the brief, approvals and claims, disclosure requirements, and whether the terms are in writing.",
      },
      {
        question: "Do gifted collaborations need disclosure?",
        answer:
          "Yes. ASCI guidelines treat gifts, free products and other benefits as a material connection that must be disclosed, for example with a \"Free gift\" or \"Ad\" label.",
      },
      {
        question: "What if a brand asks me not to disclose the partnership?",
        answer:
          "Don't agree. Undisclosed paid or gifted promotion goes against ASCI guidelines and platform policies, and puts your credibility at risk. A professional brand shouldn't ask for it.",
      },
    ],
  },
  {
    slug: "creator-analytics-for-brand-deals",
    category: "Creator Resources",
    title: "Creator Analytics for Brand Deals: Which Metrics Should You Share With Brands?",
    seoTitle: "Creator Analytics for Brand Deals: Which Metrics to Share",
    excerpt:
      "Which metrics brands care about, what each platform actually reports, and how to present your numbers honestly in pitches and post-campaign reports.",
    metaDescription:
      "Creator analytics for brand deals: reach, views, watch time, completion, saves, shares, comments, engagement, link clicks, profile visits and demographics, what each platform shows, and how to share it honestly.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["creator analytics", "influencer metrics", "Instagram insights", "YouTube analytics", "campaign report"],
    related: ["influencer-engagement-rate", "creator-media-kit", "how-to-pitch-brands-as-a-creator"],
    body: [
      {
        type: "paragraph",
        text: "Brands can't see your insights. They see what you choose to show them. That's why the way you present analytics shapes whether you get the deal, and whether you get the next one after the campaign report lands.",
      },
      {
        type: "paragraph",
        text: "This guide is about what to share with brands. For tracking your own audience, content and revenue in one place, see the creator analytics dashboard.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Share the metrics that match the brand's goal, taken from native platform insights, with the date range stated. For most pitches that means average views or reach per format, engagement (with the formula), saves and shares, and audience demographics (location, age, gender, language). For campaign reports add views, reach, watch time or retention for video, link clicks, profile visits and any code or sales data the brand shares. Not every metric exists on every platform, and definitions differ, so label everything and never alter or cherry-pick misleadingly.",
      },
      { type: "heading", text: "The metrics brands may care about", id: "metrics" },
      {
        type: "table",
        headers: ["Metric", "What it tells a brand", "Useful for"],
        rows: [
          ["Reach / accounts reached", "How many unique accounts saw the content", "Awareness"],
          ["Views", "How many times content was viewed (definitions vary by platform)", "Awareness, pricing"],
          ["Impressions", "Times content was displayed (Instagram has replaced this with Views)", "Awareness on platforms that still report it"],
          ["Average views", "Typical performance per post across a period", "Pricing and forecasting"],
          ["Watch time / average view duration", "How long people actually watched", "Video quality and attention"],
          ["Completion / retention", "How much of the video people watched", "Whether the brand message was seen"],
          ["Saves", "People keeping content to return to", "Consideration and intent"],
          ["Shares", "People sending content to others", "Word of mouth and reach"],
          ["Comments", "Conversation and questions", "Sentiment and interest"],
          ["Engagement / engagement rate", "Overall interaction relative to followers or reach", "Audience quality (if calculated consistently)"],
          ["Link clicks / sticker taps", "People taking an action", "Traffic and sales"],
          ["Profile visits", "Interest in you after seeing the content", "Creator authority"],
          ["Audience demographics", "Location, age, gender, language", "Audience fit"],
          ["Codes / conversions", "Sales or sign-ups attributed to you", "Performance (usually from the brand's data)"],
        ],
      },
      { type: "heading", text: "What each platform shows", id: "platforms" },
      { type: "subheading", text: "Instagram" },
      {
        type: "paragraph",
        text: "Professional accounts get insights in the professional dashboard: views, reach, interactions (likes, comments, saves, shares), profile activity, link taps on Stories, follower and audience demographics. Since April 2025, Instagram reports Views as its main metric, replacing Impressions and Plays, so older screenshots aren't directly comparable with current ones. Reel insights also show watch time and, for many accounts, how much of the Reel people watched.",
      },
      { type: "subheading", text: "YouTube" },
      {
        type: "paragraph",
        text: "YouTube Studio Analytics shows views, watch time, average view duration, audience retention, impressions and click-through rate, subscribers gained, traffic sources, and audience age, gender and geography (where there's enough data). For sponsors, average views in the first 30 days and retention around the sponsored segment are especially useful.",
      },
      { type: "subheading", text: "LinkedIn" },
      {
        type: "paragraph",
        text: "Post analytics show impressions, members reached, reactions, comments and reposts, plus viewer demographics such as job title, industry and location on many posts. For B2B brands, audience seniority and industry often matter more than size.",
      },
      { type: "subheading", text: "Other platforms" },
      {
        type: "paragraph",
        text: "Snapchat, Pinterest, X and Reddit each report different metrics with different definitions. Pinterest, for example, emphasises impressions, saves and outbound clicks. Use each platform's own terms rather than forcing them into Instagram's categories.",
      },
      { type: "heading", text: "Don't compare across platforms as if they're the same", id: "cross-platform" },
      {
        type: "paragraph",
        text: "A \"view\" on Instagram, a \"view\" on YouTube Shorts and a \"view\" on a long-form YouTube video are counted differently. Engagement norms also differ widely by platform and format. When you share multi-platform numbers, present each platform separately with its own definitions, and don't add them into a single \"total views\" figure without explaining it.",
      },
      { type: "heading", text: "Which metrics to share in a pitch", id: "pitch-metrics" },
      {
        type: "list",
        items: [
          "Awareness campaigns: average views and reach per format, audience demographics.",
          "Consideration or education: saves, shares, watch time, completion.",
          "Sales and traffic: link taps, profile visits, previous code or affiliate performance if you can share it.",
          "Launches and events: reach, shares, audience location.",
          "B2B: audience job titles, industries, seniority, comment quality.",
        ],
      },
      {
        type: "paragraph",
        text: "If you quote an engagement rate, state which formula you used. Our engagement rate guide explains follower-based and reach- or view-based formulas, and engagement rate vs reach explains which to lead with for each campaign objective.",
        links: [
          { text: "engagement rate guide", href: "/blog/influencer-engagement-rate" },
          { text: "engagement rate vs reach", href: "/blog/engagement-rate-vs-reach-for-creators" },
        ],
      },
      { type: "heading", text: "How to present analytics honestly", id: "honesty" },
      {
        type: "list",
        items: [
          "Use screenshots from native insights, not third-party estimates, for anything you call a fact.",
          "State the date range and the metric name the platform uses.",
          "Use averages over a period, and mention outliers separately (\"one Reel reached 1.2M; my typical Reel reaches 40–60K\").",
          "Don't crop screenshots to hide context such as the date or the fact that numbers include paid boosts.",
          "Don't edit screenshots. Ever.",
          "If a campaign underperformed, say so and share what you learned.",
        ],
      },
      {
        type: "paragraph",
        text: "Buying followers, views or engagement, joining engagement pods to inflate numbers, or editing screenshots might win a single deal, but brands and agencies increasingly check for these patterns, and being caught tends to end relationships across an agency's whole client list. See the brand-side view in how brands identify fake followers and fake engagement.",
        links: [{ text: "how brands identify fake followers and fake engagement", href: "/blog/how-to-identify-fake-followers" }],
      },
      {
        type: "paragraph",
        text: "For the full post-campaign reporting process, including timing and what to include, see creator campaign reporting.",
        links: [{ text: "creator campaign reporting", href: "/blog/creator-campaign-reporting" }],
      },
      { type: "heading", text: "A post-campaign report template", id: "report-template" },
      {
        type: "template",
        label: "Creator campaign report (send 7 days after posting, or as agreed)",
        text: "CAMPAIGN: [name] · BRAND: [name] · CREATOR: [@handle]\nContent: [links] · Posted: [dates] · Data as of: [date]\n\nRESULTS (native insights, screenshots attached)\nReel: views __ · reach __ · likes __ · comments __ · saves __ · shares __ · avg watch time __\nStories: views per frame __ · link sticker taps __ · replies __\nProfile visits during campaign window: __\n\nCONTEXT\nCompared with my average Reel (last 90 days): views __x · saves __x\n\nAUDIENCE RESPONSE\nThemes in comments: [questions about price, shade range, availability…]\n\nWHAT I'D DO NEXT TIME\n[one or two honest observations]",
      },
      {
        type: "paragraph",
        text: "Brands measure campaigns across all their creators, so a clear, consistent report makes you easy to rebook, and a strong report becomes a creator case study for future pitches. For the brand's side of measurement, see influencer marketing KPIs.",
        links: [
          { text: "creator case study", href: "/blog/creator-case-study" },
          { text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" },
        ],
      },
    ],
    faqs: [
      {
        question: "What metrics do brands look at when choosing creators?",
        answer:
          "Mainly average views or reach per format, engagement quality (saves, shares, comments), audience demographics such as location, age, gender and language, and past results on similar content.",
      },
      {
        question: "Should I share screenshots of my insights with brands?",
        answer:
          "Yes, unedited screenshots from native platform insights with the date range visible are the most credible way to share performance. Don't crop out context.",
      },
      {
        question: "Did Instagram stop showing impressions?",
        answer:
          "Instagram replaced Impressions and Plays with a unified Views metric in April 2025, so older and newer figures aren't directly comparable. Label your numbers with the metric name your dashboard currently uses.",
      },
      {
        question: "Can I compare my Instagram and YouTube views directly?",
        answer:
          "Not reliably. Platforms count views differently, and engagement norms vary by platform and format. Present each platform separately with its own definitions.",
      },
    ],
  },
  {
    slug: "creator-scams-fake-brand-collaborations",
    category: "Creator Resources",
    title: "How to Spot Fake Brand Collaboration Offers and Creator Scams",
    seoTitle: "How to Spot Fake Brand Collaboration Offers and Scams",
    excerpt:
      "Fake brand deals target creators every day, from courier-fee tricks to account-takeover links. Here are the patterns to watch for, a verification checklist, and what to do if you've been targeted.",
    metaDescription:
      "How to spot fake brand collaboration offers: suspicious domains, fake agencies, payment and courier fees, password and OTP requests, malicious links and files, WhatsApp and DM scams, a verification checklist and how to report in India.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "12 min read",
    tags: ["creator scams", "fake brand collaboration", "Instagram scam", "influencer scam India", "phishing"],
    related: ["creator-brand-deal-checklist", "first-brand-collaboration-india", "how-to-find-brands-to-collaborate-with"],
    body: [
      {
        type: "paragraph",
        text: "Scammers love creators. You publish your email and DMs are open, you want brand deals, and your account itself is valuable. A fake collaboration offer is the easiest way in. The good news: most scams follow a handful of patterns, and a few habits will stop nearly all of them.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A brand collaboration offer is likely fake if it asks you to pay anything (registration, verification, courier, \"security deposit\"), asks for your password, OTP or login through a link, pushes you to download files or apps, pays in unusual ways such as cryptocurrency, comes from a free email address or look-alike domain, or pressures you to act fast. Verify the sender independently through the brand's official website or verified profile before replying. In India, report financial fraud at cybercrime.gov.in or call 1930.",
      },
      { type: "heading", text: "The core rule", id: "core-rule" },
      {
        type: "quote",
        text: "Money flows from the brand to the creator. Any offer where money, passwords or codes flow from you to them is not a brand deal.",
        attribution: "Kudozz Partnerships Team",
      },
      {
        type: "paragraph",
        text: "Legitimate agencies don't charge creators to be considered for campaigns. Kudozz, for instance, doesn't charge creators anything to apply to its network, and we'd never ask for your password or an OTP.",
      },
      { type: "heading", text: "Common scam patterns", id: "patterns" },
      { type: "subheading", text: "Suspicious email domains" },
      {
        type: "list",
        items: [
          "Free addresses (gmail.com, outlook.com) claiming to be a large brand's marketing team.",
          "Look-alike domains: an extra letter, a hyphen, a different ending (brand-india-collab.com instead of brand.com).",
          "Display names that say the brand while the address says something else.",
        ],
      },
      {
        type: "paragraph",
        text: "Small brands and freelancers do sometimes use free email addresses, so this alone isn't proof. It's a reason to verify.",
      },
      { type: "subheading", text: "Fake agency identities" },
      {
        type: "paragraph",
        text: "Scammers invent agencies or copy real ones, using a real agency's name and logo with a slightly different domain or phone number. Check the agency's official website and contact it through the details listed there, not the ones in the message.",
      },
      { type: "subheading", text: "Payment requests and fees" },
      {
        type: "list",
        items: [
          "\"Registration fee\" or \"onboarding fee\" to join a campaign.",
          "\"Verification fee\" to confirm your account.",
          "Courier or customs charges for a \"free\" product.",
          "\"Refundable\" security deposits.",
          "Paying for a product upfront with a promise of reimbursement plus a fee.",
        ],
      },
      { type: "subheading", text: "Password, OTP and login requests" },
      {
        type: "paragraph",
        text: "No brand needs your password. Scam links often lead to fake Instagram or Meta login pages (\"log in to accept the collaboration\", \"verify your account for the paid partnership\"). Any OTP you receive and are asked to share is almost certainly being used to take over an account or authorise a payment. Instagram lets you review recent official emails it has sent from your security settings, which helps you check whether a \"from Instagram\" message is real.",
      },
      { type: "subheading", text: "Fake contracts" },
      {
        type: "paragraph",
        text: "Scammers send professional-looking contracts to build trust, then ask for a fee to \"process\" or \"notarise\" them. Some ask you to sign via an e-signature link that's actually a login page. A contract doesn't make an offer real; verify the company first.",
      },
      { type: "subheading", text: "Malicious links and attachments" },
      {
        type: "list",
        items: [
          "\"Campaign brief\" files that are archives (.zip, .rar), executables (.exe, .scr), or documents asking you to enable macros.",
          "Links to download a \"collaboration app\" or browser extension.",
          "Shortened links to unfamiliar sites.",
        ],
      },
      {
        type: "paragraph",
        text: "A genuine brief is usually a PDF, a Google Doc or Slides, or text in the email. Don't open unexpected archives or install anything to see a brief.",
      },
      { type: "subheading", text: "Cryptocurrency and unusual payments" },
      {
        type: "paragraph",
        text: "Offers to pay in cryptocurrency, gift cards, or through an unfamiliar \"payment platform\" that requires you to deposit money first to unlock earnings are strong warning signs.",
      },
      { type: "subheading", text: "Impersonation and fake brand managers" },
      {
        type: "paragraph",
        text: "Accounts copying a real brand's name and photos, or real employees' names from LinkedIn, message creators with offers. Check whether the account is the brand's official, verified profile, and cross-check the person on the brand's official channels.",
      },
      { type: "subheading", text: "WhatsApp and task scams" },
      {
        type: "paragraph",
        text: "A \"collaboration\" moves to WhatsApp or Telegram, where you're asked to like videos, follow accounts or review products for small payments. Early payouts build trust; later \"tasks\" require you to deposit money, which is never returned. These are task-based fraud schemes, not collaborations.",
      },
      { type: "subheading", text: "Instagram DM scams" },
      {
        type: "list",
        items: [
          "\"You've been selected as a brand ambassador\" with a discount code you must use to buy products at full price.",
          "Accounts impersonating Instagram or Meta saying your account will be disabled unless you verify.",
          "Offers to get you verified or \"monetised\" for a fee.",
        ],
      },
      {
        type: "paragraph",
        text: "Note on \"ambassador\" codes: some real brands run affiliate programmes that include discounts for creators. The difference is that a genuine partnership doesn't require you to spend money to participate.",
      },
      { type: "heading", text: "Verification checklist", id: "verification-checklist" },
      {
        type: "list",
        items: [
          "Find the brand's official website yourself (don't use links in the message) and check the domain matches the sender's email.",
          "Check the brand's verified social profile and whether it has worked with creators before.",
          "Look up the contact on LinkedIn and confirm they work there.",
          "If an agency is involved, confirm with the brand or through the agency's official site.",
          "Search the brand or agency name with words like \"scam\" or \"fraud\" and check creator communities.",
          "Ask for a written brief and agreement before sharing personal details beyond your business email.",
          "Refuse any payment request, password, OTP, app download or deposit.",
          "Don't be rushed. Real campaigns can wait a day for you to check.",
        ],
      },
      { type: "heading", text: "Red flags at a glance", id: "red-flags" },
      {
        type: "table",
        headers: ["Red flag", "Why it matters"],
        rows: [
          ["Any fee or deposit", "Legitimate brands pay creators, not the reverse"],
          ["Password, OTP or \"verify via this link\"", "Account takeover or payment fraud"],
          ["Urgency (\"offer expires in 1 hour\")", "Designed to stop you checking"],
          ["Pay far above your usual rate for very little", "Bait to lower your guard"],
          ["Free email claiming to be a big brand", "Common in impersonation"],
          ["Archives, executables, app installs", "Malware risk"],
          ["Crypto, gift cards, deposit-to-unlock", "Common in fraud schemes"],
          ["Won't do a video call or share official contact details", "Hard to verify identity"],
        ],
      },
      {
        type: "paragraph",
        text: "Brand\u2013creator marketplaces have their own safeguards against fake brands and payment fraud; what to look for is covered in creator marketplace trust and safety.",
        links: [
          { text: "creator marketplace trust and safety", href: "/blog/creator-marketplace-trust-safety" },
        ],
      },
      { type: "heading", text: "What to do if you've been targeted", id: "if-targeted" },
      {
        type: "list",
        items: [
          "Stop communicating and don't send money or codes.",
          "If you entered a password: change it immediately from the official app, turn on two-factor authentication, and log out of unknown sessions.",
          "If you shared an OTP or payment details: contact your bank immediately.",
          "Save evidence: screenshots, email headers, phone numbers, payment references.",
          "Report financial fraud at the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call the 1930 helpline.",
          "Report suspicious calls and messages through Sanchar Saathi's Chakshu facility.",
          "Report the account or message on the platform where it arrived.",
          "If a real brand or agency was impersonated, let them know through their official contact so they can warn others.",
        ],
      },
      {
        type: "paragraph",
        text: "Official reporting routes: National Cyber Crime Reporting Portal and Sanchar Saathi.",
        links: [
          { text: "National Cyber Crime Reporting Portal", href: SOURCES.cybercrime },
          { text: "Sanchar Saathi", href: SOURCES.sancharSaathi },
        ],
      },
      {
        type: "paragraph",
        text: "If someone is pretending to be you rather than a brand, see creator impersonation.",
        links: [{ text: "creator impersonation", href: "/blog/creator-impersonation" }],
      },
      {
        type: "paragraph",
        text: "Many scam messages aim to take over your account rather than your money. Passkeys, app-based two-factor authentication and a protected recovery email make that much harder; creator account security explains the setup.",
        links: [
          { text: "creator account security", href: "/blog/creator-account-security" },
        ],
      },
      { type: "heading", text: "A note on naming names", id: "naming" },
      {
        type: "paragraph",
        text: "Scammers often use the names of real brands and agencies without their knowledge. If you share warnings in creator communities, describe what happened and the contact details used, but avoid accusing the brand being impersonated unless you have evidence it was involved.",
      },
      {
        type: "paragraph",
        text: "For deals that pass verification, the creator brand deal checklist covers everything else to check before accepting.",
        links: [{ text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" }],
      },
      {
        type: "paragraph",
        text: "Scammers sometimes borrow platform names, including YouTube's older BrandConnect name. YouTube BrandConnect vs Creator Partnerships explains where YouTube's real brand tools live.",
        links: [{ text: "YouTube BrandConnect vs Creator Partnerships", href: "/blog/youtube-brandconnect-vs-creator-partnerships" }],
      },
      {
        type: "paragraph",
        text: "Genuine enquiries still need qualifying; how to manage brand collaboration leads has a five-minute checklist.",
        links: [{ text: "how to manage brand collaboration leads", href: "/blog/manage-brand-collaboration-leads" }],
      },
    ],
    faqs: [
      {
        question: "How can I tell if a brand collaboration is fake?",
        answer:
          "Warning signs include any request for fees or deposits, passwords, OTPs or login links, file downloads or app installs, unusual payment methods like crypto, free or look-alike email domains, and pressure to act quickly. Verify through the brand's official website and verified profiles.",
      },
      {
        question: "Do real brands ask creators to pay for shipping or registration?",
        answer: "No. Legitimate brands and agencies pay creators. Requests to pay registration, verification, courier or deposit fees are a common scam pattern.",
      },
      {
        question: "Where do I report a creator scam in India?",
        answer:
          "Report financial fraud on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call 1930. Suspicious calls and messages can be reported through Sanchar Saathi. Also report the account on the platform.",
      },
      {
        question: "What should I do if I clicked a scam link and logged in?",
        answer:
          "Change your password immediately from the official app, turn on two-factor authentication, log out of other sessions, and check your account's email and phone details haven't been changed.",
      },
    ],
  },
];

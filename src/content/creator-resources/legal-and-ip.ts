import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_10_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Creator legal and IP (800–849 layer). General information, not legal advice.
 * Intent boundaries:
 * - creator-contracts: every agreement type a creator business signs, plus the records to keep (absorbs "creator legal documents")
 * - creator-intellectual-property: the ownership map across copyright, trademark, personality rights and contracts
 * - creator-trademark: protecting a brand name or logo in India
 * Existing owners: influencer-contract-guide-for-creators (brand deal clauses + interactive contract checklist),
 * creator-copyright, creator-content-licensing, creator-usage-rights, creator-exclusivity (incl. category
 * restrictions and non-competes), creator-contracts-vs-emails.
 */
export const legalAndIpPosts: BlogPost[] = [
  {
    slug: "creator-contracts",
    category: "Creator Resources",
    title: "Creator Contracts: The Agreements and Legal Documents a Creator Business Needs",
    seoTitle: "Creator Contracts: Agreements Every Creator Business Needs",
    excerpt:
      "The eight kinds of agreements a professional creator signs (brand deals, management, agency, freelancers, licensing, collaborations, services clients and NDAs), what each should cover, who usually drafts it, the legal documents and records to keep, and when to involve a lawyer in India.",
    metaDescription:
      "Creator contracts explained: brand deal, management, freelancer, licensing and collaboration agreements, records to keep and when to get legal help.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["creator contracts", "creator legal documents", "creator agreements", "management agreement creator", "freelancer agreement creator", "creator contract types India"],
    related: ["influencer-contract-guide-for-creators", "creator-intellectual-property", "creator-contracts-vs-emails"],
    body: [
      {
        type: "paragraph",
        text: "Most creators think of contracts as the document a brand sends before a campaign. That's only one of them. A growing creator business also signs, or should sign, agreements with managers, editors, collaborators, clients and sometimes platforms. Each one decides who owns what, who gets paid when, and what happens when things go wrong.",
      },
      {
        type: "paragraph",
        text: "This is the map of those agreements. Clause-by-clause advice for brand deals is in the influencer contract guide for creators, which also has an interactive checklist to use before signing. This is general information, not legal advice; for significant agreements, speak to a lawyer.",
        links: [{ text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A professional creator business typically deals with eight kinds of agreement: brand collaboration agreements, management or representation agreements, agency or network agreements, freelancer and team agreements, content licensing agreements, collaboration agreements with other creators, services agreements with clients, and non-disclosure agreements. Each should define scope, payment, ownership and usage of content, confidentiality, term and termination, and how disputes are handled. Keep signed copies and supporting records together, and get legal review for long, exclusive, high-value or unusual agreements.",
      },
      { type: "heading", text: "The eight agreements", id: "agreements" },
      {
        type: "table",
        headers: ["Agreement", "Between you and", "Who usually drafts it", "What matters most"],
        rows: [
          ["Brand collaboration", "A brand or its agency", "The brand or agency", "Deliverables, usage rights, exclusivity, payment terms, approvals"],
          ["Management or representation", "A talent manager or management company", "The manager", "Commission base, term, exit, post-term commission, authority to sign"],
          ["Agency or network", "An agency, network or MCN", "The agency", "Exclusivity, revenue share, rights granted, termination"],
          ["Freelancer or team", "Editors, designers, VAs, writers", "You", "Scope, pay, ownership of work, confidentiality, access"],
          ["Content licensing", "A brand or publisher using existing content", "Either side", "Media, duration, territory, fee, edits allowed"],
          ["Creator collaboration", "Another creator", "Either side, often informal", "Who owns the joint content, revenue split, sponsor rules"],
          ["Services", "Clients for consulting, coaching, production", "You", "Scope, deliverables, fees, cancellation, liability"],
          ["Non-disclosure (NDA)", "Brands, partners, team", "Either side", "What's confidential, for how long, exceptions"],
        ],
      },
      { type: "heading", text: "What every creator agreement should cover", id: "core-terms" },
      {
        type: "list",
        items: [
          "Parties: correct legal names and, if relevant, business details such as GST numbers.",
          "Scope: exactly what each side will do or deliver, and what is out of scope.",
          "Money: fees, what they include, payment dates, advances, GST treatment and expected TDS.",
          "Ownership and usage: who owns what is created, and what the other side may do with it.",
          "Exclusivity and restrictions: any limits on who else you can work with, and for how long.",
          "Approvals and changes: how feedback, revisions and scope changes work.",
          "Confidentiality: what must stay private and for how long.",
          "Term and termination: start and end, notice, what happens to payments and rights on exit.",
          "Liability and compliance: who is responsible for claims, disclosure and legal compliance.",
          "Disputes: governing law, jurisdiction and how disagreements are handled.",
        ],
      },
      { type: "heading", text: "Management agreements deserve extra care", id: "management" },
      {
        type: "paragraph",
        text: "Management and agency agreements often last longer and affect more income than any single brand deal. Before signing, check what the commission applies to (brand deals only, or also platform income, products and deals you found yourself), whether it's calculated on gross fees or after GST and costs, whether the manager can sign deals for you, how long the term runs, how you can exit, and whether commission continues on deals or renewals after the agreement ends. How to compare managers, agencies and networks is covered in creator manager vs agency, and pay structures in creator team compensation.",
        links: [
          { text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" },
          { text: "creator team compensation", href: "/blog/creator-team-compensation" },
        ],
      },
      { type: "heading", text: "Agreements you draft: freelancers and clients", id: "you-draft" },
      {
        type: "paragraph",
        text: "When you hire an editor or take on a consulting client, you're the one who should put terms in writing. A short, plain-language agreement is far better than none. For freelancers, the most important clause is ownership: the finished work and project files should belong to you on payment, and any licensed music, fonts or stock should be licensed for your use. For clients, define deliverables, revision limits and cancellation terms.",
      },
      {
        type: "template",
        label: "One-page freelancer agreement outline (have a lawyer adapt it)",
        text: "1. Parties and start date\n2. Services: [e.g. editing 4 long-form videos a month, 2 revision rounds each]\n3. Fees and payment: [amount], invoiced [monthly], paid within [X] days\n4. Ownership: all deliverables and project files are assigned to [Creator] on payment\n5. Third-party assets: licensed in [Creator]'s name or with rights for commercial use\n6. Confidentiality: unreleased content and brand deals stay confidential\n7. Access: provided through platform roles; removed at the end of the engagement\n8. Portfolio use: allowed after publication, with credit, unless a brand forbids it\n9. Term and notice: [X] days' notice by either side\n10. Governing law and disputes",
      },
      {
        type: "paragraph",
        text: "Ownership of work made by others is explained in creator copyright and the wider creator intellectual property guide.",
        links: [
          { text: "creator copyright", href: "/blog/creator-copyright" },
          { text: "creator intellectual property", href: "/blog/creator-intellectual-property" },
        ],
      },
      { type: "heading", text: "Collaborations with other creators", id: "collaborations" },
      {
        type: "paragraph",
        text: "Joint videos, podcasts and shared products are often agreed in a DM. That works until the content is licensed to a brand, a sponsor conflicts with the other creator's deal, or the partnership ends. A short written note should cover who publishes where, who owns the raw footage and final edit, how any sponsorship or product revenue is split, and what each side may do with the content later.",
      },
      { type: "heading", text: "Legal documents and records to keep", id: "records" },
      {
        type: "table",
        headers: ["Record", "Why keep it"],
        rows: [
          ["Signed agreements and all amendments", "Proves what was agreed; needed for disputes and renewals"],
          ["Confirmation emails for deals without a formal contract", "Evidence of terms"],
          ["Briefs, approvals and change requests", "Shows content matched what was approved"],
          ["Proof of disclosure and live links", "Compliance evidence"],
          ["Invoices, payment records and TDS certificates", "Tax and payment disputes"],
          ["Licences for music, fonts, stock and footage", "Answers copyright claims"],
          ["Releases from people or locations in your content", "Consent evidence"],
          ["Business registrations (GST, Udyam, trademark filings)", "Needed by brands, banks and your accountant"],
        ],
      },
      {
        type: "paragraph",
        text: "When an email is enough and when you need a full contract is covered in creator contracts vs emails. How to organise campaign records is in creator campaign documentation, and tax records in creator tax records for India.",
        links: [
          { text: "creator contracts vs emails", href: "/blog/creator-contracts-vs-emails" },
          { text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" },
          { text: "creator tax records for India", href: "/blog/creator-tax-records-india" },
        ],
      },
      { type: "heading", text: "When to involve a lawyer", id: "lawyer" },
      {
        type: "list",
        items: [
          "Management, agency or network agreements, especially exclusive or multi-year ones.",
          "Perpetual, worldwide or buyout rights to your content, likeness or voice.",
          "Long or broad exclusivity and category restrictions.",
          "High-value deals, equity or revenue-share arrangements.",
          "Anything with indemnities, penalties or unusual liability clauses.",
          "A dispute, legal notice or content takedown you intend to contest.",
        ],
      },
      {
        type: "paragraph",
        text: "A lawyer who works with media, advertising or intellectual property usually reviews creator agreements faster than a generalist. Ask for a fixed fee for a contract review where possible.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Signing management agreements without reading the commission and exit terms.",
          "Hiring freelancers with no written ownership clause.",
          "Agreeing collaborations in DMs with nothing about ownership or revenue.",
          "Losing the signed copy or the email trail.",
          "Treating a contract as final when it can usually be negotiated.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Contracts are how a creator business protects its work and income. Know the eight types, check the core terms in each, draft simple agreements for the people you hire, keep every record, and bring in a lawyer for the agreements that shape your business for years.",
      },
    ],
    faqs: [
      {
        question: "What contracts does a content creator need?",
        answer:
          "Typically brand collaboration agreements, management or agency agreements, freelancer and team agreements, content licensing agreements, collaboration agreements with other creators, services agreements with clients and NDAs.",
      },
      {
        question: "What legal documents should a creator business keep?",
        answer:
          "Signed agreements and amendments, confirmation emails, briefs and approvals, proof of disclosure, invoices and TDS certificates, licences for music and stock, releases, and business registrations such as GST or trademark filings.",
      },
      {
        question: "Do creators need a lawyer to review contracts?",
        answer:
          "Not for every small deal, but it's worth it for management or agency agreements, perpetual or buyout rights, broad exclusivity, high-value deals and anything with unusual liability terms.",
      },
    ],
  },
  {
    slug: "creator-intellectual-property",
    category: "Creator Resources",
    title: "Creator Intellectual Property: What Creators Own and What They Don't",
    seoTitle: "Creator Intellectual Property: What You Own",
    excerpt:
      "A plain-language map of creator intellectual property in India: copyright in your content, trademarks for your brand name, personality rights over your name, face and voice, what platforms, brands, editors and collaborators may own or use, AI-generated material, and how to protect each.",
    metaDescription:
      "What creators own: copyright, trademarks, personality rights, platform licences, brand and freelancer work, AI content, and how to protect each in India.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator intellectual property", "who owns creator content", "creator IP India", "personality rights India creators", "creator ownership rights", "AI content ownership creators"],
    related: ["creator-copyright", "creator-trademark", "creator-usage-rights"],
    body: [
      {
        type: "paragraph",
        text: "Creators build value in several layers at once: the videos themselves, the channel name people search for, a recognisable face and voice, and the formats and catchphrases audiences associate with them. Intellectual property law protects some of these layers well, some partly and some barely at all. Knowing which is which tells you what to protect and what to negotiate carefully.",
      },
      {
        type: "paragraph",
        text: "This is general information about Indian law, not legal advice. Laws and court decisions in this area, especially around AI and likeness, are changing.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creators usually own the copyright in original content they make themselves. A brand name or logo can be protected as a trademark, which in practice means registering it. Your name, face and voice may be protected through personality rights, which Indian courts have recognised case by case rather than through a specific statute. Platforms don't own your content but get a licence to use it under their terms. Brands get only the rights your agreement grants. Work made by editors, designers or collaborators depends on your written agreements. Ideas, general formats and styles are hard to protect on their own.",
      },
      { type: "heading", text: "The creator IP map", id: "map" },
      {
        type: "table",
        headers: ["What you create or have", "Main protection", "How strong", "What to do"],
        rows: [
          ["Videos, photos, scripts, music you make", "Copyright", "Strong; arises automatically", "Keep originals and dated records; register key works if useful"],
          ["Channel or brand name, logo", "Trademark", "Strong once registered", "Search, then file for relevant classes"],
          ["Name, face, voice, persona", "Personality rights, passing off", "Developing; court-by-court", "Contract carefully; act quickly on misuse"],
          ["Catchphrases and slogans", "Trademark (sometimes)", "Limited unless distinctive and used as a brand", "Consider registration if used on products"],
          ["Formats, ideas, styles", "Rarely protected on their own", "Weak", "Protect the execution; use NDAs when pitching"],
          ["Unreleased plans, brand deals", "Confidentiality (contract)", "As strong as your NDA", "Use NDAs with team and partners"],
          ["Courses, templates, ebooks", "Copyright", "Strong", "Licence terms for buyers; watermark previews"],
        ],
      },
      { type: "heading", text: "Copyright: your content", id: "copyright" },
      {
        type: "paragraph",
        text: "Copyright protects original expression: the specific video, photo, script or song, not the underlying idea. In India it exists as soon as the work is created, without registration, though registration with the Copyright Office can help as evidence. Creator copyright covers ownership, registration, fair dealing and platform enforcement in detail.",
        links: [
          { text: "Creator copyright", href: "/blog/creator-copyright" },
          { text: "Copyright Office", href: SOURCES.copyrightOfficeIndia },
        ],
      },
      { type: "heading", text: "Trademarks: your brand name and logo", id: "trademark" },
      {
        type: "paragraph",
        text: "A trademark protects the name, logo or sign that identifies you as the source of goods or services. It matters most when your name is on products, courses, merchandise or a company, or when someone else starts using a confusingly similar name. The creator trademark guide explains searching, classes and filing in India.",
        links: [{ text: "creator trademark guide", href: "/blog/creator-trademark" }],
      },
      { type: "heading", text: "Personality rights: your name, face and voice", id: "personality" },
      {
        type: "paragraph",
        text: "India has no single statute for personality rights, but courts, particularly the Delhi High Court, have granted orders protecting well-known people's names, images, voices and likenesses from unauthorised commercial use, including AI-generated deepfakes and voice clones. These cases have mostly involved celebrities, and how far the protection extends to smaller creators isn't settled. Practically, protect your likeness through contracts: limit how brands can use your face and voice, avoid granting rights to create AI versions of you, and act quickly on impersonation. See creator impersonation and AI disclosure for creators.",
        links: [
          { text: "creator impersonation", href: "/blog/creator-impersonation" },
          { text: "AI disclosure for creators", href: "/blog/ai-disclosure-creators" },
        ],
      },
      { type: "heading", text: "Who else may own or use your work", id: "others" },
      {
        type: "table",
        headers: ["Party", "What they usually get", "Watch for"],
        rows: [
          ["Platforms", "A licence to host, display and distribute under their terms", "Terms change; you keep ownership but platforms can remove content"],
          ["Brands", "Only the usage your agreement grants", "Perpetual, worldwide or buyout clauses; rights to edit or make AI versions"],
          ["Editors and designers", "Depends on your agreement", "Without a written assignment, ownership of their contribution can be unclear"],
          ["Collaborators", "Joint ownership unless agreed otherwise", "Who can license or monetise the joint content"],
          ["Employees", "Work made in the course of employment generally belongs to the employer, subject to the contract", "Written employment terms"],
          ["Music, stock and font owners", "They keep ownership; you get a licence", "Commercial use and sponsored-content restrictions"],
        ],
      },
      {
        type: "paragraph",
        text: "What brands can do with your content is covered in creator usage rights; licensing existing content to brands in creator content licensing.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
        ],
      },
      { type: "heading", text: "AI-generated material", id: "ai" },
      {
        type: "paragraph",
        text: "Whether AI-generated material can be protected by copyright, and who owns it, is unsettled in India and differs between countries. Content where you made the creative choices and used AI as a tool is on firmer ground than material generated from a short prompt. Check the AI tool's terms for ownership and commercial use, keep records of your own creative input, and don't assume you can stop others copying purely AI-generated elements.",
      },
      { type: "heading", text: "A protection checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Keep original files and project files with dates for everything you publish.",
          "Put ownership assignments in every freelancer and team agreement.",
          "Search and consider registering your brand name before launching products or a company.",
          "Read usage, likeness and AI clauses in brand contracts carefully.",
          "Use NDAs when sharing unreleased formats or products.",
          "License music, fonts and stock for commercial use.",
          "Monitor for reuploads and impersonation, and use platform tools to act.",
        ],
      },
      {
        type: "paragraph",
        text: "Platform tools for reuploads are covered in how to protect videos from reuploads.",
        links: [{ text: "how to protect videos from reuploads", href: "/blog/protect-videos-from-reuploads" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming you own everything your team makes without a written assignment.",
          "Signing away rights to your likeness or voice in a routine brand contract.",
          "Building a product line on a brand name someone else has already registered.",
          "Believing a format or idea is protected without anything in writing.",
          "Using music or stock outside its licence in sponsored content.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator IP has layers: copyright for the content, trademarks for the brand, personality rights for your persona, and contracts for everything else. Protect each layer in the way the law actually supports, and use agreements to fill the gaps.",
      },
    ],
    faqs: [
      {
        question: "Do creators own their content on Instagram and YouTube?",
        answer:
          "Generally yes. Creators usually keep copyright in original content, and platforms receive a licence to host and distribute it under their terms.",
      },
      {
        question: "Can a creator protect their name and face in India?",
        answer:
          "Indian courts have protected well-known people's names, images and voices through personality rights orders, including against AI deepfakes, but there's no single statute and protection for smaller creators isn't settled. Contracts and prompt action on misuse are the practical protections.",
      },
      {
        question: "Who owns a video my editor made?",
        answer:
          "It depends on your agreement. Put a written assignment in place so the finished work and project files belong to you on payment.",
      },
    ],
  },
  {
    slug: "creator-trademark",
    category: "Creator Resources",
    title: "Creator Trademark Guide: How Creators Can Protect Their Brand Name and Logo in India",
    seoTitle: "Creator Trademark Guide: Protect Your Brand Name in India",
    excerpt:
      "When a creator should trademark their channel name or logo, what a trademark does and doesn't protect, searching before you file, choosing classes, the filing process with IP India, the TM and ® symbols, timelines and objections, and what to do if someone copies your name.",
    metaDescription:
      "How Indian creators trademark a channel name or logo: when it's worth it, searching, choosing classes, filing with IP India, TM vs ® and handling copycats.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator trademark", "trademark channel name India", "YouTuber trademark", "influencer trademark registration", "trademark classes creators", "TM vs registered symbol"],
    related: ["creator-intellectual-property", "creator-copyright", "creator-contracts"],
    body: [
      {
        type: "paragraph",
        text: "A creator's name starts as a handle and slowly becomes a brand: on merchandise, a course, a podcast, a company. At some point the question arrives, usually when a copycat appears or a brand asks about licensing your name: have you protected it?",
      },
      {
        type: "paragraph",
        text: "This is general information about trademarks in India, not legal advice. Trademark filings involve judgement calls about classes and wording, and a trademark attorney or agent can save costly mistakes.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A trademark protects a name, logo or sign that identifies you as the source of goods or services. Creators should consider registering their brand name when they sell products, courses or merchandise under it, run a company or studio under it, or see others using a similar name. Search the trademark register first, choose the classes that match what you sell (India uses the 45-class Nice Classification), file with IP India, and respond to any examination objections. You can use ™ once you use the mark; use ® only after registration is granted.",
      },
      { type: "heading", text: "What a trademark protects, and what it doesn't", id: "scope" },
      {
        type: "table",
        headers: ["Protects", "Doesn't protect"],
        rows: [
          ["Your brand name used for specific goods or services", "Your content itself (that's copyright)"],
          ["Your logo and distinctive visual marks", "Ideas, formats or content styles"],
          ["Distinctive slogans used as a brand", "Common words used descriptively"],
          ["Against confusingly similar names in related classes", "Every possible use of the word in every industry"],
        ],
      },
      {
        type: "paragraph",
        text: "How trademarks fit with copyright and personality rights is covered in creator intellectual property.",
        links: [{ text: "creator intellectual property", href: "/blog/creator-intellectual-property" }],
      },
      { type: "heading", text: "When is a trademark worth it?", id: "when" },
      {
        type: "table",
        headers: ["Situation", "Priority"],
        rows: [
          ["You only post content under a personal name", "Usually low"],
          ["You're launching merchandise, a course or a product under your brand name", "High: file before launch if you can"],
          ["You're starting a company, studio or agency with the name", "High"],
          ["Someone is using a confusingly similar name commercially", "High, and get advice"],
          ["Brands want to license your name or logo", "High"],
          ["Your channel name is a common word or descriptive phrase", "Harder to register; take advice"],
        ],
      },
      { type: "heading", text: "Step 1: Search before you file", id: "search" },
      {
        type: "paragraph",
        text: "Search the trademark register on IP India's website for identical and similar marks in the classes you plan to use, and search the web, app stores and social platforms. If a similar mark is already registered for related goods or services, your application may face objections or opposition, and using the name could create risk. It's far cheaper to adjust a name before launching products than after.",
        links: [{ text: "IP India's website", href: SOURCES.ipIndia }],
      },
      { type: "heading", text: "Step 2: Choose your classes", id: "classes" },
      {
        type: "paragraph",
        text: "Trademarks are registered for specific classes of goods and services. File for what you actually sell or clearly plan to sell. Classes creators commonly consider include:",
      },
      {
        type: "table",
        headers: ["Class", "Covers (simplified)", "Creator examples"],
        rows: [
          ["41", "Education, entertainment, training", "Channels, courses, workshops, events"],
          ["35", "Advertising and business services", "Brand promotion services, agency work"],
          ["9", "Downloadable and recorded media, software", "Downloadable courses, apps, digital products"],
          ["16", "Printed matter", "Books, planners, printed guides"],
          ["25", "Clothing", "Merchandise apparel"],
          ["38", "Telecommunications, broadcasting", "Streaming and broadcasting services"],
        ],
      },
      {
        type: "paragraph",
        text: "Class descriptions here are simplified; check the official classification and descriptions, and take advice on wording, which affects how broad your protection is.",
      },
      { type: "heading", text: "Step 3: File with IP India", id: "file" },
      {
        type: "list",
        items: [
          "File online through IP India's trademark e-filing system, yourself or through a trademark attorney or agent.",
          "Provide the applicant's details (you or your company), the mark (word, logo or both), classes and a description of goods or services.",
          "State whether you already use the mark and since when, or whether it's proposed to be used.",
          "Pay the official fee, which differs by applicant type; check the current fee schedule.",
          "Keep the application number; you can use ™ with the mark while it's pending.",
        ],
      },
      { type: "heading", text: "Step 4: Examination, objections and opposition", id: "examination" },
      {
        type: "paragraph",
        text: "The registry examines the application and may raise objections, for example if the mark is descriptive or similar to an earlier one. You can reply with arguments or evidence of use. If accepted, the mark is published so others can oppose it. Unopposed or successful applications proceed to registration. The process commonly takes many months and can take longer if contested; monitor your application status and deadlines closely, because missing a reply deadline can end the application.",
      },
      { type: "heading", text: "TM vs ®", id: "symbols" },
      {
        type: "paragraph",
        text: "You can use ™ to show you claim a name or logo as a trademark, whether or not you've filed. Use ® only after registration is granted. Falsely representing a mark as registered is an offence under the Trade Marks Act, 1999.",
      },
      { type: "heading", text: "If someone copies your name", id: "copycats" },
      {
        type: "list",
        items: [
          "Collect evidence: screenshots, dates, links, and examples of confusion.",
          "If it's an account pretending to be you, use platform impersonation reporting.",
          "If it's a competing product or business, get advice before sending a notice.",
          "Registered marks are easier to enforce; unregistered names may still be protected through passing off, but that's harder to prove.",
        ],
      },
      {
        type: "paragraph",
        text: "Account-level copies are covered in creator impersonation.",
        links: [{ text: "creator impersonation", href: "/blog/creator-impersonation" }],
      },
      { type: "heading", text: "Who should own the trademark?", id: "owner" },
      {
        type: "paragraph",
        text: "If you run your business through a company or LLP, decide whether the trademark belongs to you personally or to the company, and record that choice. It matters when you bring in partners, raise money or license the name. Your chartered accountant and lawyer can advise on the structure.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Launching merchandise under a name without searching the register.",
          "Filing in the wrong classes, or too narrowly for what you sell.",
          "Using ® before registration.",
          "Missing examination reply deadlines.",
          "Filing in your personal name when the business will own the brand, or the reverse, without thinking it through.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A trademark turns your creator name into a protectable business asset. Search first, file for the classes you actually sell in, track the application carefully and use the right symbol. For anything contested or valuable, work with a trademark professional.",
      },
    ],
    faqs: [
      {
        question: "Should YouTubers trademark their channel name?",
        answer:
          "It's most worthwhile when you sell products, courses or merchandise under the name, run a company with it, or see others using a similar name. For a personal-name channel with no products, it's usually a lower priority.",
      },
      {
        question: "Which trademark class should a creator file in?",
        answer:
          "It depends on what you sell. Class 41 (education and entertainment) is common for channels, courses and events; merchandise, books and downloadable products fall in other classes. Check the official classification and take advice on wording.",
      },
      {
        question: "Can I use ® before my trademark is registered?",
        answer:
          "No. Use ™ while your mark is pending or unregistered. Falsely representing a mark as registered is an offence under the Trade Marks Act, 1999.",
      },
    ],
  },
];

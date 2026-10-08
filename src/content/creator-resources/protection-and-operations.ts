import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_4_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Creator protection and post-deal operations (540–549).
 * 545 (content approval) was consolidated into creator-brand-revisions and
 * 547 (campaign case study) into creator-case-study to avoid duplicate intent.
 */
export const protectionAndOperationsPosts: BlogPost[] = [
  {
    slug: "creator-copyright",
    category: "Creator Resources",
    title: "Creator Copyright: Complete Guide to Protecting Your Original Content",
    seoTitle: "Creator Copyright: Protect Your Original Content in India",
    excerpt:
      "What copyright covers for creators in India, who owns what, how licensing and reuse work, where transformation and fair dealing fit, and how to document and enforce your rights on platforms.",
    metaDescription:
      "Creator copyright guide for India: original works, automatic protection and optional registration, ownership with editors and brands, licensing, reuploads, fair dealing and transformation, platform reporting and documentation.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator copyright", "copyright India creators", "protect original content", "fair dealing", "copyright registration India", "copyright duration India", "how long copyright lasts creators"],
    related: ["protect-videos-from-reuploads", "creator-content-licensing", "creator-usage-rights"],
    body: [
      {
        type: "paragraph",
        text: "Your videos, photos, scripts, music you compose and designs you create are your work. Copyright is the legal framework that lets you control how they're copied and shared. Understanding the basics helps you protect your work, license it properly and avoid infringing others.",
      },
      {
        type: "paragraph",
        text: "Important: this is general, educational information, not legal advice. Copyright questions depend on facts and jurisdiction. For disputes, significant commercial value or contracts, consult a qualified lawyer.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In India, copyright under the Copyright Act, 1957 generally protects original works such as videos, photos, text, music and artwork from the moment they're created and fixed; registration with the Copyright Office is optional but can serve as evidence. The creator is usually the first owner unless an agreement says otherwise (for example, some brand or employment contracts). You can license your work to others while keeping ownership. Limited uses such as criticism, review and news reporting may fall within fair dealing. Protect your work by keeping original files and dates, using platform tools to find copies, and reporting infringements through official processes.",
      },
      { type: "heading", text: "What copyright covers (and doesn't)", id: "covers" },
      {
        type: "table",
        headers: ["Generally protected", "Generally not protected"],
        rows: [
          ["Your videos, footage and edits", "Ideas, concepts and formats in the abstract"],
          ["Photos and thumbnails you create", "Facts and data"],
          ["Scripts, captions and articles", "Short phrases and common expressions"],
          ["Original music and sound design", "Titles alone"],
          ["Illustrations, designs, presets you create", "Techniques and methods"],
        ],
      },
      {
        type: "paragraph",
        text: "This is why a content format or trend usually can't be \"owned\", but your specific video can.",
      },
      { type: "heading", text: "Who owns what", id: "ownership" },
      {
        type: "list",
        items: [
          "Solo creator: you generally own what you create.",
          "Editors and freelancers: ownership of their contribution depends on your agreement; get assignment or licence terms in writing.",
          "Brand-commissioned content: check the contract; some assign ownership to the brand, many grant a licence.",
          "Collaborations with other creators: agree who owns and can reuse the joint work.",
          "Music, footage and fonts inside your content: owned by others unless licensed.",
        ],
      },
      {
        type: "paragraph",
        text: "Contract language on ownership and licences is covered in the influencer contract guide for creators and creator content licensing.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
        ],
      },
      { type: "heading", text: "Registration in India", id: "registration" },
      {
        type: "paragraph",
        text: "Copyright protection doesn't depend on registration, but registering certain works with the Copyright Office can provide useful evidence of ownership and date. Most creators don't register every video; some register high-value works such as original music, courses or artwork. See the Copyright Office's website.",
        links: [{ text: "Copyright Office's website", href: SOURCES.copyrightOfficeIndia }],
      },
      { type: "heading", text: "Reuse, transformation and fair dealing", id: "fair-dealing" },
      {
        type: "paragraph",
        text: "Indian law uses \"fair dealing\" exceptions, which permit certain limited uses such as criticism or review and reporting current events, subject to conditions. \"Fair use\" is the US concept and works differently. Adding commentary to someone else's clip doesn't automatically make it lawful. Platforms also have their own rules: Instagram, for example, deprioritises unoriginal reposts in recommendations, and YouTube requires reused content to add significant original value to be monetizable.",
      },
      { type: "heading", text: "Documenting your work", id: "documentation" },
      {
        type: "list",
        items: [
          "Keep original, high-resolution files and project files.",
          "Keep raw footage with metadata showing dates.",
          "Upload to your main platform first; YouTube's Copyright Match Tool, for instance, looks for copies uploaded after yours.",
          "Keep records of licences you grant and receive.",
          "Save agreements with editors, collaborators and brands.",
        ],
      },
      { type: "heading", text: "Enforcing your rights on platforms", id: "enforcing" },
      {
        type: "table",
        headers: ["Platform", "Tools and routes"],
        rows: [
          ["YouTube", "Copyright Match Tool (for YPP channels), Content ID (for eligible rights holders), copyright removal requests"],
          ["Instagram / Facebook", "Copyright reporting forms; Meta's content protection and Rights Manager for eligible creators"],
          ["Websites", "Contact the site owner or host; takedown notices"],
        ],
      },
      {
        type: "paragraph",
        text: "Step-by-step guidance is in how to protect your videos from reuploads. Official tools: YouTube's copyright management tools and Instagram's copyright reporting.",
        links: [
          { text: "how to protect your videos from reuploads", href: "/blog/protect-videos-from-reuploads" },
          { text: "YouTube's copyright management tools", href: SOURCES.youtubeCopyrightTools },
          { text: "Instagram's copyright reporting", href: SOURCES.instagramCopyrightReport },
        ],
      },
      { type: "heading", text: "Avoid infringing others", id: "avoid-infringing" },
      {
        type: "list",
        items: [
          "Use music from platform libraries within their terms, or licensed tracks; platform music often can't be used in brand ads.",
          "Get permission for clips, photos and artwork you didn't create.",
          "Credit isn't the same as permission.",
          "Be careful with AI-generated assets; check the tool's terms for commercial use.",
        ],
      },
      { type: "heading", text: "How long copyright lasts", id: "duration" },
      {
        type: "paragraph",
        text: "Under India's Copyright Act, 1957, copyright generally lasts for the author's lifetime plus 60 years for literary, dramatic, musical and artistic works, and for 60 years from publication for films and sound recordings, which is how many creator videos are treated. The exact term depends on the type of work and who the author is, so check with a lawyer for anything valuable.",
      },
      { type: "heading", text: "Copyright is one layer of your IP", id: "ip-layers" },
      {
        type: "paragraph",
        text: "Copyright protects your content, but not your channel name, logo or likeness. Those are covered by trademarks, personality rights and contracts; see creator intellectual property and the creator trademark guide.",
        links: [
          { text: "creator intellectual property", href: "/blog/creator-intellectual-property" },
          { text: "creator trademark guide", href: "/blog/creator-trademark" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming credit makes reuse legal.",
          "No written agreement with editors or collaborators.",
          "Deleting raw files you might need as evidence.",
          "Filing false or abusive copyright claims, which platforms penalise.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Know what you own, put ownership in writing with everyone you work with, keep your originals, and use platform tools to enforce your rights. When real money or disputes are involved, get legal advice.",
      },
    ],
    faqs: [
      {
        question: "Do creators need to register copyright in India?",
        answer: "No. Copyright generally arises automatically when an original work is created. Registration is optional but can serve as useful evidence.",
      },
      {
        question: "Is giving credit enough to reuse someone's content?",
        answer: "No. Credit isn't permission. You generally need a licence unless a legal exception such as fair dealing clearly applies.",
      },
      {
        question: "Who owns content an editor makes for me?",
        answer: "It depends on your agreement. Put ownership or licence terms in writing with editors and freelancers.",
      },
      {
        question: "What's the difference between fair dealing and fair use?",
        answer: "Fair dealing is the Indian concept, listing specific permitted purposes such as criticism, review and news reporting. Fair use is the broader US concept. They aren't interchangeable.",
      },
    ],
  },
  {
    slug: "protect-videos-from-reuploads",
    category: "Creator Resources",
    title: "How Creators Can Protect Their Videos From Reuploads and Content Theft",
    seoTitle: "How to Protect Your Videos From Reuploads and Theft",
    excerpt:
      "Practical steps to prevent, find and remove reuploads of your videos: watermarks and upload habits, YouTube's Copyright Match Tool and Content ID, Meta's content protection, reporting, and when to let it go.",
    metaDescription:
      "How creators protect videos from reuploads: prevention habits, finding copies, YouTube Copyright Match Tool and Content ID, Meta content protection and Rights Manager, reporting reuploads, and handling repeat offenders.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["reupload protection", "content theft", "Copyright Match Tool", "Content ID", "Meta content protection"],
    related: ["creator-copyright", "creator-impersonation", "creator-content-licensing"],
    body: [
      {
        type: "paragraph",
        text: "Few things are more frustrating than finding your video on someone else's page with more views than yours. Reuploads take views, credit and sometimes income. You can't stop every copy, but you can make them harder, find them faster and remove them through official routes.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To protect videos from reuploads: upload to your main platform first, add a subtle on-video handle, keep original files, use platform detection tools (YouTube's Copyright Match Tool for YPP channels, Content ID for eligible rights holders, Meta's content protection and Rights Manager for eligible creators), report copies through official copyright forms, and escalate repeat offenders. Weigh whether each copy is worth pursuing.",
      },
      { type: "heading", text: "Prevention habits", id: "prevention" },
      {
        type: "list",
        items: [
          "Upload to your primary platform first, before cross-posting.",
          "Add a small, consistent handle or logo on the video (hard to crop).",
          "Keep raw and project files as proof of origin.",
          "Say your name or channel early in the video.",
          "Avoid posting full-length originals on platforms you don't monitor.",
        ],
      },
      { type: "heading", text: "Detection tools", id: "tools" },
      {
        type: "table",
        headers: ["Tool", "Who can use it", "What it does"],
        rows: [
          ["YouTube Copyright Match Tool", "Channels in the YouTube Partner Program", "Finds full reuploads of your videos uploaded after yours on YouTube"],
          ["YouTube Content ID", "Rights holders who meet eligibility criteria", "Automated matching with block, track or monetize options"],
          ["Meta content protection", "Eligible creators, rolling out via Facebook", "Protects reels posted to Facebook and detects matches across Facebook and Instagram"],
          ["Meta Rights Manager", "Rights holders approved by Meta", "Matching and management of content across Facebook and Instagram"],
        ],
      },
      {
        type: "paragraph",
        text: "Official details: YouTube Copyright Match Tool, Content ID eligibility and Meta's content protection for creators.",
        links: [
          { text: "YouTube Copyright Match Tool", href: SOURCES.youtubeCopyrightMatch },
          { text: "Content ID eligibility", href: SOURCES.youtubeContentId },
          { text: "Meta's content protection for creators", href: SOURCES.metaContentProtection },
        ],
      },
      { type: "heading", text: "Reporting a reupload", id: "reporting" },
      {
        type: "template",
        label: "Before you report",
        text: "☐ Link to your original and its upload date\n☐ Link(s) to the copy and screenshots\n☐ Confirm you own the rights (not licensed to them)\n☐ Check it isn't an authorised use (collab, licence, brand repost)\n☐ Use the platform's official copyright form (not the spam or impersonation form)",
      },
      {
        type: "list",
        items: [
          "YouTube: via Copyright Match Tool or the copyright removal request.",
          "Instagram / Facebook: via the copyright reporting form or in-app reporting.",
          "Other sites: contact the site owner or host with a takedown notice.",
        ],
      },
      { type: "heading", text: "When a copy isn't worth fighting", id: "judgement" },
      {
        type: "paragraph",
        text: "Short clips with credit on small accounts may be worth a polite message rather than a formal claim. Some creators even let fan pages share clips with credit. Decide based on harm: lost income, misleading use, or someone profiting from your work.",
      },
      { type: "heading", text: "Repeat offenders and impersonators", id: "repeat" },
      {
        type: "paragraph",
        text: "Accounts that repeatedly steal content, or pretend to be you, should be reported through both copyright and impersonation routes. See creator impersonation.",
        links: [{ text: "creator impersonation", href: "/blog/creator-impersonation" }],
      },
      {
        type: "paragraph",
        text: "Reuploads are a copyright issue; what else you own, from trademarks to personality rights, is mapped in creator intellectual property.",
        links: [
          { text: "creator intellectual property", href: "/blog/creator-intellectual-property" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Filing claims against authorised uses, such as a brand's licensed repost.",
          "Using the wrong reporting form.",
          "Not keeping originals as evidence.",
          "Abusing copyright tools; platforms can penalise false claims.",
        ],
      },
      {
        type: "paragraph",
        text: "When licensing your videos to others, agree terms in writing; see creator content licensing and creator usage rights.",
        links: [{ text: "creator content licensing", href: "/blog/creator-content-licensing" }, { text: "creator usage rights", href: "/blog/creator-usage-rights" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Build prevention habits, turn on the detection tools you're eligible for, and use official forms with good evidence. For the legal background, see creator copyright.",
        links: [{ text: "creator copyright", href: "/blog/creator-copyright" }],
      },
    ],
    faqs: [
      {
        question: "How do I stop people reuploading my YouTube videos?",
        answer: "You can't stop every copy, but uploading first, adding a subtle handle, keeping originals, using the Copyright Match Tool if you're in YPP, and reporting copies through YouTube's copyright process help.",
      },
      {
        question: "What's the difference between the Copyright Match Tool and Content ID?",
        answer: "The Copyright Match Tool is for YPP creators to find full reuploads of their videos. Content ID is an automated system for rights holders who meet stricter eligibility criteria.",
      },
      {
        question: "Can Instagram creators protect reels from reuploads?",
        answer: "Meta offers content protection for eligible creators, which protects reels posted to Facebook and detects matches across Facebook and Instagram. Anyone can report copyright infringement through Instagram's forms.",
      },
    ],
  },
  {
    slug: "creator-impersonation",
    category: "Creator Resources",
    title: "Creator Impersonation: How to Protect Your Identity and Report Fake Accounts",
    seoTitle: "Creator Impersonation: Report Fake Accounts",
    excerpt:
      "What to do when someone pretends to be you: spotting fake profiles and AI likeness misuse, reporting on Instagram and YouTube, preserving evidence, warning your audience and reducing future risk.",
    metaDescription:
      "Creator impersonation: fake profiles, identity and likeness misuse, reporting impersonation on Instagram and YouTube, YouTube likeness detection, verification, evidence preservation and audience communication.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["creator impersonation", "fake account", "report impersonation Instagram", "YouTube likeness detection", "identity protection", "fake accounts creators"],
    related: ["creator-scams-fake-brand-collaborations", "protect-videos-from-reuploads", "creator-brand-safety"],
    body: [
      {
        type: "paragraph",
        text: "As creators grow, fake accounts appear: copies of your profile messaging followers about \"giveaways\", accounts using your photos to sell products, or AI-altered videos of your face. Impersonation harms your audience and your reputation. Acting quickly and through the right channels matters.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "If someone impersonates you: collect evidence (screenshots, links, dates), report the account through the platform's impersonation process (Instagram has an in-app option and a form; YouTube's impersonation policy lets you report channels), use likeness detection on YouTube where available to find AI-altered videos of your face, warn your audience about how you do and don't contact people, and consider verification. If followers have been defrauded, they should report financial fraud at cybercrime.gov.in or 1930.",
      },
      { type: "heading", text: "Types of impersonation", id: "types" },
      {
        type: "table",
        headers: ["Type", "What it looks like"],
        rows: [
          ["Clone profile", "Same name and photo with a slightly different handle"],
          ["Scam messenger", "Fake account DMing your followers about prizes or investments"],
          ["Fake brand representative", "Someone claiming to manage you, contacting brands"],
          ["Content theft with identity", "Your videos posted as if the account were you"],
          ["AI likeness misuse", "Altered or generated videos of your face or voice"],
        ],
      },
      { type: "heading", text: "Reporting on Instagram", id: "instagram" },
      {
        type: "list",
        items: [
          "Go to the fake profile → Report → Report account → It's pretending to be someone else → Me.",
          "If you can't access the app, Instagram has a web form for impersonation reports.",
          "Reports (other than intellectual property reports) are anonymous to the reported account.",
        ],
      },
      {
        type: "paragraph",
        text: "Source: Instagram's help on impersonation.",
        links: [{ text: "Instagram's help on impersonation", href: SOURCES.instagramImpersonation }],
      },
      { type: "heading", text: "Reporting on YouTube", id: "youtube" },
      {
        type: "paragraph",
        text: "YouTube's impersonation policy prohibits deceptively copying the branding, content or usernames of individuals or channels, including using AI to copy someone's voice or likeness. You can report the channel. YouTube's likeness detection, available to eligible creators aged 18 and over and expanding, helps find videos where your face appears to be AI-altered or generated so you can request removal.",
        links: [
          { text: "YouTube's impersonation policy", href: SOURCES.youtubeImpersonation },
          { text: "YouTube's likeness detection", href: SOURCES.youtubeLikeness },
        ],
      },
      { type: "heading", text: "Preserve evidence", id: "evidence" },
      {
        type: "list",
        items: [
          "Screenshots of the profile, posts and messages (with dates and URLs).",
          "Screenshots from followers who were contacted.",
          "Links to your genuine accounts showing earlier creation dates.",
          "Any payment details scammers shared, for police reports.",
        ],
      },
      { type: "heading", text: "Talk to your audience", id: "audience" },
      {
        type: "template",
        label: "Pinned post or Story",
        text: "⚠️ There's a fake account using my name (@fake_handle). I will never:\n• DM you about prizes or giveaways asking for payment\n• Ask for your OTP, password or bank details\n• Sell investment schemes\n\nMy only accounts are @real_handle (Instagram) and [channel] (YouTube). Please report the fake account. If you've lost money, report it at cybercrime.gov.in or call 1930.",
      },
      {
        type: "paragraph",
        text: "Official fraud reporting: the National Cyber Crime Reporting Portal.",
        links: [{ text: "National Cyber Crime Reporting Portal", href: SOURCES.cybercrime }],
      },
      { type: "heading", text: "Reduce future risk", id: "reduce-risk" },
      {
        type: "list",
        items: [
          "Consider platform verification where available and eligible.",
          "Link all your official accounts from your website and bios.",
          "State in your bio how you handle brand enquiries (business email only).",
          "Turn on two-factor authentication on every account.",
          "Tell brands and agencies your official contact route.",
        ],
      },
      {
        type: "paragraph",
        text: "Brand-side scams that target creators are covered in how to spot fake brand collaboration offers.",
        links: [{ text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      {
        type: "paragraph",
        text: "Impersonation is different from someone taking over your real account. To protect your own accounts with passkeys, two-factor authentication and role-based team access, see creator account security.",
        links: [
          { text: "creator account security", href: "/blog/creator-account-security" },
        ],
      },
      {
        type: "paragraph",
        text: "If someone uses your name or brand commercially rather than just pretending to be you, trademark and personality rights may matter; see creator intellectual property and the creator trademark guide.",
        links: [
          { text: "creator intellectual property", href: "/blog/creator-intellectual-property" },
          { text: "creator trademark guide", href: "/blog/creator-trademark" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Engaging publicly with the impersonator.",
          "Reporting without evidence.",
          "Not warning followers until many have been scammed.",
          "No official contact route listed, so brands can't verify.",
        ],
      },
      {
        type: "paragraph",
        text: "Reuploads often travel with impersonation; see how to protect your videos from reuploads, and tell brands your official contact route in your creator media kit.",
        links: [{ text: "how to protect your videos from reuploads", href: "/blog/protect-videos-from-reuploads" }, { text: "creator media kit", href: "/blog/creator-media-kit" }],
      },
      {
        type: "paragraph",
        text: "Impersonation is one part of a wider picture; creator reputation management covers search results, corrections and handling criticism.",
        links: [{ text: "creator reputation management", href: "/blog/creator-reputation-management" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Report fast with evidence, warn your audience clearly, and make your official accounts easy to verify. Impersonation often recurs as you grow, so keep the pinned warning ready.",
      },
    ],
    faqs: [
      {
        question: "How do I report an account impersonating me on Instagram?",
        answer: "From the fake profile, tap Report, then Report account, choose It's pretending to be someone else, and select Me. Instagram also has a web form if you can't use the app.",
      },
      {
        question: "Can YouTube remove AI videos of my face?",
        answer: "YouTube's likeness detection helps eligible creators find AI-altered or generated videos of their face and request removal through the privacy complaint process. Its impersonation policy also covers AI copies of voice or likeness.",
      },
      {
        question: "What should followers do if a fake account scammed them?",
        answer: "Report the account on the platform and report financial fraud at cybercrime.gov.in or by calling 1930.",
      },
    ],
  },
  {
    slug: "creator-brand-safety",
    category: "Creator Resources",
    title: "Creator Brand Safety: How to Protect Your Personal Brand While Working With Brands",
    seoTitle: "Creator Brand Safety Checklist: Vet Sponsors Before You Accept",
    excerpt:
      "Brand safety cuts both ways: brands vet creators, and creators should vet brands. How to research a sponsor before accepting, assess category and claim risks, protect yourself in the contract, and handle controversies during and after campaigns, with a full checklist.",
    metaDescription:
      "Creator brand safety checklist: how to research a sponsor, category and claim risks in India, contract protections, comment moderation and handling partner controversies.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator brand safety", "brand safety checklist", "vet sponsors", "sponsorship checklist", "protect personal brand sponsorships", "brand partnerships", "creator sponsorship risk", "risky brand collaborations"],
    related: ["creator-brand-deal-checklist", "creator-reputation-management", "creator-crisis-management"],
    body: [
      {
        type: "paragraph",
        text: "Brands run brand-safety checks on creators before signing them. Creators should do the same in reverse. Your audience's trust is your main asset, and one partnership with a misleading product, a controversial company or an unsafe claim can damage it more than any fee is worth.",
      },
      {
        type: "paragraph",
        text: "Brands' side of this is covered in influencer brand safety for brands.",
        links: [{ text: "influencer brand safety for brands", href: "/blog/influencer-marketing-brand-safety" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator brand safety means protecting your reputation when working with brands: vetting the company and product before accepting, avoiding claims you can't support, being careful in regulated categories (finance, health, alcohol-adjacent) and declining prohibited ones such as online money games, disclosing clearly, moderating comments on sponsored posts, and having a plan if a partner becomes controversial, including exit terms in your contract.",
      },
      { type: "heading", text: "Vet the brand and product", id: "vet" },
      {
        type: "list",
        items: [
          "Would you use and recommend it without payment?",
          "Real company, reviews, customer service, return policy?",
          "Any recent controversies, regulatory actions or complaints?",
          "Does it conflict with your values or existing partners?",
          "Is the category regulated or sensitive?",
        ],
      },
      { type: "heading", text: "How to research a sponsor in 20 minutes", id: "research" },
      {
        type: "paragraph",
        text: "Before you say yes, spend a short, structured session checking who you'd be associating with. You're looking for red flags, not perfection.",
      },
      {
        type: "table",
        headers: ["Check", "Where to look", "Red flag"],
        rows: [
          ["Who the company is", "Website, legal entity name on invoices or terms, contact details", "No named company, no address, only a messaging number"],
          ["What customers say", "Marketplace and app store reviews, Google reviews, Reddit and social comments", "Repeated complaints about refunds, delivery or product safety"],
          ["Regulatory history", "News search for the brand plus \"ban\", \"notice\", \"ASCI\", \"complaint\"", "Recent regulator action or upheld ad complaints"],
          ["Claims it wants you to make", "The brief and product pages", "\"Cures\", \"guaranteed returns\", \"100% safe\", before-and-after promises"],
          ["Other creators' experience", "Ask creators who've worked with it; check past sponsored posts", "Late payment, pressure to skip disclosure, deleted sponsored posts"],
          ["Your audience's view", "Comments when the brand has come up before", "Existing distrust or anger toward the brand"],
        ],
      },
      {
        type: "paragraph",
        text: "If the offer itself looks suspicious (fees to join, requests for passwords or OTPs, pressure to decide instantly), treat it as a possible scam first. See how to spot fake brand collaboration offers.",
        links: [{ text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      { type: "heading", text: "Category risk levels", id: "categories" },
      {
        type: "table",
        headers: ["Risk level", "Examples", "Extra care"],
        rows: [
          ["Prohibited", "Online money games (real-money gaming) in India", "The Promotion and Regulation of Online Gaming Act, 2025 prohibits online money games and their advertisement or promotion; decline"],
          ["Higher", "Investments, trading apps, crypto, loans, health supplements, weight loss", "Regulatory rules, qualifications, claims substantiation; many creators decline"],
          ["Medium", "Skincare with medical claims, children's products, education promising outcomes", "Check claims, avoid guarantees"],
          ["Lower", "Everyday consumer products, apps, food, fashion", "Standard vetting and disclosure"],
        ],
      },
      {
        type: "paragraph",
        text: "Two Indian rules are worth knowing in higher-risk categories. The Promotion and Regulation of Online Gaming Act, 2025 prohibits online money games and bars their advertisement and promotion, which covers creator promotions too. In finance, SEBI has restricted the entities it regulates, such as brokers and advisers, from associating with unregistered people who give investment advice or make return claims, so finance collaborations need particular care about what you say and who you work with.",
        links: [{ text: "The Promotion and Regulation of Online Gaming Act, 2025", href: SOURCES.onlineGamingAct2025 }],
      },
      { type: "heading", text: "Claims and compliance", id: "claims" },
      {
        type: "paragraph",
        text: "You're responsible for what you say. Avoid unsubstantiated claims (\"cures\", \"guaranteed returns\"), ask brands for evidence, stay within your qualifications in specialised areas, and disclose every partnership. See the creator disclosure guide and how to read a brand brief.",
        links: [
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
          { text: "how to read a brand brief", href: "/blog/creator-brand-brief" },
        ],
      },
      { type: "heading", text: "Protect yourself in the contract", id: "contract" },
      {
        type: "list",
        items: [
          "A mutual morality or reputation clause that lets you exit if the brand becomes controversial.",
          "Approval rights over claims and ad copy (especially for whitelisting).",
          "Clear usage limits so old content isn't used in contexts you'd object to.",
          "Indemnity terms reviewed so you aren't liable for the brand's own claims.",
        ],
      },
      {
        type: "paragraph",
        text: "See the influencer contract guide for creators and creator whitelisting.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "creator whitelisting", href: "/blog/creator-whitelisting" },
        ],
      },
      { type: "heading", text: "During a campaign", id: "during" },
      {
        type: "list",
        items: [
          "Moderate comments on sponsored posts; answer product questions honestly or direct them to the brand.",
          "Don't delete legitimate criticism; hide abuse and spam.",
          "Share customer complaints with the brand promptly.",
        ],
      },
      { type: "heading", text: "If a partner becomes controversial", id: "controversy" },
      {
        type: "template",
        label: "Response steps",
        text: "1. Pause new sponsored posts; don't delete in panic\n2. Read your contract: exit and morality clauses\n3. Talk to the brand or agency privately\n4. Decide: continue, pause, or exit\n5. If you address it publicly, be brief, factual and honest\n6. Document everything",
      },
      {
        type: "paragraph",
        text: "Creator crisis management walks through this process for eight common scenarios, and creator reputation management covers the longer-term work of protecting how people see you.",
        links: [
          { text: "Creator crisis management", href: "/blog/creator-crisis-management" },
          { text: "creator reputation management", href: "/blog/creator-reputation-management" },
        ],
      },
      { type: "heading", text: "Creator brand safety checklist", id: "checklist" },
      {
        type: "template",
        text: "BEFORE YOU ACCEPT\n☐ I'd recommend this unpaid, and I've used it (or will before posting)\n☐ Legal entity identified; contact on an official domain\n☐ Customer reviews and complaints checked\n☐ No recent regulatory action or upheld ad complaints\n☐ Category risk assessed (not a prohibited category)\n☐ Claims substantiated and within my expertise\n☐ No conflict with my values, audience or existing partners\n\nIN THE CONTRACT\n☐ Exit/morality and approval terms\n☐ Usage, whitelisting and editing limits\n☐ Disclosure agreed (platform label + visible label)\n\nDURING AND AFTER\n☐ Comment moderation plan\n☐ Complaint route agreed with the brand\n☐ Response plan if the partner becomes controversial",
      },
      { type: "heading", text: "Protecting your personal brand during a sponsorship", id: "personal-brand" },
      {
        type: "paragraph",
        text: "Brand safety isn't only about which brands you accept; it's also how you behave while working with them. Keep your usual voice and standards in sponsored content, share honest limitations, avoid a run of sponsored posts that crowds out what your audience follows you for, and respond to comments on sponsored posts as carefully as on your own. Creator audience trust and sponsored content fatigue cover both.",
        links: [
          { text: "Creator audience trust", href: "/blog/creator-audience-trust-sponsored-content" },
          { text: "sponsored content fatigue", href: "/blog/sponsored-content-fatigue-creators" },
        ],
      },
      { type: "heading", text: "Score a sponsorship's risk", id: "sponsorship-risk" },
      {
        type: "template",
        label: "Sponsorship risk score (0 = low, 2 = high)",
        text: "Category (regulated, prohibited-adjacent?)          0 / 1 / 2\nClaims (technical, unproven, comparative?)          0 / 1 / 2\nBrand reputation (complaints, controversies?)       0 / 1 / 2\nAudience fit (would your audience benefit?)         0 / 1 / 2\nContract terms (perpetual rights, broad exclusivity) 0 / 1 / 2\nYour own use of the product                         0 / 1 / 2\n\n0–3: proceed with normal checks  |  4–7: negotiate or add safeguards  |  8+: usually decline",
      },
      { type: "heading", text: "Brand safety, reputation and crisis: what's the difference?", id: "differences" },
      {
        type: "table",
        headers: ["Area", "Question it answers", "Guide"],
        rows: [
          ["Brand safety", "Is this partnership suitable for my audience and reputation?", "This guide"],
          ["Advertising rules", "Is this promotion legal and honest?", "Creator advertising rules"],
          ["Reputation management", "How do people see me over time?", "Creator reputation management"],
          ["Crisis management", "What do I do when something significant goes wrong?", "Creator crisis management"],
          ["Crisis communication", "What do I say, to whom, and when?", "Creator crisis communication"],
        ],
      },
      {
        type: "paragraph",
        text: "Related guides: creator advertising rules and creator crisis communication.",
        links: [
          { text: "creator advertising rules", href: "/blog/creator-advertising-rules" },
          { text: "creator crisis communication", href: "/blog/creator-crisis-communication" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Accepting high-risk categories for a high fee without checking rules.",
          "Repeating brand claims you can't verify.",
          "No exit clause.",
          "Deleting all criticism under sponsored posts.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Vet brands the way they vet you, protect yourself in the contract, and keep honesty ahead of any single deal. Run the checklist alongside the creator brand deal checklist before every yes.",
        links: [{ text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" }],
      },
    ],
    faqs: [
      {
        question: "What is creator brand safety?",
        answer: "Protecting a creator's reputation when working with brands by vetting partners and products, avoiding unsupported claims, taking extra care in regulated categories, disclosing clearly and planning for controversies.",
      },
      {
        question: "Which brand categories are riskiest for creators?",
        answer: "Investments and trading, crypto, loans, health supplements and weight loss usually carry higher regulatory and reputational risk. Promoting online money games is prohibited in India under the Promotion and Regulation of Online Gaming Act, 2025.",
      },
      {
        question: "What if a brand I worked with becomes controversial?",
        answer: "Pause new posts, check your contract's exit terms, talk to the brand privately, decide whether to continue or exit, and keep any public statement brief and factual.",
      },
    ],
  },
  {
    slug: "creator-disclosure-guide",
    category: "Creator Resources",
    title: "Creator Disclosure Guide: How to Disclose Sponsored Content and Brand Partnerships",
    seoTitle: "Creator Disclosure Guide: Disclose Sponsored Content in India",
    excerpt:
      "When disclosure applies, which labels to use, where to place them on Reels, Stories, YouTube, lives and newsletters, how platform tools fit in, and the Indian guidance behind it.",
    metaDescription:
      "Creator disclosure guide for India: what counts as a material connection, ASCI and Department of Consumer Affairs guidance, labels, placement by format, platform tools on Instagram and YouTube, and common mistakes.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["sponsored content disclosure", "ASCI disclosure", "paid partnership label", "influencer disclosure India", "#ad", "creator disclosure compliance", "sponsored content compliance India"],
    related: ["creator-brand-safety", "creator-brand-deal-checklist", "creator-affiliate-marketing-india"],
    body: [
      {
        type: "paragraph",
        text: "Disclosure tells your audience when there's a commercial relationship behind what they're seeing. It protects them, protects you, and is expected under Indian advertising guidance and platform rules. It doesn't need to hurt performance; audiences mostly object to feeling tricked, not to creators being paid.",
      },
      {
        type: "paragraph",
        text: "This is a general guide, not legal advice. Check the current ASCI guidelines, government guidance and each platform's branded content policies for your specific situation.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Disclose whenever you have a material connection with a brand you feature: payment, free products, discounts, trips, commissions, employment or other benefits. Use a clear label such as \"Ad\", \"Sponsored\", \"Collaboration\", \"Partnership\", \"Free gift\" or \"Affiliate\", place it upfront and prominently (not buried in hashtags or behind \"more\"), overlay it on videos and Stories, say it in lives, and also use platform tools like Instagram's paid partnership label and YouTube's paid promotion setting. India's Department of Consumer Affairs and ASCI both publish guidance for influencers.",
      },
      { type: "heading", text: "What counts as a material connection", id: "material-connection" },
      {
        type: "list",
        items: [
          "Money for a post or campaign.",
          "Free products or services, even if unrequested and kept.",
          "Discounts, trips, hotel stays or event access.",
          "Affiliate commissions or referral fees.",
          "Employment or family relationships with the brand.",
          "Being paid by an agency for the brand.",
        ],
      },
      { type: "heading", text: "Indian guidance", id: "india" },
      {
        type: "paragraph",
        text: "The Department of Consumer Affairs issued \"Endorsement Know-hows!\" for celebrities, influencers and virtual influencers in January 2023, calling for clear, prominent disclosure of material connections, with disclosures superimposed on images and videos and made continuously during live streams. ASCI's influencer advertising guidelines list acceptable labels and placement expectations. Both are worth reading in full. Brands setting disclosure rules for a campaign can read influencer campaign compliance, which explains which rules are law, guidance, self-regulation or platform policy.",
        links: [
          { text: "influencer campaign compliance", href: "/blog/influencer-marketing-compliance" },
          { text: "\"Endorsement Know-hows!\"", href: SOURCES.docaEndorsements },
          { text: "ASCI's influencer advertising guidelines", href: SOURCES.asciSocial },
        ],
      },
      { type: "heading", text: "Labels and placement by format", id: "placement" },
      {
        type: "table",
        headers: ["Format", "Where to disclose", "Platform tool"],
        rows: [
          ["Instagram post / carousel", "Start of caption; on the image where practical", "Paid partnership label"],
          ["Instagram Reel", "On-screen text early and long enough to read; caption start", "Paid partnership label"],
          ["Instagram Stories", "On every sponsored frame", "Paid partnership label"],
          ["YouTube video", "Say it early; on-screen text; description", "Paid promotion setting"],
          ["YouTube Shorts", "On-screen and in title/description", "Paid promotion setting"],
          ["Live streams", "At the start and throughout / at the end", "Platform label where available"],
          ["Newsletters, WhatsApp, blogs", "At the top of the sponsored section", "N/A"],
          ["Affiliate links", "Near the link and upfront in content", "Platform shopping disclosures where applicable"],
        ],
      },
      {
        type: "paragraph",
        text: "Platform help: Instagram paid partnership label and YouTube paid promotion disclosure.",
        links: [
          { text: "Instagram paid partnership label", href: SOURCES.instagramPaidPartnership },
          { text: "YouTube paid promotion disclosure", href: SOURCES.youtubePaidPromotion },
        ],
      },
      { type: "heading", text: "Language that works", id: "language" },
      {
        type: "list",
        items: [
          "Use the language of the content: a Hindi video can disclose in Hindi as long as it's clear.",
          "Avoid ambiguous tags on their own (\"#collab\", \"#sp\", \"#thanks\").",
          "Say it plainly: \"This video is sponsored by [brand]\" or \"[Brand] sent me this for free.\"",
        ],
      },
      { type: "heading", text: "Special cases", id: "special-cases" },
      {
        type: "list",
        items: [
          "Gifted products you didn't ask for: disclose if you feature them.",
          "Old sponsored posts re-shared: keep the disclosure.",
          "Whitelisted or partnership ads: the ad format should show the partnership.",
          "AI-generated or virtual influencers: disclose both the partnership and, where required, the synthetic nature.",
          "Creator-owned products: make clear it's your brand.",
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure is one part of the rules. Honest claims, genuine use of the product, qualifications for health and finance claims, SEBI's finfluencer restrictions and prohibited categories are covered in creator advertising rules.",
        links: [
          { text: "creator advertising rules", href: "/blog/creator-advertising-rules" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Disclosure hidden in a block of hashtags.",
          "Only using the platform label without a clear verbal or text label (or vice versa) where both are expected.",
          "Not disclosing gifts or affiliate links.",
          "A brand asking you to hide the partnership, and agreeing.",
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure is part of every contract and brief; see the influencer contract guide for creators, how to read a brand brief and creator affiliate marketing.",
        links: [{ text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" }, { text: "how to read a brand brief", href: "/blog/creator-brand-brief" }, { text: "creator affiliate marketing", href: "/blog/creator-affiliate-marketing-india" }],
      },
      {
        type: "paragraph",
        text: "Disclosure is one part of recommending products honestly; see creator product recommendations and how to review sponsored products authentically.",
        links: [
          { text: "creator product recommendations", href: "/blog/creator-product-recommendations" },
          { text: "how to review sponsored products authentically", href: "/blog/creator-product-reviews" },
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure is one part of keeping sponsored content credible; creator audience trust covers the rest.",
        links: [{ text: "creator audience trust", href: "/blog/creator-audience-trust-sponsored-content" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Make disclosure a default step in every sponsored script and caption. It's quick, it's expected, and it protects the trust your partnerships depend on. Add it to your pre-posting checklist in the creator brand deal checklist.",
        links: [{ text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" }],
      },
    ],
    faqs: [
      {
        question: "When do creators need to disclose sponsored content in India?",
        answer: "Whenever there's a material connection with the brand featured, such as payment, free products, discounts, trips, commissions or employment.",
      },
      {
        question: "Which disclosure labels are acceptable?",
        answer: "Clear labels such as Ad, Advertisement, Sponsored, Collaboration, Partnership, Free gift or Affiliate, placed upfront and prominently, alongside platform tools. Ambiguous tags on their own aren't enough.",
      },
      {
        question: "Is Instagram's paid partnership label enough?",
        answer: "Use it, but also make disclosure clear in the content and caption. Indian guidance expects prominent disclosure, including on videos and images.",
      },
      {
        question: "Do I need to disclose gifted products?",
        answer: "Yes, if you feature them. Free products are a material connection.",
      },
    ],
  },
  {
    slug: "creator-campaign-reporting",
    category: "Creator Resources",
    title: "Creator Campaign Reporting: What to Send Brands After a Collaboration",
    seoTitle: "Creator Campaign Reporting: What to Send Brands After a Deal",
    excerpt:
      "What a professional post-campaign report includes, when to send it, how to present results honestly, and how the report becomes the start of your next deal with the brand.",
    metaDescription:
      "Creator campaign reporting: what to send brands after a collaboration, report timing, contents (deliverables, metrics, audience response, learnings), format options, honesty rules and a ready-to-use report template.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    readingTime: "10 min read",
    tags: ["campaign report", "influencer report", "post-campaign report", "creator reporting", "brand collaboration results"],
    related: ["creator-analytics-for-brand-deals", "creator-case-study", "creator-client-management"],
    body: [
      {
        type: "paragraph",
        text: "The report is the last deliverable of a campaign, and often the first step toward the next one. Brands collect results from many creators; the ones who send clear, honest, on-time reports are easy to rebook.",
      },
      {
        type: "paragraph",
        text: "For which metrics exist and how to present them honestly, see creator analytics for brand deals. This guide is the reporting process and document.",
        links: [{ text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "After a collaboration, send a short report on the agreed date (often 7 days after posting, sometimes with a 30-day update). Include live links and posting dates, confirmation of deliverables and disclosure, native-insights screenshots for the agreed metrics, results compared with your own averages, audience response themes from comments, any clicks or conversions you can see, and one or two learnings. Keep it factual and don't inflate numbers.",
      },
      { type: "heading", text: "When to send", id: "timing" },
      {
        type: "table",
        headers: ["Report", "When", "Contents"],
        rows: [
          ["Live confirmation", "Same day as posting", "Links, posting time, disclosure confirmed"],
          ["Main report", "As agreed, often 7 days after posting", "Full metrics, comments, learnings"],
          ["Update (optional)", "30 days after posting, for evergreen or YouTube content", "Updated views and clicks"],
        ],
      },
      { type: "heading", text: "What to include", id: "contents" },
      {
        type: "list",
        items: [
          "Campaign name, brand, your handle, dates.",
          "Deliverables with links; confirmation they match the agreement.",
          "Disclosure used (label and platform tool).",
          "Agreed metrics as native-insights screenshots, with the date taken.",
          "Comparison with your own recent averages.",
          "Audience response: common questions, sentiment, notable comments.",
          "Clicks, code uses or sales you can see (brand data only if they shared it).",
          "Learnings and a suggestion for next time.",
        ],
      },
      { type: "heading", text: "Report template", id: "template" },
      {
        type: "template",
        label: "Post-campaign report",
        text: "CAMPAIGN REPORT — [Brand] × [@handle] — [Campaign] — Data as of [date]\n\n1. DELIVERABLES\n• Reel — [link] — posted [date, time] — paid partnership label ✓\n• Story set (4 frames) — [date] — link sticker ✓\n\n2. RESULTS (native insights, screenshots attached)\nReel: views __ · reach __ · non-follower __% · avg watch time __ · saves __ · shares __ · comments __\nStories: views per frame __ · link taps __ · replies __\n\n3. VS MY AVERAGE (last 90 days, Reels)\nViews __x · saves __x · shares __x\n\n4. AUDIENCE RESPONSE\nTop themes: [price questions, shade range, where to buy]\nSentiment: [mostly positive / mixed], examples attached\n\n5. LEARNINGS\n[e.g. the texture close-up drove most saves; next time lead with it]\n\n6. NEXT\n[optional: follow-up idea or usage extension if the brand is running it as an ad]",
      },
      { type: "heading", text: "Format options", id: "format" },
      {
        type: "list",
        items: [
          "A PDF or one-page document, with screenshots attached.",
          "A shared slide or sheet if the brand prefers.",
          "The brand's own reporting template, if they send one; fill it accurately.",
        ],
      },
      { type: "heading", text: "Honesty rules", id: "honesty" },
      {
        type: "list",
        items: [
          "Only native-insights data or brand-shared data.",
          "No cropped or edited screenshots.",
          "Say if results were below average, and what you learned.",
          "Separate organic results from any paid boost.",
        ],
      },
      { type: "heading", text: "From report to next deal", id: "next-deal" },
      {
        type: "paragraph",
        text: "End the report with a light next step: a follow-up content idea, or an offer to extend usage if the brand is running your content as an ad. Then turn the results into a case study for future pitches. See creator case study and creator client management.",
        links: [
          { text: "creator case study", href: "/blog/creator-case-study" },
          { text: "creator client management", href: "/blog/creator-client-management" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Sending the report late or only when chased.",
          "Screenshots without dates.",
          "Metrics the brand didn't ask for, and none of the ones it did.",
          "Inflating or cherry-picking results.",
        ],
      },
      {
        type: "paragraph",
        text: "For sales-focused campaigns, creator attribution explains how to report tracked sales honestly, and creator discount codes covers code-based measurement.",
        links: [
          { text: "creator attribution", href: "/blog/creator-attribution" },
          { text: "creator discount codes", href: "/blog/creator-discount-codes" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Put the report date in your campaign tracker the day you sign, use the template, and send it on time with a clear next step. It's one of the simplest ways to become a creator brands rebook.",
      },
    ],
    faqs: [
      {
        question: "What should a creator send brands after a campaign?",
        answer: "Live links and dates, confirmation of deliverables and disclosure, native-insights screenshots for agreed metrics, comparison with your averages, audience response themes, any clicks or conversions, and learnings.",
      },
      {
        question: "When should I send a campaign report?",
        answer: "On the agreed date, often 7 days after posting, with an optional 30-day update for evergreen or YouTube content.",
      },
      {
        question: "What if the campaign underperformed?",
        answer: "Report it honestly, compare with your averages, and share what you learned and what you'd change. Honest reports build more trust than inflated ones.",
      },
    ],
  },
  {
    slug: "creator-client-management",
    category: "Creator Resources",
    title: "Creator Client Management: How to Manage Multiple Brand Relationships at Once",
    seoTitle: "Creator Client Management: Manage Multiple Brand Clients",
    excerpt:
      "How to keep several brand clients happy at once: communication standards, expectation setting, handling conflicts and exclusivity, account notes, renewals, and ending relationships gracefully.",
    metaDescription:
      "Creator client management: managing multiple brand relationships, communication standards, expectation setting, conflicts and exclusivity, account notes, renewal planning, difficult clients and ending relationships.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "10 min read",
    tags: ["client management creators", "brand relationships", "multiple brand deals", "repeat clients", "creator professionalism", "creator client retention"],
    related: ["creator-workflow", "creator-campaign-reporting", "creator-business-sops"],
    body: [
      {
        type: "paragraph",
        text: "Managing one brand is a project. Managing five at once is client management: different people, expectations, approval styles and timelines, all needing to feel like your priority. The creators who do this well aren't necessarily more organised; they set expectations early and communicate predictably.",
      },
      {
        type: "paragraph",
        text: "For the operational tracker (dates, deliverables, invoices), see the creator workflow. This guide is about the relationships.",
        links: [{ text: "creator workflow", href: "/blog/creator-workflow" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To manage multiple brand clients: set expectations at the start (response times, approval rounds, reporting), keep one communication channel and point of contact per client, maintain short account notes, check new deals against existing exclusivity, send proactive updates rather than waiting to be chased, deliver reports on time, plan renewals before campaigns end, and handle difficult clients calmly and in writing.",
      },
      { type: "heading", text: "Set expectations at the start", id: "expectations" },
      {
        type: "template",
        label: "Kick-off message",
        text: "Hi [Name], looking forward to this. A few things so we're aligned:\n• I reply to emails within 1 working day (Mon–Sat)\n• Script by [date], draft by [date]; feedback within 2 working days keeps the posting date\n• One consolidated round of feedback per stage, please\n• Report 7 days after posting\n• Best contact: this email; WhatsApp for urgent same-day issues\n\nLet me know if anything needs adjusting.",
      },
      { type: "heading", text: "Communication standards", id: "communication" },
      {
        type: "list",
        items: [
          "One channel per client (usually email), with decisions confirmed in writing.",
          "Proactive updates at milestones: product received, script sent, draft sent, live.",
          "Flag risks early (delays, product issues), with options.",
          "Consistent tone: friendly, clear, brief.",
        ],
      },
      { type: "heading", text: "Account notes", id: "account-notes" },
      {
        type: "template",
        label: "One page per client",
        text: "Brand / agency · Contacts & roles · Approval style (fast/slow, who decides)\nBrand dos and don'ts · Claims to avoid · Past campaigns & results\nExclusivity (category, dates) · Usage periods & expiry\nPayment behaviour · Renewal opportunities · Personal notes (e.g. prefers calls on Fridays)",
      },
      { type: "heading", text: "Conflicts and exclusivity", id: "conflicts" },
      {
        type: "list",
        items: [
          "Check every new offer against active exclusivity and usage periods.",
          "Don't post competing brands back to back even when allowed; space them out.",
          "Be transparent with a client if a conflict could arise.",
        ],
      },
      {
        type: "paragraph",
        text: "See creator exclusivity.",
        links: [{ text: "creator exclusivity", href: "/blog/creator-exclusivity" }],
      },
      { type: "heading", text: "Renewals and growth", id: "renewals" },
      {
        type: "list",
        items: [
          "Note renewal opportunities in account notes.",
          "Propose next steps two weeks before a campaign or usage period ends.",
          "Offer ideas based on what worked, not generic \"let's do more\".",
          "Move strong relationships to retainers where it makes sense.",
        ],
      },
      { type: "heading", text: "Difficult clients", id: "difficult" },
      {
        type: "table",
        headers: ["Situation", "Response"],
        rows: [
          ["Endless changes", "Refer to agreed revision rounds; offer paid extra rounds"],
          ["Slow approvals", "Remind of timeline impact; propose a new date"],
          ["Late payment", "Follow the payment terms process; escalate politely"],
          ["Scope creep", "Quote additions separately"],
          ["Disrespectful behaviour", "Keep it professional in writing; consider ending the relationship"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: brand content approval and revisions and creator payment terms.",
        links: [
          { text: "brand content approval and revisions", href: "/blog/creator-brand-revisions" },
          { text: "creator payment terms", href: "/blog/creator-payment-terms" },
        ],
      },
      { type: "heading", text: "Ending a relationship gracefully", id: "ending" },
      {
        type: "paragraph",
        text: "Finish all obligations, send the final report and invoice, thank the team, and leave the door open. Brand managers move between companies; a graceful exit often returns as a new opportunity.",
      },
      { type: "heading", text: "Client retention for service businesses", id: "retention" },
      {
        type: "paragraph",
        text: "Retention starts before the engagement ends. For consulting, coaching and done-for-you clients, the patterns are the same as with brands: deliver visible results, report progress, and propose the next step before the current one finishes.",
      },
      {
        type: "table",
        headers: ["Moment", "Retention move"],
        rows: [
          ["Week 1", "Deliver a quick win; confirm goals"],
          ["Midpoint", "Progress review against the goals"],
          ["Two weeks before end", "Results summary and a proposal for the next phase"],
          ["End", "Case study and testimonial request (with permission)"],
          ["After", "Check-in at 30 and 90 days; share relevant resources"],
        ],
      },
      {
        type: "paragraph",
        text: "Onboarding sets this up; see creator client onboarding. Turning results into proof is covered in creator case study.",
        links: [
          { text: "creator client onboarding", href: "/blog/creator-client-onboarding" },
          { text: "creator case study", href: "/blog/creator-case-study" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Decisions made on calls and never confirmed in writing.",
          "Forgetting exclusivity when accepting a new deal.",
          "Going silent during production.",
          "Treating each campaign as the last, never planning renewals.",
        ],
      },
      {
        type: "paragraph",
        text: "When a client relationship is working well, the next steps are covered in creator partnership strategy and creator retainer deals.",
        links: [
          { text: "creator partnership strategy", href: "/blog/creator-brand-partnerships" },
          { text: "creator retainer deals", href: "/blog/creator-retainer-deals" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Set expectations early, communicate predictably, keep account notes and plan renewals. Document how you do it as standard processes; see creator business SOPs.",
        links: [{ text: "creator business SOPs", href: "/blog/creator-business-sops" }],
      },
    ],
    faqs: [
      {
        question: "How do creators manage multiple brand clients?",
        answer: "By setting expectations at kick-off, using one channel per client, keeping account notes, checking exclusivity, sending proactive updates, reporting on time and planning renewals.",
      },
      {
        question: "What should I do if a brand client is difficult?",
        answer: "Stay professional and in writing, refer to the agreed terms (revisions, timelines, payment), offer options, and consider ending the relationship if it becomes disrespectful.",
      },
      {
        question: "How can I get repeat work from brands?",
        answer: "Deliver on time, report honestly, propose specific follow-up ideas before campaigns end, and make working with you easy.",
      },
    ],
  },
  {
    slug: "creator-business-sops",
    category: "Creator Resources",
    title: "Creator Business SOPs: 15 Processes Every Professional Creator Should Document",
    seoTitle: "Creator Business SOPs: 15 Processes to Document",
    excerpt:
      "Fifteen standard operating procedures for a creator business, from brand inquiry to monthly review, each with a trigger, steps and an output, so you (or your team) can run the business consistently.",
    metaDescription:
      "Creator business SOPs: 15 documented processes covering brand inquiry, qualification, brief review, pricing, contract, content planning, production, approval, publishing, reporting, invoicing, follow-up, portfolio, analytics and monthly review.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    readingTime: "14 min read",
    tags: ["creator SOPs", "standard operating procedures", "creator processes", "creator operations", "creator team", "creator business documentation", "what creators should document", "creator knowledge base", "creator SOP library"],
    related: ["creator-workflow", "creator-client-management", "creator-business-plan"],
    body: [
      {
        type: "paragraph",
        text: "An SOP (standard operating procedure) is a written, repeatable way of doing something. For a solo creator, SOPs reduce mistakes and decision fatigue. For a creator with an editor, manager or assistant, they're how work gets done the same way without you explaining it every time.",
      },
      {
        type: "paragraph",
        text: "These are templates to adapt. Where they touch contracts, tax or legal matters, they point to guidance rather than stating universal rules; get professional advice for your situation.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator business SOPs document fifteen recurring processes: brand inquiry, brand qualification, brief review, pricing, contract, content planning, content production, approval, publishing, reporting, invoicing, follow-up, portfolio update, analytics review and monthly business review. Each SOP should state its trigger, owner, steps, tools and output. Start with the three that cause you the most mistakes, keep each to one page, and review them quarterly.",
      },
      { type: "heading", text: "SOP format", id: "format" },
      {
        type: "template",
        text: "SOP NAME:\nTRIGGER: (what starts it)\nOWNER: (who does it)\nTOOLS: (tracker, email, templates)\nSTEPS: (numbered, short)\nOUTPUT: (what exists when done)\nLINKED GUIDE:",
      },
      { type: "heading", text: "The 15 SOPs", id: "sops" },
      { type: "subheading", text: "1. Brand inquiry" },
      {
        type: "template",
        text: "Trigger: new brand message · Steps: log in tracker → verify sender and domain → reply within 1 working day asking for brief, deliverables, timeline, usage, budget → set status 'Qualifying' · Output: logged, replied inquiry",
      },
      { type: "subheading", text: "2. Brand qualification" },
      {
        type: "template",
        text: "Trigger: brief received · Steps: audience fit → product check → brand safety check → exclusivity conflicts → budget realistic? → decide pursue/decline · Output: go/no-go note",
      },
      { type: "subheading", text: "3. Brief review" },
      {
        type: "template",
        text: "Trigger: pursuing a deal · Steps: read twice → list mandatory points, prohibited claims, deliverables, dates, approvals, usage → send one consolidated question email · Output: clarified brief",
      },
      { type: "subheading", text: "4. Pricing" },
      {
        type: "template",
        text: "Trigger: clarified brief · Steps: base fees from rate card → add production costs → price usage, whitelisting, exclusivity separately → check against past deals → proposal with validity date · Output: sent proposal",
      },
      { type: "subheading", text: "5. Contract" },
      {
        type: "template",
        text: "Trigger: price agreed · Steps: check deliverables, payment terms, revisions, usage, exclusivity, cancellation, disclosure → request changes in writing → legal review for large or complex deals → sign · Output: signed agreement or confirmed email",
      },
      { type: "subheading", text: "6. Content planning" },
      {
        type: "template",
        text: "Trigger: contract signed · Steps: add dates backwards from posting → concept and script outline → shot list → book location/props → add to calendar · Output: production plan",
      },
      { type: "subheading", text: "7. Content production" },
      {
        type: "template",
        text: "Trigger: script approved · Steps: film per shot list incl. disclosure frames → back up footage → edit with caption template → export per platform · Output: draft files",
      },
      { type: "subheading", text: "8. Approval" },
      {
        type: "template",
        text: "Trigger: draft ready · Steps: send with notes and feedback deadline → log revision round → apply consolidated feedback → get written final approval · Output: approved final",
      },
      { type: "subheading", text: "9. Publishing" },
      {
        type: "template",
        text: "Trigger: approval + posting window · Steps: approved caption → disclosure label + platform tool → tags, links, codes → post → test links → send live links same day · Output: live content, confirmation sent",
      },
      { type: "subheading", text: "10. Reporting" },
      {
        type: "template",
        text: "Trigger: report date · Steps: screenshots with dates → fill report template → compare with averages → add learnings → send · Output: report sent",
      },
      { type: "subheading", text: "11. Invoicing" },
      {
        type: "template",
        text: "Trigger: contract milestone · Steps: invoice with correct entity, PO, deliverables, taxes as applicable → send to accounts + contact → log due date · Output: invoice logged",
      },
      { type: "subheading", text: "12. Follow-up" },
      {
        type: "template",
        text: "Trigger: invoice due date / 2 weeks before usage expiry · Steps: payment reminder → escalation schedule → renewal or extension proposal · Output: payment received / renewal proposed",
      },
      { type: "subheading", text: "13. Portfolio update" },
      {
        type: "template",
        text: "Trigger: campaign closed · Steps: permission check → case study draft → add to portfolio and media kit → update past-collaborations list · Output: updated portfolio",
      },
      { type: "subheading", text: "14. Analytics review" },
      {
        type: "template",
        text: "Trigger: weekly (Sunday) and monthly · Steps: weekly quick check → monthly 30-post audit → repeat/fix/stop decisions → update calendar · Output: decisions logged",
      },
      { type: "subheading", text: "15. Monthly business review" },
      {
        type: "template",
        text: "Trigger: first working day of the month · Steps: income by stream → expenses → pipeline → outstanding invoices → TDS/GST records → exclusivity and usage expiries → 3 priorities for the month · Output: dashboard updated, priorities set",
      },
      { type: "heading", text: "Linked guides", id: "guides" },
      {
        type: "paragraph",
        text: "Each SOP connects to a detailed guide: creator workflow, how to read a brand brief, influencer rate card, influencer contract guide for creators, brand content approval and revisions, creator campaign reporting, how to invoice brands, content performance audit and creator analytics dashboard.",
        links: [
          { text: "creator workflow", href: "/blog/creator-workflow" },
          { text: "how to read a brand brief", href: "/blog/creator-brand-brief" },
          { text: "influencer rate card", href: "/blog/influencer-rate-card-india" },
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "brand content approval and revisions", href: "/blog/creator-brand-revisions" },
          { text: "creator campaign reporting", href: "/blog/creator-campaign-reporting" },
          { text: "how to invoice brands", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
          { text: "content performance audit", href: "/blog/content-performance-audit" },
          { text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" },
        ],
      },
      { type: "heading", text: "Rolling out SOPs", id: "rollout" },
      {
        type: "list",
        items: [
          "Start with the three processes where mistakes cost you most.",
          "Write them while doing the task, not from memory.",
          "Keep each to one page.",
          "Share with anyone who helps you, and ask them to improve them.",
          "Review quarterly; delete what nobody uses.",
        ],
      },
      { type: "heading", text: "Beyond SOPs: what else professional creators should document", id: "documentation" },
      {
        type: "paragraph",
        text: "SOPs describe how work is done. A professional creator business also documents what it has and what it has agreed, so that nothing depends on memory. Keep these in one shared, organised drive:",
      },
      {
        type: "table",
        headers: ["Document", "What it holds", "Why it matters"],
        rows: [
          ["Access register", "Which accounts and tools exist, who has access and through which role (never the passwords themselves)", "Safe offboarding; faster recovery"],
          ["Templates library", "Media kit, rate card, proposal, invoice, briefs, report, email replies", "Consistency; faster delegation"],
          ["Voice and style guide", "How you sound, visual style, editing rules, no-go topics", "Team output sounds like you"],
          ["Agreements folder", "Brand contracts, freelancer agreements, usage and exclusivity terms", "Disputes, renewals, rights checks"],
          ["Finance records", "Invoices, receipts, TDS certificates, GST records", "Tax filing and audits"],
          ["Decision log", "Rates set, brands declined and why, policy decisions", "Consistent answers; less re-deciding"],
          ["People and vendors list", "Freelancers, agencies, accountant, lawyer, with terms", "Backups when someone is unavailable"],
          ["Continuity document", "Live commitments, contacts and who can do what if you can't work", "Keeps the business running"],
        ],
      },
      {
        type: "paragraph",
        text: "Campaign-level records are covered in creator campaign documentation, tax records in creator tax records for India, and the continuity document in creator business continuity. How documentation fits the wider operating model is in creator operations.",
        links: [
          { text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" },
          { text: "creator tax records for India", href: "/blog/creator-tax-records-india" },
          { text: "creator business continuity", href: "/blog/creator-business-continuity" },
          { text: "creator operations", href: "/blog/creator-operations" },
        ],
      },
      { type: "heading", text: "Build an SOP library", id: "sop-library" },
      {
        type: "paragraph",
        text: "Once you have more than a handful of SOPs, organise them as a library your team can actually use:",
      },
      {
        type: "list",
        items: [
          "One home: a shared folder or workspace, linked from your team's main board.",
          "An index listing each SOP, its owner, the date it was last reviewed and the area it belongs to.",
          "Consistent format: trigger, steps, tools, examples, and what done looks like.",
          "Short videos or screen recordings for tool-heavy tasks.",
          "A rule that anyone who finds a step out of date updates it or flags the owner.",
          "A quarterly review of the ten most-used SOPs.",
        ],
      },
      {
        type: "paragraph",
        text: "How the library fits your wider operating system is covered in creator operations.",
        links: [
          { text: "creator operations", href: "/blog/creator-operations" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Writing all fifteen at once and using none.",
          "SOPs so long nobody reads them.",
          "Never updating them after tools or platforms change.",
          "Treating templates as legal or tax advice.",
        ],
      },
      {
        type: "paragraph",
        text: "SOPs are also what make delegation work when you start hiring. See creator team building.",
        links: [{ text: "creator team building", href: "/blog/creator-team-building" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "SOPs turn good habits into a system that survives busy months and new team members. Write three this week, use them for a month, then add the rest. Track the whole business in your creator business plan.",
        links: [{ text: "creator business plan", href: "/blog/creator-business-plan" }],
      },
    ],
    faqs: [
      {
        question: "What is an SOP for a creator?",
        answer: "A written, repeatable procedure for a recurring task, such as handling a brand inquiry or publishing sponsored content, stating the trigger, owner, steps, tools and output.",
      },
      {
        question: "Which SOPs should creators write first?",
        answer: "The three processes where mistakes cost you most, often brand inquiry, publishing sponsored content and invoicing.",
      },
      {
        question: "Do solo creators need SOPs?",
        answer: "They help even solo creators reduce mistakes and decision fatigue, and make it much easier to bring in an editor or manager later.",
      },
    ],
  },
];

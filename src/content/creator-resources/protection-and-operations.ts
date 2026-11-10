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
        text: "Copyright protects your content, but not your channel name, logo or likeness. Those are covered by trademarks, personality rights and contracts; see creator intellectual property and the creator trademark guide. Music has its own rules on top of this; read what creators should know about music for Reels and YouTube.",
        links: [
          { text: "creator intellectual property", href: "/blog/creator-intellectual-property" },
          { text: "creator trademark guide", href: "/blog/creator-trademark" }, { text: "music for Reels and YouTube", href: "/blog/music-for-reels-youtube-copyright" },
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
    title: "What to Do When Someone Steals Your Content: A Creator's Guide to Copyright and Reporting",
    seoTitle: "Someone Stole Your Content? What to Do and How to Report",
    excerpt:
      "Found your video reuploaded on someone else's page? Collect evidence, check whether it is really infringement, report it on YouTube or Instagram, and know your options under Indian law.",
    metaDescription:
      "Someone reposted your video without permission? Save evidence, report it on YouTube or Instagram, send a takedown message, and learn the Indian copyright basics.",
    author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
    publishedAt: "2026-09-29",
    updatedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["someone stole my content", "report copyright Instagram", "YouTube copyright removal", "reuploaded video", "copyright India creators"],
    related: ["creator-copyright", "creator-impersonation", "creator-account-security", "deepfakes-creator-identity-protection"],
    body: [
      {
        type: "paragraph",
        text: "You open Instagram or YouTube and there it is: your video, on someone else's page, sometimes with more views than yours and no credit. It feels personal, and the urge is to fire off angry comments. Slow down for half an hour, collect proof, and then use the official reporting routes, which work far better than a public fight.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "If someone steals your content: save evidence first (links, dated screenshots, your original file and upload date). Check it is a real copy of your work, not inspiration or fair dealing such as review or criticism. Then report it through the platform's copyright route: YouTube's copyright removal request in Studio, or Meta's Intellectual Property reporting form for Instagram. A polite message to the uploader can work for small cases. For repeat or commercial theft, speak to a lawyer about your options under India's Copyright Act. Never file false claims.",
      },
      {
        type: "paragraph",
        text: "This guide is general information, not legal advice. For a dispute involving money, a brand or a repeat offender, talk to a lawyer who handles copyright.",
      },
      { type: "heading", text: "The first 30 minutes: evidence checklist", id: "evidence" },
      {
        type: "paragraph",
        text: "Posts get deleted, usernames change and view counts move. Capture everything before you report or message anyone.",
      },
      {
        type: "template",
        label: "Evidence checklist",
        text: "[ ] Exact URL of every copy (post, reel, video, profile)\n[ ] Screenshots or a screen recording showing the copy, the account name, the date and view count (your phone's status bar shows the time)\n[ ] Link to your original post and its upload date\n[ ] Your original file: raw footage, project file, or the export with its creation date\n[ ] Any proof you made it: behind-the-scenes clips, drafts, script\n[ ] Note whether the copy removed your watermark, credit or voice\n[ ] Note whether they are earning from it: ads, a brand tag, a paid link\n[ ] Save everything in one dated folder with a backup",
      },
      {
        type: "paragraph",
        text: "If you already keep organised raw files, this takes minutes. If not, creator file management and a creator backup strategy make the next incident much easier.",
        links: [
          { text: "creator file management", href: "/blog/creator-file-management" },
          { text: "creator backup strategy", href: "/blog/creator-backup-strategy" },
        ],
      },
      { type: "heading", text: "Is it actually infringement?", id: "is-it-infringement" },
      {
        type: "paragraph",
        text: "Not every similar video is theft. Copyright protects your actual expression (your footage, edit, script, photos, voiceover), not a general idea, format or trend. Someone making their own version of the same recipe or the same meme format is usually inspiration. Someone downloading your reel and reposting it is copying.",
      },
      {
        type: "table",
        headers: ["Situation", "Usually", "What to do"],
        rows: [
          ["Your full video reposted on another account", "Copying", "Report through the copyright route"],
          ["Your clip used inside a reaction, review or criticism", "May be fair dealing", "Watch it fully; report only if it is mostly your video with little added"],
          ["Same idea or trend, their own footage", "Inspiration", "Let it go, or make your version better"],
          ["Your video reposted with credit by a fan page", "Still copying, but often low harm", "A polite message may be enough"],
          ["Your face or voice used in a fake ad or account", "Impersonation, possibly deepfake", "Use the impersonation route as well"],
          ["A brand reposting your paid collab", "Depends on your contract", "Check usage rights before reporting"],
        ],
      },
      {
        type: "paragraph",
        text: "Under India's Copyright Act, 1957, section 51 says copyright is infringed when someone, without a licence, does something only the copyright owner has the right to do. Section 52(1)(a) says fair dealing for private or personal use (including research), criticism or review, or reporting current events is not infringement. YouTube's fair use page also notes that adding credit or a disclaimer does not by itself make a use fair. How copyright works for creators, from ownership to licensing, is explained in creator copyright.",
        links: [
          { text: "India's Copyright Act, 1957", href: "https://www.indiacode.nic.in/bitstream/123456789/1367/1/A195714.pdf" },
          { text: "YouTube's fair use page", href: "https://support.google.com/youtube/answer/9783148" },
          { text: "creator copyright", href: "/blog/creator-copyright" },
        ],
      },
      { type: "heading", text: "Reporting on YouTube", id: "reporting" },
      {
        type: "paragraph",
        text: "YouTube's copyright removal request is filed by the copyright owner or someone authorised to act for them. For videos, go to YouTube Studio, then Content detection, then New removal request. For other content you can email copyright@youtube.com. YouTube asks for:",
      },
      {
        type: "list",
        items: [
          "Your contact details.",
          "A description of your original work.",
          "The exact URLs of the copies.",
          "A good-faith statement and a statement that the information is accurate, made under penalty of perjury.",
          "Your full legal name as a signature.",
        ],
      },
      {
        type: "paragraph",
        text: "Two options are worth knowing. You can schedule the removal for 7 days, which gives the uploader time to delete the video themselves and avoid a copyright strike, a fair choice for a first-time or small offender. You can also ask YouTube to prevent future copies. YouTube warns that misusing the process can lead to account termination and that your personal information may be shared with the uploader. Details are on YouTube's copyright removal help page.",
        links: [{ text: "YouTube's copyright removal help page", href: "https://support.google.com/youtube/answer/2807622" }],
      },
      { type: "subheading", text: "Copyright Match Tool and Content ID" },
      {
        type: "paragraph",
        text: "According to YouTube Help, the Copyright Match Tool is available to any channel that has filed a valid copyright removal request, or through a separate access form; YPP channels find it on the Copyright page in Studio. It looks for full or nearly full reuploads of your videos, so short clips may not be flagged. It only scans videos uploaded after yours, which is why posting first on your own channel matters. For each match you can request removal, contact the channel, or archive it. Content ID is a separate automated system that compares uploads against reference files from rights owners, and the Match Tool does not scan videos already covered by Content ID. See YouTube's Copyright Match Tool page.",
        links: [{ text: "Copyright Match Tool page", href: "https://support.google.com/youtube/answer/7648743" }],
      },
      { type: "subheading", text: "If the uploader files a counter notification" },
      {
        type: "paragraph",
        text: "The uploader can file a counter notification if they believe your request was a mistake, for example because of fair use or fair dealing. Under YouTube's counter notification process, you then have 10 US business days to show you have started legal action; if you don't, the video can be reinstated. This is the point to talk to a lawyer rather than argue in comments.",
        links: [{ text: "counter notification process", href: "https://support.google.com/youtube/answer/2807684" }],
      },
      { type: "heading", text: "Reporting on Instagram and Facebook", id: "instagram" },
      {
        type: "paragraph",
        text: "Meta uses separate forms for copyright, trademark and counterfeit goods, so pick the right one. A reel or photo copied from you is usually a copyright matter, filed through the Meta Intellectual Property Reporting Form. Trademark is for misuse of a brand name or logo, which matters if you have registered your channel name (see creator trademark). Only the rights owner or an authorised representative can file.",
        links: [
          { text: "Meta Intellectual Property Reporting Form", href: "https://help.instagram.com/contact/552695131608132/" },
          { text: "creator trademark", href: "/blog/creator-trademark" },
        ],
      },
      {
        type: "list",
        items: [
          "Instagram typically shares your name, email and report details with the person who posted, so use a business email.",
          "If you change your mind, reports can be withdrawn by emailing ip@instagram.com.",
          "Instagram has a repeat-infringer policy that can disable accounts.",
          "Check the form itself for current fields and options, as these change.",
        ],
      },
      {
        type: "paragraph",
        text: "If the account is pretending to be you, not just using your video, report the impersonation separately; creator impersonation walks through it. If your face or voice has been faked, read deepfakes and creator identity protection.",
        links: [
          { text: "creator impersonation", href: "/blog/creator-impersonation" },
          { text: "deepfakes and creator identity protection", href: "/blog/deepfakes-creator-identity-protection" },
        ],
      },
      { type: "heading", text: "Other websites and apps", id: "other-sites" },
      {
        type: "paragraph",
        text: "Most platforms and hosting providers have a copyright or legal contact. Look for links named copyright, intellectual property, DMCA or legal in the site footer or help centre, and send the same evidence pack: your original, the copy's URL and a statement that you own the work. For a website, the hosting company is often more responsive than the site owner.",
      },
      { type: "heading", text: "Sending a polite takedown message", id: "takedown-message" },
      {
        type: "paragraph",
        text: "For a small repost page or a fellow creator who may not know better, a direct message often works faster than a formal report. Keep it calm and specific.",
      },
      {
        type: "template",
        label: "Takedown message (edit to fit)",
        text: "Hi [name],\n\nI'm [your name], the creator of this video: [link to your original, posted on DATE].\n\nYour account has posted it here without my permission: [link to copy].\n\nPlease remove it within [48 hours / 3 days]. If you'd like to share my work in future, you're welcome to share my original post or ask me first.\n\nIf it isn't removed, I'll report it through [YouTube / Instagram]'s copyright process.\n\nThanks,\n[Your name, handle, business email]",
      },
      {
        type: "paragraph",
        text: "Escalate to a lawyer when the copier is earning from your work (brand deals, ads, selling it), when a business or brand is using your content without a licence, when it keeps happening after reports, or when they file a counter notification. Under section 63 of the Copyright Act, knowingly infringing copyright is punishable with imprisonment of six months to three years and a fine of ₹50,000 to ₹2 lakh, though a court may reduce this where the infringement was not for gain in trade or business. Whether to pursue that route is a decision to make with legal advice.",
      },
      { type: "heading", text: "When a copy isn't worth fighting", id: "judgement" },
      {
        type: "paragraph",
        text: "Not every copy deserves a formal report. A short clip with clear credit on a small fan account may be better handled with a message, or left alone. Decide based on harm: are they earning from it, misleading people about who made it, competing for the same brand deals, or attaching it to something you would never endorse? Spend your energy on those.",
      },
      { type: "heading", text: "Repeat offenders", id: "repeat" },
      {
        type: "paragraph",
        text: "For accounts that steal again and again, keep a running log of every copy, report each one through the copyright route, and note your report reference numbers. Repeat-infringer policies on both YouTube and Instagram exist for exactly this. If the account also uses your name or photo, file impersonation reports too, and tighten your own login security, since some theft rings also target creator accounts; creator account security covers the basics.",
        links: [{ text: "creator account security", href: "/blog/creator-account-security" }],
      },
      { type: "heading", text: "Reducing future theft", id: "prevention" },
      {
        type: "list",
        items: [
          "Post first on your own channel or profile, before sharing anywhere else. The Copyright Match Tool only catches uploads made after yours.",
          "Add a small, consistent handle or logo where it is hard to crop out, and say your name or handle early in the video.",
          "Keep raw footage and project files, organised by date, as proof of origin.",
          "Avoid posting full-length originals on platforms you never check.",
          "If you use music, use tracks you are licensed for, so your own videos are not the ones getting claimed. Music for Reels and YouTube copyright explains the options.",
          "When a brand or page wants to reuse your work, agree terms in writing first; see creator content licensing.",
        ],
      },
      {
        type: "paragraph",
        text: "More on the last two points: music for Reels and YouTube copyright, and creator content licensing.",
        links: [
          { text: "music for Reels and YouTube copyright", href: "/blog/music-for-reels-youtube-copyright" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
        ],
      },
      { type: "heading", text: "Don't misuse copyright claims", id: "mistakes" },
      {
        type: "paragraph",
        text: "Copyright tools are powerful, and platforms take abuse seriously. YouTube's removal request includes a statement made under penalty of perjury, and misuse can lead to account termination. Avoid these mistakes:",
      },
      {
        type: "list",
        items: [
          "Reporting a video because it copies your idea or format, not your actual content.",
          "Reporting authorised uses, such as a brand's licensed repost or a collab partner's agreed post.",
          "Using copyright reports to settle a personal fight or silence criticism of you.",
          "Using the wrong form, such as spam or impersonation, for a copyright problem, or the other way round.",
          "Not keeping originals, so you cannot prove the work is yours.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "When your content is stolen, act in order: save evidence, confirm it is a real copy, use the platform's official copyright route, and message small offenders politely. Keep legal action for commercial or repeat theft, with a lawyer's advice. Then build habits (posting first, watermarks, organised originals) that make the next copy easier to catch and remove.",
      },
    ],
    faqs: [
      {
        question: "Do I need to register my copyright before reporting stolen content?",
        answer:
          "YouTube and Instagram ask you to confirm you own the work and to describe it; neither form, as described in their help pages, asks for a registration certificate. For court action in India, ask a lawyer whether registration would help your case.",
      },
      {
        question: "Someone reposted my video with credit. Is that allowed?",
        answer:
          "Credit alone does not give someone permission to repost your work. Whether to act is your choice: many creators allow fan pages with credit, while others ask for removal. A polite message is a good first step.",
      },
      {
        question: "Is DMCA valid in India?",
        answer:
          "The DMCA is a US law. YouTube's and Instagram's copyright reporting routes are open to creators in India, and some steps (such as YouTube's 10 US business day counter-notification window) reflect US rules. In India, your rights come from the Copyright Act, 1957. Ask a lawyer how the two interact in your case.",
      },
      {
        question: "Will the person know I reported them?",
        answer:
          "Often yes. YouTube says your personal information may be shared with the uploader, and Instagram typically shares your name, email and report details. Use a business email, not a personal one.",
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
        text: "Impersonation is one part of a wider picture; creator reputation management covers search results, corrections and handling criticism. When the fake uses your face or voice rather than just your name, follow this guide to deepfakes and creator identity.",
        links: [{ text: "creator reputation management", href: "/blog/creator-reputation-management" }, { text: "deepfakes and creator identity", href: "/blog/deepfakes-creator-identity-protection" }],
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
      seoTitle: "Creator Campaign Report Template: What to Send Brands",
      excerpt:
        "A creator-side guide to the campaign performance report: what to screenshot and when, platform metrics, tracked links, a one-page template and an illustrative example.",
      metaDescription:
        "How to make a campaign performance report after a brand collab: what to screenshot at 24h, 7 and 30 days, Instagram and YouTube metrics, and a free template.",
      author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
      publishedAt: "2026-09-29",
      updatedAt: "2026-11-10",
      lastReviewed: "November 2026",
      readingTime: "9 min read",
      tags: ["campaign report", "influencer campaign report template", "post-campaign report", "creator reporting", "brand collaboration results", "instagram insights"],
      related: ["creator-analytics-for-brand-deals", "creator-case-study", "instagram-insights-for-creators", "youtube-analytics-for-creators", "creator-brand-brief"],
      body: [
        {
          type: "paragraph",
          text: "Your Reel is live, the brand has paid (or is about to), and the chat goes quiet. This is the moment most creators lose the next deal. A clear, honest campaign report, sent on time, tells the brand manager exactly what they got and gives them something to forward to their boss. This guide shows you what to collect, when to collect it, and how to put it on one page.",
        },
        { type: "heading", text: "Quick answer", id: "quick-answer" },
        {
          type: "paragraph",
          text: "A creator campaign report is a short document you send the brand after a collaboration. Take dated screenshots of native insights at about 24 hours, 7 days and (for YouTube or evergreen posts) 30 days. Report the metrics you agreed in the brief, plus link clicks or code uses from the brand's tracking, and the main themes from comments and DMs. Compare results with your own recent averages, add one or two learnings and a next-step idea. Never estimate, edit or inflate numbers.",
        },
        { type: "heading", text: "Why a good report wins repeat deals", id: "why-reports-matter" },
        {
          type: "paragraph",
          text: "Brand and agency teams have to justify every creator they pay. When you send a clean report, you do part of their job for them. That makes you the easy choice when the next campaign comes around, and gives you real evidence for your next pitch or creator case study.",
          links: [{ text: "creator case study", href: "/blog/creator-case-study" }],
        },
        {
          type: "list",
          items: [
            "It shows you treat the collab as a job, not a one-off post.",
            "It answers the brand's questions before they ask, so there's less back-and-forth.",
            "It gives you documented results to reference in future brand deals.",
            "It creates a natural reason to propose the next piece of work.",
          ],
        },
        { type: "heading", text: "Before you post: agree what success means", id: "agree-kpis" },
        {
          type: "paragraph",
          text: "The report starts at the brief stage. Ask the brand which two or three numbers matter most (for example views, saves and link clicks), when they want the report, and whether they'll share tracking data such as a UTM link or discount code. If the brief doesn't say, read our guide to the creator brand brief and confirm it in writing. Reporting against agreed KPIs is far stronger than sending every number you can find.",
          links: [{ text: "creator brand brief", href: "/blog/creator-brand-brief" }],
        },
        { type: "heading", text: "When to collect data and when to send", id: "timing" },
        {
          type: "table",
          headers: ["Checkpoint", "What to do", "Why"],
          rows: [
            ["Posting day", "Send live links, posting time and confirmation of the disclosure label", "The brand can check the post went live as agreed"],
            ["About 24 hours", "Screenshot insights for Reels, posts and every Story frame", "Stories disappear from your profile after 24 hours, so capture them early"],
            ["7 days", "Screenshot again and send the main report (or as agreed)", "Most short-form views arrive in the first week"],
            ["30 days (optional)", "Update views, watch time and clicks", "YouTube videos and searchable posts keep growing"],
          ],
        },
        {
          type: "paragraph",
          text: "Every screenshot should show the date it was taken, or you should write the date next to it. \"Data as of 14 November\" turns a screenshot into evidence.",
        },
        { type: "heading", text: "What to collect, platform by platform", id: "contents" },
        {
          type: "paragraph",
          text: "Metric names change from time to time, so use the labels your app shows today. Our guides to Instagram insights for creators and YouTube analytics for creators explain where each number lives.",
          links: [
            { text: "Instagram insights for creators", href: "/blog/instagram-insights-for-creators" },
            { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" },
          ],
        },
        {
          type: "table",
          headers: ["Format", "Metrics to screenshot", "Notes"],
          rows: [
            ["Instagram Reel or post", "Views, accounts reached (or viewers), likes, comments, shares, saves, follows, profile activity", "Include the follower vs non-follower split if your Insights screen shows it"],
            ["Instagram Stories", "Views per frame, taps forward, taps back, exits, replies, link sticker taps", "Screenshot each frame; the drop between frames shows where attention fell"],
            ["YouTube video or Short", "Views, watch time, average view duration, impressions click-through rate, traffic sources", "Add top comments and the timestamp where the brand segment starts"],
            ["Links and codes", "Clicks on tracked links, code redemptions, sales (only if the brand shares them)", "Use the brand's link or code, not one you made up"],
          ],
        },
        { type: "heading", text: "Tracked links and discount codes", id: "tracked-links" },
        {
          type: "paragraph",
          text: "Native insights show attention. Sales and sign-ups usually live in the brand's systems. Before posting, ask for a unique tracked link or code for you, and after the campaign ask for the click and redemption totals. If they won't share them, report the link sticker taps or description clicks you can see and say plainly that conversions were tracked on their side. Creator attribution and creator discount codes go deeper on this.",
          links: [
            { text: "Creator attribution", href: "/blog/creator-attribution" },
            { text: "creator discount codes", href: "/blog/creator-discount-codes" },
          ],
        },
        { type: "heading", text: "The qualitative part brands remember", id: "audience-response" },
        {
          type: "paragraph",
          text: "Numbers say how many people saw the content. Comments and DMs say what they thought. Spend 15 minutes grouping them into themes:",
        },
        {
          type: "list",
          items: [
            "Buying questions: price, sizes, shade range, \"is it available in Coimbatore?\"",
            "Objections or doubts: \"will this work on oily skin?\", \"is the app in Marathi?\"",
            "Positive signals: \"ordered\", \"saved for Diwali\", tagging friends.",
            "Questions you answered in DMs, with names and personal details removed.",
          ],
        },
        {
          type: "paragraph",
          text: "Include two or three representative comments as screenshots. Never share a follower's phone number, name or DM without consent; describe the theme instead.",
        },
        { type: "heading", text: "Report template", id: "template" },
        {
          type: "template",
          label: "One-page campaign report",
          text: "CAMPAIGN REPORT: [Brand] x [@handle], [Campaign name]\nData as of: [date]  |  Prepared by: [name]\n\n1. OBJECTIVE\n[What the brand wanted, from the brief: e.g. awareness for a new launch in Tamil Nadu]\n\n2. DELIVERABLES AND LIVE LINKS\n- Reel: [link], posted [date, time], paid partnership label: yes\n- Stories (x frames): [date], link sticker: yes\n- YouTube integration: [link], segment at [mm:ss], paid promotion: yes\n\n3. RESULTS VS AGREED KPIs (native insights, screenshots attached)\nKPI | Target or my average | Result | Note\n[Views] | [ ] | [ ] | [ ]\n[Saves] | [ ] | [ ] | [ ]\n[Link clicks / code uses] | [ ] | [ ] | [source: brand / my insights]\n\n4. AUDIENCE SNAPSHOT\n[Top cities, age range, language mix, from Insights on date X]\n\n5. AUDIENCE RESPONSE\nTop themes: [ ]\nExample comments: [attached]\n\n6. LEARNINGS\n[What worked, what didn't, what you'd change]\n\n7. NEXT STEP\n[One specific proposal: follow-up format, festive-season post, usage extension]",
        },
        { type: "heading", text: "A one-page example (illustrative numbers)", id: "example" },
        {
          type: "paragraph",
          text: "Here's how a filled report might read for a hypothetical Kannada-and-English food creator in Mysuru promoting a masala brand. All figures are invented for illustration and are not a benchmark.",
        },
        {
          type: "table",
          headers: ["KPI", "My 90-day Reel average", "This campaign", "Note"],
          rows: [
            ["Views (7 days)", "18,000", "24,500", "About 1.4x my average (illustrative)"],
            ["Saves", "310", "690", "Recipe format drove saves"],
            ["Shares", "140", "260", "Mostly shared to DMs"],
            ["Link sticker taps (Stories)", "n/a", "410", "From 3 Story frames"],
            ["Code redemptions", "n/a", "Shared by brand", "Brand reported total on 20 Nov"],
          ],
        },
        {
          type: "template",
          label: "Example learnings and next step (illustrative)",
          text: "LEARNINGS\n- The 3-second close-up of the tempering drove most saves; comments asked for the full recipe.\n- 40% of comments asked whether the pack is sold in local kirana stores, not only online.\n- Story frame 2 (price) had the most exits; next time lead with the dish, then price.\n\nNEXT STEP\nA two-part Ugadi recipe series using the same masala, with a pinned comment listing nearby stores.",
        },
        { type: "heading", text: "Sharing data safely with the brand", id: "share-safely" },
        {
          type: "paragraph",
          text: "Screenshots are usually enough. Some brands also ask for direct access to the numbers. Platform tools let you do this without ever sharing your password, which you should never do.",
        },
        {
          type: "list",
          items: [
            "Instagram: when you use the paid partnership label and the brand approves the tag, Instagram can give the brand partner access to that content's insights. Check the current behaviour in the app and confirm with the brand which metrics they can see.",
            "YouTube: brand partner access lets a brand view organic and paid metrics for a sponsored video in Google Ads, including views, watch time, average view duration, reach, likes, shares and audience age, gender and country, according to YouTube Help (fetched November 2026). Sharing it adds a \"Paid promotion\" label, and you can remove access at any time.",
            "Agencies: if the deal came through an agency, send the report to your agency contact unless they say otherwise.",
          ],
        },
        {
          type: "paragraph",
          text: "The details of brand partner access, and how it connects to the wider programme, are in our guide to YouTube Creator Partnerships in India; the source is YouTube Help on brand partner access. If you work through agencies, here's how to work with an influencer marketing agency as a creator.",
          links: [
            { text: "YouTube Creator Partnerships in India", href: "/blog/youtube-creator-partnerships-india" },
            { text: "YouTube Help on brand partner access", href: "https://support.google.com/youtube/answer/15672082" },
            { text: "work with an influencer marketing agency as a creator", href: "/blog/work-with-influencer-marketing-agency-creator" },
          ],
        },
        { type: "heading", text: "When a post underperforms", id: "underperformed" },
        {
          type: "paragraph",
          text: "It happens to every creator. The worst response is silence or a report that hides the weak numbers. A good one:",
        },
        {
          type: "list",
          items: [
            "States the result plainly next to your average, without excuses.",
            "Offers a likely reason you can support (posting time clashed with a cricket final, the hook buried the product, the Story link was on the last frame).",
            "Points to anything that did work, such as strong saves or buying questions in comments.",
            "Suggests a fix, and if your agreement includes it, a make-good such as an extra Story frame.",
          ],
        },
        {
          type: "paragraph",
          text: "Brands remember who was straight with them. An honest weak report keeps the relationship open; a padded one ends it when their own data disagrees.",
        },
        { type: "heading", text: "What not to do", id: "honesty" },
        {
          type: "list",
          items: [
            "Don't estimate or round up. Use only native insights or data the brand shared.",
            "Don't crop, edit or recreate screenshots.",
            "Don't report reach or impressions for things you can't see, such as reposts on other accounts.",
            "Don't mix results from a paid boost with organic results without labelling them.",
            "Don't add metrics the brand didn't ask for while leaving out the ones it did.",
          ],
        },
        {
          type: "paragraph",
          text: "For more on presenting numbers honestly, see creator analytics for brand deals.",
          links: [{ text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" }],
        },
        { type: "heading", text: "From report to next deal", id: "next-deal" },
        {
          type: "paragraph",
          text: "End with one specific idea tied to what you learned, not a vague \"let's work again\". A festive follow-up, a regional-language version or a longer YouTube review are all natural next steps. Then save the report: it becomes the source for your next pitch and for the results section in your creator media kit, and it feeds into how you price future brand deals.",
          links: [
            { text: "creator media kit", href: "/blog/creator-media-kit" },
            { text: "future brand deals", href: "/blog/creator-brand-deals" },
          ],
        },
        { type: "heading", text: "Common mistakes", id: "mistakes" },
        {
          type: "list",
          items: [
            "Sending the report late, or only after the brand chases you.",
            "Forgetting to screenshot Stories before the data gets hard to find.",
            "Screenshots without dates.",
            "A ten-page deck when the brand wanted one page.",
            "No next step at the end.",
          ],
        },
        { type: "heading", text: "Conclusion", id: "conclusion" },
        {
          type: "paragraph",
          text: "Set calendar reminders for the 24-hour, 7-day and 30-day checkpoints the day you sign the deal. Collect dated screenshots, ask the brand for tracking data, group the comments into themes, and fill the one-page template. Send it on time, be honest about what didn't work, and close with one clear idea. That habit does more for repeat deals than any single viral post.",
        },
      ],
      faqs: [
        {
          question: "Do I have to share my audience demographics with the brand?",
          answer:
            "Only if it was agreed or it helps the brand judge fit. Share aggregate data such as top cities, age ranges and gender split from your insights, never details about individual followers.",
        },
        {
          question: "Can the brand ask for my Instagram or YouTube login to check the numbers?",
          answer:
            "Don't share your password. Send dated screenshots, or use the platform's own partner tools (the paid partnership label on Instagram or brand partner access on YouTube) so the brand can see insights without logging in to your account.",
        },
        {
          question: "What if the brand never asked for a report?",
          answer:
            "Send a short one anyway, about a week after posting. It costs you an hour and makes you stand out from creators who disappear after the post goes live.",
        },
        {
          question: "Should the report be a PDF, a slide or a message?",
          answer:
            "Whatever the brand prefers. A one-page PDF or shared document with screenshots attached works for most. If the brand sends its own template, fill that accurately instead.",
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

import type { BlogPost } from "@/content/blog";

/**
 * Creator Batch 02 (published 2026-11-10): working with agencies, accessible captions, music and copyright,
 * podcasting, LinkedIn and gaming creators. Platform and legal facts were checked against official YouTube,
 * Meta, LinkedIn, Spotify, W3C and Government of India sources in November 2026.
 */
export const creatorBatch02Posts: BlogPost[] = [
  {
    slug: "work-with-influencer-marketing-agency-creator",
    category: "Creator Resources",
    title: "How to Work With an Influencer Marketing Agency as a Creator",
    seoTitle: "Working With an Influencer Agency as a Creator (India)",
    excerpt: "How influencer marketing agencies work with creators in India: getting on their lists, the campaign flow, legitimacy checks, red flags and reply templates.",
    metaDescription: "How Indian creators can work with influencer marketing agencies: getting on lists, a clean campaign flow, legitimacy checks, scam red flags and reply templates.",
    author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
    publishedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    hero: {
      src: "/blog/creator-resources/work-with-influencer-marketing-agency-creator.svg",
      alt: "Diagram of an agency campaign flow for creators: brief, written confirmation, draft, approval, go-live, report, invoice and payment, with a legitimacy checklist beside it"
    },
    tags: ["Influencer Marketing Agency", "Brand Deals", "Creator Safety", "Campaign Workflow", "India"],
    related: [
      "creator-manager-vs-agency",
      "creator-brand-brief",
      "creator-scams-fake-brand-collaborations",
      "creator-brand-deal-checklist",
      "how-to-invoice-brands-as-a-creator-india",
      "creator-campaign-reporting"
    ],
    body: [
      {
        type: "paragraph",
        text: "An email lands from an agency you have never heard of: a skincare brand, three Reels, a tight deadline, and a request for your rates by tonight. Is it real, what happens next, and how do you look professional without overcommitting? This guide explains how influencer marketing agencies usually work with creators in India, how to check them, and how to run a campaign cleanly from brief to payment."
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer marketing agency runs campaigns for brands and hires creators for specific deliverables. To work with one, keep a clear profile and media kit ready, get onto agency lists through their creator application forms or by replying well to inbound briefs, and confirm deliverables, timelines, usage rights and payment terms in writing before you create anything. A legitimate agency has verifiable company details and a real domain email, and it never asks you for a fee, OTP or password. Registering with an agency does not guarantee you any campaigns."
      },
      { type: "heading", text: "Campaign agencies vs talent managers", id: "campaign-agency-vs-talent-manager" },
      {
        type: "paragraph",
        text: "The word \"agency\" covers two different jobs, and mixing them up causes most of the confusion creators run into."
      },
      {
        type: "table",
        headers: ["", "Campaign agency (influencer marketing agency)", "Talent manager or creator management agency"],
        rows: [
          ["Who it works for", "The brand. The brand is its client.", "You. You are its client or signed talent."],
          ["What it does for you", "Offers you specific campaigns with a brief and a fee", "Finds deals, negotiates, handles admin across many brands"],
          ["Typical relationship", "Campaign by campaign, often non-exclusive", "Ongoing contract, sometimes exclusive"],
          ["How it is paid", "By the brand", "Usually a share of your deals, as agreed in your contract"]
        ]
      },
      {
        type: "paragraph",
        text: "Both can be useful, and some companies do both. If you are deciding whether to sign with someone long-term, read our comparison of a creator manager vs an agency before you sign anything exclusive. The rest of this guide is about the first kind: agencies that bring you a campaign on behalf of a brand.",
        links: [{ text: "comparison of a creator manager vs an agency", href: "/blog/creator-manager-vs-agency" }]
      },
      { type: "heading", text: "How creators usually get onto agency lists", id: "get-on-agency-lists" },
      {
        type: "paragraph",
        text: "Agencies need a steady supply of creators who fit different briefs, so most use some mix of these routes:"
      },
      {
        type: "list",
        items: [
          "Creator application forms. Many agencies have a page where you share your handles, niche, languages, city and audience. Your details go into their database so the team can find you when a fitting brief comes in.",
          "Rosters and shortlists. For each campaign, the agency shortlists creators who match the brand's category, audience and budget, then sends the list to the brand for approval. Being in the database is not the same as being shortlisted.",
          "Inbound discovery. Agency teams also search Instagram and YouTube directly for a niche or city, so a clear bio and a business email still matter.",
          "Referrals and past work. Creators who delivered on time and reported cleanly are easier to recommend for the next brief."
        ]
      },
      {
        type: "paragraph",
        text: "If you want to see what an application looks like, here is what agencies ask for when you apply to a creator network. Kudozz, for example, reviews applications personally, does not charge creators to join, and there is no obligation until a campaign fits. The same rule applies to every agency, including Kudozz: joining a list is a way to be considered, not a promise of work.",
        links: [{ text: "what agencies ask for when you apply to a creator network", href: "/for-creators" }]
      },
      { type: "heading", text: "What to prepare before an agency contacts you", id: "what-to-prepare" },
      {
        type: "list",
        items: [
          "A tidy profile: bio that says your niche, language and city, a business email, and pinned posts that show your best work.",
          "A one-page media kit with audience basics, formats you make and a few past collaborations (or sample content if you are new).",
          "Rate card basics: a starting range per format and what is included, so you can reply the same day without guessing.",
          "Recent screenshots of your analytics, because agencies often ask for reach, views and audience location before shortlisting.",
          "Payment paperwork: PAN, GSTIN if you are registered, bank details and an invoice format."
        ]
      },
      {
        type: "paragraph",
        text: "Our guide to building a creator media kit covers the kit itself, and the influencer rate card guide covers pricing, so we will not repeat them here.",
        links: [
          { text: "building a creator media kit", href: "/blog/creator-media-kit" },
          { text: "influencer rate card guide", href: "/blog/influencer-rate-card-india" }
        ]
      },
      { type: "heading", text: "How a legitimate agency campaign flows", id: "campaign-flow" },
      {
        type: "paragraph",
        text: "Details vary, but a well-run campaign follows roughly the same sequence. Use it as a checklist so nothing is left to memory or a deleted WhatsApp chat."
      },
      {
        type: "list",
        items: [
          "Brief: you receive the brand, product, key messages, deliverables, dos and don'ts and timelines. Read it slowly and note anything unclear.",
          "Fit check: decide whether the product suits your audience and whether you would actually use it.",
          "Written confirmation: agree deliverables, number of revisions, posting dates, usage rights (where and for how long the brand can reuse your content), exclusivity, fee, and when and how you will be paid. Email or a signed agreement, not only a call.",
          "Draft or script: share it by the agreed date.",
          "Approval: get approval in writing before posting. Note how many revision rounds you agreed.",
          "Go-live: post on the agreed date with the correct disclosure, then send live links.",
          "Report: share the agreed metrics with screenshots.",
          "Invoice and payment: send your invoice as agreed and track the due date."
        ]
      },
      {
        type: "paragraph",
        text: "Two links help with the steps people most often rush: what to clarify in a brand brief before you reply, and how to put together a campaign report after the post goes live. Before you say yes, run the deal past a quick brand fit check too.",
        links: [
          { text: "what to clarify in a brand brief", href: "/blog/creator-brand-brief" },
          { text: "campaign report", href: "/blog/creator-campaign-reporting" },
          { text: "brand fit check", href: "/blog/creator-brand-fit" }
        ]
      },
      { type: "heading", text: "How to check an agency is legitimate", id: "check-agency-legitimacy" },
      {
        type: "list",
        items: [
          "Company details: a registered business name, a working website and a real office city you can look up.",
          "Real domain email: briefs come from an address on the agency's own domain, not only a free email or a random WhatsApp number.",
          "Verifiable brands: the brands they name exist, and the agency's past campaigns can be found publicly. If unsure, you can ask the brand directly whether the agency represents it.",
          "A written agreement or confirmation email that states deliverables, fee and payment terms.",
          "Payment flows to you, never from you. A legitimate agency never asks for a registration fee, onboarding fee, deposit, OTP, UPI PIN or account password."
        ]
      },
      {
        type: "paragraph",
        text: "Some requests look intrusive but are normal. Agencies usually ask for PAN, GSTIN if you have one, bank details and an invoice because they need them for payment paperwork, and TDS may be deducted as per current tax rules. Our TDS guide for influencers explains what that means for you. Sending documents by email to a verified company address is different from sharing an OTP, which no genuine business needs.",
        links: [{ text: "TDS guide for influencers", href: "/blog/tds-for-influencers-india" }]
      },
      { type: "heading", text: "Red flags vs legitimate processes", id: "red-flags" },
      {
        type: "paragraph",
        text: "The most common fraud aimed at creators copies the language of agency work. The RBI advisory on part-time job and investment frauds describes the pattern: an \"earn online\" message leads to a chat, you are paid a small amount for simple tasks to build trust, then asked to deposit money to unlock bigger tasks, after which the scammer disappears.",
        links: [{ text: "RBI advisory on part-time job and investment frauds", href: "https://www.federal.bank.in/rbi-advisory-frauds-cybercrimes" }]
      },
      {
        type: "table",
        headers: ["Red flag", "What a legitimate agency does instead"],
        rows: [
          ["Asks you to pay a fee to join, get verified or unlock a campaign", "Never charges creators to be considered or to receive a brief"],
          ["Pays you for liking videos or rating products, then asks for a deposit", "Pays for agreed content deliverables after posting, as per written terms"],
          ["Asks for an OTP, UPI PIN or your Instagram password", "Only needs PAN, GST and bank details for invoicing; never login access"],
          ["Contacts you only on WhatsApp or Telegram with no company email", "Sends briefs from a company domain email and can share a written agreement"],
          ["Pressures you to decide within minutes", "Gives a deadline but answers questions about usage, fees and payment"],
          ["Sends a link to a lookalike website or a free site-builder domain", "Uses its own domain and names brands you can verify"]
        ]
      },
      {
        type: "paragraph",
        text: "If you receive a suspicious call, SMS or WhatsApp message, you can report it on Sanchar Saathi Chakshu. If you have already lost money, Chakshu is not the right channel: call 1930 or report at cybercrime.gov.in as soon as possible. Our guide to spotting fake brand collaborations walks through more examples.",
        links: [
          { text: "Sanchar Saathi Chakshu", href: "https://sancharsaathi.gov.in/sfc/" },
          { text: "cybercrime.gov.in", href: "https://cybercrime.gov.in" },
          { text: "spotting fake brand collaborations", href: "/blog/creator-scams-fake-brand-collaborations" }
        ]
      },
      { type: "heading", text: "Templates for professional communication", id: "templates" },
      {
        type: "template",
        label: "First reply to an agency brief",
        text: "Hi [Name],\n\nThanks for sharing the brief for [Brand]. I'm interested and the product fits my audience of [niche/city/language].\n\nBefore I confirm, could you share:\n1. Final deliverables (format, count, duration) and posting dates\n2. Number of revision rounds\n3. Usage rights: platforms, paid ads or not, and duration\n4. Any exclusivity period and category\n5. Fee, payment timeline after go-live, and invoicing details\n\nMy rate for this scope is [range] (illustrative; use your own). Once we agree, please send a written confirmation or agreement.\n\nThanks,\n[Your name] | [Handle] | [Business email]"
      },
      {
        type: "template",
        label: "Follow-up on a pending payment",
        text: "Hi [Name],\n\nHope you're well. Following up on invoice [number] dated [date] for the [Brand] campaign (posted on [date], links and report shared on [date]). As per our agreement, payment was due on [date].\n\nCould you confirm the payment status and expected date? Happy to resend the invoice or any paperwork you need.\n\nThanks,\n[Your name]"
      },
      {
        type: "paragraph",
        text: "Keep your tone polite and factual, keep every confirmation in one email thread, and attach the invoice each time. If you have not invoiced a brand or agency before, start with our guide on how to invoice brands as a creator in India.",
        links: [{ text: "how to invoice brands as a creator in India", href: "/blog/how-to-invoice-brands-as-a-creator-india" }]
      },
      { type: "heading", text: "Disclosure is still your responsibility", id: "disclosure" },
      {
        type: "paragraph",
        text: "Working through an agency does not move the disclosure duty off you. Under the ASCI influencer guidelines, responsibility for disclosing a paid or gifted collaboration lies with both the advertiser and the influencer, and the advertiser can ask you to edit content or the disclosure label where needed. Use a clear, upfront disclosure label whenever there is a material connection: money, free product or other perks. The creator disclosure guide covers placement and wording.",
        links: [
          { text: "ASCI influencer guidelines", href: "https://www.ascionline.in/social/wp-content/uploads/2025/04/ASCI-Influencer-Guidelines.pdf" },
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }
        ]
      },
      { type: "heading", text: "What registering with an agency does and doesn't mean", id: "what-registration-means" },
      {
        type: "table",
        headers: ["Registering means", "Registering does not mean"],
        rows: [
          ["The agency can find you when a matching brief comes in", "You are guaranteed campaigns or a fixed number of deals"],
          ["You may be shortlisted and shown to brands", "The brand will approve you; brands make the final choice"],
          ["You can decline briefs that don't fit", "You owe the agency exclusivity, unless you signed a contract that says so"],
          ["Your profile is reviewed against future campaigns", "You should stop pitching brands yourself"]
        ]
      },
      {
        type: "paragraph",
        text: "Treat agency work as one channel alongside direct brand outreach, affiliate income and your own products. Before accepting any offer, agency or direct, run it through the creator brand deal checklist.",
        links: [{ text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" }]
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Agencies are a practical way to reach brands you might not pitch alone, but the relationship works best when you behave like a small business. Keep your profile and media kit ready, confirm every detail in writing, post with proper disclosure, report on time and invoice cleanly. Check every agency the same way, including well-known ones: real company, real email, real brands, and money only ever flowing to you."
      }
    ],
    faqs: [
      {
        question: "Can I work with more than one influencer marketing agency at the same time?",
        answer: "Usually yes. Campaign agencies typically book creators campaign by campaign, so being on several agency lists is common. The exception is when you sign an exclusive contract or accept a campaign with a category exclusivity clause; then you must respect those terms for the agreed period. Read any exclusivity line carefully before signing."
      },
      {
        question: "Should I accept barter-only campaigns from an agency?",
        answer: "That depends on your goals and the product's value to you. If you accept, confirm the deliverables and usage rights in writing just as you would for a paid deal, and still disclose the collaboration because free product counts as a material connection. You can decline barter politely and share your paid rate instead."
      },
      {
        question: "What if the agency changes the brief after I have already shot the content?",
        answer: "Refer back to the written confirmation. If the change goes beyond the agreed revision rounds or adds deliverables, it is fair to ask for a revised fee or timeline before reshooting. Reply in the same email thread so the history stays in one place."
      },
      {
        question: "The brand liked my post, so why hasn't the agency paid me yet?",
        answer: "Payment timelines vary between agencies, and some pay creators only after the brand has signed off the campaign. That is why the due date should be in your written confirmation. If it passes, send the polite follow-up template above with your invoice attached, and keep records of every message."
      }
    ]
  },
  {
      slug: "accessible-content-captions-for-creators",
      category: "Creator Resources",
      title: "How to Create Accessible Content With Captions, Subtitles and Translations",
      seoTitle: "Accessible Content for Creators: Captions and Subtitles",
      excerpt:
        "A practical guide for Indian creators on captions, subtitles, alt text, readable on-screen text and translations on YouTube and Instagram, with a pre-publish checklist.",
      metaDescription:
        "How Indian creators can add captions, subtitles, alt text and translations on YouTube and Instagram, check auto captions and run a pre-publish checklist.",
      author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
      publishedAt: "2026-11-10",
      lastReviewed: "November 2026",
      readingTime: "9 min read",
      hero: {
        src: "/blog/creator-resources/accessible-content-captions-for-creators.svg",
        alt: "Diagram of an accessible video workflow: speech becomes reviewed captions, subtitles in other languages, alt text and readable on-screen text before publishing",
      },
      tags: ["accessible content", "captions for creators", "subtitles", "youtube auto captions", "instagram alt text", "hindi captions", "regional language subtitles"],
      related: ["ai-dubbing-translation-for-creators", "regional-creator-growth-india", "creator-disclosure-guide", "ai-disclosure-creators", "youtube-seo-for-creators"],
      body: [
        {
          type: "paragraph",
          text: "If your video only works with the sound on, in one language, for someone with perfect eyesight, you are leaving people out. Captions, subtitles, alt text and readable on-screen text fix most of that, and none of them need expensive tools. This guide covers what each one is, how to add them on YouTube and Instagram, how to check translations, and a checklist to run before you hit publish.",
        },
        { type: "heading", text: "Quick answer", id: "quick-answer" },
        {
          type: "paragraph",
          text: "Accessible content means people can follow your video or post whether they are deaf or hard of hearing, watching on mute, reading in a second language, or using a screen reader. Add accurate same-language captions to every video with speech, review YouTube's auto captions before trusting them, add subtitles or translated titles for other languages, write alt text for images, keep on-screen text large and high-contrast, and get any translation checked by a fluent speaker. Sponsored content needs the same care, including a readable disclosure.",
        },
        { type: "heading", text: "Who accessible content helps", id: "who-benefits" },
        {
          type: "paragraph",
          text: "Think about the actual people in your comments and DMs:",
        },
        {
          type: "list",
          items: [
            "Deaf and hard-of-hearing viewers, who rely on captions to follow speech and important sounds.",
            "People watching on mute: on a bus in Pune, in a hostel room at night, in an office queue.",
            "Regional and non-native audiences who would watch a Hindi or English video if it had subtitles in Tamil, Bengali or Marathi.",
            "Blind and low-vision users who rely on screen readers, which read alt text and written captions aloud.",
          ],
        },
        {
          type: "paragraph",
          text: "How many of your viewers watch on mute varies by creator and format, so check your own comments and audience language data rather than trusting a generic statistic. If people keep asking \"what did she say at 0:45?\", you have your answer.",
        },
        { type: "heading", text: "Captions, subtitles, open and closed captions: the difference", id: "captions-vs-subtitles" },
        {
          type: "paragraph",
          text: "The W3C Web Accessibility Initiative's captions guidance draws a clear line between these terms, and it is worth using the same words when you brief an editor.",
          links: [{ text: "captions guidance", href: "https://www.w3.org/WAI/media/av/captions/" }],
        },
        {
          type: "table",
          headers: ["Term", "What it is", "When to use it"],
          rows: [
            ["Captions", "Same-language text of the speech plus important non-speech audio (music cues, laughter, a doorbell), synced to the video", "Every video with speech, as your default"],
            ["Subtitles", "A translation of the speech into another language", "When you want viewers who speak another language to follow"],
            ["Closed captions", "Captions the viewer can switch on or off", "YouTube caption tracks and platform caption features"],
            ["Open (burned-in) captions", "Text baked into the video file; they cannot be turned off", "Reels and Shorts where you design the text as part of the edit"],
          ],
        },
        {
          type: "paragraph",
          text: "Good captions also identify who is speaking when it isn't obvious and describe meaningful sounds, for example [phone buzzing] or [audience laughs].",
        },
        { type: "heading", text: "Use WCAG as your quality bar", id: "wcag-basics" },
        {
          type: "paragraph",
          text: "WCAG (Web Content Accessibility Guidelines) is the international web accessibility standard, and a useful bar for creators too. Per the W3C, captions for prerecorded video with audio are Level A, the most basic level, and captions for live video are Level AA. Prerecorded audio-only content, such as a podcast clip with a static image, needs a transcript. A video that has only background music and no speech does not need captions.",
        },
        { type: "heading", text: "Captions on YouTube", id: "youtube-captions" },
        { type: "subheading", text: "Automatic captions and Indian languages" },
        {
          type: "paragraph",
          text: "According to YouTube's automatic captions help page (fetched November 2026), auto captions work on long-form videos and Shorts in a long list of languages. The Indian languages on that list are Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Punjabi, Tamil and Telugu. Assamese, Odia and Urdu are not on the list, so creators in those languages need to upload or type captions themselves. Automatic captions are only generated in the video's default language, so set that correctly when you upload.",
          links: [{ text: "automatic captions help page", href: "https://support.google.com/youtube/answer/6373554" }],
        },
        {
          type: "paragraph",
          text: "Expressive captions and live automatic captions are English only as of November 2026, and live auto captions are still being rolled out to channels with over 1,000 subscribers.",
        },
        { type: "subheading", text: "Always review auto captions" },
        {
          type: "paragraph",
          text: "YouTube itself says automatic captions are machine-generated and can get speech wrong because of accents, dialects or background noise. They may not be ready right after upload. They can also fail on very long videos, poor audio, a long silence at the start, overlapping speakers or mixed languages. Hinglish is exactly the kind of mixed-language speech to check line by line, along with brand names, prices and medical or financial terms. YouTube Studio also masks potentially inappropriate words by default; you can turn that setting off if it is hiding legitimate words.",
        },
        { type: "subheading", text: "Upload, auto-sync or type your own" },
        {
          type: "paragraph",
          text: "YouTube's subtitles help page describes the route: in YouTube Studio, open Subtitles, pick the video, choose Add language, then Add. You then have three options:",
          links: [{ text: "subtitles help page", href: "https://support.google.com/youtube/answer/2734796" }],
        },
        {
          type: "list",
          items: [
            "Upload a file: a caption file with timings (such as one your editor exports), or a plain transcript without timings.",
            "Auto-sync: paste a transcript and YouTube sets the timings. The transcript must match the spoken language, and YouTube does not recommend it for videos over an hour or with poor audio.",
            "Type manually while the video plays, which works well for short videos and Shorts.",
          ],
        },
        {
          type: "paragraph",
          text: "If you script your videos, auto-sync is the fastest accurate option. Edit the script to match what you actually said before pasting.",
        },
        { type: "subheading", text: "Translated titles and descriptions" },
        {
          type: "paragraph",
          text: "YouTube lets you add translated video titles and descriptions, and then shows the right language to the right viewers, according to its translated titles help page. If a meaningful share of your audience reads Marathi or Bengali, a translated title and description is a low-effort first step before full subtitles or dubbing.",
          links: [{ text: "translated titles help page", href: "https://support.google.com/youtube/answer/4792576" }],
        },
        { type: "heading", text: "Captions and alt text on Instagram", id: "instagram-accessibility" },
        {
          type: "paragraph",
          text: "For Reels, check the captions option in the Reels editor in the app before you publish. Language support varies and we could not confirm a current official list for Indian languages, so preview the captions in your language and do not assume they will appear. For accuracy, burn in your own reviewed captions.",
        },
        {
          type: "paragraph",
          text: "For photos and carousels, Instagram's alt text help page explains that automatic alt text uses object recognition to describe photos, and you can replace it with your own. Before posting, tap Next after choosing a filter, then open Accessibility (sometimes under Advanced settings) and write your alt text. After posting, open the post's menu, tap Edit, then Accessibility or Edit alt text. The description is only read when someone uses a screen reader, and Instagram does not say it affects reach, so write it for people, not for search.",
          links: [{ text: "alt text help page", href: "https://www.facebook.com/help/instagram/503708446705527?locale=en_US" }],
        },
        {
          type: "template",
          label: "Alt text formula",
          text: "[What the image shows] + [the detail that matters for this post] + [any text in the image].\nExample (illustrative): \"Flat lay of a cotton kurta in mustard yellow next to a price tag reading Rs 799, with the words 'Diwali edit' handwritten on a card.\"",
        },
        { type: "heading", text: "Make on-screen text and visuals readable", id: "readable-text" },
        {
          type: "list",
          items: [
            "Contrast: light text on a dark band or dark text on a light band. Avoid white text straight on a busy, bright background.",
            "Size: if you have to squint at it on your own phone at arm's length, it is too small.",
            "Safe zones: keep text away from the top, bottom and right edge of Reels and Shorts, where usernames, captions and buttons sit. Preview on the app before posting.",
            "Duration: leave each text card on screen long enough to read it twice. Fast-flashing word-by-word captions look trendy but are hard for many people to follow.",
            "Describe visuals in your voiceover: say \"this one costs Rs 499 and the blue one costs Rs 699\" instead of \"this one and that one\". It helps blind viewers and people half-watching.",
            "Thumbnails: few, large, high-contrast words, with the key message repeated in the title.",
            "Flashing content: avoid rapid strobe or flashing effects. They can trigger seizures in some viewers. If a clip must include them, warn viewers at the start.",
          ],
        },
        { type: "subheading", text: "Emoji and hashtags" },
        {
          type: "paragraph",
          text: "Screen readers read every emoji aloud by name, so a caption with ten fire emoji becomes a long, confusing sentence. Use a few, at the end of a line, not in place of words. Write multi-word hashtags in CamelCase, such as #MumbaiStreetFood instead of #mumbaistreetfood, so screen readers and human readers can tell the words apart.",
        },
        { type: "heading", text: "Translations and subtitles: quality control", id: "translation-quality" },
        {
          type: "paragraph",
          text: "AI translation is now built into both platforms. YouTube's February 2026 auto dubbing announcement says auto dubbing covers 27 languages and is available to everyone, and its help page lists English to Bengali, Hindi, Malayalam, Punjabi, Tamil and Telugu among the pairs. Meta's Reels translation post says Hindi and English translation and dubbing arrived in October 2025, with a rollout in Bengali, Tamil, Telugu, Marathi and Kannada starting in January 2026, for single-speaker Reels. Our guide to AI dubbing and translation covers setup and the trade-offs in detail.",
          links: [
            { text: "auto dubbing announcement", href: "https://blog.youtube/news-and-events/youtube-auto-dubbing-expressive-speech/" },
            { text: "Reels translation post", href: "https://about.fb.com/news/2025/10/discover-reels-around-world-meta-ai-translation/" },
            { text: "AI dubbing and translation", href: "/blog/ai-dubbing-translation-for-creators" },
          ],
        },
        {
          type: "paragraph",
          text: "Whether a person or a tool does the first draft, run these checks before a translated version goes live:",
        },
        {
          type: "list",
          items: [
            "Native review: a fluent speaker of that language (ideally from your audience region) watches the whole thing, not just reads the text.",
            "Glossary: list words that must never be translated (your name, show name, brand and product names) and preferred spellings.",
            "Numbers and claims: check every price, date, quantity, percentage and health or money claim against the original. A wrong number in a translated sponsored video is a brand problem.",
            "Tone: slang and jokes rarely translate word for word. Check the meaning survives.",
            "Timing: subtitles should appear while the line is spoken and stay long enough to read. Translated text is often longer, so split lines if needed.",
          ],
        },
        {
          type: "paragraph",
          text: "If you are deciding which languages to add first, the regional growth guide for Indian creators walks through using audience data to choose.",
          links: [{ text: "regional growth guide", href: "/blog/regional-creator-growth-india" }],
        },
        { type: "heading", text: "Accessibility in brand deals", id: "brand-deals" },
        {
          type: "paragraph",
          text: "Sponsored content should meet the same bar as your own posts. Agree in the brief who writes and approves captions and translations, and send the brand the caption text for product names and claims before publishing. Your disclosure must also be readable: a tiny, low-contrast \"ad\" in the corner, or a label that disappears in half a second, does not do its job. Our creator disclosure guide covers how and where to label paid partnerships, and the AI and paid partnership disclosure guide covers what to add when AI dubbing or translation is used.",
          links: [
            { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
            { text: "AI and paid partnership disclosure guide", href: "/blog/ai-disclosure-creators" },
          ],
        },
        {
          type: "paragraph",
          text: "If you want to see this from the other side, our brand-facing guide to accessible influencer campaigns explains what marketing teams are asked to check. It helps you list captioned, accessible content as a standard deliverable in your campaign proposal.",
          links: [
            { text: "accessible influencer campaigns", href: "/blog/accessible-influencer-campaigns" },
            { text: "campaign proposal", href: "/blog/creator-campaign-proposal" },
          ],
        },
        { type: "heading", text: "Pre-publish accessibility checklist", id: "accessibility-checklist" },
        {
          type: "template",
          label: "Copy this into your notes app",
          text: "VIDEO\n[ ] Captions on (track or burned-in) for all speech\n[ ] Auto captions reviewed line by line: names, numbers, brand terms, Hinglish\n[ ] Speaker names and key sounds marked where needed\n[ ] Default video language set correctly (YouTube)\n[ ] Visuals described in voiceover where they carry meaning\n[ ] No rapid flashing, or a warning at the start\n\nTEXT ON SCREEN\n[ ] High contrast, large enough on a phone\n[ ] Inside the safe zone (previewed in app)\n[ ] On screen long enough to read twice\n\nPOST\n[ ] Alt text written for images and carousels\n[ ] Hashtags in CamelCase, emoji used sparingly\n[ ] Key thumbnail text repeated in title or caption\n\nTRANSLATIONS\n[ ] Native speaker reviewed\n[ ] Glossary terms kept\n[ ] Numbers and claims matched to the original\n[ ] Subtitle timing checked\n\nSPONSORED\n[ ] Disclosure visible, readable and on screen long enough\n[ ] Brand approved product names and claims in captions",
        },
        {
          type: "paragraph",
          text: "Add this to your existing content workflow so it becomes a five-minute habit, not an extra project.",
          links: [{ text: "content workflow", href: "/blog/creator-content-workflow" }],
        },
        { type: "heading", text: "Conclusion", id: "conclusion" },
        {
          type: "paragraph",
          text: "Accessible content is mostly small, repeatable habits: review the captions, write the alt text, make the text readable, and get translations checked by someone fluent. Start with accurate captions on every video, add one more language only when your audience data supports it, and treat sponsored posts with the same care. If you are preparing your profile for brand work, captioned and well-labelled content is also part of what agencies look at when you apply to a creator network.",
          links: [{ text: "apply to a creator network", href: "/for-creators" }],
        },
      ],
      faqs: [
        {
          question: "Should I use burned-in captions or a separate caption file?",
          answer:
            "On Reels and Shorts, burned-in captions are common because you control the look. On YouTube, also upload a caption track, because viewers can switch it on, resize it and use it with screen readers, and you can add more languages later.",
        },
        {
          question: "Do captions help my videos get more views?",
          answer:
            "Neither YouTube nor Instagram says captions or alt text increase reach, so don't add them expecting an algorithm boost. Add them because more people can follow the video, including viewers on mute and viewers with hearing loss.",
        },
        {
          question: "My channel is in Odia. How do I add captions?",
          answer:
            "Odia is not on YouTube's automatic captions language list as of November 2026, so use YouTube Studio's upload or type-manually options. Keep a clean script and upload it as a transcript file, or type captions directly while the video plays.",
        },
        {
          question: "Can I write captions in Hinglish using the Roman script?",
          answer:
            "Yes, if that is how your audience reads. Be consistent with spellings across videos, and keep English brand names as written. If a large part of your audience reads Devanagari, consider a second caption track in that script on YouTube.",
        },
      ],
    },
  {
      slug: "music-for-reels-youtube-copyright",
      category: "Creator Resources",
      title: "Copyright-Free Music for Instagram Reels and YouTube: What Creators Should Know",
      seoTitle: "Copyright-Free Music for Reels and YouTube: Creator Guide",
      excerpt:
        "What copyright-free, royalty-free and Creative Commons really mean, where to find music for Reels and YouTube, how Content ID claims work, and music rules for brand deals.",
      metaDescription:
        "Copyright-free vs royalty-free music explained for Indian creators: YouTube Audio Library, Meta Sound Collection, Content ID claims and music in brand deals.",
      author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
      publishedAt: "2026-11-10",
      lastReviewed: "November 2026",
      readingTime: "9 min read",
      hero: {
        src: "/blog/creator-resources/music-for-reels-youtube-copyright.svg",
        alt: "Diagram sorting music sources for creators into platform libraries, licensed stock music and Creative Commons, with a licence record checkpoint before brand content",
      },
      tags: ["copyright free music", "royalty free music", "music for reels", "youtube audio library", "content id claim", "meta sound collection", "music copyright india"],
      related: ["creator-copyright", "protect-videos-from-reuploads", "creator-usage-rights", "how-to-become-a-ugc-creator-india", "youtube-creator-monetization"],
      body: [
        {
          type: "paragraph",
          text: "You find the perfect track, post the Reel, and a day later the audio is muted or your YouTube video has a copyright claim. Most music problems come from misunderstanding three words: copyright-free, royalty-free and licensed. This guide explains what they mean, where creators in India can find music they are allowed to use, what happens when you get a claim, and how music changes once a brand is paying you.",
        },
        { type: "heading", text: "Quick answer", id: "quick-answer" },
        {
          type: "paragraph",
          text: "Almost all music is protected by copyright, so \"copyright-free\" usually means you have permission under certain conditions, not that anything goes. For YouTube, the Audio Library in YouTube Studio is the simplest source, with credit required for Creative Commons tracks. On Instagram, use the in-app music library for personal posts, or Meta's Sound Collection if your business account lacks the library. For paid partnerships and UGC, use music the brand has approved and licensed for that use. Keep a record of every licence.",
        },
        {
          type: "paragraph",
          text: "This guide is general information, not legal advice. For a dispute or a high-value deal, speak to a lawyer who handles copyright.",
        },
        { type: "heading", text: "Music terms, explained", id: "music-terms" },
        {
          type: "paragraph",
          text: "\"Copyright-free\" is a search term, not a legal category. YouTube calls its own library \"copyright-safe\" instead. The Creative Commons FAQ is clear that \"CC licenses are copyright licenses, and depend on the existence of copyright to work\". Here is what each label usually means:",
          links: [{ text: "Creative Commons FAQ", href: "https://creativecommons.org/faq/" }],
        },
        {
          type: "table",
          headers: ["Label", "What it means", "What you must do"],
          rows: [
            ["Public domain", "Copyright has expired or never applied", "Confirm the specific recording is also public domain, not just the tune"],
            ["CC0", "A public domain dedication by the creator; Creative Commons says it is not a licence", "Usually nothing, but keep the source page as proof"],
            ["Creative Commons (CC BY and others)", "A copyright licence; every CC licence requires attribution", "Credit as asked; NC bars commercial use, ND bars changes, SA requires sharing under the same terms"],
            ["Royalty-free", "No per-use royalty, but still copyrighted and licensed with conditions", "Follow the licence: platforms, commercial use, credit"],
            ["Licensed or stock subscription", "You pay for a licence covering certain uses", "Check whether brand and ad use is covered, and what happens if you cancel"],
            ["Platform libraries", "Music the platform has cleared for use on that platform", "Use it inside the platform's rules; don't assume it works elsewhere"],
          ],
        },
        {
          type: "paragraph",
          text: "The takeaway: royalty-free does not mean free of copyright. It means you don't pay each time, but the licence terms still apply.",
        },
        { type: "heading", text: "Why an old song can still be protected in India", id: "india-copyright-terms" },
        {
          type: "paragraph",
          text: "Under India's Copyright Act, 1957, a song usually contains separate copyrights: the music (composition), the lyrics, and the sound recording. Section 13(4) says copyright in a sound recording does not affect the separate copyright in the underlying work. They also last for different periods:",
          links: [{ text: "Copyright Act, 1957", href: "https://www.indiacode.nic.in/bitstream/123456789/1367/1/A195714.pdf" }],
        },
        {
          type: "list",
          items: [
            "Composition and lyrics (section 22): 60 years counted from the start of the year after the author dies. With several authors, it counts from the death of the last surviving one.",
            "Sound recording (section 27): 60 years counted from the start of the year after the recording is published.",
          ],
        },
        {
          type: "paragraph",
          text: "An illustrative example: a film song recorded and published in 1975 has its recording protected until the end of 2035. If its composer died in 2000, the composition is protected until the end of 2060. A new cover or remix creates a fresh recording with its own copyright too. So \"it's an old song\" is not a reason to assume you can use it. Our guide to creator copyright in India covers your own rights as a creator.",
          links: [{ text: "creator copyright in India", href: "/blog/creator-copyright" }],
        },
        { type: "heading", text: "Music on YouTube", id: "youtube-music" },
        { type: "subheading", text: "YouTube Audio Library" },
        {
          type: "paragraph",
          text: "YouTube's Audio Library help page describes royalty-free music and sound effects it calls copyright-safe, available only inside YouTube Studio. Tracks under the standard YouTube Audio Library licence need no attribution. Creative Commons tracks require you to credit the artist in your description, and YouTube's automatic \"Music in this video\" section does not replace that credit. If you are in the YouTube Partner Program, you can monetise videos using library tracks, and downloaded tracks won't be Content ID claimed. YouTube also says it isn't responsible for \"royalty-free\" music from other libraries or channels.",
          links: [{ text: "Audio Library help page", href: "https://support.google.com/youtube/answer/3376882" }],
        },
        {
          type: "paragraph",
          text: "Using Audio Library tracks outside YouTube, such as in an Instagram Reel, is not covered by that help page, and we could only see a snippet of the library terms. Check the current terms before you reuse a track on another platform.",
        },
        { type: "subheading", text: "Creator Music is not available in India" },
        {
          type: "paragraph",
          text: "YouTube's Creator Music page says it \"is now available to U.S. creators in the YouTube Partner Program\" and that expansion outside the US is pending. As of November 2026, it is not an option for creators in India. Even where it is available, tracks are barred from content where the creator was paid mainly to promote a brand.",
          links: [{ text: "Creator Music page", href: "https://support.google.com/youtube/answer/11623091" }],
        },
        { type: "subheading", text: "Content ID claim vs copyright strike" },
        {
          type: "table",
          headers: ["", "Content ID claim", "Copyright strike"],
          rows: [
            ["What triggers it", "An automatic match against a rights owner's reference file", "A legal removal request from the rights owner"],
            ["What happens", "Owner's policy: track, monetise (sometimes with revenue sharing) or block, which can vary by country", "The video is removed and a strike is added to your channel"],
            ["Account risk", "YouTube says a claim typically doesn't result in a strike", "3 strikes in 90 days and the channel is subject to termination"],
            ["Your options", "Dispute if you have the rights, an exception applies, or it's a misidentification", "Wait for expiry, ask for a retraction, or file a counter notification"],
          ],
        },
        {
          type: "paragraph",
          text: "YouTube's Content ID page notes that claimants usually choose to track or monetise videos rather than block them. Its dispute page sets out the timeline: the claimant has 30 days to respond to a dispute, after which the claim expires. If they reject it, you can appeal, and they then have 7 days. Crediting the artist, owning a copy of the song, or not monetising your video are not valid dispute reasons. Disputes cannot be cancelled once submitted, and a claimant can file a removal request during a dispute, which can lead to a strike. So only dispute when you genuinely hold the rights.",
          links: [
            { text: "Content ID page", href: "https://support.google.com/youtube/answer/2797370" },
            { text: "dispute page", href: "https://support.google.com/youtube/answer/2797454" },
          ],
        },
        {
          type: "paragraph",
          text: "According to YouTube's copyright strike page, a strike expires after 90 days if you complete Copyright School and have fewer than 3 strikes. Scheduled removals give you 7 days to delete the video yourself and avoid the strike. Claims also affect money: Shorts over 1 minute with claimed content can't be monetised, and each music track in a Short reduces the creator pool portion of that Short's revenue. Our YouTube monetization guide explains how revenue sharing works more broadly.",
          links: [
            { text: "copyright strike page", href: "https://support.google.com/youtube/answer/2814000" },
            { text: "YouTube monetization guide", href: "/blog/youtube-creator-monetization" },
          ],
        },
        { type: "heading", text: "Music on Instagram", id: "instagram-music" },
        {
          type: "paragraph",
          text: "If you switched to a business account and lost most of the music library, that is expected. Instagram's music help page says certain business accounts and certain types of posts do not have access to the library, broadly to keep licensed music from being used commercially. It says those accounts may be able to use Meta's Sound Collection, described as 14,000+ royalty-free songs and sounds for Reels and Stories, including commercial uses such as ads. A search snippet of the Sound Collection terms suggests use is limited to Meta's own products, so check the terms before using those tracks on YouTube or elsewhere.",
          links: [{ text: "music help page", href: "https://www.facebook.com/help/instagram/402084904469945?locale=en_US" }],
        },
        {
          type: "paragraph",
          text: "Instagram's 2020 music guidelines also say that the more full-length recorded tracks a video contains, the more likely it may be limited, and that recorded audio should not be the primary purpose of the video. Live performances are allowed. Videos that break these rules may be muted or blocked, whatever your account type.",
          links: [{ text: "2020 music guidelines", href: "https://about.instagram.com/blog/announcements/updates-and-guidelines-for-including-music-in-video" }],
        },
        { type: "heading", text: "Music in brand deals and UGC", id: "brand-deals-music" },
        {
          type: "paragraph",
          text: "This is where creators get into the most trouble. Instagram restricts the music library on some business accounts precisely to keep licensed music out of commercial use. A paid partnership is commercial content, so adding a trending licensed song to a sponsored Reel is risky for you and the brand, even if the app lets you pick it. Instead:",
        },
        {
          type: "list",
          items: [
            "Agree the music in the brief: library track, a track the brand has licensed, or original audio.",
            "Get written confirmation from the brand that the chosen track is cleared for this post, on these platforms, for this period.",
            "If the brand plans to boost the post or run it as an ad through whitelisting, confirm the licence covers paid ads too.",
            "Keep a version without music, or with a voiceover-only mix, so the brand can add its own licensed track.",
          ],
        },
        {
          type: "paragraph",
          text: "UGC needs extra care. If you are delivering videos for a brand to run as ads, the brand needs a commercial licence for any music in them, and your platform library permission does not transfer to the brand. Many brands prefer music-free files. Our guide on how to become a UGC creator in India covers delivery formats, and our guide to creator usage rights explains how ad rights and duration are agreed. For how brands put your content into ads, see whitelisting for creators.",
          links: [
            { text: "how to become a UGC creator in India", href: "/blog/how-to-become-a-ugc-creator-india" },
            { text: "creator usage rights", href: "/blog/creator-usage-rights" },
            { text: "whitelisting for creators", href: "/blog/creator-whitelisting" },
          ],
        },
        { type: "heading", text: "Keep a licence record", id: "licence-record" },
        {
          type: "paragraph",
          text: "If a claim arrives a year later, you need to prove where the track came from. Keep one row per track, plus a screenshot or PDF of the licence page on the day you downloaded it, in the same folder system you use for project files.",
          links: [{ text: "folder system", href: "/blog/creator-file-management" }],
        },
        {
          type: "template",
          label: "Music licence log",
          text: "Track title | Artist | Source (library / site / brand) | Licence type (YouTube Audio Library, CC BY, Sound Collection, paid stock, brand-supplied) | Attribution required? (exact credit text) | Commercial / ad use allowed? | Platforms covered | Licence or download ID | Date downloaded | Proof saved (file name) | Used in (video link, date) | Brand approval (email date, if sponsored)",
        },
        { type: "heading", text: "What to do if your video is claimed or muted", id: "if-claimed" },
        {
          type: "list",
          items: [
            "Read the claim or notice first: which track, which timestamp, and what the owner's policy is (track, monetise or block).",
            "Check your licence log. If you have a valid licence, dispute with the evidence and reference the licence ID.",
            "If you don't have the rights, don't dispute. Check the editing options YouTube Studio offers on the claim, or replace the audio; on Instagram, swap in a Sound Collection track or reupload without it.",
            "For a strike, don't upload more risky content while it is active. Complete Copyright School and review your music sources.",
            "For a sponsored post, tell the brand immediately and agree on a fix together.",
          ],
        },
        {
          type: "paragraph",
          text: "If a claim involves a large sum or a brand contract, that is the point to get advice from a lawyer rather than relying on platform tools. The steps in protecting your videos from reuploads also apply when someone wrongly claims your own audio.",
          links: [{ text: "protecting your videos from reuploads", href: "/blog/protect-videos-from-reuploads" }],
        },
        { type: "heading", text: "Conclusion", id: "conclusion" },
        {
          type: "paragraph",
          text: "No track is safe everywhere. What matters is whether you have permission for this platform, this use and, for brand work, commercial use. Use YouTube's Audio Library and credit Creative Commons artists, use Instagram's library for personal posts and the Sound Collection where the library isn't available, and agree music in writing for every paid collaboration. A simple licence log turns a scary claim into a five-minute dispute.",
        },
      ],
      faqs: [
        {
          question: "Can I use a Bollywood song in my Reel if I give credit?",
          answer:
            "Credit alone does not give you permission. If the song is in Instagram's library for your account, you can use it for personal posts under Instagram's rules. For sponsored posts or ads, you need a licence covering commercial use, usually arranged by the brand.",
        },
        {
          question: "Are \"no copyright music\" channels on YouTube safe to use?",
          answer:
            "Not automatically. YouTube says it isn't responsible for royalty-free music from other channels or libraries. Check who owns the track, read the actual licence, and keep proof. If you can't find clear terms, use YouTube's Audio Library instead.",
        },
        {
          question: "Can I use my own voice singing a famous song?",
          answer:
            "Singing it yourself avoids the sound recording copyright, but the composition and lyrics are still protected. Covers can still be claimed, so treat them like any other licensed music for brand work.",
        },
        {
          question: "Does a Content ID claim hurt my channel standing?",
          answer:
            "YouTube says a claim typically doesn't result in a copyright strike. It can still block the video or send its revenue to the rights owner, depending on the owner's policy.",
        },
      ],
    },
  {
      slug: "how-to-start-a-podcast-creator-india",
      category: "Creator Resources",
      title: "How to Start a Podcast as a Content Creator: Equipment, Formats and First Episodes",
      seoTitle: "How to Start a Podcast in India: A Creator's Guide",
      excerpt:
        "A practical podcast starter guide for Indian creators: choosing a format, equipment tiers, recording at home, YouTube and Spotify distribution, and a six-episode launch plan.",
      metaDescription:
        "Start a podcast as a creator in India: pick a format, choose phone, USB or XLR gear, set up YouTube podcasts and RSS, plan six launch episodes and pitch guests.",
      author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
      publishedAt: "2026-11-10",
      lastReviewed: "November 2026",
      readingTime: "10 min read",
      hero: {
        src: "/blog/creator-resources/how-to-start-a-podcast-creator-india.svg",
        alt: "Illustration of a podcast setup path from phone and lavalier mic to USB mic to XLR mic with interface, leading to YouTube, Spotify and Apple Podcasts",
      },
      tags: ["how to start a podcast", "podcast in India", "video podcast", "podcast equipment", "YouTube podcasts", "podcast launch plan", "creator podcast"],
      related: ["content-repurposing-for-creators", "creator-burnout-india", "creator-media-kit", "creator-disclosure-guide", "turn-long-video-into-short-form-content", "creator-content-series"],
      body: [
        {
          type: "paragraph",
          text: "You already make Reels or YouTube videos, and long conversations keep coming up in your comments: \"do a full episode on this\". A podcast can give those ideas room, but it also adds a weekly production job. This guide helps you decide if it fits, pick a format and gear you can afford, publish in the right places, and plan your first six episodes before you hit record.",
        },
        { type: "heading", text: "Quick answer", id: "quick-answer" },
        {
          type: "paragraph",
          text: "To start a podcast as a creator in India, pick one format you can sustain (solo, interview, co-hosted, narrative, Q&A or bilingual), record with what you have (a phone and a clip-on lavalier mic is enough to begin), and treat the room as seriously as the mic. Publish video episodes as a podcast playlist in YouTube Studio, and use a host with an RSS feed for Spotify and Apple Podcasts. Plan six episodes before launch, clip each one for Reels and Shorts, and disclose every paid segment.",
        },
        { type: "heading", text: "Should you start a podcast?", id: "should-you-start" },
        {
          type: "paragraph",
          text: "A podcast works best when it extends what your audience already comes to you for. A personal finance creator can go deeper on one money question per episode. A Marathi food creator can sit down with home cooks and small restaurant owners. A podcast that has nothing to do with your existing content means building a second audience from zero, which is a much bigger job.",
        },
        {
          type: "list",
          items: [
            "Good fit: your best-performing posts raise questions you can't answer in 60 seconds.",
            "Good fit: you have access to interesting people (experts, peers, local business owners) your audience wants to hear from.",
            "Good fit: you enjoy talking at length and can keep a conversation on track.",
            "Wait: you are already struggling to keep up with your current posting schedule.",
            "Wait: you have no idea what episode 7 would be about.",
          ],
        },
        { type: "subheading", text: "Video podcast or audio-only?" },
        {
          type: "paragraph",
          text: "If your audience already watches you on YouTube or Instagram, a video podcast is usually the natural choice: it lives on the platform where people already find you, and every episode gives you clips for short-form. Audio-only is cheaper and easier to record, and suits narrative or storytelling shows and listeners who tune in while commuting or doing chores. Many creators record video and also publish the audio through an RSS feed, so they don't have to choose.",
        },
        { type: "heading", text: "Podcast formats and which one fits you", id: "podcast-formats" },
        {
          type: "table",
          headers: ["Format", "Best for", "Effort", "Watch out for"],
          rows: [
            ["Solo", "Educators, explainers, opinion creators", "Low setup, high prep", "Rambling; script an outline, not every word"],
            ["Interview", "Creators with access to guests", "Medium; guest scheduling takes time", "Depends on guests showing up; keep a backlog"],
            ["Co-hosted", "Friends, partners, duos with natural chemistry", "Medium", "Inside jokes that exclude listeners; agree roles and revenue split in writing"],
            ["Narrative / storytelling", "History, true stories, local culture", "High; research and editing heavy", "Hard to sustain weekly; consider seasons"],
            ["Q&A / community", "Creators with active comments and DMs", "Low to medium", "Needs a steady flow of questions; never share a follower's details without consent"],
            ["Bilingual / Hinglish", "Creators whose audience mixes languages, such as Hindi-English or Tamil-English", "Same as base format", "Pick a consistent language mix so titles and descriptions match what listeners hear"],
          ],
        },
        {
          type: "paragraph",
          text: "If you are unsure, start with a solo or Q&A format for the first few episodes. You control the schedule, and you learn how you sound on long-form before you have a guest's time on the line.",
        },
        { type: "heading", text: "Podcast equipment: three tiers", id: "podcast-equipment" },
        {
          type: "paragraph",
          text: "Prices change and vary by city and seller, so compare current listings yourself. What matters is matching the tier to your stage. Listeners forgive average video far more easily than echoey or muffled audio.",
        },
        {
          type: "table",
          headers: ["Tier", "What you need", "Good for", "Limits"],
          rows: [
            ["1. Phone + lavalier", "Your phone, a clip-on lav mic (wired or wireless), a stand or tripod", "Solo episodes, testing the idea, recording on the move", "One lav per person; two people need two mics or a dual-receiver kit"],
            ["2. USB microphone", "A USB mic plugged into a laptop, headphones, a mic arm or desk stand", "Solo and remote interviews from a desk", "Usually one mic per computer; harder for two people in one room"],
            ["3. XLR mic + audio interface", "XLR microphones, an audio interface or recorder with enough inputs, cables, stands, headphones", "In-person co-hosted shows and regular guests", "More setup, more to learn, more cost"],
          ],
        },
        {
          type: "paragraph",
          text: "For video, the phone camera you already shoot Reels on is fine to start. Add a second phone or camera for a wide shot only once audio is sorted. Buy the next tier when the current one is clearly holding you back, not before episode one.",
        },
        { type: "heading", text: "Room and acoustics on a budget", id: "room-acoustics" },
        {
          type: "list",
          items: [
            "Pick the softest room you have: a bedroom with a bed, curtains and a wardrobe beats an empty hall with tiled floors.",
            "Hang heavy curtains or bedsheets behind and beside you to cut echo. Rugs and cushions help too.",
            "Turn off ceiling fans and AC while recording if you can; their hum is hard to remove later. Record a few takes and listen back on headphones.",
            "Record at quieter times of day to avoid traffic, construction, pressure cookers and doorbells. Keep your phone on silent.",
            "Keep the mic close and consistent: a lav clipped on your chest or a USB mic a hand's width from your mouth.",
            "Record 30 seconds of silence in the room before you start. Many editors use it to reduce background noise.",
          ],
        },
        { type: "heading", text: "Recording remotely", id: "recording-remotely" },
        {
          type: "paragraph",
          text: "Guests in another city are the norm for interview shows. A normal video call recording will sound like a video call. The more reliable method is a \"double-ender\": you and your guest each record your own audio (and video) locally, then send the files to you. Remote recording platforms do this automatically, and a phone voice-memo app on the guest's side works as a free backup.",
        },
        {
          type: "list",
          items: [
            "Send the guest a short tech checklist: headphones on, quiet room, laptop plugged in, notifications off.",
            "Do a two-minute sound check and clap once at the start so the tracks are easy to line up.",
            "Ask permission before you record and confirm that the episode and clips will be published.",
          ],
        },
        { type: "heading", text: "A simple editing workflow", id: "editing-workflow" },
        {
          type: "list",
          items: [
            "Back up the raw files the same day.",
            "Do a rough cut: remove false starts, long pauses and anything the guest asked you to drop.",
            "Clean the audio: noise reduction, levels, and a gentle loudness pass so episodes sound consistent.",
            "Add a short intro and outro. Use only music you have the rights to.",
            "Mark three to five clip-worthy moments with timestamps while you edit.",
            "Export, write the title, description and chapters, and add captions.",
          ],
        },
        {
          type: "paragraph",
          text: "For intros and background tracks, read the licence terms of every track: \"royalty-free\" does not always mean free to use on every platform or in sponsored episodes.",
        },
        {
          type: "paragraph",
          text: "Captions make video episodes and clips easier to follow for people watching on mute and for viewers who are deaf or hard of hearing. Check auto-generated captions for names, numbers and Hinglish words before publishing.",
        },
        { type: "heading", text: "Where to publish: YouTube, Spotify and Apple", id: "distribution" },
        { type: "subheading", text: "YouTube podcasts" },
        {
          type: "paragraph",
          text: "According to YouTube Help, you can make a podcast in YouTube Studio in two ways: click Create, then New podcast, and choose a new playlist or set an existing playlist as a podcast; or go to Content, then Playlists, open a playlist's menu and set it as a podcast (some Help pages call this \"Add podcast features\"). You then add a square thumbnail. YouTube says only playlists of full episodes should be podcasts, not clips, and content you don't own isn't eligible.",
          links: [{ text: "According to YouTube Help", href: "https://support.google.com/youtube/answer/12751636?hl=en" }],
        },
        {
          type: "paragraph",
          text: "If you are audio-first, YouTube also accepts podcasts by RSS feed in select countries. As of November 2026, YouTube's list of countries for RSS podcast delivery includes India, and availability depends on the channel owner's location. In Studio, the path is Content, Podcasts, Details, RSS settings, then Connect to RSS feed. YouTube's RSS ingestion page notes that RSS-delivered podcasts appear only on YouTube and YouTube Music.",
          links: [
            { text: "YouTube's list of countries for RSS podcast delivery", href: "https://support.google.com/youtube/answer/14106258?hl=en" },
            { text: "YouTube's RSS ingestion page", href: "https://support.google.com/youtube/answer/13525207?hl=en" },
          ],
        },
        { type: "subheading", text: "Spotify for Creators" },
        {
          type: "paragraph",
          text: "Spotify for Creators (formerly Spotify for Podcasters, and before that Anchor) is Spotify's hosting and publishing tool. Be clear on one point: the Spotify Partner Program, which pays creators for video podcast consumption by Premium users, is not available in India. As of November 2026, Spotify's Partner Program page lists 56 markets across Europe, North America, Oceania and South America, and no market in Asia. You can still publish on Spotify to reach listeners; just don't plan income around that program. Check Spotify's help pages for current video upload support in your account.",
          links: [{ text: "Spotify's Partner Program page", href: "https://support.spotify.com/us/creators/article/spotify-partner-program/" }],
        },
        { type: "subheading", text: "Apple Podcasts" },
        {
          type: "paragraph",
          text: "Apple's podcast requirements say you need an Apple Podcasts Connect account to submit a show. Your RSS feed must follow RSS 2.0, be publicly accessible without a password, include the required tags, at least one episode and artwork, and use plain ASCII characters in filenames and URLs. Check Apple's current requirements for artwork size and any costs before you submit.",
          links: [{ text: "Apple's podcast requirements", href: "https://podcasters.apple.com/support/823-podcast-requirements" }],
        },
        {
          type: "paragraph",
          text: "A common setup: upload video episodes to YouTube as a podcast playlist, and publish audio through one host whose RSS feed you submit to Spotify, Apple Podcasts and other apps. Keep the show name, artwork and description the same everywhere.",
        },
        { type: "heading", text: "Plan your first six episodes", id: "first-episodes" },
        {
          type: "paragraph",
          text: "Launching with a plan matters more than launching with perfect gear. Write out six episodes before you publish one, and record at least three so a busy week doesn't break your schedule. Here is an illustrative plan for a hypothetical Hinglish personal finance creator; swap in your own niche. If you already run recurring formats, the same thinking from building a creator content series applies here.",
          links: [{ text: "building a creator content series", href: "/blog/creator-content-series" }],
        },
        {
          type: "table",
          headers: ["Episode", "Purpose", "Illustrative example"],
          rows: [
            ["1", "Why this show exists and who it's for", "\"Why I'm starting a money podcast for first-jobbers in Tier 2 cities\""],
            ["2", "Your strongest topic, done in depth", "The full version of your most-saved Reel"],
            ["3", "First guest or second voice", "A friend who just filed taxes for the first time"],
            ["4", "Audience questions", "Five DM questions answered properly"],
            ["5", "A practical walkthrough", "Building a monthly budget on screen"],
            ["6", "Guest with a different view", "A small business owner on irregular income"],
          ],
        },
        {
          type: "template",
          label: "Episode outline template",
          text: "Episode title:\nOne-line promise (what the listener walks away with):\nCold open (best 20-30 seconds, recorded or clipped later):\nIntro (who you are, what this episode covers, under 60 seconds):\nSegment 1:\nSegment 2:\nSegment 3:\nSponsored segment (if any, with disclosure line):\nTakeaway / summary:\nCall to action (subscribe, send a question, next episode):\nClip moments to mark (timestamps):\nLinks and credits for the description:",
        },
        { type: "heading", text: "Inviting guests", id: "guest-outreach" },
        {
          type: "paragraph",
          text: "Start with people one step ahead of your audience, not celebrities. Local experts, fellow creators in a nearby niche and small business owners often say yes when the request is specific and easy.",
        },
        {
          type: "template",
          label: "Guest outreach message",
          text: "Hi [Name],\n\nI'm [Your name], I make [topic] content for [audience] on [platform]. I'm starting a podcast called [Show name] and I'd love to have you on an episode about [specific topic], because [one line on why them].\n\nFormat: [video/audio], about [length], recorded [in person in city / remotely]. I'll share questions in advance, and you'll get the clips to post if you want them.\n\nWould a slot in the week of [dates] work? Happy to work around your schedule.\n\nThanks,\n[Name]\n[Links to your channel or profile]",
        },
        { type: "heading", text: "Staying consistent without burning out", id: "consistency" },
        {
          type: "paragraph",
          text: "Choose a cadence you can hold for months: weekly, fortnightly, or in seasons of eight to ten episodes with a break between them. Batch-record two or three episodes in one sitting and keep a buffer. If the podcast is squeezing your main content or your rest, our guide on creator burnout has a practical weekly rhythm you can adapt.",
          links: [{ text: "our guide on creator burnout", href: "/blog/creator-burnout-india" }],
        },
        { type: "heading", text: "Repurposing episodes into clips", id: "repurposing-clips" },
        {
          type: "paragraph",
          text: "Every episode should feed your short-form channels. Pull the moments you marked while editing, reframe them vertically, add captions, and give each clip its own hook in the first second. Our guide to content repurposing for creators covers the full system, and turning long videos into short-form content goes deeper on picking clips.",
          links: [
            { text: "content repurposing for creators", href: "/blog/content-repurposing-for-creators" },
            { text: "turning long videos into short-form content", href: "/blog/turn-long-video-into-short-form-content" },
          ],
        },
        { type: "heading", text: "Sponsorship basics for podcasters", id: "sponsorships" },
        {
          type: "paragraph",
          text: "Brands sponsor podcasts in a few common ways: a host-read segment, a dedicated episode, product integration in the conversation, or a package that bundles the episode with short-form clips. Brands will usually want to see a few episodes, who your listeners are, and how the podcast connects to your other channels. Add a podcast section to your creator media kit with your format, episode length, cadence and native analytics screenshots, and only take sponsors that fit what your listeners come for. When you reach out first, the steps in how to pitch brands as a creator work for podcast sponsors too.",
          links: [
            { text: "creator media kit", href: "/blog/creator-media-kit" },
            { text: "how to pitch brands as a creator", href: "/blog/how-to-pitch-brands-as-a-creator" },
          ],
        },
        {
          type: "paragraph",
          text: "Disclose every paid or gifted segment, out loud in the episode and in the description, and on any clips you post. The ASCI influencer guidelines put disclosure responsibility on both the advertiser and the influencer whenever there is a material connection such as money, free products or perks. Our creator disclosure guide shows wording you can use. For intro and background music, check the licence first; see music and copyright for creators. Publish transcripts or captions with every episode; our accessibility guide shows how.",
          links: [
            { text: "ASCI influencer guidelines", href: "https://www.ascionline.in/social/wp-content/uploads/2025/04/ASCI-Influencer-Guidelines.pdf" },
            { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }, { text: "music and copyright for creators", href: "/blog/music-for-reels-youtube-copyright" }, { text: "accessibility guide", href: "/blog/accessible-content-captions-for-creators" },
          ],
        },
        {
          type: "template",
          label: "Spoken disclosure line (example)",
          text: "\"This segment is a paid partnership with [Brand]. They paid for this part of the episode, but the opinions are mine.\"",
        },
        { type: "heading", text: "Conclusion", id: "conclusion" },
        {
          type: "paragraph",
          text: "Start a podcast because your audience wants more depth from you, not because everyone seems to have one. Pick one format, record with the gear you have, fix your room before you upgrade your mic, and publish where your audience already is. Plan six episodes, clip every one, and disclose every sponsor. Then judge it after a full season, not after episode two.",
        },
      ],
      faqs: [
        {
          question: "Can I start a podcast with just my phone?",
          answer:
            "Yes. A phone with a clip-on lavalier mic in a quiet, soft room is enough for solo episodes and early testing. Upgrade only when the phone setup is clearly limiting you, for example when you start recording two people in the same room.",
        },
        {
          question: "How long should my episodes be?",
          answer:
            "As long as the content holds up, and roughly consistent from episode to episode so listeners know what to expect. Check retention in YouTube Studio after a few episodes and cut sections where people drop off.",
        },
        {
          question: "Do I need a separate YouTube channel for my podcast?",
          answer:
            "Not necessarily. If the podcast serves the same audience as your main content, a podcast playlist on your existing channel keeps everything in one place. A separate channel makes more sense when the show targets a different audience or language.",
        },
        {
          question: "Can I use a clip from someone else's podcast or a film in my episode?",
          answer:
            "Be careful. YouTube says content you don't own isn't eligible for podcast playlists, and using others' clips or music can lead to copyright claims. This is general information, not legal advice; get permission or use licensed material.",
        },
      ],
    },
  {
      slug: "linkedin-for-creators-india",
      category: "Creator Resources",
      title: "LinkedIn for Creators: Build a Personal Brand and Find Professional Opportunities",
      seoTitle: "LinkedIn for Creators in India: Personal Brand Guide",
      excerpt:
        "How Indian creators can use LinkedIn after creator mode: profile setup, formats, a sustainable weekly plan, B2B and speaking opportunities, and the rules on pods and automation.",
      metaDescription:
        "LinkedIn for creators in India: what replaced creator mode, profile setup, post formats, a weekly plan, B2B brand and speaking opportunities, and rules to follow.",
      author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
      publishedAt: "2026-11-10",
      lastReviewed: "November 2026",
      readingTime: "8 min read",
      hero: {
        src: "/blog/creator-resources/linkedin-for-creators-india.svg",
        alt: "Illustration of a professional profile card with headline, Featured section and Follow button, linked to opportunities such as B2B collaborations, speaking, consulting and jobs",
      },
      tags: ["LinkedIn for creators", "LinkedIn personal brand", "LinkedIn creator mode", "B2B creators India", "LinkedIn newsletter", "professional opportunities"],
      related: ["how-to-build-a-creator-brand", "creator-thought-leadership", "creator-portfolio", "content-creator-career-india", "creator-newsletter-india", "content-repurposing-for-creators"],
      body: [
        {
          type: "paragraph",
          text: "Your Instagram or YouTube shows what you create. LinkedIn shows the people who hire, sponsor and book creators how you work. If you teach, explain finance or tech, design, or run your content like a business, LinkedIn can bring opportunities that rarely arrive through Reels DMs. This guide covers what changed with creator mode, how to set up your profile, what to post and how to keep it manageable.",
        },
        { type: "heading", text: "Quick answer", id: "quick-answer" },
        {
          type: "paragraph",
          text: "LinkedIn retired its creator mode toggle in 2024, but the tools it unlocked are still there: Follow as your main profile button, newsletters for all members, and LinkedIn Live for eligible accounts. To use LinkedIn as a creator, write a headline that says who you help and how, pin your best work in Featured, and post two or three times a week in formats you can sustain. Rewrite your Instagram or YouTube ideas for a professional audience rather than cross-posting, and avoid engagement pods and automation tools, which LinkedIn's policies prohibit.",
        },
        { type: "heading", text: "Who LinkedIn suits", id: "who-it-suits" },
        {
          type: "list",
          items: [
            "Educators and explainers: teachers, exam-prep and skills creators whose audience includes working professionals.",
            "B2B and SaaS-adjacent creators: marketing, sales, HR, product and startup content.",
            "Career creators: interview prep, salary talks, workplace advice.",
            "Finance, tech and design creators: niches where companies actively look for credible voices.",
            "Lifestyle, food, travel and beauty creators who want to show the business side: how you plan campaigns, report results and work with brand teams.",
          ],
        },
        {
          type: "paragraph",
          text: "That last group is easy to overlook. A Kannada food creator in Mysuru won't find their audience on LinkedIn, but they can reach the brand managers and agency teams who plan creator campaigns. LinkedIn is where your professional reputation lives, which builds on the work in how to build a creator brand.",
          links: [{ text: "how to build a creator brand", href: "/blog/how-to-build-a-creator-brand" }],
        },
        { type: "heading", text: "Creator mode is gone: what replaced it", id: "creator-mode" },
        {
          type: "paragraph",
          text: "Many guides still tell you to \"turn on creator mode\". That advice is out of date. According to LinkedIn Help, LinkedIn removed the creator mode on/off toggle (timing listed as March 2024) and removed profile hashtags beginning in February 2024. For people who had creator mode on, the Connect button changed to Follow and the About section moved to the top of the profile.",
          links: [{ text: "According to LinkedIn Help", href: "https://www.linkedin.com/help/linkedin/answer/a5999182" }],
        },
        {
          type: "list",
          items: [
            "Follow as primary action: LinkedIn says your primary button stays Follow unless you change it, and you can switch it to Connect.",
            "Sharing tools: if you meet the access criteria, you get tools such as LinkedIn Live, Audio Events and Newsletter.",
            "Analytics: creator analytics remain in your profile's Analytics section.",
          ],
        },
        { type: "heading", text: "Set up your profile for opportunities", id: "profile-setup" },
        {
          type: "list",
          items: [
            "Headline: say who you help and how, not just \"Content Creator\". For example: \"I explain personal finance in Hinglish for first-jobbers | YouTube + Instagram\".",
            "About: three short paragraphs. What you make and for whom, proof (formats, platforms, types of brands you've worked with, talks you've given), and what you're open to (collaborations, speaking, consulting, roles).",
            "Featured: pin your portfolio or website, a case study of a past collaboration, your newsletter and one strong post or video.",
            "Primary button: keep Follow if you want an audience; switch to Connect if you mostly want a network of peers and recruiters.",
            "Experience: list your creator work as a real role with outcomes you can show, not vague titles.",
            "Contact: add a business email so brand teams don't have to guess.",
          ],
        },
        {
          type: "paragraph",
          text: "Your Featured section is only as good as what it links to. If you don't have one yet, build a creator portfolio first, and consider a simple creator website as the home base you control.",
          links: [
            { text: "build a creator portfolio", href: "/blog/creator-portfolio" },
            { text: "a simple creator website", href: "/blog/how-to-build-a-creator-website" },
          ],
        },
        { type: "heading", text: "Content formats and what each is good for", id: "content-formats" },
        {
          type: "table",
          headers: ["Format", "Good for", "Who can use it"],
          rows: [
            ["Text post", "Opinions, lessons, behind-the-scenes stories", "All members"],
            ["Document / carousel post", "Frameworks, checklists, step-by-step guides", "All members"],
            ["Video", "Explainers, talking-head takes, clips from your YouTube or podcast", "All members"],
            ["Newsletter", "Long-form, recurring ideas that subscribers get notified about", "All members, per LinkedIn Help"],
            ["LinkedIn Live", "Q&As, panels, workshops", "Eligible accounts only (criteria below)"],
          ],
        },
        {
          type: "paragraph",
          text: "LinkedIn Help states that all LinkedIn members can create a newsletter. Pages have extra conditions. For LinkedIn Live, the published criteria are more than 150 followers and/or connections, good standing under the Professional Community Policies, and an account at least 30 days old. LinkedIn evaluates access; you don't apply. If you already write an email newsletter, our guide to a creator newsletter in India explains how to keep your own list as the main asset.",
          links: [
            { text: "all LinkedIn members can create a newsletter", href: "https://www.linkedin.com/help/linkedin/answer/a591266" },
            { text: "the published criteria", href: "https://www.linkedin.com/help/linkedin/answer/a568503" },
            { text: "a creator newsletter in India", href: "/blog/creator-newsletter-india" },
          ],
        },
        {
          type: "paragraph",
          text: "On video: TechCrunch reported in February 2025 that LinkedIn was expanding vertical video tools as video uploads grew. LinkedIn hasn't published an official launch post for a vertical video feed that we could verify, so treat video as worth testing rather than a guaranteed reach boost.",
          links: [{ text: "TechCrunch reported in February 2025", href: "https://techcrunch.com/2025/02/04/linkedin-amps-up-vertical-video-tools-as-uploads-jump-36" }],
        },
        { type: "heading", text: "A weekly posting plan you can keep", id: "weekly-plan" },
        {
          type: "paragraph",
          text: "LinkedIn rewards a steady voice more than volume. If you already create for another platform, plan about two to three hours a week. Here is an illustrative plan:",
        },
        {
          type: "table",
          headers: ["Day", "Task", "Time (illustrative)"],
          rows: [
            ["Monday", "Text post: one lesson from your work last week", "30 min"],
            ["Wednesday", "Document or carousel: a framework adapted from a high-performing Reel or video", "45 min"],
            ["Friday", "Short video or behind-the-scenes post about a project or collaboration", "30 min"],
            ["Daily, 15 min", "Thoughtful comments on posts by brand marketers, agency people and peers in your niche", "15 min"],
            ["Monthly", "Newsletter issue going deeper on one topic", "1-2 hours"],
          ],
        },
        {
          type: "paragraph",
          text: "Write comments that add something: a counterpoint, an example from your work, a question. That's how brand and agency teams start to recognise your name. For more on becoming known for ideas rather than just output, see creator thought leadership.",
          links: [{ text: "creator thought leadership", href: "/blog/creator-thought-leadership" }],
        },
        { type: "heading", text: "Professional opportunities LinkedIn can lead to", id: "opportunities" },
        {
          type: "list",
          items: [
            "Brand collaborations with B2B companies: SaaS tools, fintech apps, edtech platforms, and B2B services that want credible creators rather than the biggest follower count.",
            "Speaking: college fests, industry events, company workshops and webinars.",
            "Consulting and training: helping brands or teams with content strategy, short-form video or creator programmes.",
            "Freelance and jobs: content strategist, social media lead, video editor or scriptwriter roles.",
            "Agency roles: creator management, campaign planning and talent roles at influencer marketing agencies.",
          ],
        },
        {
          type: "paragraph",
          text: "If you're weighing full-time roles against independent creator work, our content creator career guide maps the paths. If you're thinking about selling your expertise as a service, see creator consulting services.",
          links: [
            { text: "content creator career guide", href: "/blog/content-creator-career-india" },
            { text: "creator consulting services", href: "/blog/creator-consulting-services" },
          ],
        },
        { type: "subheading", text: "LinkedIn's own creator programmes" },
        {
          type: "paragraph",
          text: "On 10 June 2026, LinkedIn announced tools for B2B brands working with creators: a Creator Marketplace inside Campaign Manager where brands can find vetted creators by topic (creators opt in and control partnership requests), Thought Leader Ads that let brands promote creator content featuring the brand, and its BrandWorks creative team. The announcement does not name the countries where these are available, and it doesn't mention India. Check your own LinkedIn account and LinkedIn Help for current availability rather than assuming you can opt in.",
          links: [{ text: "LinkedIn announced tools for B2B brands", href: "https://news.linkedin.com/2026/how-b2b-brands-can-drive-impact-with-creators-and-stronger-creat" }],
        },
        {
          type: "paragraph",
          text: "Top Voices, the blue badge, is invitation-only according to LinkedIn Help. LinkedIn Editorial vets members on an ongoing basis and can remove the badge. You can't apply for it, so don't build your plan around it.",
          links: [{ text: "invitation-only according to LinkedIn Help", href: "https://www.linkedin.com/help/linkedin/answer/a1368392" }],
        },
        { type: "heading", text: "Engagement pods and automation break LinkedIn's rules", id: "pods-and-automation" },
        {
          type: "paragraph",
          text: "LinkedIn's Professional Community Policies say you must not artificially increase engagement with your content or agree with others ahead of time to like or re-share each other's content. That describes engagement pods, including WhatsApp and Telegram groups that swap likes. The LinkedIn User Agreement (effective 3 November 2025) also bans using bots or other unauthorised automated methods to access the service or drive inauthentic engagement, and bans scraping with software, scripts or robots.",
          links: [
            { text: "Professional Community Policies", href: "https://www.linkedin.com/legal/professional-community-policies" },
            { text: "LinkedIn User Agreement", href: "https://www.linkedin.com/legal/user-agreement" },
          ],
        },
        {
          type: "list",
          items: [
            "Don't join like-swap or comment-swap groups.",
            "Don't use tools that auto-comment, auto-connect, auto-message or auto-like for you.",
            "Scheduling your own posts is different from automating engagement, but check that any third-party tool is permitted.",
            "Brand teams can usually tell when engagement on a post doesn't match the conversation; honest numbers are worth more.",
          ],
        },
        { type: "heading", text: "Repurpose from Instagram and YouTube without copy-paste", id: "repurposing" },
        {
          type: "paragraph",
          text: "Your Reels and videos are a great source of LinkedIn ideas, but a Reel caption dropped onto LinkedIn usually misses. Keep the idea and change the angle:",
        },
        {
          type: "table",
          headers: ["Original", "LinkedIn version"],
          rows: [
            ["Reel: \"3 budgeting mistakes in your first job\"", "Text post on what you learned making it, and the question your audience asked most"],
            ["YouTube tutorial on editing Reels", "Carousel: your five-step editing workflow, with a link to the full video in the comments or Featured"],
            ["Brand collaboration post", "Behind-the-scenes post on how you planned the brief and what the brand measured (only share results you're permitted to)"],
            ["Podcast episode", "Short clip plus three key takeaways in text"],
          ],
        },
        {
          type: "paragraph",
          text: "The full system for one idea across many platforms is in content repurposing for creators. If you also run a podcast, the guide on how to start a podcast covers clipping episodes.",
          links: [
            { text: "content repurposing for creators", href: "/blog/content-repurposing-for-creators" },
            { text: "how to start a podcast", href: "/blog/how-to-start-a-podcast-creator-india" },
          ],
        },
        { type: "heading", text: "Measuring results", id: "measuring-results" },
        {
          type: "paragraph",
          text: "Impressions are the least useful number here. Every month, check your creator analytics and keep a simple log of what actually moves you towards opportunities:",
        },
        {
          type: "list",
          items: [
            "Profile views and new followers from your target roles (marketers, founders, recruiters, event organisers).",
            "Inbound messages that turned into real conversations: collaborations, talks, consulting calls, interviews.",
            "Newsletter subscribers and replies.",
            "Which posts led to those conversations (ask people what brought them to you).",
            "Comments from people you'd like to work with, not just total comment counts.",
          ],
        },
        {
          type: "paragraph",
          text: "Your LinkedIn work also helps when you apply to creator networks: it's one of the things that shows what agencies ask for when you apply to a creator network, which is evidence that you're reliable to work with.",
          links: [{ text: "what agencies ask for when you apply to a creator network", href: "/for-creators" }],
        },
        { type: "heading", text: "Conclusion", id: "conclusion" },
        {
          type: "paragraph",
          text: "LinkedIn isn't where most Indian creators grow their audience, but it is where many brand, agency and event decisions get made. Set up a clear headline and Featured section, post two or three times a week in formats you can keep up, rewrite rather than cross-post, and stay away from pods and automation. Then measure conversations, not impressions.",
        },
      ],
      faqs: [
        {
          question: "Will posting on LinkedIn make my employer think I'm job-hunting?",
          answer:
            "Not if you post about your work and expertise rather than announcing you're looking. Keep your Open to Work settings as you want them, check your employer's social media policy, and avoid sharing confidential work details.",
        },
        {
          question: "Should I post in English or in my regional language?",
          answer:
            "Write in the language your target readers use for work. Many brand and agency teams read English, but a Hinglish or regional-language post can stand out if your niche and audience use it. You can test both and compare which brings better conversations.",
        },
        {
          question: "Do I need LinkedIn Premium as a creator?",
          answer:
            "No. Newsletters and the main posting formats are available to all members per LinkedIn Help. Consider Premium only if a specific feature solves a problem you have, and check its current features and price first.",
        },
        {
          question: "How many followers do I need before brands notice me on LinkedIn?",
          answer:
            "There's no set number. B2B brands often care more about whether your audience matches their buyers and whether your posts show expertise. A smaller, relevant following with real conversations can matter more than a large general one.",
        },
      ],
    },
  {
    slug: "gaming-content-creator-india",
    category: "Creator Resources",
    title: "How to Become a Gaming Content Creator in India: A Practical Starting Guide",
    seoTitle: "How to Become a Gaming Content Creator in India (2026)",
    excerpt: "A practical guide to starting gaming content in India: choosing a lane, phone-first setup, YouTube Live rules, community, brand deals and the real-money gaming ad ban.",
    metaDescription: "Start gaming content in India: pick a lane, set up on a phone first, meet YouTube Live rules, build community and avoid real-money gaming promotions after PROGA.",
    author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
    publishedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    hero: {
      src: "/blog/creator-resources/gaming-content-creator-india.svg",
      alt: "Illustration of a gaming creator's starting path: choose a lane, phone-first setup, go live on YouTube, build community, and a warning sign against promoting real-money games"
    },
    tags: ["Gaming Creators", "Live Streaming", "YouTube Live", "Online Gaming Act", "India"],
    related: [
      "youtube-live-monetization",
      "how-to-build-a-creator-community",
      "creator-copyright",
      "creator-advertising-rules",
      "creator-burnout-india",
      "regional-creator-growth-india"
    ],
    body: [
      {
        type: "paragraph",
        text: "You play every evening, your friends say your commentary is funnier than the game, and you want to turn that into a channel. The hard part is not hitting record: it is picking a lane you can sustain, meeting platform rules for live streaming, and avoiding brand deals that are now illegal in India. This guide walks through each step for a creator starting from a phone and a regular internet connection."
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To become a gaming content creator in India, choose one game and one format first (live streams, edited highlights, Shorts, guides, reviews or esports commentary), start with the phone you already have, and add a PC or capture setup only when your format needs it. For YouTube mobile live streaming you need a verified channel and at least 50 subscribers. Build a personality and community, not just gameplay. Never promote real-money games: the Online Gaming Act 2025 bans advertising them."
      },
      { type: "heading", text: "Choose your lane: game and format", id: "choose-your-lane" },
      {
        type: "paragraph",
        text: "\"Gaming\" is not a niche on its own. Viewers subscribe for a specific game, a specific kind of video, and a specific person. Decide the format first, because it decides your workload."
      },
      {
        type: "table",
        headers: ["Format", "What it involves", "Good fit if you"],
        rows: [
          ["Live streaming", "Long sessions, real-time chat, regular schedule", "Enjoy talking for hours and can commit to fixed time slots"],
          ["Edited highlights", "Record, cut the best moments, add commentary and captions", "Like editing and want videos that keep getting found later"],
          ["Shorts and Reels", "Single clutch moments, funny fails, quick tips", "Want to test ideas fast and grow discovery"],
          ["Guides and tutorials", "Settings, loadouts, beginner walkthroughs, patch explainers", "Explain clearly and enjoy research"],
          ["Reviews and news", "New releases, updates, device and game reviews", "Follow the industry and can post quickly"],
          ["Esports commentary", "Match breakdowns, predictions, tournament coverage", "Know a competitive scene deeply"]
        ]
      },
      {
        type: "paragraph",
        text: "Mobile, PC and console audiences behave differently. Mobile titles are widely played in India, so a phone-only channel is a realistic place to start, while PC and console content often needs more equipment and may reach a different audience. Avoid building everything around one title: games get big updates, lose players, or become unavailable, and a channel tied to a single game can stall overnight. Having a second game or a format that travels (guides, commentary, reactions) gives you room to move. If you are unsure how to split time between short and long videos, see our comparison of YouTube Shorts vs long-form.",
        links: [{ text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-vs-long-form" }]
      },
      { type: "heading", text: "Setup tiers: start with what you have", id: "setup-tiers" },
      {
        type: "list",
        items: [
          "Tier 1, phone only: your phone, a stable connection, built-in screen recording, wired earphones with a mic, and a free mobile editor. Enough for Shorts, highlights and mobile live streams.",
          "Tier 2, budget upgrades: a basic clip-on or USB mic (audio matters more than video), a phone cooler and stand, and a ring light if you show your face. Upgrade sound before anything else.",
          "Tier 3, PC or capture setup: a PC that can play and encode at the same time, free streaming software, and a capture card if you play on console. Add this when your format, not your excitement, demands it."
        ]
      },
      {
        type: "paragraph",
        text: "Do one test stream or recording at each tier before buying the next item. Note what actually bothered viewers or you (lag, echo, low volume, dropped frames) and fix that first."
      },
      { type: "heading", text: "YouTube Live requirements as of November 2026", id: "youtube-live-requirements" },
      {
        type: "paragraph",
        text: "According to the YouTube Help page on live streaming, you need to verify your channel and have had no live streaming restrictions in the past 90 days, and you must be at least 16 to stream. The mobile live streaming page adds more conditions:",
        links: [
          { text: "YouTube Help page on live streaming", href: "https://support.google.com/youtube/answer/2474026?hl=en" },
          { text: "mobile live streaming page", href: "https://support.google.com/youtube/answer/9228390?hl=en" }
        ]
      },
      {
        type: "list",
        items: [
          "At least 50 subscribers to go live from a phone. Channels with 50 to 999 subscribers face audience limits on mobile streams.",
          "A verified channel and no live streaming restrictions in the past three months.",
          "You may need to wait 24 hours before your first live stream, so enable it a day before you plan to go live.",
          "Strikes can temporarily block live streaming, so a copyright or guideline problem can cost you your schedule."
        ]
      },
      {
        type: "paragraph",
        text: "For viewer support, the Super Chat and Super Stickers page lists India among available locations. You must meet YouTube's fan-funding eligibility, live chat must be on, and these features are not available on streams that are age-restricted, unlisted, private or made for kids. Check the current thresholds in YouTube Studio under Earn. Our guides to YouTube Live monetization and to gifts, memberships and Super Thanks explain how these features fit together.",
        links: [
          { text: "Super Chat and Super Stickers page", href: "https://support.google.com/youtube/answer/9277801?hl=en" },
          { text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" },
          { text: "gifts, memberships and Super Thanks", href: "/blog/youtube-gifts-memberships-super-thanks" }
        ]
      },
      {
        type: "paragraph",
        text: "India also has local game-streaming apps alongside YouTube. If you consider one, read its current creator terms, payout rules and content policies directly on the app before committing your schedule to it."
      },
      { type: "heading", text: "How to stand out", id: "stand-out" },
      {
        type: "list",
        items: [
          "Persona: a consistent way you react, joke and talk. Viewers come back for the person, since many people play the same game.",
          "Commentary: explain why you made a move, not just what happened. Teaching while playing keeps new players watching.",
          "Language: Hindi, Hinglish, Tamil, Telugu, Bengali, Marathi or another language you speak naturally. Regional gaming commentary can serve viewers who prefer it; demand differs by language and game, so test rather than assume.",
          "Formats with a hook: weekly challenges, viewer-vs-creator matches, \"rank push\" series, or beginner coaching segments.",
          "Packaging: clear titles that name the game and the moment, and readable thumbnails for edited videos."
        ]
      },
      {
        type: "paragraph",
        text: "If you are thinking about streaming in more than one language, our regional creator growth guide covers how to plan language-first content without spreading yourself too thin.",
        links: [{ text: "regional creator growth guide", href: "/blog/regional-creator-growth-india" }]
      },
      { type: "heading", text: "Build a community, not just a viewer count", id: "community" },
      {
        type: "paragraph",
        text: "Gaming audiences are social. Regulars who chat during every stream, join your matches and share clips are what keep a channel alive through slow weeks. A Discord server or WhatsApp community gives them a place to talk between streams, and channel memberships can later offer perks such as member-only streams or badges. Start small: one announcement channel, one chat channel, and clear rules. Our guide on how to build a creator community covers structure and moderation in detail.",
        links: [{ text: "how to build a creator community", href: "/blog/how-to-build-a-creator-community" }]
      },
      { type: "heading", text: "Safety: minors in chat and moderation", id: "safety-moderation" },
      {
        type: "list",
        items: [
          "Assume some viewers are minors. Keep language, jokes and requests appropriate, and never ask viewers for personal details, phone numbers or locations.",
          "Do not move young viewers into private chats or DMs. Keep interactions in public, moderated spaces.",
          "Appoint trusted moderators, set blocked words, and use slow mode during busy streams.",
          "Protect yourself too: hide your location in the background, avoid showing your screen while logged into accounts, and never stream personal notifications.",
          "Write chat rules once and pin them, so moderation is consistent rather than personal."
        ]
      },
      {
        type: "paragraph",
        text: "For a fuller setup of filters, moderator roles and handling abuse, see our creator content moderation guide.",
        links: [{ text: "creator content moderation guide", href: "/blog/creator-content-moderation" }]
      },
      { type: "heading", text: "Brand deals for gaming creators", id: "brand-deals" },
      {
        type: "paragraph",
        text: "Gaming creators can work with game publishers, device and accessory brands, telecom and internet providers, energy drinks and snacks, apparel and many non-gaming brands that want a young, engaged audience. Brands typically look at how well your audience matches theirs and how you present products, not only your follower count. A short media kit with your games, languages, stream schedule and audience basics helps. Whatever you promote, disclose it clearly; our creator advertising rules guide covers the basics of ASCI disclosure in India.",
        links: [{ text: "creator advertising rules guide", href: "/blog/creator-advertising-rules" }]
      },
      { type: "heading", text: "Legal warning: real-money gaming promotions", id: "real-money-gaming-warning" },
      {
        type: "paragraph",
        text: "This section is general information, not legal advice. If you are unsure about a specific offer, speak to a lawyer before agreeing."
      },
      {
        type: "paragraph",
        text: "The Promotion and Regulation of Online Gaming Act, 2025 was passed by Parliament in August 2025 and received presidential assent on 22 August 2025. According to the PRS Legislative Research summary, it bans offering online money games (whether based on skill, chance or both), bans advertising them, and bans facilitating payments for them, while promoting e-sports and online social games. PRS lists the penalty for advertising as up to two years in prison and/or a fine of up to Rs 50 lakh.",
        links: [{ text: "PRS Legislative Research summary", href: "https://prsindia.org/billtrack/the-promotion-and-regulation-of-online-gaming-bill-2025" }]
      },
      {
        type: "list",
        items: [
          "Law firms read the advertising ban as reaching influencers, agencies and platforms, not only the gaming companies themselves.",
          "Dates in force are reported by law firms and news coverage as 1 October 2025 for the Act, with the Online Gaming Rules, 2026 notified on 22 April 2026 and in force from 1 May 2026. We could not verify these dates against the official Gazette, so check current status before relying on them.",
          "Separately, the Ministry of Information and Broadcasting issued an advisory on 21 March 2024 asking celebrities and influencers to stop promoting offshore online betting and gambling platforms, including surrogate ads, and warning of action under the Consumer Protection Act, 2019.",
          "An ASCI disclaimer or #ad label does not make a real-money game promotion acceptable. Disclosure rules apply to legal products; they do not legalise banned ones."
        ]
      },
      {
        type: "paragraph",
        text: "In practice: decline any promotion for fantasy sports played for cash, rummy or poker for stakes, betting or gambling apps, and \"surrogate\" brands that point to them, even if the brief calls it a free-to-play version or a news site. Free-to-play games and e-sports content are not covered by this ban. Read the MIB advisory coverage on News On AIR for the 2024 position.",
        links: [{ text: "MIB advisory coverage on News On AIR", href: "https://newsonair.gov.in/mib-announces-guidelines-for-online-betting-and-gambling-platforms-warns-social-media-influencers" }]
      },
      {
        type: "template",
        label: "Declining a real-money gaming offer",
        text: "Hi [Name],\n\nThanks for thinking of me. I don't promote real-money gaming, betting or related apps on my channels, so I'll pass on this one. I'd be happy to look at future campaigns for free-to-play games, accessories or other products that fit my audience.\n\nThanks,\n[Your name]"
      },
      { type: "heading", text: "Copyright: game footage and music", id: "copyright" },
      {
        type: "paragraph",
        text: "Games are copyrighted works, and so is the music inside them. Some publishers publish their own policies on gameplay videos and streams, and terms differ from game to game. Check the publisher's policy for each game you cover, and add your own commentary or editing rather than uploading raw footage. Music is the most common source of trouble: background tracks you play during a stream can trigger claims. Our creator copyright guide explains the basics, and our guide to music for Reels and YouTube covers what is safer to use and how claims and strikes differ.",
        links: [
          { text: "creator copyright guide", href: "/blog/creator-copyright" },
          { text: "music for Reels and YouTube", href: "/blog/music-for-reels-youtube-copyright" }
        ]
      },
      { type: "heading", text: "Avoiding burnout from streaming schedules", id: "burnout" },
      {
        type: "paragraph",
        text: "Long late-night streams, a chat that expects you every day, and the pressure to keep up with every update make gaming one of the easiest niches to burn out in. Pick a schedule you can keep for months, such as three fixed nights a week, rather than daily streams you will abandon. Batch-edit highlights from each stream so one session feeds several uploads, take announced breaks, and protect your sleep and eyesight. Our guide to creator burnout in India has a fuller plan.",
        links: [{ text: "creator burnout in India", href: "/blog/creator-burnout-india" }]
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start narrow: one game, one format, the phone you own, and a schedule you can keep. Check YouTube's live requirements before announcing your first stream, build a moderated community early, and judge brand offers on fit and legality. The single clearest rule in Indian gaming content right now is simple: do not promote real-money games or betting, whatever the fee."
      }
    ],
    faqs: [
      {
        question: "Do I need to show my face to grow a gaming channel?",
        answer: "No. Many gaming creators use only voice and gameplay. A face cam can help viewers connect during streams, but clear audio, a recognisable voice and good commentary matter more. You can add a camera later if your format benefits from reactions."
      },
      {
        question: "Can I stream a game I bought on someone else's account or a pirated copy?",
        answer: "Avoid it. Streaming pirated or shared-account games can break the game's terms and platform rules, and may lead to claims or account action. Use your own legitimate copy and check the publisher's content policy."
      },
      {
        question: "Is promoting an e-sports tournament or a free-to-play game allowed?",
        answer: "Generally, yes. The Online Gaming Act 2025 targets online money games and promotes e-sports and social games. Check that the tournament or game does not involve paid entry for cash prizes or links to betting, disclose the collaboration clearly, and ask a lawyer if the structure is unclear."
      },
      {
        question: "Should I stream in Hindi or English?",
        answer: "Stream in the language you can speak most naturally for hours. Hinglish and regional languages can work well for audiences who prefer them, but demand differs by game and language. Try a few streams or Shorts in each and compare watch time and chat activity before switching fully."
      }
    ]
  },
];

import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { AU_SRC } from "@/content/au-guides/shared";
import { SRC as GCC_SRC } from "@/content/gcc-guides/shared";

/**
 * Strategy, economics, measurement, AI and international execution (1610–1659). Most of the 50 topics already
 * had owners, so this module holds only the five gaps: incrementality (1630, with 1631, 1633 and 1646), hidden
 * costs and scope creep (1623, with 1620), an AI policy (1649, with 1640, 1642 and 1648), accessibility (1654)
 * and an international playbook (1659, with 1655–1658). See docs/brand-guides-1610-1659-audit.md.
 */
const PUBLISHED = "2026-10-10";
const REVIEWED = "October 2026";

const EXT = {
  iabMeasurement: "https://www.iab.com/guidelines/creator-economy-as-is-measurement-landscape/",
  googleLift: "https://support.google.com/google-ads/answer/12003020?hl=en",
  metaLift: "https://developers.facebook.com/docs/marketing-api/guides/lift-studies",
  searchConsole: "https://support.google.com/webmasters/answer/7576553?hl=en",
  wcag22: "https://www.w3.org/TR/WCAG22/",
  w3cMedia: "https://www.w3.org/WAI/media/av/",
  youtubeCaptions: "https://support.google.com/youtube/answer/2734796?hl=en",
  absDisability: "https://www.abs.gov.au/media-centre/media-releases/55-million-australians-have-disability",
  whoDisability: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health",
  // Added in batch 1660–1709
  c2paFaq: "https://c2pa.org/faqs/",
  caiTikTok: "https://contentauthenticity.org/blog/tiktok-joins-content-authenticity-efforts",
};

export const advancedPracticePosts: BlogPost[] = [
  // 1630 (+1631, 1633, 1646)
  {
    slug: "influencer-marketing-incrementality",
    category: "Campaign Strategy",
    title: "Influencer Marketing Incrementality: How to Measure the Sales Creators Actually Add",
    seoTitle: "Influencer Marketing Incrementality: How to Measure It",
    excerpt:
      "How to tell whether creator campaigns caused sales that wouldn't have happened anyway: holdout and geographic tests, platform lift studies, measuring without discount codes, using brand search demand as a signal, and comparing creator content with brand-made ads fairly.",
    metaDescription:
      "Measure influencer marketing incrementality: holdout and geo tests, lift studies, sales without discount codes, brand search signals and fair comparisons.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-10-14",
    lastReviewed: "October 2026",
    readingTime: "7 min read",
    tags: ["influencer marketing incrementality", "measure influencer sales without discount codes", "influencer brand lift", "geo test influencer marketing"],
    related: ["measuring-influencer-campaign-roi", "influencer-marketing-testing", "creator-attribution"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-incrementality.svg",
      alt: "Incrementality for creator campaigns: baseline, test and control areas, creators run in test areas only, compare outcomes, report the difference",
    },
    body: [
      {
        type: "paragraph",
        text: "Discount codes and tracked links show some of the sales creators influence, and miss many others. They also credit creators with sales from people who would have bought anyway. Incrementality asks a narrower question: what happened because of the campaign that wouldn't have happened without it? IAB's January 2026 review of creator measurement described an industry relying on 'fragmented metrics, siloed platforms, and proxy-based ROI'. This guide explains practical ways to get closer to the real effect.",
        links: [{ text: "January 2026 review of creator measurement", href: EXT.iabMeasurement }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To measure incrementality, compare a group exposed to creator activity with a similar group that wasn't, over the same period. For creators, the most practical method is usually a geographic test: run creators who reach one set of regions, hold back comparable regions, and compare sales or sign-ups. Platform lift studies can measure paid creator ads where you have access. Brand search demand and direct traffic are useful supporting signals. Codes remain helpful, but treat them as a floor, not the total.",
      },
      {
        type: "paragraph",
        text: "Untracked sharing on WhatsApp and in DMs is one reason tracked results undercount; see dark social and influencer marketing.",
        links: [
          { text: "dark social and influencer marketing", href: "/blog/dark-social-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Attribution vs incrementality", id: "definitions" },
      {
        type: "table",
        headers: ["", "Attribution", "Incrementality"],
        rows: [
          ["Question", "Which touchpoint gets credit for a sale?", "Did the campaign cause extra sales?"],
          ["Typical tools", "Codes, UTM links, platform reports", "Holdouts, geo tests, lift studies"],
          ["Weakness", "Over-credits loyal buyers; misses unlinked buyers", "Needs planning, scale and a control group"],
          ["Best use", "Comparing creators within a campaign", "Deciding whether to keep investing in the channel"],
        ],
      },
      {
        type: "paragraph",
        text: "How attribution models share credit is explained in influencer marketing attribution models, and setting up codes and links so attributed sales are counted once in how to track influencer sales.",
        links: [
          { text: "influencer marketing attribution models", href: "/blog/influencer-marketing-attribution-models" },
          { text: "how to track influencer sales", href: "/blog/track-influencer-sales" },
        ],
      },
      { type: "heading", text: "Methods that work for creator campaigns", id: "methods" },
      { type: "subheading", text: "1. Geographic tests" },
      {
        type: "paragraph",
        text: "Choose creators whose audiences are concentrated in particular cities, states or regions. Activate creators in test regions and hold back similar control regions. Compare the change in sales, sign-ups or store visits against each region's own baseline. This works best for brands that sell across many comparable areas and can see sales by area. It works poorly when creator audiences are national, because the control regions see the content too.",
      },
      { type: "subheading", text: "2. Platform lift studies for paid creator ads" },
      {
        type: "paragraph",
        text: "When creator content runs as ads (for example through partnership ads), platform lift studies randomly hold back part of the audience and compare conversions. Access is limited: Google says Conversion Lift isn't available to all accounts, and Meta's lift studies are arranged through a Meta representative. See Google's Conversion Lift overview and Meta's lift studies guide. Lift studies measure the paid layer, not the creator's organic posts.",
        links: [
          { text: "Conversion Lift overview", href: EXT.googleLift },
          { text: "lift studies guide", href: EXT.metaLift },
        ],
      },
      { type: "subheading", text: "3. Time-based comparisons" },
      {
        type: "paragraph",
        text: "Switching creator activity on and off over time (for example, alternating months) is easier but weaker, because seasonality, promotions and competitors also change. Use it only with a clear baseline and when nothing else changes in the same period.",
      },
      { type: "heading", text: "Measuring sales without discount codes", id: "without-codes" },
      {
        type: "list",
        items: [
          "Ask 'how did you hear about us?' at checkout or sign-up, with creator names as options",
          "Compare sales in the creator's main audience regions with your baseline",
          "Watch new-customer share, not just total orders",
          "Track direct and branded search traffic during and after posts",
          "Look at retailer or marketplace sales where your store isn't the only channel",
          "Use codes as a minimum: people who use a code were influenced; many influenced people won't use one",
        ],
      },
      {
        type: "paragraph",
        text: "Code and link set-up is covered in measuring influencer campaign ROI, and customer value by creator in measuring customer quality from influencer campaigns.",
        links: [
          { text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" },
          { text: "measuring customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" },
        ],
      },
      { type: "heading", text: "Brand search demand as a signal", id: "search" },
      {
        type: "paragraph",
        text: "If creators make people curious, some of them will search for your brand. Search Console's Performance report shows clicks and impressions for queries containing your brand name. Compare branded impressions during and after the campaign with the same weeks before it and with the previous year, and with regions where creators didn't run where possible. Search demand is a supporting signal, not proof: news coverage, ads and seasonality move it too. See Google's guide to the Performance report.",
        links: [{ text: "guide to the Performance report", href: EXT.searchConsole }],
      },
      { type: "heading", text: "Comparing creator content with brand-made ads fairly", id: "brand-ads" },
      {
        type: "list",
        items: [
          "Same objective, audience, placement and budget for both",
          "Run them at the same time, so the same market conditions apply",
          "Include the full cost of creator content (fee plus usage rights), not just media",
          "Compare on the outcome you care about (cost per new customer), not click-through rate alone",
          "Give both enough spend to reach a stable result before deciding",
          "Repeat the test; one round can be noise",
        ],
      },
      {
        type: "paragraph",
        text: "Running creator content as ads is covered in UGC for paid social.",
        links: [{ text: "UGC for paid social", href: "/blog/ugc-paid-social-testing" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration. A brand sells online in ten similar cities. It runs local creators in five cities for four weeks and none in the other five. New-customer orders rise 18% against baseline in the test cities and 6% in the control cities, so the estimated incremental lift is about 12 percentage points. Codes captured only part of the test-city increase. The brand repeats the test with the cities swapped before changing its budget.",
      },
      { type: "heading", text: "From lift to incremental ROI", id: "incremental-roi" },
      {
        type: "paragraph",
        text: "Continuing the hypothetical example: the test cities normally produce 2,000 new-customer orders in four weeks. An 18% rise adds 360 orders, but the control cities suggest 6% (120 orders) would have come anyway, so the estimate is about 240 incremental orders. Creator codes recorded 300 orders in the test cities.",
      },
      {
        type: "table",
        headers: ["Line (hypothetical)", "Attributed (codes)", "Incremental (test)"],
        rows: [
          ["Orders", "300", "240"],
          ["Contribution at ₹700 per order", "₹2,10,000", "₹1,68,000"],
          ["Total creator cost", "₹2,00,000", "₹2,00,000"],
          ["ROI = (contribution − cost) ÷ cost", "5%", "−16%"],
        ],
      },
      {
        type: "paragraph",
        text: "Here codes over-credited the creators, because some code users would have bought anyway. In other campaigns codes under-credit, because influenced buyers skip the code. Only the comparison tells you which. Before deciding, add the contribution from repeat purchases by these customers, and treat a single test as an estimate with a range rather than a precise figure. How to measure influencer marketing ROI shows the full cost and contribution calculation.",
        links: [{ text: "How to measure influencer marketing ROI", href: "/blog/measuring-influencer-campaign-roi#calculate-roi" }],
      },
      { type: "heading", text: "What research says about measuring ad effects", id: "research" },
      {
        type: "paragraph",
        text: "Two widely cited studies explain why tests matter. A 2019 Marketing Science paper compared observational measurement with 15 large randomized advertising experiments at Facebook and found the observational methods often failed to recover the experimental results, even with extensive demographic and behavioral data. An earlier study of 25 field experiments found returns to advertising so noisy that informative experiments could need over 10 million person-weeks. Neither study is about influencer marketing specifically, but both apply: attribution without a comparison group can be badly wrong, and small tests can only detect large effects.",
        links: [
          { text: "A 2019 Marketing Science paper", href: "https://www.kellogg.northwestern.edu/academics-research/research/detail/2019/a-comparison-of-approaches-to-advertising-measurement-evidence-from/" },
          { text: "An earlier study of 25 field experiments", href: "https://doi.org/10.1093/qje/qjv023" },
        ],
      },
      { type: "heading", text: "Limits to be honest about", id: "limits" },
      {
        type: "list",
        items: [
          "Small budgets rarely produce measurable lift; results can be noise",
          "Creator audiences cross regional borders, which weakens geo tests",
          "Long purchase cycles need longer measurement windows",
          "Incrementality tells you the channel's effect, not which individual post caused it",
        ],
      },
      {
        type: "paragraph",
        text: "Holdout results are also the best way to calibrate a marketing mix model; how to get creator data into one is covered in influencer marketing and marketing mix modeling.",
        links: [
          { text: "influencer marketing and marketing mix modeling", href: "/blog/influencer-marketing-mix-modeling" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating code sales as the whole effect, or as all incremental",
          "No control group, so seasonality looks like creator impact",
          "Changing prices or promotions during the test",
          "Comparing creator ads with brand ads on different budgets or audiences",
          "Deciding from one test",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Attribution helps you choose between creators; incrementality tells you whether the channel is worth funding. Start with a simple geo test or a well-planned holdout, use codes and search demand as supporting evidence, and repeat tests before making big budget decisions.",
      },
    ],
    faqs: [
      {
        question: "What is incrementality in influencer marketing?",
        answer:
          "It's the extra sales or sign-ups that happened because of the creator campaign, measured by comparing an exposed group with a similar unexposed group over the same period.",
      },
      {
        question: "How do I measure influencer sales without discount codes?",
        answer:
          "Use geographic or holdout comparisons, ask customers how they heard about you, track new-customer share and branded search, and treat code sales as a minimum rather than the total.",
      },
    ],
  },
  // 1649 (+1640, 1642, 1648)
  {
    slug: "influencer-marketing-ai-policy",
    category: "Campaign Strategy",
    title: "How to Build an Influencer Marketing AI Policy: Oversight, Briefs and Disclosure",
    seoTitle: "How to Build an Influencer Marketing AI Policy",
    excerpt:
      "A practical AI policy for brands working with creators: where AI is allowed in campaign operations, where humans must decide, how to check AI-written briefs, what creators may and may not generate with AI, platform labelling and disclosure, and a policy template you can adapt.",
    metaDescription:
      "Build an influencer marketing AI policy: human oversight, checking AI-written briefs, AI-generated creator content, platform labels and a policy template.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "5 min read",
    tags: ["influencer marketing AI policy", "AI in influencer marketing", "AI-generated influencer content disclosure", "human oversight AI marketing"],
    related: ["ai-ugc-marketing", "ai-influencer-campaign-management", "influencer-marketing-governance"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-ai-policy.svg",
      alt: "AI policy for creator campaigns: allowed uses, human decisions, brief checks, creator AI rules, labelling and disclosure",
    },
    body: [
      {
        type: "paragraph",
        text: "AI is already in most creator campaigns: drafting briefs, shortlisting creators, summarizing comments, editing video and, sometimes, generating faces, voices or entire posts. Without a policy, each team member and creator decides for themselves what's acceptable. This guide sets out what an influencer marketing AI policy should cover and gives a template. It's general guidance; check the rules in each market where you run campaigns.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A good AI policy lists where AI may be used (drafting, research, summaries, editing), where a named person must decide (creator selection, claims, contracts, payments, anything published), how AI-written briefs and reports are checked, what creators may generate with AI and how it must be labelled, and what's never allowed (fake testimonials, synthetic real people without consent, AI-generated results presented as real). Platforms require labels for realistic AI content, and advertising rules still apply: a business is responsible for its AI-generated ads.",
      },
      { type: "heading", text: "Where AI helps and where humans decide", id: "oversight" },
      {
        type: "table",
        headers: ["Task", "AI can help with", "A person must"],
        rows: [
          ["Creator discovery", "Searching, clustering, first shortlist", "Check audiences, content history and fit; make the final choice"],
          ["Briefs", "First drafts, structure, translations", "Check facts, claims, disclosure and tone"],
          ["Outreach", "Drafting messages", "Personalize and send; no automated mass messaging that misleads"],
          ["Content review", "Flagging missing disclosure, banned words", "Approve or reject"],
          ["Reporting", "Summarizing data and comments", "Check numbers against sources; write conclusions"],
          ["Contracts and payments", "Drafting checklists", "Decide terms; approve payments"],
        ],
      },
      {
        type: "paragraph",
        text: "Where AI tools fit in campaign management is covered in AI influencer campaign management.",
        links: [{ text: "AI influencer campaign management", href: "/blog/ai-influencer-campaign-management" }],
      },
      { type: "heading", text: "Checking AI-written briefs", id: "briefs" },
      {
        type: "list",
        items: [
          "Facts: prices, availability, ingredients and specifications match current sources",
          "Claims: every claim is one you can prove; no invented benefits, statistics or awards",
          "Rules: disclosure wording and any sector rules for the market are included",
          "Creators: the brief fits the creator's audience and format, not a generic persona",
          "Language: local terms, spelling and cultural references are right for the market",
          "Sameness: the brief leaves room for the creator's own angle",
        ],
      },
      {
        type: "paragraph",
        text: "Brief structure and a template are in influencer campaign briefs.",
        links: [{ text: "influencer campaign briefs", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "AI in creator content", id: "creator-content" },
      {
        type: "table",
        headers: ["Use", "Policy position (suggested)"],
        rows: [
          ["Editing, colour, captions, noise removal", "Allowed; no disclosure needed beyond normal rules"],
          ["AI backgrounds, effects or scenes", "Allowed if they don't misrepresent the product; label realistic AI as the platform requires"],
          ["AI voice or likeness of the creator", "Only with the creator's written consent and labelling"],
          ["Synthetic people presented as real customers", "Not allowed"],
          ["AI-altered product results (skin, fit, performance)", "Not allowed"],
          ["Fully virtual influencers", "Allowed only with clear disclosure that the persona isn't a real person"],
        ],
      },
      {
        type: "paragraph",
        text: "Platforms have their own rules: TikTok requires labels for realistic AI-generated content, YouTube asks creators to disclose realistic altered or synthetic content, and Meta applies AI labels and requires disclosure for photorealistic AI video and realistic audio. See TikTok's integrity and authenticity guidelines, YouTube's GenAI disclosure help and Meta's announcement.",
        links: [
          { text: "integrity and authenticity guidelines", href: GCC_SRC.tiktokAiLabel.url },
          { text: "GenAI disclosure help", href: GCC_SRC.youtubeAiDisclosure.url },
          { text: "Meta's announcement", href: GCC_SRC.metaAiDisclosure.url },
        ],
      },
      { type: "heading", text: "Provenance: recording how content was made", id: "provenance" },
      {
        type: "paragraph",
        text: "Labels tell the audience about AI; provenance records tell you. Content Credentials, the open standard from the C2PA, attach a signed record of how a file was created and edited, and the C2PA's FAQ notes that this metadata can be stripped, though recovery methods exist. TikTok became the first major social platform to support the standard in May 2024, using it to label AI-generated content. Platform support still varies, so don't rely on credentials surviving upload. Keep your own record instead:",
        links: [
          { text: "the C2PA's FAQ", href: EXT.c2paFaq },
          { text: "TikTok became the first major social platform", href: EXT.caiTikTok },
        ],
      },
      {
        type: "list",
        items: [
          "Ask creators to declare AI tools used on each deliverable (none, editing only, generated elements, synthetic voice or likeness)",
          "Keep original files, or Content Credentials where the creator's tools add them, alongside the approved version",
          "Record who approved the asset and against which claims list",
          "Before reusing content in ads, check the declaration still matches the edit you're running",
          "Treat AI-generated claims like any other claim: if a script or caption was drafted with AI, someone must check every product statement against evidence before approval",
        ],
      },
      { type: "heading", text: "Market rules to check", id: "markets" },
      {
        type: "list",
        items: [
          "India: 2026 amendments to the IT Rules bring realistic synthetic content into platforms' labelling duties; see our AI UGC guide",
          "UAE: AI depictions of national symbols or public figures need prior approval from the National Media Authority, and the UAE Media Council's FAQ says virtual advertisers need a permit and must disclose that they are virtual",
          "Australia: consumer law applies to AI content like any other advertising, and the TGA says advertisers are responsible for AI-generated therapeutic goods ads, including fake testimonials and deepfakes",
          "Everywhere: sponsorship disclosure is still required; an AI label doesn't replace an 'Ad' label",
        ],
      },
      {
        type: "paragraph",
        text: "Sources: our AI UGC guide on India's 2026 rules, Gulf Today on the UAE approval rule, our UAE advertiser permit guide and the TGA's social media guidance. Gulf-specific rules are in AI-generated influencer content in the GCC, and creator-side disclosure in AI disclosure for creators.",
        links: [
          { text: "AI UGC guide on India's 2026 rules", href: "/blog/ai-ugc-marketing#india-rules" },
          { text: "Gulf Today on the UAE approval rule", href: GCC_SRC.nmaAiApproval.url },
          { text: "UAE advertiser permit guide", href: "/blog/uae-advertiser-permit" },
          { text: "TGA's social media guidance", href: AU_SRC.tgaSocial.url },
          { text: "AI-generated influencer content in the GCC", href: "/blog/ai-generated-influencer-content-gcc" },
          { text: "AI disclosure for creators", href: "/blog/ai-disclosure-creators" },
        ],
      },
      { type: "heading", text: "Human expertise vs AI-generated content", id: "human" },
      {
        type: "paragraph",
        text: "Creators are hired for their judgement, experience and relationship with an audience. AI can help them produce content, but it can't use a product, form an honest opinion or stand behind a recommendation. A useful test: if the content claims experience (a review, a routine, a result), a real person must have had that experience. Fully AI-generated content can work for explainers or creative concepts, but it isn't a substitute for a creator's genuine view. The trade-offs are discussed in AI influencers vs human creators.",
        links: [{ text: "AI influencers vs human creators", href: "/blog/ai-influencers-vs-human-creators" }],
      },
      { type: "heading", text: "Policy template", id: "template" },
      {
        type: "template",
        label: "Influencer marketing AI policy (outline)",
        text: "1. Purpose and scope: teams, agencies and creators covered\n2. Approved tools: list; no confidential or personal data in tools not approved for it\n3. Allowed uses: drafting, research, summaries, editing\n4. Human decisions: creator selection, claims, contracts, payments, publishing (named owners)\n5. Checks: facts, claims, disclosure and market rules on any AI-assisted brief, report or post\n6. Creator AI use: allowed edits; consent for likeness or voice; platform labels\n7. Never allowed: fake testimonials, synthetic real people without consent, AI-altered results\n8. Disclosure: 'Ad' label plus platform AI labels where required\n9. Records: AI-use declaration, original files and approvals for each asset\n10. Review: every six months, or when platform or market rules change",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Sending AI-drafted briefs without checking claims",
          "Pasting creator contracts or customer data into unapproved tools",
          "Letting AI shortlists replace audience checks",
          "Using AI to 'improve' product results in creator content",
          "Assuming an AI label replaces sponsorship disclosure",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "An AI policy doesn't need to be long. It needs to say where AI helps, where people decide, what must be checked and what's never allowed, and it needs to be shared with agencies and creators. Review it as platform and market rules change. This is general guidance, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "Do influencers have to disclose AI-generated content?",
        answer:
          "Platforms including TikTok, YouTube and Meta require labels for realistic AI-generated or altered content, and some markets add their own rules. Sponsorship disclosure is required as well; an AI label doesn't replace it.",
      },
      {
        question: "What should an influencer marketing AI policy include?",
        answer:
          "Approved tools, allowed uses, decisions reserved for people, checks for AI-assisted work, rules for creators' AI use, what's never allowed, disclosure, records and a review date.",
      },
    ],
  },
  // 1654
  {
    slug: "accessible-influencer-campaigns",
    category: "Campaign Strategy",
    title: "Accessible Influencer Campaigns: Captions, Alt Text and Inclusive Creator Content",
    seoTitle: "Accessible Influencer Campaigns: A Practical Guide",
    excerpt:
      "How brands can make creator content accessible: captions and transcripts, alt text, readable on-screen text and colour contrast, avoiding flashing content, audio description, plain language, accessible links and landing pages, and how to brief and check creators.",
    metaDescription:
      "Make influencer campaigns accessible: captions, alt text, contrast, no flashing, audio description, plain language and how to brief and check creators.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-10-24",
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["accessible influencer marketing", "social media accessibility", "captions for creator content", "inclusive influencer campaigns"],
    related: ["influencer-content-quality-check", "influencer-campaign-brief", "influencer-content-approval"],
    hero: {
      src: "/blog/brand-guides/accessible-influencer-campaigns.svg",
      alt: "Accessible creator content: captions, alt text, readable text and contrast, no flashing, accessible links and landing pages",
    },
    body: [
      {
        type: "paragraph",
        text: "Many people in a creator's audience watch without sound, use screen readers, have low vision or process information differently. The WHO estimates 1.3 billion people, about 16% of the world's population, experience significant disability, and the ABS found 5.5 million Australians (21.4%) had disability in 2022. Accessible content reaches more of the audience you're paying for. This guide covers what to ask creators for and how to check it.",
        links: [
          { text: "The WHO estimates", href: EXT.whoDisability },
          { text: "the ABS found", href: EXT.absDisability },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Ask creators for accurate captions on every video, alt text on images, readable on-screen text with good contrast, no rapid flashing, important information spoken as well as shown, plain language, and descriptive links. Make sure the landing page works with a keyboard and a screen reader. Put these in the brief and the approval checklist, and allow time for captions to be checked, because automatic captions are often wrong on product names.",
      },
      { type: "heading", text: "What to ask for", id: "checklist" },
      {
        type: "table",
        headers: ["Element", "What good looks like", "Why"],
        rows: [
          ["Captions", "Accurate, synced, including product names and key sounds like [music] or [laughs]", "Viewers who are deaf or hard of hearing, or watching without sound"],
          ["On-screen text", "Large, high contrast, on screen long enough to read, not covered by app buttons", "Low vision; small screens"],
          ["Alt text", "Describes what matters in the image, including the product", "Screen reader users"],
          ["Spoken information", "Prices, offers and disclosure said aloud as well as shown", "Blind and low-vision viewers"],
          ["Flashing", "No more than three flashes in any one second", "Photosensitive viewers"],
          ["Language", "Plain words; explain jargon", "Cognitive accessibility; second-language viewers"],
          ["Links and landing pages", "Descriptive link text; pages usable by keyboard and screen reader", "The campaign shouldn't fail at the last step"],
        ],
      },
      {
        type: "paragraph",
        text: "These points follow the principles in WCAG 2.2, the W3C's accessibility standard, and its guidance on accessible audio and video. WCAG is written for web content, but its principles apply well to social posts.",
        links: [
          { text: "WCAG 2.2", href: EXT.wcag22 },
          { text: "guidance on accessible audio and video", href: EXT.w3cMedia },
        ],
      },
      { type: "heading", text: "Platform tools", id: "platforms" },
      {
        type: "list",
        items: [
          "YouTube: add or edit captions in YouTube Studio; check automatic captions before publishing",
          "Instagram: write custom alt text in the post's advanced or accessibility settings instead of relying on automatic descriptions",
          "TikTok: auto captions can be generated and edited before posting",
          "All platforms: menus change, so check each platform's help pages",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube's steps are in its help page on adding subtitles and captions.",
        links: [{ text: "adding subtitles and captions", href: EXT.youtubeCaptions }],
      },
      { type: "heading", text: "Accessible disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Disclosure must be clear to everyone. Say 'ad' or 'paid partnership' out loud in videos, keep the on-screen label long enough to read, and put the disclosure at the start of the caption rather than after a long block of hashtags. This also helps meet advertising rules in most markets; see influencer marketing compliance.",
        links: [{ text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Working with disabled creators", id: "creators" },
      {
        type: "paragraph",
        text: "Disabled creators bring expertise and audiences that brands often overlook. Brief them for their craft and audience, not only for awareness days; pay them the same way as other creators; ask what access needs they have for shoots, events and deadlines; and don't edit their content in ways that change how they present themselves.",
      },
      { type: "heading", text: "Adding accessibility to your workflow", id: "workflow" },
      {
        type: "list",
        items: [
          "Brief: include the accessibility checklist and budget time for captions",
          "Draft review: check captions, contrast, flashing and spoken information",
          "Before posting: alt text and caption text added",
          "Landing page: test with a keyboard and a screen reader",
          "Reporting: note completion rates with captions where platforms show it",
        ],
      },
      {
        type: "paragraph",
        text: "The wider review process is in creator content approval and influencer content quality checks.",
        links: [
          { text: "creator content approval", href: "/blog/influencer-content-approval" },
          { text: "influencer content quality checks", href: "/blog/influencer-content-quality-check" },
        ],
      },
      { type: "heading", text: "Copy-ready accessibility checklist for briefs", id: "brief-checklist" },
      {
        type: "template",
        label: "Accessibility requirements (add to the creator brief)",
        text: "Video\n[ ] Captions added and checked by a person, including product and brand names\n[ ] Captions in the language spoken; if the video mixes languages (for example Hinglish), captions match what's said\n[ ] Key information said aloud: product name, offer, price, disclosure\n[ ] On-screen text large, high contrast, on screen long enough to read, clear of app buttons\n[ ] No rapid flashing (no more than three flashes in any one second)\n\nImages and carousels\n[ ] Custom alt text describing the product and what matters in the image\n[ ] Text in images also written in the caption\n\nCaptions and copy\n[ ] Plain language; hashtags at the end, written in CamelCase (#SummerSale)\n[ ] Disclosure at the start, in words, not only as an icon or label\n[ ] Emojis used sparingly and not in place of words\n\nLinks and landing pages\n[ ] Link text says where it goes\n[ ] Landing page works with a keyboard and a screen reader, and on a small screen\n\nSign-off\n[ ] Checked at draft stage and again on the live post",
      },
      {
        type: "paragraph",
        text: "For regional-language campaigns, automatic captions are often weaker than for English, so budget time for a native speaker to correct them. Build these checks into the same review step as claims and disclosure; see how to check creator deliverables.",
        links: [
          { text: "how to check creator deliverables", href: "/blog/influencer-content-quality-check" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Publishing unchecked automatic captions",
          "Key details only in tiny on-screen text",
          "Offers and disclosure shown but never said",
          "Fast cuts and flashing effects in launch videos",
          "Accessible content leading to an inaccessible landing page",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Accessibility in creator campaigns is mostly about planning: put it in the brief, check it at approval, and make sure the landing page works. The result reaches more of the audience you're paying for and makes disclosure clearer for everyone.",
      },
    ],
    faqs: [
      {
        question: "Should influencer videos have captions?",
        answer:
          "Yes. Accurate captions help viewers who are deaf or hard of hearing and the many people who watch without sound. Check automatic captions, especially product names, before posting.",
      },
      {
        question: "What is alt text on Instagram?",
        answer:
          "A written description of an image for people using screen readers. Write custom alt text that describes what matters in the image, including the product, rather than relying on automatic descriptions.",
      },
    ],
  },
  // 1623 (+1620)
  {
    slug: "influencer-campaign-hidden-costs",
    category: "Campaign Strategy",
    title: "Influencer Campaign Scope Creep and Hidden Costs: How Brands Avoid Paying for What They Don't Use",
    seoTitle: "Influencer Campaign Hidden Costs and Scope Creep",
    excerpt:
      "Where influencer campaign budgets leak: extra revisions, rights you never use, exclusivity you don't need, product and shipping, reshoots, rush fees, agency extras and tax. How to scope deliverables to what you'll actually use, and how to stop scope creep on both sides.",
    metaDescription:
      "Avoid influencer campaign hidden costs and scope creep: unused deliverables and rights, revisions, exclusivity, reshoots, rush fees and agency extras.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-10-24",
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer campaign hidden costs", "influencer scope creep", "negotiate influencer deliverables", "influencer marketing budget"],
    related: ["influencer-marketing-budget", "how-much-to-pay-influencers", "influencer-usage-rights"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-hidden-costs.svg",
      alt: "Where creator budgets leak: unused deliverables and rights, revisions, exclusivity, product and reshoots, agency extras and tax",
    },
    body: [
      {
        type: "paragraph",
        text: "Influencer budgets rarely go wrong on the creator fee. They go wrong on everything around it: rights nobody uses, exclusivity nobody needed, extra rounds of edits, reshoots after a late change, product and shipping, and fees that weren't in the first quote. This guide lists the common hidden costs and how to scope campaigns so you pay for what you'll use. It's also fair to creators: scope creep usually costs them unpaid time.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Buy deliverables and rights for the uses you've planned, not every possible use. Agree the number of revision rounds, what counts as a change of brief, usage rights by channel and duration, exclusivity only where a competitor would really harm the campaign, and who pays for product, shipping, travel and reshoots. Get quotes itemized and ex tax. When the brand changes the brief after work starts, expect to pay for it.",
      },
      { type: "heading", text: "Where costs hide", id: "costs" },
      {
        type: "table",
        headers: ["Cost", "How it creeps in", "How to control it"],
        rows: [
          ["Unused deliverables", "Buying Stories, Reels and posts 'to be safe'", "Plan each deliverable's job; drop ones without one"],
          ["Unused usage rights", "Perpetual or all-channel rights by default", "License by channel and duration; extend later if content performs"],
          ["Exclusivity", "Broad category exclusivity for months", "Narrow it to direct competitors and the campaign window, or skip it"],
          ["Revisions", "Unlimited rounds; feedback from many people", "Agree rounds and one consolidated set of feedback"],
          ["Brief changes", "New messaging after filming", "Lock the brief; price changes separately"],
          ["Reshoots", "Late product or claim changes", "Approve claims and product before filming"],
          ["Product and logistics", "Shipping, returns, travel, venues", "Budget them as lines; decide who pays"],
          ["Rush fees", "Short notice for peak dates", "Book earlier; see campaign timelines"],
          ["Agency extras", "Reporting, management or tool fees added later", "Ask for every line in the first proposal"],
          ["Tax", "Fees quoted without GST or VAT", "Compare everything ex tax; know who is registered"],
        ],
      },
      { type: "heading", text: "Not paying for content you won't use", id: "unused" },
      {
        type: "list",
        items: [
          "Start from where content will run: the creator's channels, your channels, ads, product pages",
          "Buy the creator's posts you need, then option extra rights for content that performs",
          "Ask for raw footage only if someone will edit it",
          "Prefer fewer, better deliverables over bundles you won't amplify",
          "Write down what the brand will do with each asset; if nobody can, don't buy it",
        ],
      },
      {
        type: "paragraph",
        text: "Rights pricing is explained in influencer usage rights, and exclusivity in influencer exclusivity.",
        links: [
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer exclusivity", href: "/blog/influencer-exclusivity" },
        ],
      },
      { type: "heading", text: "Stopping scope creep", id: "scope-creep" },
      {
        type: "list",
        items: [
          "One brief, signed off before creators start",
          "A change log: every change after sign-off is recorded with its cost",
          "Revision rounds defined (for example, two rounds on facts and claims)",
          "One person consolidates brand feedback",
          "Creators raise out-of-scope requests before doing the work",
        ],
      },
      { type: "heading", text: "A quote checklist", id: "quote" },
      {
        type: "template",
        label: "Itemized quote (ask every creator or agency)",
        text: "Creator fee per deliverable (ex tax):\nUsage rights: channels, paid use, duration, territory:\nExclusivity: category, period, price:\nRevision rounds included:\nProduct, shipping, travel (who pays):\nProduction or editing:\nManagement or agency fee (basis):\nReporting and tools:\nRush or short-notice fees:\nTax (GST/VAT) and registration status:\nCancellation and change fees:",
      },
      {
        type: "paragraph",
        text: "Budget lines are covered in the influencer marketing budget guide, and fair fees in how much to pay influencers.",
        links: [
          { text: "influencer marketing budget guide", href: "/blog/influencer-marketing-budget" },
          { text: "how much to pay influencers", href: "/blog/how-much-to-pay-influencers" },
        ],
      },
      { type: "heading", text: "Influencer campaign scope of work template", id: "scope-of-work-template" },
      {
        type: "paragraph",
        text: "A scope of work (SOW) is the document that stops scope creep before it starts. It lists exactly what will be delivered, by when and by whom, so any extra request is visibly a change with its own price. Use it with a creator, or with an agency running several creators, and attach it to the contract.",
      },
      {
        type: "template",
        label: "Influencer campaign scope of work",
        text: "Campaign: [name]  |  Brand: [ ]  |  Creator or agency: [ ]  |  SOW version and date: [ ]\n\n1. OBJECTIVE AND KPI\n[What the campaign must achieve and the one number that decides success]\n\n2. DELIVERABLES\nItem | Platform | Format and length | Quantity | Language | Draft due | Go-live window\n[e.g. Reel | Instagram | 30-60s, 9:16 | 1 | Hindi | 12 Nov | 18-20 Nov]\n\n3. INCLUDED\nRevision rounds: [ ]  |  Raw files: [yes/no]  |  Stories or reminders: [ ]  |  Link in bio for [days]\n\n4. NOT INCLUDED (priced separately if requested)\n[Paid usage, whitelisting, extra cuts, additional platforms, reshoots after approval, rush delivery]\n\n5. USAGE AND EXCLUSIVITY\nOrganic reposting: [channels, period]  |  Paid usage: [channels, period, territory]  |  Exclusivity: [category, period]\n\n6. RESPONSIBILITIES\nBrand: product and claims by [date]; one approver; feedback within [x] working days\nCreator or agency: drafts on time; disclosure on every post; insights shared at [7/30] days\n\n7. FEES AND PAYMENT\nFee: ₹[ ] excluding GST; schedule: [advance / on approval / on posting]; TDS as applicable\n\n8. CHANGES\nAny change to deliverables, dates or usage needs written agreement and may change the fee.\n\nSigned: [brand] [creator or agency]",
      },
      {
        type: "paragraph",
        text: "The full set of contract clauses is in influencer marketing contracts, and agency-level SOW checks in the influencer marketing agency checklist.",
        links: [
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
          { text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing headline fees that include different things",
          "Perpetual rights 'just in case'",
          "Feedback from five people in five rounds",
          "Changing the product claim after filming",
          "Treating every creator request as scope creep; some are fair",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Hidden costs come from vague scope. Plan where each asset will be used, buy rights and exclusivity to match, limit revisions, lock the brief and get every quote itemized. Your budget goes further and creators get paid fairly for the work they do.",
      },
    ],
    faqs: [
      {
        question: "What are the hidden costs of influencer marketing?",
        answer:
          "Unused deliverables and usage rights, broad exclusivity, extra revisions, reshoots after brief changes, product and logistics, rush fees, agency extras and tax not shown in quotes.",
      },
      {
        question: "How do I avoid paying for influencer content I won't use?",
        answer:
          "Plan where each asset will run before negotiating, buy only those deliverables and rights, and keep an option to extend rights for content that performs.",
      },
    ],
  },
  // 1659 (+1655, 1656, 1657, 1658)
  {
    slug: "international-influencer-campaign-playbook",
    category: "Campaign Strategy",
    title: "International Influencer Campaigns: A Repeatable Playbook for Localization, Contracts, Payments and Reporting",
    seoTitle: "International Influencer Campaign Playbook",
    excerpt:
      "A repeatable process for running creator campaigns in several countries: what to keep global and what to localize, market rules and creator licensing, cross-border contracts, paying creators in multiple currencies, and one reporting framework that compares markets fairly.",
    metaDescription:
      "Run international influencer campaigns and creator partnerships: operating models, local discovery, market rules, cross-border contracts, payments and global reporting.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-10-15",
    lastReviewed: "October 2026",
    readingTime: "12 min read",
    tags: ["international influencer marketing", "multi-market creator partnerships", "influencer campaigns across time zones", "global influencer campaign", "cross-border influencer contracts", "localize influencer campaigns", "pay influencers in multiple currencies"],
    related: ["influencer-marketing-australia-india-uae", "influencer-marketing-contract", "influencer-marketing-payments"],
    hero: {
      src: "/blog/brand-guides/international-influencer-campaign-playbook.svg",
      alt: "International creator campaign playbook: global idea, local creators and rules, contracts per market, currency and tax, one reporting framework",
    },
    body: [
      {
        type: "paragraph",
        text: "Running creators in several countries multiplies everything: creators, languages, rules, contracts, currencies and reports. Brands that do it well keep a small set of things global and localize the rest through a repeatable process. This playbook sets out that process. Market-specific comparisons, such as Australia, India and the UAE side by side, are in our cross-market guide.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Keep the objective, product truth, creative idea, KPI definitions and reporting template global. Localize creator selection, briefs, claims, disclosure wording, contracts, payments, timing and channel mix. Check each market's advertising and creator-licensing rules before booking. Contract in a clear governing law and currency, name territories in usage rights, take tax advice on cross-border payments, and report market by market against the same definitions.",
      },
      { type: "heading", text: "Choosing which markets first", id: "market-priority" },
      {
        type: "paragraph",
        text: "Most brands can't enter every market at once, and spreading a first international budget thinly across five countries rarely teaches anything. Score candidate markets on a few factors you can evidence, start with one or two, and add markets as each proves it works.",
      },
      {
        type: "table",
        headers: ["Factor", "Questions to answer", "Evidence"],
        rows: [
          ["Demand", "Are people already searching for, buying or asking about the product there?", "Site traffic and orders by country, marketplace data, enquiries"],
          ["Ability to sell", "Can you price, deliver, take payment and serve customers locally?", "Logistics, payment and returns set up"],
          ["Rules", "Do product claims, sector rules or creator licensing make it slow or costly?", "Market rules checked; licences such as the UAE permit or Saudi Mawthooq"],
          ["Creator supply", "Are there enough creators with audiences in the market and your category?", "A test shortlist with audience-location data"],
          ["Team capacity", "Can someone brief, approve and moderate in the local language and time zone?", "Named owner and reviewer"],
          ["Cost to learn", "Can a test of several creators fit the budget, with fees, tax and currency costs?", "A costed test plan"],
        ],
      },
      {
        type: "paragraph",
        text: "Market guides: influencer marketing in the UAE, the UK, Australia and Singapore, the GCC playbook for Saudi Arabia, Qatar, Kuwait and Oman, and diaspora creators for reaching communities abroad.",
        links: [
          { text: "influencer marketing in the UAE", href: "/blog/influencer-marketing-uae" },
          { text: "the UK", href: "/blog/influencer-marketing-uk" },
          { text: "Australia", href: "/blog/influencer-marketing-australia" },
          { text: "Singapore", href: "/blog/influencer-marketing-singapore" },
          { text: "the GCC playbook", href: "/blog/gcc-influencer-marketing-playbook" },
          { text: "diaspora creators", href: "/blog/diaspora-influencer-marketing" },
        ],
      },
      {
        type: "paragraph",
        text: "If India is one of the markets, see how international brands can launch in India for city, language and channel choices specific to the Indian market.",
        links: [{ text: "how international brands can launch in India", href: "/blog/international-brands-influencer-marketing-india" }],
      },
      { type: "heading", text: "Global vs local", id: "localization" },
      {
        type: "table",
        headers: ["Keep global", "Localize"],
        rows: [
          ["Objective and KPI definitions", "Targets for each market"],
          ["Product truth and approved claims (adjusted per market rules)", "Wording, language and cultural references"],
          ["Creative idea", "Creators, formats and platforms"],
          ["Brand safety standards", "Disclosure wording and platform labels"],
          ["Reporting template", "Seasonal timing and posting times"],
          ["Rights and record-keeping system", "Contracts, currency and tax"],
        ],
      },
      {
        type: "paragraph",
        text: "Translate meaning, not words: a joke or claim that works in one market can confuse or mislead in another. Local creators usually adapt the idea better than a translated script. For Australia, India and the UAE specifically, see influencer marketing across Australia, India and the UAE.",
        links: [{ text: "influencer marketing across Australia, India and the UAE", href: "/blog/influencer-marketing-australia-india-uae" }],
      },
      { type: "subheading", text: "Local or international creators?" },
      {
        type: "table",
        headers: ["Creator choice", "Strengths", "Check"],
        rows: [
          ["Local creators in the market", "Language, culture, credibility and audience location", "More contracts and briefs to manage"],
          ["International creators with a following in the market", "One relationship, consistent content across markets", "Audience-country share; local licensing rules (some markets require local permits or local contracting)"],
          ["Diaspora creators (for example, Indian creators for Indian communities abroad)", "Shared language and culture with a specific community", "Where the audience actually lives; market rules"],
        ],
      },
      {
        type: "paragraph",
        text: "For a market launch, local creators usually do the persuading and international creators add reach. Decide from audience-country data, not follower counts.",
      },
      { type: "heading", text: "Creator partnerships across markets", id: "multi-market-partnerships" },
      {
        type: "paragraph",
        text: "A one-off international campaign can be run centrally. A creator partnership program that runs for a year across several countries needs a clear split of who decides what, or markets drift apart and reporting fragments.",
      },
      {
        type: "table",
        headers: ["Operating model", "Who does what", "Fits when", "Watch for"],
        rows: [
          ["Central", "One team sources, briefs, contracts and reports for every market", "Two or three markets, similar languages, modest volume", "Weak local judgment on creators, language and culture"],
          ["Hub and spoke", "Centre owns strategy, brand standards, rights, contracts template and reporting; each market sources creators, adapts briefs and reviews language", "Several markets, an always-on roster, local partners or staff", "Unclear decision rights; agree in writing who approves creators and content"],
          ["Local-led", "Each market runs its own program inside global guardrails", "Large markets with their own teams and budgets", "Inconsistent definitions and duplicated spend; keep one reporting template"],
        ],
      },
      { type: "subheading", text: "Local creator discovery and fit" },
      {
        type: "list",
        items: [
          "Set a minimum share of audience in the target country (from the creator's own insights) before shortlisting; a Dubai-based creator may have most followers elsewhere.",
          "Have a native speaker of the exact language variety review content: Gulf Arabic, Egyptian Arabic and Modern Standard Arabic are not interchangeable, nor are Hindi and regional Indian languages.",
          "Use the same selection scorecard in every market, with market-specific gates such as a valid licence or permit.",
          "Expect different platform mixes by market, and check platform availability (TikTok isn't available in India).",
        ],
      },
      {
        type: "paragraph",
        text: "Market guides cover where to look: finding influencers in India, finding and vetting influencers in Australia, finding micro-influencers in Saudi Arabia and regional influencer marketing in the UK. The scorecard is in how to choose the right influencer.",
        links: [
          { text: "finding influencers in India", href: "/blog/find-indian-influencers" },
          { text: "finding and vetting influencers in Australia", href: "/blog/find-vet-influencers-australia" },
          { text: "finding micro-influencers in Saudi Arabia", href: "/blog/find-micro-influencers-saudi-arabia" },
          { text: "regional influencer marketing in the UK", href: "/blog/regional-influencer-marketing-uk" },
          { text: "how to choose the right influencer", href: "/blog/how-to-choose-the-right-influencer-for-your-brand#selection-scorecard" },
        ],
      },
      { type: "subheading", text: "The Middle East is several markets" },
      {
        type: "paragraph",
        text: "The UAE and Saudi Arabia license creators differently: the UAE requires an advertiser permit, and Saudi Arabia a Mawthooq licence from GAMR. Audiences, languages, platforms, seasons and working weeks also differ from one Gulf country to the next. Plan, contract and report each country separately, even when one regional team runs them. See Saudi Arabia vs the UAE, and our guides to Qatar, Kuwait and Oman.",
        links: [
          { text: "Saudi Arabia vs the UAE", href: "/blog/influencer-marketing-saudi-arabia-vs-uae" },
          { text: "Qatar", href: "/blog/influencer-marketing-qatar" },
          { text: "Kuwait", href: "/blog/influencer-marketing-kuwait" },
          { text: "Oman", href: "/blog/influencer-marketing-oman" },
        ],
      },
      { type: "subheading", text: "Pricing across markets" },
      {
        type: "paragraph",
        text: "There is no reliable cross-market rate card, and fees don't convert by exchange rate: they reflect local demand, licensing, rights and the creator's own audience. Budget each market from quotes for your exact scope, and compare creators within a market before comparing markets. Market cost guides: India, the UK, Australia and Saudi Arabia.",
        links: [
          { text: "India", href: "/blog/influencer-marketing-cost-india" },
          { text: "the UK", href: "/blog/influencer-marketing-cost-uk" },
          { text: "Australia", href: "/blog/influencer-marketing-cost-australia" },
          { text: "Saudi Arabia", href: "/blog/influencer-marketing-cost-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Market rules and creator licensing", id: "rules" },
      {
        type: "list",
        items: [
          "Advertising rules and disclosure standards differ by market",
          "Some markets license creators: in the UAE, creators who advertise to UAE audiences need an advertiser permit, and visiting creators have a separate visitor permit",
          "Sector rules (health, finance, alcohol, food to children) vary widely",
          "Platform availability differs (for example, TikTok isn't available in India)",
          "Age rules differ (for example, Australia's under-16 account restrictions)",
        ],
      },
      {
        type: "paragraph",
        text: "Sources and detail: the official visitor advertiser permit page, our UAE advertiser permit guide, and our market guides for the UAE, India and Australia.",
        links: [
          { text: "visitor advertiser permit", href: GCC_SRC.nmaVisitor.url },
          { text: "UAE advertiser permit guide", href: "/blog/uae-advertiser-permit" },
          { text: "the UAE", href: "/blog/influencer-marketing-uae" },
          { text: "India", href: "/blog/influencer-marketing-india" },
          { text: "Australia", href: "/blog/influencer-marketing-australia" },
        ],
      },
      {
        type: "paragraph",
        text: "For a UK launch, the rules, labels and sector restrictions are summarised in influencer marketing in the UK.",
        links: [
          { text: "influencer marketing in the UK", href: "/blog/influencer-marketing-uk" },
        ],
      },
      {
        type: "table",
        headers: ["Market", "Disclosure and licensing to check", "Guide"],
        rows: [
          ["India", "ASCI influencer guidelines: clear labels on paid, gifted or affiliate content", "Influencer marketing in India"],
          ["UAE", "Advertiser permit for creators; visitor permit for visiting creators; clear ad disclosure", "UAE advertiser permit"],
          ["Saudi Arabia", "Mawthooq licence; ads must be identifiable under the E-Commerce Law", "Saudi influencer advertising rules"],
          ["United Kingdom", "CMA and ASA: ads must be obviously identifiable", "UK influencer advertising rules"],
          ["Australia", "AANA code and Australian Consumer Law", "Australian influencer advertising rules"],
          ["Singapore", "ASAS guidelines: identify marketing and disclose commercial relationships early", "Singapore market page"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: influencer marketing in India, the UAE advertiser permit guide, Saudi influencer advertising rules, UK influencer advertising rules, Australian influencer advertising rules and our Singapore market page. Rules change, so check each one before a campaign starts.",
        links: [
          { text: "influencer marketing in India", href: "/blog/influencer-marketing-india" },
          { text: "the UAE advertiser permit guide", href: "/blog/uae-advertiser-permit" },
          { text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" },
          { text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" },
          { text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" },
          { text: "our Singapore market page", href: "/markets/singapore" },
        ],
      },
      { type: "heading", text: "Cross-border contracts", id: "contracts" },
      {
        type: "list",
        items: [
          "Governing law and dispute forum: say which country's law applies",
          "Currency and who bears exchange-rate movement",
          "Usage rights by named territory, not 'worldwide' unless you need it",
          "Market-specific disclosure and compliance obligations, including permits",
          "Tax clauses: who handles withholding or indirect tax, and what documents are needed",
          "Language: which version of the contract prevails",
          "Data: how personal data is shared across borders",
        ],
      },
      {
        type: "paragraph",
        text: "Standard clauses are in the influencer marketing contract guide; local examples are in influencer contracts in Australia.",
        links: [
          { text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" },
          { text: "influencer contracts in Australia", href: "/blog/influencer-contracts-australia" },
        ],
      },
      { type: "heading", text: "Paying creators in multiple currencies", id: "payments" },
      {
        type: "list",
        items: [
          "Agree the invoice currency in the contract; paying in the creator's currency is usually fairest",
          "Budget in each market's currency, and convert to a reporting currency at a stated rate",
          "Allow for transfer fees and exchange margins as a budget line",
          "Check withholding tax and indirect tax (GST or VAT) on cross-border services with a tax adviser; rules depend on both countries",
          "Collect tax and registration details at onboarding, not at invoice time",
          "Track payments in one system so finance can reconcile across markets",
        ],
      },
      {
        type: "paragraph",
        text: "Payment operations are covered in the influencer payment process guide.",
        links: [{ text: "influencer payment process guide", href: "/blog/influencer-marketing-payments" }],
      },
      { type: "heading", text: "Global reporting", id: "reporting" },
      {
        type: "list",
        items: [
          "Same KPI definitions in every market (what counts as a view, a click, a conversion)",
          "Report in local currency and a reporting currency, with the exchange rate stated",
          "Compare cost per result within each market before comparing markets",
          "Note differences that affect comparisons: platform mix, creator tier, season, price",
          "Keep one learnings log across markets",
        ],
      },
      {
        type: "paragraph",
        text: "Converting everything to one currency doesn't make markets comparable. Prices, margins, media costs, platform mix, creator supply and seasons all differ, so a cost per order of ₹600 in India and AED 90 in the UAE can both be good or both be poor. Compare each market with its own benchmark first, then compare the indexes.",
      },
      {
        type: "table",
        headers: ["Market (hypothetical)", "Creator cost per order", "Market benchmark: paid social cost per order", "Index (creator ÷ benchmark × 100)"],
        rows: [
          ["India", "₹600", "₹750", "80 (creators cheaper than the benchmark)"],
          ["UAE", "AED 90", "AED 80", "113 (creators dearer)"],
          ["UK", "£18", "£20", "90"],
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical figures. Read this as 'creators beat our own paid social in India and the UK, but not yet in the UAE', not as 'India is cheapest'. Also compare like with like: the same objective, the same attribution window, the same definition of an order (delivered and net of returns), and similar campaign maturity, since a first campaign in a new market rarely matches an established one. Engagement, reach, clicks, orders and revenue are different measures; don't rank markets on one and budget on another. A worked approach for Gulf markets is in GCC influencer campaign reporting.",
        links: [{ text: "GCC influencer campaign reporting", href: "/blog/gcc-influencer-campaign-reporting" }],
      },
      {
        type: "paragraph",
        text: "The report structure is in how to create an influencer marketing report.",
        links: [{ text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" }],
      },
      { type: "heading", text: "Working across time zones", id: "time-zones" },
      {
        type: "paragraph",
        text: "Time zones cause more missed approvals than any other cross-border issue, mostly because deadlines get written as 'end of day' without saying whose day. The table shows how the markets brands most often combine with India line up.",
      },
      {
        type: "table",
        headers: ["Market", "Standard time (UTC)", "Compared with India", "Daylight saving", "Usual weekend"],
        rows: [
          ["India", "UTC+5:30", "-", "None", "Sunday; Saturday varies by employer"],
          ["UAE", "UTC+4", "1h 30m behind", "None", "Saturday and Sunday for government since 2022; many, not all, private firms follow"],
          ["Saudi Arabia", "UTC+3", "2h 30m behind", "None", "Friday and Saturday"],
          ["United Kingdom", "UTC+0, or UTC+1 in summer", "5h 30m behind, or 4h 30m in summer", "Late March to late October", "Saturday and Sunday"],
          ["Australia (Sydney, Melbourne)", "UTC+10, or UTC+11 in summer", "4h 30m ahead, or 5h 30m in summer", "Early October to early April in some states; not Queensland; Perth is UTC+8", "Saturday and Sunday"],
          ["Singapore", "UTC+8", "2h 30m ahead", "None", "Saturday and Sunday"],
        ],
      },
      {
        type: "paragraph",
        text: "The UAE government moved to a Saturday–Sunday weekend from January 2022, and Saudi Arabia moved to Friday–Saturday in 2013. Daylight-saving changes in the UK and Australia shift the gap with India by an hour twice a year, so check dates for campaigns that cross March, April, October or November.",
        links: [
          { text: "The UAE government moved to a Saturday–Sunday weekend from January 2022", href: "https://www.pinsentmasons.com/out-law/news/uae-move-weekend-saturday-and-sunday" },
          { text: "Saudi Arabia moved to Friday–Saturday in 2013", href: "https://www.arabnews.com/news/455923" },
        ],
      },
      {
        type: "list",
        items: [
          "Write every deadline with a time and zone ('Thursday 17:00 GST'), never 'end of day'",
          "Schedule posts in each audience's local time, not head office time",
          "Set approval deadlines in the creator's time zone, and allow for working weeks and public holidays that differ by market",
          "Name an approver who is awake during each market's launch window, and a backup",
          "Use the overlap hours for live calls: an Indian morning overlaps with the Australian afternoon, and an Indian afternoon with the UK morning",
          "For a multi-market launch, go live in the easternmost market first and check each wave before the next market wakes up",
          "Keep one shared calendar showing every market's dates, holidays and blackout periods",
          "Agree response times for urgent issues, such as a disclosure correction, per market",
        ],
      },
      {
        type: "paragraph",
        text: "Building the shared calendar is covered in the influencer campaign calendar.",
        links: [{ text: "influencer campaign calendar", href: "/blog/influencer-campaign-calendar" }],
      },
      { type: "heading", text: "Are you ready to expand?", id: "readiness" },
      {
        type: "list",
        items: [
          "The product can be bought or delivered in the new market, with local pricing and customer service",
          "Creator campaigns already work in your home market, with measurement you trust",
          "You know the market's advertising, disclosure and creator-licensing rules, and any sector approvals",
          "Claims are approved for that market, not just translated",
          "Someone can brief, approve and moderate in the local language",
          "Budget covers a test with several creators, plus fees, tax and currency costs",
          "Contracts, payments and usage rights can be set up for the new country",
        ],
      },
      {
        type: "paragraph",
        text: "If several of these are missing, fix them before booking creators. Market-entry detail is in the guides for brands entering the GCC and influencer marketing in Australia.",
        links: [
          { text: "brands entering the GCC", href: "/blog/gcc-influencer-marketing-playbook#from-india" },
          { text: "influencer marketing in Australia", href: "/blog/influencer-marketing-australia#market-entry" },
        ],
      },
      { type: "heading", text: "The repeatable process", id: "process" },
      {
        type: "list",
        items: [
          "1. Global brief: objective, idea, claims, KPI definitions",
          "2. Market check: rules, licensing, platforms, timing",
          "3. Local creator selection with audience-country data",
          "4. Local briefs and contracts",
          "5. Payments set up per market",
          "6. Launch, monitor and moderate locally",
          "7. Report per market, then roll up",
          "8. Update the playbook with what you learned",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "One translated script for every market",
          "Missing a creator licensing requirement",
          "'Worldwide' rights you don't need, priced in",
          "Comparing markets on cost per view without context",
          "No tax advice on cross-border payments",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "International creator campaigns scale when the process repeats: a global brief, local execution, fair cross-border contracts and payments, and reporting on shared definitions. Update the playbook after each market so the next launch is faster. This is general guidance, not legal or tax advice.",
      },
    ],
    faqs: [
      {
        question: "How do you manage influencer campaigns across different time zones?",
        answer:
          "Write every deadline with a time and time zone, schedule posts in each audience's local time, set approval deadlines in the creator's zone, name an approver awake during each launch window, use overlap hours for calls, allow for different weekends and holidays, and keep one shared calendar for all markets.",
      },
      {
        question: "How do you localize an influencer campaign?",
        answer:
          "Keep the objective, idea and KPI definitions global, and localize creators, briefs, claims, disclosure wording, contracts, payments, timing and platforms for each market.",
      },
      {
        question: "How should brands pay international influencers?",
        answer:
          "Agree the invoice currency in the contract, budget for transfer and exchange costs, collect tax details at onboarding, and get advice on withholding and indirect tax for cross-border payments.",
      },
    ],
  },
];

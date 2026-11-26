import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchR: BlogPost[] = [
  // #86 influencer-previous-brand-collaborations (NEW)
  {
    slug: "influencer-previous-brand-collaborations",
    category: "Influencer Marketing",
    title: "How to Research an Influencer's Previous Brand Collaborations",
    seoTitle: "Influencer Previous Brand Collaborations Guide | Kudozz",
    excerpt:
      "A creator's past sponsored posts show which categories they know, which competitors they've worked with, how their paid content performs and how often they post ads. Here's how to find and read that history before you sign.",
    metaDescription:
      "Check influencer previous brand collaborations: find past sponsored posts, spot competitor deals, judge sponsored frequency and use a research checklist.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Research", "Sponsored Content", "Competitor Conflicts", "Influencer Vetting"],
    related: ["competitor-influencers", "influencer-content-analysis-guide", "how-to-vet-influencers", "how-to-research-influencers"],
    hero: {
      src: "/blog/discovery/influencer-previous-brand-collaborations.svg",
      alt: "A twelve-month timeline of a creator's posts with sponsored posts marked, sorted into same category, competitor and unrelated brands, feeding a research log",
    },
    discoveryCta: {
      headline: "Find Creators Worth a History Check",
      body: "Kudozz Discovery helps you search Instagram creators in India by niche, city, language and engagement, open their profile metrics and save the promising ones to a named list. Reviewing their past sponsorships, outreach and contracts stays with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "A media kit lists the brands a creator wants you to see. Their feed shows the rest: every brand they've actually worked with, how they talked about each one, how the audience reacted and how often an ad appears between their own posts. Researching an influencer's previous brand collaborations is the cheapest due diligence you can do before a deal, because almost all of it is public.",
      },
      {
        type: "paragraph",
        text: "This guide covers where past sponsored content shows up on Instagram and YouTube, how to log it, and how to read it: category relevance, competitor conflicts, the quality of paid posts against organic ones, and sponsored-content frequency. It ends with the questions only the creator can answer and a checklist you can reuse for every shortlist.",
      },
      { type: "heading", text: "What influencer previous brand collaborations tell you", id: "what-it-tells-you" },
      {
        type: "table",
        headers: ["Question", "What to look for", "Why it matters"],
        rows: [
          ["Do they know our category?", "Past paid posts for products similar to yours, or in an adjacent category", "Experience shortens briefing and makes claims sound natural"],
          ["Are they tied to a competitor?", "Recent or repeated posts for direct rivals", "Audiences remember who a creator recommended last month"],
          ["Does paid content still work for them?", "Comments and views on sponsored posts compared with their organic posts", "Some creators hold attention on ads, others lose it"],
          ["How often do they post ads?", "The share of recent posts that are sponsored", "A feed crowded with ads dilutes every recommendation in it"],
          ["Do brands come back?", "The same brand appearing several times over months", "Repeat bookings suggest the creator delivered"],
          ["Do they disclose properly?", "Clear labels on paid and gifted posts", "Your post will carry their habits with it"],
        ],
      },
      { type: "heading", text: "Where past sponsored content shows up", id: "where-to-look" },
      {
        type: "paragraph",
        text: "No single screen lists a creator's brand deals, so you piece it together from several places:",
      },
      {
        type: "list",
        items: [
          "Instagram's 'Paid partnership' label: posts and Reels made with the branded content tool show it under the creator's handle, naming the brand.",
          "Captions with disclosure labels: ASCI's influencer guidelines list labels such as Ad, Sponsored, Collaboration and Partnership, usually used as hashtags (#ad, #collab), so read the caption text as you scroll.",
          "Brand tags and @mentions: tags on the photo or video and handles in the caption, including gifted unboxings that may not carry a paid label.",
          "Collab posts: a post co-authored with a brand appears on both profiles, so it also turns up when you look at the brand's grid.",
          "The brand's own Tagged tab: open a competitor's profile and check the posts it's been tagged in; it's often the fastest way to see whether your shortlisted creator has worked with them.",
          "Story Highlights: Stories vanish after 24 hours unless saved, but many creators keep Highlights named after brands, discount codes or 'Collabs'.",
          "YouTube: videos where the creator has ticked the paid promotion setting show an 'Includes paid promotion' notice, and descriptions often carry sponsor names, codes and affiliate links.",
          "Discount codes and affiliate links anywhere: a code such as CREATOR10 points to a commercial relationship even when no label is visible.",
          "A web search of the creator's name or handle with 'collaboration' or a brand name, which can surface press releases and brand case pages.",
        ],
      },
      {
        type: "paragraph",
        text: "Treat what you find as a lower bound. Undisclosed deals won't carry a label, deleted posts are gone, and agreements for future posts aren't visible at all. That gap is why the research ends with a conversation, not a spreadsheet.",
      },
      { type: "heading", text: "How to check past sponsorships, step by step", id: "research-steps" },
      {
        type: "list",
        items: [
          "Set a window. Twelve months suits most campaigns; go back further for an ambassador role or a long run of partnership ads.",
          "Scroll the grid and the Reels tab for that window and log every post that names, tags or shows a brand, paid or not.",
          "Open the Highlights and note any brand-named or code-based ones.",
          "Visit the Tagged tab of your two or three closest competitors and search for the creator there.",
          "If the creator has a YouTube channel, scan video titles and descriptions for the same window.",
          "For each logged post, record the category, whether it's a competitor, how it was disclosed and how it performed compared with nearby organic posts.",
          "Summarise in three lines: category experience, conflicts and sponsored frequency. Bring the open questions to your first call.",
        ],
      },
      {
        type: "template",
        label: "Collaboration research log",
        text: "Creator: @handle    Window: [month] to [month]    Reviewed by: [name]    Date: [date]\n\nDate | Brand | Category | Competitor? (Y/N) | Format | Disclosure seen | Views or comments vs organic | Notes\n-----|-------|----------|-------------------|--------|-----------------|------------------------------|------\n\nSummary\nCategory experience: \nConflicts: \nSponsored posts in window: [x] of [y] posts\nQuestions for the creator: ",
      },
      {
        type: "paragraph",
        text: "Keep the log with the creator's record so the next campaign starts from it rather than from scratch; a simple setup is described in our guide to organising influencer contact details and collaboration records.",
        links: [{ text: "organising influencer contact details and collaboration records", href: "/blog/influencer-marketing-crm" }],
      },
      { type: "heading", text: "Category relevance: have they sold something like yours?", id: "category-relevance" },
      {
        type: "paragraph",
        text: "A Kochi-based cold-pressed oil brand learns more from a creator's past work with ghee, millets or kitchen appliances than from their work with a phone brand. Look for three things: the same category, an adjacent one that shares your customer, and a pattern of how they explain products in it. A creator who has explained ingredients, prices and use cases before will need less briefing than one who has only held products up to camera.",
      },
      {
        type: "paragraph",
        text: "No category experience isn't a reason to reject someone. Plenty of strong first collaborations come from creators who genuinely use a product and have never been paid to talk about it. It simply means your brief, product facts and approval step carry more of the load.",
      },
      { type: "heading", text: "Competing brands and recent conflicts", id: "competing-brands" },
      {
        type: "table",
        headers: ["What you find", "How to read it"],
        rows: [
          ["One competitor post more than a year ago", "Usually fine; note it and ask whether any agreement is still running"],
          ["A competitor post in the last few months", "Ask about exclusivity, notice periods and whether ads are still running through their handle"],
          ["The same competitor several times, or an 'ambassador' bio line", "Likely an ongoing relationship; your post may confuse the audience even if it's allowed"],
          ["Several rival brands in a short span", "The creator may be seen as a reviewer rather than a fan; fine for comparisons, weaker for endorsement"],
        ],
      },
      {
        type: "paragraph",
        text: "If a conflict looks live, check it properly before you negotiate; our sibling guide on how to check influencer exclusivity before signing covers the questions and contract terms. To work in the other direction, building a list of creators your competitors use, see influencer competitor analysis.",
        links: [
          { text: "how to check influencer exclusivity before signing", href: "/blog/influencer-exclusivity" },
          { text: "influencer competitor analysis", href: "/blog/competitor-influencers" },
        ],
      },
      { type: "heading", text: "Where this fits in your shortlisting", id: "shortlisting-order" },
      {
        type: "paragraph",
        text: "Collaboration research takes time, so don't do it for a long list. Find and compare creators on fit and numbers first, cut to a shortlist, then research history only for the creators you would actually book. Our guides on how to research influencers before approaching them and how to shortlist influencers for a brand campaign set out that order.",
        links: [
          { text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" },
          { text: "how to shortlist influencers for a brand campaign", href: "/blog/influencer-shortlist" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Shortlist First, Research History Second",
        body: "Kudozz Discovery lets you search Instagram creators in India by niche, city, language, engagement and average views, then save the ones that fit into a named list for closer review. Researching past brand deals is done by your team on the creator's own profile.",
      },
      { type: "heading", text: "Sponsored posts against organic posts", id: "sponsored-quality" },
      {
        type: "paragraph",
        text: "Put three recent sponsored posts next to three organic posts from the same weeks. Watch them in full. Does the creator's voice survive the brief, or do paid posts suddenly sound like a script read aloud? Do views and comments hold up, or drop sharply whenever a brand appears? Are the comments about the product, or about the creator's outfit, or 'another ad?'",
      },
      {
        type: "paragraph",
        text: "A modest dip on paid posts is normal. A consistent collapse suggests the audience tunes out ads, and that's what your post will meet too. The second lens of our influencer content analysis guide goes deeper on reading sponsored and organic content side by side.",
        links: [{ text: "influencer content analysis guide", href: "/blog/influencer-content-analysis-guide" }],
      },
      { type: "heading", text: "Sponsored-content frequency", id: "sponsored-frequency" },
      {
        type: "paragraph",
        text: "From your log, count sponsored and gifted posts against all posts in the window. There's no universal acceptable share; a gadget reviewer's audience expects a run of products, while a fitness coach's audience may follow for training advice and notice every ad. What matters is the pattern:",
      },
      {
        type: "list",
        items: [
          "Steady and spaced: ads appear among plenty of organic content, and the creator picks brands that fit their niche.",
          "Clustered: several ads in a week around sale seasons. Common in India around festive and marketplace sales; check your post won't land in the middle of one.",
          "Rising fast: the share of ads has climbed over recent months. Watch whether engagement on organic posts has started to slip too.",
          "Anything goes: unrelated categories one after another. Each recommendation carries less weight.",
        ],
      },
      { type: "heading", text: "Questions only the creator can answer", id: "ask-the-creator" },
      {
        type: "list",
        items: [
          "Do you have any current or upcoming agreements in our category, and when do they end?",
          "Are any brands running ads through your handle right now?",
          "Which of your past collaborations are you proudest of, and why?",
          "Have you worked with a brand like ours before, even unpaid or gifted?",
          "Is there anything in your past content in our category we should know about before we brief you?",
        ],
      },
      {
        type: "paragraph",
        text: "Creators often can't name brands under confidentiality terms, so ask for the category and end date instead. A creator who answers openly, including about a past deal that didn't go well, is usually easier to work with than one who claims a spotless record. Commitments they share belong in writing in the agreement.",
      },
      { type: "heading", text: "Research checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Research window set and noted",
          "Grid, Reels and Highlights reviewed for branded content",
          "Competitors' Tagged tabs checked for the creator",
          "YouTube descriptions checked, if the creator has a channel",
          "Each brand logged with category, competitor flag, disclosure and performance",
          "Three sponsored and three organic posts compared in full",
          "Sponsored frequency counted for the window",
          "Live conflicts and open questions raised with the creator in writing",
          "Findings saved with the creator's record and dated",
        ],
      },
      {
        type: "paragraph",
        text: "This sits alongside the wider checks in 15 things to check before selecting an influencer, and the brand-safety and commercial steps in how to vet influencers.",
        links: [
          { text: "15 things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Trusting the media kit's brand list as complete.",
          "Only looking for 'Paid partnership' labels and missing gifted posts, codes and undisclosed deals.",
          "Rejecting a creator for one old competitor post that has nothing to do with today.",
          "Ignoring how paid posts performed and judging the creator on their best organic Reel.",
          "Skipping Highlights and YouTube descriptions, where many deals live.",
          "Not asking about future commitments, the one thing public research can never show.",
          "Doing the research and losing it, so the next campaign repeats it from the start.",
        ],
      },
      { type: "heading", text: "Before you sign", id: "before-you-sign" },
      {
        type: "paragraph",
        text: "By the end you should be able to say, in three lines, what the creator knows about your category, whether a competitor has a claim on their audience right now, and whether their audience still listens when they're paid to talk. If you can't, the research isn't finished. If you can, you'll brief better, negotiate exclusivity with facts rather than guesses, and avoid the awkward moment when your launch Reel sits two posts below a rival's. If you'd rather hand the research to a team, our creator discovery service covers shortlisting and vetting.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "How do I check an influencer's past sponsorships on Instagram?",
        answer:
          "Scroll their grid, Reels and Highlights for a set window and log every post with a 'Paid partnership' label, a disclosure label such as #ad or #collab, a brand tag, a discount code or a collab post. Then check your competitors' Tagged tabs for the creator. Treat the result as a minimum, because undisclosed and future deals won't show.",
      },
      {
        question: "Is it a problem if an influencer has worked with a competitor?",
        answer:
          "Not automatically. An old one-off post is usually fine. A recent post, repeated work with the same rival or an ambassador role is worth discussing, because the creator may be under exclusivity or the audience may still link them with that brand.",
      },
      {
        question: "How many sponsored posts is too many for an influencer?",
        answer:
          "There's no universal threshold. Compare the share of sponsored posts with what the creator's niche normally looks like, and check whether engagement on paid posts holds up against organic ones. A rising share of ads alongside falling engagement is the pattern to watch.",
      },
      {
        question: "Can a discovery tool show an influencer's brand collaboration history?",
        answer:
          "Kudozz Discovery doesn't track past collaborations. It helps you find and compare Instagram creators in India by niche, location, language and engagement metrics. The collaboration history itself comes from reviewing the creator's profile and asking them directly.",
      },
      {
        question: "What if the creator won't say which brands they're working with?",
        answer:
          "That's often a confidentiality term, not evasiveness. Ask for the categories and end dates of current commitments instead, and put any restriction that affects your campaign in writing in your agreement.",
      },
    ],
  },

  // #87 influencer-marketing-brand-safety (UPGRADE, orig 2026-09-12)
  {
    slug: "influencer-marketing-brand-safety",
    category: "Brand Marketing",
    title: "How to Conduct a Brand Safety Check Before Hiring an Influencer",
    seoTitle: "Influencer Brand Safety Check Before Hiring | Kudozz",
    excerpt:
      "A step-by-step influencer brand safety check: review public content and reputation, look for controversial material and misleading claims, apply category rules, and record a signed-off approval before the contract goes out.",
    metaDescription:
      "Run an influencer brand safety check before hiring: review content and reputation, flag risky claims, apply India's category rules and document the approval.",
    author: AUTHOR,
    publishedAt: "2026-09-12",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Influencer Brand Safety", "Influencer Vetting", "Brand Reputation", "Compliance"],
    related: ["how-to-vet-influencers", "influencer-controversy-response", "influencer-campaign-risk-management", "influencer-marketing-compliance"],
    hero: {
      src: "/blog/discovery/influencer-marketing-brand-safety.svg",
      alt: "Five review gates a creator passes before hiring: content, reputation, claims, category rules and a signed approval, with a human reviewer at each gate",
    },
    discoveryCta: {
      headline: "Line Up Creators for Your Safety Review",
      body: "Explore Kudozz Discovery to search Instagram creators in India by niche, location, language and engagement, and save candidates into a named list. The brand safety review, the approval and the contract stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "Most influencer controversies that hurt a brand had a moment, before the contract, when someone could have seen the warning sign: an old video, a pattern of miracle claims, a comment section the creator never moderates. An influencer brand safety check is the habit of looking for those signs on purpose, by a person, with the result written down.",
      },
      {
        type: "paragraph",
        text: "This guide is the pre-hire check: what to review, how deep to go, which categories need extra care in India, and how to record a decision someone can stand behind later. It won't make risk disappear, since you're working with independent people, but it means you'll know what you're signing up to.",
      },
      { type: "heading", text: "Brand safety and brand suitability", id: "safety-vs-suitability" },
      {
        type: "paragraph",
        text: "Two questions hide under one phrase. Safety asks whether a creator's content or conduct is harmful by almost any brand's standards: hate, harassment, dangerous behaviour, deliberate misinformation, deceptive claims. Suitability asks whether a creator is right for your brand specifically. A stand-up comic who swears freely may be safe and a good fit for a beverage brand, and unsuitable for a children's learning app. Write your suitability rules down before you review anyone, so the decision doesn't depend on who happens to be reviewing.",
      },
      { type: "heading", text: "Match the depth of the check to the deal", id: "depth" },
      {
        type: "paragraph",
        text: "The same creator can be low risk for one gifted post and higher risk for a year-long ambassador role with ads running through their handle. The longer and closer the association, the deeper the check:",
      },
      {
        type: "table",
        headers: ["Association", "Suggested review", "Reviewers"],
        rows: [
          ["Gifted or one-off paid post", "Recent months of content, comments, a quick reputation search", "One reviewer"],
          ["Series or multi-post campaign", "About a year of content, past sponsored posts, reputation search", "One reviewer plus the campaign owner"],
          ["Partnership ads through the creator's handle", "As above, plus anything that could resurface while ads run", "Two reviewers, one senior"],
          ["Ambassador or long-term deal", "Full history across platforms, news search, direct conversation", "Two reviewers plus legal or compliance sign-off"],
        ],
      },
      { type: "heading", text: "The influencer brand safety check, step by step", id: "brand-safety-check" },
      { type: "subheading", text: "1. Review public content" },
      {
        type: "paragraph",
        text: "Go through the grid, Reels, Story Highlights and any long-form videos for your review window, plus captions and the creator's replies in comments. Review in the creator's own language. A Tamil or Marathi creator's jokes, references and slang need a reviewer who understands them; an English-only skim misses most of the risk and can misread harmless content as offensive.",
      },
      { type: "subheading", text: "2. Search their reputation" },
      {
        type: "paragraph",
        text: "Search the creator's name and handle in English and their content language, with terms such as controversy, scam, complaint or apology. Look for news coverage, public disputes with brands or other creators, and any visible platform enforcement. Weigh evidence, not rumour: a single anonymous accusation isn't a finding.",
      },
      { type: "subheading", text: "3. Look for controversial content" },
      {
        type: "paragraph",
        text: "Flag content that demeans communities, harasses individuals, celebrates violence or presents dangerous stunts as safe. Separate that from ordinary opinions you might not share; holding a view on a public issue isn't a brand safety problem, while targeting people for who they are is.",
      },
      { type: "subheading", text: "4. Check for misleading claims" },
      {
        type: "paragraph",
        text: "Read past sponsored posts and posts in your category. Watch for cure claims, guaranteed income or returns, before-and-after results without context, and products promoted with claims the brand couldn't have substantiated. Check disclosure too: undisclosed or vaguely labelled partnerships suggest your post may be handled the same way. Our guide to researching an influencer's previous brand collaborations explains how to find those posts.",
        links: [{ text: "researching an influencer's previous brand collaborations", href: "/blog/influencer-previous-brand-collaborations" }],
      },
      { type: "subheading", text: "5. Check for inappropriate material" },
      {
        type: "paragraph",
        text: "Sexually explicit content, glamorised drinking or drug use, gambling promotion, and children shown in ways that wouldn't suit your brand all count here. Much of this is suitability rather than safety, so judge it against the rules you wrote in advance.",
      },
      { type: "subheading", text: "6. Read the comment sections" },
      {
        type: "paragraph",
        text: "Comments show what the creator tolerates. Abuse the creator encourages, pile-ons they start or hostility they never moderate is something your brand will sit next to. Comments also reveal suspicious engagement; for that side of the review, see how to identify fake followers and suspicious audience patterns and how to evaluate an influencer's engagement.",
        links: [
          { text: "how to identify fake followers and suspicious audience patterns", href: "/blog/how-to-identify-fake-followers" },
          { text: "how to evaluate an influencer's engagement", href: "/blog/influencer-engagement-quality" },
        ],
      },
      { type: "heading", text: "Category-specific checks in India", id: "category-checks" },
      {
        type: "paragraph",
        text: "Some categories carry legal as well as reputational risk. The points below are general information, not legal advice; check current rules with counsel before you brief.",
      },
      {
        type: "table",
        headers: ["Category", "What to check in the creator's history"],
        rows: [
          ["Health, nutrition and wellness", "ASCI's influencer guidelines expect creators giving health or nutrition advice to hold relevant qualifications. Look for cure or treatment claims; the Drugs and Magic Remedies (Objectionable Advertisements) Act restricts advertising remedies for listed conditions."],
          ["Finance and investing", "ASCI expects creators giving investment advice to be SEBI-registered and to disclose it, and SEBI restricts regulated entities from associating with unregistered people who give advice or claim returns. Check for return promises and tips."],
          ["Children and parenting", "How children appear in content, and whether past ads aimed at children were responsible. The CCPA's 2022 guidelines on misleading advertisements include provisions on ads for children."],
          ["Alcohol and tobacco", "Surrogate promotion of brands that can't advertise directly, which the CCPA's 2022 guidelines prohibit."],
          ["Online money games and betting", "Past promotion of betting or real-money gaming apps. The Promotion and Regulation of Online Gaming Act, 2025 prohibits online money games and their advertisement."],
          ["Food and beauty", "Exaggerated results, unsubstantiated 'natural' or 'chemical-free' claims, and edited before-and-after images."],
        ],
      },
      {
        type: "paragraph",
        text: "Our checklist on influencer campaign compliance for Indian brands covers disclosure and claims for the campaign itself.",
        links: [{ text: "influencer campaign compliance for Indian brands", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Run the check on a shortlist, not a longlist", id: "shortlist-stage" },
      {
        type: "paragraph",
        text: "A thorough review takes time, so do it last. Find creators on fit and numbers first, cut to the people you'd actually book, then run the full check on them with a backup ready in case someone fails. Our step-by-step guide to shortlisting influencers for a brand campaign sets out the stages, and our list of things to check before selecting a creator covers the earlier filters.",
        links: [
          { text: "shortlisting influencers for a brand campaign", href: "/blog/influencer-shortlist" },
          { text: "things to check before selecting a creator", href: "/blog/things-to-check-before-selecting-influencers" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Build the List You'll Screen",
        body: "Kudozz Discovery lets you find Instagram creators in India by niche, city, language and engagement, compare profile metrics and save finalists and backups into named lists. It doesn't screen content for brand safety, so the review itself stays with your team.",
      },
      { type: "heading", text: "What a brand safety check should not do", id: "what-not-to-screen" },
      {
        type: "paragraph",
        text: "Screen published content and professional conduct, not identity. Don't evaluate creators on religion, caste, gender, sexuality, disability, marital status or similar characteristics, don't dig into private accounts or family members, and apply the same criteria to every creator. Use publicly verifiable information and keep findings factual.",
      },
      { type: "heading", text: "Why a person makes the call", id: "human-review" },
      {
        type: "paragraph",
        text: "Keyword scans and automated flags can help a reviewer know where to look, but they miss sarcasm, context and regional languages, and they flag harmless content as often as they miss real problems. The decision belongs to a person who has watched the content. For anything beyond a one-off post, use two reviewers who don't simply defer to each other, and let either escalate.",
      },
      { type: "heading", text: "Document the approval", id: "documented-approval" },
      {
        type: "paragraph",
        text: "If something resurfaces months later, the first question will be whether anyone checked. A one-page record answers it and makes the next review faster. Keep it with the creator's file:",
      },
      {
        type: "template",
        label: "Brand safety sign-off",
        text: "Creator: @handle    Platforms reviewed: [Instagram / YouTube / other]\nCampaign and association: [one post / series / partnership ads / ambassador]\nReview window: [from] to [to]    Content language(s): [ ]\nReviewer 1: [name, date]    Reviewer 2: [name, date]\n\nChecks completed\n[ ] Public content    [ ] Reputation search    [ ] Controversial content\n[ ] Claims and disclosure    [ ] Inappropriate material    [ ] Comments\n[ ] Category rules: [category]\n\nFindings (with links and dates):\n\nDecision: Approved / Approved with conditions / Not approved\nConditions (topics to avoid, claims not allowed, approval steps):\nApproved by: [name, role, date]\nRe-check due: [before renewal / before ads go live]",
      },
      { type: "heading", text: "Contracts and morality clauses", id: "contracts-and-clauses" },
      {
        type: "paragraph",
        text: "The check reduces risk before signing; the contract handles what happens after. Many agreements let the brand pause or end the relationship, or remove content, if the creator's conduct causes reputational harm. How such a clause is drafted and whether it holds up depends on the wording and facts, so have it reviewed by a lawyer. Our guide to influencer marketing contracts covers the wider agreement, and an influencer code of conduct gives creators the standards in plain language before they sign.",
        links: [
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
          { text: "influencer code of conduct", href: "/blog/influencer-code-of-conduct" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Reviewing only the last few posts for a deal that will run for a year.",
          "Skimming regional-language content without a reviewer who speaks the language.",
          "Treating an automated score as the decision.",
          "Penalising opinions or personal characteristics instead of conduct.",
          "Checking the creator but not their past claims in your category.",
          "Approving verbally, so nobody can show later what was checked.",
          "Never re-checking before a renewal or before ads go live through the creator's handle.",
        ],
      },
      { type: "heading", text: "The check after the check", id: "conclusion" },
      {
        type: "paragraph",
        text: "A signed approval is a snapshot. Creators keep posting, so repeat a lighter version before renewals and before you put media spend behind their handle, and name someone to watch comments while the campaign is live. If something does go wrong, influencer controversy response covers the first 24 hours, and the wider screening sequence is in how to vet influencers before a brand collaboration. If you'd rather have screening handled within a managed campaign, our influencer marketing team can run it.",
        links: [
          { text: "influencer controversy response", href: "/blog/influencer-controversy-response" },
          { text: "how to vet influencers before a brand collaboration", href: "/blog/how-to-vet-influencers" },
          { text: "influencer marketing team", href: "/services/influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is an influencer brand safety check?",
        answer:
          "It's a review of a creator's public content, reputation, claims and comment sections before you hire them, judged against written safety and suitability rules. The result is recorded in a signed approval, so the brand can show what was checked and why the creator was approved.",
      },
      {
        question: "How far back should a brand safety review go?",
        answer:
          "Match it to the deal. A few recent months may be enough for a single gifted post, about a year suits a series, and an ambassador or partnership-ads deal deserves the creator's full visible history across platforms.",
      },
      {
        question: "Can software do the brand safety check for us?",
        answer:
          "Tools can point a reviewer at content worth a closer look, but they miss context, sarcasm and regional languages. A person who has watched the content should make the decision. Kudozz Discovery is a creator search tool and does not screen content for brand safety.",
      },
      {
        question: "Do micro-influencers need a brand safety check too?",
        answer:
          "Yes. A smaller creator's content and conduct still reflect on any brand they work with. The review can be lighter for a one-off post, but the same rules should apply whatever the follower count.",
      },
      {
        question: "Should every influencer contract have a morality clause?",
        answer:
          "It's a common protection, but its wording and enforceability depend on the contract and the facts. Have it drafted or reviewed by a lawyer rather than copied from a generic template.",
      },
    ],
  },

  // #88 influencer-exclusivity (UPGRADE, orig 2026-10-08)
  {
    slug: "influencer-exclusivity",
    category: "Influencer Marketing",
    title: "How to Check Influencer Exclusivity Before Signing a Brand Deal",
    seoTitle: "Influencer Exclusivity: Check Before You Sign | Kudozz",
    excerpt:
      "Before you ask a creator for exclusivity, check whether they're already bound to someone else. How to research competitor deals, ask about existing commitments, and decide what exclusivity your own brand actually needs.",
    metaDescription:
      "Influencer exclusivity, checked properly: find competitor deals, ask about existing commitments, set scope and duration, and know the Indian legal context.",
    author: AUTHOR,
    publishedAt: "2026-10-08",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Exclusivity", "Influencer Contracts", "Competitor Conflicts", "Brand Deals"],
    related: ["influencer-marketing-contract", "creator-exclusivity", "competitor-influencers", "influencer-usage-rights"],
    hero: {
      src: "/blog/discovery/influencer-exclusivity.svg",
      alt: "A two-part flow: first check whether the creator is free, through public research and direct questions, then decide what exclusivity to ask for by category, duration, platform and market",
    },
    discoveryCta: {
      headline: "Keep Conflict-Free Backups Ready",
      body: "Kudozz Discovery helps you find Instagram creators in India by niche, city, language and engagement, and keep backups in a named list in case a first choice is tied to a competitor. Checking commitments, negotiating terms and contracts stays with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "Most brands think about influencer exclusivity as something they ask for. The question that comes first is what the creator has already promised someone else. A Hyderabad-based sunscreen brand can negotiate a careful launch window and still find the creator signed a six-month skincare deal with a rival in March. Nothing in the creator's feed would have shown it.",
      },
      {
        type: "paragraph",
        text: "This guide works in that order. First, check whether the creator is free: past and ongoing competitor work, existing exclusivity commitments, and the questions to ask before anything is signed. Then decide what exclusivity your brand needs, how narrowly to define it, and how Indian contract law affects how long it can run.",
      },
      { type: "heading", text: "Two checks, in this order", id: "two-checks" },
      {
        type: "table",
        headers: ["Check", "The question", "Where the answer comes from"],
        rows: [
          ["1. Is the creator free?", "Do existing deals or exclusivity stop them working with us, or make our post look odd?", "Public research, then the creator's written answers"],
          ["2. What do we need from them?", "Which competitors, for how long, on which platforms and in which markets?", "Your campaign plan, budget and ad plans"],
        ],
      },
      { type: "heading", text: "Check previous and ongoing competitor collaborations", id: "competitor-check" },
      {
        type: "paragraph",
        text: "Start with what's public. Review about a year of the creator's grid, Reels, Highlights and any YouTube descriptions for 'Paid partnership' labels, disclosure tags, brand tags, discount codes and collab posts. Then open your main competitors' profiles and look for the creator in their Tagged tabs. Our companion guide on reviewing a creator's past sponsored content has the full method and a research log.",
        links: [{ text: "reviewing a creator's past sponsored content", href: "/blog/influencer-previous-brand-collaborations" }],
      },
      {
        type: "table",
        headers: ["What you find", "What it may mean", "Next step"],
        rows: [
          ["Competitor post over a year old, nothing since", "Probably a finished one-off", "Note it; confirm in writing"],
          ["Competitor post in the last few months", "Possibly an active agreement or notice period", "Ask about category restrictions and end dates"],
          ["Repeated posts for one competitor, or 'ambassador' in the bio", "Likely an ongoing relationship with exclusivity", "Assume a conflict until the creator confirms otherwise"],
          ["A competitor's partnership ads running through the creator's handle", "Their audience is seeing a rival now", "Wait, or choose another creator"],
          ["No competitor work at all", "Free on what's visible", "Still ask; future deals aren't public"],
        ],
      },
      {
        type: "paragraph",
        text: "If you want a wider view of which creators your rivals use, our guide to mapping the creators your competitors work with shows how to build that list.",
        links: [{ text: "mapping the creators your competitors work with", href: "/blog/competitor-influencers" }],
      },
      { type: "heading", text: "Ask about existing exclusivity commitments", id: "existing-commitments" },
      {
        type: "paragraph",
        text: "Public research can't show signed agreements, upcoming campaigns or confidentiality terms. Only the creator, or their manager, can. Many can't name a brand under an NDA, so ask for categories and dates rather than names, and get the answers in writing, by email if not in the contract itself.",
      },
      {
        type: "template",
        label: "Questions to ask before signing",
        text: "1. Do you have any current agreement that restricts you from promoting [category, e.g. sunscreens and SPF moisturisers]?\n2. If yes: when does it end, and does it cover all platforms or only some?\n3. Is any brand in [category] currently running ads through your handle, or does it have the right to?\n4. Do you have upcoming campaigns in [category] agreed but not yet posted?\n5. Do you have your own product in this category, or plans to launch one?\n6. Does any current agreement give another brand a right to approve or be told about new deals?\n7. Can you confirm these answers in our agreement?",
      },
      {
        type: "paragraph",
        text: "Watch for vague answers on question 3. Partnership ads can keep a competitor in front of the creator's audience for months after the post itself, which matters even when no exclusivity clause exists.",
      },
      { type: "heading", text: "What influencer exclusivity to ask for", id: "types" },
      {
        type: "paragraph",
        text: "Once you know the creator is free, decide what you need. Ask for exclusivity when competitor content would genuinely undermine your campaign: a launch window, ads running through the creator's identity, or an ambassador role. For a single post in a crowded category, it often isn't worth paying for. Exclusivity usually belongs with longer relationships, the kind described in our guide to moving creators from one-off posts to long-term partnerships.",
        links: [{ text: "moving creators from one-off posts to long-term partnerships", href: "/blog/influencer-partnerships" }],
      },
      {
        type: "table",
        headers: ["Type", "What the creator can't do", "Impact on the creator"],
        rows: [
          ["Named competitors", "Work with brands on a written list", "Lowest"],
          ["Product category", "Promote products in a defined category, such as sunscreen", "Moderate"],
          ["Broad category", "Promote anything in a wider category, such as all skincare", "High for creators in that niche"],
          ["Full exclusivity", "Take any other sponsorship", "Very high; rare outside ambassador deals"],
          ["Platform- or market-limited", "Any of the above, only on your platforms or in your markets", "Lower than the same restriction everywhere"],
        ],
      },
      {
        type: "paragraph",
        text: "Exclusivity isn't the same as an exclusive licence to content, which stops the creator licensing the same content to someone else. Licences are covered in influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Define the category, duration, platforms and markets", id: "define-scope" },
      {
        type: "paragraph",
        text: "Most disputes are about what 'category' meant. Write it so a third party could apply it:",
      },
      {
        type: "list",
        items: [
          "Category: named brands, or products described by what they do ('sunscreens and SPF moisturisers'), not a vague niche like 'beauty'.",
          "What counts: paid and gifted posts only, or also organic mentions, retailer and marketplace promotions, events and affiliate links.",
          "Carve-outs: the creator's own products and the existing agreements they disclosed.",
          "Duration: the posting window, the whole campaign, or the period your ads run through their handle, whichever you actually need protected.",
          "Platforms and markets: only those where your content and ads appear.",
          "Disputes: who decides whether a new brand is a competitor, and how quickly.",
        ],
      },
      {
        type: "paragraph",
        text: "If partnership ads will run for three months, exclusivity that ends after two leaves a gap. Ad authorisation terms are explained in influencer whitelisting and ad authorisation.",
        links: [{ text: "influencer whitelisting and ad authorisation", href: "/blog/ugc-whitelisting-creator-licensing" }],
      },
      { type: "heading", text: "Check conflicts while you shortlist", id: "shortlist-stage" },
      {
        type: "paragraph",
        text: "Conflicts found after negotiation waste everyone's time and push launches back. Run the public check as soon as a creator reaches your shortlist, ask the questions in your first conversation, and keep one or two backups for each slot so a conflict doesn't leave a gap. Record what each creator told you, with dates, so the next team doesn't ask again; a shared influencer contact and deal record makes that easy.",
        links: [{ text: "shared influencer contact and deal record", href: "/blog/influencer-marketing-crm" }],
      },
      {
        type: "discovery-cta",
        headline: "Find Alternatives Without Starting Over",
        body: "Kudozz Discovery lets you search Instagram creators in India by niche, state, city, language and engagement, and save first choices and backups in a named list for each campaign. It doesn't show past brand deals or exclusivity, which you confirm with the creator.",
      },
      { type: "heading", text: "Cost and narrower alternatives", id: "alternatives" },
      {
        type: "paragraph",
        text: "Exclusivity costs the creator the deals they'd have taken in that category, so its price depends on breadth, duration, how much of their income comes from your category and how in demand they are. There's no reliable universal percentage. Ask for it as its own line, separate from the content fee and usage rights, and price a narrower option next to it:",
      },
      {
        type: "list",
        items: [
          "A competitor gap: no competing sponsored content for an agreed number of days before and after your post.",
          "Named competitors only, rather than a category.",
          "Exclusivity limited to the platform where your content and ads run.",
          "A notification clause: the creator tells you before accepting a competing deal during the campaign.",
          "Exclusivity only while your partnership ads are live.",
        ],
      },
      {
        type: "paragraph",
        text: "How to raise it without souring the conversation is covered in how to negotiate influencer rates.",
        links: [{ text: "how to negotiate influencer rates", href: "/blog/negotiate-influencer-rates" }],
      },
      { type: "heading", text: "Businesses with several brands", id: "multi-brand" },
      {
        type: "paragraph",
        text: "Groups that own several brands meet exclusivity from both sides. A creator working with one of your brands may be approached by a sister brand, and one brand's competitor may be another's partner. Set the rules at group level before teams negotiate separately:",
      },
      {
        type: "list",
        items: [
          "Define competitors per brand and category, not for the whole group, unless the brands genuinely compete.",
          "Decide whether sister brands can book the same creator in the same period, and with what gap.",
          "Keep one shared creator record so every team sees existing deals and exclusivity windows.",
          "Make sure one brand's exclusivity doesn't accidentally block another of your brands.",
          "Keep disclosure clear when a creator promotes two brands from the same group.",
        ],
      },
      {
        type: "paragraph",
        text: "Group-level rules like these belong in your influencer marketing governance.",
        links: [{ text: "influencer marketing governance", href: "/blog/influencer-marketing-governance" }],
      },
      { type: "heading", text: "Indian legal context", id: "india-law" },
      {
        type: "paragraph",
        text: "General information, not legal advice. Section 27 of the Indian Contract Act, 1872 makes agreements in restraint of trade void, subject to a narrow exception. Indian courts have generally been more willing to accept restrictions that operate while an agreement is in force than ones that continue after it ends; in Percept D'Mark v Zaheer Khan (2006), about a cricketer's management agreement, the Supreme Court treated a restriction reaching beyond the agreement's term as unenforceable. A practical approach many brands take is to make the agreement's term cover the period they need protected. Have any exclusivity clause reviewed by a lawyer.",
      },
      { type: "heading", text: "Contract considerations", id: "contract" },
      {
        type: "template",
        label: "Example structure only, not a standard clause or legal advice",
        text: "Exclusivity\n- Creator confirms: no existing agreement restricts promotion of [category], except [disclosed carve-outs]\n- Restricted: paid or gifted promotion of [named brands / products described as ...]\n- Not restricted: [organic mentions / creator's own products / listed existing agreements]\n- Platforms: [Instagram / YouTube / all]    Markets: [India / specific states]\n- Period: from [signing / first post] to [date], within the term of this agreement\n- Fee: ₹[amount], separate from content and usage fees\n- Competitor disputes: [who decides, within how many days]",
      },
      {
        type: "paragraph",
        text: "The first line matters as much as the restriction: it turns the creator's answers into a written confirmation. The other terms are covered in our guide to what brands need in influencer contracts, and creators weighing the same terms can read our creator-side guide to exclusivity.",
        links: [
          { text: "what brands need in influencer contracts", href: "/blog/influencer-marketing-contract" },
          { text: "creator-side guide to exclusivity", href: "/blog/creator-exclusivity" },
        ],
      },
      { type: "heading", text: "Exclusivity-check checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "About a year of the creator's content reviewed for competitor work",
          "Competitors' Tagged tabs checked for the creator",
          "Live competitor partnership ads ruled out",
          "Creator asked about current restrictions, end dates and upcoming deals in your category",
          "Answers received in writing",
          "Your own need for exclusivity decided: category, duration, platforms, markets",
          "Narrower alternative priced alongside full exclusivity",
          "Exclusivity priced as its own line",
          "Restriction kept within the agreement's term and reviewed by a lawyer",
          "Findings and windows saved in the shared creator record",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Negotiating your exclusivity before checking the creator's existing commitments.",
          "Assuming a clean feed means no conflicts.",
          "Asking for category exclusivity by default on every deal.",
          "Defining the category so loosely that neither side knows what's restricted.",
          "Letting exclusivity end before your partnership ads stop.",
          "Bundling exclusivity into the fee, so you can't see what it costs.",
          "Writing restrictions that continue after the agreement ends.",
        ],
      },
      { type: "heading", text: "A one-line test before you sign", id: "final-test" },
      {
        type: "paragraph",
        text: "Could you explain to a colleague, in one sentence each, what the creator is already committed to and what you're asking them to give up? If either sentence needs a 'probably', go back to the creator. When both are clear, exclusivity becomes a narrow, priced term that protects a specific campaign. If you're building a long-term creator relationship where exclusivity is central, our ambassador programme service handles the structure.",
        links: [{ text: "ambassador programme service", href: "/services/ambassador-programs" }],
      },
    ],
    faqs: [
      {
        question: "How do I check whether an influencer has an exclusivity deal with a competitor?",
        answer:
          "Review their recent content and your competitors' Tagged tabs for signs of an ongoing relationship, then ask the creator directly about restrictions in your category, end dates and any ads running through their handle. Signed agreements aren't public, so get their answers in writing.",
      },
      {
        question: "What is influencer exclusivity?",
        answer:
          "It's an agreed restriction on a creator promoting competing brands for a period. It can cover named competitors, a product category, a broad category or all sponsorships, and can be limited to particular platforms and markets.",
      },
      {
        question: "Should brands always ask for exclusivity?",
        answer:
          "No. It's worth paying for around launches, when ads run through the creator's identity, and in ambassador roles. For a single post in a crowded category, a short competitor gap before and after your post is often enough.",
      },
      {
        question: "How much does influencer exclusivity cost?",
        answer:
          "There's no universal rate. It depends on how broad the restriction is, how long it lasts, how much of the creator's income comes from that category and how in demand they are. Ask for it as a separate line item and compare it with a narrower option.",
      },
      {
        question: "Is a post-contract exclusivity clause enforceable in India?",
        answer:
          "It depends on drafting and facts, so take legal advice. Section 27 of the Indian Contract Act voids agreements in restraint of trade, and courts have been more cautious about restrictions that continue after an agreement ends than about those within its term.",
      },
    ],
  },

  // #89 evaluate-influencer-storytelling (NEW)
  {
    slug: "evaluate-influencer-storytelling",
    category: "Campaign Strategy",
    title: "How to Evaluate an Influencer's Storytelling Ability for Brand Campaigns",
    seoTitle: "Influencer Storytelling: How to Evaluate It | Kudozz",
    excerpt:
      "Good-looking content and good storytelling aren't the same thing. How to judge a creator's hooks, structure, product integration, demonstrations and audience connection from their past posts before you brief them.",
    metaDescription:
      "Judge influencer storytelling before you book: review hooks, narrative structure, product integration, demos and audience connection, with a simple scorecard.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "7 min read",
    tags: ["Influencer Storytelling", "Creator Evaluation", "Content Analysis", "Creative Strategy"],
    related: ["influencer-content-analysis-guide", "creator-led-campaigns", "influencer-creative-strategy", "influencers-for-product-demonstration-videos"],
    hero: {
      src: "/blog/discovery/evaluate-influencer-storytelling.svg",
      alt: "A story arc running from hook to setup, turn and payoff, with the product entering at the turn and audience reaction rising toward the end",
    },
    discoveryCta: {
      headline: "Find Storytellers in Your Niche",
      body: "Explore Kudozz Discovery to search Instagram creators in India by niche, language, city and average views, and keep the ones worth watching closely in a named list. Judging their storytelling, briefing and contracts stays with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "A common assumption: if a creator's feed looks beautiful, they'll make a good brand video. Often they won't. Polished visuals can hide weak hooks, a story that goes nowhere and a product that arrives like an interruption. Influencer storytelling is the skill that decides whether people watch to the end and remember what they saw, and it's something you can assess before you book.",
      },
      {
        type: "paragraph",
        text: "This guide breaks storytelling into five parts you can watch for in a creator's past content: hooks, narrative structure, product integration, demonstrations and audience connection. It shows effective and ineffective versions of the same brief, and ends with a scorecard your team can use the same way every time.",
      },
      { type: "heading", text: "Five parts of influencer storytelling", id: "five-parts" },
      {
        type: "table",
        headers: ["Part", "What good looks like", "Warning signs"],
        rows: [
          ["Hook", "A clear reason to keep watching in the first moments: a question, a tension, a surprising visual", "Slow intros, logos first, 'Hey guys, so today...'"],
          ["Narrative structure", "A setup, a turn and a payoff, even in a short Reel", "A list of facts with no shape; ends abruptly or drags"],
          ["Product integration", "The product solves the problem the story set up", "The story stops for an ad break, then resumes"],
          ["Demonstration", "Shows the product working in real use, with visible results", "Holding the product to camera and describing it"],
          ["Audience connection", "Comments respond to the story, ask questions, share their own experiences", "Comments only about the creator's looks, or generic emojis"],
        ],
      },
      { type: "heading", text: "Build a fair review sample", id: "review-sample" },
      {
        type: "paragraph",
        text: "Pick ten to twelve recent posts: mostly organic, three or four sponsored, and at least one that clearly performed below the creator's usual level. Watch each one in full, with sound, on a phone. Judging from thumbnails or the first two seconds is how teams end up booking a creator for their one viral post. The third lens of our guide on how to analyse an influencer's content before shortlisting covers storytelling alongside format, consistency and claims; this article goes deeper on that one lens.",
        links: [{ text: "how to analyse an influencer's content before shortlisting", href: "/blog/influencer-content-analysis-guide" }],
      },
      { type: "heading", text: "Hooks: do the first seconds earn the rest?", id: "hooks" },
      {
        type: "paragraph",
        text: "Look at how each video opens. Strong creators vary their hooks to fit the story: a question the viewer has asked themselves, a result shown before the method, a mistake everyone makes, a moment of conflict. Weak hooks are interchangeable and could open any video. Note whether the hook is honest, too. A hook that promises something the video never delivers wins a few seconds and loses trust, and on a sponsored post that distrust lands on your brand.",
      },
      { type: "heading", text: "Narrative structure: is there a shape?", id: "narrative-structure" },
      {
        type: "paragraph",
        text: "Even a 30-second Reel can have a beginning, middle and end. Common shapes include problem to solution, before and after, a day or routine, a mini story-time with a twist, and a ranked list with a payoff at the end. For each sampled video, ask:",
      },
      {
        type: "list",
        items: [
          "Could you summarise the story in one sentence?",
          "Does something change between the start and the end?",
          "Does the middle hold up, or is it filler between hook and ending?",
          "Does the ending land, with a payoff or a clear next step, rather than just stopping?",
          "Do longer videos keep the same discipline, or wander?",
        ],
      },
      { type: "heading", text: "Product integration: does the brand belong in the story?", id: "product-integration" },
      {
        type: "paragraph",
        text: "Compare the creator's sponsored posts with their organic ones. In the best integrations, the product arrives at the turn of the story because it's the answer to the problem the creator set up. In weak ones, the creator's voice changes, the energy drops and the brand section could be cut without losing anything. Check whether brand claims are woven into what the creator shows or recited from a list, and whether the creator keeps their usual humour, language and pace while being paid.",
      },
      { type: "heading", text: "Demonstrations: showing, not telling", id: "demonstrations" },
      {
        type: "paragraph",
        text: "For many products, the most persuasive part of the story is seeing them work: the stain coming out, the app screen changing, the texture on skin in daylight. Look for creators who already show things working in their own content, film close-ups clearly and let results speak. If demonstration is the heart of your campaign, our guide to finding influencers who can create product demonstration videos covers that skill in detail.",
        links: [{ text: "finding influencers who can create product demonstration videos", href: "/blog/influencers-for-product-demonstration-videos" }],
      },
      { type: "heading", text: "Audience connection: does the story travel?", id: "audience-connection" },
      {
        type: "paragraph",
        text: "Read the comments under the videos you sampled. Signs of real connection include viewers quoting lines back, asking how to do what was shown, sharing their own version of the story, or referencing a running joke from earlier videos. A creator whose audience asks 'which one should I buy?' under organic posts already has the trust your campaign needs. A comment section full of generic praise tells you very little about whether the story landed.",
      },
      { type: "heading", text: "Shortlist the storytellers, then watch closely", id: "shortlist-storytellers" },
      {
        type: "paragraph",
        text: "Storytelling review is slow, so apply it to a shortlist, not to everyone. Narrow by niche, language and typical views first, then watch the remaining creators properly. Where your campaign runs mainly on short video, the craft checks in how to find Instagram Reels creators add retention and pacing to the same review.",
        links: [{ text: "how to find Instagram Reels creators", href: "/blog/find-instagram-reels-creators" }],
      },
      {
        type: "discovery-cta",
        headline: "Narrow the Field Before You Watch",
        body: "Kudozz Discovery lets you filter Instagram creators in India by niche, language, city and average views, open their profile metrics and save a shortlist to review. Watching their content and scoring their storytelling is done by your team.",
      },
      { type: "heading", text: "Effective vs ineffective: one brief, two videos", id: "examples" },
      {
        type: "paragraph",
        text: "Consider a hypothetical Indore-based millet snack brand that briefs two food creators to show its new masala puffs as a healthier evening snack. Both are illustrative, not real creators.",
      },
      { type: "subheading", text: "The ineffective version" },
      {
        type: "paragraph",
        text: "The video opens on the pack held to camera. The creator reads three product claims, takes a bite, says it's tasty and asks viewers to use a code. The visuals are sharp, but there's no reason to watch past the first seconds and nothing the viewer will remember. Comments are mostly about the creator's kitchen.",
      },
      { type: "subheading", text: "The effective version" },
      {
        type: "paragraph",
        text: "The video opens at 6 pm with the creator's child raiding the namkeen jar, a moment many parents recognise. The creator sets up the tension (they want something crunchy without the guilt), tries two alternatives that fail in quick, funny cuts, then brings out the puffs at the turn. A close-up shows the ingredients panel; the child's reaction is the payoff. The claims are the same as the first version, but they're shown inside a story. Comments ask where to buy and swap evening-snack struggles.",
      },
      {
        type: "paragraph",
        text: "When you review past work, you're looking for evidence of the second pattern in content the creator has already made.",
      },
      { type: "heading", text: "A storytelling scorecard", id: "scorecard" },
      {
        type: "template",
        label: "Score each part 1 (weak) to 3 (strong), with a link as evidence",
        text: "Creator: @handle    Posts reviewed: [x] organic, [y] sponsored    Reviewer: [name]\n\nHook                 1  2  3   Evidence: \nNarrative structure  1  2  3   Evidence: \nProduct integration  1  2  3   Evidence: \nDemonstration        1  2  3   Evidence: \nAudience connection  1  2  3   Evidence: \n\nSponsored posts as strong as organic?   Yes / Mostly / No\nBest-fit story shapes for our brief: \nOverall: Book / Test with a small brief / Pass",
      },
      {
        type: "paragraph",
        text: "Weight the parts by campaign. A demo-led launch weights demonstration; an awareness campaign weights hooks and audience connection. Use the same sheet for every creator so the comparison is fair, and pair it with the format checks in our sibling guide on choosing influencers for Reels, Stories and YouTube.",
        links: [{ text: "choosing influencers for Reels, Stories and YouTube", href: "/blog/influencers-for-reels-stories-youtube" }],
      },
      { type: "heading", text: "Brief storytellers differently", id: "brief-storytellers" },
      {
        type: "paragraph",
        text: "If you book a creator for their storytelling, don't hand them a script. Give the objective, the audience, the key message, mandatory claims and disclosure, and things to avoid, then let them propose the story. Our guide to creator-led campaigns explains how to brief for ideas rather than scripts, and what to include in an influencer brief covers the essentials. For bigger programmes, our campaign strategy team can shape the creative direction with you.",
        links: [
          { text: "creator-led campaigns", href: "/blog/creator-led-campaigns" },
          { text: "what to include in an influencer brief", href: "/blog/influencer-campaign-brief" },
          { text: "campaign strategy team", href: "/services/campaign-strategy" },
        ],
      },
      { type: "heading", text: "Mistakes teams make when judging storytelling", id: "mistakes" },
      {
        type: "list",
        items: [
          "Equating production polish with storytelling.",
          "Judging from a creator's single most viral video.",
          "Watching without sound, or only the first few seconds.",
          "Ignoring sponsored posts, which show how the creator handles a brief.",
          "Scoring creators differently depending on who reviews them.",
          "Booking a strong storyteller, then briefing them with a rigid script.",
        ],
      },
      { type: "heading", text: "What to remember when you press play", id: "takeaways" },
      {
        type: "paragraph",
        text: "Watch for five things: a hook that earns attention honestly, a story with a shape, a product that belongs in it, results shown rather than described, and an audience that responds to the story. Look for them in sponsored work as well as organic, write down the evidence, and brief the creators who pass with room to tell the story their own way.",
      },
    ],
    faqs: [
      {
        question: "What is influencer storytelling?",
        answer:
          "It's a creator's ability to turn a message into a short narrative people watch and remember: a hook, a setup, a turn and a payoff. In a brand campaign, good storytelling places the product inside that narrative rather than interrupting it.",
      },
      {
        question: "How many posts should I review to judge a creator's storytelling?",
        answer:
          "Ten to twelve recent posts is a practical sample, mixing organic and sponsored content and including at least one weaker performer. Watch each in full with sound, and note evidence for each part you score.",
      },
      {
        question: "Can metrics tell me whether a creator is a good storyteller?",
        answer:
          "Only partly. Typical views and engagement show whether content gets attention, but not why. You still need to watch the videos and read the comments to judge hooks, structure, integration and audience connection.",
      },
      {
        question: "Should I give a storytelling creator a script?",
        answer:
          "Usually not. Give the objective, audience, key message, mandatory claims, disclosure and things to avoid, then ask the creator to propose the story. Review the concept before filming rather than rewriting their words afterwards.",
      },
      {
        question: "What if a creator is a strong storyteller but has little brand experience?",
        answer:
          "That can still work well. Ask for a short concept before filming, share clear product facts, and consider a small first brief to see how they integrate a product before you commit to a larger campaign.",
      },
    ],
  },

  // #90 influencers-for-reels-stories-youtube (NEW)
  {
    slug: "influencers-for-reels-stories-youtube",
    category: "Influencer Marketing",
    title: "How to Choose Influencers for Instagram Reels, Stories and YouTube Videos",
    seoTitle: "How to Choose Influencers by Content Format | Kudozz",
    excerpt:
      "Reels, Stories and YouTube videos ask different things of a creator. How to choose influencers by content format, what each format is good at, and why a creator who shines in one can struggle in another.",
    metaDescription:
      "Choose influencers by content format: what Reels, Stories and YouTube videos each do best, the creator skills each needs, a comparison table and a checklist.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "7 min read",
    tags: ["Content Formats", "Instagram Reels", "Instagram Stories", "YouTube Influencers"],
    related: ["find-instagram-reels-creators", "instagram-stories-influencer-marketing", "how-to-find-youtube-influencers", "instagram-vs-youtube-vs-tiktok"],
    hero: {
      src: "/blog/discovery/influencers-for-reels-stories-youtube.svg",
      alt: "Three phone and screen frames side by side for Reels, Stories and YouTube, each paired with the creator strength it needs and the job it does best",
    },
    discoveryCta: {
      headline: "Match Instagram Creators to the Format You Need",
      body: "Explore Kudozz Discovery to find Instagram creators in India by niche, language, city, average views and posting frequency, and save Reels and Stories candidates in separate lists. Format checks, outreach and briefing stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "Brands often pick a creator first and decide the format afterwards. It works better the other way round. Choosing influencers by content format means deciding what job the content must do, picking the format that does it, and then finding creators who are genuinely good at that format, not just popular on the platform.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Use Instagram Reels creators for reach and quick product moments, Stories creators for trust, repetition and direct action through links, and YouTube creators for depth, comparison and considered purchases. Judge each creator on their record in that specific format: typical Reels views, Story habits backed by Insights screenshots, or YouTube watch behaviour shared from YouTube Studio. A creator who's excellent in one format isn't automatically good in another.",
      },
      { type: "heading", text: "What each format does best", id: "format-strengths" },
      {
        type: "table",
        headers: ["", "Instagram Reels", "Instagram Stories", "YouTube videos"],
        rows: [
          ["Best for", "Reach beyond followers, product moments, trends", "Day-to-day recommendations, links, offers, reminders", "Reviews, tutorials, comparisons, high-consideration products"],
          ["How people watch", "Swiping fast, often sound-on, many non-followers", "Tapping through, mostly existing followers", "Chosen deliberately, often searched for, longer attention"],
          ["Shelf life", "Can keep surfacing for a while", "24 hours unless saved to Highlights", "Can be found through search for a long time"],
          ["Creator skill it needs", "Hooks, pacing, editing, visual ideas", "Relaxed talk-to-camera, consistency, trust", "Structure, explanation, research, on-camera stamina"],
          ["Proof to ask for", "Typical Reels views, not just the best one", "Insights screenshots of recent Story reach and link taps", "YouTube Studio screenshots of views and watch time"],
        ],
      },
      { type: "heading", text: "Choose influencers by content format, starting with the job", id: "start-with-job" },
      {
        type: "list",
        items: [
          "Get noticed by new people: Reels, possibly YouTube Shorts.",
          "Explain a product that needs thought, such as a phone, a two-wheeler, an insurance plan or a skincare routine: YouTube long-form, supported by short cutdowns.",
          "Drive a click or code use in a short window, such as a sale: Stories with a link sticker, from creators whose followers act on their suggestions.",
          "Build familiarity over weeks: a Stories series or recurring Reels from the same creators.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're still deciding between platforms altogether, Instagram vs YouTube vs TikTok compares them at campaign level.",
        links: [{ text: "Instagram vs YouTube vs TikTok", href: "/blog/instagram-vs-youtube-vs-tiktok" }],
      },
      { type: "heading", text: "Choosing creators for Instagram Reels", id: "reels-creators" },
      {
        type: "paragraph",
        text: "Reels reward creators who can earn attention from strangers. Look at their last ten to fifteen Reels, not their pinned hits, and note typical views against follower count. Watch for a hook in the opening moments, tight edits, a visual idea you could describe in one line, and a consistent level rather than one spike. Communication style matters: fast, expressive and visual creators usually suit Reels better than slow explainers. Our guide to finding Reels creators whose views hold up adds a craft score for hook, middle and payoff.",
        links: [{ text: "finding Reels creators whose views hold up", href: "/blog/find-instagram-reels-creators" }],
      },
      { type: "heading", text: "Choosing creators for Instagram Stories", id: "stories-creators" },
      {
        type: "paragraph",
        text: "Stories reward familiarity. The best Stories creators post them habitually, talk to camera as if to a friend, answer questions and get replies. Their audience is mostly existing followers, so trust matters more than reach. Story views aren't public, so ask shortlisted creators for Insights screenshots of recent Stories: reach, replies and link taps on past link stickers. A creator who posts Stories rarely, or only reposts other content, is a weak bet however good their Reels are. Instagram Stories influencer marketing covers sequences and link strategies.",
        links: [{ text: "Instagram Stories influencer marketing", href: "/blog/instagram-stories-influencer-marketing" }],
      },
      { type: "heading", text: "Choosing creators for YouTube videos", id: "youtube-creators" },
      {
        type: "paragraph",
        text: "YouTube audiences often arrive with a question, such as which phone under a set budget or how a product compares with another, and expect a thorough, honest answer. Look for creators whose videos are well structured, who explain trade-offs and who are comfortable saying what a product does badly. Check how sponsor segments are handled in their existing videos, whether viewers skip them in the comments, and ask for YouTube Studio screenshots of views and average view duration on recent videos. For short vertical content on YouTube, the skills are closer to Reels; finding YouTube Shorts creators covers that separately.",
        links: [{ text: "finding YouTube Shorts creators", href: "/blog/find-youtube-shorts-creators" }],
      },
      { type: "heading", text: "Where to find creators for each format", id: "where-to-find" },
      {
        type: "paragraph",
        text: "Search differs by platform. For Instagram, filter by niche, location and language, then compare typical views and engagement before watching their recent Reels and asking about Stories. A profile's average views is one number across recent content, so it won't separate Reels from Stories; that's what your manual review and Insights screenshots are for. YouTube creators have to be found on YouTube itself and through other research, as explained in how to find YouTube creators for product reviews.",
        links: [{ text: "how to find YouTube creators for product reviews", href: "/blog/how-to-find-youtube-influencers" }],
      },
      {
        type: "discovery-cta",
        headline: "Search Instagram Creators by Typical Views",
        body: "Kudozz Discovery covers Instagram creators in India, with filters for niche, city, language, engagement, average views and posting frequency, and lists to save candidates by format. It doesn't include YouTube creators, so that search stays separate.",
      },
      { type: "heading", text: "Why a creator who shines in one format can struggle in another", id: "format-mismatch" },
      {
        type: "paragraph",
        text: "Each format draws on different strengths, and creators build their audiences around the ones they have. A few illustrative patterns:",
      },
      {
        type: "list",
        items: [
          "A Mumbai fashion creator with polished, fast-cut Reels can seem stiff in unscripted Stories, and their followers may tap past chatty content they don't expect from them.",
          "A Bengaluru tech reviewer known for detailed 15-minute videos may struggle to compress a story into 30 seconds without losing the nuance that earns their audience's trust.",
          "A Lucknow home cook whose daily Stories get lots of replies may have modest Reels views, because their strength is relationship, not reach.",
          "A comedy creator whose Reels travel widely may not suit a long YouTube review, where viewers expect patient explanation.",
        ],
      },
      {
        type: "paragraph",
        text: "Audience expectations matter as much as skill. If a creator's audience comes for quick entertainment, a long explainer from them may underperform even if it's well made. Book creators for the format their audience already expects from them, or run a small test first.",
      },
      { type: "heading", text: "Combining formats in one campaign", id: "combining" },
      {
        type: "paragraph",
        text: "Formats work well together when each does a different job. Say a Pune-based electric scooter brand is launching a new model. One or two YouTube creators publish detailed ride reviews for buyers doing research. Several Reels creators post short city-commute videos for reach. A handful of Stories creators share test-ride experiences with a link to book a ride during launch week. Each group is chosen for its format, briefed for its format and measured on its own job. How to balance creator sizes and roles across a plan like this is covered in how to select the right influencer mix.",
        links: [{ text: "how to select the right influencer mix", href: "/blog/select-influencer-mix-for-campaign" }],
      },
      { type: "heading", text: "Brief and measure each format on its own terms", id: "brief-each-format" },
      {
        type: "paragraph",
        text: "One brief copied across formats usually produces weak content in at least one of them. Write the format into the deliverables and judge each piece against the job it was booked for:",
      },
      {
        type: "table",
        headers: ["Format", "What the brief should specify", "What to judge it on"],
        rows: [
          ["Reels", "Key message, must-show product moment, rough length, disclosure label, any audio restrictions", "Views against the creator's typical level, saves, shares, comments about the product"],
          ["Stories", "Number of frames, link sticker and destination, posting days, code, disclosure on every frame", "Reach, replies and link taps from Insights screenshots"],
          ["YouTube", "Where the segment sits, its length, claims, description links, verbal disclosure plus the paid promotion setting", "Views over the following weeks, watch time on the segment, comments and link clicks"],
        ],
      },
      { type: "heading", text: "Format-fit checklist before you book", id: "format-fit-checklist" },
      {
        type: "template",
        label: "Format-fit check",
        text: "Creator: @handle    Format booked: [Reels / Stories / YouTube / Shorts]\n\n[ ] Has posted this format regularly in the last three months\n[ ] Typical results in this format reviewed (not their best post)\n[ ] Proof received: Insights or YouTube Studio screenshots where numbers aren't public\n[ ] Communication style suits the format (fast and visual / conversational / explanatory)\n[ ] Audience expects this kind of content from them\n[ ] Past sponsored content in this format reviewed\n[ ] Storytelling checked for this format\n[ ] Deliverables, length and disclosure in the brief match the format",
      },
      {
        type: "paragraph",
        text: "The storytelling line is worth doing properly; our sibling guide on how to judge a creator's storytelling ability sets out a scorecard.",
        links: [{ text: "how to judge a creator's storytelling ability", href: "/blog/evaluate-influencer-storytelling" }],
      },
      { type: "heading", text: "Common mistakes when matching creators to formats", id: "mistakes" },
      {
        type: "list",
        items: [
          "Booking a creator for a format they rarely post in.",
          "Using follower count as a proxy for Reels reach.",
          "Assuming Stories performance without seeing Insights screenshots.",
          "Asking a short-video creator for a long review, or the reverse, without a test.",
          "Briefing every format with the same script.",
          "Measuring Stories on reach and Reels on clicks, instead of each on its own job.",
        ],
      },
      { type: "heading", text: "Pick the format, then the person", id: "final-word" },
      {
        type: "paragraph",
        text: "Decide what the content must achieve, choose the format that achieves it, and then look for creators with a proven record in that format and an audience that expects it. For brands running both platforms, our Instagram influencer marketing and YouTube influencer marketing services can plan and manage the mix.",
        links: [
          { text: "Instagram influencer marketing", href: "/services/instagram-influencer-marketing" },
          { text: "YouTube influencer marketing services", href: "/services/youtube-influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I choose influencers by content format?",
        answer:
          "Start with the job the content must do, pick the format that does it best, then shortlist creators with a consistent record in that format. Review their typical results rather than their best post, and ask for Insights or YouTube Studio screenshots where numbers aren't public.",
      },
      {
        question: "Are Reels or Stories better for influencer campaigns?",
        answer:
          "They do different jobs. Reels are better for reaching people who don't follow the creator yet, while Stories suit recommendations, reminders and links to existing followers. Many campaigns use both, with different creators or deliverables for each.",
      },
      {
        question: "How can I see an influencer's Story performance?",
        answer:
          "Story views aren't public, so ask the creator for Instagram Insights screenshots of recent Stories, including reach, replies and link taps. Ask for several recent Stories rather than a single best example.",
      },
      {
        question: "Should I use the same creator for Instagram and YouTube?",
        answer:
          "Only if they're genuinely active and strong on both. Many creators build their audience on one platform and post occasionally on the other. Check their record on each platform separately before booking deliverables there.",
      },
      {
        question: "Does Kudozz Discovery include YouTube creators?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India. It helps you filter and compare them by niche, location, language and metrics such as average views. YouTube creators need to be found and assessed separately.",
      },
    ],
  },
];

import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

const RISK_PUBLISHED = "2026-10-08";
const RISK_REVIEWED = "October 2026";

/**
 * Compliance, brand safety and campaign risk cluster (1310–1329). Compliance, disclosure, brand safety,
 * vetting, approval, escalation and non-compliance all had strong owners, which were expanded instead.
 * The three intents with no brand-side owner were controversy response, cancellation and campaign risk
 * management. See docs/compliance-risk-1310-1329-audit.md.
 */
export const governanceRiskPosts: BlogPost[] = [
  {
    slug: "influencer-campaign-risk-management",
    category: "Campaign Strategy",
    title: "Influencer Campaign Risk Management: A Practical Framework for Brands",
    seoTitle: "Influencer Campaign Risk Management and Pre-Launch Assessment",
    excerpt:
      "The risks that actually derail creator campaigns, from creator selection and claims to delivery, rights and measurement, with a risk register, a simple pre-launch risk assessment, controls proportionate to the campaign, and who owns each risk.",
    metaDescription:
      "Manage influencer campaign risk: a risk register, a scored pre-launch risk assessment, proportionate controls, owners and Indian considerations.",
    author: AUTHOR,
    publishedAt: RISK_PUBLISHED,
    lastReviewed: RISK_REVIEWED,
    readingTime: "10 min read",
    tags: [
      "influencer campaign risk management",
      "influencer marketing risk assessment",
      "creator campaign risks",
      "influencer risk register",
      "pre-launch campaign risk",
      "influencer marketing risks India",
    ],
    related: ["influencer-marketing-brand-safety", "how-to-vet-influencers", "influencer-marketing-compliance"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-risk-management.svg",
      alt: "Influencer campaign risk cycle: identify risks, score likelihood and impact, add controls, assign owners, monitor triggers and review after the campaign",
    },
    body: [
      {
        type: "paragraph",
        text: "Most influencer campaigns that go wrong don't fail in dramatic ways. A creator delivers late and the launch-day posts slip. A Reel goes live with a claim nobody checked. The best-performing video can't be used in ads because nobody agreed paid usage. Each of these was predictable, and each had a cheap control that would have prevented it. Risk management is simply deciding, before launch, which of these your campaign is exposed to and what you'll do about them.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer campaign risk management means listing what could go wrong across the campaign (creator selection, audience quality, claims and disclosure, brand safety, delivery, rights, exclusivity, budget, measurement and platform issues), scoring each risk by likelihood and impact before launch, adding a control for the ones that matter, naming an owner, and agreeing what will trigger action during the campaign. Keep it proportionate: a small gifting test needs a one-page check, while a launch with health claims and ads running through creators' handles needs a full register.",
      },
      { type: "heading", text: "The risks that matter in creator campaigns", id: "risk-register" },
      {
        type: "table",
        headers: ["Risk area", "What can go wrong", "Early signal", "Typical control"],
        rows: [
          ["Creator selection", "Poor audience fit, unreliable creator", "Vague answers on audience data, slow replies", "Structured vetting before contract"],
          ["Audience quality", "Inflated followers or engagement", "Sudden follower spikes, generic comments", "Authenticity checks on recent posts"],
          ["Claims and disclosure", "Unsupported claims, missing or hidden disclosure", "Script drafts adding claims; past posts without labels", "Approved claims list and exact disclosure wording in the brief"],
          ["Brand safety and reputation", "Creator content or conduct that reflects badly on the brand", "Past controversies, inflammatory content", "Brand-safety review, monitoring, response plan"],
          ["Content quality", "Off-brief or unusable content", "Weak first drafts, unclear brief", "Clear brief, review stage, revision limits"],
          ["Delivery and timeline", "Late drafts, missed posting dates", "Product shipped late, slow approvals", "Buffers, fixed review turnaround, backup creators"],
          ["Communication", "Mixed messages from several brand contacts", "Creators asking different people the same question", "One point of contact per creator"],
          ["Rights and usage", "Content can't be reused as planned", "Paid plans not reflected in agreements", "Usage rights agreed before production"],
          ["Exclusivity", "Creator promotes a competitor during your campaign", "Undisclosed existing deals", "Scoped exclusivity or a competitor gap"],
          ["Budget", "Costs exceed plan", "Unpriced extras (rights, edits, travel)", "Full cost lines and contingency"],
          ["Measurement", "Results can't be attributed or compared", "Links and codes not set up before posting", "Tracking set up and tested before go-live"],
          ["Platform", "Feature changes, account restrictions, takedowns", "Platform policy updates, account warnings", "Spread across creators; avoid single points of failure"],
          ["Payments", "Disputes over what is owed", "Unclear payment triggers", "Written payment terms and records"],
        ],
      },
      {
        type: "paragraph",
        text: "Most controls already have a guide: how to vet influencers, influencer brand safety, influencer marketing compliance, influencer usage rights, influencer exclusivity, influencer campaign delays and influencer payment terms. The register's job is to make sure each one is actually applied to this campaign.",
        links: [
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
          { text: "influencer brand safety", href: "/blog/influencer-marketing-brand-safety" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer exclusivity", href: "/blog/influencer-exclusivity" },
          { text: "influencer campaign delays", href: "/blog/influencer-campaign-delays" },
          { text: "influencer payment terms", href: "/blog/influencer-payment-terms" },
        ],
      },
      { type: "heading", text: "A pre-launch risk assessment", id: "risk-assessment" },
      {
        type: "paragraph",
        text: "Before launch, go through the register for this campaign and score each risk on two simple scales. Precision isn't the point; the scores are there to force a conversation about where to spend effort.",
      },
      {
        type: "list",
        items: [
          "Likelihood: 1 unlikely, 2 possible, 3 likely, given this category, these creators and this timeline",
          "Impact: 1 minor inconvenience, 2 hurts results or timeline, 3 legal, reputational or launch-critical",
          "Score = likelihood × impact. Anything scoring 6 or 9 needs a named control and owner before launch; 3 or 4 needs a control or a conscious decision to accept it; 1 or 2 can be accepted",
        ],
      },
      {
        type: "table",
        headers: ["Hypothetical risk: skincare launch, 12 creators", "Likelihood", "Impact", "Score", "Control and owner"],
        rows: [
          ["Creators add efficacy claims beyond what the brand can substantiate", "2", "3", "6", "Approved claims list in brief; claims check at review (brand manager)"],
          ["Product reaches creators late in two cities", "2", "2", "4", "Ship 10 days earlier; courier tracking shared (operations)"],
          ["Partnership ads can't run because permissions aren't granted in time", "2", "2", "4", "Request permissions at contract stage (performance team)"],
          ["A creator posts for a competing sunscreen during the launch", "1", "2", "2", "Accepted; competitor gap clause for the four lead creators"],
          ["Old content from a lead creator resurfaces", "1", "3", "3", "Brand-safety review done; response plan agreed (brand lead)"],
        ],
      },
      {
        type: "paragraph",
        text: "Illustrative only. The value is in the controls column: each high score now has a concrete action and a person responsible for it.",
      },
      { type: "heading", text: "Keep it proportionate", id: "proportionate" },
      {
        type: "table",
        headers: ["Campaign", "Risk level", "What's enough"],
        rows: [
          ["Product seeding with no required posts", "Low", "Basic vetting, disclosure guidance in the note, a tracker"],
          ["Paid posts in a general consumer category", "Moderate", "Vetting, brand-safety check, brief with claims and disclosure, review stage, tracking"],
          ["Launch with fixed dates, many creators and paid ads through creators' handles", "High", "Full register, backup creators, rights and permissions confirmed in advance, daily monitoring in launch week"],
          ["Health, nutrition, finance or children's categories", "High", "All of the above plus claims substantiation, creator qualifications where technical claims are made, and legal review"],
        ],
      },
      { type: "heading", text: "During the campaign: triggers, not constant worry", id: "triggers" },
      {
        type: "paragraph",
        text: "For each high-scoring risk, agree in advance what will make you act. For example: a draft more than two days late moves to the backup creator; a post live without disclosure gets a same-day correction request; negative sentiment on a creator's post above what's normal for them goes to the brand lead within the hour. Pre-agreed triggers stop small issues becoming debates. Influencer campaign escalation sets out severity levels and response times, and influencer controversy response covers the rare cases where a creator becomes the story.",
        links: [
          { text: "Influencer campaign escalation", href: "/blog/influencer-campaign-escalation" },
          { text: "influencer controversy response", href: "/blog/influencer-controversy-response" },
        ],
      },
      { type: "heading", text: "Who owns which risk", id: "owners" },
      {
        type: "table",
        headers: ["Risk", "Usually owned by"],
        rows: [
          ["Creator selection, vetting, brand safety", "Brand or agency campaign lead"],
          ["Claims and regulated content", "Brand manager with legal or regulatory input"],
          ["Disclosure on live posts", "Whoever runs go-live checks"],
          ["Delivery and timeline", "Campaign manager"],
          ["Rights, permissions and exclusivity", "Whoever manages creator agreements"],
          ["Paid amplification permissions", "Performance or media team"],
          ["Measurement and tracking", "Analytics or performance lead"],
        ],
      },
      {
        type: "paragraph",
        text: "If an agency runs the campaign, write down which risks it owns and which stay with the brand; claims substantiation and final legal sign-off usually stay with the brand. Influencer marketing governance covers approvals and policies across teams.",
        links: [{ text: "Influencer marketing governance", href: "/blog/influencer-marketing-governance" }],
      },
      { type: "heading", text: "Risks specific to Indian campaigns", id: "india" },
      {
        type: "list",
        items: [
          "Regulated categories: technical health, nutrition and financial claims carry qualification expectations under ASCI's guidelines, regulated financial entities face SEBI restrictions on associating with unregistered finfluencers, and promoting online money games is prohibited. Check current rules for your category.",
          "Multi-language review: if creators post in several languages, someone fluent needs to review claims and disclosure in each.",
          "Festive timelines: creator availability tightens and courier timelines stretch around major festivals and sale events.",
          "Attribution gaps: cash-on-delivery, marketplace and WhatsApp-driven purchases often leave no code or link trail, so a campaign can look weaker than it was.",
          "Many small creators: nano and micro-heavy campaigns multiply contracts, shipments and approvals, so delivery risk rises with creator count.",
        ],
      },
      {
        type: "paragraph",
        text: "Regulatory detail for brands is in influencer marketing compliance; measurement gaps in how to measure influencer marketing ROI.",
        links: [
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
          { text: "how to measure influencer marketing ROI", href: "/blog/measuring-influencer-campaign-roi" },
        ],
      },
      { type: "heading", text: "After the campaign", id: "after" },
      {
        type: "paragraph",
        text: "Add what actually happened to the register: which risks materialised, which controls worked, and which risks you didn't see coming. Carry it into the next campaign's assessment. The influencer campaign post-mortem is the natural place to do this.",
        links: [{ text: "influencer campaign post-mortem", href: "/blog/influencer-campaign-post-mortem" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating risk as only brand safety, while delivery, rights and measurement cause most of the actual damage",
          "A register written once and never used during the campaign",
          "Risks with no named owner",
          "The same heavy process for a gifting test and a regulated-category launch",
          "No pre-agreed triggers, so every issue becomes a debate",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good risk management in influencer marketing is unglamorous: a list of what could go wrong, a score, a control, an owner and a trigger. Done before launch, it takes an hour for most campaigns and saves the scramble later. This guide is general information; for regulated categories, check current rules and take legal advice.",
      },
    ],
    faqs: [
      {
        question: "What is influencer campaign risk management?",
        answer:
          "Identifying what could go wrong in a creator campaign, from creator selection, claims and disclosure to delivery, rights and measurement, scoring each risk, adding controls for the important ones, naming owners and agreeing triggers for action during the campaign.",
      },
      {
        question: "How do you assess influencer marketing risk before launch?",
        answer:
          "Go through each risk area for the specific campaign, score likelihood and impact on a simple 1 to 3 scale, and make sure every high-scoring risk has a control and an owner before anything goes live.",
      },
      {
        question: "What are the biggest risks in influencer marketing?",
        answer:
          "It depends on the campaign, but common ones are poor creator fit, inflated audiences, unsupported claims, missing disclosure, late delivery, content that can't be reused as planned, and results that can't be measured. Reputational incidents are rarer but higher impact.",
      },
      {
        question: "Does a small influencer campaign need a risk assessment?",
        answer:
          "A light one. A gifting test needs basic vetting, disclosure guidance and a tracker. Fuller assessments are for launches, paid amplification through creators' handles and regulated categories.",
      },
    ],
  },
  {
    slug: "influencer-controversy-response",
    category: "Brand Marketing",
    title: "Influencer Controversy During a Campaign: What Should a Brand Do?",
    seoTitle: "Influencer Controversy Mid-Campaign: A Brand Response Plan",
    excerpt:
      "When a creator you're working with becomes the story: how to verify before reacting, what to pause in the first hours, how to decide between continuing, pausing, distancing and ending, what to say and not say, and how to handle the contract and payment calmly.",
    metaDescription:
      "What to do when an influencer becomes controversial mid-campaign: first 24 hours, pausing ads, deciding to continue or end, statements, contracts and payment.",
    author: AUTHOR,
    publishedAt: RISK_PUBLISHED,
    lastReviewed: RISK_REVIEWED,
    readingTime: "9 min read",
    tags: [
      "influencer controversy",
      "influencer crisis management for brands",
      "creator reputation risk",
      "what to do if an influencer is cancelled",
      "brand response to influencer controversy",
    ],
    related: ["influencer-marketing-brand-safety", "influencer-campaign-escalation", "influencer-campaign-cancellation"],
    hero: {
      src: "/blog/brand-guides/influencer-controversy-response.svg",
      alt: "Brand response to an influencer controversy: verify the facts, pause scheduled posts and ads, assess severity and link to the campaign, decide, then communicate",
    },
    body: [
      {
        type: "paragraph",
        text: "Hypothetical: a snack brand is three days into a campaign when an old video from one of its creators starts circulating, with comments tagging the brand and asking why it works with them. The social team wants to post something now. The performance team has partnership ads running through the creator's handle. Nobody is sure what the contract allows. The decisions made in the next few hours matter more than anything said a week later.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "When a creator becomes controversial during a campaign: verify what actually happened before reacting; pause anything scheduled and any paid ads running through the creator's identity while you assess; talk to the creator privately; judge severity and how closely the issue connects to your brand and campaign; then choose to continue, pause, continue without paid amplification, distance the brand, or end the partnership. Check the agreement before taking any action on content or payment, keep public statements short and factual, and document every decision.",
      },
      { type: "heading", text: "The first 24 hours", id: "first-24-hours" },
      {
        type: "table",
        headers: ["When", "Do", "Avoid"],
        rows: [
          ["First 2 hours", "Gather the facts: what was said or done, when, where, and whether it's new or old content resurfacing. Tell the brand lead and whoever approves public statements.", "Public comment before you know what happened"],
          ["Hours 2 to 6", "Pause scheduled creator posts and paid ads using the creator's identity. Contact the creator privately. Read the agreement.", "Deleting brand comments wholesale or blocking users"],
          ["Hours 6 to 24", "Assess severity and relevance (below). Decide on an interim position. Prepare a holding line if people are asking the brand directly.", "Making allegations about the creator, or speaking on their behalf"],
          ["Days 2 to 7", "Make the decision, communicate it to the creator first, then externally if needed. Record it.", "Changing position repeatedly in public"],
        ],
      },
      { type: "heading", text: "How serious is it, and is it about you?", id: "severity" },
      {
        type: "table",
        headers: ["Situation", "Typical seriousness", "Common response"],
        rows: [
          ["Old content resurfacing that conflicts with your values", "Varies with content and the creator's response", "Pause, hear the creator out, decide on continuing or distancing"],
          ["A new statement or post unrelated to your brand", "Varies widely", "Pause paid amplification; continue or distance depending on severity"],
          ["Serious allegations about conduct, not yet established", "High uncertainty", "Pause; avoid public judgment; decide on facts and the agreement"],
          ["A problem with your campaign itself (a misleading claim, missing disclosure)", "High, and it is about you", "Correct or remove the content, fix the process, own it publicly if asked"],
          ["Backlash against the brand for choosing the creator", "Depends on the audience and the issue", "Listen before reacting; explain the decision or change it"],
          ["Platform action against the creator's account", "Operational", "Pause; confirm what's affected; adjust delivery"],
        ],
      },
      {
        type: "paragraph",
        text: "Two questions do most of the work: how serious is the issue on its own, and how close is it to what your brand stands for and to this campaign? A creator's view on a film is rarely your business. Content that attacks people, spreads harmful misinformation in your category, or contradicts your campaign's own message usually is.",
      },
      { type: "heading", text: "Your options", id: "options" },
      {
        type: "table",
        headers: ["Option", "When it fits", "Watch for"],
        rows: [
          ["Continue as planned", "Minor issue, unrelated to your brand, creator handled it well", "Monitoring comments on your posts"],
          ["Pause", "Facts unclear; you need time", "Telling the creator it's a pause, not a decision"],
          ["Continue organically, stop paid amplification", "The issue is moderate; you don't want to put spend behind it", "Ad permissions and any usage commitments"],
          ["Distance the brand (no future work, no new posts)", "Serious enough to end the association, not the agreement", "What the agreement says about remaining deliverables"],
          ["End the partnership", "Serious and clearly connected to your brand or values", "Agreement terms, payment owed, published content and rights"],
        ],
      },
      {
        type: "paragraph",
        text: "Asking a creator to remove content already published, or ending the partnership early, depends on what the agreement allows; many agreements include a reputational-harm or conduct clause, but its wording decides what you can do. Read it before acting, and take legal advice for anything significant. Influencer campaign cancellation covers ending a partnership professionally.",
        links: [{ text: "Influencer campaign cancellation", href: "/blog/influencer-campaign-cancellation" }],
      },
      { type: "heading", text: "Talking to the creator", id: "creator" },
      {
        type: "list",
        items: [
          "Call or message privately and early, before any public statement",
          "Ask what happened and what they plan to do, rather than telling them what to say",
          "Explain what you've paused and why, and that no final decision has been made yet if that's the case",
          "Agree how you'll communicate with each other while things are moving",
          "Confirm any decision in writing once made",
        ],
      },
      { type: "heading", text: "What to say publicly, if anything", id: "statements" },
      {
        type: "paragraph",
        text: "Often the right public response is none, or a short reply to people asking the brand directly. If you do say something, keep it about your own actions, not the creator's character, and don't repeat or add to allegations.",
      },
      {
        type: "template",
        label: "Example holding line (adapt; not a script to copy)",
        text: "We're aware of the conversation about [creator]'s recent [post/video]. We've paused our campaign content while we look into it and will share an update once we've made a decision.",
      },
      {
        type: "paragraph",
        text: "Avoid deleting critical comments en masse, arguing in replies, or posting statements that judge disputed facts. Influencer sentiment analysis helps you see whether concern is growing or fading before you decide whether to say more.",
        links: [{ text: "Influencer sentiment analysis", href: "/blog/influencer-sentiment-analysis" }],
      },
      { type: "heading", text: "Payment, content and rights", id: "contract" },
      {
        type: "paragraph",
        text: "Don't withhold payment or demand removals unilaterally in the heat of the moment. Work out from the agreement what's owed for work already delivered, what happens to remaining deliverables, whether content must stay up or come down, and what happens to usage rights and ad permissions. Stop paid ads through the creator's handle while you decide; the platform permission and the contract are separate, so record what you've switched off and when. Influencer marketing contracts and influencer whitelisting and ad authorization cover the relevant terms.",
        links: [
          { text: "Influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
          { text: "influencer whitelisting and ad authorization", href: "/blog/ugc-whitelisting-creator-licensing" },
        ],
      },
      { type: "heading", text: "Afterwards", id: "afterwards" },
      {
        type: "paragraph",
        text: "Write down what happened, what you decided and why, and what you'd change. Then ask whether your checks could reasonably have caught it. Sometimes they couldn't; sometimes the creator's history showed patterns your brand-safety review didn't weigh. Feed it into influencer brand safety checks and your campaign risk register.",
        links: [
          { text: "influencer brand safety checks", href: "/blog/influencer-marketing-brand-safety" },
          { text: "campaign risk register", href: "/blog/influencer-campaign-risk-management" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Posting a statement before knowing the facts",
          "Leaving paid ads running through the creator's handle while deciding",
          "Ending the partnership publicly before telling the creator",
          "Withholding payment for work already delivered without checking the agreement",
          "Treating every online argument as a crisis",
          "No record of what was decided and why",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Controversies are rare, but when one happens the pressure to react instantly is intense. Verify, pause what you control, talk to the creator, judge severity and relevance, check the agreement, then decide and communicate once. A plan agreed before the campaign makes every one of these steps faster. This guide is general information, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "What should a brand do if an influencer becomes controversial during a campaign?",
        answer:
          "Verify the facts, pause scheduled posts and paid ads using the creator's identity, contact the creator privately, assess how serious the issue is and how closely it connects to your brand, check the agreement, then decide whether to continue, pause, stop paid amplification, distance the brand or end the partnership.",
      },
      {
        question: "Should a brand make a public statement about an influencer controversy?",
        answer:
          "Often not, or only a short holding line if people are asking the brand directly. Keep it about your own actions, avoid judging disputed facts, and update once you've decided.",
      },
      {
        question: "Can a brand ask an influencer to delete sponsored content?",
        answer:
          "It depends on the agreement. Many agreements address content removal and reputational harm, but the wording decides what's allowed. Read it, and take legal advice for significant decisions.",
      },
      {
        question: "Should a brand stop paying an influencer after a controversy?",
        answer:
          "Not unilaterally or in the heat of the moment. Work out from the agreement what's owed for work already delivered and what happens to remaining deliverables, then act on that.",
      },
    ],
  },
  {
    slug: "influencer-campaign-cancellation",
    category: "Campaign Strategy",
    title: "Influencer Campaign Cancellation: How Brands Should Decide and Handle It Professionally",
    seoTitle: "Cancelling an Influencer Campaign: A Guide for Brands",
    excerpt:
      "Whether to cancel, postpone, rescope or replace; what changes depending on how far the campaign has gone; what to check in the agreement; and how to tell a creator, settle what's owed and close out content, rights and records without burning the relationship.",
    metaDescription:
      "How brands should cancel an influencer campaign: cancel vs postpone or rescope, what changes by stage, payment and rights, and ending it well.",
    author: AUTHOR,
    publishedAt: RISK_PUBLISHED,
    lastReviewed: RISK_REVIEWED,
    readingTime: "9 min read",
    tags: [
      "influencer campaign cancellation",
      "cancel influencer partnership",
      "end creator partnership",
      "influencer kill fee",
      "influencer contract termination",
    ],
    related: ["influencer-marketing-contract", "influencer-controversy-response", "creator-non-compliance"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-cancellation.svg",
      alt: "Decision path before cancelling an influencer campaign: postpone, rescope, replace or cancel, then settle payment, content and rights in writing",
    },
    body: [
      {
        type: "paragraph",
        text: "Campaigns get cancelled for ordinary reasons more often than dramatic ones: a launch slips, a budget is cut, a product is recalled, priorities change. Sometimes the reason is the creator: missed deadlines, a serious breach or a reputational problem. Either way, how a brand cancels decides what it pays, what happens to content and rights, and whether good creators want to work with it again.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before cancelling an influencer campaign, check whether postponing, rescoping or replacing the creator would solve the problem. If cancellation is right, read the agreement for cancellation terms, kill fees and what's owed for work done; get internal sign-off; tell the creator directly and early, with a reason; confirm in writing what happens to the fee, product, unpublished and published content, usage rights and ad permissions; pay what's owed promptly; and close out your records. How much is owed usually depends on the agreement and how far the work has progressed.",
      },
      { type: "heading", text: "Cancel, postpone, rescope or replace?", id: "options" },
      {
        type: "table",
        headers: ["Reason", "Consider first", "Cancel when"],
        rows: [
          ["Launch or product delayed", "Postponing with new dates", "The product won't launch, or dates are unknown for months"],
          ["Budget cut", "Rescoping deliverables or creator count", "The campaign no longer makes sense at any size"],
          ["Creator late or off-brief", "Clear feedback, a revision, a deadline", "Repeated misses after fair chances, or the launch date can't move"],
          ["Serious breach (disclosure refused, unapproved claims)", "A same-day correction request", "The creator won't correct, or it repeats"],
          ["Reputational issue with the creator", "Pausing while you assess", "The issue is serious and clearly connected to your brand"],
          ["Strategy change", "Moving the creator to a different campaign", "There's no future fit"],
        ],
      },
      {
        type: "paragraph",
        text: "Problems with a creator's work have their own guides: creator non-compliance and influencer campaign escalation. A reputational issue mid-campaign is covered in influencer controversy response.",
        links: [
          { text: "creator non-compliance", href: "/blog/creator-non-compliance" },
          { text: "influencer campaign escalation", href: "/blog/influencer-campaign-escalation" },
          { text: "influencer controversy response", href: "/blog/influencer-controversy-response" },
        ],
      },
      { type: "heading", text: "What changes with the campaign stage", id: "by-stage" },
      {
        type: "table",
        headers: ["Stage", "What's usually at stake", "Questions to settle"],
        rows: [
          ["Agreed by message, nothing signed", "Little, but the creator may have held dates for you", "Tell them quickly; consider goodwill for any blocked dates"],
          ["Agreement signed, no work started", "Cancellation terms; any advance paid", "Does the agreement set a kill fee or notice period? Is the advance refundable?"],
          ["Product shipped, content in production", "Creator time already spent; product", "What's owed for work done? Does the creator keep the product?"],
          ["Content delivered, not published", "The creator's full work", "Is the full fee or a set share due? Who may use the unpublished content?"],
          ["Content published", "Fee due; live posts; rights", "Does the post stay up? Do usage rights continue or end?"],
          ["Paid usage or ads running", "Rights fees; ad permissions", "Stop ads, revoke or let permissions lapse, settle any rights fee"],
        ],
      },
      {
        type: "paragraph",
        text: "The answers come from your agreement, not from general practice. Kill fees, notice periods and what happens to content are commercial terms that should be in every contract; influencer marketing contracts covers them, and creators' side of the same conversation is in creator cancellation policy.",
        links: [
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
          { text: "creator cancellation policy", href: "/blog/creator-cancellation-policy" },
        ],
      },
      { type: "heading", text: "Before you cancel: a short checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Is cancellation the right fix, or would postponing, rescoping or replacing work?",
          "What does the agreement say about cancellation, notice, kill fees and work already done?",
          "What has the creator already delivered, and what has been paid?",
          "Is any content already live, and are any ads running through the creator's handle?",
          "What happens to usage rights and platform ad permissions?",
          "Do you need a replacement creator, and is there time?",
          "Who internally must approve the cancellation and any payment?",
          "If the reason involves a breach or reputational issue, is the evidence documented?",
        ],
      },
      { type: "heading", text: "Handling it professionally", id: "handling" },
      {
        type: "list",
        items: [
          "Tell the creator directly, by call or a personal message, before they hear it any other way",
          "Give an honest reason, as far as you can share it",
          "Separate 'we're cancelling' from 'here's what happens next' so the details are clear",
          "Confirm in writing: what will be paid and when, what happens to the product, unpublished content, published posts, usage rights and ad permissions",
          "Pay what's owed on time; late payment after a cancellation does more reputational damage than the cancellation",
          "If the creator did nothing wrong, say so, and say whether you'd work with them again",
        ],
      },
      {
        type: "template",
        label: "Example message structure (adapt to your agreement; not legal wording)",
        text: "Hi [name], I wanted to tell you directly that we're cancelling the [campaign] because [reason]. This isn't about your work, which we valued. As per our agreement, we'll pay [amount] for the work completed by [date]. You can keep the product. Please don't publish the draft content; we won't use it either. We'd like to work with you again when [next opportunity]. I'll confirm all of this by email today.",
      },
      { type: "heading", text: "Content, rights and ad permissions", id: "content-rights" },
      {
        type: "paragraph",
        text: "Cancellation doesn't automatically undo what's already happened. Published posts stay on the creator's account unless the agreement provides for removal or you agree it. Usage rights you've licensed may continue for their term, or end, depending on the agreement; stop using any content you no longer have rights to. Pause or end ads running through the creator's handle and note the date. Record all of it in your rights register. Influencer usage rights explains licence terms.",
        links: [{ text: "Influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "When the creator cancels", id: "creator-cancels" },
      {
        type: "paragraph",
        text: "Creators cancel too: illness, family emergencies, a conflicting deal they didn't disclose. Check the agreement for what happens to any advance and product, ask for unpublished drafts if your agreement entitles you to them, and move to a backup creator. Keeping one or two backups on standby for launch campaigns is cheaper than scrambling.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Cancelling by silence and letting the creator find out from changed plans",
          "Refusing payment for completed work because the campaign was cancelled",
          "Continuing to use content after the rights or the partnership end",
          "Leaving partnership ads running after cancelling",
          "No written confirmation of what was agreed on cancellation",
          "Cancellation terms missing from the original agreement",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Cancelling well is mostly about doing the obvious things in order: check the alternatives, read the agreement, tell the creator directly, confirm everything in writing and pay on time. Brands that do this keep good creators willing to work with them next time. This guide is general information; for significant amounts or disputed breaches, take legal advice.",
      },
    ],
    faqs: [
      {
        question: "Can a brand cancel an influencer campaign after signing?",
        answer:
          "Usually, but on the terms of the agreement. Check its cancellation, notice and kill-fee terms and what's owed for work already done, then confirm the outcome with the creator in writing.",
      },
      {
        question: "Do brands have to pay influencers if a campaign is cancelled?",
        answer:
          "It depends on the agreement and how far the work has progressed. Work already delivered is commonly paid for, and many agreements set a kill fee for cancellations after signing. Check your agreement and pay what's owed promptly.",
      },
      {
        question: "What happens to published posts if a campaign is cancelled?",
        answer:
          "They usually stay up unless the agreement provides for removal or the creator agrees to take them down. Usage rights and ad permissions should also be settled explicitly.",
      },
      {
        question: "How should a brand tell an influencer the campaign is cancelled?",
        answer:
          "Directly and early, with an honest reason, followed by written confirmation of payment, product, content, rights and ad permissions. If the creator did nothing wrong, say so.",
      },
    ],
  },
];

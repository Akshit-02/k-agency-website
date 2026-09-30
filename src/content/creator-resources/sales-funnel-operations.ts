import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_8_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Sales funnel operations (700–749 layer): email funnel, checkout experience
 * and product analytics. Lead magnets, landing pages, the funnel and the
 * customer journey (742, 744, 745, 747) stay in their existing guides.
 */
export const salesFunnelOperationsPosts: BlogPost[] = [
  {
    slug: "creator-email-funnel",
    category: "Creator Resources",
    title: "Creator Email Funnel: How to Turn Subscribers Into Customers",
    seoTitle: "Creator Email Funnel: Turn Subscribers Into Customers",
    excerpt:
      "How creators build email funnels that sell without spamming: welcome, nurture and offer sequences, segmenting by interest, writing emails people read, timing offers, evergreen vs launch funnels, consent and unsubscribes, and the metrics that matter.",
    metaDescription:
      "How creators build email funnels: welcome, nurture and offer sequences, segmentation, writing emails people read, timing offers, consent and key metrics.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator email funnel", "email marketing for creators", "email sequence", "welcome email sequence", "sell with email", "nurture sequence"],
    related: ["creator-lead-magnets", "creator-funnel", "creator-newsletter-india"],
    body: [
      {
        type: "paragraph",
        text: "An email list isn't valuable because of its size. It's valuable because people chose to hear from you, in a place where you decide when to speak. An email funnel uses that relationship to move subscribers from \"I downloaded your checklist\" to \"I trust you enough to buy\", through a sequence of emails that help first and sell later.",
      },
      {
        type: "paragraph",
        text: "This guide covers email funnels. Getting subscribers is covered in creator lead magnets; the newsletter itself in how to build an email newsletter as a creator in India.",
        links: [
          { text: "creator lead magnets", href: "/blog/creator-lead-magnets" },
          { text: "how to build an email newsletter", href: "/blog/creator-newsletter-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator email funnel is a planned series of emails that turns new subscribers into customers. It usually has three parts: a welcome sequence (deliver what they signed up for and introduce you), a nurture sequence (useful emails that build trust and connect the problem to your offer) and an offer sequence (a few emails presenting the offer, answering objections and giving a clear next step). Segment subscribers by interest, write short useful emails, time offers after value, respect consent and unsubscribes, and measure clicks, replies and sales rather than opens alone.",
      },
      { type: "heading", text: "The three sequences", id: "sequences" },
      {
        type: "table",
        headers: ["Sequence", "Goal", "Emails (typical)"],
        rows: [
          ["Welcome", "Deliver and introduce", "2–3 over the first week"],
          ["Nurture", "Build trust; connect problem to solution", "3–6 over 2–4 weeks"],
          ["Offer", "Present the offer; answer objections", "3–5 over a week"],
        ],
      },
      {
        type: "paragraph",
        text: "After the funnel, subscribers join your regular newsletter.",
      },
      { type: "heading", text: "An example funnel", id: "example" },
      {
        type: "template",
        label: "Illustrative funnel: Excel template creator",
        text: "Lead magnet: \"Month-end report checklist\"\nWelcome (days 0–3): checklist delivered · who I am · my most useful free video\nNurture (days 5–20): 3 time-saving formulas · a reader's before/after (with permission) · common mistakes\nOffer (days 21–27): the Excel course: what's included, who it's for · FAQ · student story · final reminder (real deadline: bonus ends)\nThen: weekly newsletter",
      },
      { type: "heading", text: "Segment by interest", id: "segment" },
      {
        type: "paragraph",
        text: "Tag subscribers by the lead magnet they chose or links they click. A subscriber who downloaded a budgeting sheet shouldn't get the same offer as one who downloaded a freelancing checklist. Most email tools support tags or segments.",
      },
      { type: "heading", text: "Write emails people read", id: "writing" },
      {
        type: "list",
        items: [
          "One idea per email.",
          "Subject lines that say what's inside.",
          "Short paragraphs; mobile-first.",
          "Personal voice; stories and examples.",
          "One clear link or action.",
          "Invite replies; they build relationships and deliverability.",
        ],
      },
      { type: "heading", text: "Timing offers", id: "timing" },
      {
        type: "paragraph",
        text: "Offer after value, not before. In a nurture sequence, a light mention of your product is fine; the full offer sequence comes once subscribers have received useful emails. Don't sell in every email of your regular newsletter.",
      },
      { type: "heading", text: "Evergreen vs launch funnels", id: "evergreen" },
      {
        type: "table",
        headers: ["Evergreen funnel", "Launch funnel"],
        rows: [
          ["Runs automatically for each new subscriber", "Runs for everyone at once during a launch"],
          ["Steady sales over time", "Concentrated sales in a window"],
          ["Good for templates, mini-courses", "Good for cohorts, new products"],
        ],
      },
      {
        type: "paragraph",
        text: "Course launches often combine both; see creator course launch.",
        links: [{ text: "creator course launch", href: "/blog/creator-course-launch" }],
      },
      { type: "heading", text: "Consent and unsubscribes", id: "consent" },
      {
        type: "paragraph",
        text: "Tell people what they're signing up for, make unsubscribing easy, honour it immediately and follow applicable data protection rules. People who leave aren't lost customers; people who stay unwillingly hurt your deliverability.",
      },
      { type: "heading", text: "Metrics", id: "metrics" },
      {
        type: "table",
        headers: ["Metric", "Why"],
        rows: [
          ["Click rate", "Interest in content and offer"],
          ["Reply rate", "Relationship strength"],
          ["Conversion rate by sequence", "Funnel effectiveness"],
          ["Unsubscribe rate after offers", "Offer timing and frequency"],
          ["Revenue per subscriber", "Business value"],
        ],
      },
      {
        type: "paragraph",
        text: "Open rates are less reliable than they used to be because of privacy features in email apps; weigh clicks and replies more.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No welcome sequence; the lead magnet arrives and nothing follows.",
          "Selling in the first email.",
          "One offer for every subscriber regardless of interest.",
          "Hard-to-find unsubscribe links.",
          "Judging success by opens alone.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "An email funnel turns trust into sales by helping first: a welcome that delivers, a nurture sequence that builds trust, and an offer sequence that answers real questions. Segment by interest, write short useful emails and measure clicks, replies and sales.",
      },
    ],
    faqs: [
      {
        question: "What is an email funnel for creators?",
        answer:
          "A planned series of emails that moves new subscribers from signing up to buying, usually through welcome, nurture and offer sequences.",
      },
      {
        question: "How many emails should a creator email funnel have?",
        answer:
          "Often two to three welcome emails, three to six nurture emails and three to five offer emails, adjusted to your product and audience.",
      },
      {
        question: "Should creators sell in every email?",
        answer:
          "No. Offer after providing value, keep regular newsletters mostly useful, and use a focused offer sequence when you're selling.",
      },
    ],
  },
  {
    slug: "creator-checkout",
    category: "Creator Resources",
    title: "Creator Checkout Experience: How to Reduce Friction When Selling Online",
    seoTitle: "Creator Checkout: Reduce Friction When Selling Online",
    excerpt:
      "How creators make buying easy: mobile-first checkout, UPI and cards, fewer fields, clear pricing with GST, trust signals, refund and support information, instant delivery, abandoned checkout follow-up and testing the purchase yourself.",
    metaDescription:
      "How creators reduce checkout friction: mobile-first checkout, UPI and cards, fewer fields, clear pricing and GST, trust signals, refunds, instant delivery and testing.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator checkout", "reduce checkout friction", "UPI checkout creators", "sell online India checkout", "payment page creators", "abandoned checkout"],
    related: ["creator-landing-pages", "creator-storefront", "creator-product-analytics"],
    body: [
      {
        type: "paragraph",
        text: "A surprising share of sales are lost at the last step: the buyer clicked \"buy\", reached the payment page and left. The price wasn't the problem; the checkout was. It asked for too much information, didn't offer their preferred payment method, looked untrustworthy, or failed on their phone.",
      },
      {
        type: "paragraph",
        text: "This guide covers the checkout step. The page that sends people to checkout is covered in creator landing pages; storefront options in creator storefront.",
        links: [
          { text: "creator landing pages", href: "/blog/creator-landing-pages" },
          { text: "creator storefront", href: "/blog/creator-storefront" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To reduce checkout friction: make checkout mobile-first, offer UPI plus cards and other common methods, ask only for essential details, show the total price (including GST where applicable) before payment, add trust signals (your name, contact details, refund policy), deliver the product instantly with a clear confirmation email, follow up on abandoned checkouts where consent allows, and buy your own product on a phone to test the whole flow regularly.",
      },
      { type: "heading", text: "Common friction points", id: "friction" },
      {
        type: "table",
        headers: ["Friction", "Fix"],
        rows: [
          ["No UPI or preferred method", "Use a gateway or platform that supports UPI and cards"],
          ["Too many fields", "Ask for name, email and phone only if needed"],
          ["Surprise costs", "Show GST and fees before the payment step"],
          ["Slow or broken on mobile", "Test on a mid-range Android phone"],
          ["Unclear what happens next", "State delivery method and timing"],
          ["Doesn't look trustworthy", "Show your name, contact, refund policy"],
          ["Payment failures", "Offer a retry and alternative method"],
        ],
      },
      { type: "heading", text: "Payment methods in India", id: "payments" },
      {
        type: "paragraph",
        text: "UPI is widely used in India, alongside cards, net banking and wallets. Choose a payment gateway or platform that supports the methods your audience uses, handles failed payments gracefully and provides receipts. For international buyers, check currency and card support.",
      },
      { type: "heading", text: "Show the full price", id: "price" },
      {
        type: "paragraph",
        text: "Display the final price including GST, where applicable, before the payment step. If you're GST-registered, invoices should meet GST requirements; see GST for creators.",
        links: [{ text: "GST for creators", href: "/blog/gst-for-influencers-india" }],
      },
      { type: "heading", text: "Trust signals", id: "trust" },
      {
        type: "list",
        items: [
          "Your name and photo, consistent with your content.",
          "Contact email or support route.",
          "Refund and cancellation policy, linked near the button.",
          "Secure payment provider branding.",
          "A short summary of what they're buying.",
        ],
      },
      {
        type: "paragraph",
        text: "India's consumer protection rules for e-commerce expect sellers to be transparent about prices, refunds and grievance handling; check how they apply to how you sell.",
      },
      { type: "heading", text: "Delivery and confirmation", id: "delivery" },
      {
        type: "paragraph",
        text: "Deliver digital products instantly by email and on-screen, with clear instructions. For courses and memberships, include login steps. For services, include next steps and a booking link. A good confirmation email prevents support requests and refund anxiety.",
      },
      { type: "heading", text: "Abandoned checkouts", id: "abandoned" },
      {
        type: "paragraph",
        text: "Some platforms let you follow up with people who started but didn't finish checkout, if they gave consent. A single helpful reminder with answers to common questions is enough; don't pressure.",
      },
      { type: "heading", text: "Test it yourself", id: "test" },
      {
        type: "template",
        label: "Monthly checkout test",
        text: "☐ Buy your product on a phone using UPI\n☐ Check price and GST display\n☐ Check delivery email arrives and links work\n☐ Try a failed payment and retry\n☐ Check refund policy link works\n☐ Time the whole process",
      },
      { type: "heading", text: "Worked example: fixing a leaky checkout", id: "example" },
      {
        type: "template",
        label: "Illustrative: a template creator's product",
        text: "Before: 1,000 product page visits → 180 checkout starts → 54 purchases (30% of checkout starts)\nTest purchase on a phone revealed:\n• Card-only payment; no UPI\n• Seven required fields, including address, for a digital download\n• GST added only on the final screen\n• Confirmation email went to spam\nChanges: switched to a gateway with UPI; reduced to name + email; showed total price upfront; added a refund policy link; fixed email authentication settings\nAfter (following month): 180 checkout starts → 117 purchases (65%)",
      },
      {
        type: "paragraph",
        text: "Numbers are illustrative; the point is that checkout problems are often invisible until you buy your own product.",
      },
      { type: "heading", text: "Checkout by offer type", id: "by-offer" },
      {
        type: "table",
        headers: ["Offer", "What checkout must make clear"],
        rows: [
          ["Digital download", "Instant delivery, file format, licence"],
          ["Course", "Access duration, start date, login steps"],
          ["Membership", "Recurring charge, how to cancel"],
          ["Workshop", "Date, time zone, recording availability"],
          ["Service", "What happens next, booking link, deposit vs full payment"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Card-only checkout for an Indian audience.",
          "Asking for address and date of birth for a digital download.",
          "Surprise GST at the last step.",
          "No confirmation email.",
          "Never testing the purchase flow.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Checkout is where interest turns into purchase or disappears. Keep it mobile-first, offer the payment methods your audience uses, ask for little, show the full price, build trust, deliver instantly and test it yourself regularly.",
      },
    ],
    faqs: [
      {
        question: "How can creators reduce checkout drop-off?",
        answer:
          "Make checkout mobile-friendly, offer UPI and cards, ask for minimal details, show the full price upfront, display refund and contact information, and deliver instantly.",
      },
      {
        question: "Do Indian buyers prefer UPI for digital products?",
        answer:
          "UPI is widely used in India, so offering it alongside cards and other methods usually reduces friction.",
      },
      {
        question: "Should creators show GST at checkout?",
        answer:
          "Show the total price, including GST where applicable, before the payment step so buyers aren't surprised.",
      },
    ],
  },
  {
    slug: "creator-product-analytics",
    category: "Creator Resources",
    title: "Creator Product Analytics: What to Measure After Launching a Paid Offer",
    seoTitle: "Creator Product Analytics: What to Measure After You Launch",
    excerpt:
      "The metrics creators should track after launching a product, course, membership or service: traffic and conversion by source, funnel drop-off, revenue and refunds, activation and completion, retention and churn, customer feedback, and a monthly review.",
    metaDescription:
      "What creators should measure after launching a paid offer: conversion by source, funnel drop-off, revenue, refunds, activation, completion, churn and feedback.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator product analytics", "measure digital product sales", "course completion rate", "membership churn", "conversion tracking creators", "product metrics"],
    related: ["creator-checkout", "creator-conversion-rate", "creator-analytics-dashboard"],
    body: [
      {
        type: "paragraph",
        text: "A launch produces a number: how many people bought. That number alone tells you surprisingly little. Did buyers come from your newsletter or a single viral Reel? Did people abandon at checkout? Did buyers actually use the product, finish the course or stay in the membership? Product analytics answers those questions so the next month, launch or version is better.",
      },
      {
        type: "paragraph",
        text: "This guide covers measuring a paid offer after launch. For measuring content-driven sales generally, see creator conversion rate; for your whole business, see creator analytics dashboard.",
        links: [
          { text: "creator conversion rate", href: "/blog/creator-conversion-rate" },
          { text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "After launching a paid offer, track: visits and conversion rate by source (which content, emails and pages drove buyers), funnel drop-off (landing page → checkout → purchase), revenue and refunds, activation (did buyers start using it?), completion or usage (did they get the result?), retention and churn for recurring products, and qualitative feedback. Review monthly, fix the biggest drop-off first and use buyer feedback to improve the offer.",
      },
      { type: "heading", text: "The metrics, by stage", id: "metrics" },
      {
        type: "table",
        headers: ["Stage", "Metric", "Question"],
        rows: [
          ["Traffic", "Visits by source", "Where do interested people come from?"],
          ["Conversion", "Purchases ÷ visits, by source", "Which sources bring buyers?"],
          ["Checkout", "Checkout starts vs completions", "Is checkout losing people?"],
          ["Revenue", "Revenue, average order value", "How much, and from which tiers?"],
          ["Refunds", "Refund rate and reasons", "Does the product match the promise?"],
          ["Activation", "Share of buyers who start", "Did onboarding work?"],
          ["Usage or completion", "Lessons completed, templates used", "Are buyers getting the result?"],
          ["Retention", "Renewals, churn (memberships)", "Do people stay?"],
          ["Feedback", "Survey scores, comments", "What should improve?"],
        ],
      },
      { type: "heading", text: "Track sources", id: "sources" },
      {
        type: "paragraph",
        text: "Use separate links (UTM-tagged or unique per post) for your newsletter, Reels, YouTube descriptions, community posts and webinars, so you know which drive buyers. Creator attribution explains tracking methods.",
      },
      {
        type: "paragraph",
        text: "Tracking: creator attribution.",
        links: [{ text: "creator attribution", href: "/blog/creator-attribution" }],
      },
      { type: "heading", text: "Find the biggest drop-off", id: "drop-off" },
      {
        type: "template",
        label: "Illustrative funnel (hypothetical numbers)",
        text: "Landing page visits: 2,000\nClicked \"buy\": 240 (12%)\nCompleted checkout: 120 (50% of checkout starts)\nDiagnosis: checkout loses half of interested buyers → fix checkout first",
      },
      {
        type: "paragraph",
        text: "Fixing the biggest leak usually beats more promotion. Creator checkout covers common fixes.",
      },
      {
        type: "paragraph",
        text: "Fixes: creator checkout experience.",
        links: [{ text: "creator checkout experience", href: "/blog/creator-checkout" }],
      },
      { type: "heading", text: "Activation and completion", id: "activation" },
      {
        type: "paragraph",
        text: "For courses and templates, track how many buyers log in, start the first lesson or open the template in the first week. Low activation often means onboarding problems, not product problems. Completion and usage show whether buyers get the result, which drives reviews, referrals and future sales.",
      },
      { type: "heading", text: "Retention for recurring products", id: "retention" },
      {
        type: "paragraph",
        text: "For memberships and subscriptions, track monthly active members, new joins, cancellations and reasons. Creator memberships covers reducing churn.",
      },
      {
        type: "paragraph",
        text: "Churn: creator memberships.",
        links: [{ text: "creator memberships", href: "/blog/creator-memberships" }],
      },
      { type: "heading", text: "Collect feedback", id: "feedback" },
      {
        type: "template",
        label: "Short buyer survey (after first use or completion)",
        text: "1. What made you buy?\n2. What almost stopped you?\n3. What result did you get?\n4. What should we improve?\n5. Would you recommend it? Why or why not?",
      },
      {
        type: "paragraph",
        text: "Use answers in your landing page (with permission), product improvements and future offers.",
      },
      { type: "heading", text: "Monthly product review", id: "review" },
      {
        type: "template",
        label: "Monthly review",
        text: "Revenue and refunds · Conversion by source · Biggest funnel drop-off · Activation and completion · Churn (if recurring) · Top 3 feedback themes · One fix to ship this month",
      },
      { type: "heading", text: "Worked example: a monthly review for a course", id: "example" },
      {
        type: "template",
        label: "Illustrative: self-paced course, month 3 after launch",
        text: "Revenue: steady; refunds 6% (reasons: \"too basic\", \"expected live support\")\nSources: newsletter 58% of buyers, YouTube descriptions 30%, Instagram 12%\nFunnel: landing page → checkout 14%; checkout → purchase 72%\nActivation: 81% started lesson 1 within a week\nCompletion: 34% finished module 2 (drop-off at a long, theory-heavy lesson)\nActions:\n• Landing page: add \"who it's not for\" to reduce \"too basic\" refunds\n• Split the long lesson into three with an exercise\n• Add a monthly live Q&A (addresses \"expected live support\")\n• Put more promotion effort into the newsletter",
      },
      { type: "heading", text: "Metrics by offer type", id: "by-offer" },
      {
        type: "table",
        headers: ["Offer", "Most important after-launch metrics"],
        rows: [
          ["Digital download", "Conversion by source, refunds, repeat buyers"],
          ["Course", "Activation, completion, refunds, referrals"],
          ["Membership", "New joins, churn, engagement"],
          ["Service", "Enquiry-to-client rate, renewals, referrals"],
          ["Workshop", "Show-up rate, feedback, next-step conversion"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Tracking only total sales.",
          "No source tracking, so you can't tell what works.",
          "Ignoring refunds and their reasons.",
          "Assuming buyers use the product.",
          "Changing price when the problem is checkout or onboarding.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Product analytics turns a launch number into decisions. Track sources, funnel drop-off, revenue and refunds, activation, completion and retention, collect feedback, and fix the biggest leak each month.",
      },
    ],
    faqs: [
      {
        question: "What should creators measure after launching a product?",
        answer:
          "Visits and conversion by source, funnel drop-off from landing page to purchase, revenue and refunds, activation, completion or usage, retention for recurring products, and buyer feedback.",
      },
      {
        question: "How can creators tell which content drives sales?",
        answer:
          "Use separate tracked links for each channel and post, and compare purchases by source.",
      },
      {
        question: "What is activation for a digital product?",
        answer:
          "The share of buyers who start using it soon after purchase, such as logging in to a course or opening a template. Low activation usually points to onboarding problems.",
      },
    ],
  },
];

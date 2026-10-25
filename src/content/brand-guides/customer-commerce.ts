import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Customer advocacy and commerce discovery gaps (1760–1809). Three pages: customer advocacy programs (1764, with
 * 1766), creator content in AI-assisted product discovery (1780) and creator partnerships for marketplace sellers
 * (1784). Retention, post-purchase and product-page topics were served by updating existing owners. See
 * docs/brand-guides-1760-1809-audit.md.
 */
const PUBLISHED = "2026-10-10";
const REVIEWED = "October 2026";

const EXT = {
  amazonAttribution: "https://advertising.amazon.com/solutions/products/amazon-attribution",
  amazonInfluencerIndia: "https://affiliate-program.amazon.in/influencers",
  openaiShopping: "https://openai.com/index/chatgpt-shopping-research/",
  rufusIndia: "https://www.aboutamazon.in/news/retail/rufus-ai-shopping-assistant-launch-in-india",
  geminiFlipkartTest: "https://yourstory.com/ai-story/gemini-shopping-assistant-flipkart-india",
  bisReviews: "https://www.businesstoday.in/latest/corporate/story/govt-announces-new-norms-to-curb-fake-online-reviews-of-products-services-353634-2022-11-21",
};

export const customerCommercePosts: BlogPost[] = [
  // 1764 (+1766)
  {
    slug: "customer-advocacy-program",
    category: "Campaign Strategy",
    title: "Customer Advocacy Programs: How Brands Can Turn Existing Fans Into Creator Partners",
    seoTitle: "Customer Advocacy Programs With Creators",
    excerpt:
      "How to build a customer advocacy program: finding the fans already talking about you, choosing who to invite, rewards that don't buy opinions, disclosure for customers, content rights, when an advocate becomes a paid creator, and what to measure.",
    metaDescription:
      "Build a customer advocacy program: find existing fans, invite the right ones, reward without buying opinions, handle disclosure and rights, and measure it.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-10-25",
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["customer advocacy program", "brand advocacy program", "turn customers into creators", "brand fans program", "customer creator program India"],
    related: ["influencer-marketing-customer-retention", "brand-ambassador-program", "influencer-affiliate-program"],
    hero: {
      src: "/blog/brand-guides/customer-advocacy-program.svg",
      alt: "Steps in a customer advocacy program: find fans, invite, reward and disclose, support, measure",
    },
    body: [
      {
        type: "paragraph",
        text: "Some of a brand's most convincing content comes from people it never paid: customers who post their routines, tag the product in reviews or answer questions in comment sections. A customer advocacy program gives those people a reason and a structure to keep going, without turning their honesty into a script. It sits between organic word of mouth and a paid creator roster.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A customer advocacy program invites existing customers who already talk about your brand to share their experience more often, in exchange for non-cash or modest rewards such as early access, products, recognition or referral credit. Find them through tagged posts, reviews and support history, invite a small group first, require disclosure whenever they receive anything of value, agree on how you may reuse their content, and move the most consistent advocates into paid creator partnerships with proper contracts.",
      },
      { type: "heading", text: "Advocates, ambassadors and affiliates", id: "compare" },
      {
        type: "table",
        headers: ["", "Customer advocates", "Ambassadors", "Affiliates"],
        rows: [
          ["Who they are", "Existing customers, often with small followings", "Creators chosen for audience and fit", "Anyone who can drive tracked sales"],
          ["Why they post", "They already like the product", "A paid, longer-term partnership", "Commission on sales"],
          ["Typical reward", "Early access, products, recognition, referral credit", "Fees plus product", "Commission per sale"],
          ["Main value", "Credibility, real use cases, content volume", "Consistent reach and a recognizable face", "Measurable sales"],
          ["Main risk", "Undisclosed rewards, uneven quality", "Cost, fit over time", "Coupon leakage, low-quality traffic"],
        ],
      },
      {
        type: "paragraph",
        text: "Programs often run together: advocates feed content and referrals, the best become ambassadors, and affiliate links handle tracked sales. See influencer ambassador programs and influencer affiliate programs for those structures.",
        links: [
          { text: "influencer ambassador programs", href: "/blog/brand-ambassador-program" },
          { text: "influencer affiliate programs", href: "/blog/influencer-affiliate-program" },
        ],
      },
      { type: "heading", text: "Finding the fans you already have", id: "find" },
      {
        type: "list",
        items: [
          "Tagged posts and mentions: people who post about you without being asked. Brand mention monitoring helps here.",
          "Reviews: detailed, specific reviews (positive or balanced) on your site and marketplaces.",
          "Repeat customers: people with several orders or long subscriptions, especially if they've referred others.",
          "Support and community: customers who answer other customers' questions in groups or comments.",
          "Sales and service teams: in B2B, account managers know which clients speak well of you in public.",
        ],
      },
      {
        type: "paragraph",
        text: "Only contact people through channels they've used with you, and use what you know about them for the purpose they'd expect. Customer data falls under India's data protection framework; see influencer marketing data privacy for the practical rules. Monitoring for mentions is covered in brand mention monitoring.",
        links: [
          { text: "influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" },
          { text: "brand mention monitoring", href: "/blog/brand-mention-monitoring" },
        ],
      },
      { type: "heading", text: "Choosing who to invite", id: "invite" },
      {
        type: "table",
        headers: ["Criterion", "Look for", "Be wary of"],
        rows: [
          ["Genuine use", "Posts and reviews over months, not one burst", "Accounts that post about many competing brands"],
          ["Specificity", "Real details: how they use it, what didn't work", "Generic praise that could be about any product"],
          ["Tone", "Helpful to other customers", "Hostility toward competitors or other customers"],
          ["Content history", "Nothing you couldn't stand behind", "Past posts that conflict with your brand's values"],
          ["Audience", "Followers who resemble your customers", "Large but unrelated followings"],
        ],
      },
      {
        type: "paragraph",
        text: "Start with ten to thirty people. A small group lets you learn what they need, check content quality and fix the rules before you scale.",
      },
      { type: "heading", text: "Rewards that don't buy opinions", id: "rewards" },
      {
        type: "paragraph",
        text: "The value of an advocate is that they'd say it anyway. Rewards should thank and equip them, not pay for praise. Never make a reward conditional on a positive post or a star rating.",
      },
      {
        type: "table",
        headers: ["Reward", "Works well for", "Watch out for"],
        rows: [
          ["Early access and previews", "Launches; advocates love being first", "Confidentiality: agree what can be shown, and when"],
          ["Free products to try", "New variants, honest first impressions", "Counts as a material connection, so it must be disclosed"],
          ["Recognition (features, badges, events)", "Community-driven categories", "Featuring their content needs permission"],
          ["Referral credit", "Repeat-purchase categories", "Track it, and disclose it like any incentive"],
          ["Feedback sessions with the product team", "Advocates who care about the product", "Make sure feedback is acted on and acknowledged"],
        ],
      },
      { type: "heading", text: "Disclosure applies to customers too", id: "disclosure" },
      {
        type: "paragraph",
        text: "Under ASCI's influencer guidelines, a material connection includes free products (even unsolicited ones), discounts, gifts, contest entries and other benefits, and it must be disclosed with a label such as 'Free gift', 'Collaboration' or 'Ad', in English or the language of the post. The government's endorsement guidance for influencers says the same in plain terms. Small followings don't change this. Give advocates the exact label to use, show them where it goes (upfront, not buried in hashtags), and check posts. The full rules are in the creator disclosure guide.",
        links: [
          { text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines },
          { text: "endorsement guidance for influencers", href: SOURCES.docaEndorsements },
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
        ],
      },
      {
        type: "paragraph",
        text: "Reviews need extra care. Marketplaces restrict reviews written in exchange for products or rewards, and India's voluntary standard for online reviews (IS 19000:2022) expects paid reviews to be disclosed. Keep advocacy content on social channels and your own site, and don't ask advocates for marketplace ratings in return for anything.",
        links: [{ text: "voluntary standard for online reviews", href: EXT.bisReviews }],
      },
      { type: "heading", text: "Content rights and reuse", id: "rights" },
      {
        type: "paragraph",
        text: "Seeing a customer's post doesn't give you the right to use it in ads or on product pages. Ask each time, in writing, and say where it will appear and for how long. For program members, a simple standing agreement can cover reposts on your own social accounts, with separate permission for paid ads. Usage terms are explained in influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "When a customer becomes a creator partner", id: "graduate" },
      {
        type: "paragraph",
        text: "Some advocates will grow audiences or produce work good enough for ads. When you start asking for specific deliverables, deadlines or paid usage, the relationship has become a creator partnership: offer a fee, a written agreement and the same terms you'd give any creator. Keeping someone on product rewards while asking for professional output is unfair and tends to end the relationship.",
      },
      {
        type: "table",
        headers: ["Signal", "What to offer"],
        rows: [
          ["Consistent, high-quality posts over several months", "A paid trial collaboration with a brief"],
          ["Content that performs well when reposted", "A usage-rights fee for ads"],
          ["Growing, relevant audience", "A place in the ambassador program"],
          ["Strong referrals", "An affiliate agreement with commission"],
        ],
      },
      { type: "heading", text: "Connecting creator campaigns to a customer referral programme", id: "creator-referrals" },
      {
        type: "paragraph",
        text: "Creators bring in new customers; a referral programme turns those customers into the next source of customers. The two work best together when the creator introduces the referral offer, not when every creator is paid as an affiliate.",
      },
      {
        type: "table",
        headers: ["Approach", "How it works", "When it fits"],
        rows: [
          ["Creator introduces the referral offer", "The creator's audience gets a welcome offer plus a referral link to share after their first order", "Products people talk about with friends and family"],
          ["Give-get rewards", "Both the referrer and the friend receive a reward, such as credit or a free item", "Repeat-purchase categories"],
          ["Creator-themed referral moments", "A limited-time referral push tied to a creator's series or launch", "Launches and festivals"],
          ["Referral leaderboards for advocates", "Top-referring customers get early access or a feature, not cash", "Community-led brands"],
          ["Affiliate only for true partners", "Commission for creators who actively sell; referral rewards for everyone else", "Brands with both creators and customer advocates"],
        ],
      },
      {
        type: "list",
        items: [
          "Keep the referral reward the same however a customer arrived, so creator customers aren't treated differently.",
          "Track which creator brought the first customer, then count the referrals that customer makes.",
          "Referrers who post publicly about a reward must disclose it.",
          "Don't reward reviews or ratings; reward referrals only.",
          "Judge creators on the customers they bring and the referrals those customers make, over months.",
        ],
      },
      {
        type: "paragraph",
        text: "Commission-based creator partnerships are covered in influencer affiliate programmes.",
        links: [
          { text: "influencer affiliate programmes", href: "/blog/influencer-affiliate-program" },
        ],
      },
      { type: "heading", text: "What to measure", id: "measure" },
      {
        type: "list",
        items: [
          "Content volume and quality: posts per month, share usable on your own channels.",
          "Reach among relevant people, not total impressions.",
          "Referral sales and new customers, net of returns.",
          "Repeat purchase and retention among advocates and the customers they refer.",
          "Questions answered and sentiment in comments where advocates are active.",
          "Program health: active members, drop-off, disclosure compliance rate.",
        ],
      },
      {
        type: "paragraph",
        text: "Compare referred customers with similar customers from other sources before drawing conclusions; see how to measure customer quality from influencer campaigns.",
        links: [{ text: "how to measure customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only. A home-baking supplies brand finds 40 customers who regularly post bakes with its products. It invites 20, offers early access to new flavors and a referral code, and gives everyone a one-page guide: use 'Free gift' when posting about products you received, say what you actually think, and tell us before we repost. After three months, six members post consistently; the brand offers three of them paid recipe collaborations with usage rights for ads.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Rewarding only positive posts or star ratings.",
          "Assuming small accounts don't need to disclose.",
          "Reposting customer content in ads without permission.",
          "Asking advocates for professional deliverables without paying them.",
          "Inviting hundreds of people before testing the program with a few.",
          "Measuring only referral codes and ignoring retention.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A customer advocacy program works when it amplifies what customers already believe. Find the fans you have, reward them without buying their opinions, make disclosure easy, ask before reusing their content, and pay the ones who become creators. For the wider retention picture, see influencer marketing for customer retention.",
        links: [{ text: "influencer marketing for customer retention", href: "/blog/influencer-marketing-customer-retention" }],
      },
    ],
    faqs: [
      {
        question: "What is a customer advocacy program?",
        answer:
          "A structured way to encourage existing customers who already like your brand to share their experience, with modest rewards such as early access, products, recognition or referral credit, clear disclosure, and permission before their content is reused.",
      },
      {
        question: "Do customers in an advocacy program need to disclose?",
        answer:
          "Yes, whenever they receive something of value. ASCI's guidelines treat free products, discounts, gifts and similar benefits as a material connection, regardless of follower count.",
      },
      {
        question: "When should a customer advocate be paid?",
        answer:
          "When you ask for specific deliverables, deadlines or paid usage of their content. At that point the relationship is a creator partnership and needs a fee and a written agreement.",
      },
    ],
  },
  // 1780
  {
    slug: "creator-content-ai-product-discovery",
    category: "Campaign Strategy",
    title: "Creator Reviews and AI Shopping Assistants: What Brands Can and Can't Influence",
    seoTitle: "Creator Content and AI Shopping Assistants",
    excerpt:
      "How AI shopping assistants such as ChatGPT shopping research, Google's AI features and Amazon's Rufus gather product information, what that means for creator reviews, practical steps that also help ordinary search, and the claims to be wary of.",
    metaDescription:
      "How AI shopping assistants gather product information, what it means for creator reviews, practical steps that help, and the GEO claims to be wary of.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["AI shopping assistant creator content", "influencer marketing AI search", "creator reviews AI product discovery", "generative engine optimization creators", "ChatGPT shopping brands India"],
    related: ["youtube-product-reviews", "ugc-content-ecommerce", "influencer-marketing-ecommerce-brands-india"],
    hero: {
      src: "/blog/brand-guides/creator-content-ai-product-discovery.svg",
      alt: "How creator content can reach AI shopping answers: honest reviews, text on your site, consistent facts, disclosure, measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "Shoppers increasingly ask an assistant rather than scroll a results page: 'Which mixer grinder is best for a small kitchen?' or 'Is this sunscreen good for oily skin?'. Brands want to know whether creator reviews feed those answers, and agencies are starting to sell 'AI visibility'. The honest position is that some of the mechanics are documented, much isn't, and the things that help are mostly the things that already help customers.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "AI shopping assistants draw on product data, retailer pages, reviews and other public web content, and none of the major providers publishes a way to buy or engineer a recommendation. Creator content can help indirectly: detailed, honest reviews create more accurate public information about your product, and when you republish key points as text on your own pages (with permission), that information is easier for search systems to read. Treat any promise of guaranteed AI citations as a red flag.",
      },
      { type: "heading", text: "What the platforms say", id: "platforms" },
      {
        type: "table",
        headers: ["Assistant", "What's documented", "Source"],
        rows: [
          ["Google AI Overviews and AI Mode", "No special optimization or schema is required; pages must be indexed and eligible for a snippet. Google advises keeping important content in text, structured data matching visible text, and Merchant Center data current.", "Google Search Central, AI features and your website"],
          ["ChatGPT shopping research", "Announced 24 November 2025. OpenAI says results are organic, drawn from publicly available retail sites, and may contain mistakes about price and availability.", "OpenAI announcement"],
          ["Amazon Rufus (India)", "Launched in beta on the Amazon.in app in August 2024; Amazon describes it as trained on its catalog and information from across the web.", "Amazon India announcement"],
          ["Gemini and AI Mode with Flipkart", "In October 2026, reports described a limited test of buying selected Flipkart products from Gemini and AI Mode in India. Google hadn't published details.", "Press report; unconfirmed"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Google's guide to AI features and your website, OpenAI's shopping research announcement, Amazon India's Rufus launch note and YourStory's report on the Flipkart test. Features change quickly, so check before planning around any of them.",
        links: [
          { text: "Google's guide to AI features and your website", href: SOURCES.googleAiFeatures },
          { text: "OpenAI's shopping research announcement", href: EXT.openaiShopping },
          { text: "Amazon India's Rufus launch note", href: EXT.rufusIndia },
          { text: "YourStory's report on the Flipkart test", href: EXT.geminiFlipkartTest },
        ],
      },
      { type: "heading", text: "Where creator content fits", id: "fit" },
      {
        type: "paragraph",
        text: "There's no public evidence that an assistant ranks products by counting creator videos, and you should be skeptical of anyone who claims to know the weighting. What is reasonable to expect is that assistants summarize what's publicly written about a product, so the quality and accuracy of that information matters. Creator reviews contribute in three ways:",
      },
      {
        type: "list",
        items: [
          "They add specific, experience-based detail (who it suits, what it's like after a month, how it compares) that thin product pages lack.",
          "They generate questions and answers in comments and on retailer pages, which shape what's known about the product.",
          "Their key points can be republished as text on your product pages, FAQs and comparison guides, where search systems can read them.",
        ],
      },
      { type: "heading", text: "Practical steps", id: "steps" },
      {
        type: "table",
        headers: ["Step", "Why it helps", "Also helps"],
        rows: [
          ["Brief creators for honest, specific reviews", "Specific use cases and limitations make the information useful and credible", "Conversion, returns"],
          ["Add captions and transcripts to creator videos you host", "Puts spoken information into text", "Accessibility"],
          ["Summarize creator insights on product pages (with permission)", "Your page becomes the clearest source on the product", "Product-page conversion"],
          ["Keep product facts consistent everywhere", "Contradictions between your site, marketplaces and creator scripts produce confused answers", "Fewer complaints"],
          ["Fix wrong claims early", "Correct inaccurate creator content and FAQs before they spread", "Compliance"],
          ["Keep Merchant Center and marketplace listings current", "Assistants and shopping surfaces read structured product data", "Ordinary search and ads"],
        ],
      },
      {
        type: "paragraph",
        text: "How to reuse creator content on product pages and in email is covered in UGC content for e-commerce, and review-led campaigns in YouTube product reviews.",
        links: [
          { text: "UGC content for e-commerce", href: "/blog/ugc-content-ecommerce" },
          { text: "YouTube product reviews", href: "/blog/youtube-product-reviews" },
        ],
      },
      { type: "heading", text: "Risks and rules", id: "risks" },
      {
        type: "list",
        items: [
          "Disclosure still applies. A paid review must carry a label such as 'Ad' or 'Collaboration' under ASCI's guidelines, however it's later summarized.",
          "Don't fake volume. Fabricated reviews, review swaps and undisclosed paid reviews risk consumer-protection action and marketplace penalties, and India's standard for online reviews (IS 19000:2022) expects paid reviews to be disclosed.",
          "Don't script identical talking points across many creators to flood the web. It reads as inauthentic to people and adds nothing useful.",
          "Assistants can be wrong. If one repeats an inaccurate claim about your product, correct the underlying public sources; there's usually no direct way to edit an answer.",
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure rules are in influencer marketing compliance.",
        links: [{ text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Measuring it honestly", id: "measure" },
      {
        type: "paragraph",
        text: "You can't yet measure AI visibility the way you measure search rankings. Some practical signals: referral traffic from AI assistants in your analytics (where the referrer is passed), branded search trends, questions customers mention in support chats ('ChatGPT said...'), and periodic manual checks of how assistants describe your product, logged with the date and prompt. Treat these as directional. Report them separately from campaign results, and don't attribute sales to an 'AI effect' without a test.",
      },
      {
        type: "paragraph",
        text: "For traditional search, what creator partnerships can and can't do is explained in influencer marketing and SEO.",
        links: [
          { text: "influencer marketing and SEO", href: "/blog/influencer-marketing-seo" },
        ],
      },
      { type: "heading", text: "Questions to ask an agency selling AI visibility", id: "agency-questions" },
      {
        type: "list",
        items: [
          "Which assistants and features does this cover, and what documentation supports the approach?",
          "What exactly will be created or changed, and is it useful to customers on its own?",
          "How will results be measured, and what would count as no effect?",
          "Does the plan involve paid reviews, and how will they be disclosed?",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Buying 'guaranteed AI citations'.",
          "Creating dozens of near-identical review posts.",
          "Leaving key information only in video, with no text version.",
          "Inconsistent product claims across creators, marketplaces and your site.",
          "Counting manual prompt checks as hard performance data.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "AI shopping assistants reward clear, accurate and widely available product information, as far as anyone outside these companies can tell. Creator reviews help when they're honest and specific, disclosed, and backed by text on your own pages. Plan creator content for customers first; whatever helps them is also the best bet for search and AI answers.",
      },
    ],
    faqs: [
      {
        question: "Do creator reviews affect AI shopping recommendations?",
        answer:
          "Possibly, indirectly. Assistants summarize public product information, and honest, specific creator reviews add to it. No major provider documents a way to buy or engineer a recommendation.",
      },
      {
        question: "Does Google require special markup for AI Overviews or AI Mode?",
        answer:
          "No. Google says there are no additional requirements or special schema; pages need to be indexed and eligible for a snippet, with important content in text and structured data that matches visible content.",
      },
      {
        question: "Can paid creator reviews be used to influence AI answers?",
        answer:
          "Paid reviews must be disclosed under ASCI's guidelines, and fake or undisclosed reviews risk consumer-protection action and marketplace penalties. Focus on honest content that is useful to customers.",
      },
    ],
  },
  // 1784
  {
    slug: "influencer-marketing-amazon-flipkart-sellers",
    category: "Campaign Strategy",
    title: "Influencer Marketing for Amazon and Flipkart Sellers: A Practical Playbook",
    seoTitle: "Influencer Marketing for Amazon and Flipkart Sellers",
    excerpt:
      "How marketplace sellers in India can work with creators: when it's worth it, getting listings ready first, choosing creators, sending traffic to Amazon or Flipkart, tracking with Amazon Attribution and codes, reviews to avoid, and sale-event timing.",
    metaDescription:
      "Influencer marketing for Amazon and Flipkart sellers in India: listing readiness, creators, Amazon Attribution tracking, review rules and sale timing.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer marketing for Amazon sellers", "Flipkart seller influencer marketing", "marketplace seller creator campaigns", "Amazon Attribution influencers India", "drive traffic to Amazon listing influencers"],
    related: ["influencer-marketing-ecommerce-brands-india", "ugc-content-ecommerce", "influencer-affiliate-program"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-amazon-flipkart-sellers.svg",
      alt: "A marketplace seller's creator plan: fix the listing, choose creators, tag links, time to sales, read results",
    },
    body: [
      {
        type: "paragraph",
        text: "Many Indian brands sell mainly through Amazon, Flipkart and category marketplaces such as Nykaa or Myntra, not their own websites. Creator campaigns work differently for them: the sale happens on someone else's platform, data is limited, and the listing has to do the converting. This playbook covers what changes for marketplace sellers.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Fix the listing first (images, title, reviews, stock), then brief creators who demonstrate the product for a clear use case and link to the listing with a tracked URL. On Amazon, brand-registered sellers can use Amazon Attribution, which is available on Amazon.in, to see detail page views, add-to-carts and sales from external traffic. Elsewhere, rely on creator-specific codes, short-term sales lifts and before-and-after comparisons. Never trade products or payment for marketplace reviews.",
      },
      { type: "heading", text: "When creators are worth it for a marketplace seller", id: "when" },
      {
        type: "table",
        headers: ["Situation", "Creator fit"],
        rows: [
          ["The product needs showing (fit, texture, setup, size)", "Strong: demonstrations answer what a listing can't"],
          ["A new listing with few reviews", "Useful for discovery, but the listing may not convert yet; keep budgets small"],
          ["A crowded category where buyers search by generic terms", "Good for building branded searches (people searching your brand name)"],
          ["A low-priced commodity with thin margins", "Often weak; marketplace ads may be cheaper"],
          ["Sale events", "Good for pre-event consideration and wishlists, if stock and price are confirmed"],
        ],
      },
      { type: "heading", text: "Get the listing ready first", id: "listing" },
      {
        type: "list",
        items: [
          "Images and video that match what creators will show, so the shopper recognizes the product.",
          "A title and bullets that use the words creators use for the benefit.",
          "Enough stock in the regions you're targeting, and delivery promises you can keep.",
          "Price and offers confirmed for the posting window, including any bank or sale offers.",
          "Answers to the questions creators' audiences are likely to ask, in the listing or the Q&A.",
        ],
      },
      {
        type: "paragraph",
        text: "Sending creator traffic to a weak listing wastes the campaign. If stock is uncertain, see the stock section of influencer marketing for product launches.",
        links: [{ text: "influencer marketing for product launches", href: "/blog/influencers-for-product-launch#stock" }],
      },
      { type: "heading", text: "Choosing creators", id: "creators" },
      {
        type: "paragraph",
        text: "Prioritize creators whose audiences buy online in your price band and whose content shows products in use. Unboxing alone rarely converts; demonstrations, comparisons with honest limits, and routines do. Creators who already post marketplace finds often have audiences used to clicking through to buy. Some take part in marketplace programs such as the Amazon Influencer Program, which pays them commission on purchases through their storefronts; that is the creator's own arrangement with Amazon and doesn't replace a paid brief from you.",
        links: [{ text: "Amazon Influencer Program", href: EXT.amazonInfluencerIndia }],
      },
      { type: "heading", text: "Tracking sales you can't see", id: "tracking" },
      {
        type: "table",
        headers: ["Method", "What you get", "Limits"],
        rows: [
          ["Amazon Attribution", "Clicks, detail page views, add-to-cart, purchases and new-to-brand sales from tagged links, on a 14-day window", "Brand Registry sellers and vendors; Amazon traffic only"],
          ["Creator-specific coupon codes", "Orders using each code", "Codes leak to coupon sites; many buyers don't use them"],
          ["Short links per creator", "Clicks by creator and post", "Clicks only; no sales on the marketplace side"],
          ["Sales and branded-search lift", "Change against a baseline period or untargeted regions", "Other activity also moves results"],
          ["Affiliate programs", "Commission-based tracked sales where the marketplace supports them", "Program rules vary; check terms"],
        ],
      },
      {
        type: "paragraph",
        text: "Amazon lists India among the marketplaces where Attribution is available; check eligibility in your Amazon Ads console. When platform numbers and your own records disagree, see why creator reports and analytics don't match. Wider tracking for sales on marketplaces is covered in influencer marketing for e-commerce.",
        links: [
          { text: "Amazon lists India", href: EXT.amazonAttribution },
          { text: "why creator reports and analytics don't match", href: "/blog/influencer-reporting-discrepancies" },
          { text: "influencer marketing for e-commerce", href: "/blog/influencer-marketing-ecommerce-brands-india#marketplace-tracking" },
        ],
      },
      {
        type: "paragraph",
        text: "Selling through quick-commerce apps as well? The measurement problem is similar but local; see creator campaigns for quick-commerce brands.",
        links: [{ text: "creator campaigns for quick-commerce brands", href: "/blog/quick-commerce-influencer-marketing-india" }],
      },
      { type: "heading", text: "Reviews: what not to do", id: "reviews" },
      {
        type: "paragraph",
        text: "Marketplaces restrict reviews written in exchange for free products, payment or other rewards, and breaches can lead to removed reviews, delisting or suspension. Don't ask creators or their followers to leave marketplace reviews as part of a deal, don't send product on the condition of a review, and don't use review-swap groups. Let creator content live on social platforms, disclosed under ASCI's guidelines, and let marketplace reviews come from ordinary buyers. Check your marketplace's current seller policies before any campaign that involves free product.",
        links: [{ text: "ASCI's guidelines", href: SOURCES.asciGuidelines }],
      },
      { type: "heading", text: "Timing around sale events", id: "sale-events" },
      {
        type: "table",
        headers: ["Window", "Creator role"],
        rows: [
          ["Two to four weeks before", "Demonstrations and comparisons; encourage wishlisting"],
          ["Days before", "Confirmed price and offer reminders, only once the price is final"],
          ["During the event", "Short reminders; watch stock and pause posts if items sell out"],
          ["After", "How-to and second-use content for new buyers; collect questions for the listing"],
        ],
      },
      {
        type: "paragraph",
        text: "Before-during-after planning for sale events is covered in more depth in influencer marketing for e-commerce.",
        links: [{ text: "influencer marketing for e-commerce", href: "/blog/influencer-marketing-ecommerce-brands-india" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only. A kitchen-tools seller on Amazon and Flipkart books eight cooking creators to demonstrate a vegetable chopper three weeks before a sale event. Amazon links carry Attribution tags; Flipkart sales are read through creator codes and a comparison with the same weeks last year. The Attribution report shows detail page views and add-to-carts by creator, which the seller uses to pick two creators for the next event.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Sending creator traffic to a listing with poor images or few reviews.",
          "Posting before the sale price is confirmed.",
          "Asking for marketplace reviews in return for product or payment.",
          "Judging creators only on coupon codes.",
          "Running out of stock in the regions the campaign targeted.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Marketplace sellers can use creators well if the listing is ready, the creators demonstrate rather than just unbox, and tracking is set up before posting. Use Amazon Attribution where you can, combine codes and lift elsewhere, and keep creator content and marketplace reviews separate.",
      },
    ],
    faqs: [
      {
        question: "Can Amazon sellers in India track influencer traffic?",
        answer:
          "Yes, partly. Amazon Attribution, listed as available on Amazon.in for brand-registered sellers and vendors, reports clicks, detail page views, add-to-carts and purchases from tagged external links on a 14-day window. Creator codes and sales lift fill other gaps.",
      },
      {
        question: "Can I ask influencers to leave reviews on Amazon or Flipkart?",
        answer:
          "Don't make reviews part of a deal. Marketplaces restrict reviews written in exchange for free products or payment, and breaches can lead to removed reviews or penalties. Keep paid creator content on social platforms, with disclosure.",
      },
      {
        question: "Is influencer marketing worth it for marketplace sellers?",
        answer:
          "It works best for products that need demonstrating, in categories where branded searches matter, and around sale events. For low-priced commodities with thin margins, marketplace ads are often cheaper.",
      },
    ],
  },
];

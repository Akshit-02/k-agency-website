import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

/**
 * Conversion readiness (2026-10-17): what a brand's store, landing page, app and tracking need before creator
 * traffic arrives. Each article carries one link to a ZSpace Labs service page. Kudozz has a paid arrangement
 * with ZSpace Labs, so those links use rel="sponsored" and sit next to a visible disclosure sentence.
 * Record: reports/zspace-content/ (manifest, link register, quality report).
 */
const PUBLISHED = "2026-10-17";
const REVIEWED = "October 2026";
const DISCLOSURE = "Disclosure: Kudozz has a paid partnership with ZSpace Labs, and this is a sponsored link.";

const SRC = {
  shopifyPerformance: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-dashboard",
  shopifyCodes: "https://help.shopify.com/en/manual/discounts/discount-types/discount-codes",
  shopifyManageCodes: "https://help.shopify.com/manual/discounts/managing-discount-codes",
  webVitals: "https://web.dev/articles/vitals",
  ga4Engagement: "https://support.google.com/analytics/answer/12195621",
  appleCpp: "https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions",
  applePrivacy: "https://developer.apple.com/app-store/user-privacy-and-data-use/",
  appleUniversalLinks: "https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app",
  androidAppLinks: "https://developer.android.com/training/app-links",
  playCustomListings: "https://support.google.com/googleplay/android-developer/answer/9867158",
  playInstallReferrer: "https://developer.android.com/google/play/installreferrer",
  firebaseFdl: "https://firebase.google.com/support/dynamic-links-faq",
  googleNoindex: "https://developers.google.com/search/docs/crawling-indexing/block-indexing",
  icoGuidance: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/",
  icoExceptions: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/",
  icoTechnologies: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-storage-and-access-technologies/",
};

const ZS = {
  shopify: "https://www.zspace.in/services/shopify-development",
  cro: "https://www.zspace.in/services/cro-audit",
  app: "https://www.zspace.in/services/mobile-app-development",
  web: "https://www.zspace.in/services/website-development",
};

export const conversionReadinessPosts: BlogPost[] = [
  {
    slug: "shopify-store-influencer-campaign-checklist",
    category: "Campaign Strategy",
    title: "Is Your Shopify Store Ready for an Influencer Campaign? A Pre-Launch Checklist",
    seoTitle: "Shopify Store Checklist for Influencer Campaigns",
    excerpt:
      "Creator traffic arrives in bursts, on phones, from people who have never heard of you. Here's what to check in your Shopify store before the first post goes live: speed, product pages, discount codes, stock and tracking.",
    metaDescription:
      "What to check in a Shopify store before an influencer campaign: mobile speed, product pages, creator discount codes and links, stock, checkout and tracking.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: ["Shopify influencer campaign", "Shopify discount codes for influencers", "influencer campaign checklist", "Shopify store speed", "D2C influencer marketing"],
    related: ["track-influencer-sales", "influencer-utm-tracking", "influencer-traffic-not-converting"],
    body: [
      {
        type: "paragraph",
        text: "A creator post doesn't send traffic the way a search ad does. Visitors arrive in a spike within hours of posting, almost all of them on a phone, often inside Instagram's or YouTube's in-app browser, and most of them meeting your brand for the first time. A store that converts steady search traffic can still lose a large share of that spike to a slow product page, a code that doesn't apply or a size that sold out an hour in.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before an influencer campaign, check five things in your Shopify store: mobile speed on the pages creators will link to, product pages that answer a first-time buyer's questions, one discount code and one tagged link per creator, enough stock for a spike with a plan for selling out, and tracking you've tested end to end. Do this at least a week before the first post so there's time to fix what you find.",
      },
      { type: "heading", text: "1. Decide where each creator's link goes", id: "decide-destinations" },
      {
        type: "paragraph",
        text: "Sending every creator to the homepage is the most common and most expensive mistake. If a creator shows one serum, link to that serum's product page. If they show a routine, link to a collection or a landing page that holds exactly those products. The viewer has just seen the product; every extra tap between the post and that product loses people.",
      },
      {
        type: "list",
        items: [
          "One product featured: link to the product page.",
          "Several products or a routine: link to a collection or a dedicated landing page.",
          "A launch with a waitlist: link to a page that captures email or WhatsApp opt-ins, with consent.",
          "A discount the creator mentions: use a shareable discount link that applies the code and lands on the right page.",
        ],
      },
      {
        type: "paragraph",
        text: "Shopify lets you create a shareable link for a discount code and choose the product, collection or page it opens, or add a redirect parameter such as ?redirect=/products/vitamin-c-serum, as described in Shopify's guide to managing discount codes. Each link applies one discount, and it only works while the discount is active, so check the end date before creators post.",
        links: [{ text: "Shopify's guide to managing discount codes", href: SRC.shopifyManageCodes }],
      },
      { type: "heading", text: "2. Check speed on the pages that will get the traffic", id: "check-speed" },
      {
        type: "paragraph",
        text: "Test the exact product and collection pages in your creator links, on a mid-range phone and a mobile connection, not on a desktop on office wifi. Shopify's web performance dashboard reports the three Core Web Vitals from real visitors over the past 30 days. Shopify treats a page as good when Largest Contentful Paint is 2,500 ms or less, Interaction to Next Paint is 200 ms or less and Cumulative Layout Shift is 0.1 or less.",
        links: [{ text: "Shopify's web performance dashboard", href: SRC.shopifyPerformance }],
      },
      {
        type: "paragraph",
        text: "These match the thresholds Google publishes, which are assessed at the 75th percentile of page loads with mobile and desktop measured separately. If mobile is poor and desktop is fine, your creator traffic gets the poor version.",
        links: [{ text: "the thresholds Google publishes", href: SRC.webVitals }],
      },
      {
        type: "paragraph",
        text: "The usual causes on Shopify stores are uncompressed hero images and videos, apps that load scripts on every page, and large pop-ups that shift the layout. Before a campaign, remove apps you no longer use, compress the media on the linked pages, and hold off on installing anything new in the final week. The dashboard shows how app installs and theme changes affect performance, so check it after each change.",
      },
      { type: "heading", text: "3. Make product pages work for someone who has never heard of you", id: "product-pages" },
      {
        type: "paragraph",
        text: "A search visitor has usually compared options already. A creator's viewer is curious but not yet convinced, and they'll look for the same few things before buying from an unfamiliar brand.",
      },
      {
        type: "table",
        headers: ["What the visitor wants to know", "What to have on the page"],
        rows: [
          ["Is this the thing I just saw?", "The same product, shade or variant the creator showed, visible above the fold"],
          ["Does it work for someone like me?", "Sizing, skin type, compatibility or who it's for, in plain language"],
          ["Can I trust this brand?", "Reviews, return policy, delivery times and contact details close to the buy button"],
          ["What will it really cost?", "Price with the creator's discount, delivery charges and taxes shown before checkout"],
          ["What if it doesn't suit me?", "Returns or exchange terms in one or two sentences, with a link to the full policy"],
        ],
      },
      {
        type: "paragraph",
        text: "If you plan to reuse creator content on product pages, agree those usage rights before the campaign rather than after. UGC for e-commerce covers how to place creator videos on product pages without slowing them down.",
        links: [{ text: "UGC for e-commerce", href: "/blog/ugc-content-ecommerce" }],
      },
      { type: "heading", text: "4. Set up discount codes so each creator's sales can be counted", id: "discount-codes" },
      {
        type: "paragraph",
        text: "Give every creator their own code. A shared campaign code tells you the campaign sold something but not who sold it, and that's the question the next budget decision depends on. In Shopify, decide for each code:",
      },
      {
        type: "list",
        items: [
          "Usage limits: whether the code can be used once per customer and whether there's a cap on total uses.",
          "Combinations: whether it can stack with automatic discounts or a sitewide sale, which Shopify lets you choose per code.",
          "Dates: a start and end date that match the campaign, so a code shared in a post months later doesn't keep discounting.",
          "Eligible products: whether the discount applies to everything or only to the products in the campaign.",
        ],
      },
      {
        type: "paragraph",
        text: "Shopify's documentation on discount codes covers these settings, and its Sales by discount report shows how often each code was used. Codes get shared on coupon sites, so expect some orders under a creator's code that the creator didn't drive, and say so in the report.",
        links: [{ text: "Shopify's documentation on discount codes", href: SRC.shopifyCodes }],
      },
      {
        type: "paragraph",
        text: "Codes are one signal among several. How to track influencer sales explains how to combine codes, tagged links and post-purchase survey answers without counting the same order twice.",
        links: [{ text: "How to track influencer sales", href: "/blog/track-influencer-sales" }],
      },
      { type: "heading", text: "5. Plan for stock running out", id: "stock" },
      {
        type: "paragraph",
        text: "A single creator can move more units in a day than the store usually sells in a week. Check stock for each featured variant against a realistic high case, not the average. Then decide what happens if a variant sells out: hide it, show it as sold out with a back-in-stock sign-up, or allow pre-orders with a clear dispatch date. Tell the creators which products are limited, so they don't keep promoting something that can't ship.",
      },
      { type: "heading", text: "6. Test checkout and payments the way a customer would", id: "checkout" },
      {
        type: "paragraph",
        text: "Place real test orders on a phone, starting from the creator's link inside the Instagram or YouTube app, because that's the path your customers will take. In-app browsers often don't have saved passwords or card details, so a checkout that relies on them feels slower there. Check that the discount applies, that every payment method you offer works (UPI, cards, wallets and cash on delivery where you offer it in India), and that the confirmation email and order notification arrive.",
      },
      { type: "heading", text: "7. Test tracking before the first post, not after", id: "tracking" },
      {
        type: "list",
        items: [
          "Create one tagged link per creator and placement using a consistent naming convention.",
          "Click each link from a phone and confirm the visit shows up with the right source and campaign in your analytics.",
          "Place a test order with the code and confirm it appears in Shopify's discount report and in your analytics.",
          "Keep a link sheet with each creator's code, link, destination page and post date.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer UTM tracking has a naming convention you can copy, and the reasons tagged numbers usually come in lower than the clicks creators report.",
        links: [{ text: "Influencer UTM tracking", href: "/blog/influencer-utm-tracking" }],
      },
      { type: "heading", text: "Pre-launch checklist", id: "pre-launch-checklist" },
      {
        type: "table",
        headers: ["Check", "Done when"],
        rows: [
          ["Destination per creator", "Every link goes to the product, collection or landing page that matches the post"],
          ["Mobile speed", "Linked pages pass Core Web Vitals on mobile in Shopify's dashboard, or the issues are known and being fixed"],
          ["Product pages", "Price, delivery, returns and reviews are visible without hunting"],
          ["Codes", "One code per creator, with limits, combinations, dates and eligible products set"],
          ["Discount links", "Each shareable link applies the code and lands on the right page"],
          ["Stock", "Featured variants are stocked for a high case, with a plan for selling out"],
          ["Checkout", "Test orders placed from in-app browsers on iOS and Android"],
          ["Tracking", "Test visits and orders appear correctly in analytics and Shopify reports"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Linking every creator to the homepage.",
          "Installing a new app or launching a theme change the week of the campaign.",
          "One shared code for all creators, which makes creator-level results impossible.",
          "Testing only on desktop, outside the in-app browser.",
          "Leaving codes open with no end date.",
          "Discovering after the spike that a featured variant sold out on day one.",
        ],
      },
      { type: "heading", text: "When to get outside help", id: "outside-help" },
      {
        type: "paragraph",
        text: "Most of this checklist is configuration you can do in the Shopify admin. Get help when the problem is structural: product pages that are slow because of the theme itself, an app stack that can't be trimmed without breaking features, or a store that needs custom sections for campaign landing pages. ZSpace Labs builds and optimises Shopify stores, including theme work, speed and checkout configuration. " + DISCLOSURE,
        links: [{ text: "ZSpace Labs builds and optimises Shopify stores", href: ZS.shopify, rel: "sponsored" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator campaign tests your store harder than a normal week does: more first-time visitors, all at once, on phones. Fix the pages they'll land on, give each creator a code and a link you've tested, and know what happens when stock runs out. Then the campaign's results reflect the creators and the offer, not avoidable problems in the store.",
      },
    ],
    faqs: [
      {
        question: "How far ahead should I prepare my Shopify store for an influencer campaign?",
        answer: "Start at least a week before the first post. That leaves time to fix speed issues, set up and test codes and links, and check stock. Avoid installing new apps or changing the theme in the final days.",
      },
      {
        question: "Should every influencer get their own discount code?",
        answer: "Yes. A shared code shows that the campaign sold something but not which creator drove it. Give each creator a code with an end date, usage limits and clear rules on combining with other discounts.",
      },
      {
        question: "Can a Shopify discount link send people to a product page?",
        answer: "Yes. When you create a shareable discount link, Shopify lets you choose the product, collection or page it opens, or you can add a redirect parameter such as ?redirect=/products/your-product. The code is applied and the visitor lands on that page instead of the homepage.",
      },
      {
        question: "What is a good page speed for a Shopify product page?",
        answer: "Shopify's web performance dashboard treats a page as good when Largest Contentful Paint is 2,500 ms or less, Interaction to Next Paint is 200 ms or less and Cumulative Layout Shift is 0.1 or less, based on real visitor data. Check the mobile figures, since most creator traffic is on phones.",
      },
    ],
  },

  {
    slug: "influencer-traffic-not-converting",
    category: "Campaign Strategy",
    title: "Influencer Traffic Not Converting? How to Find Where Visitors Drop Off",
    seoTitle: "Influencer Traffic Not Converting? Find the Drop-Off",
    excerpt:
      "Creator posts are getting clicks but sales or enquiries aren't following. Here's how to work out whether the problem is the audience, the offer, the landing page, the checkout or the tracking, in that order.",
    metaDescription:
      "Why influencer traffic doesn't convert and how to find the cause: tracking gaps, audience fit, message match, landing pages and checkout friction.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: ["influencer traffic not converting", "influencer campaign conversion rate", "creator traffic conversion", "landing page drop-off", "influencer campaign diagnosis"],
    related: ["influencer-marketing-website-traffic", "influencer-campaign-landing-page", "measuring-influencer-campaign-roi"],
    body: [
      {
        type: "paragraph",
        text: "The creator delivered. The post did well, the link was clicked, and analytics shows a spike. Then very little happened: few orders, few sign-ups, few enquiries. Before deciding that influencer marketing doesn't work for your brand, or that the creator was wrong, find out where the visitors stopped. The answer is usually more specific, and more fixable, than either of those conclusions.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "When influencer traffic doesn't convert, check five things in order: whether the tracking is counting correctly, whether the creator's audience matches your buyer, whether the landing page continues the post's message, whether the page works on a phone inside the app's browser, and whether the offer and checkout ask too much of a first-time visitor. Work through them in that order, because each one can make the next look like the problem.",
      },
      { type: "heading", text: "Step 1: Make sure the numbers are real", id: "check-tracking" },
      {
        type: "paragraph",
        text: "Start with measurement, because a tracking gap looks exactly like a conversion problem. Compare three numbers for each creator: link clicks reported by the platform or the creator, sessions your analytics attributes to that creator's tagged link, and orders or leads under the creator's code or link.",
      },
      {
        type: "list",
        items: [
          "Sessions far below clicks: the link may be untagged or wrongly tagged, the page may load too slowly for people to wait, or visitors may be declining analytics consent.",
          "Orders under the code but no tagged sessions: people are buying through a different route, often by searching for the brand later. The creator drove those sales, but your link tracking missed them.",
          "Sessions with no key events at all: check that the purchase or lead event fires. Place a test order or submit a test form from a phone.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer UTM tracking explains why tagged sessions usually come in lower than reported clicks, and how much of a gap is normal.",
        links: [{ text: "Influencer UTM tracking", href: "/blog/influencer-utm-tracking" }],
      },
      { type: "heading", text: "Step 2: Check whether the audience could buy", id: "audience-fit" },
      {
        type: "paragraph",
        text: "If the tracking is sound, look at who arrived. In analytics, compare creator traffic with your usual buyers by country, city and device. Traffic from outside your delivery area, or a large share from a country you don't ship to, means the audience wasn't a fit, however good the engagement looked. Check the creator's audience location and age data before the next booking, not after.",
      },
      {
        type: "paragraph",
        text: "Also check the behaviour of those sessions. In GA4 a session counts as engaged if it lasts longer than 10 seconds, includes a key event or has two or more page views, and bounce rate is simply the share of sessions that weren't engaged. A very low engagement rate alongside reasonable page speed suggests people arrived, didn't see what they expected and left.",
        links: [{ text: "In GA4 a session counts as engaged", href: SRC.ga4Engagement }],
      },
      { type: "heading", text: "Step 3: Check message match between the post and the page", id: "message-match" },
      {
        type: "paragraph",
        text: "Watch the creator's post, then tap the link on a phone and look at the first screen. Ask whether a viewer would recognise it as the place the creator was talking about.",
      },
      {
        type: "table",
        headers: ["Mismatch", "What the visitor experiences", "Fix"],
        rows: [
          ["Creator shows one product; link goes to the homepage", "Has to search for the product they just saw", "Link to the product page or a page with only the featured products"],
          ["Creator mentions a discount; page doesn't show it", "Unsure the offer is real or still valid", "Use a link that applies the code and show the discounted price"],
          ["Creator's tone is casual; page reads like a brochure", "Feels like a different brand", "Bring the creator's angle and words into the headline"],
          ["Creator speaks Hindi or Tamil; page is English only", "Has to translate to understand", "Match the language for the key messages, or at least the headline and offer"],
          ["Creator shows a variant that's sold out", "Lands on an out-of-stock page", "Brief creators on limited stock and show alternatives on the page"],
        ],
      },
      { type: "heading", text: "Step 4: Use the page the way a creator's viewer does", id: "mobile-in-app" },
      {
        type: "paragraph",
        text: "Open the link from inside the Instagram or YouTube app on a mid-range Android phone and an iPhone, on mobile data. Links from social apps usually open in the app's built-in browser, where people may not be signed in to your site and saved addresses or payment details may not autofill. Note every point where you have to wait, zoom, close a pop-up or type more than you'd expect.",
      },
      {
        type: "list",
        items: [
          "Slow first screen: large images or video above the fold, or scripts from many apps.",
          "Pop-ups that cover the product on arrival, especially email capture before the visitor has seen anything.",
          "Content that jumps as it loads, so taps land on the wrong element.",
          "Forms that ask for more than you need at this stage.",
          "Buttons or prices that sit below several screens of scrolling.",
        ],
      },
      {
        type: "paragraph",
        text: "Google's guidance on Core Web Vitals sets good thresholds at an LCP of 2.5 seconds or less, an INP of 200 milliseconds or less and a CLS of 0.1 or less, measured on mobile and desktop separately. Mobile is the figure that matters for creator traffic.",
        links: [{ text: "Google's guidance on Core Web Vitals", href: SRC.webVitals }],
      },
      { type: "heading", text: "Step 5: Look at the offer and the checkout", id: "offer-checkout" },
      {
        type: "paragraph",
        text: "If people reach the product and still don't buy, the remaining causes are the offer and the checkout. A first-time visitor is weighing an unfamiliar brand, so surprises at checkout hurt more than usual: delivery charges that appear late, a minimum order value, a forced account sign-up, or missing payment options. For lead-generation sites, the equivalent is a long form, a vague promise of what happens after submitting, or no way to ask a quick question first.",
      },
      {
        type: "paragraph",
        text: "Compare the creator's traffic with your other channels at each step of the funnel: product view, add to cart, checkout started and purchase, or page view, form started and form submitted. The step where creator traffic falls behind your other channels is where to focus.",
      },
      { type: "heading", text: "A hypothetical example", id: "hypothetical-example" },
      {
        type: "paragraph",
        text: "A skincare brand runs six micro-creators. Five send traffic that converts close to the store's normal rate. One sends three times as many sessions with almost no orders. The checks show the tracking is fine and the audience is in India. But that creator linked to the homepage while showing a single sunscreen, and the homepage opened with a sitewide sale banner for a different product. Changing the link to the sunscreen's product page, with the code applied, is the fix to test first. Without the diagnosis, the brand might have dropped its best-reaching creator.",
      },
      { type: "heading", text: "What the diagnosis tells you to do next", id: "next-steps" },
      {
        type: "table",
        headers: ["Where visitors drop", "Most likely cause", "Next step"],
        rows: [
          ["Before analytics records them", "Tagging, consent or slow loading", "Fix links and speed; reconcile clicks and sessions"],
          ["On arrival (very short sessions)", "Audience mismatch or message mismatch", "Check audience data; change the destination page"],
          ["On the product page", "Missing information, price surprises or trust", "Add delivery, returns and reviews near the buy button"],
          ["In checkout or the form", "Friction for first-time visitors", "Test a shorter form or simpler checkout path"],
          ["Nowhere obvious, conversion is just low", "The offer or product isn't compelling to this audience", "Test the offer or brief, or shift budget to creators who convert"],
        ],
      },
      {
        type: "paragraph",
        text: "If the funnel problem is the destination itself, influencer campaign landing pages explains when a dedicated page beats a product page and what to put on it. Influencer marketing for website traffic covers how to judge creator traffic by quality rather than clicks.",
        links: [
          { text: "influencer campaign landing pages", href: "/blog/influencer-campaign-landing-page" },
          { text: "Influencer marketing for website traffic", href: "/blog/influencer-marketing-website-traffic" },
        ],
      },
      { type: "heading", text: "When an outside audit helps", id: "outside-audit" },
      {
        type: "paragraph",
        text: "You can run most of this diagnosis yourself with analytics access and a phone. An outside review is useful when the site has steady traffic from several channels, conversion is low everywhere, not only from creators, and the team is too close to the pages to see the friction. A conversion rate optimisation audit from ZSpace Labs reviews the full funnel and ranks fixes by expected impact and effort. ZSpace notes that a site with very little traffic should usually fix traffic first, and that it doesn't promise a percentage uplift before seeing the data. " + DISCLOSURE,
        links: [{ text: "A conversion rate optimisation audit from ZSpace Labs", href: ZS.cro, rel: "sponsored" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Low conversion from creator traffic is a symptom, not a verdict. Check the tracking first, then the audience, then the path from post to purchase on a phone. Most of the time you'll find one specific break you can fix before the next campaign, and that's a better basis for the next budget decision than a guess about the channel.",
      },
    ],
    faqs: [
      {
        question: "Why does influencer traffic convert worse than search traffic?",
        answer: "Search visitors are usually already looking for what you sell, while a creator's viewers are discovering it. They are more often first-time visitors on phones, arriving in a spike, so slow pages, unclear offers and checkout friction cost more. Compare creator traffic with other discovery channels such as social ads, not with branded search.",
      },
      {
        question: "Is a high bounce rate from influencer traffic a bad sign?",
        answer: "It depends on the page. In GA4, bounce rate is the share of sessions that weren't engaged, meaning they lasted 10 seconds or less with no key event and only one page view. A high bounce rate on a page that should lead to a purchase is worth investigating, starting with whether the page matches what the creator showed.",
      },
      {
        question: "How do I know if the problem is the creator or my website?",
        answer: "Compare creators who linked to the same page. If most convert normally and one doesn't, look at that creator's audience and message. If all of them convert poorly, the page, offer or checkout is the more likely cause.",
      },
      {
        question: "Should I stop working with a creator whose traffic didn't convert?",
        answer: "Not before checking the tracking and the destination page. A creator who drives a lot of engaged traffic to the wrong page can perform well once the link goes to the right product. If the audience genuinely doesn't match your buyers, that's a better reason to stop.",
      },
    ],
  },

  {
    slug: "app-deep-linking-influencer-campaigns",
    category: "Campaign Strategy",
    title: "Preparing Your App for Influencer Campaigns: Deep Links, Store Pages and Attribution",
    seoTitle: "App Deep Links and Attribution for Influencer Campaigns",
    excerpt:
      "An app campaign loses people at every hop from post to store to first screen. Here's what to set up before creators promote your app: links that open the right screen, store pages per campaign, attribution you can trust and what iOS and Android allow.",
    metaDescription:
      "What an app needs before an influencer campaign: universal links and App Links, custom store pages, install attribution, iOS privacy limits and test steps.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: ["app influencer marketing", "deep links for influencer campaigns", "app install attribution", "custom product pages", "custom store listings"],
    related: ["mobile-app-influencer-marketing-india", "influencer-utm-tracking", "influencer-marketing-attribution-models"],
    body: [
      {
        type: "paragraph",
        text: "A creator recommending an app asks the viewer to do more than a creator recommending a product. They have to tap a link, reach the right store, install, open the app and get to the thing the creator showed, usually while wondering whether it's worth the storage space. Each of those hops loses people, and a link that drops them on a generic store page or the app's first launch screen loses more than it needs to.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before creators promote an app, set up verified deep links (universal links on iOS, App Links on Android) so creator links open the right screen when the app is installed and fall back to a useful web page when it isn't. Use custom store pages so the store listing matches the campaign, decide how installs will be attributed to each creator, and test every link on real devices. Plan for iOS privacy rules, which limit user-level attribution unless people allow tracking.",
      },
      { type: "heading", text: "Why app campaigns need more preparation than store campaigns", id: "why-apps-differ" },
      {
        type: "paragraph",
        text: "With an online store, a creator's link goes straight to the product. With an app, the link has to work in two situations: the viewer already has the app, or they don't. It also has to survive the jump into the App Store or Google Play and back out again, where ordinary web tracking stops. Influencer marketing for mobile apps covers the campaign side, including formats and why installs alone are a weak measure. This guide covers the technical groundwork.",
        links: [{ text: "Influencer marketing for mobile apps", href: "/blog/mobile-app-influencer-marketing-india" }],
      },
      { type: "heading", text: "Deep links: send people to the right screen", id: "deep-links" },
      {
        type: "paragraph",
        text: "A deep link opens a specific screen inside the app, such as a product, a feature or a sign-up offer, instead of the home screen. For creator campaigns, use the verified kind:",
      },
      {
        type: "list",
        items: [
          "iOS universal links: ordinary https links on your domain that open the app when it's installed and open the matching web page when it isn't. They need an association file on your website and the matching setting in the app.",
          "Android App Links: deep links verified against your website, so Android opens the app directly without asking which app to use. Google supports them on Android 6 and later on devices with Google services.",
          "Fallback pages: because both fall back to the web, the URL in a creator's link must load a useful page on its own, ideally one that explains the offer and links to the right store.",
        ],
      },
      {
        type: "paragraph",
        text: "Apple's guide to supporting universal links and Android's documentation on App Links cover the setup. If you still have Firebase Dynamic Links in old campaign materials, replace them: Firebase states that the service shut down on 25 August 2025 and that its links now return an error. It recommends App Links and universal links instead.",
        links: [
          { text: "Apple's guide to supporting universal links", href: SRC.appleUniversalLinks },
          { text: "Android's documentation on App Links", href: SRC.androidAppLinks },
          { text: "Firebase states that the service shut down on 25 August 2025", href: SRC.firebaseFdl },
        ],
      },
      {
        type: "paragraph",
        text: "Standard universal links and App Links only work when the app is installed. Sending a new user to the right screen after they install, known as a deferred deep link, needs extra work: either a mobile measurement or linking service, or your own logic that reads campaign information after the first launch. Decide which before the campaign, because it affects the links you give creators.",
      },
      { type: "heading", text: "Store pages that match the campaign", id: "store-pages" },
      {
        type: "paragraph",
        text: "Viewers who don't have the app land on a store listing. If the creator talked about one feature and the listing leads with another, you lose some of them at the last step. Both stores let you make campaign-specific versions of the listing:",
      },
      {
        type: "table",
        headers: ["", "App Store custom product pages", "Google Play custom store listings"],
        rows: [
          ["How many", "Up to 70 per app", "Up to 50"],
          ["What you can change", "Screenshots, app previews, promotional text and keywords", "Name, icon, descriptions and graphics"],
          ["How users reach it", "A unique URL generated for each page", "Your app's store URL plus a listing parameter you choose"],
          ["Where it's managed", "App Store Connect; each page is approved by App Review before it's visible", "Play Console, where you also choose who sees each listing (country, ads traffic, lapsed users and others)"],
          ["Deep link from the page", "Optional, opens the app for users on iOS 18 or later", "Not a listing setting; use App Links in the creator's link instead"],
          ["Reporting", "Impressions, downloads and conversion rate per page, after at least five first-time downloads", "Check Play Console's reports for each listing"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Apple's App Store Connect help on custom product pages and Google's Play Console help on custom store listings. You don't need a page per creator. A page per campaign theme, such as one feature, one audience or one language, is usually enough, and it keeps reporting readable.",
        links: [
          { text: "Apple's App Store Connect help on custom product pages", href: SRC.appleCpp },
          { text: "Google's Play Console help on custom store listings", href: SRC.playCustomListings },
        ],
      },
      { type: "heading", text: "Attribution: which creator drove which install", id: "attribution" },
      {
        type: "paragraph",
        text: "Web tracking stops at the store, so attributing installs to creators needs its own setup. The options work differently on each platform.",
      },
      {
        type: "list",
        items: [
          "Android: the Google Play Install Referrer API gives the app the referrer passed through the Play Store link, with timestamps for the click and the install, so a tagged Play link per creator can be read after install.",
          "iOS: Apple requires permission through App Tracking Transparency before an app tracks users across other companies' apps and websites or reads the advertising identifier. Without permission the identifier is all zeros, so expect much of your iOS attribution to be aggregated or modelled rather than user-level.",
          "Both: creator-specific referral or promo codes entered in the app, and a question at sign-up asking where people heard about you, work regardless of platform and give you a signal no link can lose.",
          "Custom store pages: per-page download reporting in App Store Connect gives an aggregate view of which campaign theme converts.",
        ],
      },
      {
        type: "paragraph",
        text: "Apple's user privacy and data use page defines tracking and sets out the permission rule. Google's Install Referrer documentation explains what the API returns. In-app codes and survey answers are the most dependable creator-level signal on iOS, so build them in before launch rather than adding them later.",
        links: [
          { text: "Apple's user privacy and data use page", href: SRC.applePrivacy },
          { text: "Google's Install Referrer documentation", href: SRC.playInstallReferrer },
        ],
      },
      {
        type: "paragraph",
        text: "Whatever the method, measure beyond the install: activation (the first meaningful action), retention after a week or a month, and revenue where it applies. Influencer marketing attribution models explains how to read several partial signals together without double counting.",
        links: [{ text: "Influencer marketing attribution models", href: "/blog/influencer-marketing-attribution-models" }],
      },
      { type: "heading", text: "Make the first session match the post", id: "first-session" },
      {
        type: "paragraph",
        text: "A new user who installed because a creator showed one feature should see that feature quickly, not a long onboarding sequence or a paywall before anything else. If deferred deep linking isn't set up, at least make sure the onboarding mentions the campaign's feature or offer, and that a creator's code can be entered early.",
      },
      { type: "heading", text: "Test before the first post", id: "testing" },
      {
        type: "list",
        items: [
          "Tap every creator link from inside Instagram, YouTube and any other app the creators use, on iOS and Android.",
          "Test with the app installed and not installed, and confirm the fallback page loads and points to the right store.",
          "Confirm each custom store page is approved and visible, and its URL is the one in the creator's link.",
          "Install from a tagged Play link and confirm your app reads the referrer.",
          "Enter each creator's code in the app and confirm it's recorded.",
          "Check that the first screen after install matches the campaign.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Giving creators a link that only works if the app is already installed.",
          "Using link shorteners in front of universal links, which Apple advises against for product-page deep links.",
          "Sending everyone to the default store listing when the creator talked about one feature.",
          "Relying on user-level iOS attribution as if every user allowed tracking.",
          "Reporting installs as the result, with no view of activation or retention.",
          "Leaving old Firebase Dynamic Links in bios, descriptions or pinned posts.",
        ],
      },
      { type: "heading", text: "Who sets this up", id: "who-sets-this-up" },
      {
        type: "paragraph",
        text: "Deep links, association files, referrer handling and in-app code entry are app and website engineering work, not campaign work, so book them into the product team's schedule well before the campaign date. If you don't have mobile developers in-house, ZSpace Labs builds iOS and Android apps, including integrations with backend services and third-party APIs. " + DISCLOSURE,
        links: [{ text: "ZSpace Labs builds iOS and Android apps", href: ZS.app, rel: "sponsored" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "App campaigns lose people at each hop between the post and the first useful screen. Verified deep links with good fallbacks, store pages that match the campaign, and attribution designed around what iOS and Android actually allow remove most of that loss and give you numbers you can defend. Set them up and test them before creators post, because fixing a link after the post is live rarely reaches the people who already tapped it.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a deep link and a deferred deep link?",
        answer: "A deep link opens a specific screen in an app that's already installed. A deferred deep link remembers where the user was going and takes them to that screen after they install and open the app for the first time. Standard universal links and App Links handle the first case; the second needs a linking service or your own post-install logic.",
      },
      {
        question: "Can I still use Firebase Dynamic Links for creator campaigns?",
        answer: "No. Firebase says Dynamic Links shut down on 25 August 2025 and its links return an error. Firebase recommends universal links on iOS and App Links on Android for deep linking after installation.",
      },
      {
        question: "Should each influencer get their own App Store page?",
        answer: "Usually not. Apple allows up to 70 custom product pages per app and Google Play allows up to 50 custom store listings, so you can make one page per campaign theme or language. Use creator-specific links or codes to tell creators apart.",
      },
      {
        question: "How do I attribute iOS installs to influencers?",
        answer: "Without the user's permission through App Tracking Transparency, apps can't track users across other companies' apps and websites, and the advertising identifier is unavailable. Combine in-app referral or promo codes, a where-did-you-hear-about-us question and aggregate custom product page reports rather than relying on user-level tracking.",
      },
    ],
  },

  {
    slug: "influencer-campaign-landing-page",
    category: "Campaign Strategy",
    title: "Influencer Campaign Landing Pages: When You Need One and How to Build It",
    seoTitle: "Influencer Campaign Landing Pages: When and How",
    excerpt:
      "Not every creator campaign needs its own landing page. Here's when a product page is enough, when a dedicated page earns its cost, and what a page built for creator traffic should include, from the first screen to tracking and indexing.",
    metaDescription:
      "When an influencer campaign needs a landing page, one page or one per creator, what to put on it, how to keep it fast on mobile and how to track and index it.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: ["influencer landing page", "creator campaign landing page", "landing page for influencer marketing", "campaign landing page checklist"],
    related: ["influencer-traffic-not-converting", "shopify-store-influencer-campaign-checklist", "influencer-landing-page-gcc"],
    body: [
      {
        type: "paragraph",
        text: "A landing page for an influencer campaign can lift results, or it can be a week of design work that sends people somewhere less useful than the product page you already had. The difference comes down to what the creator is asking viewers to do, and whether any existing page already does that job.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer campaign needs a dedicated landing page when creators feature several products, a bundle or an offer that no existing page shows, when the goal is a sign-up or enquiry rather than a purchase, or when the visitor needs context the product page doesn't give. If a creator shows one product, link to that product page instead. A good campaign page continues the post's message on the first screen, loads fast on a phone, asks for one action and is tagged so each creator's traffic can be measured.",
      },
      { type: "heading", text: "Product page or landing page?", id: "product-or-landing" },
      {
        type: "table",
        headers: ["Situation", "Best destination", "Why"],
        rows: [
          ["Creator shows one product", "That product page, with the code applied", "It already has price, variants, reviews and checkout"],
          ["Creator shows a routine, kit or bundle", "A landing page or a curated collection", "The visitor needs all the items in one place"],
          ["Launch before the product is on sale", "A landing page with a waitlist or pre-order", "There's no product page to buy from yet"],
          ["Lead generation (a service, B2B, education, real estate)", "A landing page with a short enquiry form", "The homepage serves too many audiences to convert one"],
          ["An offer only creator audiences get", "A landing page that explains the offer", "The offer needs explaining and shouldn't appear sitewide"],
          ["Several languages or markets", "One page per language or market", "The page should match the creator's language and the viewer's currency"],
        ],
      },
      { type: "heading", text: "One page for the campaign, or one per creator?", id: "one-or-many" },
      {
        type: "paragraph",
        text: "One page per campaign, with a tagged link per creator, is the right default. It's quicker to build, easier to keep accurate and easier to improve, because all the traffic tests one page. Separate pages per creator make sense only when the creators genuinely say different things: different products, different audiences or different languages. A middle option is one page with a short creator-specific line at the top, chosen from the link's campaign parameter, which keeps a single page while greeting the visitor in context.",
      },
      { type: "heading", text: "What to put on the first screen", id: "first-screen" },
      {
        type: "paragraph",
        text: "Most visitors will judge the page from the first screen of a phone, so put the essentials there:",
      },
      {
        type: "list",
        items: [
          "The product or offer the creator showed, recognisably the same.",
          "A headline that picks up the creator's angle, not your generic brand line.",
          "The price or offer, including the creator's discount if there is one.",
          "One clear action: buy, add to cart, join the waitlist or enquire.",
          "A short trust cue near the action, such as delivery time, returns or reviews.",
        ],
      },
      {
        type: "paragraph",
        text: "Below the first screen, answer the questions a first-time visitor has: how it works or how to use it, who it's for, what it costs in total, and what happens after they act. Creator content, used with the creator's permission, often explains the product better than brand copy, but keep heavy video below the fold or load it only when tapped.",
      },
      { type: "heading", text: "Keep the action simple", id: "one-action" },
      {
        type: "paragraph",
        text: "A campaign page should ask for one thing. If the goal is a purchase, every link on the page should move towards checkout; navigation to the rest of the site can be minimal. If the goal is an enquiry, ask only for what you need to respond: usually name, a contact method and one or two questions. A WhatsApp or click-to-call option suits markets where people prefer to message, but route those enquiries so you can still count them by creator.",
      },
      { type: "heading", text: "Speed and mobile", id: "speed" },
      {
        type: "paragraph",
        text: "Creator traffic is mostly mobile and often in an app's built-in browser, so test the page there. Google's Core Web Vitals guidance treats a page as good when Largest Contentful Paint is within 2.5 seconds, Interaction to Next Paint is 200 milliseconds or less and Cumulative Layout Shift is 0.1 or less, measured at the 75th percentile on mobile and desktop separately. Campaign pages tend to fail on large hero videos, heavy animation and third-party scripts added for the campaign, so keep those to what the page needs.",
        links: [{ text: "Google's Core Web Vitals guidance", href: SRC.webVitals }],
      },
      { type: "heading", text: "Tracking", id: "tracking" },
      {
        type: "list",
        items: [
          "Give each creator a tagged link to the page, using one naming convention for the whole campaign.",
          "Track the page's one action as a key event, such as a purchase, a form submission or a waitlist sign-up.",
          "If you offer WhatsApp or phone, use creator-specific pre-filled messages or numbers, or ask where they heard about you.",
          "Pair links with creator codes where there's a purchase, because some viewers will buy later without the link.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer UTM tracking has a naming convention you can copy. How to track influencer sales explains how to combine links, codes and survey answers.",
        links: [
          { text: "Influencer UTM tracking", href: "/blog/influencer-utm-tracking" },
          { text: "How to track influencer sales", href: "/blog/track-influencer-sales" },
        ],
      },
      { type: "heading", text: "Should campaign pages be indexed?", id: "indexing" },
      {
        type: "paragraph",
        text: "Usually not. A page built for one campaign, especially one with a creator-only discount or content that repeats a product page, isn't meant to be found through search. Add a noindex rule and keep it out of your sitemap, while still letting people reach it through creator links. A long-running page for an ongoing ambassador programme may be worth indexing if it has useful content of its own. Google's documentation on blocking indexing with noindex explains the options.",
        links: [{ text: "Google's documentation on blocking indexing with noindex", href: SRC.googleNoindex }],
      },
      {
        type: "paragraph",
        text: "When the campaign ends, decide what happens to the page. Creator posts stay up for months, so a page that suddenly returns an error wastes that traffic. Redirect it to the product or collection, or keep it live with a note that the offer has ended.",
      },
      { type: "heading", text: "Pages for different markets", id: "markets" },
      {
        type: "paragraph",
        text: "If creators in different markets point to the same campaign, build a version per market where language, currency, delivery or rules differ, rather than one page that tries to serve everyone. For Gulf campaigns, influencer landing pages for GCC traffic covers Arabic and right-to-left layouts and the trust signals Gulf shoppers look for.",
        links: [{ text: "influencer landing pages for GCC traffic", href: "/blog/influencer-landing-page-gcc" }],
      },
      { type: "heading", text: "Launch checklist", id: "launch-checklist" },
      {
        type: "table",
        headers: ["Check", "Done when"],
        rows: [
          ["Need", "A product page wouldn't do the job; the reason is written down"],
          ["First screen", "Shows what the creator showed, the offer and one action, on a phone"],
          ["Questions answered", "How it works, who it's for, total cost and what happens next"],
          ["Speed", "Passes Core Web Vitals on mobile or the issues are known"],
          ["Tracking", "Tagged link per creator; the key event fires; codes or messages are attributable"],
          ["Indexing", "Noindex and out of the sitemap, unless it's meant to rank"],
          ["After the campaign", "Redirect or ended-offer message planned"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Building a landing page for a single product that already has a good product page.",
          "Separate pages for every creator saying the same thing.",
          "Several competing calls to action on one page.",
          "Autoplaying video at the top that slows the first screen.",
          "Letting the page break or disappear while creator posts are still live.",
        ],
      },
      { type: "heading", text: "Building the page", id: "building-the-page" },
      {
        type: "paragraph",
        text: "If your site's CMS or store builder lets marketing create pages from existing sections, a campaign page is a few hours of work. If every new page needs a developer, or the template can't be made fast enough on mobile, that's worth fixing before the next campaign rather than working around each time. The web development studio ZSpace Labs builds marketing and lead-generation sites with a CMS your team can publish from. " + DISCLOSURE,
        links: [{ text: "The web development studio ZSpace Labs", href: ZS.web, rel: "sponsored" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A landing page earns its place when it does something no existing page does for the creator's viewer: brings a routine together, explains an offer, captures a lead or speaks the right language. When it does, keep it to one message and one action, make it fast on a phone, tag every creator's link and plan for what happens after the campaign. When it doesn't, the product page is the better destination.",
      },
    ],
    faqs: [
      {
        question: "Do I need a landing page for every influencer campaign?",
        answer: "No. If a creator features one product, the product page with the creator's code applied is usually the best destination. A landing page is worth building for bundles and routines, pre-launch waitlists, lead generation, creator-only offers or different languages.",
      },
      {
        question: "Should each influencer have their own landing page?",
        answer: "Usually one page per campaign with a tagged link per creator is enough. Build separate pages only when creators feature different products, speak to different audiences or post in different languages.",
      },
      {
        question: "Should an influencer campaign landing page be indexed by Google?",
        answer: "Usually not. Short-term campaign pages, especially those with creator-only offers or content that repeats a product page, are better set to noindex and left out of the sitemap. A long-running programme page with useful content of its own can be indexed.",
      },
      {
        question: "What should happen to the landing page after the campaign ends?",
        answer: "Creator posts stay up long after a campaign, so don't let the page return an error. Redirect it to the relevant product or collection, or keep it live with a clear note that the offer has ended.",
      },
    ],
  },

  {
    slug: "influencer-tracking-uk-cookie-rules",
    category: "Campaign Strategy",
    title: "Tracking Influencer Campaigns Under the UK's Cookie Rules",
    seoTitle: "Influencer Campaign Tracking and UK Cookie Rules",
    excerpt:
      "The ICO finalised its guidance on cookies and similar technologies on 29 April 2026. Here's what it means for tracking creator links, affiliate programmes and conversions in the UK, and which measurement methods don't depend on cookies at all.",
    metaDescription:
      "How UK cookie rules affect influencer tracking: the ICO's 2026 guidance, the analytics exception and its limits, affiliate links, pixels and codes.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    spatialCoverage: "United Kingdom",
    inLanguage: "en-GB",
    tags: ["UK cookie rules influencer marketing", "PECR influencer tracking", "ICO storage and access guidance", "influencer affiliate tracking UK", "UK analytics cookie exception"],
    related: ["influencer-advertising-rules-uk", "influencer-utm-tracking", "influencer-marketing-uk"],
    body: [
      {
        type: "paragraph",
        text: "Most influencer campaigns are measured with tools that store or read something on the visitor's device: analytics cookies, advertising pixels and affiliate tracking. In the UK, that falls under the Privacy and Electronic Communications Regulations (PECR), which the Information Commissioner's Office (ICO) enforces. The ICO finalised its guidance on storage and access technologies on 29 April 2026, and it settles several questions that matter for creator campaigns, including what the new analytics exception does and doesn't cover.",
        links: [{ text: "The ICO finalised its guidance on storage and access technologies", href: SRC.icoGuidance }],
      },
      {
        type: "paragraph",
        text: "This is general guidance for planning, not legal advice. For a significant campaign, check your setup with someone qualified in UK privacy law.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Under the ICO's 2026 guidance, first-party analytics used only to improve your website can run without consent if you meet the statistical purposes exception's conditions, including clear information and a simple, free way to object. The exception doesn't cover anything related to online advertising, so measuring whether people clicked an advert, sharing conversions with ad platforms, and affiliate tracking that stores information and passes it to a third party generally need consent. Creator-specific discount codes and post-purchase surveys don't rely on device storage and keep working whatever visitors choose.",
      },
      { type: "heading", text: "What the rules cover", id: "what-the-rules-cover" },
      {
        type: "paragraph",
        text: "PECR's rule is about storing information on a user's device, or accessing information already there. The ICO's guidance applies it to cookies and to similar technologies, including tracking pixels, web storage, fingerprinting and link decoration, which is the practice of adding extra information to the URL in a link someone clicks. The guidance's position is that link decoration matters under PECR when it involves storing or accessing information on the device, and that the purpose it's used for is the key consideration.",
        links: [{ text: "The ICO's guidance applies it to cookies and to similar technologies", href: SRC.icoTechnologies }],
      },
      {
        type: "paragraph",
        text: "In practice, the UTM tags on a creator's link are a piece of link decoration. What engages PECR is usually what happens next: an analytics tool or pixel on your site reads the tags and stores an identifier in a cookie.",
      },
      { type: "heading", text: "The analytics exception and its limits", id: "analytics-exception" },
      {
        type: "paragraph",
        text: "PECR now includes an exception for statistical purposes. According to the ICO's guidance on the exceptions, you don't need consent where the sole purpose of the storage or access is to collect statistical information about how your service is used, with a view to improving it. The conditions are strict:",
        links: [{ text: "the ICO's guidance on the exceptions", href: SRC.icoExceptions }],
      },
      {
        type: "list",
        items: [
          "Sole purpose: the technology is used only to improve your website or service, not for anything else.",
          "Aggregate information: the guidance describes aggregate statistics about how the service is used, not about who is using it.",
          "Clear information: you tell users what the technology does and why.",
          "A simple, free way to object: for example a toggle that's on by default and can be switched off. If someone objects, you stop.",
          "Third-party analytics providers: they can be covered only as a processor acting for you, not a joint controller, and must not combine the data with other information they hold.",
        ],
      },
      {
        type: "paragraph",
        text: "The important line for influencer marketing is that the guidance says the exception does not apply to purposes related to online advertising. It gives examples that need consent, including information on whether a user viewed or clicked an advert to measure its performance, and connecting a visitor's activity, such as purchases, to advertising partners. A sponsored creator post is advertising under UK rules, so measuring creator posts through device storage sits close to that line. Don't assume the analytics exception covers creator-campaign measurement without checking it against your own setup.",
      },
      { type: "heading", text: "What this means for each tracking method", id: "methods" },
      {
        type: "table",
        headers: ["Method", "Relies on device storage?", "Planning position under the ICO guidance"],
        rows: [
          ["Tagged creator links read by your analytics", "Yes, when your analytics sets cookies", "The exception may cover aggregate site-improvement analytics; attributing visits to paid creator posts is advertising-related, so plan for consent"],
          ["Advertising pixels and conversion APIs fed from the browser", "Yes", "Consent: the guidance lists sharing conversions with advertising partners as needing it"],
          ["Affiliate links and creator commission tracking", "Usually", "The guidance says affiliate tracking that stores information and later shares it with a third party engages PECR"],
          ["Creator discount codes entered at checkout", "No (the code is typed in)", "Not a PECR storage question; order data is still personal data under UK GDPR"],
          ["Post-purchase 'where did you hear about us?' question", "No", "Not a PECR storage question; tell customers how you use the answers"],
          ["Creator-specific landing pages counted in your own server data", "Depends on the page", "No device storage in itself, but any analytics or pixels on the page still apply"],
        ],
      },
      { type: "heading", text: "Affiliate programmes need particular care", id: "affiliate" },
      {
        type: "paragraph",
        text: "Many creator programmes pay commission through affiliate links, which typically store an identifier when someone clicks and read it at purchase to credit the creator. The ICO's guidance gives affiliate marketing as an example of storing information on a device and later accessing it to share with a third party, which brings it within PECR. If commission depends on that tracking, consent rates directly affect what creators can be credited for. Give affiliate creators a code as well as a link, so a sale isn't lost when a visitor declines tracking.",
        links: [{ text: "The ICO's guidance gives affiliate marketing as an example", href: SRC.icoTechnologies }],
      },
      { type: "heading", text: "Measuring creator campaigns with less tracking", id: "measure-with-less" },
      {
        type: "list",
        items: [
          "One discount code per creator, with an end date. Codes keep working whatever visitors choose about cookies.",
          "A one-question survey after purchase or sign-up, listing creators or 'a creator on Instagram or TikTok'.",
          "Creator-specific landing page paths, so you can count visits and orders by page in your own data.",
          "Consented analytics for the detail, read as a sample rather than a total.",
          "Before-and-after comparisons of branded search and direct visits around creator posting dates.",
        ],
      },
      {
        type: "paragraph",
        text: "Expect consented analytics to show fewer creator visits and conversions than actually happened, and report that openly instead of presenting the tracked figure as the whole result. Influencer UTM tracking explains why tagged numbers come in lower than creator-reported clicks, and measuring influencer campaign ROI covers how to report a range rather than a single number.",
        links: [
          { text: "Influencer UTM tracking", href: "/blog/influencer-utm-tracking" },
          { text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" },
        ],
      },
      { type: "heading", text: "A setup checklist for UK campaigns", id: "checklist" },
      {
        type: "list",
        items: [
          "List every technology on the pages creators link to: analytics, pixels, affiliate scripts, heatmaps and chat widgets.",
          "For each, write down its purpose and whether it relies on an exception or on consent.",
          "Check that the consent banner blocks consent-based tags until the visitor agrees, and that declining is as easy as accepting.",
          "If you rely on the analytics exception, add clear information and a simple way to object, and confirm your provider acts as your processor.",
          "Give every creator a code as well as a link.",
          "Add a post-purchase source question.",
          "Agree with affiliate creators how sales are credited when tracking isn't possible.",
        ],
      },
      { type: "heading", text: "This is separate from disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Cookie rules govern how you measure. Whether a creator's post is properly labelled as an advert is a different set of rules, from the ASA and the CMA. UK influencer marketing rules covers labelling, gifted content and affiliate disclosure.",
        links: [{ text: "UK influencer marketing rules", href: "/blog/influencer-advertising-rules-uk" }],
      },
      { type: "heading", text: "Getting the setup built", id: "getting-it-built" },
      {
        type: "paragraph",
        text: "Much of this is implementation: which tags load before consent, how the banner works, how codes and survey answers reach your reporting, and how creator landing pages are counted. If your site needs that work done properly rather than patched, ZSpace Labs, a web development studio that builds sites for UK clients, sets up analytics and tracking as part of its website builds. " + DISCLOSURE,
        links: [{ text: "ZSpace Labs, a web development studio that builds sites for UK clients", href: ZS.web, rel: "sponsored" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The ICO's final guidance gives UK sites a real exception for improving their own websites, but it draws a clear line at advertising, and creator campaigns are advertising. Plan for consent where measurement is advertising-related, keep affiliate creators covered with codes, and build in signals that don't depend on cookies. That way the campaign is compliant and the report still tells you which creators worked.",
      },
    ],
    faqs: [
      {
        question: "Do UTM parameters on influencer links need cookie consent in the UK?",
        answer: "The tags on the link are link decoration. Under the ICO's guidance, PECR applies when a technique stores or accesses information on the user's device, and the purpose matters. In practice the question is usually about the analytics or pixel on your site that reads the tags and sets cookies, so assess those tools rather than the link itself.",
      },
      {
        question: "Can I use the UK analytics cookie exception for influencer campaigns?",
        answer: "The statistical purposes exception covers aggregate analytics used only to improve your website, with clear information and a simple way to object. The ICO says it doesn't apply to purposes related to online advertising, such as measuring whether people clicked an advert. Because sponsored creator posts are advertising, don't assume it covers creator-campaign measurement without checking your setup.",
      },
      {
        question: "Do influencer affiliate links need consent in the UK?",
        answer: "Affiliate tracking that stores information on a device and later shares it with a third party falls within PECR, according to the ICO's guidance, so it generally needs consent unless an exception applies. Give affiliate creators a discount code as well, so sales can still be credited when visitors decline tracking.",
      },
      {
        question: "When was the ICO's cookie guidance finalised?",
        answer: "The ICO first published its guidance on storage and access technologies on 20 December 2024 and finalised it on 29 April 2026, after two consultations.",
      },
    ],
  },
];

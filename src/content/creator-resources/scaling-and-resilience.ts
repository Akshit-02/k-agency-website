import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_9_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Scaling and resilience (750–799 layer). Intent boundaries:
 * - scaling-creator-business: growth beyond one person, incl. growth stages, scalability tests and the agency question
 * - creator-business-risk-management: the risk register across the business
 * - creator-account-security: protecting accounts and access (Content & Identity Protection section)
 * - creator-platform-risk: reducing dependence on one platform
 * - creator-business-continuity: keeping the business running when the creator can't create
 * Existing owners: creator-reputation-management, creator-crisis-management,
 * creator-revenue-diversification (income concentration), creator-audience-ownership,
 * creator-manager-vs-agency (signing with an agency).
 */
export const scalingAndResiliencePosts: BlogPost[] = [
  {
    slug: "scaling-creator-business",
    category: "Creator Resources",
    title: "Scaling a Creator Business: How to Grow Beyond a One-Person Operation",
    seoTitle: "Scaling a Creator Business Beyond One Person",
    excerpt:
      "How creator businesses scale: the five growth stages from solo creator to creator-led company, what changes at each stage, a scalability test for your business model, the four ways to scale, when building an agency or services arm makes sense, and the signs you're scaling too fast.",
    metaDescription:
      "Scale a creator business: five growth stages from solo to creator-led company, a scalability test, four ways to scale and when an agency makes sense.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["scaling a creator business", "creator business growth stages", "creator business scalability", "creator agency vs solo creator", "grow creator business", "creator-led company"],
    related: ["creator-operations", "creator-team-building", "creator-business-model"],
    body: [
      {
        type: "paragraph",
        text: "A creator business built on one person's time has a ceiling. There are only so many videos you can script, film and appear in, and only so many brand deals you can deliver well. Scaling means growing income or impact faster than your hours, without breaking the thing your audience values: you.",
      },
      {
        type: "paragraph",
        text: "This is the pillar guide for Kudozz's scaling and resilience section. It connects the business model, operations and team guides into one growth path.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator businesses usually grow through five stages: solo creator, organised creator, professional creator business, small team and creator-led company. To scale, reduce the share of work that needs your personal time, through systems and delegation, and add revenue that isn't tied to your hours, such as products, memberships, licensing or services delivered by a team. Scale one lever at a time, keep fixed costs within your conservative income, and protect the creative core that made the audience trust you.",
      },
      { type: "heading", text: "The five growth stages", id: "stages" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-business-stages.svg",
        alt: "Five creator business growth stages from solo creator to organised creator, professional creator business, small team and creator-led company, with the focus of each stage",
        caption: "Most creators don't need to reach stage five. Each stage is a valid place to stay.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Stage", "What it looks like", "Main constraint", "Focus"],
        rows: [
          ["1. Solo creator", "You do everything; income is irregular", "Time and consistency", "Content quality, audience, first brand deals"],
          ["2. Organised creator", "Trackers, SOPs, a weekly rhythm; maybe freelancers", "Admin and editing hours", "Operations, pricing, first delegation"],
          ["3. Professional creator business", "Steady income, several revenue lines, regular freelancers", "Your decision-making bandwidth", "Revenue mix, finance controls, a manager or producer"],
          ["4. Small team", "Two to ten regular people", "Coordination and management", "Roles, team management, documented processes"],
          ["5. Creator-led company", "Multiple channels, products, clients or talent", "Leadership and cash flow", "Department owners, dashboards, continuity"],
        ],
      },
      {
        type: "paragraph",
        text: "Stages aren't a ladder you must climb. Many creators earn well and happily at stage three. The point of the model is to recognise which constraint is holding you back now. Operations at each stage is covered in creator operations; team building in creator team building.",
        links: [
          { text: "creator operations", href: "/blog/creator-operations" },
          { text: "creator team building", href: "/blog/creator-team-building" },
        ],
      },
      { type: "heading", text: "Is your business scalable? A five-question test", id: "scalability" },
      {
        type: "table",
        headers: ["Question", "Less scalable", "More scalable"],
        rows: [
          ["How much income needs you on camera or in the room?", "Almost all", "A shrinking share"],
          ["Can someone else deliver part of the work to your standard?", "No documented process", "SOPs and a trained team"],
          ["Does revenue grow without equal growth in your hours?", "Only brand deals and one-to-one services", "Products, memberships, licensing, team-delivered services"],
          ["Do systems work when you're away for a week?", "Things stop", "Content and delivery continue"],
          ["Does growth increase fixed costs faster than income?", "Yes", "Costs follow revenue"],
        ],
      },
      {
        type: "paragraph",
        text: "A business built entirely on your face and your hours can still be excellent, but it scales mainly by raising prices and choosing better deals, not by volume. See how to raise creator rates.",
        links: [{ text: "how to raise creator rates", href: "/blog/how-to-raise-creator-rates" }],
      },
      { type: "heading", text: "Four ways to scale", id: "levers" },
      {
        type: "table",
        headers: ["Lever", "How it works", "Watch for"],
        rows: [
          ["Leverage your time", "Systems, delegation and automation free you for high-value work", "Quality control as more people touch the work"],
          ["Increase value per piece", "Higher rates, packages, retainers, licensing", "Audience trust if sponsored content increases"],
          ["Add revenue not tied to your hours", "Digital products, memberships, courses, affiliate and commerce", "Launch effort; audience fatigue"],
          ["Build a team-delivered business", "Services, a production studio, an agency or additional channels", "Management load; becoming a different business"],
        ],
      },
      {
        type: "paragraph",
        text: "Choosing the right model is covered in creator business model, and adding income streams in creator revenue diversification.",
        links: [
          { text: "creator business model", href: "/blog/creator-business-model" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
        ],
      },
      { type: "heading", text: "Should you build an agency or stay solo?", id: "agency" },
      {
        type: "paragraph",
        text: "Some creators scale by turning their skills into a team-delivered business: a production studio making content for brands, a social media agency, or a talent business representing other creators. This is a different company from being a creator. It can work well, but be honest about the trade-offs.",
      },
      {
        type: "table",
        headers: ["", "Stay a solo-led creator business", "Build an agency or studio"],
        rows: [
          ["What you sell", "Your content, audience and expertise", "Your team's services"],
          ["Your role", "Creator and decision-maker", "Manager, seller and leader"],
          ["Income ceiling", "Linked to your personal brand and rates", "Linked to team size, clients and margins"],
          ["Risks", "Burnout, platform and income concentration", "Payroll, client churn, cash flow, management load"],
          ["Good fit if", "You love making content", "You enjoy building teams and selling services"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're weighing whether to sign with an agency rather than build one, that's a different question, covered in creator manager vs agency. Selling services yourself is covered in creator services.",
        links: [
          { text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" },
          { text: "creator services", href: "/blog/creator-services" },
        ],
      },
      {
        type: "paragraph",
        text: "If you decide to build an agency or studio, start with how to start a creator management agency in India or the creator studio business model.",
        links: [
          { text: "how to start a creator management agency in India", href: "/blog/start-creator-management-agency-india" },
          { text: "creator studio business model", href: "/blog/creator-studio-business-model" },
        ],
      },
      { type: "heading", text: "A scaling plan in five steps", id: "plan" },
      {
        type: "list",
        items: [
          "1. Identify your stage and its main constraint.",
          "2. Fix operations first: trackers, SOPs, weekly rhythm (see the creator operations checklist).",
          "3. Delegate the biggest time sink that isn't your creative core.",
          "4. Add one lever at a time: rates, a product, a membership or a team-delivered service.",
          "5. Review quarterly: income per hour of your time, fixed costs vs conservative income, quality and wellbeing.",
        ],
      },
      {
        type: "paragraph",
        text: "Checklist: creator operations checklist.",
        links: [{ text: "creator operations checklist", href: "/blog/creator-operations-checklist" }],
      },
      { type: "heading", text: "Worked example", id: "example" },
      {
        type: "paragraph",
        text: "A Kolkata-based food creator earning mainly from brand deals was at stage two: organised, but every rupee depended on her cooking on camera. She scaled in three moves over eighteen months: an editor and a VA freed two days a week; she used them to launch a paid recipe membership; later she added a small production service shooting food content for local restaurants, run by her editor with her as creative director. Her brand deal volume stayed roughly the same; her income stopped depending on it. The figures and timeline are illustrative, but the order matters: operations, then delegation, then new levers.",
      },
      { type: "heading", text: "Signs you're scaling too fast", id: "too-fast" },
      {
        type: "list",
        items: [
          "Fixed costs depend on your best months, not your average ones.",
          "Content quality or consistency is slipping.",
          "You're managing more than creating, without having chosen that.",
          "Brands or clients are noticing missed dates or errors.",
          "You can't take a week off without things stopping.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hiring before systems exist, so the team inherits chaos.",
          "Adding several revenue streams at once.",
          "Copying the team structure of a much larger creator.",
          "Building an agency when you actually want to make content.",
          "Scaling output while the audience wanted depth.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Scaling a creator business is about reducing dependence on your hours while protecting what makes you worth following. Know your stage, fix operations first, delegate the biggest non-creative time sink, add one lever at a time and keep costs within your conservative income. And build resilience as you grow; creator business risk management covers what can go wrong.",
        links: [{ text: "creator business risk management", href: "/blog/creator-business-risk-management" }],
      },
    ],
    faqs: [
      {
        question: "How do you scale a creator business?",
        answer:
          "Reduce how much work needs your personal time through systems and delegation, then add revenue not tied to your hours, such as products, memberships, licensing or team-delivered services, one lever at a time.",
      },
      {
        question: "What are the stages of a creator business?",
        answer:
          "A common model has five: solo creator, organised creator, professional creator business, small team and creator-led company. Each has a different main constraint.",
      },
      {
        question: "Should a creator start an agency?",
        answer:
          "Only if you want to run a services business: selling to clients, managing a team and handling payroll and cash flow. It's a different job from being a creator.",
      },
    ],
  },
  {
    slug: "creator-business-risk-management",
    category: "Creator Resources",
    title: "Creator Business Risk Management: Risks Every Professional Creator Should Understand",
    seoTitle: "Creator Business Risk Management: A Practical Guide",
    excerpt:
      "The main risks in a creator business (platform, account, income concentration, legal and contract, reputation, key-person, team and data), how to score them in a simple risk register, and practical controls for each, with links to deeper guides.",
    metaDescription:
      "Creator business risk management: platform, account, income, legal, reputation, key-person and data risks, a simple risk register and practical controls.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator business risk management", "creator business risks", "creator risk register", "influencer business risk", "protect creator business", "creator risk checklist"],
    related: ["creator-business-continuity", "creator-platform-risk", "creator-account-security"],
    body: [
      {
        type: "paragraph",
        text: "Creator businesses are unusually exposed. A single platform policy change can cut reach overnight, a hacked account can stop income for weeks, and one brand pausing its budget can halve a month's revenue. Most of these risks can't be removed, but they can be seen early and made smaller.",
      },
      {
        type: "paragraph",
        text: "This guide gives an overview and a risk register. It's general information, not legal, financial or security advice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator business risk management means listing what could seriously hurt your business, scoring each risk by likelihood and impact, and putting simple controls in place for the biggest ones. The main risks are platform dependence, account loss or hacking, income concentration, legal and contract issues, reputation damage, key-person risk (the business stops if you can't work), team and vendor issues, and data loss. Review the register every quarter.",
      },
      { type: "heading", text: "The eight main risks", id: "risks" },
      {
        type: "table",
        headers: ["Risk", "What it looks like", "Key controls", "Deeper guide"],
        rows: [
          ["Platform dependence", "Algorithm change, policy change, ban, monetisation change", "Second platform, owned audience, content archive", "Creator platform risk"],
          ["Account loss or hacking", "Phishing, SIM swap, shared passwords, takeover", "Passkeys or app-based 2FA, password manager, role-based access", "Creator account security"],
          ["Income concentration", "One brand, stream or platform is most of your income", "Diversify clients and streams; retainers; cash buffer", "Revenue diversification"],
          ["Legal and contract", "Usage rights disputes, exclusivity breaches, unpaid invoices", "Written contracts, records, clear usage terms", "Influencer contract guide"],
          ["Reputation", "Backlash, old content resurfacing, controversial sponsor", "Brand vetting, disclosure, response plan", "Reputation management"],
          ["Key person", "Illness, burnout, family emergency", "Content buffer, documentation, backup people", "Business continuity"],
          ["Team and vendors", "Freelancer leaves mid-project, ownership unclear", "Agreements, backups, access register", "Creator team management"],
          ["Data and files", "Lost footage, deleted drive, no contract copies", "Backups in two places, organised records", "Campaign documentation"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides for each: creator platform risk, creator account security, creator revenue diversification, the influencer contract guide for creators, creator reputation management, creator business continuity and creator campaign documentation.",
        links: [
          { text: "creator platform risk", href: "/blog/creator-platform-risk" },
          { text: "creator account security", href: "/blog/creator-account-security" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "creator reputation management", href: "/blog/creator-reputation-management" },
          { text: "creator business continuity", href: "/blog/creator-business-continuity" },
          { text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" },
        ],
      },
      { type: "heading", text: "Build a simple risk register", id: "register" },
      {
        type: "paragraph",
        text: "Score each risk from 1 (low) to 3 (high) for likelihood and impact, and multiply. Anything scoring 6 or 9 needs a control this quarter.",
      },
      {
        type: "template",
        label: "Risk register (illustrative)",
        text: "Risk                        Likelihood  Impact  Score  Control                               Owner  Review\nInstagram account hacked     2           3       6      Passkey + authenticator; no shared    Me     Quarterly\n                                                          passwords; recovery email checked\n70% income from one brand    3           2       6      Pitch 3 new brands/month; add         Me     Monthly\n                                                          retainer with a second client\nEditor unavailable           2           2       4      Second editor on standby; SOPs        CM     Quarterly\nFootage lost                 1           3       3      Two backups; monthly check            VA     Monthly",
      },
      { type: "heading", text: "Controls that cover several risks at once", id: "controls" },
      {
        type: "list",
        items: [
          "A cash buffer of several months' costs covers income dips, platform shocks and illness.",
          "An owned audience (email list, community, website) reduces platform and account risk.",
          "Documentation and SOPs reduce key-person and team risk.",
          "Written contracts and organised records reduce legal and payment risk.",
          "Security basics (passkeys or 2FA, password manager, role-based access) reduce account and team risk.",
        ],
      },
      {
        type: "paragraph",
        text: "Buffers and irregular income are covered in creator financial planning.",
        links: [{ text: "creator financial planning", href: "/blog/creator-financial-planning" }],
      },
      { type: "heading", text: "Risk by stage", id: "stages" },
      {
        type: "table",
        headers: ["Stage", "Biggest risks to address first"],
        rows: [
          ["Solo creator", "Account security, platform dependence, unpaid invoices"],
          ["Professional creator", "Income concentration, contract terms, key-person risk"],
          ["Small team", "Access control, team and vendor risk, data backups"],
          ["Creator-led company", "Cash flow, client concentration, continuity and leadership"],
        ],
      },
      { type: "heading", text: "Insurance and professional help", id: "insurance" },
      {
        type: "paragraph",
        text: "Some creators ask about insurance for equipment, health or professional liability. Products and terms vary, so speak to a licensed insurance adviser about what fits your situation. For contract, tax and legal risks, a lawyer and chartered accountant are worth involving before problems arise, especially for high-value or exclusive deals.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming it won't happen because it hasn't yet.",
          "Treating risk as a one-off exercise instead of a quarterly review.",
          "Protecting the platform account but not the email that recovers it.",
          "Depending on one client or platform for most income without a plan.",
          "No written agreements with freelancers.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "You can't remove the risks of building a business on platforms, but you can see them coming. List them, score them, fix the biggest ones with simple controls and review every quarter. When something does go wrong, creator crisis management covers the response.",
        links: [{ text: "creator crisis management", href: "/blog/creator-crisis-management" }],
      },
    ],
    faqs: [
      {
        question: "What are the biggest risks for a creator business?",
        answer:
          "Platform dependence, account loss or hacking, income concentration, legal and contract issues, reputation damage, key-person risk, team and vendor issues, and data loss.",
      },
      {
        question: "What is a risk register for creators?",
        answer:
          "A simple list of risks scored by likelihood and impact, with a control, owner and review date for each. It helps you focus on the few risks that matter most.",
      },
      {
        question: "How often should creators review business risks?",
        answer: "Quarterly, and whenever you add a platform, revenue stream, team member or major client.",
      },
    ],
  },
  {
    slug: "creator-account-security",
    category: "Creator Resources",
    title: "Creator Account Security: How to Protect Your Social Media Business",
    seoTitle: "Creator Account Security: Protect Your Social Accounts",
    excerpt:
      "How creators protect Instagram, YouTube and email accounts: securing the recovery email first, passkeys and app-based two-factor authentication, a password manager, giving team access without passwords, spotting phishing and fake brand offers, SIM-swap risk, and what to do if you're hacked in India.",
    metaDescription:
      "Creator account security: passkeys and 2FA, securing recovery email, team access without passwords, phishing and SIM-swap risks and what to do if hacked.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator account security", "protect Instagram account", "YouTube channel hacked", "two-factor authentication creators", "passkeys Instagram", "creator account hacked India", "creator password management", "password manager for creators"],
    related: ["creator-impersonation", "creator-scams-fake-brand-collaborations", "creator-business-continuity"],
    body: [
      {
        type: "paragraph",
        text: "For a creator, an account isn't just a profile. It's the shop front, the portfolio and often most of the income. When a channel is hijacked to stream a crypto scam, or an Instagram account is locked after a fake \"collaboration\" login page, the business stops until access is recovered, and recovery isn't guaranteed.",
      },
      {
        type: "paragraph",
        text: "Platform security features change. This guide reflects what was available when it was last reviewed; check each platform's help centre for current steps.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Secure the email account that recovers everything else first. Turn on passkeys where available, or app-based two-factor authentication instead of SMS, for your email, Instagram, YouTube (Google) and any business tools. Use a password manager with a unique password for every account, give team members access through platform roles instead of your password, save backup codes offline, and treat every login link in a brand email or DM as suspicious. If you're hacked, use the platform's official recovery flow, warn your audience, and report fraud to India's cybercrime portal or the 1930 helpline.",
      },
      { type: "heading", text: "Start with your recovery email", id: "email" },
      {
        type: "paragraph",
        text: "Your social accounts are only as safe as the email that can reset them. Many takeovers start with the email, not the platform. Use a dedicated business email for your accounts, protect it with a passkey or authenticator app, check its recovery phone and backup email are current and yours, and review which apps and devices have access to it.",
      },
      {
        type: "paragraph",
        text: "Keeping separate addresses for brand enquiries and account recovery is covered in creator business email.",
        links: [
          { text: "creator business email", href: "/blog/creator-business-email" },
        ],
      },
      { type: "heading", text: "Passkeys and two-factor authentication", id: "2fa" },
      {
        type: "table",
        headers: ["Method", "How it works", "Strength"],
        rows: [
          ["Passkey", "Sign in with your device's fingerprint, face or PIN; nothing to type or phish", "Strongest for most people"],
          ["Security key", "A physical key you plug in or tap", "Very strong; keep a spare"],
          ["Authenticator app", "Time-based codes on your phone", "Strong; better than SMS"],
          ["SMS or WhatsApp codes", "Code sent to your number", "Better than nothing; exposed to SIM swap and code-sharing scams"],
        ],
      },
      {
        type: "paragraph",
        text: "Meta has been moving Instagram and Facebook settings into a central Meta Account (replacing Accounts Center gradually), where you can manage passwords and two-factor authentication across its apps, and passkeys now work on Instagram as well as Facebook and Messenger. Google accounts, which control YouTube channels, support passkeys and authenticator apps; high-profile creators can also consider Google's Advanced Protection Program.",
        links: [
          { text: "central Meta Account", href: SOURCES.metaAccount },
          { text: "two-factor authentication", href: SOURCES.instagramTwoFactor },
          { text: "Advanced Protection Program", href: SOURCES.googleAdvancedProtection },
        ],
      },
      { type: "heading", text: "Password manager and backup codes", id: "passwords" },
      {
        type: "list",
        items: [
          "Use a reputable password manager and a unique, long password for every account.",
          "Save each platform's backup or recovery codes offline, somewhere safe that isn't your phone.",
          "Never reuse your email password anywhere else.",
          "Change passwords after any team member with access leaves, even if they had their own login.",
        ],
      },
      { type: "heading", text: "Choosing and using a password manager", id: "password-manager" },
      {
        type: "list",
        items: [
          "Choose a reputable password manager that supports passkeys, shared vaults and emergency access.",
          "Protect the password manager itself with a strong master password and two-factor authentication or a passkey.",
          "Move accounts in order of risk: email, Google (YouTube), Meta (Instagram), payment and banking, business tools.",
          "Use shared vaults or item sharing for team tools, so people get what they need without seeing your main passwords.",
          "Set up emergency access for one trusted person as part of your continuity plan.",
          "Review weak, reused and exposed passwords in the manager's security report every quarter.",
        ],
      },
      {
        type: "paragraph",
        text: "Emergency access fits into creator business continuity; backups of your files into creator backup strategy.",
        links: [
          { text: "creator business continuity", href: "/blog/creator-business-continuity" },
          { text: "creator backup strategy", href: "/blog/creator-backup-strategy" },
        ],
      },
      { type: "heading", text: "Give team access without passwords", id: "team-access" },
      {
        type: "paragraph",
        text: "Sharing a password and forwarding two-factor codes to an editor or manager is one of the most common ways creator accounts are lost. Use roles instead:",
      },
      {
        type: "table",
        headers: ["Platform", "How to give access", "Tip"],
        rows: [
          ["YouTube", "Channel permissions in YouTube Studio: Manager, Editor, Editor (limited), Subtitle editor, Viewer, Viewer (limited)", "Editor (limited) and Viewer (limited) hide revenue data; only the Owner can delete the channel"],
          ["Instagram", "Instagram's options for giving people access without your password, or roles through Meta's business tools", "Options and limits vary by account type and plan; check Instagram's help centre"],
          ["Google Drive, email, tools", "Individual seats, shared folders, password-manager sharing", "Avoid a single shared login"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube's roles are described on its channel permissions page, and Instagram's options on its shared access help page. Keep an access register (who has access to what) and remove access the day someone leaves.",
        links: [
          { text: "channel permissions page", href: SOURCES.youtubeChannelPermissions },
          { text: "shared access help page", href: SOURCES.instagramSharedAccess },
        ],
      },
      { type: "heading", text: "Phishing and fake brand offers", id: "phishing" },
      {
        type: "paragraph",
        text: "Creators are targeted with messages that look like brand collaborations, copyright strikes, verification offers or platform warnings. Common signs: urgency, a link to \"log in and view the brief\", a file that asks you to disable security, or a request for your two-factor code.",
      },
      {
        type: "list",
        items: [
          "Never enter your password from a link in an email or DM; open the app or site directly.",
          "Platforms and real brands don't ask for your two-factor codes.",
          "Be wary of downloaded \"brief\" files, especially ones that must be run or unzipped with passwords.",
          "Check platform warnings inside the app's own notifications or account status pages.",
        ],
      },
      {
        type: "paragraph",
        text: "More examples in how to spot fake brand collaboration offers and creator scams.",
        links: [{ text: "how to spot fake brand collaboration offers and creator scams", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      { type: "heading", text: "SIM swap and your phone number", id: "sim" },
      {
        type: "paragraph",
        text: "If your accounts rely on SMS codes, someone who takes over your mobile number can take over your accounts. Move to passkeys or authenticator apps, set a SIM PIN, and act immediately if your phone suddenly loses signal without reason. In India, the government's Sanchar Saathi portal lets you check which mobile connections are registered in your name and report ones you don't recognise.",
        links: [{ text: "Sanchar Saathi portal", href: SOURCES.sancharSaathi }],
      },
      { type: "heading", text: "If you're hacked: first hour", id: "hacked" },
      {
        type: "template",
        label: "Hacked account: first-hour checklist",
        text: "1. Try the platform's official recovery flow from the app or help centre\n   (not links sent to you by 'support' accounts)\n2. Secure your email: change password, sign out other sessions, check forwarding rules\n3. Check whether the recovery email or phone was changed; platforms often send an\n   email that lets you reverse the change\n4. Tell your audience from another platform or your email list: don't click links,\n   don't send money\n5. Inform brands with live campaigns and your manager\n6. Save evidence: screenshots, emails, timestamps\n7. If money or fraud is involved, report at cybercrime.gov.in or call 1930",
      },
      {
        type: "paragraph",
        text: "YouTube has a dedicated help flow for hacked channels, and Meta has been expanding account support and recovery tools on Instagram and Facebook, though features roll out by country. Report fraud through the National Cyber Crime Reporting Portal.",
        links: [
          { text: "help flow for hacked channels", href: SOURCES.youtubeHackedChannel },
          { text: "account support and recovery tools", href: SOURCES.metaAccountSupport },
          { text: "National Cyber Crime Reporting Portal", href: SOURCES.cybercrime },
        ],
      },
      {
        type: "paragraph",
        text: "If someone creates a fake account in your name rather than taking yours, see creator impersonation. For the public side of a hack, see creator crisis management.",
        links: [
          { text: "creator impersonation", href: "/blog/creator-impersonation" },
          { text: "creator crisis management", href: "/blog/creator-crisis-management" },
        ],
      },
      { type: "heading", text: "Quarterly security review", id: "review" },
      {
        type: "list",
        items: [
          "Check recovery email and phone on every account.",
          "Review logged-in devices and sign out ones you don't recognise.",
          "Review connected third-party apps and remove unused ones.",
          "Check team access against your access register.",
          "Confirm backup codes are stored safely and passkeys are on devices you still use.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Securing Instagram but not the email that recovers it.",
          "Relying only on SMS codes.",
          "Sharing passwords and codes with team members.",
          "Logging in through links in brand emails or DMs.",
          "Never reviewing connected apps and devices.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Account security is the cheapest insurance a creator business has. Protect the recovery email, use passkeys or app-based 2FA, keep passwords unique and private, give team access through roles and treat every login link with suspicion. Then review it every quarter.",
      },
    ],
    faqs: [
      {
        question: "How do creators protect their Instagram accounts?",
        answer:
          "Protect the linked email first, turn on a passkey or app-based two-factor authentication, use a unique password, give team members access without sharing your password, and never log in through links in DMs or emails.",
      },
      {
        question: "Is SMS two-factor authentication enough?",
        answer:
          "It's better than nothing but vulnerable to SIM swaps and code-sharing scams. Passkeys, security keys or authenticator apps are stronger.",
      },
      {
        question: "What should I do if my YouTube channel is hacked?",
        answer:
          "Secure your Google account and email, use YouTube's official hacked-channel help flow, warn your audience from another channel, tell brands with live campaigns, and report any fraud at cybercrime.gov.in or on 1930 in India.",
      },
      {
        question: "Should I give my editor my YouTube password?",
        answer:
          "No. Add them through YouTube Studio's channel permissions with the lowest role they need, such as Editor (limited), and remove access when the work ends.",
      },
    ],
  },
  {
    slug: "creator-platform-risk",
    category: "Creator Resources",
    title: "Creator Platform Risk: How to Reduce Dependence on One Social Platform",
    seoTitle: "Creator Platform Risk: Reduce Dependence on One Platform",
    excerpt:
      "What platform risk means for creators, lessons from TikTok's 2020 block in India, the five types of platform risk, how to measure your dependence, choosing a second platform, owned channels, archiving your content and a 90-day diversification plan.",
    metaDescription:
      "Creator platform risk: lessons from TikTok's India block, five risk types, measuring dependence, choosing a second platform and a 90-day plan.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator platform risk", "platform dependence creators", "diversify social platforms", "creator platform diversification", "TikTok ban India creators", "second platform strategy"],
    related: ["creator-audience-ownership", "creator-revenue-diversification", "creator-business-risk-management"],
    body: [
      {
        type: "paragraph",
        text: "Indian creators have lived through the clearest example of platform risk anywhere. When TikTok was blocked in India in 2020, creators with millions of followers lost their main audience overnight. Those who had already built a presence on Instagram, YouTube or their own channels recovered faster; many who hadn't had to start again. TikTok remains blocked in India.",
        links: [{ text: "remains blocked in India", href: SOURCES.tiktokIndiaBlockStatus }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Platform risk is the chance that a change you don't control, such as an algorithm update, policy change, account restriction, monetisation change or a ban, damages your reach or income. Reduce it by measuring how much of your audience and income depends on one platform, building a genuine presence on a second platform that suits your format, moving your most engaged followers to an owned channel such as email or a community, and archiving your content so you could republish it elsewhere.",
      },
      { type: "heading", text: "Five types of platform risk", id: "types" },
      {
        type: "table",
        headers: ["Type", "Example", "Typical impact"],
        rows: [
          ["Algorithm and format shifts", "A platform favours a new format or changes recommendations", "Reach drops for months"],
          ["Policy and guideline changes", "Rules on topics, sponsored content or AI content tighten", "Content removed, reduced distribution"],
          ["Account-level action", "Restriction, strike, suspension or hacking", "Reach or access lost, sometimes suddenly"],
          ["Monetisation changes", "Programme eligibility, payout rules or features change", "Income from that platform falls"],
          ["Platform-level events", "A ban in a country, shutdown or feature removal", "Audience lost entirely in that market"],
        ],
      },
      { type: "heading", text: "Measure your dependence", id: "measure" },
      {
        type: "template",
        label: "Platform dependence check",
        text: "For each platform, estimate:\n- Share of your total audience reach (last 90 days)\n- Share of brand deal income that requires that platform\n- Share of platform payouts (ads, gifts, subscriptions)\n- Share of product or affiliate sales that start there\n\nIf one platform drives more than half of reach or income,\nit's your main platform risk.",
      },
      {
        type: "paragraph",
        text: "Income concentration across clients and streams, not just platforms, is covered in creator revenue diversification.",
        links: [{ text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" }],
      },
      { type: "heading", text: "Choosing a second platform", id: "second-platform" },
      {
        type: "paragraph",
        text: "A second platform should suit your format and audience, not just be popular. It needs original effort; cross-posting identical content everywhere usually underperforms and some platforms reward original content over reposts.",
      },
      {
        type: "table",
        headers: ["If your main platform is…", "A natural second platform", "Why"],
        rows: [
          ["Instagram Reels", "YouTube (Shorts plus long-form)", "Search-driven, longer shelf life, different monetisation"],
          ["YouTube long-form", "Instagram or a newsletter", "Community and direct relationship"],
          ["YouTube Shorts", "Instagram Reels or YouTube long-form", "Similar format; long-form builds depth"],
          ["LinkedIn (B2B creators)", "Newsletter or YouTube", "Owned audience and searchable content"],
          ["Podcast", "YouTube video podcast and clips", "Discovery through video and search"],
        ],
      },
      {
        type: "paragraph",
        text: "Format comparisons: YouTube Shorts vs long-form and TikTok vs Instagram Reels (for creators based where TikTok operates).",
        links: [
          { text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-vs-long-form" },
          { text: "TikTok vs Instagram Reels", href: "/blog/tiktok-vs-instagram-reels" },
        ],
      },
      { type: "heading", text: "Build owned channels", id: "owned" },
      {
        type: "paragraph",
        text: "No social platform is fully yours. An email list, a website and, to a lesser extent, a community space let you reach your most engaged people even if a platform changes. WhatsApp and Instagram channels are useful but still platform-controlled. Creator audience ownership explains the difference and a 90-day starter plan.",
        links: [{ text: "Creator audience ownership", href: "/blog/creator-audience-ownership" }],
      },
      { type: "heading", text: "Archive your content and data", id: "archive" },
      {
        type: "list",
        items: [
          "Keep original, unwatermarked files of your videos and photos in your own storage.",
          "Download platform data exports periodically where offered.",
          "Keep a record of your best-performing content, audience demographics and case studies for brand conversations.",
          "Save brand contacts in your own CRM, not only in platform DMs.",
        ],
      },
      { type: "heading", text: "Stay within the rules", id: "rules" },
      {
        type: "paragraph",
        text: "Many account-level risks are self-inflicted: undisclosed sponsorships, reused content, misleading claims or automation that breaches platform rules. Follow the creator disclosure guide and keep your account in good standing; check each platform's account status page periodically.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "A 90-day diversification plan", id: "plan" },
      {
        type: "table",
        headers: ["Days", "Actions"],
        rows: [
          ["1–30", "Measure dependence; secure accounts; archive originals; choose one second platform and one owned channel"],
          ["31–60", "Publish consistently on the second platform in its native format; add an email sign-up with a useful lead magnet"],
          ["61–90", "Review what's working; move one revenue stream (a product, membership or newsletter sponsor) onto an owned channel"],
        ],
      },
      {
        type: "paragraph",
        text: "Lead magnets that grow an email list are covered in creator lead magnets.",
        links: [{ text: "creator lead magnets", href: "/blog/creator-lead-magnets" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Waiting for a crisis before starting a second platform.",
          "Cross-posting identical content everywhere with no native effort.",
          "Treating a platform channel as an owned audience.",
          "No copies of original content files.",
          "Spreading across five platforms and doing none well.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Platform risk is permanent for creators, but concentration is a choice. Measure your dependence, build one genuine second platform, move your most engaged followers to an owned channel and keep your content archived. The creators who recovered fastest in 2020 had done exactly that before they needed to.",
      },
    ],
    faqs: [
      {
        question: "What is platform risk for creators?",
        answer:
          "The risk that a change you don't control, such as an algorithm update, policy change, account action, monetisation change or ban, damages your reach or income.",
      },
      {
        question: "How many platforms should a creator be on?",
        answer:
          "Usually one main platform, one genuine second platform suited to your format, and one owned channel such as email. More than that often spreads effort too thin.",
      },
      {
        question: "What happened to TikTok creators in India?",
        answer:
          "TikTok was blocked in India in 2020 and remains blocked. Creators who had already built audiences on other platforms or owned channels recovered more quickly.",
      },
    ],
  },
  {
    slug: "creator-business-continuity",
    category: "Creator Resources",
    title: "Creator Business Continuity: How to Keep Your Business Running When You Can't Create",
    seoTitle: "Creator Business Continuity: Plan for Time Away",
    excerpt:
      "How creators keep income and commitments going through illness, burnout, travel, family events or account loss: a content buffer, a continuity document, backup people, brand communication, financial runway, planned breaks and an interactive continuity checklist.",
    metaDescription:
      "Creator business continuity: content buffers, a continuity document, backup people, brand communication, runway and an interactive continuity checklist.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator business continuity", "creator burnout plan", "creator break", "content buffer", "creator time off", "creator business continuity checklist"],
    related: ["creator-business-risk-management", "creator-account-security", "creator-operations-checklist"],
    body: [
      {
        type: "paragraph",
        text: "Most creator businesses have a single point of failure: the creator. A dengue fever in monsoon, a family wedding, a new baby, burnout, or losing access to an account can stop publishing, pause brand deliverables and cut income, all at once. Business continuity is the plan that lets the business keep going, at a lower speed, while you can't.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Build continuity before you need it: keep a buffer of finished evergreen content, write a one-page continuity document (accounts, access, live commitments, who to call), name a backup person for publishing and brand communication, keep a cash runway of several months' costs, and agree with brands how delays will be handled. For planned breaks, pre-schedule content and tell brands early. Review the plan every quarter.",
      },
      { type: "heading", text: "What continuity needs to cover", id: "scenarios" },
      {
        type: "table",
        headers: ["Scenario", "What stops", "Continuity response"],
        rows: [
          ["Short illness (days to two weeks)", "Filming, replies", "Publish from buffer; backup handles inbox; brands notified if dates affected"],
          ["Burnout or longer health issue", "Most creative work", "Longer buffer; reduced schedule; pause new deals; honest audience update if you choose"],
          ["Planned break (travel, wedding, parental leave)", "Filming", "Batch and schedule in advance; brands told early; team runs routine tasks"],
          ["Account lost or hacked", "Publishing on that platform", "Security recovery; audience told via other channels; brand dates renegotiated"],
          ["Key team member leaves", "Editing or admin", "SOPs; backup freelancer; access removed and reassigned"],
        ],
      },
      { type: "heading", text: "1. Keep a content buffer", id: "buffer" },
      {
        type: "paragraph",
        text: "Two to four weeks of finished, evergreen content gives you room to recover without disappearing. Build it gradually: batch one extra piece per week until the buffer is full. Time-sensitive and trend content won't sit in a buffer, so keep some pieces that work any time. See content batching for creators.",
        links: [{ text: "content batching for creators", href: "/blog/content-batching-for-creators" }],
      },
      { type: "heading", text: "2. Write a continuity document", id: "document" },
      {
        type: "template",
        label: "Continuity document (one page, kept somewhere a trusted person can reach)",
        text: "Who to contact: manager, editor, accountant, family point of contact\nLive commitments: current brand deals, deliverables, dates, brand contacts\nPublishing: where the buffer is, schedule, who can publish (via roles, not passwords)\nAccess: which accounts exist and who has role-based access\n        (never write passwords here; point to the password manager's emergency access)\nMoney: invoices outstanding, bills due, who can see the business account\nAudience message: a short template to explain a pause\nDecisions a backup can make, and ones that must wait for you",
      },
      {
        type: "paragraph",
        text: "This document builds on your SOPs; creator business SOPs covers the processes to document.",
        links: [{ text: "creator business SOPs", href: "/blog/creator-business-sops" }],
      },
      { type: "heading", text: "3. Name backup people", id: "backups" },
      {
        type: "list",
        items: [
          "A publishing backup: someone with the right platform role who can schedule from the buffer.",
          "A brand-communication backup: your manager, or a trusted person who can send agreed messages.",
          "A backup editor or freelancer who has done a paid test and knows your style.",
          "Password managers often offer emergency access for a trusted contact; consider setting it up.",
        ],
      },
      { type: "heading", text: "4. Protect commitments to brands", id: "brands" },
      {
        type: "paragraph",
        text: "Brands usually cope well with delays they hear about early and badly with silence. Check that your contracts say what happens if you're unable to deliver (reasonable extensions, rescheduling or cancellation terms). If something happens, tell affected brands quickly, propose new dates, and keep it in writing. Creator cancellation policy covers the terms side.",
        links: [{ text: "Creator cancellation policy", href: "/blog/creator-cancellation-policy" }],
      },
      { type: "heading", text: "5. Keep a financial runway", id: "runway" },
      {
        type: "paragraph",
        text: "A cash buffer of several months' personal and business costs turns a crisis into an inconvenience. Recurring income from memberships, products or retainers also keeps flowing when you pause. Creator financial planning and creator cash flow management cover building the buffer. This is general information, not financial advice.",
        links: [
          { text: "Creator financial planning", href: "/blog/creator-financial-planning" },
          { text: "creator cash flow management", href: "/blog/creator-cash-flow-management" },
        ],
      },
      { type: "heading", text: "Planning a break", id: "planned-break" },
      {
        type: "template",
        label: "Four-week break plan",
        text: "8 weeks before: stop taking deals that land in the break; tell existing brands\n6 weeks before: batch content; brief team on what they'll run\n2 weeks before: schedule posts; set up email and DM auto-replies\n1 week before: hand over continuity document; confirm backups\nDuring: one short check-in a week (or none), agreed in advance\nAfter: return with a light schedule for the first week",
      },
      {
        type: "paragraph",
        text: "Creators often worry that a break will damage reach. Some dip is common, but audiences tend to be more forgiving of an announced, planned pause than of burnout-driven disappearance. Burnout itself deserves professional support; if you're struggling, speak to a doctor or mental health professional.",
      },
      { type: "heading", text: "Continuity checklist", id: "checklist" },
      { type: "tool", tool: "creator-continuity-checklist" },
      {
        type: "paragraph",
        text: "Continuity also depends on your files surviving a lost laptop or failed drive; creator backup strategy covers the 3-2-1 approach.",
        links: [
          { text: "creator backup strategy", href: "/blog/creator-backup-strategy" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No buffer, so any illness means disappearing.",
          "The only person who can publish or reply to brands is you.",
          "Passwords written in a shared document instead of role-based access.",
          "Telling brands about delays after the deadline.",
          "No cash runway, so you work through illness.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Continuity isn't about never stopping. It's about being able to stop without losing the business. A buffer, a one-page document, a backup person, honest brand communication and a cash runway cover most situations. Set them up on a good week, and review them every quarter alongside your creator business risk management.",
        links: [{ text: "creator business risk management", href: "/blog/creator-business-risk-management" }],
      },
    ],
    faqs: [
      {
        question: "What is business continuity for creators?",
        answer:
          "A plan that keeps publishing, brand commitments and income going when the creator can't work, through a content buffer, documented access and commitments, backup people and a cash runway.",
      },
      {
        question: "How big should a creator's content buffer be?",
        answer:
          "Two to four weeks of finished evergreen content is a practical target for many creators, built gradually through batching.",
      },
      {
        question: "What should I tell brands if I fall ill during a campaign?",
        answer:
          "Tell them as early as possible, explain which deliverables are affected, propose new dates, and confirm in writing. Check your contract's terms on delays and cancellations.",
      },
    ],
  },
];

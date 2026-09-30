import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_10_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Creator business infrastructure (800–849 layer). Intent boundaries:
 * - creator-business-email: a professional email setup
 * - creator-file-management: folders, naming, brand assets and digital asset management (absorbs brand assets and DAM)
 * - creator-backup-strategy: protecting content and business data
 * Existing owners: how-to-build-a-creator-website (business website pages), creator-media-kit (incl. keeping it
 * updated), creator-account-security (incl. password management), creator-business-sops (SOP library),
 * creator-operations (business operating system).
 */
export const businessInfrastructurePosts: BlogPost[] = [
  {
    slug: "creator-business-email",
    category: "Creator Resources",
    title: "Creator Business Email: How to Set Up a Professional Creator Email System",
    seoTitle: "Creator Business Email: A Professional Setup",
    excerpt:
      "How creators set up professional email: a custom domain vs a separate free address, which addresses to create, where to publish your business email, filters and labels for brand enquiries, templates, signatures, shared access for managers and assistants, and security.",
    metaDescription:
      "Set up a creator business email: custom domain vs free address, addresses to create, filters for brand enquiries, templates, team access and security.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator business email", "professional email for influencers", "creator email address", "business email for YouTube", "custom domain email creator", "brand enquiry email"],
    related: ["how-to-build-a-creator-website", "manage-brand-collaboration-leads", "creator-account-security"],
    body: [
      {
        type: "paragraph",
        text: "Brands, agencies and finance teams run on email. A creator whose business email is buried among personal newsletters, or who asks brands to \"just DM\", loses enquiries and looks less established. A proper email setup takes an afternoon and pays back every week.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Use an email address used only for business, ideally on your own domain (such as hello@yourname.in), published in your bios, media kit and website. Create a separate address or alias for brand enquiries, set filters to label and prioritise collaboration emails, save reply templates, add a clear signature, and give managers or assistants access through delegation or shared inboxes instead of your password. Protect it with a passkey or authenticator app, because it recovers all your other accounts.",
      },
      { type: "heading", text: "Custom domain or free address?", id: "domain" },
      {
        type: "table",
        headers: ["Option", "Pros", "Cons"],
        rows: [
          ["Custom domain (you@yourname.in)", "Looks established; you control the address if you change providers", "Small yearly domain and email hosting cost; setup"],
          ["Separate free address (yournamecollabs@…)", "Free, quick", "Looks less professional; tied to one provider"],
          ["Personal email", "None for business", "Mixes personal and business; harder to share with a team"],
        ],
      },
      {
        type: "paragraph",
        text: "If you already have a website domain, adding email on it is usually straightforward through your email or domain provider. How to choose a domain is covered in how to build a creator website.",
        links: [{ text: "how to build a creator website", href: "/blog/how-to-build-a-creator-website" }],
      },
      { type: "heading", text: "Which addresses to create", id: "addresses" },
      {
        type: "table",
        headers: ["Address", "Use", "Who reads it"],
        rows: [
          ["collabs@ or partnerships@", "Brand and agency enquiries; published publicly", "You, your manager or assistant"],
          ["you@", "Direct conversations with existing contacts", "You"],
          ["accounts@ or billing@", "Invoices, payment remittances, vendor onboarding", "You and your accountant or assistant"],
          ["Account recovery address", "Platform account recovery only; never published", "You only"],
        ],
      },
      {
        type: "paragraph",
        text: "Aliases or groups can route several addresses into one inbox while keeping them separate for filtering. Keep the recovery address private; it's the key to your accounts.",
      },
      { type: "heading", text: "Where to publish your business email", id: "publish" },
      {
        type: "list",
        items: [
          "Instagram and YouTube profile contact options, where available.",
          "Your media kit and rate card.",
          "Your website's work-with-me page.",
          "Your link-in-bio page.",
          "Email signatures and invoices.",
        ],
      },
      { type: "heading", text: "Filters and labels for brand enquiries", id: "filters" },
      {
        type: "template",
        label: "Suggested labels and filters",
        text: "Label: Brand – New       Filter: to collabs@ OR subject contains (collaboration, partnership, campaign, sponsorship, paid)\nLabel: Brand – Active    Applied manually when a deal is in progress\nLabel: Finance           Filter: to accounts@ OR subject contains (invoice, remittance, payment, PO, vendor)\nLabel: Platform          Filter: from platform notification addresses\nLabel: Check – Suspicious  Applied manually to offers that ask for logins, fees or downloads",
      },
      {
        type: "paragraph",
        text: "Log every new brand enquiry in your CRM so nothing depends on the inbox. How to qualify and route leads is in managing brand collaboration leads.",
        links: [{ text: "managing brand collaboration leads", href: "/blog/manage-brand-collaboration-leads" }],
      },
      { type: "heading", text: "Templates and signature", id: "templates" },
      {
        type: "list",
        items: [
          "Save reply templates for: enquiry acknowledgement with media kit, asking for a brief and budget, polite decline, invoice cover note, payment reminder.",
          "Signature: name, what you create, main platforms with audience size, website or media kit link, and phone number only if you want calls.",
          "Keep templates short and personalise the first line of every reply.",
        ],
      },
      {
        type: "paragraph",
        text: "Ready-made wording is in brand collaboration email templates.",
        links: [{ text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" }],
      },
      { type: "heading", text: "Giving managers and assistants access", id: "access" },
      {
        type: "paragraph",
        text: "Use your provider's delegation or shared mailbox features, or give your manager their own address on your domain for brand conversations, instead of sharing your password and verification codes. Decide who replies from which address so brands hear one consistent voice, and remove access when someone leaves.",
      },
      { type: "heading", text: "Security", id: "security" },
      {
        type: "list",
        items: [
          "Protect business and recovery addresses with a passkey or authenticator app.",
          "Never open login links or downloaded \"briefs\" from unverified brand emails.",
          "Check forwarding rules and connected apps regularly; attackers add hidden forwarding rules.",
          "Keep your domain registration and email hosting renewed, with auto-renew and a current payment method.",
        ],
      },
      {
        type: "paragraph",
        text: "More on protecting accounts in creator account security, and spotting fake offers in how to spot creator scams.",
        links: [
          { text: "creator account security", href: "/blog/creator-account-security" },
          { text: "how to spot creator scams", href: "/blog/creator-scams-fake-brand-collaborations" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Using a personal inbox for brand deals.",
          "Publishing the address that recovers your accounts.",
          "Letting a domain or email subscription lapse.",
          "Sharing your email password with a manager.",
          "No filters, so enquiries sink under notifications.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A professional email system is a business-only address on your own domain, separate addresses for enquiries and finance, filters, templates, shared access without passwords and strong security. It's one of the cheapest ways to look and operate like a professional creator business.",
      },
    ],
    faqs: [
      {
        question: "Do creators need a business email?",
        answer:
          "Yes, once brands start reaching out. A business-only address, ideally on your own domain, makes you easier to contact, keeps enquiries organised and is easier to share with a manager or assistant.",
      },
      {
        question: "Should my business email be on my own domain?",
        answer:
          "It's the most professional option and keeps the address yours if you change providers. A separate free address works when you're starting out.",
      },
      {
        question: "Should I use the same email for brand deals and account recovery?",
        answer:
          "No. Keep a private recovery address that's never published, protected with a passkey or authenticator app.",
      },
    ],
  },
  {
    slug: "creator-file-management",
    category: "Creator Resources",
    title: "Creator File Management: How to Organise Content, Contracts and Brand Assets",
    seoTitle: "Creator File Management: Organise Content and Assets",
    excerpt:
      "A practical file and digital asset management system for creators: a folder structure for content, brand deals, finance and operations, naming conventions, a brand asset kit (bios, headshots, logos), storage for large video files, sharing with editors and brands, and a monthly tidy-up.",
    metaDescription:
      "Creator file management: a folder structure, naming conventions, a brand asset kit with bios and headshots, video storage, sharing and a monthly tidy-up.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator file management", "creator brand assets", "creator digital asset management", "folder structure for creators", "organise video files", "creator press kit"],
    related: ["creator-backup-strategy", "creator-campaign-documentation", "creator-media-kit"],
    body: [
      {
        type: "paragraph",
        text: "Every creator eventually hits the moment: a brand asks for the signed contract from last year, the approved caption, and a high-resolution headshot, and all three are somewhere across a phone, two laptops, a drive and a WhatsApp chat. File management is the boring system that turns that search into a two-minute task.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Keep business files in one main cloud workspace with a fixed folder structure: content, brand deals, brand assets, finance, legal, analytics and operations. Name files with a date, a project name and a version. Keep a ready-to-send brand asset kit (bios, headshots, logos, media kit). Store raw video on drives or large cloud storage with the same structure, share folders with editors and brands through links with limited access, and spend 20 minutes a month tidying and archiving.",
      },
      { type: "heading", text: "A folder structure you can copy", id: "structure" },
      {
        type: "template",
        label: "Creator business folder structure (adapt it)",
        text: "Creator Business\n├── 01 Content\n│   ├── Ideas and research\n│   ├── Scripts\n│   ├── [Year]\n│   │   └── [YYYY-MM-DD] [Video title]\n│   │       ├── Raw (or link to drive location)\n│   │       ├── Edit (project files, drafts)\n│   │       ├── Final\n│   │       └── Thumbnail\n├── 02 Brand Deals\n│   └── [Year]\n│       └── [Brand] – [Campaign]\n│           ├── Brief and proposal\n│           ├── Contract and approvals\n│           ├── Drafts and finals\n│           └── Report and live links\n├── 03 Brand Assets\n├── 04 Finance\n│   └── [Year] > [Month] (invoices, receipts, TDS certificates)\n├── 05 Legal (agreements, trademark filings, licences)\n├── 06 Analytics (monthly exports, reports)\n└── 07 Operations (SOPs, templates, access register)",
      },
      {
        type: "paragraph",
        text: "Numbering the top-level folders keeps them in a fixed order. Campaign folders follow the structure in creator campaign documentation, and finance folders the one in creator tax records for India.",
        links: [
          { text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" },
          { text: "creator tax records for India", href: "/blog/creator-tax-records-india" },
        ],
      },
      { type: "heading", text: "Naming conventions", id: "naming" },
      {
        type: "table",
        headers: ["File", "Example name"],
        rows: [
          ["Video project", "2026-10-14_SIP-basics_edit_v2"],
          ["Brand draft", "2026-10-14_BrandX-Diwali_reel1_draft_v1"],
          ["Approved final", "2026-10-17_BrandX-Diwali_reel1_FINAL-approved"],
          ["Contract", "2026-09-30_BrandX_agreement_signed"],
          ["Invoice", "INV-2026-041_BrandX"],
          ["Thumbnail", "2026-10-14_SIP-basics_thumb_A"],
        ],
      },
      {
        type: "paragraph",
        text: "Dates written year-month-day sort correctly. Version numbers stop \"final-final-2\" confusion. Agree the convention with editors and designers so their files follow it too.",
      },
      { type: "heading", text: "Your brand asset kit", id: "brand-assets" },
      {
        type: "paragraph",
        text: "Brands, event organisers, podcast hosts and press regularly ask for the same things. Keep them ready in one folder with a shareable link:",
      },
      {
        type: "table",
        headers: ["Asset", "What to include"],
        rows: [
          ["Bios", "One-line, short (50 words) and long (150 words) versions; in each language you work in"],
          ["Headshots and lifestyle photos", "Several high-resolution photos, portrait and landscape, recent, with photographer credit and usage terms"],
          ["Logo and visual identity", "Logo files (transparent background), colours, fonts, if you have them"],
          ["Media kit and rate card", "Current PDF or link"],
          ["Audience snapshot", "Latest platform demographics screenshots, dated"],
          ["Case studies", "Two or three past campaigns with results"],
          ["Pronunciation and handles", "How to say and spell your name; every platform handle"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep the media kit current with the update routine in creator media kit.",
        links: [{ text: "creator media kit", href: "/blog/creator-media-kit" }],
      },
      { type: "heading", text: "Storing large video files", id: "video-storage" },
      {
        type: "paragraph",
        text: "Raw footage fills cloud storage fast. Many video creators keep active projects on a fast local or external drive, move finished projects to larger archive drives or cloud storage, and keep only finals and project files in the main workspace. Whatever you choose, mirror the same folder names across drives and cloud so anyone can find a project. Backups are a separate job, covered in creator backup strategy.",
        links: [{ text: "creator backup strategy", href: "/blog/creator-backup-strategy" }],
      },
      { type: "heading", text: "Sharing with editors, designers and brands", id: "sharing" },
      {
        type: "list",
        items: [
          "Share specific folders, not your whole drive.",
          "Give editors edit access to their project folders only; view access elsewhere.",
          "Share drafts with brands as view-only links, with download turned off where your tool allows.",
          "Remove access when a project or engagement ends.",
          "Keep a record of what's shared with whom in your access register.",
        ],
      },
      { type: "heading", text: "Digital asset management for larger teams", id: "dam" },
      {
        type: "paragraph",
        text: "Once a team produces a lot of content, finding reusable clips, b-roll, product shots and approved assets becomes its own problem. Digital asset management (DAM) means tagging assets so they can be searched by topic, brand, person, location, rights status and date. Many creators do this with consistent folder names and a simple spreadsheet index; dedicated DAM tools make sense for studios with high volumes and many contributors. Always record usage rights: which brand content can be reused, and for how long.",
      },
      {
        type: "paragraph",
        text: "What rights you keep in sponsored content is covered in creator usage rights.",
        links: [{ text: "creator usage rights", href: "/blog/creator-usage-rights" }],
      },
      { type: "heading", text: "A monthly tidy-up (20 minutes)", id: "tidy" },
      {
        type: "list",
        items: [
          "Move last month's finished projects to the archive.",
          "File invoices, receipts and contracts into their folders.",
          "Update the brand asset kit if photos, numbers or bios have changed.",
          "Delete duplicates and exports you'll never use.",
          "Check shared links and remove old access.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Files spread across personal phones, chats and several drives.",
          "No naming convention, so versions get mixed up.",
          "Sending outdated bios and photos to brands.",
          "Sharing whole drives with freelancers.",
          "Confusing file organisation with backups.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good file management is a fixed structure, consistent names, a ready brand asset kit, careful sharing and a monthly tidy-up. It saves time every week and makes your business easier for a team, a brand or an accountant to work with.",
      },
    ],
    faqs: [
      {
        question: "How should creators organise their files?",
        answer:
          "Use one main workspace with fixed top-level folders for content, brand deals, brand assets, finance, legal, analytics and operations, and name files with a date, project and version.",
      },
      {
        question: "What brand assets should a creator have ready?",
        answer:
          "Short and long bios, recent high-resolution photos, logo files if you have them, a current media kit and rate card, an audience snapshot, case studies and a list of handles.",
      },
      {
        question: "What is digital asset management for creators?",
        answer:
          "Organising and tagging content assets (clips, b-roll, photos, approved brand assets) so they can be found and reused, including a record of usage rights for each.",
      },
    ],
  },
  {
    slug: "creator-backup-strategy",
    category: "Creator Resources",
    title: "Creator Backup Strategy: How to Protect Your Content and Business Data",
    seoTitle: "Creator Backup Strategy: Protect Content and Data",
    excerpt:
      "A practical backup plan for creators: what to back up, the 3-2-1 approach, cloud vs external drives for large video files, backing up phones, platform data exports, protecting contracts and finance records, testing restores and a monthly backup routine.",
    metaDescription:
      "Creator backup strategy: what to back up, the 3-2-1 rule, cloud vs drives for video, phone backups, platform exports, testing restores and a routine.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator backup strategy", "back up YouTube videos", "3-2-1 backup creators", "backup raw footage", "creator data backup", "protect content creator files"],
    related: ["creator-file-management", "creator-account-security", "creator-business-continuity"],
    body: [
      {
        type: "paragraph",
        text: "Drives fail, phones get stolen, laptops get coffee spilled on them and accounts get locked. For a creator, losing years of original footage or the only copy of a signed contract isn't a tech inconvenience; it's a business loss. A backup strategy makes sure one failure never becomes a disaster.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Follow the 3-2-1 approach: keep three copies of important data, on two different types of storage, with one copy in a different place (usually the cloud). Prioritise final videos and project files, raw footage you may reuse, contracts, finance records and brand assets. Back up your phone automatically, export platform data periodically, test that you can actually restore files, and run a short monthly backup check.",
      },
      { type: "heading", text: "What to back up, by priority", id: "priority" },
      {
        type: "table",
        headers: ["Priority", "Data", "Why"],
        rows: [
          ["Highest", "Contracts, invoices, TDS certificates, tax records", "Legal and tax evidence; hard or impossible to recreate"],
          ["Highest", "Final published videos and photos (original quality)", "Your catalogue; needed for licensing, reuploads and re-publishing"],
          ["High", "Project files and thumbnails", "Needed for edits, cut-downs and licensing"],
          ["High", "Brand assets, media kit, case studies", "Used constantly"],
          ["Medium", "Raw footage", "Valuable for reuse, but large; keep selectively"],
          ["Medium", "Analytics exports and audience data", "History for brand pitches and planning"],
          ["Lower", "Drafts and duplicates", "Usually safe to delete after a project closes"],
        ],
      },
      { type: "heading", text: "The 3-2-1 approach for creators", id: "three-two-one" },
      {
        type: "table",
        headers: ["Copy", "Example"],
        rows: [
          ["1. Working copy", "Your laptop or editing drive"],
          ["2. Second local copy on different storage", "An external archive drive"],
          ["3. Off-site copy", "Cloud storage, or a drive kept somewhere else"],
        ],
      },
      {
        type: "paragraph",
        text: "Documents and finals are small enough to keep in cloud storage with automatic sync. Raw footage often isn't; many creators keep it on two external drives, stored in different places, plus cloud copies of finals and project files.",
      },
      { type: "heading", text: "Cloud vs external drives", id: "cloud-drives" },
      {
        type: "table",
        headers: ["", "Cloud storage", "External drives"],
        rows: [
          ["Protects against", "Theft, fire, device loss", "Internet outages, account problems"],
          ["Cost", "Ongoing subscription; rises with storage", "One-off purchase; replace every few years"],
          ["Best for", "Documents, finals, project files", "Raw footage and large archives"],
          ["Risks", "Account lockout, subscription lapse", "Drive failure, loss, theft"],
        ],
      },
      {
        type: "paragraph",
        text: "Sync services mirror deletions: if you delete a file by mistake, it may disappear everywhere. Check your service's version history and deleted-file retention, and keep at least one copy that isn't a live sync.",
      },
      { type: "heading", text: "Phones and platforms", id: "phones-platforms" },
      {
        type: "list",
        items: [
          "Turn on automatic photo and video backup on your phone, and check it's actually running.",
          "Move important phone footage into your project folders promptly.",
          "Download platform data exports periodically where available, and keep originals of everything you post; platforms compress uploads.",
          "Keep brand conversations and approvals in email or saved files, not only in DMs.",
        ],
      },
      {
        type: "paragraph",
        text: "Why platform copies aren't enough is covered in creator platform risk.",
        links: [{ text: "creator platform risk", href: "/blog/creator-platform-risk" }],
      },
      { type: "heading", text: "Protect the backups themselves", id: "protect" },
      {
        type: "list",
        items: [
          "Secure cloud storage accounts with a passkey or authenticator app.",
          "Keep subscriptions on auto-renew with a valid payment method.",
          "Label drives clearly and note what's on each in a simple index.",
          "Store one drive away from your home or studio.",
          "Replace ageing drives before they fail.",
        ],
      },
      {
        type: "paragraph",
        text: "Account protection details are in creator account security.",
        links: [{ text: "creator account security", href: "/blog/creator-account-security" }],
      },
      { type: "heading", text: "Test your restores", id: "test" },
      {
        type: "paragraph",
        text: "A backup you've never restored from is a hope, not a plan. Once a quarter, pick a random old project and a contract, restore them from backup to a different folder, and check they open. It takes ten minutes and reveals broken backups before you need them.",
      },
      { type: "heading", text: "A monthly backup routine", id: "routine" },
      {
        type: "template",
        label: "Monthly backup check (15 minutes)",
        text: "1. Confirm cloud sync and phone backup ran this month\n2. Copy finished projects to the archive drive and the off-site copy\n3. Confirm finance and legal folders are in cloud storage\n4. Update the drive index\n5. Quarterly: test-restore one project and one document",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating a sync folder as a backup.",
          "Keeping every copy in the same room.",
          "Relying on platforms as your archive.",
          "Never testing a restore.",
          "Letting a cloud subscription lapse.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator backup strategy is three copies, two kinds of storage and one off-site, focused on the files that matter most, with a monthly check and a quarterly test restore. Together with good file management and a continuity plan, it means one broken drive or lost phone never stops your business. See creator business continuity for the wider plan.",
        links: [{ text: "creator business continuity", href: "/blog/creator-business-continuity" }],
      },
    ],
    faqs: [
      {
        question: "How should creators back up their videos?",
        answer:
          "Keep three copies on at least two kinds of storage, with one off-site: for example, a working drive, an archive drive and cloud copies of finals and project files.",
      },
      {
        question: "Is Google Drive or iCloud sync a backup?",
        answer:
          "Not on its own. Sync services can mirror deletions and problems across devices. Use version history and keep at least one separate copy.",
      },
      {
        question: "Should creators keep raw footage?",
        answer:
          "Keep raw footage you're likely to reuse or license, backed up on drives; delete drafts and unusable takes after a project closes to control storage costs.",
      },
    ],
  },
];

# 03 — Competitor Research (Location SEO, Wave 1)

Researched 12–13 November 2026.

## Method
- **Finding candidates:** directories and listicles (Clutch, DesignRush, Semrush Agencies, self-published "top 10" lists) were used only to find names.
- **Verifying candidates:** every fact on the pages comes from the agency's **own website**: its services page plus its contact or about page. Each agency was recorded as an `AgencyRecord` in the page file, with the source URLs and the date checked.
- **What was excluded:**
  - agencies whose site didn't load, had no social media service, or had no published presence in the city;
  - parked, for-sale or hijacked domains (one now hosts betting content; one homepage carried spam links);
  - templated "city landing page" networks.
- **Claims not repeated:** no client counts, awards, years, prices, ratings or results.
- **Order and distinctness:** agencies after Kudozz are listed in no particular order. Every agency appears on **one page only**. Two clashes between the India page and city pages (Grapes Worldwide/Delhi NCR, PromotEdge/Kolkata) were fixed by replacing them on the India page with Gozoop and Hashtag Orange, which the lead verified on 13 November 2026.
- **Links:** under the site's outbound-link policy, competitor domains render as plain text. The URLs stay in the data and in `mentions` schema; the schema helper drops non-allowlisted URLs.

## Agencies by page

| Page | Kudozz + 4 agencies (no particular order after Kudozz) |
|---|---|
| India | Kudozz · Gozoop (Mumbai HQ) · Hashtag Orange (Gurugram, Mumbai, Bengaluru) · Webenza (Bengaluru HQ) · Social Beat (Bengaluru, Chennai, Delhi NCR, Mumbai) |
| Mumbai | Kudozz · White Rivers Media · BC Web Wise · Togglehead · The Minimalist |
| Pune | Kudozz · I Knowledge Factory (IKF) · Clicks and Co Media · Addinfi · Evonix |
| Delhi NCR | Kudozz · Grapes Worldwide · Sociowash · Digital Markitors · AdGlobal360 |
| Ahmedabad | Kudozz · Flora Fountain · Bonoboz · Brainwaves · Rioconn |
| Kolkata | Kudozz · PromotEdge · Kreative Machinez · Nico Digital · Monkey Wrench Communications |
| Bengaluru | Kudozz · Wisoft Solutions · Inboundsys · First Launch · Bigtrunk Communications |
| Hyderabad | Kudozz · ShootOrder · 3DM · SpaceKey Digital · Marks and Methods |
| Chennai | Kudozz · Orange Digital Marketing · Bud · echoVME Digital · The Pixelate |

**Total:** 36 competitors verified and published (4 per page × 9). More than 50 candidates were rejected, with reasons in the logs below.

## Weaker records, disclosed on the page in each agency's "Note"
- **Rioconn (Ahmedabad):** the contact page lists only "Ahmedabad" with a phone number and no street address. This is the weakest presence evidence of the set.
- **Clicks and Co Media (Pune):** "based in Kharadi, Pune", no street address.
- **Sociowash (Delhi), Monkey Wrench (Kolkata), Brainwaves (Ahmedabad), Togglehead (Mumbai):** social media is listed but has no dedicated service page, or deliverables aren't itemised.
- **Social Beat (India):** offices are listed without street addresses.

**Recommendation:** re-verify all 36 records before publishing and every six months. Agency sites change, and two candidate domains had already lapsed.

---

# Writer research logs (verbatim)

## File: src/content/location-guides/smm-locations-west.ts

### Research log: smm-locations-west.ts (India, Mumbai, Pune)
All checks: 12 Nov 2026, via WebFetch of the agency's own pages. Directories/listicles (Clutch, Qoruz, DesignRush, Wildnet/brewmyidea listicles, MarketingMonk) used only to find candidates.

## India page (best-social-media-marketing-agencies-in-india)
### Local-context sources
| URL | Publisher | Date | Claim |
|---|---|---|---|
| https://eoimanila.gov.in/news-details/government-of-india-bans-59-mobile-apps-which-are-prejudicial-to-sovereignty-and-integrity-of-india-defence-of-india-security-of-state-and-public-order (mirror of PIB PRID=1635206; pib.gov.in returned 403) | Embassy of India, Manila (reproducing PIB release, Ministry of IT) | 29 Jun 2020 | TikTok blocked with 58 other apps (59 total) under Section 69A of the IT Act |
| (festival list: Diwali, Pongal, Onam, Ugadi, Durga Puja, Ganeshotsav, Navratri, Baisakhi, Lohri) | general knowledge, no figures | n/a | Regional festive calendar, stated without dates or stats |

### Competitors
- **Grapes Worldwide** (grapesworldwide.com). Pages: /, /services/creative/social-media. Presence: "1st Floor, Alameda Chowk, SPR, Sector 75A, Gurugram, Haryana 122101" (India listed first; also London, Dubai, West Chester PA, Australia remote). Services: Social Media (strategy, calendars + approval workflows, Reels/static production, community management, creator collaborations, paid social, listening, reporting), UGC & influencer, media, tech, SEO. Note: counters appeared as placeholders.
- **Webenza** (webenza.com). Pages: /, /expertise/social-media-influencer-marketing/social-media-marketing/. Presence: "Bengaluru (HQ): No. 401-402, 3rd floor, Oxford House, No. 15, Rustam Bagh Main Road, Kodihalli, Bengaluru 560017"; Mumbai: WeWork NESCO IT Park, Goregaon; Delhi: Barakhamba Tower, Connaught Place; Houston USA. Services: SMM (strategy & planning, content creation, thought leadership, analytics & reporting), influencer marketing, social listening & ORM, SEO/performance, creative, UX.
- **Social Beat** (socialbeat.in). Pages: /, /social-media-marketing/. Presence: city links for Bengaluru, Chennai, Delhi NCR, Mumbai; no street addresses, no HQ named. Services: Social Media Marketing (listening, planning, execution, optimisation; community building; paid promotions on FB/IG/LinkedIn), Multi Lingual Marketing, video, influencer, media planning, content & SEO, etc. Flag to lead: may also be used on Bengaluru/Chennai/Delhi pages.
- **PromotEdge** (promotedge.com). Pages: /. Presence: "PromotEdge Global Services Private Limited, Suite 508, 5th Floor, Ambuja Neotia Eco Centre, Block EM, Plot 4, Sector V, Salt Lake City, Kolkata 700091" (HQ); team members in Mumbai, Delhi, Bangalore, Guwahati, Bhubaneswar (no addresses). Services: social media marketing (Instagram, LinkedIn in nav), SEO, influencer, content, performance/Meta ads, websites, branding, video, product photography, PR, events, exhibition stalls. "Social media management" not separately named (testimonial mentions it). Flag to lead: may also be a Kolkata-page candidate.

### Rejected (India)
- Pulp Strategy: homepage lists no social media marketing service and no addresses.
- allindia technologies: site did not resolve (DNS).
- Schbang, Ethinos: no social media service listed on own site (see Mumbai/Pune).

## Mumbai page (best-social-media-marketing-agencies-in-mumbai)
### Local-context sources
| URL | Publisher | Date | Claim |
|---|---|---|---|
| https://www.sebi.gov.in/contact-us.html | SEBI | undated | Head office SEBI Bhavan BKC, Bandra-Kurla Complex, Mumbai |
| https://indiacinehub.gov.in/production-directory/film-cities/film-city-mumbai | India Cine Hub (Govt of India) | undated | Dadasaheb Phalke Chitranagari, Goregaon East, run by Maharashtra Film, Stage & Cultural Development Corporation (state govt) |
| https://www.investindia.gov.in/state/maharashtra | Invest India | undated | IT parks concentrated in Pune, Mumbai City & Suburban and Thane; focus sectors include automobile, auto components, IT-BPM |
| https://www.newsonair.gov.in/maharashtra-declares-sarvajanik-ganeshotsav-as-state-festival | All India Radio News | 11 Jul 2025 | Maharashtra declared Sarvajanik Ganeshotsav a state festival |
| Marathi as official language of Maharashtra; Gudi Padwa as Marathi new year; monsoon disruption | general knowledge, no figures | n/a | stated qualitatively |

### Competitors
- **White Rivers Media** (whiteriversmedia.com). Pages: /. Presence: "WRM HQ: Sahney Compound, Vidyavihar West, Mumbai"; "WRM Delta: Mosaic CoWorking Space, 5th Floor, Raaj Chambers, New Nagardas Road, Andheri East, Mumbai 400069"; "WRM Gurugram: Blue One Square, Udyog Vihar". Services: Social Media Marketing, Video Production, Influencer Marketing, Media Buying. /our-services redirected to http; not fetched; SMM described in one line.
- **BC Web Wise** (bcwebwise.com). Pages: /, /social-media-marketing. Presence: "Unit No. 133, Marol Cooperative Industrial Estate, Sag Baug Rd, off Andheri-Kurla Road, Marol, Andheri East, Mumbai 400059"; footer mentions Mumbai and Delhi. Services: SMM page covers strategy, content, community management, advertising, analytics/reporting; also media planning, search, ORM, video, web/app, influencer management.
- **Togglehead** (togglehead.in). Pages: /. Presence: "1103, Marathon Icon Opp. Peninsula Corporate Park, Off, Lower Parel West, Mumbai 400013". Services: Digital (Branding, Strategy, Social Media, Campaign Management), Studios (TVC/DVC, short-form video, production, post), Labs, Paid Media, Creators Network, Sports. SMM listed without detail (noted on page).
- **The Minimalist** (theminimalist.in). Pages: /, /services/, /lets-collaborate/. Presence: "3rd Floor, Global One, 252, Lal Bahadur Shastri Marg, Kurla West, Mumbai 400070"; "3rd Floor, ThinkValley, Plot no. 8, Community Center, Anupam Market, Saket, New Delhi 110017". Services: Brand Communication (content creation, social media management, influencer collaborations, ORM), brand strategy & design, video, UX, growth marketing, creative tech.

### Rejected (Mumbai)
- Schbang: homepage lists brand/tech/media/research/film solutions, no social media service; no address on homepage.
- SoCheers: domain redirects to HugeDomains (for sale).
- Social Panga: TLS certificate mismatch, site did not load.
- Kinnect (socialkinnect.com → wearekinnect.com): connection refused.
- Chimp&z: DNS failure.
- Fruitbowl Digital: social media listed but no office address on site.
- Gozoop: homepage lists no services (only links); not pursued further for economy.
- Ethinos: Mumbai and Pune offices, but services page does not list social media.
- Webenza (has Mumbai office) kept for the India page instead to avoid reuse.

## Pune page (best-social-media-marketing-agencies-in-pune)
### Local-context sources
| URL | Publisher | Date | Claim |
|---|---|---|---|
| https://www.freepressjournal.in/pune/infosys-persistent-wipro-cognizant-to-tcs-top-it-companies-across-all-3-phases-of-hinjawadis-rajiv-gandhi-infotech-park-in-pune | Free Press Journal | 13 Jun 2025 | Rajiv Gandhi Infotech Park, Hinjawadi, three phases; firms incl. Infosys, Wipro, TCS, Persistent, Cognizant (size/company counts deliberately not used) |
| https://www.autocarpro.in/news-national/chakan-auto-belt-stops-humming-as-oems-suspend-operations-55956 | Autocar Professional | 24 Mar 2020 | Chakan auto belt plants: Mahindra & Mahindra, Force Motors, Mercedes-Benz India, Volkswagen India; Bajaj Auto |
| https://www.investindia.gov.in/state/maharashtra | Invest India | undated | Focus sectors: automobile, auto components, IT-BPM |
| https://www.newsonair.gov.in/maharashtra-declares-sarvajanik-ganeshotsav-as-state-festival | All India Radio News | 11 Jul 2025 | Ganeshotsav state festival |
| https://www.freepressjournal.in/pune/stage-set-for-71st-sawai-gandharva-bhimsen-mahotsav-in-pune-five-day-festival-begins-dec-10 | Free Press Journal | 8 Dec 2025 | 71st Sawai Gandharva Bhimsen Mahotsav, 10-14 Dec 2025, organised by Arya Sangeet Prasarak Mandal |

### Competitors
- **I Knowledge Factory (IKF)** (ikf.co.in). Pages: /, /social-media-marketing-services/. Presence: "6th Floor, International Business Bay (IBB), Opp Kumar Pacific Mall, Shankar Sheth Rd, Guru Nanak Nagar, Pune 411042"; Mumbai office "Sector 10, Kharghar, Navi Mumbai 410210". Services: SMM (strategy, content, paid social, analytics/reporting; FB, IG, LinkedIn, X, YouTube), web dev, SEO, performance, video, photoshoots, AI solutions; industry pages incl. manufacturing, automotive, education, real estate. Self-reported counts not used.
- **Clicks and Co Media** (clicksandco.in). Pages: /, /social-media-marketing-pune/. Presence: "based in Kharadi, Pune" / "Based in Kharadi and working across India" (no street address on site; directory address not used). Services: monthly content plan, Reels incl. face-to-camera, on-location shoots, post/story design, captions, moderation, influencer collaborations, monthly report; Meta ads add-on; web, branding, SEO, print.
- **Addinfi** (addinfi.com). Pages: /, /contact-us/, /social-media-marketing-services/. Presence: "501, Orion, Behind Audi Showroom, Baner, Pune"; footer "A3, Regency Orion, Pune Bangalore Highway, Baner, Pune"; Nagpur: Plexwork, NB Tower, Manish Nagar. Services: SMM (strategy, Reels/carousels, calendar, community engagement, paid social, monthly reporting). Lead/case-study numbers not used. Note: also profiled in the influencer cluster's Maharashtra page (different service).
- **Evonix** (evonix.co). Pages: /contact-us, /social-media-marketing-company-pune. Presence: "Akruti Avenues, 402-403, Datta Mandir Rd, Shankar Kalat Nagar, Wakad, Pune 411057"; UAE office in Dubai. Services: SMM (strategy, posts, carousels, short-form video, stories, calendars, account admin, engagement, influencer collaborations), SMM package, media planning, email/WhatsApp. Note: also in influencer cluster (different service).

### Rejected (Pune)
- Ethinos: Pune office (Koregaon Park Annexe) but no social media service listed.
- Ad2Brand Media: SMM and Pune offices verified, but homepage carried many unrelated casino/betting/escort links; dropped on quality grounds.
- Golden Papaya: domain redirects to HugeDomains.
- The Scribblers Media: DNS failure.
- Seagull Advertising: social only as part of a "Wings for Reach" offer; no address on homepage.
- Thinkster: Pune SMM page returned 404.
- DigiChefs: Koregaon Park mentioned in a listicle only; also a Mumbai agency in the influencer cluster; not verified.

## Hero SVGs
public/blog/locations/best-social-media-marketing-agencies-in-{india,mumbai,pune}.svg, generated by scratchpad/svgW1/make.py (asserts ≤22 chars per line, arrow gaps 60px), rendered with headless Chrome at 1600x700 to scratchpad/svgW1/*.png and checked visually.

## India page: agency swap (lead-verified 13 Nov 2026)
Grapes Worldwide (also on the Delhi NCR page) and PromotEdge (also on the Kolkata page) were replaced on the India page so no agency appears on two pages.
- **Gozoop** (gozoop.com): /services lists "Social Media Management" (verified 13 Nov 2026). /contact-us: "Mumbai (HQ): 6A Skyline Icon, Marol, Andheri (E)"; Bengaluru, Delhi, Dubai and Oman are listed without street addresses. Supersedes the earlier note in this log ("homepage lists no services; not pursued"), which was based on the homepage only.
- **Hashtag Orange** (hashtagorange.in): /social-media lists "Social media optimisation", "Social media marketing", "LinkedIn marketing", "Twitter marketing" and "Facebook marketing". /contact-us gives:
  - Gurugram: 3rd Floor, Unitech Trade Centre, Sushant Lok Phase-I, Sector 43
  - Mumbai: WeWork K. Raheja Platinum, Marol, Andheri East
  - Bengaluru: WeWork Galaxy, Residency Road

  Verified 13 Nov 2026.

## File: src/content/location-guides/smm-locations-north-east.ts

### Research log: smm-locations-north-east (Location Writer 2)

File: src/content/location-guides/smm-locations-north-east.ts (export `smmLocationNorthEastPosts`)
Heroes: public/blog/locations/best-social-media-marketing-agencies-in-{delhi,ahmedabad,kolkata}.svg (generator: scratchpad/svgNE/gen.py, renders: scratchpad/svgNE/prev/*.png)
All pages fetched 2026-11-12 with WebFetch. Directories (Clutch, DesignRush, Semrush, GoodFirms) and listicles (Wildnet, Flora Fountain's own listicle, 7knetwork, Qoruz) used only to find names.

---

## Page 1: best-social-media-marketing-agencies-in-delhi (Delhi NCR)

### Local-context sources
| URL | Publisher | Date | Claim used |
|---|---|---|---|
| https://www.investindia.gov.in/state/delhi | Invest India (GoI) | footer "Last Updated on 19/06/2026" | Delhi focus sectors: education, healthcare, tourism and hospitality, IT-BPM |
| https://www.investindia.gov.in/state/haryana | Invest India | 19/06/2026 | "Gurugram is known as the world's BPM capital"; Haryana "the country's largest automobile hub" |
| https://www.investindia.gov.in/state/uttar-pradesh | Invest India | 19/06/2026 | "With Noida and Greater Noida leading the IT and ITeS industry in the state" |
| https://caqm.nic.in/ | Commission for Air Quality Management | homepage lists dated GRAP orders (e.g. 19.10.2025 Stage-II order); accessed Nov 2026 | CAQM issues Graded Response Action Plan orders for Delhi-NCR when air quality worsens (no AQI numbers used) |

Not sourced, written as practice/culture without figures: Hindi/English/Hinglish mix, Diwali, wedding season in cooler months, admissions cycles.

### Competitors
1. **Grapes Worldwide**: https://www.grapesworldwide.com/
   - Pages: /, /services/creative/social-media, /contact-us
   - Presence: contact page "1st Floor, Alameda Chowk, SPR, Sector 75A, Gurugram, Haryana 122101"; also London, Dubai, West Chester PA; Australia "Full Remote"
   - Services: social media page lists social strategy, content calendars/approval workflows, platform-native production, community management, creator collaborations, paid social creative, social listening, growth reporting, optional agentic layer with named social lead approving
2. **Sociowash (SW Network)**: https://www.sociowash.com/
   - Pages: /, /about, https://contact.sociowash.com/
   - Presence: "E-40/7, Second Floor, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020"; plus Andheri East Mumbai and Indiranagar Bengaluru
   - Services: contact page enquiry form lists "Social Media Marketing", Media Planning, Video Production, Influencer Marketing, ORM & Listening, SEO, Animation, Integrated Advertising. Homepage: SW Creative+, SW Studios+, Youthbeat+, SW Growth Labs+.
   - Note recorded on page: no dedicated social media service page
3. **Digital Markitors**: https://www.digitalmarkitors.com/
   - Pages: /, /social-media-marketing-agency-delhi.php
   - Presence: "1108, Chiranjiv Tower, 43, Opp. Eros Hotel, Nehru Place, New Delhi – 110019" (a directory listed Sector 62 Noida; ignored, own site says Nehru Place)
   - Services: strategy, account management, content/Reels, social ads, Instagram/Meta/LinkedIn, video, influencer, listening, analytics; plus SEO, PPC, web
4. **AdGlobal360**: https://www.adglobal360.com/
   - Pages: /, /solution/marketing/social-media-management, /contact-us
   - Presence: "Plot No 686, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122016" and "The Corenthum, 51/3A, Tower B, Plot No - A 41, Sector 62, Noida, Uttar Pradesh - 201301"; plus Jaipur, Chennai, Bangalore, Mohali, Patna (page has minor internal address discrepancies for Gurugram plot numbers and Mohali/Chennai)
   - Services: Social Media Management listed under Solutions > Marketing; page describes strategy, research and cultural trend analytics, engagement and outreach mix; no itemised deliverables (noted on page)

### Rejected
- Pulp Strategy: homepage lists no social media service and no address.
- PageTraffic: verified (Nehru Place, social media marketing page) but SEO-led like Digital Markitors; dropped for diversity.
- Webchutney: webchutney.com did not resolve.
- Sociall.in: domain now a betting site.
- Wildnet Technologies: publishes social media pages for many cities (incl. Kolkata); not used to avoid a city-page-farm agency.
- Socio Labs: footer "Main Branch" is Lajpat Nagar, New Delhi; considered for Kolkata and rejected there; not needed for Delhi.

---

## Page 2: best-social-media-marketing-agencies-in-ahmedabad

### Local-context sources
| URL | Publisher | Date | Claim used |
|---|---|---|---|
| https://www.investindia.gov.in/state/gujarat | Invest India | 19/06/2026 | Focus sectors incl. textiles and apparel, pharmaceuticals, chemicals and petrochemicals, IT-BPM, food processing; Gujarat home to IIM Ahmedabad; GIFT City "first operational Smart City" and host of "India's only International Financial Services Centre" |
| https://www.giftgujarat.in/ | GIFT City | undated, accessed Nov 2026 | Sectors: banking, capital markets, fund management, insurance, fintech, foreign universities (also bullion, leasing, GICs) |
| https://heritage.ahmedabadcity.gov.in/details/628/festivals/all_heritages/en | Ahmedabad Municipal Corporation heritage site | undated | International Kite Festival on 13 and 14 January; crowds gather at the Riverfront |
| https://ich.unesco.org/en/RL/garba-of-gujarat-01962 | UNESCO ICH | inscribed 2023 (18.COM) | Garba of Gujarat inscribed 2023; performed during Navaratri |

Not used: UNESCO World Heritage page for Ahmedabad (whc.unesco.org returned 403). Gujarati New Year after Diwali, wedding season and admissions written as common practice without figures.

### Competitors
1. **Flora Fountain**: https://florafountain.com/
   - Pages: /, /social-media-marketing-company-ahmedabad/, /contact-us
   - Presence: "1302, 13th Floor, Shivalik Shilp Iskcon Cross Road, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 380015"; US office Totowa NJ
   - Services: social media strategy, management (publishing, community, calendars, reporting), content (Reels, design, copy, memes), paid social, influencer; site also lists branding, SEO, concept shoots, ecommerce management. Industries listed: hospitality, real estate, FMCG, jewellery.
   - Note: Flora Fountain publishes a "top agencies in Ahmedabad" listicle ranking itself; we used it only as a lead and did not use any of its claims.
2. **Bonoboz**: https://www.bonoboz.in/
   - Pages: /, /social-media/
   - Presence: "12th floor Brooklyn Tower, Next to YMCA club, SG Highway, Ahmedabad 380015"
   - Services: platform selection, content strategy, profile setup, content and design, scheduling, boosted posts and Instagram/LinkedIn/Facebook ads, follower engagement; sectors FMCG, real estate, F&B, education, e-commerce; case studies incl. heavy machinery
   - Site warns about fake WhatsApp job offers using its name (noted on page)
3. **Brainwaves**: https://brainwavesindia.com/
   - Pages: /, /services/digital-marketing-company-in-ahmedabad/
   - Presence: "1209, Bsquare 2, Ambli Road, Vikram Nagar, Near Hotel Double Tree by Hilton, Ahmedabad – 380054, Gujarat, India"
   - Services: digital marketing page section "Social Media Marketing Company In Ahmedabad": "Social media is our signature digital marketing service", "full support for social media management, content creation, lead generation and creative advertising", social ads management, analytics; also SEO, PPC, email, ORM, design services
   - Note recorded on page: no standalone social media page
4. **Rioconn**: https://rioconn.in/ (rioconn.com redirects)
   - Pages: /, /social-media-marketing/, /contact-us/
   - Presence: contact page lists "Ahmedabad" and "Mumbai" with phone numbers only; no street address (recorded as such on page with a note)
   - Services: social media strategy, content calendar, visuals/video/copy, comment and message replies, influencer partnerships, performance reporting

### Rejected
- Socialee: lists Ahmedabad, but the address under its Ahmedabad heading is "B-510, The Landmark, Kudasan, Gandhinagar – 382421"; not an Ahmedabad address.
- Litmus Branding: homepage lists no social media service and no address.
- Nyasa Media Agency: own site (nyasamedia.com) returned empty content; only directory data available.
- Evertoss: site fetch failed.
- Brainwaves' and others' directory-only facts ignored.

---

## Page 3: best-social-media-marketing-agencies-in-kolkata

### Local-context sources
| URL | Publisher | Date | Claim used |
|---|---|---|---|
| https://www.investindia.gov.in/state/west-bengal | Invest India | 19/06/2026 | Focus sectors agriculture and allied, textiles and apparel, IT-BPM, leather and footwear; "Land of the famous Darjeeling tea and second largest producer of tea in India"; IBM, TCS, Cognizant; IIM Calcutta, Calcutta University, Presidency University |
| https://ich.unesco.org/en/RL/durga-puja-in-kolkata-00703 | UNESCO ICH | inscribed 2021 (16.COM) | Durga Puja in Kolkata inscribed 2021; ten-day festival in September or October with public installations |
| Agencies' own contact pages (PromotEdge, Kreative Machinez, Monkey Wrench) | agencies | Nov 2026 | Three of four profiled agencies publish Salt Lake Sector V addresses (used as an observation, not a statistic) |

Not verified, therefore no jute claims on the page: Ministry of Textiles annual report and a PIB PDF (Sept 2026) on jute mill counts could not be read (texmin.nic.in did not resolve; PIB PDF had no extractable text). West Bengal IT department page (itewb.gov.in/BN/it-infrastructure/) returned 404, so no official claim about Sector V or New Town IT parks is made; New Town is mentioned only as a place IT firms sit, in a list of business types. Poila Baishakh (mid-April, Bengali New Year), Kali Puja, wedding season written as cultural practice without figures.

### Competitors
1. **PromotEdge**: https://www.promotedge.com/
   - Pages: /, /services/digital/social-media-marketing/
   - Presence: "Suite 508, 5th Floor, Ambuja Neotia Eco Centre, Block EM, Plot 4, Sector V, Salt Lake City, Kolkata 700091, India"
   - Services: audit and strategy, in-house content and Reels, management (calendars, approvals, scheduling), community management, LinkedIn/founder voice, YouTube channel, other platforms, paid amplification billed separately; 30 industries listed incl. tea and agribusiness, steel and metals, exporters
2. **Kreative Machinez**: https://www.kreativemachinez.com/
   - Pages: /, /services/social-media-marketing/
   - Presence: "6th Floor, Stesalit Tower, E2/3EP, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091"; also Hitec City Hyderabad and Beverly Hills
   - Services: strategy, content creation, platform tactics, engagement/community, analytics; Facebook and YouTube ads as form options. Mission statement about B2B brands.
3. **Nico Digital**: https://www.nicodigital.com/
   - Pages: /, /social-media-marketing/
   - Presence: "Kolkata (Headquarters): 10th Floor, Room 10, Chatterjee International Center, 33A, Jawaharlal Nehru Rd, Park Street area, Kolkata, West Bengal 700071"; Mumbai sales office Andheri East
   - Services: strategy, calendar and copy, creative production incl. Reels, management (scheduling, publishing, community), paid social, influencer and UGC, monthly reporting
4. **Monkey Wrench Communications**: https://www.monkeywrench.in/
   - Pages: /, /contact/
   - Presence: "Unit 10 &11 Imagine Tech Park, Plot No. 6, DP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091"
   - Services: homepage FAQ: "full-service branding, social media, packaging, and brochure design"; portfolio categories branding, packaging, digital marketing, UI UX, mainline advertising
   - Note recorded on page: no dedicated social media service page (/services/ returned 404)

### Rejected
- Socio Labs: footer main branch is Lajpat Nagar, New Delhi; Sector V address appears only in directories.
- Indus Net Technologies / INT Global: intglobal.com returned 403 to WebFetch.
- Webguru Infotech: webguru-india.com returned 307 / did not load.
- Shree Ganpati Media: own site not found; directory listings conflict (Howrah vs Kolkata).
- TechShu: lists Kolkata by city only and positions itself as full-funnel nationally; dropped in favour of agencies with Kolkata street addresses.
- Three Fourth Solutions: domain did not resolve. Inner Circle Advertising: site refused connection.
- Wildnet Technologies: Noida-based with city landing pages; no Kolkata office.

---

## Cross-page notes
- No agency is reused across the three pages. Sociowash (Mumbai, Bengaluru), Kreative Machinez (Hyderabad), Rioconn and Nico Digital (Mumbai) have real offices in other wave-1 cities; sister writers may legitimately list them.
- Kudozz described only via smm-shared blocks; localNotes state remote working and no city office. No claim that Kudozz writes Hindi, Gujarati or Bengali.
- Internal blog links verified in inventory3.tsv or present as `slug:` in src/content/brand-guides (batch 02/03 industry guides), plus SMM_INDIA_SLUG (wave-1 sister).

## File: src/content/location-guides/smm-locations-south.ts

### Research log: smm-locations-south.ts (Location Writer 3)

File: src/content/location-guides/smm-locations-south.ts, export `smmLocationSouthPosts`
Heroes: public/blog/locations/best-social-media-marketing-agencies-in-{bangalore,hyderabad,chennai}.svg (generator: scratchpad/locS/svg/gen.py; renders checked in headless Chrome at 1600x700)
All pages fetched 2026-11-12 (curl with a browser UA, text extracted, or WebFetch). Directories (Clutch Bengaluru/Hyderabad, DesignRush, Qoruz) were used only to find names.

## Local-context sources

| URL | Publisher | Date | Claim used |
|---|---|---|---|
| https://www.investindia.gov.in/team-india-blogs/six-indian-states-leading-next-wave-it-and-ites-growth | Invest India (Govt of India) | 5 Dec 2025 | Karnataka leads India's IT/ITeS sector, over 40% of national IT exports in FY2023; Bengaluru hosts 400+ multinational R&D centres. Telangana IT exports ₹2.68 trillion in FY2024; key projects HITEC City, Genome Valley. Tamil Nadu "home to India's SaaS capital", led by Chennai; Tidel Park and SIPCOT IT Parks |
| https://investkarnataka.co.in/ | Invest Karnataka (Govt of Karnataka) | undated, accessed Nov 2026 | Focus industries include Innovation & Startups (plus biotech, aerospace, electronics, etc.) |
| https://lifesciences.telangana.gov.in/ | Telangana Life Sciences (Govt of Telangana) | undated, accessed Nov 2026 | "2000+ life sciences companies" in Telangana; Genome Valley cluster |
| https://www.incredibleindia.gov.in/en/festivals-and-events/telangana/bonalu | Incredible India (Ministry of Tourism) | undated | Bonalu: annual festival in Hyderabad and Secunderabad and across Telangana, month of Ashadam, honours Goddess Mahakali |
| https://www.incredibleindia.gov.in/en/festivals-and-events/telangana/bathukamma | Incredible India | undated | Bathukamma: nine-day floral festival celebrated by women in Telangana during Navratri, culminating around Dussehra |
| https://investingintamilnadu.com/sectors/automobile-auto-components-ev | Guidance Tamil Nadu (Govt of TN) | undated | Chennai Cluster listed among auto clusters; site sector menu lists IT & ITeS, GCC, Life Sciences, Textiles, Gems & Jewellery |
| https://www.dtnext.in/news/chennai/margazhi-special-chennais-season-rasikas-ragas-and-shared-joy-856816 | DT Next | 16 Dec 2025 | Margazhi music season in Chennai; rasikas attend several concerts a day, moving between sabhas |

General cultural references used without a statistic (Ugadi, Dasara, Kannada Rajyotsava on 1 Nov, Sankranti, Ramzan/haleem, Pongal, Puthandu, Deepavali, wedding season, Bengaluru Tech Summit) are common knowledge and carry no figures. Languages (Kannada, Telugu, Urdu, Hindi, Tamil, English) are described qualitatively; no claim that Kudozz writes in any regional language.

## Competitors

### Bengaluru
1. **Wisoft Solutions** (wisoftsolutions.com). Pages: /in/services/social-media-marketing, /in/contact-us. Presence: "India Office - 001, Ground Floor, Workafella, No 77/A, Industrial Layout, Koramangala, Bengaluru, Karnataka 560095"; also a Dubai office. Services: SMM page lists Social Media Audit and Brand Foundation, Content Strategy and Monthly Calendar, Reels and Video Production, Community Management and Reputation Management, Topical Marketing and Social Listening, Influencer Marketing, Organic Boosting and Paid Amplification, LinkedIn Thought Leadership and Founder Personal Branding, Social Reporting. Checked 2026-11-12.
2. **Inboundsys** (inboundsys.com). Pages: home, /social-media-marketing-management. Presence: "Bangalore 91 Springboard, Gopala Krishna Complex, 45/3, Residency Road, Mahatma Gandhi Road, Bengaluru, Karnataka - 560025"; registered address "#281, 13th Main, AGS Layout, Arehalli Bengaluru – 560061"; Mysore and Mumbai offices. Services: SMM page lists audit, strategy for Facebook/LinkedIn/YouTube/Twitter/Instagram, content planning and creation, campaign execution/scheduling, community management, performance monitoring. Checked 2026-11-12.
3. **First Launch** (firstlaunch.in). Pages: home, /services/social-media-marketing/. Presence: "1st Floor, No.901, 28th Main Rd, Corporation Colony, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560069". Services: Content Strategy & Calendar Planning, Creative Design & Copywriting, Paid Social Advertising, Community Building & Engagement, Influencer & Creator Collaborations. Sectors named: SaaS, healthcare, D2C/e-commerce, fintech, EdTech, energy, real estate. Checked 2026-11-12. (Their client/growth numbers not used.)
4. **Bigtrunk Communications** (bigtrunk.co.in). Pages: home, /service/social-media-marketing/, /contact-us/. Presence: "Bangalore Wework Pavilion, 62/63, Church St, ... Bengaluru, Karnataka 560001", plus Mumbai, Delhi, Sharjah, Plano (US). Services: 11 listed services incl. social media marketing; SMM page describes audience segments, channel selection, a social media calendar, re-amplifying engaging content. Checked 2026-11-12.

### Hyderabad
1. **ShootOrder** (shootorder.com). Pages: home, /social-media-marketing, /contact. Presence: "Hyderabad office · Headquarters Floor 5, Block A, Cyber Pearl, Phase 2, HITEC City, Hyderabad, Telangana 500081"; US office in Waterbury, CT. Services: SEO, performance marketing, SMM ("Strategy, content, community and paid social, run by one in-house team from our Hyderabad office"; content pillars and calendar; posts, Reels, Stories), branding, web. Checked 2026-11-12. (Clutch/Google ratings, client counts not used.)
2. **3DM** (3dm.agency). Pages: home, /social-media-marketing-services.php, /contact. Presence: "H.No.1-62/K/84, Kavuri Hills Rd, CBI Colony, Jubilee Hills, Madhapur, Telangana 500033". Services: digital strategy, SMM (audience connection, creative and communication, community building), social listening. Checked 2026-11-12.
3. **SpaceKey Digital** (spacekeydigital.com). Pages: home, /social-media-marketing-agency-hyderabad. Presence: "3rd floor, Jains friends square, 301, Suchitra Rd, beside Suchitra Academy, Green Park, Jeedimetla, Hyderabad, Telangana 500067". Services menu: Digital Marketing, Social Media Marketing, SEO, PPC, Content Creation, Performance Marketing, Video Production, Website Development; SMM page: content-driven social, creative storytelling, reel-based strategies. Checked 2026-11-12.
4. **Marks and Methods** (marksandmethods.com). Pages: home, /services. Presence: "Plot no 40, Behind Care hospital, Jayabheri Pinevalley, Gachibowli, Hyderabad 500032, Telangana". Services: branding, digital, advertising; "Social" service: "We craft engaging strategies that turn your social channels into vibrant communities". Positioning: "brand-first creative agency". Checked 2026-11-12.

### Chennai
1. **Orange Digital Marketing** (orangedigitalmarketing.in). Pages: home, /social-media-marketing. Presence: "No 73, New NGGO Colony, 4th Cross Street, Adambakkam, Chennai - 600088". Services: SEO, web, SMM, PPC, ORM, influencer, content; SMM page lists Organic Social Growth, Content Planning & Calendars, Creative Posts & Reels, Community Engagement, Paid Social Advertising, Lead Generation, Performance Tracking & Reports. Checked 2026-11-12.
2. **Bud** (budindia.com). Page: /social-media-marketing-agency-in-chennai.php. Presence: "Chennai Branch : #25, 15th Main Rd, H Block, Anna Nagar West, Anna Nagar, Chennai - 600040"; head office Kalyan Nagar, Bangalore 560043 (noted on page as a branch). Services: planning (content calendar, KPIs), account management (posting, community management, comment and message response, profile upkeep), paid social, influencer, content creation/design/copy/video. Checked 2026-11-12.
3. **echoVME Digital** (echovme.in). Pages: /services/, /social-media-marketing-services-chennai/. Presence: "echoVME Digital 1A, Sapna Trade Centre, 135, Poonamallee High Road, Pursaiwalkam, Chennai 600084". Services list incl. SMM, SEO, influencer, branding, web/Shopify, performance, content writing, event marketing, video; SMM page: strategy, content plan and calendar, content creation, campaign management, audience engagement; industries listed incl. retail, healthcare, real estate, education, FMCG, jewellery, manufacturing, IT/SaaS. Checked 2026-11-12.
4. **The Pixelate** (thepixelate.com). Pages: home, /social-media-marketing. Presence: "Headquarters Chennai - India: The Pixelate, WorkEZ, Block-B, Door No.3, Hansa Building RK Swamy Centre, 147, Pathari Rd, Thousand Lights, Chennai, Tamil Nadu 600006"; site footer also lists USA, UK, UAE. Services: Branding, Social Media Marketing, Performance Marketing, Photography & Videography, Creative Services. Checked 2026-11-12.

## Candidates rejected
- **Webenza** (Bengaluru HQ, verified) and **Social Beat** (Chennai, verified): both already used on the India SMM page in smm-locations-west.ts; swapped out to avoid cross-page reuse.
- **Langoor** (Bengaluru): no social media marketing/management service listed on its site.
- **BrandStory**, **Brandloom** (Bengaluru): sites returned 403 to fetches; could not verify.
- **SocialPanga**: SSL/host mismatch, site would not load.
- **3minds Digital**: lists SMM but homepage shows only Mumbai and Gurugram addresses, no Bengaluru office found.
- **Intent Farm** (Bengaluru office verified): organic social media management appears only as a contact-form option; the main social page is an ads page. Dropped as not a listed SMM service.
- **Growth Hackers**: no office address on site. **Black Mirror Arts**: no SMM service or address. **Varcas Interactive**: no address found. **TargetG**, **Kings Marketing**, **Tier2 Digital**: pages did not load usable content. **Beta Digital Marketing**: says Bangalore but no street address found on homepage.
- **DigiMantra**: Bengaluru address present but HQ in Punjab and social not checked; not needed.
- **What's In a Name** (Hyderabad): SMM page exists but contact page showed no address in fetched text.
- **SJ Media Labs**, **Mosaic Digital**, **Tarwizz**, **OneFlit**, **Janrise** (Hyderabad): sites did not load or returned empty pages.
- **Wildnet Technologies**, **OneCity**, **Savit**: city landing pages for many cities; OneCity's Chennai page gives a Bengaluru address; not treated as local presence.

## Unverifiable / notes
- Bud's Chennai location is a branch; head office is in Bengaluru (shown in the record's note).
- No competitor client counts, awards, years, ratings or prices were used.
- Bathukamma/Bonalu exact 2026 dates were not stated (sources disagreed); festivals described without dates beyond the lunar month/Navratri.

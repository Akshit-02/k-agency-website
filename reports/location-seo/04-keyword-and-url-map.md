# 04 — Keyword and URL Map (Location SEO, Wave 1)

**URL convention:** `/blog/best-social-media-marketing-agencies-in-<place>`. This follows the existing `/blog/best-influencer-marketing-agencies-in-<place>` convention (the brief's `/blogs/` example doesn't exist in this codebase). No existing URLs changed.

## Why one page per location

| Decision | Evidence | Result |
|---|---|---|
| "Agency" and "company" consolidated | Same SERPs; Clutch titles use "Companies" for the same agencies; no distinct intent | One page targets both |
| "Marketing" and "management" consolidated | SERP check (Ahmedabad and Mumbai, 12 Nov 2026): the same directories (Clutch, DesignRush, Semrush Agencies) and the same agencies; agencies publish near-identical pages for both terms; buyers evaluate the same firms | One page per location, H1 "Best Social Media Marketing and Management Agencies in <Place>". Separate pages would compete for the same results |
| Separate management service landing pages per city | Kudozz has no local presence; a city landing page would repeat `/services/social-media-management` with a city name | **Not created** (brief section 8 criteria not met). The national service page is the landing page; city listicles link to it |

## Map

Every page targets the four primary variants, plus the secondaries below.

| Page | Primary keywords | Secondary / long-tail | Not targeted (owned elsewhere) |
|---|---|---|---|
| /blog/best-social-media-marketing-agencies-in-india | best social media marketing agency in India · best social media marketing company in India · best social media management agency in India · best social media management company in India | social media marketing services in India; social media management services in India; social media agency for businesses in India; outsourced social media management India | "influencer marketing agency India" → `best-influencer-marketing-agencies-in-india`; "social media management cost India" → `social-media-management-cost-india` |
| /blog/best-social-media-marketing-agencies-in-mumbai | the same four variants + "in Mumbai" | social media marketing services in Mumbai; social media management services in Mumbai; Instagram marketing agency in Mumbai | "influencer marketing agency Mumbai" → `best-influencer-marketing-agencies-in-mumbai`; "Instagram influencer agency Mumbai" → `best-instagram-influencer-marketing-agencies-in-mumbai` |
| /blog/best-social-media-marketing-agencies-in-delhi | … + "in Delhi" / "Delhi NCR" / "Gurugram" / "Noida" | social media agency Gurugram; social media marketing company Noida | influencer → `best-influencer-marketing-agencies-in-delhi` |
| /blog/best-social-media-marketing-agencies-in-bangalore | … + "in Bangalore" / "Bengaluru" | social media marketing for startups in Bengaluru | influencer → `best-influencer-marketing-agencies-in-karnataka` and the specialist Bangalore pages |
| /blog/best-social-media-marketing-agencies-in-ahmedabad | … + "in Ahmedabad" | social media agency for businesses in Ahmedabad; Gujarat social media agency | influencer → `best-influencer-marketing-agencies-in-ahmedabad` |
| /blog/best-social-media-marketing-agencies-in-pune | … + "in Pune" | social media marketing services in Pune | influencer → `best-influencer-marketing-agencies-in-maharashtra` |
| /blog/best-social-media-marketing-agencies-in-hyderabad | … + "in Hyderabad" | social media management services in Hyderabad | influencer → `best-influencer-marketing-agencies-in-telangana` |
| /blog/best-social-media-marketing-agencies-in-chennai | … + "in Chennai" | social media marketing services in Chennai | influencer → `best-influencer-marketing-agencies-in-tamil-nadu` and the specialist Chennai pages |
| /blog/best-social-media-marketing-agencies-in-kolkata | … + "in Kolkata" | social media agency for businesses in Kolkata | influencer → `best-influencer-marketing-agencies-in-west-bengal` |

## Long-tail questions (answered inside the pages, not as separate URLs)

The general questions already have owning articles, and the location pages link to them:

| Question | Owning article |
|---|---|
| "How much does social media management cost in <place>?" | `social-media-management-cost-india` |
| "In-house team or agency?" | `in-house-vs-outsourced-social-media-management` |
| "What does an agency do?" | `/services/social-media-management` |
| "Which platforms?" | `choose-social-media-platforms-for-business` |
| "How to choose?" | `choose-social-media-management-agency` |

## Pages deliberately not created

| Pattern | Reason |
|---|---|
| `…-management-agencies-in-<place>`, `…-company-in-<place>` | Same intent as the consolidated page |
| City service landing pages (`social-media-management-services-<place>`) | No local presence; would duplicate the service page |
| State pages | SERP intent is city-led; adds a third doorway layer |
| Gurugram, Noida, Faridabad pages | Covered by the Delhi NCR page |
| International pages | SMM delivery unconfirmed (see 01 §4) |

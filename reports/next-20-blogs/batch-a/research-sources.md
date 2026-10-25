# Research source log (2026-10-24)

Under the outbound-link policy, external URLs are stored in the content data but render as plain text. The quality column shows how much weight each source can bear.

## Internal data

| Source | Use |
| --- | --- |
| Search Console Pages and Queries exports, 22 Oct 2026 (recovered from commit 5c3aa08; 668 page rows, 1,000 query rows) | Page metrics in `existing-content-audit.csv`; query evidence in `topic-prioritisation.csv` |
| `reports/seo-data-implementation/query-page-mapping.csv` and `blog-audit.csv` (commit 5c3aa08) | Inferred query→page mapping and earlier register flags (near page one, ranks poorly, expansion requests) |
| Full content export of all 894 existing posts (`src/content/blog.ts` and imports), titles plus full body text | Overlap checks for all 20 candidates and the replacement gaps |

## External sources

| Source | Date | Finding used | Supports | Quality |
| --- | --- | --- | --- | --- |
| Bar and Bench, "Misleading medical ads case: Supreme Court closes case, allows AYUSH ads without State approval" (barandbench.com) | 11 Aug 2025 | SC disposed of the IMA petition and vacated the 27 Aug 2024 interim order; Rule 170 omission (1 Jul 2024) stands | Ayurveda article, "What changed" | Legal news report of the order |
| Bar and Bench, "Supreme Court stays Centre's decision to omit key rule against misleading AYUSH ads" | Aug 2024 | Stay of the Rule 170 omission | Same | Legal news |
| Tribune India / Vikaspedia / Mondaq on DoCA additional guidelines for health and wellness celebrities and influencers | 10 Aug 2023 | Health-expert disclaimers; certified professionals must disclose credentials; general wellness advice exempt | Ayurveda article | Reports quoting the ministry statement |
| exchange4media / Outlook Money on ASCI's revised health and finance influencer addendum | Apr 2025 | Qualifications required, and must be declared, only for technical information or advice | Ayurveda article, glossary context | Trade press; consistent with the ASCI PDF already in `SOURCES` |
| Restaurant India / Omnicuris / Gala Law on FSSAI advisory to influencers | 13 Aug 2026 | Influencers must verify health claims ('boosts immunity' etc.); FSS Act 2006 and Advertising and Claims Regulations 2018 cited | Ayurveda article | Secondary; primary FSSAI text not retrieved (gap noted in the article: "as reported") |
| Cyril Amarchand Mangaldas blog / Chemlinked on FSS Nutraceutical Regulations 2022 | 2025 | 2022 Nutra regulations operational from 1 Apr 2022; claims also governed by the 2018 Advertising and Claims Regulations | Ayurveda rulebook table | Law-firm commentary |
| Dubai Land Department, "DLD fines 10 real estate companies and warns another 30" | Oct 2020 | Ads without permits, manipulated or expired permit numbers; progressive AED 50,000 fines; possible licence cancellation | Dubai article | Official |
| Dubai Land Department, "DLD provides Madmoun service to verify validity of real estate ads via QR codes" (and Dubai Media Office) | 18 Apr 2023 | QR per permit; effective 24 Apr 2023 | Dubai article | Official (release uses "expected"; enforcement reported by trade press) |
| Dubai Land Department, "DLD fines 30 real estate companies…" | 8 Feb 2024 | AED 50,000 each; QR code obligatory; don't engage with ads lacking a permit and QR | Dubai article | Official |
| Open Exam Prep, Dubai broker exam guide, ch. 3.2 | 2026 | Social posts treated as ads needing a Trakheesi permit; gross vs net yields; renders labelled | Dubai claims table (framed as broker training material, not law) | Secondary; used only as guidance with a "confirm with RERA" caveat |
| AMEC, Barcelona Principles 3.0 (amecorg.com) plus Ragan/CARMA coverage | Jul 2020 | "AVEs are not the value of communication" retained since 2010 | EMV article | Official (principle text confirmed via coverage) |
| Traackr, Adweek, Brandwatch and Makeinfluence on EMV | various | No standard EMV formula; vendor-chosen inputs | EMV article (stated generally, no statistics) | Vendor and industry commentary |
| YouTube Official Blog, engaged views (`SOURCES.youtubeEngagedViews`) | 2026 | View definition change from 24 Aug 2026 | Glossary | Official (already used site-wide) |

## Facts reused from existing verified site content

- Income-tax Act 2025, s.393 consolidating 194R and others from 1 Apr 2026 (`tds-for-influencers-india`).
- ASCI labels including 'Free gift'; UAE advertiser permit for barter (services.ts, memory of prior verification).
- UAE National Media Authority as permit regulator (`uae-advertiser-permit`, reviewed Oct 2026).

## Stated without external citation (general knowledge, low risk)

- CGST Act s.7 lists barter as a supply. India's Eighth Schedule has 22 languages. TikTok has been blocked in India since 2020. Legal Metrology (Packaged Commodities) Rules apply to packaged goods. DPDP Act 2023 exists. These are well-established; a reviewer may still wish to add citations.

## Not verified and therefore not claimed

- Any search volumes, market sizes or quick-commerce statistics.
- Influencer-specific DLD rules (none found; the article says so).
- Specific features of the Blinkit, Zepto or Instamart ad products.

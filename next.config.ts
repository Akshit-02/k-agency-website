import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        source: "/creators",
        destination: "/for-creators",
        permanent: true,
      },
      // 900–949 batch: the generic agency-selection guide duplicated the India guide's intent; its unique
      // sections (creator vetting, red flags, evaluating results, FAQs) were merged into the India pillar.
      {
        source: "/blog/how-to-choose-an-influencer-marketing-agency",
        destination: "/blog/choose-influencer-marketing-agency-india",
        permanent: true,
      },
      // 950–999 batch: the short ambassador article duplicated brand-ambassador-program; its three points
      // (incentives beyond the first post, partners not vendors, quarterly reviews) were merged there.
      {
        source: "/blog/building-a-brand-ambassador-program-that-lasts",
        destination: "/blog/brand-ambassador-program",
        permanent: true,
      },
      // 2026-10 SEO audit: USD-priced cost guide duplicated the India cost intent; campaign-type budgets and FAQs merged into the India guide.
      {
        source: "/blog/how-much-does-influencer-marketing-cost",
        destination: "/blog/influencer-marketing-cost-india",
        permanent: true,
      },
      // 2026-10 SEO audit: India contract guide duplicated the main contract guide; India-specific terms (no standard template, ASCI, GST/TDS) merged into it.
      {
        source: "/blog/influencer-marketing-contract-india",
        destination: "/blog/influencer-marketing-contract",
        permanent: true,
      },
      // 2026-10 SEO audit: India ROI guide duplicated the main ROI guide; India attribution gaps (WhatsApp, COD) and the worked example merged into it.
      {
        source: "/blog/measure-influencer-marketing-roi-india",
        destination: "/blog/measuring-influencer-campaign-roi",
        permanent: true,
      },
      // 2026-10 SEO audit: India strategy guide duplicated the main strategy guide; language, city-tier and regional steps merged into it.
      {
        source: "/blog/influencer-marketing-strategy-india",
        destination: "/blog/influencer-marketing-strategy",
        permanent: true,
      },
      // 2026-10 SEO audit: near-identical '15 mistakes' list for Indian brands; India-specific mistakes and the pre-launch checklist merged into the main list.
      {
        source: "/blog/influencer-marketing-mistakes-india",
        destination: "/blog/15-influencer-marketing-mistakes",
        permanent: true,
      },
      // 2026-10 SEO audit: generic 'find influencers' guide competed with the India guide for the same query; sourcing, tier and tools sections merged into it.
      {
        source: "/blog/how-to-find-influencers-for-your-brand",
        destination: "/blog/find-indian-influencers",
        permanent: true,
      },
      // 2026-10 SEO audit: three Instagram brand pillars competed for one query; India framing and planning content merged into the main Instagram guide.
      {
        source: "/blog/instagram-influencer-marketing-india",
        destination: "/blog/instagram-influencer-marketing",
        permanent: true,
      },
      // 2026-10 SEO audit: 'Instagram creator marketing' pillar duplicated the Instagram guide; terminology and objective-to-model tables merged into it.
      {
        source: "/blog/instagram-creator-marketing",
        destination: "/blog/instagram-influencer-marketing",
        permanent: true,
      },
      // 2026-10 SEO audit: 'UGC creator vs influencer' answered the same comparison query; the hiring decision table and hybrid-creator guidance merged into the UGC vs influencer guide.
      {
        source: "/blog/ugc-creator-vs-influencer",
        destination: "/blog/ugc-vs-influencer-content-whats-the-difference",
        permanent: true,
      },
      // 2026-10 SEO audit: 'how to brief influencers' duplicated the campaign brief guide; platform and campaign-type adaptation merged into it.
      {
        source: "/blog/how-to-brief-influencers",
        destination: "/blog/influencer-campaign-brief",
        permanent: true,
      },
      // 2026-10 SEO audit: India fraud guide duplicated the fake-followers guide; fraud types and in-campaign validation merged into it.
      {
        source: "/blog/avoid-fake-influencers-india",
        destination: "/blog/how-to-identify-fake-followers",
        permanent: true,
      },
      // 2026-10 SEO audit: 'how does influencer marketing work' shares a SERP with 'what is influencer marketing'; the ten-stage workflow and misconceptions merged into the what-is guide.
      {
        source: "/blog/how-does-influencer-marketing-work",
        destination: "/blog/what-is-influencer-marketing",
        permanent: true,
      },
      // 2026-10 SEO audit: generic platform-choice guide (built around TikTok, unavailable in India) duplicated the India platforms guide; objective table and selection steps merged into it.
      {
        source: "/blog/best-platform-for-influencer-marketing",
        destination: "/blog/influencer-marketing-platforms-india",
        permanent: true,
      },
      // 2026-10 SEO audit: X 'strategy for Indian brands' index duplicated the X pillar; its category table and regional notes now live in the pillar.
      {
        source: "/blog/x-influencer-marketing-india-strategy",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-influencer-marketing-fintech-brands",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-influencer-marketing-consumer-electronics",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-influencer-marketing-gaming-esports",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-influencer-marketing-d2c-brands",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-influencer-marketing-ecommerce-brands",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-influencer-marketing-travel-tourism",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-influencer-marketing-startups",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated X industry page (about 900 words, near-identical structure across industries) consolidated into the X pillar's industry table.
      {
        source: "/blog/x-creator-marketing-saas-technology",
        destination: "/blog/x-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: 'podcast creator marketing' duplicated the podcast pillar; creator types and audio-vs-video guidance merged into it.
      {
        source: "/blog/podcast-creator-marketing",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-consumer-electronics",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-d2c",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-ecommerce",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-education-edtech",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-fintech",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-healthcare-wellness",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-saas-technology",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: thin templated podcast industry page consolidated into the podcast pillar's industry table.
      {
        source: "/blog/podcast-influencer-marketing-startups-founders",
        destination: "/blog/podcast-influencer-marketing-india",
        permanent: true,
      },
      // 2026-10 SEO audit: X brand-partnership terms page duplicated X creator partnerships; the commercial checklist merged into it.
      {
        source: "/blog/x-creator-brand-partnerships",
        destination: "/blog/x-creator-partnerships",
        permanent: true,
      },
      // 2026-10 SEO audit: podcast brand-partnership levels page duplicated podcast creator partnerships; when-to-move-up criteria merged into it.
      {
        source: "/blog/podcast-brand-partnerships",
        destination: "/blog/podcast-creator-partnerships",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

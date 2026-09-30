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
    ];
  },
};

export default nextConfig;

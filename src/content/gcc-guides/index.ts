import type { BlogPost } from "@/content/blog";
import { uaeHubPost } from "@/content/gcc-guides/uae-hub";
import { uaeConsumerPosts } from "@/content/gcc-guides/uae-consumer";
import { uaeSpecialistPosts } from "@/content/gcc-guides/uae-specialist";
import { uaeResourcePosts } from "@/content/gcc-guides/uae-resources";
import { gccMarketPosts } from "@/content/gcc-guides/gcc-markets";
import { saudiHubPost } from "@/content/gcc-guides/saudi-hub";
import { saudiCommercialPosts } from "@/content/gcc-guides/saudi-commercial";
import { saudiChannelPosts } from "@/content/gcc-guides/saudi-channels";
import { gccCountryPosts } from "@/content/gcc-guides/gcc-countries";
import { gccOperationsPosts } from "@/content/gcc-guides/gcc-operations";
import { gccPlatformPosts } from "@/content/gcc-guides/gcc-platforms";
import { gccIndustryPosts } from "@/content/gcc-guides/gcc-industries";

/**
 * UAE and GCC cluster (1400–1419): a UAE pillar, UAE industry and resource guides, and Saudi/GCC market-entry
 * guides. Buyer guides only; nothing claims a Kudozz presence in the region. See docs/uae-gcc-1400-1419-audit.md.
 * Saudi Arabia and GCC batch (1420–1439): Saudi pillar and guides, Qatar, Kuwait and Oman guides, and cross-GCC
 * budget, affiliate and reporting guides. See docs/gcc-1420-1439-audit.md.
 */
export const gccGuidePosts: BlogPost[] = [
  uaeHubPost,
  ...uaeConsumerPosts,
  ...uaeSpecialistPosts,
  ...uaeResourcePosts,
  ...gccMarketPosts,
  saudiHubPost,
  ...saudiCommercialPosts,
  ...saudiChannelPosts,
  ...gccCountryPosts,
  ...gccOperationsPosts,
  // Batch 1440–1459; see docs/gcc-1440-1459-audit.md.
  ...gccPlatformPosts,
  ...gccIndustryPosts,
];

/** Slugs in the cluster, used by the CTA resolver. */
export const gccGuideSlugs = gccGuidePosts.map((post) => post.slug);

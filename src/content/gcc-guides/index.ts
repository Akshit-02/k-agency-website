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
import { gccSectorPosts } from "@/content/gcc-guides/gcc-sectors";
import { gccPlanningPosts } from "@/content/gcc-guides/gcc-planning";
import { gccVerticalPosts } from "@/content/gcc-guides/gcc-verticals";
import { gccLaunchPosts } from "@/content/gcc-guides/gcc-launch";
import { gccPerformancePosts } from "@/content/gcc-guides/gcc-performance";
import { uaePermitPosts } from "@/content/gcc-guides/uae-permit";

/**
 * UAE and GCC cluster (1400–1419): a UAE pillar, UAE industry and resource guides, and Saudi/GCC market-entry
 * guides. Buyer guides only; nothing claims a Kudozz presence in the region. See docs/uae-gcc-1400-1419-audit.md.
 * Saudi Arabia and GCC batch (1420–1439): Saudi pillar and guides, Qatar, Kuwait and Oman guides, and cross-GCC
 * budget, affiliate and reporting guides. See docs/gcc-1420-1439-audit.md.
 * Batch 1480–1499: events, gaming, universities, expatriate communities, franchises, ad fatigue, brand lift and the
 * 2027 planning guide. See docs/gcc-1480-1499-audit.md.
 * Batch 1500–1519: FMCG, sustainability, film and streaming, sports, jewellery, nonprofits, AI content, skincare
 * briefs, product drops and launch insights. See docs/gcc-1500-1519-audit.md.
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
  // Batch 1480–1499; see docs/gcc-1480-1499-audit.md.
  ...gccSectorPosts,
  ...gccPlanningPosts,
  // Batch 1500–1519; see docs/gcc-1500-1519-audit.md.
  ...gccVerticalPosts,
  ...gccLaunchPosts,
  // Batch 1520–1539; see docs/gcc-1520-1539-audit.md.
  ...gccPerformancePosts,
  // Batch 1660–1709 (1704); see docs/brand-guides-1660-1709-audit.md.
  ...uaePermitPosts,
];

/** Slugs in the cluster, used by the CTA resolver. */
export const gccGuideSlugs = gccGuidePosts.map((post) => post.slug);

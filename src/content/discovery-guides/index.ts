import type { BlogPost } from "@/content/blog";
import { discoveryBatchA } from "@/content/discovery-guides/batch-a";
import { discoveryBatchB } from "@/content/discovery-guides/batch-b";
import { discoveryBatchC } from "@/content/discovery-guides/batch-c";
import { discoveryBatchD } from "@/content/discovery-guides/batch-d";
import { discoveryBatchE } from "@/content/discovery-guides/batch-e";
import { discoveryBatchF } from "@/content/discovery-guides/batch-f";
import { discoveryBatchG } from "@/content/discovery-guides/batch-g";
import { discoveryBatchH } from "@/content/discovery-guides/batch-h";
import { discoveryBatchI } from "@/content/discovery-guides/batch-i";
import { discoveryBatchJ } from "@/content/discovery-guides/batch-j";
import { discoveryBatchK } from "@/content/discovery-guides/batch-k";
import { discoveryBatchL } from "@/content/discovery-guides/batch-l";

/**
 * Kudozz Discovery article cluster (25 Nov 2026). Batch 1 (A–D): 11 new posts + 9 rewrites; batch 2 (E–H): 17 new posts +
 * 3 rewrites; batch 3 (I–L): 3 new posts + 17 rewrites. Rewritten URLs keep their slugs; their old entries were removed from their original files (overlap audits in
 * reports/kudozz-discovery-blogs/, -batch-2/ and -batch-3/).
 * Each post carries a hand-placed `discovery-cta` block and a `discoveryCta` end CTA.
 */
export const discoveryGuidePosts: BlogPost[] = [...discoveryBatchA, ...discoveryBatchB, ...discoveryBatchC, ...discoveryBatchD,
  ...discoveryBatchE, ...discoveryBatchF, ...discoveryBatchG, ...discoveryBatchH,
  ...discoveryBatchI, ...discoveryBatchJ, ...discoveryBatchK, ...discoveryBatchL,
];

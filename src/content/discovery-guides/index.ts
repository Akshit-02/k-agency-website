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
import { discoveryBatchM } from "@/content/discovery-guides/batch-m";
import { discoveryBatchN } from "@/content/discovery-guides/batch-n";
import { discoveryBatchO } from "@/content/discovery-guides/batch-o";
import { discoveryBatchP } from "@/content/discovery-guides/batch-p";
import { discoveryBatchQ } from "@/content/discovery-guides/batch-q";
import { discoveryBatchR } from "@/content/discovery-guides/batch-r";
import { discoveryBatchS } from "@/content/discovery-guides/batch-s";
import { discoveryBatchT } from "@/content/discovery-guides/batch-t";

/**
 * Kudozz Discovery article cluster (25 Nov 2026). Batch 1 (A–D): 11 new posts + 9 rewrites; batch 2 (E–H): 17 new posts +
 * 3 rewrites; batch 3 (I–L): 3 new posts + 17 rewrites; batch 4 (M–P, 26 Nov): 6 new posts + 14 rewrites; batch 5 (Q–T, 27 Nov): 10 new posts + 8 rewrites (2 topics skipped). Rewritten URLs keep their slugs; their old entries were removed from their original files (overlap audits in
 * reports/kudozz-discovery-blogs/, -batch-2/, -batch-3/, -batch-4/ and -batch-5/).
 * Each post carries a hand-placed `discovery-cta` block and a `discoveryCta` end CTA.
 */
export const discoveryGuidePosts: BlogPost[] = [...discoveryBatchA, ...discoveryBatchB, ...discoveryBatchC, ...discoveryBatchD,
  ...discoveryBatchE, ...discoveryBatchF, ...discoveryBatchG, ...discoveryBatchH,
  ...discoveryBatchI, ...discoveryBatchJ, ...discoveryBatchK, ...discoveryBatchL,
  ...discoveryBatchM, ...discoveryBatchN, ...discoveryBatchO, ...discoveryBatchP,
  ...discoveryBatchQ, ...discoveryBatchR, ...discoveryBatchS, ...discoveryBatchT,
];

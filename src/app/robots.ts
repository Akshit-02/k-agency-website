import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Bulk scrapers that send no search or AI-answer traffic but crawl all 1,000+ articles repeatedly, burning Vercel
// CDN requests, ISR reads and origin transfer. Search engines and AI assistants (Googlebot, Bingbot, GPTBot,
// OAI-SearchBot, ClaudeBot, PerplexityBot…) stay allowed. Bots that ignore robots.txt need a Vercel Firewall rule.
const blockedBots = ["Bytespider", "MJ12bot", "DotBot", "PetalBot", "BLEXBot", "Barkrowler", "SeekportBot", "serpstatbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: blockedBots, disallow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

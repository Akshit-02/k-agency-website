import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { markets } from "@/content/markets";
import { creatorResourceSections, creatorSectionPath } from "@/content/creator-resources";

// Only blog posts carry <lastmod>, from their real publish/update dates. Static pages leave it out: a value that
// changes on every build ("now") tells crawlers nothing, and Google ignores lastmod it can't trust.
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly" as const, priority: 1 },
  ];

  const primaryPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/for-brands`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/services`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/for-creators`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/creator-resources`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/tools`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const marketPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/markets`, changeFrequency: "monthly" as const, priority: 0.8 },
    ...markets.map((market) => ({
      url: `${siteConfig.url}/markets/${market.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const blogIndex: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const creatorSectionPages: MetadataRoute.Sitemap = creatorResourceSections.map((section) => ({
    url: `${siteConfig.url}${creatorSectionPath(section)}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const legalPages: MetadataRoute.Sitemap = ["/privacy-policy", "/terms"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [...home, ...primaryPages, ...servicePages, ...marketPages, ...blogIndex, ...creatorSectionPages, ...blogRoutes, ...legalPages];
}

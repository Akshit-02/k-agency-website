import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
  ];

  const primaryPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/for-brands`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/services`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/for-creators`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly" as const, priority: 0.5 },
  ].map((entry) => ({ ...entry, lastModified: now }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const legalPages: MetadataRoute.Sitemap = ["/privacy-policy", "/terms"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [...home, ...primaryPages, ...servicePages, ...blogIndex, ...blogRoutes, ...legalPages];
}

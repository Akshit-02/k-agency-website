import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/content/blog";
import type { Service } from "@/content/services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.brand.appleTouchIcon}`,
      width: 180,
      height: 180,
    },
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      "Influencer Marketing",
      "Creator Marketing",
      "UGC Marketing",
      "Influencer Campaign Management",
      "Brand Ambassador Programs",
      "Social Media Marketing",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(post: BlogPost, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    image: `${url}/opengraph-image`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.category,
    ...(post.tags && post.tags.length > 0 ? { keywords: post.tags.join(", ") } : {}),
    ...(post.spatialCoverage ? { spatialCoverage: { "@type": "Place", name: post.spatialCoverage } } : {}),
    ...(post.mentions && post.mentions.length > 0
      ? { mentions: post.mentions.map((m) => ({ "@type": "Organization", name: m.name, url: m.url })) }
      : {}),
    inLanguage: "en-IN",
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: `${siteConfig.url}/about`,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function collectionPageSchema({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

/** Only pass FAQs that are actually rendered as visible copy on the page — never hidden content authored solely for schema. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: Service, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url,
    serviceType: service.name,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "Worldwide",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Brands and marketing teams",
    },
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

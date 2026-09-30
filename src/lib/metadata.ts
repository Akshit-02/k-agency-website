import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  article,
}: {
  title: string;
  description: string;
  path?: string;
  /** Pass `null` when the route segment has its own `opengraph-image` file, so the file convention supplies the image. */
  image?: string | null;
  article?: { publishedTime: string; modifiedTime?: string; section: string; tags?: string[] };
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image === null ? undefined : image ?? siteConfig.ogImage;
  const images = ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
            section: article.section,
            tags: article.tags,
          }
        : { type: "website" }),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

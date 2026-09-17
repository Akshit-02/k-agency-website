/**
 * Thin wrapper around the GA4 gtag() call already loaded in layout.tsx.
 * No new analytics library — reuses the existing window.gtag global.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type BlogCtaEventParams = {
  slug: string;
  category: string;
  topic: string;
  position: "mid" | "bottom";
};

export function trackBlogCtaClick(
  event: "blog_mid_cta_click" | "blog_bottom_cta_click",
  params: BlogCtaEventParams
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, {
    article_slug: params.slug,
    article_category: params.category,
    cta_topic: params.topic,
    cta_position: params.position,
  });
}

export function trackBlogLeadFormEvent(
  event: "blog_lead_form_start" | "blog_lead_form_submit",
  params: { sourceArticle?: string; articleCategory?: string; ctaPosition?: string }
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, {
    source_article: params.sourceArticle ?? "",
    article_category: params.articleCategory ?? "",
    cta_position: params.ctaPosition ?? "",
  });
}

import { DiscoveryCTABanner, type DiscoveryBannerCopy } from "@/components/discovery/DiscoveryCTABanner";

/** Inline Kudozz Discovery aside for the end of a relevant article (copy from getBlogDiscoveryCta). */
export function DiscoveryBlogCTA({ copy, topic, className }: { copy: DiscoveryBannerCopy; topic: string; className?: string }) {
  return <DiscoveryCTABanner variant="blog" copy={copy} placement="blog_article" topic={topic} className={className} />;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/content/blog";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";

export const metadata: Metadata = buildMetadata({
  title: "Influencer Marketing Blog: Strategy & Creator Economy Insights",
  description:
    "Practical, no-fluff writing on influencer marketing strategy, UGC, the creator economy, and campaign measurement from the Kudozz team.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <p
          aria-hidden="true"
          className="font-black-display pointer-events-none absolute -top-[3vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[20vw] leading-none tracking-tight text-ink/[0.04] sm:text-[13vw]"
        >
          NOTES
        </p>
        <Container className="relative">
          <Reveal>
            <Eyebrow>Blog</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-6xl leading-[0.98] tracking-tight text-balance text-ink sm:text-7xl">
              Notes on running influencer marketing <em className="italic text-coral">well.</em>
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <FeaturedPost post={featured} />
        </Container>
      </section>

      <section className="pb-28 sm:pb-36">
        <Container>
          <BlogExplorer posts={rest} />
        </Container>
      </section>

      <BlogNewsletter />
    </>
  );
}

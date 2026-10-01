import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug, type BlogPost } from "@/content/blog";
import {
  CREATOR_PILLAR_SLUG,
  CREATOR_RESOURCES,
  PLATFORM_HUB_SECTION_IDS,
  creatorJourney,
  creatorResourceGroups,
  creatorResourceSections,
  creatorSectionPath,
} from "@/content/creator-resources";
import { CreatorArticleList } from "@/components/creator-resources/CreatorArticleList";
import { JsonLd, breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { FeaturedPost } from "@/components/blog/FeaturedPost";

export const metadata: Metadata = buildMetadata({
  title: "Creator Resources: Brand Deals, Platforms, Commerce & Business",
  description:
    "Free guides for Indian creators: media kits, pricing, contracts, Instagram, YouTube and TikTok, trust-first commerce, audience ownership and running a creator business.",
  path: CREATOR_RESOURCES.path,
});

/** Brand-side guides that pair with the creator cluster — the same deal, seen from the other side. */
const brandSideLinks = [
  { label: "How brands vet influencers", href: "/blog/how-to-vet-influencers" },
  { label: "Influencer usage rights: what brands should know", href: "/blog/influencer-usage-rights" },
  { label: "Influencer marketing costs in India", href: "/blog/influencer-marketing-cost-india" },
  { label: "How brands negotiate with influencers", href: "/blog/how-to-negotiate-with-influencers" },
  { label: "Influencer contracts: the brand's view", href: "/blog/influencer-marketing-contract" },
  { label: "UGC creator vs influencer", href: "/blog/ugc-vs-influencer-content-whats-the-difference" },
  { label: "How brands build long-term influencer partnerships", href: "/blog/influencer-partnerships" },
  { label: "How brands write an influencer campaign brief", href: "/blog/influencer-campaign-brief" },
  { label: "Instagram partnership ads for brands", href: "/blog/instagram-partnership-ads" },
  { label: "How brands set an influencer marketing budget", href: "/blog/influencer-marketing-budget" },
];

function resolve(slugs: string[]): BlogPost[] {
  return slugs.map((slug) => getBlogPostBySlug(slug)).filter((p): p is BlogPost => !!p);
}

export default function CreatorResourcesPage() {
  const pillar = getBlogPostBySlug(CREATOR_PILLAR_SLUG);
  const sections = creatorResourceSections.map((section) => ({ ...section, posts: resolve(section.slugs) }));
  const groups = creatorResourceGroups
    .map((group) => ({ ...group, sections: sections.filter((s) => s.group === group.id) }))
    .filter((group) => group.sections.length > 0);
  const allPosts = [...(pillar ? [pillar] : []), ...sections.flatMap((s) => s.posts)];
  const platformHubs = sections.filter((s) => PLATFORM_HUB_SECTION_IDS.includes(s.id));
  const url = `${siteConfig.url}${CREATOR_RESOURCES.path}`;

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: CREATOR_RESOURCES.name,
          description: CREATOR_RESOURCES.description,
          url,
          items: allPosts.map((p) => ({ name: p.title, url: `${siteConfig.url}/blog/${p.slug}` })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: CREATOR_RESOURCES.name, url },
        ])}
      />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <p
          aria-hidden="true"
          className="font-black-display pointer-events-none absolute -top-[3vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[20vw] leading-none tracking-tight text-ink/[0.04] sm:text-[13vw]"
        >
          CREATORS
        </p>
        <Container className="relative">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: CREATOR_RESOURCES.name }]}
          />
          <Reveal>
            <Eyebrow className="mt-8">Creator Resources</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[0.98] tracking-tight text-balance text-ink sm:text-7xl">
              Work with brands <em className="italic text-coral">professionally.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">{CREATOR_RESOURCES.description}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <nav aria-label="Creator Resources topics" className="mt-8 flex flex-wrap gap-2">
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#topic-${group.id}`}
                  className="border-[1.5px] border-ink/25 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink/60 transition-colors hover:border-ink hover:text-ink"
                >
                  {group.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="font-black-display text-xs text-coral">THE CREATOR JOURNEY</h2>
          <ol className="mt-5 flex flex-wrap gap-2">
            {creatorJourney.map((stage, i) => (
              <li key={stage.slug + stage.label}>
                <Link
                  href={`/blog/${stage.slug}`}
                  className="inline-flex items-center gap-2 border-[1.5px] border-ink/20 bg-paper px-3 py-2 text-sm text-ink transition-colors hover:border-ink hover:text-coral"
                >
                  <span className="font-black-display text-[0.65rem] text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  {stage.label}
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {platformHubs.length > 0 && (
        <section className="pb-16">
          <Container>
            <h2 className="font-black-display text-xs text-coral">PLATFORM HUBS</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {platformHubs.map((hub) => (
                <li key={hub.id}>
                  <Link
                    href={creatorSectionPath(hub)}
                    className="block h-full border-[1.5px] border-ink/20 bg-paper px-5 py-4 transition-colors hover:border-ink"
                  >
                    <span className="block font-display text-2xl tracking-tight text-ink">{hub.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/60">{hub.intro}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {pillar && (
        <section className="pb-20">
          <Container>
            <FeaturedPost post={pillar} />
          </Container>
        </section>
      )}

      <section className="pb-24 sm:pb-32">
        <Container className="space-y-24">
          {groups.map((group) => (
            <div key={group.id} id={`topic-${group.id}`} className="scroll-mt-28">
              <h2 className="border-b-[1.5px] border-ink pb-3 font-black-display text-sm tracking-wide text-ink">
                {group.title.toUpperCase()}
              </h2>
              <div className="mt-10 space-y-16">
                {group.sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28 grid gap-8 lg:grid-cols-[280px_1fr]">
                    <div>
                      <h3 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
                        <Link href={creatorSectionPath(section)} className="transition-colors hover:text-coral">
                          {section.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-ink/60">{section.intro}</p>
                      <Link
                        href={creatorSectionPath(section)}
                        className="mt-4 inline-block text-sm font-semibold text-coral-dim underline decoration-2 underline-offset-4 hover:text-ink"
                      >
                        All {section.title} guides
                      </Link>
                    </div>
                    <CreatorArticleList posts={section.posts} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-line py-20">
        <Container className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">The brand&apos;s side of the deal</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/60">
              Knowing how brands think about the same decisions makes every pitch and negotiation easier.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {brandSideLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="max-w-3xl pb-28">
        <div className="border-[1.5px] border-ink bg-paper-dim px-8 py-10 shadow-[8px_8px_0_0_var(--color-coral)] sm:px-12 sm:py-12">
          <p className="font-display text-3xl leading-[1.1] tracking-tight text-balance text-ink sm:text-4xl">
            Interested in brand collaborations through Kudozz?
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/65">
            We review every creator application personally. Joining is free, and there&apos;s no obligation until a
            campaign actually fits you.
          </p>
          <div className="mt-7 inline-block">
            <Button href="/for-creators#apply" size="lg">
              Register as a Creator
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

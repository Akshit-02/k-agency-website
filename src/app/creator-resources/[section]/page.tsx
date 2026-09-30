import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug, type BlogPost } from "@/content/blog";
import {
  CREATOR_RESOURCES,
  creatorResourceGroups,
  creatorResourceSections,
  creatorSectionPath,
  getCreatorSectionById,
} from "@/content/creator-resources";
import { JsonLd, breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/animations/Reveal";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { CreatorArticleList } from "@/components/creator-resources/CreatorArticleList";

export const dynamicParams = false;

export function generateStaticParams() {
  return creatorResourceSections.map((section) => ({ section: section.id }));
}

export async function generateMetadata(props: PageProps<"/creator-resources/[section]">): Promise<Metadata> {
  const { section: id } = await props.params;
  const section = getCreatorSectionById(id);
  if (!section) return {};
  return buildMetadata({
    title: `${section.title}: Creator Resources`,
    description: section.description,
    path: creatorSectionPath(section),
  });
}

export default async function CreatorResourceSectionPage(props: PageProps<"/creator-resources/[section]">) {
  const { section: id } = await props.params;
  const section = getCreatorSectionById(id);
  if (!section) notFound();

  const pillar = getBlogPostBySlug(section.pillar);
  const resolve = (slugs: string[]) =>
    slugs.map((slug) => getBlogPostBySlug(slug)).filter((p): p is BlogPost => !!p);
  const posts = resolve(section.slugs.filter((slug) => slug !== section.pillar));
  const subsections = (section.subsections ?? [])
    .map((sub) => ({ title: sub.title, posts: resolve(sub.slugs.filter((slug) => slug !== section.pillar)) }))
    .filter((sub) => sub.posts.length > 0);
  const alsoSee = resolve(section.alsoSee ?? []);
  const group = creatorResourceGroups.find((g) => g.id === section.group);
  const siblings = creatorResourceSections.filter((s) => s.id !== section.id);
  const url = `${siteConfig.url}${creatorSectionPath(section)}`;

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: `${section.title}: ${CREATOR_RESOURCES.name}`,
          description: section.description,
          url,
          items: [...(pillar ? [pillar] : []), ...posts, ...alsoSee].map((p) => ({ name: p.title, url: `${siteConfig.url}/blog/${p.slug}` })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: CREATOR_RESOURCES.name, url: `${siteConfig.url}${CREATOR_RESOURCES.path}` },
          { name: section.title, url },
        ])}
      />

      <section className="pt-32 pb-14 sm:pt-40">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: CREATOR_RESOURCES.name, href: CREATOR_RESOURCES.path },
              { label: section.title },
            ]}
          />
          <Reveal>
            <Eyebrow className="mt-8">{group?.title ?? CREATOR_RESOURCES.name}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[0.98] tracking-tight text-balance text-ink sm:text-7xl">
              {section.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">{section.intro}</p>
          </Reveal>
        </Container>
      </section>

      {pillar && (
        <section className="pb-16">
          <Container>
            <FeaturedPost post={pillar} />
          </Container>
        </section>
      )}

      {subsections.length > 0 ? (
        <section className="pb-20">
          <Container className="max-w-4xl space-y-14">
            {subsections.map((sub) => (
              <div key={sub.title}>
                <h2 className="font-black-display text-xs text-coral">{sub.title.toUpperCase()}</h2>
                <div className="mt-5">
                  <CreatorArticleList posts={sub.posts} />
                </div>
              </div>
            ))}
          </Container>
        </section>
      ) : (
        posts.length > 0 && (
          <section className="pb-20">
            <Container className="max-w-4xl">
              <h2 className="font-black-display text-xs text-coral">IN THIS SECTION</h2>
              <div className="mt-5">
                <CreatorArticleList posts={posts} />
              </div>
            </Container>
          </section>
        )
      )}

      {alsoSee.length > 0 && (
        <section className="pb-20">
          <Container className="max-w-4xl">
            <h2 className="font-black-display text-xs text-coral">RELATED GUIDES IN OTHER SECTIONS</h2>
            <div className="mt-5">
              <CreatorArticleList posts={alsoSee} />
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-line py-16">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-ink">More Creator Resources</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {siblings.map((s) => (
              <li key={s.id}>
                <Link
                  href={creatorSectionPath(s)}
                  className="inline-block border-[1.5px] border-ink/20 px-3 py-2 text-sm text-ink transition-colors hover:border-ink hover:text-coral"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={CREATOR_RESOURCES.path}
                className="inline-block border-[1.5px] border-ink bg-ink px-3 py-2 text-sm text-paper transition-colors hover:bg-coral hover:text-ink"
              >
                All Creator Resources
              </Link>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}

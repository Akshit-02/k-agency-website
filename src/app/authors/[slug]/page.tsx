import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AUTHORS, authorPath, getAuthorBySlug, getPostAuthor } from "@/content/authors";
import { blogPosts } from "@/content/blog";
import { isNoindexSlug } from "@/content/noindex";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, breadcrumbSchema, personSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard, toBlogCardData } from "@/components/blog/BlogCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/authors/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return buildMetadata({
    title: `${author.name}, ${author.jobTitle}`,
    description: author.bio,
    path: authorPath(author),
  });
}

export default async function AuthorPage(props: PageProps<"/authors/[slug]">) {
  const { slug } = await props.params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const posts = blogPosts
    .filter((p) => getPostAuthor(p)?.slug === author.slug && !isNoindexSlug(p.slug))
    .sort((a, b) => (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt))
    .slice(0, 24);

  return (
    <>
      <JsonLd data={personSchema(author)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
          { name: author.name, url: `${siteConfig.url}${authorPath(author)}` },
        ])}
      />
      <section className="pt-36 pb-16 sm:pt-44">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: author.name }]} />
          <div className="mt-6 flex items-center gap-6">
            {author.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={author.image} alt={author.name} width={96} height={96} className="h-24 w-24 border-[1.5px] border-ink object-cover" />
            )}
            <div>
              <h1 className="font-display text-5xl leading-none tracking-tight text-ink">{author.name}</h1>
              <p className="mt-2 text-lg text-ink/70">{author.jobTitle}, {siteConfig.name}</p>
            </div>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-ink/80">{author.bio}</p>
          {author.sameAs.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4 text-base">
              {author.sameAs.map((href) => (
                <li key={href}>
                  <a href={href} rel="me noopener" target="_blank" className="underline underline-offset-4 hover:text-coral-deep">
                    {new URL(href).hostname.replace(/^www\./, "")}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Container>
        {posts.length > 0 && (
          <Container className="mt-16">
            <h2 className="font-display text-3xl text-ink">Articles by {author.name}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <BlogCard key={p.slug} post={toBlogCardData(p)} />
              ))}
            </div>
          </Container>
        )}
      </section>
    </>
  );
}

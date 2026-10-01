import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { Reveal } from "@/components/animations/Reveal";
import { BlogArticleGraphic } from "@/components/blog/BlogArticleGraphic";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { BlogBottomCTA } from "@/components/blog/BlogBottomCTA";
import { getBlogCtaSet } from "@/lib/blogCta";
import { formatDate } from "@/lib/date";
import { CREATOR_RESOURCES, creatorSectionPath, getCreatorSectionForSlug } from "@/content/creator-resources";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    image: null,
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.tags,
    },
  });
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const ctaSet = getBlogCtaSet(post);
  const isCreatorResource = post.category === CREATOR_RESOURCES.category;
  const creatorSection = getCreatorSectionForSlug(post.slug);
  const crumbs = isCreatorResource
    ? [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: CREATOR_RESOURCES.name, href: CREATOR_RESOURCES.path },
        ...(creatorSection ? [{ name: creatorSection.title, href: creatorSectionPath(creatorSection) }] : []),
        { name: post.title, href: `/blog/${post.slug}` },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        ...(post.breadcrumbParents ?? []),
        { name: post.title, href: `/blog/${post.slug}` },
      ];

  return (
    <>
      <JsonLd data={articleSchema(post, url)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href === "/" ? "" : c.href}` })))} />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd data={faqSchema(post.faqs.map((f) => ({ question: f.question, answer: f.answer })))} />
      )}

      <article className="pt-36 pb-8 sm:pt-44">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={
              isCreatorResource
                ? crumbs.map((c) => ({ label: c.name, href: c.href }))
                : [
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    ...(post.breadcrumbParents ?? []).map((c) => ({ label: c.name, href: c.href })),
                    { label: post.breadcrumbParents ? post.title : post.category },
                  ]
            }
          />
          <Reveal delay={0.05} fade={false}>
            <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight text-balance text-ink sm:text-7xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} fade={false}>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">{post.excerpt}</p>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/50">
            <span>{post.author.name}</span>
            {post.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
              </>
            )}
            {post.lastReviewed && (
              <>
                <span aria-hidden="true">·</span>
                <span>Last reviewed {post.lastReviewed}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>

        <Container className="mt-10 max-w-5xl">
          <div className="aspect-[16/7] overflow-hidden border-[1.5px] border-ink shadow-[10px_10px_0_0_var(--color-coral)]">
            {post.hero ? (
              // Topic diagrams are small SVGs; next/image adds nothing for them. Above the fold, so not lazy.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.hero.src}
                alt={post.hero.alt}
                width={1600}
                height={700}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            ) : (
              <BlogArticleGraphic category={post.category} label={creatorSection?.title} className="h-full w-full" />
            )}
          </div>
        </Container>

        <Container className="mt-16 max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-[200px_1fr]">
            <TableOfContents blocks={post.body} />
            <ArticleBody blocks={post.body} ctaSet={ctaSet} slug={post.slug} category={post.category} />
          </div>
        </Container>
      </article>

      {post.faqs && post.faqs.length > 0 && (
        <FAQSection faqs={post.faqs} eyebrow="FAQ" title="Questions readers ask about this topic." />
      )}

      <Container className="max-w-3xl py-16">
        <BlogBottomCTA
          content={ctaSet.bottom}
          slug={post.slug}
          category={post.category}
          topic={ctaSet.topic}
          platform={ctaSet.platform}
          intent={ctaSet.intent}
          audience={ctaSet.audience}
          ctaType={ctaSet.ctaType}
          cluster={ctaSet.cluster}
        />
      </Container>

      <RelatedArticles posts={related} />
    </>
  );
}

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
import { FinalCTA } from "@/components/home/FinalCTA";
import { formatDate } from "@/lib/date";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <JsonLd data={articleSchema(post, url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url },
        ])}
      />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd data={faqSchema(post.faqs.map((f) => ({ question: f.question, answer: f.answer })))} />
      )}

      <article className="pt-36 pb-8 sm:pt-44">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.category }]}
          />
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight text-balance text-ink sm:text-7xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">{post.excerpt}</p>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/50">
            <span>{post.author.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
            {post.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>

        <Container className="mt-10 max-w-5xl">
          <div className="aspect-[16/7] overflow-hidden border-[1.5px] border-ink shadow-[10px_10px_0_0_var(--color-coral)]">
            <BlogArticleGraphic category={post.category} className="h-full w-full" />
          </div>
        </Container>

        <Container className="mt-16 max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-[200px_1fr]">
            <TableOfContents blocks={post.body} />
            <ArticleBody blocks={post.body} />
          </div>
        </Container>
      </article>

      {post.faqs && post.faqs.length > 0 && (
        <FAQSection faqs={post.faqs} eyebrow="FAQ" title="Questions readers ask about this topic." />
      )}

      <RelatedArticles posts={related} />
      <FinalCTA />
    </>
  );
}

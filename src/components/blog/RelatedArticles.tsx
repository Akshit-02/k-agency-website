import type { BlogPost } from "@/content/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-line py-24">
      <Container>
        <SectionHeading eyebrow="Keep Reading" title="More from the blog." />
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}

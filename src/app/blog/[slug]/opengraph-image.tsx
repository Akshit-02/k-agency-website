import { ImageResponse } from "next/og";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kudozz blog article";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const title = post?.title ?? "Kudozz Blog";
  const label = post?.category ?? "Blog";
  const isCreator = label === "Creator Resources";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: isCreator ? "#5A2EEA" : "#150F0B",
          color: "#FAF1E2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="34" height="34" viewBox="0 0 32 32">
              <rect x="7" y="4" width="5" height="24" rx="1" fill="#FAF1E2" />
              <polygon points="14,15 24,5 27,5 17,15" fill={isCreator ? "#CCFF3D" : "#FF4D1C"} />
              <polygon points="14,17 24,27 27,27 17,17" fill={isCreator ? "#CCFF3D" : "#FF4D1C"} />
            </svg>
            <div style={{ display: "flex", fontSize: 32, letterSpacing: -0.5 }}>
              <span>Kudo</span>
              <span style={{ color: isCreator ? "#CCFF3D" : "#FF4D1C" }}>zz</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              border: "2px solid #FAF1E2",
              padding: "8px 16px",
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 70 ? 56 : 66, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1050 }}>
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}

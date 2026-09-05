import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#150F0B",
          color: "#FAF1E2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="34" height="34" viewBox="0 0 32 32">
            <rect x="7" y="4" width="5" height="24" rx="1" fill="#FAF1E2" />
            <polygon points="14,15 24,5 27,5 17,15" fill="#FF4D1C" />
            <polygon points="14,17 24,27 27,27 17,17" fill="#FF4D1C" />
          </svg>
          <div style={{ display: "flex", fontSize: 32, letterSpacing: -0.5 }}>
            <span>Kudo</span>
            <span style={{ color: "#FF4D1C" }}>zz</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Influence isn&apos;t bought. It&apos;s built.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#FAF1E999", maxWidth: 760 }}>
            {siteConfig.name} — Influencer Marketing Agency
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

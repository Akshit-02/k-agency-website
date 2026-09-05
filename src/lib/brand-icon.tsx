import { ImageResponse } from "next/og";

/** Shared renderer for the PWA/manifest icon routes — same mark as the favicon and apple-icon, just at larger fixed sizes. */
export function renderBrandIcon(size: number) {
  const markSize = Math.round(size * 0.6);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#150F0B",
        }}
      >
        <svg width={markSize} height={markSize} viewBox="0 0 32 32">
          <rect x="7" y="4" width="5" height="24" rx="1" fill="#FAF1E2" />
          <polygon points="14,15 24,5 27,5 17,15" fill="#FF4D1C" />
          <polygon points="14,17 24,27 27,27 17,17" fill="#FF4D1C" />
        </svg>
      </div>
    ),
    { width: size, height: size }
  );
}

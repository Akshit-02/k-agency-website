// Static: generated once at build and served from the CDN instead of invoking a function per request.
export const dynamic = "force-static";

import { renderBrandIcon } from "@/lib/brand-icon";

export function GET() {
  return renderBrandIcon(512);
}

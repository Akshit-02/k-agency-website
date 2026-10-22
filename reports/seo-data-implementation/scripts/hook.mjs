import { pathToFileURL } from "node:url";
import { existsSync } from "node:fs";
const ROOT = "/Users/akshit/Documents/secret-codes/influencer-agency/src/";
export async function resolve(spec, ctx, next) {
  if (spec.startsWith("@/")) {
    const base = ROOT + spec.slice(2);
    for (const ext of [".ts", ".tsx", "/index.ts", "/index.tsx"]) if (existsSync(base + ext)) return next(pathToFileURL(base + ext).href, ctx);
  }
  if (spec.startsWith(".") && ctx.parentURL?.includes("/influencer-agency/src/") && !/\.\w+$/.test(spec)) {
    const u = new URL(spec, ctx.parentURL).pathname;
    for (const ext of [".ts", ".tsx", "/index.ts"]) if (existsSync(u + ext)) return next(pathToFileURL(u + ext).href, ctx);
  }
  return next(spec, ctx);
}

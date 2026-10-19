/**
 * Outbound-link policy: the site links out to zspace.in only. Every other
 * external URL in the content stays in the data (so sources can be re-checked
 * or restored) but renders as plain text and is left out of JSON-LD.
 */
const ALLOWED_EXTERNAL_HOSTS = ["zspace.in"];

export function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

/** True for relative links, kudozz.in links and allowlisted external hosts. */
export function isLinkAllowed(href: string) {
  if (!isExternal(href)) return true;
  let host: string;
  try {
    host = new URL(href).hostname.toLowerCase();
  } catch {
    return false;
  }
  return [...ALLOWED_EXTERNAL_HOSTS, "kudozz.in"].some((h) => host === h || host.endsWith(`.${h}`));
}

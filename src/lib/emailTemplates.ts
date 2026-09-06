import "server-only";

export type EmailField = { label: string; value: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatSubmittedAt(): string {
  return new Date().toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

/**
 * Renders a clean, table-based HTML email (inline styles only, since most
 * email clients strip <style> blocks) with a labeled field list, plus a
 * matching plain-text fallback.
 */
export function buildLeadEmail(opts: { heading: string; fields: EmailField[]; source: string }) {
  const submittedAt = formatSubmittedAt();
  const allFields = [...opts.fields, { label: "Submitted At", value: submittedAt }, { label: "Source", value: opts.source }];

  const rows = allFields
    .map(
      (field) => `
        <tr>
          <td style="padding:14px 20px;border-bottom:1px solid #eee2d8;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#8a7f74;white-space:nowrap;vertical-align:top;">${escapeHtml(field.label)}</td>
          <td style="padding:14px 20px;border-bottom:1px solid #eee2d8;font-size:15px;color:#150f0b;vertical-align:top;">${escapeHtml(field.value) || "<em>Not provided</em>"}</td>
        </tr>`
    )
    .join("");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:32px 16px;background-color:#f6f1ea;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;border:1.5px solid #150f0b;">
      <tr>
        <td style="background-color:#150f0b;padding:24px 28px;">
          <span style="color:#f6f1ea;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Kudozz</span>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 28px 8px;">
          <h1 style="margin:0;font-size:20px;color:#150f0b;">${escapeHtml(opts.heading)}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 8px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${rows}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [opts.heading, "", ...allFields.map((field) => `${field.label}:\n${field.value || "Not provided"}`)].join("\n\n");

  return { html, text };
}

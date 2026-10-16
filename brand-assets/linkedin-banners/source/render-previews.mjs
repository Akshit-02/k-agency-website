// Renders preview-0N.html (1400x640) and contact-sheet.html (full height) at 2x into ../previews.
import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
const tab = await (await fetch("http://127.0.0.1:9333/json/new?about:blank", { method: "PUT" })).json();
const ws = new WebSocket(tab.webSocketDebuggerUrl); let id = 0; const p = {};
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && p[m.id]) { p[m.id](m.result); delete p[m.id]; } };
await new Promise((r) => (ws.onopen = r));
const send = (method, params = {}) => new Promise((r) => { const i = ++id; p[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const pages = readdirSync(".").filter((f) => /^(preview-\d\d|contact-sheet)\.html$/.test(f));
for (const f of pages) {
  const w = f.startsWith("contact") ? 1240 : 1400;
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: 640, deviceScaleFactor: 2, mobile: false });
  await send("Page.navigate", { url: "file://" + resolve(f) });
  await new Promise((r) => setTimeout(r, 2000));
  const h = (await send("Runtime.evaluate", { expression: "document.body.scrollHeight", returnByValue: true })).result.value;
  const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true, clip: { x: 0, y: 0, width: w, height: f.startsWith("contact") ? h : 640, scale: 1 } });
  const out = f.startsWith("contact") ? "kudozz-linkedin-banners-contact-sheet.png" : `kudozz-linkedin-banner-${f.slice(8, 10)}-preview.png`;
  writeFileSync(`../previews/${out}`, Buffer.from(shot.data, "base64"));
  console.log(out);
}
process.exit(0);

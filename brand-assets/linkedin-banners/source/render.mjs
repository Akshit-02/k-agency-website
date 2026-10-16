// Renders each banner HTML at 1128x191 CSS px with deviceScaleFactor 4 -> 4512x764 PNG master.
// Usage: start Chrome with --remote-debugging-port=9333, then: node render.mjs <outDir> [scale]
import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
const out = resolve(process.argv[2] ?? "../masters");
const scale = Number(process.argv[3] ?? 4);
const files = readdirSync(".").filter((f) => /^\d\d-.*\.html$/.test(f)).sort();
const tab = await (await fetch("http://127.0.0.1:9333/json/new?about:blank", { method: "PUT" })).json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
let id = 0; const pending = {};
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending[m.id]) { pending[m.id](m.result ?? m.error); delete pending[m.id]; } };
await new Promise((r) => (ws.onopen = r));
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
await send("Emulation.setDeviceMetricsOverride", { width: 1128, height: 191, deviceScaleFactor: scale, mobile: false });
for (const f of files) {
  await send("Page.navigate", { url: "file://" + resolve(f) });
  await new Promise((r) => setTimeout(r, 2500));
  const fonts = await send("Runtime.evaluate", { expression: "document.fonts.ready.then(()=>[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family).join(','))", awaitPromise: true, returnByValue: true });
  const shot = await send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: 1128, height: 191, scale: 1 } });
  const name = `kudozz-linkedin-banner-${f.replace(".html", "")}`;
  writeFileSync(`${out}/${name}-master.png`, Buffer.from(shot.data, "base64"));
  console.log(name, "fonts:", [...new Set(fonts.result.value.split(","))].join(","));
}
process.exit(0);

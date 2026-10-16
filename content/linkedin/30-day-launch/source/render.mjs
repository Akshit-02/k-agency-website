// Screenshots each source/html/*.html page at 1200x1200 into ../images/<name>.png.
// Start Chrome first: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --remote-debugging-port=9333 about:blank &
// Then, from this folder: python3 images.py && node render.mjs
import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
const dir = resolve("html");
const out = resolve("../images");
const files = readdirSync(dir).filter((f) => f.endsWith(".html")).sort();
const tab = await (await fetch("http://127.0.0.1:9333/json/new?about:blank", { method: "PUT" })).json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
let id = 0; const pending = {};
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending[m.id]) { pending[m.id](m.result ?? m.error); delete pending[m.id]; } };
await new Promise((r) => (ws.onopen = r));
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 1200, deviceScaleFactor: 1, mobile: false });
for (const f of files) {
  await send("Page.navigate", { url: "file://" + resolve(dir, f) });
  await new Promise((r) => setTimeout(r, 2500));
  const check = await send("Runtime.evaluate", {
    expression: `document.fonts.ready.then(()=>JSON.stringify({fonts:[...new Set([...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family))],overflow:document.querySelector('.foot').getBoundingClientRect().bottom>1200.5||document.querySelector('.c').scrollHeight>1200}))`,
    awaitPromise: true, returnByValue: true });
  const shot = await send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: 1200, height: 1200, scale: 1 } });
  writeFileSync(resolve(out, f.replace(".html", ".png")), Buffer.from(shot.data, "base64"));
  console.log(f, check.result.value);
}
process.exit(0);

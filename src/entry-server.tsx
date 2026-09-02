import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { PassThrough } from "node:stream";
import App from "./App.tsx";

// Rendered once per route at build time by scripts/prerender.mjs — never at request time.
// renderToPipeableStream (rather than renderToString) because the non-home routes are
// React.lazy: onAllReady waits for those chunks to resolve, whereas renderToString would
// emit the Suspense fallback and produce empty pages.
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const { pipe, abort } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          const sink = new PassThrough();
          sink.on("data", (c) => (html += c.toString()));
          sink.on("end", () => resolve(html));
          pipe(sink);
        },
        onError: reject,
      },
    );
    setTimeout(() => abort(), 15000);
  });
}

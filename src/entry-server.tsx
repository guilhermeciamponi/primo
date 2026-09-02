import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";

// Rendered once per route at build time by scripts/prerender.mjs — never at request time.
//
// renderToPipeableStream (rather than renderToString) because the non-home routes are
// React.lazy: onAllReady waits for those chunks to resolve, whereas renderToString would emit
// the Suspense fallback and produce empty pages.
//
// The sink below is hand-rolled rather than a `node:stream` PassThrough on purpose. Importing
// node:stream made this file impossible to bundle in any browser-targeted environment, and
// wrangler's Vite framework auto-setup does exactly that — it rebuilt this entry as client code,
// where node:stream is externalized, and the build died on `"PassThrough" is not exported by
// "__vite-browser-external"`. React only needs write/end/on from the destination, so giving it
// those directly keeps this entry free of Node built-ins.
type Sink = {
  write(chunk: unknown): boolean;
  end(): void;
  on(event: string, cb: () => void): void;
  destroy?(): void;
};

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: string[] = [];
    const sink: Sink = {
      write(chunk) {
        chunks.push(typeof chunk === "string" ? chunk : new TextDecoder().decode(chunk as Uint8Array));
        return true; // never apply backpressure, so React never waits on a "drain"
      },
      end() {
        resolve(chunks.join(""));
      },
      on(event, cb) {
        if (event === "error") errorCb = cb;
      },
      destroy() {},
    };
    let errorCb: (() => void) | undefined;
    void errorCb;

    const { pipe, abort } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(sink as unknown as NodeJS.WritableStream);
        },
        onError: reject,
      },
    );
    setTimeout(() => abort(), 15000);
  });
}

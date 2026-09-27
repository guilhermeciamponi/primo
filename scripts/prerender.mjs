// Prerender every route to static HTML after the client + SSR builds.
//
// Why: this is a client-rendered SPA, so the browser painted nothing until ~350 kB of
// JavaScript had downloaded and React had mounted — worth ~2.1s of "render delay" inside
// LCP that no amount of image or font work can touch. With the markup already in the HTML
// the hero paints on the first parse, and React hydrates the existing DOM afterwards.
//
// Run by `npm run build`. Nothing here executes at request time.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

// Titles live here rather than in each page's useEffect, so they are in the served HTML
// instead of being applied after hydration (crawlers and the browser tab both benefit).
const ROUTES = [
  { path: "/",            out: "index.html",             title: "Al Primo Piano · Italian Restaurant · Volendam" },
  { path: "/menu",        out: "menu/index.html",        title: "Al Primo Piano · Menu" },
  // noindex: a pagina repete o cardapio de /menu com fotos e nao esta ligada a nenhuma outra
  // pagina. Sem isto, um buscador a trata como um segundo cardapio e as duas competem entre si.
  { path: "/menu-photos", out: "menu-photos/index.html", title: "Al Primo Piano · Menu", noindex: true },
  { path: "/about",       out: "about/index.html",       title: "Al Primo Piano · About" },
  { path: "/gallery",     out: "gallery/index.html",     title: "Al Primo Piano · Gallery" },
  { path: "/contact",     out: "contact/index.html",     title: "Al Primo Piano · Contact" },
  { path: "/privacy",     out: "privacy/index.html",     title: "Al Primo Piano · Privacy & cookies" },
  // Pagina de erro de verdade. O Worker serve este arquivo com status 404 para qualquer
  // endereco sem arquivo (assets.not_found_handling no wrangler.jsonc). Antes ele devolvia a
  // home com status 200, entao um link errado num panfleto ou num QR nunca acusava nada e um
  // buscador guardava cada endereco inventado como copia da home.
  { path: "/404",         out: "404.html",               title: "Al Primo Piano · Page not found", noindex: true },
];

// pathToFileURL, not a bare path: ESM dynamic import of an absolute filesystem path is not
// portable across platforms, and this runs on the Cloudflare build image, not just macOS.
const { render } = await import(pathToFileURL(join(ROOT, "dist-ssr/entry-server.js")).href);
// Comments in index.html are notes for whoever maintains this site: which environment
// variable turns tracking on, why the fonts are local. They earn their place in the source
// and none at all on the wire, where they are shipped to every visitor of a restaurant in
// three languages, none of them written for. So the source keeps every word and the built
// pages carry none.
//
// Read left to right, one pass, because the two things being skipped can contain each other.
// A split on <script>...</script> first is what shipped a comment to production on 27/09: the
// comment being removed mentioned a script tag in its own prose, the splitter believed it, and
// the comment was cut in half so its opening never found its closing. Scanning in order cannot
// be fooled that way: whichever opens first wins, and the other is just text inside it.
//
// React's own hydration markers are inserted after this and are not touched by it.
const stripComments = (h) => {
  let out = "";
  let i = 0;
  while (i < h.length) {
    const comment = h.indexOf("<!--", i);
    const rel = h.slice(i).search(/<(?:script|style)\b/i);
    const tag = rel === -1 ? -1 : i + rel;

    if (comment === -1 && tag === -1) break;

    if (comment !== -1 && (tag === -1 || comment < tag)) {
      // A comment opens first. Drop it whole, whatever its text happens to mention.
      out += h.slice(i, comment);
      const end = h.indexOf("-->", comment + 4);
      if (end === -1) return out;          // unterminated: everything after it goes
      i = end + 3;
    } else {
      // A script or style opens first. Copy it out untouched, its own comments included.
      const name = /<(script|style)\b/i.exec(h.slice(tag))[1].toLowerCase();
      const close = h.toLowerCase().indexOf(`</${name}>`, tag);
      const stop = close === -1 ? h.length : close + name.length + 3;
      out += h.slice(i, stop);
      i = stop;
    }
  }
  return (out + h.slice(i)).replace(/\n[ \t]*\n[ \t]*\n+/g, "\n\n");
};

const template = stripComments(readFileSync(join(DIST, "index.html"), "utf-8"));

if (!template.includes('<div id="root"></div>')) {
  throw new Error("prerender: could not find an empty #root in dist/index.html");
}

let assetProblems = 0;
for (const route of ROUTES) {
  const markup = await render(route.path);
  // Stamped so the client can tell which route this markup belongs to. If a host serves the
  // wrong prerendered file for a URL (e.g. the SPA fallback for /menu), hydrating it would be
  // a mismatch and React would throw the markup away; main.tsx checks this and client-renders
  // instead, which is merely slower rather than broken.
  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerendered="${route.path}">${markup}</div>`,
  );
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  // Rotas marcadas noindex levam a etiqueta no HTML servido, e nao so depois que o JavaScript
  // roda: um buscador decide se indexa antes disso.
  if (route.noindex) {
    html = html.replace("</title>", '</title>\n    <meta name="robots" content="noindex, follow" />');
  }

  // Per-route canonical and og:url. The template carries the home URL, and copying the <head>
  // verbatim meant every inner page declared itself a duplicate of the home page — which tells a
  // search engine to drop five of the seven, and made every share of /menu/ show the home link.
  // The trailing slash matters: Cloudflare 307s /menu to /menu/, so the canonical has to name the
  // address that actually answers, or it points at a redirect.
  const canonical = `https://alprimopiano.nl${route.path === "/" ? "/" : route.path + "/"}`;
  html = html
    .replace(/(<link rel="canonical"[^>]*href=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`);

  // The SSR bundle is a separate Vite build, so its asset URLs are only usable if they hash
  // identically to the client build. Verify rather than assume: a silent mismatch would ship
  // a page full of broken images.
  for (const url of new Set([...html.matchAll(/\/assets\/[A-Za-z0-9_.-]+/g)].map((m) => m[0]))) {
    if (!existsSync(join(DIST, url))) {
      console.error(`  MISSING ASSET ${url}  (referenced by ${route.path})`);
      assetProblems++;
    }
  }

  const target = join(DIST, route.out);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  console.log(`  prerendered ${route.path.padEnd(14)} -> ${route.out.padEnd(22)} ${(markup.length / 1024).toFixed(0)} kB of markup`);
}

if (assetProblems) {
  throw new Error(`prerender: ${assetProblems} asset reference(s) do not exist in dist/`);
}
console.log(`  ${ROUTES.length} routes prerendered, all asset references resolve`);

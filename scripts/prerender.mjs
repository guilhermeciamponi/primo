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
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

// Titles live here rather than in each page's useEffect, so they are in the served HTML
// instead of being applied after hydration (crawlers and the browser tab both benefit).
const ROUTES = [
  { path: "/",            out: "index.html",             title: "Al Primo Piano · Italian Restaurant · Volendam" },
  { path: "/menu",        out: "menu/index.html",        title: "Al Primo Piano · Menu" },
  { path: "/menu-photos", out: "menu-photos/index.html", title: "Al Primo Piano · Menu" },
  { path: "/about",       out: "about/index.html",       title: "Al Primo Piano · About" },
  { path: "/gallery",     out: "gallery/index.html",     title: "Al Primo Piano · Gallery" },
  { path: "/contact",     out: "contact/index.html",     title: "Al Primo Piano · Contact" },
];

const { render } = await import(join(ROOT, "dist-ssr/entry-server.js"));
const template = readFileSync(join(DIST, "index.html"), "utf-8");

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

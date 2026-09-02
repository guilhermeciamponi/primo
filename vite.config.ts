import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// The hero is the LCP element, but it lives inside the React tree, so the browser cannot
// discover it while parsing HTML and starts the download ~2.4s late. Vite content-hashes the
// filename, so the preload link has to be written at build time from the emitted bundle.
function preloadHero() {
  return {
    name: "preload-hero",
    transformIndexHtml: {
      order: "post" as const,
      handler(html: string, ctx: { bundle?: Record<string, unknown> }) {
        const hero = Object.keys(ctx.bundle ?? {}).find((f) => /v2-hero-[^/]*\.webp$/.test(f));
        if (!hero) return html; // dev server, or the hero was renamed
        return {
          html,
          tags: [{
            tag: "link",
            attrs: { rel: "preload", as: "image", href: "/" + hero, fetchpriority: "high" },
            injectTo: "head" as const,
          }],
        };
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadHero()],
  server: {
    host: "::",
    // Dedicated port for Al Primo Piano — kept clear of other projects (e.g. the
    // nuvenhub site on 8080) so they never clash.
    port: 5188,
    // Fail loudly instead of drifting to another port when 5188 is already up.
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

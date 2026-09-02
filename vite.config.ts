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
        const names = Object.keys(ctx.bundle ?? {});
        const small = names.find((f) => /v2-hero-900-[^/]*\.webp$/.test(f));
        const large = names.find((f) => /v2-hero-(?!900-)[^/]*\.webp$/.test(f));
        if (!large) return html; // dev server, or the hero was renamed
        // imagesrcset, not href: a phone must preload the 900w file it will actually paint,
        // otherwise the preload fetches the 1600w one and the srcset choice arrives too late.
        const attrs: Record<string, string> = small
          ? { rel: "preload", as: "image", imagesrcset: `/${small} 900w, /${large} 1600w`, imagesizes: "100vw", fetchpriority: "high" }
          : { rel: "preload", as: "image", href: "/" + large, fetchpriority: "high" };
        return { html, tags: [{ tag: "link", attrs, injectTo: "head" as const }] };
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

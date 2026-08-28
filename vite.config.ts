import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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

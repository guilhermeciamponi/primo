import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const tree = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// The build prerenders every route to static HTML, so in production there is already markup
// to attach to and we hydrate it. createRoot would throw that markup away and re-render from
// scratch, which is exactly the render delay the prerender exists to remove. The dev server
// serves an empty #root, hence the fallback.
const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
const servedFor = root.dataset.prerendered;

if (root.hasChildNodes() && servedFor && norm(servedFor) === norm(window.location.pathname)) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}

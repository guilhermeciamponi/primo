import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import V2Menu from "./pages/versions/V2Menu";

// Only the home route is bundled eagerly — it is the landing page and the one Lighthouse
// measures. The rest are split out so their code is not downloaded before first paint.
const MenuPage = lazy(() => import("./pages/versions/v2/MenuPage"));
const AboutPage = lazy(() => import("./pages/versions/v2/AboutPage"));
const GalleryPage = lazy(() => import("./pages/versions/v2/GalleryPage"));
const ContactPage = lazy(() => import("./pages/versions/v2/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Routes only — no router. The client wraps this in a BrowserRouter (main.tsx) and the
// prerenderer wraps it in a StaticRouter (entry-server.tsx), so both render the same tree.
//
// The react-query provider, both toasters and the tooltip provider that used to wrap this
// tree came from the original scaffold and were never used by any component — no useQuery,
// no toast(), no Tooltip anywhere — so they only added JavaScript to the critical path.
const App = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<V2Menu />} />
      <Route path="/v2" element={<V2Menu />} />
      {/* /menu = text menu (launch-ready, no photos yet); /menu-photos = with dish photos */}
      <Route path="/menu" element={<MenuPage withPhotos={false} />} />
      <Route path="/menu-photos" element={<MenuPage withPhotos={true} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default App;

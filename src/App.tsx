import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import V2Menu from "./pages/versions/V2Menu";

// Only the home route is bundled eagerly — it is the landing page and the one Lighthouse
// measures. The rest are split out so their code is not downloaded before first paint.
const loadMenu = () => import("./pages/versions/v2/MenuPage");
const loadAbout = () => import("./pages/versions/v2/AboutPage");
const loadGallery = () => import("./pages/versions/v2/GalleryPage");
const loadContact = () => import("./pages/versions/v2/ContactPage");

const MenuPage = lazy(loadMenu);
const AboutPage = lazy(loadAbout);
const GalleryPage = lazy(loadGallery);
const ContactPage = lazy(loadContact);
const NotFound = lazy(() => import("./pages/NotFound"));

// Splitting the routes cost something visible: the first click on Menu or Contact blanked the
// whole page for a moment while its chunk downloaded, because every page renders its own header
// and footer, so an empty Suspense fallback empties the screen. Fetching the chunks once the
// browser is idle means they are already cached by the time anyone clicks. This runs after
// first paint, so it costs the landing page nothing.
function usePrefetchRoutes() {
  useEffect(() => {
    const idle: (cb: () => void) => unknown =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ??
      ((cb) => window.setTimeout(cb, 1200));
    idle(() => {
      void loadMenu();
      void loadAbout();
      void loadGallery();
      void loadContact();
    });
  }, []);
}

// Shown only if someone clicks before the prefetch has finished. Painting the page's own cream
// rather than nothing keeps it from flashing to a bare white screen.
const RouteFallback = () => <div className="min-h-screen bg-[#f7f0e0]" />;

// Routes only — no router. The client wraps this in a BrowserRouter (main.tsx) and the
// prerenderer wraps it in a StaticRouter (entry-server.tsx), so both render the same tree.
//
// The react-query provider, both toasters and the tooltip provider that used to wrap this
// tree came from the original scaffold and were never used by any component — no useQuery,
// no toast(), no Tooltip anywhere — so they only added JavaScript to the critical path.
const App = () => {
  usePrefetchRoutes();
  return (
    <Suspense fallback={<RouteFallback />}>
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
};

export default App;

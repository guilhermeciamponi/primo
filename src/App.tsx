import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import V2Menu from "./pages/versions/V2Menu";
import MenuPage from "./pages/versions/v2/MenuPage";
import AboutPage from "./pages/versions/v2/AboutPage";
import GalleryPage from "./pages/versions/v2/GalleryPage";
import ContactPage from "./pages/versions/v2/ContactPage";

const queryClient = new QueryClient();

// The v2 "Il Menu" design is the live site. Home + full Menu/About/Gallery/Contact
// pages share one header/footer. No promotions section.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

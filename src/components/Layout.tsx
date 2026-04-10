import Header from "./Header";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pb-16 lg:pb-0">{children}</main>
    <Footer />
    <StickyMobileCTA />
  </div>
);

export default Layout;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
import Stories from "./pages/Stories";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <a className="site-skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" className="site-main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}

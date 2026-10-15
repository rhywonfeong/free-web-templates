import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Career from './pages/Career';
import CareerDetail from './pages/CareerDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import CookiesPage from './pages/CookiesPage';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work-detail" element={<WorkDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career-detail" element={<CareerDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default App;
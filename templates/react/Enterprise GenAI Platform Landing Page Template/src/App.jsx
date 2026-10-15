import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage'; // Used for stubs to show routing

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd] selection:bg-[#4862ff] selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-20"> {/* pt-20 to account for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosistema" element={<GenericPage title="Ecosistema" />} />
          <Route path="/platform" element={<GenericPage title="Platform" />} />
          <Route path="/soluciones" element={<GenericPage title="Soluciones" />} />
          <Route path="/casos-de-uso" element={<GenericPage title="Casos de Uso" />} />
          <Route path="/recursos" element={<GenericPage title="Recursos" />} />
          <Route path="/pricing" element={<GenericPage title="Pricing" />} />
          <Route path="/contacto" element={<GenericPage title="Contacto" />} />
          <Route path="/login" element={<GenericPage title="Login / Registro" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
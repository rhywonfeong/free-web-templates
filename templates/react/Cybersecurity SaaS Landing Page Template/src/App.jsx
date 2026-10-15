import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';

function UnicornBackground() {
  useEffect(() => {
    // Natively load the Unicorn Studio script to avoid undeclared npm dependencies
    if (!document.querySelector('script[src="https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js';
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio) {
          window.UnicornStudio.init();
        }
      };
      document.body.appendChild(script);
    } else if (window.UnicornStudio) {
      window.UnicornStudio.init();
    }
  }, []);

  return (
    <div
      className="aura-background-component fixed top-0 w-full h-screen -z-10"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
      }}
    >
      <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
        <div data-us-project="EET25BiXxR2StNXZvAzF" className="absolute w-full h-full left-0 top-0 -z-10"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <UnicornBackground />
      <div className="min-h-screen bg-[#05070A]/80 bg-grid-pattern relative">
        {/* Persistent Background Vertical Guide Lines */}
        <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-8 lg:px-24 max-w-[1600px] mx-auto opacity-20">
          <div className="w-px h-full bg-white/20"></div>
          <div className="w-px h-full bg-white/20"></div>
          <div className="w-px h-full bg-white/20 hidden md:block"></div>
          <div className="w-px h-full bg-white/20 hidden lg:block"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Landing />} />
              {/* Fallback route acts as single page for this demo */}
              <Route path="*" element={<Landing />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
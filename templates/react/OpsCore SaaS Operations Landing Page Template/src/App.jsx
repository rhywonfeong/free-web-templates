import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] bg-grid-pattern relative selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Persistent Background Vertical Guide Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-8 lg:px-24 max-w-[1600px] mx-auto opacity-10">
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
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
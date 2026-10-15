import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#fdfbf7] font-sans antialiased selection:bg-[#C5A059]/30 selection:text-white flex flex-col overflow-x-hidden">
      {/* Dim the animated background to maintain the dark luxury aesthetic */}
      <div className="opacity-20 pointer-events-none">
        <AnimatedBackground />
      </div>
      <Header />
      <div className="flex-1 flex flex-col relative z-10">
        {children}
      </div>
      <Footer />
    </div>
  );
}
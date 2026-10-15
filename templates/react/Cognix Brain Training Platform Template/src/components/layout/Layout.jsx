import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WebGLBackground from '../WebGLBackground';

export default function Layout({ children }) {
  return (
    <>
      <WebGLBackground />
      
      {/* Background Overlays */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none mix-blend-overlay opacity-30" 
        style={{
          backgroundImage: `
            radial-gradient(circle at center, transparent 0%, #000 100%), 
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px), 
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)
          `
        }}
      />
      
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1A0B40] blur-[120px] -z-10 opacity-60 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0F1E5C] blur-[150px] -z-10 opacity-50 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 border-x border-white/5 min-h-screen flex flex-col">
        
        {/* Decorative corner and guide lines */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02] -z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/[0.02] -z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-white/[0.02] -z-10 pointer-events-none"></div>

        <Navbar />
        
        <main className="flex-1 w-full">
          {children}
        </main>
        
        <Footer />
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
      </div>
    </>
  );
}
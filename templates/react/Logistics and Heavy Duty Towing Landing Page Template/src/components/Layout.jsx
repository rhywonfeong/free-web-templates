import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-gray-300 relative">
      <div className="noise-overlay"></div>
      <Navbar />
      
      <main className="flex-grow z-10 w-full pt-20">
        <Outlet />
      </main>
      
      <Footer />

      {/* Persistent Industrial Status Bar */}
      <div className="fixed bottom-0 left-0 w-full h-8 bg-[#121212] border-t border-[#2A2A2A] z-50 flex items-center justify-between px-6 font-mono text-[10px] uppercase tracking-widest text-gray-500 hidden md:flex">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
            SYS.ONLINE
          </span>
          <span>NET.STATUS: NOMINAL</span>
        </div>
        <div className="flex items-center gap-4 text-[#FF3C00]">
          <span>FLEET TRACKING: ACTIVE</span>
          <span>DISPATCH 24/7 [REQ: TRUE]</span>
        </div>
      </div>
    </div>
  );
}
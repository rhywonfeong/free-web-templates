import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function GridSystemLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isPricing = location.pathname === '/pricing';

  return (
    <div className="min-h-screen bg-transparent flex flex-col relative overflow-x-hidden w-full font-sans text-white">
      
      {/* Global Background Grid & Number Details (01, 02, 03) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center max-w-[1360px] mx-auto w-full border-x border-white/5">
        {/* Left Rail */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.03]" />
        
        {/* Center Rail */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.02] -translate-x-1/2 hidden md:block">
          <div className="absolute top-[50vh] left-4 text-[10px] text-white/20 animate-fade-in stagger-4 font-geist tracking-tight">
            02
          </div>
        </div>
        
        {/* Right Rail */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/[0.03]" />
      </div>

      {/* Global Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05080A]/80 backdrop-blur-md">
        <div className="max-w-[1360px] mx-auto w-full px-6 h-16 flex items-center justify-between relative">
          <div className="flex items-center gap-2 animate-blur-in stagger-1">
            <Link to="/" className="flex items-center gap-2 group">
              <iconify-icon icon="solar:layers-minimalistic-linear" class="text-xl text-[#c6f91f] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-geist tracking-tight font-medium text-white group-hover:text-[#c6f91f] transition-colors">Lumimotion</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/library" className={`text-xs transition-colors animate-blur-in stagger-2 font-geist tracking-tight ${location.pathname.includes('/library') ? 'text-white' : 'text-white/50 hover:text-white'}`}>
              Library
            </Link>
            <Link to="/pricing" className={`text-xs transition-colors animate-blur-in stagger-3 font-geist tracking-tight ${isPricing ? 'text-white' : 'text-white/50 hover:text-white'}`}>
              Pricing
            </Link>
            <Link to="/unlock" className="text-xs text-black bg-[#c6f91f] px-4 py-1.5 hover:bg-[#aade17] transition-colors animate-blur-in stagger-4 font-geist tracking-tight font-medium shadow-[0_0_15px_rgba(198,249,31,0.2)]">
              Unlock All
            </Link>
          </div>
          
          {/* Nav Dots */}
          <div className="absolute -bottom-[2px] -left-[2px] w-[3px] h-[3px] bg-white/20 rounded-full animate-fade-in stagger-5" />
          <div className="absolute -bottom-[2px] -right-[2px] w-[3px] h-[3px] bg-white/20 rounded-full animate-fade-in stagger-5" />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1360px] mx-auto w-full relative z-10">
        <Outlet />
      </main>
    </div>
  )
}
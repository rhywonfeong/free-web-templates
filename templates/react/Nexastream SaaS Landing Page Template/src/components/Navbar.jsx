import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex text-white bg-gradient-to-br from-sky-500 to-blue-600 w-8 h-8 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.4)] items-center justify-center">
          <iconify-icon icon="solar:box-bold-duotone" width="20" height="20" style={{ color: '#ffffff' }}></iconify-icon>
        </div>
      </div>

      {/* Desktop Menu */}
      <div 
        className="hidden shadow-black/20 md:flex bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-1 pb-1 pl-1 shadow-lg backdrop-blur-md gap-x-1 gap-y-1 items-center" 
        style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
      >
        <a 
          href="#" 
          className="transition-all text-sm font-medium text-white bg-white/10 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm" 
          style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' }}
        >
          Platform
        </a>
        <a href="#" className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors">Solutions</a>
        <a href="#" className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors">Developers</a>
        <a href="#" className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors">Company</a>
      </div>

      {/* CTA */}
      <button 
        className="hidden sm:flex hover:from-blue-500 hover:to-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all text-sm font-medium text-white bg-gradient-to-b from-blue-600 to-blue-700 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0px_0px_0px_1px_rgba(37,99,235,1),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-sm gap-x-2 gap-y-x-2 items-center" 
        style={{ position: 'relative', '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px' }}
      >
        <span className="text-sm font-medium text-white tracking-tight">Sign In</span>
        <iconify-icon icon="lucide:arrow-right" className="text-blue-100" width="16" height="16"></iconify-icon>
      </button>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-zinc-400 hover:text-white">
        <iconify-icon icon="lucide:menu" width="24" height="24"></iconify-icon>
      </button>
    </nav>
  );
};

export default Navbar;
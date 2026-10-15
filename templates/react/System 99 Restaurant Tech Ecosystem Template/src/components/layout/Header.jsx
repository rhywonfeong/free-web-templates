import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5">
      <div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-100">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d58d915-84da-4502-a0e1-23b44f161d1d_320w.png" 
            alt="Logo placeholder" 
            className="w-20 h-20 object-cover shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            style={{ maskImage: "linear-gradient(0deg, transparent, black 0%, black 100%, transparent)", WebkitMaskImage: "linear-gradient(0deg, transparent, black 0%, black 100%, transparent)" }}
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#problem" className="hover:text-zinc-100 transition-colors">Analiza</a>
          <a href="#solution" className="hover:text-zinc-100 transition-colors">Rozwiązanie</a>
          <a href="#prototype" className="hover:text-zinc-100 transition-colors">Prototyp</a>
          <a href="#investment" className="hover:text-zinc-100 transition-colors">Inwestycja</a>
          <a href="#roi" className="text-red-400 hover:text-red-300 transition-colors">Kalkulacja ROI</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
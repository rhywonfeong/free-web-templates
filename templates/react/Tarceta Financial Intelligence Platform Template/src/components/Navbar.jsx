import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-[#050505]/80 backdrop-blur-md border-white/5">
      <div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="block">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/b2493348-dff7-4746-b3f9-cc8d6013df44/49260d64-eda2-4520-a408-41e5cd511cfc-Tlogo.svg?v=1776099261643" 
              alt="Tarceta" 
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="transition-colors hover:text-white">Avaleht</a>
          <a href="#" className="transition-colors hover:text-white">Lahendused</a>
          <a href="#" className="transition-colors hover:text-white">Kliendid ja partnerid</a>
          <a href="#" className="transition-colors hover:text-white">Meist</a>
        </div>

        <button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]">
          Võta ühendust
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0F0F0F]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#E1B552]/50 transition-colors duration-300">
             <iconify-icon icon="solar:chart-square-bold-duotone" width="20" height="20" style={{ color: '#E1B552' }}></iconify-icon>
          </div>
          <span className="font-semibold tracking-tight text-lg text-white">HasFiyat</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Özellikler</a>
          <a href="#docs" className="hover:text-white transition-colors">Dokümantasyon</a>
          <a href="#pricing" className="hover:text-white transition-colors">Fiyatlandırma</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block"
          >
            Giriş Yap
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-[#E1B552] text-[#000000] font-semibold px-4 py-2 rounded-lg text-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(225,181,82,0.3)] transition-all duration-300"
          >
            API Anahtarını Al
          </button>
        </div>
      </div>
    </header>
  );
}
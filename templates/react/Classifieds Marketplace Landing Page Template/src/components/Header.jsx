import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#D8DAE0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo & Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-[#DF3333] flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <iconify-icon icon="solar:shop-2-bold" width="20"></iconify-icon>
            </div>
            <span className="font-semibold text-[#18181A] tracking-tight hidden md:block">Feira do Rolo</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/search" className="text-sm font-normal text-[#58585E] hover:text-[#18181A] transition-colors">Anúncios</Link>
            <Link to="/categories" className="text-sm font-normal text-[#58585E] hover:text-[#18181A] transition-colors">Categorias</Link>
            <Link to="/stores" className="text-sm font-normal text-[#58585E] hover:text-[#18181A] transition-colors">Lojas</Link>
            <Link to="/contact" className="text-sm font-normal text-[#58585E] hover:text-[#18181A] transition-colors">Contato</Link>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="flex items-center gap-1.5 text-sm font-medium text-[#18181A] hover:opacity-70 transition-opacity">
            <iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
            <span className="hidden sm:block">Entrar</span>
          </Link>
          <button className="flex items-center gap-1.5 bg-[#DF3333] hover:bg-[#c22b2b] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
            <iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
            <span className="hidden sm:block">Anunciar grátis</span>
          </button>
        </div>

      </div>
    </header>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#232323] pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[#3a3a3a] pb-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#232323]">
            <iconify-icon icon="solar:shop-2-bold" width="20"></iconify-icon>
          </div>
          <span className="font-semibold text-white tracking-tight">Feira do Rolo</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-6">
          <Link to="/search" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Anúncios</Link>
          <Link to="/categories" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Categorias</Link>
          <Link to="/stores" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Lojas</Link>
          <Link to="/contact" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Contato</Link>
        </nav>

        {/* Actions & Social */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white px-6 py-2 rounded-full text-sm font-normal transition-colors w-full sm:w-auto">
            <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
            Vender no Feira do Rolo
          </button>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center text-white hover:bg-[#DF3333] transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="14"></iconify-icon>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center text-white hover:bg-[#DF3333] transition-colors">
              <iconify-icon icon="simple-icons:youtube" width="14"></iconify-icon>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center text-white hover:bg-[#DF3333] transition-colors">
              <iconify-icon icon="simple-icons:tiktok" width="14"></iconify-icon>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center text-white hover:bg-[#DF3333] transition-colors">
              <iconify-icon icon="simple-icons:facebook" width="14"></iconify-icon>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 text-center">
        <p className="text-xs font-light text-gray-400">
          © Bom Negócio Atividades de Internet Ltda. - Rua do Catete, 359, Flamengo – 22220-001 – Rio de Janeiro, RJ
        </p>
      </div>
    </footer>
  );
}
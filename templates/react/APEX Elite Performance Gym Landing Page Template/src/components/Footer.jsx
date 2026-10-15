import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#100F0F] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link to="/" className="text-3xl font-black tracking-tighter flex items-center gap-1" onClick={() => window.scrollTo(0,0)}>
          <span className="text-white">AP</span>
          <span className="text-[#C8F135]">EX</span>
        </Link>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
          <a href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')} className="hover:text-white transition-colors">Quem Somos</a>
          <a href="#planos" onClick={(e) => scrollToSection(e, '#planos')} className="hover:text-white transition-colors">Planos</a>
          <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')} className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2025 APEX Performance. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white"><iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon></a>
          <a href="#" className="hover:text-white"><iconify-icon icon="simple-icons:tiktok" width="20"></iconify-icon></a>
          <a href="#" className="hover:text-white"><iconify-icon icon="simple-icons:youtube" width="20"></iconify-icon></a>
        </div>
      </div>
    </footer>
  );
}
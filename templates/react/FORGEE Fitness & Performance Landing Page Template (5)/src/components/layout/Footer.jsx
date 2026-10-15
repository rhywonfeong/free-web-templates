import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2C2C2C] pt-20 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 text-white font-display font-bold text-3xl tracking-tighter uppercase mb-4">
              <iconify-icon icon="solar:fire-bold" style={{ color: '#F46A17' }}></iconify-icon>
              FORGEE
            </div>
            <p className="text-[#888888] text-sm font-semibold tracking-widest uppercase">
              BEYOND LIMITS KNOWN™
            </p>
          </div>

          {/* Links Col */}
          <div className="flex flex-col gap-4">
            {['ESPAÇO', 'PROGRAMAS', 'EQUIPE', 'PLANOS'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[#CCCCCC] hover:text-white text-sm font-semibold tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Legal & Social Col */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[#CCCCCC] hover:text-white text-sm font-semibold tracking-widest transition-colors">POLÍTICA DE PRIVACIDADE</a>
              <a href="#" className="text-[#CCCCCC] hover:text-white text-sm font-semibold tracking-widest transition-colors">TERMOS DE USO</a>
            </div>
            <div className="flex items-center gap-4 text-xl text-[#888888]">
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:youtube"></iconify-icon></a>
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:tiktok"></iconify-icon></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#888888] font-medium tracking-wide">
          <span>FORGEE ACADEMIA LTDA.</span>
          <span>CNPJ 00.000.000/0001-00</span>
          <span>CREF-SP</span>
          <span>DESIGN SYSTEM © 2026</span>
        </div>
      </div>
    </footer>
  );
}
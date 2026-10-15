import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2E2E2E] pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-black tracking-tighter mb-2">FORGEE</h2>
            <p className="text-neutral-400 tracking-widest text-sm mb-8">BEYOND LIMITS KNOWN™</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#2E2E2E] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                <iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#2E2E2E] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                <iconify-icon icon="simple-icons:whatsapp" width="18"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-6">ACADEMIA</h4>
            <ul className="flex flex-col gap-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-[#E02020] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-6">LEGAL & REDES</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2E2E2E] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 tracking-widest">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>
      </div>

      {/* Massive blurred background text in footer to mirror hero */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center text-[18vw] font-black text-white/5 blur-[8px] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
        DISCIPLINE
      </div>
    </footer>
  );
};

export default Footer;
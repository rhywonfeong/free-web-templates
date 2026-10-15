import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] pt-20 pb-8 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-display text-3xl tracking-widest text-white block mb-2">
              FORGEE
            </Link>
            <p className="text-[#E8400A] text-[11px] uppercase tracking-[0.2em] font-medium mb-6">
              Beyond Limits Known™
            </p>
            <p className="text-[#6B6B6B] text-[13px] max-w-sm">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.14em] font-medium mb-6">Academia</h4>
            <ul className="flex flex-col gap-3">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#B0B0B0] text-[13px] hover:text-[#E8400A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.14em] font-medium mb-6">Legal & Redes</h4>
            <ul className="flex flex-col gap-3 mb-6">
              <li><a href="#" className="text-[#B0B0B0] text-[13px] hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-[#B0B0B0] text-[13px] hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="text-[#6B6B6B] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:instagram" style={{ fontSize: '20px' }}></iconify-icon>
              </a>
              <a href="#" className="text-[#6B6B6B] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" style={{ fontSize: '20px' }}></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B6B6B] text-[11px]">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex">
            <iconify-icon icon="solar:dumbbell-large-minimalistic-bold" class="text-[#E8280D] text-3xl"></iconify-icon>
            <span className="font-display font-black text-3xl tracking-widest uppercase">Forgee</span>
          </Link>
          <p className="text-neutral-400 font-medium tracking-widest uppercase text-xs mb-6">
            Beyond Limits Known™
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl text-neutral-400 hover:text-white hover:bg-[#E8280D] transition-all">
              <iconify-icon icon="simple-icons:instagram"></iconify-icon>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl text-neutral-400 hover:text-white hover:bg-[#E8280D] transition-all">
              <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-widest text-lg mb-6">Navegação</h4>
          <ul className="flex flex-col gap-3">
            {['Academia', 'Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-[#E8280D] transition-colors uppercase text-sm tracking-wider">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-widest text-lg mb-6">Legal</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Política de Privacidade</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Termos de Uso</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Regulamento Interno</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-widest text-lg mb-6">Contato</h4>
          <ul className="flex flex-col gap-3 text-sm text-neutral-400">
            <li className="flex items-start gap-3">
              <iconify-icon icon="solar:map-point-bold" class="text-[#E8280D] text-xl shrink-0"></iconify-icon>
              <span>Rua das Esmeraldas, 742<br/>Indaiatuba, SP</span>
            </li>
            <li className="flex items-center gap-3">
              <iconify-icon icon="solar:phone-bold" class="text-[#E8280D] text-xl"></iconify-icon>
              <span>(19) 98234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <iconify-icon icon="solar:letter-bold" class="text-[#E8280D] text-xl"></iconify-icon>
              <span>contato@forgee.academy</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
        <p>BLK DESIGN SYSTEM © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
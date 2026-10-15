import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:fire-bold" class="text-3xl text-[#E53935]"></iconify-icon>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-[0.1em] uppercase leading-none">Forgee</span>
                <span className="text-[#888888] text-xs uppercase tracking-widest mt-1">Beyond Limits Known™</span>
              </div>
            </Link>
            <p className="text-[#AAAAAA] text-sm max-w-sm mb-6">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#AAAAAA] hover:text-white hover:bg-[#2A2A2A] transition-colors">
                <iconify-icon icon="simple-icons:instagram" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#AAAAAA] hover:text-white hover:bg-[#2A2A2A] transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" class="text-lg"></iconify-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Academia</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#espaco" className="text-[#AAAAAA] hover:text-white text-sm transition-colors">Espaço</a></li>
              <li><a href="#programas" className="text-[#AAAAAA] hover:text-white text-sm transition-colors">Programas</a></li>
              <li><a href="#equipe" className="text-[#AAAAAA] hover:text-white text-sm transition-colors">Equipe</a></li>
              <li><a href="#planos" className="text-[#AAAAAA] hover:text-white text-sm transition-colors">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Legal & Contato</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-[#AAAAAA] hover:text-white text-sm transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/" className="text-[#AAAAAA] hover:text-white text-sm transition-colors">Termos de Uso</Link></li>
              <li className="mt-4 text-[#AAAAAA] text-sm flex items-center gap-2">
                <iconify-icon icon="solar:letter-linear"></iconify-icon>
                contato@forgee.academy
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555555] text-xs">
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
          </p>
          <p className="text-[#555555] text-xs">
            DESIGN SYSTEM © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
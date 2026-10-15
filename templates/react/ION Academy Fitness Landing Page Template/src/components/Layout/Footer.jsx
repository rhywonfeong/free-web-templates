import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-4xl font-display font-bold tracking-tighter text-brand-green uppercase mb-2 block">
              ION
            </Link>
            <p className="text-neutral-400 text-xs font-semibold tracking-widest uppercase">
              B E Y O N D L I M I T S K N O W N ™
            </p>
          </div>

          <div>
            <h4 className="text-neutral-50 font-semibold tracking-tight uppercase mb-6">Academia</h4>
            <ul className="flex flex-col gap-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-brand-green text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-50 font-semibold tracking-tight uppercase mb-6">Legal & Redes</h4>
            <ul className="flex flex-col gap-4">
              {['Política de Privacidade', 'Termos de Uso'].map(item => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-brand-green text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-4">
                <a href="#" className="text-neutral-400 hover:text-brand-green transition-colors">
                  <iconify-icon icon="simple-icons:instagram" width="24"></iconify-icon>
                </a>
                <a href="#" className="text-neutral-400 hover:text-brand-green transition-colors">
                  <iconify-icon icon="simple-icons:whatsapp" width="24"></iconify-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center md:text-left">
            ION ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
          </p>
          <p className="text-neutral-600 text-xs text-center md:text-right font-semibold">
            DESIGN SYSTEM © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
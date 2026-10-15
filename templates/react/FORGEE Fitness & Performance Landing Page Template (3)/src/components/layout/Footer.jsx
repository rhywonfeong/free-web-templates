import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base border-t border-subtle pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl font-semibold tracking-tight">FORGEE</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888780]">
              Beyond Limits Known™
            </p>
            <p className="text-[#888780] text-sm leading-relaxed max-w-xs mt-4">
              Academia fundada em 2018<br />
              com foco em resultado real.<br />
              Indaiatuba, SP.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold text-white">Academia</h4>
            <nav className="flex flex-col gap-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#888780] hover:text-[#BFFF00] text-sm transition-colors w-fit">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Links Col 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold text-white">Legal & Redes</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/privacidade" className="text-[#888780] hover:text-[#BFFF00] text-sm transition-colors w-fit">Política de Privacidade</Link>
              <Link to="/termos" className="text-[#888780] hover:text-[#BFFF00] text-sm transition-colors w-fit">Termos de Uso</Link>
              <a href="#" className="text-[#888780] hover:text-[#BFFF00] text-sm transition-colors w-fit flex items-center gap-2 mt-4">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                @forgee.academy
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-subtle pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#888780] text-xs">
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
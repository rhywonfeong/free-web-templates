import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#FFF8F1] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-black uppercase tracking-tighter text-[#FFF8F1] flex items-center gap-2 mb-4">
              <iconify-icon icon="solar:dumbbell-large-bold" width="32" style={{ color: '#FF8000' }}></iconify-icon>
              APEX CLUB
            </Link>
            <p className="text-[#9E9488] font-medium text-sm">
              Performance. Método. Resultado.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-[#FF8000] text-xs font-bold uppercase tracking-[0.08em] mb-6">Academia</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#9E9488]">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#coaches" className="hover:text-white transition-colors">Nossa Equipe</a></li>
              <li><a href="#estrutura" className="hover:text-white transition-colors">Estrutura</a></li>
              <li><a href="#protocolo" className="hover:text-white transition-colors">Metodologia</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-[#FF8000] text-xs font-bold uppercase tracking-[0.08em] mb-6">Planos</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#9E9488]">
              <li><a href="#planos" className="hover:text-white transition-colors">Livre</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Plus</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Elite</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Comparar Planos</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-[#FF8000] text-xs font-bold uppercase tracking-[0.08em] mb-6">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#9E9488]">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:phone-bold"></iconify-icon> WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:letter-bold"></iconify-icon> E-mail</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="solar:map-point-bold"></iconify-icon> Localização</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#9E9488]">
          <div className="text-center md:text-left">
            <p>© 2025 APEX CLUB · Todos os direitos reservados</p>
            <p className="mt-1">CNPJ 00.000.000/0001-00 · Av. Brigadeiro Faria Lima, 4440 — São Paulo, SP</p>
          </div>
          <div className="flex items-center gap-4 text-lg text-white">
            <a href="#" className="hover:text-[#FF8000] transition-colors"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
            <a href="#" className="hover:text-[#FF8000] transition-colors"><iconify-icon icon="simple-icons:youtube"></iconify-icon></a>
            <a href="#" className="hover:text-[#FF8000] transition-colors"><iconify-icon icon="simple-icons:tiktok"></iconify-icon></a>
            <a href="#" className="hover:text-[#FF8000] transition-colors"><iconify-icon icon="simple-icons:whatsapp"></iconify-icon></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
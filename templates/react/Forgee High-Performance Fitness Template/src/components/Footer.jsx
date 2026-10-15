import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F0D0B] text-white pt-24 pb-8 px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 - Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <iconify-icon icon="solar:bolt-circle-bold" width="32" class="text-[#E84E0F]" />
              <span className="font-display font-black text-3xl uppercase tracking-tight">
                Forgee
              </span>
            </Link>
            <p className="font-accent text-[#B0AAA4] text-xs tracking-widest uppercase">
              Beyond Limits Known™
            </p>
            <div className="text-[#8A837C] text-sm space-y-1">
              <p>Av. Brigadeiro Faria Lima, 3.900 — 4º andar</p>
              <p>Itaim Bibi · São Paulo — SP</p>
            </div>
            <div className="text-[#E6E3E0] text-sm space-y-1">
              <p>(11) 99999-0000</p>
              <p>membros@forgeeperformance.com.br</p>
            </div>
          </div>

          {/* Col 2 - Nav */}
          <div>
            <h4 className="font-accent text-[11px] tracking-[2px] uppercase text-[#8A837C] mb-6">Navegação</h4>
            <ul className="space-y-3">
              {['Quem Somos', 'Protocolo', 'Equipamentos', 'Planos', 'Coaches', 'Localização'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#E6E3E0] hover:text-[#E84E0F] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Access */}
          <div>
            <h4 className="font-accent text-[11px] tracking-[2px] uppercase text-[#8A837C] mb-6">Acesso Rápido</h4>
            <ul className="space-y-3">
              {['Agendar Visita', 'Falar com Especialista', 'Login no App Forgee', 'Política de Privacidade', 'Termos de Uso'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#E6E3E0] hover:text-[#E84E0F] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Social */}
          <div>
            <h4 className="font-accent text-[11px] tracking-[2px] uppercase text-[#8A837C] mb-6">Redes Sociais</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-[#E6E3E0] hover:text-[#E84E0F] text-sm transition-colors group">
                  <iconify-icon icon="simple-icons:instagram" width="18" />
                  <span>@forgeeperformance</span>
                  <iconify-icon icon="solar:arrow-right-linear" class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[#E6E3E0] hover:text-[#E84E0F] text-sm transition-colors group">
                  <iconify-icon icon="simple-icons:youtube" width="18" />
                  <span>Forgee Performance</span>
                  <iconify-icon icon="solar:arrow-right-linear" class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[#E6E3E0] hover:text-[#E84E0F] text-sm transition-colors group">
                  <iconify-icon icon="simple-icons:spotify" width="18" />
                  <span>Playlist Forgee Training</span>
                  <iconify-icon icon="solar:arrow-right-linear" class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1E1B18] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#4A4540]">
          <p>© 2024 Forgee Performance. Todos os direitos reservados.</p>
          <p className="font-accent tracking-widest">CNPJ 00.000.000/0001-00 · CREF: 000000-G/SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
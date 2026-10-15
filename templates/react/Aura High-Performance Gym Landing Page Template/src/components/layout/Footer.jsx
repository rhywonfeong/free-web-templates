import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-8 border-t border-[#252525]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:bolt-bold" class="text-[#AAFF00] text-4xl"></iconify-icon>
              <span className="font-display font-black text-4xl tracking-wider text-white uppercase">Aura</span>
            </div>
            <p className="text-[#CCCCCC] max-w-sm font-display text-xl uppercase tracking-wide leading-tight mb-8">
              "Corpos extraordinários não são construídos por sorte. São construídos por método, disciplina e o ambiente certo. Bem-vindo ao ambiente certo."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#AAFF00] hover:text-[#0D0F0A] transition-colors">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#AAFF00] hover:text-[#0D0F0A] transition-colors">
                <iconify-icon icon="simple-icons:tiktok"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#AAFF00] hover:text-[#0D0F0A] transition-colors">
                <iconify-icon icon="simple-icons:youtube"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-widest text-white mb-6">Navegação</h4>
            <ul className="flex flex-col gap-4 text-[#CCCCCC]">
              <li><a href="#sobre" className="hover:text-[#AAFF00] transition-colors">Quem Somos</a></li>
              <li><a href="#estrutura" className="hover:text-[#AAFF00] transition-colors">Estrutura</a></li>
              <li><a href="#protocolo" className="hover:text-[#AAFF00] transition-colors">Metodologia</a></li>
              <li><a href="#planos" className="hover:text-[#AAFF00] transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-widest text-white mb-6">Contato</h4>
            <ul className="flex flex-col gap-4 text-[#CCCCCC]">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:map-point-linear" class="text-[#AAFF00] text-xl shrink-0 mt-1"></iconify-icon>
                <span>Rua Fictícia, 1234 — Vila Olímpia<br/>São Paulo — SP | 00000-000</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-linear" class="text-[#AAFF00] text-xl shrink-0"></iconify-icon>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-linear" class="text-[#AAFF00] text-xl shrink-0"></iconify-icon>
                <span>contato@aurafitness.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1A1A] text-sm text-[#666666]">
          <p>© {new Date().getFullYear()} Aura Fitness. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
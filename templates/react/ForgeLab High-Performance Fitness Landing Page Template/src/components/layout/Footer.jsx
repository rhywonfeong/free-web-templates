const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 pt-20 pb-8 text-neutral-400">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:dumbbell-large-bold" class="text-[#E84E1B] text-3xl"></iconify-icon>
              <span className="font-extrabold text-xl tracking-tighter uppercase text-white">ForgeLab</span>
            </div>
            <p className="text-sm font-medium mb-6 max-w-sm">
              Performance. Precisão. Resultado. A academia de alto padrão construída para quem leva o corpo a sério.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#E84E1B] transition-colors">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#E84E1B] transition-colors">
                <iconify-icon icon="simple-icons:youtube"></iconify-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:map-point-linear" class="text-[#E84E1B] text-lg shrink-0 mt-0.5"></iconify-icon>
                <span>Av. Brigadeiro Faria Lima, 3.477<br/>Itaim Bibi, São Paulo – SP</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-linear" class="text-[#E84E1B] text-lg shrink-0"></iconify-icon>
                <span>(11) 94567-8901</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-linear" class="text-[#E84E1B] text-lg shrink-0"></iconify-icon>
                <span>contato@forgelab.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Horário</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Segunda a Sexta</span>
                <span className="text-white">06h — 23h</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábado</span>
                <span className="text-white">06h — 23h</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Domingo</span>
                <span className="text-white">08h — 18h</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#sobre" className="hover:text-white transition-colors">Nossa Metodologia</a></li>
              <li><a href="#estrutura" className="hover:text-white transition-colors">Equipamentos</a></li>
              <li><a href="#protocolos" className="hover:text-white transition-colors">Sistemas de Treinamento</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos e Valores</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} FORGELAB — Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
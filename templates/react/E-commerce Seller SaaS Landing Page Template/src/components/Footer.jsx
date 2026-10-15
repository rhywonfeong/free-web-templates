import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 overflow-hidden relative border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      
      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        {/* Floating Gradient Box CTA */}
        <div 
          className="bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-red-500/10 rounded-3xl mb-16 p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-2xl shadow-orange-500/5"
        >
          {/* Ambient Glow within CTA */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/20 blur-[80px] pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-xl">
              <p className="text-orange-400 font-medium text-sm mb-2 uppercase tracking-wider">+500 sellers já operam como profissionais</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                Você está pronto para crescer de verdade?
              </h2>
              <p className="text-slate-400 mt-4 text-lg">
                Deixe a complexidade para nossa IA. Foque na estratégia e veja sua operação voar. O momento de decolar é agora.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link 
                to="#" 
                className="inline-flex justify-center text-[15px] font-semibold transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.3),_inset_0_1px_1px_rgba(255,255,255,0.4)] text-white bg-gradient-to-bl from-orange-400 via-orange-500 to-orange-600 h-12 rounded-full px-8 items-center hover:-translate-y-0.5"
              >
                Criar conta grátis
              </Link>
              <Link 
                to="#" 
                className="inline-flex justify-center text-[15px] font-medium transition-all text-white bg-white/10 hover:bg-white/20 border border-white/10 h-12 rounded-full px-8 items-center hover:-translate-y-0.5"
              >
                Ver demonstração
              </Link>
              <p className="text-xs text-slate-500 text-center mt-1">14 dias grátis · Sem cartão</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

        {/* Footer Content */}
        <div className="flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12 text-sm">
            {/* Logo + short description */}
            <div className="md:max-w-xs">
              <Link to="/" className="flex items-center gap-2 text-white font-medium text-2xl tracking-tight mb-6">
                <iconify-icon icon="solar:rocket-bold-duotone" width="32" height="32" className="text-orange-500"></iconify-icon>
                <span>Decola Seller</span>
              </Link>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                Tecnologia + IA + time humano em um único produto feito para quem quer crescer de verdade.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 hover:bg-orange-500/20 hover:text-white transition-all hover:scale-105">
                  <iconify-icon icon="simple-icons:instagram" width="16" height="16"></iconify-icon>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 hover:bg-orange-500/20 hover:text-white transition-all hover:scale-105">
                  <iconify-icon icon="simple-icons:linkedin" width="16" height="16"></iconify-icon>
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 hover:bg-orange-500/20 hover:text-white transition-all hover:scale-105">
                  <iconify-icon icon="simple-icons:youtube" width="18" height="18"></iconify-icon>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="flex gap-16">
              <div>
                <h4 className="text-sm text-orange-500 font-semibold mb-6 tracking-wide uppercase">
                  Produto
                </h4>
                <ul className="space-y-3.5">
                  <li>
                    <Link to="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                      Recursos
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                      Planos
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                      Migre sua loja
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm text-orange-500 font-semibold mb-6 tracking-wide uppercase">
                  Legal
                </h4>
                <ul className="space-y-3.5">
                  <li>
                    <Link to="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                      Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                      Termos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs">
            <p className="text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} Decola Seller. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
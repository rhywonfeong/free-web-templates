import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2C2C2C] pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <span className="font-display text-5xl tracking-widest text-white uppercase">
                Fource
              </span>
            </Link>
            <p className="text-[#666666] text-sm max-w-md leading-relaxed font-medium">
              O sistema de identidade digital construído sobre contraste extremo. 
              Sem concessões, sem ornamentos desnecessários. Forjados pela disciplina.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-wider">Navegação</h3>
            <ul className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-[#666666]">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Modalidades</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Planos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-wider">Contato</h3>
            <ul className="flex flex-col gap-4 text-sm text-[#666666]">
              <li className="hover:text-white transition-colors">contato@fource.com.br</li>
              <li className="hover:text-white transition-colors">+55 11 99999-9999</li>
            </ul>
            <div className="flex items-center gap-6 mt-8">
              <a href="#" className="text-[#666666] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:instagram" style={{ fontSize: '24px' }}></iconify-icon>
              </a>
              <a href="#" className="text-[#666666] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:youtube" style={{ fontSize: '24px' }}></iconify-icon>
              </a>
              <a href="#" className="text-[#666666] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:x" style={{ fontSize: '24px' }}></iconify-icon>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#2C2C2C] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666666] text-xs font-semibold uppercase tracking-widest">
            © {new Date().getFullYear()} FOURCE. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="text-[#666666] text-xs font-semibold uppercase tracking-widest">
            Indaiatuba, SP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#090909] border-t border-[#2A2A2A] py-16 px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-10">
        <div>
          <Link to="/" className="font-display font-bold text-[32px] tracking-[-0.02em] uppercase text-white mb-4 block">
            .FORGEE
          </Link>
          <p className="font-body text-[14px] text-[#999999] max-w-xs">
            Forgee — Forje sua academia. Operação leve, controle total.
          </p>
        </div>
        
        <div>
          <h4 className="font-body font-semibold text-[14px] text-white mb-6">Produto</h4>
          <ul className="space-y-3">
            <li><a href="#features" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Funcionalidades</a></li>
            <li><a href="#pricing" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Planos e Preços</a></li>
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Novidades</a></li>
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Roadmap</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body font-semibold text-[14px] text-white mb-6">Empresa</h4>
          <ul className="space-y-3">
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Sobre o Forgee</a></li>
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Blog</a></li>
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Imprensa</a></li>
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body font-semibold text-[14px] text-white mb-6">Suporte</h4>
          <ul className="space-y-3">
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Central de Ajuda</a></li>
            <li>
              <a href="#" className="flex items-center gap-2 group">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] group-hover:bg-[#CCFF33] transition-colors"></span>
                <span className="font-body text-[14px] text-[#999999] group-hover:text-[#CCFF33] transition-colors">Status do sistema</span>
              </a>
            </li>
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="font-body text-[14px] text-[#999999] hover:text-[#CCFF33] transition-colors">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto mt-20 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body text-[12px] text-[#555555]">
          © 2026 Forgee. Todos os direitos reservados.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-[#555555] hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
          </a>
          <a href="#" className="text-[#555555] hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
          </a>
          <a href="#" className="text-[#555555] hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:youtube" width="20"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}
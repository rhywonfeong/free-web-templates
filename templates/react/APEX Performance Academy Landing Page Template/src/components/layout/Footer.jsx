import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#333333] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#E8350A] flex items-center justify-center rounded-[2px]">
                <iconify-icon icon="solar:bolt-bold" class="text-white text-xl"></iconify-icon>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
                APEX
              </span>
            </Link>
            <p className="text-[#999999] text-sm mb-6 max-w-[200px]">
              Performance Academy<br/>
              Beyond Your Known Limits.™
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-white font-medium">(11) 98765-4321</p>
              <p className="text-[#999999]">contato@apexperformance.com.br</p>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-6">Navegação</h4>
            <ul className="space-y-3">
              {['Início', 'Quem Somos', 'Equipamentos', 'Protocolo', 'Planos', 'Coaches', 'Localização'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#999999] text-sm hover:text-[#E8350A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans Col */}
          <div>
            <h4 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-6">Planos</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-[#999999] text-sm group-hover:text-white transition-colors">Plano Livre</span>
                <span className="text-[#E8350A] text-xs font-bold font-display">R$ 189/mês</span>
              </li>
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-[#999999] text-sm group-hover:text-white transition-colors">Plano Plus</span>
                <span className="text-[#E8350A] text-xs font-bold font-display">R$ 349/mês</span>
              </li>
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-[#999999] text-sm group-hover:text-white transition-colors">Plano Elite</span>
                <span className="text-[#E8350A] text-xs font-bold font-display">R$ 599/mês</span>
              </li>
              <li className="pt-4 mt-2 border-t border-[#333333]">
                <a href="#planos" className="text-white text-sm font-medium hover:text-[#E8350A] transition-colors flex items-center gap-2">
                  Agendar Visita Gratuita <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-6">Redes Sociais</h4>
            <p className="text-[#999999] text-sm mb-4">@apexperformancesp</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center text-[#999999] hover:bg-[#E8350A] hover:text-white transition-all">
                <iconify-icon icon="simple-icons:instagram" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center text-[#999999] hover:bg-[#E8350A] hover:text-white transition-all">
                <iconify-icon icon="simple-icons:youtube" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center text-[#999999] hover:bg-[#E8350A] hover:text-white transition-all">
                <iconify-icon icon="simple-icons:tiktok" class="text-lg"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666666]">
          <p>© 2024 APEX Performance Academy · Todos os direitos reservados</p>
          <div className="flex gap-4">
            <span>CNPJ 00.000.000/0001-00</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
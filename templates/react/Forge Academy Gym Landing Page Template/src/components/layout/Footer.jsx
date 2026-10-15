import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2E2E2E] pt-20 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#E8190F] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-display text-4xl md:text-5xl tracking-wide text-white block mb-2">
              FORGEE
            </Link>
            <p className="font-display text-[#E8190F] text-xl tracking-widest mb-6">
              BEYOND LIMITS KNOWN™
            </p>
            <p className="text-[#808080] text-sm max-w-sm leading-relaxed">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-6">Academia</h4>
            <ul className="flex flex-col gap-4 text-[#BFBFBF] text-sm">
              <li><a href="#espaco" className="hover:text-white transition-colors">Espaço</a></li>
              <li><a href="#programas" className="hover:text-white transition-colors">Programas</a></li>
              <li><a href="#equipe" className="hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-6">Legal & Redes</h4>
            <ul className="flex flex-col gap-4 text-[#BFBFBF] text-sm mb-8">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#1C1C1C] rounded flex items-center justify-center text-white hover:bg-[#E8190F] transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1C1C1C] rounded flex items-center justify-center text-white hover:bg-[#E8190F] transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" width="18"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2E2E2E] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#808080] font-medium tracking-wide">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
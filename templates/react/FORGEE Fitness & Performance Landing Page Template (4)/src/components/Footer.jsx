import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start">
            <span className="font-display font-black text-4xl tracking-tighter text-white mb-2">FORGEE</span>
            <span className="text-[#E8400A] text-[10px] uppercase tracking-widest font-bold">Beyond Limits Known™</span>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-white font-display uppercase tracking-tight text-lg mb-6">Academia</h4>
            <ul className="space-y-3 text-sm text-[#B0B0B0]">
              <li><a href="#espaco" className="hover:text-[#E8400A] transition-colors">Espaço</a></li>
              <li><a href="#programas" className="hover:text-[#E8400A] transition-colors">Programas</a></li>
              <li><a href="#equipe" className="hover:text-[#E8400A] transition-colors">Equipe</a></li>
              <li><a href="#planos" className="hover:text-[#E8400A] transition-colors">Planos</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-display uppercase tracking-tight text-lg mb-6">Legal & Redes</h4>
            <ul className="space-y-3 text-sm text-[#B0B0B0]">
              <li><Link to="/" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li className="pt-4 mt-4 border-t border-[#2A2A2A]">
                <a href="#" className="flex items-center gap-2 hover:text-[#E8400A] transition-colors">
                  <iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B6B6B] text-[10px] uppercase tracking-widest text-center md:text-left">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
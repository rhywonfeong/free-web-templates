import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0B0D14] border-t border-[#2B3045] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E8193C] flex items-center justify-center rounded-sm">
                <iconify-icon icon="solar:shield-bold" style={{ color: 'white', fontSize: '24px' }}></iconify-icon>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter leading-none">KMAS</span>
              </div>
            </div>
            <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">
              Korean Martial Arts System.<br/>
              Disciplina. Respeito. Evolução. Desde 1995.
            </p>
            <div className="flex gap-4 text-[#94A3B8]">
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon></a>
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon></a>
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:youtube" width="20"></iconify-icon></a>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6">Navegação</h4>
            <ul className="flex flex-col gap-3 text-[#94A3B8] text-sm">
              <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#modalidades" className="hover:text-white transition-colors">Modalidades</a></li>
              <li><a href="#instrutores" className="hover:text-white transition-colors">Nossos Instrutores</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos e Matrículas</a></li>
              <li><a href="#loja" className="hover:text-white transition-colors">Loja</a></li>
            </ul>
          </div>

          {/* Modalities Col */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6">Modalidades</h4>
            <ul className="flex flex-col gap-3 text-[#94A3B8] text-sm">
              <li><a href="#modalidades" className="hover:text-white transition-colors">Taekwondo</a></li>
              <li><a href="#modalidades" className="hover:text-white transition-colors">Hapkido</a></li>
              <li><a href="#modalidades" className="hover:text-white transition-colors">Gumdo</a></li>
              <li className="mt-2"><a href="#aula-experimental" className="text-[#E8193C] font-semibold hover:text-red-400 transition-colors">Aula Experimental Gratuita</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6">Contato</h4>
            <ul className="flex flex-col gap-4 text-[#94A3B8] text-sm">
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-bold" className="text-xl"></iconify-icon>
                (48) 3246-0000
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="simple-icons:whatsapp" className="text-xl"></iconify-icon>
                (48) 99999-0000
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-bold" className="text-xl"></iconify-icon>
                contato@kmas.br
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#2B3045] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B7280]">
          <p>© 2025 KMAS — Korean Martial Arts System. Todos os direitos reservados. CNPJ: 12.345.678/0001-90</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <iconify-icon icon="simple-icons:fitbit" width="28" class="text-[#E63422]"></iconify-icon>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">Forge</span>
            </a>
            <p className="text-[#8A8A8A] text-sm leading-relaxed mb-6">
              Mais que uma academia. Um ambiente onde disciplina encontra excelência.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#8A8A8A] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-[#8A8A8A] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:youtube" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-[#8A8A8A] hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:tiktok" width="20"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-[#8A8A8A]">
              <li><a href="#about" className="hover:text-[#E8541A] transition-colors">Quem Somos</a></li>
              <li><a href="#structure" className="hover:text-[#E8541A] transition-colors">Estrutura</a></li>
              <li><a href="#methodology" className="hover:text-[#E8541A] transition-colors">Metodologia</a></li>
              <li><a href="#pricing" className="hover:text-[#E8541A] transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-[#8A8A8A]">
              <li><a href="#faq" className="hover:text-[#E8541A] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#E8541A] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#E8541A] transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-[#8A8A8A]">
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-linear"></iconify-icon>
                (11) 99999-0000
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-linear"></iconify-icon>
                contato@forgeacademia.com.br
              </li>
              <li className="flex items-start gap-3 mt-4">
                <iconify-icon icon="solar:map-point-linear" class="mt-1"></iconify-icon>
                <span>Av. Brigadeiro Faria Lima, 3477<br/>Itaim Bibi · São Paulo — SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A8A8A]">
          <p>&copy; {new Date().getFullYear()} FORGE Academia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Design inspirado em alto rendimento.</p>
        </div>
      </div>
    </footer>
  )
}
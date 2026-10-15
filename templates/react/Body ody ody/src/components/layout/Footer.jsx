export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2E2E2E] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-display text-4xl text-white mb-4">AURA</div>
            <p className="text-[#888888] text-sm max-w-sm">
              AURA — Treinamento de alto padrão desde 2012. Não somos uma academia. Somos um sistema de evolução.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-xl text-white mb-6">Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#888888] hover:text-[#E5C000] transition-colors text-sm">Início</a></li>
              <li><a href="#" className="text-[#888888] hover:text-[#E5C000] transition-colors text-sm">Quem Somos</a></li>
              <li><a href="#" className="text-[#888888] hover:text-[#E5C000] transition-colors text-sm">Estrutura</a></li>
              <li><a href="#" className="text-[#888888] hover:text-[#E5C000] transition-colors text-sm">Planos</a></li>
              <li><a href="#" className="text-[#888888] hover:text-[#E5C000] transition-colors text-sm">Coaches</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-white mb-6">Redes Sociais</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-[#888888] hover:text-[#E5C000] transition-colors text-sm">
                  <iconify-icon icon="simple-icons:instagram" class="text-lg"></iconify-icon>
                  @auraperformance
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#888888] hover:text-[#E5C000] transition-colors text-sm">
                  <iconify-icon icon="simple-icons:youtube" class="text-lg"></iconify-icon>
                  AURA Performance
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#888888] hover:text-[#E5C000] transition-colors text-sm">
                  <iconify-icon icon="simple-icons:whatsapp" class="text-lg"></iconify-icon>
                  (11) 99999-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2E2E2E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#888888] text-xs">
            CREF Responsável Técnico: Carlos Almeida · CREF 000000-G/SP
          </p>
          <p className="text-[#888888] text-xs">
            © {new Date().getFullYear()} AURA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
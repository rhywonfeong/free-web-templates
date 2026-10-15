export default function Footer() {
  return (
    <footer className="bg-[#090909] border-t border-[#1C1C1C] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white text-[#0A0A0A] flex items-center justify-center font-bold text-xl tracking-tighter rounded-sm">
                LT
              </div>
              <div>
                <h3 className="font-bold text-2xl tracking-tight text-white leading-none">LuTe</h3>
                <span className="text-[#00F9E4] text-xs tracking-[0.2em] font-medium uppercase mt-1 block">Beyond Limits Known</span>
              </div>
            </div>
            <p className="text-[#6B6B6B] text-sm max-w-sm">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#9A9A9A] hover:text-[#00F9E4] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social/Contact Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Conectar</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="#" className="text-[#9A9A9A] hover:text-[#00F9E4] text-sm transition-colors flex items-center gap-2">
                  <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                  @lute.academy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9A9A9A] hover:text-[#00F9E4] text-sm transition-colors flex items-center gap-2">
                  <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                  (19) 98234-5678
                </a>
              </li>
              <li>
                <a href="mailto:contato@lute.academy" className="text-[#9A9A9A] hover:text-[#00F9E4] text-sm transition-colors flex items-center gap-2">
                  <iconify-icon icon="solar:letter-linear"></iconify-icon>
                  contato@lute.academy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C1C1C] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs text-[#6B6B6B]">
            <span>© 2026 LuTe Academy</span>
            <span className="hidden md:inline">•</span>
            <span>CNPJ 00.000.000/0001-00</span>
            <span className="hidden md:inline">•</span>
            <span>CREF-SP</span>
          </div>
          <div className="flex gap-6 text-xs text-[#6B6B6B]">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
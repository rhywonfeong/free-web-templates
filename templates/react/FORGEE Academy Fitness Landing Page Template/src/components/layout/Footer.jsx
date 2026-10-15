export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2D2D2D] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <iconify-icon icon="solar:flame-bold" class="text-[#E8651A] text-3xl"></iconify-icon>
              <span className="font-display font-bold text-3xl tracking-tight text-[#F5F5F5]">FORGEE</span>
            </div>
            <p className="text-[#7A7A7A] font-medium tracking-[0.1em] text-sm uppercase">
              BEYOND LIMITS KNOWN™
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-[#F5F5F5] text-lg tracking-tight mb-6">ACADEMIA</h4>
            <ul className="space-y-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#E5E5E5] hover:text-[#E8651A] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-display font-semibold text-[#F5F5F5] text-lg tracking-tight mb-6">LEGAL & REDES</h4>
            <ul className="space-y-4 mb-8">
              <li><a href="#" className="text-[#E5E5E5] hover:text-[#E8651A] transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-[#E5E5E5] hover:text-[#E8651A] transition-colors text-sm">Termos de Uso</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-[#E5E5E5] hover:bg-[#E8651A] hover:text-white transition-all">
                <iconify-icon icon="simple-icons:instagram" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-[#E5E5E5] hover:bg-[#E8651A] hover:text-white transition-all">
                <iconify-icon icon="simple-icons:youtube" class="text-lg"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-[#E5E5E5] hover:bg-[#E8651A] hover:text-white transition-all">
                <iconify-icon icon="simple-icons:tiktok" class="text-lg"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5A5A5A] uppercase tracking-wider">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF-SP · DESIGN SYSTEM</p>
          <p>© 2026</p>
        </div>
      </div>
    </footer>
  )
}
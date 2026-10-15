import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#242424] bg-[#0A0A0A] pt-20 pb-10 mt-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <iconify-icon icon="solar:bolt-bold" class="text-[#E30000] text-3xl"></iconify-icon>
              <span className="font-black tracking-tighter text-3xl uppercase">FORGEE</span>
            </Link>
            <p className="text-[#C4C4C4] font-medium tracking-widest text-xs uppercase mb-6">
              B E Y O N D · L I M I T S · K N O W N ™
            </p>
            <p className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed">
              Ambiente mediano produz resultado mediano. Aqui o espaço não interfere, ele desaparece. O que fica é o treino.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Navegação</h4>
            <ul className="flex flex-col gap-4">
              {['Academia', 'Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-[#6B6B6B] hover:text-[#E30000] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-tight mb-6">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[#6B6B6B] text-sm hover:text-white transition-colors cursor-pointer">
                <iconify-icon icon="solar:map-point-linear"></iconify-icon>
                <span>Indaiatuba, SP</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B6B6B] text-sm hover:text-white transition-colors cursor-pointer">
                <iconify-icon icon="solar:phone-linear"></iconify-icon>
                <span>(19) 98234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B6B6B] text-sm hover:text-white transition-colors cursor-pointer">
                <iconify-icon icon="solar:letter-linear"></iconify-icon>
                <span>contato@forgee.academy</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B6B6B] text-sm hover:text-white transition-colors cursor-pointer mt-2">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                <span>@forgee.academy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#242424] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <Link to="/privacidade" className="text-xs text-[#6B6B6B] hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="text-xs text-[#6B6B6B] hover:text-white transition-colors">Termos de Uso</Link>
          </div>
          <p className="text-[#6B6B6B] text-xs text-center md:text-right">
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP <br/> DESIGN SYSTEM © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
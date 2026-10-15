import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#061800] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-[#CCFF00] opacity-20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Brand Col */}
        <div className="md:col-span-5 flex flex-col items-start">
          <Link to="/" className="text-5xl font-display uppercase tracking-wider text-white mb-4">
            FOURCE
          </Link>
          <p className="text-[#CCFF00] font-medium tracking-widest text-sm uppercase mb-8">
            HIGH PERFORMANCE HEALTH
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#0A2E00] transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#0A2E00] transition-colors">
              <iconify-icon icon="simple-icons:whatsapp" width="20"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="md:col-span-3">
          <h4 className="font-display uppercase tracking-wider text-xl mb-6">Academia</h4>
          <ul className="flex flex-col gap-4 text-[#9E9E9E]">
            <li><a href="#espaco" className="hover:text-white transition-colors">Espaço</a></li>
            <li><a href="#programas" className="hover:text-white transition-colors">Programas</a></li>
            <li><a href="#equipe" className="hover:text-white transition-colors">Equipe</a></li>
            <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="md:col-span-4">
          <h4 className="font-display uppercase tracking-wider text-xl mb-6">Legal & Redes</h4>
          <ul className="flex flex-col gap-4 text-[#9E9E9E]">
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
          </ul>
          
          <div className="mt-12 text-xs text-[#9E9E9E] flex flex-col gap-2">
            <p>FOURCE HPH LTDA.</p>
            <p>CNPJ 00.000.000/0001-00</p>
            <p>CREF SP</p>
            <p className="mt-4">DESIGN SYSTEM © 2026</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-3xl font-display font-bold text-white">
              <iconify-icon icon="solar:dumbbell-large-bold" style={{ color: '#C8FF00' }}></iconify-icon>
              FORGEE
            </div>
            <p className="text-neutral-400 text-sm tracking-[0.2em] mb-6">
              B E Y O N D &nbsp; L I M I T S &nbsp; K N O W N ™
            </p>
            <p className="text-neutral-500 max-w-sm">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">ACADEMIA</h4>
            <ul className="flex flex-col gap-3 text-neutral-400">
              <li><a href="#espaco" className="hover:text-[#C8FF00] transition-colors">Espaço</a></li>
              <li><a href="#programas" className="hover:text-[#C8FF00] transition-colors">Programas</a></li>
              <li><a href="#equipe" className="hover:text-[#C8FF00] transition-colors">Equipe</a></li>
              <li><a href="#planos" className="hover:text-[#C8FF00] transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">LEGAL & REDES</h4>
            <ul className="flex flex-col gap-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li className="mt-4 flex gap-4">
                <a href="#" className="text-2xl hover:text-[#C8FF00] transition-colors">
                  <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                </a>
                <a href="#" className="text-2xl hover:text-[#C8FF00] transition-colors">
                  <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
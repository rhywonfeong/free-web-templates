import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--neutral-950)] border-t border-[var(--neutral-800)] pt-20 pb-8 px-6 md:px-10 lg:px-20 mt-auto">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Col */}
        <div className="md:col-span-5 flex flex-col items-start">
          <Link to="/" className="text-4xl font-black tracking-tighter text-[var(--neutral-0)] mb-2">
            FORGEE
          </Link>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--neutral-400)] mb-8">
            B E Y O N D &nbsp; L I M I T S &nbsp; K N O W N ™
          </p>
          <p className="text-[var(--neutral-400)] text-sm max-w-sm leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias.
          </p>
        </div>

        {/* Nav Col */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--neutral-0)] mb-6">Navegação</h4>
          <ul className="flex flex-col gap-4">
            {['Academia', 'Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm text-[var(--neutral-400)] hover:text-[var(--flame-500)] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Social Col */}
        <div className="md:col-span-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--neutral-0)] mb-6">Legal & Redes</h4>
          <ul className="flex flex-col gap-4 mb-8">
            <li>
              <a href="#" className="text-sm text-[var(--neutral-400)] hover:text-[var(--flame-500)] transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[var(--neutral-400)] hover:text-[var(--flame-500)] transition-colors">
                Termos de Uso
              </a>
            </li>
          </ul>
          
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-[var(--neutral-400)] hover:text-[var(--flame-500)] transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="24"></iconify-icon>
            </a>
            <a href="#" aria-label="WhatsApp" className="text-[var(--neutral-400)] hover:text-[var(--flame-500)] transition-colors">
              <iconify-icon icon="simple-icons:whatsapp" width="24"></iconify-icon>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto border-t border-[var(--neutral-800)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--neutral-400)]">
        <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
        <p>DESIGN SYSTEM © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            <Link to="/" className="text-3xl font-semibold tracking-tighter text-white">
              FORGEE
            </Link>
            <p className="text-sm tracking-widest text-zinc-500 uppercase">
              BEYOND LIMITS KNOWN™
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium text-white mb-2">Academia</h4>
            <a href="/#espaco" className="text-sm text-zinc-400 hover:text-white transition-colors">Espaço</a>
            <a href="/#programas" className="text-sm text-zinc-400 hover:text-white transition-colors">Programas</a>
            <a href="/#equipe" className="text-sm text-zinc-400 hover:text-white transition-colors">Equipe</a>
            <a href="/#planos" className="text-sm text-zinc-400 hover:text-white transition-colors">Planos</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium text-white mb-2">Legal & Redes</h4>
            <Link to="/privacidade" className="text-sm text-zinc-400 hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="text-sm text-zinc-400 hover:text-white transition-colors">Termos de Uso</Link>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                <iconify-icon icon="simple-icons:instagram" width="20" height="20" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="WhatsApp">
                <iconify-icon icon="simple-icons:whatsapp" width="20" height="20" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>
      </div>
    </footer>
  );
}
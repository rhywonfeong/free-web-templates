import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { name: 'Academia', href: '#' },
    { name: 'Espaço', href: '#espaco' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <footer className="bg-black py-16 md:py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link to="/" className="text-4xl font-black text-white tracking-tighter block mb-2">
              FORGEE<span className="text-red-600">.</span>
            </Link>
            <p className="text-xs font-semibold tracking-[0.3em] text-zinc-500 uppercase">
              Beyond Limits Known™
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-6">Navegação</h4>
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-red-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>
      </div>
    </footer>
  );
}
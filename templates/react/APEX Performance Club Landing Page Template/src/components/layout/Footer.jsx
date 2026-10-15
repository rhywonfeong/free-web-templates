import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="font-display font-black text-4xl tracking-tight uppercase flex items-center gap-2 mb-6">
            <iconify-icon icon="solar:bolt-bold" class="text-acid"></iconify-icon>
            APEX
          </Link>
          <p className="text-neutral-400 max-w-sm mb-8 font-light text-sm leading-relaxed">
            Alto padrão em performance. O APEX Performance Club é onde disciplina encontra sofisticação.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-2xl">
              <iconify-icon icon="simple-icons:instagram"></iconify-icon>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-2xl">
              <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-widest text-sm mb-6 text-neutral-500">Navegação</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-neutral-300">
            <li><a href="/#about" className="hover:text-acid transition-colors">Quem Somos</a></li>
            <li><a href="/#equipment" className="hover:text-acid transition-colors">Estrutura</a></li>
            <li><a href="/#protocol" className="hover:text-acid transition-colors">O Método</a></li>
            <li><a href="/#pricing" className="hover:text-acid transition-colors">Planos</a></li>
            <li><a href="/#faq" className="hover:text-acid transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-widest text-sm mb-6 text-neutral-500">Contato</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-neutral-300">
            <li className="flex items-start gap-3">
              <iconify-icon icon="solar:map-point-linear" class="text-lg mt-0.5"></iconify-icon>
              <span>Av. das Nações Unidas, 14.401<br/>Vila Gertrudes, São Paulo — SP</span>
            </li>
            <li className="flex items-center gap-3">
              <iconify-icon icon="solar:phone-linear" class="text-lg"></iconify-icon>
              <span>(11) 91234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <iconify-icon icon="solar:letter-linear" class="text-lg"></iconify-icon>
              <span>contato@apexperformance.com.br</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1280px] mx-auto pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-light">
        <p>© {new Date().getFullYear()} APEX Performance Club. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
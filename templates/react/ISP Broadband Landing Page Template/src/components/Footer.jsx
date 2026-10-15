import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-0 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 group mb-6">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-neutral-0">
              <iconify-icon icon="solar:routing-3-bold" width="24" height="24"></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-neutral-0 tracking-tight leading-none uppercase">Provider</span>
              <span className="text-sm font-bold text-brand-orange tracking-widest leading-none">Mais Fibra</span>
            </div>
          </div>
          <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
            Conectando o oeste da Bahia com a melhor e mais rápida tecnologia de fibra óptica do mercado.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center hover:bg-brand-orange transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="20" height="20"></iconify-icon>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center hover:bg-brand-orange transition-colors">
              <iconify-icon icon="simple-icons:facebook" width="20" height="20"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-yellow">Links Úteis</h4>
          <ul className="flex flex-col gap-3 text-neutral-300">
            <li><Link to="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
            <li><Link to="/planos" className="hover:text-brand-orange transition-colors">Planos de Internet</Link></li>
            <li><Link to="/iptv" className="hover:text-brand-orange transition-colors">Serviço de IPTV</Link></li>
            <li><Link to="/sobre" className="hover:text-brand-orange transition-colors">Sobre Nós</Link></li>
            <li><Link to="/trabalhe" className="hover:text-brand-orange transition-colors">Trabalhe Conosco</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-yellow">Atendimento</h4>
          <ul className="flex flex-col gap-4 text-neutral-300">
            <li className="flex items-start gap-3">
              <iconify-icon icon="solar:phone-calling-bold" width="24" height="24" className="text-brand-orange"></iconify-icon>
              <div>
                <span className="block text-sm font-semibold">WhatsApp & Telefone</span>
                <span className="block font-bold text-neutral-0">(77) 99844-4757</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <iconify-icon icon="solar:letter-bold" width="24" height="24" className="text-brand-orange"></iconify-icon>
              <div>
                <span className="block text-sm font-semibold">E-mail Corporativo</span>
                <span className="block text-sm">contato@provider.com.br</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <iconify-icon icon="solar:clock-circle-bold" width="24" height="24" className="text-brand-orange"></iconify-icon>
              <div>
                <span className="block text-sm font-semibold">Horário de Suporte</span>
                <span className="block text-sm">Seg a Sáb - 08h às 18h</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-brand-yellow">Certificações</h4>
          <div className="bg-neutral-0/10 p-4 rounded-lg inline-flex items-center gap-3">
            <iconify-icon icon="solar:shield-check-bold" width="32" height="32" className="text-brand-green"></iconify-icon>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-neutral-300">Empresa</span>
              <span className="block font-bold">Homologada Anatel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-8 border-t border-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-300 text-sm">© 2026 Provider Mais Fibra. Todos os direitos reservados.</p>
        <div className="flex gap-6 text-sm text-neutral-300">
          <a href="#" className="hover:text-neutral-0 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-neutral-0 transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
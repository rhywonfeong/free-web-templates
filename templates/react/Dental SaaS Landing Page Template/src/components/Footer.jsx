export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4">
              <iconify-icon icon="solar:health-bold-duotone" className="text-blue-600 text-2xl"></iconify-icon>
              SERVYODONTO
            </a>
            <p className="text-sm text-slate-500 max-w-xs mb-6">O sistema operacional definitivo para organizar, profissionalizar e escalar a odontologia moderna.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <iconify-icon icon="solar:inbox-linear" className="text-xl"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <iconify-icon icon="solar:global-linear" className="text-xl"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-sm font-semibold text-slate-900 mb-4">Produto</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Prontuário</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Agenda Inteligente</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Financeiro</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Portal do Paciente</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-slate-900 mb-4">Público</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Consultórios</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Clínicas</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Redes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Estudantes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-slate-900 mb-4">Empresa</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2024 ServyOdonto. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
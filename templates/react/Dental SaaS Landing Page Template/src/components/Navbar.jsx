export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2">
            <iconify-icon icon="solar:health-bold-duotone" className="text-blue-600 text-2xl"></iconify-icon>
            SERVYODONTO
          </a>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#solucao" className="hover:text-slate-900 transition-colors">Plataforma</a>
            <a href="#audiencia" className="hover:text-slate-900 transition-colors">Para quem é</a>
            <a href="#diferencial" className="hover:text-slate-900 transition-colors">Por que escolher</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Entrar</a>
          <a href="#demo" className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm">
            Agendar demonstração
          </a>
        </div>
      </div>
    </nav>
  );
}
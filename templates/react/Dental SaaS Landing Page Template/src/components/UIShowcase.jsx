export default function UIShowcase() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden" id="tour">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Visibilidade limpa. Ação rápida.</h2>
            <p className="text-slate-400 text-base mb-8">Nossa interface foi projetada com princípios de design dos melhores softwares do mundo. Esqueça sistemas lentos, cinzas e confusos. Aqui, a operação flui de forma intuitiva.</p>
            
            <ul className="space-y-4">
              <li className="bg-white/10 p-4 rounded-xl border border-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/15 transition-all">
                <h4 className="text-white text-sm font-medium mb-1">Visão da Clínica</h4>
                <p className="text-slate-400 text-xs">Métricas vitais e agenda do dia em um só painel.</p>
              </li>
              <li className="p-4 rounded-xl border border-transparent cursor-pointer hover:bg-white/5 transition-all">
                <h4 className="text-slate-300 text-sm font-medium mb-1">Odontograma Interativo</h4>
                <p className="text-slate-500 text-xs">Anotações precisas com um clique.</p>
              </li>
              <li className="p-4 rounded-xl border border-transparent cursor-pointer hover:bg-white/5 transition-all">
                <h4 className="text-slate-300 text-sm font-medium mb-1">Fluxo de Caixa</h4>
                <p className="text-slate-500 text-xs">Entradas e saídas categorizadas automaticamente.</p>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-2/3 relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-[2.5rem] blur-2xl"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
              {/* Top bar dark */}
              <div className="h-10 border-b border-slate-700 bg-slate-900/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              {/* UI Content dark */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="w-24 h-4 bg-slate-700 rounded mb-2"></div>
                    <div className="w-48 h-8 bg-slate-600 rounded"></div>
                  </div>
                  <div className="w-32 h-8 bg-blue-600/20 border border-blue-500/30 rounded-full"></div>
                </div>
                
                {/* Graph area */}
                <div className="w-full h-48 bg-slate-900/50 rounded-xl border border-slate-700/50 flex items-end p-4 gap-2">
                  <div className="w-full bg-blue-500/80 rounded-t-sm h-[30%]"></div>
                  <div className="w-full bg-blue-500/80 rounded-t-sm h-[50%]"></div>
                  <div className="w-full bg-blue-500/80 rounded-t-sm h-[40%]"></div>
                  <div className="w-full bg-blue-500/80 rounded-t-sm h-[70%]"></div>
                  <div className="w-full bg-blue-500/80 rounded-t-sm h-[60%]"></div>
                  <div className="w-full bg-blue-500/80 rounded-t-sm h-[90%]"></div>
                  <div className="w-full bg-blue-500/80 rounded-t-sm h-[85%]"></div>
                </div>

                {/* List area */}
                <div className="flex-1 bg-slate-900/50 rounded-xl border border-slate-700/50 p-4 flex flex-col gap-3">
                  <div className="w-full h-12 bg-slate-800/50 rounded border border-slate-700/50 flex items-center px-4 justify-between">
                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-700"></div><div className="w-24 h-3 bg-slate-600 rounded-full"></div></div>
                    <div className="w-16 h-4 bg-emerald-500/20 rounded-full border border-emerald-500/30"></div>
                  </div>
                  <div className="w-full h-12 bg-slate-800/50 rounded border border-slate-700/50 flex items-center px-4 justify-between">
                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-700"></div><div className="w-32 h-3 bg-slate-600 rounded-full"></div></div>
                    <div className="w-16 h-4 bg-amber-500/20 rounded-full border border-amber-500/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
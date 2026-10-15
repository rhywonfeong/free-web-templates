export default function Stages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">Uma base sólida para cada etapa do seu crescimento</h2>
        
        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-200 z-0"></div>

          {/* Stage 1 */}
          <div className="flex-1 relative z-10">
            <div className="w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 font-semibold mb-6 shadow-sm mx-auto md:mx-0">1</div>
            <div className="text-center md:text-left">
              <h4 className="text-base font-semibold text-slate-900 mb-2">Começando</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Estruture a agenda, crie históricos organizados e passe profissionalismo desde o primeiro paciente.</p>
            </div>
          </div>
          {/* Stage 2 */}
          <div className="flex-1 relative z-10">
            <div className="w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 font-semibold mb-6 shadow-sm mx-auto md:mx-0">2</div>
            <div className="text-center md:text-left">
              <h4 className="text-base font-semibold text-slate-900 mb-2">Organizando</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Centralize a recepção, implante o fluxo financeiro e elimine o trabalho manual da sua rotina.</p>
            </div>
          </div>
          {/* Stage 3 */}
          <div className="flex-1 relative z-10">
            <div className="w-12 h-12 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-semibold mb-6 shadow-md shadow-blue-100 mx-auto md:mx-0">3</div>
            <div className="text-center md:text-left">
              <h4 className="text-base font-semibold text-slate-900 mb-2">Fortalecendo</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Gira múltiplos dentistas, aplique regras de comissionamento e foque na conversão de orçamentos.</p>
            </div>
          </div>
          {/* Stage 4 */}
          <div className="flex-1 relative z-10">
            <div className="w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 font-semibold mb-6 shadow-sm mx-auto md:mx-0">4</div>
            <div className="text-center md:text-left">
              <h4 className="text-base font-semibold text-slate-900 mb-2">Escalando</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Abra novas unidades com processos espelhados, DRE unificada e controle corporativo total.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
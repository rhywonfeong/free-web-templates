export default function Audience() {
  return (
    <section className="py-24 bg-slate-50" id="audiencia">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Feito para quem exige mais da própria operação</h2>
          <p className="text-base text-slate-500">Seja estruturando seu primeiro consultório ou liderando uma rede em expansão, o ServyOdonto se adapta ao seu momento de maturidade profissional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group">
            <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-50 group-hover:text-blue-600">
              <iconify-icon icon="solar:academic-cap-linear" className="text-2xl"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Futuros Dentistas</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Inicie sua trajetória com a base tecnológica que os líderes de mercado utilizam. Zero vícios operacionais, 100% de organização desde o dia um.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group">
            <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-50 group-hover:text-blue-600">
              <iconify-icon icon="solar:user-hands-linear" className="text-2xl"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Consultórios Independentes</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Centralize agendamento, prontuário e cobrança. Libere seu tempo para focar exclusivamente na excelência clínica e no cuidado ao paciente.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group">
            <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-50 group-hover:text-blue-600">
              <iconify-icon icon="solar:graph-up-linear" className="text-2xl"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Clínicas em Crescimento</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Integre a recepção, o corpo clínico e o financeiro. Padronize processos, evite glosas e crie uma jornada profissional e altamente rentável.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group">
            <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-50 group-hover:text-blue-600">
              <iconify-icon icon="solar:buildings-2-linear" className="text-2xl"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Donos e Gestores</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Visão executiva em tempo real. Controle de comissionamento múltiplo, performance de unidades, DRE gerencial e métricas de conversão.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
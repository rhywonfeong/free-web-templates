export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Quem já elevou o nível da operação</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex gap-1 text-amber-400 mb-4 text-sm">
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
            </div>
            <p className="text-sm text-slate-600 italic mb-6 leading-relaxed">"Antes do ServyOdonto, eu passava horas calculando repasses e buscando fichas de papel. Hoje, tenho minha clínica inteira no celular. O nível de profissionalismo que isso passou para os meus pacientes justificou o investimento no primeiro mês."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-medium text-slate-500 text-xs">CD</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">[Nome do Dentista]</p>
                <p className="text-xs text-slate-500">Consultório Independente</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex gap-1 text-amber-400 mb-4 text-sm">
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
            </div>
            <p className="text-sm text-slate-600 italic mb-6 leading-relaxed">"Como gestora, a previsibilidade financeira era minha maior dor. O módulo de aprovação de planos de tratamento associado ao fluxo de caixa automático me deu a clareza exata de onde estamos ganhando e onde precisamos melhorar."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-medium text-blue-600 text-xs">GC</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">[Nome da Gestora]</p>
                <p className="text-xs text-slate-500">Gestora Clínica em Expansão</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex gap-1 text-amber-400 mb-4 text-sm">
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <iconify-icon icon="solar:star-bold"></iconify-icon>
            </div>
            <p className="text-sm text-slate-600 italic mb-6 leading-relaxed">"Migramos de um software famoso porque ele travava com o volume de 3 unidades. O ServyOdonto suportou nosso crescimento, unificou o faturamento corporativo e simplificou a rotina da recepção. É outro patamar tecnológico."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center font-medium text-white text-xs">DC</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">[Nome do Proprietário]</p>
                <p className="text-xs text-slate-500">Rede Odontológica (3 unid.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
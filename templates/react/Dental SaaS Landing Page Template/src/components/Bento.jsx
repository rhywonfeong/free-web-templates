export default function Bento() {
  return (
    <section className="py-24 bg-white" id="solucao">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Poder absoluto em cada etapa do atendimento</h2>
          <p className="text-lg text-slate-500 max-w-2xl">Módulos nativos, desenhados para conversar entre si. Quando a recepção agenda, o clínico se prepara e o financeiro projeta.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Bento 1: Prontuário & Odontograma (Span 2) */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/40 to-transparent z-0"></div>
            <div className="relative z-10 max-w-sm">
              <iconify-icon icon="solar:document-medicine-linear" className="text-3xl text-blue-600 mb-4"></iconify-icon>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Prontuário &amp; Odontograma Visual</h3>
              <p className="text-sm text-slate-500">Histórico clínico inquestionável. Evoluções rápidas, odontograma interativo com suporte a planos de tratamento complexos e aprovações digitais.</p>
            </div>
            {/* Decorative mock UI inside card */}
            <div className="absolute -right-10 -bottom-10 w-64 h-48 bg-white rounded-xl border border-slate-200 shadow-sm p-4 rotate-[-5deg] group-hover:rotate-0 transition-all duration-500 opacity-80 flex flex-col gap-2">
              <div className="w-1/2 h-3 bg-slate-200 rounded-full"></div>
              <div className="w-full h-8 bg-blue-50 rounded-md mt-2 border border-blue-100"></div>
              <div className="flex gap-2 mt-auto">
                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
              </div>
            </div>
          </div>

          {/* Bento 2: Agenda Inteligente */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col relative overflow-hidden">
            <iconify-icon icon="solar:calendar-date-linear" className="text-3xl text-slate-700 mb-4"></iconify-icon>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Agenda Multi-profissionais</h3>
            <p className="text-sm text-slate-500 mb-6">Gestão de cadeiras, confirmação via WhatsApp automatizada e fila de espera inteligente para otimizar cada hora vaga.</p>
            <div className="mt-auto w-full h-24 bg-white rounded-t-xl border-x border-t border-slate-200 p-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
                <div className="w-8 h-3 bg-emerald-100 rounded-full"></div>
              </div>
              <div className="w-3/4 h-2 bg-slate-100 rounded-full"></div>
            </div>
          </div>

          {/* Bento 3: Financeiro */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 blur-[80px] opacity-30"></div>
            <iconify-icon icon="solar:wallet-money-linear" className="text-3xl text-blue-400 mb-4 relative z-10"></iconify-icon>
            <h3 className="text-xl font-semibold tracking-tight text-white mb-2 relative z-10">Controle Financeiro Real</h3>
            <p className="text-sm text-slate-400 relative z-10">DRE, fluxo de caixa, split de pagamentos automático, emissão de boletos e gestão precisa de comissões por procedimento.</p>
          </div>

          {/* Bento 4: Autoatendimento (Span 2) */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
            <div className="flex-1">
              <iconify-icon icon="solar:smartphone-update-linear" className="text-3xl text-slate-700 mb-4"></iconify-icon>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Autoatendimento e Portal do Paciente</h3>
              <p className="text-sm text-slate-500">Ofereça uma experiência premium. Permita que pacientes agendem retornos online, acessem prescrições e aprovem orçamentos diretamente pelo celular.</p>
            </div>
            <div className="w-48 h-56 bg-white rounded-2xl border border-slate-200 shadow-md p-2 flex flex-col gap-2 shrink-0 translate-y-8">
              <div className="w-full h-8 bg-blue-600 rounded-t-xl opacity-90"></div>
              <div className="w-3/4 h-3 bg-slate-200 rounded-full mx-auto mt-2"></div>
              <div className="w-full h-12 bg-slate-50 rounded-lg mt-2 border border-slate-100"></div>
              <div className="w-full h-12 bg-slate-50 rounded-lg border border-slate-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
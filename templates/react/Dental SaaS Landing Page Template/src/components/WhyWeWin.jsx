export default function WhyWeWin() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100" id="diferencial">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Por que os líderes escolhem ServyOdonto</h2>
          <p className="text-base text-slate-500">Muitos sistemas param no agendamento. Nós construímos o caminho para o seu crescimento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          {/* Left (The Standard) */}
          <div className="bg-white p-10 flex flex-col">
            <h3 className="text-lg font-medium text-slate-400 mb-8 tracking-tight">Sistemas comuns</h3>
            <ul className="space-y-6 flex-1">
              <li className="flex gap-4 items-start text-slate-500 text-sm">
                <iconify-icon icon="solar:close-square-linear" className="text-slate-300 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span>Focam apenas em substituir a agenda de papel, sem inteligência operacional.</span>
              </li>
              <li className="flex gap-4 items-start text-slate-500 text-sm">
                <iconify-icon icon="solar:close-square-linear" className="text-slate-300 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span>Financeiro raso, exigindo planilhas externas para calcular comissões complexas.</span>
              </li>
              <li className="flex gap-4 items-start text-slate-500 text-sm">
                <iconify-icon icon="solar:close-square-linear" className="text-slate-300 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span>Jornada do paciente fragmentada e dependente de múltiplos sistemas.</span>
              </li>
              <li className="flex gap-4 items-start text-slate-500 text-sm">
                <iconify-icon icon="solar:close-square-linear" className="text-slate-300 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span>Travam quando a clínica abre a segunda ou terceira unidade.</span>
              </li>
            </ul>
          </div>
          {/* Right (ServyOdonto) */}
          <div className="bg-slate-900 p-10 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
            <h3 className="text-lg font-medium text-blue-400 mb-8 tracking-tight flex items-center gap-2">
              <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
              O Padrão ServyOdonto
            </h3>
            <ul className="space-y-6 flex-1 relative z-10">
              <li className="flex gap-4 items-start text-slate-300 text-sm">
                <iconify-icon icon="solar:check-square-linear" className="text-blue-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span className="text-white">Automação de workflows: do agendamento à confirmação de retorno e faturamento.</span>
              </li>
              <li className="flex gap-4 items-start text-slate-300 text-sm">
                <iconify-icon icon="solar:check-square-linear" className="text-blue-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span className="text-white">Motor financeiro robusto: regras de repasse customizáveis e DRE clínica automática.</span>
              </li>
              <li className="flex gap-4 items-start text-slate-300 text-sm">
                <iconify-icon icon="solar:check-square-linear" className="text-blue-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span className="text-white">Gestão comercial: acompanhe aprovação de planos de tratamento como um funil de vendas.</span>
              </li>
              <li className="flex gap-4 items-start text-slate-300 text-sm">
                <iconify-icon icon="solar:check-square-linear" className="text-blue-500 text-xl shrink-0 mt-0.5"></iconify-icon>
                <span className="text-white">Arquitetura escalável: gerencie múltiplas unidades, estoques e CNPJs em um só login.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
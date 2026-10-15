export default function Pains() {
  return (
    <section className="py-24 bg-white" id="problema">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">A odontologia evoluiu. A gestão da sua clínica acompanhou?</h2>
        <p className="text-lg text-slate-500 mb-16">O crescimento da sua clínica não é travado pela falta de pacientes, mas pela complexidade operacional oculta no dia a dia.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Pain */}
          <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm mb-4 border border-red-50">
              <iconify-icon icon="solar:close-circle-linear" className="text-xl"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">A Realidade Antiga</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:danger-circle-linear" className="text-slate-400 shrink-0 mt-0.5"></iconify-icon> Agendas de papel ou planilhas desconectadas.
              </li>
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:danger-circle-linear" className="text-slate-400 shrink-0 mt-0.5"></iconify-icon> Planos de tratamento que se perdem na recepção.
              </li>
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:danger-circle-linear" className="text-slate-400 shrink-0 mt-0.5"></iconify-icon> Financeiro cego, sem clareza de fluxo de caixa ou comissões.
              </li>
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:danger-circle-linear" className="text-slate-400 shrink-0 mt-0.5"></iconify-icon> Pacientes esquecidos após a primeira consulta.
              </li>
            </ul>
          </div>
          {/* Solution */}
          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mb-4 border border-blue-50 relative z-10">
              <iconify-icon icon="solar:check-circle-linear" className="text-xl"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2 relative z-10">O Padrão ServyOdonto</h3>
            <ul className="space-y-3 text-sm text-slate-600 relative z-10">
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:check-read-linear" className="text-blue-500 shrink-0 mt-0.5"></iconify-icon> Uma única fonte de verdade para toda a clínica.
              </li>
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:check-read-linear" className="text-blue-500 shrink-0 mt-0.5"></iconify-icon> Fluxo de aprovação comercial e inteligência de vendas.
              </li>
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:check-read-linear" className="text-blue-500 shrink-0 mt-0.5"></iconify-icon> Gestão financeira transparente, automática e auditável.
              </li>
              <li className="flex gap-2 items-start">
                <iconify-icon icon="solar:check-read-linear" className="text-blue-500 shrink-0 mt-0.5"></iconify-icon> Relacionamento ativo, retenção e portal do paciente.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
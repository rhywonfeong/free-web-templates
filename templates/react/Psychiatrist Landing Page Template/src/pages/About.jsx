export default function About() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
            Sobre o Doutor
          </h1>
          <p className="text-lg text-slate-600">
            Conheça a trajetória e a filosofia de trabalho do Dr. Rafael Longo, pautada na união entre o conhecimento científico rigoroso e o atendimento profundamente humano.
          </p>
        </div>

        {/* Bio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative sticky top-32">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 shadow-xl border border-slate-100">
               {/* Note: Using a professional generic medical context image as requested to maintain aesthetic */}
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Rafael Longo - Detalhe Consultório" 
                className="w-full h-full object-cover filter grayscale-[20%]"
              />
            </div>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Formação e Trajetória</h2>
              <p className="mb-4">
                Com uma formação sólida nas melhores instituições do país, o Dr. Rafael Longo dedica-se integralmente à psiquiatria clínica. Sua prática é fundamentada na constante atualização acadêmica, garantindo que os pacientes recebam tratamentos modernos e seguros.
              </p>
              <p>
                Acredita que a psiquiatria vai muito além da prescrição de medicamentos; trata-se de compreender a narrativa do indivíduo, seu ambiente e seu sofrimento singular.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Filosofia de Atendimento</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-medium">Escuta Ativa</strong>
                    <span>O tempo de consulta é respeitado para garantir que o paciente possa expor suas angústias sem pressa.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-medium">Parceria Terapêutica</strong>
                    <span>As decisões de tratamento (início, ajuste ou retirada de medicação) são discutidas abertamente, avaliando riscos e benefícios em conjunto.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-medium">Sigilo e Ética</strong>
                    <span>Cumprimento rigoroso das normas do Conselho Federal de Medicina, garantindo total privacidade e confidencialidade.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="font-medium text-slate-900 mb-2">Credenciais (Exemplo)</h3>
              <ul className="text-sm space-y-2">
                <li>• Graduação em Medicina pela Universidade (UF/Estado)</li>
                <li>• Residência Médica em Psiquiatria (Instituição)</li>
                <li>• Título de Especialista pela Associação Brasileira de Psiquiatria (ABP)</li>
                <li>• Membro Titular da Associação Brasileira de Psiquiatria</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
const ProblemSection = () => {
  const testimonials = [
    {
      text: "Antes eu achava que perdia pouco. No primeiro mês de Rendiq descobri que estava perdendo R$ 4.200 por mês em frango e massas. Hoje esse número está em R$ 900.",
      author: "Marcos A.",
      role: "Proprietário · Restaurante Sabor do Campo",
      time: "Cliente há 8 meses"
    },
    {
      text: "Minha equipe resistiu no início. Hoje eles mesmos cobram quando alguém esquece de preencher. A tela de alerta funciona melhor que qualquer reunião.",
      author: "Patrícia S.",
      role: "Sócia-gerente · Temperados Self-Service",
      time: "Cliente há 5 meses"
    },
    {
      text: "Simples, direto e sem enrolação. Não quero um ERP — quero saber se minha margem está saudável. O Rendiq responde isso em 5 segundos.",
      author: "Rodrigo F.",
      role: "Proprietário · Kilo Bom",
      time: "Cliente há 11 meses"
    }
  ];

  return (
    <section id="problema" className="bg-[#F0EFF0] py-24 px-6 border-b border-[#E2E1E2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-[#E2E1E2] text-[#3D3C3D] text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
              O problema
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0C0C0C] leading-tight mb-8">
              VOCÊ SABE<br />QUANTO PERDEU<br />HOJE?
            </h2>
            <div className="p-6 bg-[#FCFBFC] border-l-4 border-[#CEFE00] rounded-r-2xl text-lg font-medium italic text-[#3D3C3D] mt-8 inline-block shadow-sm">
              "Ambiente que não mede não melhora."
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-6 justify-center text-[#3D3C3D]">
            <p className="text-base leading-relaxed">
              A maioria dos donos de restaurante por quilo não sabe. E não é falta de atenção — é falta de ferramenta certa.
            </p>
            <p className="text-base leading-relaxed">
              Planilhas são preenchidas tarde, esquecidas ou abandonadas. O desperdício continua, invisível, corroendo a margem dia a dia.
            </p>
            <p className="text-base leading-relaxed">
              O Rendiq foi desenhado para a realidade da cozinha: rápido de preencher, difícil de ignorar, claro de interpretar. Verde significa tranquilidade. <span className="text-[#EF4948] font-medium">Vermelho significa ação imediata.</span> Sem relatório. Sem espera.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#FCFBFC] p-8 rounded-2xl border border-[#E2E1E2] hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-[#F3FFB3] text-[#63AC39] rounded-full flex items-center justify-center mb-6">
              <iconify-icon icon="solar:eye-bold" width="24"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold mb-3">01 — Visibilidade</h3>
            <p className="text-sm text-[#8A898A] leading-relaxed">
              O desperdício do dia aparece em R$ e em % logo que a produção é registrada. Sem cálculo manual.
            </p>
          </div>
          <div className="bg-[#FCFBFC] p-8 rounded-2xl border border-[#E2E1E2] hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-[#F3FFB3] text-[#63AC39] rounded-full flex items-center justify-center mb-6">
              <iconify-icon icon="solar:mouse-minimalistic-bold" width="24"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold mb-3">02 — Simplicidade</h3>
            <p className="text-sm text-[#8A898A] leading-relaxed">
              O staff preenche produção e estoque em uma única tela, uma vez ao final do turno. Sem treinamento extenso.
            </p>
          </div>
          <div className="bg-[#FCFBFC] p-8 rounded-2xl border border-[#E2E1E2] hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-[#F3FFB3] text-[#63AC39] rounded-full flex items-center justify-center mb-6">
              <iconify-icon icon="solar:tuning-square-2-bold" width="24"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold mb-3">03 — Controle</h3>
            <p className="text-sm text-[#8A898A] leading-relaxed">
              O dono define as metas de desperdício do próprio restaurante. Os alertas são calibrados para a sua realidade.
            </p>
          </div>
        </div>

        {/* Numbers & Proof */}
        <div className="bg-[#0C0C0C] text-[#FCFBFC] rounded-3xl p-10 md:p-16 mb-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-semibold text-[#CEFE00]">+120</span>
              <span className="text-xs uppercase tracking-wider text-[#8A898A]">Restaurantes ativos</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-semibold text-[#CEFE00]">38%</span>
              <span className="text-xs uppercase tracking-wider text-[#8A898A]">Redução em 60 dias</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-semibold text-[#CEFE00]">&lt; 30m</span>
              <span className="text-xs uppercase tracking-wider text-[#8A898A]">Tempo de setup</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-semibold text-[#CEFE00]">3%</span>
              <span className="text-xs uppercase tracking-wider text-[#8A898A]">Churn mês 1</span>
            </div>
          </div>
          {/* Subtle noise/gradient background simulation */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CEFE00] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#FCFBFC] p-8 rounded-2xl border border-[#E2E1E2] flex flex-col justify-between">
              <div className="mb-8">
                <iconify-icon icon="solar:quote-left-bold" className="text-[#E2E1E2] mb-4 text-3xl"></iconify-icon>
                <p className="text-sm font-medium text-[#3D3C3D] leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E2E1E2] flex items-center justify-center text-[#3D3C3D] font-semibold text-xs">
                  {t.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#0C0C0C]">{t.author}</span>
                  <span className="text-[10px] text-[#8A898A]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProblemSection;
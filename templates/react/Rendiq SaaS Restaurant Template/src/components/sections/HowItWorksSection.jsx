const HowItWorksSection = () => {
  return (
    <section className="bg-[#FCFBFC] py-24 px-6 border-b border-[#E2E1E2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#F0EFF0] text-[#3D3C3D] text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Como funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0C0C0C] mb-6">
            UM LOOP<br />SIMPLES.<br />TODO DIA.
          </h2>
          <p className="text-base text-[#8A898A] max-w-lg mx-auto">
            O Rendiq não exige mudança de cultura — exige apenas 5 minutos no final do turno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dashed border-[#E2E1E2] z-0"></div>

          {/* Steps */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#0C0C0C] text-[#CEFE00] rounded-full flex items-center justify-center text-3xl mb-8 font-semibold border-8 border-[#FCFBFC]">
              01
            </div>
            <h3 className="text-lg font-semibold mb-3 tracking-tight">STAFF REGISTRA</h3>
            <p className="text-sm text-[#8A898A] leading-relaxed max-w-xs">
              No final do turno, a equipe abre o app e preenche o que foi produzido e o que sobrou por item. Uma tela, dois campos por linha.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#0C0C0C] text-[#CEFE00] rounded-full flex items-center justify-center text-3xl mb-8 font-semibold border-8 border-[#FCFBFC]">
              02
            </div>
            <h3 className="text-lg font-semibold mb-3 tracking-tight">SISTEMA CALCULA</h3>
            <p className="text-sm text-[#8A898A] leading-relaxed max-w-xs">
              Desperdício em R$, CMV estimado e % de perda são calculados automaticamente com base nos custos cadastrados e nas metas do restaurante.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#CEFE00] text-[#0C0C0C] rounded-full flex items-center justify-center text-3xl mb-8 font-semibold border-8 border-[#FCFBFC] shadow-[0_0_30px_rgba(206,254,0,0.4)]">
              03
            </div>
            <h3 className="text-lg font-semibold mb-3 tracking-tight">DONO DECIDE</h3>
            <p className="text-sm text-[#8A898A] leading-relaxed max-w-xs">
              O painel mostra verde (margem saudável) ou vermelho (ação necessária) — com contexto: melhorou ou piorou em relação a ontem?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
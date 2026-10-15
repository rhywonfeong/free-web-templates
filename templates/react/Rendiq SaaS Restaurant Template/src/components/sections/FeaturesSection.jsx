const FeaturesSection = () => {
  const features = [
    {
      title: "DASHBOARD DE MARGEM",
      desc: "Painel do dia com cards de Desperdício R$, CMV estimado, % de perda e alertas ativos. Sparkline dos últimos 7 dias para contexto de tendência.",
      target: "Dono / gerente — visão de saúde",
      icon: "solar:pie-chart-2-bold"
    },
    {
      title: "PREENCHIMENTO DE PRODUÇÃO",
      desc: "Tela unificada para a equipe registrar produção e estoque ao final do turno. Cálculo automático de desperdício por linha. Alertas visuais imediatos.",
      target: "Staff da cozinha — 3-5 min/turno",
      icon: "solar:document-add-bold",
      highlight: true
    },
    {
      title: "GESTÃO DE CARDÁPIO",
      desc: "Cadastro de categorias e itens com custo unitário, unidade de medida e validade. Colunas customizadas por categoria para adaptar ao cardápio.",
      target: "Admin",
      icon: "solar:hamburger-menu-bold"
    },
    {
      title: "HISTÓRICO E RELATÓRIOS",
      desc: "Histórico de produção com filtro por período, variação dia a dia e exportação CSV. Insumo para decisões de compra.",
      target: "Gestão estratégica",
      icon: "solar:history-bold"
    },
    {
      title: "GESTÃO DE EQUIPE",
      desc: "Convite de colaboradores por e-mail, controle de acesso por papel (admin/staff) e revogação instantânea de acesso.",
      target: "Controle de acessos",
      icon: "solar:users-group-rounded-bold"
    }
  ];

  return (
    <section id="funcionalidades" className="bg-[#F0EFF0] py-24 px-6 border-b border-[#E2E1E2]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#E2E1E2] text-[#3D3C3D] text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            O que está incluído
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0C0C0C]">
            UM SISTEMA.<br />PARA CADA<br />OPERAÇÃO.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Highlight Feature */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#FCFBFC] rounded-[24px] p-8 border-2 border-[#CEFE00] h-full relative overflow-hidden group">
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#CEFE00] text-[#0C0C0C] text-[10px] font-bold rounded-full uppercase tracking-wide">
                Destaque
              </div>
              <iconify-icon icon={features[1].icon} width="32" className="text-[#0C0C0C] mb-6"></iconify-icon>
              <h3 className="text-xl font-semibold tracking-tight mb-3">{features[1].title}</h3>
              <p className="text-sm text-[#8A898A] leading-relaxed mb-6">
                {features[1].desc}
              </p>
              <div className="inline-flex items-center gap-2 bg-[#F0EFF0] px-3 py-2 rounded-lg text-xs font-medium text-[#3D3C3D] mt-auto">
                <iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                {features[1].target}
              </div>

              {/* Decorative graphic inside card */}
              <div className="mt-8 bg-[#F0EFF0] rounded-t-xl h-32 border-t border-x border-[#E2E1E2] p-4 flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="h-8 bg-[#FCFBFC] rounded border border-[#EF4948] flex items-center justify-between px-3">
                  <span className="w-1/3 h-2 bg-[#E2E1E2] rounded"></span>
                  <span className="text-[#EF4948] text-xs font-bold">+15% acima</span>
                </div>
                <div className="h-8 bg-[#FCFBFC] rounded border border-[#E2E1E2] flex items-center justify-between px-3">
                  <span className="w-1/2 h-2 bg-[#E2E1E2] rounded"></span>
                  <span className="text-[#63AC39] text-xs font-bold">Ok</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, idx) => {
              if (feat.highlight) return null; // Skip highlight as it's rendered huge on the left
              return (
                <div key={idx} className="bg-[#FCFBFC] rounded-[20px] p-6 border border-[#E2E1E2] flex flex-col">
                  <div className="w-10 h-10 bg-[#F0EFF0] rounded-full flex items-center justify-center mb-4">
                    <iconify-icon icon={feat.icon} width="20" className="text-[#0C0C0C]"></iconify-icon>
                  </div>
                  <h3 className="text-base font-semibold tracking-tight mb-2">{feat.title}</h3>
                  <p className="text-xs text-[#8A898A] leading-relaxed mb-4 flex-grow">
                    {feat.desc}
                  </p>
                  <div className="text-[10px] text-[#8A898A] font-medium uppercase tracking-wider mt-auto">
                    {feat.target}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
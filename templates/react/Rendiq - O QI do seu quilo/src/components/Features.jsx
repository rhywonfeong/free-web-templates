import React from 'react';

const Features = () => {
  const features = [
    { id: '01', title: 'DASHBOARD DE MARGEM', desc: 'Painel do dia com cards de Desperdício R$, CMV estimado, % de perda e alertas ativos. Sparkline dos últimos 7 dias.', for: 'Dono / gerente' },
    { id: '02', title: 'PREENCHIMENTO DE PRODUÇÃO', desc: 'Tela unificada para registrar produção e estoque ao final do turno. Cálculo automático por linha. Alertas laranja/vermelho.', for: 'Staff da cozinha · 3–5 min/turno', highlight: true },
    { id: '03', title: 'GESTÃO DE CARDÁPIO', desc: 'Cadastro de categorias e itens com custo unitário, unidade de medida e validade. Colunas customizadas por categoria.', for: 'Admin' },
    { id: '04', title: 'HISTÓRICO E RELATÓRIOS', desc: 'Histórico com filtro por período, variação dia a dia e exportação CSV.', for: 'Dono / gerente' },
    { id: '05', title: 'GESTÃO DE EQUIPE', desc: 'Convite por e-mail, controle de acesso por papel (admin/staff) e revogação instantânea.', for: 'Admin' }
  ];

  return (
    <section className="bg-neutral-0 py-24 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">
        
        {/* Content Side */}
        <div className="lg:w-1/2 w-full">
          <span className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4 block">O que está incluído</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-neutral-900 mb-12 leading-tight flex flex-col">
            <span>UM SISTEMA.</span>
            <span>PARA CADA</span>
            <span>OPERAÇÃO.</span>
          </h2>
          
          <div className="flex flex-col gap-4">
            {features.map((item) => (
              <div 
                key={item.id} 
                className={`p-6 rounded-2xl border ${item.highlight ? 'border-lime-400 bg-lime-100/20' : 'border-neutral-100 bg-neutral-50'} hover:card-shadow transition-shadow`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-label text-neutral-900 uppercase flex items-center gap-2">
                    <span className="text-neutral-400 text-xs">{item.id}</span>
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-label text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                    {item.for}
                  </span>
                </div>
                <p className="text-sm font-body text-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:w-1/2 w-full h-[500px] lg:h-[700px]">
          <div className="w-full h-full overflow-hidden rounded-t-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-r-none relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop" 
              alt="Dashboard em tablet na cozinha"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
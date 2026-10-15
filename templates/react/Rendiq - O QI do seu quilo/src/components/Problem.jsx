import React from 'react';

const Problem = () => {
  return (
    <section className="bg-neutral-0 py-24 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Split Screen Intro */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <div className="w-full h-[400px] lg:h-[600px] overflow-hidden rounded-t-2xl lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-l-none relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85&auto=format&fit=crop" 
                alt="Dono de restaurante preocupado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4 block">O problema</span>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-neutral-900 mb-6 leading-tight flex flex-col">
              <span>VOCÊ SABE</span>
              <span>QUANTO PERDEU</span>
              <span>HOJE?</span>
            </h2>
            
            <p className="text-sm md:text-base font-body text-neutral-700 mb-4 leading-relaxed">
              A maioria dos donos de restaurante por quilo não sabe. E não é falta de atenção — é falta de ferramenta certa.
            </p>
            <p className="text-sm md:text-base font-body text-neutral-700 mb-8 leading-relaxed">
              Planilhas são preenchidas tarde, esquecidas ou abandonadas. O desperdício continua, invisível, corroendo a margem dia a dia.
            </p>
            
            <blockquote className="border-l-2 border-lime-400 pl-6 my-6">
              <p className="text-lg font-h3 text-neutral-900 italic">"Ambiente que não mede não melhora."</p>
            </blockquote>
            
            <p className="text-sm md:text-base font-body text-neutral-700 leading-relaxed">
              O Rendiq foi desenhado para a realidade da cozinha: rápido de preencher, difícil de ignorar, claro de interpretar. Verde significa tranquilidade. Vermelho significa ação imediata. Sem relatório. Sem espera.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { id: '01', title: 'Visibilidade', desc: 'O desperdício do dia aparece em R$ e em % logo que a produção é registrada. Sem cálculo manual.' },
            { id: '02', title: 'Simplicidade', desc: 'O staff preenche produção e estoque em uma única tela, uma vez ao final do turno. Sem treinamento extenso.' },
            { id: '03', title: 'Controle', desc: 'O dono define as metas de desperdício do próprio restaurante. Os alertas são calibrados para a sua realidade — não para uma média genérica.' }
          ].map((pillar) => (
            <div key={pillar.id} className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:card-shadow transition-shadow">
              <span className="text-xs font-label text-neutral-300 mb-4 block">{pillar.id}</span>
              <h3 className="text-lg font-h3 text-neutral-900 mb-3">{pillar.title}</h3>
              <p className="text-sm font-body text-neutral-700">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: 'Restaurantes ativos', value: '+120' },
            { label: 'Redução média de desperdício', value: '38% em 60 dias' },
            { label: 'Tempo de setup inicial', value: '< 30 min' },
            { label: 'Churn no primeiro mês', value: '3%' }
          ].map((metric, i) => (
            <div key={i} className="text-center py-8 bg-neutral-0 border-y border-neutral-100">
              <div className="text-2xl font-h2 text-neutral-900 mb-2">{metric.value}</div>
              <div className="text-xs font-label text-neutral-500">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { quote: "Antes eu achava que perdia pouco. No primeiro mês de Rendiq descobri que estava perdendo R$ 4.200 por mês em frango e massas. Hoje esse número está em R$ 900.", author: "Marcos A.", role: "Proprietário · Restaurante Sabor do Campo · Cliente há 8 meses" },
            { quote: "Minha equipe resistiu no início. Hoje eles mesmos cobram quando alguém esquece de preencher. A tela de alerta funciona melhor que qualquer reunião.", author: "Patrícia S.", role: "Sócia-gerente · Temperados Self-Service · Cliente há 5 meses" },
            { quote: "Simples, direto e sem enrolação. Não quero um ERP — quero saber se minha margem está saudável. O Rendiq responde isso em 5 segundos.", author: "Rodrigo F.", role: "Proprietário · Kilo Bom · Cliente há 11 meses" }
          ].map((test, i) => (
            <div key={i} className="bg-neutral-50 p-8 rounded-2xl flex flex-col justify-between">
              <p className="text-sm font-body text-neutral-700 italic mb-8">"{test.quote}"</p>
              <div>
                <p className="text-sm font-label text-neutral-900">{test.author}</p>
                <p className="text-[0.625rem] font-body text-neutral-500 mt-1">{test.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problem;
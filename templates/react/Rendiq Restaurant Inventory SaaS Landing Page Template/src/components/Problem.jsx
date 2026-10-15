import React from 'react'

const Problem = () => {
  return (
    <section id="problema" className="py-32 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-24">
          <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 block">O problema</span>
          <h2 className="font-display text-5xl md:text-6xl text-neutral-900 mb-8 leading-[1.1]">
            VOCÊ SABE<br />QUANTO PERDEU<br />HOJE?
          </h2>
          <div className="space-y-6 text-base text-neutral-700 max-w-2xl">
            <p>A maioria dos donos de restaurante por quilo não sabe. E não é falta de atenção — é falta de ferramenta certa.</p>
            <p>Planilhas são preenchidas tarde, esquecidas ou abandonadas. O desperdício continua, invisível, corroendo a margem dia a dia.</p>
            
            <blockquote className="border-l-4 border-lime-400 pl-6 py-2 my-8">
              <p className="text-xl font-medium text-neutral-900 italic">"Ambiente que não mede não melhora."</p>
            </blockquote>
            
            <p>O Rendiq foi desenhado para a realidade da cozinha: rápido de preencher, difícil de ignorar, claro de interpretar. Verde significa tranquilidade. Vermelho significa ação imediata. Sem relatório. Sem espera.</p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-neutral-0 p-8 rounded-[16px] shadow-sm hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-shadow">
            <div className="w-12 h-12 bg-lime-100 text-neutral-900 rounded-full flex items-center justify-center mb-6">
              <iconify-icon icon="solar:eye-bold-duotone" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-3">01 — Visibilidade</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              O desperdício do dia aparece em R$ e em % logo que a produção é registrada. Sem cálculo manual.
            </p>
          </div>

          <div className="bg-neutral-0 p-8 rounded-[16px] shadow-sm hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-shadow">
            <div className="w-12 h-12 bg-lime-100 text-neutral-900 rounded-full flex items-center justify-center mb-6">
              <iconify-icon icon="solar:bolt-bold-duotone" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-3">02 — Simplicidade</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              O staff preenche produção e estoque em uma única tela, uma vez ao final do turno. Sem treinamento extenso.
            </p>
          </div>

          <div className="bg-neutral-0 p-8 rounded-[16px] shadow-sm hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-shadow">
            <div className="w-12 h-12 bg-lime-100 text-neutral-900 rounded-full flex items-center justify-center mb-6">
              <iconify-icon icon="solar:settings-bold-duotone" width="24"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-3">03 — Controle</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              O dono define as metas de desperdício do próprio restaurante. Os alertas são calibrados para a sua realidade — não para uma média genérica.
            </p>
          </div>
        </div>

        {/* Numbers Section */}
        <div className="bg-neutral-900 rounded-[24px] p-10 md:p-16 mb-24 text-neutral-0 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-lime-400 rounded-full opacity-10 blur-[80px]"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            <div>
              <p className="font-display text-4xl text-lime-400 mb-2">+120</p>
              <p className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Restaurantes ativos</p>
            </div>
            <div>
              <p className="font-display text-4xl text-lime-400 mb-2">38%</p>
              <p className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Redução média em 60 dias</p>
            </div>
            <div>
              <p className="font-display text-4xl text-lime-400 mb-2">&lt; 30</p>
              <p className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Minutos de setup inicial</p>
            </div>
            <div>
              <p className="font-display text-4xl text-lime-400 mb-2">3%</p>
              <p className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Churn no primeiro mês</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-0 border border-neutral-100 rounded-[16px] p-8 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 italic mb-8">"Antes eu achava que perdia pouco. No primeiro mês de Rendiq descobri que estava perdendo R$ 4.200 por mês em frango e massas. Hoje esse número está em R$ 900."</p>
            <div>
              <p className="font-bold text-neutral-900 text-sm">Marcos A.</p>
              <p className="text-xs text-neutral-500 mt-1">Proprietário · Restaurante Sabor do Campo<br/>Cliente há 8 meses</p>
            </div>
          </div>

          <div className="bg-neutral-0 border border-neutral-100 rounded-[16px] p-8 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 italic mb-8">"Minha equipe resistiu no início. Hoje eles mesmos cobram quando alguém esquece de preencher. A tela de alerta funciona melhor que qualquer reunião."</p>
            <div>
              <p className="font-bold text-neutral-900 text-sm">Patrícia S.</p>
              <p className="text-xs text-neutral-500 mt-1">Sócia-gerente · Temperados Self-Service<br/>Cliente há 5 meses</p>
            </div>
          </div>

          <div className="bg-neutral-0 border border-neutral-100 rounded-[16px] p-8 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 italic mb-8">"Simples, direto e sem enrolação. Não quero um ERP — quero saber se minha margem está saudável. O Rendiq responde isso em 5 segundos."</p>
            <div>
              <p className="font-bold text-neutral-900 text-sm">Rodrigo F.</p>
              <p className="text-xs text-neutral-500 mt-1">Proprietário · Kilo Bom<br/>Cliente há 11 meses</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Problem
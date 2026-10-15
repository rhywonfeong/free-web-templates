import React from 'react';

const DarkStats = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 relative overflow-hidden clip-diagonal text-white">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1080px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          O que muda quando<br/>você usa a Decola Seller:
        </h2>
        <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto mb-20 leading-relaxed">
          Pare de perder tempo com tarefas repetitivas e foque no que realmente importa: crescer sua operação e aumentar seu faturamento.
        </p>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 tabular-nums-tight">+40%</div>
            <div className="text-lg font-medium text-white mb-1">GMV</div>
            <div className="text-slate-400 font-light text-sm">Mais vendas com os mesmos produtos</div>
          </div>
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 tabular-nums-tight">Top 3</div>
            <div className="text-lg font-medium text-white mb-1">Posicionamento</div>
            <div className="text-slate-400 font-light text-sm">Melhor posição nos marketplaces</div>
          </div>
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 tabular-nums-tight">−60%</div>
            <div className="text-lg font-medium text-white mb-1">Tempo</div>
            <div className="text-slate-400 font-light text-sm">Menos trabalho operacional repetitivo</div>
          </div>
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 tabular-nums-tight">100%</div>
            <div className="text-lg font-medium text-white mb-1">Dados</div>
            <div className="text-slate-400 font-light text-sm">Mais controle e previsibilidade escalável</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkStats;
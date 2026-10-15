import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Rafael Monteiro", time: "Aluno há 2 anos", plan: "Plano Elite",
      text: "Já treinei em várias academias da cidade. A ATLAS é um nível acima. O protocolo de avaliação inicial me mostrou desequilíbrios musculares que eu nem sabia que tinha. Em 4 meses, meu desempenho em levantamento triplicou."
    },
    {
      name: "Camila Araújo", time: "Aluna há 1 ano", plan: "Plano Plus",
      text: "Como atleta amadora de corrida, precisava de suplementação de treino de força séria. Os coaches da ATLAS entenderam isso imediatamente. Minha performance nas provas melhorou 18% no primeiro semestre."
    },
    {
      name: "Thiago Silveira", time: "Aluno há 8 meses", plan: "Plano Livre",
      text: "Voltei a treinar depois de 5 anos parado. Tinha medo de lesão, de não saber o que fazer, de ficar perdido. O sistema de onboarding da ATLAS resolveu tudo. Me sinto confiante e progredindo toda semana."
    },
    {
      name: "Fernanda Pedroso", time: "Aluna há 3 anos", plan: "Plano Elite",
      text: "A estrutura é impecável. Nunca precisei esperar por equipamento, nunca vi manutenção atrasada, nunca a temperatura estava errada. Parece detalhe, mas é exatamente isso que faz a diferença no foco do treino."
    },
    {
      name: "Bruno Ramos", time: "Aluno há 7 meses", plan: "Plano Plus",
      text: "Perdi 14kg em 6 meses sem dieta maluca e sem me matar. O coach montou um protocolo inteligente, progressivo e que cabia na minha rotina. Resultado real, sustentável. É isso que faltava."
    },
    {
      name: "Juliana Mendes", time: "Aluna há 15 meses", plan: "Plano Elite",
      text: "O check-in mensal parece simples mas é o que me mantém comprometida. Ver os números evoluindo mês a mês é o combustível que nenhum pré-treino consegue dar. É metodologia real aplicada no dia a dia."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-5 md:px-10 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <SectionHeader 
            label="Depoimentos"
            title="Quem treina fala por nós."
          />
          <div className="flex flex-col gap-1 items-start lg:items-end">
            <div className="flex text-acid gap-1">
              {[1,2,3,4,5].map(i => <iconify-icon key={i} icon="solar:star-bold" width="24"></iconify-icon>)}
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-offwhite mt-2">4.9 de 5</span>
            <span className="text-xs text-neutral-500">baseado em 847 avaliações verificadas</span>
          </div>
        </div>

        {/* Masonry-ish grid for reviews */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {feedbacks.map((fb, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 break-inside-avoid">
              <p className="text-base text-neutral-300 leading-relaxed mb-8 italic">
                "{fb.text}"
              </p>
              <div className="pt-6 border-t border-neutral-800 flex flex-col gap-1">
                <span className="font-bold text-offwhite">{fb.name}</span>
                <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-wide">
                  <span>{fb.time}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                  <span className="text-acid">{fb.plan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
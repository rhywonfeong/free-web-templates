import React from 'react';
import SectionLabel from './ui/SectionLabel';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Lucas Mendes',
      meta: 'Aluno há 1 ano · Plano Elite',
      text: 'Em 6 meses de BLK perdi 18kg e ganhei um desempenho que nunca imaginei ter. O protocolo funciona porque é individualizado de verdade. Meu coach sabe exatamente onde estou e para onde vou.'
    },
    {
      name: 'Patricia Freitas',
      meta: 'Aluna há 2 anos · Plano Plus',
      text: 'Já treinei em várias academias de SP. Nenhuma se compara à estrutura e ao nível de atenção da BLK. O ambiente em si já te coloca num estado diferente. Você não consegue ser medíocre aqui.'
    },
    {
      name: 'Roberto Saraiva',
      meta: 'Aluno há 9 meses · Plano Plus',
      text: 'Voltei a treinar depois de 5 anos parado. O protocolo de avaliação me deu segurança para começar sem medo de lesão. A evolução foi progressiva e monitorada. Em 3 meses já senti uma diferença brutal.'
    },
    {
      name: 'Juliana Silva',
      meta: 'Aluna há 1 ano · Plano Elite',
      text: 'A Camila transformou meu condicionamento físico. Em 4 meses de treino funcional minha resistência dobrou. O nível de exigência aqui é diferente — e é exatamente isso que eu precisava.'
    },
    {
      name: 'Marcos Oliveira',
      meta: 'Aluno há 1.5 anos · Plano Elite',
      text: 'Comecei no plano Livre e migrei para o Elite em 2 meses. O protocolo personalizado faz tanta diferença que não faz sentido treinar de outra forma. Meu squat aumentou 60kg em um semestre.'
    },
    {
      name: 'Ana Carolina',
      meta: 'Aluna há 8 meses · Plano Plus',
      text: 'A sauna e o banho de imersão fria são um diferencial absurdo para recuperação. Treino mais pesado porque sei que a recuperação está no protocolo também. BLK pensou em cada detalhe.'
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight text-white max-w-2xl">
            O QUE DIZEM NOSSOS <span className="text-[var(--color-primary)]">ALUNOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[var(--color-iron)]/30 border border-[var(--color-ash)]/50 p-8 flex flex-col justify-between hover:border-[var(--color-ash)] transition-colors">
              <div>
                <div className="flex gap-1 text-[var(--color-primary)] mb-6 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-[var(--color-silver)] mb-8 italic">"{review.text}"</p>
              </div>
              <div className="border-t border-[var(--color-ash)]/30 pt-4">
                <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-1">{review.name}</h4>
                <span className="text-[12px] text-[var(--color-smoke)]">{review.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
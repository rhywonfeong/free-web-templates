import React from 'react';
import { Badge } from '../ui/Badge';

const Testimonials = () => {
  const reviews = [
    {
      name: "Marcos Ferreira, 34 anos",
      role: "Empresário",
      text: "Treinei em várias academias premium de São Paulo. Nenhuma chegou perto do nível de atenção que recebi aqui. Em 6 meses, perdi 14kg e hoje bato recordes pessoais toda semana."
    },
    {
      name: "Luciana Andrade, 41 anos",
      role: "Médica",
      text: "Como médica, sou exigente com evidências. O protocolo da APEX tem base científica real — não é modinha. Minha saúde cardiovascular melhorou de forma mensurável em 4 meses."
    },
    {
      name: "Bruno Castilho, 28 anos",
      role: "Atleta amador",
      text: "Vim da academia pública. A diferença de ambiente, equipamento e orientação é absurda. Aqui eu evoluo de verdade. Coach Rafael mudou completamente minha relação com a força."
    },
    {
      name: "Patricia Lima, 37 anos",
      role: "Executiva",
      text: "Agenda corrida, viagens frequentes. A APEX me ensinou que consistência não precisa de perfeição. Com o protocolo ajustado para minha rotina, nunca fiquei mais de 10 dias sem treinar."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
          <div className="max-w-2xl">
            <Badge className="mb-6">DEPOIMENTOS</Badge>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.95]">
              Quem treina<br />aqui, sente<br />
              <span className="text-[#FF8000]">a diferença.</span>
            </h2>
          </div>
          <div className="bg-[#2B2B2B] p-6 rounded-xl border border-white/5 flex items-center gap-6 flex-shrink-0">
            <div className="text-4xl font-black text-[#FF8000]">4.9</div>
            <div>
              <div className="flex text-[#FF8000] mb-1">
                <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
              </div>
              <p className="text-xs text-[#9E9488]">No Google · +380 avaliações</p>
              <p className="text-xs font-bold mt-1 text-white">Melhor academia SP — Prêmio Exame 2023</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#2B2B2B] p-8 rounded-xl border border-white/5 relative">
              <iconify-icon 
                icon="solar:quote-right-bold" 
                width="48" 
                style={{ position: 'absolute', top: '24px', right: '24px', color: 'rgba(255,255,255,0.03)' }}
              ></iconify-icon>
              <div className="flex text-[#FF8000] mb-6">
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              </div>
              <p className="text-lg text-[#FFF8F1] leading-relaxed mb-8 italic font-medium">
                "{review.text}"
              </p>
              <div>
                <h5 className="font-bold uppercase tracking-wide text-sm">{review.name}</h5>
                <p className="text-[#9E9488] text-xs uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
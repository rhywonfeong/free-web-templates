import React from 'react';
import Badge from '../components/Badge';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lucas Andrade",
      role: "Executivo",
      time: "Aluno há 8 meses",
      text: "Em seis meses na APEX eu superei resultados que não consegui em dois anos em outras academias. O nível de acompanhamento dos coaches é incomparável. Cada treino tem um propósito real."
    },
    {
      name: "Fernanda Costa",
      role: "Médica",
      time: "Aluna há 1 ano",
      text: "O que mais me surpreendeu foi o ambiente. Sinto que sou levada a sério aqui. A estrutura é impecável, os coaches são atentos e meu progresso é medido com precisão. Vale cada centavo."
    },
    {
      name: "Marcos Pinheiro",
      role: "Triatleta amador",
      time: "Aluno há 1,5 anos",
      text: "Pratico esportes há 15 anos e nunca encontrei um lugar que combinasse tão bem estrutura de ponta com método. O Protocolo APEX realmente faz diferença. Minha performance subiu 40% em quatro meses."
    }
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#FF8040]/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-16">
          <Badge className="mb-6" dotColor="#FF8040">Depoimentos</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4">
            O que dizem <br/> nossos alunos
          </h2>
          <p className="text-gray-400 text-lg">
            Mais de 1.200 histórias de transformação. Aqui estão três delas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#100F0F] p-8 rounded-[24px] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex text-[#FF8040] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="20"></iconify-icon>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed italic mb-8">
                  "{item.text}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-white font-bold uppercase tracking-wide text-sm">{item.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{item.role} · {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
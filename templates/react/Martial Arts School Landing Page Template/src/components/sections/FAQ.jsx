import React, { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';

export default function FAQ() {
  const faqs = [
    { q: "Preciso ter experiência prévia para começar?", a: "Não. Nossas turmas de iniciantes são pensadas para quem está dando o primeiro passo. Trabalhamos do zero, com ritmo adaptado a cada aluno." },
    { q: "A partir de que idade as crianças podem começar?", a: "Aceitamos alunos a partir de 5 anos. Temos turmas específicas por faixa etária — kids, juvenil e adultos — para garantir o desenvolvimento adequado." },
    { q: "Qual equipamento é necessário para a primeira aula?", a: "Nenhum. Disponibilizamos dobok para o dia. Após a matrícula, o professor orienta sobre os itens necessários." },
    { q: "Com qual frequência devo treinar?", a: "Recomendamos no mínimo 2 vezes por semana para uma evolução consistente. Dependendo do plano, você pode treinar todos os dias úteis." },
    { q: "Como funciona o sistema de graduações?", a: "Seguem o sistema oficial da WTF/Kukkiwon para Taekwondo. Exames são realizados semestralmente mediante avaliação do professor." }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 bg-[#12151F] border-t border-[#2B3045]">
      <div className="max-w-[800px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <SectionLabel>Dúvidas Frequentes</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-4">Temos as respostas.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0B0D14] border border-[#2B3045] overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold"
              >
                <span className={openIdx === idx ? "text-[#E8193C]" : "text-white"}>{faq.q}</span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-bold" 
                  className={`transition-transform duration-300 text-xl ${openIdx === idx ? 'rotate-180 text-[#E8193C]' : 'text-[#6B7280]'}`}
                ></iconify-icon>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Nunca imaginei que frequentaria uma academia com tanta consistência. O ambiente é diferente — você chega querendo superar o treino anterior.",
      author: "Rafael Costa",
      info: "Aluno há 3 anos · Plano Elite",
    },
    {
      text: "Os coaches realmente entendem de periodização. Em 6 meses evolui mais do que em 2 anos em outras academias. Estrutura impecável.",
      author: "Amanda Martins",
      info: "Aluna há 1 ano · Plano Plus",
    },
    {
      text: "O protocolo de treinamento mudou minha relação com o exercício. Não é só academia — é um sistema que faz sentido de verdade.",
      author: "Thiago Lima",
      info: "Aluno há 2 anos · Plano Elite",
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white tracking-tight">
            O que dizem quem treina aqui.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-[#111111] border border-[#2A2A2A] p-8 rounded-[16px] flex flex-col h-full">
              <div className="flex text-[#F0A500] mb-6">
                {[1,2,3,4,5].map(i => <iconify-icon key={i} icon="solar:star-bold" width="18"></iconify-icon>)}
              </div>
              <p className="text-[#D4D4D4] text-lg leading-relaxed mb-8 flex-grow italic">
                "{test.text}"
              </p>
              <div>
                <h4 className="text-white font-semibold">{test.author}</h4>
                <p className="text-[#8A8A8A] text-sm mt-1">{test.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
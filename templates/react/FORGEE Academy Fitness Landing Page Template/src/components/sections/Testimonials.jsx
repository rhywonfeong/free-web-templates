import SectionLabel from '../ui/SectionLabel'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      name: "Rafael M.",
      role: "Engenheiro · Aluno há 3 anos"
    },
    {
      quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      name: "Juliana T.",
      role: "Professora · Aluna há 2 anos"
    },
    {
      quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientada.",
      name: "Lucas O.",
      role: "Empresário · Aluno há 4 anos"
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-[#111111] p-8 rounded-2xl border border-[#2D2D2D] flex flex-col justify-between hover:border-[#5A5A5A] transition-colors">
              <div>
                <div className="flex text-[#E8651A] mb-6 gap-1">
                  {[...Array(5)].map((_, j) => (
                    <iconify-icon key={j} icon="solar:star-bold"></iconify-icon>
                  ))}
                </div>
                <p className="text-[#E5E5E5] text-lg italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg text-[#F5F5F5] uppercase tracking-tight">{item.name}</h4>
                <p className="text-[#7A7A7A] text-xs uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
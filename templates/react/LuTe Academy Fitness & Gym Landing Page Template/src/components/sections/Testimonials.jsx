export default function Testimonials() {
  const testimonials = [
    {
      name: "Rafael M.",
      role: "Engenheiro",
      time: "Aluno há 3 anos",
      text: "Treinei em academias em São Paulo por anos. A LuTe é a única que me fez não sentir falta de nenhuma delas."
    },
    {
      name: "Juliana T.",
      role: "Professora",
      time: "Aluna há 2 anos",
      text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."
    },
    {
      name: "Lucas O.",
      role: "Empresário",
      time: "Aluno há 4 anos",
      text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."
    }
  ]

  return (
    <section className="py-24 bg-[#090909] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F9E4]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#121212] p-10 border border-[#1C1C1C] rounded-2xl flex flex-col h-full hover:border-[#2A2A2A] transition-colors relative group">
              <iconify-icon icon="solar:quote-right-bold" className="text-4xl text-[#1C1C1C] absolute top-8 right-8 group-hover:text-[#2A2A2A] transition-colors"></iconify-icon>
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <iconify-icon key={i} icon="solar:star-bold" className="text-[#00F9E4] text-sm"></iconify-icon>
                ))}
              </div>
              
              <p className="text-[#E0E0E0] text-lg leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>
              
              <div className="mt-auto">
                <div className="font-bold text-white tracking-tight">{t.name}</div>
                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-widest mt-1">
                  {t.role} · {t.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
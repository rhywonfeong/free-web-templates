export default function FeedbackSection() {
  const feedbacks = [
    {
      quote: "Em 4 meses aqui fiz mais progresso do que em 2 anos em outras academias. O protocolo de treino é diferente de tudo que já vi.",
      author: "Marcelo R.",
      time: "aluno há 8 meses"
    },
    {
      quote: "A atenção individualizada muda tudo. Tenho uma coach que conhece cada detalhe do meu treino e ajusta conforme eu evoluo.",
      author: "Ana Paula T.",
      time: "aluna há 14 meses"
    },
    {
      quote: "Infraestrutura impecável. Nunca precisei esperar por equipamento e o ambiente te coloca no modo treino assim que você entra.",
      author: "Diego M.",
      time: "aluno há 3 anos"
    },
    {
      quote: "Perdi 18kg com acompanhamento do plano Elite. Resultado real, com método — não dieta da moda nem treino aleatório.",
      author: "Fernanda S.",
      time: "aluna há 11 meses"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">O que dizem nossos alunos</span>
          <h2 className="font-display text-5xl md:text-6xl text-white">Resultados que falam por si.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {feedbacks.map((fb, idx) => (
            <div key={idx} className="bg-[#111111] border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
              <div className="mb-8">
                <iconify-icon icon="solar:quote-left-bold" class="text-[#FF5500]/20 text-5xl mb-4 block"></iconify-icon>
                <p className="text-[#E0E0E0] text-lg leading-relaxed">"{fb.quote}"</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-white font-semibold">{fb.author}</h4>
                  <p className="text-[#888888] text-xs mt-1">{fb.time}</p>
                </div>
                <div className="flex gap-1 text-[#FF5500]">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" class="text-sm"></iconify-icon>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#planos" className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300">
            Agendar visita gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
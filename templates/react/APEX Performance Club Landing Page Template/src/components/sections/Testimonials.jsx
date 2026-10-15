export default function Testimonials() {
  const reviews = [
    {
      quote: "Já treinei em várias academias premium e o APEX é outro nível. O protocolo individualizado mudou minha relação com o treino — em 4 meses alcancei o que não consegui em 2 anos.",
      name: "Marcos Vinícius, 34 anos",
      meta: "Aluno há 2 anos · Plano Elite"
    },
    {
      quote: "O que me surpreendeu foi a consistência. Coach presente, equipamento sempre disponível, ambiente que te dá vontade de aparecer. Minha frequência nunca foi tão alta na vida.",
      name: "Fernanda Rocha, 29 anos",
      meta: "Aluna há 14 meses · Plano Plus"
    },
    {
      quote: "Entrei no APEX para emagrecer e acabei encontrando uma comunidade. A Camila montou um protocolo que respeita meu corpo e meu ritmo. Perdi 18kg sem sofrimento.",
      name: "Carlos Eduardo, 41 anos",
      meta: "Aluno há 8 meses · Plano Elite"
    },
    {
      quote: "A estrutura é impecável, mas o diferencial mesmo são os coaches. Eles sabem o que fazem, te cobram do jeito certo e te celebram a cada progresso. Isso é raro.",
      name: "Juliana Pires, 36 anos",
      meta: "Aluna há 3 anos · Plano Plus"
    },
    {
      quote: "Sou executivo e meu tempo é limitado. O APEX entende isso — 45 minutos de protocolo bem feito valem mais do que 2 horas de treino aleatório. Resultado em dobro.",
      name: "Roberto Fonseca, 47 anos",
      meta: "Aluno há 19 meses · Plano Elite"
    },
    {
      quote: "Voltei a treinar depois de uma lesão no joelho e o suporte foi incrível. A Ana Beatriz desenvolveu um protocolo que me fez evoluir sem dor.",
      name: "Tatiana Souza, 38 anos",
      meta: "Aluna há 11 meses · Plano Plus"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#111111] text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block uppercase font-medium text-xs tracking-[0.12em] mb-6 border border-neutral-700 rounded-full px-4 py-1.5 text-neutral-400">
            O que dizem sobre nós
          </span>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tight leading-[0.9]">
            Resultados que<br/>falam por si.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 flex flex-col hover:border-acid transition-colors duration-300">
              <div className="flex gap-1 text-acid mb-6">
                {[...Array(5)].map((_, j) => (
                  <iconify-icon key={j} icon="solar:star-bold"></iconify-icon>
                ))}
              </div>
              <p className="text-neutral-300 font-light text-sm leading-relaxed mb-8 flex-grow italic">
                "{review.quote}"
              </p>
              <div>
                <h4 className="font-display font-semibold uppercase tracking-wider text-sm text-white mb-1">
                  {review.name}
                </h4>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">
                  {review.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import SectionHeading from '../ui/SectionHeading';

const Testimonials = () => {
  const feedbacks = [
    {
      quote: "Em 6 meses perdi 18kg e ganhei força que nunca tive na vida.",
      text: "Entrei na FORGELAB sem acreditar muito que dessa vez seria diferente. Tinha tentado dezenas de academias antes. O que mudou foi o acompanhamento — meu coach sabia exatamente o que eu precisava. Nunca me senti perdido.",
      author: "Ricardo Menezes",
      meta: "41 anos · Executivo · Aluno há 14 meses"
    },
    {
      quote: "A estrutura aqui é incomparável. Parece outro país.",
      text: "Já treinei em academias de luxo em São Paulo, Miami e Lisboa. A FORGELAB não perde pra nenhuma delas — e ainda tem o que as outras não têm: um time que realmente se importa com a sua evolução.",
      author: "Camila Resende",
      meta: "34 anos · Empreendedora · Aluna há 2 anos"
    },
    {
      quote: "Voltei a correr depois de 3 cirurgias no joelho. Achei que era impossível.",
      text: "A equipe de reabilitação e performance da FORGELAB me acompanhou do zero. Com paciência, protocolo e muita competência, hoje compito em corridas de rua aos 52 anos. Não tenho palavras.",
      author: "Paulo Drummond",
      meta: "52 anos · Médico · Aluno há 3 anos"
    },
    {
      quote: "Finalmente uma academia que trata você como adulto.",
      text: "Sem enrolação, sem cardápio genérico, sem treino igual pra todo mundo. Me avaliaram, montaram um protocolo específico e me explicaram cada decisão. Isso não é academia — é consultoria de performance.",
      author: "Isabela Carvalho",
      meta: "45 anos · Advogada · Aluna há 11 meses"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading 
          supertitle="O que nossos alunos dizem"
          title="Resultados reais. Pessoas reais."
          alignment="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {feedbacks.map((item, idx) => (
            <div key={idx} className="bg-[#141414] border border-white/5 p-8 lg:p-10 rounded-2xl hover:bg-[#1E1E1E] transition-colors flex flex-col justify-between">
              <div>
                <iconify-icon icon="solar:quote-right-bold" class="text-3xl text-[#E84E1B] mb-6 opacity-50"></iconify-icon>
                <h4 className="text-xl font-bold text-white mb-4 leading-snug">"{item.quote}"</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center text-white font-bold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">{item.author}</p>
                  <p className="text-neutral-500 text-xs">{item.meta}</p>
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
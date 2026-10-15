import Tag from '../ui/Tag';

export default function Testimonials() {
  const reviews = [
    {
      text: "Em seis meses na APEX perdi 14kg e bati meus recordes pessoais no supino e agachamento. O protocolo realmente funciona.",
      author: "Marcos R.",
      meta: "Aluno desde 2022 · Plano Elite",
      rating: 5
    },
    {
      text: "A estrutura da APEX é incomparável. Treinei em academias em SP e Miami — nível de equipamento está no mesmo patamar.",
      author: "Carolina F.",
      meta: "Aluna desde 2020 · Plano Plus",
      rating: 5
    },
    {
      text: "Minha coach foi fundamental na minha preparação para o triathlon. Avaliação detalhada e check-ins quinzenais me mantiveram no caminho.",
      author: "André T.",
      meta: "Aluno desde 2021 · Plano Elite",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#111111] border-y border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <Tag className="mb-6">Depoimentos</Tag>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
              O que nossos <br/>
              <span className="text-[#FF4500]">alunos dizem</span>
            </h2>
          </div>
          
          <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-2xl p-6 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-display font-bold text-4xl text-white">4.9</span>
              <div className="flex text-[#F5C800] text-sm mt-1">
                {[...Array(5)].map((_, i) => (
                  <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>
                ))}
              </div>
            </div>
            <div className="h-12 w-[1px] bg-[#2E2E2E]"></div>
            <div className="flex flex-col">
              <span className="text-white font-medium">1.847 avaliações</span>
              <span className="text-[#666666] text-xs uppercase tracking-widest mt-1">Média Geral</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2E2E2E] flex flex-col justify-between">
              <div>
                <div className="flex text-[#F5C800] text-sm mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>
                  ))}
                </div>
                <p className="text-[#B0B0B0] text-lg italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              <div className="border-t border-[#2E2E2E] pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#242424] flex items-center justify-center font-display font-bold text-white text-lg">
                  {review.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">{review.author}</span>
                  <span className="text-[#666666] text-xs">{review.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
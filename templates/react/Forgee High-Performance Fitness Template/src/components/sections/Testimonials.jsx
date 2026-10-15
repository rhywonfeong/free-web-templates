import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';

const Testimonials = () => {
  const feedbacks = [
    {
      name: "André Cavalcante",
      plan: "Elite",
      time: "2 anos",
      text: "Já treinei em 6 academias diferentes em São Paulo. A Forgee não tem comparação. Não é só a estrutura — é o nível de atenção que o coach dá. Em 8 meses, quebrei todos os meus recordes pessoais."
    },
    {
      name: "Fernanda Lira",
      plan: "Plus",
      time: "14 meses",
      text: "Fui pela estrutura. Fiquei pelo protocolo. A diferença de ter um treino montado pra mim — com revisão mensal e acompanhamento real — é absurda. Perdi 11kg em 5 meses sem neura, só treino consistente."
    },
    {
      name: "Ricardo Nunes",
      plan: "Elite",
      time: "3 anos",
      text: "Cheguei com 52 anos sem treinar há uma década. Saí da primeira avaliação com um protocolo completo. Hoje levanto mais peso do que levantava aos 35. A Forgee entende de longevidade atlética de verdade."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8F7F6]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <SectionHeader 
          align="center"
          eyebrow="RESULTADOS REAIS"
          title="ELES NÃO ACREDITARAM ATÉ TENTAR."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((f, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[20px] border border-[#E6E3E0] shadow-sm flex flex-col relative">
              <iconify-icon icon="solar:quote-right-bold" class="absolute top-8 right-8 text-[#FFF0E8] text-5xl" />
              
              <div className="mb-6 z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" class="text-[#E84E0F] text-[14px]" />
                  ))}
                </div>
                <p className="text-[#1E1B18] text-[16px] leading-[1.6] font-medium">
                  "{f.text}"
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-[#F0EEEC] flex items-center justify-between z-10">
                <div>
                  <h4 className="font-bold text-[#0F0D0B] text-[15px]">{f.name}</h4>
                  <p className="text-[#8A837C] text-[13px]">{f.time} na Forgee</p>
                </div>
                <Tag variant="neutral" className="!bg-[#F8F7F6] font-accent">
                  PLANO {f.plan}
                </Tag>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-[#E6E3E0] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <p className="text-[#4A4540] text-[14px] font-medium">
              <strong className="text-[#0F0D0B]">+1.200 alunos</strong> avaliaram a Forgee com média de <strong className="text-[#0F0D0B]">4.9 / 5.0</strong> ⭐
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
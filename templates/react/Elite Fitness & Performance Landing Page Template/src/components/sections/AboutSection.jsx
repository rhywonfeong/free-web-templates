import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => {
  const pillars = [
    { num: "01", title: "Intensidade", desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino." },
    { num: "02", title: "Precisão", desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui." },
    { num: "03", title: "Controle", desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte." }
  ];

  const numbers = [
    { num: "+1.200", desc: "Alunos ativos" },
    { num: "94%", desc: "Retenção 6 meses" },
    { num: "08", desc: "Anos em operação" },
    { num: "1.800", desc: "M² dedicados" },
  ];

  const testimonials = [
    { text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", author: "Rafael M.", role: "Engenheiro · Aluno há 3 anos" },
    { text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", author: "Juliana T.", role: "Professora · Aluna há 2 anos" },
    { text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", author: "Lucas O.", role: "Empresário · Aluno há 4 anos" }
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#080808] border-b border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <div>
            <SectionHeading 
              label="Quem Somos"
              title="FORJADOS PELA DISCIPLINA."
            />
            <div className="prose prose-invert max-w-none text-[#BDBDBD] text-lg leading-relaxed">
              <p className="mb-6">A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
              <p className="mb-12">Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
              
              <blockquote className="border-l-4 border-[#E8201A] pl-8 py-2 my-12 text-2xl font-bold italic text-white">
                "In silence, the transformation begins."
              </blockquote>
              
              <p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-24">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#1A1A1A] p-8 lg:p-10 border border-white/5 hover:border-[#E8201A]/50 transition-colors group">
                <div className="flex items-start gap-6">
                  <span className="text-xl font-black text-[#424242] group-hover:text-[#E8201A] transition-colors">{pillar.num}</span>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">{pillar.title}</h3>
                    <p className="text-[#757575] text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Block */}
        <div className="bg-[#1A1A1A] border border-white/5 py-16 px-8 mb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {numbers.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-black uppercase tracking-tightest text-white mb-2">{item.num}</span>
                <span className="text-[10px] text-[#757575] uppercase tracking-wide-label">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-8 border border-white/5 flex flex-col h-full">
              <iconify-icon icon="solar:quote-right-bold-duotone" className="text-3xl text-[#424242] mb-6"></iconify-icon>
              <p className="text-[#BDBDBD] text-sm leading-relaxed mb-8 flex-grow">"{test.text}"</p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white font-bold text-sm uppercase tracking-wide">{test.author}</p>
                <p className="text-[#757575] text-[10px] uppercase tracking-wide-label mt-1">{test.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-24">
          <SectionTitle 
            eyebrow="Quem somos"
            title="A IDENTIDADE É"
            titleAccent="FORJADA."
            className="mb-0 sticky top-32"
          />
          
          <div className="flex flex-col gap-8 text-[#B0B0B0] text-lg leading-relaxed">
            <p>
              A FORGEE nasceu de uma certeza simples: <strong className="text-white font-medium">ambiente mediano produz resultado mediano.</strong>
            </p>
            <p>
              Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
            </p>
            
            <blockquote className="my-8 py-6 pl-8 border-l-2 border-[#E8400A] bg-[#111111]/50 italic text-white font-display text-2xl tracking-tight">
              "In silence, the transformation begins."
            </blockquote>
            
            <p>
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 border-t border-subtle pt-24 mb-32">
          {[
            {
              id: '01',
              title: 'Intensidade',
              desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.'
            },
            {
              id: '02',
              title: 'Precisão',
              desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.'
            },
            {
              id: '03',
              title: 'Controle',
              desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.'
            }
          ].map((pillar) => (
            <div key={pillar.id} className="group cursor-default">
              <span className="text-[#2A2A2A] font-display text-5xl font-bold group-hover:text-[#E8400A] transition-colors block mb-4">
                {pillar.id}
              </span>
              <h3 className="text-white font-display uppercase tracking-tight text-2xl mb-4">{pillar.title}</h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
              author: "Rafael M.",
              meta: "Engenheiro · Aluno há 3 anos"
            },
            {
              quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
              author: "Juliana T.",
              meta: "Professora · Aluna há 2 anos"
            },
            {
              quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
              author: "Lucas O.",
              meta: "Empresário · Aluno há 4 anos"
            }
          ].map((test, i) => (
            <div key={i} className="bg-surface border border-subtle p-8 hover:border-[#E8400A]/50 transition-colors flex flex-col justify-between">
              <p className="text-[#D9D9D9] mb-8 leading-relaxed">"{test.quote}"</p>
              <div>
                <h5 className="text-white font-bold text-sm uppercase tracking-wider">{test.author}</h5>
                <span className="text-[#6B6B6B] text-[11px] uppercase tracking-widest">{test.meta}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
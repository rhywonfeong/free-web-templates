import { Eyebrow, Headline } from '../ui/Typography';

export default function About() {
  const pillars = [
    {
      num: "01",
      title: "Intensidade",
      desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino."
    },
    {
      num: "02",
      title: "Precisão",
      desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui."
    },
    {
      num: "03",
      title: "Controle",
      desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte."
    }
  ];

  const metrics = [
    { label: "Alunos ativos", value: "+1.200" },
    { label: "Retenção 6m", value: "94%" },
    { label: "Anos operando", value: "8 ANOS" },
    { label: "Área dedicada", value: "1.8K M²" },
  ];

  const testimonials = [
    {
      quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      author: "Rafael M.",
      role: "Engenheiro · Aluno há 3 anos"
    },
    {
      quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      author: "Juliana T.",
      role: "Professora · Aluna há 2 anos"
    },
    {
      quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
      author: "Lucas O.",
      role: "Empresário · Aluno há 4 anos"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
        <div className="lg:col-span-5">
          <Eyebrow>Quem somos</Eyebrow>
          <Headline text="FORJADOS PELA DISCIPLINA." highlight="DISCIPLINA." size="xl" />
        </div>
        
        <div className="lg:col-span-7 flex flex-col justify-end gap-8 text-[#D9D9D9] text-lg leading-relaxed">
          <p>
            A FORGEE nasceu de uma certeza simples: <span className="text-white font-medium">ambiente mediano produz resultado mediano.</span>
          </p>
          <p>
            Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
          </p>
          <blockquote className="border-l-2 border-[#E8400A] pl-6 py-2 my-4 text-2xl font-display font-semibold italic text-white">
            "In silence, the transformation begins."
          </blockquote>
          <p className="text-[#B0B0B0] text-base">
            Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16 border-t border-[#2A2A2A] mb-24">
        {pillars.map((pillar, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-[#E8400A] font-display font-bold text-xl mb-4">{pillar.num}</span>
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-4">{pillar.title}</h3>
            <p className="text-[#B0B0B0] text-sm leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Metrics Row */}
      <div className="bg-[#1E1E1E] rounded-md p-8 md:p-12 flex flex-wrap justify-between gap-8 mb-24">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-2">{m.value}</span>
            <span className="text-xs font-medium tracking-wide uppercase text-[#6B6B6B]">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#181818] border border-[#2A2A2A] p-8 rounded-md flex flex-col justify-between">
            <p className="text-white italic mb-8">"{t.quote}"</p>
            <div>
              <p className="font-bold text-white text-sm">{t.author}</p>
              <p className="text-xs text-[#6B6B6B] mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
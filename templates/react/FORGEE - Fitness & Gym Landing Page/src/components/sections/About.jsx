import SectionHeading from '../ui/SectionHeading';

export default function About() {
  const pillars = [
    {
      title: "Intensidade",
      desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino."
    },
    {
      title: "Precisão",
      desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui."
    },
    {
      title: "Controle",
      desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte."
    }
  ];

  const stats = [
    { number: "+1.200", label: "Alunos ativos" },
    { number: "94%", label: "Retenção 6 meses" },
    { number: "8 anos", label: "Em operação" },
    { number: "1.8K", label: "M² Dedicados" }
  ];

  const testimonials = [
    {
      text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      author: "Rafael M.",
      role: "Engenheiro · Aluno há 3 anos"
    },
    {
      text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      author: "Juliana T.",
      role: "Professora · Aluna há 2 anos"
    },
    {
      text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
      author: "Lucas O.",
      role: "Empresário · Aluno há 4 anos"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Left: Image Block */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-zinc-800 rounded-sm translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" 
              alt="Gym environment" 
              className="w-full h-auto aspect-[4/5] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 border border-white/10 mix-blend-overlay"></div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="text-xs font-bold tracking-widest text-red-600 uppercase mb-4 block">A Fundação</p>
            <SectionHeading 
              title={["FORJADOS", "PELA", "DISCIPLINA."]} 
              className="mb-8"
            />
            
            <div className="space-y-6 text-zinc-400 text-lg font-light">
              <p>
                A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
              </p>
              <p>
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
              
              <blockquote className="border-l-2 border-red-600 pl-6 py-2 my-8 text-2xl font-medium text-white italic">
                "In silence, the transformation begins."
              </blockquote>
              
              <p>
                Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-zinc-900 pt-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{pillar.title}</h3>
              </div>
              <p className="text-zinc-500 font-light">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 bg-zinc-950 p-12 border border-zinc-900">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-4xl md:text-6xl font-black text-red-600 tracking-tighter mb-2">{stat.number}</div>
              <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-zinc-950 p-8 border border-zinc-900 flex flex-col justify-between hover:border-zinc-700 transition-colors duration-300">
              <iconify-icon icon="solar:quote-right-bold" width="32" className="text-zinc-800 mb-6"></iconify-icon>
              <p className="text-zinc-300 mb-8 font-light italic leading-relaxed">"{test.text}"</p>
              <div>
                <p className="text-white font-bold uppercase text-sm tracking-wide">{test.author}</p>
                <p className="text-zinc-600 text-xs mt-1 uppercase tracking-wider">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
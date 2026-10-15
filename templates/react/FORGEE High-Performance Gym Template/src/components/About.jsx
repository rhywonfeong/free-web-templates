export default function About() {
  return (
    <section className="px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="mb-4">
        <span className="text-[#E84A1A] uppercase tracking-[0.15em] text-xs font-bold">Quem somos</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
            FORJADOS<br />PELA<br /><span className="text-[#CCFF00]">DISCIPLINA.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-8">
          <p className="text-lg text-[#CCCCCC] leading-relaxed">
            A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
          </p>
          <p className="text-lg text-[#CCCCCC] leading-relaxed">
            Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
          </p>
          <blockquote className="border-l-2 border-[#1B40FF] pl-6 py-2 my-4">
            <p className="font-accent text-2xl md:text-3xl text-white">"In silence, the transformation begins."</p>
          </blockquote>
          <p className="text-[#888888] leading-relaxed">
            Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
          { num: '01', title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
          { num: '02', title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
          { num: '03', title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
        ].map((pillar) => (
          <div key={pillar.num} className="bg-[#1E1E1E] p-8 rounded-2xl hover:bg-[#252525] transition-colors border border-white/5">
            <span className="text-[#888888] font-display text-2xl mb-4 block">{pillar.num}</span>
            <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
            <p className="text-[#AAAAAA]">{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Rafael M.', role: 'Engenheiro · Aluno há 3 anos', text: 'Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.' },
          { name: 'Juliana T.', role: 'Professora · Aluna há 2 anos', text: 'Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.' },
          { name: 'Lucas O.', role: 'Empresário · Aluno há 4 anos', text: 'A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.' }
        ].map((test, i) => (
          <div key={i} className="flex flex-col gap-4 p-8 bg-gradient-to-b from-[#1E1E1E] to-[#141414] rounded-xl border border-white/5 relative overflow-hidden group">
            <iconify-icon icon="solar:quote-right-bold" class="absolute top-6 right-6 text-4xl text-white/5 group-hover:text-[#1B40FF]/20 transition-colors"></iconify-icon>
            <p className="text-[#CCCCCC] text-lg italic leading-relaxed relative z-10">"{test.text}"</p>
            <div className="mt-auto pt-6">
              <p className="text-white font-bold">{test.name}</p>
              <p className="text-[#888888] text-xs uppercase tracking-widest">{test.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
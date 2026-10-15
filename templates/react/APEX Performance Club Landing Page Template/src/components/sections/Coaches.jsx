import SectionHeader from '../ui/SectionHeader';

export default function Coaches() {
  const coaches = [
    {
      name: "Rafael Mendes",
      specialty: "Hipertrofia & Força",
      creds: "CREF ativo · CSCS (NSCA) · 9 anos de exp.",
      bio: "Especialista em treino de força com foco em hipertrofia máxima. Já acompanhou atletas de bodybuilding e alunos de alto rendimento.",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
    },
    {
      name: "Camila Torres",
      specialty: "Funcional & Mobilidade",
      creds: "CREF ativo · FMS Certified · Pós em Cinesiologia",
      bio: "Referência em treinamento funcional integrativo. Trabalha com reabilitação ativa e performance para o dia a dia de alta exigência.",
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80"
    },
    {
      name: "Diego Alves",
      specialty: "Condicionamento & HIIT",
      creds: "CREF ativo · CrossFit L2 · Nutrição Esportiva",
      bio: "Especialista em protocolos metabólicos de alta intensidade. Integra treino e alimentação para resultados acelerados.",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
    },
    {
      name: "Ana Beatriz Lopes",
      specialty: "Emagrecimento & Postura",
      creds: "CREF ativo · Pilates Avançado · Pós em Fisiologia",
      bio: "Combina fisiologia do exercício com consciência corporal. Seu método equilibra intensidade e escuta do corpo — alta performance sem lesões.",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader 
          label="Nossos coaches"
          title="Quem vai estar do seu lado."
          description="Nossos coaches são selecionados por critério técnico e postura profissional. Todos com formação superior, certificações internacionais e compromisso real com o seu resultado."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative bg-neutral-100">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-acid text-xs font-bold uppercase tracking-widest bg-[#111111] px-3 py-1 rounded-full border border-acid/20">
                    {coach.specialty}
                  </span>
                </div>
              </div>
              
              <h3 className="font-display font-bold uppercase text-2xl tracking-wide mb-1 group-hover:text-acid transition-colors">{coach.name}</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-4 pb-4 border-b border-neutral-100">
                {coach.creds}
              </p>
              <p className="text-sm font-light text-neutral-600 leading-relaxed">
                {coach.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
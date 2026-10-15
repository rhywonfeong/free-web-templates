import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const Coaches = () => {
  const coaches = [
    {
      name: "Rafael Moura",
      role: "Hipertrofia & Força",
      cert: "CREF · NSCA-CSCS · Fisiologia",
      bio: "9 anos de experiência com atletas. Desenvolveu o protocolo de força da APEX e treina atletas de powerlifting.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
    },
    {
      name: "Camila Torres",
      role: "Condicionamento & Emagrecimento",
      cert: "CREF · Funcional · Nutrição Esportiva",
      bio: "Referência em transformação corporal com abordagem integrada. Formada pela USP, com passagem pela seleção de atletismo.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80"
    },
    {
      name: "Diego Alves",
      role: "Reabilitação & Mobilidade",
      cert: "CREF · Fisioterapeuta · Biomecânica",
      bio: "Especialista em retorno ao treino pós-lesão. Atende atletas de alto rendimento e praticantes que querem treinar com longevidade.",
      image: "https://images.unsplash.com/photo-1534438097545-a4c148203d98?w=800&q=80"
    },
    {
      name: "Isabela Nunes",
      role: "Funcional & Esportes de Combate",
      cert: "CREF · CrossFit L2 · HIIT",
      bio: "Atleta com 7 anos de experiência em treinamento de alta intensidade. Apaixonada por evolução progressiva e treinos que desafiam limites.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
    }
  ];

  return (
    <section id="coaches" className="py-24 lg:py-32 bg-[#2B2B2B] text-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 max-w-2xl">
          <Badge className="mb-6">NOSSA EQUIPE</Badge>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.95] mb-6">
            Coaches que<br />treinam com você.<br />
            <span className="text-[#FF8000]">Não por você.</span>
          </h2>
          <p className="text-lg text-[#9E9488]">
            Nossa equipe é formada por profissionais de Educação Física certificados, com especialização em performance, reabilitação e nutrição esportiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {coaches.map((coach, idx) => (
            <div key={idx} className="bg-[#1A1A1A] rounded-xl overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
              </div>
              <div className="p-6 relative -mt-10">
                <h4 className="text-xl font-bold uppercase tracking-wide mb-1">{coach.name}</h4>
                <p className="text-[#FF8000] text-sm font-bold uppercase tracking-wider mb-4">{coach.role}</p>
                <div className="text-xs text-[#9E9488] font-medium mb-4 flex items-center gap-2">
                  <iconify-icon icon="solar:diploma-bold"></iconify-icon>
                  {coach.cert}
                </div>
                <p className="text-sm text-[#FFF8F1]/70 leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="primary">Falar com um Coach</Button>
        </div>

      </div>
    </section>
  );
};

export default Coaches;
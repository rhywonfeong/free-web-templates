import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const About = () => {
  const differentials = [
    {
      icon: "solar:cup-star-bold-duotone",
      title: "Metodologia Proprietária",
      desc: "Sistema de treino desenvolvido internamente com base em ciência do esporte."
    },
    {
      icon: "solar:eye-bold-duotone",
      title: "Acompanhamento Real",
      desc: "Nenhum aluno treina sem orientação — do iniciante ao atleta."
    },
    {
      icon: "solar:lock-password-bold-duotone",
      title: "Acesso Controlado",
      desc: "Ambiente exclusivo, sem superlotação. Seu treino com qualidade garantida."
    }
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#FFF8F1] text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div>
            <Badge className="mb-6">SOBRE NÓS</Badge>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.95] mb-10 text-[#2B2B2B]">
              Mais do que<br />
              uma academia.<br />
              <span className="text-[#FF8000]">Um padrão.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-[#5C554E] leading-relaxed mb-10">
              <p>
                A APEX nasceu de uma convicção simples: o ambiente onde você treina importa tanto quanto o treino em si. Fundada em 2012 por ex-atletas e especialistas em performance humana, nossa estrutura foi projetada para eliminar qualquer desculpa entre você e o seu melhor resultado.
              </p>
              <p>
                Aqui não existe "academia de bairro". Cada metro quadrado foi pensado para entregar concentração, intensidade e progresso. Equipamentos de nível profissional, protocolos de treino individualizados e uma equipe de coaches que trata o seu objetivo como o único que importa.
              </p>
              <p className="font-semibold text-[#2B2B2B] text-xl border-l-4 border-[#FF8000] pl-6 py-2">
                Este é o lugar onde disciplina vira identidade.
              </p>
            </div>

            <Button href="#historia" variant="outlineOrange">Conhecer a nossa história</Button>
          </div>

          {/* Right Differentials Grid */}
          <div className="flex flex-col gap-8 lg:mt-24">
            {differentials.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#2B2B2B]/5 transition-transform hover:-translate-y-1">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FFF8F1] flex items-center justify-center text-[#FF8000]">
                  <iconify-icon icon={item.icon} width="32"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#2B2B2B]">{item.title}</h4>
                  <p className="text-[#5C554E] text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
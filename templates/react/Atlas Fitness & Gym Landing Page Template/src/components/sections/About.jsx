import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const About = () => {
  const pillars = [
    { title: "Método", desc: "Protocolos desenvolvidos por profissionais com formação internacional." },
    { title: "Estrutura", desc: "Equipamentos de linha profissional, calibrados e renovados anualmente." },
    { title: "Comunidade", desc: "Um ambiente sério, mas sem seriedade excessiva. Foco total, ego zero." },
    { title: "Resultado", desc: "Métricas reais. Acompanhamento constante. Evolução mensurável." }
  ];

  return (
    <section id="quem-somos" className="py-24 md:py-32 px-5 md:px-10 relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        <div className="flex flex-col gap-8">
          <SectionHeader 
            label="Quem Somos"
            title="Mais que uma academia. Uma filosofia."
          />
          
          <div className="flex flex-col gap-6 text-neutral-300 text-lg leading-relaxed">
            <p>
              A ATLAS nasceu da convicção de que treinar bem é um ato de respeito próprio. Desde 2012, construímos um espaço onde cada detalhe foi pensado para extrair o máximo do seu potencial — da disposição dos equipamentos ao método de cada coach, da qualidade do ar ao silêncio que permite foco absoluto.
            </p>
            <p>
              Não somos uma academia de bairro. Somos um sistema. Um protocolo. Um compromisso com a transformação real — aquela que acontece quando estrutura, orientação e vontade se encontram no lugar certo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-acid font-display uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                  <iconify-icon icon="solar:bolt-circle-bold" width="20"></iconify-icon>
                  {pillar.title}
                </span>
                <p className="text-sm text-neutral-400">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="primary">Agendar Visita Gratuita</Button>
            <Button variant="outline">Falar com Especialista</Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full mt-10 lg:mt-0 lg:sticky lg:top-32 shadow-ambient">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
            alt="Estrutura da academia" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 border border-neutral-800 pointer-events-none m-4"></div>
        </div>

      </div>
    </section>
  );
};

export default About;
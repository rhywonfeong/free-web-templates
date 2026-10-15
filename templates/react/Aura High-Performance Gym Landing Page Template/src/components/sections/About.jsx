import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const About = () => {
  const differentials = [
    {
      icon: "solar:bolt-bold",
      title: "Metodologia própria",
      desc: "Sistema de treinamento desenvolvido com base em evidências científicas e aplicação prática real."
    },
    {
      icon: "solar:target-bold",
      title: "Acompanhamento individualizado",
      desc: "Cada aluno tem um protocolo ajustado à sua biologia, rotina e objetivo."
    },
    {
      icon: "solar:buildings-bold",
      title: "Estrutura de elite",
      desc: "Mais de 800m² de área treinável, equipamentos de última geração e ambiente controlado."
    },
    {
      icon: "solar:users-group-two-rounded-bold",
      title: "Comunidade seletiva",
      desc: "Um ambiente onde todo mundo está aqui para crescer — sem espaço para mediocridade."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-[#111111] relative">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 text-[#1A1A1A] font-display font-black text-[15vw] leading-none opacity-50 whitespace-nowrap pointer-events-none select-none overflow-hidden">
        SISTEMA
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <SectionHeader 
              tag="Nossa história" 
              title="Não somos uma academia. Somos um sistema." 
            />
            <div className="space-y-6 text-[#CCCCCC] text-lg leading-relaxed mb-10">
              <p>
                Durante mais de uma década, construímos algo que vai além de equipamentos e espelhos. Nascemos da convicção de que treino de verdade exige método, estrutura e acompanhamento — não apenas acesso a um espaço.
              </p>
              <p>
                Cada detalhe do nosso ambiente foi projetado para eliminar distrações e potencializar performance. Do piso ao teto, do protocolo ao coach, tudo aqui tem uma razão de existir: fazer você evoluir mais rápido, com mais consistência e menos risco.
              </p>
              <p className="font-bold text-white border-l-2 border-[#AAFF00] pl-4">
                Nossos alunos não vêm buscar motivação. Eles vêm buscar resultado. E encontram.
              </p>
            </div>
            
            <Button variant="ghost" href="#agendar" icon="solar:arrow-right-linear">
              Quer conhecer de perto? Agende uma visita
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-8 border border-[#252525] hover:border-[#AAFF00]/30 transition-colors group">
                <div className="w-12 h-12 bg-[#252525] group-hover:bg-[#AAFF00] rounded-none flex items-center justify-center mb-6 transition-colors">
                  <iconify-icon icon={item.icon} class="text-2xl text-white group-hover:text-[#0D0F0A] transition-colors"></iconify-icon>
                </div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#111111] relative border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Text */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Eyebrow>Quem Somos</Eyebrow>
            <Headline className="mb-8" highlightWords={['limites.']}>
              Construída para quem não aceita limites.
            </Headline>
            <div className="space-y-6 text-[#888888] text-base md:text-lg">
              <p>
                A Forge nasceu de uma convicção simples: treinamento de verdade exige um ambiente à altura. Fundada em 2015, somos uma academia de alto padrão localizada no coração da cidade, projetada para atender tanto o atleta de competição quanto quem está reconstruindo o próprio corpo do zero.
              </p>
              <p className="text-[#CCCCCC] font-medium border-l-2 border-[#FF3A00] pl-4">
                Nosso espaço foi pensado em cada detalhe — do piso ao equipamento, da iluminação à climatização — para que o único foco seja a evolução. Não somos uma academia de volume. Somos uma academia de intenção.
              </p>
            </div>
          </div>

          {/* Right Column - Image Collage (Matching Reference) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Pillar 1 */}
              <div className="col-span-2 bg-[#181818] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3D3D3D] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-[#2A2A2A] group-hover:text-[#FF3A00]/20 transition-colors">
                  <iconify-icon icon="solar:ruler-cross-pen-bold-duotone" class="text-8xl"></iconify-icon>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-[#F5F5F5] mb-3 relative z-10">Método Estruturado</h3>
                <p className="text-[#888888] relative z-10 max-w-md">Cada aluno passa por avaliação e recebe um protocolo personalizado. Nada é genérico aqui.</p>
              </div>

              {/* Pillar 2 */}
              <div className="col-span-2 sm:col-span-1 bg-[#181818] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3D3D3D] transition-colors group">
                <iconify-icon icon="solar:graph-up-bold-duotone" class="text-4xl text-[#FF5A1A] mb-4 group-hover:scale-110 transition-transform"></iconify-icon>
                <h3 className="font-display text-xl uppercase tracking-wide text-[#F5F5F5] mb-3">Foco na evolução contínua</h3>
                <p className="text-[#888888] text-sm">Monitoramento de progresso, ajuste de cargas e check-ins periódicos com seu coach.</p>
              </div>

              {/* Pillar 3 */}
              <div className="col-span-2 sm:col-span-1 bg-[#181818] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#3D3D3D] transition-colors group">
                <iconify-icon icon="solar:users-group-two-rounded-bold-duotone" class="text-4xl text-[#FF5A1A] mb-4 group-hover:scale-110 transition-transform"></iconify-icon>
                <h3 className="font-display text-xl uppercase tracking-wide text-[#F5F5F5] mb-3">Comunidade de alto desempenho</h3>
                <p className="text-[#888888] text-sm">Você treina rodeado de pessoas que levam o desenvolvimento a sério. O ambiente te eleva.</p>
              </div>

              {/* Image filling space */}
              <div className="col-span-2 mt-4 aspect-video relative rounded-lg overflow-hidden border border-[#2A2A2A]">
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Forge interior" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                   <div className="bg-[#FF3A00] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white">
                     Estrutura de Elite
                   </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
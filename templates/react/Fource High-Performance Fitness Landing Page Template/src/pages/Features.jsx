import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// Adapting the Features page to the FOURCE "Modalidades" theme 
// to maintain consistency across the required routes.
const Features = () => {
  const modalities = [
    { title: 'FOURCE STRENGTH', desc: 'Metodologia de powerlifting e musculação focada no ganho de força bruta e hipertrofia.' },
    { title: 'FOURCE CONDITIONING', desc: 'Circuitos de alta intensidade projetados para elevar sua capacidade cardiovascular.' },
    { title: 'FOURCE MOBILITY', desc: 'Sessões dedicadas a restaurar a amplitude de movimento e flexibilidade.' },
    { title: 'PERSONAL TRAINING', desc: 'Um coach exclusivo guiando cada repetição do seu protocolo customizado.' }
  ];

  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen pt-32 pb-24 border-b border-[#2C2C2C]">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="mb-20">
          <Link to="/" className="text-[#666666] uppercase tracking-widest text-sm font-bold hover:text-[#E74C3C] flex items-center mb-6">
            <iconify-icon icon="solar:arrow-left-linear" className="mr-2"></iconify-icon>
            VOLTAR AO INÍCIO
          </Link>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-[-0.02em] leading-none mb-6">
            NOSSAS <span className="text-[#E74C3C]">MODALIDADES.</span>
          </h1>
          <p className="text-[#CCCCCC] text-xl font-medium uppercase tracking-widest border-l-2 border-[#E74C3C] pl-6 max-w-2xl">
            Protocolos rigorosos focados em resultados reais. Escolha sua disciplina.
          </p>
        </div>

        <div className="space-y-8">
          {modalities.map((mod, i) => (
            <div key={i} className="border border-[#2C2C2C] bg-[#141414] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-[#E74C3C] transition-colors group">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#E74C3C] font-display text-xl">0{i+1}</span>
                  <h2 className="font-display text-4xl md:text-5xl text-white uppercase">{mod.title}</h2>
                </div>
                <p className="text-[#CCCCCC] text-lg leading-relaxed mt-4">
                  {mod.desc}
                </p>
              </div>
              <Button variant="secondary" className="shrink-0 whitespace-nowrap">
                AGENDAR AULA
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
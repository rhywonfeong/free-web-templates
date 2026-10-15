import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';
import Button from '../ui/Button';

const Equipment = () => {
  const zones = [
    {
      title: "Zona Cardio",
      description: "Esteiras de alta performance · Bikes ergométricas · Elípticos · Rowers · Escadas rolantes · Assault bikes",
      icon: "solar:routing-2-bold-duotone",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" // Treadmill/cardio representation
    },
    {
      title: "Zona de Força",
      description: "Plataformas de levantamento olímpico · Racks power cage · Barras e anilhas calibradas · Halteres até 80kg",
      icon: "solar:dumbbell-small-bold-duotone",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80" // Barbells/plates
    },
    {
      title: "Zona de Máquinas",
      description: "Chest press, leg press, hack squat · Puxadores · Cabos duplos · Smith machine · Extensora e flexora",
      icon: "solar:server-square-bold-duotone",
      img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80" // Machines
    },
    {
      title: "Zona Funcional",
      description: "Caixas de salto · Sleds · Battle ropes · TRX · Medicine balls · Barras calistenia · Faixas",
      icon: "solar:pulse-bold-duotone",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" // Functional/ropes
    },
    {
      title: "Condicionamento",
      description: "Tatame profissional · Aquecimento · Foam rollers · Mobilidade e ativação · Alongamento",
      icon: "solar:body-shape-bold-duotone",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" // Stretching/mats
    },
    {
      title: "Infraestrutura",
      description: "Vestiários privativos · Armários biometria · Chuveiros pressurizados · Wi-Fi 6 · Loja",
      icon: "solar:safe-2-bold-duotone",
      img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80" // Lockers/clean space
    }
  ];

  return (
    <section id="equipamentos" className="py-24 md:py-32 bg-[#111111] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Eyebrow className="justify-center">Estrutura</Eyebrow>
          <Headline className="mb-6">Equipamentos que entregam resultado.</Headline>
          <p className="text-[#888888] text-lg">
            Cada zona foi projetada com propósito. Aqui você encontra o que precisa para qualquer modalidade — sem fila, sem desculpa.
          </p>
        </div>

        {/* Asymmetrical Grid matching editorial vibe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {zones.map((zone, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden bg-[#181818] border border-[#2A2A2A] hover:border-[#FF3A00]/50 transition-all duration-500 h-[380px]">
              
              <img 
                src={zone.img} 
                alt={zone.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
              
              <div className="relative h-full p-8 flex flex-col justify-end z-10">
                <div className="w-12 h-12 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] flex items-center justify-center mb-6 group-hover:bg-[#FF3A00] transition-colors duration-300 text-[#F5F5F5]">
                  <iconify-icon icon={zone.icon} class="text-2xl"></iconify-icon>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-[#F5F5F5] mb-3 group-hover:text-[#FF3A00] transition-colors">
                  {zone.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed group-hover:text-[#CCCCCC] transition-colors">
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline">Agendar visita gratuita</Button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
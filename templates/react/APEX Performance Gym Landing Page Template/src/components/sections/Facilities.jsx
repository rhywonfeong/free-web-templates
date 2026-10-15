import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const Facilities = () => {
  const facilities = [
    {
      title: "CARDIO",
      icon: "solar:running-bold-duotone",
      desc: "Esteiras Matrix, elípticos Technogym e bikes de spinning com telemetria integrada. Área climatizada com visão panorâmica."
    },
    {
      title: "FORÇA LIVRE",
      icon: "solar:dumbbell-small-bold-duotone",
      desc: "Anilhas olímpicas, barras especializadas, plataformas de levantamento e racks de potência para treino sem limites de carga."
    },
    {
      title: "MÁQUINAS",
      icon: "solar:settings-bold-duotone",
      desc: "Linha completa Technogym e Life Fitness com ajuste de ângulo e carga em milissegundos. Para isolamento preciso com segurança total."
    },
    {
      title: "CONDICIONAMENTO",
      icon: "solar:stopwatch-bold-duotone",
      desc: "Área de alta intensidade com ergômetros Concept2, sacos, cordas e estruturas modulares para HIIT e circuitos metabólicos."
    },
    {
      title: "FUNCIONAL",
      icon: "solar:accessibility-bold-duotone",
      desc: "Zona dedicada ao movimento humano completo: barras paralelas, TRX, kettlebells, medicine balls e piso de borracha anti-impacto."
    },
    {
      title: "INFRAESTRUTURA",
      icon: "solar:bath-bold-duotone",
      desc: "Vestiários completos com armários, chuveiros de pressão, área de hidratação, estacionamento privativo e Wi-Fi de alta velocidade."
    }
  ];

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <Badge className="mb-6">ESTRUTURA</Badge>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.95] mb-6">
            Infraestrutura<br />de outro nível.
          </h2>
          <p className="text-xl text-[#9E9488] leading-relaxed">
            Mais de 1.200m² dedicados inteiramente à sua evolução. 
            Cada área projetada para uma finalidade específica, sem distração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map((item, idx) => (
            <div key={idx} className="bg-[#2B2B2B] p-8 rounded-xl border border-white/5 hover:border-[#FF8000]/50 transition-colors group">
              <div className="w-14 h-14 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#FF8000] mb-6 group-hover:scale-110 transition-transform">
                <iconify-icon icon={item.icon} width="28"></iconify-icon>
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">{item.title}</h4>
              <p className="text-[#9E9488] leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="#planos" variant="primary">Agendar Visita Gratuita</Button>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
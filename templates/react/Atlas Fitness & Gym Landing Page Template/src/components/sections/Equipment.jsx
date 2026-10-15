import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { clsx } from 'clsx';

const Equipment = () => {
  const [activeTab, setActiveTab] = useState(2); // Força as default

  const equipments = [
    {
      id: 0,
      title: "Cardio",
      desc: "Esteiras com inclinação variável, bikes de spinning e rowers de alta resistência para protocolos de condicionamento aeróbico e HIIT.",
      image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=800&q=80"
    },
    {
      id: 1,
      title: "Condicionamento",
      desc: "Sleds, battle ropes, medicine balls e kettlebells para treinos metabólicos de alta demanda energética.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"
    },
    {
      id: 2,
      title: "Força",
      desc: "Plataformas de levantamento olímpico com barras certificadas, pesos calibrados e racks reguláveis para máxima performance.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" // Destaque
    },
    {
      id: 3,
      title: "Livre",
      desc: "Halteres de 1 a 60kg, barras, anilhas e acessórios para treino livre com total liberdade de movimento.",
      image: "https://images.unsplash.com/photo-1586867764350-137fa7469be4?w=800&q=80"
    },
    {
      id: 4,
      title: "Máquinas",
      desc: "Linha completa de máquinas guiadas de última geração para isolamento muscular com segurança e controle de carga.",
      image: "https://images.unsplash.com/photo-1532029837206-abbe267e5623?w=800&q=80"
    },
    {
      id: 5,
      title: "Funcional",
      desc: "Área exclusiva com TRX, caixas pliométricas, wall balls e estrutura de crossfit para treinos integrados.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
    }
  ];

  const infra = [
    { label: "Vestiários", desc: "Armários individuais" },
    { label: "Câmara Fria", desc: "Recuperação ativa" },
    { label: "Assessment", desc: "Sala de avaliação" },
    { label: "Wi-Fi 6", desc: "Conectividade total" },
    { label: "Estacionamento", desc: "Exclusivo e gratuito" }
  ];

  return (
    <section className="py-24 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader 
          label="Infraestrutura"
          title="Ferramentas de campeonato."
          description="Cada categoria de equipamento foi selecionada por especialistas. Nada aqui é decoração — tudo serve a um propósito dentro do seu protocolo."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {equipments.map((eq) => (
              <button
                key={eq.id}
                onClick={() => setActiveTab(eq.id)}
                className={clsx(
                  "text-left p-6 border transition-all duration-300 relative overflow-hidden group",
                  activeTab === eq.id 
                    ? "border-acid bg-neutral-900" 
                    : "border-neutral-800 bg-neutral-950 hover:border-neutral-600 hover:bg-neutral-900"
                )}
              >
                <div className="flex items-start gap-4">
                  <span className={clsx(
                    "font-display font-bold text-xl leading-none mt-1 transition-colors",
                    activeTab === eq.id ? "text-acid" : "text-neutral-600"
                  )}>
                    0{eq.id + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-offwhite uppercase tracking-wide mb-2">
                      {eq.title}
                    </h3>
                    <p className={clsx(
                      "text-sm transition-all duration-300",
                      activeTab === eq.id ? "text-neutral-300 h-auto opacity-100 mt-2" : "text-transparent h-0 opacity-0 m-0"
                    )}>
                      {eq.desc}
                    </p>
                  </div>
                </div>
                {activeTab === eq.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-acid"></div>
                )}
              </button>
            ))}
          </div>

          {/* Image Display */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full">
             <div className="sticky top-32 w-full aspect-square md:aspect-video lg:aspect-square bg-neutral-900 border border-neutral-800 p-2 shadow-ambient">
                {equipments.map((eq) => (
                  <img
                    key={eq.id}
                    src={eq.image}
                    alt={eq.title}
                    className={clsx(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 p-2",
                      activeTab === eq.id ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                  />
                ))}
             </div>
          </div>

        </div>

        {/* Infra Footer */}
        <div className="mt-24 pt-12 border-t border-neutral-800">
          <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8">Infraestrutura Complementar</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {infra.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-acid"></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-offwhite">{item.label}</span>
                  <span className="text-xs text-neutral-500">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Equipment;
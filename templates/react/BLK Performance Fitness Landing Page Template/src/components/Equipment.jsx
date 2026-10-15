import React, { useState } from 'react';
import SectionLabel from './ui/SectionLabel';
import Button from './ui/Button';

export default function Equipment() {
  const [activeTab, setActiveTab] = useState('Cardio');

  const categories = ['Cardio', 'Força', 'Funcional', 'Máquinas', 'Área Livre', 'Infraestrutura'];

  const equipmentData = {
    'Cardio': [
      { name: 'Esteiras Technogym', desc: '14 unidades · Velocidade até 24 km/h · Inclinação motorizada' },
      { name: 'Bikes Peloton', desc: '8 unidades · Monitoramento de potência em tempo real' },
      { name: 'Remo Concept2', desc: '6 unidades · Monitor PM5 · Resistência de ar' },
      { name: 'Assault Bike', desc: '4 unidades · Resistência infinita · Trabalho total do corpo' }
    ],
    'Força': [
      { name: 'Power Rack Rogue', desc: '8 racks completos · Barras olímpicas · Anilhas calibradas' },
      { name: 'Plataforma de Levantamento', desc: '4 plataformas · Piso de borracha certificado · Barras de levantamento olímpico' },
      { name: 'Halteres 2–60kg', desc: 'Série completa · Hexagonais e redondos · Racks organizados' },
      { name: 'Banco Inclinado / Declinado', desc: '6 unidades · Ajuste de 7 posições · Suporte de segurança' }
    ],
    'Funcional': [
      { name: 'Área Funcional BLK', desc: '400m² exclusivos · TRX, kettlebells, sleds, battle ropes' },
      { name: 'Sled & Prowler', desc: 'Pista de 20m · Piso antiaderente · Carga de até 200kg' },
      { name: 'Wall Ball & Box Jump', desc: 'Alturas reguláveis · Superfícies antiderrapantes' },
      { name: 'Rig Crossfit', desc: 'Estrutura modular 12m · Barras paralelas, anéis, polias' }
    ],
    'Máquinas': [
      { name: 'Leg Press 45°', desc: 'Technogym Element+ · Carga até 400kg' },
      { name: 'Hack Squat', desc: 'Arco guiado · Angulação de 35° · Proteção de joelho' },
      { name: 'Cabo Crossover', desc: '6 torres · Altura ajustável em 16 posições · 100kg por pilha' },
      { name: 'Chest Press / Row', desc: 'Matrix série G3 · Trajetória anatômica · 4 unidades cada' }
    ],
    'Área Livre': [
      { name: 'Zona de Aquecimento', desc: 'Foam rollers, faixas elásticas, colchonetes · 120m²' },
      { name: 'Área de Alongamento', desc: 'Piso de EVA premium · Espelhos de piso a teto · Climatização própria' }
    ],
    'Infraestrutura': [
      { name: 'Vestiários Premium', desc: 'Armários individuais com cadeado digital · Chuveiros quentes · Amenities' },
      { name: 'Espaço de Recuperação', desc: 'Sauna seca · Banho de imersão fria · Área de relaxamento' },
      { name: 'Estacionamento', desc: '60 vagas cobertas · Segurança 24h · Acesso por app' },
      { name: 'BLK Nutrition Bar', desc: 'Shakes, suplementos e refeições pré/pós-treino · Parceiro certificado' }
    ]
  };

  return (
    <section id="equipamentos" className="py-24 md:py-32 bg-[var(--color-graphite)] border-b border-[var(--color-ash)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionLabel>Infraestrutura</SectionLabel>
          <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight text-white">
            EQUIPAMENTOS DE <span className="text-[var(--color-primary)]">ALTO PADRÃO</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-[var(--color-ash)] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-[13px] uppercase tracking-wider font-medium transition-all ${
                activeTab === cat 
                  ? 'text-white bg-[var(--color-iron)] border border-[var(--color-ash)]' 
                  : 'text-[var(--color-smoke)] hover:text-[var(--color-silver)] border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[300px]">
          {equipmentData[activeTab].map((item, idx) => (
            <div key={idx} className="group flex gap-4 p-6 border border-[var(--color-ash)]/30 bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 transition-colors">
              <div className="text-[var(--color-primary)] opacity-50 group-hover:opacity-100 transition-opacity mt-1">
                <iconify-icon icon="solar:dumbbell-large-linear" width="24" height="24"></iconify-icon>
              </div>
              <div>
                <h4 className="text-[18px] font-semibold text-white mb-1">{item.name}</h4>
                <p className="text-[14px] text-[var(--color-silver)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="primary">Agendar Visita Gratuita</Button>
          <Button variant="secondary">Falar com Especialista</Button>
        </div>
      </div>
    </section>
  );
}
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Equipment() {
  const zones = [
    { icon: "solar:heart-angle-bold-duotone", name: "Cardio", desc: "Esteiras, elípticos, bikes e rowers de última geração. Monitores individuais.", badge: "40+ equipamentos" },
    { icon: "solar:bolt-bold-duotone", name: "Condicionamento", desc: "Área dedicada a treinos de alta intensidade e circuitos metabólicos.", badge: "Arena exclusiva" },
    { icon: "solar:dumbbell-large-bold", name: "Força", desc: "Plataformas olímpicas, racks e barras especializadas para levantamento.", badge: "8 plataformas" },
    { icon: "solar:star-fall-bold-duotone", name: "Peso Livre", desc: "Área ampla e espelhada para movimentos compostos com carga livre.", badge: "300m²" },
    { icon: "solar:server-square-bold-duotone", name: "Máquinas", desc: "Linha completa Technogym, calibradas e com guias de uso digitais.", badge: "60+ máquinas" },
    { icon: "solar:globus-bold-duotone", name: "Funcional", desc: "Kettlebells, TRX, sleds, battle ropes para treinos de alta performance.", badge: "Zona premium" },
    { icon: "solar:bath-bold-duotone", name: "Infraestrutura", desc: "Vestiários com armários biométricos, duchas quentes e sauna seca.", badge: "Alto padrão" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <SectionHeader 
            label="Estrutura"
            title="Equipamentos que não deixam desculpa."
            description="Cada metro quadrado do APEX foi pensado para performance. Nossos equipamentos são importados, revisados mensalmente e distribuídos em zonas funcionais para otimizar seu treino — sem filas, sem improvisação."
          />
          <div className="shrink-0 pt-2 lg:pt-12">
            <Button to="/agendar" variant="outline">Agendar uma visita gratuita</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Main Photo Card taking 2 spaces on large screens */}
          <div className="lg:col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" 
              alt="Área de Peso Livre" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <span className="bg-acid text-[#111111] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">
                Spotlight
              </span>
              <h3 className="font-display font-bold uppercase text-3xl text-white mb-2">Engenharia Biomecânica</h3>
              <p className="text-white/80 font-light text-sm max-w-sm">
                Nossos equipamentos garantem a ativação muscular perfeita em cada fase do movimento.
              </p>
            </div>
          </div>

          {/* Zone Cards */}
          {zones.map((zone, i) => (
            <div key={i} className="bg-[#F5F5F5] rounded-2xl p-8 hover:bg-[#111111] hover:text-white transition-colors duration-300 group flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <iconify-icon icon={zone.icon} class="text-4xl text-neutral-300 group-hover:text-acid transition-colors"></iconify-icon>
                <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 border border-neutral-200 group-hover:border-neutral-700 rounded-full text-neutral-500 group-hover:text-neutral-400">
                  {zone.badge}
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="font-display font-bold uppercase text-xl mb-3 tracking-wide">{zone.name}</h3>
                <p className="text-sm font-light text-neutral-600 group-hover:text-neutral-400 leading-relaxed">
                  {zone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
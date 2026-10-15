export default function EquipmentSection() {
  const areas = [
    { name: "Cardio", icon: "solar:heart-pulse-bold" },
    { name: "Condicionamento", icon: "solar:running-bold" },
    { name: "Força", icon: "solar:dumbbell-large-bold" },
    { name: "Peso livre", icon: "solar:weight-bold" },
    { name: "Máquinas", icon: "solar:settings-minimalistic-bold" },
    { name: "Funcional", icon: "solar:stretching-round-bold" }
  ];

  const infra = [
    "Vestiários premium", "Duchas aquecidas", "Estacionamento", 
    "Ar-condicionado total", "Wi-Fi 6", "Armários individuais", "Área de recuperação"
  ];

  return (
    <section id="estrutura" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3">
          <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">O que temos para você</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Estrutura que não deixa desculpa.</h2>
          <p className="text-[#AAAAAA] text-lg leading-relaxed">
            Cada área foi projetada para atender um propósito específico do seu treinamento, do cardio à força, do funcional à recuperação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7">
            <h3 className="text-white font-semibold text-2xl mb-8 flex items-center gap-3">
              <iconify-icon icon="solar:map-point-bold" class="text-[#FF5500]"></iconify-icon>
              Áreas de Treinamento
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {areas.map((area, idx) => (
                <div key={idx} className="bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-[#FF5500]/50 hover:bg-[#1A1A1A] transition-all group flex flex-col gap-4">
                  <iconify-icon icon={area.icon} class="text-[#555555] text-4xl group-hover:text-[#FF5500] transition-colors"></iconify-icon>
                  <span className="text-white font-medium">{area.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#111111] border border-white/5 p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-white font-semibold text-2xl mb-8 flex items-center gap-3">
                <iconify-icon icon="solar:star-fall-minimalistic-2-bold" class="text-[#3DFF6E]"></iconify-icon>
                Infraestrutura Completa
              </h3>
              <ul className="space-y-4">
                {infra.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#AAAAAA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF5500]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12">
                <a href="#planos" className="w-full flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#FF6B2B] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300">
                  Agendar visita gratuita
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
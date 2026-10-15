import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';

const TargetAudience = () => {
  const targets = [
    {
      icon: "solar:shop-bold-duotone",
      title: "Lojistas e marcas autorais",
      desc: "Você vende bem pelo Instagram, mas ainda responde catálogo no Direct. Sua loja online precisa refletir o nível do que você vende."
    },
    {
      icon: "solar:mic-2-bold-duotone",
      title: "Mentores e consultores",
      desc: "Seu serviço é premium. Sua landing page precisa dizer isso antes mesmo de você abrir a boca."
    },
    {
      icon: "solar:map-point-bold-duotone",
      title: "Experiência presencial",
      desc: "Restaurante, clínica, estúdio — a experiência presencial é boa, mas o digital não acompanha. O site precisa transmitir isso antes."
    },
    {
      icon: "solar:diploma-bold-duotone",
      title: "Profissionais liberais",
      desc: "Advogados, arquitetos, médicos, contadores: autoridade começa antes da primeira consulta."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#111111] relative">
      <div className="absolute inset-0 glow-center pointer-events-none opacity-60"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="PARA QUEM" className="mx-auto" />
          <FormattedHeading 
            text="A Mythika foi feita para marcas que já têm algo bom — mas ainda não aparecem como *merecem* online."
            className="text-3xl md:text-5xl font-bold text-[#F0F0F0] leading-tight tracking-tight"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {targets.map((target, idx) => (
            <div key={idx} className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#2E2E2E] p-8 rounded-2xl hover:border-[#4A4A4A] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center mb-6 border border-[#2E2E2E]">
                <iconify-icon icon={target.icon} class="text-[#F0F0F0] text-2xl"></iconify-icon>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">{target.title}</h4>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">{target.desc}</p>
            </div>
          ))}
        </div>

        {/* Centered B2B Card */}
        <div className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#2E2E2E] p-8 rounded-2xl md:w-2/3 mx-auto text-center hover:border-[#4A4A4A] transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center mb-6 border border-[#2E2E2E] mx-auto">
            <iconify-icon icon="solar:handshake-bold-duotone" class="text-[#9333EA] text-2xl"></iconify-icon>
          </div>
          <h4 className="text-lg font-semibold text-white mb-3">Agências e empresas (B2B)</h4>
          <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-xl mx-auto">
            Agências de marketing que precisam de um parceiro de design, startups com produto digital ou empresas com site desatualizado. A Mythika atua como parceira estratégica.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;
const TeamSection = () => {
  const team = [
    {
      initials: "VF",
      name: "Vinicius F.",
      role: "Cofundador · Crescimento & Parcerias",
      focus: "Aquisição, canais e mercado de restaurantes"
    },
    {
      initials: "EA",
      name: "Eduardo A.",
      role: "Cofundador · Produto & Tecnologia",
      focus: "Arquitetura do sistema e experiência do usuário"
    },
    {
      initials: "CS",
      name: "Consultora de Operações",
      role: "Especialista em gestão de restaurantes por quilo",
      focus: "Validação de fluxos e benchmarks de desperdício"
    },
    {
      initials: "AT",
      name: "Atendimento",
      role: "Sucesso do cliente",
      focus: "Onboarding, suporte e retenção"
    }
  ];

  return (
    <section id="equipe" className="bg-[#F0EFF0] py-24 px-6 border-b border-[#E2E1E2]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#E2E1E2] text-[#3D3C3D] text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Quem está por trás
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0C0C0C] mb-6 leading-tight">
            PESSOAS QUE<br />ENTENDEM<br />OPERAÇÃO.
          </h2>
          <p className="text-base text-[#8A898A] max-w-lg leading-relaxed">
            Construído por quem já viu desperdício de perto. Suportado por quem entende de dados e de cozinha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-[#FCFBFC] p-8 rounded-2xl border border-[#E2E1E2] flex flex-col hover:shadow-[0_12px_24px_rgba(0,0,0,0.04)] transition-shadow">
              <div className="w-14 h-14 bg-[#E2E1E2] rounded-full flex items-center justify-center text-[#3D3C3D] text-lg font-bold mb-6">
                {member.initials}
              </div>
              <h3 className="text-base font-semibold text-[#0C0C0C] mb-1">{member.name}</h3>
              <span className="text-[10px] uppercase tracking-wider text-[#8A898A] font-semibold mb-4 block">
                {member.role}
              </span>
              <p className="text-sm text-[#3D3C3D] leading-relaxed mt-auto">
                {member.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
import React from 'react';

const Team = () => {
  const team = [
    { initials: 'VF', name: 'Vinicius F.', role: 'Cofundador · Crescimento & Parcerias', focus: 'Aquisição, canais e mercado de restaurantes' },
    { initials: 'EA', name: 'Eduardo A.', role: 'Cofundador · Produto & Tecnologia', focus: 'Arquitetura do sistema e experiência do usuário' },
    { initials: 'CS', name: 'Consultora de Operações', role: 'Especialista em gestão', focus: 'Validação de fluxos e benchmarks de desperdício' },
    { initials: 'AT', name: 'Atendimento', role: 'Sucesso do cliente', focus: 'Onboarding, suporte e retenção' }
  ];

  return (
    <section className="bg-neutral-0 py-24 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4 block">Quem está por trás</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-neutral-900 mb-6 leading-tight flex flex-col items-center">
            <span>PESSOAS QUE</span>
            <span>ENTENDEM</span>
            <span>OPERAÇÃO.</span>
          </h2>
          <p className="text-sm md:text-base font-body text-neutral-700 max-w-lg mx-auto">
            Construído por quem já viu desperdício de perto. Suportado por quem entende de dados e de cozinha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 text-center flex flex-col items-center hover:card-shadow transition-shadow">
              <div className="w-16 h-16 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center text-lg font-h2 text-neutral-700 mb-4">
                {member.initials}
              </div>
              <h3 className="text-sm font-label text-neutral-900 mb-1">{member.name}</h3>
              <p className="text-[10px] font-label text-neutral-500 uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-xs font-body text-neutral-700 leading-relaxed">{member.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
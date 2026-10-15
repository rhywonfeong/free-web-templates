import SectionHeading from '../ui/SectionHeading';

const TeamSection = () => {
  const team = [
    { name: "Rodrigo Farias", role: "Head Coach", cref: "CREF 045821-G/SP", initials: "RF" },
    { name: "Ana Luísa", role: "Conditioning", cref: "CREF 078342-G/SP", initials: "AL" },
    { name: "Bruno T.", role: "Mobility & Rehab", cref: "CREF 091205-G/SP", initials: "BT" },
    { name: "Camila D.", role: "Personal Trainer", cref: "CREF 063417-G/SP", initials: "CD" }
  ];

  return (
    <section id="equipe" className="py-24 lg:py-32 bg-[#080808] border-b border-white/5 relative">
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none -translate-y-1/2 opacity-[0.02] flex justify-center">
        <span className="text-[20vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-white">COACHES</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        <SectionHeading 
          label="Quem te acompanha"
          title="COACHES QUE TREINAM."
          subtitle="Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-[#1A1A1A] group border border-white/5 hover:border-[#E8201A]/30 transition-all duration-300">
              <div className="aspect-square bg-[#0D0D0D] flex items-center justify-center relative overflow-hidden border-b border-white/5">
                {/* Fallback pattern instead of loading broken images if none available, giving it a technical feel */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                <span className="text-6xl font-black text-[#2A2A2A] group-hover:text-[#424242] transition-colors uppercase tracking-tighter">
                  {member.initials}
                </span>
                {/* Red accent line that appears on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E8201A] group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-1">{member.name}</h4>
                <p className="text-sm font-medium text-[#757575] mb-4">{member.role}</p>
                <div className="inline-flex items-center px-3 py-1 bg-[#080808] border border-white/10 text-[10px] text-[#BDBDBD] font-mono tracking-widest">
                  {member.cref}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
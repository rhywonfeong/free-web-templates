import React from 'react';

export default function Coaches() {
  const coaches = [
    { inits: 'RF', name: 'RODRIGO FARIAS', role: 'HEAD COACH', cref: '045821-G/SP', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop' },
    { inits: 'AL', name: 'ANA LUÍSA', role: 'CONDITIONING', cref: '078342-G/SP', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop' },
    { inits: 'BT', name: 'BRUNO T.', role: 'MOBILITY & REHAB', cref: '091205-G/SP', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop' },
    { inits: 'CD', name: 'CAMILA D.', role: 'PERSONAL TRAINER', cref: '063417-G/SP', img: 'https://images.unsplash.com/photo-1609899517235-cbfbeaec682a?q=80&w=600&auto=format&fit=crop' }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#1A1A1A] border-y border-[#2C2C2C]" id="equipe">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="text-[#F46A17] text-xs font-bold tracking-widest uppercase mb-4">QUEM TE ACOMPANHA</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-tight">
              COACHES QUE TREINAM.
            </h2>
          </div>
          <p className="text-[#888888] font-bold tracking-widest text-[10px] md:text-xs uppercase max-w-sm text-left md:text-right">
            TODOS GRADUADOS EM EDUCAÇÃO FÍSICA. TODOS REGISTRADOS NO CREF-SP. TODOS TREINANDO.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="relative h-[400px] rounded-lg overflow-hidden group">
              <img src={coach.img} alt={coach.name} className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col gap-2">
                <div className="w-10 h-10 bg-[#F46A17] text-white font-display font-bold flex items-center justify-center rounded-sm text-lg mb-2">
                  {coach.inits}
                </div>
                <h3 className="font-display font-semibold text-2xl uppercase tracking-wider text-white leading-none">{coach.name}</h3>
                <div className="flex flex-col">
                  <span className="text-[#F46A17] font-bold tracking-widest text-[10px] uppercase">{coach.role}</span>
                  <span className="text-[#888888] font-mono text-xs mt-1">CREF: {coach.cref}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
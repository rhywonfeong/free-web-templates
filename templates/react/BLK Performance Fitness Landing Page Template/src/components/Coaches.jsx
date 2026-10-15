import React from 'react';
import SectionLabel from './ui/SectionLabel';
import Button from './ui/Button';

export default function Coaches() {
  const coaches = [
    {
      name: 'Rafael Moura',
      specialty: 'Força & Hipertrofia',
      exp: '8 anos de experiência',
      cref: 'CREF 012345-G',
      img: 'https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Camila Torres',
      specialty: 'Funcional & Condicionamento',
      exp: '6 anos de experiência',
      cref: 'CREF 023456-G',
      img: 'https://images.unsplash.com/photo-1611506109961-e8832a884fbf?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Diego Alves',
      specialty: 'Powerlifting & Mobilidade',
      exp: '11 anos de experiência',
      cref: 'CREF 034567-G',
      img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Ana Lima',
      specialty: 'Cardio & Performance',
      exp: '7 anos de experiência',
      cref: 'CREF 045678-G',
      img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="coaches" className="py-24 md:py-32 bg-[var(--color-graphite)] border-t border-b border-[var(--color-ash)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Nossos Profissionais</SectionLabel>
            <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight text-white mb-6">
              OS COACHES <span className="text-[var(--color-primary)]">BLK</span>
            </h2>
            <p className="text-[16px] text-[var(--color-silver)] leading-relaxed">
              Certificados, especializados e obcecados por resultado. Cada coach BLK passa por um processo de seleção rigoroso e formação contínua.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Button variant="primary">Falar com Especialista</Button>
            <Button variant="link" className="hidden md:flex">Ver Planos</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-[var(--color-carbon)] border border-[var(--color-ash)]">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-transparent to-transparent opacity-80"></div>
                {/* Red subtle border top on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
              
              <div className="p-6 relative z-10 bg-[var(--color-carbon)]">
                <h3 className="font-display text-2xl text-white mb-1 tracking-wide">{coach.name}</h3>
                <p className="text-[13px] font-medium text-[var(--color-primary)] uppercase tracking-wider mb-3">{coach.specialty}</p>
                <div className="flex flex-col gap-1 text-[12px] text-[var(--color-smoke)]">
                  <span>{coach.exp}</span>
                  <span className="font-mono">{coach.cref}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
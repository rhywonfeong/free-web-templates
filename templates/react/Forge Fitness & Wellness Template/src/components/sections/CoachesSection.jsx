import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function CoachesSection() {
  const coaches = [
    {
      name: "Marcos Ferreira",
      role: "Head Coach",
      spec: "Especialista em Força e Potência · CREF 12345 · 14 anos de experiência",
      img: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=500&q=80&fit=crop"
    },
    {
      name: "Carla Souza",
      role: "Performance Coach",
      spec: "Especialista em Condicionamento · Certificada pela NSCA · Ex-atleta",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80&fit=crop"
    },
    {
      name: "Bruno Ramos",
      role: "Functional Coach",
      spec: "Especialista em Treinamento Funcional · Mestre em Biomecânica",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80&fit=crop"
    },
    {
      name: "Paula Alves",
      role: "Wellness Coach",
      spec: "Especialista em Saúde Feminina · Fisioterapeuta · Pilates avançado",
      img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&q=80&fit=crop"
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <SectionLabel>Coaches</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white tracking-tight">
            Treinados para Treinar Você.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[16px] aspect-[3/4] bg-[#1E1E24]">
              <img 
                src={coach.img} 
                alt={coach.name} 
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#E8541A] text-xs font-bold uppercase tracking-wider mb-1 block">
                  {coach.role}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{coach.name}</h3>
                <p className="text-[#D4D4D4] text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {coach.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
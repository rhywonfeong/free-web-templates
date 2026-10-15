import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const Coaches = () => {
  const coaches = [
    {
      name: "Lucas Ferreira", role: "Head Coach · Força & Potência", cref: "CREF 12345", 
      desc: "Ex-atleta nacional de halterofilismo",
      img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80"
    },
    {
      name: "Ana Beatriz", role: "Coach · Funcional & Mobilidade", cref: "CREF 23456", 
      desc: "Especialista em movimento funcional",
      img: "https://images.unsplash.com/photo-1609899517235-c32f1ea30c00?w=800&q=80"
    },
    {
      name: "Marcos Oliveira", role: "Coach · Condicionamento & HIIT", cref: "CREF 34567", 
      desc: "Certificado CrossFit L2",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
    },
    {
      name: "Priscila Nunes", role: "Coach · Hipertrofia", cref: "CREF 45678", 
      desc: "Mestre em Fisiologia do Exercício",
      img: "https://images.unsplash.com/photo-1534438097545-a8ea74eb8f71?w=800&q=80"
    }
  ];

  return (
    <section id="coaches" className="py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
           <SectionHeader 
            label="Time de Coaches"
            title="Formados para transformar."
          />
          <div className="flex gap-4 hidden md:flex">
             <Button variant="outline">Ver Todos</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-neutral-900 border border-neutral-800">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                <h4 className="text-xl font-bold uppercase tracking-wide text-offwhite mb-1">{coach.name}</h4>
                <p className="text-sm font-medium text-acid mb-3">{coach.role}</p>
                <div className="flex flex-col gap-1 border-t border-neutral-800 pt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs text-neutral-400">{coach.cref}</span>
                  <span className="text-xs text-neutral-300">{coach.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary">Agendar Visita Gratuita</Button>
          <Button variant="secondary">Falar com Especialista</Button>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
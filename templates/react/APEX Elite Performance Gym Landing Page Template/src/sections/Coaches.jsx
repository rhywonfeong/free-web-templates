import React from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function Coaches() {
  const coaches = [
    {
      name: "Rafael Mendes",
      role: "Head Coach · Força & Potência",
      tags: ["Powerlifting", "Periodização", "Mestre CREF"],
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80"
    },
    {
      name: "Camila Torres",
      role: "Coach · Funcional & Mobilidade",
      tags: ["CrossFit L2", "FMS", "Nutrição Esportiva"],
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80"
    },
    {
      name: "Diego Alves",
      role: "Coach · Condicionamento & Cardio",
      tags: ["Triatleta", "VO₂ Max", "Fisiologista"],
      img: "https://images.unsplash.com/photo-1534343970220-db98bc2f87a3?w=600&q=80"
    },
    {
      name: "Ana Lima",
      role: "Coach · Recomposição & Saúde",
      tags: ["Biomecânica", "Reabilitação", "Dra. CREF"],
      img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <Badge className="mb-6" dotColor="#B8CFEE">Time APEX</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              Coaches de <br/> <span className="text-[#C8F135]">Alto Nível</span>
            </h2>
          </div>
          <Button variant="secondary" icon="solar:arrow-right-line-duotone">
            Conhecer o time
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative rounded-[24px] overflow-hidden bg-[#100F0F] aspect-[3/4]">
              <img 
                src={coach.img} 
                alt={coach.name} 
                className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100F0F] via-[#100F0F]/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1">{coach.name}</h3>
                <p className="text-xs font-semibold text-[#FF8040] uppercase tracking-wide mb-4">{coach.role}</p>
                <div className="flex flex-wrap gap-2">
                  {coach.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-[10px] font-medium text-gray-300 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
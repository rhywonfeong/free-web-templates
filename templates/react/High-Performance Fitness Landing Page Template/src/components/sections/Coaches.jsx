import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';

const Coaches = () => {
  const coaches = [
    {
      name: "Marcelo Fonseca",
      role: "Força & Potência",
      desc: "CSCS · 12 anos de experiência · Ex-preparador físico de atletas olímpicos",
      img: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=800&q=80" // Male coach strong
    },
    {
      name: "Renata Campos",
      role: "Condicionamento Funcional",
      desc: "NASM · 8 anos · Especialista em reabilitação e movimento",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80" // Female coach functional
    },
    {
      name: "Thiago Santos",
      role: "Hipertrofia & Nutrição",
      desc: "CREF · Pós em nutrição esportiva · 10 anos formando campeões",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" // Male coach hypertrophy
    },
    {
      name: "Ana Lima",
      role: "Performance Feminina",
      desc: "ACE Certified · 7 anos · Especialista em biomecânica feminina e emagrecimento",
      img: "https://images.unsplash.com/photo-1534438097545-a2c1faeb63b3?w=800&q=80" // Female coach performance
    }
  ];

  return (
    <section id="coaches" className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <Eyebrow>Nossa equipe</Eyebrow>
            <Headline className="mb-4">Os coaches que fazem a diferença.</Headline>
            <p className="text-[#888888]">
              Todos os nossos coaches são certificados internacionalmente, com experiência comprovada em alta performance e treinamento aplicado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-6 bg-[#181818] border border-[#2A2A2A]">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"></div>
                
                {/* Plus icon on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C8F200] text-[#111111] flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <iconify-icon icon="solar:arrow-right-up-linear" class="text-xl"></iconify-icon>
                </div>
              </div>
              
              <h3 className="font-display text-xl uppercase tracking-wider text-[#F5F5F5] mb-1">{coach.name}</h3>
              <p className="text-[#FF3A00] text-xs font-bold uppercase tracking-widest mb-3">{coach.role}</p>
              <p className="text-[#888888] text-sm leading-relaxed">{coach.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Coaches;
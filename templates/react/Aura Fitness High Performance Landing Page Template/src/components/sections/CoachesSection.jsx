export default function CoachesSection() {
  const coaches = [
    { name: "Rafael Mendes", spec: "Força e Hipertrofia", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=800" },
    { name: "Juliana Costa", spec: "Condicionamento e Funcional", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800" },
    { name: "Felipe Alves", spec: "Performance e Mobilidade", img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=800" },
    { name: "Carla Lima", spec: "Emagrecimento e Nutrição", img: "https://images.unsplash.com/photo-1534438097544-e2b2600277ee?q=80&w=800" }
  ];

  return (
    <section id="coaches" className="py-24 md:py-32 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">Quem te acompanha</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">Os melhores profissionais, dedicados à sua evolução.</h2>
            <p className="text-[#AAAAAA] text-lg">
              Todos os nossos coaches possuem graduação, especializações internacionais e passagem por atletas de alto rendimento.
            </p>
          </div>
          <a href="#contato" className="shrink-0 flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Conhecer equipe
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="aspect-[3/4] relative">
                <img 
                  src={coach.img} 
                  alt={coach.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-display text-2xl mb-1">{coach.name}</h3>
                <p className="text-[#FF5500] text-sm font-medium">{coach.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function CoachesSection() {
  const coaches = [
    {
      name: "Lucas Andrade",
      role: "Força e Levantamento Olímpico",
      exp: "9 anos",
      quote: "Técnica primeiro. Carga depois. Sempre.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600"
    },
    {
      name: "Fernanda Rocha",
      role: "Condicionamento Físico",
      exp: "7 anos",
      quote: "Resultado começa no planejamento, não na intensidade.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600"
    },
    {
      name: "Thiago Melo",
      role: "Hipertrofia e Periodização",
      exp: "11 anos",
      quote: "Cada série conta. O processo é o produto.",
      image: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?q=80&w=600"
    },
    {
      name: "Mariana Costa",
      role: "Mobilidade e Reabilitação",
      exp: "8 anos",
      quote: "Mover bem é o primeiro nível de performance.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600"
    }
  ]

  return (
    <section id="equipe" className="bg-[#1A1A1A] py-24 md:py-32 border-t border-[#2E2E2E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <Eyebrow color="yellow">Nossa equipe</Eyebrow>
            <h2 className="text-h2">
              Os profissionais por trás dos seus <span className="text-[#E5C000]">resultados</span>.
            </h2>
            <p className="text-[#888888] mt-6 text-lg">
              Formação, certificações, experiência prática e, principalmente, capacidade de ensinar. Aqui não existe coach decorativo — todo mundo trabalha.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, i) => (
            <div key={i} className="group relative overflow-hidden bg-[#0D0D0D]">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#E5C000] text-xs font-bold uppercase tracking-widest mb-2">{coach.role}</span>
                <h4 className="font-display text-3xl text-white uppercase mb-4">{coach.name}</h4>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-[#F5F5F5] text-sm italic border-l border-[#E5C000] pl-3 mb-3">"{coach.quote}"</p>
                  <p className="text-[#888888] text-xs uppercase tracking-widest">{coach.exp} de experiência</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button variant="outline">Conhecer a equipe completa</Button>
        </div>
      </div>
    </section>
  )
}
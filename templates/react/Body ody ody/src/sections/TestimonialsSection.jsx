import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Treinei em vários lugares antes. Nenhum chegou perto do nível de acompanhamento que tenho aqui. Em 6 meses, perdi 14kg e ganhei uma força que nunca pensei que teria.",
      name: "Rafael Mendes",
      meta: "38 anos · Executivo",
      image: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?q=80&w=800"
    },
    {
      quote: "O ambiente é diferente. Não tem bagunça, não tem fila, não tem desculpa. Os coaches sabem exatamente o que estão fazendo e me empurram além do que eu me empurraria sozinha.",
      name: "Camila Torres",
      meta: "31 anos · Médica",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800"
    },
    {
      quote: "Voltei a treinar depois de 5 anos parado. Achei que seria difícil me adaptar. Em duas semanas já estava no ritmo. A equipe faz toda a diferença.",
      name: "Bruno Cavalcanti",
      meta: "44 anos · Empresário",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800"
    }
  ]

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Eyebrow color="yellow">O que dizem nossos alunos</Eyebrow>
          </div>
          <h2 className="text-h2">Palavras de quem já chegou <span className="text-[#E5C000]">lá</span>.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col group">
              <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#E5C000] p-8 flex-grow flex flex-col justify-between">
                <p className="text-[#1A1A1A] font-medium leading-relaxed italic text-lg mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-display text-xl text-[#1A1A1A] uppercase tracking-wide">{t.name}</h4>
                  <p className="text-[#1A1A1A]/70 text-sm font-semibold">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="primary">
            Agendar minha visita gratuita
            <iconify-icon icon="solar:arrow-right-linear" class="ml-2"></iconify-icon>
          </Button>
        </div>
      </div>
    </section>
  )
}
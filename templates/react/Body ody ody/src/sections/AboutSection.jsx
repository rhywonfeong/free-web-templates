import Button from '../components/ui/Button'
import Eyebrow from '../components/ui/Eyebrow'

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <Eyebrow>Nossa história</Eyebrow>
            <h2 className="text-h2 mb-8">
              Não somos uma academia. Somos um sistema de <span className="text-[#E5C000]">evolução</span>.
            </h2>
            
            <div className="space-y-6 text-[#F5F5F5] text-base leading-relaxed mb-10">
              <p>
                A AURA nasceu da insatisfação com o que o mercado oferecia: espaços barulhentos, superlotados e sem direção. Criamos um ambiente onde cada metro quadrado, cada equipamento e cada profissional existe com um único propósito — levar você ao seu melhor desempenho possível.
              </p>
              <p>
                Desde o primeiro dia, a nossa premissa foi clara: treinamento de alto padrão não é luxo, é método. É estrutura. É acompanhamento real de pessoas que entendem de corpo, performance e resultado.
              </p>
              <p className="text-xl font-display text-white tracking-wide border-l-2 border-[#E5C000] pl-6 py-2 mt-8">
                Aqui, você não é mais um aluno. Você é um objetivo em movimento.
              </p>
            </div>
            
            <Button variant="outline" className="group">
              Conhecer a nossa história
              <iconify-icon icon="solar:arrow-right-linear" class="ml-2 group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Button>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 relative h-[500px] sm:h-[600px] w-full">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800" 
              alt="Coach instructing" 
              className="absolute top-0 right-0 w-[70%] h-[75%] object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10 border-4 border-[#1A1A1A]"
            />
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800" 
              alt="Gym environment" 
              className="absolute bottom-0 left-0 w-[65%] h-[60%] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
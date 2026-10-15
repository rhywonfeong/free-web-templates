import Button from '../components/ui/Button'

export default function CTASection() {
  return (
    <section className="relative bg-[#E5C000] py-32 overflow-hidden">
      {/* Background kinetic pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="font-display text-6xl md:text-8xl text-[#1A1A1A] uppercase tracking-tighter mb-8 leading-none">
          O melhor treino da sua vida começa com uma decisão.
        </h2>
        
        <p className="text-[#1A1A1A] font-semibold text-xl uppercase tracking-widest mb-12">
          Tome agora.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button 
            variant="primary" 
            className="bg-[#1A1A1A] text-white hover:bg-[#2E2E2E] shadow-2xl"
            size="lg"
          >
            Agendar visita gratuita
            <iconify-icon icon="solar:arrow-right-linear" class="ml-2"></iconify-icon>
          </Button>
          <Button 
            variant="outline" 
            className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#E5C000]"
            size="lg"
          >
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
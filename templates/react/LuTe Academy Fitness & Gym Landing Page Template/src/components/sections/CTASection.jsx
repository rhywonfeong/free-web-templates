import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="py-40 bg-[#00F9E4] relative overflow-hidden selection:bg-[#0A0A0A] selection:text-[#00F9E4]">
      {/* Background kinetic pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0A0A0A] uppercase leading-[0.9] mb-12">
          A decisão já foi tomada. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A0A0A] to-[#3A3A3A]">Agora é a ação.</span>
        </h2>
        
        <Button 
          variant="secondary" 
          className="text-lg px-8 py-5 border-transparent hover:border-[#0A0A0A] bg-[#0A0A0A] text-[#00F9E4] hover:bg-transparent hover:text-[#0A0A0A]"
          icon="solar:arrow-right-linear"
        >
          Agende uma visita gratuita
        </Button>
      </div>
    </section>
  )
}
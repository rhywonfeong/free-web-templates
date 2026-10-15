import Button from '../ui/Button'

const CTASection = () => {
  return (
    <section className="py-32 bg-[#CCFF00] text-[#0A2E00] text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter leading-[0.85] mb-8">
          A DECISÃO<br/>
          JÁ FOI TOMADA.<br/>
          AGORA É A AÇÃO.
        </h2>
        
        <p className="font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-12">
          A G E N D E &nbsp;&nbsp; U M A &nbsp;&nbsp; V I S I T A &nbsp;&nbsp; · &nbsp;&nbsp; G R A T U I T A &nbsp;&nbsp; · &nbsp;&nbsp; S E M &nbsp;&nbsp; C O M P R O M I S S O &nbsp;&nbsp; · &nbsp;&nbsp; T R A G A &nbsp;&nbsp; T Ê N I S .
        </p>
        
        <Button 
          variant="dark" 
          size="lg" 
          icon="solar:arrow-right-up-linear"
          className="text-xl px-12 py-6 shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        >
          AGENDAR VISITA GRATUITA
        </Button>
      </div>
    </section>
  )
}

export default CTASection
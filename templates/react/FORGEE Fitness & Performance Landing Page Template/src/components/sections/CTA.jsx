import { Button } from '../ui/Button';

export default function CTA() {
  return (
    <section className="bg-[#E8400A] relative overflow-hidden">
      {/* Ticker Tape */}
      <div className="w-full bg-[#111111] py-3 border-y border-[#FF4D0D] overflow-hidden whitespace-nowrap flex items-center">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[#E8400A] font-display font-bold tracking-[0.2em] uppercase text-sm mx-8">
              AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS ·
            </span>
          ))}
        </div>
      </div>

      <div className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto text-center relative z-10">
        <h2 className="font-display font-extrabold text-6xl md:text-8xl tracking-tight uppercase leading-[0.9] text-[#111111] mb-12">
          A decisão<br/>já foi tomada.<br/>Agora é a ação.
        </h2>
        <Button 
          variant="primary" 
          size="lg" 
          className="bg-[#111111] text-white hover:bg-black border border-transparent hover:border-white shadow-2xl"
        >
          Agendar Visita Gratuita
        </Button>
      </div>

      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
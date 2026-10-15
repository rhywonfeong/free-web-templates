import { useState } from 'react';
import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isRevealed } = useScrollReveal();
  const [formState, setFormState] = useState({ status: 'idle' }); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'loading' });
    // Simulate API call
    setTimeout(() => {
      setFormState({ status: 'success' });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div ref={ref} className={clsx("reveal-up", isRevealed && "is-revealed")}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Hablemos de tu <span className="text-gradient-primary">próximo nivel</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Cuéntanos sobre tu proyecto. Analizaremos tu situación actual y te propondremos una solución a medida sin compromiso.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-violet-400">
                  <iconify-icon icon="solar:letter-linear" width="24" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium text-white">hola@astravia.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-cyan-400">
                  <iconify-icon icon="solar:map-point-linear" width="24" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Ubicación</div>
                  <div className="font-medium text-white">100% Remoto, Global</div>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx("reveal-fade", isRevealed && "is-revealed")} style={{ transitionDelay: '200ms' }}>
            <div className="glass-card p-8 md:p-10 rounded-3xl relative">
              {/* Background glow for form */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-3xl pointer-events-none" />
              
              {formState.status === 'success' ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                    <iconify-icon icon="solar:check-circle-linear" width="40" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-400">Nos pondremos en contacto contigo en breve.</p>
                  <button 
                    onClick={() => setFormState({ status: 'idle' })}
                    className="mt-8 px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-gray-400 px-1">Nombre</label>
                      <input required type="text" className="w-full bg-[#030308]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-gray-400 px-1">Teléfono</label>
                      <input type="tel" className="w-full bg-[#030308]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600" placeholder="+34 600 000 000" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-400 px-1">Email</label>
                    <input required type="email" className="w-full bg-[#030308]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600" placeholder="juan@empresa.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-400 px-1">Mensaje</label>
                    <textarea required rows="4" className="w-full bg-[#030308]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600 resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState.status === 'loading'}
                    className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(113,69,214,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState.status === 'loading' ? (
                      <iconify-icon icon="solar:spinner-linear" className="animate-spin" width="24" />
                    ) : (
                      <>
                        Enviar Solicitud
                        <iconify-icon icon="solar:plain-linear" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
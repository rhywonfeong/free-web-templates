import { useState } from 'react';

export default function Schedule() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex-1 pt-32 pb-24 bg-zinc-950 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold block mb-4">Primeiro passo</span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
            AGENDAR VISITA
          </h1>
          <p className="text-zinc-400">
            Venha conhecer a estrutura, conversar com um coach e realizar um treino experimental sem compromisso.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-zinc-900 border border-green-500/30 p-8 text-center flex flex-col items-center animate-fade-in">
            <iconify-icon icon="solar:check-circle-bold" class="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">Solicitação Recebida</h3>
            <p className="text-zinc-400 text-sm">
              Nossa equipe entrará em contato pelo WhatsApp em até 2 horas para confirmar o melhor horário para sua visita.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-sm font-medium text-zinc-500 hover:text-amber-500 transition-colors"
            >
              Fazer novo agendamento
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors p-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-zinc-400 uppercase tracking-wider">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-700"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs text-zinc-400 uppercase tracking-wider">WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-700"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="objective" className="text-xs text-zinc-400 uppercase tracking-wider">Objetivo Principal</label>
              <select 
                id="objective" 
                required
                defaultValue=""
                className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
              >
                <option value="" disabled>Selecione um objetivo</option>
                <option value="hypertrophy">Hipertrofia / Força</option>
                <option value="conditioning">Condicionamento / Emagrecimento</option>
                <option value="health">Saúde / Mobilidade</option>
                <option value="performance">Performance Esportiva</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="experience" className="text-xs text-zinc-400 uppercase tracking-wider">Experiência com treino</label>
              <div className="grid grid-cols-3 gap-2">
                {['Iniciante', 'Intermediário', 'Avançado'].map((level) => (
                  <label key={level} className="relative flex cursor-pointer">
                    <input type="radio" name="experience" value={level} className="peer sr-only" required />
                    <div className="w-full text-center py-3 border border-zinc-800 text-sm text-zinc-500 peer-checked:bg-amber-500 peer-checked:text-zinc-950 peer-checked:border-amber-500 peer-checked:font-medium transition-all">
                      {level}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full py-4 bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 transition-colors"
            >
              SOLICITAR AGENDAMENTO
            </button>
            <p className="text-xs text-zinc-600 text-center">
              Ao agendar, você concorda em ser contatado via WhatsApp.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
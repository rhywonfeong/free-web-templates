import { useState, useEffect } from 'react';
import Button from '../components/ui/Button';

export default function Agendar() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-[80vh] bg-[#F5F5F5] pt-12 pb-24 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Col */}
        <div>
          <span className="inline-block uppercase font-medium text-xs tracking-[0.12em] mb-6 border border-[#111111] rounded-full px-4 py-1.5">
            Dê o primeiro passo
          </span>
          <h1 className="font-display font-black uppercase text-5xl md:text-7xl tracking-tight leading-[0.9] mb-8">
            Agende sua<br />visita <span className="text-acid">gratuita</span>.
          </h1>
          <p className="text-lg font-light text-neutral-600 mb-8 leading-relaxed max-w-md">
            Conheça nossa estrutura de elite, converse com um coach e entenda como o método APEX pode transformar seus resultados. Sem compromisso.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b border-neutral-200 pb-4">
              <iconify-icon icon="solar:check-circle-bold" class="text-acid text-2xl"></iconify-icon>
              <span className="font-medium text-sm">Tour guiado pela estrutura</span>
            </div>
            <div className="flex items-center gap-4 border-b border-neutral-200 pb-4">
              <iconify-icon icon="solar:check-circle-bold" class="text-acid text-2xl"></iconify-icon>
              <span className="font-medium text-sm">Bate-papo com especialista</span>
            </div>
            <div className="flex items-center gap-4 pb-4">
              <iconify-icon icon="solar:check-circle-bold" class="text-acid text-2xl"></iconify-icon>
              <span className="font-medium text-sm">Apresentação do protocolo</span>
            </div>
          </div>
        </div>

        {/* Form Col */}
        <div className="bg-white p-8 md:p-12 rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-neutral-100">
          {submitted ? (
            <div className="text-center py-12">
              <iconify-icon icon="solar:check-circle-bold" class="text-acid text-6xl mb-6"></iconify-icon>
              <h3 className="font-display font-bold uppercase text-2xl mb-4">Solicitação Recebida!</h3>
              <p className="text-neutral-600 font-light mb-8">
                Nossa equipe entrará em contato via WhatsApp em até 2 horas para confirmar o melhor horário para sua visita.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">
                Agendar outro horário
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#F5F5F5] border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-acid focus:bg-white transition-colors font-light"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-[#F5F5F5] border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-acid focus:bg-white transition-colors font-light"
                    placeholder="(11) 90000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Objetivo Principal</label>
                  <select className="w-full bg-[#F5F5F5] border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-acid focus:bg-white transition-colors font-light appearance-none">
                    <option>Hipertrofia</option>
                    <option>Emagrecimento</option>
                    <option>Condicionamento</option>
                    <option>Saúde / Qualidade de vida</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Melhor período para visita</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Manhã', 'Tarde', 'Noite'].map(period => (
                    <label key={period} className="cursor-pointer">
                      <input type="radio" name="period" className="peer sr-only" defaultChecked={period === 'Manhã'} />
                      <div className="text-center py-3 rounded-lg border border-neutral-200 text-sm font-medium peer-checked:border-acid peer-checked:bg-acid peer-checked:text-[#111111] transition-all hover:bg-neutral-50">
                        {period}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" variant="primary" className="w-full mt-4">
                Confirmar Solicitação
              </Button>
              <p className="text-center text-[11px] text-neutral-400 mt-2">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
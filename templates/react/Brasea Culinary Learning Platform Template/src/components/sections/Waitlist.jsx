import React, { useState } from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Waitlist = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', role: '' });
    }, 1500);
  };

  return (
    <section id="waitlist" className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#292624]">
      {/* Background Gradients connecting Section 7 & 8 from spec */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191512] to-[#C56D3B]/10 pointer-events-none"></div>
      
      {/* Intro transition area (Section 7 equivalent) */}
      <div className="max-w-3xl mx-auto text-center relative z-10 mb-20">
        <div className="w-16 h-16 rounded-full bg-brand/10 mx-auto flex items-center justify-center text-brand mb-6 border border-brand/20">
          <iconify-icon icon="solar:fire-bold-duotone" width="32"></iconify-icon>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-[40px] tracking-tight text-light mb-4">
          Pronto pra evoluir na cozinha?
        </h2>
        <p className="text-muted text-lg">
          Entre na lista e seja o primeiro a acessar o Brasea com preço especial.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        
        {/* Pricing Card */}
        <div className="bg-card rounded-[20px] p-8 md:p-10 border border-brand shadow-glow-lg flex flex-col relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/20 blur-3xl rounded-full"></div>
          
          <Badge variant="founder" className="w-fit mb-6">⭐ Fundador</Badge>
          
          <div className="mb-8">
            <span className="text-muted text-sm line-through block mb-1">R$39,90/mês</span>
            <div className="flex items-baseline text-light">
              <span className="text-2xl font-semibold mr-1 text-brand">R$</span>
              <span className="font-display font-bold text-[48px] tracking-tight leading-none text-brand">29,90</span>
              <span className="text-muted text-lg ml-1">/mês</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            {[
              "Acesso completo a todas as aulas",
              "Assistente de IA 24h — Brasea",
              "Trilhas por estação e nível",
              "Preço travado para sempre"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#CEC4B8]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#54A075] text-lg shrink-0 mt-0.5"></iconify-icon>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center pt-6 border-t border-subtle">
            <p className="text-[11px] text-muted uppercase tracking-wider font-semibold">
              7 dias de garantia · cancele sem custo
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#191512] rounded-[20px] p-8 md:p-10 border border-subtle shadow-xl flex flex-col justify-center">
          <h3 className="font-display font-semibold text-2xl text-light mb-6">Garanta seu lugar</h3>
          
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[#54A075]/20 flex items-center justify-center text-[#54A075] mb-4">
                <iconify-icon icon="solar:check-read-bold-duotone" width="32"></iconify-icon>
              </div>
              <h4 className="font-display font-medium text-xl text-light mb-2">Lugar garantido!</h4>
              <p className="text-muted text-sm">Avisaremos no seu email antes do lançamento oficial.</p>
              <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>
                Voltar
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-card border border-strong rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-card border border-strong rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="(11) 99999-9999" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-card border border-strong rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                />
                <p className="text-[11px] text-muted mt-1.5 ml-1">Opcional — para aviso de lançamento</p>
              </div>
              <div className="relative">
                <select 
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-card border border-strong rounded-lg px-4 py-3 text-sm text-light appearance-none focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors cursor-pointer"
                >
                  <option value="" disabled className="text-muted">Selecione seu perfil...</option>
                  <option value="profissional">Trabalho em cozinha</option>
                  <option value="estudante">Estudante de gastronomia</option>
                  <option value="entusiasta">Cozinheiro amador/entusiasta</option>
                  <option value="outro">Outro</option>
                </select>
                <iconify-icon icon="solar:alt-arrow-down-linear" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"></iconify-icon>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  fullWidth 
                  size="lg"
                  disabled={status === 'submitting'}
                  className={status === 'submitting' ? 'opacity-80 pointer-events-none' : ''}
                >
                  {status === 'submitting' ? 'Enviando...' : 'Entrar na lista de espera e garantir preço fundador'}
                </Button>
                <p className="text-[11px] text-muted text-center mt-3 flex items-center justify-center gap-1.5">
                  <iconify-icon icon="solar:shield-check-bold" className="text-[#54A075]"></iconify-icon>
                  Sem compromisso · você será avisado antes do lançamento
                </p>
              </div>
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Waitlist;
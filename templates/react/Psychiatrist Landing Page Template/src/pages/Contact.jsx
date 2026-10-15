import { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    modality: 'presencial',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', modality: 'presencial', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
            Agende sua Consulta
          </h1>
          <p className="text-lg text-slate-600">
            Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais. Nossa equipe retornará o mais breve possível para confirmar as opções de horários.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-6 tracking-tight">Canais de Atendimento</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-teal-600 shrink-0">
                    <iconify-icon icon="simple-icons:whatsapp" width="20"></iconify-icon>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-medium">WhatsApp / Telefone</strong>
                    <a href="tel:+5511999999999" className="text-slate-600 hover:text-teal-600 transition-colors">(11) 99999-9999</a>
                    <p className="text-xs text-slate-500 mt-1">Atendimento em horário comercial.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-teal-600 shrink-0">
                    <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-medium">E-mail</strong>
                    <a href="mailto:contato@drrafaellongo.com.br" className="text-slate-600 hover:text-teal-600 transition-colors">contato@drrafaellongo.com.br</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-teal-600 shrink-0">
                    <iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-medium">Consultório Presencial</strong>
                    <span className="text-slate-600 block">Av. Paulista, 1000 - Conj. 100</span>
                    <span className="text-slate-600 block">Bela Vista, São Paulo - SP</span>
                    <span className="text-slate-600 block">CEP: 01310-100</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-3">
                <iconify-icon icon="solar:danger-triangle-linear" width="24" className="text-amber-600 shrink-0"></iconify-icon>
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">Aviso de Emergência</h4>
                  <p className="text-sm text-amber-800/80 leading-relaxed">
                    Este canal é exclusivo para agendamento eletivo. Em caso de crise aguda, pensamentos autolesivos ou emergência médica, procure imediatamente o Pronto-Socorro mais próximo ou ligue para 192 (SAMU) / 188 (CVV).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Card hover={false} className="shadow-lg border-slate-200">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-2">Solicitação Recebida!</h3>
                  <p className="text-slate-600 max-w-sm">
                    Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve pelo WhatsApp ou e-mail informado.
                  </p>
                  <Button 
                    className="mt-8" 
                    variant="outline" 
                    onClick={() => setIsSuccess(false)}
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        placeholder="João da Silva"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        placeholder="(11) 90000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      placeholder="joao@exemplo.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Modalidade de Atendimento Desejada</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="modality" 
                          value="presencial"
                          checked={formData.modality === 'presencial'}
                          onChange={handleChange}
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-slate-300" 
                        />
                        <span className="text-sm text-slate-700">Presencial (SP)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="modality" 
                          value="online"
                          checked={formData.modality === 'online'}
                          onChange={handleChange}
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-slate-300" 
                        />
                        <span className="text-sm text-slate-700">Telemedicina (Online)</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Como podemos ajudar? (Opcional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                      placeholder="Gostaria de agendar uma primeira avaliação..."
                    ></textarea>
                    <p className="text-xs text-slate-500">
                      Lembre-se: por questões de sigilo, evite detalhar históricos médicos sensíveis neste formulário inicial.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-4 text-base" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <iconify-icon icon="solar:spinner-linear" className="animate-spin"></iconify-icon>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar Solicitação de Agendamento"
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
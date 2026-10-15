import { useState } from 'react';
import { clinicInfo, specialties } from '../data/content';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 600);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
        
        {/* Info Side */}
        <div className="md:col-span-2 bg-blue-800 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Fale Conosco</h2>
            <p className="text-blue-100 text-sm mb-12">Estamos prontos para acolher você. Tire suas dúvidas ou agende uma consulta.</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <iconify-icon icon="solar:map-point-bold" width="24" className="text-blue-300 shrink-0"></iconify-icon>
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-sm text-blue-100">{clinicInfo.address}<br/>{clinicInfo.neighborhood}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <iconify-icon icon="solar:clock-circle-bold" width="24" className="text-blue-300 shrink-0"></iconify-icon>
                <div>
                  <h4 className="font-medium mb-1">Horário de Atendimento</h4>
                  <p className="text-sm text-blue-100">{clinicInfo.hours}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <iconify-icon icon="solar:phone-bold" width="24" className="text-blue-300 shrink-0"></iconify-icon>
                <div>
                  <h4 className="font-medium mb-1">Contato</h4>
                  <p className="text-sm text-blue-100">{clinicInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 opacity-50 flex justify-center">
             <iconify-icon icon="solar:infinity-bold" width="80"></iconify-icon>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:col-span-3 p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                <iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Solicitação Recebida</h3>
              <p className="text-slate-500 max-w-sm">Nossa equipe entrará em contato pelo telefone informado o mais breve possível para confirmar seu agendamento.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>Enviar nova mensagem</Button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Solicitar Agendamento</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="(11) 90000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-slate-700 mb-1">Especialidade de Interesse</label>
                  <select 
                    id="specialty"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none"
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                  >
                    <option value="" disabled>Selecione uma especialidade...</option>
                    {specialties.map(spec => (
                      <option key={spec.id} value={spec.id}>{spec.name}</option>
                    ))}
                    <option value="other">Outra / Não sei</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Solicitar Contato
                  </Button>
                </div>
                <p className="text-xs text-slate-400 text-center mt-4">
                  Seus dados estão seguros e serão utilizados apenas para retorno da clínica.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
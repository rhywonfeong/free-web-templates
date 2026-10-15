import React, { useState, useEffect } from 'react';
import RevealText from '../components/RevealText';
import clsx from 'clsx';

export default function Initiate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    crm: '',
    specialty: 'clinica-medica',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          crm: '',
          specialty: 'clinica-medica',
          message: ''
        });
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <main className="flex-1 w-full flex flex-col relative z-10">
      
      {/* 
        HERO SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-16 md:pb-24 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-6 md:mb-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Solicitar Acesso
            </p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="Junte-se à rede." />
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed font-medium mt-8">
              Estamos selecionando um grupo inicial de médicos para moldar a plataforma. Preencha seus dados institucionais para avaliarmos sua entrada no programa de fundadores.
            </p>
          </div>
        </div>
      </section>

      {/* 
        CONTENT & FORM SECTION
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-6">
          
          {/* Left Column: Contact Details */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-12 border-t border-gray-200 pt-6">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Comunicação Direta</h3>
              <a href="mailto:acesso@medicalvoices.com.br" className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-emerald-600 transition-colors">
                acesso@medicalvoices.com.br
              </a>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Sede Administrativa</h3>
              <p className="text-base text-gray-700 leading-relaxed font-medium">
                Av. Paulista, 1000 - Conj 404<br />
                São Paulo, SP 01310-100<br />
                Brasil
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Acompanhe</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2 w-max">
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> LinkedIn Médico
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2 w-max">
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Publicações Científicas
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="col-span-1 lg:col-span-7 lg:col-start-6">
            <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-2xl shadow-gray-200/40 relative overflow-hidden rounded-3xl">
              
              {/* Form Success Overlay */}
              <div className={clsx(
                "absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-12 text-center transition-all duration-700 ease-in-out",
                status === 'success' ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-8"
              )}>
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:check-read-linear" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Solicitação Recebida</h3>
                <p className="text-gray-500 font-medium">
                  Agradecemos o seu interesse. Nossa equipe de curadoria médica revisará suas credenciais e retornará o contato em até 48 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Nome Completo *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      placeholder="Dr. João Silva"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">E-mail Institucional *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      placeholder="joao@hospital.com.br"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="crm" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">CRM / UF *</label>
                    <input 
                      type="text" 
                      id="crm"
                      name="crm"
                      required
                      value={formData.crm}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      placeholder="123456/SP"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="specialty" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Especialidade Principal</label>
                    <select 
                      id="specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors appearance-none cursor-pointer"
                    >
                      <option value="clinica-medica">Clínica Médica</option>
                      <option value="cardiologia">Cardiologia</option>
                      <option value="neurologia">Neurologia</option>
                      <option value="pediatria">Pediatria</option>
                      <option value="cirurgia">Cirurgia Geral</option>
                      <option value="outra">Outra</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Motivação de Acesso</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none"
                    placeholder="Conte-nos brevemente por que deseja acessar o Medical Voices na fase beta..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto self-start mt-4 bg-gray-900 text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-emerald-600 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 disabled:opacity-70 flex items-center justify-center gap-3 min-w-[200px] rounded-full shadow-lg"
                >
                  {status === 'submitting' ? (
                    <>
                      <iconify-icon icon="solar:spinner-linear" className="animate-spin" width="18"></iconify-icon>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Convite
                      <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
import { useState } from 'react';
import { clsx } from 'clsx';
import Reveal from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';

export default function Contact() {
  useSEO({
    title: "Démarrer un projet | Roots Agency",
    description: "Demandez votre audit digital gratuit. Réservé aux professionnels de la santé.",
    canonical: "/contact"
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    type: '',
    besoin: '',
    nom: '',
    email: '',
    message: ''
  });

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-40 pb-20 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        <Reveal>
          <div className="mb-16">
            <h1 className="font-syne font-bold text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
              Parlons<br/>
              <span className="text-[#c9a96e]">Projet.</span>
            </h1>
            <p className="text-white/60 font-light text-lg md:text-xl max-w-2xl">
              Audit digital stratégique offert pour les acteurs de la santé. Processus en 3 étapes.
            </p>
          </div>
        </Reveal>

        {isSuccess ? (
          <Reveal>
            <div className="bg-[#0a0a0a] border border-white/10 p-16 text-center">
              <h2 className="font-syne font-bold text-4xl uppercase tracking-tighter text-white mb-6">Demande Validée.</h2>
              <p className="text-white/60 font-light text-lg mb-10 max-w-lg mx-auto">
                Merci {formData.nom}. Notre équipe analysera votre présence actuelle et vous contactera sous 24h pour planifier l'audit.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-white text-black font-syne font-bold uppercase tracking-wider text-sm px-10 py-4 hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
              >
                Retour
              </button>
            </div>
          </Reveal>
        ) : (
          <div className="relative">
            {/* Minimalist Progress indicator */}
            <div className="flex gap-2 mb-12">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={clsx(
                    "h-1 transition-all duration-500",
                    i <= step ? "w-16 bg-[#c9a96e]" : "w-8 bg-white/10"
                  )}
                />
              ))}
            </div>

            {/* Step 1 */}
            <div className={clsx("transition-all duration-500 absolute w-full", step === 1 ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-10 pointer-events-none")}>
              <h3 className="font-syne font-bold text-3xl md:text-4xl uppercase tracking-tighter text-white mb-8">Vous représentez...</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'chirurgien', label: 'Un Chirurgien' },
                  { id: 'clinique', label: 'Une Clinique' },
                  { id: 'centre', label: 'Un Centre Médical' },
                  { id: 'autre', label: 'Autre' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect('type', item.id)}
                    className={clsx(
                      "p-8 text-left border transition-all duration-300 group",
                      formData.type === item.id 
                        ? "border-[#c9a96e] bg-[#c9a96e]/10" 
                        : "border-white/10 bg-[#0a0a0a] hover:border-white/40"
                    )}
                  >
                    <span className="font-syne font-bold text-xl uppercase tracking-tight text-white">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className={clsx("transition-all duration-500 absolute w-full", step === 2 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-10 pointer-events-none")}>
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setStep(1)} className="text-white/40 hover:text-white"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
                <h3 className="font-syne font-bold text-3xl md:text-4xl uppercase tracking-tighter text-white">L'objectif principal</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: 'site', label: 'Création / Refonte de Site Web' },
                  { id: 'ads', label: 'Acquisition de Patients (Ads/SEO)' },
                  { id: 'full', label: 'Stratégie Globale' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect('besoin', item.id)}
                    className={clsx(
                      "p-8 text-left border transition-all duration-300 group",
                      formData.besoin === item.id 
                        ? "border-[#c9a96e] bg-[#c9a96e]/10" 
                        : "border-white/10 bg-[#0a0a0a] hover:border-white/40"
                    )}
                  >
                    <span className="font-syne font-bold text-xl uppercase tracking-tight text-white">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className={clsx("transition-all duration-500 w-full", step === 3 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-10 pointer-events-none absolute")}>
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setStep(2)} className="text-white/40 hover:text-white"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
                <h3 className="font-syne font-bold text-3xl md:text-4xl uppercase tracking-tighter text-white">Détails finaux</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    name="nom"
                    placeholder="Nom complet *"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 text-white p-6 outline-none focus:border-[#c9a96e] transition-colors font-light text-lg placeholder:text-white/30"
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email pro *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 text-white p-6 outline-none focus:border-[#c9a96e] transition-colors font-light text-lg placeholder:text-white/30"
                  />
                </div>
                
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="URL du site actuel ou message (Optionnel)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 text-white p-6 outline-none focus:border-[#c9a96e] transition-colors font-light text-lg placeholder:text-white/30 resize-none"
                ></textarea>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-syne font-bold uppercase tracking-wider text-lg py-6 hover:bg-[#c9a96e] hover:text-white transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Soumettre la demande"}
                  </button>
                </div>
              </form>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
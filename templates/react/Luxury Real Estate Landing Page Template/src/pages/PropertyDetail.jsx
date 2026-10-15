import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { properties, formatPrice } from '../data/mockProperties';
import Button from '../components/ui/Button';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = properties.find(p => p.id === id);
    if (found) {
      setProperty(found);
    } else {
      navigate('/properties'); 
    }
  }, [id, navigate]);

  if (!property) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Caricamento...</div>;

  return (
    <div className="flex-grow pb-24">
      {/* Top Banner / Title Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-medium mb-6 transition-colors">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Torna al Portfolio
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-[#DCA11D] text-sm font-medium uppercase tracking-wider mb-2">
              <iconify-icon icon="solar:map-point-linear"></iconify-icon>
              {property.location}
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">{property.title}</h1>
            <div className="flex items-center gap-4 text-zinc-400">
              <span>{property.type} • ID Proprietà: {property.id.toUpperCase()}</span>
              {property.rating && (
                <span className="flex items-center gap-1 text-white font-medium">
                  <iconify-icon icon="solar:star-bold" class="text-[#DCA11D]"></iconify-icon>
                  {property.rating}
                </span>
              )}
            </div>
          </div>
          <div className="text-left md:text-right">
            <div className="text-3xl md:text-4xl font-medium tracking-tighter text-[#DCA11D] mb-1">
              {formatPrice(property.price)} <span className="text-lg text-zinc-500 font-normal">/settimana</span>
            </div>
            <div className="text-sm text-green-500 font-medium tracking-wide flex items-center justify-start md:justify-end gap-1 mb-2">
              <iconify-icon icon="solar:shield-check-bold"></iconify-icon> Miglior Tariffa Garantita
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="w-full bg-zinc-950 border-y border-zinc-900 mb-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2 p-2">
          {/* Main Large Image */}
          <div className="lg:col-span-2 aspect-video lg:aspect-[16/9] relative overflow-hidden bg-black rounded-sm">
            <img 
              src={property.gallery[activeImage]} 
              alt={property.title} 
              className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]"
              key={activeImage} 
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto">
            {property.gallery.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative flex-shrink-0 w-32 lg:w-full aspect-video overflow-hidden rounded-sm transition-all duration-300 border-2 ${activeImage === idx ? 'border-[#DCA11D] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <iconify-icon icon="solar:document-text-linear" class="text-zinc-500"></iconify-icon>
              Descrizione Proprietà
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              {property.description}
            </p>
          </section>

          <section>
             <h2 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <iconify-icon icon="solar:home-angle-linear" class="text-zinc-500"></iconify-icon>
              Specifiche Chiave
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Camere', value: property.beds, icon: 'solar:bed-linear' },
                { label: 'Bagni', value: property.baths, icon: 'solar:bath-linear' },
                { label: 'Metri Quadri', value: property.sqm.toLocaleString(), icon: 'solar:ruler-linear' },
                { label: 'Categoria', value: property.type, icon: 'solar:city-linear' },
              ].map((spec, i) => (
                <div key={i} className="bg-zinc-950 border border-zinc-900 p-5 rounded-sm flex flex-col items-start gap-3">
                  <iconify-icon icon={spec.icon} class="text-2xl text-[#DCA11D]"></iconify-icon>
                  <div>
                    <div className="text-2xl font-medium tracking-tighter text-white">{spec.value}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{spec.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section className="pt-12 border-t border-zinc-900">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-medium tracking-tight">Recensioni degli Ospiti</h2>
              <div className="flex items-center gap-1 text-xl font-medium">
                <iconify-icon icon="solar:star-bold" class="text-[#DCA11D]"></iconify-icon>
                {property.rating || 'Nuova'}
              </div>
            </div>
            
            {property.reviews && property.reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {property.reviews.map((review, i) => (
                  <div key={i} className="bg-zinc-950 p-6 border border-zinc-900 rounded-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-medium text-[#DCA11D]">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-white">{review.author}</div>
                        <div className="text-xs text-zinc-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <iconify-icon 
                          key={idx} 
                          icon="solar:star-bold" 
                          class={idx < review.rating ? "text-[#DCA11D]" : "text-zinc-800"}
                        ></iconify-icon>
                      ))}
                    </div>
                    <p className="text-zinc-300 font-light leading-relaxed text-sm">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-zinc-500 italic">Ancora nessuna recensione. Sii il primo a soggiornare in questa fantastica villa.</p>
            )}
          </section>
        </div>

        {/* Sidebar / Contact Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-zinc-950 border border-zinc-900 rounded-sm p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-[#DCA11D]/10 text-[#DCA11D] px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider mb-4 border border-[#DCA11D]/20">
              <iconify-icon icon="solar:wallet-money-bold"></iconify-icon> Prenota Diretto
            </div>
            
            <h3 className="text-2xl font-medium tracking-tight mb-2">Prenota Ora</h3>
            <p className="text-sm text-zinc-400 mb-6 border-b border-zinc-900 pb-6">
              Evita le commissioni del 15% di Airbnb. Il nostro team garantisce la migliore tariffa prenotando direttamente qui.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-zinc-500 font-medium uppercase">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full bg-black border border-zinc-800 rounded-sm px-3 py-3 text-sm text-zinc-300 focus:outline-none focus:border-[#DCA11D] transition-colors [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-zinc-500 font-medium uppercase">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full bg-black border border-zinc-800 rounded-sm px-3 py-3 text-sm text-zinc-300 focus:outline-none focus:border-[#DCA11D] transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Nome Completo" 
                  className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DCA11D] transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Indirizzo Email" 
                  className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DCA11D] transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Richieste speciali o domande..." 
                  rows={3}
                  className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DCA11D] transition-colors resize-none"
                ></textarea>
              </div>
              <Button type="submit" className="w-full" size="lg">Richiedi Prenotazione</Button>
            </form>

            <div className="mt-6 flex flex-col gap-3 text-xs text-zinc-500">
              <div className="flex justify-between">
                <span>Tariffa Prenotazione Diretta</span>
                <span className="text-white">{formatPrice(property.price)}</span>
              </div>
              <div className="flex justify-between line-through opacity-50">
                <span>Costi Piattaforma (Airbnb/Booking)</span>
                <span>{formatPrice(property.price * 0.15)}</span>
              </div>
              <div className="flex justify-between border-t border-zinc-900 pt-3">
                <span className="font-bold text-white">Totale</span>
                <span className="font-bold text-[#DCA11D]">{formatPrice(property.price)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
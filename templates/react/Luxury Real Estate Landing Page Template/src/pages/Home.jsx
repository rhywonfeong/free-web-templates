import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import PropertyCard from '../components/ui/PropertyCard';
import { properties } from '../data/mockProperties';

export default function Home() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 -mt-24 pt-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1600&q=80" 
            alt="Cefalù Coast" 
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DCA11D]/30 bg-black/40 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#DCA11D] animate-pulse"></span>
            <span className="text-xs font-medium text-[#DCA11D] uppercase tracking-wider">L'Autentica Sicilia</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
            Spazi Curati.<br/>
            <span className="text-zinc-500">Vivere Esclusivo.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Scopri un portfolio delle proprietà più eccezionali in Sicilia. Ville e tenute selezionate per offrire un'esperienza mediterranea indimenticabile, senza commissioni nascoste.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/properties">
              <Button size="lg" icon="solar:arrow-right-linear">Esplora Proprietà</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">Parla con Noi</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { label: "Proprietà Esclusive", value: "40+" },
              { label: "Destinazioni Siciliane", value: "12" },
              { label: "Clienti Soddisfatti", value: "100%" },
              { label: "Anni sul Territorio", value: "15" },
            ].map((stat, i) => (
              <motion.div variants={fadeInUp} key={i} className="flex flex-col items-center text-center space-y-2">
                <span className="text-4xl md:text-5xl font-medium tracking-tighter text-[#DCA11D]">{stat.value}</span>
                <span className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Direct Booking CTA Section */}
      <section className="py-20 bg-[#DCA11D] text-black w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Evita le commissioni.<br />Prenota direttamente.</h2>
              <p className="text-black/80 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                Perché pagare il 15-20% in più per le commissioni di Airbnb o Booking.com? Prenotando tramite RENTBASE, ottieni la migliore tariffa garantita e un servizio di concierge dedicato in Sicilia 24/7.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <iconify-icon icon="solar:wallet-money-linear" class="text-3xl"></iconify-icon>
                  <span className="font-bold tracking-tight">0% Commissioni</span>
                </div>
                <div className="flex flex-col gap-2">
                  <iconify-icon icon="solar:shield-check-linear" class="text-3xl"></iconify-icon>
                  <span className="font-bold tracking-tight">Miglior Tariffa Garantita</span>
                </div>
              </div>
              <Link to="/properties">
                <Button className="bg-black text-white hover:bg-zinc-900 border-none shadow-xl hover:shadow-2xl">
                  Trova la Tua Villa
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video lg:aspect-square bg-black/10 rounded-md p-6 lg:p-12 flex flex-col justify-center"
            >
              <div className="bg-white rounded-md p-6 shadow-2xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center border-b border-zinc-200 pb-4 mb-4">
                  <span className="font-medium text-zinc-500">Airbnb / Booking</span>
                  <span className="font-bold text-red-500 line-through">€ 5.400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">RENTBASE Diretto</span>
                  <span className="font-bold text-2xl text-green-600">€ 4.500</span>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center gap-2 text-sm text-zinc-500">
                  <iconify-icon icon="solar:check-circle-bold" class="text-green-600"></iconify-icon>
                  Risparmi € 900 di commissioni
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sicily & Cefalu Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Scopri la Sicilia e Cefalù</h2>
            <p className="text-zinc-400 text-lg">Un'immersione tra mare cristallino, storia normanna ed eccellenze gastronomiche. Scopri cosa ti attende durante il tuo soggiorno.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Spiagge e Coste Incontaminate",
              desc: "Rilassati sulle sabbie dorate di Cefalù o esplora le calette segrete della Riserva dello Zingaro. Un mare che non dimenticherai.",
              img: "https://images.unsplash.com/photo-1533588079089-b7b51e065bfb?w=800&q=80"
            },
            {
              title: "Il Fascino del Centro Storico",
              desc: "Passeggia per le vie acciottolate, visita l'imponente Duomo arabo-normanno patrimonio UNESCO e lasciati ispirare dalla storia.",
              img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80"
            },
            {
              title: "Esperienze Gastronomiche",
              desc: "Organizziamo chef privati in villa, degustazioni di vini dell'Etna e tour alla scoperta dello street food siciliano autentico.",
              img: "https://images.unsplash.com/photo-1498579150354-979475d9e071?w=800&q=80"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-md aspect-[4/5] bg-zinc-900 border border-zinc-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-300 line-clamp-3">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-zinc-950/30 border-t border-zinc-900 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Esclusive in Evidenza</h2>
              <p className="text-zinc-400 text-lg">Una selezione curata delle nostre ville siciliane più prestigiose, disponibili per la tua prossima vacanza.</p>
            </div>
            <Link to="/properties" className="group flex items-center gap-2 text-[#DCA11D] font-medium text-sm hover:text-white transition-colors">
              Vedi tutte le proprietà
              <iconify-icon icon="solar:arrow-right-linear" class="transition-transform group-hover:translate-x-1"></iconify-icon>
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProperties.map(property => (
              <motion.div key={property.id} variants={fadeInUp}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#DCA11D]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-md border border-zinc-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" 
                alt="Modern Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <iconify-icon icon="solar:crown-star-linear" class="text-[#DCA11D] text-4xl mb-6"></iconify-icon>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Il Nuovo Standard dell'Ospitalità.</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                RENTBASE è stato fondato su un principio unico: curare le migliori proprietà della Sicilia per coloro che esigono l'eccellenza. Uniamo il fascino architettonico a un servizio impeccabile.
              </p>
              <ul className="space-y-4 mb-10 w-full">
                {[
                  "Accesso esclusivo a ville off-market",
                  "Consulenza e concierge discreto",
                  "Esperienze personalizzate sul territorio"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 bg-zinc-900/50 p-4 rounded-sm border border-zinc-800/50">
                    <iconify-icon icon="solar:check-circle-linear" class="text-[#DCA11D] text-xl shrink-0"></iconify-icon>
                    <span className="font-medium text-sm tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button>Parla con il nostro team</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
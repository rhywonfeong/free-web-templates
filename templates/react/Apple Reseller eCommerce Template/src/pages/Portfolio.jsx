import { ArrowRight, BadgeCheck, Clock3, House, ScanLine, Icon } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Clock3, text: "Il tuo percorso di valore si aggiorna in base a ogni dispositivo, acquisto e traguardo." },
  { icon: ScanLine, text: "Sai sempre quando è il momento giusto per cambiare, riparare o dare nuova vita al tuo Apple." },
  { icon: BadgeCheck, text: "Prodotti, assistenza e garanzie riuniti in un unico spazio, senza passaggi inutili." },
  { icon: House, text: "Portfolio, competenze digitali e certificati: il valore che hai scelto, sempre sotto controllo." },
];

export default function Portfolio() {
  return <section className="portfolio-section" id="mela-space">
    <section className="portfolio-wrap">
      <motion.div className="portfolio-intro" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
        <p>IL TUO SPAZIO MELA</p>
        <h1>La tecnologia che scegli racconta il tuo percorso.</h1>
      </motion.div>
      <div className="portfolio-features">
        {features.map(({ icon: Icon, text }, index) => <motion.article key={text} className="portfolio-feature" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -5 }}><Icon size={28} strokeWidth={1.55} /><p>{text}</p></motion.article>)}
      </div>

      <section className="portfolio-cta">
        <div className="portfolio-grid" />
        <motion.div className="portfolio-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
          <p className="portfolio-kicker">MELA SPACE</p>
          <h2>Tieni insieme i tuoi dispositivi, la loro storia e tutto il valore che hanno ancora da offrirti.</h2>
          <button className="portfolio-button">Scopri il tuo spazio <ArrowRight size={17} /></button>
          <div className="portfolio-trusted"><p>UN ECOSISTEMA PENSATO PER TE</p><div><span>GARANZIA 24</span><span>APPLE CARE</span><span>MELA LAB</span></div></div>
        </motion.div>

        <motion.div className="phone-wrap" aria-hidden="true" initial={{ opacity: 0, y: 32, rotate: 3 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8, rotate: -1 }}>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-status"><b>9:41</b><div><i /><i /><i /></div></div>
              <div className="phone-content">
                <div className="phone-greeting"><div><small>BENTORNATO</small><strong>Ciao, Marco</strong></div><span>MC</span></div>
                <div className="phone-highlight"><small>IL TUO PROSSIMO PASSO</small><strong>iPhone 15 Pro</strong><div className="phone-progress"><i /></div><p>Il tuo iPhone ha ancora molto da dare <b>65%</b></p></div>
                <div className="phone-card"><small>IL TUO ECOSISTEMA</small><strong>87% protetto</strong><div className="phone-meter"><i /></div><span>Copertura ottimale</span></div>
                <div className="phone-card"><small>VALORE MELA</small><strong>4.850 <em>punti</em></strong></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  </section>;
}

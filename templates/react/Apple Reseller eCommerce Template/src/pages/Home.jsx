import { ArrowRight, BadgeCheck, Check, ChevronRight, Menu, ShoppingBag, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio";

function formatPrice(value) {
  return `${Number(value || 0).toLocaleString("it-IT")} €`;
}

export default function Home({ products, cartCount }) {
  const featured = products.filter((product) => product.status === "Pubblicato" && product.stock > 0).slice(0, 4);

  return <div className="storefront">
    <motion.header className="store-nav" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Link className="store-brand" to="/"><span>M</span>MELA<sup>®</sup></Link>
      <nav className="store-links"><a href="#shop">Shop</a><a href="#garanzia">Come funziona</a><a href="#perche">Perché MELA</a><a href="#mela-space">Portfolio</a></nav>
      <div className="store-nav-actions"><Link className="cart-link" to="/carrello" aria-label="Apri carrello"><ShoppingBag size={17} />{cartCount > 0 && <b>{cartCount}</b>}</Link><Link className="store-login" to="/cms">Area riservata <ArrowRight size={15} /></Link></div>
      <button className="store-menu" aria-label="Apri menu"><Menu /></button>
    </motion.header>

    <main>
      <section className="store-hero">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className="store-kicker"><Sparkles size={14} /> APPLE, SCELTI PER TE</p>
          <h1>Il tuo prossimo<br /><i>Apple.</i></h1>
          <p className="hero-text">iPhone, Mac e iPad originali. MELA e' il reseller che seleziona le configurazioni giuste e ti segue anche dopo l'acquisto.</p>
          <div className="hero-actions"><a className="shop-button" href="#shop">Esplora lo shop <ArrowRight size={18} /></a><a className="hero-link" href="#perche">Perche' MELA <ArrowRight size={16} /></a></div>
          <div className="hero-proof"><BadgeCheck size={19} /><span><strong>Rivenditore specializzato</strong>Prodotti Apple originali</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-visual-top"><span>IPHONE 15 PRO</span><span>01 / 04</span></div>
          <motion.img whileHover={{ scale: 1.035 }} transition={{ duration: 0.5 }} src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1300&q=90" alt="iPhone Apple disponibile da MELA" />
          <div className="hero-label"><span>APPLE AUTHENTIC</span><strong>Potenza,<br />senza attese.</strong></div>
          <div className="price-tag"><small>DA</small><strong>799€</strong><span>Disponibile ora</span></div>
        </motion.div>
      </section>

      <motion.section className="trust-strip" id="garanzia" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }}><div><ShieldCheck /><span><strong>24 mesi di garanzia</strong>Inclusa su ogni prodotto</span></div><div><Check /><span><strong>30 giorni per ripensarci</strong>Reso facile e gratuito</span></div><div><Sparkles /><span><strong>Controllo in 40 punti</strong>Come nuovo, davvero</span></div></motion.section>

      <section className="collection" id="shop"><div className="section-intro"><p className="store-kicker">SELEZIONATI PER TE</p><h2>Pronti per un nuovo inizio.</h2><p>Questi prodotti arrivano direttamente dal tuo catalogo MELA.</p></div><div className="product-grid">
        {featured.map((product, index) => <motion.article className="store-product" key={product.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -7 }}><Link to={`/prodotto/${product.id}`}><div className={`store-product-image ${product.tone}`}><img src={product.image} alt={product.name} /><span>{product.grade}</span></div><div className="store-product-info"><p>{product.category}</p><h3>{product.name}</h3><div><strong>{formatPrice(product.price)}</strong><span className="product-arrow"><ChevronRight size={19} /></span></div></div></Link></motion.article>)}
      </div><a className="all-products" href="#shop">Vedi tutti i prodotti <ArrowRight size={16} /></a></section>

      <motion.section className="why-mela" id="perche" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}><div><p className="store-kicker">IL METODO MELA</p><h2>Non basta<br />vendere Apple.</h2></div><div className="why-copy"><p>Conosciamo ogni configurazione, ogni dettaglio e ogni esigenza. Ti aiutiamo a scegliere il prodotto Apple giusto, con un servizio diretto prima e dopo l'acquisto.</p><a href="#shop">Scopri la selezione <ArrowRight size={17} /></a></div></motion.section>
      <Portfolio />
    </main>
    <footer className="store-footer"><Link className="store-brand" to="/"><span>M</span>MELA<sup>®</sup></Link><p>Il tuo reseller Apple di fiducia.</p><Link to="/cms">Accedi al CMS</Link></footer>
  </div>;
}

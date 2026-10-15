import { Check, ChevronLeft, Heart, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const formatPrice = (value) => `${Number(value || 0).toLocaleString("it-IT")} €`;

export default function ProductPage({ products, addToCart, cartCount }) {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);
  const [option, setOption] = useState("Pagamento unico");
  const [added, setAdded] = useState(false);
  if (!product) return <main className="not-found"><h1>Prodotto non trovato</h1><Link to="/">Torna allo shop</Link></main>;
  const monthly = Math.ceil(Number(product.price) / 12);
  const available = product.status === "Pubblicato" && product.stock > 0;
  function handleAdd() { addToCart(product, option); setAdded(true); }
  return <div className="product-page">
    <motion.header className="product-nav" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}><Link className="store-brand" to="/"><span>M</span>MELA<sup>®</sup></Link><div><Link className="back-link" to="/"><ChevronLeft size={17} /> Torna allo shop</Link><Link className="cart-link dark" to="/carrello"><ShoppingBag size={17} />{cartCount > 0 && <b>{cartCount}</b>}</Link></div></motion.header>
    <main className="product-layout">
      <motion.section className={`product-gallery ${product.tone}`} initial={{ opacity: 0, x: -26, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}><span className="detail-badge">RICONDIZIONATO CERTIFICATO</span><motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} src={product.image} alt={product.name} /><div className="gallery-note"><ShieldCheck size={18} />Verificato in 40 punti</div></motion.section>
      <motion.section className="product-details" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.12 }}><p className="product-category">{product.category} / DISPONIBILE ORA</p><h1>{product.name}</h1><div className="rating">4.9 <span>★★★★★</span> <small>18 recensioni</small></div><p className="product-description">Un dispositivo Apple selezionato, testato e preparato dal nostro laboratorio. Pronto a seguirti dal primo giorno.</p><div className="detail-price"><strong>{formatPrice(product.price)}</strong><span>IVA inclusa</span></div>
        <div className="choice-block"><p>Condizione estetica <b>{product.grade}</b></p><div className="grade-options"><button className="chosen">{product.grade}<Check size={14} /></button><button>Come funziona?</button></div></div>
        <div className="choice-block"><p>Scegli come acquistare</p><div className="payment-options"><button onClick={() => setOption("Pagamento unico")} className={option === "Pagamento unico" ? "selected" : ""}><strong>Pagamento unico</strong><span>{formatPrice(product.price)}</span></button><button onClick={() => setOption("Finanziamento 12 mesi")} className={option === "Finanziamento 12 mesi" ? "selected" : ""}><strong>12 rate senza interessi</strong><span>da {formatPrice(monthly)} / mese</span></button></div></div>
        <motion.button className="add-cart" disabled={!available} onClick={handleAdd} whileHover={available ? { scale: 1.015 } : undefined} whileTap={available ? { scale: 0.98 } : undefined}>{available ? <><ShoppingBag size={18} />{added ? "Aggiunto al carrello" : "Aggiungi al carrello"}</> : "Non disponibile"}</motion.button>
        <div className="purchase-benefits"><span><Truck size={18} /><b>Consegna gratuita</b>in 24/48 ore</span><span><ShieldCheck size={18} /><b>24 mesi di garanzia</b>inclusa nel prezzo</span><span><Heart size={18} /><b>30 giorni per decidere</b>reso facile e gratuito</span></div>
      </motion.section>
    </main>
  </div>;
}

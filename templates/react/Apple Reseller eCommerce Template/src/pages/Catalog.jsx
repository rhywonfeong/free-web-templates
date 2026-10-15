import { useRef, useState } from "react";
import { Bell, Check, ChevronDown, CircleCheck, CloudUpload, ExternalLink, ImagePlus, LayoutDashboard, LoaderCircle, MoreHorizontal, Package, Plus, Search, Settings, SlidersHorizontal, Sparkles, Tag, X, Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["Tutti", "iPhone", "Mac", "iPad", "Watch", "Accessori"];
const blank = { name: "", category: "iPhone", grade: "Eccellente", price: "", stock: "1", status: "Bozza", description: "", sku: "" };
const formatPrice = (value) => `${Number(value || 0).toLocaleString("it-IT")} €`;

export default function Catalog({ products, setProducts }) {
  const [category, setCategory] = useState("Tutti");
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(blank);
  const [image, setImage] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [synced, setSynced] = useState(true);
  const fileInput = useRef(null);
  const visible = products.filter((item) => (category === "Tutti" || item.category === category) && item.name.toLowerCase().includes(query.toLowerCase()));

  function upload(event) {
    const file = event.target.files?.[0];
    if (file) setImage(URL.createObjectURL(file));
  }
  function save(event) {
    event.preventDefault();
    setProducts((items) => [{ id: Date.now(), ...form, stock: Number(form.stock), image: image || "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85", tone: "violet" }, ...items]);
    setModal(false); setForm(blank); setImage(""); setSynced(false);
  }
  function sync() {
    setSyncing(true);
    window.setTimeout(() => { setSyncing(false); setSynced(true); }, 900);
  }

  return <div className="cms-shell">
    <motion.aside className="cms-sidebar" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}><Link to="/cms" className="cms-brand"><span>M</span> MELA<small>CMS</small></Link><p className="workspace-label">WORKSPACE</p>
      <nav className="cms-nav"><a href="#overview"><LayoutDashboard size={18} />Panoramica</a><a className="active" href="#products"><Package size={18} />Prodotti <b>{products.length}</b></a><a href="#categories"><Tag size={18} />Categorie</a><a href="#settings"><Settings size={18} />Impostazioni</a></nav>
      <div className="cms-side-footer"><div className="help-card"><Sparkles size={16} /><strong>Hai bisogno di aiuto?</strong><span>Guida rapida al catalogo</span></div><div className="account"><div>LC</div><span><strong>Luca Conti</strong><small>Amministratore</small></span><MoreHorizontal size={17} /></div></div>
    </motion.aside>
    <motion.main className="cms-main" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}><header className="cms-header"><div className="crumb">Catalogo <span>/</span> <strong>Prodotti</strong></div><div className="header-actions"><button className="notify"><Bell size={19} /><i /></button><Link to="/" className="visit-store">Visita lo store <ExternalLink size={15} /></Link></div></header>
      <section className="cms-content" id="products"><div className="cms-title-row"><div><p className="overline">CATALOGO MELA</p><h1>Prodotti</h1><p>Gestisci il catalogo e invia ogni modifica direttamente al tuo store.</p></div><button className="add-product" onClick={() => setModal(true)}><Plus size={18} /> Aggiungi prodotto</button></div>
        <section className={`sync-panel ${synced ? "is-synced" : ""}`}><div className="sync-icon">{syncing ? <LoaderCircle className="spin" size={23} /> : <CloudUpload size={23} />}</div><div><strong>{syncing ? "Sincronizzazione in corso..." : synced ? "Tutto e' sincronizzato" : "Modifiche pronte per la sincronizzazione"}</strong><p>{synced ? "Il catalogo e lo store MELA sono aggiornati." : "Pubblica gli ultimi aggiornamenti sullo store."}</p></div><span className="sync-time">{synced ? "Ultima sincronizzazione: ora" : "1 modifica da inviare"}</span><button onClick={sync} disabled={syncing}>{syncing ? "Sincronizzo" : synced ? "Sincronizza ora" : "Pubblica modifiche"}</button></section>
        <div className="metric-grid">{[{ icon: Package, tone: "green", label: "Prodotti nel catalogo", value: products.length, note: "+2 negli ultimi 30 giorni" }, { icon: CircleCheck, tone: "blue", label: "Online sullo store", value: products.filter((p) => p.status === "Pubblicato").length, note: "Tutti sincronizzati" }, { icon: ImagePlus, tone: "amber", label: "Media da completare", value: products.filter((p) => !p.image).length, note: "Prodotti senza immagini" }].map(({ icon: Icon, tone, label, value, note }, index) => <motion.article key={label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.18 + index * 0.07 }} whileHover={{ y: -4 }}><span className={`metric-icon ${tone}`}><Icon size={19} /></span><p>{label}</p><strong>{value}</strong><small>{note}</small></motion.article>)}</div>
        <section className="products-card"><div className="product-toolbar"><div className="tabs">{categories.map((item) => <button className={category === item ? "selected" : ""} onClick={() => setCategory(item)} key={item}>{item}{item === "Tutti" && <span>{products.length}</span>}</button>)}</div><div className="table-controls"><label className="cms-search"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cerca prodotto..." /></label><button className="filter"><SlidersHorizontal size={15} /> Filtri</button></div></div>
          <div className="cms-table-wrap"><table className="cms-table"><thead><tr><th>PRODOTTO</th><th>STATO</th><th>PREZZO</th><th>DISPONIBILITA'</th><th>AGGIORNATO</th><th /></tr></thead><tbody>{visible.map((product) => <motion.tr key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}><td><div className="cms-product"><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.category} · {product.grade}</small></span></div></td><td><span className={`state ${product.status === "Pubblicato" ? "live" : "draft"}`}><i />{product.status}</span></td><td><strong>{formatPrice(product.price)}</strong></td><td><span className={product.stock ? "available" : "unavailable"}>{product.stock ? `${product.stock} disponibili` : "Esaurito"}</span></td><td><small className="updated">Oggi, 10:42</small></td><td><button className="row-more"><MoreHorizontal size={19} /></button></td></motion.tr>)}</tbody></table></div><footer className="table-foot"><span>Visualizzati {visible.length} di {products.length} prodotti</span><button>Pagina 1 <ChevronDown size={14} /></button></footer></section>
      </section></motion.main>
    <AnimatePresence>{modal && <motion.div className="product-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.form className="product-modal" onSubmit={save} initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 18 }} transition={{ duration: 0.25 }}><header><div><p className="overline">NUOVO PRODOTTO</p><h2>Carica nel catalogo</h2><p>Completa i dettagli: potrai pubblicare sullo store in un attimo.</p></div><button type="button" onClick={() => setModal(false)}><X size={20} /></button></header><section className="upload-zone" onClick={() => fileInput.current?.click()}>{image ? <img src={image} alt="Anteprima" /> : <><span><ImagePlus size={23} /></span><strong>Trascina qui le immagini</strong><p>oppure <b>sfoglia i file</b> · JPG, PNG fino a 10MB</p></>}<input ref={fileInput} onChange={upload} type="file" accept="image/*" /></section><div className="form-fields"><label className="wide">Nome prodotto<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="es. iPhone 15 Pro 128GB" /></label><label>Categoria<select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>{categories.slice(1).map((x) => <option key={x}>{x}</option>)}</select></label><label>Condizione<select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })}><option>Eccellente</option><option>Ottimo</option><option>Buono</option></select></label><label>Prezzo EUR<input required type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="799" /></label><label>Disponibilita'<input required type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} /></label><label className="wide">Descrizione<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Racconta le condizioni, la configurazione e cosa include..." /></label></div><footer><button type="button" className="cancel" onClick={() => setModal(false)}>Annulla</button><button className="save-product"><Check size={16} /> Salva prodotto</button></footer></motion.form></motion.div>}</AnimatePresence>
  </div>;
}

import "../styles.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const asset = (id, size = "1600w") => id === "default" ? "default" : `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_${size}.jpg`;
const contact = (subject) => `https://wa.me/34653654342?text=${encodeURIComponent(`Quiero más información sobre: ${subject}.`)}`;

const boats = [
  {
    id: "altamarea-wave-20",
    number: "01",
    label: "Primera Unidad",
    title: "Altamarea Wave 20\n+ Honda BF100",
    text: "Altamarea Wave 20 nueva, totalmente acabada y disponible para entrega inmediata, equipada con motor Honda BF100 nuevo. Unidad especialmente equipada, con acabados realizados por BodhiNautic, cubierta E-Dek PRO y Bimini en acero inoxidable. Precio especial de lanzamiento por tratarse de nuestra primera unidad Wave 20.",
    price: "27.625 € + IVA",
    condition: "NUEVA",
    availability: "ENTREGA INMEDIATA",
    version: "",
    specs: {
      "Eslora": "5,90 m",
      "Manga": "2,43 m",
      "Capacidad": "12 personas",
      "Motor": "Honda BF100 nuevo",
      "Potencia": "100 CV",
      "Potencia máxima homologada": "135 CV",
      "Depósito de combustible": "100 L",
      "Material del flotador": "Hypalon (CSM)"
    },
    equipment: [
      "Cubierta E-Dek PRO",
      "Bimini en acero inoxidable",
      "Solárium completo con extensión",
      "Consola con parabrisas y pasamanos",
      "Plataformas de popa reforzadas",
      "Depósito de combustible de 100 L en acero inoxidable homologado",
      "Sistema de ducha con depósito de 50 L",
      "Escalera de baño",
      "Sistema eléctrico completo",
      "Panel eléctrico con pulsadores",
      "Instrumentación Honda",
      "Toma USB",
      "Luces de navegación y luz todo horizonte",
      "Bocina eléctrica",
      "Bomba de achique"
    ],
    bodhiFinishes: "BodhiNautic ha realizado de forma exclusiva trabajos de acabado y personalización de esta unidad, incluyendo determinados acabados del flotador y la instalación a medida de la cubierta E-Dek PRO.",
    specialNotice: {
      title: "PRECIO PROMOCIONAL PRIMERA UNIDAD",
      price: "27.625 € + IVA",
      text: "Unidad nueva, totalmente terminada y disponible para entrega inmediata. Su precio normal es de 32.500 € + IVA."
    },
    images: ["62df4898-ee65-4f06-b6cc-9ce3f18a3985", "d1519f97-4832-4d42-8591-50e9da823ac9", "01b6dee1-787c-4f2b-9a0b-fee52135d892", "12ce7b91-da28-48a4-a02e-985904cf3589", "7d245b5d-b714-401a-8297-f7a79a8926e3", "24efa8fc-a248-45a3-a6fe-b2a1f461bca2", "d20c665e-28c9-4192-b8dd-0c5fa6085fef", "7bd92929-9c5b-45c7-8aab-c088ac4bb0a7"],
    tag: "Disponible",
  },
  {
    id: "wave-23",
    number: "02",
    label: "Seminueva",
    title: "Altamarea Wave 23 + Honda BF200",
    text: "Wave 23 seminueva y disponible para entrega inmediata. Esta unidad fue expuesta en el Salón Náutico Internacional de Barcelona 2025 y se encuentra en excelente estado. Equipada con un motor Honda BF200 de 200 CV con mando electrónico y 165 horas de funcionamiento, además de una configuración muy completa. Una oportunidad especialmente interesante para acceder a una Wave 23 prácticamente nueva con un importante ahorro respecto a una unidad nueva (su precio si fuera totalmente nueva sin descuento sería de 55.000€ + IVA más 8.900€ de extras como equipo de música, arco con toldo bimini, cubierta de teca sintética...). El precio actual de 44.950€ + IVA no incluye la bañera de teca PlasDeck hiperrealista.",
    price: "44.950 € + IVA",
    condition: "SEMINUEVA",
    availability: "ENTREGA INMEDIATA",
    version: "",
    specs: {
      "Eslora": "6,80 m",
      "Manga": "2,70 m",
      "Capacidad": "14 personas",
      "Depósito de combustible": "150 L",
      "Material del flotador": "Hypalon (CSM)",
      "Motor": "Honda BF200",
      "Potencia": "200 CV",
      "Mando": "electrónico",
      "Horas de motor": "165 h"
    },
    equipment: [
      "Consola central con parabrisas",
      "Solárium de proa y popa",
      "Tapicería completa",
      "Depósito de combustible de acero inoxidable de 150 L",
      "Dirección",
      "Plataforma y escalera de baño",
      "Sistema eléctrico completo",
      "Panel eléctrico",
      "Bomba de achique",
      "Luces de navegación",
      "Pasamanos en acero inoxidable",
      "Equipamiento completo para navegación recreativa"
    ],
    history: [
      "Unidad expuesta en el Salón Náutico Internacional de Barcelona 2025.",
      "Uso posterior muy limitado.",
      "Motor con 165 horas.",
      "Embarcación seminueva en excelente estado."
    ],
    specialNotice: {
      title: "UNIDAD SEMINUEVA · ENTREGA INMEDIATA",
      price: "44.950 € + IVA",
      text: "Precio especial (no incluye bañera de teca PlasDeck hiperrealista). Su precio si fuera totalmente nueva sin descuento sería de 55.000€ + IVA más 8.900€ de extras."
    },
    images: ["3e26931f-c245-4119-aa79-671a90915074", "37a04791-4c19-42a5-a475-383d6c80446d", "dce4d1c4-c85a-4230-8a74-f5bc68c60c48", "f73387d5-ae9f-444c-8f65-e8ca35cb118c", "a10ab8e0-f26f-478f-b20f-85b414513a68", "18b42169-fc1a-4cf9-93e2-6fe2406066a6", "c9a738bb-be7b-4818-b255-210b44ea8c04", "58cf73b1-f9d1-4880-b1bb-96c72a55ac5a"],
    tag: "Seminueva",
  }
];

function BoatCard({ boat, reverse }) {
  const isOffer = !!boat.specialNotice;

  return (
    <section className="max-w-[1280px] mx-auto mb-32 px-4 sm:px-6" id={boat.id}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col">
        {/* HUGE IMAGE AREA */}
        <div className="relative h-[50vh] min-h-[400px] md:h-[65vh] md:min-h-[500px] w-full bg-slate-900 group">
          {isOffer && (
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 bg-red-600 text-white text-xs sm:text-sm font-bold px-4 py-2 uppercase tracking-widest rounded shadow-xl flex items-center gap-2 animate-pulse">
              <span className="text-lg">🔥</span> Oportunidad Única
            </div>
          )}
          <ImageCarousel 
            className="w-full h-full object-cover" 
            images={boat.images.map((image) => asset(image, "1600w"))} 
            alt={boat.title.replace("\n", " ")} 
            tag={boat.tag}
          />
        </div>

        {/* CONTENT AREA */}
        <div className="p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 bg-white relative">
          {/* LEFT SIDE: Title & Desc & Prices */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-teal-900 text-teal-50 px-3 py-1 font-mono text-xs uppercase tracking-widest rounded-sm">
                {boat.number}
              </span>
              <span className="text-teal-700 font-mono text-xs uppercase tracking-widest font-semibold">
                {boat.label || boat.title.replace("\n", " ")}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
              {boat.title.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              {boat.text}
            </p>

            {/* NEW MASSIVE PRICE SECTION */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border-2 border-teal-100/50 mt-auto shadow-sm">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border ${boat.condition.includes('NUEVA') ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'}`}>
                  {boat.condition}
                </span>
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-teal-200 bg-teal-50 text-teal-700">
                  {boat.availability}
                </span>
                {boat.version && (
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-200 bg-blue-50 text-blue-700">
                    {boat.version}
                  </span>
                )}
              </div>

              {isOffer ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-slate-200/60 pb-6">
                    <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">Precio Habitual:</span>
                    <span className="text-slate-400 font-bold text-2xl line-through decoration-red-500/50 decoration-2">
                      {boat.specialNotice.text.match(/(\d{2}\.\d{3}( €|\s?€)?( \+ IVA)?)/)?.[0] || "Consultar"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-teal-800 font-bold text-sm uppercase tracking-widest">Precio Especial Oferta</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl md:text-7xl font-black text-teal-600 tracking-tighter leading-none">
                        {boat.specialNotice.price.split(' ')[0]}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-teal-700/70 whitespace-nowrap">
                        {boat.specialNotice.price.split(' ').slice(1).join(' ')}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 bg-teal-100/50 p-4 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm sm:text-base text-teal-900 font-medium leading-relaxed">
                      {boat.specialNotice.text}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <span className="text-teal-800 font-bold text-sm mb-1 uppercase tracking-widest">Precio Final</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-800 tracking-tighter leading-none">
                      {boat.price.split(' ')[0]}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-slate-500 whitespace-nowrap">
                      {boat.price.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="mt-10">
                <a href={contact(boat.title.replace("\n", " "))} className="inline-flex items-center justify-center w-full px-8 py-5 bg-teal-900 hover:bg-teal-800 text-white font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-300 rounded shadow hover:shadow-lg transform hover:-translate-y-0.5">
                  Solicitar Información <span className="ml-3 text-lg">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Specs & Equip */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-6">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest border-b-2 border-teal-900 pb-3 mb-6">
                Especificaciones Técnicas
              </h3>
              <div className="flex flex-col">
                {Object.entries(boat.specs).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0" key={key}>
                      <span className="text-sm text-slate-500">{key}</span>
                      <span className="text-sm font-semibold text-slate-900 text-right">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest border-b-2 border-teal-900 pb-3 mb-6">
                Equipamiento Destacado
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {boat.equipment.map((item, index) => (
                  <li key={index} className="text-sm text-slate-600 flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-0.5 text-lg leading-none">+</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {boat.history && boat.history.length > 0 && (
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest border-b-2 border-teal-900 pb-3 mb-6">
                  Historial / Información
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {boat.history.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start gap-3">
                      <span className="text-teal-600 font-bold mt-0.5 text-lg leading-none">+</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {boat.workDone && boat.workDone.length > 0 && (
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest border-b-2 border-teal-900 pb-3 mb-6">
                  Trabajos Realizados
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {boat.workDone.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start gap-3">
                      <span className="text-teal-600 font-bold mt-0.5 text-lg leading-none">+</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {boat.bodhiFinishes && (
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest border-b-2 border-teal-900 pb-3 mb-6">
                  Acabados BodhiNautic
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {boat.bodhiFinishes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Tienda() {
  return (
    <main className="private-page private-page--full owners-page" lang="es">
      <Navigation language="es" />
      <section className="owners-hero">
        <img src={asset("163a72b6-5702-44fa-920f-dbb33a73108d", "1600w")} alt="BodhiNautic Tienda de embarcaciones" />
        <div className="owners-hero__shade" />
        <div className="owners-hero__content">
          <p>Tienda · BodhiNautic</p>
          <h1>Encuentre su<br /><em>semirrígida</em> ideal.</h1>
          <span>Descubra nuestra selección de barcos disponibles para entrega inmediata. Unidades revisadas y garantizadas por nuestro equipo técnico.</span>
          <a href="#altamarea-wave-20">Ver unidades <b>↓</b></a>
        </div>
      </section>
      
      <section className="owners-intro owners-intro--diagnosis">
        <div className="owners-intro__heading">
          <p>Stock Disponible</p>
          <h2>Listas para<br /><em>navegar.</em></h2>
          <span>Actualizamos continuamente nuestra flota disponible. Cada barco que publicamos ha sido evaluado y preparado meticulosamente en nuestros talleres para garantizar el máximo rendimiento en el agua.</span>
        </div>
      </section>

      <section className="owners-services-header">
        <span>Catálogo BodhiNautic</span>
        <h2>Disponibles para entrega.</h2>
      </section>

      {boats.map((boat, index) => (
        <BoatCard key={boat.id} boat={boat} reverse={index % 2 === 1} />
      ))}

      <section className="owners-cta">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17.5h16M6.5 17.5l1.7-7h7.6l1.7 7M3.5 21c1.2 0 1.8-.8 3-.8s1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8" /></svg>
        <p>¿No encuentra lo que busca?</p>
        <h2>Buscamos su<br /><em>semirrígida.</em></h2>
        <a href="mailto:info@bodhinautic.com">Contactar con ventas <b>→</b></a>
      </section>
      <Footer language="es" />
      <a href="https://wa.me/34653654342" target="_blank" rel="noreferrer" className="whatsapp" aria-label="Contactar por WhatsApp">
        <iconify-icon icon="ic:baseline-whatsapp" width="32" height="32" />
      </a>
    </main>
  );
}

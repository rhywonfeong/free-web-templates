import "../styles.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const assetFormats = {
  "b7c5ec6f-b7eb-4706-8c79-807c498bee74": "png",
  "04a72af3-6893-48d5-a502-9156c36203e2": "png",
  "2e4ce125-9604-442d-8338-5642ad72d7df": "png",
};
const asset = (id, size = "1600w") => `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_${size}.${assetFormats[id] || "jpg"}`;
const messageLink = (subject) => `https://wa.me/34653654342?text=${encodeURIComponent(`Hola, me interesa conocer las soluciones profesionales de BodhiNautic: ${subject}`)}`;
const catalogues = [
  ["Evercor", "https://drive.google.com/file/d/1ydEZqEaDZfkj4Q0k4jAAn9efxdSRyuLM/view?usp=sharing"],
  ["PlasDECK", "https://drive.google.com/file/d/1I7UtywanCfgauiCC-m33QZ-4iEf8zaqD/view?usp=sharing"],
  ["Deck-X", "https://drive.google.com/file/d/18iIvNh3pvhnj1BS48eMi6oJK0jj-RhCo/view?usp=sharing"],
  ["E-Dek PRO", "https://drive.google.com/file/d/1obPuBJymOs4rGdNvrtXAby5r3v7Odr7R/view?usp=sharing"],
];

const services = [
  {
    id: "retubing",
    number: "01",
    category: "Estructura inflable",
    title: "Retubing para flotas y astilleros.",
    copy: "Fabricamos y sustituimos flotadores en Neopreno Hypalon ORCA® para embarcaciones de trabajo, auxiliares de superyate y semirrígidas de uso intensivo. Digitalizamos cada pieza para garantizar un encaje preciso, repetible y preparado para trabajar.",
    notes: ["Patronaje y fabricación a medida", "Tejidos ORCA® de grado profesional", "Planificación de trabajos por fases"],
    images: ["08d7fd4b-88cb-4a60-bd7e-41dd6a144e1b", "c9c85d91-6244-4adc-8198-6e659a9bd17c", "b501e362-790b-4047-95a5-ccf2a0f80e09"],
  },
  {
    id: "decking",
    number: "02",
    category: "Cubiertas técnicas",
    title: "Cubiertas que resisten el ritmo del puerto.",
    copy: "Diseñamos e instalamos cubiertas sintéticas de alto agarre para RIBs de trabajo, embarcaciones de charter y refits. Tomamos la plantilla directamente a bordo para resolver drenajes, registros y remates con limpieza técnica.",
    notes: ["Patrones digitales y cortes precisos", "Superficie antideslizante en seco y mojado", "Marcas, líneas y logotipos integrados"],
    images: ["e2f0e9ec-0794-41c9-9695-2094340995ad", "055d3f96-453f-4163-88cc-b14e1bcdfc0c", "b1d027de-debe-4681-a5d1-af5e1177e6ad"],
  },
  {
    id: "logos",
    number: "03",
    category: "Identidad de flota",
    title: "Su identidad, integrada en el flotador.",
    copy: "Aplicamos logotipos, matrículas y señalética directamente en Hypalon. No son adhesivos temporales: cada gráfica se corta con precisión y se adhiere como parte de la estructura para mantener una imagen impecable temporada tras temporada.",
    notes: ["Logotipos corporativos y matriculación", "Colores y acabados de tejido a medida", "Archivos listos para producción"],
    images: ["bc54f8ad-076b-4958-a85a-4555e8c835db", "c760f6fd-c0b0-48c6-b130-51c654188191", "c8bf9148-0b79-467a-a472-c065313c08e5"],
  },
  {
    id: "materials",
    number: "04",
    category: "Materiales",
    title: "Decisiones de material, con criterio técnico.",
    copy: "Seleccionamos tejidos, adhesivos y soluciones de acabado según la función de la embarcación, el clima y la intensidad de uso. Así el material elegido responde al proyecto, y no al revés.",
    notes: ["Hypalon ORCA® y PVC profesional", "Asesoramiento de color y acabado", "Compatibilidad con reparaciones y refits"],
    images: ["c9c85d91-6244-4adc-8198-6e659a9bd17c", "b501e362-790b-4047-95a5-ccf2a0f80e09", "0486681b-7762-4a37-a436-18d045335d73"],
  },
  {
    id: "console-panels",
    number: "05",
    category: "Consola y ergonomía",
    title: "Paneles de consola hechos para navegar.",
    copy: "Rediseñamos paneles de instrumentación para dejar atrás soluciones improvisadas. Estudiamos la posición de cada equipo, el cableado y la lectura en marcha para crear puestos de mando claros, funcionales y duraderos.",
    notes: ["Medición y modelado de cada consola", "Integración de pantallas y controles", "Acabados marinos resistentes"],
    images: ["6e454ffa-b9fd-4e0e-b645-fbb4b7966c8a", "b7c5ec6f-b7eb-4706-8c79-807c498bee74", "68915bb8-e504-48cf-a31f-9857754a77e8"],
  },
  {
    id: "3d-scan",
    number: "06",
    category: "Digitalización",
    title: "Escaneado 3D para fabricar con certeza.",
    copy: "Convertimos geometrías complejas en datos útiles para producción. El escaneado 3D acelera el desarrollo de piezas, permite reproducir configuraciones y reduce el margen de error antes de empezar a fabricar.",
    notes: ["Captura de geometrías reales", "Base para patronaje y CAD", "Repetibilidad para proyectos de serie"],
    images: ["04a72af3-6893-48d5-a502-9156c36203e2", "2e4ce125-9604-442d-8338-5642ad72d7df", "95824179-b83a-4e6a-a0c3-ad5ce4856eaa"],
  },
];

function Service({ service, reverse }) {
  return <section id={service.id} className={`professional-service ${reverse ? "professional-service--reverse" : ""}`}>
    <ImageCarousel className="professional-service__image" images={service.images.map((image) => asset(image))} alt={service.title} tag={service.number} />
    <div className="professional-service__copy"><p>{service.category}</p><h2>{service.title}</h2><div className="professional-service__rule" /><span>{service.copy}</span><ul>{service.notes.map((note) => <li key={note}>{note}</li>)}</ul><a href={messageLink(service.title)}>Hablar con un técnico <b>→</b></a>{service.id === "decking" && <div className="catalogues catalogues--professional"><small>Descargar catálogos de marca</small><div>{catalogues.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" download>{name} <b>↓</b></a>)}</div></div>}</div>
  </section>;
}

export default function Professionals() {
  return <main className="professionals-page" lang="es">
    <Navigation language="es" />
    <section className="professionals-hero"><img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c6d3877-47be-4ff1-8ddd-a18c36cf6d7d_1600w.jpg" alt="Semirrígida de alto rendimiento en navegación" /><div className="professionals-hero__shade" /><div className="professionals-hero__content"><p>División Profesional</p><h1>Soluciones técnicas<br /><em>para semirrígidas</em></h1><span>Fabricación, refit y digitalización para astilleros, capitanes, gestores de flota y profesionales náuticos.</span><div><a href="#retubing">Explorar soluciones</a><a href="mailto:info@bodhinautic.com">Solicitar propuesta</a></div></div><aside><b>01 / 06</b><span>RIBs de trabajo · Charter · Astilleros · Superyates</span></aside></section>
    <section className="professionals-intro"><div><p className="professional-kicker">Trabajamos con profesionales</p><h2>Una extensión técnica de su equipo.</h2></div><div><p>Cuando una embarcación tiene que cumplir una fecha de entrega, navegar cada día o representar a una marca, los detalles no son opcionales. BodhiNautic aporta especialización en estructuras inflables, acabados y digitalización al flujo de trabajo de su empresa.</p><p>Nos integramos con el criterio, la planificación y la confidencialidad que un proyecto profesional requiere.</p></div></section>
    <section className="professional-stats"><article><b>ORCA<sup>®</sup></b><span>Materiales y procesos profesionales</span></article><article><b>3D</b><span>Captura precisa para producción</span></article><article><b>360º</b><span>Soporte desde el diagnóstico al montaje</span></article></section>
    <header className="professionals-services-header"><p className="professional-kicker">Capacidades</p><h2>Una respuesta precisa para cada proyecto.</h2><span>Servicios técnicos para mantener, transformar y fabricar embarcaciones semirrígidas con exigencia profesional.</span></header>
    {services.map((service, index) => <Service key={service.id} service={service} reverse={index % 2 === 1} />)}
    <section className="professionals-process"><div className="professionals-process__copy"><p className="professional-kicker">Cómo trabajamos</p><h2>Rigor en taller.<br />Claridad en cada fase.</h2><span>Convertimos necesidades operativas en soluciones realizables, con una comunicación directa entre las personas que deciden y las que fabrican.</span></div><ol><li><b>01</b><div><strong>Diagnóstico técnico</strong><span>Revisamos la embarcación, el uso previsto y los puntos críticos antes de definir el alcance.</span></div></li><li><b>02</b><div><strong>Propuesta y planificación</strong><span>Detallamos materiales, entregables y calendario para coordinar el proyecto sin incertidumbre.</span></div></li><li><b>03</b><div><strong>Ejecución y control</strong><span>Fabricamos, instalamos y verificamos cada solución con un único interlocutor técnico.</span></div></li></ol></section>
    <section className="professionals-cta"><p className="professional-kicker">Hablemos de su proyecto</p><h2>¿Necesita una solución que esté a la altura de su operación?</h2><a href="mailto:info@bodhinautic.com">Contactar con BodhiNautic <b>→</b></a></section>
    <Footer language="es" />
    <a href="https://wa.me/34653654342" target="_blank" rel="noreferrer" className="whatsapp" aria-label="Contactar por WhatsApp">WA</a>
  </main>;
}

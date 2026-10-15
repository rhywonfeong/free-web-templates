import { Link } from "react-router-dom";
import "../styles.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const asset = (id, size = "1600w") => `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_${size}.jpg`;
const contact = (subject) => `https://wa.me/34653654342?text=${encodeURIComponent(`Quiero información sobre ${subject}.`)}`;

const services = [
  {
    number: "01", id: "retubing", label: "Taller especializado", title: "Flotadores en\nneopreno Hypalon.",
    text: "Fabricamos flotadores nuevos en neopreno Hypalon ORCA para devolver a su semirrígida la estanqueidad, resistencia y presencia que merece.",
    details: ["Patronaje a medida para cada casco", "Tejido ORCA de uso profesional", "Colores, acabados y asas personalizables"],
    images: ["c9c85d91-6244-4adc-8198-6e659a9bd17c", "08d7fd4b-88cb-4a60-bd7e-41dd6a144e1b", "b501e362-790b-4047-95a5-ccf2a0f80e09", "0486681b-7762-4a37-a436-18d045335d73"], tag: "ORCA Hypalon",
  },
  {
    number: "02", id: "restoration", label: "Refit completo", title: "Restauración integral\nde semirrígidas.",
    text: "Recuperamos el carácter de su embarcación con un proyecto coherente de proa a popa. Un único equipo, un resultado a medida.",
    details: ["Pintura, fibra y acabados", "Consolas personalizadas y electrónica", "Tapicería marina y nueva distribución"],
    images: ["6e454ffa-b9fd-4e0e-b645-fbb4b7966c8a", "b4a1afa4-683e-4fe3-ae10-a721ed8f297e", "8995c86b-dcaa-4675-b82a-19cd8243e9e4"], tag: "Antes de la temporada",
  },
  {
    number: "03", id: "decking", label: "Synteak · Toda Europa", title: "Cubiertas que cambian\ntodo el barco.",
    text: "Instalamos cubiertas sintéticas mediante Synteak, nuestro colaborador presente en toda Europa. Más agarre, más confort y una estética diseñada para su RIB.",
    details: ["Plantillas digitales para un ajuste exacto", "Acabados antideslizantes y fáciles de mantener", "Diseños, líneas y logotipos a medida"],
    images: ["e2f0e9ec-0794-41c9-9695-2094340995ad", "055d3f96-453f-4163-88cc-b14e1bcdfc0c", "b1d027de-debe-4681-a5d1-af5e1177e6ad"], tag: "Synteak partner", decking: true,
  },
  {
    number: "04", id: "logos", label: "Identidad a bordo", title: "Logotipos y matrículas\npersonalizados.",
    text: "Integramos su identidad en la embarcación con piezas de Hypalon cortadas con precisión. Nada de vinilos provisionales: un acabado sólido y duradero.",
    details: ["Nombres, números de registro y marcas", "Diseño y digitalización de su logotipo", "Aplicación integrada sobre el flotador"],
    images: ["bc54f8ad-076b-4958-a85a-4555e8c835db", "c760f6fd-c0b0-48c6-b130-51c654188191", "c8bf9148-0b79-467a-a472-c065313c08e5"], tag: "Hecho a medida",
  },
  {
    number: "05", id: "outboards", label: "Honda · Suzuki", title: "Remotorización\nsin compromisos.",
    text: "Configuramos e instalamos fuerabordas Honda y Suzuki para que casco, potencia, hélice y mandos trabajen como un conjunto.",
    details: ["Estudio de potencia y distribución de pesos", "Rigging, controles y dirección profesional", "Puesta a punto para rendimiento y consumo"],
    images: ["231cb0f4-db2b-4be5-a2b5-499a80d7cbbe", "ee04eb12-fbd2-44e0-bcf4-0ea9268d35c0", "c75ddabc-0afd-4b79-8f6c-f2c25ab51ce4"], tag: "Honda & Suzuki",
  },
];

const catalogues = [
  ["Evercor", "https://drive.google.com/file/d/1ydEZqEaDZfkj4Q0k4jAAn9efxdSRyuLM/view?usp=sharing"],
  ["PlasDECK", "https://drive.google.com/file/d/1I7UtywanCfgauiCC-m33QZ-4iEf8zaqD/view?usp=sharing"],
  ["Deck-X", "https://drive.google.com/file/d/18iIvNh3pvhnj1BS48eMi6oJK0jj-RhCo/view?usp=sharing"],
  ["E-Dek PRO", "https://drive.google.com/file/d/1obPuBJymOs4rGdNvrtXAby5r3v7Odr7R/view?usp=sharing"],
];

function ServiceIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17.5h16M6.5 17.5l1.7-7h7.6l1.7 7M3.5 21c1.2 0 1.8-.8 3-.8s1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8" /></svg>;
}

function RetubingGallery({ service }) {
  return <div className="owners-tube-gallery" aria-label="Trabajos de flotadores en Hypalon">
    {service.images.map((image, index) => <figure key={image} className={`owners-tube-gallery__image owners-tube-gallery__image--${index + 1}`}>
      <img src={asset(image, index === 0 ? "800w" : "1600w")} alt={`${service.title.replace("\n", " ")} - trabajo ${index + 1}`} />
      {index === 0 && <figcaption>Fabricación a medida</figcaption>}
    </figure>)}
    <span className="owners-tube-gallery__tag">{service.tag}</span>
  </div>;
}

function Service({ service, reverse }) {
  const isRetubing = service.id === "retubing";
  return <section className={`owners-service ${reverse ? "owners-service--reverse" : ""} ${isRetubing ? "owners-service--retubing" : ""}`} id={service.id}>
    {isRetubing ? <RetubingGallery service={service} /> : <ImageCarousel className="owners-service__image" images={service.images.slice(0, 3).map((image, index) => asset(image, index === 0 ? "800w" : "1600w"))} alt={service.title.replace("\n", " ")} tag={service.tag} />}
    <div className="owners-service__copy"><div className="owners-service__topline"><b>{service.number}</b><p>{service.label}</p>{service.id === "retubing" && <strong>Actividad principal</strong>}</div><h2>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p className="owners-service__text">{service.text}</p><ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      {service.decking && <div className="owners-catalogues"><small>Descarga los 4 catálogos de producto</small><div>{catalogues.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={name}>{name}<b>↓</b></a>)}</div></div>}
      {service.id === "restoration" ? <Link className="owners-link" to="/particulares/restauracion-integral">Descubrir Restauración Integral <b>→</b></Link> : <a className="owners-link" href={contact(service.title.replace("\n", " "))}>Hablar con un especialista <b>→</b></a>}
    </div>
  </section>;
}

export default function Particulares() {
  return <main className="private-page private-page--full owners-page" lang="es">
    <Navigation language="es" />
    <section className="owners-hero"><img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b20fe4e0-76ff-4d40-ac7b-9c6125b4d4ab_3840w.jpg" alt="Semirrígida navegando" /><div className="owners-hero__shade" /><div className="owners-hero__content"><p>Particulares · BodhiNautic</p><h1>Todo lo que su<br /><em>semirrígida</em> necesita.</h1><span>Especialistas en fabricar, restaurar y personalizar RIBs para que vuelva al agua como debe.</span><a href="#retubing">Ver servicios <b>↓</b></a></div></section>
    <section className="owners-intro owners-intro--diagnosis"><div className="owners-intro__heading"><p>Cuando algo no va bien</p><h2>Su RIB le está<br />dando <em>señales.</em></h2><span>Los problemas del flotador no desaparecen solos. Detectarlos a tiempo evita que una reparación asumible se convierta en un proyecto mayor.</span></div><div className="owners-pain-grid"><article><b>01</b><div className="owners-pain-icon owners-pain-icon--pressure" aria-hidden="true"><i /><i /><i /></div><h3>Pérdidas de presión</h3><p>Un compartimento que pierde aire cambia el comportamiento de toda la embarcación.</p></article><article><b>02</b><div className="owners-pain-icon owners-pain-icon--peel" aria-hidden="true"><i /><i /></div><h3>Despegados y juntas</h3><p>Asas, parches o uniones que ceden necesitan una intervención bien preparada.</p></article><article><b>03</b><div className="owners-pain-icon owners-pain-icon--wear" aria-hidden="true"><i /></div><h3>Flotador deteriorado</h3><p>El sol, el roce y los años terminan afectando al material y a su protección.</p></article><article><b>04</b><div className="owners-pain-icon owners-pain-icon--repair" aria-hidden="true"><i /><i /></div><h3>Reparaciones complejas</h3><p>Hay daños que requieren diagnóstico, materiales correctos y manos expertas.</p></article></div><div className="owners-intro__footer"><span>Antes de decidir, revisamos el estado real de su semirrígida.</span><a href="#retubing">Ver soluciones <b>↓</b></a></div></section>
    <section className="owners-services-header"><span>05 servicios para particulares</span><h2>Su RIB, resuelta de principio a fin.</h2></section>
    {services.map((service, index) => <Service key={service.id} service={service} reverse={index % 2 === 1} />)}
    <section className="owners-buying" id="buying"><img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e42349b-69db-434a-8d41-4cb89f0a7356_1600w.jpg" alt="Semirrígida BodhiRIBs" /><div><p>Selección BodhiRIBs</p><h2>¿Busca comprar una semirrígida?</h2><span>Descubra nuestra selección de embarcaciones nuevas y de ocasión, preparadas por especialistas.</span><Link to="/tienda">Ir a la tienda <b>→</b></Link></div></section>
    <section className="owners-cta"><ServiceIcon /><p>¿Tiene un proyecto en mente?</p><h2>Hablemos de su<br /><em>semirrígida.</em></h2><a href="mailto:info@bodhinautic.com">Contactar con el equipo técnico <b>→</b></a></section>
    <Footer language="es" /><a href="https://wa.me/34653654342" target="_blank" rel="noreferrer" className="whatsapp" aria-label="Contactar por WhatsApp"><iconify-icon icon="ic:baseline-whatsapp" width="32" height="32" /></a>
  </main>;
}

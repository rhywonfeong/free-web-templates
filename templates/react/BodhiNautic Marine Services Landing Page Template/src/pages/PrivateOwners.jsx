import { Link } from "react-router-dom";
import "../styles.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const asset = (id, size = "1600w") => `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_${size}.jpg`;
const contact = (subject) => `https://wa.me/34653654342?text=${encodeURIComponent(`I would like information about ${subject}.`)}`;

const services = [
  {
    number: "01", id: "retubing", label: "Specialist workshop", title: "ORCA Hypalon\ntubes.",
    text: "We manufacture new ORCA Hypalon tubes to give your RIB the watertightness, strength and appearance it deserves.",
    details: ["A bespoke pattern for every hull", "Professional-grade ORCA fabric", "Custom colours, finishes and handles"],
    images: ["c9c85d91-6244-4adc-8198-6e659a9bd17c", "08d7fd4b-88cb-4a60-bd7e-41dd6a144e1b", "b501e362-790b-4047-95a5-ccf2a0f80e09", "0486681b-7762-4a37-a436-18d045335d73"], tag: "ORCA Hypalon",
  },
  {
    number: "02", id: "restoration", label: "Complete refit", title: "Complete RIB\nrestoration.",
    text: "We bring back the character of your boat with one coherent project from bow to stern. One team, one bespoke result.",
    details: ["Paint, fibreglass and finishing work", "Custom consoles and electronics", "Marine upholstery and a new layout"],
    images: ["6e454ffa-b9fd-4e0e-b645-fbb4b7966c8a", "b4a1afa4-683e-4fe3-ae10-a721ed8f297e", "8995c86b-dcaa-4675-b82a-19cd8243e9e4"], tag: "Ready for the season",
  },
  {
    number: "03", id: "decking", label: "Synteak · Across Europe", title: "Decking that transforms\nyour entire boat.",
    text: "We install synthetic decking with Synteak, our partner operating throughout Europe. More grip, more comfort and an aesthetic designed for your RIB.",
    details: ["Digital templates for an exact fit", "Non-slip, easy-care finishes", "Custom patterns, lines and logos"],
    images: ["e2f0e9ec-0794-41c9-9695-2094340995ad", "055d3f96-453f-4163-88cc-b14e1bcdfc0c", "b1d027de-debe-4681-a5d1-af5e1177e6ad"], tag: "Synteak partner", decking: true,
  },
  {
    number: "04", id: "logos", label: "Identity on board", title: "Custom logos and\nregistration numbers.",
    text: "We build your identity into the boat with precisely cut Hypalon details. No temporary vinyl: just a robust, lasting finish.",
    details: ["Names, registration numbers and brands", "Logo design and digitisation", "A finish integrated into the tube"],
    images: ["bc54f8ad-076b-4958-a85a-4555e8c835db", "c760f6fd-c0b0-48c6-b130-51c654188191", "c8bf9148-0b79-467a-a472-c065313c08e5"], tag: "Made to measure",
  },
  {
    number: "05", id: "outboards", label: "Honda · Suzuki", title: "Repowering\nwithout compromise.",
    text: "We configure and install Honda and Suzuki outboards so hull, power, propeller and controls work together as one.",
    details: ["Power and weight-distribution assessment", "Professional rigging, controls and steering", "Fine tuning for performance and fuel economy"],
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
  return <div className="owners-tube-gallery" aria-label="ORCA Hypalon tube work">
    {service.images.map((image, index) => <figure key={image} className={`owners-tube-gallery__image owners-tube-gallery__image--${index + 1}`}>
      <img src={asset(image, index === 0 ? "800w" : "1600w")} alt={`${service.title.replace("\n", " ")} - project ${index + 1}`} />
      {index === 0 && <figcaption>Bespoke manufacturing</figcaption>}
    </figure>)}
    <span className="owners-tube-gallery__tag">{service.tag}</span>
  </div>;
}

function Service({ service, reverse }) {
  const isRetubing = service.id === "retubing";
  return <section className={`owners-service ${reverse ? "owners-service--reverse" : ""} ${isRetubing ? "owners-service--retubing" : ""}`} id={service.id}>
    {isRetubing ? <RetubingGallery service={service} /> : <ImageCarousel className="owners-service__image" images={service.images.slice(0, 3).map((image, index) => asset(image, index === 0 ? "800w" : "1600w"))} alt={service.title.replace("\n", " ")} tag={service.tag} />}
    <div className="owners-service__copy"><div className="owners-service__topline"><b>{service.number}</b><p>{service.label}</p>{service.id === "retubing" && <strong>Core speciality</strong>}</div><h2>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p className="owners-service__text">{service.text}</p><ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      {service.decking && <div className="owners-catalogues"><small>Download all 4 product catalogues</small><div>{catalogues.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={name}>{name}<b>↓</b></a>)}</div></div>}
      <a className="owners-link" href={contact(service.title.replace("\n", " "))}>Talk to a specialist <b>→</b></a>
    </div>
  </section>;
}

export default function PrivateOwners() {
  return <main className="private-page private-page--full owners-page" lang="en">
    <Navigation />
    <section className="owners-hero"><img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b20fe4e0-76ff-4d40-ac7b-9c6125b4d4ab_3840w.jpg" alt="RIB underway" /><div className="owners-hero__shade" /><div className="owners-hero__content"><p>Private Owners · BodhiNautic</p><h1>Everything your<br /><em>RIB</em> needs.</h1><span>Specialists in building, restoring and personalising RIBs, so yours returns to the water as it should.</span><a href="#retubing">Explore services <b>↓</b></a></div></section>
    <section className="owners-intro owners-intro--diagnosis"><div className="owners-intro__heading"><p>When something is not right</p><h2>Your RIB is<br />sending <em>signals.</em></h2><span>Tube problems do not disappear on their own. Catching them early prevents a manageable repair from becoming a larger project.</span></div><div className="owners-pain-grid"><article><b>01</b><div className="owners-pain-icon owners-pain-icon--pressure" aria-hidden="true"><i /><i /><i /></div><h3>Pressure loss</h3><p>A compartment losing air changes the behaviour of the entire boat.</p></article><article><b>02</b><div className="owners-pain-icon owners-pain-icon--peel" aria-hidden="true"><i /><i /></div><h3>Detached fittings and seams</h3><p>Handles, patches or joins that pull away need a properly prepared intervention.</p></article><article><b>03</b><div className="owners-pain-icon owners-pain-icon--wear" aria-hidden="true"><i /></div><h3>Aged tube material</h3><p>Sun, abrasion and time eventually affect the material and its protection.</p></article><article><b>04</b><div className="owners-pain-icon owners-pain-icon--repair" aria-hidden="true"><i /><i /></div><h3>Complex repairs</h3><p>Some damage demands diagnosis, the right materials and expert hands.</p></article></div><div className="owners-intro__footer"><span>Before deciding, we assess the real condition of your RIB.</span><a href="#retubing">See solutions <b>↓</b></a></div></section>
    <section className="owners-services-header"><span>05 services for private owners</span><h2>Your RIB, resolved from start to finish.</h2></section>
    {services.map((service, index) => <Service key={service.id} service={service} reverse={index % 2 === 1} />)}
    <section className="owners-buying" id="buying"><img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/671c3825-729c-4735-9b54-4b06375b3c4b_800w.jpg" alt="BodhiRIBs rigid inflatable boat" /><div><p>BodhiRIBs selection</p><h2>Looking to buy a RIB?</h2><span>Discover our selection of new and pre-owned boats, prepared by specialists.</span><Link to="/shop">Visit the shop <b>→</b></Link></div></section>
    <section className="owners-cta"><ServiceIcon /><p>Have a project in mind?</p><h2>Let us talk about<br />your <em>RIB.</em></h2><a href="mailto:info@bodhinautic.com">Contact the technical team <b>→</b></a></section>
    <Footer /><a href="https://wa.me/34653654342" target="_blank" rel="noreferrer" className="whatsapp" aria-label="Contact us on WhatsApp"><iconify-icon icon="ic:baseline-whatsapp" width="32" height="32" /></a>
  </main>;
}

import { Link } from "react-router-dom";
import "../styles.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const asset = (id, size = "1600w") => `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_${size}.jpg`;
const contact = (subject) => `https://wa.me/34653654342?text=${encodeURIComponent(`Quiero información sobre ${subject}.`)}`;

export default function RestauracionIntegral() {
  return (
    <main className="private-page private-page--full owners-page restoration-page" lang="es">
      <Navigation language="es" />

      {/* 1. HERO PRINCIPAL */}
      <section className="restoration-hero">
        <div className="restoration-hero__bg">
          <div className="restoration-hero__before">
            <img src={asset("f17ced83-c784-4e6e-a46e-8063cf651d4c", "1600w")} alt="Antes de la restauración" />
            <span className="restoration-tag">Antes</span>
          </div>
          <div className="restoration-hero__after">
            <img src={asset("b76eb967-9c01-45ea-935e-ef3ba02c2dd2", "1600w")} alt="Después de la restauración" />
            <span className="restoration-tag">Después</span>
          </div>
        </div>
        <div className="restoration-hero__shade" />
        <div className="restoration-hero__content">
          <p>Restauración Integral</p>
          <h1>No restauramos el barco que era.<br /><em>Construimos el barco que puede llegar a ser.</em></h1>
          <span>
            Partimos de una buena embarcación y analizamos qué merece conservarse, qué debe sustituirse y qué podemos mejorar. No buscamos simplemente devolverla a su estado original, sino transformarla en una embarcación actual, personal y coherente como conjunto.
          </span>
          <div className="restoration-hero__actions">
            <a href="#contacto" className="restoration-btn">Estudiar mi proyecto <b>→</b></a>
            <a href="#transformaciones" className="restoration-btn restoration-btn--secondary">Ver transformaciones</a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN: TU BARCO PUEDE SER MUCHO MÁS */}
      <section className="owners-intro owners-intro--diagnosis">
        <div className="owners-intro__heading">
          <p>Tu barco puede ser mucho más</p>
          <h2>No siempre la mejor solución es cambiar de barco.<br /><em>A veces la mejor solución es replantearlo.</em></h2>
          <span>
            Muchas embarcaciones de calidad siguen teniendo una excelente base estructural, aunque hayan quedado envejecidas visual o técnicamente.
          </span>
        </div>
        <div className="restoration-pain-points">
          <p>Dónde puede empezar la transformación</p>
          <ul>
            <li>Flotadores deteriorados</li>
            <li>Tapicería</li>
            <li>Cubierta</li>
            <li>Pintura</li>
            <li>Instalaciones</li>
            <li>Electrónica</li>
            <li>Motorización</li>
            <li>Accesorios</li>
            <li>Diseño general desactualizado</li>
          </ul>
        </div>
      </section>

      {/* 3. PROYECTO PRINCIPAL – HISTORIA DE UNA TRANSFORMACIÓN */}
      <section className="restoration-case-study">
        <div className="restoration-case-study__header">
          <p>Historia de una transformación</p>
          <h2>De una semirrígida envejecida a un proyecto único.</h2>
        </div>
        <div className="restoration-timeline">
          <article>
            <img src={asset("f17ced83-c784-4e6e-a46e-8063cf651d4c", "800w")} alt="Estado inicial" />
            <div className="restoration-timeline__copy">
              <h3><span>01</span> Estado inicial</h3>
              <p>Cómo llegó la embarcación. Desgaste generalizado, materiales fatigados y un aspecto visual desactualizado tras años de uso intenso.</p>
            </div>
          </article>
          <article>
            <img src={asset("21507054-7283-4773-9533-2f750cc0860d", "800w")} alt="Diagnóstico" />
            <div className="restoration-timeline__copy">
              <h3><span>02</span> Diagnóstico</h3>
              <p>Qué problemas tenía y qué elementos de la estructura y casco merecía la pena conservar como base para el nuevo proyecto.</p>
            </div>
          </article>
          <article>
            <img src={asset("4911d70f-fb8c-49c1-8519-327bad49fb43", "800w")} alt="Concepto" />
            <div className="restoration-timeline__copy">
              <h3><span>03</span> Concepto</h3>
              <p>Qué queríamos conseguir estética y técnicamente. Definición de colores, materiales, distribución y nueva identidad.</p>
            </div>
          </article>
          <article>
            <img src={asset("fafa3aec-0363-4522-85ac-321aa0d69ef9", "800w")} alt="Proceso" />
            <div className="restoration-timeline__copy">
              <h3><span>04</span> Proceso</h3>
              <p>Desmontaje total, saneado de superficies, fabricación de nuevos componentes a medida y reconstrucción detallada.</p>
            </div>
          </article>
          <article>
            <img src={asset("187d8df7-ea5a-48d2-bdef-9b3c2dd9d10f", "800w")} alt="Decisiones técnicas" />
            <div className="restoration-timeline__copy">
              <h3><span>05</span> Decisiones técnicas</h3>
              <p>Qué se mejoró respecto a la configuración original: nueva electrónica, redistribución de pesos y optimización de espacios.</p>
            </div>
          </article>
          <article>
            <img src={asset("85e22e2f-461b-4598-832a-85689fd7798f", "800w")} alt="Resultado final" />
            <div className="restoration-timeline__copy">
              <h3><span>06</span> Resultado final</h3>
              <p>La transformación completada. Una embarcación moderna, fiable y con una estética premium que supera su estado original.</p>
            </div>
          </article>
        </div>
      </section>

      {/* 4. SECCIÓN: NO PONEMOS PIEZAS NUEVAS. DISEÑAMOS UN CONJUNTO. */}
      <section className="restoration-cohesion">
        <div className="restoration-cohesion__content">
          <p>Visión global</p>
          <h2>No ponemos piezas nuevas.<br /><em>Diseñamos un conjunto.</em></h2>
          <span>
            El resultado no debe parecer una embarcación antigua a la que se han añadido elementos nuevos. Debe sentirse como un único proyecto desde el primer detalle hasta el último.
            <br /><br />
            Coordinamos flotador, cubierta, tapicería, fibra, pintura, consola, instrumentación, electricidad, electrónica, motorización, iluminación, audio, herrajes y acabados bajo un mismo concepto.
          </span>
        </div>
        <img src={asset("12fd7947-993d-4a07-b5b2-47a347ec2b4d", "1600w")} alt="Diseño coherente de embarcación" />
      </section>

      {/* 5. SECCIÓN: EL FLOTADOR COMO PARTE DEL REDISEÑO */}
      <section className="restoration-tubes">
        <div className="restoration-tubes__grid">
          <div className="restoration-tubes__copy">
            <p>Capacidad BodhiTubes</p>
            <h2>El flotador como parte del <em>rediseño</em>.</h2>
            <span>
              Un nuevo flotador puede ser mucho más que un retubado. Lo fabricamos completamente a medida en Neoprene-Hypalon / CSM, pudiendo conservar la configuración original o utilizar la intervención para rediseñar y personalizar la embarcación.
            </span>
            <p className="restoration-tubes__highlight">El nuevo flotador puede cambiar radicalmente la imagen, el carácter y la percepción de toda la embarcación.</p>
            <ul>
              <li>Reproducir geometría original o rediseñar detalles</li>
              <li>Modificar distribución de accesorios, asas y defensas</li>
              <li>Personalizar colores, texturas y acabados Carbon</li>
              <li>Integrar logotipos y combinar tejidos</li>
              <li>Intervenir en la unión casco-flotador, saneando y reconstruyendo</li>
            </ul>
          </div>
          <div className="restoration-tubes__images">
            <img src={asset("c9c85d91-6244-4adc-8198-6e659a9bd17c", "800w")} alt="Fabricación de flotador Hypalon" />
            <img src={asset("b501e362-790b-4047-95a5-ccf2a0f80e09", "800w")} alt="Detalle de flotador BodhiTubes" />
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN: DISEÑADA ALREDEDOR DE TI */}
      <section className="restoration-customization">
        <img src={asset("66ebc56e-42fa-4d0a-ac98-f37edc183954", "1600w")} alt="Detalles personalizados" />
        <div className="restoration-customization__overlay">
          <p>Personalización total</p>
          <h2>Diseñada alrededor de ti.</h2>
          <span>La pregunta no es cómo devolver tu barco a lo que era, sino cómo quieres que sea a partir de ahora.</span>
          <div className="restoration-tags">
            <span>Colores</span><span>Materiales</span><span>Tapicería</span><span>Cubierta</span><span>Consola</span><span>Instrumentación</span><span>Electrónica</span><span>Iluminación</span><span>Flotador</span><span>Accesorios</span><span>Distribución</span><span>Acabados</span>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN: ARTESANÍA + TECNOLOGÍA */}
      <section className="restoration-tech">
        <div className="restoration-tech__header">
          <p>Nuestro enfoque</p>
          <h2>Artesanía <span>+</span> Tecnología</h2>
          <span>En BodhiNautic combinamos experiencia artesanal, diseño, ingeniería y fabricación con herramientas digitales de última generación.</span>
        </div>
        <div className="restoration-tech__flow">
          <div><strong>01</strong><span>Escaneado 3D</span></div>
          <div className="restoration-tech__arrow">→</div>
          <div><strong>02</strong><span>CAD / Diseño</span></div>
          <div className="restoration-tech__arrow">→</div>
          <div><strong>03</strong><span>CNC</span></div>
          <div className="restoration-tech__arrow">→</div>
          <div><strong>04</strong><span>Fabricación manual</span></div>
          <div className="restoration-tech__arrow">→</div>
          <div><strong>05</strong><span>Montaje preciso</span></div>
        </div>
      </section>

      {/* 8. SECCIÓN: MEJORAR, NO SOLO SUSTITUIR */}
      <section className="restoration-improve">
        <div className="restoration-improve__content">
          <p>Evolución técnica</p>
          <h2>Mejorar, no solo sustituir.</h2>
          <span>
            Una restauración integral no consiste en ponerlo todo nuevo. Analizamos estructura, instalaciones, pesos, motorización, ergonomía, mantenimiento y uso previsto para decidir qué merece conservarse y dónde tiene sentido mejorar.
          </span>
          <strong>La restauración puede ser una oportunidad para hacer el barco mejor de lo que era originalmente.</strong>
        </div>
      </section>

      {/* 9. SECCIÓN: OTRAS TRANSFORMACIONES */}
      <section id="transformaciones" className="restoration-gallery">
        <div className="restoration-gallery__header">
          <h2>Otras transformaciones</h2>
        </div>
        <div className="restoration-gallery__items">
          <article>
            <div className="restoration-gallery__images">
              <img src={asset("eb3d627b-a7c8-4412-ab11-94245014efbe", "1600w")} alt="Antes" className="restoration-gallery__before" />
              <img src={asset("c993b305-6b30-44e9-b641-ebeb15e7e6f4", "1600w")} alt="Después" className="restoration-gallery__after" />
            </div>
            <div className="restoration-gallery__info">
              <h3>Capelli Tempest 750</h3>
              <p>Flotador nuevo · Motor Honda BF225 · Cubierta de PlasDECK · Toldo de Inox de NV Equipment</p>
            </div>
          </article>
          <article>
            <div className="restoration-gallery__images">
              <img src={asset("379444fc-585f-4c14-b15f-b9662a08d3cc", "1600w")} alt="Antes" className="restoration-gallery__before" />
              <img src={asset("da1b4104-9430-4a3a-bd0f-f018e5eee8d6", "1600w")} alt="Después" className="restoration-gallery__after" />
            </div>
            <div className="restoration-gallery__info">
              <h3>ASSO67 (Bodhi 2)</h3>
              <p>Flotador bicolor con cono ovalado performance · Renovación eléctrica · Suelo Evercor · Tapicería nueva</p>
            </div>
          </article>
          <article>
            <div className="restoration-gallery__images">
              <img src={asset("c1a3f970-87f6-4693-a8ea-145bad521ebd", "1600w")} alt="Antes" className="restoration-gallery__before" />
              <img src={asset("13b19c8d-b432-40f5-a916-17c02face3b4", "1600w")} alt="Después" className="restoration-gallery__after" />
            </div>
            <div className="restoration-gallery__info">
              <h3>Valiant 750</h3>
              <p>Flotador acabado carbono · Casco pintado · Cubierta Evercor · Solarium en popa · Visera de consola modificada</p>
            </div>
          </article>
        </div>
      </section>

      {/* 10. SECCIÓN: DE RESTAURACIÓN A BODHIRIB */}
      <section className="restoration-aspirational">
        <img src={asset("b20fe4e0-76ff-4d40-ac7b-9c6125b4d4ab", "1600w")} alt="BodhiRIB navegando" />
        <div className="restoration-aspirational__content">
          <p>Identidad propia</p>
          <h2>De restauración a <em>BodhiRIB</em>.</h2>
          <span>
            En determinados proyectos podemos ir todavía más lejos: replantear la embarcación hasta darle una identidad completamente nueva, con el carácter, la personalización y los acabados de una BodhiRIB.
          </span>
        </div>
      </section>

      {/* 11. PROYECTO LLAVE EN MANO */}
      <section className="restoration-turnkey">
        <div className="restoration-turnkey__content">
          <h2>Proyecto Llave en Mano</h2>
          <p>Coordinamos todo el ciclo del proyecto desde el diagnóstico inicial hasta las pruebas de mar y la entrega final. Un único interlocutor durante todo el proceso.</p>
          <ul>
            <li>Recepción y diagnóstico</li>
            <li>Diseño y concepto</li>
            <li>Desmontaje y fabricación</li>
            <li>Instalación y montaje</li>
            <li>Pruebas de mar y entrega final</li>
          </ul>
          <strong>Un único proyecto. Un único equipo. Un único interlocutor.</strong>
        </div>
      </section>

      {/* 12. CIERRE COMERCIAL */}
      <section id="contacto" className="restoration-form-section">
        <p>Inicie su proyecto</p>
        <h2>¿Qué podría llegar a ser<br /><em>tu barco?</em></h2>
        <span>Envíanos algunas fotografías, indícanos el modelo, año y estado actual de tu embarcación y estudiaremos contigo las posibilidades de transformación.</span>
        
        <form className="restoration-form" onSubmit={(e) => { e.preventDefault(); window.location.href = contact("Estudiar un proyecto de Restauración Integral"); }}>
          <div className="restoration-form__group">
            <input type="text" placeholder="Modelo de embarcación" required />
            <input type="text" placeholder="Año aproximado" />
          </div>
          <textarea placeholder="Cuéntanos brevemente el estado actual y qué te gustaría conseguir..." rows="4" required></textarea>
          <button type="submit" className="restoration-btn">Cuéntanos qué barco tienes <b>→</b></button>
        </form>
      </section>

      <Footer language="es" />
      <a href="https://wa.me/34653654342" target="_blank" rel="noreferrer" className="whatsapp" aria-label="Contactar por WhatsApp">
        <iconify-icon icon="ic:baseline-whatsapp" width="32" height="32" />
      </a>
    </main>
  );
}

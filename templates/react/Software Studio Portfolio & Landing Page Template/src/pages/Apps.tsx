import { Link } from "react-router-dom";
import { useChat } from "../components/ChatDialog";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Apps() {
  const { openChat } = useChat();

  return (
    <div className="terminal-home terminal-page">
      <section className="terminal-shell terminal-pagehead" data-reveal="true">
        <p className="terminal-command">
          <span>~/mbmapps/apps</span> $ ls --products --available
        </p>
        <h1>
          applications
          <span className="terminal-cursor" aria-hidden="true"></span>
        </h1>
        <p className="terminal-lede">
          Three purpose-built systems, each with a narrow job: make the state of the work
          visible, keep claims tied to evidence, and route the right decision to a human.
        </p>
        <div className="terminal-links">
          <Link to="/">[back home]</Link>
          <button type="button" onClick={openChat}>
            [ask which fits]
          </button>
        </div>
      </section>

      <section
        className="terminal-section terminal-shell"
        aria-label="All applications"
        data-reveal="true"
      >
        <div className="terminal-section__head">
          <div>
            <h2>
              <span>*</span> all apps
            </h2>
            <p>
              <span>$</span> cat --briefs
            </p>
          </div>
          <p>{products.length} purpose-built systems</p>
        </div>
        <div className="terminal-product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section
        className="terminal-section terminal-shell terminal-contact"
        aria-label="Custom systems"
        data-reveal="true"
      >
        <div>
          <p className="terminal-command">
            <span>~/mbmapps/apps</span> $ custom
          </p>
          <h2>
            <span>*</span> none of these fit exactly?
          </h2>
          <p>
            The studio takes on a small number of custom operating systems each year.
            Describe the workflow and we will map it against what already exists.
          </p>
        </div>
        <div className="terminal-contact__actions">
          <button type="button" onClick={openChat}>
            [open chat]
          </button>
          <Link to="/contact">[contact the studio]</Link>
        </div>
      </section>
    </div>
  );
}

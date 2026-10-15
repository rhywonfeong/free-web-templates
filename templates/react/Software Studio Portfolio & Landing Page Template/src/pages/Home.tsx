import { useState } from "react";
import { Link } from "react-router-dom";
import { useChat } from "../components/ChatDialog";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Mail,
  MessageSquare,
} from "../components/Icons";
import ProductCard from "../components/ProductCard";
import {
  articles,
  clientProjects,
  CONTACT_EMAIL,
  GITHUB_URL,
  products,
  stack,
  systems,
} from "../data";

function SectionNav() {
  const { openChat } = useChat();
  return (
    <nav className="terminal-nav" aria-label="Homepage sections">
      <div className="terminal-shell terminal-nav__inner">
        <div className="terminal-nav__links">
          <a href="#home">
            <span>[h]</span> home
          </a>
          <a href="#apps">
            <span>[a]</span> apps
          </a>
          <a href="#commerce">
            <span>[e]</span> commerce
          </a>
          <a href="#approach">
            <span>[p]</span> approach
          </a>
          <a href="#studio">
            <span>[u]</span> studio
          </a>
          <button type="button" onClick={openChat}>
            <span>[m]</span> chat
          </button>
          <a href="#contact">
            <span>[c]</span> contact
          </a>
          <a href="#systems">
            <span>[s]</span> systems
          </a>
          <a href="#articles">
            <span>[r]</span> articles
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { openChat } = useChat();
  return (
    <section id="home" className="terminal-shell terminal-hero" data-reveal="true">
      <div className="terminal-hero__copy">
        <p className="terminal-command">
          <span>~/mbmapps</span> $ whoami
        </p>
        <h1>
          MBMApps
          <span className="terminal-cursor" aria-hidden="true"></span>
        </h1>
        <p className="terminal-subline">
          independent software studio · chicago · proof-driven products
        </p>
        <p className="terminal-lede">
          We build focused operating systems for catering, youth sports, and
          quote-to-event work. Teams can see what is known, what is blocked, and what
          needs a human decision.
        </p>
        <div className="terminal-links">
          <a href="#apps">[browse apps]</a>
          <Link to="/about">[about]</Link>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            [github]
          </a>
          <button type="button" onClick={openChat}>
            [chat]
          </button>
        </div>
      </div>
      <aside className="terminal-status" aria-label="Studio status">
        <div className="terminal-status__mark">MBM</div>
        <div className="terminal-status__cards">
          <div>
            <span>status</span>
            <strong>
              <i></i> open for new engagements
            </strong>
          </div>
          <div>
            <span>portfolio</span>
            <strong>3 products live</strong>
          </div>
          <div>
            <span>response</span>
            <strong>direct studio contact</strong>
          </div>
        </div>
      </aside>
    </section>
  );
}

function StackSection() {
  return (
    <section
      className="terminal-section terminal-shell"
      aria-labelledby="stack-title"
      data-reveal="true"
    >
      <h2 id="stack-title">
        <span>*</span> stack
      </h2>
      <div className="terminal-marquee" aria-label="Core technology and capabilities">
        <div>
          <span className="terminal-marquee__group">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
          <span className="terminal-marquee__group" aria-hidden="true">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}

function AppsSection() {
  return (
    <section
      id="apps"
      className="terminal-section terminal-shell"
      aria-labelledby="apps-title"
      data-reveal="true"
    >
      <div className="terminal-section__head">
        <div>
          <h2 id="apps-title">
            <span>*</span> apps
          </h2>
          <p>
            <span>$</span> ls --products --available
          </p>
        </div>
        <p>3 purpose-built systems</p>
      </div>
      <div className="terminal-product-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <div className="terminal-section__foot">
        <Link to="/apps">view the full application briefs →</Link>
      </div>
    </section>
  );
}

function ApproachSection() {
  const steps = [
    {
      cmd: "observe",
      title: "Map the real operation",
      detail:
        "We start with the workflow as it actually runs — the handoffs, the evidence, and the places where guesswork creeps in.",
    },
    {
      cmd: "verify",
      title: "Separate claims from proof",
      detail:
        "Accepted is not paid. Planned is not ready. Every MBMApps system distinguishes what is known from what is assumed.",
    },
    {
      cmd: "ship",
      title: "Build the operating surface",
      detail:
        "A focused product with role-aware access and clear states: known, blocked, and needs a human decision.",
    },
    {
      cmd: "prove",
      title: "Keep the proof register",
      detail:
        "Software only makes claims it can back with evidence. Feedback loops keep the system faithful as the work evolves.",
    },
  ];
  return (
    <section
      id="approach"
      className="terminal-section terminal-shell"
      aria-labelledby="approach-title"
      data-reveal="true"
    >
      <div className="terminal-section__head">
        <div>
          <h2 id="approach-title">
            <span>*</span> approach
          </h2>
          <p>
            <span>$</span> cat --method --proof-driven
          </p>
        </div>
        <p>4 steps, every engagement</p>
      </div>
      <ol className="terminal-approach">
        {steps.map((step, index) => (
          <li key={step.cmd}>
            <span className="terminal-approach__index">0{index + 1}</span>
            <div>
              <p className="terminal-approach__cmd">$ {step.cmd}</p>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CommerceSection() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const total = clientProjects.length;

  return (
    <section
      id="commerce"
      className="terminal-section terminal-shell terminal-commerce"
      aria-labelledby="commerce-title"
      data-reveal="true"
    >
      <div className="terminal-commerce__heading">
        <div>
          <p className="terminal-command">
            <span>04</span> / selected work
          </p>
          <h2 id="commerce-title">
            <span>*</span> ecommerce + client work
          </h2>
          <p>Real businesses. Live websites. Clear paths to action.</p>
        </div>
        <div className="terminal-commerce__toolbar">
          <p className="terminal-commerce__command">$ ls --commerce --client-sites</p>
          <div
            className="terminal-commerce__controls"
            aria-label="Client work slide controls"
          >
            <span aria-live="polite">
              0{index + 1} / 0{total}
            </span>
            <button
              type="button"
              disabled={index === 0}
              aria-label="Show previous client project"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              disabled={index === total - 1}
              aria-label="Show next client project"
              onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
      <div
        className="terminal-commerce__viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected ecommerce and client work"
      >
        <div
          className="terminal-commerce__gallery"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {clientProjects.map((project, projectIndex) => {
            const isRevealed = Boolean(revealed[projectIndex]);
            return (
              <article
                key={project.name}
                className="terminal-commerce__project"
                role="group"
                aria-roledescription="slide"
                aria-label={`${projectIndex + 1} of ${total}: ${project.name}`}
              >
                <div className="terminal-commerce__preview-shell">
                  {!isRevealed ? (
                    <button
                      type="button"
                      className="terminal-commerce__preview-trigger"
                      aria-expanded="false"
                      onClick={() =>
                        setRevealed((prev) => ({ ...prev, [projectIndex]: true }))
                      }
                    >
                      <span>Preview hidden until requested</span>
                      <strong>{project.name}</strong>
                      <small>
                        <Eye size={14} /> Preview site
                      </small>
                    </button>
                  ) : (
                    <div className="terminal-commerce__revealed">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="terminal-commerce__media"
                        aria-label={`Visit ${project.name} website`}
                      >
                        <span className="commerce-screen">
                          <span className="commerce-screen__bar">
                            <i></i>
                            <i></i>
                            <i></i>
                            <em>{project.url.replace("https://", "").replace(/\/$/, "")}</em>
                          </span>
                          <span className="commerce-screen__hero">
                            <strong>{project.screen.headline}</strong>
                            <span>{project.screen.sub}</span>
                            <b>{project.screen.cta}</b>
                          </span>
                          <span className="commerce-screen__grid">
                            <i></i>
                            <i></i>
                            <i></i>
                          </span>
                        </span>
                      </a>
                      <button
                        type="button"
                        className="terminal-commerce__hide-preview"
                        aria-expanded="true"
                        onClick={() =>
                          setRevealed((prev) => ({ ...prev, [projectIndex]: false }))
                        }
                      >
                        <EyeOff size={14} /> Hide preview
                      </button>
                    </div>
                  )}
                </div>
                <div className="terminal-commerce__copy">
                  <span className="terminal-commerce__index">
                    0{projectIndex + 1}
                  </span>
                  <div>
                    <h3>{project.name}</h3>
                    <p className="terminal-commerce__type">{project.type}</p>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.linkLabel} <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SystemsSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? systems : systems.slice(0, 2);

  return (
    <section
      id="systems"
      className="terminal-section terminal-shell"
      aria-labelledby="systems-title"
      data-reveal="true"
    >
      <h2 id="systems-title">
        <span>*</span> systems
      </h2>
      <div className="terminal-system-grid" id="terminal-system-list">
        {visible.map((system) => (
          <article key={system.title}>
            <a
              className="terminal-system-title"
              href={system.href}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{system.title}</strong>
              <ArrowUpRight size={14} />
            </a>
            <p>{system.category}</p>
            <p>{system.detail}</p>
          </article>
        ))}
      </div>
      <button
        className="terminal-disclose"
        type="button"
        aria-expanded={expanded}
        aria-controls="terminal-system-list"
        onClick={() => setExpanded((value) => !value)}
      >
        [ls -a ({systems.length})]{" "}
        <ChevronDown size={14} className={expanded ? "is-flipped" : undefined} />
      </button>
    </section>
  );
}

function StudioSection() {
  const { openChat } = useChat();
  return (
    <section
      id="studio"
      className="terminal-section terminal-shell terminal-studio-section"
      aria-labelledby="studio-title"
      data-reveal="true"
    >
      <div className="terminal-section__head">
        <div>
          <h2 id="studio-title">
            <span>*</span> studio
          </h2>
          <p>
            <span>$</span> launch --utility component-studio@4
          </p>
        </div>
        <p>local workspace · choices stay in your browser</p>
      </div>
      <div className="terminal-studio-grid">
        <div>
          <h3>Component Studio v4</h3>
          <p>
            Compose a visual direction, tune its motion system, and export an
            implementation-ready design pack. The same discipline behind every MBMApps
            product surface.
          </p>
          <div className="terminal-links">
            <button type="button" onClick={openChat}>
              [request a design pack]
            </button>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              [see the code]
            </a>
          </div>
        </div>
        <div className="terminal-studio-swatches" aria-hidden="true">
          <span className="swatch swatch--violet">violet / product</span>
          <span className="swatch swatch--field">field / operations</span>
          <span className="swatch swatch--amber">amber / commerce</span>
          <span className="swatch swatch--mono">mono / evidence</span>
        </div>
      </div>
    </section>
  );
}

function ArticlesSection() {
  return (
    <section
      id="articles"
      className="terminal-section terminal-shell"
      aria-labelledby="articles-title"
      data-reveal="true"
    >
      <div className="terminal-section__head">
        <div>
          <h2 id="articles-title">
            <span>*</span> articles
          </h2>
          <p>
            <span>$</span> cat --ideas --systems
          </p>
        </div>
      </div>
      <article className="terminal-article-feature">
        <div className="terminal-article-feature__image" aria-hidden="true">
          <div className="article-art">
            <span className="article-art__node article-art__node--a">observe</span>
            <span className="article-art__node article-art__node--b">policy</span>
            <span className="article-art__node article-art__node--c">action</span>
            <span className="article-art__node article-art__node--d">proof</span>
            <span className="article-art__core">world</span>
          </div>
        </div>
        <div className="terminal-article-feature__copy">
          <p>
            <span>{articles.featured.badge}</span> · {articles.featured.year} ·{" "}
            {articles.featured.topic}
          </p>
          <h3>{articles.featured.title}</h3>
          <p>{articles.featured.excerpt}</p>
        </div>
      </article>
      <div className="terminal-notes terminal-notes--articles">
        {articles.notes.map((note) => (
          <div key={note.title} className="terminal-note">
            <strong>{note.title}</strong>
            <span>{note.detail}</span>
            <time>{note.year}</time>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const { openChat } = useChat();
  return (
    <section
      id="contact"
      className="terminal-section terminal-shell terminal-contact"
      aria-labelledby="contact-title"
      data-reveal="true"
    >
      <div>
        <p className="terminal-command">
          <span>~/mbmapps/contact</span> $ start
        </p>
        <h2 id="contact-title">
          <span>*</span> tell us what needs to work better
        </h2>
        <p>
          Share the outcome, the constraint, and what is already in motion. Use the
          guided chat or contact the studio directly.
        </p>
      </div>
      <div className="terminal-contact__actions">
        <button type="button" onClick={openChat}>
          <MessageSquare size={15} /> [open chat]
        </button>
        <a href={`mailto:${CONTACT_EMAIL}`}>
          <Mail size={15} /> [{CONTACT_EMAIL}]
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="terminal-home">
      <SectionNav />
      <Hero />
      <StackSection />
      <AppsSection />
      <ApproachSection />
      <CommerceSection />
      <SystemsSection />
      <StudioSection />
      <ArticlesSection />
      <ContactSection />
      <div className="terminal-shell terminal-footerline">
        <p>© 2026 MBMApps LLC · react · typescript · vite</p>
        <p>chicago, usa · built for clear decisions</p>
      </div>
    </div>
  );
}

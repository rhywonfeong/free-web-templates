import { useEffect, useRef, useState, FormEvent } from "react";

/* ---------- Hooks ---------- */

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Data ---------- */

const NAV = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Stories", href: "#stories" },
  { label: "Visit", href: "#visit" },
];

const SERVICES = [
  {
    n: "01",
    title: "Cosmetic Dentistry",
    copy: "Porcelain veneers, contouring, and whitening — engineered around your facial architecture for results that read natural, never done.",
  },
  {
    n: "02",
    title: "Smile Architecture",
    copy: "Full digital smile design. Every case begins with 3D imaging and a preview of your finished smile before we touch a single tooth.",
  },
  {
    n: "03",
    title: "Implants & Restoration",
    copy: "Guided implant surgery and ceramic restorations, planned to the tenth of a millimetre and finished by master technicians.",
  },
  {
    n: "04",
    title: "Invisible Orthodontics",
    copy: "Discreet clear-aligner therapy with remote monitoring — precision movement that fits an uncompromising schedule.",
  },
  {
    n: "05",
    title: "Preventive Excellence",
    copy: "Unhurried hygiene appointments, laser diagnostics, and a longevity plan for your smile measured in decades.",
  },
  {
    n: "06",
    title: "Sedation & Comfort",
    copy: "Noise-cancelling calm, ceiling cinema, and gentle sedation options. Dentistry that feels closer to a spa than a clinic.",
  },
];

const STORIES = [
  {
    quote:
      "I flew in from out of state for my veneers. The result is so natural my own dentist back home couldn't tell. Worth every mile.",
    name: "Amrit S.",
    detail: "Smile Architecture · 8 Veneers",
  },
  {
    quote:
      "The quietest, calmest medical space I've ever been in. I fell asleep during my implant surgery. That has never happened to me.",
    name: "Daniel R.",
    detail: "Guided Implant & Crown",
  },
  {
    quote:
      "Dr. Virk explained everything with a 3D model of my own mouth. No pressure, no upselling — just complete mastery of the craft.",
    name: "Elena M.",
    detail: "Invisible Orthodontics",
  },
];

const STATS = [
  { value: "15+", label: "Years of clinical mastery" },
  { value: "6,000+", label: "Smiles transformed" },
  { value: "99.2%", label: "Implant success rate" },
  { value: "4.9★", label: "Average patient rating" },
];

/* ---------- Components ---------- */

function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "header--solid" : ""}`}>
      <div className="header__inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            V
          </span>
          <span className="brand__name">
            VIRK <em>DENTAL</em>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#visit" className="btn btn--gold btn--sm">
            Reserve a Visit
          </a>
          <button
            className={`burger ${open ? "burger--open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        {NAV.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-menu__link"
            style={{ transitionDelay: `${0.06 * i + 0.1}s` }}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
        <a href="#visit" className="btn btn--gold mobile-menu__cta" onClick={close}>
          Reserve a Visit
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner">
        <p className="eyebrow hero__eyebrow" data-reveal>
          Elite Modern Dentistry
        </p>
        <h1 className="hero__title" data-reveal>
          The art of the
          <br />
          <em>perfect smile.</em>
        </h1>
        <p className="hero__sub" data-reveal>
          VIRK DENTAL is a private dental studio where precision engineering meets quiet
          luxury. One doctor. One patient. Zero compromise.
        </p>
        <div className="hero__cta" data-reveal>
          <a href="#visit" className="btn btn--gold">
            Reserve a Visit
          </a>
          <a href="#services" className="btn btn--ghost">
            Explore Services
          </a>
        </div>
        <div className="hero__meta" data-reveal>
          <span>Board-Certified</span>
          <span className="dot" aria-hidden="true" />
          <span>Digital Smile Design</span>
          <span className="dot" aria-hidden="true" />
          <span>By Appointment Only</span>
        </div>
      </div>
      <a href="#studio" className="hero__scroll" aria-label="Scroll to studio section">
        <span className="hero__scroll-line" aria-hidden="true" />
        Scroll
      </a>
    </section>
  );
}

function Marquee() {
  const items = [
    "Veneers",
    "Smile Design",
    "Implants",
    "Whitening",
    "Invisalign®",
    "Full-Mouth Restoration",
    "Laser Dentistry",
    "Sedation Comfort",
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <i className="marquee__star">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function Studio() {
  return (
    <section className="studio section" id="studio">
      <div className="container studio__grid">
        <div className="studio__copy">
          <p className="eyebrow" data-reveal>
            The Studio
          </p>
          <h2 className="h2" data-reveal>
            Dentistry, reimagined as a <em>private atelier.</em>
          </h2>
          <p className="lead" data-reveal>
            No crowded waiting rooms. No fluorescent hum. Every appointment at VIRK
            DENTAL unfolds in a single private suite — designed with the restraint of a
            gallery and equipped like an operating theatre.
          </p>
          <ul className="studio__list" data-reveal>
            <li>
              <strong>One suite, one patient.</strong> Your time is never split with
              another chair.
            </li>
            <li>
              <strong>Full digital workflow.</strong> 3D CBCT imaging, intraoral
              scanning, and same-day ceramics.
            </li>
            <li>
              <strong>Quiet by design.</strong> Acoustic architecture, warm light, and
              noise-cancelling headphones as standard.
            </li>
          </ul>
        </div>
        <div className="studio__panel" data-reveal>
          <figure className="studio__visual" role="img" aria-label="Abstract rendering of the VIRK DENTAL private suite">
            <div className="studio__visual-arch" />
            <div className="studio__visual-orb" />
            <figcaption>
              <span>Suite 01</span>
              <span>The Private Operatory</span>
            </figcaption>
          </figure>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section section--dark" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--gold" data-reveal>
            Services
          </p>
          <h2 className="h2" data-reveal>
            A complete practice of <em>precision.</em>
          </h2>
        </div>
        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article
              className="service"
              key={s.n}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <span className="service__n">{s.n}</span>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__copy">{s.copy}</p>
              <a href="#visit" className="service__link">
                Enquire <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section className="doctor section" id="doctor">
      <div className="container doctor__grid">
        <div className="doctor__portrait" data-reveal>
          <div className="doctor__frame">
            <div className="doctor__silhouette" aria-hidden="true">
              <svg viewBox="0 0 200 240" role="img" aria-label="Portrait silhouette of Dr. Virk">
                <circle cx="100" cy="78" r="44" />
                <path d="M100 132 C 52 132 26 168 22 240 L 178 240 C 174 168 148 132 100 132 Z" />
              </svg>
            </div>
            <span className="doctor__badge">DDS · FICOI</span>
          </div>
        </div>
        <div className="doctor__copy">
          <p className="eyebrow" data-reveal>
            The Doctor
          </p>
          <h2 className="h2" data-reveal>
            Dr. J. Virk — <em>clinician, craftsman, perfectionist.</em>
          </h2>
          <p className="lead" data-reveal>
            With over fifteen years of advanced training in cosmetic and implant
            dentistry, Dr. Virk personally performs every procedure in the studio — from
            first scan to final polish.
          </p>
          <div className="doctor__creds" data-reveal>
            <div>
              <h4>Credentials</h4>
              <p>Doctor of Dental Surgery · Fellow, International Congress of Oral Implantologists · Digital Smile Design Master</p>
            </div>
            <div>
              <h4>Philosophy</h4>
              <p>“A great smile should look inevitable — as if it was always meant to be there. My work is only finished when it disappears.”</p>
            </div>
          </div>
          <a href="#visit" className="btn btn--dark" data-reveal>
            Book a Consultation with Dr. Virk
          </a>
        </div>
      </div>
    </section>
  );
}

function Stories() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % STORIES.length);
    }, 6000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const go = (i: number) => {
    setIndex(i);
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((n) => (n + 1) % STORIES.length);
    }, 6000);
  };

  const s = STORIES[index];

  return (
    <section className="stories section section--dark" id="stories">
      <div className="container stories__inner">
        <p className="eyebrow eyebrow--gold" data-reveal>
          Patient Stories
        </p>
        <div className="stories__stage" data-reveal>
          <blockquote key={index} className="stories__quote">
            <p>“{s.quote}”</p>
            <footer>
              <span className="stories__name">{s.name}</span>
              <span className="stories__detail">{s.detail}</span>
            </footer>
          </blockquote>
        </div>
        <div className="stories__dots" role="tablist" aria-label="Patient stories">
          {STORIES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Story ${i + 1}`}
              className={`stories__dot ${i === index ? "is-active" : ""}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="visit section" id="visit">
      <div className="container visit__grid">
        <div className="visit__copy">
          <p className="eyebrow" data-reveal>
            Reserve a Visit
          </p>
          <h2 className="h2" data-reveal>
            Your smile deserves an <em>appointment, not a queue.</em>
          </h2>
          <p className="lead" data-reveal>
            Consultations are limited to preserve the studio experience. Share a few
            details and our concierge will reach out within one business day.
          </p>
          <div className="visit__details" data-reveal>
            <div>
              <h4>Studio</h4>
              <p>
                200 Crown Avenue, Suite 900
                <br />
                By appointment only
              </p>
            </div>
            <div>
              <h4>Concierge</h4>
              <p>
                (555) 014-8875
                <br />
                care@virkdental.com
              </p>
            </div>
            <div>
              <h4>Hours</h4>
              <p>
                Mon – Fri · 8:00 – 18:00
                <br />
                Sat · Private sessions
              </p>
            </div>
          </div>
        </div>

        <div className="visit__panel" data-reveal>
          {sent ? (
            <div className="visit__thanks" role="status">
              <span className="visit__thanks-mark" aria-hidden="true">
                ✦
              </span>
              <h3>Request received.</h3>
              <p>
                Thank you — our concierge will be in touch within one business day to
                arrange your private consultation.
              </p>
              <button className="btn btn--ghost-dark" onClick={() => setSent(false)}>
                Send another request
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <label className="field">
                  <span>Full name</span>
                  <input type="text" name="name" placeholder="Jordan Avery" required />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="(555) 000-0000" required />
                </label>
              </div>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@email.com" required />
              </label>
              <label className="field">
                <span>I&apos;m interested in</span>
                <select name="interest" defaultValue="Smile Architecture">
                  <option>Smile Architecture</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Implants &amp; Restoration</option>
                  <option>Invisible Orthodontics</option>
                  <option>Preventive Excellence</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="field">
                <span>Anything we should know?</span>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Tell us about your smile goals…"
                />
              </label>
              <button type="submit" className="btn btn--gold btn--full">
                Request Consultation
              </button>
              <p className="form__note">
                Private &amp; confidential. No obligation, no pressure — ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__mark brand__mark--lg" aria-hidden="true">
            V
          </span>
          <p className="footer__tag">
            VIRK DENTAL — the art of the perfect smile.
          </p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer__meta">
          <span>© {new Date().getFullYear()} VIRK DENTAL. All rights reserved.</span>
          <span>200 Crown Avenue, Suite 900 · (555) 014-8875</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */

export default function App() {
  useReveal();
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Studio />
        <Services />
        <Doctor />
        <Stories />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

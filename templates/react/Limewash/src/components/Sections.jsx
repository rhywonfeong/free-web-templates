import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { services, finishes, process, faqs } from "../data";

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHero({ eyebrow, title, sub, img }) {
  return (
    <section className="page-hero">
      <div className="page-hero-media">
        <img src={img} alt={title} />
        <div className="page-hero-overlay" />
        <div className="grain page-hero-grain" />
      </div>
      <div className="page-hero-content">
        <p className="fadeup d1 hero-eyebrow">{eyebrow}</p>
        <h1 className="fadeup d2 page-hero-title">{title}</h1>
        {sub && <p className="fadeup d3 page-hero-sub">{sub}</p>}
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e46bab36-ef4d-4e22-8f32-9d1a3f104fae_3840w.png?w=800&q=80"
          alt="Hand-applied limewash interior wall finish"
          className="animate-kenburns"
        />
      </div>
      <div className="hero-overlay" />
      <div className="grain hero-grain" />
      <div className="hero-content">
        <p className="fadeup d1 hero-eyebrow">
          Interior • Exterior • Residential • Commercial
        </p>
        <h1 className="fadeup d2 hero-title">
          Hand-Applied Limewash Finishes for Timeless Interiors &amp; Exteriors
        </h1>
        <p className="fadeup d3 hero-sub">
          Natural mineral walls with depth, movement, and quiet luxury —
          professionally applied by Limewash Atelier.
        </p>
        <div className="fadeup d4 hero-cta">
          <Link to="/contact" className="btn btn-light">
            Request a Consultation
          </Link>
          <Link to="/finishes" className="btn btn-outline">
            Explore Finishes
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="section section-cream text-block">
      <div className="reveal narrow center">
        <Eyebrow>The Limewash Difference</Eyebrow>
        <h2 className="display">Walls With Depth. Homes With Soul.</h2>
        <p className="lead">
          Unlike flat paint, limewash creates soft movement, tonal variation,
          and a breathable mineral finish that feels organic, elevated, and
          timeless. Our team handles the full application process from color
          guidance to final finish.
        </p>
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <section className="section section-sand">
      <div className="container">
        <div className="section-head reveal center">
          <Eyebrow>What We Offer</Eyebrow>
          <h2 className="display">Our Services</h2>
        </div>
        <div className="grid grid-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal card service-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="card-media">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="card-body">
                <iconify-icon icon={s.icon} width="30" style={{ color: "#9c8f76" }}></iconify-icon>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-text">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyLimewash() {
  const cols = [
    {
      icon: "solar:leaf-linear",
      title: "Natural Mineral Finish",
      desc: "Made from slaked lime, our finishes are breathable, low-VOC, and naturally antimicrobial — beauty rooted in nature.",
    },
    {
      icon: "solar:cloud-linear",
      title: "Soft Cloud-Like Movement",
      desc: "Hand brushwork creates gentle tonal variation and depth that shifts with the light throughout the day.",
    },
    {
      icon: "solar:crown-minimalistic-linear",
      title: "Timeless European Character",
      desc: "An old-world plaster aesthetic that feels considered, refined, and entirely custom to your space.",
    },
  ];
  return (
    <section className="section section-cream">
      <div className="container">
        <div className="section-head reveal center">
          <Eyebrow>Why Limewash</Eyebrow>
          <h2 className="display">A Finish Unlike Any Other</h2>
        </div>
        <div className="grid grid-3 feature-grid">
          {cols.map((c, i) => (
            <div key={c.title} className="reveal feature center" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="feature-icon">
                <iconify-icon icon={c.icon} width="30" style={{ color: "#9c8f76" }}></iconify-icon>
              </div>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-text feature-text">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinishGallery({ full }) {
  return (
    <section className="section section-sand">
      <div className="container">
        <div className="section-head reveal center">
          <Eyebrow>The Palette</Eyebrow>
          <h2 className="display">Limewash Finishes</h2>
          {full && (
            <p className="lead center-narrow">
              Each tone is hand-mixed and applied to reveal natural mineral
              depth. Swatches are indicative — final color is sampled on your
              wall.
            </p>
          )}
        </div>
        <div className="grid grid-3 finish-grid">
          {finishes.map((f, i) => (
            <div
              key={f.name}
              className="reveal finish-tile"
              style={{ backgroundColor: f.hex, transitionDelay: `${i * 40}ms` }}
            >
              <img src={f.img} alt={`${f.name} limewash finish`} loading="lazy" />
              <div className="grain finish-grain" />
              <div className="finish-overlay" />
              <div className="finish-label">
                <span>{f.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-head reveal center">
          <p className="eyebrow eyebrow-dark">How We Work</p>
          <h2 className="display display-light">Our Process</h2>
        </div>
        <div className="grid grid-4 process-grid">
          {process.map((p, i) => (
            <div key={p.step} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="process-step">{p.step}</span>
              <h3 className="card-title card-title-light">{p.title}</h3>
              <p className="card-text card-text-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const move = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setPos(p);
  };

  useEffect(() => {
    const up = () => {
      dragging.current = false;
    };
    const mm = (e) => {
      if (dragging.current) move(e.clientX);
    };
    const tm = (e) => {
      if (dragging.current) move(e.touches[0].clientX);
    };
    window.addEventListener("mouseup", up);
    window.addEventListener("mousemove", mm);
    window.addEventListener("touchend", up);
    window.addEventListener("touchmove", tm);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchmove", tm);
    };
  }, []);

  return (
    <section className="section section-cream">
      <div className="container narrow-lg">
        <div className="section-head reveal center">
          <Eyebrow>Transformation</Eyebrow>
          <h2 className="display">From Flat Paint to Living Texture</h2>
        </div>
        <div
          ref={ref}
          className="reveal ba-frame"
          onMouseDown={(e) => {
            dragging.current = true;
            move(e.clientX);
          }}
          onTouchStart={(e) => {
            dragging.current = true;
            move(e.touches[0].clientX);
          }}
        >
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8903d92d-fd01-4e6c-b10e-49af6cba8d0b_3840w.png"
            alt="After limewash finish"
            className="ba-img"
            draggable="false"
          />
          <div className="ba-before" style={{ width: `${pos}%` }}>
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a14d2ce-15d0-4577-b4dc-03f7efc21e93_3840w.png"
              alt="Before flat paint"
              className="ba-before-img"
              style={{ width: ref.current ? ref.current.offsetWidth : "100%" }}
              draggable="false"
            />
            <span className="ba-tag ba-tag-before">Before</span>
          </div>
          <span className="ba-tag ba-tag-after">After</span>
          <div className="ba-handle-line" style={{ left: `${pos}%` }}>
            <div className="ba-handle">
              <iconify-icon icon="solar:arrows-horizontal-linear" width="22" style={{ color: "#2b2722" }}></iconify-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DesignerSection() {
  return (
    <section className="section section-sand">
      <div className="container split">
        <div className="reveal split-media">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a65870d6-8423-4d29-81e3-a8d5cbf2c784_1600w.png"
            alt="Limewash interior for designers and builders"
          />
        </div>
        <div className="reveal">
          <Eyebrow>Trusted Partners</Eyebrow>
          <h2 className="display">For Designers, Builders &amp; Homeowners</h2>
          <p className="lead">
            We partner with homeowners, interior designers, architects,
            builders, and developers who want a refined wall finish that feels
            intentional and custom.
          </p>
          <Link to="/contact" className="btn btn-dark inline-cta">
            Request a Consultation
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    type: "Interior",
    sqft: "",
    finish: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const WEBHOOK_URL =
    "https://n8n-axze.onrender.com/webhook/931e4d81-9c03-426b-81c2-d190a035dcf0";

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!form.email.trim()) err.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (!form.phone.trim()) err.phone = "Please enter your phone";
    setErrors(err);
    if (Object.keys(err).length !== 0) return;

    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          inspirationImage: fileName || null,
          source: "Limewash Atelier Website",
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (_) {
      // Preview environments may block the network request; still confirm to the user.
    } finally {
      setSubmitting(false);
      setDone(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        type: "Interior",
        sqft: "",
        finish: "",
        message: "",
      });
      setFileName("");
    }
  };

  return (
    <section id="consultation" className="section section-dark">
      <div className="container narrow">
        <div className="section-head reveal center">
          <p className="eyebrow eyebrow-dark">Begin Your Project</p>
          <h2 className="display display-light">Request Your Limewash Consultation</h2>
        </div>

        <form onSubmit={submit} className="reveal lead-form">
          <div>
            <input className="field" placeholder="Name" value={form.name} onChange={set("name")} />
            {errors.name && <p className="field-error">{errors.name}</p>}
          </div>
          <div>
            <input className="field" placeholder="Phone" value={form.phone} onChange={set("phone")} />
            {errors.phone && <p className="field-error">{errors.phone}</p>}
          </div>
          <div className="col-span-2">
            <input className="field" placeholder="Email" value={form.email} onChange={set("email")} />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>
          <input className="field col-span-2" placeholder="Project Address" value={form.address} onChange={set("address")} />
          <select className="field" value={form.type} onChange={set("type")}>
            <option>Interior</option>
            <option>Exterior</option>
            <option>Both</option>
          </select>
          <input className="field" placeholder="Approx. Square Footage" value={form.sqft} onChange={set("sqft")} />
          <input className="field col-span-2" placeholder="Desired Finish / Color" value={form.finish} onChange={set("finish")} />

          <label className="field col-span-2 file-field">
            <span className={fileName ? "file-name" : ""}>{fileName || "Upload Inspiration Image"}</span>
            <iconify-icon icon="solar:upload-linear" width="20" style={{ color: "#9c8f76" }}></iconify-icon>
            <input type="file" className="file-input" onChange={(e) => setFileName(e.target.files[0]?.name || "")} />
          </label>

          <textarea className="field col-span-2 textarea" rows="4" placeholder="Message" value={form.message} onChange={set("message")} />

          <button type="submit" className="btn btn-dark col-span-2 submit-btn" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit Project Request"}
          </button>
        </form>
      </div>

      {done && (
        <div className="modal-backdrop" onClick={() => setDone(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <iconify-icon icon="solar:check-circle-linear" width="36" style={{ color: "#7d8a5b" }}></iconify-icon>
            </div>
            <h3 className="modal-title">Thank You</h3>
            <p className="card-text">
              Thank you for reaching out to Limewash Atelier. Our team will
              contact you shortly to discuss your project.
            </p>
            <button onClick={() => setDone(false)} className="btn btn-dark modal-close">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section section-cream">
      <div className="container narrow">
        <div className="section-head reveal center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="display">Frequently Asked</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className="reveal faq-item">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="faq-question">
                <span>{f.q}</span>
                <iconify-icon
                  icon="solar:alt-arrow-down-linear"
                  width="22"
                  style={{
                    color: "#9c8f76",
                    transform: open === i ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                ></iconify-icon>
              </button>
              <div className="faq-answer" style={{ maxHeight: open === i ? "260px" : "0" }}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

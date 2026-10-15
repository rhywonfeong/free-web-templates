import React from "react";
import { Link } from "react-router-dom";
import { PageHero, WhyLimewash, ProcessSection } from "../components/Sections";

const stats = [
  { value: "500+", label: "Walls Hand-Finished" },
  { value: "12", label: "Years of Craft" },
  { value: "7", label: "Cities Served" },
  { value: "100%", label: "Mineral, Low-VOC" },
];

const values = [
  {
    icon: "solar:hand-heart-linear",
    title: "Hand-Applied, Always",
    desc: "Every coat is brushed by skilled finish artists — no sprayers, no shortcuts, no synthetic shine.",
  },
  {
    icon: "solar:pallete-2-linear",
    title: "Bespoke Color",
    desc: "Tones are hand-mixed and sampled on your wall so the finish responds to your light and architecture.",
  },
  {
    icon: "solar:medal-ribbon-star-linear",
    title: "Atelier Standard",
    desc: "We manage every detail — prep, masking, application, and cleanup — with quiet, uncompromising care.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Studio"
        title="About Limewash Atelier"
        sub="A premium limewash painting studio delivering hand-applied mineral finishes."
        img="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
      />

      <section className="section section-cream">
        <div className="container split about-split">
          <div className="reveal split-media">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
              alt="Limewash finish artist at work"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Our Story</p>
            <h2 className="display">A Craft Rooted in Stone &amp; Light</h2>
            <p className="lead">
              Limewash Atelier is a premium limewash painting studio delivering
              hand-applied mineral wall finishes for luxury homes, designers,
              builders, and boutique commercial spaces. Our finish artists treat
              each wall as a canvas — building depth, movement, and quiet luxury
              one coat at a time.
            </p>
            <p className="lead">
              We believe a finish should feel inevitable: calm, considered, and
              timeless. From the first color sample to the final brushstroke, we
              manage every detail with the care of a true atelier.
            </p>
            <Link to="/contact" className="btn btn-dark inline-cta">
              Start a Conversation
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-4 stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} className="reveal stat" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-head reveal center">
            <p className="eyebrow">What Guides Us</p>
            <h2 className="display">Our Values</h2>
          </div>
          <div className="grid grid-3 feature-grid">
            {values.map((v, i) => (
              <div key={v.title} className="reveal feature center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="feature-icon">
                  <iconify-icon icon={v.icon} width="30" style={{ color: "#9c8f76" }}></iconify-icon>
                </div>
                <h3 className="card-title">{v.title}</h3>
                <p className="card-text feature-text">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyLimewash />
      <ProcessSection />
    </>
  );
}

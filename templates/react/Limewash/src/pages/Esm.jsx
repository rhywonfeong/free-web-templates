import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/Sections";

const specs = [
  {
    icon: "solar:test-tube-linear",
    title: "Eco Slaked-Mineral Base",
    desc: "Our ESM base is a slaked-lime mineral formulation — breathable, low-VOC, and free of synthetic film-formers.",
  },
  {
    icon: "solar:shield-check-linear",
    title: "Naturally Antimicrobial",
    desc: "High alkalinity resists mold and mildew, making the finish ideal for kitchens, baths, and humid façades.",
  },
  {
    icon: "solar:sun-linear",
    title: "Living Patina",
    desc: "ESM finishes cure through carbonation, deepening in character and developing a graceful patina over time.",
  },
  {
    icon: "solar:recycle-linear",
    title: "Low Environmental Impact",
    desc: "Mineral pigments and lime keep embodied carbon low while remaining fully repairable and re-coatable.",
  },
];

const steps = [
  ["01", "Substrate Assessment", "We test porosity and pH to confirm the wall is ready for a mineral bond."],
  ["02", "Mineral Priming", "A breathable mineral primer locks the surface for even absorption and true color."],
  ["03", "ESM Application", "Two to three hand-brushed coats build the signature cloud-like mineral depth."],
  ["04", "Carbonation Cure", "The finish hardens naturally as it reacts with air, setting into durable stone-like matte."],
];

export default function Esm() {
  return (
    <>
      <PageHero
        eyebrow="Materials & Method"
        title="The ESM Mineral System"
        sub="Our Eco Slaked-Mineral system — the breathable, hand-applied foundation behind every Limewash Atelier finish."
        img="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1600&q=80"
      />

      <section className="section section-cream text-block">
        <div className="reveal narrow center">
          <p className="eyebrow">Why It Matters</p>
          <h2 className="display">Mineral, Breathable, Built to Age Well</h2>
          <p className="lead">
            ESM is not paint in the conventional sense. Instead of laying a
            plastic film over your wall, it penetrates and bonds with the
            substrate, hardening into a mineral surface that breathes with the
            building. The result is a finish with genuine depth, soft movement,
            and a matte character that flat synthetic paint simply cannot match.
          </p>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-head reveal center">
            <p className="eyebrow">System Properties</p>
            <h2 className="display">What Defines ESM</h2>
          </div>
          <div className="grid grid-2 esm-grid">
            {specs.map((s, i) => (
              <div key={s.title} className="reveal card esm-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="feature-icon esm-icon">
                  <iconify-icon icon={s.icon} width="28" style={{ color: "#9c8f76" }}></iconify-icon>
                </div>
                <div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head reveal center">
            <p className="eyebrow eyebrow-dark">Application Method</p>
            <h2 className="display display-light">How ESM Is Applied</h2>
          </div>
          <div className="grid grid-4 process-grid">
            {steps.map(([step, title, desc], i) => (
              <div key={step} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="process-step">{step}</span>
                <h3 className="card-title card-title-light">{title}</h3>
                <p className="card-text card-text-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="reveal narrow center">
          <h2 className="display">See the ESM System on Your Walls</h2>
          <p className="lead">
            Request an on-site sample and watch how the ESM mineral finish
            responds to your light and architecture.
          </p>
          <Link to="/contact" className="btn btn-dark inline-cta">
            Request a Consultation
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
          </Link>
        </div>
      </section>
    </>
  );
}

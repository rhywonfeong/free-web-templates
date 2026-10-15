import React from "react";
import { PageHero, DesignerSection } from "../components/Sections";
import { portfolio } from "../data";

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Portfolio"
        sub="A glimpse of recent residential and commercial limewash projects."
        img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dce65dab-102d-4c6d-a9fa-2b70302d6c4a_3840w.png"
      />
      <section className="section section-cream">
        <div className="container grid grid-3">
          {portfolio.map((p, i) => (
            <div
              key={i}
              className="reveal portfolio-card"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img src={p.img} alt={p.title} />
              <div className="portfolio-overlay" />
              <div className="portfolio-caption">
                <span className="portfolio-tag">{p.tag}</span>
                <h3 className="portfolio-title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <DesignerSection />
    </>
  );
}

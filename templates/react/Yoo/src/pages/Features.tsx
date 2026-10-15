import { useState } from "react";
import { Link } from "react-router-dom";
import { FEATURES } from "../data/features";

const ESP_LAYERS = ["Box", "Name", "Health", "Tracer", "Distance", "Avatar"];

export default function Features() {
  const [layers, setLayers] = useState<Record<string, boolean>>({
    Box: true,
    Name: true,
    Health: true,
    Tracer: false,
    Distance: false,
    Avatar: false,
  });

  const toggle = (key: string) =>
    setLayers((l) => ({ ...l, [key]: !l[key] }));

  return (
    <>
      <section className="page-head container">
        <span className="pill">
          <span className="pill-dot" /> Full module breakdown
        </span>
        <h1>Every module, restored. One calm interface.</h1>
        <p>
          Claudeware keeps combat, visuals, movement and player tools in
          separate, well-behaved tabs. Toggle anything on or off — nothing was
          torn out, and the rest keeps running exactly as it was.
        </p>
      </section>

      <section className="section container">
        <div className="feature-detail-grid">
          {FEATURES.map((f) => (
            <article className="feature-detail" key={f.title}>
              <div className="feature-detail-top">
                <span className="feature-icon" aria-hidden="true">
                  {f.icon}
                </span>
                <span className="tag">{f.tag}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="esp-demo">
          <div className="esp-demo-copy">
            <h2>Try the ESP layers</h2>
            <p>
              Each layer is independent. Flip them and watch the target
              overlay update — that is exactly how the in-game panel behaves.
            </p>
            <div className="esp-controls">
              {ESP_LAYERS.map((layer) => (
                <button
                  key={layer}
                  className={`chip ${layers[layer] ? "chip-on" : ""}`}
                  onClick={() => toggle(layer)}
                  aria-pressed={layers[layer]}
                >
                  {layer}
                </button>
              ))}
            </div>
          </div>

          <div className="esp-stage">
            <div className="esp-target">
              {layers.Box && <span className="esp-box" />}
              {layers.Name && <span className="esp-name">EnemyPlayer</span>}
              {layers.Health && (
                <span className="esp-health">
                  <span className="esp-health-fill" />
                </span>
              )}
              {layers.Avatar && <span className="esp-avatar">EP</span>}
              {layers.Distance && <span className="esp-distance">18m</span>}
              <span className="esp-figure">
                <span className="esp-head" />
                <span className="esp-torso" />
              </span>
              {layers.Tracer && <span className="esp-tracer" />}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ready to run it?</h2>
            <p>Grab the loadstring and you are seconds from execution.</p>
          </div>
          <Link to="/download" className="btn btn-primary btn-lg">
            Go to download
          </Link>
        </div>
      </section>
    </>
  );
}

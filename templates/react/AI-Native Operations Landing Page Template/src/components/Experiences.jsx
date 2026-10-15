import React from 'react';

export default function Experiences() {
  return (
    <section id="experiences" className="ritual-panels-section">
      <div className="ritual-panels-shell">
        <div className="ritual-panels-frame">
          <div className="ritual-panels-header">
            <div className="ritual-panels-header-grid">
              <div>
                {/* <p className="ritual-panels-kicker reveal-fade editorial-eyebrow" style={{ transitionDelay: '0s' }}>
                  Guided recovery experiences
                </p> */}
                <h2 className="ritual-panels-title font-head reveal-trigger">
                  <span className="reveal-line" style={{ transitionDelay: '0.1s' }}>
                    Architecture 
                  </span>
                  <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>
                    designed to be built,
                  </span>
                  <span className="reveal-line" style={{ transitionDelay: '0.38s' }}>
                    not just imagined.
                  </span>
                </h2>
              </div>

              <div>
                <p className="ritual-panels-text reveal-para editorial-para" style={{ transitionDelay: '0.55s' }}>
                  Transformation is a deliberate process of restructuring your business logic to support a new level of scale. Each stage of our engagement is engineered to provide absolute clarity, remove systemic friction, and deliver an AI-native foundation.
                </p>
              </div>
            </div>
          </div>

          <div className="ritual-panels-grid">
            {/* PANEL 01 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '0.7s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a15293f0-97d1-4dc6-b1ce-d5f3cb42fe84_800w.jpg" alt="Contrast Suite" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">01</span>
                <h3 className="ritual-panel-title font-head">The Blueprint</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Organizational Mapping</p>
                <p className="ritual-panel-detail-text">
                  Through AI-led interviews with your entire team, we extract the exhaustive logic of your operations. We deliver a precise map of your org structure and workflows, revealing exactly how your company functions at its core.
                </p>
                <div className="ritual-panel-tags">
                  <span>Process Documentation</span>
                  <span>Structure Visualization</span>
                  <span>Core Logic Extraction</span>
                </div>
              </div>
            </article>

            {/* PANEL 02 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '0.90s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19453e4f-9a3f-4b6e-a99d-4abc941bb6e4_800w.jpg" alt="Mobility Ritual" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">02</span>
                <h3 className="ritual-panel-title font-head">The Intelligence</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Live RAG System</p>
                <p className="ritual-panel-detail-text">
                  We convert your tribal knowledge into a structured intelligence layer. This live RAG system provides management with immediate, data-backed answers to critical questions about any process or dependency within hours.
                </p>
                <div className="ritual-panel-tags">
                  <span>Knowledge Consolidation</span>
                  <span>Real-time Answers</span>
                  <span>Eliminating Information Silos</span>
                </div>
              </div>
            </article>

            {/* PANEL 03 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '1.10s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0340f36-59a2-4400-bbe4-c1cd0cc179be_800w.jpg" alt="Breath Reset" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">03</span>
                <h3 className="ritual-panel-title font-head">The Roadmap</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Systemic Transformation</p>
                <p className="ritual-panel-detail-text">
                  We identify hidden bottlenecks and structural dependencies that limit your growth. We provide a step-by-step roadmap to transition your organization into an AI-native system with measurable results from the first iteration.
                </p>
                <div className="ritual-panel-tags">
                  <span>Bottleneck Identification</span>
                  <span>Dependency Mapping</span>
                  <span>Iterative Implementation</span>
                </div>
              </div>
            </article>

            {/* PANEL 04 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '1.30s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e59849f5-c57a-4903-afaf-4d4965ecda8b_800w.jpg" alt="Recovery Membership" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">04</span>
                <h3 className="ritual-panel-title font-head">The Partnership</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Expert Guidance</p>
                <p className="ritual-panel-detail-text">
                  Transformation is a continuous journey, not a one-time event. We stay by your side every month, providing dedicated expert support to ensure your new architecture scales and adapts to your evolving business needs.
                </p>
                <div className="ritual-panel-tags">
                  <span>Strategic Support</span>
                  <span>Adoption Leadership</span>
                  <span>System Refinement</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
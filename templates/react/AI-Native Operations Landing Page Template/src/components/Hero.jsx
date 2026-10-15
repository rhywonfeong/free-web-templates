import React from 'react';

export default function Hero() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="hero" className="hero-shell">
      <div className="hero-card">
        <div className="top-image-zone">
          <div 
            className="membership-frame-v2 reveal-img" 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 0, 
              borderRadius: 'inherit' 
            }}
          ></div>

          <div className="nav-wrap">
            <div className="nav-pill">
              <div className="flex items-center gap-3">
                {/* <span className="brand-mark font-head">SP</span> */}
                <div>
                  <div className="font-head text-[13px] uppercase tracking-[0.24em] brand-name">
                    Zore AI
                  </div>
                  {/* <div className="mt-[2px] text-[10px] uppercase tracking-[0.18em] brand-sub">
                    AI-transformation platform
                  </div> */}
                </div>
              </div>

              <nav className="flex items-center gap-8 text-sm">
                <a href="#experiences" className="nav-link">Therapies</a>
                <a href="#membership" className="nav-link">Membership</a>
                <a href="#studio-experience" className="nav-link">The Studio</a>
                <a href="#faq" className="nav-link">FAQ</a>
              </nav>

              <a href="#" className="nav-book-btn">Book Session</a>

              <button className="mobile-menu-btn" aria-label="Open menu">
                <iconify-icon icon="solar:hamburger-menu-linear" width="20" height="20"></iconify-icon>
              </button>
            </div>
          </div>

          <div className="hero-copy">
            {/* <div className="eyebrow reveal-fade">
              <span className="eyebrow-dot"></span>
              Guided recovery experiences
            </div> */}

            <h1 className="hero-title font-head reveal-trigger">
              <span className="block">
                <span className="reveal-word" style={{ transitionDelay: '0.1s' }}>AI Transformation </span>
                <span className="reveal-word" style={{ transitionDelay: '0.2s' }}> over</span>
                <span className="reveal-word" style={{ transitionDelay: '0.3s' }}>Automation</span>
                </span>
            </h1>

            <div className="hero-divider reveal-fade" style={{ transitionDelay: '0.7s' }}></div>

            <p className="hero-text reveal-para" style={{ transitionDelay: '0.8s' }}>
              We map your company's logic through AI-driven interviews with every employee to extract a comprehensive blueprint of your structure and processes. Our system identifies hidden bottlenecks, maps dependencies, and delivers a roadmap to transform your organization into an AI-native system with immediate, measurable results.
            </p>
          </div>
        </div>

        <div className="bottom-paper">
          <div className="method-layout">
            <div className="method-left">
              <p className="section-kicker">The Zore method</p>
              <h2 className="section-title section-title-split font-head reveal-trigger">
                <span className="reveal-line" style={{ transitionDelay: '0.1s' }}>
                  The soul of your operations,
                </span>
                <span className="reveal-line" style={{ transitionDelay: '0.3s' }}>
                  translated into
                </span>
                <span className="reveal-line" style={{ transitionDelay: '0.5s' }}>
                  an AI-native engine.
                </span>
              </h2>

              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)] opacity-60 mb-4">
                  ( Approach )
                </p>
                <p className="section-text max-w-[520px] reveal-para" style={{ transitionDelay: '0.4s' }}>
                  AI transformation is the structural transition from manual processes to a unified digital architecture. We map your entire organizational DNA to eliminate friction and establish a high-performance environment where technology and logic are inseparable.
                </p>

                <div className="cta-row mt-8 reveal-fade" style={{ transitionDelay: '0.6s' }}>
                  <a href="#" className="btn-primary">
                    Explore Therapies
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                  </a>
                  <a href="#" className="btn-secondary">View Membership</a>
                </div>

                <div className="icon-pulse mt-6">
                  <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
                  <div className="sonar-ring"></div>
                </div>
              </div>
            </div>

            <div className="method-right">
              <p className="section-text max-w-[620px] method-right-text reveal-para" style={{ transitionDelay: '0.2s' }}>
                We interview every employee to produce an accurate map of your org structure and workflows. We detect where dependencies create risk and where AI can take over. The result is a comprehensive roadmap and a live intelligence system that answers critical business questions within hours, providing clarity for every strategic decision.
              </p>

              <div className="method-cards-grid">
                <article 
                  className="method-card group cursor-pointer reveal-seq" 
                  style={{ transitionDelay: '0.72s' }}
                  onMouseMove={handleMouseMove}
                >
                  <img 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d71cc83-2714-4c6c-a432-9d2fd65fbcfe_800w.jpg" 
                    alt="Contrast recovery room" 
                    className="method-card-image reveal-img" 
                  />
                  <div className="method-card-overlay"></div>

                  <div className="method-card-content">
                    <div className="flex items-end justify-between text-sm text-[var(--paper)]">
                      <div>
                        <span className="mb-1 block text-xs opacity-60">01</span>
                        <p className="font-medium tracking-tight">Contrast Suite</p>
                      </div>
                      <span className="opacity-70">Heat / Cold</span>
                    </div>
                  </div>
                </article>

                <article 
                  className="method-card group cursor-pointer reveal-seq" 
                  style={{ transitionDelay: '0.94s' }}
                  onMouseMove={handleMouseMove}
                >
                  <img 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96c79e30-2e87-4d9e-bf46-84e831415410_800w.jpg" 
                    alt="Mobility and breath area" 
                    className="method-card-image reveal-img" 
                  />
                  <div className="method-card-overlay"></div>

                  <div className="method-card-content">
                    <div className="flex items-end justify-between text-sm text-[var(--paper)]">
                      <div>
                        <span className="mb-1 block text-xs opacity-60">02</span>
                        <p className="font-medium tracking-tight">
                          Mobility Ritual
                        </p>
                      </div>
                      <span className="opacity-70">Breath / Restore</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
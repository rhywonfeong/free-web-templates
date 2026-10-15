import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      {/* 1. Sticky header */}
      <header className="sticky-header">
        <div className="container header-container">
          <div className="logo-lockup">
            <div className="logo-mark">KF</div>
            <div className="logo-text">Kelli Frias</div>
          </div>
          <div className="header-nav">
            <a href="#" className="text-link">Full site &rarr;</a>
            <a href="#contact" className="btn btn-primary">Invite Kelli to Speak</a>
          </div>
        </div>
      </header>

      <main>
        {/* 2. Hero */}
        <section className="bg-gray section-pad">
          <div className="container hero-grid">
            <div className="hero-text">
              <span className="eyebrow">RESEARCHER &bull; PROFESSOR &bull; SPEAKER</span>
              <h1 className="hero-h1">Currently: Kelli Frias</h1>
              <p className="lead-text">
                A quarterly snapshot of what I'm researching, reading, and thinking about right now. I study how people make decisions inside complex systems, especially healthcare, AI, and markets, and this page is where I show my work in progress.
              </p>
              <p className="text-muted small-text">
                Updated quarterly &middot; On sabbatical through January 2027
              </p>
              <div className="btn-group">
                <a href="#contact" className="btn btn-primary">Invite Kelli to Speak</a>
                <a href="#" className="btn btn-secondary">Visit the full site &rarr;</a>
              </div>
            </div>
            <div className="card card-img hero-img">
              <img 
                src="https://imagedelivery.net/-t1hJGAoYn8WkjOGPmw1rQ/528bc685-88b4-4e10-8b6d-5e9d860cfb00/gravity=face,width=900,height=1100,fit=cover,format=auto" 
                alt="Dr. Kelli Frias, researcher, professor, and speaker." 
              />
            </div>
          </div>
        </section>

        {/* 3. The lens */}
        <section className="bg-white section-pad">
          <div className="container-narrow">
            <span className="eyebrow">THE LENS</span>
            <p>
              People rarely make decisions in isolation. They make them inside systems, and those systems shape what feels possible, reasonable, and affordable. Before any choice becomes visible, people compare imperfect information, weigh risks nobody explained, and make tradeoffs on their own. My work makes that invisible process visible.
            </p>
            <blockquote className="pull-quote">
              "People are rarely irrational. They are adapting to a system that was never designed to make the decision easy."
            </blockquote>
          </div>
        </section>

        {/* 4. On the horizon — current research */}
        <section className="bg-gray section-pad">
          <div className="container">
            <span className="eyebrow">ON THE HORIZON</span>
            <h2 className="h2-main">What I'm researching now</h2>
            <p className="text-muted lead-text" style={{ fontSize: '18px' }}>
              Projects in progress and ideas I'm chasing. None of these are published yet; this is the thinking as it happens.
            </p>

            <div className="horizon-grid">
              {/* Card 1 */}
              <div className="card">
                <span className="tag">Healthcare</span>
                <h3 className="h3-card">Affordability of healthcare</h3>
                <p>
                  Affordability is rarely just about the price tag. This work looks at what actually makes care feel affordable to the people paying for it: out-of-pocket costs, insurance design, and the complexity of navigating the system itself. The goal is to find where financial barriers actually show up, not just where policy assumes they do.
                </p>
                <p className="card-why-matters">
                  Why this matters: Everyone knows healthcare is expensive. What organizations miss is which costs actually stop people, and when.
                </p>
              </div>

              {/* Card 2 */}
              <div className="card">
                <span className="tag tag-blue">Access</span>
                <h3 className="h3-card">Dual market navigation</h3>
                <p>
                  Consumers increasingly look outside their primary healthcare system to find care that fits, whether that means crossing borders or buying direct-to-consumer (for example, purchasing GLP-1s). This research asks why people choose to navigate multiple markets at once, and what that choice reveals about gaps in access and coordination.
                </p>
                <p className="card-why-matters">
                  Why this matters: Patients who shop across borders and platforms are escaping the realities of their networks. The question is whether your organization is listening.
                </p>
              </div>

              {/* Card 3 */}
              <div className="card">
                <span className="tag">AI & Trust</span>
                <h3 className="h3-card">Medical influencer credibility</h3>
                <p>
                  Medical professionals are building public reputations as content creators, stepping into a media landscape once governed by traditional gatekeeping. This work explores how audiences come to trust or distrust a provider online, how commercial partnerships shape that trust, and what it means as health information moves onto social platforms.
                </p>
                <p className="card-why-matters">
                  Why this matters: Health information has moved to social platforms. Providers who understand how trust works there will shape patient decisions.
                </p>
              </div>

              {/* Card 4 */}
              <div className="card">
                <span className="tag tag-blue">Consumer Behavior</span>
                <h3 className="h3-card">Beauty myths in cosmetic services</h3>
                <p>
                  The cosmetics industry sells more than a service; it sells an expectation. This research examines the myths consumers bring into cosmetic procedures, invasive and non-invasive, and what happens when the outcome does not match the expectation regardless of the provider's actual skill. It draws on consumer experiences across several countries.
                </p>
                <p className="card-why-matters">
                  Why this matters: Skill does not protect providers from patient expectations when part of success is built on a myth.
                </p>
              </div>

              {/* Card 5 */}
              <div className="card">
                <span className="tag">AI & Robotics</span>
                <h3 className="h3-card">AI and robotics in dental care</h3>
                <p>
                  Healthcare cannot train its way out of its labor shortage fast enough. AI-assisted robotic devices are stepping into that gap. Working with a multi-office dental group and drawing on in-depth patient interviews, we ask a simple question: what makes a patient trust a machine to act directly on their body? Early findings are already complicating assumptions about AI adoption.
                </p>
                <p className="card-why-matters">
                  Why this matters: The labor gap requires us to think differently about who, or what, provides care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Now — the personal snapshot */}
        <section className="bg-white section-pad">
          <div className="container">
            <span className="eyebrow">RIGHT NOW</span>
            <h2 className="h2-main">Learning, reading, listening</h2>
            
            <div className="now-layout">
              <div className="now-text-block">
                <div className="now-lists">
                  <div>
                    <h3 className="now-list-title">What I'm learning</h3>
                    <ul className="now-list">
                      <li>Content-creator legislation in the United States and Mexico, especially anything in the works around healthcare-related content.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="now-list-title">What I'm reading</h3>
                    <ul className="now-list">
                      <li><em>Empire of AI</em> — Karen Hao</li>
                      <li><em>Inside the Box: How Constraints Make Us Better</em> — David Epstein</li>
                      <li><em>Catch the Devil</em> — Pamela Colloff</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="now-list-title">What I'm listening to</h3>
                    <ul className="now-list">
                      <li>The Book Case</li>
                      <li>The AI Breakdown</li>
                      <li>Plain English</li>
                    </ul>
                  </div>
                </div>
                
                <div className="now-life">
                  <h3 className="now-list-title">Life right now</h3>
                  <p>
                    I'm on sabbatical until January 2027, so this is the first time in eight years I've had real time to learn something new and stretch into more creative projects. Right now that means digging into content-creation legislation, parsing TikTok data I scraped from creators I'm curious about, and hunting for a good cup of coffee and a quiet place to read in D.C. The museum cafés are hidden gems.
                  </p>
                </div>
              </div>
              
              <div className="card card-img now-img">
                <img 
                  src="https://imagedelivery.net/-t1hJGAoYn8WkjOGPmw1rQ/b411d3e4-c723-4123-626f-c377c96fa300/public" 
                  alt="Kelli Frias standing beside framed artwork." 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. About in brief */}
        <section className="bg-gray section-pad">
          <div className="container about-grid">
            <div className="card card-img about-img">
              <img 
                src="https://imagedelivery.net/-t1hJGAoYn8WkjOGPmw1rQ/5828b94a-068e-4b0d-ebf0-964ddf9d7200/public" 
                alt="Kelli Frias seated, smiling." 
              />
            </div>
            <div className="about-text">
              <span className="eyebrow">IN BRIEF</span>
              <h2 className="h2-main">A bit about me</h2>
              <p>
                I'm a researcher, professor, and speaker who makes invisible decisions visible. I study how people navigate uncertainty, evaluate imperfect information, build trust, and make tradeoffs inside complex systems, drawing on more than fifteen years of qualitative and ethnographic research. I'm a Professor of Marketing at American University's Kogod School of Business. My work spans healthcare, artificial intelligence, and markets, with a constant focus on the hidden processes that shape a decision before anyone sees the final choice.
              </p>
              <div className="about-links">
                <a href="#" className="btn btn-secondary">See my full work &rarr;</a>
                <a href="#" className="text-link">Deciding Health podcast &rarr;</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Final CTA + footer */}
      <footer className="bg-teal">
        <div className="container">
          <div className="final-cta">
            <h2>Want the whole picture?</h2>
            <p className="final-cta-line">
              This is just current Kelli. For research, speaking, and publications, visit the full site, or start a conversation.
            </p>
            <div className="btn-group">
              <a href="#contact" className="btn btn-primary">Invite Kelli to Speak</a>
              <a href="#" className="btn btn-secondary-white">Visit the full site &rarr;</a>
            </div>
          </div>
        </div>
        
        <div className="footer-strip">
          <div className="container footer-inner">
            <div className="footer-logo">
              <div className="footer-logo-mark">KF</div>
              <span className="footer-logo-text">Kelli Frias</span>
            </div>
            <div className="footer-copyright">
              &copy; 2026 Kelli Frias, PhD
            </div>
            <div className="footer-links">
              <a href="#">Full site</a>
              <span>&middot;</span>
              <a href="#">Speaking</a>
              <span>&middot;</span>
              <a href="#">Podcast</a>
              <span>&middot;</span>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
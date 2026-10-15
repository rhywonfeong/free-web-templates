export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <div className="footer-grid reveal-up">
          <div>
            <div className="footer-brand">ux.jonny</div>
            <p className="footer-copy">© 2026 All rights reserved.</p>
          </div>

          <div className="footer-right">
            <div className="status-pill">
              <span className="status-dot-wrap">
                <span className="status-ping" />
                <span className="status-dot" />
              </span>
              Disponível para oportunidades
            </div>
            <nav className="footer-nav">
              <a href="https://www.instagram.com/ux.jonny/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-fernandes-a8208410a/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
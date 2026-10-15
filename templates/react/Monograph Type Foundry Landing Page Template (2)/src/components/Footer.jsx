import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-brand-name">Monograph</span>
          <p className="footer-desc">
            An independent type foundry crafting typefaces that carry meaning, establish voice, and endure. Every letterform is a decision.
          </p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-col-h">Library</h4>
          <ul className="footer-link-list">
            <li><a href="#">Neue Grotesk</a></li>
            <li><a href="#">Serif Variable</a></li>
            <li><a href="#">Mono Pro</a></li>
            <li><a href="#">View All</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-col-h">Studio</h4>
          <ul className="footer-link-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Custom Type</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-col-h">Social</h4>
          <ul className="footer-link-list">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter / X</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">Read.cv</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bar">
        <p className="footer-copy">© {new Date().getFullYear()} Monograph Type Foundry. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Licensing Agreement</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
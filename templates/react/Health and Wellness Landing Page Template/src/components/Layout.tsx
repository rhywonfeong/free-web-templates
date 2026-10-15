import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="app-shell">
      <div className="app-canvas">
        <header className="header">
          <div className="container">
            <Link to="/" className="brand">Farmaco Natural</Link>
            <nav className="nav-links">
              <Link to="/#sobre">Sobre</Link>
              <Link to="/#marcas">Marcas</Link>
              <Link to="/#contato">Contato</Link>
            </nav>
          </div>
        </header>

        <main style={{ flex: 1 }}>
          <Outlet />
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <h4>Farmaco Natural</h4>
                <div className="caption" style={{ marginTop: 'var(--space-2)' }}>
                  FARMACO NATURAL LTDA<br />
                  CNPJ: 47.996.230/0001-16
                </div>
              </div>
              <div className="footer-col">
                <h4>Navegação</h4>
                <div className="footer-links">
                  <Link to="/#sobre">Sobre</Link>
                  <Link to="/#marcas">Marcas</Link>
                  <Link to="/#contato">Contato</Link>
                </div>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <div className="footer-links">
                  <Link to="/privacidadeuso">Política de Privacidade</Link>
                  <Link to="/termosuso">Termos de Uso</Link>
                  <Link to="/exclusao-de-dadosuso">Exclusão de Dados</Link>
                  <Link to="/whatsappuso">Opt-in WhatsApp</Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span className="caption">&copy; {new Date().getFullYear()} Farmaco Natural LTDA. Todos os direitos reservados.</span>
              <span className="caption">Rua Afonso XIII, 406 – Vila Campestre – São Paulo/SP – CEP 04331-030</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              S'AIDER PLUS <span className="script">Village</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', maxWidth: 340 }}>
              Une infrastructure territoriale du bien-vieillir, ancrée dans l'art de vivre antillais.
            </p>
          </div>
          <div>
            <h4>Le projet</h4>
            <Link to="/vision">Vision</Link>
            <Link to="/projet">Le projet</Link>
            <Link to="/village">Le Village</Link>
          </div>
          <div>
            <h4>Ressources</h4>
            <Link to="/compagnon">Compagnon</Link>
            <Link to="/impact-structure">Impact & déploiement</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <Link to="/contact">Nous rejoindre</Link>
            <a href="mailto:saiderplus.gpe@gmail.com">saiderplus.gpe@gmail.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 S'AIDER PLUS Village — Guadeloupe</span>
          <span>Mars 2026</span>
        </div>
      </div>
    </footer>
  );
}

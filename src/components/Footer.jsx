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

        {/* Newsletter — masqué tant que le service n'est pas branché (Resend, etc.) */}
        <div className="footer-newsletter" style={{ display: 'none' }}>
          <h4>Recevez les actualités</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', maxWidth: 420, margin: 0 }}>
            Une lettre trimestrielle pour suivre l'avancement du projet, les partenariats et les
            ouvertures à venir.
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            aria-label="Inscription à la newsletter"
          >
            <label htmlFor="newsletter-email" className="visually-hidden" style={{ position: 'absolute', left: -9999 }}>
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="votre@email.fr"
              autoComplete="email"
              required
            />
            <button type="submit" className="btn">S'inscrire</button>
          </form>
          <p className="newsletter-msg">
            Service en cours d'intégration — formulaire désactivé.
          </p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 S'AIDER PLUS Village — Guadeloupe</span>
        </div>
      </div>
    </footer>
  );
}

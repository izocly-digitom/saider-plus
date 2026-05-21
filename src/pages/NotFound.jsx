import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = "Page introuvable — S'AIDER PLUS Village";
  }, []);

  return (
    <section className="page-hero">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="supra">Erreur 404</div>
        <h1>Page introuvable</h1>
        <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
        <p style={{ maxWidth: 520, margin: '0 auto 28px' }}>
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn">Retour à l'accueil</Link>
      </div>
    </section>
  );
}

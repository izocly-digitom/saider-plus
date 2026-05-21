import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  useEffect(() => {
    document.title = "Co-construisons demain — S'AIDER PLUS Village";
  }, []);

  return (
    <section style={{ padding: 0 }}>
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="contact-split">
          <div className="left">
            <div className="supra" style={{ color: 'var(--teal-light)' }}>
              Rejoignez-nous
            </div>
            <h1>
              Co-<br />
              construisons<br />
              demain.
            </h1>
            <div className="orange-bar"></div>
            <p>
              Nous cherchons des partenaires engagés pour co-construire le premier Village S'AIDER
              PLUS en Guadeloupe, premier jalon d'un réseau de Villages ultramarins et hexagonaux.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 24 }}>
              <Link to="/projet" className="btn">Relire le projet</Link>
              <Link to="/impact-modele" className="btn">Voir l'impact attendu</Link>
            </div>
          </div>
          <div className="right">
            <h2>
              Rejoignez-<br />nous
            </h2>
            <div className="orange-bar"></div>
            <p>
              Collectivités, financeurs, ARS, opérateurs, partenaires : prenez contact avec
              l'équipe du projet.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

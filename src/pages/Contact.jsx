import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  useEffect(() => {
    document.title = "Co-construisons demain — S'AIDER PLUS Village";
  }, []);

  return (
    <>
      <section className="page-hero centered">
        <div className="container">
          <div className="supra">Rejoignez-nous</div>
          <h1>Co-construisons demain.</h1>
          <div className="orange-bar"></div>
          <p style={{ maxWidth: 720 }}>
            Nous cherchons des partenaires engagés pour co-construire le premier Village S'AIDER
            PLUS en Guadeloupe, premier jalon d'un réseau de Villages ultramarins et hexagonaux.
          </p>
          <div className="cta-row" style={{ marginTop: 8 }}>
            <Link to="/projet" className="btn">Relire le projet</Link>
            <Link to="/impact-modele" className="btn">Voir l'impact attendu</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2>Prenez contact avec l'équipe</h2>
            <div className="orange-bar"></div>
            <p>
              Collectivités, financeurs, ARS, opérateurs, partenaires : laissez-nous un message et
              nous reviendrons vers vous rapidement.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

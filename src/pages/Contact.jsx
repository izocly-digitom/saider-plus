import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  useEffect(() => {
    document.title = "Co-construisons demain — S'AIDER PLUS Village";
  }, []);

  return (
    <section style={{ padding: 0 }}>
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
            Collectivités, financeurs, ARS, opérateurs, partenaires : prenez contact avec l'équipe
            du projet.
          </p>
          <img
            src="/assets/img/page_21_img_7663.webp"
            alt="QR code partenaires — S'AIDER PLUS Village"
            className="qr-box"
          />
          <a
            href="mailto:saiderplus.gpe@gmail.com?subject=Prise%20de%20contact%20—%20S'AIDER%20PLUS%20Village"
            className="btn"
            style={{ marginTop: 8 }}
          >
            Nous écrire
          </a>
        </div>
      </div>
    </section>
  );
}

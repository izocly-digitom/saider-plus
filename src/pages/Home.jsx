import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PillarsShowcase from '../components/PillarsShowcase.jsx';

export default function Home() {
  useEffect(() => {
    document.title = "S'AIDER PLUS Village — Transformer l'art de vivre antillais en infrastructure du bien-vieillir";
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h2 className="hero-headline">
            Transformer l'art de vivre antillais en infrastructure territoriale du bien-vieillir.
          </h2>
          <div className="orange-bar"></div>
          <div className="cta-row">
            <Link to="/village" className="btn">Découvrir le Village</Link>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="split">
            <div className="split-text">
              <div className="supra">Contexte et enjeux</div>
              <h2>Un défi territorial qui s'accélère</h2>
              <div className="orange-bar"></div>
              <p className="lead">
                À l'horizon 2030, la Guadeloupe comptera environ 28 000 personnes âgées en
                situation de dépendance, soit une hausse significative par rapport à 2017.
              </p>
              <Link to="/projet" className="btn outline">Voir le projet en détail</Link>
            </div>
            <img src="/assets/img/un-defi-territorrial-1.webp" alt="Un défi territorial — Guadeloupe" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <div className="supra">Un lieu de vie territorial, non institutionnel</div>
            <h2>
              Les 5 piliers structurants du <span className="script">Village</span>
            </h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>
              S'AIDER PLUS Village repose sur cinq piliers complémentaires qui traduisent une
              approche globale du bien-vieillir, centrée sur la qualité de vie, la prévention et
              la dignité.
            </p>
          </div>

          <PillarsShowcase />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split reverse plan-split">
            <div className="split-text">
              <div className="supra">Une réponse intégrée</div>
              <h2>Un tiers-lieu hybride au service du territoire</h2>
              <div className="orange-bar"></div>
              <p>
                S'AIDER PLUS Village propose une plateforme territoriale d'orchestration dédiée à
                la prévention de la fragilité, au soutien des aidants et au maintien de l'autonomie.
              </p>
              <Link to="/village" className="btn">Explorer les espaces</Link>
            </div>
            <img
              src="/assets/img/page_05_img_1873.webp"
              alt="Plan masse du Village S'AIDER PLUS"
              className="plan-full"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="supra">Rejoignez-nous</div>
          <h2>Co-construisons demain.</h2>
          <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
          <p style={{ maxWidth: 640, margin: '0 auto 28px' }}>
            S'AIDER PLUS Village constitue une réponse innovante, structurée et immédiatement
            opérationnelle aux enjeux du vieillissement. Collectivités, financeurs, opérateurs :
            construisons ensemble.
          </p>
          <Link to="/contact" className="btn">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}

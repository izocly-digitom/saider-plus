import { useEffect } from 'react';

export default function ImpactDuplication() {
  useEffect(() => {
    document.title = "Modèle transposable — S'AIDER PLUS Village";
  }, []);

  return (
    <>
      <section className="page-hero page-hero-split">
        <div className="container">
          <div className="hero-split-grid">
            <div className="hero-split-text">
              <div className="supra">La Guadeloupe devient site pilote</div>
              <h1>Un modèle transposable à d'autres territoires ultramarins</h1>
              <div className="orange-bar"></div>
              <p>
                Un prototype territorial duplicable, conçu pour être essaimé à l'échelle
                ultramarine et hexagonale.
              </p>
            </div>
            <img
              src="/assets/img/page_20_img_7445.webp"
              alt="La Guadeloupe, site pilote d'un modèle transposable"
              className="hero-split-img"
            />
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="grid cols-3">
            <div className="card">
              <h3>Une innovation systémique</h3>
              <p>L'innovation repose sur trois dimensions :</p>
              <ul className="bullets">
                <li>
                  <strong>Organisationnelle</strong> — gouvernance hybride et co-construction
                </li>
                <li>
                  <strong>Économique</strong> — structuration d'une filière émergente
                </li>
                <li>
                  <strong>Numérique</strong> — continuité de parcours et mesure d'impact
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Une opportunité territoriale</h3>
              <p>
                La Guadeloupe transforme le vieillissement en levier d'innovation territoriale en
                créant un écosystème combinant :
              </p>
              <ul className="bullets">
                <li>Proximité humaine</li>
                <li>Prévention</li>
                <li>Inclusion</li>
                <li>Dynamique technologique</li>
                <li>Développement économique local</li>
                <li>Valorisation des ressources humaines</li>
              </ul>
            </div>
            <div className="card">
              <h3>Un modèle duplicable</h3>
              <p>Le modèle repose sur :</p>
              <ul className="bullets">
                <li>Une modélisation claire et réplicable</li>
                <li>Un processus d'implantation progressif</li>
                <li>Une méthodologie d'évaluation mesurable</li>
                <li>Un mix public-privé adaptable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-teal">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <h2>Perspectives de déploiement</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p style={{ fontSize: '1.05rem', marginTop: 24 }}>
              Le Village est conçu comme un prototype territorial duplicable, avec une capacité
              d'essaimage :
            </p>
            <div className="deploy-badges">
              <span className="deploy-badge">En Guadeloupe</span>
              <span className="deploy-badge">En Martinique</span>
              <span className="deploy-badge">Dans d'autres territoires ultramarins et hexagonaux</span>
            </div>
            <p style={{ fontSize: '1.05rem' }}>
              L'objectif est de structurer, à terme, un réseau de Villages S'AIDER PLUS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

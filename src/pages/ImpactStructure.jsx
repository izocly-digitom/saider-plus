import { useEffect } from 'react';

export default function ImpactStructure() {
  useEffect(() => {
    document.title = "Structure sécurisée — S'AIDER PLUS Village";
  }, []);

  const barStyle = { width: 40, height: 3, margin: '10px 0 16px' };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="supra">Organisation & partenariats</div>
          <h1>Une structure sécurisée au service du territoire</h1>
          <div className="orange-bar"></div>
          <p>
            S'AIDER PLUS Village repose sur une architecture juridique claire et un écosystème de
            partenaires territoriaux à forte valeur ajoutée.
          </p>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
            <h2>Structuration juridique</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
          </div>
          <div className="grid cols-2">
            <div className="card card-lead">
              <h4>Une structure fondatrice</h4>
              <div className="orange-bar" style={barStyle}></div>
              <p>
                Détention de la marque et du modèle S'AIDER PLUS. Garante de la cohérence
                stratégique et de la propriété intellectuelle.
              </p>
            </div>
            <div className="card card-lead">
              <h4>Une association S'AIDER PLUS</h4>
              <div className="orange-bar" style={barStyle}></div>
              <p>
                Portage des actions d'intérêt général. Relation avec les institutions et
                dispositifs publics.
              </p>
            </div>
            <div className="card card-lead">
              <h4>Une société d'exploitation (SAS)</h4>
              <div className="orange-bar" style={barStyle}></div>
              <p>Gestion opérationnelle du site. Développement des partenariats économiques.</p>
            </div>
            <div className="card card-lead">
              <h4>Un partenaire immobilier (SEM / foncière)</h4>
              <div className="orange-bar" style={barStyle}></div>
              <p>
                Portage du foncier et réalisation de l'investissement immobilier. Mise à
                disposition via bail long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
            <h2>Partenariat territorial</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
          </div>
          <div className="grid cols-3">
            <div className="card card-lead">
              <h4>Acteurs publics</h4>
              <div className="orange-bar" style={barStyle}></div>
              <p>
                Collectivités territoriales, ARS, institutions sociales. Chaque partenaire
                intervient dans son champ de compétence, dans une logique de complémentarité.
              </p>
            </div>
            <div className="card card-lead">
              <h4>Acteurs économiques et sociaux</h4>
              <div className="orange-bar" style={barStyle}></div>
              <p>
                Mutuelles, assurances, SEM, Banque des Territoires, Fonds européens (FEDER / FSE+).
              </p>
            </div>
            <div className="card card-lead">
              <h4>Une co-construction territoriale</h4>
              <div className="orange-bar" style={barStyle}></div>
              <p>
                Le projet S'AIDER PLUS Village s'inscrit dans une logique de co-construction avec
                les acteurs du territoire pour sécuriser le foncier, l'investissement et
                structurer un partenariat durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
            <h2>Un projet au service de l'intérêt général</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
          </div>
          <div className="grid cols-2">
            <div className="card card-lead">
              <p>S'AIDER PLUS Village vise à :</p>
              <ul className="bullets">
                <li>Améliorer la qualité de vie des aidants et des seniors</li>
                <li>Prévenir les situations de rupture et d'épuisement</li>
                <li>Renforcer la coordination des acteurs</li>
                <li>Soutenir les entreprises face aux enjeux des salariés aidants</li>
              </ul>
            </div>
            <div className="card card-lead">
              <p>Le projet contribue directement aux politiques publiques :</p>
              <ul className="bullets">
                <li>Prévention de la perte d'autonomie</li>
                <li>Soutien aux aidants</li>
                <li>Innovation sociale territoriale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

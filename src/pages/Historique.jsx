import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TimelineEntry from '../components/TimelineEntry.jsx';

export default function Historique() {
  useEffect(() => {
    document.title = "Historique — S'AIDER PLUS Village";
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="supra">Genèse du projet</div>
          <h1>Historique du projet</h1>
          <div className="orange-bar"></div>
          <p>
            Cinq années d'engagement, de la crise subie au passage à l'action. Une trajectoire de
            persévérance, d'investissement personnel et de validation terrain qui a forgé le projet
            S'AIDER PLUS Village.
          </p>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="timeline">
            <TimelineEntry
              side="left"
              date={
                <>
                  2020<br />
                  <small>2021</small>
                </>
              }
            >
              <div className="supra">Phase 1 — Le point de bascule</div>
              <h3>De la crise subie à l'entrepreneuriat</h3>
              <p>
                Mars 2020, premier confinement. Un temps de recul, une prise de conscience des
                fragilités humaines et organisationnelles. En juin, l'annonce d'un plan social de
                20 postes agit comme un déclencheur — l'inadéquation des réponses existantes face
                aux enjeux sociaux devient flagrante.
              </p>
              <p>
                Contrainte de se structurer juridiquement (KBIS, RIB d'entité créée), la porteuse
                passe de salariée à structure autonome. Novembre 2020 : signature de fin de CDI.
                Mars 2021 : rupture conventionnelle officielle.
              </p>
            </TimelineEntry>

            <TimelineEntry
              side="right"
              date={
                <>
                  2021<br />
                  <small>2025</small>
                </>
              }
            >
              <div className="supra">Phase 2 — La traversée</div>
              <h3>Engagement total, légitimation terrain</h3>
              <p>
                <strong>Investissement personnel</strong> — 88 000 € d'indemnité, 40 000 €
                d'économies, allocation chômage deux ans, baisse de revenus de 800 €/mois. Une
                logique d'investissement total.
              </p>
              <p>
                <strong>Validation massive</strong> (2021-2023) — projet reconnu par l'ensemble des
                acteurs rencontrés, besoin confirmé, légitimité installée.
              </p>
              <p>
                <strong>Point de rupture</strong> (janvier 2024) — épuisement des ressources,
                passage au RSA, dettes. La réalité des porteurs de projets à impact : reconnus mais
                sans mécanisme de soutien.
              </p>
            </TimelineEntry>

            <TimelineEntry
              side="left"
              date={
                <>
                  2024<br />
                  <small>2025</small>
                </>
              }
            >
              <div className="supra">Phase 3 — Le verrou économique</div>
              <h3>Forte valeur, ingénierie manquante</h3>
              <p>
                Le projet est prêt opérationnellement. Mais le modèle économique nécessite une
                ingénierie experte — cabinets spécialisés, structuration financière, calibrage des
                flux. Or l'absence de chiffre d'affaires empêche de les financer.
              </p>
              <p
                className="quote-text"
                style={{ color: 'var(--teal-light)', fontSize: '1.1rem', marginTop: 16 }}
              >
                « Il faut des moyens pour structurer un modèle économique… alors même que
                l'activité n'est pas encore lancée. »
              </p>
            </TimelineEntry>

            <TimelineEntry side="right" date={<>2026</>}>
              <div className="supra">Phase 4 — Le passage à l'action</div>
              <h3>L'année du déclenchement</h3>
              <p>
                Obtenir des engagements fermes auprès du Conseil départemental, de l'ARS, des
                mutuelles, du MEDEF, des entreprises, banques, bailleurs et associations :
                signatures de conventions, cofinancements, intégration aux politiques publiques.
              </p>
              <p>
                <strong>Axe prioritaire</strong> — mission de chargée de mission pour construire
                une base de données territoriale fiable : mesurer les besoins réels, produire des
                KPI d'impact, outiller les décideurs.
              </p>
            </TimelineEntry>

            <TimelineEntry side="left" date={<>2029</>}>
              <div className="supra">Ouverture du Village</div>
              <h3>Anticiper le pic de vieillissement</h3>
              <p>
                Accueil des salariés aidants, aidants familiaux, personnes fragilisées, seniors et
                familles. Près de <strong>28 000 personnes</strong> concernées à l'horizon 2030.
              </p>
              <p>
                Le Village devient un outil de prévention massif, une référence territoriale et un
                modèle reproductible à l'échelle ultramarine et nationale.
              </p>
            </TimelineEntry>
          </div>
        </div>
      </section>

      <section className="section-teal">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="supra">Et maintenant</div>
          <h2>Engageons le passage à l'action</h2>
          <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
          <p style={{ maxWidth: 640, margin: '0 auto 28px' }}>
            Le projet est prêt. Il attend désormais les engagements concrets des acteurs du
            territoire pour une ouverture du Village en 2029.
          </p>
          <Link to="/contact" className="btn">Rejoindre le projet</Link>
        </div>
      </section>
    </>
  );
}

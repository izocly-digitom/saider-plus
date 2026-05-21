import { useEffect } from 'react';

export default function ImpactModele() {
  useEffect(() => {
    document.title = "Un modèle à impact — S'AIDER PLUS Village";
  }, []);

  const barSmall = { width: 40, height: 3, margin: '10px 0 18px' };
  const sourceMuted = { color: 'var(--text-soft)' };

  return (
    <>
      <section className="page-hero page-hero-split">
        <div className="container">
          <div className="hero-split-grid">
            <div className="hero-split-text">
              <div className="supra">
                Transformer le défi du grand âge en moteur de croissance inclusive et d'innovation
              </div>
              <h1>Un modèle à impact : de l'accompagnement à la dynamique</h1>
              <div className="orange-bar"></div>
              <p>
                S'AIDER PLUS Village ne constitue pas uniquement une réponse sociale au
                vieillissement : il agit comme une infrastructure économique territoriale à double
                impact, social et productif.
              </p>
            </div>
            <img
              src="/assets/img/page_18_img_6323.webp"
              alt="Un modèle à impact — S'AIDER PLUS Village"
              className="hero-split-img"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <img
              src="/assets/img/page_19_img_6867.webp"
              alt="Accueil et inscription — Pôle Emploi Guadeloupe"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 320,
                objectFit: 'cover',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow)',
              }}
            />
            <div className="split-text">
              <div className="supra">Silver économie</div>
              <h2>Un moteur de silver économie et de développement territorial</h2>
              <div className="orange-bar"></div>
              <p>
                En structurant une expérimentation du bien-vieillir, le Village contribue à faire
                émerger une filière locale de silver économie capable de générer des emplois, de
                mobiliser un écosystème d'acteurs et de soutenir l'innovation sociale et
                entrepreneuriale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-teal">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 48px' }}>
            <div className="supra">Impact territorial</div>
            <h2>Le Village donne lieu à une croissance inclusive</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
          </div>

          <div className="impact-dashboard">
            <div className="metric-card wide">
              <div className="metric-label">01 — Création d'emplois directs et indirects</div>
              <div className="metric-number">+1 620 ETP</div>
              <p className="metric-sub">
                Emplois supplémentaires à mobiliser en Guadeloupe d'ici 2030 pour répondre aux
                besoins de dépendance. Dont 5 635 ETP à domicile et 1 060 ETP en établissement.
              </p>
              <div className="mini-bars">
                <div className="mini-bar">
                  <span className="mini-bar-label">2020</span>
                  <div className="mini-bar-fill teal" style={{ width: '76%' }}>
                    <span>5 071</span>
                  </div>
                </div>
                <div className="mini-bar">
                  <span className="mini-bar-label">2030</span>
                  <div className="mini-bar-fill orange" style={{ width: '100%' }}>
                    <span>6 695</span>
                  </div>
                </div>
              </div>
              <p className="metric-source">
                Source : INSEE Analyses Guadeloupe n°49 — La Guadeloupe face au défi de la
                dépendance à l'horizon 2030
              </p>
            </div>

            <div className="metric-card">
              <div className="metric-label">02 — Nouveaux métiers & compétences</div>
              <div className="metric-number">305 400</div>
              <p className="metric-sub">
                Postes d'aides à domicile à pourvoir en France d'ici 2030 — 98 200 créations nettes
                + 207 200 départs. Seuls ~81 500 jeunes entrants projetés.
              </p>
              <p className="metric-source">Source : DARES — Les métiers en 2030</p>
            </div>

            <div className="metric-card">
              <div className="metric-label">03 — Écosystème territorial innovant</div>
              <div className="metric-number">
                1<sup>er</sup>
              </div>
              <p className="metric-sub">
                Village du bien-vieillir à l'échelle territoriale en Guadeloupe. Sur 3 500
                tiers-lieux recensés en France, aucun n'est dédié à l'anticipation de la perte
                d'autonomie.
              </p>
              <p className="metric-source">
                Source : Observatoire France Tiers-Lieux — Données 2023
              </p>
            </div>

            <div className="metric-card">
              <div className="metric-label">04 — Filière silver économie</div>
              <div className="metric-number">200 Md€</div>
              <p className="metric-sub">
                Poids projeté de la filière silver économie en France en 2030, contre 130 Md€ en
                2020. 300 000 emplois créés depuis 2013, +0,25 %/an de contribution au PIB.
              </p>
              <p className="metric-source">Source : Filière Silver Économie — France Silver Eco</p>
            </div>

            <div className="metric-card">
              <div className="metric-label">05 — Infrastructure d'innovation</div>
              <div className="metric-number">252 k€</div>
              <p className="metric-sub">
                Chiffre d'affaires moyen annuel généré par un tiers-lieu en France (882 M€
                cumulés), dont 46 % engagés dans l'économie sociale et solidaire.
              </p>
              <p className="metric-source">
                Source : Observatoire France Tiers-Lieux — Données 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 48px' }}>
            <div className="supra">Attractivité & pérennité</div>
            <h2>Rendre les métiers du soin désirables</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>
              410 000 offres d'emploi diffusées en 2025 pour le soin à la personne, 500 000 postes
              à pourvoir d'ici 4 ans, et une génération qui se détourne du secteur. Le Village ne
              se contente pas de recruter : il conçoit un environnement où les jeunes ont envie de
              s'engager.
            </p>
          </div>

          <div className="grid cols-3">
            <div className="card lever-card">
              <div className="lever-num">01</div>
              <h3>Équipes autonomes de proximité</h3>
              <div className="orange-bar" style={barSmall}></div>
              <p>
                Des petites équipes locales qui décident elles-mêmes de leurs plannings, de leurs
                interventions et de leur coordination — sans management intermédiaire.
              </p>
              <ul className="bullets">
                <li>Modèle inspiré de Buurtzorg (Pays-Bas)</li>
                <li>Expérimenté par la CNSA en France depuis 2020</li>
                <li>Regain de sens, baisse du turnover documentés</li>
              </ul>
              <p className="metric-source" style={sourceMuted}>
                Source : CNSA — Évaluation SAAD en équipes autonomes (2022) · Soignons Humain
              </p>
            </div>

            <div className="card lever-card">
              <div className="lever-num">02</div>
              <h3>Un terrain de formation intégré</h3>
              <div className="orange-bar" style={barSmall}></div>
              <p>
                Le Village devient un lieu d'application conventionné avec les organismes de
                formation déjà présents en Guadeloupe. Les apprentis pratiquent dans un
                environnement neuf, bien équipé, inspirant.
              </p>
              <ul className="bullets">
                <li>Conventionnement IFAS du CHU de la Guadeloupe (DEAS)</li>
                <li>Partenariat GRETA CFA GIP-DAIFI (apprentissage DEAS)</li>
                <li>Terrain d'application IGEP & Région Guadeloupe (ADVF, DEAES)</li>
              </ul>
              <p className="metric-source" style={sourceMuted}>
                Sources : CHU Guadeloupe · GRETA CFA GIP-DAIFI · Région Guadeloupe
              </p>
            </div>

            <div className="card lever-card">
              <div className="lever-num">03</div>
              <h3>Qualité de vie & parcours lisibles</h3>
              <div className="orange-bar" style={barSmall}></div>
              <p>
                Le Village applique les trois leviers d'attractivité identifiés par l'ANACT :
                conditions de travail, qualité de vie, accès à la formation — déclinés à l'échelle
                d'une journée de travail.
              </p>
              <ul className="bullets">
                <li>Progression ADVF → DEAES → DEAS → coordinateur</li>
                <li>Espaces de répit pour les salariés eux-mêmes</li>
                <li>Supervision et analyse de pratiques mensuelles</li>
                <li>Marque employeur portée par les équipes</li>
              </ul>
              <p className="metric-source" style={sourceMuted}>
                Source : ANACT — Leviers d'attractivité médico-social (janvier 2025)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 40px' }}>
            <div className="supra">Anticiper les besoins de nos partenaires</div>
            <h2>Une valeur ajoutée pour les partenaires</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>
              Chaque acteur du territoire fait face à ses propres tensions. Le Village a été pensé
              pour y répondre par construction — pas après-coup.
            </p>
          </div>
          <div className="grid cols-4">
            <div className="card">
              <h4>Pour les collectivités</h4>
              <ul className="bullets">
                <li>Réponse territoriale structurante</li>
                <li>Innovation sociale</li>
                <li>Signal exportable</li>
              </ul>
            </div>
            <div className="card">
              <h4>Pour les financeurs</h4>
              <ul className="bullets">
                <li>Impact mesurable</li>
                <li>Modèle duplicable</li>
                <li>Innovation structurelle</li>
              </ul>
            </div>
            <div className="card">
              <h4>Pour l'ARS</h4>
              <ul className="bullets">
                <li>Prévention plutôt que réparation</li>
                <li>Réduction du non-recours</li>
                <li>Fluidification des parcours</li>
              </ul>
            </div>
            <div className="card">
              <h4>Pour les opérateurs</h4>
              <ul className="bullets">
                <li>Coordination facilitée</li>
                <li>Lisibilité des parcours</li>
                <li>Réduction des frictions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

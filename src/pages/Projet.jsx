import { useEffect } from 'react';

export default function Projet() {
  useEffect(() => {
    document.title = "Le projet — S'AIDER PLUS Village";
  }, []);

  return (
    <>
      <section className="page-hero page-hero-split">
        <div className="container">
          <div className="hero-split-grid">
            <div className="hero-split-text">
              <div className="supra">Contexte et enjeux</div>
              <h1>Un défi territorial qui s'accélère</h1>
              <div className="orange-bar"></div>
              <p>
                À l'horizon 2030, la Guadeloupe comptera environ 28 000 personnes âgées en
                situation de dépendance, soit une hausse significative par rapport à 2017.
              </p>
            </div>
            <img
              src="/assets/img/un-defi-territorial-2.webp"
              alt="Un défi territorial — Guadeloupe"
              className="hero-split-img"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-two-cols" style={{ alignItems: 'center' }}>
            <div>
              <p>Cette évolution implique :</p>
              <ul className="bullets">
                <li>une augmentation des besoins d'accompagnement,</li>
                <li>une pression accrue sur les aidants familiaux et les salariés aidants,</li>
                <li>un risque de ruptures de parcours,</li>
                <li>une nécessité de structurer des réponses territoriales innovantes.</li>
              </ul>
              <p>
                Face à ces enjeux, les dispositifs actuels restent souvent fragmentés,
                insuffisamment coordonnés et peu lisibles pour les publics concernés.
              </p>
              <p>
                Les établissements hospitaliers et les services administratifs, déjà fortement
                mobilisés, font face à des tensions liées à la croissance des besoins et à la
                complexification des parcours.
              </p>
              <p>
                Dans ce contexte, la création de nouvelles réponses adaptées est nécessaire pour
                anticiper les besoins futurs et sécuriser les trajectoires de vieillissement.
              </p>
              <p>
                Sans réponse anticipée et coordonnée, le coût humain, social et financier
                augmentera considérablement.
              </p>
            </div>
            <div>
              <div className="jobs-chart">
                <h3 className="jobs-chart-title">Emplois grand âge</h3>
                <div className="jobs-chart-bars">
                  <div className="jobs-bar jobs-bar-teal">
                    <div className="jobs-bar-value">5071</div>
                    <div className="jobs-bar-fill" style={{ height: '76%' }}></div>
                  </div>
                  <div className="jobs-bar jobs-bar-orange">
                    <div className="jobs-bar-value">6691</div>
                    <div className="jobs-bar-fill" style={{ height: '100%' }}></div>
                  </div>
                </div>
                <div className="jobs-chart-labels">
                  <div>2017</div>
                  <div>2030</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-teal">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' }}>
            <div className="supra">Notre réponse</div>
            <h2>Une réponse intégrée au service du territoire</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>
              S'AIDER PLUS Village propose une réponse intégrée : un tiers-lieu hybride, à la
              croisée du social, de la santé et de l'entreprise.
            </p>
          </div>
          <div className="grid cols-3">
            <div className="card">
              <h3>Prévention</h3>
              <p>Ateliers, parcours de sensibilisation, actions collectives.</p>
            </div>
            <div className="card">
              <h3>Accompagnement</h3>
              <p>Suivi social, coordination des parcours, soutien aux aidants.</p>
            </div>
            <div className="card">
              <h3>Répit & bien-être</h3>
              <p>Espaces dédiés, activités adaptées, solutions innovantes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
            <div className="supra">Méthodologie & feuille de route</div>
            <h2>Les étapes de la réalisation du projet</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>Survolez chaque étape pour découvrir les objectifs, partenaires à mobiliser et livrables associés.</p>
          </div>

          <div className="flip-grid">
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="flip-num">01</div>
                  <span className="flip-horizon">T0 → T0+6 mois</span>
                  <h3>Amorçage & diagnostic territorial</h3>
                  <div className="flip-line"></div>
                  <p>Rassembler les associations d'aidants et maisons d'accueil autour du projet.</p>
                </div>
                <div className="flip-back">
                  <span className="flip-badge">Phase 01</span>
                  <h4>Objectifs</h4>
                  <ul className="bullets">
                    <li>Cartographier l'offre existante et les besoins non couverts</li>
                    <li>Constituer un comité de préfiguration</li>
                    <li>Finaliser l'étude d'opportunité</li>
                  </ul>
                  <h4>Partenaires à mobiliser</h4>
                  <div className="flip-chips">
                    <span>Association Française des Aidants</span>
                    <span>UNA Guadeloupe</span>
                    <span>SAA / SAAD</span>
                    <span>CLIC</span>
                    <span>EHPAD</span>
                    <span>CCAS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="flip-num">02</div>
                  <span className="flip-horizon">T0+6 → T0+12 mois</span>
                  <h3>Alignement institutionnel & modèle économique</h3>
                  <div className="flip-line"></div>
                  <p>Rencontrer les acteurs publics et privés pour centraliser le besoin.</p>
                </div>
                <div className="flip-back">
                  <span className="flip-badge">Phase 02</span>
                  <h4>Objectifs</h4>
                  <ul className="bullets">
                    <li>Inscrire le projet dans le PRS et le schéma autonomie</li>
                    <li>Obtenir un soutien de principe des financeurs publics</li>
                    <li>Finaliser le modèle économique et le plan de financement</li>
                  </ul>
                  <h4>Partenaires à mobiliser</h4>
                  <div className="flip-chips">
                    <span>ARS Guadeloupe</span>
                    <span>CD 971</span>
                    <span>CFPPA</span>
                    <span>CNSA</span>
                    <span>Région</span>
                    <span>Préfecture / SGAR</span>
                    <span>CGSS / CARSAT</span>
                    <span>Banque des Territoires</span>
                    <span>AG2R, Malakoff, MGEN, MNT</span>
                    <span>Fondation de France</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="flip-num">03</div>
                  <span className="flip-horizon">T0+12 → T0+24 mois</span>
                  <h3>Structuration juridique, foncière & financière</h3>
                  <div className="flip-line"></div>
                  <p>Élaborer avec les différents acteurs la structure du complexe.</p>
                </div>
                <div className="flip-back">
                  <span className="flip-badge">Phase 03</span>
                  <h4>Objectifs</h4>
                  <ul className="bullets">
                    <li>Créer la holding, l'association et la SAS d'exploitation</li>
                    <li>Sécuriser le foncier via bail emphytéotique administratif</li>
                    <li>Déposer les dossiers d'investissement et d'appels à projets</li>
                  </ul>
                  <h4>Partenaires à mobiliser</h4>
                  <div className="flip-chips">
                    <span>SEMAG / SEMSAMAR</span>
                    <span>Banque des Territoires</span>
                    <span>Notaires & avocats droit public</span>
                    <span>Architectes & BE</span>
                    <span>France Active</span>
                    <span>ARS (AAP/AAC)</span>
                    <span>FEDER 2021-2027</span>
                    <span>France 2030</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="flip-num">04</div>
                  <span className="flip-horizon">T0+24 → T0+36 mois</span>
                  <h3>Préfiguration opérationnelle & Compagnon</h3>
                  <div className="flip-line"></div>
                  <p>
                    Créer le Compagnon en fonction des cahiers des charges des services publics et
                    de la demande des aidants.
                  </p>
                </div>
                <div className="flip-back">
                  <span className="flip-badge">Phase 04</span>
                  <h4>Objectifs</h4>
                  <ul className="bullets">
                    <li>Réaliser les travaux et aménagements</li>
                    <li>Développer et expérimenter le Compagnon (physique + numérique)</li>
                    <li>Lancer la phase pilote puis l'ouverture officielle</li>
                  </ul>
                  <h4>Partenaires à mobiliser</h4>
                  <div className="flip-chips">
                    <span>Opérateurs télésanté & e-santé</span>
                    <span>Mutuelles co-conceptrices</span>
                    <span>Prestataires numériques</span>
                    <span>IRTS, CNFPT</span>
                    <span>Collectivités d'implantation</span>
                    <span>Évaluateurs tiers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect } from 'react';

export default function Impact() {
  useEffect(() => {
    document.title = "Impact & déploiement — S'AIDER PLUS Village";
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="supra">Des échéances qui approchent</div>
          <h1>Une réponse complémentaire aux politiques publiques</h1>
          <div className="orange-bar"></div>
          <p>
            À l'image d'un satellite gravitant autour d'un écosystème existant, S'AIDER PLUS
            Village agit en synergie avec les institutions, en relais et en complément, sans se
            substituer aux dispositifs en place.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div className="split-text">
              <h2>Une infrastructure territoriale au service des parcours</h2>
              <div className="orange-bar"></div>
              <p>
                Le Village contribue à enrichir la dynamique territoriale en facilitant l'accès
                aux solutions adaptées aux besoins des aidants, des seniors et de leurs familles.
              </p>
              <ul className="bullets">
                <li>Fluidifier les parcours</li>
                <li>Réduire la fragmentation</li>
                <li>Amplifier l'efficacité des politiques publiques existantes</li>
                <li>Sécuriser le binôme aidant-aidé</li>
                <li>Prévenir les ruptures de parcours</li>
              </ul>
              <p>
                Le Village s'inscrit en complémentarité avec les acteurs sanitaires, sociaux et
                médico-sociaux.
              </p>
            </div>
            <img src="/assets/img/page_21_img_7663.webp" alt="Guadeloupe, territoire pilote" />
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' }}>
            <div className="supra">Organisation & partenariats</div>
            <h2>Une structure sécurisée au service du territoire</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>
              S'AIDER PLUS Village repose sur une architecture juridique claire et un écosystème
              de partenaires territoriaux à forte valeur ajoutée.
            </p>
          </div>

          <div className="grid cols-3">
            <div className="card">
              <h3>Structuration juridique</h3>
              <p>
                <strong>Une structure fondatrice</strong>
                <br />
                Détention de la marque et du modèle S'AIDER PLUS. Garante de la cohérence
                stratégique et de la propriété intellectuelle.
              </p>
              <p>
                <strong>Une association S'AIDER PLUS</strong>
                <br />
                Portage des actions d'intérêt général. Relation avec les institutions et
                dispositifs publics.
              </p>
              <p>
                <strong>Une société d'exploitation (SAS)</strong>
                <br />
                Gestion opérationnelle du site. Développement des partenariats économiques.
              </p>
              <p>
                <strong>Un partenaire immobilier (SEM / foncière)</strong>
                <br />
                Portage du foncier et réalisation de l'investissement immobilier. Mise à
                disposition via bail long terme.
              </p>
            </div>
            <div className="card">
              <h3>Partenariat territorial</h3>
              <p>
                <strong>Acteurs publics</strong>
                <br />
                Collectivités territoriales, ARS, institutions sociales. Chaque partenaire
                intervient dans son champ de compétence, dans une logique de complémentarité.
              </p>
              <p>
                <strong>Acteurs économiques et sociaux</strong>
                <br />
                Mutuelles, assurances, SEM, Banque des Territoires, Fonds européens (FEDER / FSE+).
              </p>
              <p>
                <strong>Une co-construction territoriale</strong>
                <br />
                Le projet S'AIDER PLUS Village s'inscrit dans une logique de co-construction avec
                les acteurs du territoire pour sécuriser le foncier, l'investissement et
                structurer un partenariat durable.
              </p>
            </div>
            <div className="card">
              <h3>Un projet au service de l'intérêt général</h3>
              <p>S'AIDER PLUS Village vise à :</p>
              <ul className="bullets">
                <li>Améliorer la qualité de vie des aidants et des seniors</li>
                <li>Prévenir les situations de rupture et d'épuisement</li>
                <li>Renforcer la coordination des acteurs</li>
                <li>Soutenir les entreprises face aux enjeux des salariés aidants</li>
              </ul>
              <p>Le projet contribue directement aux politiques publiques :</p>
              <ul className="bullets">
                <li>Prévention de la perte d'autonomie</li>
                <li>Soutien aux aidants</li>
                <li>Innovation sociale territoriale</li>
              </ul>
              <div
                style={{
                  marginTop: 20,
                  padding: 20,
                  background: 'var(--teal-dark)',
                  color: '#fff',
                  borderRadius: 'var(--radius)',
                }}
              >
                <strong style={{ color: '#fff' }}>Perspectives de déploiement</strong>
                <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: 8 }}>
                  Le Village est conçu comme un prototype territorial duplicable, avec une
                  capacité d'essaimage :
                </p>
                <ul className="bullets" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <li style={{ color: 'rgba(255,255,255,0.9)' }}>En Guadeloupe</li>
                  <li style={{ color: 'rgba(255,255,255,0.9)' }}>En Martinique</li>
                  <li style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Dans d'autres territoires ultramarins et hexagonaux
                  </li>
                </ul>
                <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: 8 }}>
                  L'objectif est de structurer, à terme, un réseau de Villages S'AIDER PLUS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-teal">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 40px' }}>
            <div className="supra">Transformer le grand âge en moteur de croissance</div>
            <h2>Un modèle à impact</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>
              S'AIDER PLUS Village ne constitue pas uniquement une réponse sociale au
              vieillissement : il agit comme une infrastructure économique territoriale à double
              impact, social et productif.
            </p>
          </div>

          <div className="grid cols-2">
            <div
              className="card"
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.15)',
                color: '#fff',
              }}
            >
              <h3 style={{ color: '#fff' }}>Consolider l'accompagnement</h3>
              <ul className="bullets">
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Soutien aux aidants</li>
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Accès modulable aux services</li>
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Coordination des parcours</li>
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Prévention de l'épuisement</li>
              </ul>
            </div>
            <div
              className="card"
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.15)',
                color: '#fff',
              }}
            >
              <h3 style={{ color: '#fff' }}>Moteur de silver économie</h3>
              <ul className="bullets">
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Création d'emplois directs et indirects</li>
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Émergence de nouveaux métiers</li>
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Activation d'un écosystème territorial</li>
                <li style={{ color: 'rgba(255,255,255,0.85)' }}>Innovation sociale et entrepreneuriale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 40px' }}>
            <div className="supra">La Guadeloupe devient site pilote</div>
            <h2>Un modèle transposable à d'autres territoires ultramarins</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
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

          <div className="quote" style={{ maxWidth: 720, margin: '48px auto 0' }}>
            <p className="quote-text">« Perspectives de déploiement »</p>
            <p>
              Le Village est conçu comme un prototype territorial duplicable : en Guadeloupe, en
              Martinique, dans d'autres territoires ultramarins et hexagonaux. L'objectif est de
              structurer, à terme, un réseau de Villages S'AIDER PLUS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

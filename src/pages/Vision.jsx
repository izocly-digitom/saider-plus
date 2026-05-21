import { useEffect } from 'react';

export default function Vision() {
  useEffect(() => {
    document.title = "Vision — S'AIDER PLUS Village";
  }, []);

  return (
    <>
      <section className="page-hero page-hero-split">
        <div className="container">
          <div className="hero-split-grid">
            <div className="hero-split-text">
              <div className="supra">Corinne David</div>
              <h1>
                Fondatrice du projet S'AIDER PLUS <span className="script">Village</span>
              </h1>
              <div className="orange-bar"></div>
              <p>À l'origine du projet S'AIDER PLUS Village se trouve un engagement profondément humain.</p>
            </div>
            <img
              src="/assets/img/fondatrice.jpeg"
              alt="Portrait de Corinne David, fondatrice de S'AIDER PLUS Village"
              className="hero-split-img"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-two-cols">
            <div>
              <p>
                Pendant dix-sept années, mon expérience d'aidante m'a confrontée aux réalités du
                vieillissement et aux défis auxquels sont confrontés les familles et les aidants.
                Cette expérience personnelle a façonné une sensibilité particulière aux situations
                de fragilité, mais aussi la conviction qu'il est possible de proposer des réponses
                plus humaines, mieux coordonnées et plus adaptées aux besoins des territoires.
              </p>
              <p>
                Au fil de mon parcours professionnel dans l'accompagnement social et familial, cet
                engagement s'est transformé en une vision : celle de structurer une organisation
                territoriale capable de soutenir les aidants, de préserver l'autonomie des
                personnes âgées et de sécuriser les parcours de vie.
              </p>
              <div className="quote">
                <p className="quote-text">
                  « Soutenir les aidants et accompagner le vieillissement avec dignité est pour moi
                  un engagement de vie. »
                </p>
              </div>
            </div>
            <div>
              <p>
                S'AIDER PLUS Village incarne cette vision : transformer l'art de vivre antillais en
                une infrastructure territoriale du bien-vieillir, profondément ancrée dans les
                réalités et les forces du territoire. Mon ambition est également d'en faire une
                signature territoriale du bien-vieillir et un modèle de silver économie
                reproductible, créateur de valeur sociale, économique et territoriale dans les
                territoires ultramarins.
              </p>
              <p>
                <strong>Une double légitimité rare</strong> — 17 ans de parcours professionnel
                spécialisé dans les questions sociales et familiales, enrichi par une expérience
                directe en tant qu'aidante salariée : connaissance des contraintes réelles,
                compréhension des besoins invisibles, proposition d'un accompagnement sur mesure.
              </p>
              <p>
                <strong>Une trajectoire qui fait preuve</strong> — transition assumée, projet porté
                sur cinq années, persévérance malgré les obstacles. Capacité à porter une vision,
                structurer un projet complexe, dialoguer avec les institutions, fédérer les acteurs
                et tenir dans la durée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="split reverse" style={{ alignItems: 'stretch' }}>
            <div className="split-text">
              <div className="supra">Identité locale et vision</div>
              <h2>Une infrastructure territoriale du bien-vieillir en Guadeloupe</h2>
              <div className="orange-bar"></div>
              <p className="lead">
                La Guadeloupe fait face à un défi démographique sans précédent. Au cœur de
                l'archipel, le projet « S'AIDER PLUS Village » s'inscrit comme une réponse
                architecturale et sociale innovante, ancrée dans les spécificités culturelles
                antillaises.
              </p>
              <p>
                Le Village propose une réponse intégrée, humaine et adaptée au territoire,
                combinant prévention, répit, coordination et qualité de vie, en cohérence avec les
                spécificités sociales, culturelles et environnementales.
              </p>
              <p>
                Le bien-vieillir en Guadeloupe s'inscrit dans un art de vivre caractérisé par la
                force du lien familial, la solidarité intergénérationnelle, la convivialité
                quotidienne, la transmission culturelle et une relation étroite à la nature.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src="/assets/img/page_03_img_497.webp"
                alt="Femme antillaise en madras traditionnel"
                style={{
                  width: '100%',
                  flex: '1 1 auto',
                  minHeight: 0,
                  objectFit: 'cover',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow)',
                }}
              />
              <div className="quote" style={{ marginTop: 20 }}>
                <p className="quote-text">« Cultiver le lien, préserver l'autonomie. »</p>
                <p>
                  Vieillir au pays entouré des siens, dans un environnement qui protège l'autonomie
                  et cultive le lien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split reverse">
            <div className="split-text">
              <div className="supra">Focus</div>
              <h2>Les salariés aidants</h2>
              <div className="orange-bar"></div>
              <p>
                Le Village S'AIDER PLUS accorde une attention particulière aux{' '}
                <strong>salariés aidants</strong>, reconnaissant leur double engagement
                professionnel et familial ainsi que leur rôle central dans le maintien à domicile
                des proches fragilisés.
              </p>
              <p>
                Souvent insuffisamment soutenus et peu visibles, ces acteurs essentiels du parcours
                de vie nécessitent un accompagnement spécifique visant à prévenir l'épuisement,
                sécuriser leur organisation quotidienne et préserver leur équilibre personnel et
                professionnel.
              </p>
              <p>
                Le Village se positionne comme un espace ressource dédié à leur soutien, proposant
                des parcours d'accompagnement, des services de coordination et des solutions de
                répit.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/page_18_diagram_preview_0.webp"
                alt="Focus salariés aidants"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow)',
                  marginBottom: 20,
                }}
              />
              <div className="quote" style={{ margin: 0 }}>
                <p className="quote-text">
                  « Un parcours lisible. Un interlocuteur qui connaît votre situation. »
                </p>
                <p>
                  Le Village coordonne, oriente et relie — pour que la continuité ne repose plus
                  sur l'aidant seul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

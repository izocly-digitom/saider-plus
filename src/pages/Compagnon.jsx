import { useEffect } from 'react';

export default function Compagnon() {
  useEffect(() => {
    document.title = "Le Compagnon — S'AIDER PLUS Village";
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="supra">Continuité de parcours</div>
          <h1>Le Compagnon : physique et numérique</h1>
          <div className="orange-bar"></div>
          <p>
            Le Village est complété par un dispositif de continuité de parcours, le « Compagnon
            S'AIDER+ » — point d'entrée unique, référent de proximité, application mobile.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div className="split-text">
              <h2>Simplifier, orienter, coordonner</h2>
              <div className="orange-bar"></div>
              <p className="lead">
                Le Compagnon accompagne les démarches administratives, les rendez-vous
                socio-médicaux et l'accès aux services du Village.
              </p>
              <p>
                On fait le diagnostic, on met en place le parcours de l'utilisateur. Le Compagnon
                ne remplace aucun acteur et renforce les interactions existantes.
              </p>
              <ul className="bullets">
                <li>Un point d'entrée unique pour toutes les formalités</li>
                <li>Une orientation facilitée</li>
                <li>Un suivi du parcours aidant-aidé</li>
                <li>Une coordination renforcée entre acteurs</li>
                <li>Une réduction du non-recours</li>
                <li>Une simplification administrative</li>
              </ul>
            </div>
            <img src="/assets/img/page_17_img_5921.webp" alt="Application mobile Compagnon S'AIDER+" />
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
            <h2>Trois piliers fonctionnels</h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
          </div>
          <div className="split">
            <img
              src="/assets/img/mobile%203.png"
              alt="Application mobile Compagnon S'AIDER+"
              style={{
                height: 'auto',
                maxHeight: 'none',
                minHeight: 0,
                objectFit: 'contain',
                background: 'transparent',
                boxShadow: 'none',
                borderRadius: 0,
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card">
                <h3>Accompagnement</h3>
                <p>
                  Suivi personnalisé du parcours aidant-aidé, centralisation des informations,
                  rappels et coordination avec les professionnels du territoire.
                </p>
              </div>
              <div className="card">
                <h3>Service</h3>
                <p>
                  Accès direct aux services du Village — hydrothérapie, prévention, répit,
                  activités — et aux ressources partenaires du territoire.
                </p>
              </div>
              <div className="card">
                <h3>Formation aidants</h3>
                <p>
                  Parcours de formation en ligne et en présentiel pour renforcer les compétences
                  des aidants familiaux et salariés aidants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

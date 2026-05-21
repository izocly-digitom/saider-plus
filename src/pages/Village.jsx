import { useEffect, useState } from 'react';
import Lightbox from '../components/Lightbox.jsx';

const SPACES = [
  {
    img: '/assets/img/page_06_img_2291.webp',
    alt: 'Jardin tropical du Village',
    supra: 'Nature',
    title: 'Le jardin tropical',
    body: "Deux hectares de jardin thérapeutique et paysager. Un espace de soin à ciel ouvert invitant à ralentir, respirer et retrouver un rapport apaisé à son corps et à son environnement. Cheminements balisés, zones de repos et carbets ouverts.",
  },
  {
    img: '/assets/img/page_07_img_2599.webp',
    alt: 'Centre de répit du Village',
    supra: 'Répit',
    title: 'Le centre de répit',
    body: "40 chambres ouvertes sur le jardin. Un lieu pensé pour la récupération, pas pour le soin médical. Le Centre accueille les aidants pour des séjours d'une semaine — une parenthèse structurante pour décrocher et récupérer.",
  },
  {
    img: '/assets/img/page_08_img_2993.webp',
    alt: "Centre d'hydrothérapie",
    supra: 'Bien-être',
    title: "Le centre d'hydrothérapie",
    body: "Deux bassins complémentaires : l'un adapté aux personnes à mobilité réduite, l'autre ouvert aux aidants et seniors portants. L'eau comme outil de prévention, de bien-être et de reconquête du corps.",
  },
  {
    img: '/assets/img/page_09_img_3363.webp',
    alt: 'Pôle de gestion sociale',
    supra: 'Coordination',
    title: 'Le pôle de Gestion sociale',
    body: "Au cœur du Village, le fil qui relie tout. Coordination des parcours entre les différents acteurs du territoire — services de santé, structures sociales, partenaires institutionnels — pour que personne ne tombe dans les interstices du système.",
  },
  {
    img: '/assets/img/page_10_img_3669.webp',
    alt: 'Pôle prévention',
    supra: 'Prévention',
    title: 'Le pôle Prévention',
    body: "Salle de sport adaptée, parcours sportif extérieur intégré au jardin, salle de formation pour ateliers collectifs et carbets dédiés au bien-être. Agir tôt pour préserver longtemps.",
  },
  {
    img: '/assets/img/page_11_img_3973.webp',
    alt: 'Pôle activités sociales et culturelles',
    supra: 'Vie collective',
    title: 'Le pôle Activités',
    body: "L'espace de vie collective du Village. Ateliers intergénérationnels, animations culturelles, conférences et rencontres — ouverts au territoire, faisant du Village un acteur de la vie locale.",
  },
  {
    img: '/assets/img/page_12_img_4317.webp',
    alt: 'Espace estime de soi',
    supra: 'Dignité',
    title: "L'Espace estime de soi",
    body: "Coiffure, soins du visage, beauté des mains et des pieds. Des prestations simples mais profondes dans leur effet — une forme de dignité accessible à tous, un pilier humain du Village.",
  },
  {
    img: '/assets/img/page_13_img_4657.webp',
    alt: 'Espace restauration',
    supra: 'Convivialité',
    title: "L'Espace restauration",
    body: "Un restaurant et un snack avec terrasse ouverts sur le jardin. Bien plus que des lieux de repas : des points de vie où seniors, aidants, familles et habitants se croisent et échangent naturellement.",
  },
];

export default function Village() {
  const [lb, setLb] = useState({ open: false, src: '', alt: '', caption: '' });

  useEffect(() => {
    document.title = "Le Village — S'AIDER PLUS Village";
  }, []);

  const openLb = (src, alt, caption) => setLb({ open: true, src, alt, caption });
  const closeLb = () => setLb((s) => ({ ...s, open: false }));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="supra">Un lieu où les séniors et les aidants se retrouvent</div>
          <h1>
            Présentation du <span className="script">Village</span>
          </h1>
          <div className="orange-bar"></div>
          <p>
            Le Village S'AIDER PLUS est une plateforme territoriale d'orchestration dédiée à la
            prévention de la fragilité, au soutien des aidants et au maintien de l'autonomie.
          </p>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="split plan-split">
            <div className="split-text">
              <p>
                Il mobilise l'ensemble des acteurs du territoire autour de parcours de vie
                sécurisés, en jouant un rôle de tiers de confiance pour les familles, les aidants
                et les acteurs du territoire.
              </p>
              <p>
                Il propose des parcours personnalisés associant diagnostics, ateliers de prévention,
                service social et coordination de services adaptés aux besoins des seniors, aidants
                et familles, avec l'appui du <strong>Compagnon de vie</strong>, application et
                référent de proximité permettant de centraliser les informations, coordonner les
                besoins, organiser les rendez-vous et faciliter l'accès aux événements et services
                du Village.
              </p>
              <p>
                Le Village fonctionne comme un hub d'orientation et de coordination, facilitant
                l'accès aux ressources du territoire grâce à un accompagnement individualisé et à
                des partenariats publics, privés et associatifs.
              </p>
            </div>
            <img
              src="/assets/img/page_05_img_1873.webp"
              alt="Plan masse du Village S'AIDER PLUS"
              className="plan-full"
              onClick={() =>
                openLb(
                  '/assets/img/page_05_img_1873.webp',
                  "Plan masse du Village S'AIDER PLUS",
                  "Plan masse du Village S'AIDER PLUS"
                )
              }
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' }}>
            <div className="supra">Huit espaces complémentaires</div>
            <h2>
              Les espaces du <span className="script">Village</span>
            </h2>
            <div className="orange-bar" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            <p>Pensés pour la prévention, le lien, la dignité et le bien-être — en continuité avec l'art de vivre antillais.</p>
          </div>
          <div className="grid cols-3">
            {SPACES.map((s) => (
              <article
                key={s.title}
                className="card card-media"
                onClick={() => openLb(s.img, s.alt, s.title)}
              >
                <img src={s.img} alt={s.alt} />
                <div className="card-body">
                  <div className="supra">{s.supra}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-teal">
        <div className="container">
          <div className="split" style={{ alignItems: 'center' }}>
            <div className="split-text">
              <div className="supra">Créer le cadre préventif</div>
              <h2>La nature insulaire comme levier de santé</h2>
              <div className="orange-bar"></div>
              <p>
                Le territoire guadeloupéen bénéficie d'un environnement naturel exceptionnel :
                végétation luxuriante, proximité constante de la mer, rivières, climat favorable
                aux activités extérieures, alimentation riche en produits locaux.
              </p>
              <p>
                Autant de déterminants majeurs de santé favorisant l'activité physique naturelle,
                la réduction du stress, l'apaisement psychologique, le maintien du lien social, la
                stimulation sensorielle et la prévention des pathologies chroniques.
              </p>
              <div
                className="quote"
                style={{
                  marginTop: 28,
                  background: 'rgba(255,255,255,0.1)',
                  borderLeftColor: 'var(--teal-light)',
                }}
              >
                <p className="quote-text" style={{ color: '#fff' }}>
                  « La nature soigne. Venez l'expérimenter à votre rythme. »
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Le jardin tropical offre un cadre de prévention vivant : marche douce, air libre,
                  lien social.
                </p>
              </div>
            </div>
            <img
              src="/assets/img/page_14_img_5155.webp"
              alt="La nature insulaire comme levier de santé"
              style={{
                width: '100%',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow)',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>

      <Lightbox open={lb.open} src={lb.src} alt={lb.alt} caption={lb.caption} onClose={closeLb} />
    </>
  );
}

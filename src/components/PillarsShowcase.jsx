import { useEffect, useState } from 'react';

const PILLARS = [
  {
    num: '01',
    title: 'Vie sociale & culturelle',
    img: '/assets/img/vie-social-et-culturelle.webp',
    alt: 'Famille en activité intergénérationnelle',
    body: "Lien social, activités intergénérationnelles, ancrage dans les traditions antillaises et événements du territoire. Un pilier qui place la convivialité et la transmission au cœur du bien-vieillir.",
  },
  {
    num: '02',
    title: 'Nature & Apaisement',
    img: '/assets/img/nature-et-apaisement.webp',
    alt: 'Jardin thérapeutique et bassin zen',
    body: "Jardins thérapeutiques tropicaux, espaces extérieurs favorisant la reconnexion à l'environnement naturel et la réduction du stress.",
  },
  {
    num: '03',
    title: 'Santé de proximité',
    img: '/assets/img/sante-et-proximit%C3%A9.webp',
    alt: 'Salle de sport adaptée du Village',
    body: "Prévention active, coordination des parcours, réduction des ruptures et maintien de l'autonomie au plus près des habitants.",
  },
  {
    num: '04',
    title: 'Estime de soi & Dignité',
    img: '/assets/img/estime-de-soi.webp',
    alt: 'Espace estime de soi, coiffure et beauté',
    body: "Espaces dédiés au bien-être, à l'expression de soi et à la reconnaissance de l'identité individuelle.",
  },
  {
    num: '05',
    title: 'Répit & Récupération',
    img: '/assets/img/repis-et-recuperation.webp',
    alt: 'Centre de répit et de récupération',
    body: "Solutions modulables permettant aux aidants et personnes accompagnées de souffler et de récupérer durablement.",
  },
];

export default function PillarsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 860px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const handleEnter = (i) => {
    if (!isMobile) setActiveIndex(i);
  };

  const handleClick = (i) => {
    if (isMobile) {
      setActiveIndex((current) => (current === i ? -1 : i));
    } else {
      setActiveIndex(i);
    }
  };

  return (
    <div className="pillars-showcase">
      {PILLARS.map((p, i) => (
        <div key={p.num} className={`pillar-item${activeIndex === i ? ' active' : ''}`}>
          <button
            className="pillar-tab"
            type="button"
            onMouseEnter={() => handleEnter(i)}
            onClick={() => handleClick(i)}
          >
            <span className="pillar-num">{p.num}</span>
            <span className="pillar-title">{p.title}</span>
          </button>
          <div className="pillar-panel">
            <img src={p.img} alt={p.alt} />
            <div className="pillar-panel-body">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

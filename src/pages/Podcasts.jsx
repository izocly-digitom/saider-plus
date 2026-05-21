import { useEffect } from 'react';

/*
 * Page Podcasts — coquille pour les futurs épisodes.
 *
 * Une fois la plateforme choisie (Spotify, Apple, Ausha, Acast, RSS, etc.) :
 * - Pour des embeds (Spotify/Apple) : remplir EPISODES avec embedUrl pointant
 *   sur l'iframe d'embed officiel ; la carte rendra l'iframe automatiquement.
 * - Pour un flux RSS : remplacer l'array statique par un fetch au build
 *   (vite plugin / fonction serverless) qui parse le flux et alimente les cartes.
 *
 * Page volontairement non listée dans la nav et marquée noindex tant qu'elle
 * n'est pas publique.
 */
const EPISODES = [
  // {
  //   id: '01',
  //   title: 'Titre de l'épisode',
  //   date: '2026-06-01',
  //   duration: '32 min',
  //   description: 'Court résumé de l\'épisode...',
  //   embedUrl: 'https://open.spotify.com/embed/episode/XXXXXXXX',
  //   platform: 'spotify',
  // },
];

export default function Podcasts() {
  useEffect(() => {
    document.title = "Podcasts — S'AIDER PLUS Village";
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="supra">Voix du projet</div>
          <h1>Podcasts S'AIDER PLUS</h1>
          <div className="orange-bar"></div>
          <p>
            Conversations, témoignages d'aidants, regards d'experts et coulisses du Village —
            retrouvez les épisodes du projet au fil de son avancement.
          </p>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          {EPISODES.length === 0 ? (
            <div
              className="card card-lead"
              style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}
            >
              <h4>Bientôt en ligne</h4>
              <div className="orange-bar" style={{ width: 40, height: 3, margin: '10px auto 16px' }}></div>
              <p>
                Les premiers épisodes seront publiés prochainement. Cette page accueillera la liste
                des épisodes et les lecteurs embarqués dès qu'une plateforme de diffusion aura été
                choisie.
              </p>
            </div>
          ) : (
            <div className="grid cols-2">
              {EPISODES.map((ep) => (
                <article key={ep.id} className="card">
                  <div className="supra">
                    Épisode {ep.id}
                    {ep.date ? ` · ${new Date(ep.date).toLocaleDateString('fr-FR')}` : ''}
                    {ep.duration ? ` · ${ep.duration}` : ''}
                  </div>
                  <h3>{ep.title}</h3>
                  <div className="orange-bar" style={{ width: 40, height: 3, margin: '10px 0 16px' }}></div>
                  {ep.description && <p>{ep.description}</p>}
                  {ep.embedUrl && (
                    <div className="podcast-embed" style={{ marginTop: 14 }}>
                      <iframe
                        src={ep.embedUrl}
                        title={`Lecteur ${ep.platform || 'podcast'} — ${ep.title}`}
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        style={{ width: '100%', height: 232, border: 0, borderRadius: 'var(--radius)' }}
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

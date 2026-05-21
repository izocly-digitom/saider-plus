# S'AIDER PLUS Village — site

Site institutionnel de S'AIDER PLUS Village : une infrastructure territoriale du bien-vieillir en Guadeloupe.

Application **React (Vite)** servie par un petit serveur **Express**, qui héberge aussi l'endpoint `/api/contact` pour le formulaire de contact (envoi via SMTP avec `nodemailer`).

---

## Stack

- **Front** : React 18, React Router 6, Vite 5
- **Back** : Express 4 (sert le SPA + `/api/contact`)
- **Mail** : Nodemailer (n'importe quel fournisseur SMTP — Gmail, OVH, Brevo, Mailjet…)
- **Config** : `dotenv` (fichier `.env` local, non versionné)

## Prérequis

- **Node.js ≥ 20** (testé sur 20 et 24). `npm` est fourni avec.
- Un compte mail SMTP pour l'envoi des messages du formulaire (cf. section _Configuration mail_).

## Installation

```bash
npm install
```

## Configuration

Copier `.env.example` en `.env` puis remplir :

```env
PORT=3000

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false   # true uniquement si le port est 465
SMTP_USER=
SMTP_PASS=

CONTACT_TO=         # adresse qui reçoit les messages du formulaire
CONTACT_FROM=       # optionnel — si vide, SMTP_USER est utilisé comme expéditeur
```

`.env` est **gitignoré**, ne le committez jamais.

### Configuration mail — quel fournisseur ?

Le serveur a juste besoin d'un **compte technique** pour se connecter en SMTP et envoyer les mails. Le visiteur ne voit jamais ces identifiants.

| Fournisseur | `SMTP_HOST`          | `SMTP_PORT` | `SMTP_SECURE` | Note                                                                                   |
| ----------- | -------------------- | ----------- | ------------- | -------------------------------------------------------------------------------------- |
| Gmail       | `smtp.gmail.com`     | `587`       | `false`       | `SMTP_PASS` doit être un **App Password** (2FA requise sur le compte). 16 caractères. |
| OVH         | `ssl0.ovh.net`       | `465`       | `true`        | Identifiants = ceux du compte mail OVH.                                                |
| Brevo       | `smtp-relay.brevo.com` | `587`     | `false`       | User/pass dédiés générés depuis le dashboard Brevo.                                    |
| Mailjet     | `in-v3.mailjet.com`  | `587`       | `false`       | API key / secret = user / pass SMTP.                                                   |

Tant que `SMTP_USER` ou `SMTP_PASS` est vide, `/api/contact` renvoie `500` avec un message clair listant les variables manquantes — pratique pour diagnostiquer.

## Lancement

### Développement

```bash
npm run dev
```

Sert le SPA (HMR Vite) **et** l'API sur **http://localhost:3000** (ou `PORT` si défini). Vite est monté en middleware dans Express, donc tout est sur la même origine.

Le serveur redémarre automatiquement quand `server.js`, `server/**` ou `.env` change. Le code front se recharge en HMR sans redémarrage.

### Production

```bash
npm run build   # vite build → dist/
npm run start   # node server.js --prod
```

En prod, Express sert `dist/` en statique avec fallback SPA + `/api/contact`. Aucun process Vite ne tourne.

## Structure du projet

```
.
├── index.html                # Entry Vite
├── server.js                 # Serveur Express (dev: + Vite middleware ; prod: + dist/)
├── server/
│   └── contact.js            # Handler /api/contact (sanitization + envoi SMTP)
├── public/
│   └── assets/img/           # Images, servies à /assets/img/...
└── src/
    ├── main.jsx              # Mount React + BrowserRouter
    ├── App.jsx               # Déclaration des routes
    ├── styles/
    │   └── site.css          # Design system global (variables, layout, composants)
    ├── components/           # Composants partagés
    │   ├── Layout.jsx
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── ScrollToTop.jsx
    │   ├── PillarsShowcase.jsx  # Tabs interactifs des 5 piliers (home)
    │   ├── Lightbox.jsx         # Overlay image (page Village)
    │   ├── TimelineEntry.jsx    # Frise animée (page Historique)
    │   └── ContactForm.jsx      # Formulaire → POST /api/contact
    └── pages/                # Une page = un .jsx
        ├── Home.jsx
        ├── Vision.jsx
        ├── Historique.jsx
        ├── Projet.jsx
        ├── Village.jsx
        ├── Compagnon.jsx
        ├── Impact.jsx
        ├── ImpactStructure.jsx
        ├── ImpactModele.jsx
        ├── ImpactDuplication.jsx
        ├── Contact.jsx
        ├── Podcasts.jsx      # Cachée (non listée dans la nav, noindex)
        └── NotFound.jsx
```

## Routes

| Chemin                  | Page                | Visibilité      |
| ----------------------- | ------------------- | --------------- |
| `/`                     | Accueil             | Nav             |
| `/vision`               | Vision              | Nav             |
| `/historique`           | Historique          | Nav (sous-menu) |
| `/projet`               | Le projet           | Nav (sous-menu) |
| `/impact-structure`     | Structure           | Nav (sous-menu) |
| `/impact-modele`        | Modèle à impact     | Nav (sous-menu) |
| `/impact-duplication`   | Territoires ultramarins | Nav (sous-menu) |
| `/village`              | Le Village          | Nav             |
| `/compagnon`            | Compagnon           | Nav             |
| `/contact`              | Contact             | Nav             |
| `/podcasts`             | Podcasts            | **Cachée** (URL directe uniquement, `noindex`) |
| `*`                     | 404                 | —               |

## Formulaire de contact

Le composant `ContactForm` POSTe sur `/api/contact`. Champs : nom, email, organisation, profil, sujet, message, + un champ caché `website` (honeypot anti-bot).

Côté serveur (`server/contact.js`) :

- Toutes les variables `REQUIRED_ENV` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`) doivent être définies, sinon `500`.
- Sanitization stricte : CR/LF + control chars supprimés sur les champs de header (anti-injection SMTP), control chars supprimés sur le body en gardant les `\n`, length caps par champ, `escapeHtml` sur le template HTML.
- Honeypot : si `website` est rempli, le serveur répond `200` silencieusement (le bot n'a pas de signal).
- `Reply-To` est l'email saisi → quand on clique "Répondre" dans Gmail, on répond à la bonne personne.

## Newsletter

Le bloc d'inscription à la newsletter est présent dans le footer mais **masqué** (`display: none`) tant qu'un service (Resend, Brevo, Mailchimp…) n'est pas branché. Pour l'activer :

1. Retirer le `style={{ display: 'none' }}` sur le `<div className="footer-newsletter">` dans `src/components/Footer.jsx`.
2. Câbler l'`onSubmit` du formulaire vers un nouvel endpoint (`/api/newsletter`) ou directement vers l'API du fournisseur.

## Podcasts

La page `/podcasts` est **non listée dans la nav** et marquée `noindex` tant qu'il n'y a pas d'épisodes. Pour ajouter des épisodes :

1. Ouvrir `src/pages/Podcasts.jsx`.
2. Pousser des objets dans le tableau `EPISODES` (un par épisode).
3. Pour un embed Spotify : copier l'URL `https://open.spotify.com/embed/episode/XXXX` dans le champ `embedUrl`. La carte rendra un iframe automatiquement. Idem Apple Podcasts.
4. Quand la page est prête à être publique, retirer la balise `<meta name="robots" content="noindex">` dynamique dans le `useEffect`, et ajouter un lien dans `src/components/Header.jsx`.

## Conventions

- Toutes les images sont dans `public/assets/img/` et référencées en URL absolue (`/assets/img/...`).
- Les liens internes utilisent `<Link to="/...">` (React Router). Les liens `mailto:` et externes restent en `<a>`.
- Le CSS est centralisé dans `src/styles/site.css` (pas de CSS-in-JS, pas de modules). Variables de design dans `:root`.
- Un design "centered" pour les `page-hero` est disponible via la classe utilitaire `.page-hero.centered` (déjà appliquée sur Contact et Podcasts).

## Déploiement

Le projet **n'utilise plus Vercel**. Le serveur Express se déploie sur n'importe quel hébergeur Node.js (VPS, Render, Railway, Fly.io, OVH VPS, Scaleway…).

Recette générique :

```bash
git clone <repo>
cd site
npm ci
cp .env.example .env
# remplir les variables SMTP + CONTACT_TO
npm run build
NODE_ENV=production npm run start
```

Le serveur écoute sur `PORT` (défaut `3000`). Mettre un reverse proxy (nginx, Caddy, traefik) devant pour HTTPS.

## Licence

Propriétaire — S'AIDER PLUS, 2026.

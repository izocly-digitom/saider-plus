# HANDOFF — S'AIDER PLUS Village mini-site

## État

Mini-site statique multi-pages dans `saiderplus-app/site/`, déployé via Vercel (`outputDirectory: saiderplus-app/site`).

## Pages (8)

| Fichier | Rôle |
|---|---|
| `index.html` | Hero + contexte 28 000 + showcase 5 piliers (tabs/panels) + tiers-lieu hybride + CTA |
| `vision.html` | Fondatrice Corinne David (photo `fondatrice.jpeg`) + double légitimité + identité locale |
| `historique.html` | Timeline verticale animée (IntersectionObserver + pulse), toutes cards à droite, pastilles dates alignées en haut |
| `projet.html` | Contexte démographique (image `page_04_img_1061.png`) + focus salariés aidants (image `page_18_diagram_preview_0.webp` au-dessus du quote) |
| `village.html` | Présentation du Village (plan masse) + 8 espaces en cards cliquables → lightbox |
| `compagnon.html` | App Compagnon S'AIDER+ |
| `impact.html` | Complémentarité politiques publiques, structure, silver éco, duplication |
| `contact.html` | Co-construisons demain + QR placeholder + mailto |

## Design system — [assets/css/site.css](assets/css/site.css)

- **Tokens `:root`** : `--teal-dark #0A515A` / `--teal-mid #0F7886` / `--teal-light #15ADC0` / `--orange #FA9446` / `--bg-soft #f6f8f9`
- **Fonts** : Inter (body) · Playfair Display (titres) · Miniver (accents script)
- **Layout** : `.container` max 1200px padding 60px · `.split` / `.split.reverse` grid 1.1/1fr
- **Boutons** : tous `.btn` et `.btn.outline` rendent **orange plein** (pas de transparent)
- **Nav dropdown** : `.nav-group` avec `<span class="nav-trigger">Vision</span>` (non cliquable) + `.submenu` en absolute révélé au `:hover`
- **Pillars showcase** (`index.html`) : grille 320px/1fr, `display: contents` sur `.pillar-item` pour placer tabs col 1 et panel col 2, bordure tirets teal-light, accordéon sur mobile (<860px) via JS
- **Timeline** (`historique.html`) : ligne verticale à `left: 60px`, cards toutes à droite, pastilles `.timeline-date` cercle 92px orange avec `@keyframes date-pulse` déclenchée par `.visible`
- **Lightbox** (`village.html`) : overlay rgba(teal, .92), img contain max 82vh, fermeture × / clic hors / Échap

## JS — [assets/js/site.js](assets/js/site.js)

- Burger menu
- Pillars showcase : `mouseenter` = activate (desktop), `click` = toggle (mobile via matchMedia 860px)
- Lightbox : bind sur `.card-media`
- Timeline : IntersectionObserver threshold 0.25 → ajoute `.visible`

## Images clés

- Hero index : `entrée complexe.jpg` (URL-encodé `entr%C3%A9e%20complexe.jpg`), dégradé gauche allégé (rgba 0.82 → 0.1)
- Piliers : `vie-social-et-culturelle.webp` · `nature-et-apaisement.webp` · `sante-et-proximité.webp` · `estime-de-soi.webp` · `repis-et-recuperation.webp`
- Plan masse village : `page_05_img_1873.webp` (classe `.plan-full` → `object-fit: contain`)
- Logo header : `Logo SAIDERPLUS couleur.png` (encodé `Logo%20SAIDERPLUS%20couleur.png`)

## Dernier état en cours

Alignement pastilles timeline en haut des cards : `.timeline-entry { align-items: start }` + `.timeline-marker { align-self: start; padding-top: 24px }`. **À vérifier visuellement** au prochain démarrage.

## Pending / à faire

- [ ] Remplacer QR code placeholder de `contact.html` par une vraie image
- [ ] Confirmer l'email final (`contact@saiderplus-village.fr` placeholder)
- [ ] Supprimer dossier parasite `saiderplus-app/saiderplus-app/` (créé accidentellement en début de session)
- [ ] Vérifier le déploiement Vercel avec le nouveau contenu

## Archive

L'ancienne réplique slide-deck reste dans `saiderplus-app/index.html` + `saiderplus-app/slides_export/` — **ne pas toucher**.

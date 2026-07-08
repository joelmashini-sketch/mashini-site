# Site web Mashini & Associés

Site vitrine premium du cabinet Mashini & Associés (audit, expertise comptable,
conseil financier et intelligence économique), construit avec Next.js (App
Router) + TypeScript + Tailwind CSS, exporté en site statique pour un
déploiement sur Azure Static Web Apps.

## Tester en local

Prérequis : [Node.js](https://nodejs.org) 20+ et npm.

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000). Les pages se
rechargent automatiquement à chaque modification.

> **Note technique** : les scripts `dev`/`build`/`start` invoquent Next.js via
> `node ./node_modules/next/dist/bin/next ...` plutôt que `next dev` direct.
> C'est nécessaire car le nom du dossier OneDrive contient un `&`
> (« …MASHINI & Associés… »), ce qui casse les raccourcis (`.cmd`/`.ps1`)
> générés par npm dans `node_modules/.bin` sous Windows. Le résultat est
> strictement identique, `npm run dev` et `npm run build` fonctionnent
> normalement.

Pages disponibles : Accueil (`/`), Cabinet (`/cabinet`), Services
(`/services` et `/services/[slug]` pour chacun des 8 services), Economic
Intelligence (`/economic-intelligence` et ses articles), Investment Score
(`/investment-score`), Growth Desk (`/growth-desk`), Contact (`/contact`).

Le contenu (services, articles, équipe, score) est centralisé dans
[`src/lib/data.ts`](src/lib/data.ts) — modifiable sans toucher au code des
pages.

## Vérifier le build de production

```bash
npm run build
```

Cette commande génère un export 100 % statique dans le dossier `out/`
(`output: "export"` dans `next.config.ts`). Pour prévisualiser l'export tel
qu'il sera servi en production :

```bash
npx serve out
```

## Déploiement sur Azure Static Web Apps

Le projet est prêt pour Azure Static Web Apps :

- `next.config.ts` : export statique (`output: "export"`), images non
  optimisées (pas de serveur d'image nécessaire), URLs avec slash final.
- `staticwebapp.config.json` : routage, page 404 personnalisée, headers de
  cache et de sécurité.
- `.github/workflows/azure-static-web-apps.yml` : pipeline de build et
  déploiement automatique à chaque push sur `main`.

### Étapes de mise en production

1. **Pousser le projet sur GitHub** (créer un dépôt, ex. `mashini-site`, et y
   pousser ce dossier).
2. **Créer la ressource Azure Static Web Apps** :
   - Portail Azure → *Créer une ressource* → *Static Web App*.
   - Plan : *Standard* (ou *Free* pour démarrer).
   - Source : *GitHub*, sélectionner le dépôt et la branche `main`.
   - Paramètres de build :
     - Build Presets : `Next.js (Static HTML Export)` ou `Custom`
     - App location : `/`
     - Output location : `out`
   - Azure génère automatiquement un fichier de workflow GitHub Actions et le
     secret `AZURE_STATIC_WEB_APPS_API_TOKEN` dans le dépôt. Vous pouvez soit
     garder celui généré par Azure, soit utiliser celui fourni dans ce projet
     (`.github/workflows/azure-static-web-apps.yml`) en collant le token
     d'API dans **Settings → Secrets and variables → Actions** du dépôt
     GitHub sous le nom `AZURE_STATIC_WEB_APPS_API_TOKEN`.
3. **Domaine personnalisé** : dans la ressource Static Web App → *Domaines
   personnalisés*, ajouter `www.mashini-associes.com` (ou le domaine choisi)
   et suivre la validation DNS (CNAME).
4. Chaque `git push` sur `main` redéploie automatiquement le site.

### Alternative en ligne de commande (Azure CLI)

```bash
az login
az staticwebapp create \
  --name mashini-site \
  --resource-group <votre-resource-group> \
  --source https://github.com/<votre-org>/mashini-site \
  --location "West Europe" \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github
```

## Prochaines étapes suggérées

- Brancher le formulaire de contact sur un service d'envoi d'email (ex. Azure
  Function + SendGrid/Resend, ou Power Automate) — actuellement le formulaire
  est statique côté front.
- Remplacer les visuels SVG abstraits par des photographies professionnelles
  une fois disponibles.
- Activer la version anglaise (`EN`) : l'architecture du contenu
  (`src/lib/data.ts`) est conçue pour accueillir une traduction sans refonte.
- Brancher Google Analytics (ajout d'un script dans `src/app/layout.tsx`).

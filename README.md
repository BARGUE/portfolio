# Portfolio — Maylvin Bargue

Portfolio personnel de **Maylvin Bargue**, développeur Front-End (5+ ans), expert React et Next.js. Le site présente mon parcours, mes compétences, une sélection de projets et mon CV, dans une interface moderne, animée et responsive.

🔗 [linkedin.com/in/maylvin-bargue](https://linkedin.com/in/maylvin-bargue) · ✉️ maylkirian@gmail.com

## ✨ Fonctionnalités

- **Hero animé** avec dégradés en mouvement (Framer Motion)
- **Section À propos** — parcours, expériences et approche produit
- **Projets** — cartes détaillées avec contexte, solution, résultats et stack
- **Compétences** — Front-End, Mobile & Back-end, Outils & IA
- **CV** consultable en ligne et téléchargeable
- **Design responsive**, thème sombre et composants accessibles (Radix UI)

## 🛠️ Stack technique

| Domaine        | Technologies                                      |
| -------------- | ------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router)     |
| Langage        | TypeScript                                        |
| UI             | React 19, Tailwind CSS 4, Radix UI, shadcn/ui     |
| Animations     | Framer Motion                                     |
| Icônes         | Lucide React                                      |
| Data / State   | TanStack Query, React Hook Form                   |

## 🚀 Démarrage

Prérequis : [Node.js](https://nodejs.org) 18+ et npm.

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📜 Scripts disponibles

| Commande        | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Démarre le serveur de développement            |
| `npm run build` | Génère la version de production                |
| `npm run start` | Lance la version de production                 |
| `npm run lint`  | Analyse le code avec ESLint                    |

## 📁 Structure du projet

```
src/
├── app/              # Routes (App Router) : page d'accueil, /cv, layout
├── components/       # Sections (Hero, About, Projects, Skills, CV, Footer)
│   └── ui/           # Composants réutilisables (shadcn/ui)
├── hooks/            # Hooks personnalisés
├── lib/              # Données (projets, compétences) et utilitaires
└── providers/        # Providers globaux (thème, React Query)
```

## 📦 Déploiement

Le projet est optimisé pour un déploiement sur [Vercel](https://vercel.com/new). Il suffit d'importer le dépôt et de lancer le build — aucune configuration supplémentaire n'est requise.

---

© 2026 Maylvin Bargue — Tous droits réservés.

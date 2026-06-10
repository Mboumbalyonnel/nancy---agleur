# 💍 Nancy & Agleur — Site de mariage

## Installation

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

---

## Ajouter les photos

### 1. Photos du fond (hero slideshow)
Place **2 photos** dans `/public/images/` :
- `bg1.jpg` — première photo de fond
- `bg2.jpg` — deuxième photo de fond

Les photos défileront automatiquement toutes les 5 secondes.

### 2. Photos des mariés (cadres hero)
Place les photos dans `/public/images/` :
- `nancy.jpg`
- `agleur.jpg`
- `couple.jpg`

Puis dans `components/Hero.jsx`, remplace chaque `div.photoPlaceholder` par :
```jsx
<Image src="/images/nancy.jpg" alt="Nancy" fill style={{ objectFit: 'cover' }} />
```

---

## Modifier le contenu

| Ce que tu veux changer | Fichier à modifier |
|---|---|
| Noms, date, verset | `components/Hero.jsx` |
| Programme horaires | `components/Programme.jsx` |
| Menu | `components/Menu.jsx` |
| Lieux & adresses | `components/Lieux.jsx` |
| Dress code | `components/DressCode.jsx` |
| Plan de tables | `data/tables.js` |
| Couleurs globales | `styles/globals.css` (variables CSS) |

---

## Déploiement sur Vercel

```bash
# 1. Push sur GitHub
git init
git add .
git commit -m "site mariage nancy-agleur"
git remote add origin https://github.com/TON_USERNAME/nancy-agleur.git
git push -u origin main

# 2. Va sur vercel.com → Import → Sélectionne ton repo → Deploy
```

Tu obtiens une URL comme `nancy-agleur.vercel.app` à partager !

---

## Structure du projet

```
/components
  Navbar.jsx / .module.css
  Hero.jsx / .module.css        ← slideshow + photos mariés
  Programme.jsx / .module.css   ← timeline
  Menu.jsx / .module.css        ← menu gastronomique
  Lieux.jsx / .module.css       ← cartes Google Maps
  DressCode.jsx / .module.css   ← dress codes
  Tables.jsx / .module.css      ← plan de table + recherche
  Footer.jsx / .module.css

/data
  tables.js                     ← toutes les 27 tables

/pages
  _app.js
  index.js                      ← page principale

/public/images
  bg1.jpg  ← ⚠️ À ajouter
  bg2.jpg  ← ⚠️ À ajouter
  nancy.jpg   ← ⚠️ À ajouter
  agleur.jpg  ← ⚠️ À ajouter
  couple.jpg  ← ⚠️ À ajouter

/styles
  globals.css                   ← tokens de couleur, polices
```

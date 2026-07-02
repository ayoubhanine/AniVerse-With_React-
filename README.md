# 🎌 AniVerse

AniVerse est une application web développée avec **React**, permettant d'explorer un catalogue d'animes grâce à l'API **Jikan (MyAnimeList)**. Les utilisateurs peuvent consulter les détails des animes et des personnages, gérer leurs favoris, attribuer des notes, organiser leur bibliothèque personnelle et consulter un tableau de bord avec leurs statistiques.

---

## 🚀 Fonctionnalités

### 🏠 Landing Page

- Hero Section
- Affichage des animes tendances
- Affichage des animes saisonniers
- Navigation vers la liste des animes

---

### 🎥 Liste des Animes

- Affichage des animes
- Recherche par nom
- Filtrage par genre
- Filtrage par type
- Pagination
- Accès aux détails d'un anime

---

### 📖 Détails d'un Anime

Affichage des informations :

- Image
- Titre
- Synopsis
- Score
- Nombre d'épisodes
- Statut
- Genres
- Studios
- Trailer (si disponible)

Actions disponibles :

- Ajouter aux favoris
- Ajouter à la bibliothèque
- Ajouter une note
- Voir les personnages

---

### 👥 Personnages

#### Liste des personnages d'un anime

- Image
- Nom
- Rôle (Main / Supporting)

#### Profil d'un personnage

- Image
- Nom
- Description
- Animes associés

---

### ❤️ Favoris

L'utilisateur peut :

- Ajouter un anime aux favoris
- Supprimer un anime des favoris
- Consulter sa liste de favoris

Les données sont sauvegardées avec **JSON Server**.

---

### ⭐ Notes personnelles

L'utilisateur peut :

- Donner une note de 1 à 10
- Ajouter une note personnelle
- Modifier une note
- Supprimer une note

Les données sont sauvegardées avec **JSON Server**.

---

### 📚 Bibliothèque personnelle

Gestion des statuts :

- Plan To Watch
- Watching
- Completed

Fonctionnalités :

- Ajouter un anime
- Modifier son statut
- Supprimer un anime
- Filtrer par statut

Les données sont sauvegardées avec **JSON Server**.

---

### 📊 Dashboard

Affichage des statistiques personnelles :

- ❤️ Nombre de favoris
- ✅ Nombre d'animes terminés
- ⭐ Note moyenne
- 🎭 Genre le plus représenté

---

## 🛠️ Technologies utilisées

### Frontend

- React
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS
- Lucide React

### Backend

- JSON Server

### API

- Jikan REST API (MyAnimeList)

---

## 📂 Structure du projet

```
src
│
├── api
│
├── app
│
├── components
│   ├── anime
│   ├── character
│   ├── dashboard
│   ├── favorites
│   ├── library
│   └── ratings
│
├── features
│   ├── anime
│   └── user
│
├── layouts
│
├── pages
│   ├── Home
│   ├── Anime
│   ├── AnimeDetails
│   ├── Characters
│   ├── CharacterDetails
│   ├── Favorites
│   ├── Library
│   ├── Ratings
│   ├── Dashboard
│   └── NotFound
│
├── routes
│
└── main.jsx
```

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/votre-compte/aniverse.git
```

---

### 2. Installer les dépendances

```bash
npm install
```

---

### 3. Lancer JSON Server

```bash
npm run server
```

JSON Server sera disponible sur :

```
http://localhost:3001
```

---

### 4. Lancer l'application

```bash
npm run dev
```

Puis ouvrir :

```
http://localhost:5173
```

---

## 📦 Scripts

```bash
npm run dev
```

Lance l'application React.

```bash
npm run server
```

Lance JSON Server.

```bash
npm run build
```

Construit la version de production.

```bash
npm run preview
```

Prévisualise la version de production.

---

## 🌐 API utilisée

Jikan REST API

https://docs.api.jikan.moe/

---

## 📸 Captures d'écran

Vous pouvez ajouter ici des captures d'écran de :

- Landing Page
- Liste des Animes
- Détails d'un Anime
- Personnages
- Favoris
- Bibliothèque
- Notes
- Dashboard

---

## 👨‍💻 Auteur

Développé par **Ayoub**

Projet réalisé dans le cadre d'une formation React.

---

## 📄 Licence

Projet réalisé à des fins pédagogiques.
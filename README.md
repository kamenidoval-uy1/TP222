
Blog API – INF222 TAF1

 Description

Ce projet consiste à développer une **API backend pour la gestion d’un blog** dans le cadre du cours **INF222 – Développement Backend**.

L’API permet de :

* créer des articles
* consulter les articles
* modifier un article
* supprimer un article
* rechercher des articles

Elle est développée avec **Node.js, Express et SQLite** et documentée avec **Swagger**.

---

Technologies utilisées

* Node.js
* Express.js
* SQLite3
* Swagger UI
* Postman (tests)

---

 Structure du projet

```
blog-api/
│
├── server.js
├── db.js
├── swagger.json
├── routes/
│   └── articles.js
├── controllers/
│   └── articlesController.js
├── models/
│   └── articleModel.js
└── README.md
```

---

 Installation

 1. Cloner le projet

```bash
git clone https://github.com/ton-repo/blog-api.git
cd blog-api
```

 2. Installer les dépendances

```bash
npm install
```

 3. Lancer le serveur

```bash
node server.js
```

---

Accès à l’application

* API : http://localhost:3000/api/articles
* Swagger : http://localhost:3000/api-docs

---

 Fonctionnalités de l’API

🔹 Créer un article

* **POST** `/api/articles`

Exemple :

```json
{
  "titre": "Mon article",
  "contenu": "Contenu du blog",
  "auteur": "Kameni",
  "date": "2026-03-24",
  "categorie": "Tech",
  "tags": "nodejs,api"
}
```

---

 Récupérer tous les articles

* **GET** `/api/articles`

---

 Récupérer un article par ID

* **GET** `/api/articles/{id}`

---

 Modifier un article

* **PUT** `/api/articles/{id}`

---

 Supprimer un article

* **DELETE** `/api/articles/{id}`

---

 Rechercher un article

* **GET** `/api/articles/search?query=texte`

---

 Tests de l’API

Les tests peuvent être effectués avec :

* Postman
* Swagger (interface interactive)

---

 Codes HTTP utilisés

* 200 : Succès
* 201 : Création réussie
* 400 : Requête invalide
* 404 : Ressource non trouvée
* 500 : Erreur serveur

---

 Bonnes pratiques appliquées

* Architecture MVC (Modèle – Contrôleur – Route)
* Séparation des responsabilités
* Utilisation de JSON pour les échanges
* Documentation avec Swagger

---

 Livrables

* Code source sur GitHub
* Documentation Swagger
* Rapport PDF du TP

---

 Auteur

* Nom : [kameni]
* Prénom : [doval]
* UE : INF222 – Développement Backend

---

 Remarque

Ce projet a été réalisé dans un objectif pédagogique afin de comprendre le fonctionnement des API REST et leur documentation.

---

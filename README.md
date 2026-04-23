# Task Manager Fullstack (Node.js + JavaScript)

## Présentation

Ce projet est une application de gestion de tâches (Task Manager) développée avec une architecture **client / serveur**.

Il permet de créer, modifier, supprimer et organiser des tâches via une interface web connectée à une API REST.

L’objectif est de démontrer la maîtrise :
- du développement frontend (JavaScript)
- du backend (Node.js / Express)
- de la communication via API REST

---

## Fonctionnalités

### Frontend
- Ajout de tâches
- Suppression de tâches
- Modification (édition)
- Marquer comme terminée
- Filtres (Toutes / Actives / Terminées)
- Compteur de tâches restantes

### Backend (API REST)
- GET /tasks → récupérer toutes les tâches
- POST /tasks → ajouter une tâche
- PUT /tasks/:id → modifier une tâche
- DELETE /tasks/:id → supprimer une tâche

---

## Technologies utilisées

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- Fetch API

### Backend
- Node.js
- Express.js
- CORS

---

## Architecture du projet
task-manager/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ ├── app.js
│
├── backend/
│ ├── server.js
│ ├── package.json
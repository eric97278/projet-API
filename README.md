# projet-API,météo et musique
Ce projet utilise l'API OpenWeather pour afficher des informations météorologiques et suggérer des playlists Spotify en fonction de la météo. Il inclut également des animations CSS basées sur les conditions météorologiques.

## Technologies Utilisées

- HTML
- CSS
- JavaScript
- API OpenWeather
- API Spotify

## Fichiers du Projet

### 1. `projet collectif.js`

Ce fichier JavaScript contient la logique principale du projet.

#### Principales Fonctionnalités :

- **apiCall(city)** : 
  - Appelle l'API OpenWeather avec le nom de la ville passé en paramètre.
  - Affiche le nom de la ville, la température, l'humidité et la vitesse du vent.
  - Met à jour les icônes en fonction des conditions météorologiques.
  
- **updateWeatherIcons(weather)** : 
  - Affiche ou cache les éléments visuels (soleil, pluie, neige, nuages, bonhomme de neige) selon le temps.
  
- **musicWeather(weather)** : 
  - Affiche une iframe avec une playlist Spotify correspondant aux conditions météorologiques.
  
- **Écouteur d'événements** : 
  - Intercepte la soumission du formulaire pour récupérer la ville saisie par l'utilisateur.

### 2. `projet collectif.css`

Ce fichier CSS contient les styles pour le projet.

#### Principales Sections :

- **Styles de base** : 
  - Définit les styles généraux pour le corps du document, les titres et les boutons.
  
- **Animations** : 
  - Styles pour les éléments d'animation en fonction des conditions météorologiques (soleil, pluie, neige, nuages).
  
- **Responsive Design** : 
  - Styles pour assurer que le projet soit adapté aux différents écrans (mobile, tablette, desktop).

### 3. `index.html`

Ce fichier HTML est la structure de base de l'application.

#### Sections Principales :

- **En-tête** : 
  - Inclut les métadonnées, le lien vers le CSS, et le script JavaScript.
  
- **Formulaire de recherche** : 
  - Un champ de saisie pour permettre à l'utilisateur de saisir le nom d'une ville et un bouton pour lancer la recherche.
  
- **Informations Météo** : 
  - Conteneurs pour afficher le nom de la ville, la température, l'humidité et la vitesse du vent.
  
- **Animations** : 
  - Éléments pour afficher des animations en fonction de la météo (soleil, pluie, neige, nuages, bonhomme de neige).

## Installation

1. Clonez le repository :
   ```bash
   git clone git@github.com:eric97278/projet-API.git
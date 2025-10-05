

<p align="center">
	<a href="https://heraultsdelambert.vercel.app/" target="_blank">
		<img src="front/assets/logo.svg" alt="Heraults de Lambert Logo" width="120" />
	</a>
</p>

<p align="center">
	<a href="https://heraultsdelambert.vercel.app/" target="_blank">
		<img src="https://img.shields.io/badge/Site%20Web-heraultsdelambert.vercel.app-blue?logo=vercel" alt="Site Web" />
	</a>
</p>

# Heraults de Lambert App

Application web et mobile pour la gestion et l'animation de la communauté des Héraults de Lambert.

Toutes les données personnalisées (clubs, membres, ludothèque, etc.) sont accessibles et modifiables via une Google Sheet. L'application utilise les APIs Google pour lire et modifier ces données en temps réel. (Il existe un cache sur le site web, il faut attendre un peu avant de voir le changement sur le site web)

Le déploiement est assuré sur Vercel pour le front et le back, avec une intégration continue et secret management. Chaque changement sur main sera automatiquement déployé sur le site web.

👉 Voir le guide de contribution : [CONTRIBUTING.md](CONTRIBUTING.md)

## Fonctionnalités principales
- Ludothèque interactive
- Gestion des clubs et univers
- Système de dés physiques simulés (3D)
- Pages d'exploration, bannière, header mobile et desktop
- API backend (BFF) pour la gestion des données
- Authentification et sécurité via credentials
- Interface moderne avec React Native, Gluestack UI, NativeWind, Tailwind
- Dockerisation pour le front et le back
- Configuration Nginx pour le reverse proxy

## Structure du projet

```
heraultsdelambert-app/
├── front/                # Application React Native (Expo)
│   ├── components/       # Composants UI réutilisables
│   ├── heraults-components/ # Pages et composants métier
│   ├── api/              # Appels API côté front
│   ├── assets/           # Images et icônes
│   ├── global.css        # Styles globaux
│   ├── ...
├── bff/                  # Backend For Frontend (API Node/Nitro)
│   ├── server/           # Routes, middleware, utils
│   ├── credentials.json  # Secrets et tokens
│   ├── Dockerfile        # Dockerisation du backend
│   ├── ...
├── nginx.conf            # Configuration Nginx
```

## Installation

### Prérequis
- Node.js >= 18
- npm ou yarn
- Docker (optionnel pour la prod)

### Installation du front
```bash
cd front
npm install
```

### Installation du back
```bash
cd bff
npm install
```

## Lancement en développement

### Front (Expo)
```bash
cd front
npm run dev
```

### Back (Nitro)
```bash
cd bff
npm run dev
```

Open http://localhost:8081

## Lancement avec Docker

```bash
docker-compose up --build
```

Open http://localhost:3001

## Configuration
- Les variables sensibles sont dans `bff/credentials.json` et `bff/token.json`.
- Les configurations UI sont dans `front/gluestack-ui.config.json` et `front/tailwind.config.js`.
- Le proxy Nginx est configuré dans `nginx.conf` à la racine.

## Documentation API
- Les routes API sont dans `bff/server/routes/` et `bff/server/api/`.
- Voir le fichier `bff/README.md` pour plus de détails sur l'API.

## Tests
- C'est pour l'instant pas la priorité du projet

## Contribution

1. Forkez le repo
2. Créez une branche feature
3. Faites vos modifications
4. Ouvrez une Pull Request

## Licence
MIT

## Auteurs
- Corentin Vanson
- Contributeurs Héraults de Lambert

## Contact
Pour toute question ou suggestion, ouvrez une issue.

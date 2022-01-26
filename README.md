# Projet Star Wars #
Veuillez d'abord installer les dépendances : `npm install`

Puis, faites un build du projet : `npm run build`

Ensuite, créez l'image docker : `docker build -t ng-star-wars . `
et exécutez-la avec `docker run -d -p 1234:80 ng-star-wars` avec un port de votre choix au lieu du `1234`.

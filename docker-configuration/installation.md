# Installation du projet

## 🚨 Prérequis

L'implémentation des différentes applications est nécessaire pour pouvoir lancer le projet au complet. Il faut donc, a minima, terminer le parcours dédié au développement pour avoir la structure des trois applications (soit le front-end avec Vue.js, l'API GraphQL avec Apollo Server, et l'API REST d'authentification).

## Démarrage d'un conteneur

Cela dit, il est possible de lancer un conteneur en particulier. Pour cela, il faut utiliser la commande suivante :

```shell
docker-compose up <nom du service>
```

Cela permet, par exemple, de lancer uniquement une base de données sans lancer les autres services.

## Démarrage du projet

L'installation des dépendances et le lancement des conteneurs via Docker se font directement via Docker Compose.

```shell
docker-compose up --build
```

Pour lancer en arrière-plan, il faut ajouter l'option `-d` :
```shell
docker-compose up -d --build
```

Les services suivants sont lancés :
- Adminer sur le port 8080
- Mongo Express (GUI pour mongoDB) sur le port 8081

> Il est possible que le service Mongo Express (ou un autre service) se lance plusieurs fois, avec des erreurs. Il est configuré pour se relancer jusqu'à ce qu'il parvienne à se connecter à la base de données.

## Installation de dépendances

Pour installer des dépendances directement depuis les conteneurs, il faut lancer les commandes suivantes à la racine du projet :
- Front-End avec vue : `docker-compose exec vue npm install <nom du package>`
- Back-End | API avec Apollo Server  : `docker-compose exec apollo-server npm install <nom du package>`
- Back-End | API REST d'authentification : `docker-compose exec authentication npm install <nom du package>`

> Il faut remplacer `<nom du package>` par le nom du package à installer
> Exemple : `docker-compose exec vue npm install axios`

On va ajouter des alias pour rendre cela plus simple :

```bash
alias @vue="docker-compose exec vue npm"
alias @apollo-server="docker-compose exec apollo-server npm"
alias @authentication="docker-compose exec authentication npm"
```

On peut alors installer des dépendances en utilisant ces alias :
- Front-End avec vue : `@vue install <nom du package>`
- Back-End | API avec Apollo Server  : `@apollo-server install <nom du package>`
- Back-End | API REST d'authentification : `@authentication install <nom du package>`

Il en va de même pour le lancement des suites de tests :
- Back-End | API REST d'authentification : `@authentication run test`

## Commande d'arrêt

Pour arrêter les conteneurs, il faut lancer la commande suivante à la racine du projet :
`docker compose down -v`. Le `-v` permet de supprimer les volumes associés aux conteneurs. Si l'on souhaite conserver les données présentes en base de données, il faut retirer le `-v`.

## Utilisateurs

Les utilisateurs suivants sont créés par défaut :
- `admin@velo-cation.com` avec le rôle `administrateur`
- `gestionnaire@velo-cation.com` avec le rôle `gestionnaire`
- `client@mail.com` avec le rôle `client`

Le mot de passe est toujours le même : `secret`
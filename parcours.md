# Parcours - Node.js / GraphQL

<details><summary>Parcours "Concepts"</summary>

Cette première partie du parcours est consacrée aux concepts abordés depuis le dernier parcours.

Il y aura 2 QCM à remplir, une base de données à concevoir et...  
📝 ...un fichier `docker-compose.yml` à rédiger.

⏱️ Dès réception du parcours, **tu auras 3 heures pour le réaliser**.

## #1 - QCM Node.js

> 🔗 [QCM](https://forms.gle/78mavnbbUQ2rA8Da8)

🛡️ Bon courage !

## #2 - QCM GraphQL

> 🔗 [QCM](https://forms.gle/dQcT2sEVgB7cbvyr8)

⚔️ Force et honneur !

## #3 - Projet

Le projet est détaillé dans ce [cahier des charges](documentation/CDC.pdf) (dans le sous-dossier [`documentation`](./documentation)).

💡 Prends bien le temps de lire ce cahier des charges, même plusieurs fois, avant de commencer à recenser les entités puis les associations.

### #3.1 - Concevoir la base de données

Là, il te faut du jus de cerveau pour retranscrire sur papier la structure de la base de données.

### #3.2 - Modéliser la base de données

Utilises PlantUML et fournis-nous le fichier source (`.puml`) et l'export en image de ton schéma entité/association.

## #4 - 🐋 Docker

Côté technique, on a choisi :

- Vue.js pour le front-end
- GraphQL (avec Apollo Server) pour l'API principale de l'application avec une base de données PostgreSQL
- Node.js & Express pour le microservice d'authentification avec une base de données MongoDB

À toi de fournir dans ce dépôt un fichier `docker-compose.yml` nous permettant de démarrer l'application complète (avec tous ses services).

> 🔗 [Instructions détaillées](docker-configuration/instructions.md)

---

C'est tout (mais c'est déjà pas mal) !

N'oublie pas de *push* ton code avant l'heure fatidique.

On se retrouve sur Slippers pour la partie dédiée au développement du parcours.

</details>

<details><summary>Parcours "Développement"</summary>

Tu as appris beaucoup de nouvelles notions depuis le dernier parcours, et il faut désormais valider la pratique.  
C'est l'objet de ce parcours dédié au développement.

## 📂 Quel est le sujet ?

C'est le projet **Vélo'cation** que tu as déjà vu lors du parcours "Concepts".

Par contre, on t'a fourni une correction de ce parcours "Concepts" (`docker-compose.yml` et le schéma entités/associations) pour bien démarrer le parcours "Développement" que tu trouveras dans ce dépôt.

> 🔗 [Guide d'installation](docker-configuration/installation.md)

## 🎯 Quels sont les attendus pour ce parcours "Développement" ?

### 🏁 Démarrer la mise en place du serveur Apollo utilisant PostgreSQL

>  ⚠️ Attention aux noms des dossiers pour chaque application/service, car ceux-ci sont déjà renseignés au sein des `Dockerfile` et/ou `docker-compose.yml`.

1. Mettre en place le serveur Apollo Server avec les dépendances nécessaires
2. Permettre la récupération des données pour la page "Détail d'un vélo", implémenter la ou les associations pour que le front-end puisse récupérer les données de cette page. Pour cela, vous devez :
- Déclarer les schémas GraphQL :  
  On commence par le `Query` puis par le ou les types nécessaires à l'affichage du résultat.
- Implémenter les *resolvers* GraphQL :  
  On commence par les *resolvers* du `Query` puis par le ou les *resolvers* nécessaires à la résolution des potentielles associations.
3. Rédiger les requêtes GraphQL, au sein d'un fichier `.http` ou `.graphql`, ou `.gql` (à vous de choisir), pour récupérer les données nécessaires aux pages (côté front-end) "Liste des vélos" et "Récupérer une location".

⚠️ On parle bien ici d'écriture de requêtes GraphQL, et pas d'une implémentation au sein du code.

<details><summary>Exemple du format attendu :</summary>

```graphql
query Query {
  entities {
    property#1
    property#2
    relation#1 {
      property#1
    }
  }
}
```

</details>

4. (Bonus) Permettre la récupération des données pour les requêtes écrites précédemment, soit :
- La récupération des données pour la page "Liste des vélos"
- La récupération des données pour la page "Récupérer une location"

### 🏁 Démarrer la mise en place de l'API d'authentification avec Node.js, Express et Mongo DB

🐋 La base de données est déjà fournie.

- Mettre en place l'API REST.  
  Tu es libre d'utiliser Mongoose ou non, mais il faut que tu puisses te connecter à la base de données.
- Rédiger les tests unitaires vérifiant la présence (mais pas le contenu) de tous les *endpoints*.
- (Bonus) Rédiger les tests unitaires vérifiant le contenu (soit la réponse) de tous les *endpoints*.

> 💡 **Mais quels sont ces *endpoints* ?**  
C'est à toi de réfléchir, mais c'est une API dédiée à l'authentification. Vu que l'ont fourni déjà quelques utilisateurs, tu peux te concentrer sur la connexion (`"/sign-in"`, `"/authenticate"` ou `"/login"`), mais il peut être intéressant de prévoir l'inscription et la déconnexion (malgré que l'on va utiliser un JWT qui a vocation à expirer).

## 📚 Comment s'organiser ?

Tu peux, et es fortement encouragé, à créer un *GitHub Project* dans ton dépôt, puis y ajouter 7 colonnes : Backlog, J1, J2, J3, J4, J5 et Done.

- Créer une "carte" dans la colonne "Backlog" par fonctionnalité nécessaire pour le projet.
- Déplacer dans les colonnes J1 et J2 les cartes correspondant aux attendus du parcours.

### 💬 J'ai des questions techniques pendant le parcours/atelier

Pendant le parcours, tu devras faire un message en direct au *Lead Developer* (représenté par ton formateur et/ou tuteur).

## Rappels

- Ne foncez pas tête baissée dans le code, on attend de vous une certaine prise de recul : planifiez votre travail en sprints de 1 jour ou d'une demi-journée.
    - Vous êtes fortement encouragés à utiliser des outils de gestion de projet, tel que *GitHub Project* (car intégré à votre dépôt, c'est encore mieux).
    - Le but n’est pas de s’épuiser à essayer de tout faire (donc à la va vite), mais bien de faire ce que vous pouvez (en vous appliquant). Cela dit, ne perdez pas des heures sur un point bloquant, et passez à autre chose si c'est possible.
- Le parcours se fait en autonomie, qui va vous permettre de faire un bilan personnel de votre progression dans la formation. C’est important !
- L'atelier se fait en binôme.
    - En cas de besoin d’aide, et seulement après avoir correctement cherché et épuisé vos sources d’informations : vous êtes invités à ouvrir des issues directement le dépôt `Soutien-atelier`, votre *Lead Developer* viendra y répondre. Cela se fera probablement sans vous donner la solution toute cuite, mais en vous orientant avec bienveillance.
- Avancez fonctionnalité par fonctionnalité.
- Utilisez Git à son plein potentiel :
    - Pour chaque nouvelle fonctionnalité, créez une nouvelle branche de travail.

</details>
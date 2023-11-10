# Atelier - Node.js / GraphQL

Le parcours est fini !

Mais maintenant, il faut terminer le projet **Vélo'cation** !

## ❓ Qu'est-ce que l'atelier ?

Après la conception et la mise en place du projet, c'est le moment de réellement développer l'application. Ça se passera en binôme et pendant ces 3 jours, l'entraide est permise et recommandée !

Tu pourras faire des issues dans le repo `soutien-atelier` présent dans le GitHub de la promotion pour que le *Lead Developer* ou tes camarades y répondent.

## 🗓️ C'est quoi le programme ?

- Mercredi 9h : Rendez-vous sur Slippers pour présenter l'atelier
- Mercredi matin au vendredi après-midi 15h00 : **Atelier**
  - Vous développerez le reste du projet en binômes ou trinômes
- Vendredi à 15h30 : Débrief de la semaine sur Slippers (en mode détendu)

## 📌 Quel est le sujet ? 

Toujours le même...

## 🎯 Quels sont les attendus pour cet atelier ?

- Développer les fonctionnalités restantes du projet  
Cela comprend, entre autres :
  - Au sein du microservice dédié à l'authentification :
    - Mettre en place une stratégie de gestion des erreurs
  - Au sein du microservice dédié à l'API GraphQL :
    - Ajouter toutes les *queries* et *mutations* manquantes
    - Intégrer l'API de conversion de devises en tant que RESTDataSource
    - Vérifier à chaque requête que l'utilisateur est authentifié (avec le _context_)
  - Au sein du front-end avec Vue.js :
    - Nettoyer le projet automatiquement généré via `npm create vue`
    - Développer les différentes pages (et composants) de l'application
    - Consommer l'API GraphQL avec la librairie dédiée  
    > [Documentation](https://apollo.vuejs.org/)


## 📚 Comment s'organiser ?

Si un *GitHub Project* a été créé, les cartes pour les 3 derniers jours peuvent être déplacés.

Il est possible conserver des cartes dans le *backlog* si l'on estime qu'il ne sera pas possible de les réaliser dans les jours restants.

Il est recommandé de créer une branche par fonctionnalité, et de faire un *merge* dans la branche principale une fois la fonctionnalité mise en place. Il ne faut pas hésiter à utiliser les *pull requests* pour demander une relecture de code à ses co-équipiers.

### 🙋 J'ai des questions techniques pendant l'atelier

Il est possible de faire fonctionner l'entraide, ou bien passer par la création d'une *issue* sur le dépôt `Soutien-atelier` dans le GitHub de la promotion. Cela oblige à bien décrire le problème rencontré et cela permettra à tout le monde d'avoir un suivi plus précis. Cela servira également aux autres, qui pourraient bloquer sur un problème similaire.

## Rappels

- Ne foncez pas tête baissée dans le code, on attend de vous une certaine prise de recul : planifiez votre travail en sprints de 1 jour ou d'une demi-journée.
  - Vous êtes fortement encouragés à utiliser des outils de gestion de projet, tel que *GitHub Project* (car intégré à votre dépôt, c'est encore mieux).
  - Le but n’est pas de s’épuiser à essayer de tout faire (donc à la va vite), mais bien de faire ce que vous pouvez (en vous appliquant). Cela dit, ne perdez pas des heures sur un point bloquant, et passez à autre chose si c'est possible.
- Le parcours se fait en autonomie, qui va vous permettre de faire un bilan personnel de votre progression dans la formation. C’est important !
- L'atelier se fait en binôme (ou trinôme).
  - En cas de besoin d’aide, et seulement après avoir correctement cherché et épuisé vos sources d’informations : vous êtes invités à ouvrir des issues directement le dépôt `Soutien-atelier`, votre *Lead Developer* viendra y répondre. Cela se fera probablement sans vous donner la solution toute cuite, mais en vous orientant avec bienveillance.
- Avancez fonctionnalité par fonctionnalité.
- Utilisez Git à son plein potentiel :
  - Pour chaque nouvelle fonctionnalité, créez une nouvelle branche de travail.
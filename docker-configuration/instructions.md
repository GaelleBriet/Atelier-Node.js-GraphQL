# 🐋 Docker (Compose)

Afin de pouvoir développer sereinement l'application **Vélo'cation**, vous allez devoir travailler avec Docker.

Il faut donc écrire un `docker-compose.yml` qui comportera les services nécessaires au bon fonctionnement de l'application, et deux services facultatifs :
- [Adminer](https://hub.docker.com/_/adminer)
- [Mongo Express](https://hub.docker.com/_/mongo-express)

Pour chaque service, il faudra :

Pour chaque service, vous devrez :
- Définir un volume
- Faire correspondre les ports de l'hôte et du service et exposer ces ports

Si le service nécessite des variables d'environnement, celles-ci seront incorporées dans la configuration du service directement (ce qui élimine le besoin de fichiers `.env`) ou dans un fichier `.env` (avec son `.env.example`) qui sera référencé dans le `docker-compose.yml`.

Si vos services ont besoin d'un `Dockerfile`, ils doivent être placés dans un répertoire spécifique pour maintenir une bonne organisation.

## Le réseau

Vous devez avoir un réseau dédié et nommé pour être facilement identifiable, on doit savoir pour quelle application ce réseau a été créé.

Attachez tous vos services à ce réseau.

## Les services

- Un service `apollo-server` qui représentera votre serveur dédié à l'API GraphQL.
- Un service `authentication` qui représentera votre serveur dédié à l'API REST d'authentification/autorisation.
- Un service `postgresql` qui sera utilisé par le service`apollo-server`.
- Un service `mongo` qui sera utilisé avec le service `authentication`.
- Un service `vue` dédié au client Vue.js
- (Facultatif) Un service `adminer` pour gérer la base de données PostgreSQL.
- (Facultatif) Un service `mongo-express` pour gérer la base de données MongoDB.

Certains services nécessiteront un `entrypoint` pour démarrer automatiquement quand on fait `docker compose up`.

Il faudra aussi une clé `working_dir` pour les services nécessitant un `entrypoint`.

> **Qu'est-ce que le service `authentication` ?**  
C'est un service indépendant que le front-end pourra contacter comme bon lui semble, et qui servira à avoir les fonctionnalités d'inscription, de connexion et de déconnexion.

## Dépannage (VM Server)

Si vous rencontrez des problèmes de permissions, vous pouvez essayer de lancer la commande suivante :

```bash
sudo chmod -R o+w ./ # Au sein des VMs, le mot de passe devrait être `par dessus les nuages`
```

Vous pouvez consulter l’espace disque disponible avec la commande suivante :

```bash
df -H
```

Pour libérer de l’espace, on recommande de supprimer les images, conteneur et volumes Docker inutilisés :

```bash
docker system prune -a
docker volume prune
```

Ensuite, on peut aussi supprimer les fichiers temporaires, les journaux, et les paquets inutilisés :

```bash
sudo rm -rf /tmp/*
sudo journalctl --vacuum-size=100M
rm -rf ~/.local/share/Trash/*
sudo apt autoremove
sudo apt clean
```

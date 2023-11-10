// Ce middleware permet de gérer les erreurs asynchrones dans les contrôleurs (évitant ainsi d'avoir à écrire un try/catch dans chaque contrôleur).
module.exports = callback => (request, response, next) => {
  Promise.resolve(callback(request, response, next)).catch(next);
}
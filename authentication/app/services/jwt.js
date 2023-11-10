// Nous avons besoin du package jwt pour créer et vérifier des jetons JWT (JSON Web Tokens).
const jwt = require("jsonwebtoken");

module.exports = {
  // La fonction accepte une payload en entrée et retourne un jeton d'accès. La payload est un objet qui est encodé dans le jeton JWT.
  // Le jeton expire après une heure.
  encode(payload) {
    const expiration = Date.now() + 86400000; // La date d'expiration est fixée à dans une journée.
    return {
      "access_token": jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: "1d" }),
      // On encode la payload en un jeton JWT avec une clé secrète qui est une variable d'environnement. Le jeton expire en une heure.
      "access_expires": new Date(expiration) // Cette ligne renvoie la date et l'heure d'expiration du jeton.
    }
  },
  // La fonction decode prend un jeton JWT en entrée et le décrypte en utilisant la clé secrète stockée dans le fichier d'environnement.
  // Si l'opération échoue (par exemple, parce que le jeton est invalide ou s'il a expiré), une erreur est levée.
  decode(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch(error) {
      throw new Error(`Le jeton d'accès fourni est invalide ou expiré : ${error.message}`);
    }
  }
};
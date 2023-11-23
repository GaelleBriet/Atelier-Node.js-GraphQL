const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { encode } = require("./jwt");
const AuthenticationError = require("../errors/classes/AuthenticationError");


module.exports = {
  async authenticate({ email, password }) {
    // Recherche d'un utilisateur avec le nom d'utilisateur passé en argument.
    const user = await User.findOne({ email });

    // Si aucun utilisateur n’a été trouvé, on retourne une erreur 404.
    if (!user) {
      throw new AuthenticationError(`Aucun utilisateur n'existe avec l'email ${email}.`);
    }

    // Si un utilisateur a été trouvé, on vérifie que le mot de passe fourni correspond au mot de passe enregistré en base de données.
    const authenticated = await bcrypt.compare(password, user.password);

    // Si le mot de passe ne correspond pas, on retourne une erreur 401.
    if (!authenticated) {
      throw new AuthenticationError(`Le mot de passe fourni est incorrect !`);
    }

    const payload = user.toObject();

    // On encode les informations de l’utilisateur dans un jeton d’accès.
    // Il serait possible, au besoin, d'y ajouter des informations brutes (non sensibles) supplémentaires sur l'utilisateur.
    return encode(payload);
  }
};

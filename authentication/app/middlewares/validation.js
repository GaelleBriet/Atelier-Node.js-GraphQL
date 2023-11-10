const { check, validationResult } = require("express-validator");

const { AuthenticationError } = require("./errors");

module.exports = {
  validate: {
    email: [
      // Vérifie que l'email est présent et est bien un email.
      check("email", "L'adresse e-mail fournie est invalide.").exists().trim().isEmail()
    ],
    password: [
      // Vérifie que le mot de passe est présent, supprime les espaces inutiles, échappe les caractères spéciaux et a au moins 5 caractères.
      check("password", "Le mot de passe fourni est invalide.").exists().trim().escape().isLength({ min: 5 })
    ]
  },
  resolve(request, response, next) {
    // Exécute les validations et renvoie les erreurs le cas échéant.
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      // Construit le message d'erreur avec tous les messages d'erreur de validation.
      const message = ["Un ou plusieurs champs sont invalides :"].concat(errors.array().map(error => error.msg).join(" | ")).join(" ");
      // Lance une erreur d'authentification avec le message d'erreur et un code d'erreur 400.
      throw new AuthenticationError(message, 400);
    }
    next();
  }
};
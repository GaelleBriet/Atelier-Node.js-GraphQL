const express = require("express");

const { login } = require("./controllers/authentication");
const attempt = require("./middlewares/attempt");
const { validate, resolve } = require("./middlewares/validation");

const router = express.Router();

router.get("/", (request, response, next) => {
  response.status(200).json({ message: "The API is working but there is no ressource available at this endpoint." });
});

router.post("/login", [
  validate.email,
  validate.password,
  resolve
], attempt(login));

/*
Les users sont déjà en base de données, tu peux tester avec les trois disponibles, au choix :

- admin@velo-cation.com
- gestionnaire@velo-cation.com
- client@mail.com

Le mot de passe est le même pour tous : "secret".

*/

module.exports = router;

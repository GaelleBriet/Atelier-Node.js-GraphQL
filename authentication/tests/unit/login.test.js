const request = require("supertest");

// L'application est importée. Les tests se feront sur un serveur lancé spécifiquement pour les tests.
// Cela permet, entre autres, de pouvoir lancer les tests indépendamment du serveur principal.
const app = require("../../app");

// La connexion à la base de données est importée.
const { mongoose } = require("../../database/connexion");

// Un serveur est créé pour les tests.
let server;

// Avant de lancer les tests, on se connecte à la base de données et on lance le serveur.
beforeAll(done => {
  mongoose.connect().then(() => {
    server = app.listen(0, done);  // 0 signifie qu'un port libre sera aléatoirement choisi par le système.
  })
});

afterAll(done => {
    server.close(done);
});

describe("Authentification", () => {
  test("Une route dédiée à l'authentification existe", done => {
      request(app)
          .post('/login')
          .then(response => {
              expect(response.type).toBe("application/json");
              // Le code de statut 400 est renvoyé, car le corps de la requête est vide.
              expect(response.statusCode).toBe(400);
              done();
          });
  });

  test("Un utilisateur ne peut pas s'authentifier avec une adresse e-mail au format incorrect", done => {
    const payload = {
      email: "@NOT_AN_EMAIL_ADDRESS",
      password: "secret"
    };
    request(server)
      .post("/login")
      .send(payload)
      .set("Accept", "application/json")
      .then(response => {
        expect(response.headers["content-type"]).toMatch(/json/);
        // Le code de statut 400 est renvoyé, car le corps de la requête n'est pas au format attendu.
        expect(response.status).toEqual(400);
        expect(response.body).toEqual(
          // La réponse doit contenir un objet JSON avec une propriété "message" qui correspond au message d'erreur.
          expect.objectContaining({
            message: expect.any(String)
          })
        );
        done();
      });
  });

  test("Un utilisateur (avec une adresse e-mail valide et reconnue) ne peut pas s'authentifier avec un mot de passe incorrect", done => {
    const payload = {
      email: "admin@velo-cation.com",
      password: "password"
    };

    request(server)
      .post("/login")
      .send(payload)
      .set("Accept", "application/json")
      .then(response => {
        expect(response.headers["content-type"]).toMatch(/json/);
        // Le code de statut 401 est renvoyé, car le mot de passe est incorrect.
        expect(response.status).toEqual(401);
        expect(response.body).toEqual(
          // La réponse doit contenir un objet JSON avec une propriété "message" qui correspond au message d'erreur.
          expect.objectContaining({
            message: expect.any(String)
          })
        );

        done();
      });
  });

  test("Un utilisateur peut s'authentifier avec une adresse e-mail (valide et reconnue) et un mot de passe", done => {
    const payload = {
      email: "admin@velo-cation.com",
      password: "secret"
    };
    request(server)
      .post("/login")
      .send(payload)
      .set("Accept", "application/json")
      .then(response => {
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(201);
        expect(response.body).toEqual(
          expect.objectContaining({
            access_token: expect.any(String),
            access_expires: expect.any(String),
          })
        );
        done();
      });
  });
});

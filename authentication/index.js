const { mongoose } = require("./database/connexion");

const app = require("./app");

(async () => {
  await mongoose.connect();
  app.listen(app.get("port"), _ => {
    console.log(`Server is running on ${app.get("base_url")}:${app.get("port")}`);
  });
})();
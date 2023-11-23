const { GraphQLError } = require("graphql/error");
const DataLoader = require("dataloader");
const { INTERNAL_SERVER_ERROR } = require("../errors");

class CoreSQLDataSource {
  constructor(model) {
    // La propriété modèle de l'objet est initialisée avec le modèle (Sequelize) passé au constructeur.
    this.model = model;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      INTERNAL_SERVER_ERROR(error);
    }
  }

  async loadByPk(id) {
    return await this.#loaders.getByPk.load(id);
  }
  async getByPk(id) {
    try {
      const instance = await this.model.findByPk(id);
      if (!instance) {
        throw new GraphQLError(`[${this.model.name}] Aucune instance correspondante à l'identifiant ${id} n'a été trouvée !`, {
          extensions: {
            code: "BAD_USER_INPUT",
            http: {
              status: 404
            },
          },
        });
      }
      return instance;
    } catch (error) {
      INTERNAL_SERVER_ERROR(error);
    }
  }

  async loadOne(options) {
    return await this.#loaders.getOne.load(options);
  }

  async getOne(options) {
    try {
      const instance = await this.model.findOne(options);
      if (!instance) {
        throw new GraphQLError(`[${this.model.name}] Aucune instance correspondante aux informations fournies n'a été trouvée !`, {
          extensions: {
            code: "BAD_USER_INPUT",
            http: {
              status: 404
            },
          },
        });
      }
      return instance;
    } catch (error) {
      INTERNAL_SERVER_ERROR(error);
    }
  }

  async loadAll(options = {}) {
    return await this.#loaders.getAll.load(options);
  }

  async getAll(options) {
    try {
      return this.model.findAll(options);
    } catch (error) {
      INTERNAL_SERVER_ERROR(error);
    }
  }

  #loaders = {
    getByPk: new DataLoader((identifiers) => {
      return Promise.all(identifiers.map((id) => this.getByPk(id)));
    }),
    getOne: new DataLoader((keys) => {
      return Promise.all(keys.map((options) => this.getOne(options)));
    }, { cacheKeyFn: JSON.stringify }),
    getAll: new DataLoader((keys) => {
      return Promise.all(keys.map((options) => this.getAll(options)));
    }, { cacheKeyFn: JSON.stringify })
  }
}

module.exports = CoreSQLDataSource;

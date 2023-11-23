const { GraphQLError } = require("graphql/error");

module.exports = {
  INTERNAL_SERVER_ERROR: (error) => {
    throw new GraphQLError(error.message, {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
        http: {
          status: 500
        }
      }
    });
  },
  MISSING_BIKE_ID_OR_NUMBER: () => {
    throw new GraphQLError("L'identifiant du vélo, ou son numéro, doit être renseigné.", {
      extensions: {
        code: "BAD_USER_INPUT",
        http: {
          status: 400
        }
      }
    });
  },
  UNKNOWN_BIKE: (message) => {
    throw new GraphQLError(message ?? "Aucun vélo n'a été trouvé correspondant à ces identifiants.", {
      extensions: {
        code: "BAD_USER_INPUT",
        http: {
          status: 400
        }
      }
    });
  },
  UNKNOWN_RENT: (message) => {
    throw new GraphQLError(message ?? "Aucune location n'a été trouvée correspondant à ces identifiants.", {
      extensions: {
        code: "BAD_USER_INPUT",
        http: {
          status: 400
        }
      }
    });
  },
};

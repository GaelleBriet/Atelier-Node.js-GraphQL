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
};
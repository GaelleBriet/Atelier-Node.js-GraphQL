/*
Ce type scalaire a été créé en suivant la documentation ci-dessous :
https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
 */

const { GraphQLScalarType, Kind } = require("graphql");

const ScalarDate = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",

  serialize(value) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    throw Error("Le sérialiseur Date Scalar GraphQL attendait un objet Date.");
  },

  parseValue(value) {
    try {
      if (typeof value === "number" || typeof value === "string") {
        return new Date(value);
      }
      throw new Error("L'analyseur Date Scalar GraphQL attendait un nombre ou une chaîne de caractère.");
    } catch (error) {
      throw new Error(`L'analyseur Date Scalar GraphQL n'a pas pu analyser la valeur : ${error.message}`);
    }
  },

  parseLiteral(value) {
    if (value.kind === Kind.INT) {
      return new Date(parseInt(value.value, 10));
    }
    return null;
  }
});

module.exports = ScalarDate;
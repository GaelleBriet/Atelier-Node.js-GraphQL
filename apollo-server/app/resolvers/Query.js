const { Op } = require("sequelize");
const { GraphQLError } = require("graphql/error");
const { MISSING_BIKE_ID_OR_NUMBER } = require("../errors");

module.exports = {
  bike(_, { id, number }, { DS }) {
    if (!id && !number) { MISSING_BIKE_ID_OR_NUMBER(); }

    if (id) { return DS.bike.getByPk(id); }

    return DS.bike.getOne({
      where: { number: number }
    });
  },
  bikes: (_, { filter }, { DS }) => DS.bike.getAll({ where: filter })
};

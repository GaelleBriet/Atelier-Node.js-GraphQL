const { MISSING_BIKE_ID_OR_NUMBER } = require("../errors");

module.exports = {
  bike(_, { id, number }, { DS }) {
    if (!id && !number) { MISSING_BIKE_ID_OR_NUMBER(); }

    if (id) { return DS.bike.getByPk(id); }

    return DS.bike.getOne({
      where: { number: number }
    });
  },
  bikes: (_, { filter, offset =0, limit = 10 }, { DS }) => DS.bike.getAll({ where: filter, offset, limit }),

  point_of_sales: async (_, {filter}, {DS}) => {
    console.log(await DS.shop.getAll({where: filter}))
    return DS.shop.getAll({where: filter});
  },
  point_of_sale: (_, { id }, { DS }) => { return DS.shop.getByPk(id); },

  kind_of_bikes: (_, { filter }, { DS }) => DS.kind.getAll({ where: filter }),
  kind_of_bike: (_, { id }, { DS }) => { return DS.kind.getByPk(id); },

  rents: (_, { filter }, { DS }) => DS.rent.getAll({ where: filter }),
  rent: (_, { id }, { DS }) => { return DS.rent.getByPk(id); },
};

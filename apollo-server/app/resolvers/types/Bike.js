module.exports = {
  async kind(bike, _, { DS }) {
    // return bike.getKind();
    return DS.kind.getByPk(bike["kind_of_bike_id"]);
  },
  shop(bike, _, { DS }) {
    // return bike.getShop();
    return DS.shop.getByPk(bike["point_of_sale_id"]);
  },
  rents(bike, _, { DS }) {
    // return bike.getRents();
    return DS.rent.getAll({ where: { bike_id: bike.id } });
  },
  rent: (bike, _, { DS }) => DS.rent.loadOne({ where: { bike_id: bike.id, return_date: null } })
};

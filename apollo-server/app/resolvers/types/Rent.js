module.exports = {
    client: ({ client }) => client,
    bike(rent, _, { DS }) {
        // return rent.getBike();
        return DS.bike.loadByPk(rent["bike_id"]);
    },
    schedule({ schedule }) {
        return schedule;
    },
    lessor(rent, _, { DS }) {
        // return rent.getLessor();
        return DS.shop.getByPk(rent["rent_point_of_sale_id"]);
    },
    recipient(rent, _, { DS }) {
        // return rent.getRecipient();
        return rent["return_point_of_sale_id"] && DS.shop.loadByPk(rent["return_point_of_sale_id"]);
    }
};

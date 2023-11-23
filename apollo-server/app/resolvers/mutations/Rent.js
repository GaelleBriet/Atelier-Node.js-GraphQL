const {UNKNOWN_BIKE, UNKNOWN_RENT} = require("../../errors");

module.exports = {
  async createRent(_, {data}, {DS}) {
    const relatedBike = await DS.bike.loadByPk(data.bike_id);

    if (!relatedBike) throw new UNKNOWN_BIKE('Bike not found');

    // update bike status
    relatedBike.status = 'RENT';
    await relatedBike.save();

    const rentData = {
      ...data,
      rent_point_of_sale_id: data.lessor,
    }
    return await DS.rent.create(rentData);
  },

  async completeRent(_, {data}, {DS}) {
    const relatedBike = await DS.bike.getOne({ where: { number: data.bike_number } });
    if (!relatedBike) UNKNOWN_BIKE('Bike not found');
    if (relatedBike.status !== 'RENT') UNKNOWN_BIKE('Bike not rented');

    const rent = await DS.rent.getOne({ where: { bike_id: relatedBike.id } });
    if (!rent) UNKNOWN_RENT('Rent not found');


    // update rent
    rent.return_date = new Date();
    rent.status = 'COMPLETED';
    rent.return_point_of_sale_id = data.return_point_of_sale_id;

    // update bike status
    relatedBike.status = 'AVAILABLE';
    await relatedBike.save(relatedBike);
    console.log({rent, relatedBike})

    return await rent.save();
  }
}

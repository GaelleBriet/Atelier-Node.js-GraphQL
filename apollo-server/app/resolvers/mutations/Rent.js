module.exports = {
  createRent(_, {data}, {DS}) {
    const rentData = {
      ...data,
      rent_point_of_sale_id: data.lessor,
    }
    return DS.rent.create(rentData);
  }
}

const CoreQSLDataSource = require("./CoreSQLDataSource");
const CurrencyAPI = require("./CurrencyAPI");
const { Rent, PointOfSale, KindOfBike, Bike } = require("../models");

module.exports = {
  bike: new CoreQSLDataSource(Bike),
  rent: new CoreQSLDataSource(Rent),
  shop: new CoreQSLDataSource(PointOfSale),
  kind: new CoreQSLDataSource(KindOfBike),
  currency: new CurrencyAPI()
}

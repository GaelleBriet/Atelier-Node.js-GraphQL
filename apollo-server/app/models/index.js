const Bike = require("./Bike");
const PointOfSale = require("./PointOfSale");
const KindOfBike = require("./KindOfBike");
const Rent = require("./Rent");

// Un vélo appartient à un type de vélo.
Bike.belongsTo(KindOfBike, {
  foreignKey: "kind_of_bike_id",
  // La relation est nommée "kind" afin de faciliter la syntaxe.
  as: "kind"
});

// Un type de vélo peut avoir plusieurs vélos.
KindOfBike.hasMany(Bike, {
  foreignKey: "kind_of_bike_id",
  as: "bikes"
});

// Un vélo appartient à un point de vente.
Bike.belongsTo(PointOfSale, {
  foreignKey: "point_of_sale_id",
  // La relation est nommée "shop" afin de faciliter la syntaxe.
  as: "shop"
});

// Un point de vente peut avoir plusieurs vélos.
PointOfSale.hasMany(Bike, {
  foreignKey: "point_of_sale_id",
  as: "bikes"
});

// Une location appartient à un vélo.
Rent.belongsTo(Bike, {
  foreignKey: "bike_id",
  as: "bike"
});

// Un vélo peut avoir plusieurs locations.
Bike.hasMany(Rent, {
  foreignKey: "bike_id",
  as: "rents"
});


// Une location commence à un point de vente.
Rent.belongsTo(PointOfSale, {
  foreignKey: "rent_point_of_sale_id",
  // La relation est nommée "lessor" car le point de vente est le loueur.
  as: "lessor"
});

// Un point de vente peut avoir plusieurs locations débutant ici.
PointOfSale.hasMany(Rent, {
  foreignKey: "rent_point_of_sale_id",
  // La relation est nommée "departures" car le point de vente est le point de départ.
  as: "departures"
});

// Une location se termine à un point de vente.
Rent.belongsTo(PointOfSale, {
  foreignKey: "return_point_of_sale_id",
  // La relation est nommée "recipient" car le point de vente est le récepteur.
  as: "recipient"
});

// Un point de vente peut avoir plusieurs locations se terminant ici.
PointOfSale.hasMany(Rent, {
  foreignKey: "return_point_of_sale_id",
  // La relation est nommée "returns" car le point de vente est le point de retour.
  as: "returns"
});


module.exports = {
  Bike,
  PointOfSale,
  KindOfBike,
  Rent
};
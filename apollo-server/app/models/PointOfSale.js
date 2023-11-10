const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../database/connexion")();

class PointOfSale extends Model {}

PointOfSale.init({
  label: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: "PointOfSale",
  tableName: "point_of_sale",
  timestamps: false
});

module.exports = PointOfSale;
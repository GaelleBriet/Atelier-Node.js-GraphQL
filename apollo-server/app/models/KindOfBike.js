const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../database/connexion")();

class KindOfBike extends Model {}

KindOfBike.init({
  label: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: "KindOfBike",
  tableName: "kind_of_bike",
  timestamps: false,
});

module.exports = KindOfBike;
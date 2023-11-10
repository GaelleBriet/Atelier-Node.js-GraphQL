const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../database/connexion")();

const STATUS = ['AVAILABLE', 'RENT', 'REPAIR', 'LOST'];

class Bike extends Model {}

Bike.init({
  number: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: STATUS,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: "Bike",
  tableName: "bike",
  timestamps: true,
  underscored: true,
});

module.exports = Bike;
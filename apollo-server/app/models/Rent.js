const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../database/connexion")();

class Rent extends Model {
}

Rent.init({
  client_firstname: {
    type: DataTypes.TEXT
  },
  client_lastname: {
    type: DataTypes.TEXT
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  return_date_planned: {
    type: DataTypes.DATE,
    allowNull: false
  },
  return_date: {
    type: DataTypes.DATE
  },
  // Les champs virtuels sont des champs qui n'existent pas dans la base de données.
  // Ils sont utiles pour manipuler des données de manière plus simple et/ou structurée.
  client: {
    type: DataTypes.VIRTUAL,
    get() {
      return {
        firstname: this.get("client_firstname"),
        lastname: this.get("client_lastname")
      };
    },
    set(client) {
      client.firstname && this.set("client_firstname", client.firstname);
      client.lastname && this.set("client_lastname", client.lastname);
    }
  },
  schedule: {
    type: DataTypes.VIRTUAL,
    get() {
      return {
        start: this.get("start_date"),
        due: this.get("return_date_planned"),
        returned: this.get("return_date")
      };
    },
    set(schedule) {
      schedule.start && this.set("start_date", schedule.start);
      schedule.due && this.set("return_date_planned", schedule.due);
      schedule.returned && this.set("return_date", schedule.returned);
    }
  }
}, {
  sequelize,
  modelName: "Rent",
  tableName: "rent",
  timestamps: true,
  underscored: true,
});

module.exports = Rent;
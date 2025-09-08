const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Slot = sequelize.define("Slot", {
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  available: {
    type: DataTypes.INTEGER,
    defaultValue: 4,
  },
});

module.exports = Slot;

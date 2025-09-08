const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Meeting = sequelize.define("Meeting", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    defaultValue: "https://meet.google.com/xyz-dummy-link",
  }
});

module.exports = Meeting;

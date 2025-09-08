const sequelize = require("../utils/db");
const Slot = require("./Slot");
const Meeting = require("./Meeting");

// Each meeting belongs to a Slot
Slot.hasMany(Meeting, { foreignKey: "slotId" });
Meeting.belongsTo(Slot, { foreignKey: "slotId" });

module.exports = { sequelize, Slot, Meeting };

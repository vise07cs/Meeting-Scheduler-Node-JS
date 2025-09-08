const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize, Slot } = require("./models");
const meetingRoutes = require("./routes/meetingRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api", meetingRoutes);

sequelize.sync({ force: true }).then(async () => {
  console.log("Database synced");

  const times = ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
  for (let t of times) {
    await Slot.create({ time: t, available: 4 });
  }
});

app.listen(3009, () => console.log("Server running on http://localhost:3009"));

const express = require("express");
const router = express.Router();
const controller = require("../controller/meetingController");

router.get("/slots", controller.getSlots );
router.post("/book", controller.bookMeeting);
router.delete("/cancel/:id", controller.cancelMeeting);

module.exports = router;

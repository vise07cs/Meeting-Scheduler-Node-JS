const { Slot, Meeting } = require("../models");

getSlots = async (req, res) => {
  const slots = await Slot.findAll({ include: Meeting });
  res.json(slots);
};

// Book  meet
bookMeeting = async (req, res) => {
  const { name, email, slotId } = req.body;

  const slot = await Slot.findByPk(slotId);
  if (!slot || slot.available <= 0) {
    return res.status(400).json({ error: "No slots available" });
  }

  const meeting = await Meeting.create({
    name,
    email,
    time: slot.time,
    slotId: slot.id,
  });

  slot.available -= 1;
  await slot.save();

  res.json(meeting);
};

// Cancel meet
cancelMeeting = async (req, res) => {
  const { id } = req.params;

  const meeting = await Meeting.findByPk(id);
  if (!meeting) return res.status(404).json({ error: "Meeting not found" });

  const slot = await Slot.findByPk(meeting.slotId);
  slot.available += 1;
  await slot.save();

  await meeting.destroy();

  res.json({ message: "Meeting cancelled successfully" });
};
 module.exports = { getSlots, bookMeeting, cancelMeeting };
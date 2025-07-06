const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "open" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [{ text: String, createdAt: Date }]
});

module.exports = mongoose.model("Bug", bugSchema);
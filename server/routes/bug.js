const express = require("express");
const Bug = require("../models/Bug");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/create", auth, async (req, res) => {
  const bug = new Bug({ ...req.body, createdBy: req.user.id });
  await bug.save();
  res.send("Bug created");
});

router.get("/mybugs", auth, async (req, res) => {
  const bugs = await Bug.find({ assignedTo: req.user.id }).populate("createdBy");
  res.json(bugs);
});

router.patch("/:id/status", auth, async (req, res) => {
  await Bug.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.send("Status updated");
});

module.exports = router;
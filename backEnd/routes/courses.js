const express = require("express");
const router = express.Router();
const Course = require("../models/coursesModel.js");

// Get all courses
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

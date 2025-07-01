const Course = require("../models/coursesModel");
const mongoose = require("mongoose");

//sign up in a course
const signupCourse = async (req, res) => {
  const { name, lastName, phone } = req.body;

  try {
    const course = await Course.create({ name, lastName, phone });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupCourse };

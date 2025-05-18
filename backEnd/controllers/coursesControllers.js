const Course = require("../models/CoursesModel");
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

//GET all the courses
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });
  res.status(200).json(courses);
};

//GET a single course(search)
const getCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Course" });
  }
  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json({ error: "No Such Course" });
  }

  res.status(200).json(course);
};

module.exports = { signupCourse, getCourses, getCourse };

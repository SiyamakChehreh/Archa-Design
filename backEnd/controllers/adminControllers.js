const Course = require("../models/coursesModel");
const Student = require("../models/studentModel");

//Create new course
const createCourse = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCourse = await Course.create({ title, description });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Get all the enrolled students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({}).populate("courseId userId");
    res.status(201).json(students);
  } catch (error) {
    res.status(400).json({ error: "failed to fetch enrolled students" });
  }
};

//Get all students for a specific course
const getStudentsByCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const students = await Student.find({ courseId }).populate("userId");
    res.status(201).json(students);
  } catch (error) {
    res
      .status(400)
      .json({ error: "failed to fetch enrolled students for this course" });
  }
};

module.exports = { createCourse, getAllStudents, getStudentsByCourse };

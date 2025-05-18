const express = require("express");

const {
  signupCourse,
  getCourses,
  getCourse,
} = require("../controllers/coursesControllers");

const router = express.Router();

//getting all the available educational courses
router.get("/", getCourses);

//getting a specific course by it's name
router.get("/:name", getCourse);

//sign up in a course
router.post("/:id", signupCourse);

module.exports = router;

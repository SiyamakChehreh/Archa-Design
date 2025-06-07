const express = require("express");
const {
  getCoursesForUser,
  deleteCoursesForUser,
} = require("../controllers/studentController");
const requireAuth = require("../middleware/authMiddleware"); // if you're protecting the route

const router = express.Router();

// GET enrolled courses for a logged-in user
router.get("/my-courses", requireAuth, getCoursesForUser);
router.delete("/my-courses/:courseId", requireAuth, deleteCoursesForUser);

module.exports = router;

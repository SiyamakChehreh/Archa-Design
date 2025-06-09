const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllStudents,
  getStudentsByCourse,
} = require("../controllers/adminControllers");
const requireAdminAuth = require("../middleware/adminAuthMiddleware");
const authenticateUser = require("../middleware/authMiddleware");

// All routes here should use requireAdminAuth middleware
router.post("/courses", authenticateUser, requireAdminAuth, createCourse);
router.get("/students", authenticateUser, requireAdminAuth, getAllStudents);
router.get(
  "/students/:courseId",
  authenticateUser,
  requireAdminAuth,
  getStudentsByCourse
);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllStudents,
  getStudentsByCourse,
  deleteCourse,
} = require("../controllers/adminControllers");
const requireAdminAuth = require("../middleware/adminAuthMiddleware");
const authenticateUser = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// All routes here should use requireAdminAuth middleware
router.post(
  "/courses",
  authenticateUser,
  requireAdminAuth,
  upload.single("image"),
  createCourse
);
router.delete(
  "/courses/:courseId",
  authenticateUser,
  requireAdminAuth,
  deleteCourse
);
router.get("/students", authenticateUser, requireAdminAuth, getAllStudents);
router.get(
  "/students/:courseId",
  authenticateUser,
  requireAdminAuth,
  getStudentsByCourse
);

module.exports = router;

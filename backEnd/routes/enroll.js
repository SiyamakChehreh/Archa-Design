const express = require("express");
const router = express.Router();
const Course = require("../models/coursesModel");
const Student = require("../models/studentModel");
const authenticateUser = require("../middleware/authMiddleware.js");

// Enroll a student in a course
router.post("/courses/:courseId/enroll", authenticateUser, async (req, res) => {
  const { courseId } = req.params;
  const { name, lastName, phoneNumber } = req.body;

  if (!name || !lastName || !phoneNumber) {
    return res.status(400).json({ message: "تمام فیلدها الزامی است" });
  }

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "دوره یافت نشد" });
    }

    const newStudent = new Student({
      name,
      lastName,
      phoneNumber,
      courseId,
    });

    await newStudent.save();

    res.status(201).json({ message: "ثبت‌نام موفقیت‌آمیز بود" });
  } catch (error) {
    // Handle duplicate enrollment error (E11000 duplicate key)
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "شما قبلاً در این دوره ثبت‌نام کرده‌اید" });
    }

    console.error("Enrollment error:", error);
    res.status(500).json({ message: "مشکلی پیش آمد" });
  }
});

module.exports = router;

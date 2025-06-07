const Student = require("../models/studentModel");

// Get all courses a user is enrolled in
const getCoursesForUser = async (req, res) => {
  const userId = req.user._id; // assuming you're using auth middleware to attach the logged-in user to req

  try {
    const enrollments = await Student.find({ userId })
      .populate("courseId")
      .exec();

    res.status(200).json(enrollments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch courses for user" });
  }
};

const deleteCoursesForUser = async (req, res) => {
  const { courseId } = req.params;

  try {
    const deleteCourse = await Student.findOneAndDelete({
      userId: req.user._id,
      courseId,
    });

    if (!deleteCourse) {
      res.status(404).json({ error: "Enrollment not found" });
    }
    res.status(200).json(deleteCourse);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "failed to delete the course" });
  }
};

module.exports = { getCoursesForUser, deleteCoursesForUser };

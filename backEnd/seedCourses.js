const Course = require("./models/coursesModel.js");

const seedCourses = async () => {
  const existingCourses = await Course.find();
  if (existingCourses.length > 0) {
    console.log("Courses already exist, skipping seeding.");
    return;
  }

  await Course.insertMany([
    {
      title: "3D Max",
    },
    {
      title: "AutoCad",
    },
    {
      title: "SketchUp",
    },
  ]);

  console.log("Courses seeded successfully.");
};

module.exports = seedCourses;

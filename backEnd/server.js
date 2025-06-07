require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const coursesRoutes = require("./routes/courses");
const userRoutes = require("./routes/user");
const enrollRoutes = require("./routes/enroll");
const studentRoutes = require("./routes/student");
const seedCourses = require("./seedCourses");

const app = express();

app.use(express.json());
app.use("/api", coursesRoutes);
app.use("/api/user", userRoutes);
app.use("/api", enrollRoutes);
app.use("/api/students", studentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to DB");
    await seedCourses();
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 4000!!!");
    });
  })
  .catch((error) => {
    console.log(error);
  });

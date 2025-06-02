require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const coursesRoutes = require("./routes/courses");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use("/api/courses", coursesRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 4000!!!");
    });
  })
  .catch((error) => {
    console.log(error);
  });

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("./models/userModel");
require("dotenv").config(); // if you use dotenv for env variables

async function createAdmin() {
  const email = "admin.archadesign@gmail.com";
  const plainPassword = "ArchaDesign?4376!";

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(plainPassword, salt);

  await User.create({ email, password: hash, role: "admin" });
  console.log("Admin user created");

  mongoose.disconnect(); // close DB connection after done
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    createAdmin();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

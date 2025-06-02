const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  students: {
    name: { type: String, required: true },
  },
});

module.exports = mongoose.model("course", coursesSchema);

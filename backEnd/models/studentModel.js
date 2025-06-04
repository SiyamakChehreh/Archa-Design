const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^(\+98|0)?9\d{9}$/, "فرمت شماره تماس صحیح نیست"],
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate enrollment (same phone number in same course)
studentSchema.index({ phoneNumber: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model("Student", studentSchema);

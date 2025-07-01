const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authMiddleware");

// GET /api/me — get current logged in user's info
router.get("/me", authenticateUser, (req, res) => {
  res.json({
    _id: req.user._id,
    role: req.user.role,
  });
});

module.exports = router;

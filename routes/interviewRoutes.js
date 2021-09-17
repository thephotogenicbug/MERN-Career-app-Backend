const express = require("express");
const {
  getInterviews,
  createInterview,
} = require("../controllers/interviewController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getInterviews);
router.route("/create").post(protect, createInterview);

module.exports = router;

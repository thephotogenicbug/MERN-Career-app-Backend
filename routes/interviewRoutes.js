const express = require("express");
const {
  getInterviews,
  createInterview,
  getInterviewsadmin,
  UpdateInterview,
  getInterviewById,
} = require("../controllers/interviewController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getInterviews);
router.route("/getall").get(getInterviewsadmin);
router.route("/:id").put(UpdateInterview);
router.route("/get/:id").get(getInterviewById);
router.route("/create").post(protect, createInterview);

module.exports = router;

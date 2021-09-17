const asyncHandler = require("express-async-handler");
const Interview = require("../models/interviewModel");

const getInterviews = asyncHandler(async (req, res) => {
  const interviews = await Interview.find({ user: req.user._id });
  res.json(interviews);
});

const createInterview = asyncHandler(async (req, res) => {
  const { name, mobile } = req.body;

  if (!name || !mobile) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const interview = new Interview({ user: req.user._id, name, mobile });

    const createdInterview = await interview.save();

    res.status(201).json(createdInterview);
  }
});

module.exports = { getInterviews, createInterview };

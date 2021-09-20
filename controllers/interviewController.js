const asyncHandler = require("express-async-handler");
const Interview = require("../models/interviewModel");

const getInterviews = asyncHandler(async (req, res) => {
  const interviews = await Interview.find({ user: req.user._id });
  res.json(interviews);
});

const getInterviewsadmin = asyncHandler(async (req, res) => {
  const interviewsadmin = await Interview.find();
  res.json(interviewsadmin);
});

const UpdateInterview = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const interview = await Interview.findById(req.params.id);

  if (interview) {
    interview.name = name;

    const updatedInterview = await interview.save();
    res.json(updatedInterview);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const getInterviewById = asyncHandler(async (req,res) =>{
   
  const get = await Interview.findById({_id: req.params.id})

  res.json(get)
})
const createInterview = asyncHandler(async (req, res) => {
  const {
    name,
    dob,
    gender,
    marital,
    mobile,
    email,
    sslc,
    puc,
    grad,
    postgrad,
    workone,
    worktwo,
    workthree,
    achone,
    achtwo,
    achthree,
    address,
  } = req.body;

  if (
    !name ||
    !dob ||
    !gender ||
    !marital ||
    !mobile ||
    !email ||
    !sslc ||
    !puc ||
    !grad ||
    !postgrad ||
    !workone ||
    !worktwo ||
    !workthree ||
    !achone ||
    !achtwo ||
    !achthree ||
    !address
  ) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const interview = new Interview({
      user: req.user._id,
      name,
      dob,
      gender,
      marital,
      mobile,
      email,
      sslc,
      puc,
      grad,
      postgrad,
      workone,
      worktwo,
      workthree,
      achone,
      achtwo,
      achthree,
      address,
    });

    const createdInterview = await interview.save();

    res.status(201).json(createdInterview);
  }
});

module.exports = {
  getInterviews,
  createInterview,
  getInterviewsadmin,
  UpdateInterview,
  getInterviewById
};

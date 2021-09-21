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
  const { name, email, dob, gender, marital, mobile, sslc, puc, grad, postgrad, workone, worktwo, workthree, achone, achtwo, achthree, address, position, report } = req.body;

  const interview = await Interview.findById(req.params.id);

  if (interview) {
    interview.name = name;
    interview.email = email;
    interview.dob = dob;
    interview.gender = gender;
    interview.marital = marital;
    interview.mobile = mobile;
    interview.sslc = sslc;
    interview.puc = puc;
    interview.grad = grad;
    interview.postgrad = postgrad;
    interview.workone = workone;
    interview.worktwo = worktwo;
    interview.workthree = workthree;
    interview.achone = achone;
    interview.achtwo = achtwo;
    interview.achthree = achthree;
    interview.address = address;
    interview.position = position;
    interview.report = report;

    const updatedInterview = await interview.save();
    res.json(updatedInterview);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const getInterviewById = asyncHandler(async (req, res) => {
  const get = await Interview.findById({ _id: req.params.id });

  res.json(get);
});
const createInterview = asyncHandler(async (req, res) => {
  const {
    position,
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
    report,
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
    !address ||
    !report
  ) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const interview = new Interview({
      user: req.user._id,
      position,
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
      report,
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
  getInterviewById,
};

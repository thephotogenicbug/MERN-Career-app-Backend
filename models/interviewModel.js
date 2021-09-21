const mongoose = require("mongoose");

const interviewSchema = mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    marital: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    sslc: {
      type: String,
    },
    puc: {
      type: String,
    },
    grad: {
      type: String,
    },
    postgrad: {
      type: String,
    },
    workone: {
      type: String,
    },
    worktwo: {
      type: String,
    },
    workthree: {
      type: String,
    },
    achone: {
      type: String,
    },
    achtwo: {
      type: String,
    },
    achthree: {
      type: String,
    },
    address: {
      type: String,
    },
    report: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;

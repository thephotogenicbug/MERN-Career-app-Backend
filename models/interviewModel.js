const mongoose = require("mongoose");

const interviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
     gender:{
       type:String,
       required:true,
     },
     marital:{
       type:String,
       required:true,
     },
     mobile:{
       type:String,
       required:true,
     },
     email:{
       type:String,
       required:true,
     },
     sslc:{
       type:String,
       required:true,
     },
     puc:{
       type:String,
       required:true,
     },
     grad:{
       type:String,
       required:true,
     },
     postgrad:{
       type:String,
       required:true,
     },
     workone:{
       type:String,
       required:true,
     },
     worktwo:{
       type:String,
       required:true,
     },
     workthree:{
       type:String,
       required:true,
     },
     achone:{
       type:String,
       required:true,
     },
     achtwo:{
       type:String,
       required:true,
     },
     achthree:{
       type:String,
       required:true,
     },
     address:{
       type:String,
       required:true,
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

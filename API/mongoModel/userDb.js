const mongoose=require("mongoose");

const userDB = mongoose.Schema({
    FirstName: {type: String,},
    LastName: {type: String,},
    Phone: {type: Number},
    Email: {type: String}

  });
  
  const UserDB = mongoose.model("userDB", userDB);
  module.exports = UserDB;
  
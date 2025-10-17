const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "username must be  at least 3 characters long"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [12, "username must be at least 12 characters long"],
  },

  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [8, "Password must be  at least 8 characters long"],
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;

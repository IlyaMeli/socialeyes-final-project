const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 40,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  themePicture: {
    type: String,
    default: "",
  },
  friends: {
    type: Array,
    default: [],
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);

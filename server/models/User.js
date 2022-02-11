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
    unique: true,
    max: 40,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profilePicture: {
    type: String,
    default:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
  themePicture: {
    type: String,
    default:
      "https://www.teahub.io/photos/full/49-491298_gnome-wallpapers-4k.jpg",
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

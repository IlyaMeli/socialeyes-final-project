const { updateOne } = require("../models/User");
const User = require("../models/User");

//update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).send("user has been updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//get user
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { password, ...rest } = user._doc;
    res.status(200).send(rest);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//add friends
const addFriend = async (req, res) => {
  const { id } = req.params;
  const { friendId } = req.body;
  if (id !== friendId) {
    try {
      const user = await User.findById(id);
      const friendUser = await User.findById(friendId);
      if (!user.friends.includes(friendId)) {
        await user.updateOne({ $push: { friends: friendId } });
        await friendUser.updateOne({ $push: { friends: id } });
        res.status(200).send(friendUser);
      } else {
        res.status(400).send("you are allready friends");
      }
    } catch (error) {}
  } else {
    res.status(400).send("you cannot friend yourself");
  }
};

//remove friend
const removeFriend = async (req, res) => {
  const { id } = req.params;
  const { friendId } = req.body;
  if (id !== friendId) {
    try {
      const user = await User.findById(id);
      const friendUser = await User.findById(friendId);
      if (user.friends.includes(friendId)) {
        await user.updateOne({ $pull: { friends: friendId } });
        await friendUser.updateOne({ $pull: { friends: id } });
        res.status(200).send("user has been unfriended");
      } else {
        res.status(400).send("you are allready unfriend this friend");
      }
    } catch (error) {}
  } else {
    res.status(400).send("you cannot unfriend yourself");
  }
};

module.exports = { updateUser, getUser, addFriend, removeFriend };

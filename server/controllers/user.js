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
    const {password, ...rest} = user._doc;
    res.status(200).send(rest);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { updateUser ,getUser };

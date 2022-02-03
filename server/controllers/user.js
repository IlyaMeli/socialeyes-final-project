const User = require("../models/User");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    //password generating
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //new registerd user
    const user = new User({
      username,
      email,
      hashedPassword,
    });
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { addUser };

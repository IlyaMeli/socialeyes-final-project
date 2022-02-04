const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    //password generating
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //new registerd user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && res.status(400).send("user not found");
    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).send("wrong password or email");

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { registerUser, loginUser };

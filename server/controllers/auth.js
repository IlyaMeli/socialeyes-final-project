const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    //password length check
    if (password.length < 5) {
      return res.status(400).send({ msg: "Password too short" });
    }
    //checking if email is already registered
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res
        .status(400)
        .send({ msg: "An account with that email already exists" });
    }
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
    // res.status(200).send(user);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      user,
      token,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && res.status(400).send("User not found");
    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).send("Invalid Credentials");
    // creating out json web token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      user,
      token,
    });

    // res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = { registerUser, loginUser };

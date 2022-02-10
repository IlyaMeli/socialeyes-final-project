const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res
        .status(401)
        .json({ msg: "No auth token,authorization denied" });
    }

    //grabbing JWT token passing our secret and checking it
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res
        .status(401)
        .json({ msg: "Token verification failed, Authentication failed" });
    }
    req.user = verified.id;
    next();
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = auth;

const router = require("express").Router();
const { addUser } = require("../controllers/user");

router.post("/register", addUser);

module.exports = router;

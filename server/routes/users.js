const router = require("express").Router();
const {
  updateUser,
  getUser,
  addFriend,
  removeFriend,
} = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("USER ROUTE!");
});

module.exports = router;

router.put("/:id", updateUser);
router.get("/:id", getUser);
router.put("/:id/addfriend", addFriend);
router.put("/:id/unfriend", removeFriend);

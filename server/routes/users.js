const router = require("express").Router();
const {
  updateUser,
  getUser,
  addFriend,
  removeFriend,
  getAllUsers,
} = require("../controllers/user");

// router.get("/", (req, res) => {
//   res.send("USER ROUTE!");
// });

module.exports = router;

router.put("/:id", updateUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);
router.put("/:id/addfriend", addFriend);
router.put("/:id/unfriend", removeFriend);

const router = require("express").Router();
const { updateUser ,getUser} = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("USER ROUTE!");
});

module.exports = router;

router.put("/:id", updateUser);
router.get("/:id", getUser);

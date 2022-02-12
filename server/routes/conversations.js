const router = require("express").Router();
const {
  createNewConversation,
  getUserConversation,
} = require("../controllers/conversations");

router.post("/", createNewConversation);
router.get("/:userId", getUserConversation);

module.exports = router;

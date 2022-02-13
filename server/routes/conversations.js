const router = require("express").Router();
const {
  createNewConversation,
  getUserConversation,
  getUserConversationfrom2Users,
} = require("../controllers/conversations");

router.post("/", createNewConversation);
router.get("/:userId", getUserConversation);
router.get("/find/:firstUserId/:secondUserId", getUserConversationfrom2Users);

module.exports = router;

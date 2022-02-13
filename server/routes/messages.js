const router = require("express").Router();
const { addMessage, getMessage } = require("../controllers/messages");

router.post("/", addMessage);
router.get("/:conversationId", getMessage);

module.exports = router;

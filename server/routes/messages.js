const router = require("express").Router();
const { addMessage } = require("../controllers/messages");

router.post("/", addMessage);

module.exports = router;

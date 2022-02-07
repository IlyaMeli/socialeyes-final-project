const router = require("express").Router();
const { createPost, updatePosts } = require("../controllers/posts");

router.post("/", createPost);
router.put("/:id", updatePosts);

module.exports = router;

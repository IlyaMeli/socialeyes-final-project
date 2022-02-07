const router = require("express").Router();
const {
  createPost,
  updatePosts,
  deletePost,
  likePost,
  getPost,
  getAllPosts,
} = require("../controllers/posts");

router.get("/:id", getPost);
router.get("/", getAllPosts);
router.post("/", createPost);
router.put("/:id", updatePosts);
router.put("/:id/like", likePost);
router.delete("/:id", deletePost);

module.exports = router;

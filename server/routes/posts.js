const router = require("express").Router();
const {
  createPost,
  updatePosts,
  deletePost,
  likePost,
  getPost,
  getAllPosts,
} = require("../controllers/posts");
const upload = require("../middleware/upload");

router.get("/:id", getPost);
router.get("/", getAllPosts);
router.post("/", upload.single("image"), createPost);
router.put("/:id", updatePosts);
router.put("/:id/like", likePost);
router.delete("/:id", deletePost);

module.exports = router;

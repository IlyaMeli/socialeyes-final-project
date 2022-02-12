const Post = require("../models/Post");

//create
const createPost = async (req, res) => {
  console.log(req.file);
  const { username, content, likes, userId, profilePicture } = req.body;
  let newPost;
  if (!req.file) {
    newPost = new Post({
      profilePicture,
      username,
      content,
      likes,
      userId,
    });
  } else {
    const { path: image } = req.file;
    newPost = new Post({
      profilePicture,
      username,
      content,
      likes,
      userId,
      image: image.replace("\\", "/"),
    });
  }
  //  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};
//update
const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).send("the post has been updated");
    } else {
      res.status(404).send("you can update only your post");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).send("the post has been deleted");
    } else {
      res.status(404).send("you can delete only your post");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//like
const likePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).send("the post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).send("the post has been disliked");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//get a post
const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createPost,
  updatePosts,
  deletePost,
  likePost,
  getPost,
  getAllPosts,
};

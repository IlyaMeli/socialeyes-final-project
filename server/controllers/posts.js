const Post = require("../models/Post");

//create
const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
  } catch (error) {
    res.status(400).send(err.message);
  }
};
//update
const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post.userid === req.body.userid) {
      await post.updateOne({ $set: req.body });
      res.status(200).send("the post has been updated");
    } else {
      res.status(404).send("you can update only your post");
    }
  } catch (error) {
    res.status(400).send(err.message);
  }
};
//delete
//like
//get a post
//get all posts

module.exports = { createPost, updatePosts };

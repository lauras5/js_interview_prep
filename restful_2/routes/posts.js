const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); // return all posts
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT NEW POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET SPECIFIC POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE SPECIFIC POST
router.delete("/:id", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.id }); // _id provided by mongo
    res.send("Successfully removed post: " + req.params.id);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE POSTS
router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// export
module.exports = router;

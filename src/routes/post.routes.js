const express = require("express");
const router = express.Router();

// GET ALL POSTS (with search)
router.get("/", (req, res) => {
  const { query } = req.query;

  res.json({
    message: "Posts fetched",
    search: query || null,
    posts: []
  });
});

// GET SINGLE POST
router.get("/:id", (req, res) => {
  res.json({
    message: "Single post",
    id: req.params.id
  });
});

// CREATE POST
router.post("/", (req, res) => {
  const { title, content } = req.body;

  res.json({
    message: "Post created",
    post: { title, content }
  });
});

// UPDATE POST
router.put("/:id", (req, res) => {
  res.json({
    message: "Post updated",
    id: req.params.id
  });
});

// DELETE POST
router.delete("/:id", (req, res) => {
  res.json({
    message: "Post deleted",
    id: req.params.id
  });
});

module.exports = router;
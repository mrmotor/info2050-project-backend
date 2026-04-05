const express = require("express");
const router = express.Router();

// ADD COMMENT
router.post("/", (req, res) => {
  const { postId, comment } = req.body;

  res.json({
    message: "Comment added",
    postId,
    comment
  });
});

// GET COMMENTS FOR POST
router.get("/:postId", (req, res) => {
  res.json({
    message: "Comments fetched",
    postId: req.params.postId,
    comments: []
  });
});

// DELETE COMMENT
router.delete("/:id", (req, res) => {
  res.json({
    message: "Comment deleted",
    id: req.params.id
  });
});

module.exports = router;
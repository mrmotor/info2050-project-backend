const express = require("express");
const router = express.Router();

// GET ALL USERS
router.get("/users", (req, res) => {
  res.json({
    message: "All users",
    users: []
  });
});

// DELETE USER
router.delete("/user/:id", (req, res) => {
  res.json({
    message: "User deleted",
    id: req.params.id
  });
});

module.exports = router;
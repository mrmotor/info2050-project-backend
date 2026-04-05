const express = require("express");
const router = express.Router();

// FILE UPLOAD
router.post("/profile", (req, res) => {
  res.json({
    message: "File uploaded successfully"
  });
});

module.exports = router;
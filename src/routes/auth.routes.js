const express = require("express");
const router = express.Router();

//  FOR LOGIN
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    res.json({
        message: "Login route working",
        user: { email }
    });
});

// FOR REGISTER
router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    res.json({
        message: "Register route working",
        user: { name, email }
    });
});

module.exports = router;
// router creation
const express = require("express");
const { loginUser, signupUser } = require("../controllers/userControllers");
const router = express.Router();

// login Page
router.post("/login", loginUser);

// Signup Page
router.post("/signup", signupUser);

module.exports = router;

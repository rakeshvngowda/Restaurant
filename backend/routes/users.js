// router creation
const express = require("express");
const { loginPage, signupPage } = require("../controllers/userControllers");
const router = express.Router();

// login Page
router.post("/login", loginPage);

// Signup Page
router.post("/signup", signupPage);

module.exports = router;

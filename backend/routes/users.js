// router creation
const express = require("express");
const {
  loginUser,
  signupUser,
  listUsers,
} = require("../controllers/userControllers");
const router = express.Router();

// login Page
router.post("/login", loginUser);

// Signup Page
router.post("/signup", signupUser);

// list all users
router.get("/", listUsers);

module.exports = router;

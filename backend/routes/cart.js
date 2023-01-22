const {
  getCartDishes,
  getCartDish,
  postCartDish,
  patchCartDish,
  deleteCartDish,
} = require("../controllers/cartControllers");

const express = require("express");

const router = express.Router();

// get all dishes
router.get("/", getCartDishes);

// get single dish
router.get("/:id", getCartDish);

// create new dish
router.post("/", postCartDish);

// update dish
router.patch("/:id", patchCartDish);

// delete dish
router.delete("/:id", deleteCartDish);

module.exports = router;
